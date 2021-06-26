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
     	[2, 'biancangming', 'wtv', 31],
     	[3, 'programthink', 'zhao', 480],
     	[4, 'vxunderground', 'MalwareSourceCode', 762],
     	[5, 'programthink', 'books', 1229],
     	[6, 'jwasham', 'coding-interview-university', 1664],
     	[7, 'deepfakes', 'faceswap', 1389],
     	[8, 'SerenityOS', 'serenity', 22572],
     	[9, 'PaperMC', 'Paper', 6019],
     	[10, 'microsoft', 'winget-pkgs', 15677],
     	[11, 'microsoft', 'winget-cli', 382],
     	[12, 'maziarraissi', 'Applied-Deep-Learning', 81],
     	[13, 'nushell', 'nushell', 3349],
     	[14, 'jina-ai', 'jina', 5627],
     	[15, 'chubin', 'cheat.sh', 865],
     	[16, 'rustdesk', 'rustdesk', 116],
     	[17, 'PaddlePaddle', 'PaddleHub', 2060],
     	[18, 'tgbot-collection', 'YYeTsBot', 204],
     	[19, 'mechaniac', 'Map-of-Javascript', 9],
     	[20, 'yangtingxiao', 'QuantumultX', 592],
     	[21, 'firstcontributions', 'first-contributions', 25281],
     	[22, 'pluja', 'awesome-privacy', 276],
     	[23, 'files-community', 'Files', 2515],
     	[24, 'ossu', 'computer-science', 876],
     	[25, 'ethersphere', 'bee', 1219],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 HarmonyOS', 78],
     	['#2 wtv', 31],
     	['#3 zhao', 480],
     	['#4 MalwareSourceCode', 762],
     	['#5 books', 1229],
     	['#6 coding-interview-university', 1664],
     	['#7 faceswap', 1389],
     	['#8 serenity', 22572],
     	['#9 Paper', 6019],
     	['#10 winget-pkgs', 15677],
     	['#11 winget-cli', 382],
     	['#12 Applied-Deep-Learning', 81],
     	['#13 nushell', 3349],
     	['#14 jina', 5627],
     	['#15 cheat.sh', 865],
     	['#16 rustdesk', 116],
     	['#17 PaddleHub', 2060],
     	['#18 YYeTsBot', 204],
     	['#19 Map-of-Javascript', 9],
     	['#20 QuantumultX', 592],
     	['#21 first-contributions', 25281],
     	['#22 awesome-privacy', 276],
     	['#23 Files', 2515],
     	['#24 computer-science', 876],
     	['#25 bee', 1219],
     	
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