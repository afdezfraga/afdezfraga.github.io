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
     	[2, 'google', 'zx', 130],
     	[3, 'slidevjs', 'slidev', 787],
     	[4, 'abuanwar072', 'Flutter-Responsive-Admin-Panel-or-Dashboard', 22],
     	[5, 'dogecoin', 'dogecoin', 13537],
     	[6, 'rustdesk', 'rustdesk', 61],
     	[7, 'youngyangyang04', 'leetcode-master', 1868],
     	[8, 'gwuhaolin', 'livego', 153],
     	[9, 'pallupz', 'covid-vaccine-booking', 389],
     	[10, 'ericaltendorf', 'plotman', 535],
     	[11, 'trustwallet', 'assets', 8657],
     	[12, 'iluwatar', 'java-design-patterns', 3108],
     	[13, 'gto76', 'python-cheatsheet', 2101],
     	[14, 'bhattbhavesh91', 'cowin-vaccination-slot-availability', 99],
     	[15, 'academind', 'react-complete-guide-code', 3],
     	[16, 'merry75', 'educative.io_courses', 118],
     	[17, 'microsoft', 'winget-pkgs', 13641],
     	[18, 'withfig', 'autocomplete', 1186],
     	[19, 'syncthing', 'syncthing', 6563],
     	[20, 'SerenityOS', 'serenity', 21574],
     	[21, 'microsoft', 'winget-cli', 370],
     	[22, 'Chia-Network', 'chiapos', 425],
     	[23, 'TheAlgorithms', 'Java', 1354],
     	[24, 'doocs', 'leetcode', 2619],
     	[25, 'ossrs', 'srs', 6864],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 Swar-Chia-Plot-Manager', 335],
     	['#2 zx', 130],
     	['#3 slidev', 787],
     	['#4 Flutter-Responsive-Admin-Panel-or-Dashboard', 22],
     	['#5 dogecoin', 13537],
     	['#6 rustdesk', 61],
     	['#7 leetcode-master', 1868],
     	['#8 livego', 153],
     	['#9 covid-vaccine-booking', 389],
     	['#10 plotman', 535],
     	['#11 assets', 8657],
     	['#12 java-design-patterns', 3108],
     	['#13 python-cheatsheet', 2101],
     	['#14 cowin-vaccination-slot-availability', 99],
     	['#15 react-complete-guide-code', 3],
     	['#16 educative.io_courses', 118],
     	['#17 winget-pkgs', 13641],
     	['#18 autocomplete', 1186],
     	['#19 syncthing', 6563],
     	['#20 serenity', 21574],
     	['#21 winget-cli', 370],
     	['#22 chiapos', 425],
     	['#23 Java', 1354],
     	['#24 leetcode', 2619],
     	['#25 srs', 6864],
     	
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