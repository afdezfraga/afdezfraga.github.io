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
     	[3, 'academind', 'react-complete-guide-code', 3],
     	[4, 'youngyangyang04', 'leetcode-master', 1814],
     	[5, 'audacity', 'audacity', 13237],
     	[6, 'withfig', 'autocomplete', 1163],
     	[7, 'alacritty', 'alacritty', 1837],
     	[8, 'gwuhaolin', 'livego', 153],
     	[9, 'Chia-Network', 'chiapos', 425],
     	[10, 'gto76', 'python-cheatsheet', 2101],
     	[11, 'dromara', 'shenyu', 1269],
     	[12, 'DIGITALCRIMINAL', 'OnlyFans', 710],
     	[13, 'jklepatch', 'eattheblocks', 457],
     	[14, 'iluwatar', 'java-design-patterns', 3103],
     	[15, 'syncthing', 'syncthing', 6553],
     	[16, 'project-chip', 'connectedhomeip', 3556],
     	[17, 'rustdesk', 'rustdesk', 53],
     	[18, 'trustwallet', 'assets', 8447],
     	[19, 'Chia-Network', 'chia-docker', 111],
     	[20, 'microsoft', 'winget-pkgs', 13213],
     	[21, 'Uniswap', 'uniswap-v3-periphery', 306],
     	[22, 'apache', 'pulsar', 6749],
     	[23, 'PaddlePaddle', 'PaddleDetection', 973],
     	[24, 'rome', 'tools', 2346],
     	[25, 'solana-labs', 'solana', 14434],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 dogecoin', 13537],
     	['#2 plotman', 535],
     	['#3 react-complete-guide-code', 3],
     	['#4 leetcode-master', 1814],
     	['#5 audacity', 13237],
     	['#6 autocomplete', 1163],
     	['#7 alacritty', 1837],
     	['#8 livego', 153],
     	['#9 chiapos', 425],
     	['#10 python-cheatsheet', 2101],
     	['#11 shenyu', 1269],
     	['#12 OnlyFans', 710],
     	['#13 eattheblocks', 457],
     	['#14 java-design-patterns', 3103],
     	['#15 syncthing', 6553],
     	['#16 connectedhomeip', 3556],
     	['#17 rustdesk', 53],
     	['#18 assets', 8447],
     	['#19 chia-docker', 111],
     	['#20 winget-pkgs', 13213],
     	['#21 uniswap-v3-periphery', 306],
     	['#22 pulsar', 6749],
     	['#23 PaddleDetection', 973],
     	['#24 tools', 2346],
     	['#25 solana', 14434],
     	
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