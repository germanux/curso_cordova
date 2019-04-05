cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-sqlite-storage.SQLitePlugin",
        "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
        "pluginId": "cordova-sqlite-storage",
        "clobbers": [
            "SQLitePlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-sqlite-storage": "1.4.7",
    "cordova-plugin-whitelist": "1.3.0",
    "cordova-plugin-console": "1.0.4"
};
// BOTTOM OF METADATA
});