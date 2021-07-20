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
	[1, 'ChristianChiarulli', 'LunarVim', 1331],
     	[2, 'mirumee', 'saleor', 18732],
     	[3, 'input-output-hk', 'plutus-pioneer-program', 155],
     	[4, 'MustangYM', 'WeChatExtension-ForMac', 1017],
     	[5, 'trekhleb', 'javascript-algorithms', 953],
     	[6, 'bradtraversy', '50projects50days', 90],
     	[7, 'JDHelloWorld', 'jd_scripts', 181],
     	[8, 'go-kratos', 'kratos', 1010],
     	[9, 'mui-org', 'material-ui', 17226],
     	[10, 'ultralytics', 'yolov5', 1325],
     	[11, 'microsoft', 'vscode', 85342],
     	[12, 'labuladong', 'fucking-algorithm', 288],
     	[13, 'snowpackjs', 'astro', 746],
     	[14, 'NationalSecurityAgency', 'ghidra', 4940],
     	[15, 'apache', 'airflow', 12929],
     	[16, 'chinese-poetry', 'chinese-poetry', 509],
     	[17, 'mrdoob', 'three.js', 37775],
     	[18, 'YMFE', 'yapi', 5746],
     	[19, 'n8n-io', 'n8n', 4371],
     	[20, 'tiangolo', 'fastapi', 1663],
     	[21, 'neovim', 'neovim', 18463],
     	[22, '30-seconds', '30-seconds-of-code', 5374],
     	[23, 'freefq', 'free', 2570],
     	[24, 'JetBrains', 'kotlin', 84209],
     	[25, 'airbnb', 'javascript', 1875],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 LunarVim', 1331],
     	['#2 saleor', 18732],
     	['#3 plutus-pioneer-program', 155],
     	['#4 WeChatExtension-ForMac', 1017],
     	['#5 javascript-algorithms', 953],
     	['#6 50projects50days', 90],
     	['#7 jd_scripts', 181],
     	['#8 kratos', 1010],
     	['#9 material-ui', 17226],
     	['#10 yolov5', 1325],
     	['#11 vscode', 85342],
     	['#12 fucking-algorithm', 288],
     	['#13 astro', 746],
     	['#14 ghidra', 4940],
     	['#15 airflow', 12929],
     	['#16 chinese-poetry', 509],
     	['#17 three.js', 37775],
     	['#18 yapi', 5746],
     	['#19 n8n', 4371],
     	['#20 fastapi', 1663],
     	['#21 neovim', 18463],
     	['#22 30-seconds-of-code', 5374],
     	['#23 free', 2570],
     	['#24 kotlin', 84209],
     	['#25 javascript', 1875],
     	
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