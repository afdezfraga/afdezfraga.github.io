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
     	[2, 'Chia-Network', 'chia-blockchain', 4487],
     	[3, 'EleutherAI', 'gpt-neo', 835],
     	[4, 'lucidrains', 'deep-daze', 225],
     	[5, 'Ryujinx', 'Ryujinx', 1617],
     	[6, 'tailwindlabs', 'headlessui', 169],
     	[7, 'merry75', 'educative.io_courses', 118],
     	[8, 'bradtraversy', 'vanillawebprojects', 72],
     	[9, 'ChristianChiarulli', 'LunarVim', 686],
     	[10, 'GUI', 'covid-vaccine-spotter', 304],
     	[11, 'google', 'leveldb', 358],
     	[12, 'd2l-ai', 'd2l-zh', 3445],
     	[13, 'AobingJava', 'JavaFamily', 210],
     	[14, 'zhangdaiscott', 'JimuReport', 107],
     	[15, 'geekcomputers', 'Python', 2258],
     	[16, 'hagopj13', 'node-express-boilerplate', 214],
     	[17, 'openethereum', 'openethereum', 12143],
     	[18, 'edeng23', 'binance-trade-bot', 225],
     	[19, 'sveltejs', 'kit', 914],
     	[20, 'covid19india', 'covid19india-react', 963],
     	[21, 'jklepatch', 'eattheblocks', 429],
     	[22, 'bevyengine', 'bevy', 1707],
     	[23, 'mattermost', 'focalboard', 1293],
     	[24, 'SerenityOS', 'serenity', 19016],
     	[25, 'protocolbuffers', 'protobuf', 8117],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 exploits', 30],
     	['#2 chia-blockchain', 4487],
     	['#3 gpt-neo', 835],
     	['#4 deep-daze', 225],
     	['#5 Ryujinx', 1617],
     	['#6 headlessui', 169],
     	['#7 educative.io_courses', 118],
     	['#8 vanillawebprojects', 72],
     	['#9 LunarVim', 686],
     	['#10 covid-vaccine-spotter', 304],
     	['#11 leveldb', 358],
     	['#12 d2l-zh', 3445],
     	['#13 JavaFamily', 210],
     	['#14 JimuReport', 107],
     	['#15 Python', 2258],
     	['#16 node-express-boilerplate', 214],
     	['#17 openethereum', 12143],
     	['#18 binance-trade-bot', 225],
     	['#19 kit', 914],
     	['#20 covid19india-react', 963],
     	['#21 eattheblocks', 429],
     	['#22 bevy', 1707],
     	['#23 focalboard', 1293],
     	['#24 serenity', 19016],
     	['#25 protobuf', 8117],
     	
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