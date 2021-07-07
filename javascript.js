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
	[1, 'jina-ai', 'jina', 5742],
     	[2, 'TuSimple', 'naive-ui', 4797],
     	[3, 'bregman-arie', 'devops-exercises', 468],
     	[4, 'trimstray', 'the-book-of-secret-knowledge', 1010],
     	[5, 'programthink', 'zhao', 480],
     	[6, 'vxunderground', 'MalwareSourceCode', 767],
     	[7, 'rustdesk', 'rustdesk', 134],
     	[8, 'binhnguyennus', 'awesome-scalability', 1093],
     	[9, 'maziarraissi', 'Applied-Deep-Learning', 101],
     	[10, 'nushell', 'nushell', 3375],
     	[11, 'PaperMC', 'Paper', 6053],
     	[12, 'jynew', 'jynew', 832],
     	[13, 'solidjs', 'solid', 1039],
     	[14, 'ToolJet', 'ToolJet', 914],
     	[15, 'SigNoz', 'signoz', 432],
     	[16, 'Asabeneh', '30-Days-Of-JavaScript', 352],
     	[17, 'programthink', 'books', 1229],
     	[18, 'kdn251', 'interviews', 445],
     	[19, 'mechaniac', 'Map-of-Javascript', 9],
     	[20, 'CorentinJ', 'Real-Time-Voice-Cloning', 282],
     	[21, 'freefq', 'free', 2491],
     	[22, 'jwasham', 'coding-interview-university', 1675],
     	[23, 'csseky', 'cskaoyan', 116],
     	[24, 'bee-san', 'pyWhat', 294],
     	[25, 'tgbot-collection', 'YYeTsBot', 218],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 jina', 5742],
     	['#2 naive-ui', 4797],
     	['#3 devops-exercises', 468],
     	['#4 the-book-of-secret-knowledge', 1010],
     	['#5 zhao', 480],
     	['#6 MalwareSourceCode', 767],
     	['#7 rustdesk', 134],
     	['#8 awesome-scalability', 1093],
     	['#9 Applied-Deep-Learning', 101],
     	['#10 nushell', 3375],
     	['#11 Paper', 6053],
     	['#12 jynew', 832],
     	['#13 solid', 1039],
     	['#14 ToolJet', 914],
     	['#15 signoz', 432],
     	['#16 30-Days-Of-JavaScript', 352],
     	['#17 books', 1229],
     	['#18 interviews', 445],
     	['#19 Map-of-Javascript', 9],
     	['#20 Real-Time-Voice-Cloning', 282],
     	['#21 free', 2491],
     	['#22 coding-interview-university', 1675],
     	['#23 cskaoyan', 116],
     	['#24 pyWhat', 294],
     	['#25 YYeTsBot', 218],
     	
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