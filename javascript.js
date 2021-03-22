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
	[1, 'docker', 'awesome-compose', 158],
     	[2, 'grishka', 'Houseclub', 47],
     	[3, 'alievk', 'avatarify-python', 351],
     	[4, 'benawad', 'dogehouse', 2388],
     	[5, 'sickcodes', 'Docker-OSX', 240],
     	[6, 'qeeqbox', 'social-analyzer', 445],
     	[7, 'android', 'compose-samples', 1043],
     	[8, 'AliaksandrSiarohin', 'first-order-model', 70],
     	[9, 'jart', 'cosmopolitan', 249],
     	[10, 'dotnet', 'maui', 7206],
     	[11, 'Ryujinx', 'Ryujinx', 1570],
     	[12, 'lloesche', 'valheim-server-docker', 156],
     	[13, 'iperov', 'DeepFaceLab', 1145],
     	[14, 'stypr', 'clubhouse-py', 28],
     	[15, 'spring-projects-experimental', 'spring-native', 1885],
     	[16, 'zhangdaiscott', 'jeecg-boot', 464],
     	[17, 'pyroscope-io', 'pyroscope', 477],
     	[18, 'Snailclimb', 'JavaGuide', 2923],
     	[19, 'nasa', 'fprime', 3277],
     	[20, 'orkestral', 'venom', 781],
     	[21, 'dapr', 'dapr', 1629],
     	[22, 'Immediate-Mode-UI', 'Nuklear', 1864],
     	[23, 'd2l-ai', 'd2l-zh', 3400],
     	[24, 'pancakeswap', 'pancake-frontend', 647],
     	[25, 'edeng23', 'binance-trade-bot', 195],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 awesome-compose', 158],
     	['#2 Houseclub', 47],
     	['#3 avatarify-python', 351],
     	['#4 dogehouse', 2388],
     	['#5 Docker-OSX', 240],
     	['#6 social-analyzer', 445],
     	['#7 compose-samples', 1043],
     	['#8 first-order-model', 70],
     	['#9 cosmopolitan', 249],
     	['#10 maui', 7206],
     	['#11 Ryujinx', 1570],
     	['#12 valheim-server-docker', 156],
     	['#13 DeepFaceLab', 1145],
     	['#14 clubhouse-py', 28],
     	['#15 spring-native', 1885],
     	['#16 jeecg-boot', 464],
     	['#17 pyroscope', 477],
     	['#18 JavaGuide', 2923],
     	['#19 fprime', 3277],
     	['#20 venom', 781],
     	['#21 dapr', 1629],
     	['#22 Nuklear', 1864],
     	['#23 d2l-zh', 3400],
     	['#24 pancake-frontend', 647],
     	['#25 binance-trade-bot', 195],
     	
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