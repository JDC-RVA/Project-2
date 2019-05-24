$(document).ready(function () {
    

    $("#registerButton").on("click", function (e) {
        e.preventDefault();

        console.log("ARGGH")

        var emailUser = $("#emailRegister").val().trim()
        var register = $("#userRegister").val().trim();
        var password = $("#passwordRegister").val().trim();
        var verifyPass = $("#passVerify").val().trim()

        if (password === verifyPass) {
            $.ajax("/api/users", {
                type: "POST",
                data: {
                    email: emailUser,
                    user_id: register,
                    user_password: password
                }
            }).then(
                function () {
                    console.log("created new user");
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        } else {
            alert("WRONG")
        }
    });
});