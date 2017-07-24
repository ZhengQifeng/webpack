import Vue from 'vue'
import './main.css'
import 'element-ui/lib/theme-default/index.css'
import ElementUi from 'element-ui'
import App from './App.vue'

Vue.use(ElementUi)

var greeter=require('./Greeter.js');
document.getElementById('root').appendChild(greeter());

new Vue({
	el: "#app",
	components: {
		'my-app':App
	}
});