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
	[1, 'CyberPunkMetalHead', 'Binance-volatility-trading-bot', 94],
     	[2, 'swar', 'Swar-Chia-Plot-Manager', 335],
     	[3, 'gwuhaolin', 'livego', 153],
     	[4, 'slidevjs', 'slidev', 815],
     	[5, 'microsoft', 'winget-cli', 375],
     	[6, 'iluwatar', 'java-design-patterns', 3111],
     	[7, 'microsoft', 'winget-pkgs', 14080],
     	[8, 'withfig', 'autocomplete', 1232],
     	[9, 'deepfakes', 'faceswap', 1385],
     	[10, 'academind', 'react-complete-guide-code', 3],
     	[11, 'merry75', 'educative.io_courses', 118],
     	[12, 'SerenityOS', 'serenity', 21853],
     	[13, 'rustdesk', 'rustdesk', 68],
     	[14, 'facebook', 'folly', 9704],
     	[15, 'doocs', 'leetcode', 2649],
     	[16, 'qarmin', 'czkawka', 346],
     	[17, 'TheAlgorithms', 'Java', 1354],
     	[18, 'atlas-engineer', 'nyxt', 6920],
     	[19, 'taosdata', 'TDengine', 15553],
     	[20, 'syncthing', 'syncthing', 6571],
     	[21, 'dfinity', 'ic', 2],
     	[22, 'ant-design', 'ant-design', 20810],
     	[23, 'youngyangyang04', 'leetcode-master', 1951],
     	[24, 'EbookFoundation', 'free-programming-books', 6167],
     	[25, 'trustwallet', 'assets', 8839],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 Binance-volatility-trading-bot', 94],
     	['#2 Swar-Chia-Plot-Manager', 335],
     	['#3 livego', 153],
     	['#4 slidev', 815],
     	['#5 winget-cli', 375],
     	['#6 java-design-patterns', 3111],
     	['#7 winget-pkgs', 14080],
     	['#8 autocomplete', 1232],
     	['#9 faceswap', 1385],
     	['#10 react-complete-guide-code', 3],
     	['#11 educative.io_courses', 118],
     	['#12 serenity', 21853],
     	['#13 rustdesk', 68],
     	['#14 folly', 9704],
     	['#15 leetcode', 2649],
     	['#16 czkawka', 346],
     	['#17 Java', 1354],
     	['#18 nyxt', 6920],
     	['#19 TDengine', 15553],
     	['#20 syncthing', 6571],
     	['#21 ic', 2],
     	['#22 ant-design', 20810],
     	['#23 leetcode-master', 1951],
     	['#24 free-programming-books', 6167],
     	['#25 assets', 8839],
     	
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