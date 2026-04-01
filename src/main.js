import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify' //Vuetify

createApp(App)
  .use(store)
  .use(vuetify) 
  .mount('#app')