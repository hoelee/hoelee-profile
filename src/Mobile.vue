<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
  import profile from './config/profile.js'
  import StyleEditor from './components/StyleEditor.vue'
  import ResumeEditor from './components/ResumeEditor.vue'
  import './assets/reset.css'

  export default {
    name: 'app',
    components: { StyleEditor, ResumeEditor },
    data() {
      return {
        interval: profile.typingSpeed,
        fullStyle: profile.mobileStyles,
        fullMarkdown: profile.resumeMarkdown,
        currentStyle: '',
        currentMarkdown: '',
        enableHtml: false
      }
    },
    created() {
      this.makeResume()
    },
    methods: {
      makeResume: async function () {
        await this.progressivelyShowStyle(0)
        await this.progressivelyShowResume()
        await this.progressivelyShowStyle(1)
        await this.showHtml()
        await this.progressivelyShowStyle(1)
      },
      showHtml() {
        return new Promise((resolve) => {
          this.enableHtml = true
          this.$nextTick(() => this.$refs.resumeEditor.goTop())
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
