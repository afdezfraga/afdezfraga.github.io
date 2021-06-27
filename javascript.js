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
     	[2, 'nocodb', 'nocodb', 503],
     	[3, 'biancangming', 'wtv', 31],
     	[4, 'programthink', 'zhao', 480],
     	[5, 'bee-san', 'pyWhat', 267],
     	[6, 'vxunderground', 'MalwareSourceCode', 762],
     	[7, 'programthink', 'books', 1229],
     	[8, 'deepfakes', 'faceswap', 1389],
     	[9, 'jwasham', 'coding-interview-university', 1664],
     	[10, 'maziarraissi', 'Applied-Deep-Learning', 83],
     	[11, 'rustdesk', 'rustdesk', 120],
     	[12, 'PaperMC', 'Paper', 6022],
     	[13, 'nushell', 'nushell', 3353],
     	[14, 'microsoft', 'winget-cli', 382],
     	[15, 'SerenityOS', 'serenity', 22607],
     	[16, 'tgbot-collection', 'YYeTsBot', 205],
     	[17, 'chubin', 'cheat.sh', 865],
     	[18, 'microsoft', 'winget-pkgs', 15758],
     	[19, 'PaddlePaddle', 'PaddleHub', 2060],
     	[20, 'jina-ai', 'jina', 5631],
     	[21, 'mechaniac', 'Map-of-Javascript', 9],
     	[22, 'yangtingxiao', 'QuantumultX', 592],
     	[23, 'firstcontributions', 'first-contributions', 25313],
     	[24, 'files-community', 'Files', 2515],
     	[25, 'merry75', 'educative.io_courses', 118],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 HarmonyOS', 78],
     	['#2 nocodb', 503],
     	['#3 wtv', 31],
     	['#4 zhao', 480],
     	['#5 pyWhat', 267],
     	['#6 MalwareSourceCode', 762],
     	['#7 books', 1229],
     	['#8 faceswap', 1389],
     	['#9 coding-interview-university', 1664],
     	['#10 Applied-Deep-Learning', 83],
     	['#11 rustdesk', 120],
     	['#12 Paper', 6022],
     	['#13 nushell', 3353],
     	['#14 winget-cli', 382],
     	['#15 serenity', 22607],
     	['#16 YYeTsBot', 205],
     	['#17 cheat.sh', 865],
     	['#18 winget-pkgs', 15758],
     	['#19 PaddleHub', 2060],
     	['#20 jina', 5631],
     	['#21 Map-of-Javascript', 9],
     	['#22 QuantumultX', 592],
     	['#23 first-contributions', 25313],
     	['#24 Files', 2515],
     	['#25 educative.io_courses', 118],
     	
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