import { ref } from 'vue';

const useTags = (posts) => {
  const tags = ref([]);
  const tagSet = new Set();

  // Here we are cycling through each posts we have ind the db
  posts.forEach((item) => {
    // then for each post we have we cycle through the tags and adds it to the Set()
    // which doesn't take duplicate values in
    item.tags.forEach((tag) => tagSet.add(tag));
  });

  // setting the tags ref equal to the new Set() which we use the spread
  // method to make every value an individual value
  tags.value = [...tagSet];

  return { tags };
};

export default useTags;
