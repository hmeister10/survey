<?php 
//why section
?>

<div id="dvWhySection" class="whySection">


	<div class="male feature">

		<a href="javascript:void(0)" class="male" id="maleAgree" ><p class="topText">I am a man that agrees</p><img src="resources/images/man.png"><p class="bottomText"> I am a man that agrees</p>
		</a>
	</div>

	<div id="subHeading" class="subHeading">
	<p>Gender equality is not only a women's issue, it is a human rights issue that requires my participation. <br/ >I commit to take action against all forms of violence and discrimination faced by women and girls.</p>
	</div>

	


	<div class="female feature">
		
		<a href="javascript:void(0)" class="female" id="femaleAgree" ><p class="topText">I am a woman that agrees</p><img src="resources/images/woman.png"><p class="bottomText">I am a woman that agrees</p></a>
	</div>



	
	
	

</div>

<script type="text/javascript">

$(document).ready(function(){

	//$('#formHolder').hide();

	$('#maleAgree').on('click',function(){
		$.post(
			'_p/survey/increaseCount.php',
			{
				'pledge':true,
				'gender':'male'
			},
			function(data){
				console.log(data)
				window.location.href = "http://www.heforshe.org/#take-action";
			}
		)



	});


	$('#femaleAgree').on('click',function(){

		$.post(
			'_p/survey/increaseCount.php',
			{
			'pledge':true,
			'gender':'female'
			},
			function(data){
				console.log(data)
				window.location.href = "http://www.heforshe.org/#take-action";
			}
		)
		

	});



});


</script>

