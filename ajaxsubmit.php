<?php

require('connection.php');
// Established connection with server ^_^


//Fetching Values from URL  
$name  = strtoupper($_POST['name']);
$roll  = strtoupper($_POST['roll']);   

$email = $_POST['email'];
$mobile= $_POST['mobile'];

$batch = $_POST['batch'];   
$class = $_POST['class'];   			

$fName = strtoupper($_POST['fName']);
$fNumber=$_POST['fNumber'];

$mName  =strtoupper($_POST['mName']);
$mNumber=$_POST['mNumber'];


//Insert query 
 mysqli_query($connection,"SELECT * FROM information");

 $insertQuery=   "
				 INSERT INTO information(name,roll, batch,class, number,email, fatherName,fatherNumber, motherName,motherNumber)
                 VALUES ('$name','$roll', '$batch','$class', '$mobile','$email', '$fName','$fNumber', '$mName','$mNumber')
				 ";
				
if( !($connection->query($insertQuery)) )   
  echo "error";  

//closinG connectioN
mysqli_close($connection);
?>