cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.pronoide.plugin.sendmail.SendMail",
        "file": "plugins/com.pronoide.plugin.sendmail/www/sendmail.js",
        "pluginId": "com.pronoide.plugin.sendmail",
        "clobbers": [
            "sendmail"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.pronoide.plugin.sendmail": "0.1.0",
    "cordova-plugin-whitelist": "1.3.0"
};
// BOTTOM OF METADATA
});