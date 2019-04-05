"use strict";
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
        this.mostrarDatosDevice();
        this.iniciarGPS();
    },
    mostrarDatosDevice: function () {
        jQuery("#modelo").html(device.model);
        // document.getElementById("modelo").innerHTML = device.model;
        document.getElementById("plataforma").innerHTML = device.platform;
        document.getElementById("uuid").innerHTML = device.uuid;
        document.getElementById("version").innerHTML = device.version;
        document.getElementById("serie").innerHTML = device.serial;
        document.getElementById("cordova").innerHTML = device.cordova;
        
    },
    watchId: null,
    contWatch: 0,
    iniciarGPS : function() {
        navigator.geolocation.getCurrentPosition(
            this.alRecibirPosiciones.bind(this), this.onError);

        this.watchId = navigator.geolocation.watchPosition( 
            this.alRecibirPosiciones.bind(this), this.onError, 
            { timeout: 15000, enableHighAccuracy: true});
    },
    alRecibirPosiciones: function (position) {
        this.contWatch ++;
        if (this.contWatch > 5)  {
            navigator.geolocation.clearWatch(this.watchId);
        }
        alert("Altitud: " + position.coords.altitude + "\n" + 
            "Longitud: " + position.coords.longitude + "\n" + 
            "Latitud: " + position.coords.latitude + "\n" + 
            "Precision: " + position.coords.accuracy + "\n" +
            "Timestamp: " + position.timestamp );
    },
    onError : function(error) {
        alert("Cod: " + error.code + ", Info: " + error.message);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();