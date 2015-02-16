<?php require("connection.php"); ?>
<?php
	// This file is the place to store all basic functions
	date_default_timezone_set("Asia/Kolkata");  //Setting all time related queries to India ( GMT+5:30 ).

	function mysql_prep( $value ) {
		$magic_quotes_active = get_magic_quotes_gpc();
		$new_enough_php = function_exists( "mysql_real_escape_string" ); // i.e. PHP >= v4.3.0
		if( $new_enough_php ) { // PHP v4.3.0 or higher
			// undo any magic quote effects so mysql_real_escape_string can do the work
			if( $magic_quotes_active ) { $value = stripslashes( $value ); }
			$value = mysql_real_escape_string( $value );
		} else { // before PHP v4.3.0
			// if magic quotes aren't already on then add slashes manually
			if( !$magic_quotes_active ) { $value = addslashes( $value ); }
			// if magic quotes are active, then the slashes already exist
		}
		return $value;
	}

	function redirect_to( $location = NULL ) {
		if ($location != NULL) {
			header("Location: {$location}");
			exit;
		}
	}

	function confirm_query($result_set) {
		if (!$result_set) {
			die("Database query failed: " . mysql_error());
		}
		else return 1;
	}
	
	function check_required_fields($required_array) {
	$field_errors = array();
	foreach($required_array as $fieldname) {
		if (!isset($_POST[$fieldname]) || (empty($_POST[$fieldname]) && $_POST[$fieldname] != 0)) { 
			$field_errors[] = $fieldname; 
		}
	}
	return $field_errors;
	}

	function check_max_field_lengths($field_length_array) {
		$field_errors = array();
		foreach($field_length_array as $fieldname => $maxlength ) {
			if (strlen(trim(mysql_prep($_POST[$fieldname]))) > $maxlength) { $field_errors[] = $fieldname; }
		}
		return $field_errors;
	}

	function display_errors($error_array) {
		echo "<p class=\"errors\">";
		echo "Please review the following fields:<br />";
		foreach($error_array as $error) {
			echo " - " . $error . "<br />";
		}
		echo "</p>";
	}

	function previousPledge($uEmail){
		//check db if user exists
			$query="select uEmail from heshe
					where uEmail='{$uEmail}';";
					
			//echo $query;
			$result_set=mysql_query($query);
			//echo "confirm".confirm_query($result_set);
			if(mysql_num_rows($result_set)==1)
			{
				return true;
				
			}
			else{
				return false;
			}

	}


	function insertNewPledge($uName, $uEmail, $uSL){
	
		if(!previousPledge($uEmail)){
			return false;
		}



		$query="INSERT INTO `heshe` (`uName`, `uEmail`, `uSL` ) VALUES ('{$uName}','{$uEmail}', '{$uSL}')";
				

						
				$result= mysql_query($query);

				if($result){
					
					return true;
					
				}
				else{
					return false;
				}		


	}


	function getCount(){
	
	


		$query = " SELECT COUNT( * ) as count FROM  `heshe` WHERE  `uEmail` !=  '' ";
				

						
				$query_run= mysql_query($query);

				if($query_run){
						while($found_user=mysql_fetch_assoc($query_run))
							{
							
								$count = $found_user['count'];
								return $count;
							}
					
				}
				else{
					//return mysql_error();
					return false;
				}		


	}




?>

