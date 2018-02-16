;(function($){
	if( $(".date").length || $(".phone").length){
	// $(".date").mask("99/99/9999",{placeholder:"mm/dd/yyyy"});
	// $(".phone").mask("+7(999) 999-99-99");
}
	//кнопка принт
	$(".modal1").find('.print').on('click', function() {
		$.print(".modal1");
	});
	$(document).ready(function(){
		// ----------------animate wow----------
		new WOW().init();

		// arcticmodal
		$(".open_btn").on('click',function(){
			var modal = $(this).data("modal");
			$(modal).arcticmodal();
		});

		// ---------------удаление  объекта
		$('.delete_btn').on('click',function(){
			$(this).parents('.sustem_box').remove()
		});

		// tooltip

		$('.toggle_box').on('click', '.close', function(){
			$(this).closest('.toggle_box').removeClass('opened');
		});

		$('.toggle_box2').on('click', '.close', function(){
			$(this).closest('.toggle_box2').removeClass('opened');
		});

		$('.toggle_box3').on('click', '.close', function(){
			$(this).closest('.toggle_box3').removeClass('opened');
		});

		$('.toggle_link').on('click', function(e){
			e.preventDefault();

			var message = $(this).next('.toggle_box');
			$(".toggle_box").removeClass('opened');
			message.toggleClass('opened');

			$(document).on('click.myEvent', function(e) {
				if (!$(e.target).hasClass('toggle_link') && $(e.target).closest('.toggle_box,.delete_btn').length == 0) {
					message.removeClass('opened');
					$(document).off('click.myEvent');
				}
			});

		});

		$(".toggle_link_extra, #toggle_box2 .close").on("click", function(event){
			$("#toggle_box3,#toggle_box4").hide().removeClass("active");
			$("#toggle_box2").toggle().addClass("active");
			event.preventDefault();
		})
		$(".toggle_link_extra2, #toggle_box3 .close").on("click", function(event){
			$("#toggle_box2,#toggle_box4").hide().removeClass("active");
			$("#toggle_box3").toggle().addClass("active");
			event.preventDefault();
		})
		$(".toggle_link_extra3, #toggle_box4 .close").on("click", function(event){
			$("#toggle_box2,#toggle_box3").hide().removeClass("active");
			$("#toggle_box4").toggle().addClass("active");
			event.preventDefault();
		})

		$(document).on("click touchstart", function(event) {
			if ($(event.target).closest("#toggle_box2, #toggle_box3, .toggle_link_extra, .toggle_link_extra2, .toggle_link_extra3").length) return;
			$("#toggle_box2.active, #toggle_box3.active, #toggle_box4.active").hide();
			event.stopPropagation();
		})

		// table-down in popup
		$(document).ready(function(){
			$('.review_btn').on('click',function(){
				$('.write_forms td').slideToggle("slow");
			});
		});


		// =================owl-carousel===================
		if($('.owl-carousel').length){
			$('.owl-carousel').each(function(){
				var _ = $(this);
				var itemA = _.attr('data-itemA'),
				itemB = _.attr('data-itemB'),
				itemC = _.attr('data-itemC'),
				itemD = _.attr('data-itemD'),
				itemE = _.attr('data-itemE');
				_.owlCarousel({
					margin: 10 ,
					nav: true ,
					smartSpeed:1000,
					dots: false,
					responsive: {
						0 : {
							items: itemE
						},
						960 : {
							items: itemD
						},
						1358 : {
							items: itemC
						},
						1600 : {
							items: itemB
						},
						1900 : {
							items: itemA
						}
					}
				});
			});
		};

		if($("#countdown-3").length){
			$('#countdown-3').timeTo({
				seconds: 86400,
				displayDays: 2,
				theme: "black",
				displayCaptions: true,
				fontSize: 48,
				captionSize: 14
			});
		}
	});

	$('a[nam]').click(function(event){
		event.preventDefault();
		var num = $(this).attr('num');
		var nam = $(this).attr('nam');
		console.log(nam+'=='+num);
		var block = ''+
		'<div class="sustem_box first clearfix" numa="'+num+'">'+
		'<div class="f_left sustem_box_link">'+
		'<a class="order_link green" href="#">REHAU '+nam+'</a>'+
		'</div>'+
		'<div class="f_right">'+
		'<span class="delete_btn" onclick="$(this).parents(\'.sustem_box\').remove()"></span>'+
		'</div>'+
		'</div>';
		if(!$('div[numa="'+num+'"]').length || $('div[numa="'+num+'"]').length==0) {
			$('#compareH1').append(block);
		}
	});

	$('#compareAll').click(function(){
		var nums = 0;
		$('#compareTable tr td').hide();
		$.each($('div[numa]'),function(){
			nums = $(this).attr('numa');
			$.each($('#compareTable tr'),function(){
				var tds = $(this).find('td');

				for(a = 0; a<= tds.length; a++) {
					console.log(a);
					if(a == nums || a==0) {
						$(tds[a]).show();
					}
				}
			});
		});
	});

	$('#call1').on('click',function(e){
		e.preventDefault();
		var errors = 0;
		var fio = $('#fio_call1').val();
		var phone = $('#phone_call1').val();

		if(fio == '') {
			$('#fio_call1').css({'border-color':'#b0356a'});
			errors = 1;
		} else {
			$('#fio_call1').css({'border-color':'#B9B9B9'});
		}
		if(phone == '') {
			$('#phone_call1').css({'border-color':'#b0356a'});
			errors = 1;
		} else {
			$('#phone_call1').css({'border-color':'#B9B9B9'});
		}

		var A = {
			action : 'callMe',
			'fio' : fio,
			'phone' : phone
		};

		if(errors == 0) {
			$.post('/mail/', A , function(data){
				$('#fio_call1').val('');
				$('#phone_call1').val('');
				$('div.toggle_box').removeClass('opened');
			});
			location.hash = 'send_call1';
		}

	});

	$('#call2').on('click',function(e){
		e.preventDefault();
		var errors = 0;
		var fio = $('#fio_call2').val();
		var phone = $('#phone_call2').val();

		if(fio == '') {
			$('#fio_call2').css({'border-color':'#b0356a'});
			errors = 1;
		} else {
			$('#fio_call2').css({'border-color':'#B9B9B9'});
		}
		if(phone == '') {
			$('#phone_call2').css({'border-color':'#b0356a'});
			errors = 1;
		} else {
			$('#phone_call2').css({'border-color':'#B9B9B9'});
		}
		var A = {
			action : 'callMe',
			'fio' : fio,
			'phone' : phone
		};
		if(errors == 0) {
			$.post('/mail/', A , function(data){
				$('#fio_call2').val('');
				$('#phone_call2').val('');
				$('div.toggle_box').removeClass('opened');
			});
			location.hash = 'send_call2';
		}
	});

	$('#call3').on('click',function(e){
		e.preventDefault();
		var errors = 0;
		var fio = $('#fio_call3').val();
		var phone = $('#phone_call3').val();

		if(fio == '') {
			$('#fio_call3').css({'border-color':'#b0356a'});
			errors = 1;
		} else {
			$('#fio_call3').css({'border-color':'#B9B9B9'});
		}
		if(phone == '') {
			$('#phone_call3').css({'border-color':'#b0356a'});
			errors = 1;
		} else {
			$('#phone_call3').css({'border-color':'#B9B9B9'});
		}

		var A = {
			action : 'callMe',
			'fio' : fio,
			'phone' : phone
		};

		if(errors == 0) {
			$.post('/mail/', A , function(data){
				$('#fio_call3').val('');
				$('#phone_call3').val('');
				$('div.toggle_box').removeClass('opened');
			});
			location.hash = 'send_call3';
		}

	});

	$('#know_more').on('click',function(e){
		e.preventDefault();
		var errors = 0;
		var fio = $('#fio_know').val();
		var phone = $('#phone_know').val();

		if(fio == '') {
			$('#fio_know').css({'border-color':'#b0356a'});
			errors = 1;
		} else {
			$('#fio_know').css({'border-color':'#B9B9B9'});
		}
		if(phone == '') {
			$('#phone_know').css({'border-color':'#b0356a'});
			errors = 1;
		} else {
			$('#phone_know').css({'border-color':'#B9B9B9'});
		}

		var A = {
			action : 'knowMore',
			'fio' : fio,
			'phone' : phone
		};

		if(errors == 0) {
			$.post('/mail/', A , function(data){
				$('#fio_know').val('');
				$('#phone_know').val('');
				$('div.toggle_box4').removeClass('opened');
			});
			location.hash = 'send_know_more';
		}

	});

	$('#zamer').on('click',function(e){
		e.preventDefault();
		var errors = 0;
		var fio = $('#fio_zamer').val();
		var phone = $('#phone_zamer').val();

		if(fio == '') {
			$('#fio_zamer').css({'border-color':'#b0356a'});
			errors = 1;
		} else {
			$('#fio_zamer').css({'border-color':'#B9B9B9'});
		}
		if(phone == '') {
			$('#phone_zamer').css({'border-color':'#b0356a'});
			errors = 1;
		} else {
			$('#phone_zamer').css({'border-color':'#B9B9B9'});
		}

		var A = {
			action : 'zamer',
			'fio' : fio,
			'phone' : phone
		};
		if(errors == 0) {
			$.post('/mail/', A , function(data){
				$('#fio_zamer').val('');
				$('#phone_zamer').val('');
				$('div.toggle_box').removeClass('opened');
			});
			location.hash = 'send_zamer';
		}
	});
	$('#send-resp').on('submit',function(e){
		e.preventDefault();
		var errors = 0;
		var _ = $(this);
		var fio = $('#fio_resp');
		var text = $('#text_resp');
		if( fio.val() ) {
			fio.css({'border-color':'#B9B9B9'});
		} else {
			fio.css({'border-color':'#b0356a'});
			errors = 1;
		}
		if( text.val() ) {
			text.css({'border-color':'#B9B9B9'});
		} else {
			text.css({'border-color':'#b0356a'});
			errors = 1;
		}

		var A = {
			action : 'resp',
			'fio' : fio.val(),
			'text' : text.val()
		};
		if(errors == 0) {
			_.hide();
			$('.thanks').show();
			$.post('/mail/', A , function(data){
				fio.val('');
				text.val('');
			});
			location.hash = 'send_resp';
		}
	});
	$(document).on("click touchstart", function(event) {
		if($(event.target).closest("#toggle_box2, #toggle_box3, .toggle_link_extra, .toggle_link_extra2").length) return;
		$("#toggle_box2.active, #toggle_box3.active").hide();
		event.stopPropagation();
	});
	var videoOwlCarousel = $('.owl-carousel.videoYoutube');
	videoOwlCarousel.owlCarousel({
		items:1,
		merge:true,
		loop:true,
		margin:10,
		video:true,
		lazyLoad:true,
		center:true,
		responsive:{
			480:{
				items:2
			},
			600:{
				items:4
			}
		}
	});
	$('.owl-carousel.resp').owlCarousel({
		margin: 10 ,
		nav: true ,
		smartSpeed:1000,
		items: 1,
		autoHeight: true,
		dots: true
	});
})(jQuery);


