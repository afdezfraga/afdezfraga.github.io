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
	[1, 'docker', 'awesome-compose', 163],
     	[2, 'Ryujinx', 'Ryujinx', 1598],
     	[3, 'Chia-Network', 'chia-blockchain', 4419],
     	[4, 'sveltejs', 'kit', 809],
     	[5, 'sickcodes', 'Docker-OSX', 261],
     	[6, 'GUI', 'covid-vaccine-spotter', 281],
     	[7, 'benawad', 'dogehouse', 3699],
     	[8, 'merry75', 'educative.io_courses', 118],
     	[9, 'srcrs', 'UnicomTask', 109],
     	[10, 'ChristianChiarulli', 'nvcode', 668],
     	[11, 'discordjs', 'discord.js', 4973],
     	[12, 'nasa', 'openmct', 6767],
     	[13, 'openjdk', 'jdk', 63883],
     	[14, 'stefan-jansen', 'machine-learning-for-trading', 262],
     	[15, 'geekcomputers', 'Python', 2249],
     	[16, 'spring-projects-experimental', 'spring-native', 1995],
     	[17, 'CyC2018', 'CS-Notes', 3766],
     	[18, 'chatwoot', 'chatwoot', 1090],
     	[19, 'XTLS', 'Xray-core', 165],
     	[20, 'bettercap', 'bettercap', 1962],
     	[21, 'edeng23', 'binance-trade-bot', 218],
     	[22, 'OpenZeppelin', 'openzeppelin-contracts', 2390],
     	[23, 'jesse-ai', 'jesse', 822],
     	[24, 'd2l-ai', 'd2l-zh', 3428],
     	[25, 'PeterL1n', 'BackgroundMattingV2', 28],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 awesome-compose', 163],
     	['#2 Ryujinx', 1598],
     	['#3 chia-blockchain', 4419],
     	['#4 kit', 809],
     	['#5 Docker-OSX', 261],
     	['#6 covid-vaccine-spotter', 281],
     	['#7 dogehouse', 3699],
     	['#8 educative.io_courses', 118],
     	['#9 UnicomTask', 109],
     	['#10 nvcode', 668],
     	['#11 discord.js', 4973],
     	['#12 openmct', 6767],
     	['#13 jdk', 63883],
     	['#14 machine-learning-for-trading', 262],
     	['#15 Python', 2249],
     	['#16 spring-native', 1995],
     	['#17 CS-Notes', 3766],
     	['#18 chatwoot', 1090],
     	['#19 Xray-core', 165],
     	['#20 bettercap', 1962],
     	['#21 binance-trade-bot', 218],
     	['#22 openzeppelin-contracts', 2390],
     	['#23 jesse', 822],
     	['#24 d2l-zh', 3428],
     	['#25 BackgroundMattingV2', 28],
     	
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