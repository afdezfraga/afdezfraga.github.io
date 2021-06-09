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
     	[2, 'slidevjs', 'slidev', 801],
     	[3, 'google', 'zx', 131],
     	[4, 'gwuhaolin', 'livego', 153],
     	[5, 'YunYouJun', 'air-conditioner', 62],
     	[6, 'rustdesk', 'rustdesk', 65],
     	[7, 'microsoft', 'winget-cli', 372],
     	[8, 'Renovamen', 'playground-macos', 64],
     	[9, 'academind', 'react-complete-guide-code', 3],
     	[10, 'withfig', 'autocomplete', 1188],
     	[11, 'iluwatar', 'java-design-patterns', 3111],
     	[12, 'youngyangyang04', 'leetcode-master', 1907],
     	[13, 'microsoft', 'winget-pkgs', 13867],
     	[14, 'SerenityOS', 'serenity', 21717],
     	[15, 'merry75', 'educative.io_courses', 118],
     	[16, 'ericaltendorf', 'plotman', 535],
     	[17, 'trustwallet', 'assets', 8759],
     	[18, 'syncthing', 'syncthing', 6567],
     	[19, 'bhattbhavesh91', 'cowin-vaccination-slot-availability', 99],
     	[20, 'TheAlgorithms', 'Java', 1354],
     	[21, 'doocs', 'leetcode', 2632],
     	[22, 'PaddlePaddle', 'PaddleDetection', 977],
     	[23, 'emilk', 'egui', 1370],
     	[24, 'ant-design', 'ant-design', 20802],
     	[25, 'EbookFoundation', 'free-programming-books', 6167],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 Swar-Chia-Plot-Manager', 335],
     	['#2 slidev', 801],
     	['#3 zx', 131],
     	['#4 livego', 153],
     	['#5 air-conditioner', 62],
     	['#6 rustdesk', 65],
     	['#7 winget-cli', 372],
     	['#8 playground-macos', 64],
     	['#9 react-complete-guide-code', 3],
     	['#10 autocomplete', 1188],
     	['#11 java-design-patterns', 3111],
     	['#12 leetcode-master', 1907],
     	['#13 winget-pkgs', 13867],
     	['#14 serenity', 21717],
     	['#15 educative.io_courses', 118],
     	['#16 plotman', 535],
     	['#17 assets', 8759],
     	['#18 syncthing', 6567],
     	['#19 cowin-vaccination-slot-availability', 99],
     	['#20 Java', 1354],
     	['#21 leetcode', 2632],
     	['#22 PaddleDetection', 977],
     	['#23 egui', 1370],
     	['#24 ant-design', 20802],
     	['#25 free-programming-books', 6167],
     	
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