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
	[1, 'r4j0x00', 'exploits', 30],
     	[2, 'Chia-Network', 'chia-blockchain', 4493],
     	[3, 'merry75', 'educative.io_courses', 118],
     	[4, 'Ryujinx', 'Ryujinx', 1619],
     	[5, 'bradtraversy', 'vanillawebprojects', 72],
     	[6, 'tailwindlabs', 'headlessui', 171],
     	[7, 'ChristianChiarulli', 'LunarVim', 687],
     	[8, 'EleutherAI', 'gpt-neo', 837],
     	[9, 'GUI', 'covid-vaccine-spotter', 304],
     	[10, 'zhangdaiscott', 'JimuReport', 107],
     	[11, 'google', 'leveldb', 358],
     	[12, 'AobingJava', 'JavaFamily', 210],
     	[13, 'hagopj13', 'node-express-boilerplate', 214],
     	[14, 'papercups-io', 'papercups', 787],
     	[15, 'openethereum', 'openethereum', 12143],
     	[16, 'geekcomputers', 'Python', 2258],
     	[17, 'sveltejs', 'kit', 919],
     	[18, 'covid19india', 'covid19india-react', 963],
     	[19, 'SerenityOS', 'serenity', 19064],
     	[20, 'jklepatch', 'eattheblocks', 429],
     	[21, 'bevyengine', 'bevy', 1711],
     	[22, 'microsoft', 'calculator', 651],
     	[23, 'd2l-ai', 'd2l-zh', 3457],
     	[24, 'edeng23', 'binance-trade-bot', 225],
     	[25, 'protocolbuffers', 'protobuf', 8126],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 exploits', 30],
     	['#2 chia-blockchain', 4493],
     	['#3 educative.io_courses', 118],
     	['#4 Ryujinx', 1619],
     	['#5 vanillawebprojects', 72],
     	['#6 headlessui', 171],
     	['#7 LunarVim', 687],
     	['#8 gpt-neo', 837],
     	['#9 covid-vaccine-spotter', 304],
     	['#10 JimuReport', 107],
     	['#11 leveldb', 358],
     	['#12 JavaFamily', 210],
     	['#13 node-express-boilerplate', 214],
     	['#14 papercups', 787],
     	['#15 openethereum', 12143],
     	['#16 Python', 2258],
     	['#17 kit', 919],
     	['#18 covid19india-react', 963],
     	['#19 serenity', 19064],
     	['#20 eattheblocks', 429],
     	['#21 bevy', 1711],
     	['#22 calculator', 651],
     	['#23 d2l-zh', 3457],
     	['#24 binance-trade-bot', 225],
     	['#25 protobuf', 8126],
     	
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