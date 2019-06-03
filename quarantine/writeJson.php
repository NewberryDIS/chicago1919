<?php 

$jsonr = $_POST;

$json_data = json_encode($jsonr);
file_put_contents('cores.json', $json_data);

echo "hi!";
?>