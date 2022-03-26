<template>
  <RouterView />
</template>

<script lang="ts">
import { RouterView } from "vue-router";
import { defineComponent } from "vue";
import { useHead } from "@vueuse/head";
export default defineComponent({
  components: {
    RouterView,
  },
  setup() {
    useHead({
      title: "Eth Blockchain Explorer",
      meta: [
        {
          name: "description",
          content:
            "BlockChain Explorer, Search, API and Analytics Platform for Ethereum, a decentralized smart contracts platform.",
        },
        {
          name: "author",
          content: "Yasser RIDA",
        },
      ],
    });
  },
});
</script>
<style>
  @import "@/assets/base.css";
</style>
