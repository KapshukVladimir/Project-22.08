$(function () {
  $('.carousel').carousel({
    from: 0,
    to: 1,
    interval: 0
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

