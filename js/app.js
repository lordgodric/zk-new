$(document).ready(function() {
    // Stuff to do as soon as the DOM is ready
    var windowWidth;
    
    $( window ).resize(function() {
      // console.log($( window ).width());
      windowWidth = $( window ).width();
      console.log(windowWidth);
    });

    function toggleHintsOnClick() {
      // Toggle help hints
      $('.help-btn').click(function(event) {
        //Click help-btn and toggle help hints
        $('.arrow').toggle();
        $('.help').toggle();
      });
    };

    // console.log(windowWidth);
    if (true) {
      // if this not first visit
      if ($.cookie('firstVisit')) {
        // on click guest can show help hints
        toggleHintsOnClick();
        // $.removeCookie("firstVisit");
      // if this first visit
      } else {
        // show help hints
        $('.arrow').toggle();
        $('.help').toggle();
        // on click hide help hints
        toggleHintsOnClick();
        // and create cookie
        $.cookie('firstVisit', 'This first visit ');
      }
    }


    $('.md-primary, .lang-item').click(function(event) {
      windowWidth = $( window ).width();
      $('.md-primary').toggleClass('open');
      if ($('.md-primary').hasClass('open')) {
        if (windowWidth <= 600) {
          $(".lang-ua").css('transform', 'translate(5px,0px)');
          $(".lang-gb").css('transform', 'translate(5px,0px)');
          $(".lang-ru").css('transform', 'translate(5px,0px)');
        } else {
          $(".lang-ua").css('transform', 'translate(5px,0px)');
          $(".lang-gb").css('transform', 'translate(15px,0px)');
          $(".lang-ru").css('transform', 'translate(25px,0px)');
        }
      } else {
        if (windowWidth <= 600) {
          $(".lang-ua").css('transform', 'translate(5px, -30px)');
          $(".lang-gb").css('transform', 'translate(5px,-55px)');
          $(".lang-ru").css('transform', 'translate(5px,-100px)');
        } else {
          $(".lang-ua").css('transform', 'translate(-30px,0px)');
          $(".lang-gb").css('transform', 'translate(-70px,0px)');
          $(".lang-ru").css('transform', 'translate(-100px,0px)');
        }
      }
      $(".lang-item").css('transition', '0.5s');
    });

    $('.e-category-item').click(function(event) {
        // take #hashtag name value from div
        var thisHash = $(this).find($('.category-hash')).text();
        var str = $('.request-text').val();
        var present = str.search(thisHash);

        // if textarea null
        if (!$('.request-text').val()) {
            thisHash = thisHash + ' ';
            $('.request-text').val($('.request-text').val() + thisHash);

            $(this).addClass('border-green');
            $(this).removeClass('hvr-underline-from-center');

        // if textarea not null
        } else {

            thisHash = thisHash + ' ';
            // if we don't have thisHash in textarea
            if (present == -1) {

                // add #hashtag
                $('.request-text').val($('.request-text').val() + thisHash);

                $(this).addClass('border-green');
                $(this).removeClass('hvr-underline-from-center');

            // if we have #hashtag in textarea
            } else {
                console.log(present);

                // delete #hashtag in text - not at first word
                $('.request-text').val($('.request-text').val().replace(thisHash, ''));

                $(this).removeClass('border-green');
                $(this).addClass('hvr-underline-from-center');
            }

        }
    });

    $('.e-category-item').mouseover(function(event) {
        var thisDesc = $(this).find($('.category-desc')).text();
        $(this).find($('.category-desc'));
        $('.output-category').text(thisDesc);
        $('.e-category-item').mouseleave(function(event) {});
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
