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
     	[2, 'Chia-Network', 'chia-blockchain', 4526],
     	[3, 'r4j0x00', 'exploits', 30],
     	[4, 'lucidrains', 'deep-daze', 225],
     	[5, 'taichi-dev', 'taichi', 6966],
     	[6, 'tailwindlabs', 'headlessui', 171],
     	[7, 'dromara', 'sa-token', 333],
     	[8, 'bradtraversy', 'vanillawebprojects', 72],
     	[9, 'merry75', 'educative.io_courses', 118],
     	[10, 'hagopj13', 'node-express-boilerplate', 214],
     	[11, 'google', 'leveldb', 358],
     	[12, 'ChristianChiarulli', 'LunarVim', 688],
     	[13, 'appsmithorg', 'appsmith', 5567],
     	[14, 'input-output-hk', 'plutus', 7801],
     	[15, 'zhangdaiscott', 'JimuReport', 107],
     	[16, 'openethereum', 'openethereum', 12151],
     	[17, 'bevyengine', 'bevy', 1725],
     	[18, 'covid19india', 'covid19india-react', 966],
     	[19, 'SerenityOS', 'serenity', 19310],
     	[20, 'jwasham', 'coding-interview-university', 1643],
     	[21, '30-seconds', '30-seconds-of-code', 5347],
     	[22, 'php', 'php-src', 123677],
     	[23, 'john-smilga', 'javascript-basic-projects', 101],
     	[24, 'dogecoin', 'dogecoin', 13532],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 Assemblies-of-putative-SARS-CoV2-spike-encoding-mRNA-sequences-for-vaccines-BNT-162b2-and-mRNA-1273', 23],
     	['#2 chia-blockchain', 4526],
     	['#3 exploits', 30],
     	['#4 deep-daze', 225],
     	['#5 taichi', 6966],
     	['#6 headlessui', 171],
     	['#7 sa-token', 333],
     	['#8 vanillawebprojects', 72],
     	['#9 educative.io_courses', 118],
     	['#10 node-express-boilerplate', 214],
     	['#11 leveldb', 358],
     	['#12 LunarVim', 688],
     	['#13 appsmith', 5567],
     	['#14 plutus', 7801],
     	['#15 JimuReport', 107],
     	['#16 openethereum', 12151],
     	['#17 bevy', 1725],
     	['#18 covid19india-react', 966],
     	['#19 serenity', 19310],
     	['#20 coding-interview-university', 1643],
     	['#21 30-seconds-of-code', 5347],
     	['#22 php-src', 123677],
     	['#23 javascript-basic-projects', 101],
     	['#24 dogecoin', 13532],
     	
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