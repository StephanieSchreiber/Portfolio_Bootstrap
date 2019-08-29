$('button span').parent().click(function () {
    if($('button span').hasClass('glyphicon-chevron-down'))
    {
       $('button').html('<span class="glyphicon glyphicon-chevron-up"></span> Less Info'); 
    }
    else
    {      
        $('button').html('<span class="glyphicon glyphicon-chevron-down"></span> More Info'); 
    }
    }); 