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
	[1, 'microsoft', 'ML-For-Beginners', 1046],
     	[2, 'vuejs', 'petite-vue', 76],
     	[3, 'bradtraversy', '50projects50days', 118],
     	[4, 'Th3Wall', 'Fakeflix', 280],
     	[5, 'audacity', 'audacity', 13525],
     	[6, 'facebookresearch', 'ParlAI', 3864],
     	[7, 'SmartKeyerror', 'Psyduck', 128],
     	[8, 'dromara', 'Sa-Token', 493],
     	[9, 'ChristianChiarulli', 'LunarVim', 1497],
     	[10, 'myspaghetti', 'macos-virtualbox', 574],
     	[11, 'mirumee', 'saleor', 18755],
     	[12, 'go-kratos', 'kratos', 1056],
     	[13, 'public-apis', 'public-apis', 3065],
     	[14, 'inancgumus', 'learngo', 495],
     	[15, 'YMFE', 'yapi', 5747],
     	[16, 'supabase', 'supabase', 3101],
     	[17, 'ventoy', 'Ventoy', 390],
     	[18, 'solidjs', 'solid', 1086],
     	[19, 'returntocorp', 'semgrep', 2492],
     	[20, 'snowpackjs', 'astro', 919],
     	[21, 'MustangYM', 'WeChatExtension-ForMac', 1025],
     	[22, 'keycloak', 'keycloak', 13374],
     	[23, 'tiangolo', 'fastapi', 1733],
     	[24, 'WZMIAOMIAO', 'deep-learning-for-image-processing', 772],
     	[25, 'grafana', 'k6', 4184],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 ML-For-Beginners', 1046],
     	['#2 petite-vue', 76],
     	['#3 50projects50days', 118],
     	['#4 Fakeflix', 280],
     	['#5 audacity', 13525],
     	['#6 ParlAI', 3864],
     	['#7 Psyduck', 128],
     	['#8 Sa-Token', 493],
     	['#9 LunarVim', 1497],
     	['#10 macos-virtualbox', 574],
     	['#11 saleor', 18755],
     	['#12 kratos', 1056],
     	['#13 public-apis', 3065],
     	['#14 learngo', 495],
     	['#15 yapi', 5747],
     	['#16 supabase', 3101],
     	['#17 Ventoy', 390],
     	['#18 solid', 1086],
     	['#19 semgrep', 2492],
     	['#20 astro', 919],
     	['#21 WeChatExtension-ForMac', 1025],
     	['#22 keycloak', 13374],
     	['#23 fastapi', 1733],
     	['#24 deep-learning-for-image-processing', 772],
     	['#25 k6', 4184],
     	
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