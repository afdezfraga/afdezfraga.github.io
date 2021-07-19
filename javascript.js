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
	[1, 'ChristianChiarulli', 'LunarVim', 1321],
     	[2, 'input-output-hk', 'plutus-pioneer-program', 155],
     	[3, 'mirumee', 'saleor', 18724],
     	[4, 'trekhleb', 'javascript-algorithms', 953],
     	[5, 'MustangYM', 'WeChatExtension-ForMac', 1014],
     	[6, 'go-kratos', 'kratos', 1008],
     	[7, 'bradtraversy', '50projects50days', 90],
     	[8, 'mui-org', 'material-ui', 17220],
     	[9, 'ultralytics', 'yolov5', 1319],
     	[10, 'microsoft', 'vscode', 85273],
     	[11, 'apache', 'airflow', 12911],
     	[12, 'n8n-io', 'n8n', 4371],
     	[13, 'neovim', 'neovim', 18452],
     	[14, 'mrdoob', 'three.js', 37770],
     	[15, 'dromara', 'Sa-Token', 463],
     	[16, 'YMFE', 'yapi', 5746],
     	[17, 'maaslalani', 'slides', 105],
     	[18, 'CaffeineMC', 'sodium-fabric', 449],
     	[19, 'JetBrains', 'kotlin', 84172],
     	[20, 'NationalSecurityAgency', 'ghidra', 4940],
     	[21, 'Genymobile', 'scrcpy', 1223],
     	[22, 'snowpackjs', 'astro', 740],
     	[23, 'pytorch', 'pytorch', 38571],
     	[24, 'input-output-hk', 'plutus', 8449],
     	[25, '30-seconds', '30-seconds-of-code', 5374],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 LunarVim', 1321],
     	['#2 plutus-pioneer-program', 155],
     	['#3 saleor', 18724],
     	['#4 javascript-algorithms', 953],
     	['#5 WeChatExtension-ForMac', 1014],
     	['#6 kratos', 1008],
     	['#7 50projects50days', 90],
     	['#8 material-ui', 17220],
     	['#9 yolov5', 1319],
     	['#10 vscode', 85273],
     	['#11 airflow', 12911],
     	['#12 n8n', 4371],
     	['#13 neovim', 18452],
     	['#14 three.js', 37770],
     	['#15 Sa-Token', 463],
     	['#16 yapi', 5746],
     	['#17 slides', 105],
     	['#18 sodium-fabric', 449],
     	['#19 kotlin', 84172],
     	['#20 ghidra', 4940],
     	['#21 scrcpy', 1223],
     	['#22 astro', 740],
     	['#23 pytorch', 38571],
     	['#24 plutus', 8449],
     	['#25 30-seconds-of-code', 5374],
     	
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