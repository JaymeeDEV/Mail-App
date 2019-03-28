import Vue from "vue";
import App from "./App.vue";

export const EVENTBUS = new Vue();

new Vue({
  el: "#app",
  render: h => h(App)
});
