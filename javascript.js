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
	[1, 'ethersphere', 'bee', 1165],
     	[2, 'Chia-Network', 'pool-reference', 103],
     	[3, 'CyberPunkMetalHead', 'Binance-volatility-trading-bot', 94],
     	[4, 'deepfakes', 'faceswap', 1389],
     	[5, 'withfig', 'autocomplete', 1250],
     	[6, 'jwasham', 'coding-interview-university', 1658],
     	[7, 'gwuhaolin', 'livego', 153],
     	[8, 'microsoft', 'winget-pkgs', 14677],
     	[9, 'microsoft', 'winget-cli', 378],
     	[10, 'doocs', 'leetcode', 2684],
     	[11, 'merry75', 'educative.io_courses', 118],
     	[12, 'academind', 'react-complete-guide-code', 3],
     	[13, 'facebook', 'folly', 9704],
     	[14, 'taosdata', 'TDengine', 15682],
     	[15, 'SerenityOS', 'serenity', 22173],
     	[16, 'PaperMC', 'Paper', 5746],
     	[17, 'TheAlgorithms', 'Java', 1354],
     	[18, 'lyswhut', 'lx-music-desktop', 1008],
     	[19, 'rustdesk', 'rustdesk', 74],
     	[20, 'appwrite', 'appwrite', 5615],
     	[21, 'airbytehq', 'airbyte', 2204],
     	[22, 'project-chip', 'connectedhomeip', 3720],
     	[23, 'google', 'googletest', 3689],
     	[24, 'CyC2018', 'CS-Notes', 3772],
     	[25, 'twbs', 'bootstrap', 20971],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 bee', 1165],
     	['#2 pool-reference', 103],
     	['#3 Binance-volatility-trading-bot', 94],
     	['#4 faceswap', 1389],
     	['#5 autocomplete', 1250],
     	['#6 coding-interview-university', 1658],
     	['#7 livego', 153],
     	['#8 winget-pkgs', 14677],
     	['#9 winget-cli', 378],
     	['#10 leetcode', 2684],
     	['#11 educative.io_courses', 118],
     	['#12 react-complete-guide-code', 3],
     	['#13 folly', 9704],
     	['#14 TDengine', 15682],
     	['#15 serenity', 22173],
     	['#16 Paper', 5746],
     	['#17 Java', 1354],
     	['#18 lx-music-desktop', 1008],
     	['#19 rustdesk', 74],
     	['#20 appwrite', 5615],
     	['#21 airbyte', 2204],
     	['#22 connectedhomeip', 3720],
     	['#23 googletest', 3689],
     	['#24 CS-Notes', 3772],
     	['#25 bootstrap', 20971],
     	
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