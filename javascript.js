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
	[1, 'bradtraversy', '50projects50days', 90],
     	[2, 'solidjs', 'solid', 1086],
     	[3, 'facebookresearch', 'ParlAI', 3864],
     	[4, 'ChristianChiarulli', 'LunarVim', 1461],
     	[5, 'dromara', 'Sa-Token', 485],
     	[6, 'mirumee', 'saleor', 18755],
     	[7, 'CorentinJ', 'Real-Time-Voice-Cloning', 282],
     	[8, 'SmartKeyerror', 'Psyduck', 128],
     	[9, 'input-output-hk', 'plutus-pioneer-program', 174],
     	[10, 'Shopify', 'dawn', 50],
     	[11, 'inancgumus', 'learngo', 495],
     	[12, 'go-kratos', 'kratos', 1055],
     	[13, 'ventoy', 'Ventoy', 381],
     	[14, 'YMFE', 'yapi', 5747],
     	[15, 'ultralytics', 'yolov5', 1360],
     	[16, 'tiangolo', 'fastapi', 1733],
     	[17, 'MustangYM', 'WeChatExtension-ForMac', 1025],
     	[18, 'microsoft', 'vscode', 85791],
     	[19, 'cube0x0', 'CVE-2021-1675', 26],
     	[20, 'IrisShaders', 'Iris', 722],
     	[21, 'trekhleb', 'javascript-algorithms', 956],
     	[22, 'Snailclimb', 'JavaGuide', 3269],
     	[23, 'input-output-hk', 'plutus', 8538],
     	[24, 'returntocorp', 'semgrep', 2489],
     	[25, 'kingoflolz', 'mesh-transformer-jax', 109],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 50projects50days', 90],
     	['#2 solid', 1086],
     	['#3 ParlAI', 3864],
     	['#4 LunarVim', 1461],
     	['#5 Sa-Token', 485],
     	['#6 saleor', 18755],
     	['#7 Real-Time-Voice-Cloning', 282],
     	['#8 Psyduck', 128],
     	['#9 plutus-pioneer-program', 174],
     	['#10 dawn', 50],
     	['#11 learngo', 495],
     	['#12 kratos', 1055],
     	['#13 Ventoy', 381],
     	['#14 yapi', 5747],
     	['#15 yolov5', 1360],
     	['#16 fastapi', 1733],
     	['#17 WeChatExtension-ForMac', 1025],
     	['#18 vscode', 85791],
     	['#19 CVE-2021-1675', 26],
     	['#20 Iris', 722],
     	['#21 javascript-algorithms', 956],
     	['#22 JavaGuide', 3269],
     	['#23 plutus', 8538],
     	['#24 semgrep', 2489],
     	['#25 mesh-transformer-jax', 109],
     	
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