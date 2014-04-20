var perc = 0.0;
timer = setInterval("updateProgress()", 16);

$(document).ready( function(){
    showDialog = false;
    $("#progress").progressbar({
        value: 0.0
    });
    $(".testcase").click( function(){
        showDialog = !showDialog;
        if (!showDialog) {
            $("#dialog").remove();
            return;
        }
        $("body").append("<div id='dialog'></div>");
        var testid = $(this).find(".testid").text();
        $("#dialog").append("<div>Input</div><pre>3 5</pre>");
        $("#dialog").append("<div>Expected Output</div><pre>8</pre>");
        $("#dialog").append("<div>Your Output</div><pre>8.01</pre>");
        $("#dialog").append("<div>Verdict</div><pre>Wrong Answer: Error exceeding 1E-6</pre>");
        
        $("#dialog").dialog({
            "title": "Test Case #"+testid,
            "close": function(){ showDialog=false; $("#dialog").remove(); } 
        });
    });
    $("#source").click( function(){
       window.location = "source.html"; 
    });
});

function updateProgress(){
    perc += 1.0;
    $("#progress").progressbar("option", "value", perc);
    if (perc>=100.0) {
        clearTimeout(timer);
        $("#status").text("Partially Accepted").removeClass("color-run").addClass("color-pac");
        $("#title").text("Submission Result #1234567");
        $("#group-small .testverdict").text("OK");
        $("#group-small .testid").removeClass("bgcolor-run").addClass("bgcolor-ac");
        $("#group-small .testcase").removeClass("color-run").addClass("color-ac text-bold");
        $("#groupresult-small").text("PASSED").removeClass("color-run").addClass("color-ac");
    }
}