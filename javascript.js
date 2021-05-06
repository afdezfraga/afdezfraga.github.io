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
     	[4, 'taichi-dev', 'taichi', 6974],
     	[5, 'bradtraversy', 'vanillawebprojects', 72],
     	[6, 'photoprism', 'photoprism', 3770],
     	[7, 'tailwindlabs', 'headlessui', 180],
     	[8, 'jwasham', 'coding-interview-university', 1643],
     	[9, 'openethereum', 'openethereum', 12162],
     	[10, 'google', 'leveldb', 358],
     	[11, 'covid19india', 'covid19india-react', 967],
     	[12, 'public-apis', 'public-apis', 2787],
     	[13, 'bevyengine', 'bevy', 1754],
     	[14, 'sivel', 'speedtest-cli', 298],
     	[15, 'supabase', 'supabase', 2375],
     	[16, '30-seconds', '30-seconds-of-code', 5347],
     	[17, 'PanJiaChen', 'vue-element-admin', 1013],
     	[18, 'ChristianChiarulli', 'LunarVim', 724],
     	[19, 'trustwallet', 'assets', 7043],
     	[20, 'solana-labs', 'solana', 14075],
     	[21, 'FirebaseExtended', 'flutterfire', 1789],
     	[22, 'go-kratos', 'kratos', 787],
     	[23, 'DIGITALCRIMINAL', 'OnlyFans', 665],
     	[24, 'getify', 'You-Dont-Know-JS', 1762],
     	[25, 'CSSEGISandData', 'COVID-19', 3265],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 chia-blockchain', 4609],
     	['#2 binance-trading-bot', 108],
     	['#3 dogecoin', 13532],
     	['#4 taichi', 6974],
     	['#5 vanillawebprojects', 72],
     	['#6 photoprism', 3770],
     	['#7 headlessui', 180],
     	['#8 coding-interview-university', 1643],
     	['#9 openethereum', 12162],
     	['#10 leveldb', 358],
     	['#11 covid19india-react', 967],
     	['#12 public-apis', 2787],
     	['#13 bevy', 1754],
     	['#14 speedtest-cli', 298],
     	['#15 supabase', 2375],
     	['#16 30-seconds-of-code', 5347],
     	['#17 vue-element-admin', 1013],
     	['#18 LunarVim', 724],
     	['#19 assets', 7043],
     	['#20 solana', 14075],
     	['#21 flutterfire', 1789],
     	['#22 kratos', 787],
     	['#23 OnlyFans', 665],
     	['#24 You-Dont-Know-JS', 1762],
     	['#25 COVID-19', 3265],
     	
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