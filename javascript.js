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
     	[3, 'benawad', 'dogehouse', 2106],
     	[4, 'sickcodes', 'Docker-OSX', 236],
     	[5, 'android', 'compose-samples', 1043],
     	[6, 'qeeqbox', 'social-analyzer', 440],
     	[7, 'authelia', 'authelia', 1706],
     	[8, 'jart', 'cosmopolitan', 246],
     	[9, 'edeng23', 'binance-trade-bot', 193],
     	[10, 'AliaksandrSiarohin', 'first-order-model', 70],
     	[11, 'tauri-apps', 'tauri', 987],
     	[12, 'lloesche', 'valheim-server-docker', 149],
     	[13, 'dapr', 'dapr', 1629],
     	[14, 'dotnet', 'maui', 7206],
     	[15, 'zhangdaiscott', 'jeecg-boot', 464],
     	[16, 'Snailclimb', 'JavaGuide', 2923],
     	[17, 'Ryujinx', 'Ryujinx', 1568],
     	[18, 'iperov', 'DeepFaceLab', 1145],
     	[19, 'pancakeswap', 'pancake-frontend', 646],
     	[20, 'orkestral', 'venom', 761],
     	[21, 'spring-projects-experimental', 'spring-native', 1884],
     	[22, 'MostlyAdequate', 'mostly-adequate-guide', 846],
     	[23, 'Immediate-Mode-UI', 'Nuklear', 1864],
     	[24, 'vitejs', 'vite', 2291],
     	[25, 'jdah', 'minecraft-weekend', 65],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 awesome-compose', 158],
     	['#2 avatarify-python', 351],
     	['#3 dogehouse', 2106],
     	['#4 Docker-OSX', 236],
     	['#5 compose-samples', 1043],
     	['#6 social-analyzer', 440],
     	['#7 authelia', 1706],
     	['#8 cosmopolitan', 246],
     	['#9 binance-trade-bot', 193],
     	['#10 first-order-model', 70],
     	['#11 tauri', 987],
     	['#12 valheim-server-docker', 149],
     	['#13 dapr', 1629],
     	['#14 maui', 7206],
     	['#15 jeecg-boot', 464],
     	['#16 JavaGuide', 2923],
     	['#17 Ryujinx', 1568],
     	['#18 DeepFaceLab', 1145],
     	['#19 pancake-frontend', 646],
     	['#20 venom', 761],
     	['#21 spring-native', 1884],
     	['#22 mostly-adequate-guide', 846],
     	['#23 Nuklear', 1864],
     	['#24 vite', 2291],
     	['#25 minecraft-weekend', 65],
     	
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