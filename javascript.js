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
     	[3, 'swar', 'Swar-Chia-Plot-Manager', 335],
     	[4, 'withfig', 'autocomplete', 1244],
     	[5, 'microsoft', 'winget-cli', 375],
     	[6, 'gwuhaolin', 'livego', 153],
     	[7, 'microsoft', 'winget-pkgs', 14460],
     	[8, 'deepfakes', 'faceswap', 1388],
     	[9, 'academind', 'react-complete-guide-code', 3],
     	[10, 'firstcontributions', 'first-contributions', 24858],
     	[11, 'merry75', 'educative.io_courses', 118],
     	[12, 'SerenityOS', 'serenity', 22037],
     	[13, 'doocs', 'leetcode', 2666],
     	[14, 'jwasham', 'coding-interview-university', 1652],
     	[15, 'project-chip', 'connectedhomeip', 3657],
     	[16, 'facebook', 'folly', 9704],
     	[17, 'TheAlgorithms', 'Java', 1354],
     	[18, 'atlas-engineer', 'nyxt', 6922],
     	[19, 'taosdata', 'TDengine', 15618],
     	[20, 'rustdesk', 'rustdesk', 68],
     	[21, 'google', 'googletest', 3689],
     	[22, 'slidevjs', 'slidev', 815],
     	[23, 'lyswhut', 'lx-music-desktop', 1008],
     	[24, 'airbytehq', 'airbyte', 2163],
     	[25, 'PaperMC', 'Paper', 5746],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 Binance-volatility-trading-bot', 94],
     	['#2 java-design-patterns', 3111],
     	['#3 Swar-Chia-Plot-Manager', 335],
     	['#4 autocomplete', 1244],
     	['#5 winget-cli', 375],
     	['#6 livego', 153],
     	['#7 winget-pkgs', 14460],
     	['#8 faceswap', 1388],
     	['#9 react-complete-guide-code', 3],
     	['#10 first-contributions', 24858],
     	['#11 educative.io_courses', 118],
     	['#12 serenity', 22037],
     	['#13 leetcode', 2666],
     	['#14 coding-interview-university', 1652],
     	['#15 connectedhomeip', 3657],
     	['#16 folly', 9704],
     	['#17 Java', 1354],
     	['#18 nyxt', 6922],
     	['#19 TDengine', 15618],
     	['#20 rustdesk', 68],
     	['#21 googletest', 3689],
     	['#22 slidev', 815],
     	['#23 lx-music-desktop', 1008],
     	['#24 airbyte', 2163],
     	['#25 Paper', 5746],
     	
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