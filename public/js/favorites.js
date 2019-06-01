var clicked = false;
$(".card .far.fa-heart")
    .on("click", function(event) {
        event.stopPropagation();
        if (clicked === false ) {
        $(this).removeClass("far").addClass("fas");
        Materialize.toast('Added to Favorites', 3000);
        clicked = true;
        } else { 
        $(this).removeClass("fas").addClass("far");
        Materialize.toast('Removed from Favorites', 3000);
        clicked = false;
        }
    });

