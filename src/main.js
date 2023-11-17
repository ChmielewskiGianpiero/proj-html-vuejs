import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLocationDot, faPhone, faChessPawn} from '@fortawesome/free-solid-svg-icons'

library.add( faLocationDot, faPhone, faChessPawn)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
