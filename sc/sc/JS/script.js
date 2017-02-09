$(document).ready(function(){

  $("#owl-example").owlCarousel({
    items : 3,
    itemsCustom : false,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    itemsScaleUp : false,

    pagination: true,
    slideSpeed : 200,
    paginationSpeed : 800,
    rewindSpeed : 1000,
    //Play automatically - true/false -
    autoPlay : true,
    stopOnHover : true,
  });

});
