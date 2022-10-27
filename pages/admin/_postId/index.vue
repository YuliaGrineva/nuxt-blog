<template>
  <div className="admin-post-page">
    <section className="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
import axios from "axios";

export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  components: {
    AdminPostForm
  },
  asyncData(context) {
    return axios.get('https://nuxt-blog-9e1ae-default-rtdb.europe-west1.firebasedatabase.app/posts/' +
      context.params.postId +
      '.json')
      .then(res => {
        return {
          loadedPost: {...res.data, id: context.params.postId }
        }
      })
      .catch(e => context.error(e))
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch('editPost', editedPost)
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
