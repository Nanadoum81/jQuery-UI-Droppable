// script.js

$(function () {
    // DRAGGABLE
    // https://jqueryui.com/draggable/

    $('.box').draggable();

    $('#box1').draggable({
        scroll: true,
        revert: "invalid"
    });

    $('#box2').draggable({
        axis: "x"
    });

    $('#box3').draggable({
        axis: "y"
    });

    $('#box4').draggable({
        containment: ".container",
        revert: "invalid"
    });


    // DROPPABLE
    // https://jqueryui.com/droppable/

    $('#droppable').droppable({
        accept: '#box1',
        drop: function () {
            $(this).text("when a box got attitude drop it like it's hot!");
        }
    });
});
