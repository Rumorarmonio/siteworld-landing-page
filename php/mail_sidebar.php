<?php

$name = !empty($_POST['nameS']) ? $_POST['nameS'] : 'null';
$telephone = !empty($_POST['telephoneS']) ? $_POST['telephoneS'] : 'null';
$city = !empty($_POST['cityS']) ? $_POST['cityS'] : 'null';
$field = !empty($_POST['fieldS']) ? $_POST['fieldS'] : 'null';

$to = 'yxllwllxy@gmail.com';
$subject = 'форма из сайдбара с рекомендациями';
$message = "
<html>
    <body>
        <hr>
        <b>Данные из формы:</b> <br><br>
        ФИО: $name <br>
        Телефон: $telephone <br>
        Город: $city <br>
        Направление: $field <br>
        <hr>
    </body>
</html>
";
$headers = "Content-type: text/html; charset=utf-8\r\n" . 'From: example@example.com' . "\r\n" . 'Reply-To: example@example.com' . "\r\n" . 'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
