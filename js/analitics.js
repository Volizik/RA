$(function () {
    //for analitics-tabs
    var hash = document.location.hash;
    if (hash !== '') {
        $('.analitics__tabs').find('a').removeClass('active');
        $('.analitics__content').hide();

        $('a[href="' + hash + '"]').addClass('active');
        $(hash).show();
        setLocation(hash)
    } else {
        $('.analitics__content').each(function (i) {
            if (i != 0) {
                $(this).hide(0)
            }
        });
    }
    function setLocation(curLoc) {
        try {
            history.pushState(null, null, curLoc);
            return;
        } catch (e) {
        }
        location.hash = '#' + curLoc;
    }

    $(document).on('click', '.analitics__tabs li>a', function () {
        var tabId = $(this).attr('href');
        $('.analitics__tabs li>a').removeClass('active');
        $(this).addClass('active');
        $('.analitics__content').hide();
        $(tabId).show();
        setLocation(tabId);
        return false;
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