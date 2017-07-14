$(function () {
    $(document).on('click', '.menu__body__list>a', function () {
        var submenu = $(this).parent().find('.submenu');//находим элемент в ДОМ
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


    })
});