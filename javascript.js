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
     	[4, 'vxunderground', 'MalwareSourceCode', 762],
     	[5, 'alibaba', 'PolarDB-for-PostgreSQL', 51],
     	[6, 'rustdesk', 'rustdesk', 122],
     	[7, 'deepfakes', 'faceswap', 1389],
     	[8, 'PaperMC', 'Paper', 6031],
     	[9, 'trimstray', 'the-book-of-secret-knowledge', 1010],
     	[10, 'bee-san', 'pyWhat', 267],
     	[11, 'nushell', 'nushell', 3357],
     	[12, 'maziarraissi', 'Applied-Deep-Learning', 87],
     	[13, 'tgbot-collection', 'YYeTsBot', 205],
     	[14, 'chubin', 'cheat.sh', 865],
     	[15, 'programthink', 'books', 1229],
     	[16, 'nocodb', 'nocodb', 509],
     	[17, 'jwasham', 'coding-interview-university', 1673],
     	[18, 'PaddlePaddle', 'PaddleHub', 2061],
     	[19, 'bregman-arie', 'devops-exercises', 465],
     	[20, 'jina-ai', 'jina', 5647],
     	[21, 'mechaniac', 'Map-of-Javascript', 9],
     	[22, 'yangtingxiao', 'QuantumultX', 592],
     	[23, 'firstcontributions', 'first-contributions', 25383],
     	[24, 'Asabeneh', '30-Days-Of-JavaScript', 352],
     	[25, 'files-community', 'Files', 2522],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 HarmonyOS', 78],
     	['#2 wtv', 34],
     	['#3 zhao', 480],
     	['#4 MalwareSourceCode', 762],
     	['#5 PolarDB-for-PostgreSQL', 51],
     	['#6 rustdesk', 122],
     	['#7 faceswap', 1389],
     	['#8 Paper', 6031],
     	['#9 the-book-of-secret-knowledge', 1010],
     	['#10 pyWhat', 267],
     	['#11 nushell', 3357],
     	['#12 Applied-Deep-Learning', 87],
     	['#13 YYeTsBot', 205],
     	['#14 cheat.sh', 865],
     	['#15 books', 1229],
     	['#16 nocodb', 509],
     	['#17 coding-interview-university', 1673],
     	['#18 PaddleHub', 2061],
     	['#19 devops-exercises', 465],
     	['#20 jina', 5647],
     	['#21 Map-of-Javascript', 9],
     	['#22 QuantumultX', 592],
     	['#23 first-contributions', 25383],
     	['#24 30-Days-Of-JavaScript', 352],
     	['#25 Files', 2522],
     	
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