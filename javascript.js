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
     	[2, 'sickcodes', 'Docker-OSX', 254],
     	[3, 'benawad', 'dogehouse', 2985],
     	[4, 'Ryujinx', 'Ryujinx', 1583],
     	[5, 'sherlock-project', 'sherlock', 1505],
     	[6, 'authelia', 'authelia', 1728],
     	[7, 'spring-projects-experimental', 'spring-native', 1930],
     	[8, 'd2l-ai', 'd2l-zh', 3415],
     	[9, 'stefan-jansen', 'machine-learning-for-trading', 256],
     	[10, 'microsoft', 'Web-Dev-For-Beginners', 784],
     	[11, 'Chia-Network', 'chia-blockchain', 4367],
     	[12, 'dotnet', 'maui', 7245],
     	[13, 'flutter', 'flutter', 23333],
     	[14, 'geekcomputers', 'Python', 2240],
     	[15, 'nasa', 'openmct', 6763],
     	[16, 'ChristianChiarulli', 'nvcode', 632],
     	[17, 'Snailclimb', 'JavaGuide', 2961],
     	[18, 'openjdk', 'jdk', 63744],
     	[19, 'iperov', 'DeepFaceLab', 1154],
     	[20, 'pyroscope-io', 'pyroscope', 484],
     	[21, 'austintgriffith', 'scaffold-eth', 495],
     	[22, 'AliaksandrSiarohin', 'first-order-model', 71],
     	[23, 'microsoft', 'calculator', 649],
     	[24, 'zhangdaiscott', 'jeecg-boot', 473],
     	[25, 'facebook', 'react', 13997],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 awesome-compose', 160],
     	['#2 Docker-OSX', 254],
     	['#3 dogehouse', 2985],
     	['#4 Ryujinx', 1583],
     	['#5 sherlock', 1505],
     	['#6 authelia', 1728],
     	['#7 spring-native', 1930],
     	['#8 d2l-zh', 3415],
     	['#9 machine-learning-for-trading', 256],
     	['#10 Web-Dev-For-Beginners', 784],
     	['#11 chia-blockchain', 4367],
     	['#12 maui', 7245],
     	['#13 flutter', 23333],
     	['#14 Python', 2240],
     	['#15 openmct', 6763],
     	['#16 nvcode', 632],
     	['#17 JavaGuide', 2961],
     	['#18 jdk', 63744],
     	['#19 DeepFaceLab', 1154],
     	['#20 pyroscope', 484],
     	['#21 scaffold-eth', 495],
     	['#22 first-order-model', 71],
     	['#23 calculator', 649],
     	['#24 jeecg-boot', 473],
     	['#25 react', 13997],
     	
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