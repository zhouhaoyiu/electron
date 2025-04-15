<template>
  <div class="prompt-generator">
    <h1>大模型提示词生成器</h1>
    <div class="generator-container">
      <div class="input-section">
        <h2>输入信息</h2>
        <div class="form-group">
          <label>角色设定</label>
          <textarea
            v-model="role"
            placeholder="请输入AI助手的角色设定"
          ></textarea>
        </div>
        <div class="form-group">
          <label>任务描述</label>
          <textarea
            v-model="task"
            placeholder="请输入需要完成的具体任务"
          ></textarea>
        </div>
        <div class="form-group">
          <label>输出格式</label>
          <textarea
            v-model="format"
            placeholder="请输入期望的输出格式"
          ></textarea>
        </div>
        <div class="form-group">
          <label>约束条件</label>
          <textarea
            v-model="constraints"
            placeholder="请输入约束条件"
          ></textarea>
        </div>
        <button @click="generatePrompt" class="generate-btn">生成提示词</button>
      </div>

      <div class="output-section">
        <h2>生成的提示词</h2>
        <div class="prompt-output">
          <pre>{{ generatedPrompt }}</pre>
          <button @click="copyPrompt" class="copy-btn">复制提示词</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const role = ref("");
const task = ref("");
const format = ref("");
const constraints = ref("");
const generatedPrompt = ref("");

const generatePrompt = () => {
  generatedPrompt.value = `你是一个${role.value}。你的任务是${task.value}。

输出格式要求：
${format.value}

约束条件：
${constraints.value}`;
};

const copyPrompt = async () => {
  try {
    await navigator.clipboard.writeText(generatedPrompt.value);
    alert("提示词已复制到剪贴板！");
  } catch (err) {
    console.error("复制失败:", err);
  }
};
</script>

<style scoped lang="scss">
.prompt-generator {
  width: 100%;
  height: 100vh;
  overflow: auto;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  .generator-container {
    display: flex;
    justify-content: center;
    width: 100%;
    .input-section,
    .output-section {
      width: 48%;
      background-color: #fff;
      margin: 20px;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .form-group {
      margin-bottom: 15px;
      label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
      }
      textarea {
        width: 90%;
        height: 80px;
        padding: 10px;
        border-radius: 4px;
        border: 1px solid #ccc;
        resize: none;
      }
    }
    .generate-btn,
    .copy-btn {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background-color: #0056b3;
      }
    }
    .prompt-output {
      pre {
        background-color: #f0f0f0;
        padding: 10px;
        border-radius: 4px;
        white-space: pre-wrap; /* 保持换行 */
        word-wrap: break-word; /* 自动换行 */
      }
    }
  }
}

</style>
