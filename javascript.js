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
     	[2, 'Chia-Network', 'chia-blockchain', 4669],
     	[3, 'dogecoin', 'dogecoin', 13537],
     	[4, 'DIGITALCRIMINAL', 'OnlyFans', 686],
     	[5, 'photoprism', 'photoprism', 3799],
     	[6, 'trustwallet', 'assets', 7800],
     	[7, 'taichi-dev', 'taichi', 7000],
     	[8, 'youngyangyang04', 'leetcode-master', 1513],
     	[9, '30-seconds', '30-seconds-of-code', 5352],
     	[10, 'CyberPunkMetalHead', 'Binance-News-Sentiment-Bot', 16],
     	[11, 'Chia-Network', 'chia-blockchain-gui', 2085],
     	[12, 'chefyuan', 'algorithm-base', 257],
     	[13, 'solana-labs', 'solana', 14218],
     	[14, 'TheAlgorithms', 'Python', 2102],
     	[15, 'Uniswap', 'uniswap-v3-periphery', 302],
     	[16, 'thedevdojo', 'wave', 89],
     	[17, 'covid19india', 'covid19india-react', 968],
     	[18, 'jwasham', 'coding-interview-university', 1646],
     	[19, 'audacity', 'audacity', 13146],
     	[20, 'alacritty', 'alacritty', 1832],
     	[21, 'EbookFoundation', 'free-programming-books', 6164],
     	[22, 'supabase', 'supabase', 2496],
     	[23, 'apache', 'pulsar', 6648],
     	[24, 'jklepatch', 'eattheblocks', 446],
     	[25, 'kelseyhightower', 'kubernetes-the-hard-way', 285],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 binance-trading-bot', 111],
     	['#2 chia-blockchain', 4669],
     	['#3 dogecoin', 13537],
     	['#4 OnlyFans', 686],
     	['#5 photoprism', 3799],
     	['#6 assets', 7800],
     	['#7 taichi', 7000],
     	['#8 leetcode-master', 1513],
     	['#9 30-seconds-of-code', 5352],
     	['#10 Binance-News-Sentiment-Bot', 16],
     	['#11 chia-blockchain-gui', 2085],
     	['#12 algorithm-base', 257],
     	['#13 solana', 14218],
     	['#14 Python', 2102],
     	['#15 uniswap-v3-periphery', 302],
     	['#16 wave', 89],
     	['#17 covid19india-react', 968],
     	['#18 coding-interview-university', 1646],
     	['#19 audacity', 13146],
     	['#20 alacritty', 1832],
     	['#21 free-programming-books', 6164],
     	['#22 supabase', 2496],
     	['#23 pulsar', 6648],
     	['#24 eattheblocks', 446],
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