<template>
  <div class="grey lighten-3">
    <v-progress-linear indeterminate color="teal" v-if="isLoading"></v-progress-linear>
	  <!-- <cube loading="isLoading"></cube>     -->
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex v-for="(snepp,index) in sneppList" :key="`${index}`" xs11 sm6 md5 lg4>
          <v-card dark color="blue-grey darken-2">
            <v-card-title primary-title>
              <detail-page :snepp="snepp"></detail-page>
            </v-card-title>
            <v-card-actions style="text-align: center">
              <v-btn v-on:click="copy(index)" outlined large>{{snepp.snippet}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-divider light></v-divider>
    </v-container>
  </div>
</template>

<script>
import Worker from "../worker/Worker.js";
import DetailPage from "../views/DetailPage.vue";

export default {
  name: "list",
  components: {
    DetailPage
  },
  data() {
    return {
      isLoading: true,
      sneppList: []
    };
  },
  methods: {
    copy(index) {
      var buttons = document.querySelectorAll("button");
      var dummy = document.createElement("input");
      document.body.appendChild(dummy);
      dummy.value = buttons[2 * (index + 1)].textContent;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
    }
  },
  created() {
    Worker.methods.getMySneppList().then(res => {
      this.sneppList = res;
      this.isLoading = false;
    });
  }
};
</script>

<style>
.v-btn {
  text-transform: none;
}
.theme--dark.v-btn {
  color: #fff;
  max-width: 100%;
  white-space: normal;
  text-overflow: clip;
  padding: 0px 10px 0px 10px;
  height: auto;
  border-radius: 4px;
}
.theme--dark.v-sheet {
  border-radius: 4px;
}
.theme--light.application {
  width: 50px;
  background-color: #43a047;
}
.v-btn--block {
  height: auto;
}
.v-btn__content {
  white-space: pre-line;
  text-align: start;
  padding: 10px 6px 10px 0;
  display: table;
  text-transform: none;
}
</style>
