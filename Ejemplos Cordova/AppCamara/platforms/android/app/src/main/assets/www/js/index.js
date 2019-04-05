
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.actualizarDOM('deviceready');
        document.getElementById("capturarFoto")
            .addEventListener("click", 
            this.cogerFotoCamara.bind(this));
       // document.getElementById("capturarFoto")
        //    .onclick = cogerFotoCamara;
    },
    cogerFotoCamara: function() {
        navigator.camera.getPicture(
            this.alRecibirFoto, this.alFalloCamara,
            {
                quality: 50, 
                destinationType: Camera.DestinationType.DATA_URL
            });
    },
    alRecibirFoto: function (datosImagen) {
        var imagenParaFoto = document.getElementById("imagenFoto");
        imagenParaFoto.src ="data:image/jpeg;base64," + datosImagen;
    },
    alFalloCamara: function (mensajeError) {
        alert("Ha fallado por " + mensajeError);
    },
    actualizarDOM: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();