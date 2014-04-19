
$(document).ready( function(){
    $("#srctext").load("test.cpp", function(){
        SyntaxHighlighter.highlight('#srctext');
    });
    $("#selall").css("cursor", "pointer")
    .click(function(){
        selectText($("#srctext .container")[0]);
    });
    $("#details").click(function(){
        window.location = "result.html";
    })
});