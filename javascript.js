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
	[1, 'ethersphere', 'bee', 1154],
     	[2, 'CyberPunkMetalHead', 'Binance-volatility-trading-bot', 94],
     	[3, 'microsoft', 'winget-pkgs', 14555],
     	[4, 'deepfakes', 'faceswap', 1389],
     	[5, 'withfig', 'autocomplete', 1249],
     	[6, 'gwuhaolin', 'livego', 153],
     	[7, 'microsoft', 'winget-cli', 377],
     	[8, 'iluwatar', 'java-design-patterns', 3111],
     	[9, 'firstcontributions', 'first-contributions', 24939],
     	[10, 'jwasham', 'coding-interview-university', 1654],
     	[11, 'academind', 'react-complete-guide-code', 3],
     	[12, 'doocs', 'leetcode', 2673],
     	[13, 'merry75', 'educative.io_courses', 118],
     	[14, 'SerenityOS', 'serenity', 22112],
     	[15, 'taosdata', 'TDengine', 15641],
     	[16, 'TheAlgorithms', 'Java', 1354],
     	[17, 'PaperMC', 'Paper', 5746],
     	[18, 'facebook', 'folly', 9704],
     	[19, 'lyswhut', 'lx-music-desktop', 1008],
     	[20, 'project-chip', 'connectedhomeip', 3699],
     	[21, 'google', 'googletest', 3689],
     	[22, 'rustdesk', 'rustdesk', 74],
     	[23, 'appwrite', 'appwrite', 5615],
     	[24, 'twbs', 'bootstrap', 20970],
     	[25, 'iptv-org', 'iptv', 10386],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 bee', 1154],
     	['#2 Binance-volatility-trading-bot', 94],
     	['#3 winget-pkgs', 14555],
     	['#4 faceswap', 1389],
     	['#5 autocomplete', 1249],
     	['#6 livego', 153],
     	['#7 winget-cli', 377],
     	['#8 java-design-patterns', 3111],
     	['#9 first-contributions', 24939],
     	['#10 coding-interview-university', 1654],
     	['#11 react-complete-guide-code', 3],
     	['#12 leetcode', 2673],
     	['#13 educative.io_courses', 118],
     	['#14 serenity', 22112],
     	['#15 TDengine', 15641],
     	['#16 Java', 1354],
     	['#17 Paper', 5746],
     	['#18 folly', 9704],
     	['#19 lx-music-desktop', 1008],
     	['#20 connectedhomeip', 3699],
     	['#21 googletest', 3689],
     	['#22 rustdesk', 74],
     	['#23 appwrite', 5615],
     	['#24 bootstrap', 20970],
     	['#25 iptv', 10386],
     	
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