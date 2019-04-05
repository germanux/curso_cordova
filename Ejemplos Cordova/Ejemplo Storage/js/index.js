 
var texto = document.getElementById("texto");	
 
 var persona = {
    nombre: "pepe",
    edad: 20,
    locura: true
};

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
		
		// AQUI
			
		localStorage.setItem("locura", true);		
		var locura = localStorage.getItem("locura");
		console.log(locura); // true
		console.log(typeof locura); // 'string'
		texto.innerHTML = "locura = " + locura +", tipo: " + (typeof locura);
		
		app.probarJSON_localStorage_Bien();
		app.probarJSON_sessionStorage_Bien();
		app.probarJSON_localStorage_Mal();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

		// !!!!!!!!!!!!!!!!!
		// console.error ('Received Event: ' + id);
        console.log('Received Event: ' + id);		
    },
	probarJSON_localStorage_Mal: function() {
		localStorage.setItem("persona", persona);
		var personaGuardada = localStorage.getItem("persona");

		console.log(typeof persona); //object
		texto.innerHTML += "<br/>probarJSON_localStorage_Mal<br/>typeof persona = " + (typeof persona) ;
		
		console.log(typeof personaGuardada); //string
		texto.innerHTML += "<br/>typeof personaGuardada = " + (typeof personaGuardada) ;

		console.log(personaGuardada.locura); //undefined!
		texto.innerHTML += "<br/>personaGuardada.locura = " + (personaGuardada.locura) ;
		
		var personaGuardada = JSON.parse(personaGuardada); //Uncaught SyntaxError
	},
	probarJSON_localStorage_Bien: function() {
		var personaAGuardar = JSON.stringify(persona);
		localStorage.setItem("persona", personaAGuardar);
		var personaGuardada = localStorage.getItem("persona");

		console.log(typeof persona); //object
		texto.innerHTML += "<br/>probarJSON_localStorage_Bien<br/>typeof persona = " + (typeof persona) ;
		
		console.log(typeof personaGuardada); //string
		texto.innerHTML += "<br/>typeof personaGuardada = " + (typeof personaGuardada) ;
		
		var personaGuardada = JSON.parse(personaGuardada);
		console.log(personaGuardada.locura); //true
		console.log(personaGuardada.locura); //undefined!
		texto.innerHTML += "<br/>personaGuardada.locura = " + (personaGuardada.locura) ;		
	},
	probarJSON_sessionStorage_Bien: function() {
		var personaAGuardar = JSON.stringify(persona);
		sessionStorage.setItem("persona", personaAGuardar);
		var personaGuardada = sessionStorage.getItem("persona");

		console.log(typeof persona); //object
		texto.innerHTML += "<br/>probarJSON_sessionStorage_Bien<br/>typeof persona = " + (typeof persona) ;
		
		console.log(typeof personaGuardada); //string
		texto.innerHTML += "<br/>typeof personaGuardada = " + (typeof personaGuardada) ;
		
		var personaGuardada = JSON.parse(personaGuardada);
		console.log(personaGuardada.locura); //true
		console.log(personaGuardada.locura); //undefined!
		texto.innerHTML += "<br/>personaGuardada.locura = " + (personaGuardada.locura) ;		
	}
};

app.initialize();