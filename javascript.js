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
     	[3, 'Ryujinx', 'Ryujinx', 1591],
     	[4, 'benawad', 'dogehouse', 3179],
     	[5, 'sherlock-project', 'sherlock', 1505],
     	[6, 'gskinnerTeam', 'flutter-folio', 42],
     	[7, 'spring-projects-experimental', 'spring-native', 1960],
     	[8, 'Chia-Network', 'chia-blockchain', 4382],
     	[9, 'd2l-ai', 'd2l-zh', 3420],
     	[10, 'geekcomputers', 'Python', 2242],
     	[11, 'ChristianChiarulli', 'nvcode', 648],
     	[12, 'stefan-jansen', 'machine-learning-for-trading', 256],
     	[13, 'flutter', 'flutter', 23428],
     	[14, 'nasa', 'openmct', 6764],
     	[15, 'openjdk', 'jdk', 63795],
     	[16, 'Snailclimb', 'JavaGuide', 2971],
     	[17, 'CyC2018', 'CS-Notes', 3766],
     	[18, 'merry75', 'educative.io_courses', 118],
     	[19, 'dotnet', 'maui', 7254],
     	[20, 'chatwoot', 'chatwoot', 1076],
     	[21, 'flutter', 'samples', 560],
     	[22, 'OpenZeppelin', 'openzeppelin-contracts', 2383],
     	[23, 'getzola', 'zola', 1515],
     	[24, 'microsoft', 'Web-Dev-For-Beginners', 800],
     	[25, 'WZMIAOMIAO', 'deep-learning-for-image-processing', 595],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 awesome-compose', 160],
     	['#2 Docker-OSX', 255],
     	['#3 Ryujinx', 1591],
     	['#4 dogehouse', 3179],
     	['#5 sherlock', 1505],
     	['#6 flutter-folio', 42],
     	['#7 spring-native', 1960],
     	['#8 chia-blockchain', 4382],
     	['#9 d2l-zh', 3420],
     	['#10 Python', 2242],
     	['#11 nvcode', 648],
     	['#12 machine-learning-for-trading', 256],
     	['#13 flutter', 23428],
     	['#14 openmct', 6764],
     	['#15 jdk', 63795],
     	['#16 JavaGuide', 2971],
     	['#17 CS-Notes', 3766],
     	['#18 educative.io_courses', 118],
     	['#19 maui', 7254],
     	['#20 chatwoot', 1076],
     	['#21 samples', 560],
     	['#22 openzeppelin-contracts', 2383],
     	['#23 zola', 1515],
     	['#24 Web-Dev-For-Beginners', 800],
     	['#25 deep-learning-for-image-processing', 595],
     	
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