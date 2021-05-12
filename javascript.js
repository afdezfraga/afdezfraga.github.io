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
	[1, 'Chia-Network', 'chia-blockchain', 4619],
     	[2, 'dogecoin', 'dogecoin', 13535],
     	[3, 'chrisleekr', 'binance-trading-bot', 111],
     	[4, 'taichi-dev', 'taichi', 6982],
     	[5, 'photoprism', 'photoprism', 3772],
     	[6, 'DIGITALCRIMINAL', 'OnlyFans', 667],
     	[7, 'Kethku', 'neovide', 520],
     	[8, 'wbkd', 'react-flow', 1964],
     	[9, 'openethereum', 'openethereum', 12162],
     	[10, 'public-apis', 'public-apis', 2791],
     	[11, 'jwasham', 'coding-interview-university', 1646],
     	[12, '30-seconds', '30-seconds-of-code', 5348],
     	[13, 'lettier', '3d-game-shaders-for-beginners', 1],
     	[14, 'covid19india', 'covid19india-react', 967],
     	[15, 'solana-labs', 'solana', 14133],
     	[16, 'supabase', 'supabase', 2444],
     	[17, 'alacritty', 'alacritty', 1831],
     	[18, 'ChristianChiarulli', 'LunarVim', 732],
     	[19, 'youngyangyang04', 'leetcode-master', 384],
     	[20, 'trustwallet', 'assets', 7365],
     	[21, 'bradtraversy', 'vanillawebprojects', 72],
     	[22, 'popcorn-official', 'popcorn-desktop', 7499],
     	[23, 'milvus-io', 'milvus', 6830],
     	[24, 'apache', 'pulsar', 6582],
     	[25, 'donnemartin', 'system-design-primer', 321],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 chia-blockchain', 4619],
     	['#2 dogecoin', 13535],
     	['#3 binance-trading-bot', 111],
     	['#4 taichi', 6982],
     	['#5 photoprism', 3772],
     	['#6 OnlyFans', 667],
     	['#7 neovide', 520],
     	['#8 react-flow', 1964],
     	['#9 openethereum', 12162],
     	['#10 public-apis', 2791],
     	['#11 coding-interview-university', 1646],
     	['#12 30-seconds-of-code', 5348],
     	['#13 3d-game-shaders-for-beginners', 1],
     	['#14 covid19india-react', 967],
     	['#15 solana', 14133],
     	['#16 supabase', 2444],
     	['#17 alacritty', 1831],
     	['#18 LunarVim', 732],
     	['#19 leetcode-master', 384],
     	['#20 assets', 7365],
     	['#21 vanillawebprojects', 72],
     	['#22 popcorn-desktop', 7499],
     	['#23 milvus', 6830],
     	['#24 pulsar', 6582],
     	['#25 system-design-primer', 321],
     	
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