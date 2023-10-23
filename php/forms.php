<?php

require_once('constants.php');

if (isset($_POST['interest'])) {
//    $name = !empty($_POST['name']) ? $_POST['name'] : 'null';
//    $telephone = !empty($_POST['telephone']) ? $_POST['telephone'] : 'null';
//    $company = !empty($_POST['company']) ? $_POST['company'] : 'null';
//    $email = !empty($_POST['email']) ? $_POST['email'] : 'null';

    $name = $_POST['name'];
    $telephone = $_POST['telephone'];
    $company = $_POST['company'];
    $email = $_POST['email'];

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

    sendTelegramMessage($subject);

} elseif (isset($_POST['sidebar'])) {
    $name = $_POST['name'];
    $telephone = $_POST['telephone'];
    $city = $_POST['city'];
    $field = $_POST['field'];

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

    sendTelegramMessage($subject);
}

function sendTelegramMessage($subject)
{
    $textMessage = "Вам новое письмо!\n\nС темой:\n\n<b>'{$subject}'</b>\n\n<i>Не забудьте проверить почту!</i>";
    $textMessage = urlencode($textMessage);

    $urlQuery = 'https://api.telegram.org/bot' . TG_TOKEN . '/sendMessage?chat_id=' . TG_USER_ID . '&text=' . $textMessage . '&parse_mode=html';

    var_dump($urlQuery);

    $result = file_get_contents($urlQuery);

    var_dump($result);
}