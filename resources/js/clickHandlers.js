/*

-------- CLICK HANDLERS --------------
Author: Himanshu Hiranandani
Created on: 7/26/14;

*/






$(document).ready(function(){



/*    $('#frmDetails').on('submit', function(e){
        e.preventDefault();
        e.stopPropagation();
        requestData = {

                'fname': $('#firstName').val(),
                'lname': $('#lastName').val(),
                'mobno': $('#mobileNo').val(),
                'email': $('#emailAddress').val(),
                'ext': $('#extNo').val(),
                'deskno': $('#deskNo').val(),
                'imgpath':$('#container_image>img').attr('src'),
                'theme': $('#theme').val(),
                'submit':true

        }

        save = frmSubmitRequest(requestData);


        



    });*/



    checkForQRCode = function(){
    	getQR = true;
    		if($.trim($('#firstName').val()) == null || $.trim($('#firstName').val()) == "" ){
    					getQR = false;
    		}
    		
    		if($.trim($('#lastName').val()) == null || $.trim($('#lastName').val()) == "" ){
    					getQR = false;
    		}
    		if($.trim($('#mobileNo').val()) == null || $.trim($('#mobileNo').val()) == "" ){
    					getQR = false;
    		}
    		if($.trim($('#emailAddress').val()) == null || $.trim($('#emailAddress').val()) == "" ){
    					getQR = false;
    		}
    		
    		if(getQR){
    			 $('#liveqrCodeHolder img').attr('src',
                    'https://api.qrserver.com/v1/create-qr-code/?data=BEGIN%3AVCARD%0AVERSION%3A2.1%0AFN%3A' + $('#firstName').val() + '+' + $('#lastName').val() + '%0AN%3A' + $('#lastName').val() + '%3B' + $('#firstName').val() + '%0ATEL%3BCELL%3A' + $('#mobileNo').val() + '%0AEMAIL%3BWORK%3BINTERNET%3A' + $('#emailAddress').val() + '%0AEND%3AVCARD%0A&size=100x100&margin=2');
    		}
    		

    }

    $('#firstName').on('blur', function(){

    	checkForQRCode();

    });


    $('#lastName').on('blur', function(){

    	checkForQRCode();

    });


    $('#mobileNo').on('blur', function(){

    	checkForQRCode();

    });

    $('#emailAddress').on('blur', function(){

    	checkForQRCode();

    });




     $('#firstName').on('keyup change', function () {
            if ($(this).val() != "" && $(this).val() != null) {
                $('#fnameHolder ').html($(this).val())

              

            } else {
                $('#fnameHolder').html("First Name");

               
            }
        });


    $('#lastName').on('keyup change', function () {

        if ($(this).val() != "" && $(this).val() != null) {
            $('#lnameHolder').html($(this).val())

        } else {
            $('#lnameHolder ').html("Last Name");

        }
    });

    $('#mobileNo').on('keyup change', function () {

        if ($(this).val() != "" && $(this).val() != null)
            $('#mobNoHolder ').html($(this).val())
        else {
            $('#mobNoHolder ').html("eg 98123 456 78");

        }
    });

    $('#extNo').on('keyup change', function () {

        if ($(this).val() != "" && $(this).val() != null)
            $('#extHolder ').html($(this).val())
        else {
            $('#extHolder ').html("5xxxx");
        }
    });

    $('#deskNo').on('keyup change', function () {

        if ($(this).val() != "" && $(this).val() != null)
            $('#deskNoHolder ').html($(this).val())
        else {
            $('#deskNoHolder ').html("2xx");
        }
    });


    $('#image').on('change',function(){

        //$('#imageHolder').hide();
        imgUrl = $('#container_image>img').attr('src')
        $('#liveNameTag').css('background','url("'+imgUrl+'")')
        $('#liveNameTag').css('background-size','cover')


        $('#selectPic').hide();
        $('#changePic').show();

    });


    

     $('#changePic a').on('click',function(){
            $('#container_image').trigger('click');

     });
  
    $(window).on('resize', function(){

    var pageheight= $('.section').height();

            

    });
 

     var locked = false;

    $('.feature').hide();
    $('.tagSection').hide();
     $(window).on('scroll',function(e){
        var top = $(window).scrollTop();
        checkForBgImage(top);


        var currentHeight = $('.section').height();

        if(top>=(currentHeight*3/4)){

            $('.feature').each(function(){

                $(this).fadeIn(200)

            });


        }
        else{


            $('.feature').each(function(){

                $(this).fadeOut(200)

            });

        }


        var sectionHeight = $('.section').height();
        if(top>=(sectionHeight) ){
            //console.log(top);

            if(top>sectionHeight){
                $('#ddlogo').attr('src','resources/images/logo.png')
            }
            else{
              $('#ddlogo').attr('src','resources/img/dd-white.png')   
            }


            if(top>=(sectionHeight) && !locked){
                locked=true;
                              

                $('.dummyTag').css('position','absolute');
                $('.dummyTag').css('top','0').css('bottom','0');
                
                $('.dummyTag').css('z-index','1');


            }
            
            if(top>=(sectionHeight*1.71) ){

                //$('#staticTag').fadeOut();
                $('#liveTag').fadeIn();
                $('#liveTag').css('bottom','auto').css('top','30%');
                $('.tagSection').fadeIn();
                   
            }
        }
        else if( top<=(sectionHeight*1.71) ){
            
            console.log(top);
            if( top<(sectionHeight) && locked){
            locked = false;                
            $('.dummyTag').css('position','fixed');
            $('.dummyTag').css('top','0');
            $('.dummyTag').css('bottom','0');
            $('.dummyTag').css('z-index','1');

            }

            if(top<(sectionHeight)){
                 $('.dummyTag').css('z-index','1');
                 $('#ddlogo').attr('src','resources/img/dd-white.png')   

            }

            
            $('#liveTag').fadeOut();
            $('.tagSection').fadeOut();
            //$('#staticTag').fadeIn();

        }


    })


$('#toggleSide').on('click', function(){

    var currentSide = $('#side').val();


    if(currentSide=="right"){
        $('#side').val('left');
        $('#liveNameTag').removeClass('right').addClass('left');    
    }
    else{
        $('#side').val('right');
        $('#liveNameTag').removeClass('left').addClass('right');    
    }
    



})




    $('#toggleTheme').on('click',function(){

        var currentTheme = $('#theme').val();

        if(currentTheme=="dark"){
            
            $('#theme').val('white');

            
                $('#liveNameContainer').removeClass('dark').addClass('white')
            



        }
        else{

            $('#theme').val('dark');

            if($('#liveNameContainer').hasClass('white')){
                $('#liveNameContainer').removeClass('white').addClass('dark')
            }


        }


    })



        $('#getNow').on('click',function(){
        //window.scrollTo('0',($('.section').height()))

        $('html, body').stop().animate({
           scrollTop: $('.section').height()
        }, 1000);

    })


    $('.tagNow').on('click',function(){
        //window.scrollTo('0',($('.section').height()*2))

         $('html, body').stop().animate({
           scrollTop: $('.section').height()*2
        }, 1000);


    })


    $('#fnameHolder').on('click', function(){

        $('#firstName').trigger('focus');

    })




    $('#lnameHolder').on('click', function(){

        $('#lastName').trigger('focus');

    });



$('#frmDetails').on('submit', function(e){

    var fileName = $('#image');
    if(fileName.val()=="" || fileName.val()==null || fileName.val()=="null")
    {
        e.preventDefault();
        $('#selectPic').addClass('required');
    }

    //first name validation
    var fName = $('#firstName');
    if(fName.val()=="" || fName.val()==null || fName.val()=="null")
    {
        e.preventDefault();
        fName.addClass('required');
    }
    //last name validation
    var lName = $('#lastName');
    if(lName.val()=="" || lName.val()==null || lName.val()=="null")
    {
        e.preventDefault();
        lName.addClass('required');
    }
    //email validation
    var email = $('#emailAddress');
    if(email.val()=="" || email.val()==null || email.val()=="null")
    {
        e.preventDefault();
        email.addClass('required');
    }
    //mobile number validation
    var mobileNo = $('#mobileNo');
    if(mobileNo.val()=="" || mobileNo.val()==null || mobileNo.val()=="null")
    {
        e.preventDefault();
        mobileNo.addClass('required');
    }

    //extension number validation

    var extNo = $('#extNo');
    if(extNo.val()=="" || extNo.val()==null || extNo.val()=="null")
    {
        e.preventDefault();
        extNo.addClass('required');
    }


    //desk number valdation


    var deskNo = $('#deskNo');
    if(deskNo.val()=="" || deskNo.val()==null || deskNo.val()=="null")
    {
        e.preventDefault();
        deskNo.addClass('required');
    }




})//frm submit validation

$(':file').on('change',function(){
    if($(this).hasClass('required') && ( $(this).val() != "" || $(this).val() != "null" || $(this).val() != null )){
        $('selectPic').removeClass('required');
    }
});


$('#firstName').on('change',function(){
    if($(this).hasClass('required') && ( $(this).val() != "" || $(this).val() != "null" || $(this).val() != null )){
        $(this).removeClass('required');
    }
});

$('#lastName').on('change',function(){
    if($(this).hasClass('required') && ( $(this).val() != "" || $(this).val() != "null" || $(this).val() != null )){
        $(this).removeClass('required');
    }
});

$('#emailAddress').on('change',function(){
    if($(this).hasClass('required') && ( $(this).val() != "" || $(this).val() != "null" || $(this).val() != null )){
        $(this).removeClass('required');
    }
});



$('#mobileNo').on('change',function(){
    if($(this).hasClass('required') && ( $(this).val() != "" || $(this).val() != "null" || $(this).val() != null )){
        $(this).removeClass('required');
    }
});


$('#extNo').on('change',function(){
    if($(this).hasClass('required') && ( $(this).val() != "" || $(this).val() != "null" || $(this).val() != null )){
        $(this).removeClass('required');
    }
});


$('#deskNo').on('change',function(){
    if($(this).hasClass('required') && ( $(this).val() != "" || $(this).val() != "null" || $(this).val() != null )){
        $(this).removeClass('required');
    }
});








});//ready fn ends

 function readURL(input) {
      formdata = false;
     
     if (window.FormData) {
        formdata = new FormData();
        }
 
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#imageHolder img').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
			if (formdata) {
				formdata.append("images[]", input.files[0]);
			}
        }
    }
	


checkForBgImage = function(top){

    



};
