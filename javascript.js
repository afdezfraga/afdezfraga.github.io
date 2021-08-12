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
     	[2, 'bndw', 'wifi-card', 121],
     	[3, 'tinode', 'chat', 3094],
     	[4, 'dromara', 'Sa-Token', 497],
     	[5, 'dataease', 'dataease', 2210],
     	[6, 'facebookresearch', 'ParlAI', 3877],
     	[7, 'myspaghetti', 'macos-virtualbox', 574],
     	[8, 'bradtraversy', '50projects50days', 124],
     	[9, 'mitmproxy', 'mitmproxy', 9431],
     	[10, 'ventoy', 'Ventoy', 406],
     	[11, 'microsoft', 'IoT-For-Beginners', 203],
     	[12, 'geekxh', 'hello-algorithm', 390],
     	[13, 'doocs', 'jvm', 109],
     	[14, 'yuzu-emu', 'yuzu', 19420],
     	[15, 'opensearch-project', 'OpenSearch', 54990],
     	[16, 'go-kratos', 'kratos', 1071],
     	[17, 'scutan90', 'DeepLearning-500-questions', 1271],
     	[18, 'org-roam', 'org-roam', 836],
     	[19, 'supabase', 'supabase', 3127],
     	[20, 'chefyuan', 'algorithm-base', 352],
     	[21, 'flameshot-org', 'flameshot', 1406],
     	[22, 'erda-project', 'erda', 915],
     	[23, 'cabaletta', 'baritone', 2765],
     	[24, 'shufflewzc', 'faker2', 333],
     	[25, 'JetBrains', 'compose-jb', 907],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 CBL-Mariner', 1320],
     	['#2 wifi-card', 121],
     	['#3 chat', 3094],
     	['#4 Sa-Token', 497],
     	['#5 dataease', 2210],
     	['#6 ParlAI', 3877],
     	['#7 macos-virtualbox', 574],
     	['#8 50projects50days', 124],
     	['#9 mitmproxy', 9431],
     	['#10 Ventoy', 406],
     	['#11 IoT-For-Beginners', 203],
     	['#12 hello-algorithm', 390],
     	['#13 jvm', 109],
     	['#14 yuzu', 19420],
     	['#15 OpenSearch', 54990],
     	['#16 kratos', 1071],
     	['#17 DeepLearning-500-questions', 1271],
     	['#18 org-roam', 836],
     	['#19 supabase', 3127],
     	['#20 algorithm-base', 352],
     	['#21 flameshot', 1406],
     	['#22 erda', 915],
     	['#23 baritone', 2765],
     	['#24 faker2', 333],
     	['#25 compose-jb', 907],
     	
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