$(function () {

    //for main tabs
    $('.tabs__content').each(function (i) {
        if (i != 0) {
            $(this).hide(0)
        }
    });
    $(document).on('click', '.tabs__buttons li>a', function (e) {
        e.preventDefault();

        var tabId = $(this).attr('href');
        $('.tabs__buttons li>a').removeClass('active_tab');
        $(this).addClass('active_tab');
        $('.tabs__content').hide();
        $(tabId).fadeIn();
    });

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

    //for main tabs if window size lower then 1200px
    if (window.innerWidth < 1200) {
        $('.tabs__active-btn').text($('.tabs__buttons .active_tab').text());
        $(document).on('click', '.tabs__active-btn', function () {
            $(this).parent().find('.tabs__buttons a').show();
            $(this).parent().find('.active_tab').hide();
            $('.tabs__buttons').slideToggle();
        });
        $(document).on('click', '.tabs__buttons a', function () {
            $('.tabs__active-btn').text($(this).text());
            $('.tabs__buttons').slideToggle();
        });
    }

    //for dropdown
    $(document).on('click', '.drop', function() {
        $(this).find('ul').slideToggle();
    });
    $(document).on('click', '.drop li', function () {
        $(this).parent().parent().find('span:first-of-type').text($(this).text());
    });
    $(document).on('click', function (e) {
        if ($(e.target).closest('.drop').length != 1) {
            $('.drop ul').slideUp('fast');
        }
    });


    //mobile menu show/close button--------------------------------------------------
    $(document).on('click', '.nav__menu-btn', function () {
        var list = $('.menu');
        if (list.is(':visible')) {
            list.slideUp();
        } else {
            list.slideDown();
        }
    });
    //!mobile menu button-------------------------------------------------------------



});


