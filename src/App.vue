<template>
	<v-app>
		<!-- <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
		</v-content>-->
		<div id="app">
			<router-view></router-view>
		</div>
	</v-app>
</template>

<script>
	export default {
		name: "App",
		components: {
		},
		data: () => ({
			//
		})
	};
</script>

<style>
#app{
  background-color: #eee!important;
}
</style>