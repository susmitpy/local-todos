<template>
  <v-container fluid>
    <TodosGrid />
  </v-container>
</template>

<script>
import TodosGrid from "@/components/TodosGrid";

export default {
  name: "Home",
  components: {
    TodosGrid,
  },
  created() {
    this.$store.dispatch("getTodos");
  },
};
</script>

<style>
</style>
