<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

function switchRouter(name: string) {
  router.push({ name });
}
</script>

<template>
  <div class="left-bar">
    <div class="logo" @click="switchRouter('Home')">
        logo
    </div>
    <div class="menu">
      <ul>
        <li @click="switchRouter('Home')">首页</li>
        <li @click="switchRouter('PromptGenerator')">提示词生成器</li>
        <!-- 裂隙自动识别 -->
        <li @click="switchRouter('GapAutoRecognition')">裂隙自动识别</li>
        <li @click="switchRouter('About')">关于</li>       
      </ul>
    </div>
    <div class="user-info">
      <span class="username">Username</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.left-bar {
  width: 200px;
  height: 100vh;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  .menu {
    width: 100%;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        padding: 10px;
        cursor: pointer;
        &:hover {
          background-color: #e0e0e0;
        }
      }
    }
  }
  .user-info{
    margin-top: auto;
    width: 100%;
    text-align: center;
    .username {
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>
