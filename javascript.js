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
     	[2, 'sickcodes', 'Docker-OSX', 261],
     	[3, 'Ryujinx', 'Ryujinx', 1598],
     	[4, 'benawad', 'dogehouse', 3514],
     	[5, 'spring-projects-experimental', 'spring-native', 1988],
     	[6, 'Chia-Network', 'chia-blockchain', 4409],
     	[7, 'uutils', 'coreutils', 4134],
     	[8, 'merry75', 'educative.io_courses', 118],
     	[9, 'ChristianChiarulli', 'nvcode', 664],
     	[10, 'authelia', 'authelia', 1749],
     	[11, 'd2l-ai', 'd2l-zh', 3425],
     	[12, 'geekcomputers', 'Python', 2246],
     	[13, 'stefan-jansen', 'machine-learning-for-trading', 257],
     	[14, 'nasa', 'openmct', 6766],
     	[15, 'discordjs', 'discord.js', 4973],
     	[16, 'openjdk', 'jdk', 63857],
     	[17, 'chatwoot', 'chatwoot', 1088],
     	[18, 'CyC2018', 'CS-Notes', 3766],
     	[19, 'dotnet', 'net6-mobile-samples', 93],
     	[20, 'bettercap', 'bettercap', 1953],
     	[21, 'quii', 'learn-go-with-tests', 1075],
     	[22, 'XTLS', 'Xray-core', 165],
     	[23, 'jesse-ai', 'jesse', 817],
     	[24, 'sherlock-project', 'sherlock', 1505],
     	[25, 'OpenZeppelin', 'openzeppelin-contracts', 2387],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 awesome-compose', 163],
     	['#2 Docker-OSX', 261],
     	['#3 Ryujinx', 1598],
     	['#4 dogehouse', 3514],
     	['#5 spring-native', 1988],
     	['#6 chia-blockchain', 4409],
     	['#7 coreutils', 4134],
     	['#8 educative.io_courses', 118],
     	['#9 nvcode', 664],
     	['#10 authelia', 1749],
     	['#11 d2l-zh', 3425],
     	['#12 Python', 2246],
     	['#13 machine-learning-for-trading', 257],
     	['#14 openmct', 6766],
     	['#15 discord.js', 4973],
     	['#16 jdk', 63857],
     	['#17 chatwoot', 1088],
     	['#18 CS-Notes', 3766],
     	['#19 net6-mobile-samples', 93],
     	['#20 bettercap', 1953],
     	['#21 learn-go-with-tests', 1075],
     	['#22 Xray-core', 165],
     	['#23 jesse', 817],
     	['#24 sherlock', 1505],
     	['#25 openzeppelin-contracts', 2387],
     	
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