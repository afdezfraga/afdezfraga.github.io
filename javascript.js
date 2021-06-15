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
     	[2, 'iluwatar', 'java-design-patterns', 3111],
     	[3, 'deepfakes', 'faceswap', 1388],
     	[4, 'withfig', 'autocomplete', 1249],
     	[5, 'microsoft', 'winget-pkgs', 14540],
     	[6, 'gwuhaolin', 'livego', 153],
     	[7, 'microsoft', 'winget-cli', 376],
     	[8, 'swar', 'Swar-Chia-Plot-Manager', 335],
     	[9, 'jwasham', 'coding-interview-university', 1654],
     	[10, 'merry75', 'educative.io_courses', 118],
     	[11, 'academind', 'react-complete-guide-code', 3],
     	[12, 'doocs', 'leetcode', 2669],
     	[13, 'TheAlgorithms', 'Java', 1354],
     	[14, 'SerenityOS', 'serenity', 22080],
     	[15, 'project-chip', 'connectedhomeip', 3678],
     	[16, 'facebook', 'folly', 9704],
     	[17, 'taosdata', 'TDengine', 15618],
     	[18, 'PaperMC', 'Paper', 5746],
     	[19, 'google', 'googletest', 3689],
     	[20, 'rustdesk', 'rustdesk', 73],
     	[21, 'lyswhut', 'lx-music-desktop', 1008],
     	[22, 'slidevjs', 'slidev', 815],
     	[23, 'chubin', 'cheat.sh', 865],
     	[24, 'twbs', 'bootstrap', 20964],
     	[25, 'appwrite', 'appwrite', 5613],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 Binance-volatility-trading-bot', 94],
     	['#2 java-design-patterns', 3111],
     	['#3 faceswap', 1388],
     	['#4 autocomplete', 1249],
     	['#5 winget-pkgs', 14540],
     	['#6 livego', 153],
     	['#7 winget-cli', 376],
     	['#8 Swar-Chia-Plot-Manager', 335],
     	['#9 coding-interview-university', 1654],
     	['#10 educative.io_courses', 118],
     	['#11 react-complete-guide-code', 3],
     	['#12 leetcode', 2669],
     	['#13 Java', 1354],
     	['#14 serenity', 22080],
     	['#15 connectedhomeip', 3678],
     	['#16 folly', 9704],
     	['#17 TDengine', 15618],
     	['#18 Paper', 5746],
     	['#19 googletest', 3689],
     	['#20 rustdesk', 73],
     	['#21 lx-music-desktop', 1008],
     	['#22 slidev', 815],
     	['#23 cheat.sh', 865],
     	['#24 bootstrap', 20964],
     	['#25 appwrite', 5613],
     	
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