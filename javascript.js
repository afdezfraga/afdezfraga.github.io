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
	[1, 'CyberPunkMetalHead', 'Binance-volatility-trading-bot', 91],
     	[2, 'swar', 'Swar-Chia-Plot-Manager', 335],
     	[3, 'slidevjs', 'slidev', 807],
     	[4, 'gwuhaolin', 'livego', 153],
     	[5, 'microsoft', 'winget-cli', 374],
     	[6, 'withfig', 'autocomplete', 1190],
     	[7, 'iluwatar', 'java-design-patterns', 3111],
     	[8, 'academind', 'react-complete-guide-code', 3],
     	[9, 'microsoft', 'winget-pkgs', 13989],
     	[10, 'SerenityOS', 'serenity', 21805],
     	[11, 'merry75', 'educative.io_courses', 118],
     	[12, 'deepfakes', 'faceswap', 1382],
     	[13, 'dfinity', 'ic', 2],
     	[14, 'youngyangyang04', 'leetcode-master', 1907],
     	[15, 'rustdesk', 'rustdesk', 65],
     	[16, 'doocs', 'leetcode', 2640],
     	[17, 'atlas-engineer', 'nyxt', 6907],
     	[18, 'TheAlgorithms', 'Java', 1354],
     	[19, 'syncthing', 'syncthing', 6570],
     	[20, 'bhattbhavesh91', 'cowin-vaccination-slot-availability', 99],
     	[21, 'trustwallet', 'assets', 8802],
     	[22, 'facebook', 'folly', 9704],
     	[23, 'taosdata', 'TDengine', 15524],
     	[24, 'PaddlePaddle', 'PaddleDetection', 979],
     	[25, 'EbookFoundation', 'free-programming-books', 6167],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 Binance-volatility-trading-bot', 91],
     	['#2 Swar-Chia-Plot-Manager', 335],
     	['#3 slidev', 807],
     	['#4 livego', 153],
     	['#5 winget-cli', 374],
     	['#6 autocomplete', 1190],
     	['#7 java-design-patterns', 3111],
     	['#8 react-complete-guide-code', 3],
     	['#9 winget-pkgs', 13989],
     	['#10 serenity', 21805],
     	['#11 educative.io_courses', 118],
     	['#12 faceswap', 1382],
     	['#13 ic', 2],
     	['#14 leetcode-master', 1907],
     	['#15 rustdesk', 65],
     	['#16 leetcode', 2640],
     	['#17 nyxt', 6907],
     	['#18 Java', 1354],
     	['#19 syncthing', 6570],
     	['#20 cowin-vaccination-slot-availability', 99],
     	['#21 assets', 8802],
     	['#22 folly', 9704],
     	['#23 TDengine', 15524],
     	['#24 PaddleDetection', 979],
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