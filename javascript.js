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
	[1, 'microsoft', 'ML-For-Beginners', 1040],
     	[2, 'bradtraversy', '50projects50days', 118],
     	[3, 'facebookresearch', 'ParlAI', 3864],
     	[4, 'SmartKeyerror', 'Psyduck', 128],
     	[5, 'dromara', 'Sa-Token', 489],
     	[6, 'ChristianChiarulli', 'LunarVim', 1487],
     	[7, 'myspaghetti', 'macos-virtualbox', 574],
     	[8, 'mirumee', 'saleor', 18755],
     	[9, 'go-kratos', 'kratos', 1056],
     	[10, 'solidjs', 'solid', 1086],
     	[11, 'inancgumus', 'learngo', 495],
     	[12, 'YMFE', 'yapi', 5747],
     	[13, 'public-apis', 'public-apis', 3065],
     	[14, 'returntocorp', 'semgrep', 2491],
     	[15, 'supabase', 'supabase', 3101],
     	[16, 'ventoy', 'Ventoy', 389],
     	[17, 'MustangYM', 'WeChatExtension-ForMac', 1025],
     	[18, 'microsoft', 'vscode', 85791],
     	[19, 'ultralytics', 'yolov5', 1361],
     	[20, 'input-output-hk', 'plutus-pioneer-program', 174],
     	[21, 'shopizer-ecommerce', 'shopizer', 915],
     	[22, 'tiangolo', 'fastapi', 1733],
     	[23, 'keycloak', 'keycloak', 13374],
     	[24, 'org-roam', 'org-roam', 822],
     	[25, 'snowpackjs', 'astro', 919],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 ML-For-Beginners', 1040],
     	['#2 50projects50days', 118],
     	['#3 ParlAI', 3864],
     	['#4 Psyduck', 128],
     	['#5 Sa-Token', 489],
     	['#6 LunarVim', 1487],
     	['#7 macos-virtualbox', 574],
     	['#8 saleor', 18755],
     	['#9 kratos', 1056],
     	['#10 solid', 1086],
     	['#11 learngo', 495],
     	['#12 yapi', 5747],
     	['#13 public-apis', 3065],
     	['#14 semgrep', 2491],
     	['#15 supabase', 3101],
     	['#16 Ventoy', 389],
     	['#17 WeChatExtension-ForMac', 1025],
     	['#18 vscode', 85791],
     	['#19 yolov5', 1361],
     	['#20 plutus-pioneer-program', 174],
     	['#21 shopizer', 915],
     	['#22 fastapi', 1733],
     	['#23 keycloak', 13374],
     	['#24 org-roam', 822],
     	['#25 astro', 919],
     	
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