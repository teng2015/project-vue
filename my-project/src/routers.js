/**
 * Created by xiaopang on 2016/12/7.
 */
'use strict'
const routers=[
  {
    path: '/',
    name: 'home',
    component(resolve) {
     require(['./components/home.vue'],resolve);
    }
  },

  {
    path: '/movie',
    name: 'movie',
    component(resolve){
      require(['./components/movie.vue'],resolve);
    }
  },

  {
    path: '/book',
    name: 'book',
    component(resolve){
      require(['./components/book.vue'],resolve);
    }
  },

  {
    path: '/network',
    name: 'network',
    component(resolve){
     require(['./components/network.vue'],resolve);
    }
  },

  {
    path: '/group',
    name: 'group',
    component(resolve){
      require(['./components/group.vue'],resolve);
    }
  },
  {
    path: '/topic/:id',
    name: 'topic',
    component(resolve){
      require(['./components/topic.vue'],resolve)
    }
  }
];

export default routers;