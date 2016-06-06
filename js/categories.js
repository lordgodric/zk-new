$(document).ready(function() {
   // Stuff to do as soon as the DOM is ready

   $('.e-category-item').click(function(event) {
     //  take value from field category-hash
     var thisDesc = $(this).find($('.category-hash')).text();
     // add thisDesc to current value in textarea
     // if textarea null add #hashtag without space before
     if (!$('.request-text').val()) {
      $('.request-text').val( $('.request-text').val() + thisDesc+ ' ');
      //  esle if textarea not null we add space before our #hashtag

     } else {
       $('.request-text').val( $('.request-text').val()+ ' ' + thisDesc+ ' ');
     }
     $( ".request-text:contains('#asd')" ).css( "text-decoration", "underline" );
   });

   $('.e-category-item').hover(function(event) {
     var thisDesc = $(this).find($('.category-desc')).text();
    //  $(this).find($('.category-desc'))
    //  $(this).find($('img'))
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
