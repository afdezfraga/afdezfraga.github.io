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
     	[2, 'abuanwar072', 'Flutter-Responsive-Admin-Panel-or-Dashboard', 22],
     	[3, 'pallupz', 'covid-vaccine-booking', 389],
     	[4, 'dogecoin', 'dogecoin', 13537],
     	[5, 'youngyangyang04', 'leetcode-master', 1842],
     	[6, 'ericaltendorf', 'plotman', 535],
     	[7, 'rustdesk', 'rustdesk', 58],
     	[8, 'gwuhaolin', 'livego', 153],
     	[9, 'alacritty', 'alacritty', 1837],
     	[10, 'academind', 'react-complete-guide-code', 3],
     	[11, 'trustwallet', 'assets', 8563],
     	[12, 'iluwatar', 'java-design-patterns', 3107],
     	[13, 'gto76', 'python-cheatsheet', 2101],
     	[14, 'SerenityOS', 'serenity', 21458],
     	[15, 'audacity', 'audacity', 13245],
     	[16, 'dromara', 'shenyu', 1275],
     	[17, 'Chia-Network', 'chiapos', 425],
     	[18, 'microsoft', 'winget-pkgs', 13468],
     	[19, 'syncthing', 'syncthing', 6559],
     	[20, 'withfig', 'autocomplete', 1175],
     	[21, 'doocs', 'leetcode', 2607],
     	[22, 'merry75', 'educative.io_courses', 118],
     	[23, 'apache', 'pulsar', 6763],
     	[24, 'TheAlgorithms', 'Java', 1352],
     	[25, 'PaddlePaddle', 'PaddleDetection', 975],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 Swar-Chia-Plot-Manager', 335],
     	['#2 Flutter-Responsive-Admin-Panel-or-Dashboard', 22],
     	['#3 covid-vaccine-booking', 389],
     	['#4 dogecoin', 13537],
     	['#5 leetcode-master', 1842],
     	['#6 plotman', 535],
     	['#7 rustdesk', 58],
     	['#8 livego', 153],
     	['#9 alacritty', 1837],
     	['#10 react-complete-guide-code', 3],
     	['#11 assets', 8563],
     	['#12 java-design-patterns', 3107],
     	['#13 python-cheatsheet', 2101],
     	['#14 serenity', 21458],
     	['#15 audacity', 13245],
     	['#16 shenyu', 1275],
     	['#17 chiapos', 425],
     	['#18 winget-pkgs', 13468],
     	['#19 syncthing', 6559],
     	['#20 autocomplete', 1175],
     	['#21 leetcode', 2607],
     	['#22 educative.io_courses', 118],
     	['#23 pulsar', 6763],
     	['#24 Java', 1352],
     	['#25 PaddleDetection', 975],
     	
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