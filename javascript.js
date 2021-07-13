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
	[1, 'bregman-arie', 'devops-exercises', 473],
     	[2, 'trimstray', 'the-book-of-secret-knowledge', 1010],
     	[3, 'programthink', 'zhao', 480],
     	[4, 'jina-ai', 'jina', 5796],
     	[5, 'vxunderground', 'MalwareSourceCode', 767],
     	[6, 'rustdesk', 'rustdesk', 138],
     	[7, 'binhnguyennus', 'awesome-scalability', 1094],
     	[8, 'solidjs', 'solid', 1045],
     	[9, 'programthink', 'books', 1229],
     	[10, 'kingoflolz', 'mesh-transformer-jax', 90],
     	[11, 'nushell', 'nushell', 3389],
     	[12, 'bradtraversy', '50projects50days', 90],
     	[13, 'Asabeneh', '30-Days-Of-JavaScript', 352],
     	[14, 'SigNoz', 'signoz', 432],
     	[15, 'CorentinJ', 'Real-Time-Voice-Cloning', 282],
     	[16, 'csseky', 'cskaoyan', 116],
     	[17, 'microsoft', 'Web-Dev-For-Beginners', 962],
     	[18, 'kdn251', 'interviews', 445],
     	[19, 'freefq', 'free', 2528],
     	[20, 'liupan1890', 'aliyunpan', 53],
     	[21, 'biancangming', 'wtv', 34],
     	[22, 'n8n-io', 'n8n', 4347],
     	[23, 'CaffeineMC', 'sodium-fabric', 439],
     	[24, 'bee-san', 'pyWhat', 351],
     	[25, 'harvester', 'harvester', 414],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 devops-exercises', 473],
     	['#2 the-book-of-secret-knowledge', 1010],
     	['#3 zhao', 480],
     	['#4 jina', 5796],
     	['#5 MalwareSourceCode', 767],
     	['#6 rustdesk', 138],
     	['#7 awesome-scalability', 1094],
     	['#8 solid', 1045],
     	['#9 books', 1229],
     	['#10 mesh-transformer-jax', 90],
     	['#11 nushell', 3389],
     	['#12 50projects50days', 90],
     	['#13 30-Days-Of-JavaScript', 352],
     	['#14 signoz', 432],
     	['#15 Real-Time-Voice-Cloning', 282],
     	['#16 cskaoyan', 116],
     	['#17 Web-Dev-For-Beginners', 962],
     	['#18 interviews', 445],
     	['#19 free', 2528],
     	['#20 aliyunpan', 53],
     	['#21 wtv', 34],
     	['#22 n8n', 4347],
     	['#23 sodium-fabric', 439],
     	['#24 pyWhat', 351],
     	['#25 harvester', 414],
     	
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