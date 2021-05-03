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
	[1, 'Chia-Network', 'chia-blockchain', 4583],
     	[2, 'chrisleekr', 'binance-trading-bot', 108],
     	[3, 'Kethku', 'neovide', 519],
     	[4, 'dogecoin', 'dogecoin', 13532],
     	[5, 'bradtraversy', 'vanillawebprojects', 72],
     	[6, 'tailwindlabs', 'headlessui', 180],
     	[7, 'photoprism', 'photoprism', 3759],
     	[8, 'johnBuffer', 'AntSimulator', 119],
     	[9, 'hagopj13', 'node-express-boilerplate', 214],
     	[10, 'covid19india', 'covid19india-react', 967],
     	[11, 'jwasham', 'coding-interview-university', 1643],
     	[12, 'openethereum', 'openethereum', 12159],
     	[13, 'testerSunshine', '12306', 435],
     	[14, 'bevyengine', 'bevy', 1748],
     	[15, 'google', 'leveldb', 358],
     	[16, 'supabase', 'supabase', 2252],
     	[17, '30-seconds', '30-seconds-of-code', 5347],
     	[18, 'CSSEGISandData', 'COVID-19', 3239],
     	[19, 'ChristianChiarulli', 'LunarVim', 713],
     	[20, 'PanJiaChen', 'vue-element-admin', 1013],
     	[21, 'sivel', 'speedtest-cli', 298],
     	[22, 'signalapp', 'Signal-Server', 1532],
     	[23, 'FirebaseExtended', 'flutterfire', 1775],
     	[24, 'lettier', '3d-game-shaders-for-beginners', 1],
     	[25, 'jklepatch', 'eattheblocks', 441],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 chia-blockchain', 4583],
     	['#2 binance-trading-bot', 108],
     	['#3 neovide', 519],
     	['#4 dogecoin', 13532],
     	['#5 vanillawebprojects', 72],
     	['#6 headlessui', 180],
     	['#7 photoprism', 3759],
     	['#8 AntSimulator', 119],
     	['#9 node-express-boilerplate', 214],
     	['#10 covid19india-react', 967],
     	['#11 coding-interview-university', 1643],
     	['#12 openethereum', 12159],
     	['#13 12306', 435],
     	['#14 bevy', 1748],
     	['#15 leveldb', 358],
     	['#16 supabase', 2252],
     	['#17 30-seconds-of-code', 5347],
     	['#18 COVID-19', 3239],
     	['#19 LunarVim', 713],
     	['#20 vue-element-admin', 1013],
     	['#21 speedtest-cli', 298],
     	['#22 Signal-Server', 1532],
     	['#23 flutterfire', 1775],
     	['#24 3d-game-shaders-for-beginners', 1],
     	['#25 eattheblocks', 441],
     	
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