<template>
  <v-app>
    <v-content>
      <register></register>
    </v-content>
  </v-app>
</template>

<script>
import Register from "@/components/Register.vue";

export default {
  name: "registerPage",
  components: {
    Register
  },
};
</script>