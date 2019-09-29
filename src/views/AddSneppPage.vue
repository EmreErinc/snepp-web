<template>
  <div style="display: flex">
    <navigation></navigation>
    <v-content>
      <add></add>
    </v-content>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Add from "@/components/Add.vue";

export default {
  name: "addSneppPage",
  components: {
    Navigation,
    Add
  }
};
</script>
