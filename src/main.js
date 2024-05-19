import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// bootstarp 用の設定ファイルを指定
import "./assets/scss/bootstrap-custom.scss";

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);

app.mount("#app");
