/*o*-----------------------*o*/
/*Géolocalisation Google Maps*/
/*o*-----------------------*o*/

	var previousPosition = null;
   
    function initialize() {
      map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: new google.maps.LatLng(50.94908, 1.885266),
            mapTypeId: google.maps.MapTypeId.ROADMAP
          });   
    }
       
    if (navigator.geolocation)
      var watchId = navigator.geolocation.watchPosition(successCallback, null, {enableHighAccuracy:true});
    else
      alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");
       
    function successCallback(position){
      map.panTo(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude), 
        map: map
      });  
      if (previousPosition){
        var newLineCoordinates = [
           new google.maps.LatLng(previousPosition.coords.latitude, previousPosition.coords.longitude),
           new google.maps.LatLng(position.coords.latitude, position.coords.longitude)];
         
        var newLine = new google.maps.Polyline({
          path: newLineCoordinates,        
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        newLine.setMap(map);
      }
      previousPosition = position;
    };
	
/*o*-----------------------*o*/
/*o********Humberger********o*/
/*o*-----------------------*o*/

	$(document).ready(function(){

		$("#burger").click(function(e) {
			e.stopPropagation();
			if($("#humburger").hasClass("inactive")) {				
				$("#humburger").removeClass("inactive");
				$("#humburger").addClass("active");
			}
			else if($("#humburger").hasClass("active")){
				$("#humburger").removeClass("active");
				$("#humburger").addClass("inactive");
			}
			if($("#burger").hasClass("imgburger")){				
				$("#burger").removeClass("imgburger");
				$("#burger").addClass("imgdelburger");
			}
			else if($("#burger").hasClass("imgdelburger")){
				$("#burger").removeClass("imgdelburger");
				$("#burger").addClass("imgburger");
			}
		});

		$("section").click(function(e) {
			if($("#humburger").hasClass("active")){
				$("#humburger").removeClass("active");
				$("#humburger").addClass("inactive");
			}			
			if($("#burger").hasClass("imgdelburger")){
				$("#burger").removeClass("imgdelburger");
				$("#burger").addClass("imgburger");
			}
		});

		$("#bouton-valid").click(function(e) {
			var v1 = $('#input1').val();
			var v2 = $('#input2').val();
			var v3 = $('#input3').val();
			var v4 = $('#input4').val();
			var v5 = $('#input5').val();
			var v6 = $('#input6').val();
			var v7 = $('#textarea').val();
			if(v1.length > 0 && v2.length > 0 && v3.length > 0 && v4.length > 0 && v5.length > 0 && v6.length > 0 && v7.length > 0){
				localStorage.v1 = v1;
				localStorage.v2 = v2;
				localStorage.v3 = v3;
				localStorage.v4 = v4;
				localStorage.v5 = v5;
				localStorage.v6 = v6;
				localStorage.v7 = v7;
				if(typeof localStorage!='undefined'){
					if('v1' in localStorage && 'v2' in localStorage && 'v3' in localStorage && 'v4' in localStorage && 'v5' in localStorage && 'v6' in localStorage && 'v7' in localStorage) {
						$("#s1").html(v1);
						$("#s2").html(v2);
						$("#s3").html(v3);
						$("#s4").html(v4);
						$("#s5").html(v5);
						$("#s6").html(v6);
						$("#s7").html(v7);
					}
				} 
				else{
					alert("sessionStorage n'est pas supporté");
				}
			}			
		});	

		if($("#old-form").hasClass("inactive")) {
			$("#lib").html("Afficher");
		}		
		
		$("#show-old-form").click(function(e) {
			e.stopPropagation();
			if($("#old-form").hasClass("inactive")) {	
				$("#lib").html("Cacher");
				$("#old-form").removeClass("inactive");
				$("#old-form").addClass("show");
			}
			else if($("#old-form").hasClass("show")){
				
				$("#lib").html("Afficher");
				$("#old-form").removeClass("show");
				$("#old-form").addClass("inactive");
			}			
		});
		
		
	});

	

