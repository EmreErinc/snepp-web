<template>
    <div id="grey lighten-3">
		<v-form id="addSnepp" @submit.prevent="save">
			<v-container grid-list-md text-xs-center>
				<v-layout row wrap class="pt-5" justify-center>
					<v-flex xs12 sm10 md8 lg10>
						<v-text-field
							label="Title"
							v-model="name"
							counter
							maxlength="25"
							outlined
							clearable
							clear-icon="mdi mdi-close"
						></v-text-field>

						<v-text-field
							label="Description"
							v-model="description"
							counter
							maxlength="25"
							outlined
							clearable
							clear-icon="mdi mdi-close"
						></v-text-field>

						<!-- <v-select
							label="Language"
							:items="items"
							v-model="language"
							outlined
							debounce-search
							return-object
							@keyup.enter="addValue"
							append-icon="mdi mdi-arrow-down-drop-circle-outlined"
						>
						</v-select> -->

						<!-- <v-autocomplete
							v-model="language"
							:items="items"
							chips
							label="Language"
							full-width
							hide-details
							hide-no-data
							hide-selected
							single-line
							outlined
							append-icon="mdi mdi-arrow-down-drop-circle-outlined"
						></v-autocomplete> -->

						<v-switch 
							v-model="switch1" 
							:label="switch1 ? 'TERMINAL_CODE' : 'CODE_PIECE'"
						></v-switch>

						<v-text-field
							label="Snipp"
							v-model="snippet"
							counter
							maxlength="40"
							outlined
							clearable
							clear-icon="mdi mdi-close"
							:disabled=!switch1
							v-show=switch1
						></v-text-field>

						<v-textarea
							label="Code Snippet"
							v-model="snippet"
							counter
							maxlength="120"
							outlined
							full-width
							multi-line
							clearable
							clear-icon="mdi mdi-close"
							:disabled=switch1
							v-show=!switch1
						></v-textarea>
						<v-btn @click="save">Save</v-btn>
					</v-flex>
				</v-layout>
				<v-divider></v-divider>
			</v-container>
		</v-form>
	</div>
</template>

<script>
//import { mapGetters } from "vuex";
import Worker from "../worker/Worker.js";

export default {
  name: "addSnepp",
  /*validations: {
        name: { required, maxLength: maxLength(25) },
        description: { required, maxLength: maxLength(25) },
        snippet: { required,maxLength: maxLength(120) }
    },*/
  data: () => ({
    switch1: true,
    name: "",
    description: "",
    language: "",
    snippet: "",
    items: ["Java", "Javascript", "PHP", "SQL"]
  }),
  methods: {
    addValue: function(e) {
      this.colors.push(e.target.value);
    },
    save: function() {
      var snepp = {
        name: this.name,
        description: this.description,
        language: "language",
        snippet: this.snippet,
        type: "TERMINAL_CODE"
      };
      Worker.methods.addSnepp(snepp);

      this.$router.push("/list");
    }
  }
};
</script>

<style>
</style>
