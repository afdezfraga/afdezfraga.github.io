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
	[1, 'ethersphere', 'bee', 1180],
     	[2, 'deepfakes', 'faceswap', 1389],
     	[3, 'withfig', 'autocomplete', 1294],
     	[4, 'jwasham', 'coding-interview-university', 1658],
     	[5, 'CyberPunkMetalHead', 'Binance-volatility-trading-bot', 94],
     	[6, 'gwuhaolin', 'livego', 153],
     	[7, 'containers', 'youki', 263],
     	[8, 'firstcontributions', 'first-contributions', 25066],
     	[9, 'doocs', 'leetcode', 2692],
     	[10, 'PaperMC', 'Paper', 5746],
     	[11, 'Chia-Network', 'pool-reference', 106],
     	[12, 'facebook', 'folly', 9704],
     	[13, 'SerenityOS', 'serenity', 22284],
     	[14, 'merry75', 'educative.io_courses', 118],
     	[15, 'taosdata', 'TDengine', 15747],
     	[16, 'rustdesk', 'rustdesk', 78],
     	[17, 'microsoft', 'winget-cli', 382],
     	[18, 'academind', 'react-complete-guide-code', 3],
     	[19, 'siduck76', 'NvChad', 344],
     	[20, 'microsoft', 'winget-pkgs', 14990],
     	[21, 'CyC2018', 'CS-Notes', 3772],
     	[22, 'programthink', 'zhao', 480],
     	[23, 'TheAlgorithms', 'Java', 1354],
     	[24, 'IrisShaders', 'Iris', 641],
     	[25, 'project-chip', 'connectedhomeip', 3747],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 bee', 1180],
     	['#2 faceswap', 1389],
     	['#3 autocomplete', 1294],
     	['#4 coding-interview-university', 1658],
     	['#5 Binance-volatility-trading-bot', 94],
     	['#6 livego', 153],
     	['#7 youki', 263],
     	['#8 first-contributions', 25066],
     	['#9 leetcode', 2692],
     	['#10 Paper', 5746],
     	['#11 pool-reference', 106],
     	['#12 folly', 9704],
     	['#13 serenity', 22284],
     	['#14 educative.io_courses', 118],
     	['#15 TDengine', 15747],
     	['#16 rustdesk', 78],
     	['#17 winget-cli', 382],
     	['#18 react-complete-guide-code', 3],
     	['#19 NvChad', 344],
     	['#20 winget-pkgs', 14990],
     	['#21 CS-Notes', 3772],
     	['#22 zhao', 480],
     	['#23 Java', 1354],
     	['#24 Iris', 641],
     	['#25 connectedhomeip', 3747],
     	
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