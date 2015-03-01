<?php 
	
	header('Content-Type: application/json');
	
	include('../../_inc/functions.php');




	$pledgeFlag=false;


	if(isset($_POST['pledge'])){

		

		if ($_POST['pledge']==true) {
			$pledgeFlag = true;
		}	
		


		if(isset($_POST['gender'])){
			$gender = $_POST['gender'];
		}
	

	}

	
	$errorJSON = array("error"=>'true');

	if($pledgeFlag){
		//update count JSON
			$maleCount = getMaleCount();
			$femaleCount = getFemaleCount();

			if($gender=='male'){
				$maleCount++;
			}
			else {
				$femaleCount++;
			}

			

			$countJSON = array("maleCount"=>$maleCount, "femaleCount"=>$femaleCount);
			
		


			file_put_contents("count.json",json_encode($countJSON));
			echo  json_encode($countJSON);
		
		

	}












?>