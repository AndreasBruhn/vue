<template>
  <h1>Real-Time data</h1>
  <div v-for="post in posts" :key="post.id">
    {{ post.title }}
  </div>
</template>

<script>
import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

export default {
  setup() {
    const posts = ref([]);

    projectFirestore
      .collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        // console.log(snap); // see how firebase takes a snap every there is a change
        let docs = snap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        posts.value = docs;
        console.log("documents:", docs); // check each documents in the database
      });

    return { posts };
  },
};
</script>

<style>
</style>