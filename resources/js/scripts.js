$(document).ready(function(){


	var addNewPledge = function(name, email, SL){

		data = {
			'name':name,
			'email':email,
			'sl':SL,
			'pledge':true
		}

		$.post(
				'_p/survey/newPledge.php',
				data,
				function(data){
					if(data.hasOwnProperty('success')){
							//show success modal
						alert('success');
						
					}
					else{
						//show error modal
						alert('errror');
						
					}

					showCount();


				}

			)

	}


	$('#ipSubmit').on('click', function(){


		var name = $('#ipName').val();
		var email = $('#ipEmail').val();
		var SL = $('#ipSL').val();
		var submit = true;

		if(name == "" || name == null || name ==undefined ){
		 	submit = false
		 	$('#ipName').addClass('error')
		}
		else{
			if($('#ipName').hasClass('error')){
				$('#ipName').removeClass('error')
			}

		}


		if(email == "" || email == null || email ==undefined ){
			submit = false
			$('#ipEmail').addClass('error')
		}
		else{
			if($('#ipEmail').hasClass('error')){
				$('#ipEmail').removeClass('error')
			}

		}


		if(SL == "" || SL == null || SL ==undefined ){
			submit = false
			$('#ipSL').addClass('error')
		}
		else{
			if($('#ipSL').hasClass('error')){
				$('#ipSL').removeClass('error')
			}

		}

		if(submit){
			addNewPledge(name, email, SL);
			
		}


	})	

	showCount = function(){
		var req = {};
		$.post("_p/survey/count.json",req, function(data){

			
			$('#h1Count').html(data.count);

		});

	}


	showCount();
	var countTimer = window.setInterval(showCount, '10000');


	





});