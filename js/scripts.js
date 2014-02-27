// Make Foundation Go!
$(document).foundation();

// Your Awesome Scripts!
$(document).ready(function(){

	// Hide Show URL panel
$('.showurl').hide();

$('button').on('click', function(){
  
  // Use our custom function
  getGitSite(user,repo);
  
});

	console.log('Page Loaded. Lets Do this!');

}); 


