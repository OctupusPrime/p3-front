import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFileWord, faExclamationTriangle, faFlagCheckered, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFileWord, faExclamationTriangle, faFlagCheckered, faUserPlus)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(store)
    .use(router)
    .mount('#app')
