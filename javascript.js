  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart']});
  google.charts.load('current', { 'packages': ['table'] });

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Top');
    data.addColumn('string', 'Author');
    data.addColumn('string', 'Name');
    data.addColumn('number', 'Commits');
    data.addRows([
	[1, 'swar', 'Swar-Chia-Plot-Manager', 335],
     	[2, 'slidevjs', 'slidev', 787],
     	[3, 'google', 'zx', 130],
     	[4, 'rustdesk', 'rustdesk', 64],
     	[5, 'gwuhaolin', 'livego', 153],
     	[6, 'youngyangyang04', 'leetcode-master', 1883],
     	[7, 'gto76', 'python-cheatsheet', 2101],
     	[8, 'iluwatar', 'java-design-patterns', 3110],
     	[9, 'abuanwar072', 'Flutter-Responsive-Admin-Panel-or-Dashboard', 22],
     	[10, 'ericaltendorf', 'plotman', 535],
     	[11, 'SerenityOS', 'serenity', 21653],
     	[12, 'microsoft', 'winget-cli', 370],
     	[13, 'microsoft', 'winget-pkgs', 13720],
     	[14, 'withfig', 'autocomplete', 1188],
     	[15, 'dogecoin', 'dogecoin', 13537],
     	[16, 'academind', 'react-complete-guide-code', 3],
     	[17, 'trustwallet', 'assets', 8706],
     	[18, 'bhattbhavesh91', 'cowin-vaccination-slot-availability', 99],
     	[19, 'merry75', 'educative.io_courses', 118],
     	[20, 'syncthing', 'syncthing', 6567],
     	[21, 'TheAlgorithms', 'Java', 1354],
     	[22, 'doocs', 'leetcode', 2628],
     	[23, 'PaddlePaddle', 'PaddleDetection', 976],
     	[24, 'pallupz', 'covid-vaccine-booking', 389],
     	[25, 'ossrs', 'srs', 6864],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 Swar-Chia-Plot-Manager', 335],
     	['#2 slidev', 787],
     	['#3 zx', 130],
     	['#4 rustdesk', 64],
     	['#5 livego', 153],
     	['#6 leetcode-master', 1883],
     	['#7 python-cheatsheet', 2101],
     	['#8 java-design-patterns', 3110],
     	['#9 Flutter-Responsive-Admin-Panel-or-Dashboard', 22],
     	['#10 plotman', 535],
     	['#11 serenity', 21653],
     	['#12 winget-cli', 370],
     	['#13 winget-pkgs', 13720],
     	['#14 autocomplete', 1188],
     	['#15 dogecoin', 13537],
     	['#16 react-complete-guide-code', 3],
     	['#17 assets', 8706],
     	['#18 cowin-vaccination-slot-availability', 99],
     	['#19 educative.io_courses', 118],
     	['#20 syncthing', 6567],
     	['#21 Java', 1354],
     	['#22 leetcode', 2628],
     	['#23 PaddleDetection', 976],
     	['#24 covid-vaccine-booking', 389],
     	['#25 srs', 6864],
     	
    ]);

    // Set chart options
    var options = {};

    var options2 = {
        title: 'Top trending GitHub repos',
        hAxis: {
          title: 'Number of commits'
        },
        'width':'1090','height':'1100'
      };

    // Instantiate and draw our chart, passing in some options.
    var chart2 = new google.visualization.BarChart(document.getElementById('chart_div2'));
    chart2.draw(data2, options2);

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.Table(document.getElementById('chart_div'));
    chart.draw(data, options);
  }