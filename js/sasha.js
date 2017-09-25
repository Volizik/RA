$(function () {
    $('#periodpickerstart, #periodpickerend').periodpicker({
        norange: true, // use only one value
        cells: [1, 1], // show only one month

        resizeButton: false, // deny resize picker
        fullsizeButton: false,
        fullsizeOnDblClick: false
    });
});

