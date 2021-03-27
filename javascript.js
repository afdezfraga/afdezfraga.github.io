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
     	[2, 'benawad', 'dogehouse', 2748],
     	[3, 'alievk', 'avatarify-python', 351],
     	[4, 'sickcodes', 'Docker-OSX', 250],
     	[5, 'jart', 'cosmopolitan', 250],
     	[6, 'AliaksandrSiarohin', 'first-order-model', 71],
     	[7, 'Ryujinx', 'Ryujinx', 1576],
     	[8, 'openai', 'DALL-E', 2],
     	[9, 'iperov', 'DeepFaceLab', 1152],
     	[10, 'spring-projects-experimental', 'spring-native', 1921],
     	[11, 'stefan-jansen', 'machine-learning-for-trading', 256],
     	[12, 'android', 'compose-samples', 1069],
     	[13, 'dotnet', 'maui', 7241],
     	[14, 'sherlock-project', 'sherlock', 1505],
     	[15, 'd2l-ai', 'd2l-zh', 3408],
     	[16, 'DidierRLopes', 'GamestonkTerminal', 992],
     	[17, 'Snailclimb', 'JavaGuide', 2941],
     	[18, 'flutter', 'flutter', 23283],
     	[19, 'pyroscope-io', 'pyroscope', 477],
     	[20, 'Chia-Network', 'chia-blockchain', 4345],
     	[21, 'nasa', 'openmct', 6759],
     	[22, 'github', 'codeql', 21419],
     	[23, 'orkestral', 'venom', 781],
     	[24, 'pancakeswap', 'pancake-frontend', 687],
     	[25, 'microsoft', 'Web-Dev-For-Beginners', 783],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 awesome-compose', 160],
     	['#2 dogehouse', 2748],
     	['#3 avatarify-python', 351],
     	['#4 Docker-OSX', 250],
     	['#5 cosmopolitan', 250],
     	['#6 first-order-model', 71],
     	['#7 Ryujinx', 1576],
     	['#8 DALL-E', 2],
     	['#9 DeepFaceLab', 1152],
     	['#10 spring-native', 1921],
     	['#11 machine-learning-for-trading', 256],
     	['#12 compose-samples', 1069],
     	['#13 maui', 7241],
     	['#14 sherlock', 1505],
     	['#15 d2l-zh', 3408],
     	['#16 GamestonkTerminal', 992],
     	['#17 JavaGuide', 2941],
     	['#18 flutter', 23283],
     	['#19 pyroscope', 477],
     	['#20 chia-blockchain', 4345],
     	['#21 openmct', 6759],
     	['#22 codeql', 21419],
     	['#23 venom', 781],
     	['#24 pancake-frontend', 687],
     	['#25 Web-Dev-For-Beginners', 783],
     	
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