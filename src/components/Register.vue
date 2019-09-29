<template>
    <div id="grey lighten-3">
		<v-form id="register" @submit.prevent="save">
			<v-container grid-list-md text-xs-center>
				<v-layout row wrap class="pt-5" justify-center>
					<v-flex xs12 sm10 md8 lg10>
                        <v-text-field
							label="Name"
							v-model="name"
							counter
							maxlength="25"
							outlined
							clearable
							clear-icon="mdi mdi-close"
						></v-text-field>

                        <v-text-field
							label="Last Name"
							v-model="lastname"
							counter
							maxlength="25"
							outlined
							clearable
							clear-icon="mdi mdi-close"
						></v-text-field>

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

						<v-btn @click="register">REGISTER</v-btn>
					</v-flex>
				</v-layout>
				<v-layout row wrap class="pt-5" justify-center>
					<v-card-text>
						You have an account.
						<router-link :to="login">Login</router-link>
					</v-card-text>
				</v-layout>
				<v-divider></v-divider>
			</v-container>
		</v-form>
	</div>
</template>

<script>
import Worker from "../worker/Worker.js";

export default {
  name: "register",
  data: () => ({
    show: false,
    name: "",
    lastname: "",
    email: "",
    password: ""
  }),
  computed: {
    login() {
      return "/login";
    }
  },
  methods: {
    register() {
      var request = {
        name: this.name,
        lastname: this.lastname,
        email: this.email,
        password: this.password
      };
      Worker.methods.register(request);
    }
  }
};
</script>

<style>
</style>
