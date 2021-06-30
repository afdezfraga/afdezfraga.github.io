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
	[1, 'Awesome-HarmonyOS', 'HarmonyOS', 78],
     	[2, 'biancangming', 'wtv', 34],
     	[3, 'programthink', 'zhao', 480],
     	[4, 'jina-ai', 'jina', 5665],
     	[5, 'trimstray', 'the-book-of-secret-knowledge', 1010],
     	[6, 'vxunderground', 'MalwareSourceCode', 762],
     	[7, 'bregman-arie', 'devops-exercises', 465],
     	[8, 'rustdesk', 'rustdesk', 122],
     	[9, 'nushell', 'nushell', 3358],
     	[10, 'PaperMC', 'Paper', 6039],
     	[11, 'tgbot-collection', 'YYeTsBot', 205],
     	[12, 'deepfakes', 'faceswap', 1389],
     	[13, 'chubin', 'cheat.sh', 865],
     	[14, 'maziarraissi', 'Applied-Deep-Learning', 89],
     	[15, 'PaddlePaddle', 'PaddleHub', 2061],
     	[16, 'jwasham', 'coding-interview-university', 1675],
     	[17, 'programthink', 'books', 1229],
     	[18, 'mechaniac', 'Map-of-Javascript', 9],
     	[19, 'firstcontributions', 'first-contributions', 25428],
     	[20, 'bee-san', 'pyWhat', 267],
     	[21, 'SigNoz', 'signoz', 426],
     	[22, 'Asabeneh', '30-Days-Of-JavaScript', 352],
     	[23, 'yangtingxiao', 'QuantumultX', 592],
     	[24, 'kdn251', 'interviews', 445],
     	[25, 'alibaba', 'PolarDB-for-PostgreSQL', 53],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 HarmonyOS', 78],
     	['#2 wtv', 34],
     	['#3 zhao', 480],
     	['#4 jina', 5665],
     	['#5 the-book-of-secret-knowledge', 1010],
     	['#6 MalwareSourceCode', 762],
     	['#7 devops-exercises', 465],
     	['#8 rustdesk', 122],
     	['#9 nushell', 3358],
     	['#10 Paper', 6039],
     	['#11 YYeTsBot', 205],
     	['#12 faceswap', 1389],
     	['#13 cheat.sh', 865],
     	['#14 Applied-Deep-Learning', 89],
     	['#15 PaddleHub', 2061],
     	['#16 coding-interview-university', 1675],
     	['#17 books', 1229],
     	['#18 Map-of-Javascript', 9],
     	['#19 first-contributions', 25428],
     	['#20 pyWhat', 267],
     	['#21 signoz', 426],
     	['#22 30-Days-Of-JavaScript', 352],
     	['#23 QuantumultX', 592],
     	['#24 interviews', 445],
     	['#25 PolarDB-for-PostgreSQL', 53],
     	
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