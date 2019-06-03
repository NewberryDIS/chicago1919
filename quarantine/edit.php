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
</style>
</head>
<body>
<script>
$(document).ready(function() {
  var data = window.DATA;
  var keyArray = [];
  Object.keys(data).forEach(function(key,ind) {
    keyArray.push(key);
    var val = data[key];
    $('body').append('<div id=' + key + ' class="section"><h4 style="text-transform:capitalize;">Section: ' + key + '</h4></div>');
    var _el = $('#' + key);
    Object.keys(val).forEach(function(k,i) {
      _el.append('<span style="display:block; text-transform:capitalize;">' + k + '</span>');
      var v = val[k];
      if (typeof v === 'object') {
        if (Array.isArray(v)) {
          for (var i=0;i < v.length;i++) {
            _el.append($('<input type="text" />').val(v[i]));
          }
        } else {
          Object.keys(v).forEach(function(x,i) {
            _el.append('<span style="display:block;">' + x + '</span>').append($('<input type="text" />').val(v[x]));
          })
          _el.append('<input type="submit" value="Submit"/>');
          _el.append('<div id="display_' + key + '_' + k + '" class="display_section display_events" style="display:none;" ></div>');
        }
      } else if (key === 'about') {
        _el.append($('<textarea id="wysiwyg" rows="4" cols="50" />').val(v))
      } else {
        _el.append($('<input type="text" />').val(v).attr("id", k))
      }
    })
    if (key !== 'events') {
      _el.append('<input type="submit" value="Submit"/>');
      _el.append('<div id="display_' + key + '" class="display_section" style="display:none;" ></div>');
    }
  })
  $('input[type=submit]').click(function() {
    var id = $(this).parent().attr('id');
  })
  $('#wysiwyg').summernote();
  
/*  $('.display_section').each(function() {
    var id = $(this).attr('id').replace("display_","");
    $(this).load('./index.html', function(h) {
      $(this).html($('#app #' + id));
      if (id === 'events') {
        $(this).html($('#app #events #' + id));
      }
      $(this).show();
    })
  })*/

  $('#display_banner').load('./index.html', function(h) {
    var elArray = {};
    for (var i=0;i<keyArray.length;i++) {
      var k = keyArray[i];
      var element = $('#app #' + k);
      if (k === 'events') {
        for (var j=0;j<3;j++) {
          elArray['events_' + j] = $('#events_' + j);
        }
      }
      elArray[k] = element;
      //$('#display_' + k).append(element).show();
    }
    console.log(elArray);
    $('#display_banner').html(elArray.banner).show();
    $('#display_header').html(elArray.header).show();
    $('#display_about').html(elArray.about).show();
    $('#display_events_0').html(elArray.events_0).show();
    $('#display_events_1').html(elArray.events_1).show();
    $('#display_events_2').html(elArray.events_2).show();
  })
  
  $('input[type=text]').on('input',function() {
    var parent = $(this).parent();
    var parent_id = parent.attr('id');
    var text = $(this).val()
    var index;
    if (parent_id === 'banner') {
      index = $(this).index() - 2;
      $('a:eq(' + index + ')').html(text);
    } else if (parent_id === 'header') {
      var textToChange = $(this).attr("id") === 'title' ? $('#display_header #header h1') : $('#display_header #header h2');
      textToChange.html(text);
    } else if (parent_id === 'events') {
      console.log($(this).index());
    }
  })
})
</script>
</body>