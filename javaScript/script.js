$('button_moreInfo span').parent().click(function () {
        if($('button_moreInfo  span').hasClass('glyphicon-chevron-down'))
        {
           $('button_moreInfo ').html('<span class="glyphicon glyphicon-chevron-up"></span> Less Info'); 
        }
        else
        {      
            $('button_moreInfo ').html('<span class="glyphicon glyphicon-chevron-down"></span> More Info'); 
        }
        });