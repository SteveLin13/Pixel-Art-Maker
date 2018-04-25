// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$('#submit').click(function(evt) {
    evt.preventDefault();
    clearGrid();
    makeGrid();
});

$('#pixelCanvas').on('click', 'td', function() {
    let color = $('#colorPicker').val();
    $(this).css('background', color);
});

// function changeColor(){
//     let color = $('#colorPicker').val();
//     $(this).css('background', color);
// }


function makeGrid() {
    let height = $('#inputHeight').val();
    let width = $('#inputWeight').val();
    for (let i = 0; i < height; i++) {
        $('#pixelCanvas').append('<tr></tr>');
        for (let j = 0; j < width; j++) {
            $('tr').last().append('<td></td>');
        }
    }
}

function clearGrid() {
    $('tr').remove();
}
