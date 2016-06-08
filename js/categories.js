$(document).ready(function() {
   // Stuff to do as soon as the DOM is ready

   $('.e-category-item').click(function(event) {
     // try find #hashtag in textarea
     var present = str.search($(this).find($('.category-hash')).text());
     // take #hashtag name value from div
     var thisHash = $(this).find($('.category-hash')).text();

     // if textarea null
     if (!$('.request-text').val()) {
      $('.request-text').val($('.request-text').val() + thisHash);
      thisHash = thisHash + ' ';

      // if textarea not null
     } else {
       thisHash = ' ' + thisHash + ' ';
       console.log(present);

       // check availability #hashtag in textarea
       if (present == -1) {

         // add #hashtag
         $('.request-text').val($('.request-text').val() + thisHash);

       } else {

         // delete #hashtag
         $('.request-text').val($('.request-text').val().replace(thisHash, ''));
       }
     }
   });

   $('.e-category-item').mouseover(function(event) {
     var thisDesc = $(this).find($('.category-desc')).text();
     $(this).find($('.category-desc'));
     $('.output-category').text(thisDesc);
     $('.e-category-item').mouseleave(function(event) {
     });
   });

   $('.address-value').change(function(event) {
    // if address field not empty
    if ($('.address-value').val()) {
      $('.map-details-btn').addClass('border-green');
      $('.map-details-btn').removeClass('hvr-underline-from-center');
    // if address field empty
    } else {
      $('.map-details-btn').addClass('hvr-underline-from-center');
      $('.map-details-btn').removeClass('border-green');
    }
   });

   $('.upload-wrapper').change(function(event) {
     /* Act on the event */
     if ($('.image-preview-filename')) {
       $('.image-details-btn').addClass('border-green');
       $('.image-details-btn').removeClass('hvr-underline-from-center');
     };
     $('.image-preview-clear').click(function(event) {
       $('.image-details-btn').addClass('hvr-underline-from-center');
       $('.image-details-btn').removeClass('border-green');
     });
   });



});
