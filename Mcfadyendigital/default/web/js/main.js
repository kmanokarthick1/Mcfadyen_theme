//products datails tab
require(['jquery'],function($){
    $('.details_delivery_title li').on('click',function(event){
        $(".details_delivery_title li").removeClass("active");
        $(".details_delivery_data .content").css('display','none');
        var $id = $(this).data('id');
        $(this).addClass('active');
        $(".details_delivery_data .content"+"#"+$id).css('display','block');
        event.preventDefault();
        event.stopPropagation();
    });
});
