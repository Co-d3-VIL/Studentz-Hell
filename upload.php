<?php
	
require('connection.php');
// Established connection with server ^_^
	
	# UploadinG PROCESS - - - ->
    if ( 0 < $_FILES['file']['error'] ) {
        //echo 'Error: ' . $_FILES['file']['error'] . '<br>';
		echo "error";
    
	}else {
        move_uploaded_file( $_FILES['file']['tmp_name'], 'uploads/'.$_FILES['file']['name'] );
   
		
		#CSV in-to -> DB
		$CSV_PATH ="uploads/"; 
		    // Path where CSV file is uploaded
				  
		$csv_file = CSV_PATH .$_FILES['file']['name']; 
		    // Path + Name of CSV file.csv
			
		$csvfile = fopen($csv_file, 'r');
		$theData = fgets($csvfile);
		
		$i = 0;
		while (!feof($csvfile)) {
			$csv_data[] = fgets($csvfile, 1024);
			
			$csv_array = explode(",", $csv_data[$i]);
			
			//$insert_csv = array();
			// $insert_csv['id'] = $csv_array[0];
			
			$name  = strtoupper($csv_array[1]);
			$roll  = strtoupper($csv_array[2]);   
			$email = strtoupper($csv_array[3]);
			$mobile= $csv_array[4];
			$batch = $csv_array[5];
			$class = $csv_array[6];
			$fName = strtoupper($csv_array[7]);
			$fNumber=$csv_array[8];
			$mName  =strtoupper($csv_array[9]);
			$mNumber=$csv_array[10];
						
			$insertQuery ="
				 INSERT INTO information(name,roll, batch,class, number,email, fatherName,fatherNumber, motherName,motherNumber)
                 VALUES ('$name','$roll', '$batch','$class', '$mobile','$email', '$fName','$fNumber', '$mName','$mNumber')
				 ";
			$connection->query($insertQuery);
			
		//if( !($connection->query($insertQuery)) )   echo "errorSaving";  
		
			$i++;
		}
		fclose($csvfile);

		echo "upload-success";	
		mysql_close($connection);
	}
?>