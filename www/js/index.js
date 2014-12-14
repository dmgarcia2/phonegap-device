"use strict";

var application = {};

application.app = {
	
    initialize: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        StatusBar.hide();
		FastClick.attach(document.body);
        
        // Obteniendo información del dispositivo
        $('#device-name').html(device.name);
        $('#device-cordova').html(device.cordova);
        $('#device-platform').html(device.platform);
        $('#device-uuid').html(device.uuid);
        $('#device-version').html(device.version);
        
        switch (navigator.network.connection.type) {
            case Connection.UNKNOWN:
                $('#device-network').html('Desconocido');
                break;
            case Connection.ETHERNET:
                $('#device-network').html('Ethernet');
                break;
            case Connection.WIFI:
                $('#device-network').html('WiFi');
                break;
            case Connection.CELL_2G:
                $('#device-network').html('GSM (2G)');
                break;
            case Connection.CELL_3G:
                $('#device-network').html('3G');
                break;
            case Connection.CELL_4G:
                $('#device-network').html('4G');
                break;
            case Connection.NONE:
                $('#device-network').html('Sin conexión');
                break;
        }
    }

};
