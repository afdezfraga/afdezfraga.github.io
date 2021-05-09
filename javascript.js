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
     	[2, 'chrisleekr', 'binance-trading-bot', 111],
     	[3, 'dogecoin', 'dogecoin', 13535],
     	[4, 'DualCoder', 'vgpu_unlock', 23],
     	[5, 'taichi-dev', 'taichi', 6978],
     	[6, 'bradtraversy', 'vanillawebprojects', 72],
     	[7, 'photoprism', 'photoprism', 3772],
     	[8, 'public-apis', 'public-apis', 2790],
     	[9, 'DIGITALCRIMINAL', 'OnlyFans', 666],
     	[10, 'openethereum', 'openethereum', 12162],
     	[11, 'tailwindlabs', 'headlessui', 180],
     	[12, 'jwasham', 'coding-interview-university', 1646],
     	[13, 'wbkd', 'react-flow', 1964],
     	[14, 'google', 'leveldb', 358],
     	[15, 'covid19india', 'covid19india-react', 967],
     	[16, 'solana-labs', 'solana', 14102],
     	[17, 'ChristianChiarulli', 'LunarVim', 729],
     	[18, '30-seconds', '30-seconds-of-code', 5347],
     	[19, 'trustwallet', 'assets', 7202],
     	[20, 'supabase', 'supabase', 2394],
     	[21, 'getify', 'You-Dont-Know-JS', 1762],
     	[22, 'jklepatch', 'eattheblocks', 442],
     	[23, 'netdata', 'netdata', 12581],
     	[24, 'CSSEGISandData', 'COVID-19', 3278],
     	[25, 'FirebaseExtended', 'flutterfire', 1796],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 chia-blockchain', 4609],
     	['#2 binance-trading-bot', 111],
     	['#3 dogecoin', 13535],
     	['#4 vgpu_unlock', 23],
     	['#5 taichi', 6978],
     	['#6 vanillawebprojects', 72],
     	['#7 photoprism', 3772],
     	['#8 public-apis', 2790],
     	['#9 OnlyFans', 666],
     	['#10 openethereum', 12162],
     	['#11 headlessui', 180],
     	['#12 coding-interview-university', 1646],
     	['#13 react-flow', 1964],
     	['#14 leveldb', 358],
     	['#15 covid19india-react', 967],
     	['#16 solana', 14102],
     	['#17 LunarVim', 729],
     	['#18 30-seconds-of-code', 5347],
     	['#19 assets', 7202],
     	['#20 supabase', 2394],
     	['#21 You-Dont-Know-JS', 1762],
     	['#22 eattheblocks', 442],
     	['#23 netdata', 12581],
     	['#24 COVID-19', 3278],
     	['#25 flutterfire', 1796],
     	
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