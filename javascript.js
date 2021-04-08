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
	[1, 'docker', 'awesome-compose', 163],
     	[2, 'sickcodes', 'Docker-OSX', 255],
     	[3, 'Ryujinx', 'Ryujinx', 1597],
     	[4, 'benawad', 'dogehouse', 3456],
     	[5, 'authelia', 'authelia', 1748],
     	[6, 'Chia-Network', 'chia-blockchain', 4404],
     	[7, 'spring-projects-experimental', 'spring-native', 1980],
     	[8, 'merry75', 'educative.io_courses', 118],
     	[9, 'd2l-ai', 'd2l-zh', 3425],
     	[10, 'ChristianChiarulli', 'nvcode', 663],
     	[11, 'sherlock-project', 'sherlock', 1505],
     	[12, 'geekcomputers', 'Python', 2246],
     	[13, 'stefan-jansen', 'machine-learning-for-trading', 257],
     	[14, 'nasa', 'openmct', 6765],
     	[15, 'openjdk', 'jdk', 63842],
     	[16, 'CyC2018', 'CS-Notes', 3766],
     	[17, 'discordjs', 'discord.js', 4973],
     	[18, 'bettercap', 'bettercap', 1946],
     	[19, 'dotnet', 'net6-mobile-samples', 91],
     	[20, 'OpenZeppelin', 'openzeppelin-contracts', 2387],
     	[21, 'quii', 'learn-go-with-tests', 1075],
     	[22, 'XTLS', 'Xray-core', 165],
     	[23, 'chatwoot', 'chatwoot', 1083],
     	[24, 'jesse-ai', 'jesse', 817],
     	[25, 'microsoft', 'Bringing-Old-Photos-Back-to-Life', 71],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 awesome-compose', 163],
     	['#2 Docker-OSX', 255],
     	['#3 Ryujinx', 1597],
     	['#4 dogehouse', 3456],
     	['#5 authelia', 1748],
     	['#6 chia-blockchain', 4404],
     	['#7 spring-native', 1980],
     	['#8 educative.io_courses', 118],
     	['#9 d2l-zh', 3425],
     	['#10 nvcode', 663],
     	['#11 sherlock', 1505],
     	['#12 Python', 2246],
     	['#13 machine-learning-for-trading', 257],
     	['#14 openmct', 6765],
     	['#15 jdk', 63842],
     	['#16 CS-Notes', 3766],
     	['#17 discord.js', 4973],
     	['#18 bettercap', 1946],
     	['#19 net6-mobile-samples', 91],
     	['#20 openzeppelin-contracts', 2387],
     	['#21 learn-go-with-tests', 1075],
     	['#22 Xray-core', 165],
     	['#23 chatwoot', 1083],
     	['#24 jesse', 817],
     	['#25 Bringing-Old-Photos-Back-to-Life', 71],
     	
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