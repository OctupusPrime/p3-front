import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFileWord, faExclamationTriangle, faFlagCheckered, faUserPlus, faTimes, faCheckCircle, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFileWord, faExclamationTriangle, faFlagCheckered, faUserPlus, faTimes, faCheckCircle, faSpinner)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
