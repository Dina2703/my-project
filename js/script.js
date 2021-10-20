$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})


$(function() {
    $('#hotCoffees').on("click", (function(){
        $('#hotDrinkItems').toggle();
    }));
});



