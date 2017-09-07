$(function () {

    $('.analitics__content').each(function (i) {
        if (i != 0) {
            $(this).hide(0)
        }
    });
    $(document).on('click', '.analitics__tabs li', function () {
        var itemId = $(this).attr('data-id');
        var activeTab = $('.analitics__content').parent().find('.analitics__content[data-id='+itemId+']');
        $('.analitics__content').hide();
        activeTab.show();
        $('.analitics__tabs li').removeClass('active');
        $(this).addClass('active');
    });



    //for rating section --> show-text in posts
    $(document).on('click', '.show-text-btn', function () {
        event.preventDefault();
        var text = $(this).parent().find('p');
        text.css('display', 'block');
        $(this).hide();
    });

    //for rating section --> show-text in comments
    $(document).on('click', '.show-text-btn', function () {
        event.preventDefault();
        var text = $(this).parent().find('.content');
        text.css('height', 'auto');
        $(this).hide();
    });

    //for rating section slider
    $(document).on('click', '.toggles a', function () {
        event.preventDefault();
        $('.slide').slideToggle();
    });


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

    //for analitics-tab --> #users check
    $(document).on('click', '.actions--left>div label', function () {
        if($(this).find('input').is(':checked')) {
            $(this).parent().find('.drop').show()
        } else {
            $(this).parent().find('.drop').hide()
        }
    });
});