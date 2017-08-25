$(function () {

    $(document).on('click', '.menu__body__list>a', function () {

        var submenu = $(this).parent().find('.submenu');//находим элемент в ДОМ
        $('.menu__body__list a').find('.list-sign').html('+');

        if (($(this).hasClass('show-submenu'))) {//если у элемента по которому мы кликаем есть класс
            $(this).removeClass('show-submenu');//то удаляем этот класс
            submenu.hide();//скрываем сабменю
            $('.menu__body__list a').find('.list-sign').html('+');
        } else {
            $('.menu__body__list a').removeClass('show-submenu');//удаляем класс у всех элементов
            $('.submenu').hide();//скрываем все сабменю
            $(this).addClass('show-submenu');//добавляем класс тому элементу по которому кликаем
            submenu.show();//показать табменю того элемента покоторому кликаем
            $(this).find('.list-sign').html('-');
        }
    });

    $(document).on('click', '.submenu li', function () {
        $('.submenu').hide();
        $('.menu__body__list a').removeClass('show-submenu');
        $('.menu__body__list a').removeClass('active--li');
        $(this).parent().parent().find('a').addClass('active--li')
    });

    if (window.innerWidth < 940) {
        $(document).on('click', '.submenu li', function () {
            $('.submenu').hide();
            $('.menu').slideUp();
            $('.menu__body__list a').removeClass('show-submenu');
        });
    }

    $(document).on('click', function (e) {
        if ($(e.target).closest('.menu__body li a').length != 1) {
            $('.submenu').hide();
            $('.menu__body li a').removeClass('show-submenu');
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