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
	[1, 'Chia-Network', 'chia-blockchain', 4519],
     	[2, 'r4j0x00', 'exploits', 30],
     	[3, 'bradtraversy', 'vanillawebprojects', 72],
     	[4, 'tailwindlabs', 'headlessui', 171],
     	[5, 'dromara', 'sa-token', 332],
     	[6, 'Kethku', 'neovide', 514],
     	[7, 'merry75', 'educative.io_courses', 118],
     	[8, 'ChristianChiarulli', 'LunarVim', 688],
     	[9, 'google', 'leveldb', 358],
     	[10, 'hagopj13', 'node-express-boilerplate', 214],
     	[11, 'Ryujinx', 'Ryujinx', 1621],
     	[12, 'input-output-hk', 'plutus', 7801],
     	[13, 'openethereum', 'openethereum', 12151],
     	[14, 'Uniswap', 'uniswap-v3-core', 991],
     	[15, 'appsmithorg', 'appsmith', 5567],
     	[16, 'zhangdaiscott', 'JimuReport', 107],
     	[17, 'alexgurr', 'react-coding-challenges', 133],
     	[18, 'jklepatch', 'eattheblocks', 429],
     	[19, 'php', 'php-src', 123673],
     	[20, 'bevyengine', 'bevy', 1723],
     	[21, '30-seconds', '30-seconds-of-code', 5340],
     	[22, 'SerenityOS', 'serenity', 19225],
     	[23, 'getify', 'You-Dont-Know-JS', 1762],
     	[24, 'AobingJava', 'JavaFamily', 210],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 chia-blockchain', 4519],
     	['#2 exploits', 30],
     	['#3 vanillawebprojects', 72],
     	['#4 headlessui', 171],
     	['#5 sa-token', 332],
     	['#6 neovide', 514],
     	['#7 educative.io_courses', 118],
     	['#8 LunarVim', 688],
     	['#9 leveldb', 358],
     	['#10 node-express-boilerplate', 214],
     	['#11 Ryujinx', 1621],
     	['#12 plutus', 7801],
     	['#13 openethereum', 12151],
     	['#14 uniswap-v3-core', 991],
     	['#15 appsmith', 5567],
     	['#16 JimuReport', 107],
     	['#17 react-coding-challenges', 133],
     	['#18 eattheblocks', 429],
     	['#19 php-src', 123673],
     	['#20 bevy', 1723],
     	['#21 30-seconds-of-code', 5340],
     	['#22 serenity', 19225],
     	['#23 You-Dont-Know-JS', 1762],
     	['#24 JavaFamily', 210],
     	
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