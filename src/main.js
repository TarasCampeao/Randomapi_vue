// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
//import Vuex from 'vuex';
import App from './App';
import NaviCell from './components/NaviCell'

//Vue.use(Vuex)

Vue.config.productionTip = false;


Vue.component('NaviCell', NaviCell)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});


