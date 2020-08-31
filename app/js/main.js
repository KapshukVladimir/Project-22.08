$(function () {
  $('.carousel').carousel({
    from: 0,
    to: 1,
    interval: 0
  });
  $('.slick-slider').slick({
    slidesToShow:3,
    slidesToScroll:3,
    infinite: false,
    prevArrow: '<div class="slider-arrows slider-arrows__left" alt=""></div>',
    nextArrow: '<div class="slider-arrows slider-arrows__right" alt=""></div>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow: '<div class="slider-arrows slider-arrows__left" alt=""></div>',
          nextArrow: '<div class="slider-arrows slider-arrows__right" alt=""></div>',
        }
      },
      {
        breakpoint: 767.89,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 575.89,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
        }
      }
    ]
  });
  $('.slick-slider1').slick({
    slidesToShow:3,
    slidesToScroll:3,
    infinite: false,
    prevArrow: '<div class="slider-arrows slider-arrows__left--1" alt=""></div>',
    nextArrow: '<div class="slider-arrows slider-arrows__right--1" alt=""></div>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          autoplaySpeed:2000,
          arrows: false
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true
        }
      },
      {
        breakpoint: 575.89,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
  let counter = 0;
  // console.log($('.slider-item').length);
  // console.log($('.slick-current').length);
  $('.slider-arrows__left').css({'display':'none'});
  $('.slider-arrows__left--1').css({'display':'none'});

  function checker(first){
    if (first){
    if($('.slider-arrows__right.slick-disabled').length){
      return true;
    }else if($('.slider-arrows__left.slick-disabled').length){
      return true;
    }
      return false;
    }else {
      if ($('.slider-arrows__left--1.slick-disabled').length){
        return true;
      }else if ($('.slider-arrows__right--1.slick-disabled').length){
        return true;
      }
      return false;
    }
  }

  $('.slider-arrows__right').on('click', function(){
    if(checker(1)){
    $('.slider-arrows__right').css({'display':'none'});
    $('.slider-arrows__left').css({'display':'inline'});
    $('.slider-container').css({'margin-right':'0', 'margin-left':'auto'});
    $('.slick-disabled').length = 0;
    }
  });
  $('.slider-arrows__right--1').on('click', function(){
    if(checker()){
    $('.slider-arrows__right--1').css({'display':'none'});
    $('.slider-arrows__left--1').css({'display':'inline'});
    $('.slider-container--1').css({'margin-right':'0', 'margin-left':'auto'});
    $('.slick-disabled').length = 0;
    }
  });
  $('.slider-arrows__left').on('click',function(){
    if(checker(1)) {
      $('.slider-arrows__left').css({'display': 'none'});
      $('.slider-arrows__right').css({'display': 'inline'});
      $('.slider-container').css({'margin-right': 'auto', 'margin-left': '0'});
      $('.slick-disabled').length = 0;
    }
  });
  $('.slider-arrows__left--1').on('click',function(){
    if(checker()) {
      $('.slider-arrows__left--1').css({'display': 'none'});
      $('.slider-arrows__right--1').css({'display': 'inline'});
      $('.slider-container--1').css({'margin-right': 'auto', 'margin-left': '0'});
      $('.slick-disabled').length = 0;
    }
  });


  /*BURGER*/
  $(window).on('click',function (event) {
    if (event.target===$('.navbar-toggler')[0]||event.target===$('.toggler-item')[0]){
      $('.substrate').addClass('active');
      $('.top-menu').addClass('active');
      $('body').css('overflow','hidden');
    }else if(event.target===$('.substrate')[0]||event.target===$('.close')[0]||event.target===$('.close-item')[0]){
      $('body').css('overflow','visible');
      $('.substrate').removeClass('active');
      $('.top-menu').removeClass('active');
    }
  });
  /*BURGER*/


  $("#sendMail").on('click', function () {
    let name = $("#name").val().trim();
    let phone = $('#phone').val().trim();
    let address = $('#address').val().trim();

    if(name==''){
      $('#errorMess').text('Введите имя!');
      return false;
    } else if (phone==''){
      $('#errorMess').text('Введите телефон!');
      return false;
    }else if (address.length<5){
      $('#errorMess').text('Введите адресс!');
      return false;
    }
    $('#errorMess').text('');

    $.ajax({
      url:'ajax/mail.php',
      type: 'POST',
      cache: false,
      data: {'name': name, 'phone': phone, 'address': address},
      dataType:'html',
      beforeSend: function() {
        $('#sendMail').prop('disabled', true);
      },
      success: function(data){
        if (!data){
          alert('Были ошибки! Упс...');
        }else {
          $('#formMail').trigger('reset');
        }
        $('#sendMail').prop('disabled', false);
      }
    })
  })
});
