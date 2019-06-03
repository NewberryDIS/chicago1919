<!DOCTYPE html>
<html lang="en" style="width: 100%; height: 100%;">
<head>
<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
<link href="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote-bs4.css" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.5/umd/popper.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote-bs4.js"></script>
<script src='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'></script>
<script src="./static/data/data.js"></script>
<script>
</script>
<style>
input[type=text] {
  width:500px;
}

input[type=submit] {
  display:block;
}

#banner input[type=text] {
  width:200px;
}
.section {
  max-width:50%;
  margin:auto;
}
.display_section {
  margin:25px 0;
}
.display_events {
  display:inline-block;
}
.container {
  margin: 20px 0;
}
.order {
	padding: 5px 20px;
	font-size: 1.3em;
	border: 1px solid gray;
	width: 10px;
	margin: 5px;
  color:black;
}
form {
  max-width: 1140px;
  margin: auto;
}
.submit {
  width: 525px;
  padding: 20px 0;
  cursor: pointer;
  margin: 20px 0;
}
</style>
</head>
<body>
<?php 

$json_file = file_get_contents('/home/newberry/webapps/chicago1919/static/data/data.js');
$just_json = str_replace("var DATA = ", "", $json_file);
// $just_json = str_replace("'","\"",$just_json);

/* $afterIdx = strpos($json_file, 'events:');
$secondBracket = strpos($json_file, ']', $afterIdx);
$sub = substr($json_file, $afterIdx, $secondBracket - $afterIdx + 1);
$just_array = str_replace('events:','',$sub); */
$events = json_decode($just_json, true)['events'];
echo "<form class='mainform' autocomplete='off'>";
foreach ($events as $index=>$event) {
  $slide_num = $index + 1;
  echo "<div class='container'>";
  echo "<h2>Event " . $slide_num . "</h2>";
  echo "<a href='#' class='order downbutton'>&#8595;</a>";
  echo "<a href='#' class='order upbutton'>&#8593;</a>";
  // echo "<input name='index' value='$index'>";
  echo "<input name='index' type='hidden' value='$index'>";
  echo "<div class='variable_form_data'>";
  foreach ($event as $key=>$value) {
    echo "$key";
    echo "<input type='text' value='$value' name='event[$index][$key]' style='display:block;'>";
    if ($key == 'img') {
      echo "<input style='display:block;' type='file' name='fileToUpload' class='fileToUpload'>";
    }
  }
  echo "</div>";
  echo "</div>";
}
echo "<input class='submit' type='submit' value='Submit'>";
echo "</form>";

?>
<script>
var newImage = false;
$('.mainform').on('submit', function(e) {
  e.preventDefault();
  // console.log($(this).serializeObject());
  // console.log($(this).serializeArray());
   $.ajax({
    type:'post',
    url:'editjson.php',
    data: $(this).serializeArray(),
    success:function(data) {
      console.log("success")
      alert("Events successfully updated!");
    }
   })
   if (newImage) {
     $.ajax({
      type:'post',
      url:'upload.php',
      data: new FormData(this),
      processData: false,
      contentType: false,
      success:function(data) {
        console.log("Image successfully uploaded.");
        console.log(data);
      }
     })
   }
})

$('.fileToUpload').change(function() {
  var newFile = $(this).val().replace("C:\\fakepath\\","");
  $(this).prev().val(newFile);
  newImage = true;
})

function renumber_blocks(form, newIndex) {
  var prefix = "event[" + newIndex + "]";
  form.find("input").each(function() {
   this.name = this.name.replace(/event\[\d+\]/, prefix);   
  });
  return form
}

$('.order').click(function(e) {
  e.preventDefault();
  
  var container = $(this).parent();
  var prev = container.prev();
  var next = container.next();
  
  var form = container.find('.variable_form_data');
  var prevForm = prev.find('.variable_form_data');
  var nextForm = next.find('.variable_form_data');
  
  var eventIndex = container.find("input[name='index']").val();
  var prevEventIndex = prev.find("input[name='index']").val();
  var nextEventIndex = next.find("input[name='index']").val();

  var c;
  var prevc;
  var nextc;
  
  if ($(this).hasClass('upbutton')) {
    c = form.detach();
    c = renumber_blocks(c, prevEventIndex);
    prevc = prevForm.detach();
    prevc = renumber_blocks(prevc, eventIndex)
    prev.append(c);
    container.append(prevc);
  } else {
    c = form.detach();
    c = renumber_blocks(c, nextEventIndex);
    nextc = nextForm.detach();
    nextc = renumber_blocks(nextc, eventIndex);
    next.append(c);
    container.append(nextc);
  }
})

function objectifyForm(formArray) {//serialize data function
  var returnArray = {};
  for (var i = 0; i < formArray.length; i++){
    returnArray[formArray[i]['name']] = formArray[i]['value'];
  }
  return returnArray;
}

(function($){
    $.fn.serializeObject = function(){

        var self = this,
            json = {},
            push_counters = {},
            patterns = {
                "validate": /^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,
                "key":      /[a-zA-Z0-9_]+|(?=\[\])/g,
                "push":     /^$/,
                "fixed":    /^\d+$/,
                "named":    /^[a-zA-Z0-9_]+$/
            };


        this.build = function(base, key, value){
            base[key] = value;
            return base;
        };

        this.push_counter = function(key){
            if(push_counters[key] === undefined){
                push_counters[key] = 0;
            }
            return push_counters[key]++;
        };

        $.each($(this).serializeArray(), function(){

            // skip invalid keys
            if(!patterns.validate.test(this.name)){
                return;
            }

            var k,
                keys = this.name.match(patterns.key),
                merge = this.value,
                reverse_key = this.name;

            while((k = keys.pop()) !== undefined){

                // adjust reverse_key
                reverse_key = reverse_key.replace(new RegExp("\\[" + k + "\\]$"), '');

                // push
                if(k.match(patterns.push)){
                    merge = self.build([], self.push_counter(reverse_key), merge);
                }

                // fixed
                else if(k.match(patterns.fixed)){
                    merge = self.build([], k, merge);
                }

                // named
                else if(k.match(patterns.named)){
                    merge = self.build({}, k, merge);
                }
            }

            json = $.extend(true, json, merge);
        });

        return json;
    };
})(jQuery);

</script>
</body>