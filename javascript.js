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
     	[2, 'facebookresearch', 'dino', 23],
     	[3, 'DIGITALCRIMINAL', 'OnlyFans', 710],
     	[4, 'ericaltendorf', 'plotman', 535],
     	[5, 'kartikey54', 'VaccineAvailabilityNotifier', 4],
     	[6, 'audacity', 'audacity', 13228],
     	[7, 'Chia-Network', 'chia-blockchain', 4703],
     	[8, 'academind', 'react-complete-guide-code', 3],
     	[9, 'youngyangyang04', 'leetcode-master', 1785],
     	[10, 'gwuhaolin', 'livego', 153],
     	[11, 'alacritty', 'alacritty', 1837],
     	[12, 'trustwallet', 'assets', 8352],
     	[13, 'withfig', 'autocomplete', 1150],
     	[14, 'jklepatch', 'eattheblocks', 454],
     	[15, 'rome', 'tools', 2346],
     	[16, 'rustdesk', 'rustdesk', 51],
     	[17, 'project-chip', 'connectedhomeip', 3520],
     	[18, 'microsoft', 'winget-pkgs', 12851],
     	[19, 'dromara', 'shenyu', 1263],
     	[20, 'solana-labs', 'solana', 14394],
     	[21, 'syncthing', 'syncthing', 6551],
     	[22, 'commaai', 'openpilot', 3713],
     	[23, 'iluwatar', 'java-design-patterns', 3103],
     	[24, 'Uniswap', 'uniswap-interface', 1395],
     	[25, 'Uniswap', 'uniswap-v3-periphery', 306],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 dogecoin', 13537],
     	['#2 dino', 23],
     	['#3 OnlyFans', 710],
     	['#4 plotman', 535],
     	['#5 VaccineAvailabilityNotifier', 4],
     	['#6 audacity', 13228],
     	['#7 chia-blockchain', 4703],
     	['#8 react-complete-guide-code', 3],
     	['#9 leetcode-master', 1785],
     	['#10 livego', 153],
     	['#11 alacritty', 1837],
     	['#12 assets', 8352],
     	['#13 autocomplete', 1150],
     	['#14 eattheblocks', 454],
     	['#15 tools', 2346],
     	['#16 rustdesk', 51],
     	['#17 connectedhomeip', 3520],
     	['#18 winget-pkgs', 12851],
     	['#19 shenyu', 1263],
     	['#20 solana', 14394],
     	['#21 syncthing', 6551],
     	['#22 openpilot', 3713],
     	['#23 java-design-patterns', 3103],
     	['#24 uniswap-interface', 1395],
     	['#25 uniswap-v3-periphery', 306],
     	
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