<template>
	<div>
		<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
		<v-navigation-drawer :width="60" v-model="drawer" fixed>
			<v-list nav dense>
				<v-list-item v-for="item in menu" :key="item.title" :to="item.href" link>
					<v-list-item-action :key="item.href">
						<v-icon>{{item.icon}}</v-icon>
					</v-list-item-action>
					<v-list-item-title>{{item.title}}</v-list-item-title>
				</v-list-item>
			</v-list>
			<v-divider></v-divider>
		</v-navigation-drawer>
	</div>
</template>

<script>
	export default {
		name: "navigation",
		data() {
			return {
				drawer: null,
				menu: [
					{
						href: "/",
						title: "Home",
						icon: "mdi-home"
					},
					{
						href: "/add",
						title: "Add Snepp",
						icon: "mdi-plus-box-multiple-outline"
					},
					{
						href: "/list",
						title: "Snepp List",
						icon: "mdi-file-document-box-multiple-outline"
					},
					{
						href: "/team",
						title: "Team",
						icon: "mdi-account-multiple"
					},
					{
						href: "/login",
						title: "Login",
						icon: "mdi-login-variant"
					},
					{
						href: "/register",
						title: "Register",
						icon: "mdi-login"
					}
				],
				//routes,
				collapsed: true
				// themes: ["", "white-theme"],
				// selectedTheme: ""
			};
		},
		methods: {
			// onCollapse(collapsed) {
			//   //console.log(collapsed);
			//   this.collapsed = collapsed;
			// },
			// onItemClick(event, item) {
			//   //return 'item.href';
			//   //console.log(item.href);
			//   // console.log(event)
			//   // console.log(item)
			// }
		}
	};
</script>

<style>

</style>
