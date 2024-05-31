// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

//import Alert from 'bootstrap/js/dist/alert'
// or, specify which plugins you need:
//import { Tooltip, Toast, Popover } from 'bootstrap'
import { createApp } from "vue";
import App from "../components/App.vue";

const app = createApp(App);
app.mount("#app");
