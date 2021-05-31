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
     	[2, 'DIGITALCRIMINAL', 'OnlyFans', 710],
     	[3, 'ericaltendorf', 'plotman', 535],
     	[4, 'Chia-Network', 'chia-blockchain', 4703],
     	[5, 'audacity', 'audacity', 13224],
     	[6, 'academind', 'react-complete-guide-code', 3],
     	[7, 'gwuhaolin', 'livego', 153],
     	[8, 'youngyangyang04', 'leetcode-master', 1757],
     	[9, 'alacritty', 'alacritty', 1837],
     	[10, 'trustwallet', 'assets', 8275],
     	[11, 'withfig', 'autocomplete', 1150],
     	[12, 'rustdesk', 'rustdesk', 51],
     	[13, 'jklepatch', 'eattheblocks', 453],
     	[14, 'commaai', 'openpilot', 3707],
     	[15, 'project-chip', 'connectedhomeip', 3508],
     	[16, 'dromara', 'shenyu', 1260],
     	[17, 'syncthing', 'syncthing', 6549],
     	[18, 'rome', 'tools', 2346],
     	[19, 'iluwatar', 'java-design-patterns', 3102],
     	[20, 'solana-labs', 'solana', 14384],
     	[21, 'kelseyhightower', 'kubernetes-the-hard-way', 285],
     	[22, 'Uniswap', 'uniswap-interface', 1386],
     	[23, 'Uniswap', 'uniswap-v3-periphery', 306],
     	[24, 'chrisleekr', 'binance-trading-bot', 128],
     	[25, 'apache', 'pulsar', 6722],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 dogecoin', 13537],
     	['#2 OnlyFans', 710],
     	['#3 plotman', 535],
     	['#4 chia-blockchain', 4703],
     	['#5 audacity', 13224],
     	['#6 react-complete-guide-code', 3],
     	['#7 livego', 153],
     	['#8 leetcode-master', 1757],
     	['#9 alacritty', 1837],
     	['#10 assets', 8275],
     	['#11 autocomplete', 1150],
     	['#12 rustdesk', 51],
     	['#13 eattheblocks', 453],
     	['#14 openpilot', 3707],
     	['#15 connectedhomeip', 3508],
     	['#16 shenyu', 1260],
     	['#17 syncthing', 6549],
     	['#18 tools', 2346],
     	['#19 java-design-patterns', 3102],
     	['#20 solana', 14384],
     	['#21 kubernetes-the-hard-way', 285],
     	['#22 uniswap-interface', 1386],
     	['#23 uniswap-v3-periphery', 306],
     	['#24 binance-trading-bot', 128],
     	['#25 pulsar', 6722],
     	
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