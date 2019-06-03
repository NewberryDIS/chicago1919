<?php 

$datafile = "/home/newberry/webapps/chicago1919/static/data/data.js";
$js_file = file_get_contents($datafile);
$just_json = str_replace("var DATA = ", "", $js_file);
$data = json_decode($just_json, true);

/* $new_index = $_POST['index'];
unset($_POST['index']);
$new_event = $_POST;
$data['events'][$new_index] = $new_event; */
unset($_POST['index']);
$data['events'] = $_POST['event'];
/* foreach ($_POST as $key=>$value) {
  echo $key;
  if ($key == 'index') {
    $active_index = $value;
    continue;
  }
  $data['events'][$active_index][$key] = $value;
} */

$new_json = "var DATA = " . json_encode($data, JSON_PRETTY_PRINT);
$fp = fopen('../static/data/data.js', 'w');
fwrite($fp, $new_json);
fclose($fp);
?>