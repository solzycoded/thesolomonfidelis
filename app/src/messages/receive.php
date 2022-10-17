<?php
	require_once $_SERVER['DOCUMENT_ROOT'].'/thesolomonfidelis/start.php';

	use \Src\Messages\Messages as Messages;
	use \Src\Messages\Message as Message; // model

	if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['message'])) {
		$message = new Message($_POST['name'], $_POST['email'], $_POST['subject'], $_POST['message']);

		$messages = new Messages($message);

		$messages->send();
	}
?> 