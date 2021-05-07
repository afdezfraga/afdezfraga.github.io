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
     	[5, 'Kethku', 'neovide', 520],
     	[6, 'bradtraversy', 'vanillawebprojects', 72],
     	[7, 'google', 'lyra', 42],
     	[8, 'photoprism', 'photoprism', 3772],
     	[9, 'tailwindlabs', 'headlessui', 180],
     	[10, 'jwasham', 'coding-interview-university', 1646],
     	[11, 'covid19india', 'covid19india-react', 967],
     	[12, 'openethereum', 'openethereum', 12162],
     	[13, 'public-apis', 'public-apis', 2787],
     	[14, 'google', 'leveldb', 358],
     	[15, 'DIGITALCRIMINAL', 'OnlyFans', 666],
     	[16, 'bevyengine', 'bevy', 1762],
     	[17, 'sivel', 'speedtest-cli', 298],
     	[18, 'laravel', 'octane', 386],
     	[19, 'ChristianChiarulli', 'LunarVim', 727],
     	[20, 'FirebaseExtended', 'flutterfire', 1796],
     	[21, 'solana-labs', 'solana', 14092],
     	[22, 'trustwallet', 'assets', 7083],
     	[23, 'supabase', 'supabase', 2388],
     	[24, 'CSSEGISandData', 'COVID-19', 3270],
     	[25, 'getify', 'You-Dont-Know-JS', 1762],
     	
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
     	['#5 neovide', 520],
     	['#6 vanillawebprojects', 72],
     	['#7 lyra', 42],
     	['#8 photoprism', 3772],
     	['#9 headlessui', 180],
     	['#10 coding-interview-university', 1646],
     	['#11 covid19india-react', 967],
     	['#12 openethereum', 12162],
     	['#13 public-apis', 2787],
     	['#14 leveldb', 358],
     	['#15 OnlyFans', 666],
     	['#16 bevy', 1762],
     	['#17 speedtest-cli', 298],
     	['#18 octane', 386],
     	['#19 LunarVim', 727],
     	['#20 flutterfire', 1796],
     	['#21 solana', 14092],
     	['#22 assets', 7083],
     	['#23 supabase', 2388],
     	['#24 COVID-19', 3270],
     	['#25 You-Dont-Know-JS', 1762],
     	
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