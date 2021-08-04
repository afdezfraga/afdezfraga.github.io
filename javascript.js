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
	[1, 'tenacityteam', 'tenacity', 13633],
     	[2, 'microsoft', 'ML-For-Beginners', 1068],
     	[3, 'bradtraversy', '50projects50days', 122],
     	[4, 'SmartKeyerror', 'Psyduck', 130],
     	[5, 'dromara', 'Sa-Token', 493],
     	[6, 'facebookresearch', 'ParlAI', 3866],
     	[7, 'myspaghetti', 'macos-virtualbox', 574],
     	[8, 'PlummersSoftwareLLC', 'Primes', 650],
     	[9, 'vuejs', 'petite-vue', 76],
     	[10, 'go-kratos', 'kratos', 1060],
     	[11, 'mirumee', 'saleor', 18764],
     	[12, 'ChristianChiarulli', 'LunarVim', 1510],
     	[13, 'dataease', 'dataease', 2093],
     	[14, 'ventoy', 'Ventoy', 399],
     	[15, 'audacity', 'audacity', 13537],
     	[16, 'supabase', 'supabase', 3110],
     	[17, 'YMFE', 'yapi', 5747],
     	[18, 'returntocorp', 'semgrep', 2507],
     	[19, 'org-roam', 'org-roam', 824],
     	[20, 'serverless-stack', 'serverless-stack', 1355],
     	[21, 'smicallef', 'spiderfoot', 3224],
     	[22, 'opensearch-project', 'OpenSearch', 54983],
     	[23, 'quii', 'learn-go-with-tests', 1120],
     	[24, 'avelino', 'awesome-go', 3797],
     	[25, 'tiangolo', 'fastapi', 1739],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 tenacity', 13633],
     	['#2 ML-For-Beginners', 1068],
     	['#3 50projects50days', 122],
     	['#4 Psyduck', 130],
     	['#5 Sa-Token', 493],
     	['#6 ParlAI', 3866],
     	['#7 macos-virtualbox', 574],
     	['#8 Primes', 650],
     	['#9 petite-vue', 76],
     	['#10 kratos', 1060],
     	['#11 saleor', 18764],
     	['#12 LunarVim', 1510],
     	['#13 dataease', 2093],
     	['#14 Ventoy', 399],
     	['#15 audacity', 13537],
     	['#16 supabase', 3110],
     	['#17 yapi', 5747],
     	['#18 semgrep', 2507],
     	['#19 org-roam', 824],
     	['#20 serverless-stack', 1355],
     	['#21 spiderfoot', 3224],
     	['#22 OpenSearch', 54983],
     	['#23 learn-go-with-tests', 1120],
     	['#24 awesome-go', 3797],
     	['#25 fastapi', 1739],
     	
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