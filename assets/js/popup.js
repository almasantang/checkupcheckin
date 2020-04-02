$(	document ).ready(function()	{
	// start here


// popup
$('.popup-link').click(function() {
	$('.popup').addClass('active');
});

$('.popup').click(function() {
	$('.popup').removeClass('active');
});

var headline = document.getElementById("clickHeadline");
headline.onclick = function() {
	headline.innerHTML="You have no unread message :-)";
	document.getElementById("clickHeadline").style.color = 'black';
	}

});