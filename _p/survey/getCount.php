<?php 
	
	include('../../_inc/functions.php');

?>



<html>
<head>
	<title>Survey Result</title>

	<?php include_once('../../_inc/_c/head.php');?>
</head>
<body >
<div class="container">
	<h3 id="male">Male: <span><?php echo getMaleCount(); ?></span></h3>
	<h3 id="female">Female: <span><?php echo getFemaleCount(); ?></span></h3>

	<input id="reset" type="button" value="Reset Counter">
</div>
	
	<script type="text/javascript">

		$('#reset').on('click', function(){

			$.post('reset.php',
			{
				'reset':true
			},
			function(data){
				$('#male span').html(data.maleCount)
				$('#female span').html(data.femaleCount)
			})

		});


	</script>



</body>
</html>