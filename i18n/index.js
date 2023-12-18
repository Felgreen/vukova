// var es = require("./translation.es.json");
// var en = require("./translation.en.json");

// const i18n = {
//   translations: {
//     es,
//     en,
//   },
//   defaultLang: "es",
//   useBrowserDefault: true,
//   // optional property will default to "query" if not set
//   languageDataStore: "query" || "localStorage",
// };

// module.exports = i18n;
var en = require("./translations.en.json");
var es = require("./translations.es.json");

const i18n = {
  translations: {
    en,
    es,
  },
  defaultLang: "es",
  useBrowserDefault: true,
  // optional property will default to "query" if not set
  languageDataStore: "query" || "localStorage",
};

module.exports = i18n;