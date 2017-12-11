<template>
  <app-page name="dashboard-monitor">
    <i-row class="mb-3" :gutter="24">
      <i-col :md="18" :sm="24">
        <i-card dis-hover :bordered="false">
          <span slot="title">活动实时交易情况</span>
          <div style="height:540px"></div>
        </i-card>
      </i-col>
      <i-col class="md-mt-3" :md="6" :sm="24">
        <i-row type="flex" :gutter="24">
          <i-col :md="24" :sm="12">
            <i-card dis-hover :bordered="false">
              <span slot="title">活动情况预测</span>
              <div style="height:220px"></div>
            </i-card>
          </i-col>
          <i-col :md="24" :sm="12">
            <i-card class="mt-3 md-mt-0" dis-hover :bordered="false">
              <span slot="title">券核效率</span>
              <div style="height:220px"></div>
            </i-card>
          </i-col>
        </i-row>
      </i-col>
    </i-row>
    <i-row :gutter="24">
      <i-col :md="12" :sm="24">
        <i-card dis-hover :bordered="false">
          <span slot="title">各品类占比</span>
          <div style="height:209px"></div>
        </i-card>
      </i-col>
      <i-col class="md-mt-3" :md="12" :sm="24">
        <i-row :gutter="24" :md="12" :sm="24">
          <i-col span="12">
            <i-card dis-hover :bordered="false">
              <span slot="title">热门搜索</span>
              <div style="height:209px"></div>
            </i-card>
          </i-col>
          <i-col span="12">
            <i-card dis-hover :bordered="false">
              <span slot="title">资源剩余</span>
              <div style="height:209px"></div>
            </i-card>
          </i-col>
        </i-row>
      </i-col>
    </i-row>
  </app-page>
</template>
<script>
export default {

}
</script>
