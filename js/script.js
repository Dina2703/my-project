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


// let btnAdd = document.querySelector('#add');
// let btnSubtract = document.querySelector('#subtract');
// let input = document.querySelector('#orderInput');

// btnAdd.addEventListener('click', () => {
//     input.value = parseInt(input.value) + 1;
// });
// btnSubtract.addEventListener('click', () => {
//     if(input.value === '0') {
//         input.value = '0';
//     } else 
//     input.value = parseInt(input.value) - 1;
// });

