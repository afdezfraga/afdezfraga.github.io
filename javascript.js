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
	[1, 'benawad', 'dogehouse', 1426],
     	[2, 'alievk', 'avatarify-python', 351],
     	[3, 'edeng23', 'binance-trade-bot', 192],
     	[4, 'docker', 'awesome-compose', 154],
     	[5, 'dapr', 'dapr', 1622],
     	[6, 'tauri-apps', 'tauri', 980],
     	[7, 'jart', 'cosmopolitan', 240],
     	[8, 'qeeqbox', 'social-analyzer', 435],
     	[9, 'android', 'compose-samples', 1043],
     	[10, 'authelia', 'authelia', 1701],
     	[11, 'AliaksandrSiarohin', 'first-order-model', 70],
     	[12, 'CoatiSoftware', 'Sourcetrail', 2739],
     	[13, 'zhangdaiscott', 'jeecg-boot', 459],
     	[14, 'jdah', 'minecraft-weekend', 65],
     	[15, 'bitwarden', 'server', 2831],
     	[16, 'sickcodes', 'Docker-OSX', 231],
     	[17, 'vitejs', 'vite', 2276],
     	[18, 'iperov', 'DeepFaceLab', 1145],
     	[19, 'flameshot-org', 'flameshot', 1305],
     	[20, 'dani-garcia', 'bitwarden_rs', 1436],
     	[21, 'ethereum-mining', 'ethminer', 14334],
     	[22, 'athensresearch', 'athens', 567],
     	[23, 'Snailclimb', 'JavaGuide', 2917],
     	[24, 'MostlyAdequate', 'mostly-adequate-guide', 846],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 dogehouse', 1426],
     	['#2 avatarify-python', 351],
     	['#3 binance-trade-bot', 192],
     	['#4 awesome-compose', 154],
     	['#5 dapr', 1622],
     	['#6 tauri', 980],
     	['#7 cosmopolitan', 240],
     	['#8 social-analyzer', 435],
     	['#9 compose-samples', 1043],
     	['#10 authelia', 1701],
     	['#11 first-order-model', 70],
     	['#12 Sourcetrail', 2739],
     	['#13 jeecg-boot', 459],
     	['#14 minecraft-weekend', 65],
     	['#15 server', 2831],
     	['#16 Docker-OSX', 231],
     	['#17 vite', 2276],
     	['#18 DeepFaceLab', 1145],
     	['#19 flameshot', 1305],
     	['#20 bitwarden_rs', 1436],
     	['#21 ethminer', 14334],
     	['#22 athens', 567],
     	['#23 JavaGuide', 2917],
     	['#24 mostly-adequate-guide', 846],
     	
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