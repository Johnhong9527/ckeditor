import Vue from "vue";
import * as Sentry from "@sentry/browser";
import { Vue as VueIntegration } from "@sentry/integrations";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// if (process.env.NODE_ENV === "production") {
//   Sentry.init({
//     dsn: "http://3a6d0bf34c8e48e79771449a1ef487db@localhost:9000/2",
//     integrations: [new VueIntegration({ Vue, attachProps: true })]
//   });

//   // Sentry.configureScope(function(scope) {
//   //   scope.setUser({ email: "john.doe@example.com" });
//   // });
// }

// 在生产环境中让sentry报错
process.env.NODE_ENV === "production" &&
  Sentry.init({
    dsn: "http://3a6d0bf34c8e48e79771449a1ef487db@localhost:9000/2",
    integrations: [new VueIntegration({ Vue, attachProps: true })]
  });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
