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
	[1, 'programthink', 'zhao', 480],
     	[2, 'jwasham', 'coding-interview-university', 1658],
     	[3, 'ethersphere', 'bee', 1210],
     	[4, 'deepfakes', 'faceswap', 1389],
     	[5, 'PaperMC', 'Paper', 6003],
     	[6, 'withfig', 'autocomplete', 1311],
     	[7, 'SerenityOS', 'serenity', 22399],
     	[8, 'facebook', 'folly', 9704],
     	[9, 'siduck76', 'NvChad', 350],
     	[10, 'merry75', 'educative.io_courses', 118],
     	[11, 'taosdata', 'TDengine', 15791],
     	[12, 'microsoft', 'winget-cli', 382],
     	[13, 'CyberPunkMetalHead', 'Binance-volatility-trading-bot', 94],
     	[14, 'CyC2018', 'CS-Notes', 3772],
     	[15, 'doocs', 'leetcode', 2709],
     	[16, 'microsoft', 'winget-pkgs', 15314],
     	[17, 'rustdesk', 'rustdesk', 101],
     	[18, 'appwrite', 'appwrite', 5623],
     	[19, 'academind', 'react-complete-guide-code', 3],
     	[20, 'microsoft', 'playwright', 4970],
     	[21, 'alpinejs', 'alpine', 1404],
     	[22, 'IrisShaders', 'Iris', 644],
     	[23, 'discordjs', 'discord.js', 5192],
     	[24, 'project-chip', 'connectedhomeip', 3764],
     	[25, 'TheAlgorithms', 'Java', 1354],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 zhao', 480],
     	['#2 coding-interview-university', 1658],
     	['#3 bee', 1210],
     	['#4 faceswap', 1389],
     	['#5 Paper', 6003],
     	['#6 autocomplete', 1311],
     	['#7 serenity', 22399],
     	['#8 folly', 9704],
     	['#9 NvChad', 350],
     	['#10 educative.io_courses', 118],
     	['#11 TDengine', 15791],
     	['#12 winget-cli', 382],
     	['#13 Binance-volatility-trading-bot', 94],
     	['#14 CS-Notes', 3772],
     	['#15 leetcode', 2709],
     	['#16 winget-pkgs', 15314],
     	['#17 rustdesk', 101],
     	['#18 appwrite', 5623],
     	['#19 react-complete-guide-code', 3],
     	['#20 playwright', 4970],
     	['#21 alpine', 1404],
     	['#22 Iris', 644],
     	['#23 discord.js', 5192],
     	['#24 connectedhomeip', 3764],
     	['#25 Java', 1354],
     	
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