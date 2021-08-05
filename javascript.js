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
	[1, 'microsoft', 'ML-For-Beginners', 1089],
     	[2, 'tenacityteam', 'tenacity', 13634],
     	[3, 'dromara', 'Sa-Token', 493],
     	[4, 'myspaghetti', 'macos-virtualbox', 574],
     	[5, 'facebookresearch', 'ParlAI', 3870],
     	[6, 'bradtraversy', '50projects50days', 122],
     	[7, 'SmartKeyerror', 'Psyduck', 130],
     	[8, 'dataease', 'dataease', 2132],
     	[9, 'go-kratos', 'kratos', 1061],
     	[10, 'ventoy', 'Ventoy', 403],
     	[11, 'mirumee', 'saleor', 18768],
     	[12, 'mitmproxy', 'mitmproxy', 9422],
     	[13, 'vuejs', 'petite-vue', 76],
     	[14, 'supabase', 'supabase', 3110],
     	[15, 'LunarVim', 'LunarVim', 1527],
     	[16, 'serverless-stack', 'serverless-stack', 1368],
     	[17, 'org-roam', 'org-roam', 825],
     	[18, 'smicallef', 'spiderfoot', 3225],
     	[19, 'returntocorp', 'semgrep', 2511],
     	[20, 'opensearch-project', 'OpenSearch', 54983],
     	[21, 'avelino', 'awesome-go', 3799],
     	[22, 'sogou', 'workflow', 935],
     	[23, 'PlummersSoftwareLLC', 'Primes', 656],
     	[24, 'philc', 'vimium', 4419],
     	[25, 'snowpackjs', 'astro', 955],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 ML-For-Beginners', 1089],
     	['#2 tenacity', 13634],
     	['#3 Sa-Token', 493],
     	['#4 macos-virtualbox', 574],
     	['#5 ParlAI', 3870],
     	['#6 50projects50days', 122],
     	['#7 Psyduck', 130],
     	['#8 dataease', 2132],
     	['#9 kratos', 1061],
     	['#10 Ventoy', 403],
     	['#11 saleor', 18768],
     	['#12 mitmproxy', 9422],
     	['#13 petite-vue', 76],
     	['#14 supabase', 3110],
     	['#15 LunarVim', 1527],
     	['#16 serverless-stack', 1368],
     	['#17 org-roam', 825],
     	['#18 spiderfoot', 3225],
     	['#19 semgrep', 2511],
     	['#20 OpenSearch', 54983],
     	['#21 awesome-go', 3799],
     	['#22 workflow', 935],
     	['#23 Primes', 656],
     	['#24 vimium', 4419],
     	['#25 astro', 955],
     	
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