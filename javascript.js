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
     	[2, 'benawad', 'dogehouse', 2801],
     	[3, 'sickcodes', 'Docker-OSX', 250],
     	[4, 'alievk', 'avatarify-python', 351],
     	[5, 'Ryujinx', 'Ryujinx', 1580],
     	[6, 'AliaksandrSiarohin', 'first-order-model', 71],
     	[7, 'jart', 'cosmopolitan', 252],
     	[8, 'iperov', 'DeepFaceLab', 1152],
     	[9, 'spring-projects-experimental', 'spring-native', 1921],
     	[10, 'dotnet', 'maui', 7242],
     	[11, 'stefan-jansen', 'machine-learning-for-trading', 256],
     	[12, 'd2l-ai', 'd2l-zh', 3409],
     	[13, 'Chia-Network', 'chia-blockchain', 4347],
     	[14, 'sherlock-project', 'sherlock', 1505],
     	[15, 'openai', 'DALL-E', 2],
     	[16, 'microsoft', 'Web-Dev-For-Beginners', 783],
     	[17, 'flutter', 'flutter', 23288],
     	[18, 'Snailclimb', 'JavaGuide', 2950],
     	[19, 'nasa', 'openmct', 6759],
     	[20, 'android', 'compose-samples', 1069],
     	[21, 'pyroscope-io', 'pyroscope', 477],
     	[22, 'zhangdaiscott', 'jeecg-boot', 471],
     	[23, 'pancakeswap', 'pancake-frontend', 687],
     	[24, 'geekcomputers', 'Python', 2240],
     	[25, 'github', 'codeql', 21419],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 awesome-compose', 160],
     	['#2 dogehouse', 2801],
     	['#3 Docker-OSX', 250],
     	['#4 avatarify-python', 351],
     	['#5 Ryujinx', 1580],
     	['#6 first-order-model', 71],
     	['#7 cosmopolitan', 252],
     	['#8 DeepFaceLab', 1152],
     	['#9 spring-native', 1921],
     	['#10 maui', 7242],
     	['#11 machine-learning-for-trading', 256],
     	['#12 d2l-zh', 3409],
     	['#13 chia-blockchain', 4347],
     	['#14 sherlock', 1505],
     	['#15 DALL-E', 2],
     	['#16 Web-Dev-For-Beginners', 783],
     	['#17 flutter', 23288],
     	['#18 JavaGuide', 2950],
     	['#19 openmct', 6759],
     	['#20 compose-samples', 1069],
     	['#21 pyroscope', 477],
     	['#22 jeecg-boot', 471],
     	['#23 pancake-frontend', 687],
     	['#24 Python', 2240],
     	['#25 codeql', 21419],
     	
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