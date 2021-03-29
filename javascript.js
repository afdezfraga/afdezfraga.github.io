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
     	[3, 'benawad', 'dogehouse', 2898],
     	[4, 'Ryujinx', 'Ryujinx', 1580],
     	[5, 'alievk', 'avatarify-python', 351],
     	[6, 'coding-horror', 'basic-computer-games', 698],
     	[7, 'sherlock-project', 'sherlock', 1505],
     	[8, 'spring-projects-experimental', 'spring-native', 1922],
     	[9, 'iperov', 'DeepFaceLab', 1153],
     	[10, 'd2l-ai', 'd2l-zh', 3409],
     	[11, 'AliaksandrSiarohin', 'first-order-model', 71],
     	[12, 'microsoft', 'Web-Dev-For-Beginners', 783],
     	[13, 'dotnet', 'maui', 7242],
     	[14, 'Chia-Network', 'chia-blockchain', 4347],
     	[15, 'stefan-jansen', 'machine-learning-for-trading', 256],
     	[16, 'flutter', 'flutter', 23289],
     	[17, 'pyroscope-io', 'pyroscope', 478],
     	[18, 'nasa', 'openmct', 6759],
     	[19, 'geekcomputers', 'Python', 2240],
     	[20, 'Snailclimb', 'JavaGuide', 2957],
     	[21, 'jart', 'cosmopolitan', 255],
     	[22, 'zhangdaiscott', 'jeecg-boot', 473],
     	[23, 'pancakeswap', 'pancake-frontend', 687],
     	[24, 'austintgriffith', 'scaffold-eth', 495],
     	[25, 'ChristianChiarulli', 'nvcode', 605],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 awesome-compose', 160],
     	['#2 Docker-OSX', 254],
     	['#3 dogehouse', 2898],
     	['#4 Ryujinx', 1580],
     	['#5 avatarify-python', 351],
     	['#6 basic-computer-games', 698],
     	['#7 sherlock', 1505],
     	['#8 spring-native', 1922],
     	['#9 DeepFaceLab', 1153],
     	['#10 d2l-zh', 3409],
     	['#11 first-order-model', 71],
     	['#12 Web-Dev-For-Beginners', 783],
     	['#13 maui', 7242],
     	['#14 chia-blockchain', 4347],
     	['#15 machine-learning-for-trading', 256],
     	['#16 flutter', 23289],
     	['#17 pyroscope', 478],
     	['#18 openmct', 6759],
     	['#19 Python', 2240],
     	['#20 JavaGuide', 2957],
     	['#21 cosmopolitan', 255],
     	['#22 jeecg-boot', 473],
     	['#23 pancake-frontend', 687],
     	['#24 scaffold-eth', 495],
     	['#25 nvcode', 605],
     	
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