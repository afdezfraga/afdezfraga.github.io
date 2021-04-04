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
     	[4, 'Ryujinx', 'Ryujinx', 1592],
     	[5, 'benawad', 'dogehouse', 3217],
     	[6, 'authelia', 'authelia', 1740],
     	[7, 'spring-projects-experimental', 'spring-native', 1961],
     	[8, 'd2l-ai', 'd2l-zh', 3420],
     	[9, 'Chia-Network', 'chia-blockchain', 4384],
     	[10, 'geekcomputers', 'Python', 2242],
     	[11, 'stefan-jansen', 'machine-learning-for-trading', 256],
     	[12, 'gskinnerTeam', 'flutter-folio', 42],
     	[13, 'ChristianChiarulli', 'nvcode', 653],
     	[14, 'merry75', 'educative.io_courses', 118],
     	[15, 'nasa', 'openmct', 6764],
     	[16, 'openjdk', 'jdk', 63798],
     	[17, 'CyC2018', 'CS-Notes', 3766],
     	[18, 'chatwoot', 'chatwoot', 1076],
     	[19, 'dotnet', 'net6-mobile-samples', 91],
     	[20, 'OpenZeppelin', 'openzeppelin-contracts', 2383],
     	[21, 'XTLS', 'Xray-core', 163],
     	[22, 'WZMIAOMIAO', 'deep-learning-for-image-processing', 595],
     	[23, 'flutter', 'flutter', 23439],
     	[24, 'quii', 'learn-go-with-tests', 1075],
     	[25, 'bettercap', 'bettercap', 1933],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 awesome-compose', 160],
     	['#2 Docker-OSX', 255],
     	['#3 sherlock', 1505],
     	['#4 Ryujinx', 1592],
     	['#5 dogehouse', 3217],
     	['#6 authelia', 1740],
     	['#7 spring-native', 1961],
     	['#8 d2l-zh', 3420],
     	['#9 chia-blockchain', 4384],
     	['#10 Python', 2242],
     	['#11 machine-learning-for-trading', 256],
     	['#12 flutter-folio', 42],
     	['#13 nvcode', 653],
     	['#14 educative.io_courses', 118],
     	['#15 openmct', 6764],
     	['#16 jdk', 63798],
     	['#17 CS-Notes', 3766],
     	['#18 chatwoot', 1076],
     	['#19 net6-mobile-samples', 91],
     	['#20 openzeppelin-contracts', 2383],
     	['#21 Xray-core', 163],
     	['#22 deep-learning-for-image-processing', 595],
     	['#23 flutter', 23439],
     	['#24 learn-go-with-tests', 1075],
     	['#25 bettercap', 1933],
     	
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