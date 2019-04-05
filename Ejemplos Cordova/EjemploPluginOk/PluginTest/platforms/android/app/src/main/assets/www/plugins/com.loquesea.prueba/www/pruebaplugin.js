cordova.define("com.loquesea.prueba.PruebaPlugin", function(require, exports, module) {
var pruebaplugin = {
	functionTest: function (successCallback, errorCallback, cantidad, otraCantidad) {
		
		cordova.exec(
			successCallback,
			errorCallback,
			"PruebaPlugin",
			"accionTest",
			[{
				"cantidad": cantidad,
				"otraCantidad": otraCantidad
			}]
		)
	}
}

module.exports = pruebaplugin;
});
