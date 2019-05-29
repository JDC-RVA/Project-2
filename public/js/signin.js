$(document).ready(function () {
    $("#loginButton").on("click", function (e) {
        e.preventDefault();

        var userName = $("#userName").val().trim();
        var userPass = $("#userPass").val().trim();

        $.ajax("/api/users", {
            type: "GET",
            data: {
                user_id: userName,
                user_password: userPass
            }
        }).then(
            function () {
                location.reload()
            }
        )
        $("#welcomeBanner").text(`Welcome, ${userName}`)
    })
});