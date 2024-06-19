$(document).ready(function(){

    $(".loginBtn").click(function(event) {
        event.preventDefault();
        let isValid = true;

        if ($(".userId").val().trim() === "") {
            $(".idError").show();
            isValid = false;
        } else {
            $(".idError").hide();
        }

        if ($(".userPw").val().trim() === "") {
            $(".pwError").show();
            isValid = false;
        } else {
            $(".pwError").hide();
        }
    })




})