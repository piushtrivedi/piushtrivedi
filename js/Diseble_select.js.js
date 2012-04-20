function disableSelection(target){
if (typeof target.onselectstart!="undefined") 
 target.onselectstart=function(){return false}
else if (typeof target.style.MozUserSelect!="undefined") 
 target.style.MozUserSelect="none"
else 
 target.onmousedown=function(){return false}
target.style.cursor = "default"
}

// #### right click of mouse disabled ### 
function click(e) {
	if (document.all) {
		if (event.button==2||event.button==3) {
			oncontextmenu='return false';
		}
	}
	if (document.layers) {
		if (e.which == 3) {
			oncontextmenu='return false';
		}
	}
}
if (document.layers) {
	document.captureEvents(Event.MOUSEDOWN);
}
document.onmousedown=click;
document.oncontextmenu = new Function("return false;")
}