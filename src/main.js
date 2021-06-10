import { createApp } from "vue";
import App from "./App.vue";
import ScrollAnimation from "./directives/scrollanimation";

import "./assets/styles.css";
import "./assets/scrollanimation.css";

const app = createApp(App);

app.directive("scrollanimation", ScrollAnimation);

app.mount("#app");
