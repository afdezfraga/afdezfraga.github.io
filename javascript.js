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
     	[3, 'benawad', 'dogehouse', 2502],
     	[4, 'sickcodes', 'Docker-OSX', 240],
     	[5, 'grishka', 'Houseclub', 47],
     	[6, 'android', 'compose-samples', 1058],
     	[7, 'AliaksandrSiarohin', 'first-order-model', 70],
     	[8, 'authelia', 'authelia', 1707],
     	[9, 'jart', 'cosmopolitan', 249],
     	[10, 'dotnet', 'maui', 7214],
     	[11, 'Ryujinx', 'Ryujinx', 1571],
     	[12, 'iperov', 'DeepFaceLab', 1145],
     	[13, 'lloesche', 'valheim-server-docker', 162],
     	[14, 'orkestral', 'venom', 781],
     	[15, 'spring-projects-experimental', 'spring-native', 1902],
     	[16, 'd2l-ai', 'd2l-zh', 3400],
     	[17, 'pyroscope-io', 'pyroscope', 477],
     	[18, 'Snailclimb', 'JavaGuide', 2933],
     	[19, 'zhangdaiscott', 'jeecg-boot', 464],
     	[20, 'pancakeswap', 'pancake-frontend', 659],
     	[21, 'flutter', 'flutter', 23196],
     	[22, 'sherlock-project', 'sherlock', 1505],
     	[23, 'github', 'codeql', 21104],
     	[24, 'nasa', 'openmct', 6757],
     	[25, 'input-output-hk', 'cardano-node', 4087],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 awesome-compose', 160],
     	['#2 avatarify-python', 351],
     	['#3 dogehouse', 2502],
     	['#4 Docker-OSX', 240],
     	['#5 Houseclub', 47],
     	['#6 compose-samples', 1058],
     	['#7 first-order-model', 70],
     	['#8 authelia', 1707],
     	['#9 cosmopolitan', 249],
     	['#10 maui', 7214],
     	['#11 Ryujinx', 1571],
     	['#12 DeepFaceLab', 1145],
     	['#13 valheim-server-docker', 162],
     	['#14 venom', 781],
     	['#15 spring-native', 1902],
     	['#16 d2l-zh', 3400],
     	['#17 pyroscope', 477],
     	['#18 JavaGuide', 2933],
     	['#19 jeecg-boot', 464],
     	['#20 pancake-frontend', 659],
     	['#21 flutter', 23196],
     	['#22 sherlock', 1505],
     	['#23 codeql', 21104],
     	['#24 openmct', 6757],
     	['#25 cardano-node', 4087],
     	
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