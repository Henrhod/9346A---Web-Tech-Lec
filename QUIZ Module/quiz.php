<?php 
	$host = 'localhost';
	$user = 'root';
	$pass = '';
	$dbname = 'test';

	$conn = mysqli_connect($host,$user,$pass,$dbname);

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Webtech Lec Quiz</title>

</head>
<body>
	Quiz<br>
	<form method="post" action="result.php">
	<?php
	$sql = "Select * from quiz;";
	$result = mysqli_query($conn,$sql);
	$count = mysqli_num_rows($result);
	if($count>0){
		while($row = mysqli_fetch_assoc($result)){
			$choices = array($row['choice1'], $row['choice2'], $row['answer']);
			shuffle($choices);
			echo "<p>".$row['quizID'] . ". ".$row['question'] . "</p>";
			echo "<input type=\"radio\" name=\"quizid".$row['quizID']."\"value=\"".$choices[0]."\"required>".$choices[0]."<br>";
			echo "<input type=\"radio\" name=\"quizid".$row['quizID']."\"value=\"".$choices[1]."\"required>".$choices[1]."<br>";
			echo "<input type=\"radio\" name=\"quizid".$row['quizID']."\"value=\"".$choices[2]."\"required>".$choices[2]."<br>";
			}
	}
	?>
	<br><br>
	<input type="submit" name="submit" value="Submit!">
    </form>


    
    </form>
	
</body>
 
</html>