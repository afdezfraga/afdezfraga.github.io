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
	[1, 'Chia-Network', 'chia-blockchain', 4650],
     	[2, 'dogecoin', 'dogecoin', 13535],
     	[3, 'chrisleekr', 'binance-trading-bot', 111],
     	[4, 'calendso', 'calendso', 183],
     	[5, 'DIGITALCRIMINAL', 'OnlyFans', 681],
     	[6, '30-seconds', '30-seconds-of-code', 5348],
     	[7, 'photoprism', 'photoprism', 3787],
     	[8, 'wbkd', 'react-flow', 1964],
     	[9, 'thedevdojo', 'wave', 89],
     	[10, 'jwasham', 'coding-interview-university', 1646],
     	[11, 'trustwallet', 'assets', 7595],
     	[12, 'solana-labs', 'solana', 14180],
     	[13, 'youngyangyang04', 'leetcode-master', 701],
     	[14, 'public-apis', 'public-apis', 2808],
     	[15, 'covid19india', 'covid19india-react', 968],
     	[16, 'audacity', 'audacity', 13107],
     	[17, 'alacritty', 'alacritty', 1831],
     	[18, 'supabase', 'supabase', 2467],
     	[19, 'testerSunshine', '12306', 435],
     	[20, 'popcorn-official', 'popcorn-desktop', 7500],
     	[21, 'apache', 'pulsar', 6624],
     	[22, 'kelseyhightower', 'kubernetes-the-hard-way', 285],
     	[23, 'netdata', 'netdata', 12596],
     	[24, 'EbookFoundation', 'free-programming-books', 6160],
     	[25, 'OpenZeppelin', 'openzeppelin-contracts', 2438],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 chia-blockchain', 4650],
     	['#2 dogecoin', 13535],
     	['#3 binance-trading-bot', 111],
     	['#4 calendso', 183],
     	['#5 OnlyFans', 681],
     	['#6 30-seconds-of-code', 5348],
     	['#7 photoprism', 3787],
     	['#8 react-flow', 1964],
     	['#9 wave', 89],
     	['#10 coding-interview-university', 1646],
     	['#11 assets', 7595],
     	['#12 solana', 14180],
     	['#13 leetcode-master', 701],
     	['#14 public-apis', 2808],
     	['#15 covid19india-react', 968],
     	['#16 audacity', 13107],
     	['#17 alacritty', 1831],
     	['#18 supabase', 2467],
     	['#19 12306', 435],
     	['#20 popcorn-desktop', 7500],
     	['#21 pulsar', 6624],
     	['#22 kubernetes-the-hard-way', 285],
     	['#23 netdata', 12596],
     	['#24 free-programming-books', 6160],
     	['#25 openzeppelin-contracts', 2438],
     	
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