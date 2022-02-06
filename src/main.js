import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/js/bootstrap.bundle.js"
import "@fortawesome/fontawesome-free/css/all.css"
import { createI18n } from 'vue-i18n/index'
import messages from '@/assets/i18n'
import detectLanguage from "@/assets/languageDetect"

const i18n = createI18n({
    locale: detectLanguage() == 'pt' ? 'pt' : 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})

createApp(App).use(i18n).use(store).use(router).mount('#app')
