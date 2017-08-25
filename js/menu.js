$(function () {

    $(document).on('click', '.menu__body__list>a', function () {

        var submenu = $(this).parent().find('.submenu');//находим элемент в ДОМ
        $('.menu__body__list a').find('.list-sign').html('+');

        if (($(this).hasClass('show-submenu')) && ($(this).hasClass('active--li'))) {//если у элемента по которому мы кликаем есть класс
            $(this).removeClass('show-submenu');//то удаляем этот класс
            $(this).removeClass('active--li');//то удаляем этот класс
            submenu.hide();//скрываем сабменю
            $('.menu__body__list a').find('.list-sign').html('+');
        } else {
            $('.menu__body__list a').removeClass('show-submenu');//удаляем класс у всех элементов
            $('.menu__body__list a').removeClass('active--li');//удаляем класс у всех элементов
            $('.submenu').hide();//скрываем все сабменю
            $(this).addClass('show-submenu');//добавляем класс тому элементу по которому кликаем
            $(this).addClass('active--li');
            submenu.show();//показать табменю того элемента покоторому кликаем
            $(this).find('.list-sign').html('-');
        }
    });

    $(document).on('click', '.submenu li', function () {
        $('.submenu').hide();
        $('.menu__body__list a').removeClass('show-submenu');
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

});