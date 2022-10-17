<?php
	namespace Src\Messages;

	require_once $_SERVER['DOCUMENT_ROOT'].'/thesolomonfidelis/start.php'; // start up eloquent 
	
	use Src\Email\Email as Email;
	use \Src\Messages\Message as Message; // model

	Class Messages {
		private $message;

		public function __construct($message) {
			$this->message = $message;
		}

		public function send() {
			$message = $this->message;

			$name = $message->get_name();
			$email = $message->get_email();
			$subject = $message->get_subject();
			$message = $message->get_message();

			$email = new Email($email, $name, $subject, $message);

			$email->send();
		}
	}
?>