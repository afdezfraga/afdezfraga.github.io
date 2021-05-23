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
	[1, 'chrisleekr', 'binance-trading-bot', 118],
     	[2, 'dogecoin', 'dogecoin', 13537],
     	[3, 'Chia-Network', 'chia-blockchain', 4679],
     	[4, 'DIGITALCRIMINAL', 'OnlyFans', 691],
     	[5, 'youngyangyang04', 'leetcode-master', 1576],
     	[6, 'trustwallet', 'assets', 7938],
     	[7, 'audacity', 'audacity', 13157],
     	[8, 'TheAlgorithms', 'Python', 2107],
     	[9, 'covid19india', 'covid19india-react', 968],
     	[10, 'solana-labs', 'solana', 14254],
     	[11, 'thedevdojo', 'wave', 98],
     	[12, 'alacritty', 'alacritty', 1836],
     	[13, 'photoprism', 'photoprism', 3805],
     	[14, 'jklepatch', 'eattheblocks', 446],
     	[15, '30-seconds', '30-seconds-of-code', 5352],
     	[16, 'EbookFoundation', 'free-programming-books', 6165],
     	[17, 'Uniswap', 'uniswap-v3-periphery', 304],
     	[18, 'kamranahmedse', 'developer-roadmap', 330],
     	[19, 'supabase', 'supabase', 2526],
     	[20, 'kelseyhightower', 'kubernetes-the-hard-way', 285],
     	[21, 'apache', 'pulsar', 6683],
     	[22, 'Uniswap', 'uniswap-interface', 1308],
     	[23, 'goldbergyoni', 'nodebestpractices', 3294],
     	[24, 'pancakeswap', 'pancake-frontend', 1118],
     	[25, 'pyodide', 'pyodide', 1487],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 binance-trading-bot', 118],
     	['#2 dogecoin', 13537],
     	['#3 chia-blockchain', 4679],
     	['#4 OnlyFans', 691],
     	['#5 leetcode-master', 1576],
     	['#6 assets', 7938],
     	['#7 audacity', 13157],
     	['#8 Python', 2107],
     	['#9 covid19india-react', 968],
     	['#10 solana', 14254],
     	['#11 wave', 98],
     	['#12 alacritty', 1836],
     	['#13 photoprism', 3805],
     	['#14 eattheblocks', 446],
     	['#15 30-seconds-of-code', 5352],
     	['#16 free-programming-books', 6165],
     	['#17 uniswap-v3-periphery', 304],
     	['#18 developer-roadmap', 330],
     	['#19 supabase', 2526],
     	['#20 kubernetes-the-hard-way', 285],
     	['#21 pulsar', 6683],
     	['#22 uniswap-interface', 1308],
     	['#23 nodebestpractices', 3294],
     	['#24 pancake-frontend', 1118],
     	['#25 pyodide', 1487],
     	
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