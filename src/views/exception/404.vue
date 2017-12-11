<template>
  <app-page name="exception-404">
    <div class="flex-1">
      <div class="exception flex flex-ai-center">
        <div class="img-block flex flex-ai-center flex-jc-center">
          <img src="https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg" height="360px">
        </div>
        <div class="content ml-4">
          <h1>404</h1>
          <p class="font-20 text-secondary">抱歉，您访问的页面不存在</p>
          <i-button class="mt-2" type="primary" @click.native="$router.push('/')">返回首页</i-button>
        </div>
      </div>
    </div>
  </app-page>
</template>
<style lang="stylus" src="./exception.styl"></style>
