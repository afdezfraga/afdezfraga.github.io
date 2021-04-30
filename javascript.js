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
	[1, 'Chia-Network', 'chia-blockchain', 4566],
     	[2, 'chrisleekr', 'binance-trading-bot', 106],
     	[3, 'taichi-dev', 'taichi', 6967],
     	[4, 'Kethku', 'neovide', 515],
     	[5, 'bradtraversy', 'vanillawebprojects', 72],
     	[6, 'tailwindlabs', 'headlessui', 180],
     	[7, 'dogecoin', 'dogecoin', 13532],
     	[8, 'trungk18', 'angular-spotify', 142],
     	[9, 'hagopj13', 'node-express-boilerplate', 214],
     	[10, 'appsmithorg', 'appsmith', 5661],
     	[11, 'covid19india', 'covid19india-react', 967],
     	[12, 'photoprism', 'photoprism', 3735],
     	[13, 'google', 'leveldb', 358],
     	[14, 'ChristianChiarulli', 'LunarVim', 706],
     	[15, 'openethereum', 'openethereum', 12159],
     	[16, 'merry75', 'educative.io_courses', 118],
     	[17, 'bevyengine', 'bevy', 1737],
     	[18, 'jwasham', 'coding-interview-university', 1643],
     	[19, 'tonarino', 'innernet', 57],
     	[20, 'PanJiaChen', 'vue-element-admin', 1013],
     	[21, 'input-output-hk', 'plutus', 7873],
     	[22, 'zhangdaiscott', 'JimuReport', 107],
     	[23, 'lettier', '3d-game-shaders-for-beginners', 1],
     	[24, 'CSSEGISandData', 'COVID-19', 3216],
     	[25, 'Datalux', 'Osintgram', 311],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 chia-blockchain', 4566],
     	['#2 binance-trading-bot', 106],
     	['#3 taichi', 6967],
     	['#4 neovide', 515],
     	['#5 vanillawebprojects', 72],
     	['#6 headlessui', 180],
     	['#7 dogecoin', 13532],
     	['#8 angular-spotify', 142],
     	['#9 node-express-boilerplate', 214],
     	['#10 appsmith', 5661],
     	['#11 covid19india-react', 967],
     	['#12 photoprism', 3735],
     	['#13 leveldb', 358],
     	['#14 LunarVim', 706],
     	['#15 openethereum', 12159],
     	['#16 educative.io_courses', 118],
     	['#17 bevy', 1737],
     	['#18 coding-interview-university', 1643],
     	['#19 innernet', 57],
     	['#20 vue-element-admin', 1013],
     	['#21 plutus', 7873],
     	['#22 JimuReport', 107],
     	['#23 3d-game-shaders-for-beginners', 1],
     	['#24 COVID-19', 3216],
     	['#25 Osintgram', 311],
     	
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