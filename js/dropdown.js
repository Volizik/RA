$(function () {

    $(document).on('click', '.drop', function() {
        if ($(this).find('ul').is(':visible')) {
            $(this).find('ul').slideUp();
        } else {
            $('.drop ul').slideUp();
            $(this).find('ul').slideDown();
        }
    });
    $(document).on('click', '.drop li', function () {
        $(this).parent().parent().find('span:first-of-type').text($(this).text());
        $('.drop li').removeClass('activeDropLi');
        $(this).addClass('activeDropLi');
    });
    $(document).on('click', function (e) {
        if ($(e.target).closest('.drop').length != 1) {
            $('.drop ul').slideUp('fast');
        }
    });

//for analytics-tab --> #users check dropdown
    $(document).on('click', '.actions--left>div label', function () {
        if($(this).find('input').is(':checked')) {
            $(this).parent().find('.drop').show()
        } else {
            $(this).parent().find('.drop').hide()
        }
    });
});
