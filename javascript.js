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
	[1, 'chrisleekr', 'binance-trading-bot', 122],
     	[2, 'dogecoin', 'dogecoin', 13537],
     	[3, 'ericaltendorf', 'plotman', 535],
     	[4, 'Chia-Network', 'chia-blockchain', 4686],
     	[5, 'DIGITALCRIMINAL', 'OnlyFans', 691],
     	[6, 'trustwallet', 'assets', 8012],
     	[7, 'academind', 'react-complete-guide-code', 3],
     	[8, 'youngyangyang04', 'leetcode-master', 1629],
     	[9, 'audacity', 'audacity', 13177],
     	[10, 'TheAlgorithms', 'Python', 2108],
     	[11, 'covid19india', 'covid19india-react', 970],
     	[12, 'alacritty', 'alacritty', 1836],
     	[13, 'Uniswap', 'uniswap-v3-periphery', 304],
     	[14, 'thedevdojo', 'wave', 98],
     	[15, 'jklepatch', 'eattheblocks', 446],
     	[16, 'solana-labs', 'solana', 14285],
     	[17, 'rustdesk', 'rustdesk', 44],
     	[18, '30-seconds', '30-seconds-of-code', 5352],
     	[19, 'supabase', 'supabase', 2529],
     	[20, 'kelseyhightower', 'kubernetes-the-hard-way', 285],
     	[21, 'commaai', 'openpilot', 3659],
     	[22, 'dromara', 'shenyu', 1246],
     	[23, 'goldbergyoni', 'nodebestpractices', 3299],
     	[24, 'Uniswap', 'uniswap-interface', 1310],
     	[25, 'apache', 'pulsar', 6690],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 binance-trading-bot', 122],
     	['#2 dogecoin', 13537],
     	['#3 plotman', 535],
     	['#4 chia-blockchain', 4686],
     	['#5 OnlyFans', 691],
     	['#6 assets', 8012],
     	['#7 react-complete-guide-code', 3],
     	['#8 leetcode-master', 1629],
     	['#9 audacity', 13177],
     	['#10 Python', 2108],
     	['#11 covid19india-react', 970],
     	['#12 alacritty', 1836],
     	['#13 uniswap-v3-periphery', 304],
     	['#14 wave', 98],
     	['#15 eattheblocks', 446],
     	['#16 solana', 14285],
     	['#17 rustdesk', 44],
     	['#18 30-seconds-of-code', 5352],
     	['#19 supabase', 2529],
     	['#20 kubernetes-the-hard-way', 285],
     	['#21 openpilot', 3659],
     	['#22 shenyu', 1246],
     	['#23 nodebestpractices', 3299],
     	['#24 uniswap-interface', 1310],
     	['#25 pulsar', 6690],
     	
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