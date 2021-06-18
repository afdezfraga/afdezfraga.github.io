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
	[1, 'ethersphere', 'bee', 1170],
     	[2, 'deepfakes', 'faceswap', 1389],
     	[3, 'withfig', 'autocomplete', 1250],
     	[4, 'CyberPunkMetalHead', 'Binance-volatility-trading-bot', 94],
     	[5, 'jwasham', 'coding-interview-university', 1658],
     	[6, 'Chia-Network', 'pool-reference', 106],
     	[7, 'gwuhaolin', 'livego', 153],
     	[8, 'firstcontributions', 'first-contributions', 25032],
     	[9, 'doocs', 'leetcode', 2690],
     	[10, 'PaperMC', 'Paper', 5746],
     	[11, 'facebook', 'folly', 9704],
     	[12, 'taosdata', 'TDengine', 15710],
     	[13, 'merry75', 'educative.io_courses', 118],
     	[14, 'academind', 'react-complete-guide-code', 3],
     	[15, 'microsoft', 'winget-cli', 381],
     	[16, 'SerenityOS', 'serenity', 22219],
     	[17, 'TheAlgorithms', 'Java', 1354],
     	[18, 'siduck76', 'NvChad', 340],
     	[19, 'microsoft', 'winget-pkgs', 14867],
     	[20, 'lyswhut', 'lx-music-desktop', 1008],
     	[21, 'rustdesk', 'rustdesk', 78],
     	[22, 'IrisShaders', 'Iris', 641],
     	[23, 'CyC2018', 'CS-Notes', 3772],
     	[24, 'project-chip', 'connectedhomeip', 3732],
     	[25, 'airbytehq', 'airbyte', 2218],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 bee', 1170],
     	['#2 faceswap', 1389],
     	['#3 autocomplete', 1250],
     	['#4 Binance-volatility-trading-bot', 94],
     	['#5 coding-interview-university', 1658],
     	['#6 pool-reference', 106],
     	['#7 livego', 153],
     	['#8 first-contributions', 25032],
     	['#9 leetcode', 2690],
     	['#10 Paper', 5746],
     	['#11 folly', 9704],
     	['#12 TDengine', 15710],
     	['#13 educative.io_courses', 118],
     	['#14 react-complete-guide-code', 3],
     	['#15 winget-cli', 381],
     	['#16 serenity', 22219],
     	['#17 Java', 1354],
     	['#18 NvChad', 340],
     	['#19 winget-pkgs', 14867],
     	['#20 lx-music-desktop', 1008],
     	['#21 rustdesk', 78],
     	['#22 Iris', 641],
     	['#23 CS-Notes', 3772],
     	['#24 connectedhomeip', 3732],
     	['#25 airbyte', 2218],
     	
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