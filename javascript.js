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
	[1, 'chrisleekr', 'binance-trading-bot', 111],
     	[2, 'dogecoin', 'dogecoin', 13537],
     	[3, 'Chia-Network', 'chia-blockchain', 4677],
     	[4, 'jdah', 'tetris-os', 47],
     	[5, 'DIGITALCRIMINAL', 'OnlyFans', 686],
     	[6, 'photoprism', 'photoprism', 3805],
     	[7, 'youngyangyang04', 'leetcode-master', 1515],
     	[8, 'TheAlgorithms', 'Python', 2104],
     	[9, 'openkraken', 'kraken', 4897],
     	[10, '30-seconds', '30-seconds-of-code', 5352],
     	[11, 'trustwallet', 'assets', 7858],
     	[12, 'audacity', 'audacity', 13149],
     	[13, 'solana-labs', 'solana', 14228],
     	[14, 'thedevdojo', 'wave', 98],
     	[15, 'EbookFoundation', 'free-programming-books', 6164],
     	[16, 'alacritty', 'alacritty', 1834],
     	[17, 'covid19india', 'covid19india-react', 968],
     	[18, 'lit', 'lit', 1199],
     	[19, 'Uniswap', 'uniswap-v3-periphery', 304],
     	[20, 'supabase', 'supabase', 2505],
     	[21, 'taichi-dev', 'taichi', 7001],
     	[22, 'Chia-Network', 'chia-blockchain-gui', 2088],
     	[23, 'jklepatch', 'eattheblocks', 446],
     	[24, 'apache', 'pulsar', 6658],
     	[25, 'jwasham', 'coding-interview-university', 1647],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 binance-trading-bot', 111],
     	['#2 dogecoin', 13537],
     	['#3 chia-blockchain', 4677],
     	['#4 tetris-os', 47],
     	['#5 OnlyFans', 686],
     	['#6 photoprism', 3805],
     	['#7 leetcode-master', 1515],
     	['#8 Python', 2104],
     	['#9 kraken', 4897],
     	['#10 30-seconds-of-code', 5352],
     	['#11 assets', 7858],
     	['#12 audacity', 13149],
     	['#13 solana', 14228],
     	['#14 wave', 98],
     	['#15 free-programming-books', 6164],
     	['#16 alacritty', 1834],
     	['#17 covid19india-react', 968],
     	['#18 lit', 1199],
     	['#19 uniswap-v3-periphery', 304],
     	['#20 supabase', 2505],
     	['#21 taichi', 7001],
     	['#22 chia-blockchain-gui', 2088],
     	['#23 eattheblocks', 446],
     	['#24 pulsar', 6658],
     	['#25 coding-interview-university', 1647],
     	
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