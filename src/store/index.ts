import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import user from '@/store/modules/user';
import getters from '@/store/getters';
import interaction from './modules/interaction';
import about from './modules/about';


Vue.use(Vuex);

const isDev = process.env.NODE_ENV === 'development';
const store = new Vuex.Store({
  modules: {
    app,
    user,
    interaction,
    about
  },
  getters,
  plugins: isDev ? [] : []
});

export default store;
