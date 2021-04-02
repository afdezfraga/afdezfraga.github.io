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
     	[3, 'Ryujinx', 'Ryujinx', 1583],
     	[4, 'benawad', 'dogehouse', 3052],
     	[5, 'sherlock-project', 'sherlock', 1505],
     	[6, 'd2l-ai', 'd2l-zh', 3420],
     	[7, 'spring-projects-experimental', 'spring-native', 1950],
     	[8, 'Chia-Network', 'chia-blockchain', 4370],
     	[9, 'flutter', 'flutter', 23398],
     	[10, 'geekcomputers', 'Python', 2240],
     	[11, 'ChristianChiarulli', 'nvcode', 641],
     	[12, 'stefan-jansen', 'machine-learning-for-trading', 256],
     	[13, 'nasa', 'openmct', 6764],
     	[14, 'microsoft', 'Web-Dev-For-Beginners', 800],
     	[15, 'dotnet', 'maui', 7253],
     	[16, 'Snailclimb', 'JavaGuide', 2964],
     	[17, 'openjdk', 'jdk', 63780],
     	[18, 'chatwoot', 'chatwoot', 1074],
     	[19, 'flutter', 'samples', 560],
     	[20, 'austintgriffith', 'scaffold-eth', 499],
     	[21, 'facebook', 'react', 14010],
     	[22, 'WZMIAOMIAO', 'deep-learning-for-image-processing', 595],
     	[23, 'getzola', 'zola', 1515],
     	[24, 'OpenZeppelin', 'openzeppelin-contracts', 2383],
     	[25, 'CyC2018', 'CS-Notes', 3766],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 awesome-compose', 160],
     	['#2 Docker-OSX', 255],
     	['#3 Ryujinx', 1583],
     	['#4 dogehouse', 3052],
     	['#5 sherlock', 1505],
     	['#6 d2l-zh', 3420],
     	['#7 spring-native', 1950],
     	['#8 chia-blockchain', 4370],
     	['#9 flutter', 23398],
     	['#10 Python', 2240],
     	['#11 nvcode', 641],
     	['#12 machine-learning-for-trading', 256],
     	['#13 openmct', 6764],
     	['#14 Web-Dev-For-Beginners', 800],
     	['#15 maui', 7253],
     	['#16 JavaGuide', 2964],
     	['#17 jdk', 63780],
     	['#18 chatwoot', 1074],
     	['#19 samples', 560],
     	['#20 scaffold-eth', 499],
     	['#21 react', 14010],
     	['#22 deep-learning-for-image-processing', 595],
     	['#23 zola', 1515],
     	['#24 openzeppelin-contracts', 2383],
     	['#25 CS-Notes', 3766],
     	
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