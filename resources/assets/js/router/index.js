import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import PhotoIndex from '../views/Photos/Index.vue'
import PhotoShow from '../views/Photos/Show.vue'
import PhotoForm from '../views/Photos/Form.vue'


import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [
		{ 
			path: '/photos/create', component: PhotoForm, meta: { mode: 'create' }
		},
		{ 
			path: '/photos/:id/edit', component: PhotoForm, meta: { mode: 'edit' }
		},
		{ 
			path: '/photos/:id', component: PhotoShow 
		},

		{ 
			path: '/', component: PhotoIndex
		},

		{ 
			path: '/register', component: Register 
		},
		{ 
			path: '/login', component: Login 
		},
		{ path: '/not-found', component: NotFound },
		{ path: '*', component: NotFound }
	]
})

export default router