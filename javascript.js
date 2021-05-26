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
     	[4, 'Chia-Network', 'chia-blockchain', 4690],
     	[5, 'DIGITALCRIMINAL', 'OnlyFans', 695],
     	[6, 'academind', 'react-complete-guide-code', 3],
     	[7, 'audacity', 'audacity', 13178],
     	[8, 'youngyangyang04', 'leetcode-master', 1657],
     	[9, 'thedevdojo', 'wave', 98],
     	[10, 'trustwallet', 'assets', 8043],
     	[11, 'alacritty', 'alacritty', 1836],
     	[12, 'covid19india', 'covid19india-react', 970],
     	[13, 'jklepatch', 'eattheblocks', 451],
     	[14, 'solana-labs', 'solana', 14320],
     	[15, 'TheAlgorithms', 'Python', 2108],
     	[16, 'supabase', 'supabase', 2538],
     	[17, 'rustdesk', 'rustdesk', 45],
     	[18, 'commaai', 'openpilot', 3672],
     	[19, 'Uniswap', 'uniswap-v3-periphery', 305],
     	[20, 'kelseyhightower', 'kubernetes-the-hard-way', 285],
     	[21, 'gwuhaolin', 'livego', 153],
     	[22, 'dromara', 'shenyu', 1253],
     	[23, 'Uniswap', 'uniswap-interface', 1311],
     	[24, 'whittlem', 'pycryptobot', 549],
     	[25, 'rust-embedded', 'rust-raspberrypi-OS-tutorials', 617],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 dogecoin', 13537],
     	['#2 binance-trading-bot', 122],
     	['#3 plotman', 535],
     	['#4 chia-blockchain', 4690],
     	['#5 OnlyFans', 695],
     	['#6 react-complete-guide-code', 3],
     	['#7 audacity', 13178],
     	['#8 leetcode-master', 1657],
     	['#9 wave', 98],
     	['#10 assets', 8043],
     	['#11 alacritty', 1836],
     	['#12 covid19india-react', 970],
     	['#13 eattheblocks', 451],
     	['#14 solana', 14320],
     	['#15 Python', 2108],
     	['#16 supabase', 2538],
     	['#17 rustdesk', 45],
     	['#18 openpilot', 3672],
     	['#19 uniswap-v3-periphery', 305],
     	['#20 kubernetes-the-hard-way', 285],
     	['#21 livego', 153],
     	['#22 shenyu', 1253],
     	['#23 uniswap-interface', 1311],
     	['#24 pycryptobot', 549],
     	['#25 rust-raspberrypi-OS-tutorials', 617],
     	
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