$(window).scroll(function(event) {
  /* Act on the event */
  var wScroll = 0;

  wScroll = $(this).scrollTop();
  console.log('x ='   + wScroll / 100 );
  console.log('y ='  + wScroll / 1);

  $('.l-header').css('background-position', ' ' + wScroll / 100 +'%  '+ wScroll / 7 +'% ');

});
