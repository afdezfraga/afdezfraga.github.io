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
	[1, 'NAalytics', 'Assemblies-of-putative-SARS-CoV2-spike-encoding-mRNA-sequences-for-vaccines-BNT-162b2-and-mRNA-1273', 23],
     	[2, 'Chia-Network', 'chia-blockchain', 4522],
     	[3, 'r4j0x00', 'exploits', 30],
     	[4, 'lucidrains', 'deep-daze', 225],
     	[5, 'bradtraversy', 'vanillawebprojects', 72],
     	[6, 'Kethku', 'neovide', 514],
     	[7, 'tailwindlabs', 'headlessui', 171],
     	[8, 'dromara', 'sa-token', 333],
     	[9, 'merry75', 'educative.io_courses', 118],
     	[10, 'ChristianChiarulli', 'LunarVim', 688],
     	[11, 'google', 'leveldb', 358],
     	[12, 'openethereum', 'openethereum', 12151],
     	[13, 'hagopj13', 'node-express-boilerplate', 214],
     	[14, 'appsmithorg', 'appsmith', 5567],
     	[15, '30-seconds', '30-seconds-of-code', 5347],
     	[16, 'zhangdaiscott', 'JimuReport', 107],
     	[17, 'covid19india', 'covid19india-react', 966],
     	[18, 'input-output-hk', 'plutus', 7801],
     	[19, 'SerenityOS', 'serenity', 19247],
     	[20, 'bevyengine', 'bevy', 1724],
     	[21, 'jklepatch', 'eattheblocks', 430],
     	[22, 'php', 'php-src', 123674],
     	[23, 'Ryujinx', 'Ryujinx', 1624],
     	[24, 'go-kratos', 'kratos', 767],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 Assemblies-of-putative-SARS-CoV2-spike-encoding-mRNA-sequences-for-vaccines-BNT-162b2-and-mRNA-1273', 23],
     	['#2 chia-blockchain', 4522],
     	['#3 exploits', 30],
     	['#4 deep-daze', 225],
     	['#5 vanillawebprojects', 72],
     	['#6 neovide', 514],
     	['#7 headlessui', 171],
     	['#8 sa-token', 333],
     	['#9 educative.io_courses', 118],
     	['#10 LunarVim', 688],
     	['#11 leveldb', 358],
     	['#12 openethereum', 12151],
     	['#13 node-express-boilerplate', 214],
     	['#14 appsmith', 5567],
     	['#15 30-seconds-of-code', 5347],
     	['#16 JimuReport', 107],
     	['#17 covid19india-react', 966],
     	['#18 plutus', 7801],
     	['#19 serenity', 19247],
     	['#20 bevy', 1724],
     	['#21 eattheblocks', 430],
     	['#22 php-src', 123674],
     	['#23 Ryujinx', 1624],
     	['#24 kratos', 767],
     	
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