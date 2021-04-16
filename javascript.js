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
     	[2, 'Chia-Network', 'chia-blockchain', 4449],
     	[3, 'docker', 'awesome-compose', 166],
     	[4, 'Ryujinx', 'Ryujinx', 1610],
     	[5, 'GUI', 'covid-vaccine-spotter', 293],
     	[6, 'merry75', 'educative.io_courses', 118],
     	[7, 'stefan-jansen', 'machine-learning-for-trading', 262],
     	[8, 'chatwoot', 'chatwoot', 1100],
     	[9, 'nasa', 'openmct', 6767],
     	[10, 'geekcomputers', 'Python', 2249],
     	[11, 'bradtraversy', 'vanillawebprojects', 69],
     	[12, 'ChristianChiarulli', 'LunarVim', 677],
     	[13, 'sveltejs', 'kit', 837],
     	[14, 'tailwindlabs', 'headlessui', 168],
     	[15, 'CyC2018', 'CS-Notes', 3766],
     	[16, 'AobingJava', 'JavaFamily', 210],
     	[17, 'edeng23', 'binance-trade-bot', 225],
     	[18, 'openjdk', 'jdk', 63969],
     	[19, 'wg', 'wrk', 80],
     	[20, 'OpenZeppelin', 'openzeppelin-contracts', 2392],
     	[21, 'jklepatch', 'eattheblocks', 424],
     	[22, 'protocolbuffers', 'protobuf', 8097],
     	[23, 'hagopj13', 'node-express-boilerplate', 214],
     	[24, 'XTLS', 'Xray-core', 165],
     	[25, 'd2l-ai', 'd2l-zh', 3436],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 exploits', 30],
     	['#2 chia-blockchain', 4449],
     	['#3 awesome-compose', 166],
     	['#4 Ryujinx', 1610],
     	['#5 covid-vaccine-spotter', 293],
     	['#6 educative.io_courses', 118],
     	['#7 machine-learning-for-trading', 262],
     	['#8 chatwoot', 1100],
     	['#9 openmct', 6767],
     	['#10 Python', 2249],
     	['#11 vanillawebprojects', 69],
     	['#12 LunarVim', 677],
     	['#13 kit', 837],
     	['#14 headlessui', 168],
     	['#15 CS-Notes', 3766],
     	['#16 JavaFamily', 210],
     	['#17 binance-trade-bot', 225],
     	['#18 jdk', 63969],
     	['#19 wrk', 80],
     	['#20 openzeppelin-contracts', 2392],
     	['#21 eattheblocks', 424],
     	['#22 protobuf', 8097],
     	['#23 node-express-boilerplate', 214],
     	['#24 Xray-core', 165],
     	['#25 d2l-zh', 3436],
     	
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