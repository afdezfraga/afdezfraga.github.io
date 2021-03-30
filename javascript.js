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
     	[3, 'benawad', 'dogehouse', 2935],
     	[4, 'Ryujinx', 'Ryujinx', 1583],
     	[5, 'authelia', 'authelia', 1725],
     	[6, 'sherlock-project', 'sherlock', 1505],
     	[7, 'spring-projects-experimental', 'spring-native', 1928],
     	[8, 'd2l-ai', 'd2l-zh', 3415],
     	[9, 'Chia-Network', 'chia-blockchain', 4354],
     	[10, 'microsoft', 'Web-Dev-For-Beginners', 783],
     	[11, 'dotnet', 'maui', 7243],
     	[12, 'stefan-jansen', 'machine-learning-for-trading', 256],
     	[13, 'alievk', 'avatarify-python', 351],
     	[14, 'AliaksandrSiarohin', 'first-order-model', 71],
     	[15, 'flutter', 'flutter', 23296],
     	[16, 'iperov', 'DeepFaceLab', 1154],
     	[17, 'geekcomputers', 'Python', 2240],
     	[18, 'nasa', 'openmct', 6763],
     	[19, 'pyroscope-io', 'pyroscope', 481],
     	[20, 'Snailclimb', 'JavaGuide', 2961],
     	[21, 'coding-horror', 'basic-computer-games', 698],
     	[22, 'ChristianChiarulli', 'nvcode', 621],
     	[23, 'austintgriffith', 'scaffold-eth', 495],
     	[24, 'zhangdaiscott', 'jeecg-boot', 473],
     	[25, 'CyC2018', 'CS-Notes', 3766],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 awesome-compose', 160],
     	['#2 Docker-OSX', 254],
     	['#3 dogehouse', 2935],
     	['#4 Ryujinx', 1583],
     	['#5 authelia', 1725],
     	['#6 sherlock', 1505],
     	['#7 spring-native', 1928],
     	['#8 d2l-zh', 3415],
     	['#9 chia-blockchain', 4354],
     	['#10 Web-Dev-For-Beginners', 783],
     	['#11 maui', 7243],
     	['#12 machine-learning-for-trading', 256],
     	['#13 avatarify-python', 351],
     	['#14 first-order-model', 71],
     	['#15 flutter', 23296],
     	['#16 DeepFaceLab', 1154],
     	['#17 Python', 2240],
     	['#18 openmct', 6763],
     	['#19 pyroscope', 481],
     	['#20 JavaGuide', 2961],
     	['#21 basic-computer-games', 698],
     	['#22 nvcode', 621],
     	['#23 scaffold-eth', 495],
     	['#24 jeecg-boot', 473],
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