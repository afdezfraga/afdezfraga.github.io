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
	[1, 'jina-ai', 'jina', 5767],
     	[2, 'bregman-arie', 'devops-exercises', 468],
     	[3, 'madMAx43v3r', 'chia-plotter', 446],
     	[4, 'peng-zhihui', 'XUAN', 6],
     	[5, 'trimstray', 'the-book-of-secret-knowledge', 1010],
     	[6, 'programthink', 'zhao', 480],
     	[7, 'vxunderground', 'MalwareSourceCode', 767],
     	[8, 'maaslalani', 'slides', 100],
     	[9, 'binhnguyennus', 'awesome-scalability', 1093],
     	[10, 'snowpackjs', 'astro', 663],
     	[11, 'nushell', 'nushell', 3384],
     	[12, 'rustdesk', 'rustdesk', 138],
     	[13, 'maziarraissi', 'Applied-Deep-Learning', 106],
     	[14, 'solidjs', 'solid', 1039],
     	[15, 'programthink', 'books', 1229],
     	[16, 'Asabeneh', '30-Days-Of-JavaScript', 352],
     	[17, 'PaperMC', 'Paper', 6064],
     	[18, 'SigNoz', 'signoz', 432],
     	[19, 'CaffeineMC', 'sodium-fabric', 430],
     	[20, 'CorentinJ', 'Real-Time-Voice-Cloning', 282],
     	[21, 'kdn251', 'interviews', 445],
     	[22, 'bradtraversy', '50projects50days', 90],
     	[23, 'freefq', 'free', 2504],
     	[24, 'csseky', 'cskaoyan', 116],
     	[25, 'microsoft', 'Web-Dev-For-Beginners', 943],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 jina', 5767],
     	['#2 devops-exercises', 468],
     	['#3 chia-plotter', 446],
     	['#4 XUAN', 6],
     	['#5 the-book-of-secret-knowledge', 1010],
     	['#6 zhao', 480],
     	['#7 MalwareSourceCode', 767],
     	['#8 slides', 100],
     	['#9 awesome-scalability', 1093],
     	['#10 astro', 663],
     	['#11 nushell', 3384],
     	['#12 rustdesk', 138],
     	['#13 Applied-Deep-Learning', 106],
     	['#14 solid', 1039],
     	['#15 books', 1229],
     	['#16 30-Days-Of-JavaScript', 352],
     	['#17 Paper', 6064],
     	['#18 signoz', 432],
     	['#19 sodium-fabric', 430],
     	['#20 Real-Time-Voice-Cloning', 282],
     	['#21 interviews', 445],
     	['#22 50projects50days', 90],
     	['#23 free', 2504],
     	['#24 cskaoyan', 116],
     	['#25 Web-Dev-For-Beginners', 943],
     	
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