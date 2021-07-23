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
     	[2, 'ChristianChiarulli', 'LunarVim', 1354],
     	[3, 'mirumee', 'saleor', 18740],
     	[4, 'bradtraversy', '50projects50days', 90],
     	[5, 'microsoft', 'Web-Dev-For-Beginners', 993],
     	[6, 'OpenXiangShan', 'XiangShan', 5888],
     	[7, 'input-output-hk', 'plutus-pioneer-program', 161],
     	[8, 'inancgumus', 'learngo', 495],
     	[9, 'MustangYM', 'WeChatExtension-ForMac', 1024],
     	[10, 'go-kratos', 'kratos', 1020],
     	[11, 'NationalSecurityAgency', 'ghidra', 4982],
     	[12, 'snowpackjs', 'astro', 821],
     	[13, 'ultralytics', 'yolov5', 1329],
     	[14, 'YMFE', 'yapi', 5747],
     	[15, 'JDHelloWorld', 'jd_scripts', 201],
     	[16, 'mui-org', 'material-ui', 17247],
     	[17, 'airbnb', 'javascript', 1875],
     	[18, 'microsoft', 'vscode', 85560],
     	[19, 'apache', 'airflow', 12965],
     	[20, 'trekhleb', 'javascript-algorithms', 953],
     	[21, 'JetBrains', 'kotlin', 84308],
     	[22, 'tiangolo', 'fastapi', 1702],
     	[23, 'labuladong', 'fucking-algorithm', 288],
     	[24, 'Snailclimb', 'JavaGuide', 3261],
     	[25, 'IrisShaders', 'Iris', 700],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 Real-Time-Voice-Cloning', 282],
     	['#2 LunarVim', 1354],
     	['#3 saleor', 18740],
     	['#4 50projects50days', 90],
     	['#5 Web-Dev-For-Beginners', 993],
     	['#6 XiangShan', 5888],
     	['#7 plutus-pioneer-program', 161],
     	['#8 learngo', 495],
     	['#9 WeChatExtension-ForMac', 1024],
     	['#10 kratos', 1020],
     	['#11 ghidra', 4982],
     	['#12 astro', 821],
     	['#13 yolov5', 1329],
     	['#14 yapi', 5747],
     	['#15 jd_scripts', 201],
     	['#16 material-ui', 17247],
     	['#17 javascript', 1875],
     	['#18 vscode', 85560],
     	['#19 airflow', 12965],
     	['#20 javascript-algorithms', 953],
     	['#21 kotlin', 84308],
     	['#22 fastapi', 1702],
     	['#23 fucking-algorithm', 288],
     	['#24 JavaGuide', 3261],
     	['#25 Iris', 700],
     	
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