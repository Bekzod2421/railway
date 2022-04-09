window.log = function(param){
    console.log(param);
};

$(function(){

	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
		isApple = /iPod|iPad|iPhone/i.test(navigator.userAgent),
		$doc = $(document),
		$win = $(window),
		$html = $(document.documentElement);

	$('table').wrap('<div class="table-wrapper"></div>');

	resizeController(1260, function() {
		log("Функция будет вызвана меньше чем 1260");
	}, function() {
		log("Функция будет вызвана больше чем 1260");
	});

	/*alignElements*/
	function blocksMatchHeight(arr) {
		for (var i = 0; i< arr.length; i++) {
			$(arr[i]).matchHeight();
		}
	}
	var alignElemets = function(){
		blocksMatchHeight([
			'.test'
		]);	
	}
	alignElemets();
	/*alignElements*/

	/*orientationChange*/
	window.addEventListener("orientationchange", function() {
		setTimeout(alignElemets, 500);
		log("orientationChange");
	}, false);
	/*orientationChange*/


	// Esc button
    $doc.on('keyup', function(keyUp){
	    if (keyUp.keyCode 
	    	== 27) {

	    	$('.block').removeClass('active');
	      	$html.removeClass('overflowHidden');
	    	
	        return false;
	    };
	});
	// Esc button

	// Document click begin
	$doc.on('click', function(event){
        if ( $(event.target).closest('.wrapper, .ui-datepicker, .ui-datepicker a, .ui-corner-all').length ){}else {
        	$('.block').removeClass('active');
	      	$html.removeClass('overflowHidden');
        };
    });
    // Document click end
    $(document).ready(function(){

    //-------------------------------- HEADER SLIDER ------------------------------------------------------//
    $('.head-slider').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    dots:false,
	    navText: ["<img src='img/prev.svg'>","<img src='img/next.svg'>"],
	    items:1
	});
    //-------------------------------- HEADER SLIDER END --------------------------------------------------//


    //-------------------------------- PARTNER SLIDER --------------------------------------------------//

    $('.par__slide').owlCarousel({
    loop:true,
    margin:90,
    nav:true,
    dots:false,
    autoWidth:true,
    // center:true,
    navText: ["<img src='img/pprev.svg'>","<img src='img/pnext.svg'>"],
    items:4,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        426:{
            items:1,
            nav:false,
            margin:10
        },
        767:{
            items:2,
            nav:false
        },
        768:{
        	items:2,
            margin:110,

        },
        1024:{
            items:3
        },
        1220:{
            items:4
        }
    }
	});

    //-------------------------------- PARTNER SLIDER END --------------------------------------------------//

  	$('.lang').children('a').click(function(){
  		$(this).parent().find('ul').children('li').toggleClass('open');
  		// $(this).parent().find('ul').children('li').slideToggle(500);
  		// $(this).toggleClass('up');
  	
  		
  	});

    var mql = window.matchMedia('all and (max-width: 1220px)');

    if(mql.matches){
        $('.tmenu').addClass('hasburger');
        $('.tmenu .left-menu').appendTo($('.mmenu'));
        $('.tmenu .right-menu').appendTo($('.mmenu'));
        $('.burger').addClass('show');
    }
    else {
        $('.mmenu ul').appendTo($('.tmenu'));
    }

    $('.mmenu ul li').has('ul').children('a').addClass('haschild');
    $('.haschild').after().click(function(){
        $(this).parent().find('ul').slideToggle(500);
        $(this).toggleClass('open');
    });

    $('.burger').hover(function(){
    $(this).children('img').each(function () {
            var $e = $(this);
            var imgURL = $e.prop('src');
            $.get(imgURL, function (data) {
              var $svg = $(data).find('svg');
              $svg.find('.cls-1').css('fill', '#ffcb8f');
              $svg.find('.cls-2').css('fill', '#ffcb8f');
              $svg.find('.cls-3').css('fill', '#ffcb8f');
              $svg.find('.cls-4').css('fill', '#ffcb8f');
              $svg.find('.cls-5').css('fill', '#ffcb8f');
              $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
            });
        });
      },
            function(){
                $(this).children('img').each(function () {
                var $e = $(this);
                var imgURL = $e.prop('src');
                $.get(imgURL, function (data) {
                  var $svg = $(data).find('svg');
                  $svg.find('.cls-1').css('fill', '#fff');
                  $svg.find('.cls-2').css('fill', '#fff');
                  $svg.find('.cls-3').css('fill', '#fff');
                  $svg.find('.cls-4').css('fill', '#fff');
                  $svg.find('.cls-5').css('fill', '#fff');
                  $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
                });
            });
            }
      );

    $('.lang a').hover(function(){
    $(this).children('img').each(function () {
            var $e = $(this);
            var imgURL = $e.prop('src');
            $.get(imgURL, function (data) {
              var $svg = $(data).find('svg');
              $svg.find('.cls-1').css('fill', '#ffcb8f');
              $svg.find('.cls-2').css('fill', '#ffcb8f');
              $svg.find('.cls-3').css('fill', '#ffcb8f');
              $svg.find('.cls-4').css('fill', '#ffcb8f');
              $svg.find('.cls-5').css('fill', '#ffcb8f');
              $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
            });
        });
      },
            function(){
                $(this).children('img').each(function () {
                var $e = $(this);
                var imgURL = $e.prop('src');
                $.get(imgURL, function (data) {
                  var $svg = $(data).find('svg');
                  $svg.find('.cls-1').css('fill', '#fff');
                  $svg.find('.cls-2').css('fill', '#fff');
                  $svg.find('.cls-3').css('fill', '#fff');
                  $svg.find('.cls-4').css('fill', '#fff');
                  $svg.find('.cls-5').css('fill', '#fff');
                  $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
                });
            });
            }
      );

    $('.par__slide .owl-prev').hover(function(){
    $(this).children('img').each(function () {
            var $e = $(this);
            var imgURL = $e.prop('src');
            $.get(imgURL, function (data) {
              var $svg = $(data).find('svg');
              $svg.find('.cls-1').css('fill', '#fff');
              $svg.find('.cls-2').css('fill', '#fff');
              $svg.find('.cls-3').css('fill', '#fff');
              $svg.find('.cls-4').css('fill', '#fff');
              $svg.find('.cls-5').css('fill', '#fff');
              $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
            });
        });
      },
            function(){
                $(this).children('img').each(function () {
                var $e = $(this);
                var imgURL = $e.prop('src');
                $.get(imgURL, function (data) {
                  var $svg = $(data).find('svg');
                  $svg.find('.cls-1').css('fill', '#152daa');
                  $svg.find('.cls-2').css('fill', '#152daa');
                  $svg.find('.cls-3').css('fill', '#152daa');
                  $svg.find('.cls-4').css('fill', '#152daa');
                  $svg.find('.cls-5').css('fill', '#152daa');
                  $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
                });
            });
            }
      );

    $('.par__slide .owl-next').hover(function(){
    $(this).children('img').each(function () {
            var $e = $(this);
            var imgURL = $e.prop('src');
            $.get(imgURL, function (data) {
              var $svg = $(data).find('svg');
              $svg.find('.cls-1').css('fill', '#fff');
              $svg.find('.cls-2').css('fill', '#fff');
              $svg.find('.cls-3').css('fill', '#fff');
              $svg.find('.cls-4').css('fill', '#fff');
              $svg.find('.cls-5').css('fill', '#fff');
              $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
            });
        });
      },
            function(){
                $(this).children('img').each(function () {
                var $e = $(this);
                var imgURL = $e.prop('src');
                $.get(imgURL, function (data) {
                  var $svg = $(data).find('svg');
                  $svg.find('.cls-1').css('fill', '#152daa');
                  $svg.find('.cls-2').css('fill', '#152daa');
                  $svg.find('.cls-3').css('fill', '#152daa');
                  $svg.find('.cls-4').css('fill', '#152daa');
                  $svg.find('.cls-5').css('fill', '#152daa');
                  $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
                });
            });
            }
      );

    $('.burger').click(function(){
        $('.dark').addClass('darken');
        $('.mmenu').addClass('opened');
        $('.closer').addClass('show');
    });
    $('.dark').click(function(){
        $(this).removeClass('darken');
        $('.mmenu').removeClass('opened');
        $('.closer').removeClass('show');
    });
    $('.closer').click(function(){
        $(this).removeClass('show');
        $('.mmenu').removeClass('opened');
        $('.dark').removeClass('darken');
    });

    $('.lside__tour div').click(function(){
        $(this).toggleClass('open');
        $(this).parent().find('ul').stop().slideToggle(500);
    });
    $('.lside__tour .ser div').click(function(){
        $(this).toggleClass('open');
        $(this).parent().find('ul').stop().slideToggle(500);
    });

    });
});