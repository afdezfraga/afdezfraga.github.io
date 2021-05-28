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
     	[3, 'DIGITALCRIMINAL', 'OnlyFans', 697],
     	[4, 'Chia-Network', 'chia-blockchain', 4698],
     	[5, 'chrisleekr', 'binance-trading-bot', 122],
     	[6, 'audacity', 'audacity', 13223],
     	[7, 'academind', 'react-complete-guide-code', 3],
     	[8, 'youngyangyang04', 'leetcode-master', 1704],
     	[9, 'trustwallet', 'assets', 8140],
     	[10, 'alacritty', 'alacritty', 1836],
     	[11, 'thedevdojo', 'wave', 98],
     	[12, 'gwuhaolin', 'livego', 153],
     	[13, 'supabase', 'supabase', 2567],
     	[14, 'commaai', 'openpilot', 3693],
     	[15, 'covid19india', 'covid19india-react', 970],
     	[16, 'jklepatch', 'eattheblocks', 452],
     	[17, 'project-chip', 'connectedhomeip', 3502],
     	[18, 'rustdesk', 'rustdesk', 49],
     	[19, 'solana-labs', 'solana', 14360],
     	[20, 'iluwatar', 'java-design-patterns', 3102],
     	[21, 'whittlem', 'pycryptobot', 572],
     	[22, 'kelseyhightower', 'kubernetes-the-hard-way', 285],
     	[23, 'Uniswap', 'uniswap-interface', 1322],
     	[24, 'Uniswap', 'uniswap-v3-periphery', 305],
     	[25, 'apache', 'pulsar', 6712],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 dogecoin', 13537],
     	['#2 plotman', 535],
     	['#3 OnlyFans', 697],
     	['#4 chia-blockchain', 4698],
     	['#5 binance-trading-bot', 122],
     	['#6 audacity', 13223],
     	['#7 react-complete-guide-code', 3],
     	['#8 leetcode-master', 1704],
     	['#9 assets', 8140],
     	['#10 alacritty', 1836],
     	['#11 wave', 98],
     	['#12 livego', 153],
     	['#13 supabase', 2567],
     	['#14 openpilot', 3693],
     	['#15 covid19india-react', 970],
     	['#16 eattheblocks', 452],
     	['#17 connectedhomeip', 3502],
     	['#18 rustdesk', 49],
     	['#19 solana', 14360],
     	['#20 java-design-patterns', 3102],
     	['#21 pycryptobot', 572],
     	['#22 kubernetes-the-hard-way', 285],
     	['#23 uniswap-interface', 1322],
     	['#24 uniswap-v3-periphery', 305],
     	['#25 pulsar', 6712],
     	
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