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
	[1, 'NAalytics', 'Assemblies-of-putative-SARS-CoV2-spike-encoding-mRNA-sequences-for-vaccines-BNT-162b2-and-mRNA-1273', 23],
     	[2, 'Chia-Network', 'chia-blockchain', 4533],
     	[3, 'lucidrains', 'deep-daze', 225],
     	[4, 'tailwindlabs', 'headlessui', 175],
     	[5, 'dromara', 'sa-token', 335],
     	[6, 'merry75', 'educative.io_courses', 118],
     	[7, 'bradtraversy', 'vanillawebprojects', 72],
     	[8, 'hagopj13', 'node-express-boilerplate', 214],
     	[9, 'appsmithorg', 'appsmith', 5584],
     	[10, 'google', 'leveldb', 358],
     	[11, 'ChristianChiarulli', 'LunarVim', 689],
     	[12, 'zhangdaiscott', 'JimuReport', 107],
     	[13, 'bevyengine', 'bevy', 1725],
     	[14, 'jwasham', 'coding-interview-university', 1643],
     	[15, 'input-output-hk', 'plutus', 7812],
     	[16, 'openethereum', 'openethereum', 12151],
     	[17, 'SerenityOS', 'serenity', 19338],
     	[18, 'dogecoin', 'dogecoin', 13532],
     	[19, '30-seconds', '30-seconds-of-code', 5347],
     	[20, 'covid19india', 'covid19india-react', 967],
     	[21, 'CSSEGISandData', 'COVID-19', 3195],
     	[22, 'chrisleekr', 'binance-trading-bot', 106],
     	[23, 'PanJiaChen', 'vue-element-admin', 1013],
     	[24, 'apache', 'dolphinscheduler', 4802],
     	[25, 'AobingJava', 'JavaFamily', 210],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 Assemblies-of-putative-SARS-CoV2-spike-encoding-mRNA-sequences-for-vaccines-BNT-162b2-and-mRNA-1273', 23],
     	['#2 chia-blockchain', 4533],
     	['#3 deep-daze', 225],
     	['#4 headlessui', 175],
     	['#5 sa-token', 335],
     	['#6 educative.io_courses', 118],
     	['#7 vanillawebprojects', 72],
     	['#8 node-express-boilerplate', 214],
     	['#9 appsmith', 5584],
     	['#10 leveldb', 358],
     	['#11 LunarVim', 689],
     	['#12 JimuReport', 107],
     	['#13 bevy', 1725],
     	['#14 coding-interview-university', 1643],
     	['#15 plutus', 7812],
     	['#16 openethereum', 12151],
     	['#17 serenity', 19338],
     	['#18 dogecoin', 13532],
     	['#19 30-seconds-of-code', 5347],
     	['#20 covid19india-react', 967],
     	['#21 COVID-19', 3195],
     	['#22 binance-trading-bot', 106],
     	['#23 vue-element-admin', 1013],
     	['#24 dolphinscheduler', 4802],
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