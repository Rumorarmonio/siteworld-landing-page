<?php

$name = !empty($_POST['name']) ? $_POST['name'] : 'null';
$telephone = !empty($_POST['telephone']) ? $_POST['telephone'] : 'null';
$company = !empty($_POST['company']) ? $_POST['company'] : 'null';
$email = !empty($_POST['email']) ? $_POST['email'] : 'null';

$to = 'yxllwllxy@gmail.com';
$subject = 'форма "интересно и захочется ещё"';
$message = "
<html>
    <body>
        <hr>
        <b>Данные из формы:</b> <br><br>
        ФИО: $name <br> 
        Телефон: $telephone <br> 
        Компания: $company <br>
        Почта: $email <br>
        <hr>
    </body>
</html>
";
$headers = "Content-type: text/html; charset=utf-8\r\n" . 'From: example@example.com' . "\r\n" . 'Reply-To: example@example.com' . "\r\n" . 'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
