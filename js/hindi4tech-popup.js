jQuery(document).ready(function() {
function hindi4tech_ppopup()  {
var h4twh = jQuery(window).height();
var h4tpph = jQuery("#hindi4techpopup").height();
var h4tfromTop = jQuery(window).scrollTop()+50;
 jQuery("#hindi4techpopup").css({"top":h4tfromTop});
}jQuery(window)
.scroll(hindi4tech_ppopup)
.resize(hindi4tech_ppopup)
//alert(jQuery.cookie('sreqshown'));
//var h4tww = jQuery(window).width();
//var h4tppw = jQuery("#hindi4techpopup").width();
//var h4tleftm = (h4tww-h4tppw)/2;
var h4tleftm = 500;
//var h4twh = jQuery(window).height();
//var h4tpph = jQuery("#hindi4techpopup").height();
//var h4tfromTop = (jQuery(window).scrollTop()+h4twh-h4tpph) / 2; 
jQuery("#hindi4techpopup").animate({opacity: "1", left: "0" , left: h4tleftm}, 0).show();        
jQuery("#h4tclose").click(function() {
jQuery("#hindi4techpopup").animate({opacity: "0", left: "-500"}, 1000).show(); });});