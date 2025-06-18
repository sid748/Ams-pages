<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/srSMTP.php';
require 'PHPMailer/src/Exception.php';

// Gmail SMTP credentials
$mail = new PHPMailer(true);

try {
    // Collect form data
    $name     = htmlspecialchars(trim($_POST['name']));
    $phone    = htmlspecialchars(trim($_POST['phone']));
    $email    = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $website  = htmlspecialchars(trim($_POST['website']));
    $message  = htmlspecialchars(trim($_POST['message']));

    // Validate email and phone
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception("Invalid email address.");
    }
    if (!preg_match("/^[0-9]{10}$/", $phone)) {
        throw new Exception("Phone number must be exactly 10 digits.");
    }

    // Setup SMTP
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'amslast.info@gmail.com';      // Your Gmail
    $mail->Password   = 'rauo gpvl hxae ebgw';        // App password from Gmail
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    // Mail settings
    $mail->setFrom($email, $name);
    $mail->addAddress('amslast.info@gmail.com'); // Recipient email
    $mail->addReplyTo($email, $name);

    $mail->isHTML(false);
    $mail->Subject = "New Contact Form Submission";
    $mail->Body    =
        "Name: $name\n" .
        "Phone: $phone\n" .
        "Email: $email\n" .
        "Website: $website\n" .
        "Message:\n$message";

    // Send
    $mail->send();
    echo "Thank you! Your message has been sent.";

} catch (Exception $e) {
    echo "Error: {$mail->ErrorInfo}";
}
?>
