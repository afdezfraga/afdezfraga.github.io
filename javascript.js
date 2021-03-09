var request = new XMLHttpRequest();
request.open('GET', './githubWithCommits.csv', false);
request.send();
var textfileContent = request.responseText;

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart(textfileContent));

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart(textfileContent) {

  //Configurando el archivo de entrada
  var allTextLines = textfileContent.split(/\r\n|\n/);
  var headers = allTextLines[0].split(',');
  var lines = [];

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'Top');
  data.addColumn('string', 'Author');
  data.addColumn('string', 'Name');
  data.addColumn('number', 'Commits');

  for (var i=1; i<allTextLines.length; i++) {
    var entryData = allTextLines[i].split(',');
    if (entryData.length == headers.length) {
      var tarr = [];
      for (var j=0; j<headers.length; j++) {
        tarr.push(entryData[j]);
      }
      data.addRow([tarr[2], tarr[3]]);
    
  }
  // Set chart options
  var options = {'title':'Ranking de commits',
                 'width':400,
                 'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}