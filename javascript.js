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
	[1, 'bregman-arie', 'devops-exercises', 471],
     	[2, 'jina-ai', 'jina', 5780],
     	[3, 'trimstray', 'the-book-of-secret-knowledge', 1010],
     	[4, 'programthink', 'zhao', 480],
     	[5, 'vxunderground', 'MalwareSourceCode', 767],
     	[6, 'nushell', 'nushell', 3389],
     	[7, 'binhnguyennus', 'awesome-scalability', 1094],
     	[8, 'rustdesk', 'rustdesk', 138],
     	[9, 'kingoflolz', 'mesh-transformer-jax', 88],
     	[10, 'programthink', 'books', 1229],
     	[11, 'solidjs', 'solid', 1041],
     	[12, 'Asabeneh', '30-Days-Of-JavaScript', 352],
     	[13, 'biancangming', 'wtv', 34],
     	[14, 'bradtraversy', '50projects50days', 90],
     	[15, 'SigNoz', 'signoz', 432],
     	[16, 'CorentinJ', 'Real-Time-Voice-Cloning', 282],
     	[17, 'liupan1890', 'aliyunpan', 53],
     	[18, 'csseky', 'cskaoyan', 116],
     	[19, 'microsoft', 'Web-Dev-For-Beginners', 947],
     	[20, 'kdn251', 'interviews', 445],
     	[21, 'freefq', 'free', 2522],
     	[22, 'CaffeineMC', 'sodium-fabric', 439],
     	[23, 'snowpackjs', 'astro', 674],
     	[24, 'n8n-io', 'n8n', 4341],
     	[25, 'bee-san', 'pyWhat', 351],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 devops-exercises', 471],
     	['#2 jina', 5780],
     	['#3 the-book-of-secret-knowledge', 1010],
     	['#4 zhao', 480],
     	['#5 MalwareSourceCode', 767],
     	['#6 nushell', 3389],
     	['#7 awesome-scalability', 1094],
     	['#8 rustdesk', 138],
     	['#9 mesh-transformer-jax', 88],
     	['#10 books', 1229],
     	['#11 solid', 1041],
     	['#12 30-Days-Of-JavaScript', 352],
     	['#13 wtv', 34],
     	['#14 50projects50days', 90],
     	['#15 signoz', 432],
     	['#16 Real-Time-Voice-Cloning', 282],
     	['#17 aliyunpan', 53],
     	['#18 cskaoyan', 116],
     	['#19 Web-Dev-For-Beginners', 947],
     	['#20 interviews', 445],
     	['#21 free', 2522],
     	['#22 sodium-fabric', 439],
     	['#23 astro', 674],
     	['#24 n8n', 4341],
     	['#25 pyWhat', 351],
     	
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