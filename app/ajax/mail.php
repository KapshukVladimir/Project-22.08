<?php
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $address = $_POST['address'];
  $message = $name . " " . $phone . " " . $address;

  $subject = "=?utf-8?B?".base64_encode("Сообщение с сайта")."?=";

  $headers = "From: $name\r\nReply-to: $name\r\nContent-type: text/html; charset=utf-8\r\n";

  $success = mail("Kapshukvova@gmail.com", $subject, $message,$headers);

  echo $success;
?>
