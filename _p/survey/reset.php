<?php 
	
	header('Content-Type: application/json');
	
	include('../../_inc/functions.php');


	$reset = false;

	if(isset($_POST['reset'])){

		

		if ($_POST['reset']==true) {
			$reset = true;
		}	
			

	}

	
	$errorJSON = array("error"=>'true');

	if($reset){
		//update count JSON
			$maleCount = 0;
			$femaleCount = 0;



			$countJSON = array("maleCount"=>$maleCount, "femaleCount"=>$femaleCount);
			
		


			file_put_contents("count.json",json_encode($countJSON));
			echo  json_encode($countJSON);
		
		

	}












?>