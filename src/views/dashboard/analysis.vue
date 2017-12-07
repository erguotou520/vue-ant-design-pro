<template>
  <app-page name="dashboard-analysis">
    <i-row :gutter="24">
      <i-col v-for="n in 4" :key="n" :md="{span:6}" :xs="{span:12}" class="mb-3">
        <div class="card flex flex-jc-center flex-ai-center bg-white px-2 py-2" style="height: 182px;">
          卡片{{n}}
        </div>
      </i-col>
    </i-row>
    <div class="card bg-white px-2 py-2 mb-3">
      123
    </div>
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
