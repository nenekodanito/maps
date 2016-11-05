var arrMunicipios = new Array();
var mapOptions;
function initGeolocation() {
    if (navigator.geolocation) {

        //Llamar getCurrentPosition con éxito y devoluciones de fallos
        navigator.geolocation.getCurrentPosition(success, fail);
    }
    else {
        alert("Su navegador no soporta geolocalización de google.");
    }
}

var map;
function success(position) {
	
	guardarMunicipios();
	cargarMunicipios();
	
	$("#selecMunicipio").change(function(){
		
		$("#selecInstituto").html("");
		
		
		if($("#selecMunicipio").val() == ""){
			limpiarMapa();
			return;
		}
		
		var valor = $(this).val();
		var objMunicipio = arrMunicipios[valor];
		var latitud = objMunicipio.latitud;
		var longitud = objMunicipio.longitud;
		
		//alert("Ha seleccionado el municipio de " + objMunicipio.municipio);
		
		map.setCenter(new google.maps.LatLng(latitud, longitud))


		var institutosMunicipios = objMunicipio.institucion;

	    //---------------------------------------------
		var coords = new google.maps.LatLng(objMunicipio.latitud, objMunicipio.longitud);

	    // Coloque el marcador inicial
		var marker = new google.maps.Marker({
		    position: coords,
		    map: map,
		    title: objMunicipio.municipio
		});
		map.setZoom(17);
		map.setCenter(coords)

        //-----------------------------------------
		
		var control = $("#selecInstituto");
		control.append("<option value=''>Seleccione Vereda</option>");
		$.each(institutosMunicipios,function(contador,fila){
			control.append("<option value='" + contador + "'>" + fila.institucion + "</option>");
		});		
	});
	
	
	
	$("#selecInstituto").change(function(){
		
		
		limpiarMapa();
		
		var valorInstituto = $(this).val();
		var valorMunicipio = $("#selecMunicipio").val();
		

		if($("#selecInstituto").val() == ""){
			var objMunicipio = arrMunicipios[valorMunicipio];
			var latitud = objMunicipio.latitud;
			var longitud = objMunicipio.longitud;	
			
			map.setCenter(new google.maps.LatLng(latitud, longitud));
			return;
		}
		
		var objInstitucion = arrMunicipios[valorMunicipio].institucion[valorInstituto];
		
		
		//alert("Ha seleccionado el instituto de " + objInstitucion.institucion);
		
		//Define las coordenadas como un objeto LatLng de Google Maps
		var coords = new google.maps.LatLng(objInstitucion.latitud, objInstitucion.longitud);
		
		// Coloque el marcador inicial
		var marker = new google.maps.Marker({
			position: coords,
			map: map,
			title: objInstitucion.institucion
		});
		map.setZoom(17);
		map.setCenter(coords)
		
	});
	
    //Define las coordenadas como un objeto LatLng de Google Maps
    var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    // Preparar las opciones del mapa
    mapOptions =
   {
       zoom: 14,
       center: coords,
       mapTypeControl: false,
       navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL },
       mapTypeId: google.maps.MapTypeId.ROADMAP
   };

    // Cree el mapa y colóquelo en el map_canvas div
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

    // Coloque el marcador inicial
    var marker = new google.maps.Marker({
        position: coords,
        map: map,
        title: "Neiva"
    });

}

function fail() {
    // No se pudo obtener la ubicación
}

//Solicitar lugares de Google
function placesRequest(title, latlng, radius, types, icon) {
    //Parámetros para nuestra solicitud de lugares
    var request = {
        location: latlng,
        radius: radius,
        types: types
    };
    //Realizar la llamada de servicio a google
    var callPlaces = new google.maps.places.PlacesService(map);
    callPlaces.search(request, function (results, status) {
        //Trace lo que Google nos da de vuelta
        $.each(results, function (i, place) {
            var placeLoc = place.geometry.location;
            var thisplace = new google.maps.Marker({
                map: map,
                position: place.geometry.location,
                icon: icon,
                title: place.name
            });
        })
    });

}

function guardarMunicipios(){
	var objMunicipio = new Object();
	var arrInstitucion = new Array();
	var objInstitucion = new Object();
	
    /*-------------------NATAGA---------------------*/
	//arrMunicipios = new Array();
	objMunicipio = new Object();
	objMunicipio.id = 1;
	objMunicipio.municipio = "Nataga";
	objMunicipio.latitud = 2.547716;
	objMunicipio.longitud = -75.805368;


    	
	/*--------------VEREDAS----------------*/
	
	
	arrMunicipios.push(objMunicipio);

	arrInstitucion = new Array();
	objInstitucion = new Object();
	objInstitucion.id = 2;
	objInstitucion.institucion = "Acueducto, Vereda El Orozco";
	objInstitucion.latitud = 2.555075;
	objInstitucion.longitud = -75.791676;


	arrInstitucion.push(objInstitucion);


	objInstitucion = new Object();
	objInstitucion.id = 2;
	objInstitucion.institucion = "Acueducto, Vereda La Esmeralda";
	objInstitucion.latitud = 2.630295;
	objInstitucion.longitud = -75.780779;

	arrInstitucion.push(objInstitucion);

	objMunicipio.institucion = arrInstitucion;

	objInstitucion = new Object();
	objInstitucion.id = 2;
	objInstitucion.institucion = "Acueducto, Vereda El Teniente";
	objInstitucion.latitud = 2.613885;
	objInstitucion.longitud = -75.771828;

	arrInstitucion.push(objInstitucion);

	objMunicipio.institucion = arrInstitucion;

	objInstitucion = new Object();
	objInstitucion.id = 2;
	objInstitucion.institucion = "Acueducto, Vereda La Mesa";
	objInstitucion.latitud = 2.635862; 
	objInstitucion.longitud = -75.773222;

	arrInstitucion.push(objInstitucion);

	objMunicipio.institucion = arrInstitucion;

	objInstitucion = new Object();
	objInstitucion.id = 2;
	objInstitucion.institucion = "Acueducto, Vereda Las Honduras";
	objInstitucion.latitud = 2.593438;
	objInstitucion.longitud = -75.777024;

	arrInstitucion.push(objInstitucion);

	objMunicipio.institucion = arrInstitucion;

	
}
function cargarMunicipios(){
	var control = $("#selecMunicipio");
	$.each(arrMunicipios,function(contador,fila){
		control.append("<option value='" + contador + "'>" + fila.municipio + "</option>");
	});
}
function limpiarMapa(){
	map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);	
}


