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
     	[2, 'dogecoin', 'dogecoin', 13535],
     	[3, 'chrisleekr', 'binance-trading-bot', 111],
     	[4, 'calendso', 'calendso', 183],
     	[5, 'DIGITALCRIMINAL', 'OnlyFans', 682],
     	[6, '30-seconds', '30-seconds-of-code', 5348],
     	[7, 'wbkd', 'react-flow', 1964],
     	[8, 'photoprism', 'photoprism', 3792],
     	[9, 'jwasham', 'coding-interview-university', 1646],
     	[10, 'thedevdojo', 'wave', 89],
     	[11, 'youngyangyang04', 'leetcode-master', 1379],
     	[12, 'trustwallet', 'assets', 7635],
     	[13, 'solana-labs', 'solana', 14181],
     	[14, 'public-apis', 'public-apis', 2815],
     	[15, 'supabase', 'supabase', 2467],
     	[16, 'covid19india', 'covid19india-react', 968],
     	[17, 'audacity', 'audacity', 13128],
     	[18, 'alacritty', 'alacritty', 1831],
     	[19, 'flashlight', 'flashlight', 1082],
     	[20, 'apache', 'pulsar', 6625],
     	[21, 'EbookFoundation', 'free-programming-books', 6160],
     	[22, 'TheAlgorithms', 'Python', 2098],
     	[23, 'kelseyhightower', 'kubernetes-the-hard-way', 285],
     	[24, 'testerSunshine', '12306', 435],
     	[25, 'netdata', 'netdata', 12596],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 chia-blockchain', 4652],
     	['#2 dogecoin', 13535],
     	['#3 binance-trading-bot', 111],
     	['#4 calendso', 183],
     	['#5 OnlyFans', 682],
     	['#6 30-seconds-of-code', 5348],
     	['#7 react-flow', 1964],
     	['#8 photoprism', 3792],
     	['#9 coding-interview-university', 1646],
     	['#10 wave', 89],
     	['#11 leetcode-master', 1379],
     	['#12 assets', 7635],
     	['#13 solana', 14181],
     	['#14 public-apis', 2815],
     	['#15 supabase', 2467],
     	['#16 covid19india-react', 968],
     	['#17 audacity', 13128],
     	['#18 alacritty', 1831],
     	['#19 flashlight', 1082],
     	['#20 pulsar', 6625],
     	['#21 free-programming-books', 6160],
     	['#22 Python', 2098],
     	['#23 kubernetes-the-hard-way', 285],
     	['#24 12306', 435],
     	['#25 netdata', 12596],
     	
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