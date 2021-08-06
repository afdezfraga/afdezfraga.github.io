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
	[1, 'dromara', 'Sa-Token', 493],
     	[2, 'microsoft', 'ML-For-Beginners', 1094],
     	[3, 'myspaghetti', 'macos-virtualbox', 574],
     	[4, 'bradtraversy', '50projects50days', 122],
     	[5, 'dataease', 'dataease', 2157],
     	[6, 'facebookresearch', 'ParlAI', 3873],
     	[7, 'go-kratos', 'kratos', 1063],
     	[8, 'ventoy', 'Ventoy', 403],
     	[9, 'kean', 'Pulse', 252],
     	[10, 'supabase', 'supabase', 3112],
     	[11, 'zero205', 'JD_tencent_scf', 2720],
     	[12, 'serverless-stack', 'serverless-stack', 1369],
     	[13, 'mirumee', 'saleor', 18769],
     	[14, 'YMFE', 'yapi', 5747],
     	[15, 'smicallef', 'spiderfoot', 3225],
     	[16, 'avelino', 'awesome-go', 3799],
     	[17, 'quii', 'learn-go-with-tests', 1120],
     	[18, 'doocs', 'jvm', 109],
     	[19, 'scutan90', 'DeepLearning-500-questions', 1271],
     	[20, 'opensearch-project', 'OpenSearch', 54984],
     	[21, 'org-roam', 'org-roam', 825],
     	[22, 'microsoft', 'Web-Dev-For-Beginners', 1022],
     	[23, 'nvm-sh', 'nvm', 1998],
     	[24, 'philc', 'vimium', 4419],
     	[25, 'keycloak', 'keycloak', 13395],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 Sa-Token', 493],
     	['#2 ML-For-Beginners', 1094],
     	['#3 macos-virtualbox', 574],
     	['#4 50projects50days', 122],
     	['#5 dataease', 2157],
     	['#6 ParlAI', 3873],
     	['#7 kratos', 1063],
     	['#8 Ventoy', 403],
     	['#9 Pulse', 252],
     	['#10 supabase', 3112],
     	['#11 JD_tencent_scf', 2720],
     	['#12 serverless-stack', 1369],
     	['#13 saleor', 18769],
     	['#14 yapi', 5747],
     	['#15 spiderfoot', 3225],
     	['#16 awesome-go', 3799],
     	['#17 learn-go-with-tests', 1120],
     	['#18 jvm', 109],
     	['#19 DeepLearning-500-questions', 1271],
     	['#20 OpenSearch', 54984],
     	['#21 org-roam', 825],
     	['#22 Web-Dev-For-Beginners', 1022],
     	['#23 nvm', 1998],
     	['#24 vimium', 4419],
     	['#25 keycloak', 13395],
     	
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