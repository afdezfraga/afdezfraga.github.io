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
     	[5, 'withfig', 'autocomplete', 1232],
     	[6, 'microsoft', 'winget-cli', 375],
     	[7, 'microsoft', 'winget-pkgs', 14324],
     	[8, 'deepfakes', 'faceswap', 1388],
     	[9, 'academind', 'react-complete-guide-code', 3],
     	[10, 'firstcontributions', 'first-contributions', 24810],
     	[11, 'merry75', 'educative.io_courses', 118],
     	[12, 'SerenityOS', 'serenity', 21991],
     	[13, 'doocs', 'leetcode', 2659],
     	[14, 'project-chip', 'connectedhomeip', 3655],
     	[15, 'facebook', 'folly', 9704],
     	[16, 'TheAlgorithms', 'Java', 1354],
     	[17, 'jwasham', 'coding-interview-university', 1652],
     	[18, 'taosdata', 'TDengine', 15615],
     	[19, 'atlas-engineer', 'nyxt', 6922],
     	[20, 'slidevjs', 'slidev', 815],
     	[21, 'rustdesk', 'rustdesk', 68],
     	[22, 'google', 'googletest', 3689],
     	[23, 'EbookFoundation', 'free-programming-books', 6169],
     	[24, 'ant-design', 'ant-design', 20812],
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
     	['#5 autocomplete', 1232],
     	['#6 winget-cli', 375],
     	['#7 winget-pkgs', 14324],
     	['#8 faceswap', 1388],
     	['#9 react-complete-guide-code', 3],
     	['#10 first-contributions', 24810],
     	['#11 educative.io_courses', 118],
     	['#12 serenity', 21991],
     	['#13 leetcode', 2659],
     	['#14 connectedhomeip', 3655],
     	['#15 folly', 9704],
     	['#16 Java', 1354],
     	['#17 coding-interview-university', 1652],
     	['#18 TDengine', 15615],
     	['#19 nyxt', 6922],
     	['#20 slidev', 815],
     	['#21 rustdesk', 68],
     	['#22 googletest', 3689],
     	['#23 free-programming-books', 6169],
     	['#24 ant-design', 20812],
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