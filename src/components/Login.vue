<template>
	<div id="grey lighten-3">
		<v-form id="login" @submit.prevent="save">
			<v-container grid-list-md text-xs-center>
				<v-layout row wrap class="pt-5" justify-center>
					<v-flex xs12 sm10 md8 lg10>
						<v-text-field
							label="E-Mail"
							v-model="email"
							counter
							maxlength="25"
							outlined
							clearable
							clear-icon="mdi mdi-close"
						></v-text-field>

						<v-text-field
							label="Password"
							v-model="password"
							:append-icon="show ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
							:type="show ? 'text' : 'password'"
							counter
							maxlength="25"
							outlined
							@click:append="show = !show"
						></v-text-field>

						<v-btn @click="login">LOGIN</v-btn>
					</v-flex>
				</v-layout>
				<v-layout row wrap class="pt-5" justify-center>
					<v-card-text>
						Don't you have an account.
						<router-link :to="register">Register</router-link>
					</v-card-text>
				</v-layout>
				<v-divider></v-divider>
				<v-snackbar
					v-model="snackbar"
					color="red darken-2"
					:timeout="2000"
					:top="true"
				>
					{{ text }}
					<v-btn dark text @click="snackbar = false">Close</v-btn>
				</v-snackbar>
			</v-container>
		</v-form>
	</div>
</template>

<script>
	import Worker from "../worker/Worker.js";

	export default {
		name: "login",
		data: () => ({
			show: false,
			email: "",
			password: "",
			snackbar: false,
			text: "Wrong mail or password"
		}),
		computed: {
			register() {
				return "/register";
			}
		},
		methods: {
			// ...mapActions(["setId"]),
			login() {
				var request = {
					email: this.email,
					password: this.password
				};
				Worker.methods.login(request).then(res=>{
					if (res.status == 500){
						this.snackbar = true
					}
					else {
						this.$router.push('list') 
					}
					
				});
			}
		}
	};
</script>

<style>
</style>
