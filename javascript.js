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
	[1, 'Chia-Network', 'chia-blockchain', 4609],
     	[2, 'chrisleekr', 'binance-trading-bot', 108],
     	[3, 'dogecoin', 'dogecoin', 13532],
     	[4, 'taichi-dev', 'taichi', 6978],
     	[5, 'bradtraversy', 'vanillawebprojects', 72],
     	[6, 'photoprism', 'photoprism', 3772],
     	[7, 'tailwindlabs', 'headlessui', 180],
     	[8, 'public-apis', 'public-apis', 2787],
     	[9, 'openethereum', 'openethereum', 12162],
     	[10, 'DIGITALCRIMINAL', 'OnlyFans', 666],
     	[11, 'jwasham', 'coding-interview-university', 1646],
     	[12, 'covid19india', 'covid19india-react', 967],
     	[13, 'google', 'leveldb', 358],
     	[14, 'google', 'lyra', 42],
     	[15, 'solana-labs', 'solana', 14097],
     	[16, 'wbkd', 'react-flow', 1964],
     	[17, 'ChristianChiarulli', 'LunarVim', 729],
     	[18, 'trustwallet', 'assets', 7145],
     	[19, '30-seconds', '30-seconds-of-code', 5347],
     	[20, 'bevyengine', 'bevy', 1763],
     	[21, 'getify', 'You-Dont-Know-JS', 1762],
     	[22, 'FirebaseExtended', 'flutterfire', 1796],
     	[23, 'supabase', 'supabase', 2394],
     	[24, 'netdata', 'netdata', 12580],
     	[25, 'zhangdaiscott', 'JimuReport', 108],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 chia-blockchain', 4609],
     	['#2 binance-trading-bot', 108],
     	['#3 dogecoin', 13532],
     	['#4 taichi', 6978],
     	['#5 vanillawebprojects', 72],
     	['#6 photoprism', 3772],
     	['#7 headlessui', 180],
     	['#8 public-apis', 2787],
     	['#9 openethereum', 12162],
     	['#10 OnlyFans', 666],
     	['#11 coding-interview-university', 1646],
     	['#12 covid19india-react', 967],
     	['#13 leveldb', 358],
     	['#14 lyra', 42],
     	['#15 solana', 14097],
     	['#16 react-flow', 1964],
     	['#17 LunarVim', 729],
     	['#18 assets', 7145],
     	['#19 30-seconds-of-code', 5347],
     	['#20 bevy', 1763],
     	['#21 You-Dont-Know-JS', 1762],
     	['#22 flutterfire', 1796],
     	['#23 supabase', 2394],
     	['#24 netdata', 12580],
     	['#25 JimuReport', 108],
     	
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