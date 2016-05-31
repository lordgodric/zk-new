var steps = [{
  content: '<p>First look at this thing</p>',
  highlightTarget: true,
  nextButton: true,
  target: $('.m-header-category-wrapper'),
  my: 'bottom center',
  at: 'top center'
}, {
  content: '<p>And then at this thing</p>',
  highlightTarget: true,
  nextButton: true,
  target: $('#thing2'),
  my: 'bottom center',
  at: 'top center'
}]

var tour = new Tourist.Tour({
  steps: steps,
  tipClass: 'Bootstrap',
  tipOptions:{ showEffect: 'slidein' }
});

// $('.help-btn').click(function(event) {
  tour.start();
// });
