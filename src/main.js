import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFileWord, faExclamationTriangle, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFileWord, faExclamationTriangle, faCheck)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(store)
    .use(router)
    .mount('#app')
