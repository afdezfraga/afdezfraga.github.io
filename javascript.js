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
	[1, 'Chia-Network', 'chia-blockchain', 4558],
     	[2, 'chrisleekr', 'binance-trading-bot', 106],
     	[3, 'bradtraversy', 'vanillawebprojects', 72],
     	[4, 'Datalux', 'Osintgram', 311],
     	[5, 'tailwindlabs', 'headlessui', 180],
     	[6, 'dogecoin', 'dogecoin', 13532],
     	[7, 'merry75', 'educative.io_courses', 118],
     	[8, 'hagopj13', 'node-express-boilerplate', 214],
     	[9, 'covid19india', 'covid19india-react', 967],
     	[10, 'google', 'leveldb', 358],
     	[11, 'ChristianChiarulli', 'LunarVim', 695],
     	[12, 'photoprism', 'photoprism', 3735],
     	[13, 'appsmithorg', 'appsmith', 5619],
     	[14, 'openethereum', 'openethereum', 12159],
     	[15, 'jwasham', 'coding-interview-university', 1643],
     	[16, 'zhangdaiscott', 'JimuReport', 107],
     	[17, 'dromara', 'sa-token', 335],
     	[18, 'bevyengine', 'bevy', 1736],
     	[19, 'input-output-hk', 'plutus', 7850],
     	[20, 'PanJiaChen', 'vue-element-admin', 1013],
     	[21, '30-seconds', '30-seconds-of-code', 5347],
     	[22, 'SerenityOS', 'serenity', 19403],
     	[23, 'sindresorhus', 'awesome', 984],
     	[24, 'go-kratos', 'kratos', 779],
     	[25, 'apache', 'dolphinscheduler', 4802],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 chia-blockchain', 4558],
     	['#2 binance-trading-bot', 106],
     	['#3 vanillawebprojects', 72],
     	['#4 Osintgram', 311],
     	['#5 headlessui', 180],
     	['#6 dogecoin', 13532],
     	['#7 educative.io_courses', 118],
     	['#8 node-express-boilerplate', 214],
     	['#9 covid19india-react', 967],
     	['#10 leveldb', 358],
     	['#11 LunarVim', 695],
     	['#12 photoprism', 3735],
     	['#13 appsmith', 5619],
     	['#14 openethereum', 12159],
     	['#15 coding-interview-university', 1643],
     	['#16 JimuReport', 107],
     	['#17 sa-token', 335],
     	['#18 bevy', 1736],
     	['#19 plutus', 7850],
     	['#20 vue-element-admin', 1013],
     	['#21 30-seconds-of-code', 5347],
     	['#22 serenity', 19403],
     	['#23 awesome', 984],
     	['#24 kratos', 779],
     	['#25 dolphinscheduler', 4802],
     	
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