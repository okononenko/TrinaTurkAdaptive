/**
 * Speroteck_mainScript Package
 *
 * @category    Speroteck
 * @package     Speroteck_mainScript
 * @copyright   Copyright (c) http://www.speroteck.com
 * @license     http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */

/**
 * Speroteck_mainScript adding animation and positioning elements on the page
 *
 * @category    Speroteck
 * @package     Speroteck_mainScript
 * @author      Speroteck team (dev@speroteck.com)
 */

(function ($) {
    $(document).ready(function(){

        /**
         * description slide script
         */
        $('.list_slide_button').each(function(){
            $(this).click(function(){
                $(this).next().slideToggle(1000);
            });
        });

        /**
         * rating radio button script
         */
            $(".rating").change(function (){
                $(".rating").parent().css("background-position", "right top");
                $(this).parent().css("background-position", "right bottom");
            });


        /**
         * rating value script
         */
            $(".rating").change(function(){
                var getvalue = $(this).attr('value');
                $(".rate_value").html(getvalue + "/5");
            });

        /**
         * select size script
         */
        $(".select_size_radio").change(function (){
            $(".select_size_radio").next().css("opacity", 0.0);
            $(this).next().css("opacity", 1.0);
        });

        /**
         * mobile menu slide script
         */
        $('.menu_mobile').click(function(){
            $('.nav_block').slideToggle(1000);
        });

        /**
         * fade script on small product images
         */
        $('.selectable_small_images').click(function(){
            $('.selectable_small_images').css('opacity', 0.5);
            $(this).css('opacity', 1.0);
        });

        /**
         * fade script on select color images
         */
        $('.selectable_color').click(function(){
            $('.selectable_color').css('opacity', 0.5);
            $(this).css('opacity', 1.0);
        });

        /**
         * fade script on select similar product images
         */
        $('.selectable_similar').click(function(){
            $('.selectable_similar').css('opacity', 0.5);
            $(this).css('opacity', 1.0);
        });

});

})(jQuery);