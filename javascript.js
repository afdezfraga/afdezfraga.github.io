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
     	[2, 'Chia-Network', 'chia-blockchain', 4453],
     	[3, 'Ryujinx', 'Ryujinx', 1610],
     	[4, 'merry75', 'educative.io_courses', 118],
     	[5, 'GUI', 'covid-vaccine-spotter', 296],
     	[6, 'tailwindlabs', 'headlessui', 168],
     	[7, 'bradtraversy', 'vanillawebprojects', 69],
     	[8, 'docker', 'awesome-compose', 166],
     	[9, 'mattermost', 'focalboard', 1287],
     	[10, 'nasa', 'openmct', 6767],
     	[11, 'ChristianChiarulli', 'LunarVim', 680],
     	[12, 'geekcomputers', 'Python', 2249],
     	[13, 'CyC2018', 'CS-Notes', 3766],
     	[14, 'AobingJava', 'JavaFamily', 210],
     	[15, 'stefan-jansen', 'machine-learning-for-trading', 262],
     	[16, 'edeng23', 'binance-trade-bot', 225],
     	[17, 'sveltejs', 'kit', 851],
     	[18, 'd2l-ai', 'd2l-zh', 3437],
     	[19, 'chatwoot', 'chatwoot', 1105],
     	[20, 'google', 'leveldb', 358],
     	[21, 'jklepatch', 'eattheblocks', 425],
     	[22, 'OpenZeppelin', 'openzeppelin-contracts', 2397],
     	[23, 'hagopj13', 'node-express-boilerplate', 214],
     	[24, 'protocolbuffers', 'protobuf', 8115],
     	[25, 'zhangdaiscott', 'JimuReport', 107],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 exploits', 30],
     	['#2 chia-blockchain', 4453],
     	['#3 Ryujinx', 1610],
     	['#4 educative.io_courses', 118],
     	['#5 covid-vaccine-spotter', 296],
     	['#6 headlessui', 168],
     	['#7 vanillawebprojects', 69],
     	['#8 awesome-compose', 166],
     	['#9 focalboard', 1287],
     	['#10 openmct', 6767],
     	['#11 LunarVim', 680],
     	['#12 Python', 2249],
     	['#13 CS-Notes', 3766],
     	['#14 JavaFamily', 210],
     	['#15 machine-learning-for-trading', 262],
     	['#16 binance-trade-bot', 225],
     	['#17 kit', 851],
     	['#18 d2l-zh', 3437],
     	['#19 chatwoot', 1105],
     	['#20 leveldb', 358],
     	['#21 eattheblocks', 425],
     	['#22 openzeppelin-contracts', 2397],
     	['#23 node-express-boilerplate', 214],
     	['#24 protobuf', 8115],
     	['#25 JimuReport', 107],
     	
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