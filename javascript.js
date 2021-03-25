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
     	[3, 'benawad', 'dogehouse', 2629],
     	[4, 'sickcodes', 'Docker-OSX', 245],
     	[5, 'jart', 'cosmopolitan', 249],
     	[6, 'authelia', 'authelia', 1710],
     	[7, 'android', 'compose-samples', 1067],
     	[8, 'AliaksandrSiarohin', 'first-order-model', 71],
     	[9, 'spring-projects-experimental', 'spring-native', 1911],
     	[10, 'iperov', 'DeepFaceLab', 1152],
     	[11, 'Ryujinx', 'Ryujinx', 1572],
     	[12, 'dotnet', 'maui', 7231],
     	[13, 'orkestral', 'venom', 781],
     	[14, 'stefan-jansen', 'machine-learning-for-trading', 256],
     	[15, 'd2l-ai', 'd2l-zh', 3404],
     	[16, 'pyroscope-io', 'pyroscope', 477],
     	[17, 'Snailclimb', 'JavaGuide', 2933],
     	[18, 'grishka', 'Houseclub', 47],
     	[19, 'sherlock-project', 'sherlock', 1505],
     	[20, 'lloesche', 'valheim-server-docker', 166],
     	[21, 'pancakeswap', 'pancake-frontend', 674],
     	[22, 'github', 'codeql', 21280],
     	[23, 'flutter', 'flutter', 23254],
     	[24, 'zhangdaiscott', 'jeecg-boot', 471],
     	[25, 'nasa', 'openmct', 6757],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 awesome-compose', 160],
     	['#2 avatarify-python', 351],
     	['#3 dogehouse', 2629],
     	['#4 Docker-OSX', 245],
     	['#5 cosmopolitan', 249],
     	['#6 authelia', 1710],
     	['#7 compose-samples', 1067],
     	['#8 first-order-model', 71],
     	['#9 spring-native', 1911],
     	['#10 DeepFaceLab', 1152],
     	['#11 Ryujinx', 1572],
     	['#12 maui', 7231],
     	['#13 venom', 781],
     	['#14 machine-learning-for-trading', 256],
     	['#15 d2l-zh', 3404],
     	['#16 pyroscope', 477],
     	['#17 JavaGuide', 2933],
     	['#18 Houseclub', 47],
     	['#19 sherlock', 1505],
     	['#20 valheim-server-docker', 166],
     	['#21 pancake-frontend', 674],
     	['#22 codeql', 21280],
     	['#23 flutter', 23254],
     	['#24 jeecg-boot', 471],
     	['#25 openmct', 6757],
     	
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