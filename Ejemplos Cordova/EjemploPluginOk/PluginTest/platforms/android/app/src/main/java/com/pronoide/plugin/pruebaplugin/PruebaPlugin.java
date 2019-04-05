package com.pronoide.plugin.pruebaplugin;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class PruebaPlugin extends CordovaPlugin {
	
	public static final String ACTION = "accionTest";
	
	public boolean execute (String action, JSONArray jsonArgs, CallbackContext callbackContext) throws JSONException {
		try {
			if (ACTION.equals(action)) {
				JSONObject args = jsonArgs.getJSONObject(0);
				String cantidad = args.getString("cantidad");
				String otraCantidad = args.getString("otraCantidad");
				
				callbackContext.success("Todo OK desde el nativo de Android. Cantidad: " + cantidad + ", Otra cantidad: " + otraCantidad);
				return true;
			} else {
				callbackContext.error("La accion no existe, error desde Android nativo");
				// return false;
			}
		} catch (Exception e) {
			
				callbackContext.error("Hay un error " + e.getMessage());
				// return false;
		}
		return false;
	}
}