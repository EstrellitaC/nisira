import Vue from 'vue'
import VueRouter from 'vue-router'
import Registro from '../views/Registro.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Vip from '../views/Vip.vue'
import Clientes from '../views/Clientes.vue'
import Descanso from '../views/Descansos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Registro',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Vip',
    name: 'Vip',
    component: Vip
  },
  {
    path: '/clientes',
    name: 'clientes',
    component: Clientes
  },
  {
    path: '/descanso',
    name: 'descanso',
    component: Descanso
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
