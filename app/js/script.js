$(function () {

    $(document).on('click', '.menu__body__list>a', function () {
        var submenu = $(this).parent().find('.submenu');//находим элемент в ДОМ
        var p = $(this).find('p');
        $('.menu__body__list a').find('.list-sign').html('+');
        if ($(this).hasClass('show-submenu')) {//если у элемента по которому мы кликаем есть класс
            $(this).removeClass('show-submenu');//то удаляем этот класс
            submenu.hide();//скрываем сабменю
            $('.menu__body__list a').find('.list-sign').html('+');
        }
        else {
            $('.menu__body__list a').removeClass('show-submenu');//удаляем класс у всех элементов
            $('.submenu').hide();//скрываем все сабменю
            $(this).addClass('show-submenu');//добавляем класс тому элементу по которому кликаем
            submenu.show();//показать табменю того элемента покоторому кликаем
            $(this).find('.list-sign').html('-');
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
    $(document).on('click', '.tabs__body__content__inside-tabs li>a', function () {
        event.preventDefault();
        var tabId = $(this).attr('href');
        console.log(tabId);
        $('.tabs__body__content__inside-tabs li>a').removeClass('active');
        $(this).addClass('active');
        $('.tabs__body__content__inside-content').hide();
        $(tabId).fadeIn();
    });


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
    $(document).on('click', '.tabs__head .drop', function () {
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
    // $(document).on('click', '.tabs__body__buttons li a', function () {
    //     var li = $(document).find('.tabs__body__buttons li');
    //     var submenu = $(this).parent().find('ul');
    //     if ($(this).hasClass('activ')) {//если у элемента по которому мы кликаем есть класс
    //         $(this).removeClass('activ');//то удаляем этот класс
    //         submenu.hide();//скрываем сабменю
    //     }
    //     else {
    //         $('.drop a').removeClass('show-sub');//удаляем класс у всех элементов
    //         $('.drop ul').hide();//скрываем все сабменю
    //         $(this).addClass('show-sub');//добавляем класс тому элементу по которому кликаем
    //         li.show();//показать табменю того элемента покоторому кликаем
    //     }
    // });
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

    // for top tabs in mobile
    if(document.documentElement.clientWidth < 1450) {
        var ul = $(document).find('.tabs__body__buttons');
        $(document).on('click', '.dropdown-tabs>span', function () {
            ul.addClass('show-tabs');
            $(document).on('click', '.tabs__body__buttons a', function () {
                $(document).find('.tabs__body__buttons a').hide();
                $(document).find('.tabs__body__buttons .active').show();
            });
            $(document).find('.tabs__body__buttons a').show();
        });

    }

    $('.img').circleProgress({
        value: 1,
        size: 245,
        thickness: 38,
        startAngle: 4.74,
        emptyFill: "#fff",
        animation: {
            duration: 2000
        },
        fill: {
            color: "transparent"
        }
    });

    $('.js-counter').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    //charts

    // Load the Visualization API and the controls package.
    google.charts.load('current', {'packages':['corechart', 'controls']});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawDashboard);

    // Callback that creates and populates a data table,
    // instantiates a dashboard, a range slider and a pie chart,
    // passes in the data and draws it.
    function drawDashboard() {

        // Create our data table.
        var data = google.visualization.arrayToDataTable([
            ['Name', ' ', 'Посты', 'Реакции'],
            [' ', 1, 1000, 400],
            [' ', 2, 1170, 460],
            [' ', 3, 660, 1120],
            [' ', 4, 1030, 540],
            [' ', 5, 1000, 400],
            [' ', 6, 1170, 460],
            [' ', 7, 660, 1120],
            [' ', 8, 1000, 400],
            [' ', 9, 1170, 460],
            [' ', 10, 660, 1120],
            [' ', 11, 1000, 400],
            [' ', 12, 1170, 460],
            [' ', 13, 660, 1120],
            [' ', 14, 1000, 400],
            [' ', 15, 1170, 460],
            [' ', 16, 660, 1120],
            [' ', 17, 1030, 540],
            [' ', 18, 1000, 400],
            [' ', 19, 1170, 460],
            [' ', 20, 660, 1120],
            [' ', 21, 1000, 400],
            [' ', 22, 1170, 460],
            [' ', 23, 660, 1120],
            [' ', 24, 1000, 400],
            [' ', 25, 1170, 460],
            [' ', 26, 660, 1120],
        ]);

        // Create a dashboard.
        var dashboard = new google.visualization.Dashboard(
            document.getElementById('dashboard_div'));

        // Create a range slider, passing some options
        var donutRangeSlider = new google.visualization.ControlWrapper({
            'controlType': 'NumberRangeFilter',
            'containerId': 'filter_div',
            'options': {
                'filterColumnLabel': ' ',
                'minValue': 1,
                'maxValue': 26,
                'width': 500
            },
            // Explicitly positions the thumbs at position 3 and 8,
            // out of the possible range of 1 to 10.
            'state': {'lowValue': 1, 'highValue': 26}
        });

        // Create a pie chart, passing some options
        var columnChart = new google.visualization.ChartWrapper({
            'chartType': 'ColumnChart',
            'containerId': 'chart_div',
            'options': {
                'width': 1100,
                'height': 500,
            },
            // The pie chart will use the columns 'Name' and 'Donuts eaten'
            // out of all the available ones.
            'view': {'columns': [1, 2, 3]}
        });


        // Establish dependencies, declaring that 'filter' drives 'pieChart',
        // so that the pie chart will only display entries that are let through
        // given the chosen slider range.
        dashboard.bind(donutRangeSlider, columnChart);

        // Draw the dashboard.
        dashboard.draw(data);
    }
});

