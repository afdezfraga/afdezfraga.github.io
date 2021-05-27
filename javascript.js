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
     	[2, 'chrisleekr', 'binance-trading-bot', 122],
     	[3, 'ericaltendorf', 'plotman', 535],
     	[4, 'Chia-Network', 'chia-blockchain', 4698],
     	[5, 'DIGITALCRIMINAL', 'OnlyFans', 697],
     	[6, 'audacity', 'audacity', 13190],
     	[7, 'academind', 'react-complete-guide-code', 3],
     	[8, 'youngyangyang04', 'leetcode-master', 1669],
     	[9, 'alacritty', 'alacritty', 1836],
     	[10, 'thedevdojo', 'wave', 98],
     	[11, 'supabase', 'supabase', 2539],
     	[12, 'jklepatch', 'eattheblocks', 451],
     	[13, 'rustdesk', 'rustdesk', 46],
     	[14, 'covid19india', 'covid19india-react', 970],
     	[15, 'project-chip', 'connectedhomeip', 3491],
     	[16, 'gwuhaolin', 'livego', 153],
     	[17, 'commaai', 'openpilot', 3684],
     	[18, 'trustwallet', 'assets', 8090],
     	[19, 'solana-labs', 'solana', 14340],
     	[20, 'dromara', 'shenyu', 1255],
     	[21, 'Uniswap', 'uniswap-v3-periphery', 305],
     	[22, 'whittlem', 'pycryptobot', 562],
     	[23, 'Uniswap', 'uniswap-interface', 1315],
     	[24, 'kelseyhightower', 'kubernetes-the-hard-way', 285],
     	[25, 'iluwatar', 'java-design-patterns', 3102],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 dogecoin', 13537],
     	['#2 binance-trading-bot', 122],
     	['#3 plotman', 535],
     	['#4 chia-blockchain', 4698],
     	['#5 OnlyFans', 697],
     	['#6 audacity', 13190],
     	['#7 react-complete-guide-code', 3],
     	['#8 leetcode-master', 1669],
     	['#9 alacritty', 1836],
     	['#10 wave', 98],
     	['#11 supabase', 2539],
     	['#12 eattheblocks', 451],
     	['#13 rustdesk', 46],
     	['#14 covid19india-react', 970],
     	['#15 connectedhomeip', 3491],
     	['#16 livego', 153],
     	['#17 openpilot', 3684],
     	['#18 assets', 8090],
     	['#19 solana', 14340],
     	['#20 shenyu', 1255],
     	['#21 uniswap-v3-periphery', 305],
     	['#22 pycryptobot', 562],
     	['#23 uniswap-interface', 1315],
     	['#24 kubernetes-the-hard-way', 285],
     	['#25 java-design-patterns', 3102],
     	
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