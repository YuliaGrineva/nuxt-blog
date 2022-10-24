<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";

export default {
  components: {
    PostList
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve( {
          loadedPosts: [
            {id: "1", title: "Hello there!", previewText: "This my first post!", thumbnail:"https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"},
            {id: "2", title: "Hello there - the second time!", previewText: 'This my second post!', thumbnail:"https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"},
            {id: "3", title: "Hello!", previewText: "This my third post!", thumbnail:"https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"},
          ]
        });
      }, 1000)
    })
      .then(data => {
       return data
      })
      .catch(e => {
      context.error(e);
    });
  },
  created() {
    this.$store.dispatch('setPosts', this.loadedPosts)
  }
}
</script>

<style scoped>
  .posts-page{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .posts-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>
