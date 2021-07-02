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
	[1, 'biancangming', 'wtv', 34],
     	[2, 'jina-ai', 'jina', 5708],
     	[3, 'bregman-arie', 'devops-exercises', 468],
     	[4, 'Awesome-HarmonyOS', 'HarmonyOS', 78],
     	[5, 'trimstray', 'the-book-of-secret-knowledge', 1010],
     	[6, 'programthink', 'zhao', 480],
     	[7, 'vxunderground', 'MalwareSourceCode', 762],
     	[8, 'rustdesk', 'rustdesk', 122],
     	[9, 'tgbot-collection', 'YYeTsBot', 210],
     	[10, 'nushell', 'nushell', 3367],
     	[11, 'maziarraissi', 'Applied-Deep-Learning', 91],
     	[12, 'chubin', 'cheat.sh', 865],
     	[13, 'PaperMC', 'Paper', 6042],
     	[14, 'SigNoz', 'signoz', 426],
     	[15, 'PaddlePaddle', 'PaddleHub', 2062],
     	[16, 'pmndrs', 'racing-game', 461],
     	[17, 'mechaniac', 'Map-of-Javascript', 9],
     	[18, 'jwasham', 'coding-interview-university', 1675],
     	[19, 'Asabeneh', '30-Days-Of-JavaScript', 352],
     	[20, 'firstcontributions', 'first-contributions', 25512],
     	[21, 'deepfakes', 'faceswap', 1389],
     	[22, 'freefq', 'free', 2461],
     	[23, 'programthink', 'books', 1229],
     	[24, 'kdn251', 'interviews', 445],
     	[25, 'megaease', 'easegress', 1319],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 wtv', 34],
     	['#2 jina', 5708],
     	['#3 devops-exercises', 468],
     	['#4 HarmonyOS', 78],
     	['#5 the-book-of-secret-knowledge', 1010],
     	['#6 zhao', 480],
     	['#7 MalwareSourceCode', 762],
     	['#8 rustdesk', 122],
     	['#9 YYeTsBot', 210],
     	['#10 nushell', 3367],
     	['#11 Applied-Deep-Learning', 91],
     	['#12 cheat.sh', 865],
     	['#13 Paper', 6042],
     	['#14 signoz', 426],
     	['#15 PaddleHub', 2062],
     	['#16 racing-game', 461],
     	['#17 Map-of-Javascript', 9],
     	['#18 coding-interview-university', 1675],
     	['#19 30-Days-Of-JavaScript', 352],
     	['#20 first-contributions', 25512],
     	['#21 faceswap', 1389],
     	['#22 free', 2461],
     	['#23 books', 1229],
     	['#24 interviews', 445],
     	['#25 easegress', 1319],
     	
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