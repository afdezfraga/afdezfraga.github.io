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
	[1, 'ChristianChiarulli', 'LunarVim', 1305],
     	[2, 'input-output-hk', 'plutus-pioneer-program', 151],
     	[3, 'trekhleb', 'javascript-algorithms', 953],
     	[4, 'mirumee', 'saleor', 18724],
     	[5, 'CaffeineMC', 'sodium-fabric', 448],
     	[6, 'snowpackjs', 'astro', 738],
     	[7, 'go-kratos', 'kratos', 1003],
     	[8, 'MustangYM', 'WeChatExtension-ForMac', 1014],
     	[9, 'n8n-io', 'n8n', 4363],
     	[10, 'mui-org', 'material-ui', 17218],
     	[11, 'ultralytics', 'yolov5', 1318],
     	[12, 'rustdesk', 'rustdesk', 141],
     	[13, 'microsoft', 'vscode', 85270],
     	[14, 'apache', 'airflow', 12907],
     	[15, 'maaslalani', 'slides', 105],
     	[16, 'mrdoob', 'three.js', 37769],
     	[17, 'bradtraversy', '50projects50days', 90],
     	[18, 'neovim', 'neovim', 18447],
     	[19, 'NationalSecurityAgency', 'ghidra', 4940],
     	[20, 'Genymobile', 'scrcpy', 1223],
     	[21, 'YMFE', 'yapi', 5746],
     	[22, 'JetBrains', 'kotlin', 84172],
     	[23, 'element-plus', 'element-plus', 1249],
     	[24, 'microsoft', 'Web-Dev-For-Beginners', 966],
     	[25, 'airbnb', 'javascript', 1875],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 LunarVim', 1305],
     	['#2 plutus-pioneer-program', 151],
     	['#3 javascript-algorithms', 953],
     	['#4 saleor', 18724],
     	['#5 sodium-fabric', 448],
     	['#6 astro', 738],
     	['#7 kratos', 1003],
     	['#8 WeChatExtension-ForMac', 1014],
     	['#9 n8n', 4363],
     	['#10 material-ui', 17218],
     	['#11 yolov5', 1318],
     	['#12 rustdesk', 141],
     	['#13 vscode', 85270],
     	['#14 airflow', 12907],
     	['#15 slides', 105],
     	['#16 three.js', 37769],
     	['#17 50projects50days', 90],
     	['#18 neovim', 18447],
     	['#19 ghidra', 4940],
     	['#20 scrcpy', 1223],
     	['#21 yapi', 5746],
     	['#22 kotlin', 84172],
     	['#23 element-plus', 1249],
     	['#24 Web-Dev-For-Beginners', 966],
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