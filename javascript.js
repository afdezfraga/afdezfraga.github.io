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
	[1, 'jina-ai', 'jina', 5716],
     	[2, 'biancangming', 'wtv', 34],
     	[3, 'bregman-arie', 'devops-exercises', 468],
     	[4, 'trimstray', 'the-book-of-secret-knowledge', 1010],
     	[5, 'programthink', 'zhao', 480],
     	[6, 'ParthJadhav', 'Tkinter-Designer', 157],
     	[7, 'vxunderground', 'MalwareSourceCode', 762],
     	[8, 'Awesome-HarmonyOS', 'HarmonyOS', 78],
     	[9, 'rustdesk', 'rustdesk', 124],
     	[10, 'tgbot-collection', 'YYeTsBot', 211],
     	[11, 'nushell', 'nushell', 3367],
     	[12, 'maziarraissi', 'Applied-Deep-Learning', 93],
     	[13, 'PaperMC', 'Paper', 6045],
     	[14, 'chubin', 'cheat.sh', 865],
     	[15, 'SigNoz', 'signoz', 427],
     	[16, 'PaddlePaddle', 'PaddleHub', 2062],
     	[17, 'binhnguyennus', 'awesome-scalability', 1093],
     	[18, 'jwasham', 'coding-interview-university', 1675],
     	[19, 'freefq', 'free', 2467],
     	[20, 'black7375', 'Firefox-UI-Fix', 369],
     	[21, 'mechaniac', 'Map-of-Javascript', 9],
     	[22, 'Asabeneh', '30-Days-Of-JavaScript', 352],
     	[23, 'programthink', 'books', 1229],
     	[24, 'kdn251', 'interviews', 445],
     	[25, 'firstcontributions', 'first-contributions', 25570],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 jina', 5716],
     	['#2 wtv', 34],
     	['#3 devops-exercises', 468],
     	['#4 the-book-of-secret-knowledge', 1010],
     	['#5 zhao', 480],
     	['#6 Tkinter-Designer', 157],
     	['#7 MalwareSourceCode', 762],
     	['#8 HarmonyOS', 78],
     	['#9 rustdesk', 124],
     	['#10 YYeTsBot', 211],
     	['#11 nushell', 3367],
     	['#12 Applied-Deep-Learning', 93],
     	['#13 Paper', 6045],
     	['#14 cheat.sh', 865],
     	['#15 signoz', 427],
     	['#16 PaddleHub', 2062],
     	['#17 awesome-scalability', 1093],
     	['#18 coding-interview-university', 1675],
     	['#19 free', 2467],
     	['#20 Firefox-UI-Fix', 369],
     	['#21 Map-of-Javascript', 9],
     	['#22 30-Days-Of-JavaScript', 352],
     	['#23 books', 1229],
     	['#24 interviews', 445],
     	['#25 first-contributions', 25570],
     	
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