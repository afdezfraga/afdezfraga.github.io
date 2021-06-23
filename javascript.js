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
     	[3, 'deepfakes', 'faceswap', 1389],
     	[4, 'ethersphere', 'bee', 1212],
     	[5, 'PaperMC', 'Paper', 6012],
     	[6, 'withfig', 'autocomplete', 1311],
     	[7, 'SerenityOS', 'serenity', 22442],
     	[8, 'facebook', 'folly', 9704],
     	[9, 'merry75', 'educative.io_courses', 118],
     	[10, 'siduck76', 'NvChad', 350],
     	[11, 'taosdata', 'TDengine', 15814],
     	[12, 'microsoft', 'winget-cli', 382],
     	[13, 'CyC2018', 'CS-Notes', 3772],
     	[14, 'doocs', 'leetcode', 2717],
     	[15, 'microsoft', 'winget-pkgs', 15392],
     	[16, 'alpinejs', 'alpine', 1404],
     	[17, 'rustdesk', 'rustdesk', 104],
     	[18, 'CyberPunkMetalHead', 'Binance-volatility-trading-bot', 94],
     	[19, 'microsoft', 'playwright', 4972],
     	[20, 'IrisShaders', 'Iris', 644],
     	[21, 'discordjs', 'discord.js', 5195],
     	[22, 'academind', 'react-complete-guide-code', 3],
     	[23, 'TheAlgorithms', 'Java', 1354],
     	[24, 'airbytehq', 'airbyte', 2252],
     	[25, 'appwrite', 'appwrite', 5623],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 zhao', 480],
     	['#2 coding-interview-university', 1658],
     	['#3 faceswap', 1389],
     	['#4 bee', 1212],
     	['#5 Paper', 6012],
     	['#6 autocomplete', 1311],
     	['#7 serenity', 22442],
     	['#8 folly', 9704],
     	['#9 educative.io_courses', 118],
     	['#10 NvChad', 350],
     	['#11 TDengine', 15814],
     	['#12 winget-cli', 382],
     	['#13 CS-Notes', 3772],
     	['#14 leetcode', 2717],
     	['#15 winget-pkgs', 15392],
     	['#16 alpine', 1404],
     	['#17 rustdesk', 104],
     	['#18 Binance-volatility-trading-bot', 94],
     	['#19 playwright', 4972],
     	['#20 Iris', 644],
     	['#21 discord.js', 5195],
     	['#22 react-complete-guide-code', 3],
     	['#23 Java', 1354],
     	['#24 airbyte', 2252],
     	['#25 appwrite', 5623],
     	
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