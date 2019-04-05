var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        $("#btn-enviar").click(this.alPedirTiempo);
        var ciudad =  window.localStorage.getItem("ciudad");
        $("#text-ciudad").val(ciudad);
    },
    alPedirTiempo : function() {
        var ciudad = $("#text-ciudad").val();
        window.localStorage.setItem("ciudad", ciudad);
        var urlApi= "http://localhost:80" ;// "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22"
        $.getJSON( urlApi, this.recibirJSON);
    },
    recibirJSON : function(datos) {
        alert(datos);
    },
    falloAjax : function() {
        console.error("Error en peticion AJAX");
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