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
	[1, 'edeng23', 'binance-trade-bot', 186],
     	[2, 'alievk', 'avatarify-python', 351],
     	[3, 'dapr', 'dapr', 1621],
     	[4, 'jart', 'cosmopolitan', 236],
     	[5, 'docker', 'awesome-compose', 154],
     	[6, 'qeeqbox', 'social-analyzer', 433],
     	[7, 'android', 'compose-samples', 1034],
     	[8, 'flameshot-org', 'flameshot', 1295],
     	[9, 'CoatiSoftware', 'Sourcetrail', 2735],
     	[10, 'AliaksandrSiarohin', 'first-order-model', 70],
     	[11, 'authelia', 'authelia', 1699],
     	[12, 'zhangdaiscott', 'jeecg-boot', 459],
     	[13, 'vitejs', 'vite', 2252],
     	[14, 'MostlyAdequate', 'mostly-adequate-guide', 846],
     	[15, 'bitwarden', 'server', 2828],
     	[16, 'ethereum-mining', 'ethminer', 14334],
     	[17, 'athensresearch', 'athens', 564],
     	[18, 'iperov', 'DeepFaceLab', 1145],
     	[19, 'dani-garcia', 'bitwarden_rs', 1425],
     	[20, 'qier222', 'YesPlayMusic', 351],
     	[21, 'input-output-hk', 'cardano-node', 4025],
     	[22, 'geekxh', 'hello-algorithm', 360],
     	[23, 'Immediate-Mode-UI', 'Nuklear', 1857],
     	[24, 'Snailclimb', 'JavaGuide', 2911],
     	[25, 'flutter', 'flutter', 23081],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 binance-trade-bot', 186],
     	['#2 avatarify-python', 351],
     	['#3 dapr', 1621],
     	['#4 cosmopolitan', 236],
     	['#5 awesome-compose', 154],
     	['#6 social-analyzer', 433],
     	['#7 compose-samples', 1034],
     	['#8 flameshot', 1295],
     	['#9 Sourcetrail', 2735],
     	['#10 first-order-model', 70],
     	['#11 authelia', 1699],
     	['#12 jeecg-boot', 459],
     	['#13 vite', 2252],
     	['#14 mostly-adequate-guide', 846],
     	['#15 server', 2828],
     	['#16 ethminer', 14334],
     	['#17 athens', 564],
     	['#18 DeepFaceLab', 1145],
     	['#19 bitwarden_rs', 1425],
     	['#20 YesPlayMusic', 351],
     	['#21 cardano-node', 4025],
     	['#22 hello-algorithm', 360],
     	['#23 Nuklear', 1857],
     	['#24 JavaGuide', 2911],
     	['#25 flutter', 23081],
     	
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