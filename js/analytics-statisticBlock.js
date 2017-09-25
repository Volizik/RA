$(function () {
    //for hint in statistics
    $(document).on('click', '.hint', function () {
        event.preventDefault();
        var hint = $(this).parent().find('.in-hover');
        var text = $(this).parent().find('.un-hover');
        if ($(this).hasClass('show-hint')) {
            $(this).removeClass('show-hint');
            text.show();
            hint.hide();
        }
        else {
            $('.in-hover').hide();
            $('.un-hover').show();
            $('.statistics__body__block>a').removeClass('show-hint');
            $(this).addClass('show-hint');
            hint.show();
            text.hide();
        }
    });
});