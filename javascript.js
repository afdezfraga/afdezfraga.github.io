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
	[1, 'docker', 'awesome-compose', 164],
     	[2, 'Ryujinx', 'Ryujinx', 1600],
     	[3, 'Chia-Network', 'chia-blockchain', 4423],
     	[4, 'GUI', 'covid-vaccine-spotter', 283],
     	[5, 'sveltejs', 'kit', 813],
     	[6, 'merry75', 'educative.io_courses', 118],
     	[7, 'sickcodes', 'Docker-OSX', 262],
     	[8, 'ChristianChiarulli', 'nvcode', 670],
     	[9, 'benawad', 'dogehouse', 3713],
     	[10, 'nasa', 'openmct', 6767],
     	[11, 'openjdk', 'jdk', 63903],
     	[12, 'stefan-jansen', 'machine-learning-for-trading', 262],
     	[13, 'chatwoot', 'chatwoot', 1091],
     	[14, 'geekcomputers', 'Python', 2249],
     	[15, 'CyC2018', 'CS-Notes', 3766],
     	[16, 'oppia', 'oppia', 12748],
     	[17, 'discordjs', 'discord.js', 4973],
     	[18, 'srcrs', 'UnicomTask', 109],
     	[19, 'edeng23', 'binance-trade-bot', 218],
     	[20, 'OpenZeppelin', 'openzeppelin-contracts', 2391],
     	[21, 'XTLS', 'Xray-core', 165],
     	[22, 'd2l-ai', 'd2l-zh', 3432],
     	[23, 'AobingJava', 'JavaFamily', 210],
     	[24, 'jesse-ai', 'jesse', 824],
     	[25, 'bettercap', 'bettercap', 1970],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 awesome-compose', 164],
     	['#2 Ryujinx', 1600],
     	['#3 chia-blockchain', 4423],
     	['#4 covid-vaccine-spotter', 283],
     	['#5 kit', 813],
     	['#6 educative.io_courses', 118],
     	['#7 Docker-OSX', 262],
     	['#8 nvcode', 670],
     	['#9 dogehouse', 3713],
     	['#10 openmct', 6767],
     	['#11 jdk', 63903],
     	['#12 machine-learning-for-trading', 262],
     	['#13 chatwoot', 1091],
     	['#14 Python', 2249],
     	['#15 CS-Notes', 3766],
     	['#16 oppia', 12748],
     	['#17 discord.js', 4973],
     	['#18 UnicomTask', 109],
     	['#19 binance-trade-bot', 218],
     	['#20 openzeppelin-contracts', 2391],
     	['#21 Xray-core', 165],
     	['#22 d2l-zh', 3432],
     	['#23 JavaFamily', 210],
     	['#24 jesse', 824],
     	['#25 bettercap', 1970],
     	
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