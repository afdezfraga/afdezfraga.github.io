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
	[1, 'Chia-Network', 'chia-blockchain', 4587],
     	[2, 'chrisleekr', 'binance-trading-bot', 108],
     	[3, 'Kethku', 'neovide', 520],
     	[4, 'taichi-dev', 'taichi', 6972],
     	[5, 'dogecoin', 'dogecoin', 13532],
     	[6, 'bradtraversy', 'vanillawebprojects', 72],
     	[7, 'photoprism', 'photoprism', 3759],
     	[8, 'tailwindlabs', 'headlessui', 180],
     	[9, 'jwasham', 'coding-interview-university', 1643],
     	[10, 'openethereum', 'openethereum', 12159],
     	[11, 'hagopj13', 'node-express-boilerplate', 214],
     	[12, 'orpatashnik', 'StyleCLIP', 90],
     	[13, 'davepl', 'Primes', 83],
     	[14, 'covid19india', 'covid19india-react', 967],
     	[15, 'bevyengine', 'bevy', 1750],
     	[16, 'google', 'leveldb', 358],
     	[17, 'supabase', 'supabase', 2310],
     	[18, 'johnBuffer', 'AntSimulator', 119],
     	[19, 'sivel', 'speedtest-cli', 298],
     	[20, 'signalapp', 'Signal-Server', 1535],
     	[21, 'CSSEGISandData', 'COVID-19', 3249],
     	[22, 'PanJiaChen', 'vue-element-admin', 1013],
     	[23, 'ChristianChiarulli', 'LunarVim', 717],
     	[24, '30-seconds', '30-seconds-of-code', 5347],
     	[25, 'FirebaseExtended', 'flutterfire', 1775],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 chia-blockchain', 4587],
     	['#2 binance-trading-bot', 108],
     	['#3 neovide', 520],
     	['#4 taichi', 6972],
     	['#5 dogecoin', 13532],
     	['#6 vanillawebprojects', 72],
     	['#7 photoprism', 3759],
     	['#8 headlessui', 180],
     	['#9 coding-interview-university', 1643],
     	['#10 openethereum', 12159],
     	['#11 node-express-boilerplate', 214],
     	['#12 StyleCLIP', 90],
     	['#13 Primes', 83],
     	['#14 covid19india-react', 967],
     	['#15 bevy', 1750],
     	['#16 leveldb', 358],
     	['#17 supabase', 2310],
     	['#18 AntSimulator', 119],
     	['#19 speedtest-cli', 298],
     	['#20 Signal-Server', 1535],
     	['#21 COVID-19', 3249],
     	['#22 vue-element-admin', 1013],
     	['#23 LunarVim', 717],
     	['#24 30-seconds-of-code', 5347],
     	['#25 flutterfire', 1775],
     	
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