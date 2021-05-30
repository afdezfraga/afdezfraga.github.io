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
	[1, 'dogecoin', 'dogecoin', 13537],
     	[2, 'DIGITALCRIMINAL', 'OnlyFans', 709],
     	[3, 'ericaltendorf', 'plotman', 535],
     	[4, 'Chia-Network', 'chia-blockchain', 4703],
     	[5, 'audacity', 'audacity', 13224],
     	[6, 'academind', 'react-complete-guide-code', 3],
     	[7, 'gwuhaolin', 'livego', 153],
     	[8, 'youngyangyang04', 'leetcode-master', 1739],
     	[9, 'trustwallet', 'assets', 8216],
     	[10, 'alacritty', 'alacritty', 1837],
     	[11, 'chrisleekr', 'binance-trading-bot', 128],
     	[12, 'rustdesk', 'rustdesk', 50],
     	[13, 'jklepatch', 'eattheblocks', 452],
     	[14, 'commaai', 'openpilot', 3703],
     	[15, 'project-chip', 'connectedhomeip', 3508],
     	[16, 'withfig', 'autocomplete', 1150],
     	[17, 'covid19india', 'covid19india-react', 970],
     	[18, 'dromara', 'shenyu', 1260],
     	[19, 'solana-labs', 'solana', 14384],
     	[20, 'thedevdojo', 'wave', 102],
     	[21, 'rome', 'tools', 2346],
     	[22, 'Uniswap', 'uniswap-interface', 1376],
     	[23, 'iluwatar', 'java-design-patterns', 3102],
     	[24, 'syncthing', 'syncthing', 6549],
     	[25, 'PaddlePaddle', 'PaddleDetection', 967],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 dogecoin', 13537],
     	['#2 OnlyFans', 709],
     	['#3 plotman', 535],
     	['#4 chia-blockchain', 4703],
     	['#5 audacity', 13224],
     	['#6 react-complete-guide-code', 3],
     	['#7 livego', 153],
     	['#8 leetcode-master', 1739],
     	['#9 assets', 8216],
     	['#10 alacritty', 1837],
     	['#11 binance-trading-bot', 128],
     	['#12 rustdesk', 50],
     	['#13 eattheblocks', 452],
     	['#14 openpilot', 3703],
     	['#15 connectedhomeip', 3508],
     	['#16 autocomplete', 1150],
     	['#17 covid19india-react', 970],
     	['#18 shenyu', 1260],
     	['#19 solana', 14384],
     	['#20 wave', 102],
     	['#21 tools', 2346],
     	['#22 uniswap-interface', 1376],
     	['#23 java-design-patterns', 3102],
     	['#24 syncthing', 6549],
     	['#25 PaddleDetection', 967],
     	
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