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
     	[2, 'ericaltendorf', 'plotman', 535],
     	[3, 'DIGITALCRIMINAL', 'OnlyFans', 710],
     	[4, 'audacity', 'audacity', 13231],
     	[5, 'academind', 'react-complete-guide-code', 3],
     	[6, 'youngyangyang04', 'leetcode-master', 1785],
     	[7, 'gwuhaolin', 'livego', 153],
     	[8, 'alacritty', 'alacritty', 1837],
     	[9, 'facebookresearch', 'dino', 23],
     	[10, 'jklepatch', 'eattheblocks', 455],
     	[11, 'Chia-Network', 'chia-blockchain', 4703],
     	[12, 'trustwallet', 'assets', 8396],
     	[13, 'rome', 'tools', 2346],
     	[14, 'project-chip', 'connectedhomeip', 3533],
     	[15, 'withfig', 'autocomplete', 1160],
     	[16, 'dromara', 'shenyu', 1266],
     	[17, 'rustdesk', 'rustdesk', 53],
     	[18, 'syncthing', 'syncthing', 6552],
     	[19, 'microsoft', 'winget-pkgs', 13055],
     	[20, 'iluwatar', 'java-design-patterns', 3103],
     	[21, 'solana-labs', 'solana', 14409],
     	[22, 'apache', 'pulsar', 6736],
     	[23, 'Uniswap', 'uniswap-v3-periphery', 306],
     	[24, 'PaddlePaddle', 'PaddleDetection', 972],
     	[25, 'gto76', 'python-cheatsheet', 2101],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 dogecoin', 13537],
     	['#2 plotman', 535],
     	['#3 OnlyFans', 710],
     	['#4 audacity', 13231],
     	['#5 react-complete-guide-code', 3],
     	['#6 leetcode-master', 1785],
     	['#7 livego', 153],
     	['#8 alacritty', 1837],
     	['#9 dino', 23],
     	['#10 eattheblocks', 455],
     	['#11 chia-blockchain', 4703],
     	['#12 assets', 8396],
     	['#13 tools', 2346],
     	['#14 connectedhomeip', 3533],
     	['#15 autocomplete', 1160],
     	['#16 shenyu', 1266],
     	['#17 rustdesk', 53],
     	['#18 syncthing', 6552],
     	['#19 winget-pkgs', 13055],
     	['#20 java-design-patterns', 3103],
     	['#21 solana', 14409],
     	['#22 pulsar', 6736],
     	['#23 uniswap-v3-periphery', 306],
     	['#24 PaddleDetection', 972],
     	['#25 python-cheatsheet', 2101],
     	
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