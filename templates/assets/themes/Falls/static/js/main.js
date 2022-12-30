//搜索
$('.header-search').on('click', function() {
	$('.search-wrap').toggleClass("show");
});
$('.icon-close').on('click', function() {
	$('.search-wrap').removeClass("show");
});

//回到顶部
$(function() {
	$(".gotop").hide();
	$(window).bind('scroll',function(){
		if($(window).scrollTop()<=150){
			$(".gotop").hide();
		}else{
			$(".gotop").show();
		}
	});
	$(".gotop").bind("click",function(){
		$('html, body').animate({scrollTop: 0},0);
	});
});


//搜索
$(document).ready(function(){
	$('.search-loader .icon-search').on('click', function() {
		$('body').toggleClass("open-search-form");
	});
	$('.search-form .icon-close').on('click', function() {
		$('body').removeClass("open-search-form");
	});
});

//焦点图
$('.slider').owlCarousel({
	items:1,
	loop:true,
	margin:10,
	dots:true,
	nav:false,
	autoplay:false,
	autoplayTimeout:8000,
	smartSpeed: 2000,
	navText: ['<i class="icon icon-left"></i>', '<i class="icon icon-right"></i>'],
})
//
$('.owl-macbook').owlCarousel({
	items:1,
	loop:true,
	margin:0,
	dots:false,
	nav:true,
	autoplay:false,
	autoplayTimeout:3000,
	navText: ['<i class="icon icon-left"></i>', '<i class="icon icon-right"></i>'],
})
//
$('.owl-perfect').owlCarousel({
	items:1,
	loop:true,
	margin:0,
	dots:true,
	nav:true,
	autoplay:true,
	autoplayTimeout:3000,
	navText: ['<i class="icon icon-left"></i>', '<i class="icon icon-right"></i>'],
})

$('.m-slider').owlCarousel({
    center: true,
    items:1,
    loop:true,
    dots:false,
	nav:false,
    margin:10,
});


$('.sidebar-menu li:not(.menu-item) > a').on('click', function(){
	var $parent = $(this).parent().addClass('active');
	$parent.siblings('.menu-item.active').find('> a').trigger('click');
	$parent.siblings().removeClass('active').find('li').removeClass('active');
});

$(window).on('load', function(){
	$('.sidebar-menu a').each(function(){
		// console.log(this);
		const cur = window.location.href;
		const url = this.href;
		// console.log(cur.match(url));
		if(cur.match(url)){
			$(this).parent().addClass('current-menu-item active')
			.closest('.sub-menu').addClass('sub-open')
			.closest('.menu-item').addClass('active');
		}
	});
});
$(document).ready(function() {
	$.fn.postLike = function() {
		if ($(this).hasClass('done')) {
			return false;
		} else {
			$(this).addClass('done');
			var id = $(this).data("id"),
			action = $(this).data('action'),
			rateHolder = $(this).children('.count');
			var ajax_data = {
				action: "bigfa_like",
				um_id: id,
				um_action: action
			};
			$.post(
				_macwen.url+'/wp-admin/admin-ajax.php', ajax_data,
				function(data) {
					$(rateHolder).html(data);
				});
			return false;
		}
	};
	$(document).on("click", ".zan",
		function() {
			$(this).postLike();
		}
	);
});


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
document.documentElement.setAttribute('class', currentTheme);

if (currentTheme === 'dark') {
  toggleSwitch.checked = true;
}
}

function switchTheme(e) {
if (e.target.checked) {
  document.documentElement.setAttribute('class', 'dark');
  localStorage.setItem('theme', 'dark');
} else {
  document.documentElement.setAttribute('class', 'light');
  localStorage.setItem('theme', 'light');
}
}
toggleSwitch.addEventListener('change', switchTheme, false);
