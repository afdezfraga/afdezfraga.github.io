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
	[1, 'mui-org', 'material-ui', 17214],
     	[2, 'kubernetes', 'kubernetes', 102439],
     	[3, 'ultralytics', 'yolov5', 1314],
     	[4, 'vercel', 'next.js', 8723],
     	[5, 'apache', 'airflow', 12900],
     	[6, 'mrdoob', 'three.js', 37755],
     	[7, 'neovim', 'neovim', 18445],
     	[8, 'microsoft', 'TypeScript', 32306],
     	[9, 'flutter', 'flutter', 25055],
     	[10, 'pytorch', 'pytorch', 38522],
     	[11, 'microsoft', 'vscode', 85177],
     	[12, 'mirumee', 'saleor', 18723],
     	[13, 'JetBrains', 'kotlin', 84136],
     	[14, 'siduck76', 'NvChad', 493],
     	[15, 'spf13', 'cobra', 832],
     	[16, 'huggingface', 'transformers', 7603],
     	[17, 'ElemeFE', 'element', 4474],
     	[18, 'input-output-hk', 'plutus', 8439],
     	[19, 'eugenp', 'tutorials', 22566],
     	[20, 'anncwb', 'vue-vben-admin', 990],
     	[21, 'Snailclimb', 'JavaGuide', 3242],
     	[22, 'microsoft', 'Web-Dev-For-Beginners', 966],
     	[23, 'ClickHouse', 'ClickHouse', 68243],
     	[24, 'apache', 'dubbo', 4759],
     	[25, 'helm', 'helm', 6177],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 material-ui', 17214],
     	['#2 kubernetes', 102439],
     	['#3 yolov5', 1314],
     	['#4 next.js', 8723],
     	['#5 airflow', 12900],
     	['#6 three.js', 37755],
     	['#7 neovim', 18445],
     	['#8 TypeScript', 32306],
     	['#9 flutter', 25055],
     	['#10 pytorch', 38522],
     	['#11 vscode', 85177],
     	['#12 saleor', 18723],
     	['#13 kotlin', 84136],
     	['#14 NvChad', 493],
     	['#15 cobra', 832],
     	['#16 transformers', 7603],
     	['#17 element', 4474],
     	['#18 plutus', 8439],
     	['#19 tutorials', 22566],
     	['#20 vue-vben-admin', 990],
     	['#21 JavaGuide', 3242],
     	['#22 Web-Dev-For-Beginners', 966],
     	['#23 ClickHouse', 68243],
     	['#24 dubbo', 4759],
     	['#25 helm', 6177],
     	
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