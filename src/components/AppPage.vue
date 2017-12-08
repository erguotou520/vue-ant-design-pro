<template>
  <div class="app-page flex-1 flex flex-column" :class="[name?`page-${name}`:'']">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'app-page',
  props: {
    name: String
  }
}
</script>
