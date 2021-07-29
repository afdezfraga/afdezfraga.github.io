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
	[1, 'CorentinJ', 'Real-Time-Voice-Cloning', 282],
     	[2, 'facebookresearch', 'ParlAI', 3862],
     	[3, 'ChristianChiarulli', 'LunarVim', 1448],
     	[4, 'bradtraversy', '50projects50days', 90],
     	[5, 'dromara', 'Sa-Token', 485],
     	[6, 'mirumee', 'saleor', 18754],
     	[7, 'SmartKeyerror', 'Psyduck', 128],
     	[8, 'input-output-hk', 'plutus-pioneer-program', 174],
     	[9, 'inancgumus', 'learngo', 495],
     	[10, 'MustangYM', 'WeChatExtension-ForMac', 1025],
     	[11, 'go-kratos', 'kratos', 1053],
     	[12, 'ultralytics', 'yolov5', 1351],
     	[13, 'ventoy', 'Ventoy', 381],
     	[14, '30-seconds', '30-seconds-of-code', 5382],
     	[15, 'tiangolo', 'fastapi', 1706],
     	[16, 'microsoft', 'vscode', 85750],
     	[17, 'kingoflolz', 'mesh-transformer-jax', 108],
     	[18, 'Snailclimb', 'JavaGuide', 3269],
     	[19, 'mui-org', 'material-ui', 17275],
     	[20, 'facebook', 'react', 14340],
     	[21, 'input-output-hk', 'plutus', 8505],
     	[22, 'airbnb', 'javascript', 1875],
     	[23, 'csseky', 'cskaoyan', 116],
     	[24, 'IrisShaders', 'Iris', 719],
     	[25, 'chinese-poetry', 'chinese-poetry', 509],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 Real-Time-Voice-Cloning', 282],
     	['#2 ParlAI', 3862],
     	['#3 LunarVim', 1448],
     	['#4 50projects50days', 90],
     	['#5 Sa-Token', 485],
     	['#6 saleor', 18754],
     	['#7 Psyduck', 128],
     	['#8 plutus-pioneer-program', 174],
     	['#9 learngo', 495],
     	['#10 WeChatExtension-ForMac', 1025],
     	['#11 kratos', 1053],
     	['#12 yolov5', 1351],
     	['#13 Ventoy', 381],
     	['#14 30-seconds-of-code', 5382],
     	['#15 fastapi', 1706],
     	['#16 vscode', 85750],
     	['#17 mesh-transformer-jax', 108],
     	['#18 JavaGuide', 3269],
     	['#19 material-ui', 17275],
     	['#20 react', 14340],
     	['#21 plutus', 8505],
     	['#22 javascript', 1875],
     	['#23 cskaoyan', 116],
     	['#24 Iris', 719],
     	['#25 chinese-poetry', 509],
     	
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