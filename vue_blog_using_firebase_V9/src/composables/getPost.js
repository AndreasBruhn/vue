import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const postRef = doc(projectFirestore, 'posts', id);
      let postSnapshot = await getDoc(postRef);
      // console.log(res)
      // console.log(res.data)

      if (!postSnapshot.exists) {
        throw Error('That post does not exist');
      }
      post.value = { ...postSnapshot.data(), id: postSnapshot.id };
      // console.log(post.value)
    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, error, load };
};

export default getPost;
