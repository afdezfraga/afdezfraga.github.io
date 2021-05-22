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
	[1, 'chrisleekr', 'binance-trading-bot', 118],
     	[2, 'dogecoin', 'dogecoin', 13537],
     	[3, 'Chia-Network', 'chia-blockchain', 4678],
     	[4, 'DIGITALCRIMINAL', 'OnlyFans', 691],
     	[5, 'photoprism', 'photoprism', 3805],
     	[6, 'youngyangyang04', 'leetcode-master', 1576],
     	[7, 'jdah', 'tetris-os', 47],
     	[8, 'trustwallet', 'assets', 7904],
     	[9, 'TheAlgorithms', 'Python', 2107],
     	[10, 'audacity', 'audacity', 13149],
     	[11, 'covid19india', 'covid19india-react', 968],
     	[12, '30-seconds', '30-seconds-of-code', 5352],
     	[13, 'alacritty', 'alacritty', 1835],
     	[14, 'thedevdojo', 'wave', 98],
     	[15, 'Uniswap', 'uniswap-v3-periphery', 304],
     	[16, 'solana-labs', 'solana', 14250],
     	[17, 'EbookFoundation', 'free-programming-books', 6165],
     	[18, 'jklepatch', 'eattheblocks', 446],
     	[19, 'zellij-org', 'zellij', 877],
     	[20, 'apache', 'pulsar', 6673],
     	[21, 'kelseyhightower', 'kubernetes-the-hard-way', 285],
     	[22, 'Chia-Network', 'chia-blockchain-gui', 2088],
     	[23, 'kamranahmedse', 'developer-roadmap', 330],
     	[24, 'supabase', 'supabase', 2519],
     	[25, 'dromara', 'shenyu', 1239],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 binance-trading-bot', 118],
     	['#2 dogecoin', 13537],
     	['#3 chia-blockchain', 4678],
     	['#4 OnlyFans', 691],
     	['#5 photoprism', 3805],
     	['#6 leetcode-master', 1576],
     	['#7 tetris-os', 47],
     	['#8 assets', 7904],
     	['#9 Python', 2107],
     	['#10 audacity', 13149],
     	['#11 covid19india-react', 968],
     	['#12 30-seconds-of-code', 5352],
     	['#13 alacritty', 1835],
     	['#14 wave', 98],
     	['#15 uniswap-v3-periphery', 304],
     	['#16 solana', 14250],
     	['#17 free-programming-books', 6165],
     	['#18 eattheblocks', 446],
     	['#19 zellij', 877],
     	['#20 pulsar', 6673],
     	['#21 kubernetes-the-hard-way', 285],
     	['#22 chia-blockchain-gui', 2088],
     	['#23 developer-roadmap', 330],
     	['#24 supabase', 2519],
     	['#25 shenyu', 1239],
     	
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