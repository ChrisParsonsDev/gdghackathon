function intiMap(){
	var map = new google.maps.Map(document.getElementById('map-canvas'), {
	center: new google.maps.LatLng(30,0),
	zoom: 2,
	mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var world_geometry = new google.maps.FusionTablesLayer({
		query: {
	select: 'geometry',
	from: '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk'
	},
	map: map,
	suppressInfoWindows: true
	});
  layer.setMap(map);

}

