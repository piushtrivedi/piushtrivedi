jQuery(document).ready(function() {
function h4t_slider()  {
var h4twh = jQuery(window).height();
var h4tpph = jQuery("#h4tpopupslider").height();
var h4tfromTop = jQuery(window).scrollTop()+50;
 jQuery("#h4tpopupslider").css({"top":h4tfromTop});
}jQuery(window)
.scroll(h4t_slider)
.resize(h4t_slider)
//alert(jQuery.cookie('sreqshown'));
//var h4tww = jQuery(window).width();
//var h4tppw = jQuery("#h4tpopupslider").width();
//var h4tleftm = (h4tww-h4tppw)/2;
var h4tleftm = 0;
//var h4twh = jQuery(window).height();
//var h4tpph = jQuery("#h4tpopupslider").height();
//var h4tfromTop = (jQuery(window).scrollTop()+h4twh-h4tpph) / 2; 
jQuery("#h4tpopupslider").animate({opacity: "1", left: "0" , left: h4tleftm}, 1000).show();        
jQuery("#h4tclose").click(function() {
jQuery("#h4tpopupslider").animate({opacity: "0", left: "-500"}, 1000).show(); });});