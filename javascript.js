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
	[1, 'Chia-Network', 'chia-blockchain', 4613],
     	[2, 'dogecoin', 'dogecoin', 13535],
     	[3, 'chrisleekr', 'binance-trading-bot', 111],
     	[4, 'taichi-dev', 'taichi', 6978],
     	[5, 'DualCoder', 'vgpu_unlock', 23],
     	[6, 'photoprism', 'photoprism', 3772],
     	[7, 'DIGITALCRIMINAL', 'OnlyFans', 666],
     	[8, 'public-apis', 'public-apis', 2790],
     	[9, 'openethereum', 'openethereum', 12162],
     	[10, 'bradtraversy', 'vanillawebprojects', 72],
     	[11, 'jwasham', 'coding-interview-university', 1646],
     	[12, 'wbkd', 'react-flow', 1964],
     	[13, 'google', 'leveldb', 358],
     	[14, 'ChristianChiarulli', 'LunarVim', 731],
     	[15, 'solana-labs', 'solana', 14105],
     	[16, 'covid19india', 'covid19india-react', 967],
     	[17, '30-seconds', '30-seconds-of-code', 5348],
     	[18, 'supabase', 'supabase', 2395],
     	[19, 'tailwindlabs', 'headlessui', 180],
     	[20, 'trustwallet', 'assets', 7244],
     	[21, 'TheAlgorithms', 'Python', 2096],
     	[22, 'donnemartin', 'system-design-primer', 321],
     	[23, 'getify', 'You-Dont-Know-JS', 1762],
     	[24, 'jklepatch', 'eattheblocks', 442],
     	[25, 'go-kratos', 'kratos', 790],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 chia-blockchain', 4613],
     	['#2 dogecoin', 13535],
     	['#3 binance-trading-bot', 111],
     	['#4 taichi', 6978],
     	['#5 vgpu_unlock', 23],
     	['#6 photoprism', 3772],
     	['#7 OnlyFans', 666],
     	['#8 public-apis', 2790],
     	['#9 openethereum', 12162],
     	['#10 vanillawebprojects', 72],
     	['#11 coding-interview-university', 1646],
     	['#12 react-flow', 1964],
     	['#13 leveldb', 358],
     	['#14 LunarVim', 731],
     	['#15 solana', 14105],
     	['#16 covid19india-react', 967],
     	['#17 30-seconds-of-code', 5348],
     	['#18 supabase', 2395],
     	['#19 headlessui', 180],
     	['#20 assets', 7244],
     	['#21 Python', 2096],
     	['#22 system-design-primer', 321],
     	['#23 You-Dont-Know-JS', 1762],
     	['#24 eattheblocks', 442],
     	['#25 kratos', 790],
     	
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