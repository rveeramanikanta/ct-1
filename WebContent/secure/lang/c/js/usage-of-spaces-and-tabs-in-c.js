var introjs;

var usageOfSpacesAndTabsInCReady = function() {
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});

	$('#restartBtn').click(function() {
		location.reload();
	});

	introJsFunction();
}

function introJsFunction() {
introjs = introJs();
introjs.setOptions({
	showStepNumbers: false,
	exitOnOverlayClick: false,
	showBullets: false,
	exitOnEsc: false,
	keyboardNavigation: false,
	steps : [ {
		element : "#code",
		intro : "Let us learn the <span class='ct-code-b-yellow'>coding</span> and <span class='ct-code-b-yellow'>naming</span> conventions in " +
				"<span class='ct-code-b-yellow'>C</span> using this sample code."
	},
	{
		element : "#include",
		intro : "<span class='ct-code-b-yellow'>#include</span> is used to include both user and system header files."
	},
	{
		element : "#stdio",
		intro : "<span class='ct-code-b-yellow'>stdio.h</span> is a system header file which means <span class='ct-code-b-yellow'>Standard " +
				"Input Output</span> file with <span class='ct-code-b-yellow'>.h</span> extension."
	},
	{
		element : "#enterButton1",
		intro : "<span class='ct-code-b-yellow'>#include</span> line is always followed by an <span class='ct-code-b-yellow'>enter key</span> " + 
				"<span class='enter-css'>¬</span>."
	},
	{
		element : "#void",
		intro : "<span class='ct-code-b-yellow'>void</span> is a keyword and all keywords must be written in " +
				"<span class='ct-code-b-yellow'>lowercase</span>."
	},
	{
		element : "#spaceId1",
		intro : "Keywords are separated by a single <span class='ct-code-b-yellow'>space</span> " + 
				"<span class='space-css' style='white-space: pre;'> </span>."
	},
	{
		element : "#main",
		intro : "<span class='ct-code-b-yellow'>main()</span> is a function name.</br>" +
				"Function names are written in <span class='ct-code-b-yellow'>camelCase</span>.</br>" +
				"Function names will always starts with <span class='ct-code-b-yellow'>lowercase</span> letter."
	},
	{
		element : "#openBrace1",
		intro : "The function block starts with an <span class='ct-code-b-yellow'>opening brace</span> <span class='ct-code-b-yellow'>{</span> " +
				"and followed by an <span class='ct-code-b-yellow'>enter key</span> <span class='enter-css'>¬</span>."
	},
	{
		element : "#tabLine1",
		intro : "The lines inside a block are always indented by a single <span class='ct-code-b-yellow'>tab</span> " + 
				"<div class='tab-css' style='white-space: pre'>→	</div>."
	},
	{
		element : "#int",
		intro : "<span class='ct-code-b-yellow'>int</span> is a primitive data type and hence starts with " +
				"<span class='ct-code-b-yellow'>lowercase</span> letter."
	},
	{
		element : "#i",
		intro : "<span class='ct-code-b-yellow'>i</span> is a variable name.</br>" +
				"Variable names will always starts with <span class='ct-code-b-yellow'>lowercase</span> letter."
	},
	{
		element : "#semicolon",
		intro : "<span class='ct-code-b-yellow'>semicolon (;)</span> is used at the end of every statement " +
				"to mark the termination of that statement."
	},
	{
		element : "#for",
		intro : "<span class='ct-code-b-yellow'>for</span> is a keyword and hence written in <span class='ct-code-b-yellow'>lowercase</span>."
	},
	{
		element : "#equalTo",
		intro : "<span class='ct-code-b-yellow'>Equals-to (=)</span> symbol is an operator and operators are separated by a single " +
				"<span class='ct-code-b-yellow'>space</span> <span class='space-css' style='white-space: pre;'> </span> on both sides."
	},
	{
		element : "#lessThan",
		intro : "<span class='ct-code-b-yellow'>Less-than (<)</span> symbol is an operator and operators are separated by a single " +
				"<span class='ct-code-b-yellow'>space</span> <span class='space-css' style='white-space: pre;'> </span> on both sides."
	},
	{
		element : "#openBrace2",
		intro : "The for block starts with an <span class='ct-code-b-yellow'>opening brace</span> <span class='ct-code-b-yellow'>{</span> " +
				"and followed by an <span class='ct-code-b-yellow'>enter key</span> <span class='enter-css'>¬</span>."
	},
	{
		element : "#closeBrace1",
		intro : "The for block ends with a <span class='ct-code-b-yellow'>closing brace</span> <span class='ct-code-b-yellow'>}</span> " +
				"and followed by an <span class='ct-code-b-yellow'>enter key</span> <span class='enter-css'>¬</span>."
	},
	{
		element : "#closeBrace2",
		intro : "The method block ends with a <span class='ct-code-b-yellow'>closing brace</span> <span class='ct-code-b-yellow'>}</span>."
	},
	{
		element : "#restartBtn",
		intro : "Click to restart.",
		tooltipClass: "introjs-tooltip-min-width-custom",
		position : "right"
	}
	]});

	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		switch (elementId) {
		case "code":
			$('.introjs-nextbutton').show();
			break;
		case "restartBtn":
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
			});
			break;
		default:
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function () {
				$('.introjs-nextbutton, .introjs-prevbutton').show();
			});
			break;
		}
	});
	introjs.start();
}
