<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Webtech Lec Quiz</title>

</head>
<body>
	Results<br>
	<form method="post" action="quiz.php">

<?php
	$host = 'localhost:3308';
	$user = 'root';
	$pass = '';
	$dbname = 'test';

	$conn = mysqli_connect($host,$user,$pass,$dbname);

	
	$sql = "Select * from quiz;";
	$result = mysqli_query($conn,$sql);
	$count = mysqli_num_rows($result);
	if($count>0){
		$x = 1;
		while($row = mysqli_fetch_assoc($result)){
			echo "<p>".$row['quizID'] . ". ".$row['question'] . "</p>";
			echo "You have selected :".$_POST['quizid'.$x]."<br>";
			if($_POST['quizid'.$x]==$row['answer']){
				echo "<p><span style=\"background-color: #ADFFB4\">Correct</span></p>";
			}else{
				echo "<p><span style=\"background-color: #FF9C9E\">Wrong. The correct answer is: ".$row['answer']."</span></p>";
			}
			$x = $x+1;
			}
	}
	?>
	
	<br><br>
	<input type="submit" name="submit" value="Submit!">
    </form>


    
    </form>
	
</body>
 
</html>