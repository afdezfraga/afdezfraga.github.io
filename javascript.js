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
     	[2, 'Chia-Network', 'chia-blockchain', 4660],
     	[3, 'dogecoin', 'dogecoin', 13537],
     	[4, 'taichi-dev', 'taichi', 6997],
     	[5, 'CyberPunkMetalHead', 'Binance-News-Sentiment-Bot', 16],
     	[6, 'DIGITALCRIMINAL', 'OnlyFans', 685],
     	[7, 'photoprism', 'photoprism', 3796],
     	[8, '30-seconds', '30-seconds-of-code', 5352],
     	[9, 'trustwallet', 'assets', 7754],
     	[10, 'youngyangyang04', 'leetcode-master', 1460],
     	[11, 'thedevdojo', 'wave', 89],
     	[12, 'jwasham', 'coding-interview-university', 1646],
     	[13, 'solana-labs', 'solana', 14204],
     	[14, 'public-apis', 'public-apis', 2833],
     	[15, 'wbkd', 'react-flow', 1964],
     	[16, 'supabase', 'supabase', 2484],
     	[17, 'TheAlgorithms', 'Python', 2102],
     	[18, 'EbookFoundation', 'free-programming-books', 6160],
     	[19, 'audacity', 'audacity', 13140],
     	[20, 'alacritty', 'alacritty', 1831],
     	[21, 'calendso', 'calendso', 186],
     	[22, 'jklepatch', 'eattheblocks', 446],
     	[23, 'apache', 'pulsar', 6641],
     	[24, 'kelseyhightower', 'kubernetes-the-hard-way', 285],
     	[25, 'covid19india', 'covid19india-react', 968],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 binance-trading-bot', 111],
     	['#2 chia-blockchain', 4660],
     	['#3 dogecoin', 13537],
     	['#4 taichi', 6997],
     	['#5 Binance-News-Sentiment-Bot', 16],
     	['#6 OnlyFans', 685],
     	['#7 photoprism', 3796],
     	['#8 30-seconds-of-code', 5352],
     	['#9 assets', 7754],
     	['#10 leetcode-master', 1460],
     	['#11 wave', 89],
     	['#12 coding-interview-university', 1646],
     	['#13 solana', 14204],
     	['#14 public-apis', 2833],
     	['#15 react-flow', 1964],
     	['#16 supabase', 2484],
     	['#17 Python', 2102],
     	['#18 free-programming-books', 6160],
     	['#19 audacity', 13140],
     	['#20 alacritty', 1831],
     	['#21 calendso', 186],
     	['#22 eattheblocks', 446],
     	['#23 pulsar', 6641],
     	['#24 kubernetes-the-hard-way', 285],
     	['#25 covid19india-react', 968],
     	
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