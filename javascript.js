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
     	[2, 'Awesome-HarmonyOS', 'HarmonyOS', 78],
     	[3, 'jina-ai', 'jina', 5691],
     	[4, 'bregman-arie', 'devops-exercises', 467],
     	[5, 'programthink', 'zhao', 480],
     	[6, 'trimstray', 'the-book-of-secret-knowledge', 1010],
     	[7, 'vxunderground', 'MalwareSourceCode', 762],
     	[8, 'rustdesk', 'rustdesk', 122],
     	[9, 'nushell', 'nushell', 3364],
     	[10, 'tgbot-collection', 'YYeTsBot', 207],
     	[11, 'PaperMC', 'Paper', 6042],
     	[12, 'chubin', 'cheat.sh', 865],
     	[13, 'maziarraissi', 'Applied-Deep-Learning', 91],
     	[14, 'PaddlePaddle', 'PaddleHub', 2061],
     	[15, 'deepfakes', 'faceswap', 1389],
     	[16, 'SigNoz', 'signoz', 426],
     	[17, 'jwasham', 'coding-interview-university', 1675],
     	[18, 'mechaniac', 'Map-of-Javascript', 9],
     	[19, 'firstcontributions', 'first-contributions', 25463],
     	[20, 'Asabeneh', '30-Days-Of-JavaScript', 352],
     	[21, 'programthink', 'books', 1229],
     	[22, 'kdn251', 'interviews', 445],
     	[23, 'bee-san', 'pyWhat', 267],
     	[24, 'yangtingxiao', 'QuantumultX', 592],
     	[25, 'mingrammer', 'diagrams', 412],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 wtv', 34],
     	['#2 HarmonyOS', 78],
     	['#3 jina', 5691],
     	['#4 devops-exercises', 467],
     	['#5 zhao', 480],
     	['#6 the-book-of-secret-knowledge', 1010],
     	['#7 MalwareSourceCode', 762],
     	['#8 rustdesk', 122],
     	['#9 nushell', 3364],
     	['#10 YYeTsBot', 207],
     	['#11 Paper', 6042],
     	['#12 cheat.sh', 865],
     	['#13 Applied-Deep-Learning', 91],
     	['#14 PaddleHub', 2061],
     	['#15 faceswap', 1389],
     	['#16 signoz', 426],
     	['#17 coding-interview-university', 1675],
     	['#18 Map-of-Javascript', 9],
     	['#19 first-contributions', 25463],
     	['#20 30-Days-Of-JavaScript', 352],
     	['#21 books', 1229],
     	['#22 interviews', 445],
     	['#23 pyWhat', 267],
     	['#24 QuantumultX', 592],
     	['#25 diagrams', 412],
     	
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