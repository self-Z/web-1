$(function () {


   var mixer = mixitup('.ourBlog__items');
   $('.ourBlog__button-box-btn').on('click', function () {
      $('.ourBlog__button-box-btn').removeClass('btn-active')
      $(this).addClass('btn-active')
   })
})


