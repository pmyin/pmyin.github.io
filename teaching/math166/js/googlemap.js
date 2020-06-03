    function loadMaps(address) {  
	    var myOptions = {
			center: new google.maps.LatLng( 38.616870, -96.679687),
			zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
		};
      var map = new google.maps.Map(document.getElementById("map"),myOptions);  
      //map.addControl(new GSmallMapControl());  
      //map.addControl(new GMapTypeControl());  
      var geocoder = new google.maps.Geocoder();  
      geocoder.geocode(  
        {'address': address},  
        function(results,status) {  
			if(status == google.maps.GeocoderStatus.OK){
				var pos = results[0].geometry.location;
				var marker = new google.maps.Marker({
					map: map,
					position: pos,
					animation: google.maps.Animation.DROP,
					title: "Robtics Laboratory"
				});
				map.setCenter(pos);
			}
        }  
      );  
    }  
 
    function init() {  
      loadMaps('396 Carver Hall, Iowa State University, Ames, IA 50011, USA');  
    }  