var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
		sendmail.send(app.sendMailSuccess, app.sendMailError,
                    'Correo enviado con Cordova',
                    'Este es un ejemplo de correo enviado con Cordova', 
                    'germanux@gmail.com', 'G3rm4n.0710',
                    'gcaballero@pronoide.es'); 
    },
    sendMailSuccess : function(mensajeDevuelto) {
		var estado = document.getElementById('estado');
		estado.innerHTML = '<p>Mensaje enviado</p><p>' + mensajeDevuelto + '</p>';
	},
	sendMailError : function(error) {
		var estado = document.getElementById('estado');
		estado.innerHTML = '<p>Mensaje NO enviado:' + error + '</p>';
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