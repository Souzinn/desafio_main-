import { createApp } from "vue";
import "./assets/styles/style.scss";
import * as bootstrap from "bootstrap";
import App from "./App.vue";

import router from "./router/index.js";
import store from "./store/modules/index.js";

createApp(App).use(router).use(store).mount("#app");
