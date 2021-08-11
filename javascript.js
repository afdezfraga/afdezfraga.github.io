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
	[1, 'dromara', 'Sa-Token', 497],
     	[2, 'microsoft', 'IoT-For-Beginners', 203],
     	[3, 'dataease', 'dataease', 2210],
     	[4, 'myspaghetti', 'macos-virtualbox', 574],
     	[5, 'facebookresearch', 'ParlAI', 3876],
     	[6, 'bradtraversy', '50projects50days', 124],
     	[7, 'mitmproxy', 'mitmproxy', 9431],
     	[8, 'shufflewzc', 'faker2', 322],
     	[9, 'ventoy', 'Ventoy', 405],
     	[10, 'chefyuan', 'algorithm-base', 352],
     	[11, 'geekxh', 'hello-algorithm', 390],
     	[12, 'opensearch-project', 'OpenSearch', 54989],
     	[13, 'go-kratos', 'kratos', 1070],
     	[14, 'doocs', 'jvm', 109],
     	[15, 'yuzu-emu', 'yuzu', 19413],
     	[16, 'supabase', 'supabase', 3124],
     	[17, 'outline', 'outline', 3321],
     	[18, 'org-roam', 'org-roam', 836],
     	[19, 'scutan90', 'DeepLearning-500-questions', 1271],
     	[20, 'avelino', 'awesome-go', 3803],
     	[21, 'elastic', 'elasticsearch-py', 1327],
     	[22, 'flameshot-org', 'flameshot', 1406],
     	[23, 'quii', 'learn-go-with-tests', 1120],
     	[24, 'microsoft', 'Web-Dev-For-Beginners', 1028],
     	[25, 'nvm-sh', 'nvm', 1998],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 Sa-Token', 497],
     	['#2 IoT-For-Beginners', 203],
     	['#3 dataease', 2210],
     	['#4 macos-virtualbox', 574],
     	['#5 ParlAI', 3876],
     	['#6 50projects50days', 124],
     	['#7 mitmproxy', 9431],
     	['#8 faker2', 322],
     	['#9 Ventoy', 405],
     	['#10 algorithm-base', 352],
     	['#11 hello-algorithm', 390],
     	['#12 OpenSearch', 54989],
     	['#13 kratos', 1070],
     	['#14 jvm', 109],
     	['#15 yuzu', 19413],
     	['#16 supabase', 3124],
     	['#17 outline', 3321],
     	['#18 org-roam', 836],
     	['#19 DeepLearning-500-questions', 1271],
     	['#20 awesome-go', 3803],
     	['#21 elasticsearch-py', 1327],
     	['#22 flameshot', 1406],
     	['#23 learn-go-with-tests', 1120],
     	['#24 Web-Dev-For-Beginners', 1028],
     	['#25 nvm', 1998],
     	
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