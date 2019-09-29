<template>
	<div>
		<v-row justify="center">
			<v-btn color="headline" dark text @click="dialog = true">{{snepp.name}}</v-btn>
			<v-dialog
				v-model="dialog"
				fullscreen
				hide-overlay
				transition="dialog-bottom-transition"
				scrollable
			>
				<v-card tile>
					<v-toolbar flat dark color="blue-grey darken-2">
						<v-btn icon dark @click="dialog = false">
							<v-icon>mdi-close</v-icon>
						</v-btn>
						<v-toolbar-title>Edit Snepp</v-toolbar-title>
						<div class="flex-grow-1"></div>
						<v-toolbar-items>
							<v-btn dark text v-on:click="deleteSnepp()" @click="dialog = false">Delete</v-btn>
						</v-toolbar-items>
					</v-toolbar>
					<v-card-text>
						<v-form id="editSnepp" @submit.prevent="update">
							<v-container grid-list-md text-xs-center>
								<v-layout row wrap class="pt-5" justify-center>
									<v-flex xs12 sm10 md8 lg10>
										<v-text-field
											label="Title"
											v-model="snepp.name"
											counter
											maxlength="25"
											outlined
											clearable
											clear-icon="mdi mdi-close"
										></v-text-field>

										<v-text-field
											label="Description"
											v-model="snepp.description"
											counter
											maxlength="25"
											outlined
											clearable
											clear-icon="mdi mdi-close"
										></v-text-field>

										<v-switch v-model="typeSwitch" :label="typeSwitch ? 'TERMINAL_CODE' : 'CODE_PIECE'"></v-switch>

										<v-text-field
											label="Snipp"
											v-model="snepp.snippet"
											counter
											maxlength="40"
											outlined
											clearable
											clear-icon="mdi mdi-close"
											v-show="typeSwitch"
										></v-text-field>

										<v-textarea
											label="Code Snippet"
											v-model="snepp.snippet"
											counter
											maxlength="120"
											outlined
											full-width
											multi-line
											clearable
											clear-icon="mdi mdi-close"
											v-show="!typeSwitch"
										></v-textarea>
										<v-btn @click="update">Update</v-btn>
									</v-flex>
								</v-layout>
								<v-divider></v-divider>
							</v-container>
						</v-form>
					</v-card-text>

					<div style="flex: 1 1 auto;"></div>
				</v-card>
			</v-dialog>
		</v-row>
	</div>
</template>

<script>
import Worker from "../worker/Worker.js";
export default {
  name: "detailPage",
  props: {
    snepp: { type: Object }
  },
  data() {
    return {
      typeSwitch: true, // snepp.type == "TERMINAL_CODE" ? true : false,
      dialog: false
    };
  },
  methods: {
    update: function() {
      var edited = {
        name: this.snepp.name,
        description: this.snepp.description,
        language: "language",
        snippet: this.snepp.snippet,
        type: this.typeSwitch ? "TERMINAL_CODE" : "CODE_PIECE"
      };
      Worker.methods.updateSnepp(this.snepp.id, edited);
      this.dialog = false;
      //this.$router.push("/list");
    },
    deleteSnepp: function() {
      Worker.methods.deleteSnepp(this.snepp.id);
    }
  }
};
</script>

<style>
.v-toolbar {
  max-height: 64px;
}
</style>
