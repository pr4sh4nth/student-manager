import Vue from 'vue'
import Veutify from 'vuetify'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router'

import NewStudent from "./components/NewStudent";
import Students from "./components/Students";
import EditStudent from "./components/EditStudent";

Vue.use(Veutify);
Vue.use(VueRouter)

const routes = [
  { path: "/", component: Students},
  { path: "/NewStudent", component: NewStudent},
  { path: "/EditStudent/:id", component: EditStudent},
]

const router = new VueRouter({routes, mode: 'history'})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

Vue.config.productionTip = false