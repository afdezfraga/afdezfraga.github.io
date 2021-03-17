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
	[1, 'alievk', 'avatarify-python', 351],
     	[2, 'edeng23', 'binance-trade-bot', 193],
     	[3, 'benawad', 'dogehouse', 1535],
     	[4, 'docker', 'awesome-compose', 154],
     	[5, 'dapr', 'dapr', 1622],
     	[6, 'tauri-apps', 'tauri', 982],
     	[7, 'qeeqbox', 'social-analyzer', 435],
     	[8, 'jart', 'cosmopolitan', 240],
     	[9, 'android', 'compose-samples', 1043],
     	[10, 'AliaksandrSiarohin', 'first-order-model', 70],
     	[11, 'authelia', 'authelia', 1703],
     	[12, 'sickcodes', 'Docker-OSX', 231],
     	[13, 'zhangdaiscott', 'jeecg-boot', 459],
     	[14, 'CoatiSoftware', 'Sourcetrail', 2739],
     	[15, 'bitwarden', 'server', 2831],
     	[16, 'Snailclimb', 'JavaGuide', 2921],
     	[17, 'iperov', 'DeepFaceLab', 1145],
     	[18, 'jdah', 'minecraft-weekend', 65],
     	[19, 'vitejs', 'vite', 2284],
     	[20, 'dani-garcia', 'bitwarden_rs', 1439],
     	[21, 'MostlyAdequate', 'mostly-adequate-guide', 846],
     	[22, 'Ryujinx', 'Ryujinx', 1561],
     	[23, 'ethereum-mining', 'ethminer', 14334],
     	[24, 'Immediate-Mode-UI', 'Nuklear', 1857],
     	[25, 'spring-projects-experimental', 'spring-native', 1850],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 avatarify-python', 351],
     	['#2 binance-trade-bot', 193],
     	['#3 dogehouse', 1535],
     	['#4 awesome-compose', 154],
     	['#5 dapr', 1622],
     	['#6 tauri', 982],
     	['#7 social-analyzer', 435],
     	['#8 cosmopolitan', 240],
     	['#9 compose-samples', 1043],
     	['#10 first-order-model', 70],
     	['#11 authelia', 1703],
     	['#12 Docker-OSX', 231],
     	['#13 jeecg-boot', 459],
     	['#14 Sourcetrail', 2739],
     	['#15 server', 2831],
     	['#16 JavaGuide', 2921],
     	['#17 DeepFaceLab', 1145],
     	['#18 minecraft-weekend', 65],
     	['#19 vite', 2284],
     	['#20 bitwarden_rs', 1439],
     	['#21 mostly-adequate-guide', 846],
     	['#22 Ryujinx', 1561],
     	['#23 ethminer', 14334],
     	['#24 Nuklear', 1857],
     	['#25 spring-native', 1850],
     	
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