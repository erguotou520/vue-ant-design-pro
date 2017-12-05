<template>
  <app-page name="dashboard-analysis">
    <i-row type="flex">
      <i-col v-for="n in 4" :key="n" span="6" class="bg-white px-2 py-2">
        卡片{{n+1}}
      </i-col>
    </i-row>
  </app-page>
</template>
<script>
export default {
  name: '',
  props: {},
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style lang="stylus">

</style>
