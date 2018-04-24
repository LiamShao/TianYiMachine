$(function () {
    // var timer;
    // var wrapper = $('#wrapper');
    // var nav_item = wrapper.find('[data-subnav]');
    // nav_item.hover(function(){
    //     var getVal = $(this).attr('data-subnav');//用于分别菜单
    //     $('.sub-nav').fadeIn('slow');
    // },function(){
    //     timer = setTimeout(function(){
    //         outChange();
    //     },100);
    // })
    // $('.sub-nav').hover(function(){
    //     clearTimeout(timer);
    // },function(){
    //     outChange();
    // });
    // function outChange(){
    //     $('.sub-nav').fadeOut('slow');
    // } 
    $('#changeToEn').on('click',function(e){
        e.preventDefault();
        var content1 = '<i class="eng-flag"></i> &nbsp;English&nbsp;&nbsp;'
        var content2 = '<i class="china-flag"></i> &nbsp;中文&nbsp;&nbsp;';
        var str = $('#langBtn').text();
        if(str.indexOf("English")!=-1){  
            //alert("包含");
            $('#langBtn').html(content2);
            $('#changeToEn').html(content1);  
        }else{  
            //alert("不包含");
            $('#langBtn').html(content1);
            $('#changeToEn').html(content2);  
        }  
    })
}); 
