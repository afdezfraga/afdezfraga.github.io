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
	[1, 'microsoft', 'ML-For-Beginners', 1048],
     	[2, 'bradtraversy', '50projects50days', 118],
     	[3, 'PlummersSoftwareLLC', 'Primes', 642],
     	[4, 'vuejs', 'petite-vue', 76],
     	[5, 'SmartKeyerror', 'Psyduck', 129],
     	[6, 'facebookresearch', 'ParlAI', 3866],
     	[7, 'dromara', 'Sa-Token', 493],
     	[8, 'audacity', 'audacity', 13525],
     	[9, 'myspaghetti', 'macos-virtualbox', 574],
     	[10, 'ChristianChiarulli', 'LunarVim', 1504],
     	[11, 'mirumee', 'saleor', 18760],
     	[12, 'go-kratos', 'kratos', 1059],
     	[13, 'supabase', 'supabase', 3105],
     	[14, 'ventoy', 'Ventoy', 395],
     	[15, 'Th3Wall', 'Fakeflix', 284],
     	[16, 'YMFE', 'yapi', 5747],
     	[17, 'public-apis', 'public-apis', 3077],
     	[18, 'returntocorp', 'semgrep', 2496],
     	[19, 'inancgumus', 'learngo', 495],
     	[20, 'org-roam', 'org-roam', 824],
     	[21, 'tiangolo', 'fastapi', 1739],
     	[22, 'snowpackjs', 'astro', 928],
     	[23, 'quii', 'learn-go-with-tests', 1119],
     	[24, 'avelino', 'awesome-go', 3796],
     	[25, 'keycloak', 'keycloak', 13376],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 ML-For-Beginners', 1048],
     	['#2 50projects50days', 118],
     	['#3 Primes', 642],
     	['#4 petite-vue', 76],
     	['#5 Psyduck', 129],
     	['#6 ParlAI', 3866],
     	['#7 Sa-Token', 493],
     	['#8 audacity', 13525],
     	['#9 macos-virtualbox', 574],
     	['#10 LunarVim', 1504],
     	['#11 saleor', 18760],
     	['#12 kratos', 1059],
     	['#13 supabase', 3105],
     	['#14 Ventoy', 395],
     	['#15 Fakeflix', 284],
     	['#16 yapi', 5747],
     	['#17 public-apis', 3077],
     	['#18 semgrep', 2496],
     	['#19 learngo', 495],
     	['#20 org-roam', 824],
     	['#21 fastapi', 1739],
     	['#22 astro', 928],
     	['#23 learn-go-with-tests', 1119],
     	['#24 awesome-go', 3796],
     	['#25 keycloak', 13376],
     	
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