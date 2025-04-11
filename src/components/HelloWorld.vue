<script setup lang="ts">
import { useRouter } from 'vue-router'


const router = useRouter()

function switchRouter(name: string) {
  router.push({ name })
}
</script>

<template>

  <div class="card">
    <button type="button" @click="switchRouter('Home')">switch to Home</button>

    <button type="button" @click="switchRouter('About')">switch to About</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
