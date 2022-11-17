$(document).ready(function () {
   $('.fnq_box1 .fnq:eq(0)').click(function () {
      $('.fnq:eq(0) h4').slideToggle();
      if ($('.fnq:eq(0) h4').hasClass('click')) {
         $('.fnq:eq(0) h4').removeClass('click');
      } else $('.fnq:eq(0) h4').addClass('click');
   });

   $('.fnq_box1 .fnq:eq(1)').click(function () {
      $('.fnq:eq(1) h4').slideToggle();
      if ($('.fnq:eq(1) h4').hasClass('click')) {
         $('.fnq:eq(1) h4').removeClass('click');
      } else $('.fnq:eq(1) h4').addClass('click');
   });

   $('.fnq_box1 .fnq:eq(2)').click(function () {
      $('.fnq:eq(2) h4').slideToggle();
      if ($('.fnq:eq(2) h4').hasClass('click')) {
         $('.fnq:eq(2) h4').removeClass('click');
      } else $('.fnq:eq(2) h4').addClass('click');
   });

   $('.fnq_box2 .fnq:eq(0)').click(function () {
      $('.fnq_box2 .fnq:eq(0) h4').slideToggle();
      if ($('.fnq_box2 .fnq:eq(0) h4').hasClass('click')) {
         $('.fnq_box2 .fnq:eq(0) h4').removeClass('click');
      } else $('.fnq_box2 .fnq:eq(0) h4').addClass('click');
   });

   $('.fnq_box2 .fnq:eq(1)').click(function () {
      $('.fnq_box2 .fnq:eq(1) h4').slideToggle();
      if ($('.fnq_box2 fnq:eq(1) h4').hasClass('click')) {
         $('.fnq_box2 fnq:eq(1) h4').removeClass('click');
      } else $('.fnq_box2 fnq:eq(1) h4').addClass('click');
   });

   $('.fnq_box2 .fnq:eq(2)').click(function () {
      $('.fnq_box2 .fnq:eq(2) h4').slideToggle();
      if ($('.fnq_box2 .fnq:eq(2) h4').hasClass('click')) {
         $('.fnq_box2 .fnq:eq(2) h4').removeClass('click');
      } else $('.fnq_box2 .fnq:eq(2) h4').addClass('click');
   });
});
