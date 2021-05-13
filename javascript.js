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
	[1, 'Chia-Network', 'chia-blockchain', 4638],
     	[2, 'dogecoin', 'dogecoin', 13535],
     	[3, 'chrisleekr', 'binance-trading-bot', 111],
     	[4, 'taichi-dev', 'taichi', 6984],
     	[5, 'photoprism', 'photoprism', 3772],
     	[6, 'DIGITALCRIMINAL', 'OnlyFans', 670],
     	[7, 'wbkd', 'react-flow', 1964],
     	[8, 'openethereum', 'openethereum', 12162],
     	[9, 'jwasham', 'coding-interview-university', 1646],
     	[10, '30-seconds', '30-seconds-of-code', 5348],
     	[11, 'lettier', '3d-game-shaders-for-beginners', 1],
     	[12, 'testerSunshine', '12306', 435],
     	[13, 'public-apis', 'public-apis', 2796],
     	[14, 'Kethku', 'neovide', 520],
     	[15, 'covid19india', 'covid19india-react', 967],
     	[16, 'solana-labs', 'solana', 14139],
     	[17, 'opensearch-project', 'OpenSearch', 54903],
     	[18, 'supabase', 'supabase', 2467],
     	[19, 'trustwallet', 'assets', 7408],
     	[20, 'youngyangyang04', 'leetcode-master', 455],
     	[21, 'ChristianChiarulli', 'LunarVim', 733],
     	[22, 'alacritty', 'alacritty', 1831],
     	[23, 'popcorn-official', 'popcorn-desktop', 7499],
     	[24, 'apache', 'pulsar', 6597],
     	[25, 'milvus-io', 'milvus', 6833],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 chia-blockchain', 4638],
     	['#2 dogecoin', 13535],
     	['#3 binance-trading-bot', 111],
     	['#4 taichi', 6984],
     	['#5 photoprism', 3772],
     	['#6 OnlyFans', 670],
     	['#7 react-flow', 1964],
     	['#8 openethereum', 12162],
     	['#9 coding-interview-university', 1646],
     	['#10 30-seconds-of-code', 5348],
     	['#11 3d-game-shaders-for-beginners', 1],
     	['#12 12306', 435],
     	['#13 public-apis', 2796],
     	['#14 neovide', 520],
     	['#15 covid19india-react', 967],
     	['#16 solana', 14139],
     	['#17 OpenSearch', 54903],
     	['#18 supabase', 2467],
     	['#19 assets', 7408],
     	['#20 leetcode-master', 455],
     	['#21 LunarVim', 733],
     	['#22 alacritty', 1831],
     	['#23 popcorn-desktop', 7499],
     	['#24 pulsar', 6597],
     	['#25 milvus', 6833],
     	
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