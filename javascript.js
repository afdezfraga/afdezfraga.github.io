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
	[1, 'docker', 'awesome-compose', 165],
     	[2, 'Chia-Network', 'chia-blockchain', 4427],
     	[3, 'Ryujinx', 'Ryujinx', 1606],
     	[4, 'GUI', 'covid-vaccine-spotter', 290],
     	[5, 'merry75', 'educative.io_courses', 118],
     	[6, 'sveltejs', 'kit', 823],
     	[7, 'ChristianChiarulli', 'nvcode', 671],
     	[8, 'sickcodes', 'Docker-OSX', 262],
     	[9, 'nasa', 'openmct', 6767],
     	[10, 'openjdk', 'jdk', 63922],
     	[11, 'stefan-jansen', 'machine-learning-for-trading', 262],
     	[12, 'chatwoot', 'chatwoot', 1097],
     	[13, 'CyC2018', 'CS-Notes', 3766],
     	[14, 'benawad', 'dogehouse', 3774],
     	[15, 'edeng23', 'binance-trade-bot', 223],
     	[16, 'AobingJava', 'JavaFamily', 210],
     	[17, 'geekcomputers', 'Python', 2249],
     	[18, 'discordjs', 'discord.js', 4973],
     	[19, 'XTLS', 'Xray-core', 165],
     	[20, 'jesse-ai', 'jesse', 824],
     	[21, 'OpenZeppelin', 'openzeppelin-contracts', 2391],
     	[22, 'protocolbuffers', 'protobuf', 8092],
     	[23, 'jklepatch', 'eattheblocks', 424],
     	[24, 'bradtraversy', 'vanillawebprojects', 69],
     	[25, 'wg', 'wrk', 80],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 awesome-compose', 165],
     	['#2 chia-blockchain', 4427],
     	['#3 Ryujinx', 1606],
     	['#4 covid-vaccine-spotter', 290],
     	['#5 educative.io_courses', 118],
     	['#6 kit', 823],
     	['#7 nvcode', 671],
     	['#8 Docker-OSX', 262],
     	['#9 openmct', 6767],
     	['#10 jdk', 63922],
     	['#11 machine-learning-for-trading', 262],
     	['#12 chatwoot', 1097],
     	['#13 CS-Notes', 3766],
     	['#14 dogehouse', 3774],
     	['#15 binance-trade-bot', 223],
     	['#16 JavaFamily', 210],
     	['#17 Python', 2249],
     	['#18 discord.js', 4973],
     	['#19 Xray-core', 165],
     	['#20 jesse', 824],
     	['#21 openzeppelin-contracts', 2391],
     	['#22 protobuf', 8092],
     	['#23 eattheblocks', 424],
     	['#24 vanillawebprojects', 69],
     	['#25 wrk', 80],
     	
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