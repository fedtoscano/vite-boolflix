import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add(faStar)
createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");