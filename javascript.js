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
     	[2, 'DIGITALCRIMINAL', 'OnlyFans', 702],
     	[3, 'ericaltendorf', 'plotman', 535],
     	[4, 'Chia-Network', 'chia-blockchain', 4700],
     	[5, 'chrisleekr', 'binance-trading-bot', 122],
     	[6, 'audacity', 'audacity', 13224],
     	[7, 'academind', 'react-complete-guide-code', 3],
     	[8, 'gwuhaolin', 'livego', 153],
     	[9, 'youngyangyang04', 'leetcode-master', 1732],
     	[10, 'alacritty', 'alacritty', 1837],
     	[11, 'trustwallet', 'assets', 8191],
     	[12, 'rustdesk', 'rustdesk', 50],
     	[13, 'thedevdojo', 'wave', 102],
     	[14, 'covid19india', 'covid19india-react', 970],
     	[15, 'commaai', 'openpilot', 3699],
     	[16, 'jklepatch', 'eattheblocks', 452],
     	[17, 'project-chip', 'connectedhomeip', 3508],
     	[18, 'solana-labs', 'solana', 14381],
     	[19, 'supabase', 'supabase', 2569],
     	[20, 'Uniswap', 'uniswap-interface', 1336],
     	[21, 'iluwatar', 'java-design-patterns', 3102],
     	[22, 'Uniswap', 'uniswap-v3-periphery', 306],
     	[23, 'dromara', 'shenyu', 1258],
     	[24, 'rome', 'tools', 2346],
     	[25, 'kelseyhightower', 'kubernetes-the-hard-way', 285],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 dogecoin', 13537],
     	['#2 OnlyFans', 702],
     	['#3 plotman', 535],
     	['#4 chia-blockchain', 4700],
     	['#5 binance-trading-bot', 122],
     	['#6 audacity', 13224],
     	['#7 react-complete-guide-code', 3],
     	['#8 livego', 153],
     	['#9 leetcode-master', 1732],
     	['#10 alacritty', 1837],
     	['#11 assets', 8191],
     	['#12 rustdesk', 50],
     	['#13 wave', 102],
     	['#14 covid19india-react', 970],
     	['#15 openpilot', 3699],
     	['#16 eattheblocks', 452],
     	['#17 connectedhomeip', 3508],
     	['#18 solana', 14381],
     	['#19 supabase', 2569],
     	['#20 uniswap-interface', 1336],
     	['#21 java-design-patterns', 3102],
     	['#22 uniswap-v3-periphery', 306],
     	['#23 shenyu', 1258],
     	['#24 tools', 2346],
     	['#25 kubernetes-the-hard-way', 285],
     	
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