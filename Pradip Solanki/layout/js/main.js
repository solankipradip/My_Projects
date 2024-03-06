
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
            items:3,
            loop:true,
            margin:10,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                900:{
                    items:3
                }
            }
        })

    $("#x").owlCarousel({
            loop:true,
          // margin:10,
          nav:true,
          autoplay:true,
          autoplayTimeout:3000,
          // autoplayHoverPause:true,
          center: true,
          navText: [
              "<i class='fa fa-angle-left'></i>",
              "<i class='fa fa-angle-right'></i>"
          ],
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:3
              }
          }
        });
    
    


    });

   
    var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        900:{
            items:3
        }
    }
});
// Go to the next item
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})








