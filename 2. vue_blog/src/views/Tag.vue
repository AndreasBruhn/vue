<template>
  <div class="tag">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="postsWithTag" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList";
import getPosts from "../composables/getPosts";
import Spinner from "../components/Spinner";
import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";
import TagCloud from "../components/TagCloud";

export default {
  components: { PostList, Spinner, TagCloud },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts(); // fetching the post from the getPosts() composables

    load();

    // This computed property filters the posts after the tags
    const postsWithTag = computed(() => {
      // all this function does is to evaluate if a tag is represented in
      // the current post. If it is, it will show. If not, then it will be
      // filtered out
      return posts.value.filter((post) => post.tags.includes(route.params.tag)); // this is a boolean that evaluates if the current "post" includes the tag which is in the route
    });

    return { error, posts, postsWithTag };
  },
};
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>