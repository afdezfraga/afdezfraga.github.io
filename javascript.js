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
     	[3, 'benawad', 'dogehouse', 3023],
     	[4, 'Ryujinx', 'Ryujinx', 1583],
     	[5, 'sherlock-project', 'sherlock', 1505],
     	[6, 'authelia', 'authelia', 1731],
     	[7, 'spring-projects-experimental', 'spring-native', 1938],
     	[8, 'd2l-ai', 'd2l-zh', 3416],
     	[9, 'Chia-Network', 'chia-blockchain', 4370],
     	[10, 'flutter', 'flutter', 23364],
     	[11, 'dotnet', 'maui', 7251],
     	[12, 'microsoft', 'Web-Dev-For-Beginners', 798],
     	[13, 'stefan-jansen', 'machine-learning-for-trading', 256],
     	[14, 'geekcomputers', 'Python', 2240],
     	[15, 'PaddlePaddle', 'PaddleGAN', 270],
     	[16, 'nasa', 'openmct', 6764],
     	[17, 'ChristianChiarulli', 'nvcode', 635],
     	[18, 'Snailclimb', 'JavaGuide', 2961],
     	[19, 'openjdk', 'jdk', 63760],
     	[20, 'austintgriffith', 'scaffold-eth', 495],
     	[21, 'facebook', 'react', 14002],
     	[22, 'quii', 'learn-go-with-tests', 1075],
     	[23, 'pyroscope-io', 'pyroscope', 488],
     	[24, 'pancakeswap', 'pancake-frontend', 699],
     	[25, 'WZMIAOMIAO', 'deep-learning-for-image-processing', 595],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 awesome-compose', 160],
     	['#2 Docker-OSX', 255],
     	['#3 dogehouse', 3023],
     	['#4 Ryujinx', 1583],
     	['#5 sherlock', 1505],
     	['#6 authelia', 1731],
     	['#7 spring-native', 1938],
     	['#8 d2l-zh', 3416],
     	['#9 chia-blockchain', 4370],
     	['#10 flutter', 23364],
     	['#11 maui', 7251],
     	['#12 Web-Dev-For-Beginners', 798],
     	['#13 machine-learning-for-trading', 256],
     	['#14 Python', 2240],
     	['#15 PaddleGAN', 270],
     	['#16 openmct', 6764],
     	['#17 nvcode', 635],
     	['#18 JavaGuide', 2961],
     	['#19 jdk', 63760],
     	['#20 scaffold-eth', 495],
     	['#21 react', 14002],
     	['#22 learn-go-with-tests', 1075],
     	['#23 pyroscope', 488],
     	['#24 pancake-frontend', 699],
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