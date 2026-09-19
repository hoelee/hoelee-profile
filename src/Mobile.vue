<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
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
        styleFull: profile.mobileStyles.join('')
      }
    },
    created() {
      this.makeResume()
    },
    methods: {
      makeResume: async function () {
        await this.typeStyleUpToMarker('/* Start writing resume */')
        await this.showHtml()
        await this.typeStyleRemaining()
        await this.progressivelyShowThanks()
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
            if (this.currentThankMarkdown.length < length) {
              this.currentThankMarkdown = this.thanksMarkdown.substring(0, Math.min(length, this.currentThankMarkdown.length + cpt))
              this.$nextTick(() => {
                // Keep the newly revealed thanks section in view as it grows.
                window.scrollTo(0, document.body.scrollHeight)
              })
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
</style>