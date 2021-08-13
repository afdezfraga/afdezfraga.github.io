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
	[1, 'microsoft', 'CBL-Mariner', 1320],
     	[2, 'tinode', 'chat', 3094],
     	[3, 'dataease', 'dataease', 2269],
     	[4, 'dromara', 'Sa-Token', 497],
     	[5, 'facebookresearch', 'ParlAI', 3877],
     	[6, 'myspaghetti', 'macos-virtualbox', 574],
     	[7, 'bradtraversy', '50projects50days', 124],
     	[8, 'ventoy', 'Ventoy', 408],
     	[9, 'doocs', 'jvm', 109],
     	[10, 'bndw', 'wifi-card', 123],
     	[11, 'yuzu-emu', 'yuzu', 19424],
     	[12, 'willmcgugan', 'textual', 222],
     	[13, 'erda-project', 'erda', 920],
     	[14, 'geekxh', 'hello-algorithm', 390],
     	[15, 'org-roam', 'org-roam', 836],
     	[16, 'scutan90', 'DeepLearning-500-questions', 1271],
     	[17, 'supabase', 'supabase', 3146],
     	[18, 'opensearch-project', 'OpenSearch', 54993],
     	[19, 'JetBrains', 'compose-jb', 912],
     	[20, 'go-kratos', 'kratos', 1076],
     	[21, 'cabaletta', 'baritone', 2765],
     	[22, 'flameshot-org', 'flameshot', 1406],
     	[23, 'typeorm', 'typeorm', 4755],
     	[24, 'PaddlePaddle', 'PaddleOCR', 2651],
     	[25, 'trekhleb', 'learn-python', 38],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 CBL-Mariner', 1320],
     	['#2 chat', 3094],
     	['#3 dataease', 2269],
     	['#4 Sa-Token', 497],
     	['#5 ParlAI', 3877],
     	['#6 macos-virtualbox', 574],
     	['#7 50projects50days', 124],
     	['#8 Ventoy', 408],
     	['#9 jvm', 109],
     	['#10 wifi-card', 123],
     	['#11 yuzu', 19424],
     	['#12 textual', 222],
     	['#13 erda', 920],
     	['#14 hello-algorithm', 390],
     	['#15 org-roam', 836],
     	['#16 DeepLearning-500-questions', 1271],
     	['#17 supabase', 3146],
     	['#18 OpenSearch', 54993],
     	['#19 compose-jb', 912],
     	['#20 kratos', 1076],
     	['#21 baritone', 2765],
     	['#22 flameshot', 1406],
     	['#23 typeorm', 4755],
     	['#24 PaddleOCR', 2651],
     	['#25 learn-python', 38],
     	
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