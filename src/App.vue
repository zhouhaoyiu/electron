<script setup lang="ts">
import leftBar from './components/leftBar.vue';
</script>

<template>
  <div class="app">
    <leftBar />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.app {
  width: 100%;
  display: flex;
  height: 100vh;
  background-color: #f0f0f0;
  .left-bar {
    width: 200px;
    background-color: #fff;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }
  .router-view {
    flex-grow: 1;
    padding: 20px;
    background-color: #fff;
    overflow-y: auto;
  }
}

</style>
