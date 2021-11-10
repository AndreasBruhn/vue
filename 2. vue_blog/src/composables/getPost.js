// Getting a single post from the json-server database
import { ref } from 'vue';

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      // FIXME: simulating a loading delay
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 2000);
      // });

      let data = await fetch('http://localhost:3000/posts/' + id); // getting a single post with a unique id
      // checking to see if we get an error (no data found)
      if (!data.ok) {
        throw Error('that post does not exist');
      }
      // if we pass the if statement we await the data as json and store it in posts.value
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { post, error, load };
};

export default getPost;
