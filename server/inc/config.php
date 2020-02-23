<?php

$servername = 'localhost';
$db_name = 'factChecker';
$db_user = 'root';
$db_pass = '';
// Create connection
$conn = new mysqli($servername, $db_user, $db_pass, $db_name);


mysqli_query($conn,"SET NAMES 'utf8';");
?>
