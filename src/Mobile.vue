<template>
  <div id="app">
    <button v-if="animating" class="skip-btn" type="button" @click="finishAll">Skip animation →</button>
    <button v-else class="skip-btn replay-btn" type="button" @click="replay">↻ Replay animation</button>
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml" :settled="!animating"></ResumeEditor>
    <ThankEditor ref="thankEditor" :markdown="currentThankMarkdown" :enableHtml="enableHtml"></ThankEditor>
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
        fullStyle: profile.mobileStyles,
        fullMarkdown: profile.resumeMarkdown,
        thanksMarkdown: profile.thanksMarkdown,
        currentStyle: '',
        currentMarkdown: '',
        currentThankMarkdown: '',
        enableHtml: false,
        animating: true,
        cancelled: false,
        styleFull: profile.mobileStyles.join('')
      }
    },
    created() {
      // Finished page immediately for reduced motion or a repeat visit.
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
      finishAll() {
        this.cancelled = true
        this.currentStyle = this.styleFull
        this.currentMarkdown = this.fullMarkdown
        this.currentThankMarkdown = this.thanksMarkdown
        this.enableHtml = true
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
        await this.typeStyleUpToMarker('/* Start writing resume */')
        await this.showHtml()
        await this.typeStyleRemaining()
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
          this.currentMarkdown = this.fullMarkdown
          this.enableHtml = true
          this.$nextTick(() => {
            if (this.$refs.resumeEditor) this.$refs.resumeEditor.goTop()
            resolve()
          })
        })
      },
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
              // No auto-scroll while typing: yanking the page to the bottom on every tick
              // moved the resume the reader was looking at out of view. The panel sits in
              // normal flow right below the resume, so the reader reaches it by scrolling.
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
    min-height: 100vh; position: relative;
  }

  html {
    min-height: 100vh;
  }
  *{
    box-sizing: border-box;
  }

  .skip-btn {
    position: fixed;
    top: .6em;
    right: .75em;
    z-index: 20;
    padding: .4em .8em;
    font: inherit;
    font-size: .8rem;
    color: #d7efe8;
    background: rgba(0, 32, 32, .85);
    border: 1px solid rgba(215, 239, 232, .45);
    border-radius: 999px;
    cursor: pointer;
  }

  .replay-btn {
    opacity: .6;
  }
</style>