$(function() {
    console.log('The DOM is ready');
});


$( ".mole" ).css( "visibility", "hidden" );

$(function() {
    var speed = 2000;
    var moveInterval;
	var numMoles = $('.mole').length;
	var randomNum = Math.floor(Math.random()*numMoles);
	
	$('.moles:nth-Child(randomNum)').animate ({
		visibility: visible
	}, speed);
});

