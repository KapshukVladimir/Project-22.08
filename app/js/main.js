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
    nextArrow: '<div class="slider-arrows slider-arrows__right" alt=""></div>'
  });
  $('.slick-slider1').slick({
    slidesToShow:3,
    slidesToScroll:3,
    infinite: false,
    prevArrow: '<div class="slider-arrows slider-arrows__left--1" alt=""></div>',
    nextArrow: '<div class="slider-arrows slider-arrows__right--1" alt=""></div>'
  });

  $('.slider-arrows__left').css({'display':'none'});
  $('.slider-arrows__left--1').css({'display':'none'});

  $('.slider-arrows__right').on('click', function(){
    $('.slider-arrows__right').css({'display':'none'});
    $('.slider-arrows__left').css({'display':'inline'});
    $('.slider-container').css({'margin-right':'0', 'margin-left':'auto'});
  });
  $('.slider-arrows__right--1').on('click', function(){
    $('.slider-arrows__right--1').css({'display':'none'});
    $('.slider-arrows__left--1').css({'display':'inline'});
    $('.slider-container--1').css({'margin-right':'0', 'margin-left':'auto'});
  });
  $('.slider-arrows__left').on('click',function(){
    $('.slider-arrows__left').css({'display':'none'});
    $('.slider-arrows__right').css({'display':'inline'});
    $('.slider-container').css({'margin-right':'auto', 'margin-left':'0'});
  });
  $('.slider-arrows__left--1').on('click',function(){
    $('.slider-arrows__left--1').css({'display':'none'});
    $('.slider-arrows__right--1').css({'display':'inline'});
    $('.slider-container--1').css({'margin-right':'auto', 'margin-left':'0'});
  });

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

