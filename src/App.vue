<template>
  <div id="app">
    <div id="content">
      <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
      <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
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
        fullStyle: profile.desktopStyles,
        fullMarkdown: profile.resumeMarkdown,
        thanksMarkdown: profile.thanksMarkdown,
        currentStyle: '',
        currentMarkdown: '',
        currentThankMarkdown: '',
        enableHtml: false
      }
    },
    created() {
      this.makeResume()
    },
    methods: {
      makeResume: async function () {
        // Type every stage of the stylesheet in order. The original code called
        // progressivelyShowStyle(1) three times between steps, but that call is
        // idempotent once the cumulative-length guard is satisfied, so stages 2
        // and 3 were never typed and the whole .thankEditor stylesheet (padding,
        // link colours, box layout) was missing from the injected <style> tag.
        for (let n = 0; n < this.fullStyle.length; n++) {
          await this.progressivelyShowStyle(n)
        }
        // Type the resume body while it is still plain text, then swap to
        // rendered HTML. The swap must happen AFTER both text passes, otherwise
        // `enableHtml` flips early and both panels render empty markdown.
        await this.progressivelyShowResume()
        await this.progressivelyShowThanks()
        await this.showHtml()
      },
      showHtml() {
        return new Promise((resolve) => {
          this.enableHtml = true
          this.$nextTick(() => {
            if (this.$refs.resumeEditor) this.$refs.resumeEditor.goTop()
            if (this.$refs.thankEditor) this.$refs.thankEditor.goTop()
          })
          resolve()
        })
      },
      progressivelyShowStyle(n) {
        return new Promise((resolve) => {
          const interval = this.interval
          const showStyle = (() => {
            const style = this.fullStyle[n]
            if (!style) return
            const length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
            const prefixLength = length - style.length
            if (this.currentStyle.length < length) {
              const l = this.currentStyle.length - prefixLength
              this.currentStyle += style.substring(l, l + 1) || ' '
              if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                this.$nextTick(() => this.$refs.styleEditor.goBottom())
              }
              setTimeout(showStyle, interval)
            } else {
              resolve()
            }
          })
          showStyle()
        })
      },
      progressivelyShowResume() {
        return new Promise((resolve) => {
          const length = this.fullMarkdown.length
          const interval = this.interval
          const showResume = () => {
            if (this.currentMarkdown.length < length) {
              this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1)
              const prevChar = this.currentMarkdown[this.currentMarkdown.length - 2]
              if (prevChar === '\n' && this.$refs.resumeEditor) {
                this.$nextTick(() => this.$refs.resumeEditor.goBottom())
              }
              setTimeout(showResume, interval)
            } else {
              resolve()
            }
          }
          showResume()
        })
      },
      progressivelyShowThanks() {
        return new Promise((resolve) => {
          const length = this.thanksMarkdown.length
          const interval = this.interval
          const showThanks = () => {
            if (this.currentThankMarkdown.length < length) {
              this.currentThankMarkdown = this.thanksMarkdown.substring(0, this.currentThankMarkdown.length + 1)
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

  * {
    box-sizing: border-box;
  }
</style>
