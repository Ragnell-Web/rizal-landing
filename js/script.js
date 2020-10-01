// $('.page-scroll').on('click', function(e){
	
// 	// ambil isi href
// 	var tujuan = $(this).attr('href');
// 	// tangkap elemen yang bersangkutan
// 	var elemenTujuan = $(tujuan);

// 	// pindahkan scroll
// 	$('body').animate({
// 		scrollTop: (elemenTujuan.offset().top - 50)
// 	},1000);

// 	e.preventDefault();

// });

// 

// parallax
// 
// About
// 
$(window).on('load', function(event) {
	
	$('.kiri').addClass('muncul');
	$('.kanan').addClass('muncul');
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	// jumbotron

	$('.jumbotron img').css({
		'transform' : 'translate(0, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0, '+ wScroll/1.2 +'%)'
	});

	// portfolio
	 
	if (wScroll > $('.portfolio').offset().top - 200) {
		$('.portfolio .thumbnail').each(function() {
			setTimeout(function() {
			  console.log('ok');
			}, 2000);
		});
	}

});