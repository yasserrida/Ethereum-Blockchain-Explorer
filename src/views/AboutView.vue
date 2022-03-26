<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="incrementt">Click Me</button>{{ data.count }}
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const data = reactive({ count: 0 });

function incrementt() {
  data.count++;
}
</script>
