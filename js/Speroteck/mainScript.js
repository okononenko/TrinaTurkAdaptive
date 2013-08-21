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
        $('.list_expand').click(function(){
            $(this).next().next().slideToggle(1000);
        });

        $('.list_slide_button').click(function(){
            $(this).next().slideToggle(1000);
        });

        /**
         * rating value script
         */
            var value = (((($('.rating_full').width() / 70) * 100)*5) / 100);
            $(".actual_rating").html(value.toFixed(1));

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
        $('.selectable_small_images').hover(function(){
            $('.selectable_small_images').css('opacity', 0.5);
            $(this).css('opacity', 1.0);
        });

        /**
         * fade script on select color images
         */
        $('.selectable_color').hover(function(){
            $('.selectable_color').css('opacity', 0.5);
            $(this).css('opacity', 1.0);
        });

        /**
         * fade script on select similar product images
         */
        $('.selectable_similar').hover(function(){
            $('.selectable_similar').css('opacity', 0.5);
            $(this).css('opacity', 1.0);
        });

});

})(jQuery);