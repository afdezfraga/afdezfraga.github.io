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
	[1, 'Chia-Network', 'chia-blockchain', 4461],
     	[2, 'r4j0x00', 'exploits', 30],
     	[3, 'Ryujinx', 'Ryujinx', 1614],
     	[4, 'bradtraversy', 'vanillawebprojects', 69],
     	[5, 'merry75', 'educative.io_courses', 118],
     	[6, 'tailwindlabs', 'headlessui', 168],
     	[7, 'GUI', 'covid-vaccine-spotter', 296],
     	[8, 'ChristianChiarulli', 'LunarVim', 683],
     	[9, 'geekcomputers', 'Python', 2258],
     	[10, 'mattermost', 'focalboard', 1289],
     	[11, 'AobingJava', 'JavaFamily', 210],
     	[12, 'd2l-ai', 'd2l-zh', 3437],
     	[13, 'google', 'leveldb', 358],
     	[14, 'CyC2018', 'CS-Notes', 3766],
     	[15, 'edeng23', 'binance-trade-bot', 225],
     	[16, 'zhangdaiscott', 'JimuReport', 107],
     	[17, 'sveltejs', 'kit', 860],
     	[18, 'jklepatch', 'eattheblocks', 429],
     	[19, 'docker', 'awesome-compose', 166],
     	[20, 'protocolbuffers', 'protobuf', 8115],
     	[21, 'microsoft', 'calculator', 649],
     	[22, 'jesse-ai', 'jesse', 828],
     	[23, 'hagopj13', 'node-express-boilerplate', 214],
     	[24, 'alibaba', 'nacos', 3046],
     	[25, 'chatwoot', 'chatwoot', 1106],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 chia-blockchain', 4461],
     	['#2 exploits', 30],
     	['#3 Ryujinx', 1614],
     	['#4 vanillawebprojects', 69],
     	['#5 educative.io_courses', 118],
     	['#6 headlessui', 168],
     	['#7 covid-vaccine-spotter', 296],
     	['#8 LunarVim', 683],
     	['#9 Python', 2258],
     	['#10 focalboard', 1289],
     	['#11 JavaFamily', 210],
     	['#12 d2l-zh', 3437],
     	['#13 leveldb', 358],
     	['#14 CS-Notes', 3766],
     	['#15 binance-trade-bot', 225],
     	['#16 JimuReport', 107],
     	['#17 kit', 860],
     	['#18 eattheblocks', 429],
     	['#19 awesome-compose', 166],
     	['#20 protobuf', 8115],
     	['#21 calculator', 649],
     	['#22 jesse', 828],
     	['#23 node-express-boilerplate', 214],
     	['#24 nacos', 3046],
     	['#25 chatwoot', 1106],
     	
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