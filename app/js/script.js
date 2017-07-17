$(function () {

    $(document).on('click', '.menu__body__list>a', function () {
        var submenu = $(this).parent().find('.submenu');//находим элемент в ДОМ
        var p = $(this).find('p');
        if ($(this).hasClass('show-submenu')) {//если у элемента по которому мы кликаем есть класс
            $(this).removeClass('show-submenu');//то удаляем этот класс
            submenu.hide();//скрываем сабменю
        }
        else {
            $('.menu__body__list a').removeClass('show-submenu');//удаляем класс у всех элементов
            $('.submenu').hide();//скрываем все сабменю
            $(this).addClass('show-submenu');//добавляем класс тому элементу по которому кликаем
            submenu.show();//показать табменю того элемента покоторому кликаем
        }
    });


    //for tabs
    $('.tabs__body__content').each(function (i) {
        if (i != 0) {
            $(this).hide(0)
        }
    });
    $(document).on('click', '.tabs__body__buttons li>a', function (e) {
        e.preventDefault();
        var tabId = $(this).attr('href');
        $('.tabs__body__buttons li>a').removeClass('active');
        $(this).addClass('active');
        $('.tabs__body__content').hide();
        $(tabId).fadeIn();
    });

    //for inside-tabs

    $('.tabs__body__content__inside-content').each(function (i) {
        if (i != 0) {
            $(this).hide(0)
        }
    });
    $(document).on('click', '.tabs__body__content__inside-tabs li>a', function (e) {
        e.preventDefault();
        var tabId = $(this).attr('href');
        $('.tabs__body__content__inside-tabs li>a').removeClass('active');
        $(this).addClass('active');
        $('.tabs__body__content__inside-content').hide();
        $(tabId).fadeIn();
    });

    //hover for content
    // $(document).on('hover', '.content__body__block__bottom', function () {
    //     var inHover = $(this).find('.in-hover');//находим элемент в ДОМ
    //     var unHover = $(this).find('.un-hover');//находим элемент в ДОМ
    //     if((inHover).css('display', 'block')) {
    //     }
    // });


    //for show-text in posts
    $(document).on('click', '.show-text-btn', function () {
        event.preventDefault();
        var text = $(this).parent().find('p');
        text.css('display', 'block');
        $(this).hide();
    });

    //for show-text in comments
    $(document).on('click', '.show-text-btn', function () {
        event.preventDefault();
        var text = $(this).parent().find('.content');
        text.css('height', 'auto');
        $(this).hide();
    });

    //click on drop-button
    $(document).on('click', '.drop a', function () {
        event.preventDefault();
        var submenu = $(this).parent().find('ul');
        if ($(this).hasClass('show-sub')) {//если у элемента по которому мы кликаем есть класс
            $(this).removeClass('show-sub');//то удаляем этот класс
            submenu.hide();//скрываем сабменю
        }
        else {
            $('.drop a').removeClass('show-sub');//удаляем класс у всех элементов
            $('.drop ul').hide();//скрываем все сабменю
            $(this).addClass('show-sub');//добавляем класс тому элементу по которому кликаем
            submenu.show();//показать табменю того элемента покоторому кликаем
        }
    });

    //for russian-in-antalia
    $(document).on('click', '.tabs .drop', function () {
        event.preventDefault();
        var submenu = $(this).parent().find('ul');
        if ($(this).hasClass('show-sub')) {//если у элемента по которому мы кликаем есть класс
            $(this).removeClass('show-sub');//то удаляем этот класс
            submenu.hide();//скрываем сабменю
        }
        else {
            $('.tabs .drop').removeClass('show-sub');//удаляем класс у всех элементов
            $('.drop ul').hide();//скрываем все сабменю
            $(this).addClass('show-sub');//добавляем класс тому элементу по которому кликаем
            submenu.show();//показать табменю того элемента покоторому кликаем
        }
    });

    // for mobile tabs
    $(document).on('click', '.tabs__body__buttons li a', function () {
        var li = $(document).find('.tabs__body__buttons li');
        var submenu = $(this).parent().find('ul');
        if ($(this).hasClass('active')) {//если у элемента по которому мы кликаем есть класс
            $(this).removeClass('active');//то удаляем этот класс
            submenu.hide();//скрываем сабменю
        }
        else {
            $('.drop a').removeClass('show-sub');//удаляем класс у всех элементов
            $('.drop ul').hide();//скрываем все сабменю
            $(this).addClass('show-sub');//добавляем класс тому элементу по которому кликаем
            li.show();//показать табменю того элемента покоторому кликаем
        }
    });
    //for rating section
    $(document).on('click','.toggles a', function () {
        event.preventDefault();
        $('.slide').toggle();
    });

    //for-mobile-menu
    $(document).on('click', '.menu-for-little-screen a', function () {
        event.preventDefault();
        var submenu = $(document).find('.menu');
        submenu.show();
    });
    $(document).on('click', '.menu h2', function () {
        event.preventDefault();
        var submenu = $(document).find('.menu');
        submenu.hide();
    });


});