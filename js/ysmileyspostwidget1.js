/* Yahoo! Smileys For Blogger Post and Widget
 * bY kangismet
 * Url:http://www.kangismet.net
 */
document.getElementsByClassName = function(clsName){
    var retVal = new Array();
    var elements = document.getElementsByTagName("*");
    for(var i = 0;i < elements.length;i++){
        if(elements[i].className.indexOf(" ") >= 0){
            var classes = elements[i].className.split(" ");
            for(var j = 0;j < classes.length;j++){
                if(classes[j] == clsName)
                    retVal.push(elements[i]);
            }
        }
        else if(elements[i].className == clsName)
            retVal.push(elements[i]);
    }
    return retVal;
}

function addSmiley(){
  var postBodyClass = (postBodyClass) ? postBodyClass : 'post-body';
  var d = document.getElementsByClassName(postBodyClass);
  for(var i=0;i<d.length;i++){
			d[i].innerHTML = d[i].innerHTML.replace(/:\)\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/21.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/O:-\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/25.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:-bd/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/113.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/7:\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/19.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/2\):\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/48.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:\)\]/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/100.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:\(\(/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/20.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:\(/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/2.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/\;\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/3.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:D/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/4.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/\;\;-\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/5.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/7:\P/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/47.gif' alt='' class='bhindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/~\X\(/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/102.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:-\//gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/7.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/\/:\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/23.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:x/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/8.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:\P/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/10.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:-\*/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/11.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/=\(\(/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/12.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:-\S\S/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/42.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:-\O/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/13.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/\X\(/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/14.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/B-\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/16.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/\#:-\S/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/18.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:-S/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/17.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:7/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/15.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/1.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/\(:\|/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/37.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:\|/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/22.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/=\)\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/24.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:-B/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/26.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/=\;/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/27.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:-c/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/101.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:-h/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/103.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:-t/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/104.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/8-7/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/105.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/\I-\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/28.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/8-\|/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/29.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/\L-\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/29.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:-a/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/31.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:-\$/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/32.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/\[-\(/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/33.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:\O\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/34.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/8-\}/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/35.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/2:-\P/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/36.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/=\P~/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/38.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:-\?/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/39.gif' alt='' class='bhacksmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/#-o/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/40.gif' alt='' class='bhacksmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/=\D7/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/41.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/\@-\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/43.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:\^o/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/44.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:-w/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/45.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/\X\_\X/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/109.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:\!\!/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/110.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/\\m\//gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/111.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:-q/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/112.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/\^\#\(\^/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/114.gif' alt='' class='hindi4techsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/:ar\!/ig, "<img src='http://l.yimg.com/a/i/us/msg/emoticons/pirate_2.gif' alt='' class='hindi4techsmly'/>")

    }
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

addLoadEvent(addSmiley);