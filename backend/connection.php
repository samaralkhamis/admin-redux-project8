<?php

header("Access-Control-Allow-Origin: *");

$dbsn = "localhost";
$dbun = "root";
$password = "";
$dbname = "admin-redux";

$dsn ="mysql:host=$dbsn;dbname=$dbname";

$conn = new PDO($dsn,$dbun,$password);

// if($conn)
// {
    
// echo "connection succesed";

// }else
// {
//     echo "connection failed";
// }

?>