<template>
  <div class="app-footer px-2">
    <div class="links text-center">
      <a v-for="(link,index) in links" :key="index" class="text-secondary"
        :class="{'mr-4': index!==links.length-1}" :href="link.href||link.link">{{link.text}}</a>
    </div>
    <div class="copyright mt-1 text-secondary text-center">
      Copyright 2017 &copy; erguotou525@gmail.com
    </div>
  </div>
</template>
<script>
export default {
  props: {
    links: Array
  }
}
</script>
<style lang="stylus">
.app-footer
  position absolute
  bottom 0
  left 0
  width 100%
  margin 48px auto 24px
</style>
