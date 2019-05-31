$(document).ready(function () {
    $("#logOff").on("click", function (e) {
       
        $.ajax("/api/users/:id", {
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
        $("#welcomeBanner").text(`Project 2 Logo`)
    })
});