var programClass;
var programStage;
	
$('#continueStartPage').click(function(evt) {
	//evt.preventDefault();
	programClass = $('#classSelector').val();
	programStage = $('#stageSelector').val();
	
	$('#startPage').remove();
	$('#inputTablePage').css('display', 'block');
	fillTable()
});

function fillTable() {
	for (var factor in factors) {
		for (var criterium in factors[factor]) {
			if (subclasses[criterium].indexOf(parseInt(programClass, 10)) !== -1) {
				for (var metrics in factors[factor][criterium]) {
					if (phases[metrics].indexOf(programStage) !== -1) {
						for (var key in factors[factor][criterium][metrics]) {
							var elementCode = factors[factor][criterium][metrics][key];
							var elementName = elements[elementCode];
							$('#inputTable').append(makeTableRow(elementCode, elementName));
						}
					}
				}
			}
		}
	}
}

function makeTableRow(elementCode, elementName) {
	return "" +
	"<tr>" +
		"<td>" + elementCode + "</td>" +
		"<td>" + elementName + "</td>" +
		"<td> <input type=\"range\" min=\"0\" max=\"1\" step=\"0.1\" value=\"0\"> </td>" +
	"</tr>"
}