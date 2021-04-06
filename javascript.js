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
	[1, 'docker', 'awesome-compose', 160],
     	[2, 'sickcodes', 'Docker-OSX', 255],
     	[3, 'Ryujinx', 'Ryujinx', 1593],
     	[4, 'benawad', 'dogehouse', 3366],
     	[5, 'sherlock-project', 'sherlock', 1505],
     	[6, 'spring-projects-experimental', 'spring-native', 1971],
     	[7, 'Chia-Network', 'chia-blockchain', 4395],
     	[8, 'd2l-ai', 'd2l-zh', 3421],
     	[9, 'geekcomputers', 'Python', 2244],
     	[10, 'ChristianChiarulli', 'nvcode', 659],
     	[11, 'merry75', 'educative.io_courses', 118],
     	[12, 'nasa', 'openmct', 6764],
     	[13, 'openjdk', 'jdk', 63811],
     	[14, 'CyC2018', 'CS-Notes', 3766],
     	[15, 'dwisiswant0', 'apkleaks', 136],
     	[16, 'stefan-jansen', 'machine-learning-for-trading', 256],
     	[17, 'dolthub', 'dolt', 8770],
     	[18, 'discordjs', 'discord.js', 4972],
     	[19, 'quii', 'learn-go-with-tests', 1075],
     	[20, 'XTLS', 'Xray-core', 164],
     	[21, 'chatwoot', 'chatwoot', 1078],
     	[22, 'bettercap', 'bettercap', 1938],
     	[23, 'crystal-lang', 'crystal', 13074],
     	[24, 'OpenZeppelin', 'openzeppelin-contracts', 2384],
     	[25, 'jesse-ai', 'jesse', 813],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 awesome-compose', 160],
     	['#2 Docker-OSX', 255],
     	['#3 Ryujinx', 1593],
     	['#4 dogehouse', 3366],
     	['#5 sherlock', 1505],
     	['#6 spring-native', 1971],
     	['#7 chia-blockchain', 4395],
     	['#8 d2l-zh', 3421],
     	['#9 Python', 2244],
     	['#10 nvcode', 659],
     	['#11 educative.io_courses', 118],
     	['#12 openmct', 6764],
     	['#13 jdk', 63811],
     	['#14 CS-Notes', 3766],
     	['#15 apkleaks', 136],
     	['#16 machine-learning-for-trading', 256],
     	['#17 dolt', 8770],
     	['#18 discord.js', 4972],
     	['#19 learn-go-with-tests', 1075],
     	['#20 Xray-core', 164],
     	['#21 chatwoot', 1078],
     	['#22 bettercap', 1938],
     	['#23 crystal', 13074],
     	['#24 openzeppelin-contracts', 2384],
     	['#25 jesse', 813],
     	
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