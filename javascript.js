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
	[1, 'edeng23', 'binance-trade-bot', 174],
     	[2, 'alievk', 'avatarify-python', 351],
     	[3, 'dapr', 'dapr', 1621],
     	[4, 'tauri-apps', 'tauri', 973],
     	[5, 'jart', 'cosmopolitan', 236],
     	[6, 'qeeqbox', 'social-analyzer', 433],
     	[7, 'android', 'compose-samples', 1034],
     	[8, 'CoatiSoftware', 'Sourcetrail', 2735],
     	[9, 'AliaksandrSiarohin', 'first-order-model', 70],
     	[10, 'conwnet', 'github1s', 201],
     	[11, 'ethereum-mining', 'ethminer', 14334],
     	[12, 'vitejs', 'vite', 2250],
     	[13, 'zhangdaiscott', 'jeecg-boot', 459],
     	[14, 'MostlyAdequate', 'mostly-adequate-guide', 846],
     	[15, 'docker', 'awesome-compose', 154],
     	[16, 'athensresearch', 'athens', 560],
     	[17, 'iperov', 'DeepFaceLab', 1145],
     	[18, 'authelia', 'authelia', 1695],
     	[19, 'bitwarden', 'server', 2828],
     	[20, 'Immediate-Mode-UI', 'Nuklear', 1857],
     	[21, 'input-output-hk', 'cardano-node', 4023],
     	[22, 'dani-garcia', 'bitwarden_rs', 1425],
     	[23, 'qier222', 'YesPlayMusic', 351],
     	[24, 'flutter', 'flutter', 23075],
     	[25, 'willmcgugan', 'rich', 1758],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 binance-trade-bot', 174],
     	['#2 avatarify-python', 351],
     	['#3 dapr', 1621],
     	['#4 tauri', 973],
     	['#5 cosmopolitan', 236],
     	['#6 social-analyzer', 433],
     	['#7 compose-samples', 1034],
     	['#8 Sourcetrail', 2735],
     	['#9 first-order-model', 70],
     	['#10 github1s', 201],
     	['#11 ethminer', 14334],
     	['#12 vite', 2250],
     	['#13 jeecg-boot', 459],
     	['#14 mostly-adequate-guide', 846],
     	['#15 awesome-compose', 154],
     	['#16 athens', 560],
     	['#17 DeepFaceLab', 1145],
     	['#18 authelia', 1695],
     	['#19 server', 2828],
     	['#20 Nuklear', 1857],
     	['#21 cardano-node', 4023],
     	['#22 bitwarden_rs', 1425],
     	['#23 YesPlayMusic', 351],
     	['#24 flutter', 23075],
     	['#25 rich', 1758],
     	
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