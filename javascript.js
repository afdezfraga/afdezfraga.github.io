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
	[1, 'madMAx43v3r', 'chia-plotter', 424],
     	[2, 'jina-ai', 'jina', 5752],
     	[3, 'bregman-arie', 'devops-exercises', 468],
     	[4, 'trimstray', 'the-book-of-secret-knowledge', 1010],
     	[5, 'programthink', 'zhao', 480],
     	[6, 'vxunderground', 'MalwareSourceCode', 767],
     	[7, 'TuSimple', 'naive-ui', 4803],
     	[8, 'rustdesk', 'rustdesk', 136],
     	[9, 'binhnguyennus', 'awesome-scalability', 1093],
     	[10, 'maziarraissi', 'Applied-Deep-Learning', 103],
     	[11, 'nushell', 'nushell', 3382],
     	[12, 'PaperMC', 'Paper', 6063],
     	[13, 'solidjs', 'solid', 1039],
     	[14, 'programthink', 'books', 1229],
     	[15, 'Asabeneh', '30-Days-Of-JavaScript', 352],
     	[16, 'SigNoz', 'signoz', 432],
     	[17, 'CorentinJ', 'Real-Time-Voice-Cloning', 282],
     	[18, 'kdn251', 'interviews', 445],
     	[19, 'freefq', 'free', 2497],
     	[20, 'jynew', 'jynew', 837],
     	[21, 'csseky', 'cskaoyan', 116],
     	[22, 'bee-san', 'pyWhat', 306],
     	[23, 'microsoft', 'Web-Dev-For-Beginners', 942],
     	[24, 'jwasham', 'coding-interview-university', 1675],
     	[25, 'mechaniac', 'Map-of-Javascript', 9],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 chia-plotter', 424],
     	['#2 jina', 5752],
     	['#3 devops-exercises', 468],
     	['#4 the-book-of-secret-knowledge', 1010],
     	['#5 zhao', 480],
     	['#6 MalwareSourceCode', 767],
     	['#7 naive-ui', 4803],
     	['#8 rustdesk', 136],
     	['#9 awesome-scalability', 1093],
     	['#10 Applied-Deep-Learning', 103],
     	['#11 nushell', 3382],
     	['#12 Paper', 6063],
     	['#13 solid', 1039],
     	['#14 books', 1229],
     	['#15 30-Days-Of-JavaScript', 352],
     	['#16 signoz', 432],
     	['#17 Real-Time-Voice-Cloning', 282],
     	['#18 interviews', 445],
     	['#19 free', 2497],
     	['#20 jynew', 837],
     	['#21 cskaoyan', 116],
     	['#22 pyWhat', 306],
     	['#23 Web-Dev-For-Beginners', 942],
     	['#24 coding-interview-university', 1675],
     	['#25 Map-of-Javascript', 9],
     	
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