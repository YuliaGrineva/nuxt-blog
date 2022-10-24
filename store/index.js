import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts){
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context){
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              vuexContext.commit('setPosts', [
                {
                  id: "1",
                  title: "Hello there!",
                  previewText: "This my first post!",
                  thumbnail: "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
                },
                {
                  id: "2",
                  title: "Hello there - the second time!",
                  previewText: 'This my second post!',
                  thumbnail: "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
                },
                {
                  id: "3",
                  title: "Hello!",
                  previewText: "This my third post!",
                  thumbnail: "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
                },
              ])
              resolve();
            }, 1000)
          });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    },
  })
}

export default createStore
