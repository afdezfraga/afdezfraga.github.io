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
     	[3, 'sherlock-project', 'sherlock', 1505],
     	[4, 'benawad', 'dogehouse', 3284],
     	[5, 'Ryujinx', 'Ryujinx', 1593],
     	[6, 'dolthub', 'dolt', 8758],
     	[7, 'spring-projects-experimental', 'spring-native', 1961],
     	[8, 'Chia-Network', 'chia-blockchain', 4385],
     	[9, 'd2l-ai', 'd2l-zh', 3421],
     	[10, 'dwisiswant0', 'apkleaks', 136],
     	[11, 'geekcomputers', 'Python', 2242],
     	[12, 'ChristianChiarulli', 'nvcode', 656],
     	[13, 'merry75', 'educative.io_courses', 118],
     	[14, 'stefan-jansen', 'machine-learning-for-trading', 256],
     	[15, 'nasa', 'openmct', 6764],
     	[16, 'openjdk', 'jdk', 63800],
     	[17, 'CyC2018', 'CS-Notes', 3766],
     	[18, 'bettercap', 'bettercap', 1938],
     	[19, 'OpenZeppelin', 'openzeppelin-contracts', 2383],
     	[20, 'quii', 'learn-go-with-tests', 1075],
     	[21, 'WZMIAOMIAO', 'deep-learning-for-image-processing', 598],
     	[22, 'crystal-lang', 'crystal', 13074],
     	[23, 'gskinnerTeam', 'flutter-folio', 42],
     	[24, 'discordjs', 'discord.js', 4970],
     	[25, 'XTLS', 'Xray-core', 164],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 awesome-compose', 160],
     	['#2 Docker-OSX', 255],
     	['#3 sherlock', 1505],
     	['#4 dogehouse', 3284],
     	['#5 Ryujinx', 1593],
     	['#6 dolt', 8758],
     	['#7 spring-native', 1961],
     	['#8 chia-blockchain', 4385],
     	['#9 d2l-zh', 3421],
     	['#10 apkleaks', 136],
     	['#11 Python', 2242],
     	['#12 nvcode', 656],
     	['#13 educative.io_courses', 118],
     	['#14 machine-learning-for-trading', 256],
     	['#15 openmct', 6764],
     	['#16 jdk', 63800],
     	['#17 CS-Notes', 3766],
     	['#18 bettercap', 1938],
     	['#19 openzeppelin-contracts', 2383],
     	['#20 learn-go-with-tests', 1075],
     	['#21 deep-learning-for-image-processing', 598],
     	['#22 crystal', 13074],
     	['#23 flutter-folio', 42],
     	['#24 discord.js', 4970],
     	['#25 Xray-core', 164],
     	
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