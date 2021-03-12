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
	[1, 'edeng23', 'binance-trade-bot', 173],
     	[2, 'alievk', 'avatarify-python', 351],
     	[3, 'conwnet', 'github1s', 198],
     	[4, 'dapr', 'dapr', 1620],
     	[5, 'tauri-apps', 'tauri', 971],
     	[6, 'dolthub', 'dolt', 8611],
     	[7, 'jart', 'cosmopolitan', 236],
     	[8, 'qeeqbox', 'social-analyzer', 433],
     	[9, 'android', 'compose-samples', 978],
     	[10, 'CoatiSoftware', 'Sourcetrail', 2735],
     	[11, 'AliaksandrSiarohin', 'first-order-model', 70],
     	[12, 'ethereum-mining', 'ethminer', 14334],
     	[13, 'vitejs', 'vite', 2250],
     	[14, 'MostlyAdequate', 'mostly-adequate-guide', 846],
     	[15, 'athensresearch', 'athens', 558],
     	[16, 'iperov', 'DeepFaceLab', 1144],
     	[17, 'bitwarden', 'server', -1],
     	[18, 'input-output-hk', 'cardano-node', -1],
     	[19, 'zhangdaiscott', 'jeecg-boot', -1],
     	[20, 'Immediate-Mode-UI', 'Nuklear', -1],
     	[21, 'dani-garcia', 'bitwarden_rs', -1],
     	[22, 'rxi', 'lite', -1],
     	[23, 'aamini', 'introtodeeplearning', -1],
     	[24, 'geekxh', 'hello-algorithm', -1],
     	[25, 'flutter', 'flutter', -1],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 binance-trade-bot', 173],
     	['#2 avatarify-python', 351],
     	['#3 github1s', 198],
     	['#4 dapr', 1620],
     	['#5 tauri', 971],
     	['#6 dolt', 8611],
     	['#7 cosmopolitan', 236],
     	['#8 social-analyzer', 433],
     	['#9 compose-samples', 978],
     	['#10 Sourcetrail', 2735],
     	['#11 first-order-model', 70],
     	['#12 ethminer', 14334],
     	['#13 vite', 2250],
     	['#14 mostly-adequate-guide', 846],
     	['#15 athens', 558],
     	['#16 DeepFaceLab', 1144],
     	['#17 server', -1],
     	['#18 cardano-node', -1],
     	['#19 jeecg-boot', -1],
     	['#20 Nuklear', -1],
     	['#21 bitwarden_rs', -1],
     	['#22 lite', -1],
     	['#23 introtodeeplearning', -1],
     	['#24 hello-algorithm', -1],
     	['#25 flutter', -1],
     	
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