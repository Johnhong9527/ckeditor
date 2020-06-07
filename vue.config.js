const SentryCliPlugin = require("@sentry/webpack-plugin");

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.plugin("sentry").use(SentryCliPlugin, [
      {
        include: ".",
        ignoreFile: ".sentrycliignore",
        ignore: ["node_modules", "webpack.config.js"],
        configFile: "sentry.properties",
        dryRun: true,
        release: "foo"
      }
    ]);
    // if (process.env.NODE_ENV === "production") {

    // }
  }
};
