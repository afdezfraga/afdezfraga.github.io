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
     	[2, 'MustangYM', 'WeChatExtension-ForMac', 1024],
     	[3, 'ChristianChiarulli', 'LunarVim', 1354],
     	[4, 'mirumee', 'saleor', 18734],
     	[5, 'input-output-hk', 'plutus-pioneer-program', 155],
     	[6, 'bradtraversy', '50projects50days', 90],
     	[7, 'inancgumus', 'learngo', 495],
     	[8, 'freefq', 'free', 2582],
     	[9, 'go-kratos', 'kratos', 1019],
     	[10, 'YMFE', 'yapi', 5747],
     	[11, 'trekhleb', 'javascript-algorithms', 953],
     	[12, 'ultralytics', 'yolov5', 1328],
     	[13, 'NationalSecurityAgency', 'ghidra', 4955],
     	[14, 'mui-org', 'material-ui', 17242],
     	[15, 'snowpackjs', 'astro', 805],
     	[16, 'microsoft', 'vscode', 85448],
     	[17, 'tiangolo', 'fastapi', 1702],
     	[18, 'labuladong', 'fucking-algorithm', 288],
     	[19, 'airbnb', 'javascript', 1875],
     	[20, 'apache', 'airflow', 12951],
     	[21, 'JDHelloWorld', 'jd_scripts', 193],
     	[22, 'JetBrains', 'kotlin', 84278],
     	[23, 'facebook', 'docusaurus', 3841],
     	[24, 'IrisShaders', 'Iris', 700],
     	[25, 'input-output-hk', 'plutus', 8461],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 Real-Time-Voice-Cloning', 282],
     	['#2 WeChatExtension-ForMac', 1024],
     	['#3 LunarVim', 1354],
     	['#4 saleor', 18734],
     	['#5 plutus-pioneer-program', 155],
     	['#6 50projects50days', 90],
     	['#7 learngo', 495],
     	['#8 free', 2582],
     	['#9 kratos', 1019],
     	['#10 yapi', 5747],
     	['#11 javascript-algorithms', 953],
     	['#12 yolov5', 1328],
     	['#13 ghidra', 4955],
     	['#14 material-ui', 17242],
     	['#15 astro', 805],
     	['#16 vscode', 85448],
     	['#17 fastapi', 1702],
     	['#18 fucking-algorithm', 288],
     	['#19 javascript', 1875],
     	['#20 airflow', 12951],
     	['#21 jd_scripts', 193],
     	['#22 kotlin', 84278],
     	['#23 docusaurus', 3841],
     	['#24 Iris', 700],
     	['#25 plutus', 8461],
     	
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