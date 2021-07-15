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
	[1, 'bregman-arie', 'devops-exercises', 476],
     	[2, 'trimstray', 'the-book-of-secret-knowledge', 1020],
     	[3, 'vxunderground', 'MalwareSourceCode', 767],
     	[4, 'programthink', 'zhao', 480],
     	[5, 'JDHelloWorld', 'jd_scripts', 149],
     	[6, 'solidjs', 'solid', 1046],
     	[7, 'binhnguyennus', 'awesome-scalability', 1094],
     	[8, 'rustdesk', 'rustdesk', 139],
     	[9, 'kingoflolz', 'mesh-transformer-jax', 96],
     	[10, 'bradtraversy', '50projects50days', 90],
     	[11, 'csseky', 'cskaoyan', 116],
     	[12, 'jina-ai', 'jina', 5809],
     	[13, 'CorentinJ', 'Real-Time-Voice-Cloning', 282],
     	[14, 'nushell', 'nushell', 3395],
     	[15, 'SigNoz', 'signoz', 440],
     	[16, 'microsoft', 'Web-Dev-For-Beginners', 966],
     	[17, 'monyhar', 'monyhar-lite', 2],
     	[18, 'laynH', 'Anime-Girls-Holding-Programming-Books', 406],
     	[19, 'kdn251', 'interviews', 445],
     	[20, 'programthink', 'books', 1229],
     	[21, 'freefq', 'free', 2540],
     	[22, 'n8n-io', 'n8n', 4355],
     	[23, 'liupan1890', 'aliyunpan', 53],
     	[24, 'CaffeineMC', 'sodium-fabric', 444],
     	[25, 'harvester', 'harvester', 417],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 devops-exercises', 476],
     	['#2 the-book-of-secret-knowledge', 1020],
     	['#3 MalwareSourceCode', 767],
     	['#4 zhao', 480],
     	['#5 jd_scripts', 149],
     	['#6 solid', 1046],
     	['#7 awesome-scalability', 1094],
     	['#8 rustdesk', 139],
     	['#9 mesh-transformer-jax', 96],
     	['#10 50projects50days', 90],
     	['#11 cskaoyan', 116],
     	['#12 jina', 5809],
     	['#13 Real-Time-Voice-Cloning', 282],
     	['#14 nushell', 3395],
     	['#15 signoz', 440],
     	['#16 Web-Dev-For-Beginners', 966],
     	['#17 monyhar-lite', 2],
     	['#18 Anime-Girls-Holding-Programming-Books', 406],
     	['#19 interviews', 445],
     	['#20 books', 1229],
     	['#21 free', 2540],
     	['#22 n8n', 4355],
     	['#23 aliyunpan', 53],
     	['#24 sodium-fabric', 444],
     	['#25 harvester', 417],
     	
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