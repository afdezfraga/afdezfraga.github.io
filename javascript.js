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
     	[3, 'dataease', 'dataease', 2179],
     	[4, 'myspaghetti', 'macos-virtualbox', 574],
     	[5, 'facebookresearch', 'ParlAI', 3875],
     	[6, 'bradtraversy', '50projects50days', 122],
     	[7, 'ventoy', 'Ventoy', 404],
     	[8, 'microsoft', 'ML-For-Beginners', 1109],
     	[9, 'mitmproxy', 'mitmproxy', 9427],
     	[10, 'go-kratos', 'kratos', 1065],
     	[11, 'geekxh', 'hello-algorithm', 390],
     	[12, 'microsoft', 'Web-Dev-For-Beginners', 1026],
     	[13, 'doocs', 'jvm', 109],
     	[14, 'opensearch-project', 'OpenSearch', 54985],
     	[15, 'supabase', 'supabase', 3120],
     	[16, 'nvm-sh', 'nvm', 1998],
     	[17, 'outline', 'outline', 3321],
     	[18, 'org-roam', 'org-roam', 827],
     	[19, 'avelino', 'awesome-go', 3800],
     	[20, 'scutan90', 'DeepLearning-500-questions', 1271],
     	[21, 'smicallef', 'spiderfoot', 3230],
     	[22, 'quii', 'learn-go-with-tests', 1120],
     	[23, 'deepmind', 'deepmind-research', 266],
     	[24, 'serverless-stack', 'serverless-stack', 1374],
     	[25, 'alacritty', 'alacritty', 1870],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 IoT-For-Beginners', 203],
     	['#2 Sa-Token', 493],
     	['#3 dataease', 2179],
     	['#4 macos-virtualbox', 574],
     	['#5 ParlAI', 3875],
     	['#6 50projects50days', 122],
     	['#7 Ventoy', 404],
     	['#8 ML-For-Beginners', 1109],
     	['#9 mitmproxy', 9427],
     	['#10 kratos', 1065],
     	['#11 hello-algorithm', 390],
     	['#12 Web-Dev-For-Beginners', 1026],
     	['#13 jvm', 109],
     	['#14 OpenSearch', 54985],
     	['#15 supabase', 3120],
     	['#16 nvm', 1998],
     	['#17 outline', 3321],
     	['#18 org-roam', 827],
     	['#19 awesome-go', 3800],
     	['#20 DeepLearning-500-questions', 1271],
     	['#21 spiderfoot', 3230],
     	['#22 learn-go-with-tests', 1120],
     	['#23 deepmind-research', 266],
     	['#24 serverless-stack', 1374],
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