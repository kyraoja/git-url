// Function to:
//   0. Get user & repo name
//   1. Create staging URL
//   2. Add URL to <a> link
//   3. Return GitHub URL

var getGitSite = function(user, repo) {
  
    // Get & Store user name
  // REF: http://jqapi.com/#p=val
  var user = $('#user').val();
  // console.log(user);
  
  // Get & Store repo name
  // REF: http://jqapi.com/#p=val
  var repo = $('#repo').val();
  // console.log(repo);
  
  // Create URL by concatenate "http://" + user + "github.io" + repo
  var url = 'http://' + user + '.github.io/' + repo;
  console.log(url);
  
   // Add url to <a> link
  // REF: http://jqapi.com/#p=attr
  $('.showurl a').attr('href', url);
  
  // Unhide/Show display URL panel 
  // REF: http://jqapi.com/#p=show
  $('.showurl').show();
  
  // Replace Text of <a> link
  // REF: http://jqapi.com/#p=text
  $('.showurl a').text(url);
  
  return url;

};




