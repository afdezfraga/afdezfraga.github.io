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
	[1, 'Chia-Network', 'chia-blockchain', 4516],
     	[2, 'r4j0x00', 'exploits', 30],
     	[3, 'dromara', 'sa-token', 320],
     	[4, 'merry75', 'educative.io_courses', 118],
     	[5, 'bradtraversy', 'vanillawebprojects', 72],
     	[6, 'tailwindlabs', 'headlessui', 171],
     	[7, 'Kethku', 'neovide', 514],
     	[8, 'Uniswap', 'uniswap-v3-core', 991],
     	[9, 'Ryujinx', 'Ryujinx', 1620],
     	[10, 'ChristianChiarulli', 'LunarVim', 688],
     	[11, 'hagopj13', 'node-express-boilerplate', 214],
     	[12, 'alexgurr', 'react-coding-challenges', 131],
     	[13, 'input-output-hk', 'plutus', 7792],
     	[14, 'google', 'leveldb', 358],
     	[15, 'testerSunshine', '12306', 435],
     	[16, 'openethereum', 'openethereum', 12151],
     	[17, 'SerenityOS', 'serenity', 19166],
     	[18, 'zhangdaiscott', 'JimuReport', 107],
     	[19, 'bevyengine', 'bevy', 1720],
     	[20, 'jklepatch', 'eattheblocks', 429],
     	[21, 'appsmithorg', 'appsmith', 5555],
     	[22, 'microsoft', 'calculator', 651],
     	[23, 'covid19india', 'covid19india-react', 963],
     	[24, 'AobingJava', 'JavaFamily', 210],
     	[25, 'trekhleb', 'javascript-algorithms', 941],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 chia-blockchain', 4516],
     	['#2 exploits', 30],
     	['#3 sa-token', 320],
     	['#4 educative.io_courses', 118],
     	['#5 vanillawebprojects', 72],
     	['#6 headlessui', 171],
     	['#7 neovide', 514],
     	['#8 uniswap-v3-core', 991],
     	['#9 Ryujinx', 1620],
     	['#10 LunarVim', 688],
     	['#11 node-express-boilerplate', 214],
     	['#12 react-coding-challenges', 131],
     	['#13 plutus', 7792],
     	['#14 leveldb', 358],
     	['#15 12306', 435],
     	['#16 openethereum', 12151],
     	['#17 serenity', 19166],
     	['#18 JimuReport', 107],
     	['#19 bevy', 1720],
     	['#20 eattheblocks', 429],
     	['#21 appsmith', 5555],
     	['#22 calculator', 651],
     	['#23 covid19india-react', 963],
     	['#24 JavaFamily', 210],
     	['#25 javascript-algorithms', 941],
     	
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