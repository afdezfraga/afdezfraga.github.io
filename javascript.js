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
	[1, 'jina-ai', 'jina', 5731],
     	[2, 'bregman-arie', 'devops-exercises', 468],
     	[3, 'trimstray', 'the-book-of-secret-knowledge', 1010],
     	[4, 'programthink', 'zhao', 480],
     	[5, 'vxunderground', 'MalwareSourceCode', 767],
     	[6, 'ParthJadhav', 'Tkinter-Designer', 165],
     	[7, 'tgbot-collection', 'YYeTsBot', 216],
     	[8, 'rustdesk', 'rustdesk', 126],
     	[9, 'nushell', 'nushell', 3369],
     	[10, 'binhnguyennus', 'awesome-scalability', 1093],
     	[11, 'PaperMC', 'Paper', 6049],
     	[12, 'maziarraissi', 'Applied-Deep-Learning', 95],
     	[13, 'SigNoz', 'signoz', 431],
     	[14, 'freefq', 'free', 2479],
     	[15, 'Asabeneh', '30-Days-Of-JavaScript', 352],
     	[16, 'jwasham', 'coding-interview-university', 1675],
     	[17, 'PaddlePaddle', 'PaddleHub', 2062],
     	[18, 'kdn251', 'interviews', 445],
     	[19, 'programthink', 'books', 1229],
     	[20, 'firstcontributions', 'first-contributions', 25662],
     	[21, 'n8n-io', 'n8n', 4318],
     	[22, 'mechaniac', 'Map-of-Javascript', 9],
     	[23, 'bee-san', 'pyWhat', 294],
     	[24, 'sudheerj', 'reactjs-interview-questions', 281],
     	[25, 'Awesome-HarmonyOS', 'HarmonyOS', 78],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 jina', 5731],
     	['#2 devops-exercises', 468],
     	['#3 the-book-of-secret-knowledge', 1010],
     	['#4 zhao', 480],
     	['#5 MalwareSourceCode', 767],
     	['#6 Tkinter-Designer', 165],
     	['#7 YYeTsBot', 216],
     	['#8 rustdesk', 126],
     	['#9 nushell', 3369],
     	['#10 awesome-scalability', 1093],
     	['#11 Paper', 6049],
     	['#12 Applied-Deep-Learning', 95],
     	['#13 signoz', 431],
     	['#14 free', 2479],
     	['#15 30-Days-Of-JavaScript', 352],
     	['#16 coding-interview-university', 1675],
     	['#17 PaddleHub', 2062],
     	['#18 interviews', 445],
     	['#19 books', 1229],
     	['#20 first-contributions', 25662],
     	['#21 n8n', 4318],
     	['#22 Map-of-Javascript', 9],
     	['#23 pyWhat', 294],
     	['#24 reactjs-interview-questions', 281],
     	['#25 HarmonyOS', 78],
     	
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