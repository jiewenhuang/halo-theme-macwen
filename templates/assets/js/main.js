// $('.sidebar-menu li:not(.menu-item) > a').on('click', function(){
//     var $parent = $(this).parent().addClass('active');
//     $parent.siblings('.menu-item.active').find('> a').trigger('click');
//     $parent.siblings().removeClass('active').find('li').removeClass('active');
// });
//
// $(window).on('load', function(){
//     $('.sidebar-menu a').each(function(){
//         // console.log(this);
//         var cur = window.location.href;
//         var url = this.href;
//         // console.log(cur.match(url));
//         if(cur.match(url)){
//             $(this).parent().addClass('active')
//                 .closest('.sub-menu').addClass('sub-open')
//                 .closest('.menu-item').addClass('active');
//         }
//     });
// });