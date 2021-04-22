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
	[1, 'Chia-Network', 'chia-blockchain', 4510],
     	[2, 'r4j0x00', 'exploits', 30],
     	[3, 'bradtraversy', 'vanillawebprojects', 72],
     	[4, 'merry75', 'educative.io_courses', 118],
     	[5, 'tailwindlabs', 'headlessui', 171],
     	[6, 'Ryujinx', 'Ryujinx', 1619],
     	[7, 'ChristianChiarulli', 'LunarVim', 687],
     	[8, 'hagopj13', 'node-express-boilerplate', 214],
     	[9, 'google', 'leveldb', 358],
     	[10, 'AobingJava', 'JavaFamily', 210],
     	[11, 'openethereum', 'openethereum', 12151],
     	[12, 'zhangdaiscott', 'JimuReport', 107],
     	[13, 'SerenityOS', 'serenity', 19139],
     	[14, 'bevyengine', 'bevy', 1713],
     	[15, 'd2l-ai', 'd2l-zh', 3460],
     	[16, 'jklepatch', 'eattheblocks', 429],
     	[17, 'sveltejs', 'kit', 919],
     	[18, 'GUI', 'covid-vaccine-spotter', 304],
     	[19, 'microsoft', 'calculator', 651],
     	[20, 'taichi-dev', 'taichi', 6959],
     	[21, 'covid19india', 'covid19india-react', 963],
     	[22, 'appsmithorg', 'appsmith', 5549],
     	[23, 'protocolbuffers', 'protobuf', 8162],
     	[24, 'go-kratos', 'kratos', 765],
     	[25, 'alibaba', 'nacos', 3055],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 chia-blockchain', 4510],
     	['#2 exploits', 30],
     	['#3 vanillawebprojects', 72],
     	['#4 educative.io_courses', 118],
     	['#5 headlessui', 171],
     	['#6 Ryujinx', 1619],
     	['#7 LunarVim', 687],
     	['#8 node-express-boilerplate', 214],
     	['#9 leveldb', 358],
     	['#10 JavaFamily', 210],
     	['#11 openethereum', 12151],
     	['#12 JimuReport', 107],
     	['#13 serenity', 19139],
     	['#14 bevy', 1713],
     	['#15 d2l-zh', 3460],
     	['#16 eattheblocks', 429],
     	['#17 kit', 919],
     	['#18 covid-vaccine-spotter', 304],
     	['#19 calculator', 651],
     	['#20 taichi', 6959],
     	['#21 covid19india-react', 963],
     	['#22 appsmith', 5549],
     	['#23 protobuf', 8162],
     	['#24 kratos', 765],
     	['#25 nacos', 3055],
     	
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