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
	[1, 'benawad', 'dogehouse', 1410],
     	[2, 'edeng23', 'binance-trade-bot', 186],
     	[3, 'alievk', 'avatarify-python', 351],
     	[4, 'docker', 'awesome-compose', 154],
     	[5, 'dapr', 'dapr', 1621],
     	[6, 'tauri-apps', 'tauri', 978],
     	[7, 'jart', 'cosmopolitan', 240],
     	[8, 'qeeqbox', 'social-analyzer', 435],
     	[9, 'android', 'compose-samples', 1034],
     	[10, 'AliaksandrSiarohin', 'first-order-model', 70],
     	[11, 'CoatiSoftware', 'Sourcetrail', 2738],
     	[12, 'authelia', 'authelia', 1700],
     	[13, 'Melvin-Abraham', 'Google-Assistant-Unofficial-Desktop-Client', 203],
     	[14, 'zhangdaiscott', 'jeecg-boot', 459],
     	[15, 'MostlyAdequate', 'mostly-adequate-guide', 846],
     	[16, 'flameshot-org', 'flameshot', 1302],
     	[17, 'vitejs', 'vite', 2253],
     	[18, 'athensresearch', 'athens', 564],
     	[19, 'bitwarden', 'server', 2828],
     	[20, 'ethereum-mining', 'ethminer', 14334],
     	[21, 'iperov', 'DeepFaceLab', 1145],
     	[22, 'dani-garcia', 'bitwarden_rs', 1430],
     	[23, 'qier222', 'YesPlayMusic', 351],
     	[24, 'sickcodes', 'Docker-OSX', 229],
     	[25, 'input-output-hk', 'cardano-node', 4025],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 dogehouse', 1410],
     	['#2 binance-trade-bot', 186],
     	['#3 avatarify-python', 351],
     	['#4 awesome-compose', 154],
     	['#5 dapr', 1621],
     	['#6 tauri', 978],
     	['#7 cosmopolitan', 240],
     	['#8 social-analyzer', 435],
     	['#9 compose-samples', 1034],
     	['#10 first-order-model', 70],
     	['#11 Sourcetrail', 2738],
     	['#12 authelia', 1700],
     	['#13 Google-Assistant-Unofficial-Desktop-Client', 203],
     	['#14 jeecg-boot', 459],
     	['#15 mostly-adequate-guide', 846],
     	['#16 flameshot', 1302],
     	['#17 vite', 2253],
     	['#18 athens', 564],
     	['#19 server', 2828],
     	['#20 ethminer', 14334],
     	['#21 DeepFaceLab', 1145],
     	['#22 bitwarden_rs', 1430],
     	['#23 YesPlayMusic', 351],
     	['#24 Docker-OSX', 229],
     	['#25 cardano-node', 4025],
     	
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