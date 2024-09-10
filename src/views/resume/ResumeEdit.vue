<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col col-md-6">
				<h3>Edit Resume Link</h3>
				<hr />
				<form @submit.stop.prevent="editResumeLink">
					<div class="form-group">
						<label for="web-link">Resume Link</label>
						<input
							type="text"
							class="form-control"
							id="web-link"
							v-model="resume.url"
							placeholder="Enter Resume Link"
						/>
					</div>
					<button type="submit" class="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "PortfoliosEdit",
	data() {
		return {
			resume: {
				url: "",
			},
		};
	},

  mounted() {
    this.axios
    .get(
      `${process.env.VUE_APP_AWESOME_NODE_API}/resumes/${this.$route.params.id}`,
    )
    .then(res => {
      this.resume = res.data.data;
    })
    .catch(err => {
      console.log(err);
    });
  },

	methods: {
		editResumeLink() {
			this.axios
				.post(
					`${process.env.VUE_APP_AWESOME_NODE_API}/resumes/edit/${this.$route.params.id}`,
					this.resume
				)
				.then(() => {
					alert("Resume Successfully edited.");
          this.$router.push(`/dashboard/resume/`);
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
};
</script>

<style scoped lang="scss"></style>
