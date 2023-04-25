import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import router from './router.js'
import '../node_modules/dayjs/locale/fa'
import '../node_modules/vue3-persian-datetime-picker/dist/vue3-persian-datetime-picker.common'


const app = createApp(App)
app.use(router)
.mount('#app')
