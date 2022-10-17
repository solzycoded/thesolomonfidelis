<?php 
    namespace Src\Email;

    date_default_timezone_set('Etc/UTC');
    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    
    require_once $_SERVER['DOCUMENT_ROOT'].'/thesolomonfidelis/start.php';
    
    class Email {
        private $client_email;
        private $client_name;
        private $subject;
        private $body;

        function __construct($client_email, $client_name, $subject, $body) { 
            $this->client_email = $client_email;
            $this->client_name = $client_name;
            $this->subject = $subject;
            $this->body = $body;
        }

        function send(){
            $mail = new PHPMailer(true);
            
            // try {
                //Server settings
                $mail->SMTPDebug = 1;

                //Ask for HTML-friendly debug output
                $mail->Debugoutput = 'html';
                
                $mail->Priority = 1;
                // SMTP::DEBUG_SERVER;
                // Enable verbose debug output
                // $mail->Mailer = "smtp";
             
                $mail->isSMTP(); // Set mailer to use SMTP
                $mail->Host       = "smtp.gmail.com";
                $mail->SMTPAuth   = true; // Enable SMTP authentication
                $mail->Username   = "solomonfidelis@gmail.com"; // SMTP username
                $mail->Password   = 'imperative'; // SMTP password
                $mail->SMTPSecure = 'ssl'; //Enable implicit TLS encryption
                $mail->Port       = 465;
                
                // $mail->SMTPSecure = "tls";
                // $mail->Port       = 587;
                
                //Recipients
                $mail->setFrom("solomonfidelis@gmail.com", 'Solomon Fidelis | Web developer');
                
                $to = $this->client_email;
                $receiver_name = $this->client_name;
                
                $subject = $this->subject;
                $message = $this->bodytemplate();
                
                $mail->addAddress($to, $receiver_name); // Add a recipient
              
                // Content
                $mail->isHTML(true); // Set email format to HTML
                $mail->Subject = $subject;
                $mail->Body    = $message;
    
                // altbody (plain html)
                $mail->AltBody = $message;
    
                $mail->send();
            // } catch (Exception $e) {
            //     echo 'Message could not be sent. Mailer Error: {$mail->ErrorInfo}';
            // }
        }
        
        function bodytemplate(){
            return '<!DOCTYPE html> 
            <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
            
                    <!-- Latest compiled and minified CSS -->
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
            
                    <style>
                    body,h1,h2,h3,h4,h5 {font-family: "Raleway", sans-serif}
                    </style>
                </head>
                <body style="align-items: middle">
                    <div class="container-fluid" style="background-color: white;border-radius: 10px;padding: 0px  !important;margin: 10px 20px 10px 20px !important;height: inherit;max-width: 500px;width: inherit;">
                        <div class="row" style="color: black;padding: 10px 0 4px 0;font-size: 15px;margin: 0;border-radius: 10px 10px 0px 0px;">
                            <p class="col-sm-12 col-md-6 col-lg-6" style="font-weight: bold;text-align: center">TravelPackageBids</p>
                        </div>
                        <hr>
                        
                        <!-- main body -->
                        <div class="row" style="margin: 10px 10px 10px 10px;font-size: 15px;">
                            '.$this->body.'
                        </div>
                    </div>
            
            
                    <script src="https://kit.fontawesome.com/6030f7206a.js" crossorigin="anonymous"></script>
                </body>
            
            </html>';
        }
    }
?>