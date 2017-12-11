<template>
  <app-page name="dashboard-analysis">
    <i-row :gutter="24">
      <i-col v-for="n in 4" :key="n" :md="6" :xs="12" class="mb-3">
        <i-card dis-hover :bordered="false" style="height: 182px;">
          卡片{{n}}
        </i-card>
      </i-col>
    </i-row>
    <i-card class="mb-3" dis-hover :bordered="false">
      <i-tabs>
        <i-tab-pane label="销售额">
          <div style="height:328px">销售额卡片</div>
        </i-tab-pane>
        <i-tab-pane label="访问量">
          <div style="height:328px">访问量卡片</div>
        </i-tab-pane>
        <div slot="extra" class="filter">
          <a href @click.prevent="setFilterToToday" class="text-secondary">今日</a>
          <a href @click.prevent="setFilterToWeek" class="text-secondary ml-2">本周</a>
          <a href @click.prevent="setFilterToMonth" class="text-secondary ml-2">本月</a>
          <a href @click.prevent="setFilterToYear" class="text-secondary ml-2">今年</a>
          <i-date-picker class="ml-2" v-model="filterDate" format="yyyy-MM-dd"
            placement="bottom-end" type="daterange"
            placeholder="请选择时间间隔" :editable="false"></i-date-picker>
        </div>
      </i-tabs>
    </i-card>
    <i-row :gutter="24">
      <i-col :md="12" :sm="24">
        <i-card dis-hover :bordered="false">
          <span slot="title">线上热门搜索</span>
          <div style="height:400px"></div>
          <i-page class="text-right" size="small" :total="120"></i-page>
        </i-card>
      </i-col>
      <i-col class="md-mt-3" :md="12" :sm="24">
        <i-card dis-hover :bordered="false">
          <div slot="title" class="flex flex-jc-between">
            <span>销售额类别占比</span>
            <i-radio-group v-model="channelFilter" type="button">
              <i-radio label="all">全部</i-radio>
              <i-radio label="online">线上</i-radio>
              <i-radio label="offline">线下</i-radio>
            </i-radio-group>
          </div>
          <div style="height:406px"></div>
        </i-card>
      </i-col>
    </i-row>
  </app-page>
</template>
<script>
export default {
  data () {
    return {
      filterDate: [],
      channelFilter: 'all'
    }
  },
  methods: {
    edgeDateRange (from, to) {
      from.setHours(0)
      from.setMinutes(0)
      from.setSeconds(0)
      to.setHours(23)
      from.setMinutes(59)
      from.setSeconds(59)
      return [from, to]
    },
    setFilterToToday () {
      this.filterDate = this.edgeDateRange(new Date(), new Date())
    },
    setFilterToWeek () {
      const from = new Date()
      const to = new Date()
      const day = from.getDay()
      // 周一到周日
      from.setDate(from.getDate() - day + 1)
      to.setDate(to.getDate() + 7 - day)
      this.filterDate = this.edgeDateRange(from, to)
    },
    setFilterToMonth () {
      const from = new Date()
      const to = new Date()
      // 1号到31号
      from.setDate(1)
      to.setMonth(to.getMonth() + 1)
      to.setDate(0)
      this.filterDate = this.edgeDateRange(from, to)
    },
    setFilterToYear () {
      const from = new Date()
      const to = new Date()
      // 周一到周日
      from.setMonth(0)
      from.setDate(1)
      to.setFullYear(to.getFullYear() + 1)
      to.setMonth(0)
      to.setDate(1)
      to.setDate(0)
      this.filterDate = this.edgeDateRange(from, to)
    }
  },
  created () {
    this.setFilterToToday()
  }
}
</script>
<style lang="stylus">

</style>
