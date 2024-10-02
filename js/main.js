$(function () {


   var mixer = mixitup('.ourBlog__items');
   $('.ourBlog__button-box-btn').on('click', function () {
      $('.ourBlog__button-box-btn').removeClass('btn-active')
      $(this).addClass('btn-active')
   })

   $('.coments__box').slick({
      arrows: false,
      slidesToShow: 2,
      Infinity: true,
   })
   $('.coments__box-next').on('click', function (e) {
      e.preventDefault()
      $('.coments__box').slick('slickNext')
   })
   $('coments__box-prew').on('click', function (e) {
      e.preventDefault()
      $('.coments__box').slick('slickPrev')
   })
})


