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
     	[3, 'Chia-Network', 'chia-blockchain', 4679],
     	[4, 'DIGITALCRIMINAL', 'OnlyFans', 691],
     	[5, 'youngyangyang04', 'leetcode-master', 1603],
     	[6, 'audacity', 'audacity', 13157],
     	[7, 'trustwallet', 'assets', 7975],
     	[8, 'TheAlgorithms', 'Python', 2107],
     	[9, 'covid19india', 'covid19india-react', 968],
     	[10, 'alacritty', 'alacritty', 1836],
     	[11, 'Uniswap', 'uniswap-v3-periphery', 304],
     	[12, 'thedevdojo', 'wave', 98],
     	[13, 'solana-labs', 'solana', 14256],
     	[14, 'jklepatch', 'eattheblocks', 446],
     	[15, '30-seconds', '30-seconds-of-code', 5352],
     	[16, 'apache', 'pulsar', 6686],
     	[17, 'supabase', 'supabase', 2527],
     	[18, 'EbookFoundation', 'free-programming-books', 6165],
     	[19, 'kelseyhightower', 'kubernetes-the-hard-way', 285],
     	[20, 'photoprism', 'photoprism', 3809],
     	[21, 'rust-embedded', 'rust-raspberrypi-OS-tutorials', 617],
     	[22, 'dromara', 'shenyu', 1244],
     	[23, 'commaai', 'openpilot', 3652],
     	[24, 'whittlem', 'pycryptobot', 511],
     	[25, 'goldbergyoni', 'nodebestpractices', 3299],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 binance-trading-bot', 122],
     	['#2 dogecoin', 13537],
     	['#3 chia-blockchain', 4679],
     	['#4 OnlyFans', 691],
     	['#5 leetcode-master', 1603],
     	['#6 audacity', 13157],
     	['#7 assets', 7975],
     	['#8 Python', 2107],
     	['#9 covid19india-react', 968],
     	['#10 alacritty', 1836],
     	['#11 uniswap-v3-periphery', 304],
     	['#12 wave', 98],
     	['#13 solana', 14256],
     	['#14 eattheblocks', 446],
     	['#15 30-seconds-of-code', 5352],
     	['#16 pulsar', 6686],
     	['#17 supabase', 2527],
     	['#18 free-programming-books', 6165],
     	['#19 kubernetes-the-hard-way', 285],
     	['#20 photoprism', 3809],
     	['#21 rust-raspberrypi-OS-tutorials', 617],
     	['#22 shenyu', 1244],
     	['#23 openpilot', 3652],
     	['#24 pycryptobot', 511],
     	['#25 nodebestpractices', 3299],
     	
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