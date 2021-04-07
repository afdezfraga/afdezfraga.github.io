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
     	[2, 'sickcodes', 'Docker-OSX', 255],
     	[3, 'Ryujinx', 'Ryujinx', 1593],
     	[4, 'benawad', 'dogehouse', 3397],
     	[5, 'sherlock-project', 'sherlock', 1505],
     	[6, 'spring-projects-experimental', 'spring-native', 1978],
     	[7, 'Chia-Network', 'chia-blockchain', 4398],
     	[8, 'd2l-ai', 'd2l-zh', 3421],
     	[9, 'geekcomputers', 'Python', 2246],
     	[10, 'merry75', 'educative.io_courses', 118],
     	[11, 'ChristianChiarulli', 'nvcode', 659],
     	[12, 'nasa', 'openmct', 6765],
     	[13, 'openjdk', 'jdk', 63827],
     	[14, 'CyC2018', 'CS-Notes', 3766],
     	[15, 'stefan-jansen', 'machine-learning-for-trading', 257],
     	[16, 'discordjs', 'discord.js', 4973],
     	[17, 'crystal-lang', 'crystal', 13074],
     	[18, 'chatwoot', 'chatwoot', 1079],
     	[19, 'OpenZeppelin', 'openzeppelin-contracts', 2385],
     	[20, 'changgyhub', 'leetcode_101', 63],
     	[21, 'bettercap', 'bettercap', 1940],
     	[22, 'XTLS', 'Xray-core', 165],
     	[23, 'dotnet', 'net6-mobile-samples', 91],
     	[24, 'jesse-ai', 'jesse', 817],
     	[25, 'dwisiswant0', 'apkleaks', 136],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 awesome-compose', 163],
     	['#2 Docker-OSX', 255],
     	['#3 Ryujinx', 1593],
     	['#4 dogehouse', 3397],
     	['#5 sherlock', 1505],
     	['#6 spring-native', 1978],
     	['#7 chia-blockchain', 4398],
     	['#8 d2l-zh', 3421],
     	['#9 Python', 2246],
     	['#10 educative.io_courses', 118],
     	['#11 nvcode', 659],
     	['#12 openmct', 6765],
     	['#13 jdk', 63827],
     	['#14 CS-Notes', 3766],
     	['#15 machine-learning-for-trading', 257],
     	['#16 discord.js', 4973],
     	['#17 crystal', 13074],
     	['#18 chatwoot', 1079],
     	['#19 openzeppelin-contracts', 2385],
     	['#20 leetcode_101', 63],
     	['#21 bettercap', 1940],
     	['#22 Xray-core', 165],
     	['#23 net6-mobile-samples', 91],
     	['#24 jesse', 817],
     	['#25 apkleaks', 136],
     	
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