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
     	[4, 'benawad', 'dogehouse', 3594],
     	[5, 'Chia-Network', 'chia-blockchain', 4418],
     	[6, 'spring-projects-experimental', 'spring-native', 1993],
     	[7, 'merry75', 'educative.io_courses', 118],
     	[8, 'ChristianChiarulli', 'nvcode', 667],
     	[9, 'geekcomputers', 'Python', 2246],
     	[10, 'discordjs', 'discord.js', 4973],
     	[11, 'nasa', 'openmct', 6767],
     	[12, 'chatwoot', 'chatwoot', 1089],
     	[13, 'stefan-jansen', 'machine-learning-for-trading', 261],
     	[14, 'oppia', 'oppia', 12732],
     	[15, 'openjdk', 'jdk', 63880],
     	[16, 'uutils', 'coreutils', 4135],
     	[17, 'd2l-ai', 'd2l-zh', 3426],
     	[18, 'CyC2018', 'CS-Notes', 3766],
     	[19, 'quii', 'learn-go-with-tests', 1075],
     	[20, 'bettercap', 'bettercap', 1958],
     	[21, 'authelia', 'authelia', 1749],
     	[22, 'jesse-ai', 'jesse', 822],
     	[23, 'XTLS', 'Xray-core', 165],
     	[24, 'OpenZeppelin', 'openzeppelin-contracts', 2390],
     	[25, 'dotnet', 'net6-mobile-samples', 93],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 awesome-compose', 163],
     	['#2 Docker-OSX', 261],
     	['#3 Ryujinx', 1598],
     	['#4 dogehouse', 3594],
     	['#5 chia-blockchain', 4418],
     	['#6 spring-native', 1993],
     	['#7 educative.io_courses', 118],
     	['#8 nvcode', 667],
     	['#9 Python', 2246],
     	['#10 discord.js', 4973],
     	['#11 openmct', 6767],
     	['#12 chatwoot', 1089],
     	['#13 machine-learning-for-trading', 261],
     	['#14 oppia', 12732],
     	['#15 jdk', 63880],
     	['#16 coreutils', 4135],
     	['#17 d2l-zh', 3426],
     	['#18 CS-Notes', 3766],
     	['#19 learn-go-with-tests', 1075],
     	['#20 bettercap', 1958],
     	['#21 authelia', 1749],
     	['#22 jesse', 822],
     	['#23 Xray-core', 165],
     	['#24 openzeppelin-contracts', 2390],
     	['#25 net6-mobile-samples', 93],
     	
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