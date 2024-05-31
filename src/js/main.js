// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { createApp } from "vue";
import App from "../components/App.vue";

const app = createApp(App);
app.mount("#app");
