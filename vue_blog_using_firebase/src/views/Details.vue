<template>
  <div v-if="error">
    {{ error }}
  </div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button class="delete" @click="handleDelete">Delete Post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from "../composables/getPost";
import Spinner from "../components/Spinner";
import { useRoute, useRouter } from "vue-router";
import { projectFirestore } from "../firebase/config";

export default {
  components: { Spinner },
  props: ["id"],
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    console.log(route);

    const { post, error, load } = getPost(route.params.id);

    load();

    // click event that handles the "delete" request to the firebase database. Redirects to the frontpage
    const handleDelete = async () => {
      await projectFirestore.collection("posts").doc(props.id).delete();

      router.push("/");
    };

    return { post, error, handleDelete };
  },
};
</script>

<style scoped>
.tags a {
  margin-right: 10px;
}
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}

button.delete {
  margin: 10px auto;
  cursor: pointer;
}
</style>