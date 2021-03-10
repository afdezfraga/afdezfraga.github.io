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
     	[2, 'dapr', 'dapr', 1613],
     	[3, 'jart', 'cosmopolitan', 236],
     	[4, 'tauri-apps', 'tauri', 965],
     	[5, 'qeeqbox', 'social-analyzer', 433],
     	[6, 'android', 'compose-samples', 978],
     	[7, 'dolthub', 'dolt', 8580],
     	[8, 'CoatiSoftware', 'Sourcetrail', 2735],
     	[9, 'iam-abbas', 'Reddit-Stock-Trends', 163],
     	[10, 'ethereum-mining', 'ethminer', 14334],
     	[11, 'AliaksandrSiarohin', 'first-order-model', 70],
     	[12, 'aamini', 'introtodeeplearning', 408],
     	[13, 'athensresearch', 'athens', 540],
     	[14, 'vitejs', 'vite', 2250],
     	[15, 'rxi', 'lite', 200],
     	[16, 'tgbot-collection', 'YYeTsBot', 138],
     	[17, 'MostlyAdequate', 'mostly-adequate-guide', 846],
     	[18, 'input-output-hk', 'cardano-node', 3996],
     	[19, 'bitwarden', 'server', 2823],
     	[20, 'freqtrade', 'freqtrade', 11147],
     	[21, 'Immediate-Mode-UI', 'Nuklear', 1857],
     	[22, 'dogecoin', 'dogecoin', 13532],
     	[23, 'dani-garcia', 'bitwarden_rs', 1425],
     	[24, 'iperov', 'DeepFaceLab', 1144],
     	[25, 'airbnb', 'javascript', 1861],
     	
    ]);

    // Set chart options
    var options = {'title':'How Much Pizza I Ate Last Night',
                   'width':400,
                   'height':300};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.Table(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
</script>