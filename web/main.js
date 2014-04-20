
$(document).ready( function(){
	$("#header").load("header.html", function(){
		user = getCookie("handle");
		if (user!="") {
			$("#user").val(user);
		}
		$("#user").button().addClass("btn-text").click( function(){
				user = getCookie("handle");
				if (user=="") {
					$("body").append("<div id='dialog'></div>");
					$("#dialog").append("<div><span class='registerinfo'>Handle</span> <input type='text' id='handle'></div>");
					$("#dialog").append("<div><span class='registerinfo'>Password</span> <input type='password' id='passwd'></div>");
					$("#dialog").dialog({
						title: "Login",
						close: function(){ $("#dialog").remove(); },
						buttons: [
							{
								text: "Login" ,
								click: function(){
									var handle = $("#handle").val(),
										passwd = $("#passwd").val();
									if (handle=="") {
										alert("Incorrect handle/password");
										return;
									}
									setCookie("handle", handle, 0.05);
									$("#user").val(handle);
									$("#dialog").remove();
								}
							},
							{
								text: "Cancel" ,
								click: function(){ $("#dialog").remove(); }
							}
						]
					})
				}else{
					window.location = "account.html";
				}
		});
		$("#hdr"+curpage).addClass("headersel");
		pages = ["index", "session", "problem", "submission", "result"];
		pageidx = pages.indexOf(curpage);
		for(var i=pageidx+1; i<pages.length; i++) $("#hdr"+pages[i]).css("display", "none");
		
	}); 
	$(".bottombtn").button();
	$(".btn").button();
	
	$( document ).tooltip();
});

function selectText(element) {
    var doc = document, text = element, range, selection;    
    if (doc.body.createTextRange) { //ms
        range = doc.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) { //all others
        selection = window.getSelection();        
        range = doc.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

function setCookie(cname,cvalue,exhours)
{
	var d = new Date();
	d.setTime(d.getTime()+(exhours*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname)
{
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
	  var c = ca[i].trim();
	  if (c.indexOf(name)==0) return c.substring(name.length,c.length);
	}
	return "";
}