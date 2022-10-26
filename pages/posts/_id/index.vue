<template>
  <div className="single-post-page">
    <section className="post">
      <h1 className="post-title">{{ loadedPost.title }}</h1>
      <div className="post-details">
        <div className="post-detail">Last updated on {{ loadedPost.updatedDate }}</div>
        <div className="post-detail">Written by {{ loadedPost.author }}</div>
      </div>
      <p className="post-content">{{ loadedPost.content }}</p>
    </section>
    <section className="post-feedback">
      <p>Let me know what you think about the post, send a mail to <a href="mailto:feedback@my-awesome-domain.com">feedback@my-awesome-domain.com</a>.
      </p>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  asyncData(context) {
    return axios.get('https://nuxt-blog-9e1ae-default-rtdb.europe-west1.firebasedatabase.app/posts/' + context.params.id + '.json')
      .then(res => {
        return {
          loadedPost: res.data
        }
      })
      .catch(e => context.error(e))
  },
  head: {
    title: 'One Post'
  }
};
</script>


<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
