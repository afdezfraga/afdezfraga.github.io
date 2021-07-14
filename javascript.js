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
	[1, 'bregman-arie', 'devops-exercises', 474],
     	[2, 'trimstray', 'the-book-of-secret-knowledge', 1020],
     	[3, 'vxunderground', 'MalwareSourceCode', 767],
     	[4, 'programthink', 'zhao', 480],
     	[5, 'solidjs', 'solid', 1045],
     	[6, 'binhnguyennus', 'awesome-scalability', 1094],
     	[7, 'rustdesk', 'rustdesk', 138],
     	[8, 'jina-ai', 'jina', 5803],
     	[9, 'kingoflolz', 'mesh-transformer-jax', 94],
     	[10, 'nushell', 'nushell', 3391],
     	[11, 'bradtraversy', '50projects50days', 90],
     	[12, 'SigNoz', 'signoz', 432],
     	[13, 'programthink', 'books', 1229],
     	[14, 'csseky', 'cskaoyan', 116],
     	[15, 'CorentinJ', 'Real-Time-Voice-Cloning', 282],
     	[16, 'microsoft', 'Web-Dev-For-Beginners', 962],
     	[17, 'kdn251', 'interviews', 445],
     	[18, 'freefq', 'free', 2534],
     	[19, 'laynH', 'Anime-Girls-Holding-Programming-Books', 406],
     	[20, 'liupan1890', 'aliyunpan', 53],
     	[21, 'Asabeneh', '30-Days-Of-JavaScript', 352],
     	[22, 'n8n-io', 'n8n', 4347],
     	[23, 'bee-san', 'pyWhat', 351],
     	[24, 'harvester', 'harvester', 417],
     	[25, 'CaffeineMC', 'sodium-fabric', 440],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 devops-exercises', 474],
     	['#2 the-book-of-secret-knowledge', 1020],
     	['#3 MalwareSourceCode', 767],
     	['#4 zhao', 480],
     	['#5 solid', 1045],
     	['#6 awesome-scalability', 1094],
     	['#7 rustdesk', 138],
     	['#8 jina', 5803],
     	['#9 mesh-transformer-jax', 94],
     	['#10 nushell', 3391],
     	['#11 50projects50days', 90],
     	['#12 signoz', 432],
     	['#13 books', 1229],
     	['#14 cskaoyan', 116],
     	['#15 Real-Time-Voice-Cloning', 282],
     	['#16 Web-Dev-For-Beginners', 962],
     	['#17 interviews', 445],
     	['#18 free', 2534],
     	['#19 Anime-Girls-Holding-Programming-Books', 406],
     	['#20 aliyunpan', 53],
     	['#21 30-Days-Of-JavaScript', 352],
     	['#22 n8n', 4347],
     	['#23 pyWhat', 351],
     	['#24 harvester', 417],
     	['#25 sodium-fabric', 440],
     	
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