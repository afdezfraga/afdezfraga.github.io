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
	[1, 'jina-ai', 'jina', 5717],
     	[2, 'bregman-arie', 'devops-exercises', 468],
     	[3, 'trimstray', 'the-book-of-secret-knowledge', 1010],
     	[4, 'programthink', 'zhao', 480],
     	[5, 'vxunderground', 'MalwareSourceCode', 762],
     	[6, 'ParthJadhav', 'Tkinter-Designer', 163],
     	[7, 'rustdesk', 'rustdesk', 126],
     	[8, 'tgbot-collection', 'YYeTsBot', 214],
     	[9, 'nushell', 'nushell', 3367],
     	[10, 'PaperMC', 'Paper', 6046],
     	[11, 'maziarraissi', 'Applied-Deep-Learning', 95],
     	[12, 'binhnguyennus', 'awesome-scalability', 1093],
     	[13, 'SigNoz', 'signoz', 431],
     	[14, 'freefq', 'free', 2473],
     	[15, 'Awesome-HarmonyOS', 'HarmonyOS', 78],
     	[16, 'jwasham', 'coding-interview-university', 1675],
     	[17, 'Asabeneh', '30-Days-Of-JavaScript', 352],
     	[18, 'chubin', 'cheat.sh', 865],
     	[19, 'kdn251', 'interviews', 445],
     	[20, 'programthink', 'books', 1229],
     	[21, 'firstcontributions', 'first-contributions', 25608],
     	[22, 'mechaniac', 'Map-of-Javascript', 9],
     	[23, 'mingrammer', 'diagrams', 412],
     	[24, 'n8n-io', 'n8n', 4306],
     	[25, 'sudheerj', 'reactjs-interview-questions', 281],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 jina', 5717],
     	['#2 devops-exercises', 468],
     	['#3 the-book-of-secret-knowledge', 1010],
     	['#4 zhao', 480],
     	['#5 MalwareSourceCode', 762],
     	['#6 Tkinter-Designer', 163],
     	['#7 rustdesk', 126],
     	['#8 YYeTsBot', 214],
     	['#9 nushell', 3367],
     	['#10 Paper', 6046],
     	['#11 Applied-Deep-Learning', 95],
     	['#12 awesome-scalability', 1093],
     	['#13 signoz', 431],
     	['#14 free', 2473],
     	['#15 HarmonyOS', 78],
     	['#16 coding-interview-university', 1675],
     	['#17 30-Days-Of-JavaScript', 352],
     	['#18 cheat.sh', 865],
     	['#19 interviews', 445],
     	['#20 books', 1229],
     	['#21 first-contributions', 25608],
     	['#22 Map-of-Javascript', 9],
     	['#23 diagrams', 412],
     	['#24 n8n', 4306],
     	['#25 reactjs-interview-questions', 281],
     	
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