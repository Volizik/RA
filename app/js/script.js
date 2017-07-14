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

});