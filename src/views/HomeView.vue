<template>
  <main class="py-10 bg-gray-100 h-screen"></main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

interface State {
  count: number;
  text: string;
}

export default defineComponent({
  components: {},
  data: (): State => {
    return { count: 0, text: "" };
  },
  computed: mapGetters([]),
  methods: {
    ...mapActions([]),
  },
});
</script>