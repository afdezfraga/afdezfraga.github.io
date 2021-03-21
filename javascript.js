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
     	[2, 'alievk', 'avatarify-python', 351],
     	[3, 'benawad', 'dogehouse', 2276],
     	[4, 'nasa', 'fprime', 3277],
     	[5, 'sickcodes', 'Docker-OSX', 236],
     	[6, 'stypr', 'clubhouse-py', 28],
     	[7, 'qeeqbox', 'social-analyzer', 440],
     	[8, 'android', 'compose-samples', 1043],
     	[9, 'AliaksandrSiarohin', 'first-order-model', 70],
     	[10, 'jart', 'cosmopolitan', 246],
     	[11, 'lloesche', 'valheim-server-docker', 155],
     	[12, 'dotnet', 'maui', 7206],
     	[13, 'Ryujinx', 'Ryujinx', 1570],
     	[14, 'zhangdaiscott', 'jeecg-boot', 464],
     	[15, 'tauri-apps', 'tauri', 987],
     	[16, 'Snailclimb', 'JavaGuide', 2923],
     	[17, 'dapr', 'dapr', 1629],
     	[18, 'iperov', 'DeepFaceLab', 1145],
     	[19, 'spring-projects-experimental', 'spring-native', 1884],
     	[20, 'edeng23', 'binance-trade-bot', 193],
     	[21, 'orkestral', 'venom', 781],
     	[22, 'pancakeswap', 'pancake-frontend', 647],
     	[23, 'Immediate-Mode-UI', 'Nuklear', 1864],
     	[24, 'MostlyAdequate', 'mostly-adequate-guide', 846],
     	[25, 'sherlock-project', 'sherlock', 1505],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 awesome-compose', 158],
     	['#2 avatarify-python', 351],
     	['#3 dogehouse', 2276],
     	['#4 fprime', 3277],
     	['#5 Docker-OSX', 236],
     	['#6 clubhouse-py', 28],
     	['#7 social-analyzer', 440],
     	['#8 compose-samples', 1043],
     	['#9 first-order-model', 70],
     	['#10 cosmopolitan', 246],
     	['#11 valheim-server-docker', 155],
     	['#12 maui', 7206],
     	['#13 Ryujinx', 1570],
     	['#14 jeecg-boot', 464],
     	['#15 tauri', 987],
     	['#16 JavaGuide', 2923],
     	['#17 dapr', 1629],
     	['#18 DeepFaceLab', 1145],
     	['#19 spring-native', 1884],
     	['#20 binance-trade-bot', 193],
     	['#21 venom', 781],
     	['#22 pancake-frontend', 647],
     	['#23 Nuklear', 1864],
     	['#24 mostly-adequate-guide', 846],
     	['#25 sherlock', 1505],
     	
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