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
     	[2, 'slidevjs', 'slidev', 785],
     	[3, 'abuanwar072', 'Flutter-Responsive-Admin-Panel-or-Dashboard', 22],
     	[4, 'dogecoin', 'dogecoin', 13537],
     	[5, 'pallupz', 'covid-vaccine-booking', 389],
     	[6, 'youngyangyang04', 'leetcode-master', 1854],
     	[7, 'rustdesk', 'rustdesk', 59],
     	[8, 'ericaltendorf', 'plotman', 535],
     	[9, 'gwuhaolin', 'livego', 153],
     	[10, 'gto76', 'python-cheatsheet', 2101],
     	[11, 'trustwallet', 'assets', 8627],
     	[12, 'microsoft', 'winget-pkgs', 13554],
     	[13, 'academind', 'react-complete-guide-code', 3],
     	[14, 'iluwatar', 'java-design-patterns', 3108],
     	[15, 'SerenityOS', 'serenity', 21517],
     	[16, 'ossrs', 'srs', 6864],
     	[17, 'withfig', 'autocomplete', 1186],
     	[18, 'merry75', 'educative.io_courses', 118],
     	[19, 'Chia-Network', 'chiapos', 425],
     	[20, 'TheAlgorithms', 'Java', 1354],
     	[21, 'doocs', 'leetcode', 2615],
     	[22, 'dromara', 'shenyu', 1276],
     	[23, 'PaddlePaddle', 'PaddleDetection', 975],
     	[24, 'syncthing', 'syncthing', 6563],
     	[25, 'apache', 'pulsar', 6766],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 Swar-Chia-Plot-Manager', 335],
     	['#2 slidev', 785],
     	['#3 Flutter-Responsive-Admin-Panel-or-Dashboard', 22],
     	['#4 dogecoin', 13537],
     	['#5 covid-vaccine-booking', 389],
     	['#6 leetcode-master', 1854],
     	['#7 rustdesk', 59],
     	['#8 plotman', 535],
     	['#9 livego', 153],
     	['#10 python-cheatsheet', 2101],
     	['#11 assets', 8627],
     	['#12 winget-pkgs', 13554],
     	['#13 react-complete-guide-code', 3],
     	['#14 java-design-patterns', 3108],
     	['#15 serenity', 21517],
     	['#16 srs', 6864],
     	['#17 autocomplete', 1186],
     	['#18 educative.io_courses', 118],
     	['#19 chiapos', 425],
     	['#20 Java', 1354],
     	['#21 leetcode', 2615],
     	['#22 shenyu', 1276],
     	['#23 PaddleDetection', 975],
     	['#24 syncthing', 6563],
     	['#25 pulsar', 6766],
     	
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