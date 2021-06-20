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
	[1, 'ethersphere', 'bee', 1185],
     	[2, 'deepfakes', 'faceswap', 1389],
     	[3, 'withfig', 'autocomplete', 1295],
     	[4, 'jwasham', 'coding-interview-university', 1658],
     	[5, 'programthink', 'zhao', 480],
     	[6, 'CyberPunkMetalHead', 'Binance-volatility-trading-bot', 94],
     	[7, 'gwuhaolin', 'livego', 153],
     	[8, 'PaperMC', 'Paper', 5977],
     	[9, 'SerenityOS', 'serenity', 22326],
     	[10, 'microsoft', 'winget-cli', 382],
     	[11, 'doocs', 'leetcode', 2697],
     	[12, 'facebook', 'folly', 9704],
     	[13, 'siduck76', 'NvChad', 350],
     	[14, 'merry75', 'educative.io_courses', 118],
     	[15, 'rustdesk', 'rustdesk', 78],
     	[16, 'taosdata', 'TDengine', 15750],
     	[17, 'microsoft', 'winget-pkgs', 15052],
     	[18, 'rbignon', 'doctoshotgun', 85],
     	[19, 'containers', 'youki', 274],
     	[20, 'CyC2018', 'CS-Notes', 3772],
     	[21, 'academind', 'react-complete-guide-code', 3],
     	[22, 'Chia-Network', 'pool-reference', 106],
     	[23, 'IrisShaders', 'Iris', 641],
     	[24, 'alpinejs', 'alpine', 1388],
     	[25, 'appwrite', 'appwrite', 5615],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 bee', 1185],
     	['#2 faceswap', 1389],
     	['#3 autocomplete', 1295],
     	['#4 coding-interview-university', 1658],
     	['#5 zhao', 480],
     	['#6 Binance-volatility-trading-bot', 94],
     	['#7 livego', 153],
     	['#8 Paper', 5977],
     	['#9 serenity', 22326],
     	['#10 winget-cli', 382],
     	['#11 leetcode', 2697],
     	['#12 folly', 9704],
     	['#13 NvChad', 350],
     	['#14 educative.io_courses', 118],
     	['#15 rustdesk', 78],
     	['#16 TDengine', 15750],
     	['#17 winget-pkgs', 15052],
     	['#18 doctoshotgun', 85],
     	['#19 youki', 274],
     	['#20 CS-Notes', 3772],
     	['#21 react-complete-guide-code', 3],
     	['#22 pool-reference', 106],
     	['#23 Iris', 641],
     	['#24 alpine', 1388],
     	['#25 appwrite', 5615],
     	
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