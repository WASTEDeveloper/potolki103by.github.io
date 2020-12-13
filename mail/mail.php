<?php

$recepient = "a.shabalinski@gmail.com";
$siteName = "POTOLKI103.BY";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$type = trim($_POST["type"]);
$message = "Имя: $name \nТелефон: $phone \nE-mail: $email \nТип потолка: $type";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>