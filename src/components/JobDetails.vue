<template>
  <div v-if="job">
    <h1>Job Details</h1>
    <h3>{{ job.title }}</h3>
    <p>The job id is {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      job: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
