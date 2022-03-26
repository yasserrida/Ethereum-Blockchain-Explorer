<template>
  <Header />
  <main class="bg-white">
    <RouterView />
  </main>
  <Footer />
</template>

<script script setup lang = "ts">
import { RouterView } from "vue-router";
import Header from "@/layouts/partials/Header.vue";
import Footer from "@/layouts/partials/Footer.vue";
</script>
