<?php 
	
	/* Constants */
	$ADDRESS = 'hola@albertoblazquez.net';
	$SUCCESS = 0;
	$FAILURE = 1;

	/* Auxiliary function */
	function valid_email( $str ) {
		return ( !preg_match("/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix", $str) ) ? FALSE : TRUE;
	}

	$req = $_SERVER['HTTP_X_REQUESTED_WITH'];
	if ( isset($req) && $req === 'XMLHttpRequest' ) {

		// Local vars containing the information received by an AJAX 'Post' Request
		$content = $_POST['content'];

		$email   = $content['email'];
		$subject = $content['subject'];
		$message = $content['message'];


		// Checking if either the email form field or the message content are empty
		if ( $email === '' || !valid_email($email) || strlen($message) < 1 ) {
			echo $FAILURE;
			return $FAILURE;
		}


		// Checking if there could be any injection intent
		$from = preg_replace('([\r\n])', '', $email);
		$to   = preg_replace('([\r\n])', '', $ADDRESS);

		$match = '/(bcc:|cc:|content\-type:)/i';
		if ( preg_match($match, $from) || preg_match($match, $to) || preg_match($match, $message) ) {
			echo $FAILURE;
			return $FAILURE;
			// die("Header injection detected");
		}


		// If there is no any optional subject, using a new one by default
		if ( $subject !== '' ) {
			$subject = "albertoblazquez.net - " . $subject;
		} else {
			$subject = "albertoblazquez.net - New message received";
		}


		// Setting the email header
		$header = 'From: ' . $from;


		// Sending the email and reporting the success/failure to the client responding by AJAX
		if ( mail($to, $subject, $message, $headers) ) {
			echo $SUCCESS;
			return $SUCCESS;
		} else {
			echo $FAILURE;
			return $FAILURE;
		}

	}

?>