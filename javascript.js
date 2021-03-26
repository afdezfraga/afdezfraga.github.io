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
     	[2, 'alievk', 'avatarify-python', 351],
     	[3, 'benawad', 'dogehouse', 2708],
     	[4, 'jart', 'cosmopolitan', 250],
     	[5, 'sickcodes', 'Docker-OSX', 246],
     	[6, 'AliaksandrSiarohin', 'first-order-model', 71],
     	[7, 'android', 'compose-samples', 1069],
     	[8, 'Ryujinx', 'Ryujinx', 1575],
     	[9, 'spring-projects-experimental', 'spring-native', 1913],
     	[10, 'stefan-jansen', 'machine-learning-for-trading', 256],
     	[11, 'iperov', 'DeepFaceLab', 1152],
     	[12, 'dotnet', 'maui', 7237],
     	[13, 'orkestral', 'venom', 781],
     	[14, 'd2l-ai', 'd2l-zh', 3404],
     	[15, 'Snailclimb', 'JavaGuide', 2939],
     	[16, 'sherlock-project', 'sherlock', 1505],
     	[17, 'pyroscope-io', 'pyroscope', 477],
     	[18, 'flutter', 'flutter', 23280],
     	[19, 'pancakeswap', 'pancake-frontend', 683],
     	[20, 'nasa', 'openmct', 6757],
     	[21, 'lloesche', 'valheim-server-docker', 167],
     	[22, 'Chia-Network', 'chia-blockchain', 4338],
     	[23, 'zhangdaiscott', 'jeecg-boot', 471],
     	[24, 'github', 'codeql', 21347],
     	[25, 'austintgriffith', 'scaffold-eth', 494],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 awesome-compose', 160],
     	['#2 avatarify-python', 351],
     	['#3 dogehouse', 2708],
     	['#4 cosmopolitan', 250],
     	['#5 Docker-OSX', 246],
     	['#6 first-order-model', 71],
     	['#7 compose-samples', 1069],
     	['#8 Ryujinx', 1575],
     	['#9 spring-native', 1913],
     	['#10 machine-learning-for-trading', 256],
     	['#11 DeepFaceLab', 1152],
     	['#12 maui', 7237],
     	['#13 venom', 781],
     	['#14 d2l-zh', 3404],
     	['#15 JavaGuide', 2939],
     	['#16 sherlock', 1505],
     	['#17 pyroscope', 477],
     	['#18 flutter', 23280],
     	['#19 pancake-frontend', 683],
     	['#20 openmct', 6757],
     	['#21 valheim-server-docker', 167],
     	['#22 chia-blockchain', 4338],
     	['#23 jeecg-boot', 471],
     	['#24 codeql', 21347],
     	['#25 scaffold-eth', 494],
     	
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