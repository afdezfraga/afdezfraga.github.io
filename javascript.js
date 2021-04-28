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
	[1, 'Chia-Network', 'chia-blockchain', 4543],
     	[2, 'NAalytics', 'Assemblies-of-putative-SARS-CoV2-spike-encoding-mRNA-sequences-for-vaccines-BNT-162b2-and-mRNA-1273', 23],
     	[3, 'bradtraversy', 'vanillawebprojects', 72],
     	[4, 'tailwindlabs', 'headlessui', 175],
     	[5, 'merry75', 'educative.io_courses', 118],
     	[6, 'chrisleekr', 'binance-trading-bot', 106],
     	[7, 'dromara', 'sa-token', 335],
     	[8, 'hagopj13', 'node-express-boilerplate', 214],
     	[9, 'google', 'leveldb', 358],
     	[10, 'dogecoin', 'dogecoin', 13532],
     	[11, 'ChristianChiarulli', 'LunarVim', 694],
     	[12, 'appsmithorg', 'appsmith', 5598],
     	[13, '30-seconds', '30-seconds-of-code', 5347],
     	[14, 'covid19india', 'covid19india-react', 967],
     	[15, 'zhangdaiscott', 'JimuReport', 107],
     	[16, 'jwasham', 'coding-interview-university', 1643],
     	[17, 'openethereum', 'openethereum', 12151],
     	[18, 'bevyengine', 'bevy', 1730],
     	[19, 'input-output-hk', 'plutus', 7829],
     	[20, 'SerenityOS', 'serenity', 19375],
     	[21, 'photoprism', 'photoprism', 3735],
     	[22, 'PanJiaChen', 'vue-element-admin', 1013],
     	[23, 'getify', 'You-Dont-Know-JS', 1762],
     	[24, 'CSSEGISandData', 'COVID-19', 3201],
     	[25, 'AobingJava', 'JavaFamily', 210],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 chia-blockchain', 4543],
     	['#2 Assemblies-of-putative-SARS-CoV2-spike-encoding-mRNA-sequences-for-vaccines-BNT-162b2-and-mRNA-1273', 23],
     	['#3 vanillawebprojects', 72],
     	['#4 headlessui', 175],
     	['#5 educative.io_courses', 118],
     	['#6 binance-trading-bot', 106],
     	['#7 sa-token', 335],
     	['#8 node-express-boilerplate', 214],
     	['#9 leveldb', 358],
     	['#10 dogecoin', 13532],
     	['#11 LunarVim', 694],
     	['#12 appsmith', 5598],
     	['#13 30-seconds-of-code', 5347],
     	['#14 covid19india-react', 967],
     	['#15 JimuReport', 107],
     	['#16 coding-interview-university', 1643],
     	['#17 openethereum', 12151],
     	['#18 bevy', 1730],
     	['#19 plutus', 7829],
     	['#20 serenity', 19375],
     	['#21 photoprism', 3735],
     	['#22 vue-element-admin', 1013],
     	['#23 You-Dont-Know-JS', 1762],
     	['#24 COVID-19', 3201],
     	['#25 JavaFamily', 210],
     	
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