function initMap() {
	var style = [
		{"featureType": "all", "elementType": "labels.text.fill", "stylers": [{"saturation": 36 }, {"color": "#000000"}, {"lightness": 40 } ] },
		{"featureType": "all", "elementType": "labels.text.stroke", "stylers": [{"visibility": "on"}, {"color": "#000000"}, {"lightness": 16 } ] },
		{"featureType": "all", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] },
		{"featureType": "administrative", "elementType": "geometry.fill", "stylers": [{"color": "#000000"}, {"lightness": 20 } ] },
		{"featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{"color": "#000000"}, {"lightness": 17 }, {"weight": 1.2 } ] },
		{"featureType": "landscape", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 20 } ] },
		{"featureType": "poi", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 21 } ] },
		{"featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{"color": "#000000"}, {"lightness": 17 } ] },
		{"featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{"color": "#000000"}, {"lightness": 29 }, {"weight": 0.2 } ] },
		{"featureType": "road.arterial", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 18 } ] },
		{"featureType": "road.local", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 16 } ] },
		{"featureType": "transit", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 19 } ] },
		{"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 17 } ] }
	];

	var m_z = 12;
	var latitude = 59.960510,
	longitude = 30.320341,
	map_zoom = m_z;
	var marker_url = '/wp-content/themes/ecma-cn3bie/img/marker.png';
	var map_options = {
		center: new google.maps.LatLng(51.703271, 36.165077),
		zoom: map_zoom,
		disableDoubleClickZoom: true,
		mapTypeControl: true,
		scaleControl: true,
		scrollwheel: true,
		panControl: true,
		streetViewControl: true,
		draggable : true,
		overviewMapControl: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	};
	var styledMapType = new google.maps.StyledMapType(style, {name: 'Styled Map'});
	var map = new google.maps.Map(document.getElementById('maps-area'), map_options);
	var marker1 = new google.maps.Marker({
		position: new google.maps.LatLng(51.670437, 36.073761),
		map: map,
		visible: true,
		title: 'ул. Менделеева 47Б'
	});
	var marker2 = new google.maps.Marker({
		position: new google.maps.LatLng(51.731173, 36.263993),
		map: map,
		visible: true,
		title: 'ул. 3я Агрегатная 23 з'
	});
	var titleStreet1 = new google.maps.InfoWindow({content: "<span>Наш офис продаш находится по адресу<br>ул. Менделеева 47б</span>"});
	var titleStreet2 = new google.maps.InfoWindow({content: "<span>Наш офис продаш находится по адресу<br>ул. 3я Агрегатная 23 з</span>"});
	google.maps.event.addListener(marker1, 'click', function() {titleStreet1.open(map,marker1); });
	google.maps.event.addListener(marker2, 'click', function() {titleStreet2.open(map,marker2); });
}