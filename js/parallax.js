$(window).scroll(function(event) {
  // Set variable value at 0
  var wScroll = 0;

  //
  wScroll = $(this).scrollTop();
  console.log(wScroll);

  // Change background-position for .l-header background-image
  $('.l-header').css('background-position', ' ' + wScroll / 10 +'%  '+ wScroll / 7 +'% ');
  $('.both-wrapper').css('bottom', ' -' + wScroll * 0.3 +'px  ');
});
