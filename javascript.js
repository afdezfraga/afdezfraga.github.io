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
	[1, 'Chia-Network', 'chia-blockchain', 4650],
     	[2, 'dogecoin', 'dogecoin', 13535],
     	[3, 'chrisleekr', 'binance-trading-bot', 111],
     	[4, 'calendso', 'calendso', 183],
     	[5, 'DIGITALCRIMINAL', 'OnlyFans', 680],
     	[6, 'thedevdojo', 'wave', 89],
     	[7, 'photoprism', 'photoprism', 3777],
     	[8, '30-seconds', '30-seconds-of-code', 5348],
     	[9, 'wbkd', 'react-flow', 1964],
     	[10, 'jwasham', 'coding-interview-university', 1646],
     	[11, 'solana-labs', 'solana', 14177],
     	[12, 'elixir-nx', 'livebook', 229],
     	[13, 'trustwallet', 'assets', 7526],
     	[14, 'public-apis', 'public-apis', 2803],
     	[15, 'testerSunshine', '12306', 435],
     	[16, 'youngyangyang04', 'leetcode-master', 663],
     	[17, 'supabase', 'supabase', 2467],
     	[18, 'alacritty', 'alacritty', 1831],
     	[19, 'covid19india', 'covid19india-react', 967],
     	[20, 'audacity', 'audacity', 13105],
     	[21, 'ChristianChiarulli', 'LunarVim', 734],
     	[22, 'popcorn-official', 'popcorn-desktop', 7499],
     	[23, 'milvus-io', 'milvus', 6846],
     	[24, 'apache', 'pulsar', 6616],
     	[25, 'TheAlgorithms', 'Python', 2098],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 chia-blockchain', 4650],
     	['#2 dogecoin', 13535],
     	['#3 binance-trading-bot', 111],
     	['#4 calendso', 183],
     	['#5 OnlyFans', 680],
     	['#6 wave', 89],
     	['#7 photoprism', 3777],
     	['#8 30-seconds-of-code', 5348],
     	['#9 react-flow', 1964],
     	['#10 coding-interview-university', 1646],
     	['#11 solana', 14177],
     	['#12 livebook', 229],
     	['#13 assets', 7526],
     	['#14 public-apis', 2803],
     	['#15 12306', 435],
     	['#16 leetcode-master', 663],
     	['#17 supabase', 2467],
     	['#18 alacritty', 1831],
     	['#19 covid19india-react', 967],
     	['#20 audacity', 13105],
     	['#21 LunarVim', 734],
     	['#22 popcorn-desktop', 7499],
     	['#23 milvus', 6846],
     	['#24 pulsar', 6616],
     	['#25 Python', 2098],
     	
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