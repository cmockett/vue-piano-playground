import Vue from 'vue'
// import App from '../App.vue'
import PianoHome from '../components/PianoHome.vue'
import About from '../components/About.vue'
import Home from '../components/Home.vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router ({
	routes : [
		{
			path: '/piano-home',
			name: 'PianoHome',
			component: PianoHome
		},
		{
			path: '/about',
			name: 'About',
			component: About
		},
		{
			path: '/',
			name: 'Home',
			component: Home
		},

	]
})