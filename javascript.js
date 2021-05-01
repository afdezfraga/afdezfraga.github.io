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
	[1, 'Chia-Network', 'chia-blockchain', 4577],
     	[2, 'johnBuffer', 'AntSimulator', 119],
     	[3, 'chrisleekr', 'binance-trading-bot', 106],
     	[4, 'Kethku', 'neovide', 518],
     	[5, 'bradtraversy', 'vanillawebprojects', 72],
     	[6, 'dogecoin', 'dogecoin', 13532],
     	[7, 'tailwindlabs', 'headlessui', 180],
     	[8, 'hagopj13', 'node-express-boilerplate', 214],
     	[9, 'covid19india', 'covid19india-react', 967],
     	[10, 'photoprism', 'photoprism', 3750],
     	[11, 'testerSunshine', '12306', 435],
     	[12, 'jwasham', 'coding-interview-university', 1643],
     	[13, 'google', 'leveldb', 358],
     	[14, 'appsmithorg', 'appsmith', 5674],
     	[15, 'ChristianChiarulli', 'LunarVim', 706],
     	[16, 'openethereum', 'openethereum', 12159],
     	[17, 'bevyengine', 'bevy', 1739],
     	[18, 'CSSEGISandData', 'COVID-19', 3221],
     	[19, 'input-output-hk', 'plutus', 7892],
     	[20, 'PanJiaChen', 'vue-element-admin', 1013],
     	[21, 'zhangdaiscott', 'JimuReport', 108],
     	[22, 'SerenityOS', 'serenity', 19512],
     	[23, 'TheAlgorithms', 'Python', 2095],
     	[24, 'sivel', 'speedtest-cli', 298],
     	[25, 'merry75', 'educative.io_courses', 118],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 chia-blockchain', 4577],
     	['#2 AntSimulator', 119],
     	['#3 binance-trading-bot', 106],
     	['#4 neovide', 518],
     	['#5 vanillawebprojects', 72],
     	['#6 dogecoin', 13532],
     	['#7 headlessui', 180],
     	['#8 node-express-boilerplate', 214],
     	['#9 covid19india-react', 967],
     	['#10 photoprism', 3750],
     	['#11 12306', 435],
     	['#12 coding-interview-university', 1643],
     	['#13 leveldb', 358],
     	['#14 appsmith', 5674],
     	['#15 LunarVim', 706],
     	['#16 openethereum', 12159],
     	['#17 bevy', 1739],
     	['#18 COVID-19', 3221],
     	['#19 plutus', 7892],
     	['#20 vue-element-admin', 1013],
     	['#21 JimuReport', 108],
     	['#22 serenity', 19512],
     	['#23 Python', 2095],
     	['#24 speedtest-cli', 298],
     	['#25 educative.io_courses', 118],
     	
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