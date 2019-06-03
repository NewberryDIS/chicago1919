String.prototype.replaceBetween = function(start, end, what) {
    return this.substring(0, start) + what + this.substring(end);
};

var Twitter = require('/home/newberry/webapps/chicago1919/node_modules/twitter-node-client').Twitter;

var twitter = new Twitter();
var error = function (err, response, body) {
  console.log('ERROR [%s]', err);
}

var hashtag_regexp = /#([a-zA-Z0-9]+)/g;
var user_regexp = /@([a-zA-Z0-9]+)/g;
var url_regexp = /https([a-zA-Z0-9]+)/g;

function linkHashtags(text) {
    return text.replace(
        hashtag_regexp,
        '<a class="hashtag" href="https://twitter.com/hashtag/$1?f=tweets&vertical=default&src=hash">#$1</a>'
    );
}

function linkUsers(text) {
    return text.replace(
        user_regexp,
        '<a class="user" href="https://twitter.com/$1">@$1</a>'
    );
}

function linkify(inputText) {
    var replacedText, replacePattern1, replacePattern2, replacePattern3;

    //URLs starting with http://, https://, or ftp://
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

    //Change email addresses to mailto:: links.
    replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

    return replacedText;
} 

var success = function (response) {
  console.log("success")
  var data = JSON.parse(response);
  // var newdata = []
  var currentTweetData = require('/home/newberry/webapps/chicago1919/static/data/tweets_2.js').tweets;
  data.statuses.forEach(function(d) {
    var status = {}
    status.text = d.full_text
    status.html_text = d.full_text
    status.date = d.created_at
    status.id = d.id_str
    status.user = {
      name: d.user.name,
      screen_name: d.user.screen_name,
      profile_img: d.user.profile_image_url_https
    }
    var entities = {
      user_mentions: d.entities.user_mentions,
      hashtags: d.entities.hashtags,
      urls: d.entities.urls
    }
    console.log(entities.urls);
    Object.keys(entities).forEach(function(key,val) {
      var arr = entities[key];
/*       if (arr.length > 0) {
        if (key === 'urls') {
          arr.forEach(function(obj) {
            var link = "<a href='" + obj.url + "' target='_blank'>" + obj.url + "</a>";
            status.html_text = status.text.replaceBetween(obj.indices[0],obj.indices[1],link)
          })
        }
      } */
    })
    status.html_text = linkify(status.html_text)
    status.html_text = linkHashtags(status.html_text)
    status.html_text = linkUsers(status.html_text)
    // newdata.push(status)
    if (!(currentTweetData.filter(e => e.id === status.id).length > 0)) {
      currentTweetData.unshift(status);
    }
  })
  var newdata = currentTweetData;
  var fs = require('fs');
  fs.writeFile(
    "/home/newberry/webapps/chicago1919/static/data/tweets.js",
    "var TWEETS = " + JSON.stringify(newdata, null, 2),
    function(err) {
      if (err) throw err;
    }
  );
  fs.writeFile(
    "/home/newberry/webapps/chicago1919/static/data/tweets_2.js",
    "var TWEETS = " + JSON.stringify(newdata, null, 2) + "\nmodule.exports.tweets = TWEETS",
    function(err) {
      if (err) throw err;
    }
  );
}

twitter.getSearch({'q':'#chi1919 exclude:retweets','count': 4, 'tweet_mode':'extended'}, error, success);