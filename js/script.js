$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})


$(function() {
    $('#hotCoffees').on("click", (function(){
        $('#hotDrinkItems').toggle();
    }));
});

$(function() {
    $('#modalButton').on("click", (function() {
        $('#modalForm').modal('show')
    }));
});


