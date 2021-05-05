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
	[1, 'Chia-Network', 'chia-blockchain', 4592],
     	[2, 'chrisleekr', 'binance-trading-bot', 108],
     	[3, 'taichi-dev', 'taichi', 6972],
     	[4, 'dogecoin', 'dogecoin', 13532],
     	[5, 'bradtraversy', 'vanillawebprojects', 72],
     	[6, 'photoprism', 'photoprism', 3766],
     	[7, 'tailwindlabs', 'headlessui', 180],
     	[8, 'jwasham', 'coding-interview-university', 1643],
     	[9, 'covid19india', 'covid19india-react', 967],
     	[10, 'openethereum', 'openethereum', 12159],
     	[11, 'bevyengine', 'bevy', 1751],
     	[12, 'google', 'leveldb', 358],
     	[13, 'supabase', 'supabase', 2341],
     	[14, 'sivel', 'speedtest-cli', 298],
     	[15, 'hagopj13', 'node-express-boilerplate', 214],
     	[16, 'signalapp', 'Signal-Server', 1535],
     	[17, 'PanJiaChen', 'vue-element-admin', 1013],
     	[18, 'ChristianChiarulli', 'LunarVim', 719],
     	[19, 'lettier', '3d-game-shaders-for-beginners', 1],
     	[20, 'CSSEGISandData', 'COVID-19', 3258],
     	[21, 'zhangdaiscott', 'JimuReport', 108],
     	[22, '30-seconds', '30-seconds-of-code', 5347],
     	[23, 'netdata', 'netdata', 12557],
     	[24, 'FirebaseExtended', 'flutterfire', 1789],
     	[25, 'trustwallet', 'assets', 6986],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 chia-blockchain', 4592],
     	['#2 binance-trading-bot', 108],
     	['#3 taichi', 6972],
     	['#4 dogecoin', 13532],
     	['#5 vanillawebprojects', 72],
     	['#6 photoprism', 3766],
     	['#7 headlessui', 180],
     	['#8 coding-interview-university', 1643],
     	['#9 covid19india-react', 967],
     	['#10 openethereum', 12159],
     	['#11 bevy', 1751],
     	['#12 leveldb', 358],
     	['#13 supabase', 2341],
     	['#14 speedtest-cli', 298],
     	['#15 node-express-boilerplate', 214],
     	['#16 Signal-Server', 1535],
     	['#17 vue-element-admin', 1013],
     	['#18 LunarVim', 719],
     	['#19 3d-game-shaders-for-beginners', 1],
     	['#20 COVID-19', 3258],
     	['#21 JimuReport', 108],
     	['#22 30-seconds-of-code', 5347],
     	['#23 netdata', 12557],
     	['#24 flutterfire', 1789],
     	['#25 assets', 6986],
     	
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