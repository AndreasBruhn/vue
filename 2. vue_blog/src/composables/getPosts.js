import { ref } from 'vue';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // simulating a loading delay
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });

      let data = await fetch('http://localhost:3000/posts');
      // checking to see if we get an error (no data found)
      if (!data.ok) {
        throw Error('no data available');
      }
      // if we pass the if statement we await the data as json and store it in posts.value
      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { posts, error, load };
};

export default getPosts;
