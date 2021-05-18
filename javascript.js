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
	[1, 'Chia-Network', 'chia-blockchain', 4652],
     	[2, 'chrisleekr', 'binance-trading-bot', 111],
     	[3, 'dogecoin', 'dogecoin', 13535],
     	[4, 'DIGITALCRIMINAL', 'OnlyFans', 682],
     	[5, 'wbkd', 'react-flow', 1964],
     	[6, '30-seconds', '30-seconds-of-code', 5352],
     	[7, 'photoprism', 'photoprism', 3796],
     	[8, 'calendso', 'calendso', 186],
     	[9, 'youngyangyang04', 'leetcode-master', 1408],
     	[10, 'thedevdojo', 'wave', 89],
     	[11, 'jwasham', 'coding-interview-university', 1646],
     	[12, 'trustwallet', 'assets', 7713],
     	[13, 'solana-labs', 'solana', 14194],
     	[14, 'public-apis', 'public-apis', 2815],
     	[15, 'supabase', 'supabase', 2475],
     	[16, 'alacritty', 'alacritty', 1831],
     	[17, 'audacity', 'audacity', 13134],
     	[18, 'popcorn-official', 'popcorn-desktop', 7501],
     	[19, 'covid19india', 'covid19india-react', 968],
     	[20, 'EbookFoundation', 'free-programming-books', 6160],
     	[21, 'TheAlgorithms', 'Python', 2101],
     	[22, 'jklepatch', 'eattheblocks', 446],
     	[23, 'kelseyhightower', 'kubernetes-the-hard-way', 285],
     	[24, 'apache', 'pulsar', 6634],
     	[25, 'testerSunshine', '12306', 435],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 chia-blockchain', 4652],
     	['#2 binance-trading-bot', 111],
     	['#3 dogecoin', 13535],
     	['#4 OnlyFans', 682],
     	['#5 react-flow', 1964],
     	['#6 30-seconds-of-code', 5352],
     	['#7 photoprism', 3796],
     	['#8 calendso', 186],
     	['#9 leetcode-master', 1408],
     	['#10 wave', 89],
     	['#11 coding-interview-university', 1646],
     	['#12 assets', 7713],
     	['#13 solana', 14194],
     	['#14 public-apis', 2815],
     	['#15 supabase', 2475],
     	['#16 alacritty', 1831],
     	['#17 audacity', 13134],
     	['#18 popcorn-desktop', 7501],
     	['#19 covid19india-react', 968],
     	['#20 free-programming-books', 6160],
     	['#21 Python', 2101],
     	['#22 eattheblocks', 446],
     	['#23 kubernetes-the-hard-way', 285],
     	['#24 pulsar', 6634],
     	['#25 12306', 435],
     	
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