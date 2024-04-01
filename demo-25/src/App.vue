<template>
  <div>{{num}}</div>
  <button @click="num++">+</button>
  <div>{{moment().format('YYYY-MM-DD HH:mm:ss')}}</div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import moment from 'moment'
  const num = ref < number > (123)
</script>

<style lang="less">
  @red: red;

  html,
  body {
    background: @red;
  }
</style>