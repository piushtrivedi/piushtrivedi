$(function() {

    $("#explore-nav li a").click(function() {

        // Figure out current list via CSS class
        var curList = $("#explore-nav li a.current").attr("rel");

        // List moving to
        var $newList = $(this);

        // Set outer wrapper height to height of current inner list
        var curListHeight = $("#all-list-wrap").height();
        $("#all-list-wrap").height(curListHeight);

        // Remove highlighting - Add to just-clicked tab
        $("#explore-nav li a").removeClass("current");
        $newList.addClass("current");

        // Figure out ID of new list
        var listID = $newList.attr("rel");

        if (listID != curList) {

            // Fade out current list
            $("#"+curList).fadeOut(300, function() {

                // Fade in new list on callback
                $("#"+listID).fadeIn();

                // Adjust outer wrapper to fit new list snuggly
                var newHeight = $("#"+listID).height();
                $("#all-list-wrap").animate({
                    height: newHeight
                });

            });

        }        

        // Don't behave like a regular link
        return false;
    });

});



$(function() {

    $("#explore-nav2 li a").click(function() {

        // Figure out current list via CSS class
        var curList = $("#explore-nav2 li a.current2").attr("rel");

        // List moving to
        var $newList = $(this);

        // Set outer wrapper height to height of current inner list
        var curListHeight = $("#all-list-wrap2").height();
        $("#all-list-wrap2").height(curListHeight);

        // Remove highlighting - Add to just-clicked tab
        $("#explore-nav2 li a").removeClass("current2");
        $newList.addClass("current2");

        // Figure out ID of new list
        var listID = $newList.attr("rel");

        if (listID != curList) {

            // Fade out current list
            $("#"+curList).fadeOut(300, function() {

                // Fade in new list on callback
                $("#"+listID).fadeIn();

                // Adjust outer wrapper to fit new list snuggly
                var newHeight = $("#"+listID).height();
                $("#all-list-wrap2").animate({
                    height: newHeight
                });

            });

        }        

        // Don't behave like a regular link
        return false;
    });

});

$(function() {
                $(window).scroll(function(){
					var scrollTop = $(window).scrollTop();
					if(scrollTop != 0)
						$('#mainnav').stop().animate({'opacity':'0.2'},400);
					else	
						$('#mainnav').stop().animate({'opacity':'1'},400);
				});
				
				$('#mainnav').hover(
					function (e) {
						var scrollTop = $(window).scrollTop();
						if(scrollTop != 0){
							$('#mainnav').stop().animate({'opacity':'1'},400);
						}
					},
					function (e) {
						var scrollTop = $(window).scrollTop();
						if(scrollTop != 0){
							$('#mainnav').stop().animate({'opacity':'0.2'},400);
						}
					}
				);
            });

 type='text/javascript'> 
        $(document).ready(function(){
            
            $("#nav a").blend();
            $("#navlogo a").blend();
            $("#navredes a").blend();
            $("#blogger-icon").blend();
        });

$(document).ready(function(){
 
	$(".bot .link").click(function() {
		$(this).next("em").animate({opacity: "toggle", left: "-157"}, "slow") 
                
	
	});
 
 
});