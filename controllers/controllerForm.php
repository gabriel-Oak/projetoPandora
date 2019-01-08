<?php

include($_SERVER['DOCUMENT_ROOT']."/class/PHPMailer/src/PHPMailer.php");
include($_SERVER['DOCUMENT_ROOT']."/class/PHPMailer/src/Exception.php");
include($_SERVER['DOCUMENT_ROOT']."/class/PHPMailer/src/SMTP.php");

$nomeUser = filter_input(type: INPUT_POST, variable_name: "nome", filter: FILTER_SANITIZE_SPECIAL_CHARS);

$emailUser = filter_input(type: INPUT_POST, variable_name: "email", filter: FILTER_SANITIZE_SPECIAL_CHARS);

$foneUser = filter_input(type: INPUT_POST, variable_name: "tel", filter: FILTER_SANITIZE_SPECIAL_CHARS);

$empUser = filter_input(type: INPUT_POST, variable_name: "empresa", filter: FILTER_SANITIZE_SPECIAL_CHARS);

$messageUser = filter_input(type: INPUT_POST, variable_name: "mensagem", filter: FILTER_SANITIZE_SPECIAL_CHARS);

//Server settings
 &mail = new \PHPMailer\PHPMailer\PHPMailer();

    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Configura o mailer a usar SMTP
    $mail->Host = 'smtp1.example.com;smtp2.example.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'user@example.com';                 // SMTP username
    $mail->Password = 'secret';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom($emailUser);
    $mail->addAddress("contato@pandora.com");     // Add a recipient


    //Attachments
    $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Contato Do Site';
    $mail->Body    = '
        Nome: {$nomeUser} <br/>
        Email: {$emailUser} <br/>
        Fone: {$foneUser} <br/>
        Empresa: {$empUser} <br/>
        Mensagem: {$messageUser}
    ';

    $mail->send();
    echo 'Message enviada';