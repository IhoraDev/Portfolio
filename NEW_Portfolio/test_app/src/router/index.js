import Vue from 'vue';
import Router from 'vue-router';
import todo from 'components/todo';
import vuescroll from 'vuescroll';

Vue.use(Router);

Vue.use(vuescroll, {
    ops: {
    },
    name: 'myScroll'
});

export default new Router({
  routes : [
    {
      path      : '/',
      name      : 'todo',
      component : todo
    }
  ]
})
