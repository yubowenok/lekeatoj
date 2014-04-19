
$(document).ready( function(){
	$("#header").load("header.html", function(){
		$("#user").button().addClass("btn-text");
		$("#hdr"+curpage).addClass("headersel");
		pages = ["index", "session", "problem", "submission", "result"];
		pageidx = pages.indexOf(curpage);
		for(var i=pageidx+1; i<pages.length; i++) $("#hdr"+pages[i]).css("display", "none");
		
	}); 
	$(".bottombtn").button();
	$(".btn").button();
	
	/*
	$("td").addClass("ui-widget-content");
	$("tr")
		.hover( function(){ $(this).children("td").addClass("ui-state-hover"); },
				function(){ $(this).children("td").removeClass("ui-state-hover"); } )
		.click( function(){ 
			$(this).children("td").toggleClass("ui-state-highlight");
			$(this).children("td").toggleClass("ui-state-highlight");
		});
		*/
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