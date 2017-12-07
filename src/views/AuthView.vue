<template>
  <div class="app-auth flex flex-column flex-ai-center">
    <h1>
      <a class="flex flex-row flex-ai-center text-default font-28" href="/">
        <img class="mr-2" src="../assets/images/logo.png">
        Vue Ant Design Pro
      </a>
    </h1>
    <h3 class="text-secondary mt-1 weight-400">Vue Ant Design Pro是完全模仿Ant Design Pro的项目</h3>
    <router-view></router-view>
    <global-footer></global-footer>
  </div>
</template>
<script>
import GlobalFooter from '@/components/GlobalFooter'
export default {
  components: { GlobalFooter },
  data () {
    return {
      script: null
    }
  },
  methods: {

  },
  created () {
    const script = document.createElement('script')
    script.src = '//cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.min.js'
    script.type = 'text/javascript'
    script.setAttribute('zIndex', 0)
    document.body.appendChild(script)
    this.script = script
  },
  beforeDestroy () {
    const l = document.getElementsByTagName('script')
    const canvasNest = document.getElementById('c_n' + l.length)
    if (canvasNest) {
      canvasNest.remove()
    }
    if (this.script) {
      this.script.remove()
    }
  }
}
</script>
<style lang="stylus">
.app-auth
  position relative
  width 100%
  min-height 100%
  padding 110px 0
  z-index 2
  h1
    img
      width 42px
      height auto
</style>
