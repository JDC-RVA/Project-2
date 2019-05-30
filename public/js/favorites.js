$(".card .far.fa-heart")
    .on("click", function(event) {
        event.stopPropagation();
        $(this).removeClass("far").addClass("fas");
    });