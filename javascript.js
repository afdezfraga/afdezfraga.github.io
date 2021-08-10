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
	[1, 'microsoft', 'IoT-For-Beginners', 203],
     	[2, 'dromara', 'Sa-Token', 493],
     	[3, 'shufflewzc', 'faker2', 311],
     	[4, 'dataease', 'dataease', 2210],
     	[5, 'myspaghetti', 'macos-virtualbox', 574],
     	[6, 'ventoy', 'Ventoy', 404],
     	[7, 'facebookresearch', 'ParlAI', 3875],
     	[8, 'bradtraversy', '50projects50days', 124],
     	[9, 'geekxh', 'hello-algorithm', 390],
     	[10, 'go-kratos', 'kratos', 1068],
     	[11, 'laynH', 'Anime-Girls-Holding-Programming-Books', 406],
     	[12, 'doocs', 'jvm', 109],
     	[13, 'supabase', 'supabase', 3121],
     	[14, 'opensearch-project', 'OpenSearch', 54986],
     	[15, 'outline', 'outline', 3321],
     	[16, 'org-roam', 'org-roam', 834],
     	[17, 'nvm-sh', 'nvm', 1998],
     	[18, 'microsoft', 'Web-Dev-For-Beginners', 1028],
     	[19, 'avelino', 'awesome-go', 3802],
     	[20, 'scutan90', 'DeepLearning-500-questions', 1271],
     	[21, 'flameshot-org', 'flameshot', 1406],
     	[22, 'serverless-stack', 'serverless-stack', 1378],
     	[23, 'typeorm', 'typeorm', 4748],
     	[24, 'elastic', 'elasticsearch-py', 1325],
     	[25, 'alacritty', 'alacritty', 1870],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 IoT-For-Beginners', 203],
     	['#2 Sa-Token', 493],
     	['#3 faker2', 311],
     	['#4 dataease', 2210],
     	['#5 macos-virtualbox', 574],
     	['#6 Ventoy', 404],
     	['#7 ParlAI', 3875],
     	['#8 50projects50days', 124],
     	['#9 hello-algorithm', 390],
     	['#10 kratos', 1068],
     	['#11 Anime-Girls-Holding-Programming-Books', 406],
     	['#12 jvm', 109],
     	['#13 supabase', 3121],
     	['#14 OpenSearch', 54986],
     	['#15 outline', 3321],
     	['#16 org-roam', 834],
     	['#17 nvm', 1998],
     	['#18 Web-Dev-For-Beginners', 1028],
     	['#19 awesome-go', 3802],
     	['#20 DeepLearning-500-questions', 1271],
     	['#21 flameshot', 1406],
     	['#22 serverless-stack', 1378],
     	['#23 typeorm', 4748],
     	['#24 elasticsearch-py', 1325],
     	['#25 alacritty', 1870],
     	
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