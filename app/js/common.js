$(function() {

		$(".roll-holder").click(function(e) {
			//e.preventDefault()
		$('html, body').animate({
			scrollTop: $("main").offset().top
		}, 1000);
	});





	// Custom JS
	firstSlide = function () {
		$('header').css({
			'background-image': 'url("img/background-start.jpg")',
		})
	}


	logoGo = function () {
		var goTop = anime.timeline();
		goTop
		.add({
			targets: '.logo-holder path',
			fill: '#ba9c54',
		})
		.add({
			targets: '.logo-holder path.b',
			translateX: 0,
			offset: 0,
			easing: 'easeInOutBack'
		})
		.add({
			targets: '.logo-holder path.a',
			translateX: 0,
			offset: 0,
			easing: 'easeInOutSine'
		})
		.add({
			targets: '.logo-holder path.c',
			translateX: 0,
			offset: 0,
			easing: 'easeInOutCirc'
		})
		.add({
			targets: '.logo-holder path.d',
			translateX: 0,
			offset: 0,
			easing: 'easeInOutQuint'
		})
	}



	logoPosition = function(){
			anime({
			targets: '#logo',
			duration: 1000,
			translateX: 0,
			left: 0,
			top: 0,
			complete: function () {
				$('#logo').css({'position':'static'});
				anime({
					easing: 'linear',
					targets: '.logo-holder path',
					translateX: 0,
					duration: 500
				});
				firstSlide();
			}
		})
	}
	var anim = anime({
		targets: '.logo-holder path',
		strokeDashoffset:[anime.setDashoffset, 0],
        fill: '#000',
		duration:1500,
		easing: 'easeInOutQuint',
		direction: 'alternate',
		//fill: '#ba9c54',
		translateX: function() {return anime.random(-25, 25)},
		translateY: function() {return anime.random(-25, 25)},
		scale: function() {return anime.random(0.7, 1.5)},
		rotate: function() { return anime.random(-360, 360); },
		begin: function () {$('.logo-holder path').attr({'stroke':'#ba9c54','stroke-width':'3', 'fill':'#000'}).css({'transform-origin':'50% 50%'})},
		complete: function () { 
			logoGo();
			setTimeout(logoPosition, 300);
		}
	});
	//owl
	$('.owl-carousel').owlCarousel({
    loop: true,
    autoWidth: true,
    margin: 15,
    items: 1,
    center: true,
    nav: true,
    autoplay: true
});

	// WOW

if ($(window).width() > 992){new WOW().init();}

	

});



function initMap() {
    var e = [{
        stylers: [{
            hue: "##ba9c54"
        }, {
            saturation: -20
        }]
    }, {
        elementType: "labels.text.fill",
        stylers: [{
            color: "##ba9c54"
        }]
    }, {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [{
            color: "#ffffff"
        }]
    }, {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{
            color: "##ba9c54"
        }]
    }, {
        featureType: "water",
        stylers: [{
            color: "##ba9c54"
        }, {
            lightness: 40
        }, {
            saturation: -60
        }]
    }, {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{
            color: "##ba9c54"
        }]
    }, {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{
            color: "#bfc9cc"
        }, {
            visibility: "on"
        }]
    }, {
        featureType: "poi.business",
        elementType: "geometry",
        stylers: [{
            hue: "##ba9c54"
        }, {
            visibility: "on"
        }]
    }, {
        featureType: "poi.school",
        elementType: "geometry",
        stylers: [{
            hue: "##ba9c54"
        }, {
            visibility: "on"
        }]
    }, {
        featureType: "poi.medical",
        elementType: "geometry",
        stylers: [{
            hue: "##ba9c54"
        }, {
            visibility: "on"
        }]
    }, {
        featureType: "poi.government",
        elementType: "geometry",
        stylers: [{
            hue: "##ba9c54"
        }, {
            visibility: "on"
        }]
    }, {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [{
            hue: "#ba9c54"
        }]
    }, {
        elementType: "geometry.stroke",
        stylers: [{
            color: "#ba9c54"
        }, {
            lightness: 70
        }]
    }]
      , t = {
        lat: 50.0028346,
        lng: 36.2730451
    }
      , l = new google.maps.Map(document.getElementById("map-holder"),{
        zoom: 18,
        center: t,
        styles: e
    });
    new google.maps.Marker({
        position: t,
        map: l,
        title: "Мы тут!",
    })
}
