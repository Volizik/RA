$(function () {
    //show-text in posts
    $(document).on('click', '.show-text-btn', function () {
        event.preventDefault();
        var text = $(this).parent().find('p');
        text.css('display', 'block');
        $(this).hide();
    });

    //show-text in comments
    $(document).on('click', '.show-text-btn', function () {
        event.preventDefault();
        var text = $(this).parent().find('.content');
        text.css('height', 'auto');
        $(this).hide();
    });

    //slider
    $(document).on('click', '.toggles a', function () {
        event.preventDefault();
        $('.slide').toggle();
    });
});