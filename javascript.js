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
     	[2, 'ChristianChiarulli', 'LunarVim', 1352],
     	[3, 'MustangYM', 'WeChatExtension-ForMac', 1024],
     	[4, 'mirumee', 'saleor', 18733],
     	[5, 'input-output-hk', 'plutus-pioneer-program', 155],
     	[6, 'NationalSecurityAgency', 'ghidra', 4949],
     	[7, 'trekhleb', 'javascript-algorithms', 953],
     	[8, 'go-kratos', 'kratos', 1014],
     	[9, 'ultralytics', 'yolov5', 1327],
     	[10, 'JDHelloWorld', 'jd_scripts', 189],
     	[11, 'mui-org', 'material-ui', 17235],
     	[12, 'freefq', 'free', 2576],
     	[13, '30-seconds', '30-seconds-of-code', 5374],
     	[14, 'microsoft', 'vscode', 85394],
     	[15, 'YMFE', 'yapi', 5747],
     	[16, 'labuladong', 'fucking-algorithm', 288],
     	[17, 'snowpackjs', 'astro', 777],
     	[18, 'airbnb', 'javascript', 1875],
     	[19, 'tiangolo', 'fastapi', 1663],
     	[20, 'apache', 'airflow', 12938],
     	[21, 'neovim', 'neovim', 18465],
     	[22, 'mrdoob', 'three.js', 37779],
     	[23, 'facebook', 'docusaurus', 3840],
     	[24, 'Snailclimb', 'JavaGuide', 3255],
     	[25, 'input-output-hk', 'plutus', 8459],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 50projects50days', 90],
     	['#2 LunarVim', 1352],
     	['#3 WeChatExtension-ForMac', 1024],
     	['#4 saleor', 18733],
     	['#5 plutus-pioneer-program', 155],
     	['#6 ghidra', 4949],
     	['#7 javascript-algorithms', 953],
     	['#8 kratos', 1014],
     	['#9 yolov5', 1327],
     	['#10 jd_scripts', 189],
     	['#11 material-ui', 17235],
     	['#12 free', 2576],
     	['#13 30-seconds-of-code', 5374],
     	['#14 vscode', 85394],
     	['#15 yapi', 5747],
     	['#16 fucking-algorithm', 288],
     	['#17 astro', 777],
     	['#18 javascript', 1875],
     	['#19 fastapi', 1663],
     	['#20 airflow', 12938],
     	['#21 neovim', 18465],
     	['#22 three.js', 37779],
     	['#23 docusaurus', 3840],
     	['#24 JavaGuide', 3255],
     	['#25 plutus', 8459],
     	
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