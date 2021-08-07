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
     	[2, 'myspaghetti', 'macos-virtualbox', 574],
     	[3, 'microsoft', 'ML-For-Beginners', 1094],
     	[4, 'dataease', 'dataease', 2172],
     	[5, 'bradtraversy', '50projects50days', 122],
     	[6, 'facebookresearch', 'ParlAI', 3874],
     	[7, 'go-kratos', 'kratos', 1065],
     	[8, 'ventoy', 'Ventoy', 403],
     	[9, 'supabase', 'supabase', 3112],
     	[10, 'yuzu-emu', 'yuzu', 19371],
     	[11, 'microsoft', 'Web-Dev-For-Beginners', 1026],
     	[12, 'YMFE', 'yapi', 5747],
     	[13, 'geekxh', 'hello-algorithm', 390],
     	[14, 'trekhleb', 'learn-python', 38],
     	[15, 'outline', 'outline', 3321],
     	[16, 'smicallef', 'spiderfoot', 3225],
     	[17, 'zero205', 'JD_tencent_scf', 2731],
     	[18, 'avelino', 'awesome-go', 3799],
     	[19, 'doocs', 'jvm', 109],
     	[20, 'quii', 'learn-go-with-tests', 1120],
     	[21, 'opensearch-project', 'OpenSearch', 54985],
     	[22, 'nvm-sh', 'nvm', 1998],
     	[23, 'org-roam', 'org-roam', 825],
     	[24, 'erda-project', 'erda', 895],
     	[25, 'sogou', 'workflow', 939],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 Sa-Token', 493],
     	['#2 macos-virtualbox', 574],
     	['#3 ML-For-Beginners', 1094],
     	['#4 dataease', 2172],
     	['#5 50projects50days', 122],
     	['#6 ParlAI', 3874],
     	['#7 kratos', 1065],
     	['#8 Ventoy', 403],
     	['#9 supabase', 3112],
     	['#10 yuzu', 19371],
     	['#11 Web-Dev-For-Beginners', 1026],
     	['#12 yapi', 5747],
     	['#13 hello-algorithm', 390],
     	['#14 learn-python', 38],
     	['#15 outline', 3321],
     	['#16 spiderfoot', 3225],
     	['#17 JD_tencent_scf', 2731],
     	['#18 awesome-go', 3799],
     	['#19 jvm', 109],
     	['#20 learn-go-with-tests', 1120],
     	['#21 OpenSearch', 54985],
     	['#22 nvm', 1998],
     	['#23 org-roam', 825],
     	['#24 erda', 895],
     	['#25 workflow', 939],
     	
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