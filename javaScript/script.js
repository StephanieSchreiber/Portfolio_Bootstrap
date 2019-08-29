$('buttonCollapse').parent().click(function () {
            if($('buttonCollapse span').hasClass('about_more'))
            {
               $('buttonCollapse').html('<span class="about_less">Less Info</span>'); 
            }
            else
            {      
                $('buttonCollapse').html('<span class="about_more">More Info</span>'); 
            }
    });