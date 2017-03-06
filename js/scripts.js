/* Init. Variables for taking user INPUT*/
		var name;
		var roll;
		var batch, _class;
		var batchSel="sel", _classSel="sel"
		var mobile, email; 
		var fName, fNumber;
		var mName, mNumber; 

	
$(document).ready(function(){  
	$('#dimmer').click(function() {
						$('#div_wrapper').animate({
							opacity:"-=0.15"
						}, 150 );
	}),
	$('#brighter').click(function() {
						$('#div_wrapper').animate({
							opacity:"+=0.15"
						}, 150 );
	});
    $('#dropHeader').click(function() {
						$('#header').animate({
							height:"toggle"
						}, 150 );
	});
	
	/* To Prevent input in same keyDOWN */
	var mult = false,
		prev = 0;	
	$('.textBox').keydown(function(e) {
		if (!mult) {
			mult = true;
			prev = e.which;
			setTimeout(function() {
				mult = false;
			}, 2000)
		}
		else if (prev != e.which) {
			mult = false;
		}
		else {
			return false;
		}
	});	
		
	/* To Track & Save change in LISTBOX */	
	$('#listBatches').on('change', function(){
        switch($('#listBatches option:selected').val()) {
            case '2014':
                batchSel = "2014-2017";
            break;
            case '2015':
                batchSel = "2015-2018";
            break;
			case '2016':
                batchSel = "2016-2019";
            break;
            case '2017':
                batchSel = "2017-2020";
            break;
			default: batchSel="sel";
        }
    });
	$('#listClasses').on('change', function(){
        switch($('#listClasses option:selected').val()) {
            case 'bca1':
                _classSel = "BCA Ist Sem";
				break;
            case 'bca2':
                _classSel = "BCA IInd Sem";
				break;
			case 'bca3':
                _classSel = "BCA IIIrd Sem";
				break;
            case 'bca4':
                _classSel = "BCA IVth Sem";
				break;
			case 'bca5':
                _classSel = "BCA Vth Sem";
				break;
            case 'bca6':
                _classSel = "BCA VIth Sem";
				break;
			default: _classSel="sel";
		}
    });
	
	/* Upload a File */
	$('#fileupload').change(function() { 
		var file_data = $('#fileupload').prop('files')[0];   
		var form_data = new FormData();                  
		form_data.append('file', file_data);
		
		$.ajax({
					url: 'upload.php', // point to server-side PHP script 
					dataType: 'text',  // what to expect back from the PHP script, if anything
					cache: false,
					contentType: false,
					processData: false,
					data: form_data,                         
					type: 'post',
					success: function(php_script_response){
							if(php_script_response=="error"){ 
									ohSnapX();
									ohSnap('Fail to upload', {color: 'red'}, {'duration':'1250'});
							}else{ 	  
									//ohSnapX();
									//ohSnap('Yeeaahh! Upload Succeeded.', {color: 'green'}, {'duration':'700'});
									if(echo == "upload-success")
										ohSnap("Upload Succeeded.. (Added to DB)"), {color: 'green'});
							}		
					}
		 });
	});
	
	
	
	/* To Submit the form */
	$('#submitButton').click(function() {
		
		name=    $("#txtBox_name").val();
		roll=    $("#txtBox_roll").val();
		batch = batchSel;
		_class= _classSel;
		mobile = $("#txtBox_mobile").val(); 
		email  = $("#txtBox_email").val(); 
		fName  = $("#txtBox_fName").val();
		fNumber= $("#txtBox_fNumber").val();
		mName  = $("#txtBox_mName").val();
		mNumber= $("#txtBox_mNumber").val();
		
		   function validateEmail(email) {
				var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return re.test(email);
			}
		   function validateName(NAME) {
				var re = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/; // /^[a-zA-Z]+$/;
				return re.test(NAME) ;
		   }			
		   function validateNumber(NUMBER){
			    var re = /^[0-9]+$/;
				return re.test(NUMBER);
		   }
			
		if( name==''|| roll==''|| batch==''|| _class==''|| mobile==''|| email==''
		    || fName==''|| fNumber==''|| mName==''|| mNumber==''){	
 		      ohSnapX();
		      ohSnap('Please fill all the fields!', {color: 'red'});	 		
		
		}else if( !validateName(name) ){
			ohSnapX();
			ohSnap("Enter a valid [name] !", {color: 'red'});
		}else if(roll.length < 1){
			ohSnapX();
			ohSnap("Enter correct [roll-number] !", {color: 'red'});
			
		}else if( batch=="sel" || _class== "sel" ){
			ohSnapX();
			ohSnap('Please select your [batch/class] !', {color: 'red'});
			
		}else if( !validateNumber(mobile) || mobile.length!=10){
			ohSnapX();
			ohSnap("Enter a valid [mobile-number] !", {color: 'red'});
		
		}else if( !validateEmail(email) ){
			ohSnapX();
			ohSnap('Enter a valid [email-address] !', {color: 'red'});	 
		
		}else if( !validateName(fName) ){
			ohSnapX();
			ohSnap("Enter a valid Father's [name] !", {color: 'red'});
		
		}else if( !validateNumber(fNumber) || fNumber.length!=10){
			ohSnapX();
			ohSnap("Enter a valid Father's [mobile-number] !", {color: 'red'});
		
		}else if( !validateName(mName) ){
			ohSnapX();
			ohSnap("Enter a valid Mother's [name] !", {color: 'red'});
		
		}else if( !validateNumber(mNumber) || mNumber.length!=10){
			ohSnapX();
			ohSnap("Enter a valid Mother's [mobile-number] !", {color: 'red'});
			 
		}else{
			ohSnapX();
			ohSnap('Sending ...... ', {color: 'yellow'},  {'duration':'150'});
			
			// Returns successful data submission message when the entered information is stored in database.
			var dataString = 'name='    +name     + '&roll= '+roll   + '&batch='  +batch   + '&class='+_class 
		                   + '&mobile=' +mobile   + '&email='+email  + '&fName='  +fName 
					       + '&fNumber='+fNumber  + '&mName='+mName  + '&mNumber='+mNumber;
			$.ajax({
					type:   "POST",
					url:    "ajaxsubmit.php",
					data:    dataString,
					cache:   false,
					success: function(result){
							ohSnapX();
							if(result == "error") 
								ohSnap('Student already in database', {color: 'red'}, {'duration':'750'});
							else 	  
								ohSnap('Yeeaahh! Student just got Added.', {color: 'green'}, {'duration':'1500'});	
					}
			});
		}
		
	    return false;
	});
		
});
