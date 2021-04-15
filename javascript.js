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
     	[2, 'Chia-Network', 'chia-blockchain', 4440],
     	[3, 'docker', 'awesome-compose', 166],
     	[4, 'GUI', 'covid-vaccine-spotter', 290],
     	[5, 'merry75', 'educative.io_courses', 118],
     	[6, 'Ryujinx', 'Ryujinx', 1609],
     	[7, 'stefan-jansen', 'machine-learning-for-trading', 262],
     	[8, 'ChristianChiarulli', 'nvcode', 671],
     	[9, 'nasa', 'openmct', 6767],
     	[10, 'sveltejs', 'kit', 832],
     	[11, 'chatwoot', 'chatwoot', 1098],
     	[12, 'bradtraversy', 'vanillawebprojects', 69],
     	[13, 'openjdk', 'jdk', 63939],
     	[14, 'CyC2018', 'CS-Notes', 3766],
     	[15, 'AobingJava', 'JavaFamily', 210],
     	[16, 'edeng23', 'binance-trade-bot', 223],
     	[17, 'd2l-ai', 'd2l-zh', 3434],
     	[18, 'geekcomputers', 'Python', 2249],
     	[19, 'wg', 'wrk', 80],
     	[20, 'jesse-ai', 'jesse', 824],
     	[21, 'XTLS', 'Xray-core', 165],
     	[22, 'tailwindlabs', 'headlessui', 168],
     	[23, 'protocolbuffers', 'protobuf', 8095],
     	[24, 'OpenZeppelin', 'openzeppelin-contracts', 2392],
     	[25, 'jklepatch', 'eattheblocks', 424],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 exploits', 30],
     	['#2 chia-blockchain', 4440],
     	['#3 awesome-compose', 166],
     	['#4 covid-vaccine-spotter', 290],
     	['#5 educative.io_courses', 118],
     	['#6 Ryujinx', 1609],
     	['#7 machine-learning-for-trading', 262],
     	['#8 nvcode', 671],
     	['#9 openmct', 6767],
     	['#10 kit', 832],
     	['#11 chatwoot', 1098],
     	['#12 vanillawebprojects', 69],
     	['#13 jdk', 63939],
     	['#14 CS-Notes', 3766],
     	['#15 JavaFamily', 210],
     	['#16 binance-trade-bot', 223],
     	['#17 d2l-zh', 3434],
     	['#18 Python', 2249],
     	['#19 wrk', 80],
     	['#20 jesse', 824],
     	['#21 Xray-core', 165],
     	['#22 headlessui', 168],
     	['#23 protobuf', 8095],
     	['#24 openzeppelin-contracts', 2392],
     	['#25 eattheblocks', 424],
     	
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