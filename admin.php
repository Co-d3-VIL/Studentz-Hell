<?PHP include('common.php')?>

<html>
	<head>
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
		<title>Admin</title>
		<style>
			html {
				box-sizing: border-box;
			}

			body{
				color:white;
				/*background-color: var(--back-color);*/
				background-image:url("images/background.jpg");
				
				margin:0px;
				font-family: var(--font-to-use);
			}
		</style>
		<script>
			function init() {
				$('#div_wrapper').css("top", "200%");
				$('#div_wrapper').animate({
				 top: '-=200%'
				}, 600);
			}	 
		</script>
		
	</head>

<body onload="init()">

	<div id="div_wrapper">
		<div id="main">
			<table align="center">
			 <tr>
				 <td> 
				    <h2 id="header"> Add a Student (Fill in the Details) </h2> 
				 </td>
				 <td>
					<input id="fileupload" class="hiddenElement" type="file">
					<label><strong> OR </strong></label>
					<button  id="uploadButton" type="button" class="button" onclick="$('#fileupload').click()">[upload CSV]</button>
					
				 </td>
			 </tr>
		    </table>
								<form id="studentInfo" method="POST">
			<table id="tbl_DetailForm" align="center">
				<tr class="askingRow">
					<td class="askingCell">Name :</td>
					<td class="answerCell">
						<input type="text" class="textBox" id="txtBox_name" size="32" maxlength="40">
					</td>
				</tr>
				
				<tr class="askingRow">
					<td class="askingCell">Roll No :</td>
					<td class="answerCell">
						<input type="text" class="textBox" id="txtBox_roll" size="32" maxlength="15">
					</td>
				</tr>
				
				<tr class="askingRow">
					<td class="askingCell">Batch :</td>
					<td class="answerCell">
						<select name="batchList" id="listBatches">
								<option value="sel">---------Select Batch---------</option>
								<option value="2014">2014-2017</option>
								<option value="2015">2015-2018</option>
								<option value="2016">2016-2019</option>	
								<option value="2017">2017-2020</option>
								
						</select>
					</td>
				</tr>
				
				<tr class="askingRow">
					<td class="askingCell">Class :</td>
					<td class="answerCell">
					

							<select name="classList" id="listClasses">
								<option value="sel">---------Select Class---------</option>
								<option value="bca1">BCA Ist Sem</option>
								<option value="bca2">BCA IInd Sem</option>
								<option value="bca3">BCA IIIrd Sem</option>
								<option value="bca4">BCA IVth Sem</option>
								<option value="bca5">BCA Vth Sem</option>
								<option value="bca6">BCA VIth Sem</option>
								
							</select>
			
					</td>
				</tr>
				
				<tr class="askingRow">
					<td class="askingCell">Mobile No :</td>
					<td class="answerCell">
						<input type="text" class="textBox" id="txtBox_mobile" size="32" maxlength="10">
					</td>
				</tr>
				
				<tr class="askingRow">
					<td class="askingCell">Email Address :</td>
					<td class="answerCell">
						<input type="text" class="textBox" id="txtBox_email" size="32">
					</td>
				</tr>
				
				<tr class="askingRow">
					<td class="askingCell">Father's Name :</td>
					<td class="answerCell">
						<input type="text" class="textBox" id="txtBox_fName" size="32" maxlength="40">
					</td>
				</tr>
				
				<tr class="askingRow">
					<td class="askingCell">Father's No. :</td>
					<td class="answerCell">
						<input type="text" class="textBox" id="txtBox_fNumber" size="32" maxlength="10">
					</td>
				</tr>
				
				<tr class="askingRow">
					<td class="askingCell">Mother's Name :</td>
					<td class="answerCell">
						<input type="text" class="textBox" id="txtBox_mName" size="32" maxlength="40">
					</td>
				</tr>
				
				<tr class="askingRow">
					<td class="askingCell">Mother's No. :</td>
					<td class="answerCell">
						<input type="text" class="textBox" id="txtBox_mNumber" size="32" maxlength="10">
					</td>				
				</tr>
			</table>
			
			<table id="tbl_Action" align="center" cellspacing="5px"> 
		 	 <tr>
				<td>
					<div  data-tooltip="Back to messaging interface">
						<button type="button" class="button"> << Back to SMS Sending </button>
					</div>
				</td>		
				
				<td>
					<div  data-tooltip="Reset Form?">
						<img src="images/reset-icon.png" onclick="$('#resetButton').click()">
						<input id="resetButton" type="reset" class="hiddenElement" >
					</div>
				</td>
				
				<td>	
					<div data-tooltip="This Saves the data to database.">
						<button  id="submitButton" type="button" class="button">Save Student Info</button>
					</div>	
					</input>
				</td>
				<td>
					
				</td>
			 </tr>
			</table>
															 </form>
			                                                 
		</div>
	</div>
	<div>
		     <!--
			<button type="button" class="button" id="dimmer">Dimmer !</button>

			<button type="button" class="button" id="brighter"> Brighter !</button>

			<button type="button" class="button" id="dropHeader" >Drop header !</button>
			-->
			
			

	</div>	 
		 
		<input type="hidden" name="action" value="saveData" />
		<div id="ohsnap"></div>
</body>
</html>