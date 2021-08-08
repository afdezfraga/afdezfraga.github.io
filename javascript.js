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
     	[2, 'dataease', 'dataease', 2179],
     	[3, 'myspaghetti', 'macos-virtualbox', 574],
     	[4, 'bradtraversy', '50projects50days', 122],
     	[5, 'facebookresearch', 'ParlAI', 3874],
     	[6, 'go-kratos', 'kratos', 1065],
     	[7, 'ventoy', 'Ventoy', 404],
     	[8, 'microsoft', 'ML-For-Beginners', 1103],
     	[9, 'mitmproxy', 'mitmproxy', 9425],
     	[10, 'geekxh', 'hello-algorithm', 390],
     	[11, 'microsoft', 'Web-Dev-For-Beginners', 1026],
     	[12, 'doocs', 'jvm', 109],
     	[13, 'org-roam', 'org-roam', 825],
     	[14, 'opensearch-project', 'OpenSearch', 54985],
     	[15, 'avelino', 'awesome-go', 3800],
     	[16, 'outline', 'outline', 3321],
     	[17, 'supabase', 'supabase', 3112],
     	[18, 'nvm-sh', 'nvm', 1998],
     	[19, 'smicallef', 'spiderfoot', 3227],
     	[20, 'scutan90', 'DeepLearning-500-questions', 1271],
     	[21, 'serverless-stack', 'serverless-stack', 1374],
     	[22, 'deepmind', 'deepmind-research', 266],
     	[23, 'cabaletta', 'baritone', 2765],
     	[24, 'flameshot-org', 'flameshot', 1404],
     	[25, 'trekhleb', 'javascript-algorithms', 956],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 Sa-Token', 493],
     	['#2 dataease', 2179],
     	['#3 macos-virtualbox', 574],
     	['#4 50projects50days', 122],
     	['#5 ParlAI', 3874],
     	['#6 kratos', 1065],
     	['#7 Ventoy', 404],
     	['#8 ML-For-Beginners', 1103],
     	['#9 mitmproxy', 9425],
     	['#10 hello-algorithm', 390],
     	['#11 Web-Dev-For-Beginners', 1026],
     	['#12 jvm', 109],
     	['#13 org-roam', 825],
     	['#14 OpenSearch', 54985],
     	['#15 awesome-go', 3800],
     	['#16 outline', 3321],
     	['#17 supabase', 3112],
     	['#18 nvm', 1998],
     	['#19 spiderfoot', 3227],
     	['#20 DeepLearning-500-questions', 1271],
     	['#21 serverless-stack', 1374],
     	['#22 deepmind-research', 266],
     	['#23 baritone', 2765],
     	['#24 flameshot', 1404],
     	['#25 javascript-algorithms', 956],
     	
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