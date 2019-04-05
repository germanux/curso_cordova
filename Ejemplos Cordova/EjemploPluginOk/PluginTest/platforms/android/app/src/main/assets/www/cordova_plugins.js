cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com.loquesea.prueba.PruebaPlugin",
      "file": "plugins/com.loquesea.prueba/www/pruebaplugin.js",
      "pluginId": "com.loquesea.prueba",
      "clobbers": [
        "pruebaplugin"
      ]
    }
  ];
  module.exports.metadata = {
    "com.loquesea.prueba": "1.0.0",
    "cordova-plugin-whitelist": "1.3.0"
  };
});