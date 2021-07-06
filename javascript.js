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
	[1, 'jina-ai', 'jina', 5740],
     	[2, 'bregman-arie', 'devops-exercises', 468],
     	[3, 'trimstray', 'the-book-of-secret-knowledge', 1010],
     	[4, 'programthink', 'zhao', 480],
     	[5, 'vxunderground', 'MalwareSourceCode', 767],
     	[6, 'nushell', 'nushell', 3372],
     	[7, 'rustdesk', 'rustdesk', 126],
     	[8, 'binhnguyennus', 'awesome-scalability', 1093],
     	[9, 'PaperMC', 'Paper', 6049],
     	[10, 'tgbot-collection', 'YYeTsBot', 217],
     	[11, 'maziarraissi', 'Applied-Deep-Learning', 97],
     	[12, 'SigNoz', 'signoz', 432],
     	[13, 'ParthJadhav', 'Tkinter-Designer', 165],
     	[14, 'programthink', 'books', 1229],
     	[15, 'Asabeneh', '30-Days-Of-JavaScript', 352],
     	[16, 'freefq', 'free', 2485],
     	[17, 'kdn251', 'interviews', 445],
     	[18, 'PaddlePaddle', 'PaddleHub', 2063],
     	[19, 'jwasham', 'coding-interview-university', 1675],
     	[20, 'solidjs', 'solid', 1039],
     	[21, 'n8n-io', 'n8n', 4318],
     	[22, 'mechaniac', 'Map-of-Javascript', 9],
     	[23, 'CorentinJ', 'Real-Time-Voice-Cloning', 282],
     	[24, 'bee-san', 'pyWhat', 294],
     	[25, 'csseky', 'cskaoyan', 116],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 jina', 5740],
     	['#2 devops-exercises', 468],
     	['#3 the-book-of-secret-knowledge', 1010],
     	['#4 zhao', 480],
     	['#5 MalwareSourceCode', 767],
     	['#6 nushell', 3372],
     	['#7 rustdesk', 126],
     	['#8 awesome-scalability', 1093],
     	['#9 Paper', 6049],
     	['#10 YYeTsBot', 217],
     	['#11 Applied-Deep-Learning', 97],
     	['#12 signoz', 432],
     	['#13 Tkinter-Designer', 165],
     	['#14 books', 1229],
     	['#15 30-Days-Of-JavaScript', 352],
     	['#16 free', 2485],
     	['#17 interviews', 445],
     	['#18 PaddleHub', 2063],
     	['#19 coding-interview-university', 1675],
     	['#20 solid', 1039],
     	['#21 n8n', 4318],
     	['#22 Map-of-Javascript', 9],
     	['#23 Real-Time-Voice-Cloning', 282],
     	['#24 pyWhat', 294],
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