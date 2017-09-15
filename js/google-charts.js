$(function () {
    google.charts.load("current", {packages: ["corechart"]});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Статус 485', 15],
            ['Фото 592', 19],
            ['Видео 15', 15],
            ['Ссылка 8', 8],
            ['Событие 2', 12]
        ]);

        var options = {
            pieHole: 0.7,
            height: 400,
            width: 600,
            pieSliceText: 'none',
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);

    }

    //for donatChart2
    google.charts.load("current", {packages: ["corechart"]});
    google.charts.setOnLoadCallback(drawChart2);

    function drawChart2() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Like 592sdf', 15],
            ['Super 11 152dsdf sdfsfsdf', 19],
            ['Ха-ха 15sdfsdf sdf', 15],
            ['Ух ты 8sd  sdff', 8],
            ['Сочувствую 2sdsdfsdfsdfsdff', 12]
        ]);
        var options = {
            pieHole: 0.7,
            height: 400,
            width: 600,
            pieSliceText: 'none',

        };
        var chart = new google.visualization.PieChart(document.getElementById('piechart2'));
        chart.draw(data, options);

    }

    //charts

    // Load the Visualization API and the controls package.
    google.charts.load('current', {'packages': ['corechart', 'controls']});

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


        if(window.innerWidth>1500) {
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
        } else {
            // Create a range slider, passing some options
            var donutRangeSlider = new google.visualization.ControlWrapper({
                'controlType': 'NumberRangeFilter',
                'containerId': 'filter_div',
                'options': {
                    'filterColumnLabel': ' ',
                    'minValue': 1,
                    'maxValue': 26,
                    'width': 200
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
                    'width': 750,
                    'height': 300,
                },
                // The pie chart will use the columns 'Name' and 'Donuts eaten'
                // out of all the available ones.
                'view': {'columns': [1, 2, 3]}
            });
        }


        // Establish dependencies, declaring that 'filter' drives 'pieChart',
        // so that the pie chart will only display entries that are let through
        // given the chosen slider range.
        dashboard.bind(donutRangeSlider, columnChart);

        // Draw the dashboard.
        dashboard.draw(data);
    }

});