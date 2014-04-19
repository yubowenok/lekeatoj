$(document).ready( function(){
    showBox = false;
    $("#submitbox").css("display", "none");
    $("#submit").click(
        function(){
            
            if (showBox) {
                srctext = $("#srctext").val();
                srcfile = $("#srcfile").val();
                console.log(srcfile);
                if (srctext=="" && srcfile=="") {
                    alert("Cannot submit empty code");
                    return;
                }
                window.location = "result.html";
                return;
            }
            showBox = !showBox;
            $("#submitbox").css("display", showBox?"inline":"none");
            window.scrollTo(0, document.body.scrollHeight);
        }
    );
    $("#subs").click( function(){
       window.location = "submission.html"; 
    });
});
