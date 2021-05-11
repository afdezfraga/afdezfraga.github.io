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
	[1, 'Chia-Network', 'chia-blockchain', 4617],
     	[2, 'dogecoin', 'dogecoin', 13535],
     	[3, 'chrisleekr', 'binance-trading-bot', 111],
     	[4, 'taichi-dev', 'taichi', 6981],
     	[5, 'Kethku', 'neovide', 520],
     	[6, 'photoprism', 'photoprism', 3772],
     	[7, 'DIGITALCRIMINAL', 'OnlyFans', 667],
     	[8, 'wbkd', 'react-flow', 1964],
     	[9, 'openethereum', 'openethereum', 12162],
     	[10, 'public-apis', 'public-apis', 2791],
     	[11, 'jwasham', 'coding-interview-university', 1646],
     	[12, 'lettier', '3d-game-shaders-for-beginners', 1],
     	[13, '30-seconds', '30-seconds-of-code', 5348],
     	[14, 'bradtraversy', 'vanillawebprojects', 72],
     	[15, 'solana-labs', 'solana', 14119],
     	[16, 'ChristianChiarulli', 'LunarVim', 731],
     	[17, 'covid19india', 'covid19india-react', 967],
     	[18, 'google', 'leveldb', 358],
     	[19, 'supabase', 'supabase', 2426],
     	[20, 'DualCoder', 'vgpu_unlock', 23],
     	[21, 'TheAlgorithms', 'Python', 2096],
     	[22, 'trustwallet', 'assets', 7303],
     	[23, 'jklepatch', 'eattheblocks', 442],
     	[24, 'tailwindlabs', 'headlessui', 187],
     	[25, 'popcorn-official', 'popcorn-desktop', 7499],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 chia-blockchain', 4617],
     	['#2 dogecoin', 13535],
     	['#3 binance-trading-bot', 111],
     	['#4 taichi', 6981],
     	['#5 neovide', 520],
     	['#6 photoprism', 3772],
     	['#7 OnlyFans', 667],
     	['#8 react-flow', 1964],
     	['#9 openethereum', 12162],
     	['#10 public-apis', 2791],
     	['#11 coding-interview-university', 1646],
     	['#12 3d-game-shaders-for-beginners', 1],
     	['#13 30-seconds-of-code', 5348],
     	['#14 vanillawebprojects', 72],
     	['#15 solana', 14119],
     	['#16 LunarVim', 731],
     	['#17 covid19india-react', 967],
     	['#18 leveldb', 358],
     	['#19 supabase', 2426],
     	['#20 vgpu_unlock', 23],
     	['#21 Python', 2096],
     	['#22 assets', 7303],
     	['#23 eattheblocks', 442],
     	['#24 headlessui', 187],
     	['#25 popcorn-desktop', 7499],
     	
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