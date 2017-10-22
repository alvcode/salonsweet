$(function(){

	$(".ps-btn-custom").click(function(event) {
		yaCounter45326019.reachGoal('ONLINE_CLICK');
	});

	$(".intro-more-button").click(function(event) {
		var moreCoords = $(".scr-3").offset().top;
		$("html, body").animate({scrollTop: moreCoords}, 800);
	});

	var setClientWidth = $(window).width();

	function setBxSlider(){
		if (setClientWidth < 997 && setClientWidth > 400) {
			$('.slider4').bxSlider({
			    slideWidth: 200,
			    /*slideHeight: 300,*/
			    minSlides: 3,
			    maxSlides: 3,
			    moveSlides: 1,
			    slideMargin: 25
			  });
		}else if (setClientWidth < 399) {
			$('.slider4').bxSlider({
			    slideWidth: 200,
			    /*slideHeight: 300,*/
			    minSlides: 2,
			    maxSlides: 2,
			    moveSlides: 1,
			    slideMargin: 25
			  });
		}else{
			$('.slider4').bxSlider({
			    slideWidth: 200,
			    /*slideHeight: 300,*/
			    minSlides: 4,
			    maxSlides: 4,
			    moveSlides: 1,
			    slideMargin: 25
			  });
		}
	}

	/*setBxSlider();*/

	var testPageText = $(".testPage").text();

	function testPage(){
		if (testPageText == 'index') {
			setBxSlider();
		}else{
			return false;
		}
	}

	testPage();
	

	$(".scr-2-card").hover(function() {
		$(this).children('article:nth-of-type(2)').fadeToggle(300);
	});


	$(".scr-6-button a").click(function(event) {
		$(".subscribe").slideToggle(300);
	});


	$(".hamburger").click(function(event) {
		$(".main-menu").removeClass('fadeOutRight');
		$(".main-menu").addClass('fadeInRight animated');
		$(".main-menu").css('display', 'block');
	});

	$(".close i").click(function(event) {
		$(".main-menu").removeClass('fadeInRight');
		$(".main-menu").addClass('fadeOutRight animated');
		/*$(".main-menu").css('display', 'none');*/
	});


	/*$(".action--constant-card").mouseenter(function(event) {
		$(this).find('.action--constant-more').removeClass('fadeOutRight');
		$(this).find('.action--constant-more').addClass('fadeInRight animated').css('display', 'block');
	});

	$(".action--constant-card").mouseleave(function(event) {
		$(this).find('.action--constant-more').removeClass('fadeInRight');
		$(this).find('.action--constant-more').addClass('fadeOutRight animated');
	});*/

	$(".action--constant-card article").click(function(event) {
		$("body").delay(2000).css('overflowY', 'hidden');
		$(this).parent().find('section').removeClass('fadeOutLeft');
		$(this).parent().find('section').addClass('fadeInLeft animated').css('display', 'block');
	});

	$(".action--constant-pop-back").click(function(event) {
		$("body").css('overflowY', 'auto');
		$(this).parent().removeClass('fadeInLeft');
		$(this).parent().addClass('fadeOutLeft animated');
	});

	var starCount = 0;
	var q;

	$(".reviews-star i").eq(starCount).css('color', '#ff0048');
	$(".input-star").attr('value', starCount + 1);

	$(".reviews-star i").click(function(event) {
		starCount = $(this).index();
		$(".input-star").attr('value', starCount + 1);
		for (var i = 0; i <= 4; i++) {
			if (i <= starCount) {
				$(".reviews-star i").eq(i).css('color', '#ff0048');
			}else{
				$(".reviews-star i").eq(i).css('color', 'white');
			}
		}
	});


	var postStarCount;
	var commentsPost = $(".reviews--comments-post").length - 1;

	for (var i = 0; i <= commentsPost; i++) {
		postStarCount = +$(".reviews--comments-post").eq(i).find('.reviews--post-count').text();
		for (var q = 0; q <= postStarCount - 1; q++) {
			$(".reviews--comments-post").eq(i).find('.reviews--post-star i').eq(q).css('color', '#ff0048');
		}
	}



	/*======= Прайс-лист =========*/

	var priceGenderCount = 0;
	var priceRoomCount = 0;
	var genderArray = ['female-room', 'male-room'];

	$(".gender--tabs span").eq(priceGenderCount).css({
		backgroundColor: '#ff0048',
		color: 'white'
	});

	function setPrice(){
		$(".room--tabs").eq(priceGenderCount).css('display', 'flex');
		$(".room--tabs").eq(priceGenderCount).find('span').eq(priceRoomCount).css('borderBottom', '2px solid #ff0048');
		$("." + genderArray[priceGenderCount]).eq(priceRoomCount).css('display', 'block');
		
	}

	function resetPrice(){
		$(".room--tabs").eq(priceGenderCount).css('display', 'none');
		$(".room--tabs").eq(priceGenderCount).find('span').eq(priceRoomCount).css('borderBottom', '');
		$("." + genderArray[priceGenderCount]).eq(priceRoomCount).css('display', 'none');
	}

	setPrice();

	$(".gender--tabs span").click(function(event) {
		$(".gender--tabs span").eq(priceGenderCount).css({
			backgroundColor: '',
			color: ''
		});

		resetPrice();

		priceGenderCount = $(this).index();
		priceRoomCount = 0;

		setPrice();

		$(".gender--tabs span").eq(priceGenderCount).css({
			backgroundColor: '#ff0048',
			color: 'white'
		});
	});



	$(".room--tabs span").click(function(event) {
		$(".room--tabs").eq(priceGenderCount).find('span').eq(priceRoomCount).css('borderBottom', '');
		$("." + genderArray[priceGenderCount]).eq(priceRoomCount).css('display', 'none');

		priceRoomCount = $(this).index();

		$(".room--tabs").eq(priceGenderCount).find('span').eq(priceRoomCount).css('borderBottom', '2px solid #ff0048');
		$("." + genderArray[priceGenderCount]).eq(priceRoomCount).css('display', 'block');
	});




/*== Работа с куками для всплывающего окна со скидкой 
	первым посетившим сайт сроком на пол года ==*/
	$(".pop-up-close").click(function(event) {
		$(".action-pop-up").fadeOut(300);
		$("body").css('overflowY', 'auto');
	});
	/*Закрываем окно по клику на пустую область*/
	$(".action-pop-up").click(function(event) {
		var f = $(".action-center");
		if (!f.is(event.target) && f.has(event.target).length === 0){
			$(".action-pop-up").fadeOut(300);
			$("body").css('overflowY', 'auto');
		}
	});

	var cookieName = $.cookie('pop-up-action');

	if (cookieName == null && testPageText == 'price') {
		$(".action-pop-up").fadeIn(300);
		$("body").css('overflowY', 'hidden');
		$.cookie('pop-up-action', 'yes', {
			expires: 185,
			path: '/'
		});
	}else if (cookieName == 'yes' && testPageText == 'price') {
		return;
	}


	function goPopUp(){
		if (cookieName == null) {
			$(".action-pop-up").fadeIn(300);
			$("body").css('overflowY', 'hidden');
			$.cookie('pop-up-action', 'yes', {
				expires: 185,
				path: '/'
			});
		}else if (cookieName == 'yes') {
			$(".action-pop-up").fadeIn(300);
			$("body").css('overflowY', 'hidden');
		}
	}

	$(".starts-pop-up").click(function(event) {
		goPopUp();
	});


/* == Защита от спама формы подписки на новости на главной ==*/
	$(".index-sub-form").click(function(event) {
		$(".f-guard").attr('value', 'Валидация');

		if ( $(".f-guard").attr('value') == 'Валидация' ) {
			$('.index-form').submit();
		}
	});


/* == Защита от спама формы всплывающего окна со скидкой 10% ==*/
	$(".popup-sub-form").click(function(event) {
		$(".pop-guard").attr('value', 'Валидация');

		if ( $(".pop-guard").attr('value') == 'Валидация' ) {
			$('.form-popup').submit();

			setTimeout(function(){
				$(".action-pop-up").fadeOut(300);
				$("body").css('overflowY', 'auto');
			}, 2000);

		}

		yaCounter45326019.reachGoal('FIRST_CLICK');
	});

	$(".pop_check").change(function(event) {
		if ($(".pop_check").prop("checked") == true) {
			$(".pop_checkbox").attr('value', 'Согласен');
		}else{
			$(".pop_checkbox").attr('value', '');
		}
	});



/*== Индивидуальная страница мастера \ Создание галереи ==*/
var personalPhotoCount = $(".personal--photo-count").text();
var personalPhotoFolder = $(".personal--photo-folder").text();
/*var personalHoldCount = 10;*/

function personalGalleryOne(){
	if (personalPhotoCount <= 10) {
		for (var i = 1; i <= personalPhotoCount; i++) {
			$(".personal--fancy-container").append('<a data-fancybox="gallery" href="assets/img/work/' + personalPhotoFolder + '/' + i + '.jpg"><img src="assets/img/work/' + personalPhotoFolder + '/' + i + '.jpg"></a>');
		}
	}else if (personalPhotoCount > 10) {
		$(".personal--gallery-more").css('display', 'block');

		for (var i = 1; i <= 10; i++) {
			$(".personal--fancy-container").append('<a data-fancybox="gallery" href="assets/img/work/' + personalPhotoFolder + '/' + i + '.jpg"><img src="assets/img/work/' + personalPhotoFolder + '/' + i + '.jpg"></a>');
		}
	}
}

personalGalleryOne();

$(".personal--gallery-more").click(function(event) {
	$(".personal--gallery-more").css('display', 'none');

	for (var i = 11; i <= personalPhotoCount; i++) {
		$(".personal--fancy-container").append('<a data-fancybox="gallery" href="assets/img/work/' + personalPhotoFolder + '/' + i + '.jpg"><img src="assets/img/work/' + personalPhotoFolder + '/' + i + '.jpg"></a>');
	}
});



});