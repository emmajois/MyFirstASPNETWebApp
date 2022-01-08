$("#btnsend").click(function () {
    alert("From: " + $("#txtfrom").val() +
        ", Subject: " + $("#txtsubject").val() +
        ", Message: " + $("#txtmsg").val());

    $("#picGanderson").fadeOut("slow");
})