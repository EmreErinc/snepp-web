<template>
  <div style="display: flex">
    <navigation></navigation>
		<v-content>
			<list></list>
		</v-content>
  </div>
</template>

<script>
	import Navigation from "@/components/Navigation.vue";
	import List from "@/components/List.vue";

	export default {
		name: "mySneppListPage",
		components: {
			Navigation,
			List
		}
	};
</script>

<style scoped>
.theme--light.v-btn.v-btn--icon {
    color: rgba(0,0,0,.54);
    padding-left: 30px;
}
</style>
