var target1 = $('.m-header-category-wrapper');

var steps = [{
  content: '<p>First look at this thing</p>',
  highlightTarget: true,
  nextButton: true,
  target: $(target1),
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
tour.start();
