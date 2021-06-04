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
	[1, 'swar', 'Swar-Chia-Plot-Manager', 335],
     	[2, 'dogecoin', 'dogecoin', 13537],
     	[3, 'youngyangyang04', 'leetcode-master', 1833],
     	[4, 'ericaltendorf', 'plotman', 535],
     	[5, 'academind', 'react-complete-guide-code', 3],
     	[6, 'audacity', 'audacity', 13239],
     	[7, 'withfig', 'autocomplete', 1164],
     	[8, 'gwuhaolin', 'livego', 153],
     	[9, 'alacritty', 'alacritty', 1837],
     	[10, 'dromara', 'shenyu', 1272],
     	[11, 'Chia-Network', 'chiapos', 425],
     	[12, 'trustwallet', 'assets', 8495],
     	[13, 'gto76', 'python-cheatsheet', 2101],
     	[14, 'rustdesk', 'rustdesk', 53],
     	[15, 'iluwatar', 'java-design-patterns', 3103],
     	[16, 'syncthing', 'syncthing', 6558],
     	[17, 'PaddlePaddle', 'PaddleDetection', 974],
     	[18, 'apache', 'pulsar', 6760],
     	[19, 'doocs', 'leetcode', 2603],
     	[20, 'ossrs', 'srs', 6864],
     	[21, 'Chia-Network', 'chia-docker', 111],
     	[22, 'jklepatch', 'eattheblocks', 457],
     	[23, 'SerenityOS', 'serenity', 21389],
     	[24, 'emilk', 'egui', 1363],
     	[25, 'xzhih', 'one-key-hidpi', 58],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 Swar-Chia-Plot-Manager', 335],
     	['#2 dogecoin', 13537],
     	['#3 leetcode-master', 1833],
     	['#4 plotman', 535],
     	['#5 react-complete-guide-code', 3],
     	['#6 audacity', 13239],
     	['#7 autocomplete', 1164],
     	['#8 livego', 153],
     	['#9 alacritty', 1837],
     	['#10 shenyu', 1272],
     	['#11 chiapos', 425],
     	['#12 assets', 8495],
     	['#13 python-cheatsheet', 2101],
     	['#14 rustdesk', 53],
     	['#15 java-design-patterns', 3103],
     	['#16 syncthing', 6558],
     	['#17 PaddleDetection', 974],
     	['#18 pulsar', 6760],
     	['#19 leetcode', 2603],
     	['#20 srs', 6864],
     	['#21 chia-docker', 111],
     	['#22 eattheblocks', 457],
     	['#23 serenity', 21389],
     	['#24 egui', 1363],
     	['#25 one-key-hidpi', 58],
     	
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