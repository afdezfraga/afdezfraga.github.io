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
	[1, 'docker', 'awesome-compose', 160],
     	[2, 'alievk', 'avatarify-python', 351],
     	[3, 'benawad', 'dogehouse', 2544],
     	[4, 'sickcodes', 'Docker-OSX', 241],
     	[5, 'jart', 'cosmopolitan', 249],
     	[6, 'android', 'compose-samples', 1058],
     	[7, 'AliaksandrSiarohin', 'first-order-model', 71],
     	[8, 'authelia', 'authelia', 1709],
     	[9, 'liamg', 'traitor', 56],
     	[10, 'grishka', 'Houseclub', 47],
     	[11, 'google', 'model_search', 8],
     	[12, 'iperov', 'DeepFaceLab', 1150],
     	[13, 'dotnet', 'maui', 7222],
     	[14, 'orkestral', 'venom', 781],
     	[15, 'd2l-ai', 'd2l-zh', 3401],
     	[16, 'pyroscope-io', 'pyroscope', 477],
     	[17, 'lloesche', 'valheim-server-docker', 165],
     	[18, 'Snailclimb', 'JavaGuide', 2933],
     	[19, 'sherlock-project', 'sherlock', 1505],
     	[20, 'pancakeswap', 'pancake-frontend', 670],
     	[21, 'Sairyss', 'domain-driven-hexagon', 245],
     	[22, 'zhangdaiscott', 'jeecg-boot', 468],
     	[23, 'stefan-jansen', 'machine-learning-for-trading', 256],
     	[24, 'github', 'codeql', 21175],
     	[25, 'flutter', 'flutter', 23222],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 awesome-compose', 160],
     	['#2 avatarify-python', 351],
     	['#3 dogehouse', 2544],
     	['#4 Docker-OSX', 241],
     	['#5 cosmopolitan', 249],
     	['#6 compose-samples', 1058],
     	['#7 first-order-model', 71],
     	['#8 authelia', 1709],
     	['#9 traitor', 56],
     	['#10 Houseclub', 47],
     	['#11 model_search', 8],
     	['#12 DeepFaceLab', 1150],
     	['#13 maui', 7222],
     	['#14 venom', 781],
     	['#15 d2l-zh', 3401],
     	['#16 pyroscope', 477],
     	['#17 valheim-server-docker', 165],
     	['#18 JavaGuide', 2933],
     	['#19 sherlock', 1505],
     	['#20 pancake-frontend', 670],
     	['#21 domain-driven-hexagon', 245],
     	['#22 jeecg-boot', 468],
     	['#23 machine-learning-for-trading', 256],
     	['#24 codeql', 21175],
     	['#25 flutter', 23222],
     	
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