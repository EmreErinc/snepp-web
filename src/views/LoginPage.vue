<template>
  <v-app>
    <v-content>
      <login></login>
    </v-content>
  </v-app>
</template>

<script>
import Login from "@/components/Login.vue";

export default {
  name: "loginPage",
  components: {
    Login
  },
};
</script>