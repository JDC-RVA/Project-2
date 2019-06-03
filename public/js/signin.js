$(document).ready(function () {
    $("#loginButton").on("click", function (e) {
        e.preventDefault();

        var userName = $("#userName").val().trim();
        var userPass = $("#userPass").val().trim();


        $.ajax("/api/users/login", {
            type: "POST",
            data: {
                user_id: userName,
                user_password: userPass
            }
        }).then(
            function (test) {
               
            //    location.reload()
            }
        ).catch(
            function(error){
                console.log(error)
            }
        )
        $("#welcomeBanner").text(`Welcome, ${userName}`)
    })
});




