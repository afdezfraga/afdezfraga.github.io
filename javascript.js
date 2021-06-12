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
     	[4, 'iluwatar', 'java-design-patterns', 3111],
     	[5, 'microsoft', 'winget-cli', 375],
     	[6, 'withfig', 'autocomplete', 1232],
     	[7, 'deepfakes', 'faceswap', 1387],
     	[8, 'microsoft', 'winget-pkgs', 14273],
     	[9, 'academind', 'react-complete-guide-code', 3],
     	[10, 'project-chip', 'connectedhomeip', 3655],
     	[11, 'merry75', 'educative.io_courses', 118],
     	[12, 'slidevjs', 'slidev', 815],
     	[13, 'facebook', 'folly', 9704],
     	[14, 'SerenityOS', 'serenity', 21930],
     	[15, 'firstcontributions', 'first-contributions', 24766],
     	[16, 'doocs', 'leetcode', 2653],
     	[17, 'rustdesk', 'rustdesk', 68],
     	[18, 'taosdata', 'TDengine', 15602],
     	[19, 'atlas-engineer', 'nyxt', 6922],
     	[20, 'TheAlgorithms', 'Java', 1354],
     	[21, 'jwasham', 'coding-interview-university', 1652],
     	[22, 'ant-design', 'ant-design', 20812],
     	[23, 'syncthing', 'syncthing', 6571],
     	[24, 'google', 'googletest', 3689],
     	[25, 'twbs', 'bootstrap', 20955],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 Binance-volatility-trading-bot', 94],
     	['#2 Swar-Chia-Plot-Manager', 335],
     	['#3 livego', 153],
     	['#4 java-design-patterns', 3111],
     	['#5 winget-cli', 375],
     	['#6 autocomplete', 1232],
     	['#7 faceswap', 1387],
     	['#8 winget-pkgs', 14273],
     	['#9 react-complete-guide-code', 3],
     	['#10 connectedhomeip', 3655],
     	['#11 educative.io_courses', 118],
     	['#12 slidev', 815],
     	['#13 folly', 9704],
     	['#14 serenity', 21930],
     	['#15 first-contributions', 24766],
     	['#16 leetcode', 2653],
     	['#17 rustdesk', 68],
     	['#18 TDengine', 15602],
     	['#19 nyxt', 6922],
     	['#20 Java', 1354],
     	['#21 coding-interview-university', 1652],
     	['#22 ant-design', 20812],
     	['#23 syncthing', 6571],
     	['#24 googletest', 3689],
     	['#25 bootstrap', 20955],
     	
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