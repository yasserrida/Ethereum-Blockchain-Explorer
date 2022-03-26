<template>
  <main>
    <button @click="incrementt">Click Me</button>{{ evenOrOdd }}
    <!-- <TheWelcome /> -->
  </main>
</template>

<script lang="ts">
// import TheWelcome from "@/components/TheWelcome.vue";
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

interface State {
  count: number;
  text: string;
}

export default defineComponent({
  props: [],
  components: {
    // TheWelcome: TheWelcome,
  },
  data: (): State => {
    return { count: 0, text: "" };
  },
  computed: mapGetters(["evenOrOdd"]),
  methods: {
    ...mapActions(["increment"]),
    incrementt() {
      this.increment();
      // this.count++;
    },
  },
});
</script>