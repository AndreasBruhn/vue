<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current" />
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject
          :project="project"
          @delete="deleteHandler"
          @complete="completeHandler"
        />
      </div>
    </div>
  </div>
</template>

<script>
// Imports
import SingleProject from "../components/SingleProduct.vue";
import FilterNav from "../components/FilterNav.vue";
// @ is an alias to /src
export default {
  name: "Home",
  components: { SingleProject, FilterNav },
  data() {
    return {
      projects: [],
      current: "all",
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    deleteHandler(id) {
      this.projects = this.projects.filter((project) => {
        return project.id !== id;
      });
    },
    completeHandler(id) {
      let localProject = this.projects.find((project) => {
        return project.id === id;
      });
      localProject.complete = !localProject.complete;
    },
  },
  computed: {
    filteredProjects() {
      if (this.current === "completed") {
        return this.projects.filter((project) => project.complete);
      }
      if (this.current === "ongoing") {
        return this.projects.filter((project) => !project.complete);
      }
      return this.projects;
    },
  },
};
</script>
