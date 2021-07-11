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
	[1, 'bregman-arie', 'devops-exercises', 468],
     	[2, 'jina-ai', 'jina', 5777],
     	[3, 'trimstray', 'the-book-of-secret-knowledge', 1010],
     	[4, 'biancangming', 'wtv', 34],
     	[5, 'programthink', 'zhao', 480],
     	[6, 'vxunderground', 'MalwareSourceCode', 767],
     	[7, 'kingoflolz', 'mesh-transformer-jax', 88],
     	[8, 'nushell', 'nushell', 3389],
     	[9, 'binhnguyennus', 'awesome-scalability', 1094],
     	[10, 'rustdesk', 'rustdesk', 138],
     	[11, 'programthink', 'books', 1229],
     	[12, 'solidjs', 'solid', 1041],
     	[13, 'Asabeneh', '30-Days-Of-JavaScript', 352],
     	[14, 'SigNoz', 'signoz', 432],
     	[15, 'liupan1890', 'aliyunpan', 53],
     	[16, 'bradtraversy', '50projects50days', 90],
     	[17, 'CorentinJ', 'Real-Time-Voice-Cloning', 282],
     	[18, 'csseky', 'cskaoyan', 116],
     	[19, 'microsoft', 'Web-Dev-For-Beginners', 943],
     	[20, 'kdn251', 'interviews', 445],
     	[21, 'freefq', 'free', 2516],
     	[22, 'PaperMC', 'Paper', 6074],
     	[23, 'snowpackjs', 'astro', 673],
     	[24, 'peng-zhihui', 'XUAN', 6],
     	[25, 'CaffeineMC', 'sodium-fabric', 438],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 devops-exercises', 468],
     	['#2 jina', 5777],
     	['#3 the-book-of-secret-knowledge', 1010],
     	['#4 wtv', 34],
     	['#5 zhao', 480],
     	['#6 MalwareSourceCode', 767],
     	['#7 mesh-transformer-jax', 88],
     	['#8 nushell', 3389],
     	['#9 awesome-scalability', 1094],
     	['#10 rustdesk', 138],
     	['#11 books', 1229],
     	['#12 solid', 1041],
     	['#13 30-Days-Of-JavaScript', 352],
     	['#14 signoz', 432],
     	['#15 aliyunpan', 53],
     	['#16 50projects50days', 90],
     	['#17 Real-Time-Voice-Cloning', 282],
     	['#18 cskaoyan', 116],
     	['#19 Web-Dev-For-Beginners', 943],
     	['#20 interviews', 445],
     	['#21 free', 2516],
     	['#22 Paper', 6074],
     	['#23 astro', 673],
     	['#24 XUAN', 6],
     	['#25 sodium-fabric', 438],
     	
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