<?php 
	namespace Src\Validation;
	
	class Validation {
		private $type;
		private $value;

		function __construct($type, $value) {
			$this->type = $type;
			$this->value = $value;
		}

		function validateinput(){
			$filteredvalue = '';

			if(isset($this->value) && !empty($this->value)){
			  	if($this->type=="string")
			  		$filteredvalue = filter_var($this->value, FILTER_SANITIZE_STRING);
			  	else if($this->type=="email")
			  		$filteredvalue = filter_var($this->value, FILTER_VALIDATE_EMAIL);
			}

			return $this->type=="string" ? addslashes($filteredvalue) : $filteredvalue;
		}
	}
?>