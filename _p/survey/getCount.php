<?php 
	
	header('Content-Type: application/json');
	
	include('../../_inc/functions.php');

	$name = '';
	$email = '';
	$SL = '';
	$pledgeFlag = true;


	if(isset($_POST['plegde'])){



		if(isset($_POST['name'])){
			$name = $_POST['name'];
		}
		else{
			$pledgeFlag = false;
		}
		


		if(isset($_POST['email'])){
			$email = $_POST['email'];
		}
		else{
			$pledgeFlag = false;
		}


		if(isset($_POST['sl'])){
			$SL = $_POST['sl'];
		}
		else{
			$pledgeFlag = false;
		}


	}

	$successJSON = array("success"=>'true');
	$errorJSON = array("error"=>'true');

	if($pledgeFlag){

		$x =  insertNewPledge($name, $email, $SL);

			//update count JSON
			$count = getCount();
			$countJSON = array("count"=>$count);
			
		if($x){

			file_put_contents("count.json",$count);
			echo  json_encode($successJSON);
		}
		else {
			file_put_contents("count.json",$count);
			echo  json_encode($errorJSON);
		}

	}












?>