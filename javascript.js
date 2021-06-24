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
     	[4, 'PaperMC', 'Paper', 6017],
     	[5, 'ethersphere', 'bee', 1212],
     	[6, 'withfig', 'autocomplete', 1312],
     	[7, 'SerenityOS', 'serenity', 22473],
     	[8, 'facebook', 'folly', 9704],
     	[9, 'siduck76', 'NvChad', 350],
     	[10, 'merry75', 'educative.io_courses', 118],
     	[11, 'taosdata', 'TDengine', 15843],
     	[12, 'CyC2018', 'CS-Notes', 3772],
     	[13, 'microsoft', 'winget-pkgs', 15510],
     	[14, 'rustdesk', 'rustdesk', 104],
     	[15, 'microsoft', 'winget-cli', 382],
     	[16, 'doocs', 'leetcode', 2725],
     	[17, 'alpinejs', 'alpine', 1404],
     	[18, 'microsoft', 'playwright', 4979],
     	[19, 'TheAlgorithms', 'Java', 1354],
     	[20, 'IrisShaders', 'Iris', 647],
     	[21, 'academind', 'react-complete-guide-code', 3],
     	[22, 'jhu-ep-coursera', 'fullstack-course4', 162],
     	[23, 'airbytehq', 'airbyte', 2262],
     	[24, 'neovim', 'neovim', 18296],
     	[25, 'CyberPunkMetalHead', 'Binance-volatility-trading-bot', 94],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 zhao', 480],
     	['#2 coding-interview-university', 1658],
     	['#3 faceswap', 1389],
     	['#4 Paper', 6017],
     	['#5 bee', 1212],
     	['#6 autocomplete', 1312],
     	['#7 serenity', 22473],
     	['#8 folly', 9704],
     	['#9 NvChad', 350],
     	['#10 educative.io_courses', 118],
     	['#11 TDengine', 15843],
     	['#12 CS-Notes', 3772],
     	['#13 winget-pkgs', 15510],
     	['#14 rustdesk', 104],
     	['#15 winget-cli', 382],
     	['#16 leetcode', 2725],
     	['#17 alpine', 1404],
     	['#18 playwright', 4979],
     	['#19 Java', 1354],
     	['#20 Iris', 647],
     	['#21 react-complete-guide-code', 3],
     	['#22 fullstack-course4', 162],
     	['#23 airbyte', 2262],
     	['#24 neovim', 18296],
     	['#25 Binance-volatility-trading-bot', 94],
     	
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