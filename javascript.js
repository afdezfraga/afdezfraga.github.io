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
     	[2, 'biancangming', 'wtv', 33],
     	[3, 'programthink', 'zhao', 480],
     	[4, 'vxunderground', 'MalwareSourceCode', 762],
     	[5, 'bee-san', 'pyWhat', 267],
     	[6, 'nocodb', 'nocodb', 503],
     	[7, 'deepfakes', 'faceswap', 1389],
     	[8, 'rustdesk', 'rustdesk', 120],
     	[9, 'programthink', 'books', 1229],
     	[10, 'nushell', 'nushell', 3355],
     	[11, 'maziarraissi', 'Applied-Deep-Learning', 85],
     	[12, 'PaperMC', 'Paper', 6027],
     	[13, 'jwasham', 'coding-interview-university', 1664],
     	[14, 'chubin', 'cheat.sh', 865],
     	[15, 'tgbot-collection', 'YYeTsBot', 205],
     	[16, 'microsoft', 'winget-cli', 382],
     	[17, 'PaddlePaddle', 'PaddleHub', 2060],
     	[18, 'jina-ai', 'jina', 5640],
     	[19, 'mechaniac', 'Map-of-Javascript', 9],
     	[20, 'microsoft', 'winget-pkgs', 15939],
     	[21, 'yangtingxiao', 'QuantumultX', 592],
     	[22, 'files-community', 'Files', 2522],
     	[23, 'firstcontributions', 'first-contributions', 25338],
     	[24, 'merry75', 'educative.io_courses', 118],
     	[25, 'Asabeneh', '30-Days-Of-JavaScript', 352],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 HarmonyOS', 78],
     	['#2 wtv', 33],
     	['#3 zhao', 480],
     	['#4 MalwareSourceCode', 762],
     	['#5 pyWhat', 267],
     	['#6 nocodb', 503],
     	['#7 faceswap', 1389],
     	['#8 rustdesk', 120],
     	['#9 books', 1229],
     	['#10 nushell', 3355],
     	['#11 Applied-Deep-Learning', 85],
     	['#12 Paper', 6027],
     	['#13 coding-interview-university', 1664],
     	['#14 cheat.sh', 865],
     	['#15 YYeTsBot', 205],
     	['#16 winget-cli', 382],
     	['#17 PaddleHub', 2060],
     	['#18 jina', 5640],
     	['#19 Map-of-Javascript', 9],
     	['#20 winget-pkgs', 15939],
     	['#21 QuantumultX', 592],
     	['#22 Files', 2522],
     	['#23 first-contributions', 25338],
     	['#24 educative.io_courses', 118],
     	['#25 30-Days-Of-JavaScript', 352],
     	
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