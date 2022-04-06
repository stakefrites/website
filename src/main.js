import { createApp } from "vue";

//import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import App from "./App.vue";

import router from './router'
import store from './store'

const app = createApp(App).use(store).use(router);
//app.use(router).mount('#app')
app.mount("#app");
