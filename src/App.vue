<template>
  <div id="app">
    <button v-if="animating" class="skip-btn" type="button" @click="finishAll">Skip animation →</button>
    <button v-else class="skip-btn replay-btn" type="button" @click="replay">↻ Replay animation</button>
    <div id="content">
      <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
      <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml" :settled="!animating"></ResumeEditor>
    </div>
    <div id="foot">
      <ThankEditor ref="thankEditor" :markdown="currentThankMarkdown" :enableHtml="enableHtml"></ThankEditor>
    </div>
  </div>
</template>

<script>
  import profile from './config/profile.js'
  import StyleEditor from './components/StyleEditor.vue'
  import ResumeEditor from './components/ResumeEditor.vue'
  import ThankEditor from './components/ThankEditor.vue'
  import './assets/reset.css'

  export default {
    name: 'app',
    components: { StyleEditor, ResumeEditor, ThankEditor },
    data() {
      return {
        interval: profile.typingSpeed,
        charsPerTick: profile.charsPerTick,
        fullStyle: profile.desktopStyles,
        fullMarkdown: profile.resumeMarkdown,
        thanksMarkdown: profile.thanksMarkdown,
        currentStyle: '',
        currentMarkdown: '',
        currentThankMarkdown: '',
        enableHtml: false,
        htmlShown: false,
        thanksShown: false,
        animating: true,
        cancelled: false,
        styleFull: profile.desktopStyles.join('')
      }
    },
    created() {
      // Show the finished page immediately for anyone who asked for less motion
      // or who has already sat through the animation once.
      const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
      let seen = false
      try { seen = window.localStorage.getItem('hoelee_cv_seen') === '1' } catch (e) { seen = false }
      if (reduce || seen) {
        this.finishAll()
        return
      }
      this.makeResume().then(() => {
        try { window.localStorage.setItem('hoelee_cv_seen', '1') } catch (e) { /* private mode */ }
      })
    },
    methods: {
      // Jump straight to the finished state: used by the skip button, reduced
      // motion, and repeat visitors.
      finishAll() {
        this.cancelled = true
        this.currentStyle = this.styleFull
        this.currentMarkdown = this.fullMarkdown
        this.currentThankMarkdown = this.thanksMarkdown
        this.enableHtml = true
        this.htmlShown = true
        this.thanksShown = true
        this.animating = false
      },
      // Replay is the only way back to the animation once it has been seen.
      replay() {
        this.cancelled = false
        this.currentStyle = ''
        this.currentMarkdown = ''
        this.currentThankMarkdown = ''
        this.enableHtml = false
        this.htmlShown = false
        this.thanksShown = false
        this.animating = true
        try { window.localStorage.removeItem('hoelee_cv_seen') } catch (e) { /* ignore */ }
        this.makeResume().then(() => {
          try { window.localStorage.setItem('hoelee_cv_seen', '1') } catch (e) { /* ignore */ }
        })
      },
      makeResume: async function () {
        // Both editors appear (background + borders), then the CSS types in the
        // left pane. During this the right pane is NOT blank: the resume editor
        // renders its content as it goes, so there is never a long empty wait.
        await this.typeStyleUpToMarker('/* Start writing resume */')

        // Render the resume right after the marker, before the remaining CSS.
        await this.showHtml()

        // Type the rest of the stylesheet, then show the bottom panel once it is
        // fully styled so it never sits half-drawn for a long time.
        await this.typeStyleRemaining()
        await this.showThanks()
        await this.progressivelyShowThanks()
        this.animating = false
      },
      typeStyleUpToMarker(marker) {
        return new Promise((resolve) => {
          const markerIdx = this.styleFull.indexOf(marker)
          const target = markerIdx >= 0 ? markerIdx + marker.length : this.styleFull.length
          this.progressivelyShowStylePartial(target, resolve)
        })
      },
      typeStyleRemaining() {
        return new Promise((resolve) => {
          this.progressivelyShowStyleAll(resolve)
        })
      },
      showHtml() {
        return new Promise((resolve) => {
          // The resume renders in full now (no more slow typing) — populate the
          // full markdown so the HTML render has content.
          this.currentMarkdown = this.fullMarkdown
          this.enableHtml = true
          this.$nextTick(() => {
            if (this.$refs.resumeEditor) this.$refs.resumeEditor.goTop()
            this.htmlShown = true
            resolve()
          })
        })
      },
      showThanks() {
        return new Promise((resolve) => {
          this.thanksShown = true
          this.$nextTick(() => {
            if (this.$refs.thankEditor) this.$refs.thankEditor.goTop()
            resolve()
          })
        })
      },
      // Type the entire style array from whatever is already typed, writing
      // charsPerTick characters per tick.
      progressivelyShowStyleAll(resolve) {
        const total = this.styleFull.length
        const step = this.increment(total)
        const tick = () => {
          if (this.cancelled) return resolve()
          if (this.currentStyle.length < total) {
            step()
            setTimeout(tick, this.interval)
          } else {
            resolve()
          }
        }
        tick()
      },
      progressivelyShowStylePartial(target, resolve) {
        const step = this.increment(target)
        const tick = () => {
          if (this.cancelled) return resolve()
          if (this.currentStyle.length < target) {
            step()
            setTimeout(tick, this.interval)
          } else {
            resolve()
          }
        }
        tick()
      },
      // Returns a function that writes `charsPerTick` characters per call and
      // keeps the code pane scrolled to the newly typed line.
      increment(total) {
        const cpt = this.charsPerTick
        return () => {
          const cur = this.currentStyle.length
          if (cur >= total) return
          const end = Math.min(total, cur + cpt)
          const slice = this.styleFull.substring(cur, end)
          this.currentStyle += slice
          if (slice.includes('\n') && this.$refs.styleEditor) {
            this.$nextTick(() => this.$refs.styleEditor.goBottom())
          }
        }
      },
      progressivelyShowThanks() {
        return new Promise((resolve) => {
          const length = this.thanksMarkdown.length
          const interval = this.interval
          const cpt = this.charsPerTick
          const showThanks = () => {
            if (this.cancelled) return resolve()
            if (this.currentThankMarkdown.length < length) {
              this.currentThankMarkdown = this.thanksMarkdown.substring(0, Math.min(length, this.currentThankMarkdown.length + cpt))
              const prevChar = this.currentThankMarkdown[this.currentThankMarkdown.length - 2]
              if (prevChar === '\n' && this.$refs.thankEditor) {
                this.$nextTick(() => this.$refs.thankEditor.goBottom())
              }
              setTimeout(showThanks, interval)
            } else {
              resolve()
            }
          }
          showThanks()
        })
      }
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .skip-btn {
    position: fixed;
    top: .75em;
    right: 1em;
    z-index: 20;
    padding: .45em .9em;
    font: inherit;
    font-size: .85rem;
    color: #d7efe8;
    background: rgba(0, 32, 32, .85);
    border: 1px solid rgba(215, 239, 232, .45);
    border-radius: 999px;
    cursor: pointer;
  }

  .replay-btn {
    opacity: .6;
  }

  .skip-btn:hover,
  .skip-btn:focus-visible {
    background: rgba(0, 48, 48, .95);
    border-color: #d7efe8;
  }

  * {
    box-sizing: border-box;
  }
</style>