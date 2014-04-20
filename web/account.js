$(document).ready( function(){
    user = getCookie("handle");
    if (user=="") {
        window.location = "index.html";
        return;
    }
    $("#title").text("Account Info - "+user);
    $("#logout").click(function(){
        setCookie("handle","",0);
        window.location = "index.html";
        return;
    })
});