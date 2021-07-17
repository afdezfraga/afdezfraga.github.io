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
	[1, 'input-output-hk', 'plutus-pioneer-program', 151],
     	[2, 'programthink', 'zhao', 480],
     	[3, 'trekhleb', 'javascript-algorithms', 953],
     	[4, 'MustangYM', 'WeChatExtension-ForMac', 1012],
     	[5, 'mui-org', 'material-ui', 17215],
     	[6, 'go-kratos', 'kratos', 1000],
     	[7, 'inancgumus', 'learngo', 494],
     	[8, 'kubernetes', 'kubernetes', 102450],
     	[9, 'ultralytics', 'yolov5', 1315],
     	[10, 'microsoft', 'vscode', 85267],
     	[11, 'CaffeineMC', 'sodium-fabric', 448],
     	[12, 'mirumee', 'saleor', 18724],
     	[13, 'gohugoio', 'hugo', 6455],
     	[14, 'n8n-io', 'n8n', 4358],
     	[15, 'apache', 'airflow', 12904],
     	[16, 'neovim', 'neovim', 18445],
     	[17, 'mrdoob', 'three.js', 37769],
     	[18, 'Genymobile', 'scrcpy', 1223],
     	[19, 'vercel', 'next.js', 8736],
     	[20, 'flutter', 'flutter', 25066],
     	[21, 'element-plus', 'element-plus', 1249],
     	[22, 'CyC2018', 'CS-Notes', 3772],
     	[23, 'pytorch', 'pytorch', 38560],
     	[24, 'NationalSecurityAgency', 'ghidra', 4940],
     	[25, 'JetBrains', 'kotlin', 84170],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 plutus-pioneer-program', 151],
     	['#2 zhao', 480],
     	['#3 javascript-algorithms', 953],
     	['#4 WeChatExtension-ForMac', 1012],
     	['#5 material-ui', 17215],
     	['#6 kratos', 1000],
     	['#7 learngo', 494],
     	['#8 kubernetes', 102450],
     	['#9 yolov5', 1315],
     	['#10 vscode', 85267],
     	['#11 sodium-fabric', 448],
     	['#12 saleor', 18724],
     	['#13 hugo', 6455],
     	['#14 n8n', 4358],
     	['#15 airflow', 12904],
     	['#16 neovim', 18445],
     	['#17 three.js', 37769],
     	['#18 scrcpy', 1223],
     	['#19 next.js', 8736],
     	['#20 flutter', 25066],
     	['#21 element-plus', 1249],
     	['#22 CS-Notes', 3772],
     	['#23 pytorch', 38560],
     	['#24 ghidra', 4940],
     	['#25 kotlin', 84170],
     	
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