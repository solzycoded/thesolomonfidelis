<?php 
	namespace Src\Messages;

	use \Src\Validation\Validation as Validation;

	class Message {
		private $email;
		private $name;
		private $subject;
		private $message;

		function __construct($name, $email, $subject, $message) { 
			$this->name = $name;
			$this->email = $email;
			$this->subject = $subject;
			$this->message = $message;
		}

		private function validate($type, $value){
			$validation = new Validation($type, $value);

			return $validation->validateinput();
		}

		// GET
		public function get_email(){
			return $this->validate('email', $this->email);
		}

		public function get_name(){
			return $this->validate('string', $this->name);
		}

		public function get_subject(){
			return $this->validate('string', $this->subject);
		}

		public function get_message(){
			return $this->validate('string', $this->message);
		}
	}
?>