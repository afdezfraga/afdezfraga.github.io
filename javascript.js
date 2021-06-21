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
	[1, 'ethersphere', 'bee', 1194],
     	[2, 'programthink', 'zhao', 480],
     	[3, 'jwasham', 'coding-interview-university', 1658],
     	[4, 'deepfakes', 'faceswap', 1389],
     	[5, 'withfig', 'autocomplete', 1295],
     	[6, 'PaperMC', 'Paper', 5990],
     	[7, 'CyberPunkMetalHead', 'Binance-volatility-trading-bot', 94],
     	[8, 'rustdesk', 'rustdesk', 82],
     	[9, 'microsoft', 'winget-cli', 382],
     	[10, 'SerenityOS', 'serenity', 22367],
     	[11, 'siduck76', 'NvChad', 350],
     	[12, 'gwuhaolin', 'livego', 153],
     	[13, 'facebook', 'folly', 9704],
     	[14, 'merry75', 'educative.io_courses', 118],
     	[15, 'taosdata', 'TDengine', 15754],
     	[16, 'microsoft', 'winget-pkgs', 15198],
     	[17, 'CyC2018', 'CS-Notes', 3772],
     	[18, 'containers', 'youki', 278],
     	[19, 'doocs', 'leetcode', 2703],
     	[20, 'academind', 'react-complete-guide-code', 3],
     	[21, 'chubin', 'cheat.sh', 865],
     	[22, 'IrisShaders', 'Iris', 641],
     	[23, 'appwrite', 'appwrite', 5620],
     	[24, 'discordjs', 'discord.js', 5192],
     	[25, 'microsoft', 'playwright', 4959],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 bee', 1194],
     	['#2 zhao', 480],
     	['#3 coding-interview-university', 1658],
     	['#4 faceswap', 1389],
     	['#5 autocomplete', 1295],
     	['#6 Paper', 5990],
     	['#7 Binance-volatility-trading-bot', 94],
     	['#8 rustdesk', 82],
     	['#9 winget-cli', 382],
     	['#10 serenity', 22367],
     	['#11 NvChad', 350],
     	['#12 livego', 153],
     	['#13 folly', 9704],
     	['#14 educative.io_courses', 118],
     	['#15 TDengine', 15754],
     	['#16 winget-pkgs', 15198],
     	['#17 CS-Notes', 3772],
     	['#18 youki', 278],
     	['#19 leetcode', 2703],
     	['#20 react-complete-guide-code', 3],
     	['#21 cheat.sh', 865],
     	['#22 Iris', 641],
     	['#23 appwrite', 5620],
     	['#24 discord.js', 5192],
     	['#25 playwright', 4959],
     	
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