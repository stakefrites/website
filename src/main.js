import { createApp } from "vue";
//import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import App from "./App.vue";

const app = createApp(App);
//app.use(router).mount('#app')
app.mount("#app");
