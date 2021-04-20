import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Drag, Drop } from 'vue-drag-drop';

import './index.css'

library.add(fas)

import App from './App.vue'
import store from "./store"
import router from './router';

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon ).component("drag", Drag).component("drop", Drop).mount('#app')
