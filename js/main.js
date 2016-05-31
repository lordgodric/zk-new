$(document).ready(function() {
   // Stuff to do as soon as the DOM is ready

   //Check to see if the window is top if not then display button
 	$(window).scroll(function(){
 		if ($(this).scrollTop() > 100) {
 			$('.toSend').fadeIn();
 		} else {
 			$('.toSend').fadeOut();
 		}
 	});

 	//Click event to scroll to top
 	$('.toSend').click(function(){
 		$('html, body').animate({scrollTop : 0},400);
 		return false;
 	});
});
