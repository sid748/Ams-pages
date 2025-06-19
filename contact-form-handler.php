<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer classes
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

// Create PHPMailer instance
$mail = new PHPMailer(true);

try {
    // Form data
    $name     = htmlspecialchars(trim($_POST['name']));
    $phone    = htmlspecialchars(trim($_POST['phone']));
    $email    = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $website  = htmlspecialchars(trim($_POST['website']));
    $message  = htmlspecialchars(trim($_POST['message']));

    // Validation
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception("Invalid email address.");
    }
    if (!preg_match("/^[0-9]{10}$/", $phone)) {
        throw new Exception("Phone number must be 10 digits.");
    }

    // SMTP config
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'amslast.info@gmail.com';          // Your Gmail
    $mail->Password   = 'rauo gpvl hxae ebgw';             // App password
    $mail->SMTPSecure = 'tls';                             // Encryption
    $mail->Port       = 587;

    // Email setup
    $mail->setFrom('amslast.info@gmail.com', 'AMS Website');    // Sender
    $mail->addAddress('salesamsshoelast@gmail.com');            // Recipient
    $mail->addReplyTo($email, $name);                           // Reply-To user

    $mail->isHTML(false); // Use plain text (or set true for HTML)
    $mail->Subject = "New Contact Form Submission";
    $mail->Body    =
        "Name: $name\n" .
        "Phone: $phone\n" .
        "Email: $email\n" .
        "Website: $website\n\n" .
        "Message:\n$message";

    $mail->send();
    echo "Thank you! Your message has been sent successfully.";
} catch (Exception $e) {
    echo "Mailer Error: {$mail->ErrorInfo}";
}
