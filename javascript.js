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
     	[2, 'jina-ai', 'jina', 5775],
     	[3, 'trimstray', 'the-book-of-secret-knowledge', 1010],
     	[4, 'programthink', 'zhao', 480],
     	[5, 'vxunderground', 'MalwareSourceCode', 767],
     	[6, 'zzanehip', 'The-OldOS-Project', 39],
     	[7, 'kingoflolz', 'mesh-transformer-jax', 88],
     	[8, 'nushell', 'nushell', 3388],
     	[9, 'binhnguyennus', 'awesome-scalability', 1093],
     	[10, 'madMAx43v3r', 'chia-plotter', 451],
     	[11, 'peng-zhihui', 'XUAN', 6],
     	[12, 'rustdesk', 'rustdesk', 138],
     	[13, 'solidjs', 'solid', 1041],
     	[14, 'programthink', 'books', 1229],
     	[15, 'Asabeneh', '30-Days-Of-JavaScript', 352],
     	[16, 'maaslalani', 'slides', 100],
     	[17, 'CorentinJ', 'Real-Time-Voice-Cloning', 282],
     	[18, 'bradtraversy', '50projects50days', 90],
     	[19, 'SigNoz', 'signoz', 432],
     	[20, 'snowpackjs', 'astro', 673],
     	[21, 'PaperMC', 'Paper', 6072],
     	[22, 'CaffeineMC', 'sodium-fabric', 433],
     	[23, 'kdn251', 'interviews', 445],
     	[24, 'freefq', 'free', 2510],
     	[25, 'csseky', 'cskaoyan', 116],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 devops-exercises', 468],
     	['#2 jina', 5775],
     	['#3 the-book-of-secret-knowledge', 1010],
     	['#4 zhao', 480],
     	['#5 MalwareSourceCode', 767],
     	['#6 The-OldOS-Project', 39],
     	['#7 mesh-transformer-jax', 88],
     	['#8 nushell', 3388],
     	['#9 awesome-scalability', 1093],
     	['#10 chia-plotter', 451],
     	['#11 XUAN', 6],
     	['#12 rustdesk', 138],
     	['#13 solid', 1041],
     	['#14 books', 1229],
     	['#15 30-Days-Of-JavaScript', 352],
     	['#16 slides', 100],
     	['#17 Real-Time-Voice-Cloning', 282],
     	['#18 50projects50days', 90],
     	['#19 signoz', 432],
     	['#20 astro', 673],
     	['#21 Paper', 6072],
     	['#22 sodium-fabric', 433],
     	['#23 interviews', 445],
     	['#24 free', 2510],
     	['#25 cskaoyan', 116],
     	
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