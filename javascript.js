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
	[1, 'Chia-Network', 'chia-blockchain', 4582],
     	[2, 'chrisleekr', 'binance-trading-bot', 108],
     	[3, 'Kethku', 'neovide', 518],
     	[4, 'johnBuffer', 'AntSimulator', 119],
     	[5, 'bradtraversy', 'vanillawebprojects', 72],
     	[6, 'dogecoin', 'dogecoin', 13532],
     	[7, 'tailwindlabs', 'headlessui', 180],
     	[8, 'photoprism', 'photoprism', 3759],
     	[9, 'hagopj13', 'node-express-boilerplate', 214],
     	[10, 'covid19india', 'covid19india-react', 967],
     	[11, 'jwasham', 'coding-interview-university', 1643],
     	[12, 'openethereum', 'openethereum', 12159],
     	[13, 'google', 'leveldb', 358],
     	[14, 'bevyengine', 'bevy', 1745],
     	[15, 'ChristianChiarulli', 'LunarVim', 706],
     	[16, 'zhangdaiscott', 'JimuReport', 108],
     	[17, 'appsmithorg', 'appsmith', 5674],
     	[18, 'PanJiaChen', 'vue-element-admin', 1013],
     	[19, 'CSSEGISandData', 'COVID-19', 3228],
     	[20, 'input-output-hk', 'plutus', 7892],
     	[21, 'sivel', 'speedtest-cli', 298],
     	[22, '30-seconds', '30-seconds-of-code', 5347],
     	[23, 'SerenityOS', 'serenity', 19566],
     	[24, 'jklepatch', 'eattheblocks', 436],
     	[25, 'FirebaseExtended', 'flutterfire', 1775],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 chia-blockchain', 4582],
     	['#2 binance-trading-bot', 108],
     	['#3 neovide', 518],
     	['#4 AntSimulator', 119],
     	['#5 vanillawebprojects', 72],
     	['#6 dogecoin', 13532],
     	['#7 headlessui', 180],
     	['#8 photoprism', 3759],
     	['#9 node-express-boilerplate', 214],
     	['#10 covid19india-react', 967],
     	['#11 coding-interview-university', 1643],
     	['#12 openethereum', 12159],
     	['#13 leveldb', 358],
     	['#14 bevy', 1745],
     	['#15 LunarVim', 706],
     	['#16 JimuReport', 108],
     	['#17 appsmith', 5674],
     	['#18 vue-element-admin', 1013],
     	['#19 COVID-19', 3228],
     	['#20 plutus', 7892],
     	['#21 speedtest-cli', 298],
     	['#22 30-seconds-of-code', 5347],
     	['#23 serenity', 19566],
     	['#24 eattheblocks', 436],
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