import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    // getting a single post from the database
    try {
      let res = await projectFirestore.collection('posts').doc(id).get();
      // console.log(res.data());

      // if the id or post doesn't exist, then throw this error
      if (!res.exists) {
        throw Error('This post does not exist');
      }

      // takes the data from the database and uses the spread() method
      // to get the data and make them individual values
      post.value = { ...res.data(), id: res.id };
      // console.log(post.value);
    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, error, load };
};

export default getPost;
