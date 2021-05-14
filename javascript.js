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
	[1, 'Chia-Network', 'chia-blockchain', 4640],
     	[2, 'dogecoin', 'dogecoin', 13535],
     	[3, 'chrisleekr', 'binance-trading-bot', 111],
     	[4, 'DIGITALCRIMINAL', 'OnlyFans', 676],
     	[5, 'photoprism', 'photoprism', 3776],
     	[6, 'testerSunshine', '12306', 435],
     	[7, '30-seconds', '30-seconds-of-code', 5348],
     	[8, 'wbkd', 'react-flow', 1964],
     	[9, 'jwasham', 'coding-interview-university', 1646],
     	[10, 'public-apis', 'public-apis', 2797],
     	[11, 'covid19india', 'covid19india-react', 967],
     	[12, 'solana-labs', 'solana', 14160],
     	[13, 'openethereum', 'openethereum', 12162],
     	[14, 'trustwallet', 'assets', 7459],
     	[15, 'youngyangyang04', 'leetcode-master', 526],
     	[16, 'supabase', 'supabase', 2467],
     	[17, 'alacritty', 'alacritty', 1831],
     	[18, 'ChristianChiarulli', 'LunarVim', 733],
     	[19, 'apache', 'pulsar', 6609],
     	[20, 'milvus-io', 'milvus', 6835],
     	[21, 'TheAlgorithms', 'Python', 2098],
     	[22, 'opensearch-project', 'OpenSearch', 54907],
     	[23, 'kelseyhightower', 'kubernetes-the-hard-way', 285],
     	[24, 'Kethku', 'neovide', 520],
     	[25, 'rust-lang', 'rustlings', 889],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 chia-blockchain', 4640],
     	['#2 dogecoin', 13535],
     	['#3 binance-trading-bot', 111],
     	['#4 OnlyFans', 676],
     	['#5 photoprism', 3776],
     	['#6 12306', 435],
     	['#7 30-seconds-of-code', 5348],
     	['#8 react-flow', 1964],
     	['#9 coding-interview-university', 1646],
     	['#10 public-apis', 2797],
     	['#11 covid19india-react', 967],
     	['#12 solana', 14160],
     	['#13 openethereum', 12162],
     	['#14 assets', 7459],
     	['#15 leetcode-master', 526],
     	['#16 supabase', 2467],
     	['#17 alacritty', 1831],
     	['#18 LunarVim', 733],
     	['#19 pulsar', 6609],
     	['#20 milvus', 6835],
     	['#21 Python', 2098],
     	['#22 OpenSearch', 54907],
     	['#23 kubernetes-the-hard-way', 285],
     	['#24 neovide', 520],
     	['#25 rustlings', 889],
     	
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