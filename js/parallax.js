$(window).scroll(function(event) {
  // Set variable value at 0
  var wScroll = 0;

  //
  wScroll = $(this).scrollTop();

  // Change background-position for .l-header background-image
  $('.l-header').css('background-position', ' ' + wScroll / 100 +'%  '+ wScroll / 7 +'% ');
  $('.l-header').css('background-position', ' ' + wScroll / 100 +'%  '+ wScroll / 7 +'% ');

});
