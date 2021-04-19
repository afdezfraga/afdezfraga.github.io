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
	[1, 'r4j0x00', 'exploits', 30],
     	[2, 'Chia-Network', 'chia-blockchain', 4471],
     	[3, 'lucidrains', 'deep-daze', 222],
     	[4, 'bradtraversy', 'vanillawebprojects', 69],
     	[5, 'tailwindlabs', 'headlessui', 168],
     	[6, 'Ryujinx', 'Ryujinx', 1617],
     	[7, 'merry75', 'educative.io_courses', 118],
     	[8, 'ChristianChiarulli', 'LunarVim', 685],
     	[9, 'GUI', 'covid-vaccine-spotter', 302],
     	[10, 'geekcomputers', 'Python', 2258],
     	[11, 'LukeSmithxyz', 'based.cooking', 812],
     	[12, 'google', 'leveldb', 358],
     	[13, 'mattermost', 'focalboard', 1289],
     	[14, 'AobingJava', 'JavaFamily', 210],
     	[15, 'd2l-ai', 'd2l-zh', 3441],
     	[16, 'edeng23', 'binance-trade-bot', 225],
     	[17, 'CyC2018', 'CS-Notes', 3772],
     	[18, 'zhangdaiscott', 'JimuReport', 107],
     	[19, 'jklepatch', 'eattheblocks', 429],
     	[20, 'openethereum', 'openethereum', 12143],
     	[21, 'hagopj13', 'node-express-boilerplate', 214],
     	[22, 'alibaba', 'nacos', 3046],
     	[23, 'protocolbuffers', 'protobuf', 8115],
     	[24, 'sveltejs', 'kit', 893],
     	[25, 'chatwoot', 'chatwoot', 1106],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 exploits', 30],
     	['#2 chia-blockchain', 4471],
     	['#3 deep-daze', 222],
     	['#4 vanillawebprojects', 69],
     	['#5 headlessui', 168],
     	['#6 Ryujinx', 1617],
     	['#7 educative.io_courses', 118],
     	['#8 LunarVim', 685],
     	['#9 covid-vaccine-spotter', 302],
     	['#10 Python', 2258],
     	['#11 based.cooking', 812],
     	['#12 leveldb', 358],
     	['#13 focalboard', 1289],
     	['#14 JavaFamily', 210],
     	['#15 d2l-zh', 3441],
     	['#16 binance-trade-bot', 225],
     	['#17 CS-Notes', 3772],
     	['#18 JimuReport', 107],
     	['#19 eattheblocks', 429],
     	['#20 openethereum', 12143],
     	['#21 node-express-boilerplate', 214],
     	['#22 nacos', 3046],
     	['#23 protobuf', 8115],
     	['#24 kit', 893],
     	['#25 chatwoot', 1106],
     	
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