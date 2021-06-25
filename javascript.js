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
     	[3, 'pluja', 'awesome-privacy', 276],
     	[4, 'programthink', 'zhao', 480],
     	[5, 'jwasham', 'coding-interview-university', 1664],
     	[6, 'vxunderground', 'MalwareSourceCode', 762],
     	[7, 'programthink', 'books', 1229],
     	[8, 'microsoft', 'winget-pkgs', 15616],
     	[9, 'microsoft', 'winget-cli', 382],
     	[10, 'deepfakes', 'faceswap', 1389],
     	[11, 'Tencent', 'secguide', 14],
     	[12, 'SerenityOS', 'serenity', 22520],
     	[13, 'PaperMC', 'Paper', 6019],
     	[14, 'jina-ai', 'jina', 5622],
     	[15, 'nushell', 'nushell', 3340],
     	[16, 'chubin', 'cheat.sh', 865],
     	[17, 'tgbot-collection', 'YYeTsBot', 204],
     	[18, 'rustdesk', 'rustdesk', 104],
     	[19, 'mechaniac', 'Map-of-Javascript', 9],
     	[20, 'firstcontributions', 'first-contributions', 25247],
     	[21, 'ossu', 'computer-science', 876],
     	[22, 'kon9chunkit', 'GitHub-Chinese-Top-Charts', 83],
     	[23, 'ethersphere', 'bee', 1218],
     	[24, 'files-community', 'Files', 2514],
     	[25, 'lan-tianxiang', 'jd_shell', 273],
     	
    ]);

      // Create the data table.
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Name');
    data2.addColumn('number', 'Commits');
    data2.addRows([
	['#1 HarmonyOS', 78],
     	['#2 wtv', 31],
     	['#3 awesome-privacy', 276],
     	['#4 zhao', 480],
     	['#5 coding-interview-university', 1664],
     	['#6 MalwareSourceCode', 762],
     	['#7 books', 1229],
     	['#8 winget-pkgs', 15616],
     	['#9 winget-cli', 382],
     	['#10 faceswap', 1389],
     	['#11 secguide', 14],
     	['#12 serenity', 22520],
     	['#13 Paper', 6019],
     	['#14 jina', 5622],
     	['#15 nushell', 3340],
     	['#16 cheat.sh', 865],
     	['#17 YYeTsBot', 204],
     	['#18 rustdesk', 104],
     	['#19 Map-of-Javascript', 9],
     	['#20 first-contributions', 25247],
     	['#21 computer-science', 876],
     	['#22 GitHub-Chinese-Top-Charts', 83],
     	['#23 bee', 1218],
     	['#24 Files', 2514],
     	['#25 jd_shell', 273],
     	
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