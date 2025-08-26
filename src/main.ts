import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";

import { createBootstrap } from "bootstrap-vue-next/plugins/createBootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./assets/main.css";

createApp(App).use(createBootstrap()).use(router).mount("#app");
