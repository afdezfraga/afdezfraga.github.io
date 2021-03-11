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
     	[2, 'dapr', 'dapr', 1614],
     	[3, 'jart', 'cosmopolitan', 236],
     	[4, 'tauri-apps', 'tauri', 969],
     	[5, 'qeeqbox', 'social-analyzer', 433],
     	[6, 'android', 'compose-samples', 978],
     	[7, 'CoatiSoftware', 'Sourcetrail', 2735],
     	[8, 'AliaksandrSiarohin', 'first-order-model', 70],
     	[9, 'ethereum-mining', 'ethminer', 14334],
     	[10, 'athensresearch', 'athens', 550],
     	[11, 'rxi', 'lite', 200],
     	[12, 'vitejs', 'vite', 2250],
     	[13, 'JonnyBurger', 'remotion', 1010],
     	[14, 'MostlyAdequate', 'mostly-adequate-guide', 846],
     	[15, 'aamini', 'introtodeeplearning', 408],
     	[16, 'input-output-hk', 'cardano-node', 4009],
     	[17, 'bitwarden', 'server', 2825],
     	[18, 'iperov', 'DeepFaceLab', 1144],
     	[19, 'dani-garcia', 'bitwarden_rs', 1425],
     	[20, 'Immediate-Mode-UI', 'Nuklear', 1857],
     	[21, 'zhangdaiscott', 'jeecg-boot', 459],
     	[22, 'geekxh', 'hello-algorithm', 360],
     	[23, 'freqtrade', 'freqtrade', 11196],
     	[24, 'iam-abbas', 'Reddit-Stock-Trends', 163],
     	[25, 'airbnb', 'javascript', 1861],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['alievk/avatarify-python', 351],
     	['dapr/dapr', 1614],
     	['jart/cosmopolitan', 236],
     	['tauri-apps/tauri', 969],
     	['qeeqbox/social-analyzer', 433],
     	['android/compose-samples', 978],
     	['CoatiSoftware/Sourcetrail', 2735],
     	['AliaksandrSiarohin/first-order-model', 70],
     	['ethereum-mining/ethminer', 14334],
     	['athensresearch/athens', 550],
     	['rxi/lite', 200],
     	['vitejs/vite', 2250],
     	['JonnyBurger/remotion', 1010],
     	['MostlyAdequate/mostly-adequate-guide', 846],
     	['aamini/introtodeeplearning', 408],
     	['input-output-hk/cardano-node', 4009],
     	['bitwarden/server', 2825],
     	['iperov/DeepFaceLab', 1144],
     	['dani-garcia/bitwarden_rs', 1425],
     	['Immediate-Mode-UI/Nuklear', 1857],
     	['zhangdaiscott/jeecg-boot', 459],
     	['geekxh/hello-algorithm', 360],
     	['freqtrade/freqtrade', 11196],
     	['iam-abbas/Reddit-Stock-Trends', 163],
     	['airbnb/javascript', 1861],
     	
    ]);

    // Set chart options
    var options = {};

    var options2 = {
        title: 'Top trending GitHub repos',
        hAxis: {
          title: 'Number of commits',
        },
        vAxis: {
          title: 'Author/Repository name',
          position: 'out'
        },
        'width':'1100','height':'1100'
      };

    // Instantiate and draw our chart, passing in some options.
    var chart2 = new google.visualization.BarChart(document.getElementById('chart_div2'));
    chart2.draw(data2, options2);

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.Table(document.getElementById('chart_div'));
    chart.draw(data, options);
  }