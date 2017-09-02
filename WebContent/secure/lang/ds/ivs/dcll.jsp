 <%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Doubly Circular Linked List</title>
<link href="/css/bootstrap.min.css" rel="stylesheet" >
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/jquery-ui.css" rel="stylesheet" >
<link href="/css/animate.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<style type="text/css">

.introjs-tooltip {
	min-width: 350px;
}

.introjs-duplicate-nextbutton {
	margin: 0px !important;
	background-color: green;
}

.box-border {
	border-radius: 12px;
	border: 2px solid gray;
}

div, span {
	position: relative;
}

.padding00 {
	padding: 0;
}

.padding6 {
	padding: 6px;
}

.creamPreTab {
	tab-size: 2;
	margin: 2px;
	padding: 12px;
	-moz-tab-size: 2;
	border-radius: 8px;
	font-family: monospace;
	background-color: #fffae6;
}

.ui-effects-transfer {
	border: 1px solid blue;
	z-index: 99999999 !important;
}

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}

.position {
	position: relative;
	display: inline-block;
}

.margin-top-15 {
	margin-top: 15px;
}

.margin-top-25 {
	margin-top: 25px;
}

.output-console-title-bar {
	border-radius: 8px 8px 0 0;
}

.output-console-body {
	height: 150px;
	padding: 10px;
	font-size: 14px;
	margin-bottom: 14px;
	white-space: pre-line;
	border-radius: 0 0 8px 8px;
}

.box {
	min-height: 24px;
	text-align: center;
	border-radius: 6px;
	border: 1px solid green;
}

.div-border {
	margin: 0;
	padding: 0;
	width: 45px;
	min-height: 24px;
	text-align: center;
	display: inline-block;
	border: 2px solid gray;
}

.left-radius {
	border-right: none;
	border-color: green;
	border-radius: 6px 0 0 6px;
}

.no-radius {
	border-color: blue;
}

.right-radius {
	border-color: green;
	border-radius: 0 6px 6px 0;
	border-left: none;
}

.inline-css {
	margin: 0 7px;
	position: relative;
	display: inline-block;
}

.buttons {
	color: black;
	letter-spacing: 1px;
	font-family: monospace;
	box-shadow: 1px 2px 4px 0;
}

.user-text {
	width: 82px;
	height: 27px;
	border: none;
	background: black;
}

.btn:hover {
	color: white;
	background-color: #4CAF50 !important;
}

.btn:active{
	color: white;
	background-color: #2E8B57 !important;
}

.disabled {
	pointer-events: none;
}

.margin-left30 {
	margin-left: 55px;
}

.margin-7 {
	margin-top: 9px;
	margin-bottom: 12px;
}

.svg-css {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
}

.svg-line {
	stroke: gray;
	stroke-width: 2; 
	position: relative;
	z-index: 10000000 !important;
	marker-end: url("#arrowEnd"); 
}

.ct-fonts {
	font-weight: bold;
	font-family: monospace;
}

.ct-green-color {
	color: green;
	font-weight: bold;
}
.ct-brown-color {
	color: brown;
}

.error-text {
	color :red;
	font-weight: bold;
}

.green-color {
	color: #40f940;
	font-weight: bold;
}

.red-color {
	color: #f23a21;
	font-weight: bold;
}

polyline {
	fill: transparent;
	stroke: red;
	stroke-width: 4;
}

</style>
</head>
<body>
<script type="text/javascript">
$(document).ready(function() {
	dcllReadyFunction();
});
var buttonNames = ['Add Nodes', 'Insert At End', 'Insert At Position', 'Delete At End', 'Delete At Position', 'Traverse List'];
var buttonName, printfCount, outPutCount, iVal, lastNodeCount, lineCount = nodeCount = 1;
var lineFlag = false;
var lang;

function dcllReadyFunction() {
	lang = getURLParameter("lang");
	preStructTypeList();
	appendButtons();
	svgAppend("#animationDiv", "svgId");
	svgMarkerAppend("#svgId", "arrow");
	initIntroJS();
}

function getURLParameter(sParam) {
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

function appendButtons() {	//append double linked list operation (buttons)
	for (var i = 0; i < buttonNames.length; i++) {
		var buttonId = buttonNames[i].charAt(0).toLowerCase() + buttonNames[i].substring(1, buttonNames[i].length);
		$('#buttonDiv').append('<div class="inline-css"><span class="btn btn-success buttons btn-xs margin-7 disabled" id="'
							+ buttonId.split(" ").join("") + '">' + buttonNames[i] + ' </span></div>');
	}
}

function declareNodesWhenFunctionCall(id1, id2, nodeName, nodeNameText, callBackFunction) {	//extra node declaration 
	$('#declareNodes').append('<div class="col-xs-1  extraNode opacity00 padding00" id=' + id1 + '>'
					+ '<div class="col-xs-12 box padding00"><span id=' + id2 + ' class="extrNodeVal ct-brown-color ct-fonts inline-style"></span>'
					+ '</div><div class="text-center col-xs-12 padding00 ct-green-color" id=' + nodeName + '>' + nodeNameText + '</div></div> ');
	introjs.refresh();
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function getRandomInt(min, max) { //access random address
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function createDynamicNodes(val) { //dynamically create a empty new node
	var randomAddress = getRandomInt(1000, 5000);
	fixedWidth();
	var t = $('#posVal').text();
	var x = '<div class="col-xs-2 nodes opacity00" id="node' + val + '" style="top: 0px; width: auto;"><div class="col-xs-12 padding00">'
					+ '<div class="col-xs-4 ct-green-color ct-fonts text-center padding00">prev</div>'
					+ '<div class="col-xs-4 ct-blue-color ct-fonts padding00 text-center">data</div>'
					+ '<div class="col-xs-4 ct-green-color ct-fonts text-center padding00">next</div></div>'
					+ '<div id="nodedata' + val + '" class="data-nodes"><div id="prevDiv' + val + '" class="div-border left-radius col-xs-4 prev-div">'
					+ ' <span id="prev' + val + '" class="position prev-span ct-green-color ct-fonts inline-style opacity00"></span></div>'
					+ '<div id="dataDiv' + val + '" class="div-border no-radius col-xs-4 data-div">'
					+ ' <span id="data' + val + '" class="data-span ct-blue-color ct-fonts opacity00" style="top: 0px; left: 0px;"></span></div>'
					+ '<div id="nextDiv' + val + '" class="position div-border right-radius col-xs-6 next-div">'
					+ ' <span id="next' + val + '" class="position next-span ct-green-color ct-fonts inline-style opacity00"></span></div></div>'
					+ ' <div class="col-xs-12 padding00"><div class="col-xs-4 col-xs-offset-4 padding00 text-center"><span id="dataAddress' + val + '"'
					+ ' class="data-address padding00 ct-brown-color ct-fonts">'+ randomAddress + '</span></div></div></div>';
	if (buttonName == 'insertAtPosition' && $('.nodes').length != 0) {
		$('#declareNodes').after('<div class="col-xs-10 col-xs-offset-1 padding00" id="posNodes"></div>');
		$('#posNodes').append(x);
		$('#insertAtPosition').addClass('insert-position');
		if (buttonName == 'insertAtPosition' && (t != 1 && t < $('.nodes').length)) {
			$('#insertAtPosition').addClass('insert-middle');
		} else {
			$('#insertAtPosition').addClass('insert-endpos');
		}
	} else {
		$('#dynamicNodes').append(x);
		if ($('.nodes').length > 4) {
			$('#node' + val).addClass('pull-right');
		}
		if ($('.nodes').length == 5) {
			$('#line11, #line13').remove();
			svgAnimatingLineTopToBottom("#animationDiv", "#firstNode", "#dataDiv" + lastNodeCount, "#svgId", "line11", "arrow");
			svgAnimatingLineTopToBottom("#animationDiv", "#lastNode", "#dataDiv" + lastNodeCount, "#svgId", "line13", "arrow");
		}
	}
}

function preCPPClass() {
	$('#structTypelist').after('<pre class="creamPreTab opacity00" id="declareFirstNode"></pre>');
	$('#declareFirstNode').append('class Dcll {\n'
							+ '\t<span id="cppFstDec">node first;</span>\n'
							+ '\t<span id="constructCreat">public: Dcll() {\n'
							+ '\t\t<span id="cppFstInit">first = NULL;</span>\n'
							+ '\t}</span>\n'
							+ '\t<span id="emptyMethod">void empty() {\n'
							+ '\t\t<span id="emptyFstNul">first = NULL;</span>\n'
							+ '\t}</span>\n'
							+ '\t<span id="membrFunctions">node createNode();\n'
							+ '\tvoid addNodes(int x);\n'
							+ '\tvoid insertAtEnd(int x);\n'
							+ '\tvoid insertAtPosition(int pos, int x);\n'
							+ '\tvoid deleteAtEnd();\n'
							+ '\tvoid deleteAtPosition(int pos);\n'
							+ '\tvoid traverseList();</span>\n'
							+ '};');
}

function preStructTypeList() {	//declare structure type and first node to null
	$("#structTypelist").append('<span id="strcutSpan">struct list {\n'
					+ '\tint data;\n'
					+ '\tstruct list *prev;\n'
					+ '\tstruct list *next;\n'
					+ '};</span>\n'
					+ '<span id="typeDefDec">typedef struct list* node;</span>\n'
					+ '</span>');
	if (lang == 'c') {
		$('#typeDefDec').after('\n<span id="declareFirstNode">node first = NULL;</span>');
	} else if (lang == 'cpp') {
		$('#firstVal').addClass('opacity00');
		preCPPClass();
	}
}

function preCreateNodeFunction() {	//pre create Node method
	$("#csllOperations").append('<span id="createNodeMthd"></span> {\n'
					+ '\t<span id="tmpCreate">node temp;</span>\n'
					+ '\t<span id="allocateMem"></span>\n'
					+ '\t<span id="asgnNlToTmpPrev">temp -> prev = NULL;</span>\n'
					+ '\t<span id="asgnToNlToTmp">temp -> next = NULL;</span>\n'
					+ '\t<span id="returnTmp">return temp;</span>\n'
					+ '}\n');
	if (lang == 'c') {
		$('#createNodeMthd').html('node createNode()');
		$('#allocateMem').html('temp = (node) <span id="mallocMemoryAllocation">malloc(sizeof(struct list))</span>;');
	} else if (lang == 'cpp') {
		$('#createNodeMthd').html('node Dcll::createNode()');
		$('#allocateMem').html('temp = <span id="mallocMemoryAllocation">new list;</span>');
	}
}

function preDcclD() {
	$('#inMain').removeClass('opacity00');
	$('#inMain').append('<div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
					+ '<span id="objCallDcll" class="opacity00">Dcll d;</span>');
}

function preAddNodeMthdInMain() {	//addNodes() in main()
	if (lang == 'c') {
		$('#inMain').append('<div id="addNodesMainDiv"><div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
						+ '<span id="initFrstNlNX"><span id="frstInit">first = NULL;</span>\n<span id="xInit">int x;</span></span>\n'
						+ '<span id="printf1">printf("Enter an element : ");</span>\n'
						+ '<span id="scanf1">scanf("%d", &x);</span>\n'
						+ '<span id="wleXEqlToOne">while (<span id="whileCond">x != -1</span>) {</span>\n'
						+ '\t<span id="addNodesMethod">first = addNodes(first, x);</span>\n'
						+ '\t<span id="printf2">printf("Enter an element : ");</span>\n'
						+ '\t<span id="scanf2">scanf("%d", &x);</span>\n'
						+ '}</div>');
	} else if (lang == 'cpp') {
		$('#inMain').append('<div id="addNodesMainDiv"><div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
						+ 'Dcll d;\n'
						+ '<span id="initFrstNlNX"><span id="xInit">int x;</span></span>\n'
						+ '<span id="emptyMethodCall">d.empty();</span>\n'
						+ '<span id="printf1">cout << "Enter an element : ";</span>\n'
						+ '<span id="scanf1">cin >> x;</span>\n'
						+ '<span id="wleXEqlToOne">while (<span id="whileCond">x != -1</span>) {</span>\n'
						+ '\t<span id="addNodesMethod">d.addNodes(x);</span>\n'
						+ '\t<span id="printf2">cout << "Enter an element : ";</span>\n'
						+ '\t<span id="scanf2">cin >> x;</span>\n'
						+ '}</div>');
	}
}

function preInsertAtEndMthdInMain() {	//insertAtEnd() in main
	if (lang == 'c') {
		$('#inMain').append('<div id="insertEndMainDiv"><div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
						+ '<span id="initX">int x;</span>\n'
						+ '<span id="printf1">printf("Enter an element : ");</span>\n'
						+ '<span id="scanf1">scanf("%d", &x);</span>\n'
						+ '<span id="insertAtEndMethod">first = insertAtEnd(first, x);</span></div>');
	} else if (lang == 'cpp') {
		$('#inMain').append('<div id="insertEndMainDiv"><div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
						+ 'Dcll d;\n'
						+ '<span id="initX">int x;</span>\n'
						+ '<span id="printf1">cout << "Enter an element : ";</span>\n'
						+ '<span id="scanf1">cin >> x;</span>\n'
						+ '<span id="insertAtEndMethod">d.insertAtEnd(x);</span></div>');
	}
}

function preTraverseListMthdInMain() {	//traverseList() in main
	if (lang == 'c') {
		$('#inMain').append('<div id="traverseMainDiv"><div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
						+ '<span id="ifFstEqlToNl">if (<span id="fstToNul">first == NULL</span>) {</span>\n'
						+ '\t<span id="printf1">printf("Linked List is empty\\n");</span>\n'
						+ '} else {\n'
						+ '\t<div id="printf2" class="position">printf("The elements in Doubly Circular Linked"\n\t\t\t\t\t" List are : ");</div>\n'
						+ '\t<span id="traverseListMethod">traverseList(first);</span>\n'
						+ '}</div>');
	} else if (lang == 'cpp') {
		$('#inMain').append('<div id="traverseMainDiv"><div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
						+ 'Dcll d;\n'
						+ '<div id="printf2" class="position">cout << "The elements in Doubly Circular Linked"\n\t\t\t\t\t " List are : ";</div>\n'
						+ '<span id="traverseListMethod">d.traverseList();</span></div>');
	}
}

function preInsertAtPositionMthdInMain() {	//insertAtPosition() in main
	if (lang == 'c') {
		$('#inMain').append('<div id="insertPosMainDiv"><div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
						+ '<span id="initPosNX">int pos, x;</span>\n'
						+ '<span id="printf2">printf("Enter a position : ");</span>\n'
						+ '<span id="scanf2">scanf("%d", &pos);</span>\n'
						+ '<span id="printf1">printf("Enter an element : ");</span>\n'
						+ '<span id="scanf1">scanf("%d", &x);</span>\n'
						+ '<span id="posIfCond">if (<span id="ifCond">pos <= 0 || (pos > 1 && first == NULL)</span>) {</span>\n'
						+ '\t<div id="printf3" class="position">printf("No such position in Doubly Circular Linked"\n'
						+ '\t\t\t\t\t" List so insertion is not possible\\n");</div>\n'
						+ '} else {\n'
						+ '\t<span id="insertAtPositionMethod">first = insertAtPosition(first, pos, x);</span>\n'
						+ '}</div>');
	} else if (lang == 'cpp') {
		$('#inMain').append('<div id="insertPosMainDiv"><div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
						+ 'Dcll d;\n'
						+ '<span id="initPosNX">int pos, x;</span>\n'
						+ '<span id="printf2">cout << "Enter a position : ";</span>\n'
						+ '<span id="scanf2">cin >> pos;</span>\n'
						+ '<span id="printf1">cout << "Enter an element : ";</span>\n'
						+ '<span id="scanf1">cin >> x;</span>\n'
						+ '<span id="insertAtPositionMethod">d.insertAtPosition(pos, x);</span></div>');
	}
}

function preDeleteAtEndMthdInMain() {	//deleteAtEnd() in main()
	if (lang == 'c') {
		$('#inMain').append('<div id="deleteAtEndNodeMainDiv"><div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
						+ '<span id="ifFstEqlToNl">if (<span id="fstToNul">first == NULL</span>) {</span>\n'
						+ '\t<span id="printf1">printf("Doubly Circular Linked List is empty "\n'
						+ '\t\t\t\t"so deletion is not possible\\n");</span>\n'
						+ '} else {\n'
						+ '\t<span id="deleteAtEndNodeMethod">first = deleteAtEnd(first);</span>\n'
						+ '}\n</div>');
	} else if (lang == 'cpp') {
		$('#inMain').append('<div id="deleteAtEndNodeMainDiv"><div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
							+ 'Dcll d;\n'
							+ '<span id="deleteAtEndNodeMethod">d.deleteAtEnd();</span></div>');
	}
}

function preDeleteAtPositionMthdInMain() {	//deleteAtPosition() in main()
	if (lang == 'c') {
		$('#inMain').append('<div id="deleteAtPositionNodeMainDiv"><div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
						+ '<span id="intlPos">int pos;</span>\n'
						+ '<span id="ifFstEqlToNl">if (<span id="fstToNul">first == NULL</span>) {</span>\n'
						+ '\t<span id="printf1">printf("Doubly Circular Linked List is empty "\n'
						+ '\t\t\t\t"so Deletion is not possible");</span>\n'
						+ '} else {\n'
						+ '\t<span id="printf2">printf("Enter a position : ");</span>\n'
						+ '\t<span id="scanf2">scanf("%d", &pos);</span>\n'
						+ '\t<span id="posLesThnEqZero">if (<span id="posLessThanZero">pos <= 0</span>) {</span>\n'
						+ '\t\t<span id="printf3">printf("No such position in Doubly Circular Linked"\n'
						+ '\t\t\t" List so deletion is not possible\\n");</span>\n'
						+ '\t} else {\n'
						+ '\t\t<span id="deleteAtPositionNodeMethod">first = deleteAtPosition(first, pos);</span>\n'
						+ '\t}\n'
						+ '}\n</div>');
	} else if (lang == 'cpp') {
		$('#inMain').append('<div id="deleteAtPositionNodeMainDiv"><div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
						+ 'Dcll d;\n'		
						+ '<span id="intlPos">int pos;</span>\n'
						+ '<span id="printf2">cout << "Enter a position : ";</span>\n'
						+ '<span id="scanf2">cin >> pos;</span>\n'
						+ '<span id="posLesThnEqZero">if (<span id="posLessThanZero">pos <= 0</span>) {</span>\n'
						+ '\t<span id="printf3">cout << "No such position in Doubly Circular"\n'
						+ ' \t\t\t"Linked List so deletion is not possible\\n";</span>\n'
						+ '} else {\n'
						+ '\t<span id="deleteAtPositionNodeMethod">d.deleteAtPosition(pos);</span>\n'
						+ '}</div>');
	}
}

function preAddNodesMethod() {	//addNodes() & insertAtEnd()
	$('#csllMethodOperations').append('<div id="addNodesDiv"><span id="' + buttonName + 'MthdDec"></span>\n'
					+ '\t<span id="decTempNLstNde">node temp, lastNode = first;</span>\n'
					+ '\t<span id="createNodeMethod">temp = createNode();</span>\n'
					+ '\t<span id="streXValInTmpDt">temp -> data = x;</span>\n'
					+ '\t<span id="ifFrstEqlToNl">if (<span id="fstToNul">first == NULL</span>) {</span>\n'
					+ '\t\t<span id="streTmpToFrst">first = temp;</span>\n'
					+ '\t} else {\n<span id="combinedDiv"></span>'
					+ '}</div>');
	if (lang == 'c') {
		$('#' + buttonName + 'MthdDec').html('node ' + buttonName + '(<span id="decFstVar">node first</span>, <span id="decXVar">int x</span>) {');
		$('#combinedDiv').after('\t<span id="retnFrst">return first;</span>\n');
	} else if (lang == 'cpp') {
		$('#' + buttonName + 'MthdDec').html('void Dcll::' + buttonName + '(<span id="decXVar">int x</span>) {')
	}
	combinedCode();
}

function preTraverseListMethod() {	//traverseList()
	if (lang == 'c') {
		$('#csllMethodOperations').append('<div id="traverseDiv"><span id="traverseListMthdDec">void traverseList('
										+ '<span id="decFstVar">node first</span>) {</span>\n'
										+ '\t<span id="decTempNLstNde">node lastNode = first;</span>\n'
										+ '\tdo {\n'
										+ '\t\t<span id="printf3">printf("%d --> ", lastNode -> data);</span>\n'
										+ '\t\t<span id="lstNxtToLst">lastNode = lastNode -> next;</span>\n'
										+ '\t<span id="wleLstEqlToFst">} while (<span id="lstEqlToFst">lastNode != first</span>);</span>\n'	
										+ '}</div>');
	} else if (lang == 'cpp') {
		$('#csllMethodOperations').append('<div id="traverseDiv"><span id="traverseListMthdDec">void Dcll::traverseList() {</span>\n'
										+ '\t<span id="decTempNLstNde">node lastNode = first;</span>\n'
										+ '\t<span id="ifFstEqlToNl">if (<span id="fstToNul">lastNode == NULL</span>) {</span>\n'
										+ '\t\t<span id="printf1">cout << "empty\\n";</span>\n'
										+ '\t} else {\n'				
										+ '\t\tdo {\n'
										+ '\t\t\t<span id="printf3">cout << lastNode -> data << " --> ";</span>\n'
										+ '\t\t\t<span id="lstNxtToLst">lastNode = lastNode -> next;\n</span>'
										+ '\t\t<span id="wleLstEqlToFst">} while (<span id="lstEqlToFst">lastNode != first</span>);</span>\n'
										/*+ '\t\t<span id="printf4">cout << "NULL\\n";</span>\n'*/
										+ '\t}\n'
										+ '}</div>');
	}
}

function combinedCode() {
	$('#combinedDiv').append('\t\t<span id="whileLstNxtEqlToNl">while(<span id="lstNxtEqlToNl">lastNode -> next != first</span>) {</span>\n'
								+ '\t\t\t<span id="strLstNxtToLst">lastNode = lastNode -> next;</span>\n'
								+ '\t\t}\n' 
								+ '\t\t<span id="streTmpToLstNxt">lastNode -> next = temp;</span>\n'
								+ '\t\t<span id="streLstToTmpPrev">temp -> prev = lastNode;</span></span>\n');
	if (buttonName == 'insertAtPosition') {
		$('#combinedDiv').append('\t<div id="combinedDiv1" class="position"></div>\n');
	} else {
		$('#combinedDiv').append('\t}\n<span id="combinedDiv1"></span>\n');
	}
	$('#combinedDiv1').append('\t<span id="streFstToTmpNext">temp -> next = first;</span>\n'
								+ '\t<span id="streTmpToFstPrev">first -> prev = temp;</span>');		
}

function preInsrtPosMthd() {
	$('#preInsrtCode').append('\t<span id="frLoop">for (<span id="iInit">i = 1;</span> <span id="frCond">i < (pos - 1)</span>;'
								+ ' <span id="iInc">i++</span>) {</span>\n'
								+ '\t\t<span id="ifLstNxtEqlToFst">if (lastNode -> next == first) {</span>\n'
								+ '\t\t\t<span id="printf4"></span>\n'
								+ '\t\t\t<span id="retnFst1"></span>\n'
								+ '\t\t}\n\t\t<span id="strLstNxtToLst1">lastNode = lastNode -> next;</span>\n\t}\n'
								+ '\t<span id="createNodeMethod">temp = createNode();</span>\n'       
								+ '\t<span id="streXValInTmpDt">temp -> data = x;</span>\n'	
								+ '\t<span id="posEqlToOne">if (pos == 1) {</span>\n'
								+ '\t\t<span id="fstToNul">if (first == NULL) {</span>\n'
								+ '\t\t\t<span id="tmpToTmpNxt">temp -> next = temp;</span>\n'
								+ '\t\t\t<span id="tmpToTmpPrev">temp -> prev = temp;</span>\n'
								+ '\t\t} else {\n\t<div id="combinedDiv" class="position"></div>\n\t\t}\n'
								+ '\t\t<span id="streTmpToFrst">first = temp;</span>\n'
								+ '\t} else {\n'
								+ '\t\t<span id="lstNdeToTmpPrev">temp -> prev = lastNode;</span>\n'
								+ '\t\t<span id="lstNxtToTmpNxt">temp -> next = lastNode -> next;</span>\n'
								+ '\t\t<span id="tmpToLstNxt">lastNode -> next = temp;</span>\n'
								+ '\t\t<span id="tmpTotmpNxtPrev">temp -> next -> prev = temp;</span>\n'
								+ '\t}\n');
}
function preInsertAtPositionMethod() {	//insertAtPosition()
	$('#csllMethodOperations').append('<div id="insertPosDiv"><span id="insertAtPositionMthdDec"></span>\n'
								+ '\t<span id="decTempNLstNde">node temp, lastNode = first;</span>\n'
								+ '\t<span id="decIntI">int i;</span>\n</div>');
	if (lang == 'c') {
		$('#insertAtPositionMthdDec').html('node insertAtPosition(<span id="decFstVar">node first</span>, <span id="decPosVar">int pos</span>,'
								+ ' <span id="decXVar">int x</span>) {');
		$('#decIntI').after('\n<div id="preInsrtCode" class="position"></div>');
		preInsrtPosMthd();
		$('#preInsrtCode').after('\n\t<span id="retnFrst">return first;</span>\n}');
		$('#printf4').text('printf("No such position in Doubly Circular Linked List so insertion is not possible\\n");');
		$('#retnFst1').text('return first;');
	} else if (lang == 'cpp') {
		$('#insertAtPositionMthdDec').html('void Dcll::insertAtPosition(<span id="decPosVar">int pos</span>, <span id="decXVar">int x</span>) {')
		$('#decIntI').after('\n\t<span id="posIfCond">if (<span id="ifCond">pos <= 0 || (pos > 1 && first == NULL)</span>) {</span>\n'
						+ '\t\t<span id="printf3">cout << "No such position in Doubly Circular Linked List so insertion is not possible\\n";</span>\n'
						+ '\t} else {\n\t<div id="preInsrtCode" class="position"></div>');
		preInsrtPosMthd();
		$('#preInsrtCode').after('\n\t}\n}');
		$('#printf4').text('cout << "No such position in Doubly Circular Linked List so insertion is not possible\\n";');
		$('#retnFst1').text('return;');
	}
	combinedCode();
}

function preDelAtEndMthd() {
	$('#preDelCode').append('\t<span id="lstNxtEqNl">if (<span id="chkLstNxtEqst">lastNode -> next == first</span>) {</span>\n'
						+ '\t\t<span id="streNlInFrst">first = NULL;</span>\n'
						+ '\t} else {\n'
						+ '\t\t<span id="whileLstNxtEqlToNl">while (<span id="lstNxtEqlToNl">lastNode -> next != first</span>) {</span>\n'
						+ '\t\t\t<span id="streLstToTmp">temp = lastNode;</span>\n'			
						+ '\t\t\t<span id="strLstNxtToLst">lastNode = lastNode -> next;</span>\n'
						+ '\t\t}\n\t\t<span id="streFstToTmpNext">temp -> next = first;</span>\n'
						+ '\t\t<span id="streTmpToFstPrev">first -> prev = temp;</span>\n\t}\n');
}

function preDeleteAtEndMethod() {	//deleteAtEnd() 
	$('#csllMethodOperations').append('<div id="addNodesDiv"><span id="'+ buttonName + 'MthdDec"></span>\n'
					+ '\t<span id="decTempNLstNde">node temp, lastNode = first;</span></div>');
	if (lang == 'c') {
		$('#' + buttonName + 'MthdDec').html('node '+ buttonName +'(<span id="decFstVar">node first</span>) {');
		$('#decTempNLstNde').after('\n<div id="preDelCode" class="position"></div>');
		preDelAtEndMthd();
		$('#preDelCode').after('\n\t<span id="printf2">printf("The deleted element from Doubly Circular Linked List : %d\\n",'
							+ ' lastNode -> data);</span>\n'
							+ '\t<span id="freeLstNde">free(lastNode);</span>\n'
							+ '\t<span id="retnFrst">return first;</span>\n'
							+ '}');
	} else if (lang == 'cpp') {
		$('#' + buttonName + 'MthdDec').html('void Dcll::' + buttonName + '() {');
		$('#decTempNLstNde').after('\n\t<span id="ifFstEqlToNl">if (<span id="fstToNul">first == NULL</span>) {</span>\n'
								+ ' \t\t<span id="printf1">cout << "Doubly Circular Linked List is empty so deletion is not possible\\n";</span>\n'
								+ '\t} else {\n\t<div id="preDelCode" class="position"></div>');
		preDelAtEndMthd();
		$('#preDelCode').after('\n\t\t<span id="printf2">cout << "The deleted element from Doubly Circular Linked List : "'
							+ '<< lastNode -> data << "\\n";</span>\n'
							+ '\t\t<span id="freeLstNde">delete lastNode;</span>\n\t}\n}');
	}
}

function preDelAtPosMthdCNCPP() {
	$('#preDelPosCode').append('\t<span id="ifPosEqOne">if (<span id="posWqOne">pos == 1</span>) {</span> \n'
							+ '\t\t<span id="lstNxtEqNl">if (<span id="chkLstNxtEqst">lastNode -> next == first</span>) {</span>\n'
							+ '\t\t\t<span id="streNlInFrst">first = NULL;</span>\n'
							+ '\t\t} else {\n'
							+ '\t\t\t<span id="whileLstNxtEqlToNl">while (<span id="lstNxtEqlToNl">lastNode -> next != first</span>) {</span>\n'
							+ '\t\t\t\t<span id="strLstNxtToLst">lastNode = lastNode -> next;</span>\n'
							+ '\t\t\t}\n'
							+ '\t\t\t<span id="strefstNxtToLstNxt">lastNode -> next = first -> next;</span>\n'
							+ '\t\t\t<span id="streLstToFstNxtPrev">first -> next -> prev = lastNode;</span>\n'
							+ '\t\t\t<span id="streFrstNxtToFrst">first = first -> next;</span>\n'
							+ '\t\t}\n'
							+ '\t} else {\n'
							+ '\t\t<span id="forLoop">for (<span id="iInit">i = 1;</span> <span id="iCon">i < pos;</span>'
							+ ' <span id="iInc">i++</span>) {</span>\n'
							+ '\t\t\t<span id="ifTmpNxtNl">if (temp -> next == first) {</span>\n'
							+ '\t\t\t\t<span id="printf5"></span>\n'
							+ '\t\t\t\t<span id="rtnFst"></span>\n'
							+ '\t\t\t}\n'
							+ '\t\t\t<span id="lstToTemp">lastNode = temp;</span>\n'
							+ '\t\t\t<span id="tempToTmpNxt">temp = temp -> next</span>\n'
							+ '\t\t}\n'
							+ '\t\t<span id="ifTmpNxtFst">if (temp -> next == first) {</span>\n'
							+ '\t\t\t\t<span id="lstNxtFst">lastNode -> next = first;</span>\n'
							+ '\t\t\t\t<span id="fstPrevToLstNde">first -> prev = lastNode;</span>\n'
							+ '\t\t} else {\n'
							+ '\t\t\t<span id="lstNxtToTmpNxt">lastNode -> next = temp -> next</span>\n'
							+ '\t\t\t<span id="tmpNxtPrvTolstnde">temp -> next -> prev = lastNode;</span>\n'
							+ '\t\t}\n'
							+ '\t}\n');
}
function preDeleteAtPositionMethod() {
	$('#csllMethodOperations').append('<div id="addNodesDiv"><span id="'+ buttonName + 'MthdDec"></span>\n'
				+ '\t<span id="decTempNLstNde">node temp = first, lastNode = first;</span>\n'
				+ '\t<span id="declareiVar">int i;</span></div>');
	if (lang == 'c') {
		$('#' + buttonName + 'MthdDec').html('node '+ buttonName +'(<span id="decFstVar">node first</span>, <span id="decPosVar">int pos</span>) {');
		$('#declareiVar').after('\n<div id="preDelPosCode" class="position"><div>');
		preDelAtPosMthdCNCPP();
		$('#preDelPosCode').after('\n\t<span id="printf4">printf("The deleted element from Doubly Circular Linked List : %d\\n",'
							+ ' temp -> data);</span>\n'
							+ '\t\t<span id="freeTmp">free(temp);</span>\n'
							+ '\t\t<span id="returnFirst">return first;</span>\n\t}\n}');
		$('#printf5').html('printf("No such position in Doubly Circular Linked List so deletion is not possible\\n");');
		$('#rtnFst').html('return first;');
	} else if (lang == 'cpp') {
		$('#' + buttonName + 'MthdDec').html('void Dcll::deleteAtPosition(<span id="decPosVar">int pos</span>) {');
		$('#declareiVar').after('\n\t<span id="ifFstEqlToNl">if (<span id="fstToNul">first == NULL</span>) {</span>\n'
							+ '\t\t<span id="printf1">cout << "Doubly Circular Linked List is empty so deletion is not possible\\n";</span>\n'
							+ '\t} else {\n'
							+ '\t<div id="preDelPosCode" class="position"><div>');
		preDelAtPosMthdCNCPP();
		$('#preDelPosCode').after('\n\t\t<span id="printf4">cout << "The deleted element from Doubly Circular Linked List : "'
								+ ' << temp -> data << "\\n";</span>\n'
								+ '\t\t<span id="freeTmp">delete temp;</span>\n\t}\n}');
		$('#printf5').html('cout << "No such position in Doubly Circular Linked List so deletion is not possible\\n";');
		$('#rtnFst').html('return;');
	}
}

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		steps : [ {
					element: '#headingSection',
					intro: ''
				}, {
					element: '#structTypelist',
					intro: '',
					tooltipClass: 'hide'
		}]
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		$('.introjs-helperLayer').one('transitionend', function() {
			switch (elementId) {
				case 'structTypelist':
					$('#structTypelist').removeClass('opacity00');
					customIntroNxtStep('#strcutSpan');
				break;
				case 'strcutSpan':
					$('.introjs-tooltip').removeClass('hide');
					text = 'This is the declaration of a new <b class="ct-code-b-yellow">struct</b> type named as '
							+ '<b class="ct-code-b-yellow">list</b>.<br/><br/> It contains three members : '
							+ '<ul><li><b class="ct-code-b-yellow">data</b> which is of type int.</li>'
							+ '<li><b class="ct-code-b-yellow">*prev</b> which is a pointer to the <b class="ct-code-b-yellow">previous</b>'
							+ ' node.</li><li><b class="ct-code-b-yellow">*next</b> which is a pointer to the <b class="ct-code-b-yellow">next</b>'
							+ ' node.</li></ul>';
					typing(".introjs-tooltiptext", text, function() {
						introNextSteps('#typeDefDec');
						$(".introjs-nextbutton").show();
					});
				break;
				case 'typeDefDec':
					$(".introjs-tooltip").removeClass('hide');
					text = 'The <span class="ct-code-b-yellow">typedef</span> creates a <span class="ct-code-b-yellow">node</span> as a '
						+ ' new type <span class="ct-code-b-yellow">pointer</span> to <span class="ct-code-b-yellow">struct list</span>. '
					typing(".introjs-tooltiptext", text, function() {
						introNextSteps('#declareFirstNode', 'declareFirstNode', 'right');
						$('.introjs-nextbutton').show();
					});
				break;
				case 'declareFirstNode':
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'declareFirstNode':
							$('#declareFirstNode').removeClass('opacity00');
							$('.introjs-tooltip').removeClass('hide');
							if (lang == 'c') {
								text = 'A variable <b class="ct-code-b-yellow">first</b> is of type <b class="ct-code-b-yellow">node</b> is'
										+ ' declared and initialized with <b class="ct-code-b-yellow">NULL</b>.';
								$('#animationParent').removeClass('opacity00');
								introNextSteps('#animationDiv', 'initFstToNul');
							} else if (lang == 'cpp') {
								text = 'This is the declaration of a class in <span class="ct-code-b-yellow">Dcll</span>.';
								introNextSteps('#constructCreat');
							}
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-nextbutton').show();
							});
						break;
						case 'callingContructor':
							$('#animationParent').removeClass('opacity00');
							customIntroNxtStep('#animationDiv', 'cppFstInitNDec');
						break;
					}
				break;
				case 'buttonDiv':
					$('.introjs-tooltip').css({'min-width' : '200px'}).removeClass('hide');
					$('.introjs-tooltiptext').append('Choose any button.');
					
					lineFlag = false;
					$('#animationDiv').removeClass('z-index1000000');
					$('#buttonDiv, .btn, #insertAtPosition').removeClass('opacity00 disabled insert-position insert-endpos insert-middle');
					$('#line11, #line12, #line13, .extraNode, .fa').remove();
					$('.intVariables, .intValues').addClass('opacity00');
					if ($('.nodes').length == 8) {
						$('#insertAtEnd, #insertAtPosition').addClass('disabled');
					}
					outPutCount = printfCount = lastNodeCount = iVal = 1;
					nodeCount = $('.nodes').length + 1;
					$('#addNodes').off().click(function() {
						$('polyline').remove();
						$("#dynamicNodes").empty();
						$('line').remove();
						nodeCount = lineCount = 1;
						buttonCorrespondingText('addNodes');
					});
					$('#insertAtEnd').off().click(function() {
						buttonCorrespondingText('insertAtEnd');
					});
					$('#traverseList').off().click(function() {
						buttonCorrespondingText('traverseList');
					});
					$('#insertAtPosition').off().click(function() {
						buttonCorrespondingText('insertAtPosition');
					});
					$('#deleteAtEnd').off().click(function() {	//deleteAtEnd()
						buttonCorrespondingText('deleteAtEnd');
					});
					$('#deleteAtPosition').off().click(function() {	//deleteAtPosition() 
						buttonCorrespondingText('deleteAtPosition');
					});
				break;
				case 'inMain':
					$('#inMain').removeClass('opacity00');
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'addNodes':
							preAddNodeMthdInMain();
							introjs.refresh();
							customIntroNxtStep('#initFrstNlNX');
						break;
						case 'insertAtEnd':
							preInsertAtEndMthdInMain();
							introjs.refresh();
							customIntroNxtStep('#initX');
						break;
						case 'traverseList':
							preTraverseListMthdInMain();
							introjs.refresh();
							if (lang == 'c') {
								customIntroNxtStep('#ifFstEqlToNl');
							} else if (lang == 'cpp') {
								printfCount = 2;
								customIntroNxtStep('#printf2', 'displayElemnts');
							}
						break;
						case 'insertAtPosition':
							preInsertAtPositionMthdInMain();
							introjs.refresh();
							customIntroNxtStep('#initPosNX');
						break;
						case 'deleteAtEnd' :	//deleteAtEnd()
							preDeleteAtEndMthdInMain();
							introjs.refresh();
							if (lang == 'c') {
								customIntroNxtStep('#ifFstEqlToNl');
							} else if (lang == 'cpp') {
								customIntroNxtStep("#deleteAtEndNodeMethod", 'callToMethod', 'bottom');
							}
						break;
						case 'deleteAtPosition' :	//deleteAtPosition()
							preDeleteAtPositionMthdInMain();
							introjs.refresh();
							customIntroNxtStep('#intlPos');
						break;
					}
				break;
				case 'animationDiv':
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'initFstToNul':
							transferEffect('#declareFirstNode', '#firstNodeInMain', function() {
								customIntroNxtStep('#buttonDiv');
							});
						break;
						case 'assignFrstToNL':
							if (lang == 'c') {
								$('#firstVal').text('NULL');
								transferEffect('#frstInit', '#firstNodeInMain', function() {
									transferEffect('#xInit', '#xValeDecInMain', function() {
										printfCount = 1;
										customIntroNxtStep('#printf1', 'printText');
									});
								});
							} else if (lang == 'cpp') {
								transferEffect('#xInit', '#xValeDecInMain', function() {
									customIntroNxtStep('#emptyMethodCall');
								});
							}
						break;
						case 'storeXVal':
							$('#xValInMain').text($('#nodeVal' + outPutCount).val());
							$('#nodeVal' + outPutCount).attr('disabled', 'disabled');
							fromEffectWithTweenMax('#nodeVal' + outPutCount, '#xValInMain', false, function() {
								if (buttonName == 'addNodes') {	//addNodes
									customIntroNxtStep('#wleXEqlToOne');
								} else if (buttonName == 'insertAtEnd') {	//insertAtEnd
									customIntroNxtStep('#insertAtEndMethod', 'callToMethod');
								} else {	//insertAtPosition
									if (lang == 'c') {
										customIntroNxtStep('#posIfCond');
									} else if (lang == 'cpp') {
										customIntroNxtStep('#insertAtPositionMethod', 'callToMethod', 'top');//lang
									}
								}
							});
						break;
						case "tempsDeclar" :
							transferEffect("#tmpCreate", "#tmpNde", function() {
								customIntroNxtStep("#allocateMem");
							});
						break;
						case "nodeMemAllo" :
							$('.introjs-tooltip').removeClass("hide");
							var addressId;
							if (lang == 'c') {
								addressId = 'malloc()';
							} else if (lang == 'cpp') {
								addressId = 'new list';
							}
							text = 'Let us assume <span class="ct-code-b-yellow">' + addressId + '</span> allocates a memory '
									+ 'to its members  <span class="ct-code-b-yellow">prev</span>, <span class="ct-code-b-yellow">data</span> and'
									+ ' <span class="ct-code-b-yellow">next</span> at address'
									+ ' <span class="ct-code-b-yellow">' + $("#dataAddress" + (nodeCount - 1)).text() +'</span>.';
							typing('.introjs-tooltiptext' , text, function() {
								appendNextBtn('displayNodeDataAndNext');
							});
						break;
						case 'tempPrevToNul':
						case 'tempNextToNul':
							var node;
							if (animateStep == 'tempNextToNul') {
								node = 'next';
								introNextSteps('#returnTmp');
							} else {
								node = 'prev';
								introNextSteps('#asgnToNlToTmp');
							}
							$('#' + node + (nodeCount - 1)).text('NULL').addClass('opacity00');
							zoomInEffect('#' + node + (nodeCount - 1), function() {
								setTimeToIntroGoNextStep();
							});
						break;
						case 'streRetnFstVal':
							if (lang == 'c') {
								fadeInBounceEffectWithTimelineMax('#firstNodeVal', '#firstVal', false, function() {
									$('.fa, #line15, #line13, #line10').remove();
									lineFlag = false;
									//if ($('#firstVal').text() != 'NULL' && $('#posVal').text() == 1) {
									if ($('#firstVal').text() != 'NULL' && ($('#posVal').text() == 1 && buttonName != 'deleteAtPosition')) {
										svgAnimatingLineRightToLeft('#animationDiv', '#firstDiv', '#prevDiv' + (nodeCount - 1), '#svgId',
												'line10', 'arrow');
									} else if ($('#firstVal').text() != 'NULL') {
										svgAnimatingLineRightToLeft('#animationDiv', '#firstDiv', '#prevDiv1', '#svgId', 'line10', 'arrow');
									}
									$("#csllMethodOperations, #xValDecInAdd, #xValInAdd").addClass('opacity00');
									$("#csllMethodOperations").empty();
									if ($('#insertAtPosition').hasClass('insert-position') && $('#posVal').text() <= ($('.nodes').length + 1)) {
										$('.introjs-tooltip').removeClass('hide');
										text = 'Now rearrange the nodes';
										typing('.introjs-tooltiptext', text, function() {
											nextBtnWithoutCalling(function() {
												orderingNodes(nodeCount - 1);
											});
										});
									} else {
										$('.extraNode, #line11, #line12, #line13').remove();
										introjs.refresh();
										if (buttonName == 'addNodes') {
											$('.extraNode, #line11, #line12').remove();
											outPutCount++;
											printfCount = 2
											customIntroNxtStep('#printf2', 'printText');
										} else {
											customIntroNxtStep('#buttonDiv');
										}
									}
								});
							} else if (lang == 'cpp') {
								$('.introjs-tooltip').removeClass('hide');
								text = 'Now rearrange the nodes';
								typing('.introjs-tooltiptext', text, function() {
									nextBtnWithoutCalling(function() {
										orderingNodes(nodeCount - 1);
									});
								});
							}
						break;
						case 'xInit':	//insertAtEnd
							transferEffect('#initX', '#xValeDecInMain', function() {
								printfCount = 1;
								customIntroNxtStep('#printf1', 'printText');
							});
						break;
						case 'initXPos':	//insertAtPosition
							transferEffect('#initPosNX' , '#posValDec', function() {
								transferEffect('#initPosNX', '#xValeDecInMain', function() {
									printfCount = 2;
									customIntroNxtStep('#printf2', 'printText');
								});
							});
						break;
						case 'storePosVal':	//insertAtPosition
							$('#posVal').text($('#nodeVal' + outPutCount).val());
							$('#nodeVal' + outPutCount).attr('disabled', 'disabled');
							fromEffectWithTweenMax('#nodeVal' + outPutCount, '#posVal', false, function() {
								printfCount = 1;
								outPutCount++;
								customIntroNxtStep('#printf1', 'printText');
							});
						break;
						case 'readPosVal' :	//deleteAtPosition()
							$('#posVal').text($('#nodeVal' + (outPutCount - 1)).val());
							$('#nodeVal' + (outPutCount - 1)).attr("disabled", "disabled");
							fromEffectWithTweenMax("#nodeVal" + (outPutCount - 1), "#posVal", false, function() {
								customIntroNxtStep("#posLesThnEqZero", "posLesThnEqZero", 'bottom');
							});
						break;
						case 'cppFstInitNDec':
							transferEffect('#cppFstDec', '#firstNodeInMain', function() {
								transferEffect('#cppFstInit', '#firstVal', function() {
									customIntroNxtStep('#buttonDiv');
								});
							});
						break;
					}
				break;
				case 'initFrstNlNX':
					$('.introjs-tooltip').removeClass('hide');
					if (lang == 'c') {
						text = 'Here, <ul>'
								+ '<li><span class="ct-code-b-yellow">first</span> is initialized with <span class="ct-code-b-yellow">NULL'
								+ '</span>.</li><li>A variable <span class="ct-code-b-yellow">x</span> is of type int is declared.</li>';
					} else if (lang == 'cpp') {
						text = 'A variable <span class="ct-code-b-yellow">x</span> is of type int is declared.';
					}
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps('#animationDiv', 'assignFrstToNL');
						$('.introjs-nextbutton').show();
					}); 
				break;
				case 'printf' + printfCount:
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'printText':
							customIntroNxtStep('#consoleId', 'printNodeValText');
						break;
						case 'listEmpty':	//traverse list empty
							customIntroNxtStep('#consoleId', 'listEmpty');
						break;
						case 'displayElemnts':	//traverse display elements
							customIntroNxtStep('#consoleId', 'displayList');
						break;
						case 'noSuchPosition':	//insertPosition no element found
							customIntroNxtStep('#consoleId', 'noSuchPosition');
						break;
						case "deletetionNotPossible" : //deleteAtEnd
							customIntroNxtStep("#consoleId", "printDeletionNotPossible");
						break;
						case 'deletedNoElement' :
							customIntroNxtStep("#consoleId", "deletedNoElement");
						break;
						case 'printEnterPosText' :
							customIntroNxtStep("#consoleId", "printEnterPosText");
						break;
					}
				break;
				case 'scanf' + printfCount:
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'scanfReadval':
							customIntroNxtStep('#consoleId', 'enterNodeVal', 'left');
						break;
						case 'readPosVal' :
							customIntroNxtStep("#consoleId", "enterPosVal", "left");
						break;
					}
				break;
				case 'consoleId' :
					$("#consoleId, #consoleEnter").removeClass("opacity00");
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "printNodeValText":	//addNodesMethod & insertAtEnd & insertAtPosition
							if (buttonName == 'insertAtPosition' && printfCount == 2) {
								text1 = 'a position';
							} else {
								text1 = 'an element';
							}
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">Enter ' + text1 + ' : <input id="nodeVal'+ outPutCount +'"' 
									+ 'class="user-text visibility-hidden" placeholder="number" maxlength="3" size="4"></span><br/>');
							customIntroNxtStep('#scanf' + printfCount, 'scanfReadval');
						break;
						case "enterNodeVal" :	//addNodesMethod & insertAtEnd & insertAtPosition
							$('.introjs-tooltip').removeClass('hide');
							if (buttonName == 'insertAtPosition' && printfCount == 2) {
								events("#nodeVal" + outPutCount);
								introNextSteps('#animationDiv', 'storePosVal');
								text = 'Enter <span class="ct-code-b-yellow">position</span> of the node where you want to'
										+ ' <span class="ct-code-b-yellow">insert</span>.';
							} else {
								var t = $(".nodes").length == 4;
								if (t && buttonName == 'addNodes') {
									addNegativeValuEvent("#nodeVal" + outPutCount)
									var text = "Here, we are restricted to allow only <span class='ct-code-b-yellow'>5</span> nodes. So, please"
											+ " enter the <span class='ct-code-b-yellow'>node data</span> as <span class='ct-code-b-yellow'>-1"
											+ "</span> only.";
								} else {
									events("#nodeVal" + outPutCount);
									var text = "Enter the <span class='ct-code-b-yellow'>node data</span> value.";
								}
								$('#animationDiv').removeClass('z-index1000000');
								introNextSteps("#animationDiv", "storeXVal", "bottom");
							}
							typing('.introjs-tooltiptext', text, function() {
								$('#nodeVal' + outPutCount).removeClass("visibility-hidden").effect("highlight", {color : 'yellow'}, 400).focus();
								
							});
						break;
						case 'listEmpty':	//traverse List empty
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">Linked List is empty</span>');
							butnStepWithTime();
						break;
						case 'displayList':	//traverse
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">The elements in Doubly Circular Linked List are : </span>');
							customIntroNxtStep('#traverseListMethod');
						break;
						case 'prntngElem':	//traverse list elements
							$('#animationDiv').addClass('z-index1000000');
							$('#print' + outPutCount).append('<span id="outData' + lastNodeCount + '" class="ct-code-b-yellow"></span>'
									+ '<span class="opacity00" id="arrow' + lastNodeCount	+ '"> -->&nbsp;</span></span>');
							$("#lastNodeVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
								svgAnimatingLineTopToBottom('#animationDiv', '#lastNode', '#dataDiv' + lastNodeCount, '#svgId', 'line45', 'arrow',
             										function() {
									$("#line45").remove();
									fadeInFromEffectWithTimelineMax("#data" + lastNodeCount, "#outData" + lastNodeCount, true, function() {
										zoomInEffect("#arrow" + lastNodeCount, function() {
											customIntroNxtStep('#csllMethodOperations', 'lstNxtToLst', 'left');
										});
									});
								});
							});
						break;
						case 'noSuchPosition':	//insertAtPosition
							outPutCount++;
							$('#consoleEnter').append('<span id="print' + outPutCount + '">No such position in Doubly Circular Linked List'
									+ ' so insertion is not possible</span>');
							var cond = $('#posVal').text() <= 0 || ($('#posVal').text() > 1 && $('#firstVal').text() == 'NULL');
							if (cond) {
								$('#posValDec, #posVal').addClass('opacity00');
								customIntroNxtStep('#buttonDiv');
							} else {
								customIntroNxtStep('#csllMethodOperations', 'retnFst1', 'left');
							}
						break;
						case "printDeletionNotPossible" ://deleteAtEnd && deleteAtPosition
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">Doubly Circular Linked List is empty so deletion '
													+ 'is not possible</span><br/>');
							butnStepWithTime();
						break;
						case "deletedNoElement" :	// deleteAtPosition() no such element to delete.
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">No such position in Doubly Circular Linked List '
									+ 'so deletion is not possible</span><br/>');
							outPutCount++;
							if (buttonName == "deleteAtPosition") {
								if (printfCount == 5) {
									customIntroNxtStep("#csllMethodOperations", "returnFirst", 'left');
								} else {
									customIntroNxtStep("#buttonDiv", "showButtons", 'bottom');
								} 
									
							} else {
								customIntroNxtStep("#csllMethodOperations", "returnFirst", 'left');
							}
						break;
						case 'printDelNode' :
							var val;
							if (buttonName != 'deleteAtPosition') {
								val = lastNodeCount
							} else {
								val = $("#posVal").text()
							}
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">The deleted element from Doubly Circular Linked List : '
									+ '<span class="ct-code-b-yellow value"></span></span><br/>');
							$('.value').append($("#data" + val).text());
							customIntroNxtStep("#csllMethodOperations", "freeNode", 'left');
						break;
						case "printEnterPosText" :
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">Enter a position : ' 
									+ '<input class="user-text visibility-hidden"'
									+ ' id="nodeVal'+ outPutCount +'" placeholder="number" maxlength="3" size="4"></span><br/>');
							outPutCount++;
							customIntroNxtStep("#scanf2", "readPosVal", 'bottom');
						break;
						case "enterPosVal" :
							$('.introjs-tooltip').removeClass("hide");
							text = "Please enter <span class='ct-code-b-yellow'>position</span> of an element which you want to"
									+ " <span class='ct-code-b-yellow'>delete</span>.";
							typing('.introjs-tooltiptext', text, function() {
								$('#nodeVal' + (outPutCount - 1)).removeClass("visibility-hidden").effect("highlight", {color : 'yellow'},
										400).focus();
								introNextSteps("#animationDiv", "readPosVal", 'bottom');
								events("#nodeVal" + (outPutCount - 1));
							});
						break;
						case 'printEmptyInCpp':
							$('#print' + outPutCount).append(' empty\n');
							$('#animationDiv').removeClass('z-index1000000');
							butnStepWithTime();
						break;
					}
				break;
				case 'wleXEqlToOne':
					var t = $('#nodeVal' + outPutCount).val();
					conditionChecking('#whileCond', 'x', '!=', '-1', t, false, '', function() {
						var cond = t != -1;
						conditionMessage(cond, function() {
							if (cond) {
								introNextSteps('#addNodesMethod', 'callToMethod');
							} else {
								introNextSteps('#buttonDiv');
							}
							$('.introjs-nextbutton').show();
						});
					});
				break;
				case 'deleteAtPositionNodeMethod' :
				case 'deleteAtEndNodeMethod' :
				case 'insertAtPositionMethod':	//insertAtPosition
				case 'insertAtEndMethod':	
				case 'addNodesMethod':	
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'callToMethod':
							introNextSteps("#csllMethodOperations", buttonName + "MthdDec",  "left");
							if (buttonName == 'deleteAtEnd' || buttonName == 'deleteAtPosition') {
								callingMethodWithFrst();
							} else {
								callingMethodWithFrstNVar('x', '#xValInMain');
							}
						break;
						case 'retnFstVal':
							if (buttonName == 'insertAtPosition') {
								$('#countValDec, #countVal, #opValDec, #opVal, #xValDecInAdd, #xValInAdd').addClass('opacity00');
							}
							introNextSteps('#animationDiv', 'streRetnFstVal', 'left');
							$('.introjs-tooltip').removeClass("hide");
							text = 'The <span class="ct-code-b-yellow">' + buttonName + '()</span> method return value is stored in'
									+ ' <span class="ct-code-b-yellow">first</span>(i.e., <span class="ct-code-b-yellow">' + $("#firstNodeVal").text()
									+'</span>) and stores it in the variable <span class="ct-code-b-yellow">first</span>.';
							typing('.introjs-tooltiptext' , text, function() {
								$('.introjs-nextbutton').show();
							});
						break;
					}
				break;
				case 'csllMethodOperations':
					$('#csllMethodOperations').removeClass('opacity00');
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'insertAtEndMthdDec': 
						case 'addNodesMthdDec':
							preAddNodesMethod();
							introjs.refresh();
							initFrstNVarInMethod('#' + buttonName + 'MthdDec', 'x', '#xValInMain');
						break;
						case 'returnTempVal':
							$('.introjs-tooltip').removeClass("hide");
							text = 'The <span class="ct-code-b-yellow">createNode()</span> method returns a value (i.e., '
									+ '<span class="ct-code-b-yellow">' + $("#dataAddress" + (nodeCount - 1)).text() 
									+'</span>) and stores it in the variable <span class="ct-code-b-yellow">temp</span>.';
							typing('.introjs-tooltiptext' , text, function() {
								$('#createNodeMethod').effect( "highlight",{color: 'blue'}, 1000);
								$('#animationDiv').addClass('z-index1000000');
								appendNextBtn('storeAddAndData');
							});
						break;
						case 'traverseMtdDec':	//traverse
							preTraverseListMethod();
							introjs.refresh();
							arrow('#' + buttonName + 'MthdDec', '#' + buttonName + 'MthdDec', function() {
								$('.introjs-tooltip').removeClass("hide");
								if (lang == 'c') {
									text = 'Here, <span class="ct-code-b-yellow">first</span> node is initialized with the value passed by the'
											+ ' <span class="ct-code-b-yellow">' + buttonName + '()</span> method.<br> i.e.,' 
											+ ' <span class="ct-code-b-yellow">' + buttonName + '(' + $('#firstNodeVal').text() + ')</span>.';
									typing('.introjs-tooltiptext', text, function() {
										appendNextBtn('methodPassedValFrstNXInit');
									});
								} else if (lang == 'cpp') {
									text = 'Traverse list method.';
									typing('.introjs-tooltiptext', text, function() {
										appendNextBtn('initTempAndLstToFrst');
									});
								}
							});
						break;
						case 'lstNxtToLst':	//traverse
							arrow('#printf3', '#lstNxtToLst', function() {
								whileTrueConText();
							});
						break;
						case 'insertAtPositionMthdDec':	//insertAtPosition
							preInsertAtPositionMethod();
							introjs.refresh();
							initFrstNVarInMethodInPos('#' + buttonName + 'MthdDec', 'x', '#xValInMain');
						break;
						case 'retnFst1':	//insertAtPosition
							arrow('#printf4', '#retnFst1', function(){
								if (lang == 'c') {
									retrnFrst('first', '#firstNodeVal');
								} else if (lang == 'cpp') {
									$('.introjs-tooltip').removeClass('hide');
									introNextSteps('#animationDiv', 'streRetnFstVal', 'left');
									text = 'return.';
									typing('.introjs-tooltiptext', text, function() {
										$('.introjs-nextbutton').show();
									});
								}
							});
						break;
						case 'deleteAtEndMthdDec' :	//deleteAtEnd()
							preDeleteAtEndMethod();
							introjs.refresh();
							arrow('#deleteAtEndMthdDec', '#deleteAtEndMthdDec', function() {
								initFrstNodeInMathod();
							});
						break;
						case 'freeNode' : //deleteAtEnd()
							var val;
							if (buttonName == 'deleteAtEnd') {
								val = lastNodeCount;
								arrow("#printf2", "#freeLstNde");
							} else  {
								val = $("#posVal").text()
								arrow("#printf4", "#freeTmp");
							}
							$('.introjs-tooltip').removeClass('hide');
							text = 'Now delete the node <span class="ct-code-b-yellow">' + $("#data" + val).text() +'</span> '
									+ 'at address <span class="ct-code-b-yellow">' + $('#dataAddress' + val).text() + '</span>.';
							typing('.introjs-tooltiptext', text, function() {
								appendNextBtn('callToFreeMethod');
							});
						break;
						case 'deleteAtPositionMthdDec' :
							preDeleteAtPositionMethod();
							introjs.refresh();
							arrow('#deleteAtPositionMthdDec', '#deleteAtPositionMthdDec', function() {
								initFrstNodeInMathod();
							});
						break;
						case 'returnFirst' :
							returnFirstNode();
						break;
					}
				break;
				case 'csllOperations':
					$('#csllOperations').removeClass('opacity00');
					preCreateNodeFunction();
					introjs.refresh();
					customIntroNxtStep('#tmpCreate');
				break;
				case 'tmpCreate':
					$('.introjs-tooltip').removeClass('hide');
					text = 'A variable <span class="ct-code-b-yellow">temp</span> is of type <span class="ct-code-b-yellow">node</span> is declared.';
					typing('.introjs-tooltiptext', text, function() {
						declareNodesWhenFunctionCall("tmpNde", "tmpNdeVal", "tmpNdeInCreMtd", "temp<sub>createNode</sub>", function() {
							$('#tmpNde').addClass('margin-left30');
							introNextSteps("#animationDiv", 'tempsDeclar');
							$('.introjs-nextbutton').show();
						});
					});
				break;
				case "allocateMem" :
					$('.introjs-tooltip').removeClass("hide");
					nodeCount++;
					createDynamicNodes(nodeCount - 1);
					introNextSteps("#animationDiv", "nodeMemAllo", 'left');
					if (lang == 'c') {
						text = '<ul><li class = "opacity00" id="li1">The <span class="ct-code-b-yellow">'
								+ 'sizeof(struct list)</span> returns the size '
								+ ' occupied by a list node which contains <span class="ct-code-b-yellow">three</span>'
								+ ' fileds <span class="ct-code-b-yellow">prev</span>, <span class="ct-code-b-yellow">data</span> and'
								+ ' <span class="ct-code-b-yellow">next</span>.</li> '
								+ ' <li class = "opacity00" id="li2">The <span class="ct-code-b-yellow">malloc()</span> function allocates memory '
								+ ' <span class="ct-code-b-yellow">dynamically</span> '
								+ ' to the size that is occuiped by the <span class="ct-code-b-yellow">list</span>'
								+ ' return by the above statement.</li>'
								+ ' <li class = "opacity00" id="li3">The address returned by the <span class="ct-code-b-yellow">malloc()</span> is '
								+ ' stored in <span class="ct-code-b-yellow">temp</span>.</li></ul>'
						$(".introjs-tooltiptext").append(text);
						TweenMax.to('#li1', 1, {opacity: 1, onComplete: function() {
							TweenMax.to('#li2', 1, {opacity: 1, onComplete: function() {
								TweenMax.to('#li3', 1, {opacity: 1, onComplete: function() {
									$('.introjs-nextbutton').show();
								}});
							}});
						}});
					} else if (lang == 'cpp') {
						text = '<ul><li class = "opacity00" id="li1"><span class="ct-code-b-yellow">new</span> operator creates'
								+ ' <span class="ct-code-b-yellow">dynamic memory</span> to the <span class="ct-code-b-yellow">struct list</span>.'
								+ ' Which contains <span class="ct-code-b-yellow">three</span> fields <span class="ct-code-b-yellow">prev</span>,'
								+ ' <span class="ct-code-b-yellow">data</span> and <span class="ct-code-b-yellow">next</span>.</li>'
								+ ' <li class = "opacity00" id="li2"><span class="ct-code-b-yellow">new</span> returns the'
								+ ' <span class="ct-code-b-yellow">address</span> of the allocated memory that will be stored in'
								+ ' <span class="ct-code-b-yellow">temp</span>.</li></ul>';
						$(".introjs-tooltiptext").append(text);
						TweenMax.to('#li1', 1, {opacity: 1, onComplete: function() {
							TweenMax.to('#li2', 1, {opacity: 1, onComplete: function() {
								$('.introjs-nextbutton').show();
							}});
						}});
					}
				break;
				case 'asgnToNlToTmp':
				case 'asgnNlToTmpPrev':
					var text;
					if (elementId == 'asgnToNlToTmp') {
						text = 'next';
						introNextSteps('#animationDiv', 'tempNextToNul');
					} else {
						text = 'prev';
						introNextSteps('#animationDiv', 'tempPrevToNul');
					}
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, <span class="ct-code-b-yellow">' + text + '</span> member of the <span class="ct-code-b-yellow">temp</span>'
							+ ' node is initialized with <span class="ct-code-b-yellow">NULL</span>.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				break;
				case "returnTmp" :
					$('.introjs-tooltip').removeClass("hide");
					text = 'The <span class="ct-code-b-yellow">return</span> statement returns the temp value (i.e., <span class="ct-code-b-yellow">'
							+ $("#dataAddress" + (nodeCount - 1)).text() +'</span>).';
					typing('.introjs-tooltiptext' , text, function() {
						introNextSteps("#csllMethodOperations", "returnTempVal", 'left');
						$('.introjs-nextbutton').show();
					});
				break;
				case 'initX':	//insertAtEnd
					$('.introjs-tooltip').removeClass('hide');
					text = 'An int variable <span class="ct-code-b-yellow">x</span> is declared.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps('#animationDiv', 'xInit');
						$('.introjs-nextbutton').show();
					});
				break;
				case 'ifFstEqlToNl':	
					ifConText($('#firstVal').text());
				break;
				case 'traverseListMethod':	//traverse
					introNextSteps('#csllMethodOperations', 'traverseMtdDec', 'left');
					callingMethodWithFrst();
				break;
				case 'initPosNX':	//insertAtPosition
					$('.introjs-tooltip').removeClass('hide');
					text = 'Two variables <span class="ct-code-b-yellow">pos</span> and <span class="ct-code-b-yellow">x</span> of'
							+ ' type int are declared.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps('#animationDiv', 'initXPos');
						$('.introjs-nextbutton').show();
					});
				break;
				case 'posIfCond':	//insertAtPosition
					var t = $('#posVal').text();
					var cond = t <= 0 || (t > 1 && $('#firstVal').text() == 'NULL');
					insrtPosIfCondAnim(t, cond, function() {
						if (cond) {
							printfCount = 3;
							introNextSteps('#printf3', 'noSuchPosition');
						} else {
							if (t == 1 && $('.nodes').length > 0) {
								//nodeCount = lastNodeCount = 1;
								//lastNodeCount = 2;
								lastNodeCount = 1;
								//changeIdsBasedOnCond(2);
								
							}
							introNextSteps('#insertAtPositionMethod', 'callToMethod');
						}
						$('.introjs-nextbutton').show();
					});
				break;
				case 'intlPos' :	//deleteAtPosition
					$('#intlPos').removeClass('z-index1000000');
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we declared an <span class="ct-code-b-yellow">int</span> variable <span class="ct-code-b-yellow">pos</span>.';
					typing('.introjs-tooltiptext', text, function() {
						appendNextBtn('declarationOfPosVar');
					});
				break;
				case 'posLesThnEqZero' :
					var t = $('#posVal').text();
					conditionChecking('#posLessThanZero', 'pos', '<=', '0', t, false, '', function() {
						var cond = t <= 0;
						conditionMessage(cond, function() {
							if (cond) {
								printfCount = 3;
								introNextSteps("#printf3",'deletedNoElement', 'bottom');
							} else {
								introNextSteps("#deleteAtPositionNodeMethod",'callToMethod', 'bottom');
							}
							$('.introjs-nextbutton').show();
						});
					});
				break;
				case 'objCallDcll':
					$('#objCallDcll').removeClass('opacity00');
					$('.introjs-tooltip').removeClass('hide');
					text = 'This is the creation of an object <span class="ct-code-b-yellow">d</span> for a class'
								+ ' <span class="ct-code-b-yellow">Dcll</span>.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps('#declareFirstNode', 'callingContructor');
						$('.introjs-nextbutton').show();
					});
				break;
				case 'constructCreat':
					$('.introjs-tooltip').removeClass('hide');
					text = 'This is the declaration of a <span class="ct-code-b-yellow">class</span> constructor <span class="ct-code-b-yellow">Dcll'
							+ '</span> with the access specifier <span class="ct-code-b-yellow">public</span>.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps('#membrFunctions');
						$('.introjs-nextbutton').show();
					});
				break;
				case 'membrFunctions':
					$('.introjs-tooltip').removeClass('hide');
					text = 'These are the declarations of <span class="ct-code-b-yellow">member functions</span> in a class'
							+ ' <span class="ct-code-b-yellow">Dcll</span>.';
					typing('.introjs-tooltiptext', text, function() {
						preDcclD();
						introNextSteps('#objCallDcll');
						$('.introjs-nextbutton').show();
					});
				break;
				case 'emptyMethodCall':
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here we are calling the method <span class="ct-code-b-yellow">empty()</span>.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps('#emptyMethod');
						$('.introjs-nextbutton').show();
					});
				break;
				case 'emptyMethod':
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here we are assigning <span class="ct-code-b-yellow">first</span> value to <span class="ct-code-b-yellow">NULL</span>.';
					typing('.introjs-tooltiptext', text, function() {
						nextBtnWithoutCalling(function() {
							$('#animationDiv').addClass('z-index1000000');
							transferEffect('#emptyFstNul', '#firstVal', function() {
								$('#firstVal').text('NULL');
								printfCount = 1;
								introNextSteps('#printf1', 'printText');
								$('.introjs-nextbutton').show();
							});
						});
					});
				break;
			}
		});
	});
	introjs.start();
	text = 'Here we will learn about <span class="ct-code-b-yellow">Doubly Circular Linked List</span> operations.';
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}

function insrtPosIfCondAnim(t, cond, callBackFunction) {
	$('.introjs-tooltip').removeClass('hide');
	text = 'Now check the condition : <br>&nbsp;<span id="ifCondition" class="position ct-code-b-yellow opacity00">'
			+ '<span id="first" class="position">pos</span> <= 0 || (<span id="second" class="position">pos</span> > 1 && '
			+ '<span id="third" class="position">first</span> == NULL)</span>'
			+ '&nbsp;&nbsp;<span class="position" id="trueOrFalse"></span><div id="appendSpan"></div>';
	$('.introjs-tooltiptext').text('').append(text);
	fromEffectWithTweenMax('#ifCond', '#ifCondition', true, function() {
		nextBtnWithoutCalling(function() {
			highlightNFlip('#first', t, function() {
				highlightNFlip('#second', t, function() {
					highlightNFlip('#third', $('#firstVal').text(), function() {
						conditionMessage(cond, function() {
							callBackFunction();
						});
					});
				});
			});
		});
	});
}

function declarationOfPosVar() { 
	$(".introjs-duplicate-nextbutton").remove();
	$('#animationDiv').addClass('z-index1000000');
	$("#intlPos").effect( "transfer", { to: $("#posValDec"), className: "ui-effects-transfer" }, 800 , function() {
		$("#posValDec").removeClass('opacity00');
		if (lang == 'c') {
			introNextSteps("#ifFstEqlToNl", "", "bottom");
		} else if (lang == 'cpp') {
			printfCount = 2
			introNextSteps("#printf2", 'printEnterPosText', 'bottom');
		}
		$('#animationDiv').removeClass('z-index1000000');
		$('.introjs-nextbutton').show();
	});
}

function butnStepWithTime() {
	introNextSteps("#buttonDiv", "showButtons", 'bottom');
	setTimeout(function() {
		introjs.nextStep();
	}, 800);
}

function initFrstNVarInMethodInPos(arrowId, val, selector) {	//In method declaration first & var dec text 
	arrow(arrowId, arrowId, function() {
		$('.introjs-tooltip').removeClass('hide');
		if (lang == 'c') {
			text1 = 'the <span class="ct-code-b-yellow">first</span> node and <span class="ct-code-b-yellow">pos, ' + val + '</span>';
			text2 = $('#firstVal').text() +  ', ' + $('#posVal').text() + ', ' + $(selector).text();
		} else if (lang == 'cpp') {
			text1 = '<span class="ct-code-b-yellow">pos</span> and <span class="ct-code-b-yellow">' + val + '</span>'
			text2 = $('#posVal').text() + ', ' + $(selector).text()
		}
		text = 'Here, ' + text1 + ' variables are initialized with the values are passed by the <span class="ct-code-b-yellow">' 
					+ buttonName + '()</span> method.<br>i.e., <span class="ct-code-b-yellow">' + buttonName + '(' + text2 + ')</span>.';
		typing('.introjs-tooltiptext', text, function() {
			if (lang == 'c') {
				appendNextBtn('methodPassedValFrstNXInit');
			} else if (lang == 'cpp') {
				appendNextBtn('methodPassedValXInitAnim');
			}
		});
	});
}

function initFrstNVarInMethod(arrowId, text, selector) {	//In method declaration first & another var dec text 
	arrow(arrowId, arrowId, function() {
		$('.introjs-tooltip').removeClass('hide');
		if (lang == 'c') {
			text = 'Here, the <span class="ct-code-b-yellow">first</span> node and <span class="ct-code-b-yellow">' + text + '</span> variable are'
					+ ' initialized with the values are passed by the <span class="ct-code-b-yellow">' + buttonName + '()</span> method.<br>i.e.,'
					+ ' <span class="ct-code-b-yellow">' + buttonName + '(' + $('#firstVal').text() +  ', ' + $(selector).text() + ')</span>.';
			typing('.introjs-tooltiptext', text, function() {
				appendNextBtn('methodPassedValFrstNXInit');
			});
		} else if (lang == 'cpp') {
			text = 'Here, <span class="ct-code-b-yellow">' + text + '</span> variable is initialized with the value passed by the '
					+ '<span class="ct-code-b-yellow">' + buttonName + '()</span> method.<br>i.e.,'
					+ ' <span class="ct-code-b-yellow">' + buttonName + '(' + $(selector).text() + ')</span>.';
			typing('.introjs-tooltiptext', text, function() {
				nextBtnWithoutCalling(function() {
					$('#animationDiv').addClass('z-index1000000');
					methodPassedValXInitAnim();
				});
			});
		}
	});
}

function initFrstNodeInMathod() { // in deleteAtEnd() & deleteAtPosition declaration of first node 
	$('.introjs-tooltip').removeClass('hide');
	if (lang == 'c') {
		if (buttonName == 'deleteAtEnd') {
			text = 'Here, the <span class="ct-code-b-yellow"> first</span> node is'
					+ ' initialized with the value passed by the <span class="ct-code-b-yellow">' + buttonName + '()</span> method.<br>i.e.,'
					+ ' <span class="ct-code-b-yellow">' + buttonName + '(' + $('#firstVal').text() +')</span>.';
		} else if (buttonName == 'deleteAtPosition') {
			text = 'Here, the <span class="ct-code-b-yellow">first, pos</span> are'
					+ ' initialized with the values passed by the <span class="ct-code-b-yellow">' + buttonName + '()</span> method.<br>i.e.,'
					+ ' <span class="ct-code-b-yellow">' + buttonName + '(' + $('#firstVal').text() + ', ' + $('#posVal').text() +')</span>.';
		}
		typing('.introjs-tooltiptext', text, function() {
			appendNextBtn('methodPassedValFrstNXInit');
		});
	} else if (lang == 'cpp') {
		if (buttonName == 'deleteAtEnd') {
			text = '<span class="ct-code-b-yellow">' + buttonName + '()</span> method.';
			typing('.introjs-tooltiptext', text, function() {
				appendNextBtn('initTempAndLstToFrst');
			});
		} else if (buttonName == 'deleteAtPosition') {
			text = 'Here, the <span class="ct-code-b-yellow">pos</span>  is'
					+ ' initialized with the value passed by the <span class="ct-code-b-yellow">' + buttonName + '()</span> method.<br>i.e.,'
					+ ' <span class="ct-code-b-yellow">' + buttonName + '(' + $('#posVal').text() +')</span>.';
			typing('.introjs-tooltiptext', text, function() {
				nextBtnWithoutCalling(function() {
					$('#animationDiv').addClass('z-index1000000');
					$('#extraNode').html('pos<sub>' + buttonName + '</sub>');
					varDecNInit('#decPosVar', '#opValDec', '#opVal', '#posVal', function() {
						appendNextBtn('initTempAndLstToFrst');
					});
				})
			});
		}
		
	}
}

function methodPassedValFrstNXInit() { //addNodes addNodes(first, x) passed values & deleteAtEnd & deleteAtPosition
	$('.introjs-duplicate-nextbutton').remove();
	$('#animationDiv').addClass('z-index1000000');
	declareNodesWhenFunctionCall("firstNode", "firstNodeVal", "fstNodeInAddMtd", "first<sub>" + buttonName + "</sub>", function() {
		$("#firstVal").addClass("ct-green-color");
		introjs.refresh();
		setTimeout(function() {
			varDecNInit('#decFstVar', '#firstNode', '#firstNodeVal', '#firstVal', function() {
				methodPassedValXInitAnim();
			});
		},800);
	});
}

function methodPassedValXInitAnim() {
	$('#animationDiv').addClass('z-index1000000');
	$('.introjs-duplicate-nextbutton').remove();
	if ($('#firstNodeVal').text() != "NULL" && $('#firstNodeVal').text() != "") {
		$("#line11").remove();
		svgAnimatingLineTopToBottom("#animationDiv", "#firstNode", "#dataDiv1", "#svgId", "line11", "arrow");
	}
	if (buttonName == 'insertAtPosition') {
		$('#extraNode').text('').append('pos<sub>('  + buttonName + ')</sub>');
		varDecNInit('#decPosVar', '#opValDec', '#opVal', '#posVal', function() {
			xDeclaration();
		});
	} else if (buttonName == 'addNodes' || buttonName == 'insertAtEnd') {
		xDeclaration();
	} else if (buttonName == 'deleteAtPosition') {
		$('#extraNode').html('pos<sub>' + buttonName + '</sub>');
		varDecNInit('#decPosVar', '#opValDec', '#opVal', '#posVal', function() {
			appendNextBtn('initTempAndLstToFrst');
		});
	} else {	//traverseList & deleteAtEnd()
		appendNextBtn('initTempAndLstToFrst');
	}
}

function decIVal() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#decTempNLstNde", "#declareiVar");
	text = 'Here, we declared an <span class="ct-code-b-yellow">int</span> variable <span class="ct-code-b-yellow">i</span>.';
	typing('.introjs-tooltiptext', text, function() {
		appendNextBtn('decIValAnimation');
	});
}

function decIValAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	$("#countNme").text("i");
	transferEffect("#declareiVar", "#countValDec", function() {
		if (lang == 'c') {
			appendNextBtn('ifPosEqOne');
		} else if (lang == 'cpp') {
			appendNextBtn('checkIfFrstZNulInDelAtPos');
		}
	});
}

function checkIfFrstZNulInDelAtPos() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#declareiVar", "#ifFstEqlToNl", function() {
		conditionChecking('#fstToNul', 'first', '==', 'NULL', $('#firstVal').text(), false, '', function() {
			var cond = $('#firstVal').text() == 'NULL';
			conditionMessage(cond, function() {
				nextBtnWithoutCalling(function() {
					if (cond) {
						$('.introjs-tooltip').addClass('hide');
						$('#animationDiv').removeClass('z-index1000000');
						arrow("#ifFstEqlToNl", "#printf1", function() {
							customIntroNxtStep("#consoleId", "printDeletionNotPossible");
						});
					} else {
						ifPosEqOne();	
					}
				});
			});
		});
	});
}

function ifPosEqOne() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#declareiVar","#ifPosEqOne", function() {
		conditionChecking('#ifPosEqOne', "pos", "==", "1", parseInt($("#posVal").text()), false, '', function() {
			t = parseInt($("#posVal").text());
			var cond = t == 1;
			conditionMessage(cond, function() {
				nextBtnWithoutCalling(function() {
					if (cond) {
						arrow('#ifPosEqOne', '#lstNxtEqNl', function() {
							iflstNxtIsEqNl();
						});
					} else {
						forLoop();
					}
				});
			});
		});
	});
}

function forLoop() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#ifPosEqOne", "#forLoop", function() {
		text = 'The <span class="ct-code-b-yellow">i</span> value will be initialize to <span class="ct-code-b-yellow">1</span>.'
		typing('.introjs-tooltiptext', text, function() {
			appendNextBtn('iValDeclaration');
		});
	});
}

function iValDeclaration() {
	$(".introjs-duplicate-nextbutton").remove();
	$("#countName").text("i");
	transferEffect("#iInit", "#countValDec", function() {
	  $("#countVal").text(iVal);
	  zoomInEffect("#countVal", function() {
		  appendNextBtn("iConText");
	  });
	});
}

function iConText() {
	$(".introjs-duplicate-nextbutton").remove();
	var fstId;
	if (lang == 'c') {
		fstId = 'firstNodeVal';
	} else if (lang == 'cpp') {
		fstId = 'firstVal';
	}
	conditionChecking('#iCon', "i", "<", "pos",  iVal, true, parseInt($("#posVal").text()), function() {
		t = parseInt($("#posVal").text());
		var cond = iVal < t;
		conditionMessage(cond, function() {
			nextBtnWithoutCalling(function() {
				if (cond) {
					arrow('#forLoop', '#ifTmpNxtNl', function() {
						conditionChecking('#ifTmpNxtNl', "temp -> next", "==", "first",  $('#next' + lastNodeCount).text(), true, 
									parseInt($("#" + fstId).text()), function() {
							var a = parseInt($('#next' + lastNodeCount).text());
							var b = parseInt($("#" + fstId).text());
							var cond = a == b;
							conditionMessage(cond, function() {
								nextBtnWithoutCalling(function() {
									if (cond) {
										arrow('#ifTmpNxtNl', '#printf5', function() {
											printNoSuchElementInDcll();
										});
									} else {
										arrow('#ifTmpNxtNl', '#lstToTemp', function() {
											assignValfromOneVarToAnotherVar('temp', 'lastNode', $('#tempNodeVal').text(), function() {
												$('#tempNodeVal').parent().effect("highlight", {color : 'blue'}, 400);
												fadeInBounceEffectWithTimelineMax('#tempNodeVal', '#lastNodeVal', false, function() {
													$('#line13').remove();
													svgAnimatingLineTopToBottom("#animationDiv", "#lastNode", "#dataDiv"+ lastNodeCount, "#svgId", 
																	"line13", "arrow", function() {
														nextBtnWithoutCalling(function() {
															arrow('#lstToTemp', '#tempToTmpNxt', function() {
																tempNxtToTemp();
															});
														});
												    });
											    });
											});
										});
									}
								});
							});
						});
					});
				} else {
					arrow('#forLoop', '#ifTmpNxtFst', function() {
						conditionChecking('#ifTmpNxtFst', "temp -> next", "==", "first",  $('#next' + lastNodeCount).text(), true, 
									parseInt($("#" + fstId).text()), function() {
							var a = parseInt($('#next' + lastNodeCount).text());
							var b = parseInt($("#" + fstId).text());
							var cond = a == b;
							conditionMessage(cond, function() {
								nextBtnWithoutCalling(function() {
									if(cond) {
										arrow('#ifTmpNxtFst', '#lstNxtFst', function() {
											assignValfromOneVarToAnotherVar('first', 'lastNode -> next', $('#' + fstId).text(), function() {
												$('#' + fstId).parent().effect("highlight", {color : 'blue'}, 400);
												polyline = 2;
												streValFromOneToAnotherAndDrwCircleLine('first', 'lastNode -> next', '#' + fstId, 
																'#next' + (lastNodeCount - 1), true, '#nextDiv' + (lastNodeCount - 1), '#prevDiv1',
																'pUpLine' + polyline, function() {
													$('#line' + (lastNodeCount - 1)).remove();
													nextBtnWithoutCalling(function() {
														arrow('#lstNxtFst', '#fstPrevToLstNde', function() {
															streValFromOneToAnotherAndDrwCircleLine('lastNode', 'first -> prev', '#lastNodeVal',
																	 '#prev1', false, '#prevDiv1', '#nextDiv' + (lastNodeCount - 1),
																	 'pDownLine' + polyline, function() {
																nextBtnWithoutCalling(function() {
																	printfCount = 4;
																	arrow('#streLstToFstNxtPrev','#printf4', function() {
																		printDeleteNode(parseInt($('#posVal').text()));
																	});
																});
															});
														});
													});
												});
											});
										});
									} else {
										var value;
										if (lastNodeCount < $('.nodes').length) {
											value = $('.nodes').length
										} else {
											value = lastNodeCount - 1;
										}
										arrow('#ifTmpNxtFst', '#lstNxtToTmpNxt', function() {
											polyline = 2;
											streValFromOneToAnotherAndDrwCircleLine('temp -> next', 'lastNode -> next', '#next' + lastNodeCount, 
														'#next' + (lastNodeCount - 1), true, '#nextDiv' + value, '#prevDiv1', 'pUpLine' + polyline,
														function() {
												$('#line' + (lastNodeCount - 1)).remove();
												nextBtnWithoutCalling(function() {
													arrow('#lstNxtToTmpNxt', '#tmpNxtPrvTolstnde', function() {
														streValFromOneToAnotherAndDrwCircleLine('lastNode', 'temp -> next -> prev', '#lastNodeVal',
																'#prev' + (lastNodeCount + 1), false, '#prevDiv1', '#nextDiv' + value,  
																'pDownLine' + polyline, function() {
															$('#line2' + (lastNodeCount)).remove();
															nextBtnWithoutCalling(function() {
																printfCount = 4;
																arrow('#streLstToFstNxtPrev','#printf4', function() {
																	printDeleteNode(parseInt($('#posVal').text()));
																});
															});
														});
													});
												});
											});
										});
									}
								});
							});
						});
					});
				}
			});
		});
	});
}

function tempNxtToTemp() { //temp = temp -> next
	assignValfromOneVarToAnotherVar('temp -> next', 'tempNode', $("#next" + lastNodeCount).text(), function() {
		$('#tempNodeVal').parent().effect("highlight", {color : 'blue'}, 400);
		svgAnimatingLineTopToBottom("#animationDiv", "#tempNode", "#dataDiv"+ lastNodeCount, "#svgId", "line31", "arrow", function() {
			$('#line31').remove();
			$('#next' + lastNodeCount).parent().effect("highlight", {color : 'blue'}, 400);
			fadeInBounceEffectWithTimelineMax('#next' + lastNodeCount, '#tempNodeVal', false, function() {
				$('#line12').remove();
				if ($('#tempNodeVal').text().trim() != $('#firstNodeVal').text()) {
					lastNodeCount++;
					svgAnimatingLineTopToBottom("#animationDiv", "#tempNode", "#dataDiv" + lastNodeCount, "#svgId", "line12", "arrow");
				} else {
					svgAnimatingLineTopToBottom("#animationDiv", "#tempNode", "#dataDiv" + lastNodeCount, "#svgId", "line12", "arrow");
				}
				nextBtnWithoutCalling(function() {
					incrementIValue();
				});
			});
		}); 
	});
}

function iflstNxtIsEqNl() {	//deleteAtEnd() if (first == NULL)
	$('.introjs-duplicate-nextbutton').remove();
	var fstId, lineId;
	if (lang == 'c') {
		fstId = 'firstNodeVal';
		lineId = '#line11';
	} else if (lang == 'cpp') {
		fstId = 'firstVal';
		lineId = '#line10';
	}
	if (buttonName == 'deleteAtEnd' && lang == 'c') {
		arrow('#decTempNLstNde', '#lstNxtEqNl');
	}
	var t = $('#next' + lastNodeCount).text().trim();
	conditionChecking('#chkLstNxtEqst', 'lastNode -> next', '==', 'first', t, true, $('#' + fstId).text(), function() {
		var cond = t == $('#firstVal').text();
		conditionMessage(cond, function() {
			nextBtnWithoutCalling(function() {
				if (cond) {
					arrow('#lstNxtEqNl', '#streNlInFrst', function() {
						NullToSpecificNode('first', function() {
							nextBtnWithoutCalling(function() {
								streNullInSpecifiedNode('#' + fstId, lineId, function() {
									nextBtnWithoutCalling(function() {
										if (buttonName == 'deleteAtEnd') {
											printfCount = 2;
										} else {
											printfCount = 4;
										}
										arrow('#streNlInFrst', '#printf' + printfCount, function() {
											printDeleteNode(lastNodeCount);
										});
									});
								});
							});
						});
					});
				} else {
					arrow('#lstNxtEqNl', '#whileLstNxtEqlToNl', function() {
						elseConText();
					});
				}
			});
		});
	});
}

function callToFreeMethod() {	//deleteAtEnd() & deleteAtPosition
	$('.introjs-duplicate-nextbutton').remove();
	if (buttonName == 'deleteAtEnd') {
		deleteAtEndNode();
	} else  {
		deleteAtPositionNode();
	}
}

function deleteAtEndNode() {	//deleteAtEnd()
	$('#animationDiv').addClass('z-index1000000');
	TweenMax.to("#node" + lastNodeCount, 0.5, { top : -80, onComplete: function() {
		$("#node" + lastNodeCount).remove();
		introjs.refresh();
		if ($('.nodes').length == 0) {
			$('line, polyline').remove();
		} else {
			$('#line2' + (lastNodeCount - 1) +', #pDownLine1, #pUpLine1, #line13' ).remove();
			nodeCount--;
			$('#pUpLine2').attr('id', 'pUpLine1');
			$('#pDownLine2').attr('id', 'pDownLine1');
		}
		if (lang == 'c') {
			appendNextBtn("returnFirstNode");
		} else if (lang == 'cpp') {
			$('#animationDiv').removeClass('z-index1000000');
			butnStepWithTime();
		}
	}});
}

function deleteAtPositionNode() {
	if ($("#posVal").text() == 1) {
		if ($('.nodes').length == 1) {
			deleteAtBeginNodeIfLengthIsOne();
		} else {
			deleteAtBeginNodeIfLengthNotEqOne($("#posVal").text(), true);
		}
	} else if ($("#posVal").text() == $(".nodes").length) {
		deleteAtEndNode();
		svgCurveUpper('#nextDiv' + ($('.nodes').length - 1),  '#prevDiv1', "pUpLine1");
		svgCurveDown('#prevDiv1', '#nextDiv' + ($('.nodes').length - 1), "pDownLine1");
	} else {
		deleteAtBeginNodeIfLengthNotEqOne($("#posVal").text(), false);
	}
}

function deleteAtBeginNodeIfLengthIsOne() {
	$('line, polyline').remove();
	TweenMax.to("#node1", 0.5, { top : -80, onComplete: function() {
		$("#node1").remove();
		introjs.refresh();
		if (lang == 'c') {
			appendNextBtn("returnFirstNode");
		} else if (lang == 'cpp') {
			introNextSteps('#buttonDiv');
			$('.introjs-nextbutton').show();
		}
	}});
}

function deleteAtBeginNodeIfLengthNotEqOne(pos, flag) {
	var posn;
	$('polyline').remove();
	TweenMax.to("#node" + pos, 0.5, { top : -80, onComplete: function() {
		$("#node" + pos).addClass("opacity00").css("top","0");
		deleteAtFirstNode(($(".lines").length), pos, "#node" + pos, function() {  
			$('line, polyline').remove();
			lastNodeCount--;
			setTimeout(function() {
				if (flag) {
					posn = pos;
				} else {
					posn = (pos - 1);
				}
				changeIdsBasedOnCond(1, function() {
					regenerateArrows(function() {
						if (lang == 'c') {
							appendNextBtn("returnFirstNode");
						} else if (lang == 'cpp') {
							introNextSteps('#buttonDiv');
							$('.introjs-nextbutton').show();
						}
					})
				});
			},1500);
		});
	}});
}

//arrows regenerate
function regenerateArrows(callBackFunction) {
	var len = $(".nodes").length;
	if ((lang == 'c' && ($('#firstNodeVal').text() == $('#firstVal').text()) || ($('#firstNodeVal').text() == "")) || lang == 'cpp') {
		svgAnimatingLineRightToLeft("#animationDiv", "#firstDiv", "#prevDiv1", "#svgId", "line10", "arrow");
	}
	if(buttonName == 'deleteAtEnd' || buttonName == 'deleteAtPosition') {
		if (lang == 'c') {
			svgAnimatingLineTopToBottom("#animationDiv", "#firstNode", "#dataDiv1", "#svgId", "line11", "arrow");
		}
		svgAnimatingLineTopToBottom("#animationDiv", "#lastNode", "#dataDiv" + lastNodeCount, "#svgId", "line13", "arrow");
	}
	for (var i = 1; i < len; i++) {
		drawDoubleLines('#nextDiv', 'line' + i, '#prevDiv', i, true);
		drawDoubleLines('#prevDiv', 'line2' + i, '#nextDiv', i, false);
	}
	svgCurveUpper('#nextDiv' + $('.nodes').length,  '#prevDiv1', "pUpLine1");
	svgCurveDown('#prevDiv1', '#nextDiv' + $('.nodes').length, "pDownLine1");
	if (typeof callBackFunction === 'function') {
		callBackFunction();
	}
}

function drawDoubleLines(selector1, lineId, selector2, i, arrowFrom, callBackFunction) {
	lineFlag = true;
	$(lineId).remove();
	if (arrowFrom) {
		if (i < 4) {
			svgAnimatingLineRightToLeft('#animationDiv', selector1 + i, selector2 + (i + 1), '#svgId', lineId, 'arrow');
		} else if (i == 4) {
			svgAnimatingLineBottomToTop('#animationDiv', selector1 + i, selector2 + (i + 1), '#svgId', lineId, 'arrow');
		} else {
			svgAnimatingLineLeftToRight('#animationDiv', selector2 + i, selector1 + (i + 1), '#svgId', lineId, 'arrow');
		}
	} else {
		if (i < 4) {
			svgAnimatingLineLeftToRight('#animationDiv', selector1 + (i + 1), selector2 + i, '#svgId', lineId, 'arrow');
		} else if (i == 4) {
			svgAnimatingLineTopToBottom('#animationDiv', selector1 + (i + 1), selector2 + i, '#svgId', lineId, 'arrow');
		} else {
			svgAnimatingLineRightToLeft('#animationDiv', selector2 + (i + 1), selector1 + i, '#svgId', lineId, 'arrow');
		}
	}
	if (typeof callBackFunction === 'function') {
		callBackFunction();
	}
}

function deleteAtFirstNode(val, count, nodeId, callBackFunction) {
		$('line').remove();
		if (count <= val) {
			var l1Val;
			if (count <= 4) {
				l1Val = '-120px';
			} else if (count > 5) {
				l1Val = '120px';
			}
			if (count == 5) {
				TweenMax.to($('#dynamicNodes .nodes').not(nodeId).eq(count - 1), 1, {top: '-68px', onComplete: function() {
					$.each($("#dynamicNodes .nodes").not(nodeId), function() {
						$(this).css("top", "0");
					});
					$(nodeId).remove();
					if ($('.nodes').length == 4) {
						$('#dynamicNodes .nodes:last').removeClass("pull-right")
					}
				}});
			} else {
				TweenMax.to($("#dynamicNodes .nodes").not(nodeId).eq(count - 1), 1, {left : l1Val, onComplete: function() {
					$.each($("#dynamicNodes .nodes").not(nodeId), function() {
						$(this).css("left", "0");
					});
					$(nodeId).remove();
				}});
			}
			count++;
			deleteAtFirstNode(val, count, nodeId, callBackFunction);
		} else {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}
	}

function returnFirstNode() {
	$(".introjs-duplicate-nextbutton").remove();
	if(buttonName == 'deleteAtPosition') {
		if (printfCount == 5) {
			arrow("#printf5", "#rtnFst");
		} else {
			arrow("#freeTmp", "#returnFirst");
		}
	} else {
		arrow("#freeLstNde", "#retnFrst");
	}
	$('.introjs-tooltip').removeClass("hide");
	text = 'The <span class="ct-code-b-yellow">' + buttonName + '()</span> method return <span class="ct-code-b-yellow">first</span> value'
			+ ' <span class="ct-code-b-yellow">' + $("#firstNodeVal").text() + '</span>.'
	typing('.introjs-tooltiptext', text, function() {
		$('#animationDiv').removeClass('z-index1000000');
		introNextSteps("#"+ buttonName +"NodeMethod", 'retnFstVal', 'bottom');		
		$('.introjs-nextbutton').show();
	});
}

function printNoSuchElementInDcll() {
	text = 'There is no such element found in dcll.'
	typing('.introjs-tooltiptext', text, function() {
		nextBtnWithoutCalling(function() {
			printfCount = 5;
			introNextSteps("#consoleId",'deletedNoElement', 'bottom');
			$('.introjs-nextbutton').show();
		});
	});
}

function xDeclaration() {
	$("#subVal").text('(' + buttonName + ')');
	varDecNInit('#decXVar', '#xValDecInAdd', '#xValInAdd', '#xValInMain', function() {	
		appendNextBtn('initTempAndLstToFrst');
	});
}

function initTempAndLstToFrst() { //addNodes() && insertAtEnd() && traverseList() && insertAtPosion()
	$('.introjs-duplicate-nextbutton').remove();
	var nodeId;
	if (lang == 'c') {
		nodeId = 'firstNodeVal';
	} else if (lang == 'cpp') {
		nodeId = 'firstVal'
	}
	arrow('#'+ buttonName +'MthdDec', '#decTempNLstNde', function() {
		text1 = 'Here we declared';
		text2 = ' two nodes <span class="ct-code-b-yellow">temp</span> and';
		text3 = ' <span class="ct-code-b-yellow">lastNode</span>. <span class="ct-code-b-yellow">lastNode</span> is initialized with the '
			+ '<span class="ct-code-b-yellow">first</span> value (i.e., <span class="ct-code-b-yellow"> ' + $('#firstVal').text() + '</span>).';
		if (buttonName == 'traverseList') {
			text = text1 + text3;
		} else {
			text = text1 + text2 + text3;
		}
		typing('.introjs-tooltiptext', text, function() {
			nextBtnWithoutCalling(function() {
				if (buttonName != 'traverseList') {
					declareNodesWhenFunctionCall('tempNode', 'tempNodeVal', 'tempNodeInAddMtd', 'temp<sub>' + buttonName + '</sub>', function() {
						$("#tempNode").addClass("margin-left30");
						transferEffect('#decTempNLstNde', '#tempNode', function() {
							if (buttonName == 'deleteAtPosition') {
								$('#tempNodeVal').text($('#' + nodeId).text());
								fromEffectWithTweenMax('#' + nodeId, '#tempNodeVal', false, function() {
									$("#line12").remove();
									if ($('#firstVal').text() != "NULL") {
										svgAnimatingLineTopToBottom("#animationDiv", "#tempNode", "#dataDiv1", "#svgId", "line12", "arrow");
									}
								});
							}
						});
					});
				}
				$('#animationDiv').addClass('z-index1000000');
				declareNodesWhenFunctionCall("lastNode", "lastNodeVal", "lastNodeInAddMtd", "lastNode", function() {
					$("#lastNode").addClass("margin-left30");
					varDecNInit('#decTempNLstNde', '#lastNode', '#lastNodeVal', '#' + nodeId, function() {
						if ((lang == 'c' && $('#firstNodeVal').text() != "NULL") || (lang == 'cpp' && $('#firstVal').text() != "NULL")) {
							$("#line13").remove();
							//svgAnimatingLineTopToBottom("#animationDiv", "#lastNode", "#dataDiv" + lastNodeCount, "#svgId", "line13", "arrow");
							svgAnimatingLineTopToBottom("#animationDiv", "#lastNode", "#dataDiv1", "#svgId", "line13", "arrow");
						}
						nextBtnWithoutCalling(function() {
							if (buttonName == 'addNodes' || buttonName == 'insertAtEnd') {
								arrow('#decTempNLstNde', '#createNodeMethod', function() {
									callToCreateMethod();
								});
							} else if (buttonName == 'insertAtPosition') {	
								intIDec();
							} else if (buttonName == 'deleteAtEnd') {	//deleteAtEnd()
								if (lang == 'c') {
									iflstNxtIsEqNl();
								} else if (lang == 'cpp') {
									cppFstIsNull();
								}
							}  else if (buttonName == 'deleteAtPosition') { //deleteAtPosition
								decIVal();
							} else {	//traverseList
								if (lang == 'c') {
									arrow('#decTempNLstNde', '#printf3', function() {
										printData();
									});
								} else if (lang == 'cpp') {
									arrow('#decTempNLstNde', '#ifFstEqlToNl', function() {
										ifLstEqlToNl();
									});
								}
							}
						});
					});
				});
			});
		});
	});
}

function cppFstIsNull() {
	arrow('#decTempNLstNde', '#ifFstEqlToNl', function() {
		conditionChecking('#fstToNul', 'first', '==', 'NULL', $('#firstVal').text(), false, '', function() {
			var cond = $('#firstVal').text() == 'NULL';
			conditionMessage(cond, function() {
				nextBtnWithoutCalling(function() {
					if (cond) {
						$('.introjs-tooltip').addClass('hide');
						arrow('#ifFstEqlToNl', '#printf1', function() {
							$('#animationDiv').removeClass('z-index1000000');
							customIntroNxtStep("#consoleId", "printDeletionNotPossible");
						});
					} else {
						arrow('#ifFstEqlToNl', '#lstNxtEqNl', function() {
							iflstNxtIsEqNl();
						});
					}
				});
			});
		});
	});
}

function ifLstEqlToNl() {
	conditionChecking('#fstToNul', 'lastNode', '==', 'NULL', $('#lastNodeVal').text(), false, '', function() {
		var cond = $('#lastNodeVal').text() == 'NULL';
		conditionMessage(cond, function() {
			nextBtnWithoutCalling(function() {
				$('.introjs-tooltip').addClass('hide');
				if (cond) {
					arrow('#ifFstEqlToNl', '#printf1', function() {
						customIntroNxtStep('#consoleId', 'printEmptyInCpp');
					});
				} else {
					arrow('#ifFstEqlToNl', '#printf3', function() {
						customIntroNxtStep('#consoleId', 'prntngElem');
					});
				}
			});
		});
	});
}

function callToCreateMethod() {
	$('#animationDiv').removeClass('z-index1000000');
	text = 'Here, we are calling <span class="ct-code-b-yellow">createNode()</span> method and the return value is stored in'
			+ ' <span class="ct-code-b-yellow">temp</span>.';
	typing('.introjs-tooltiptext', text, function() {
		introNextSteps('#csllOperations');
		$('.introjs-nextbutton').show();
	});
}


function displayNodeDataAndNext() {
	$('.introjs-duplicate-nextbutton').remove();
	transferEffect('#mallocMemoryAllocation', '#node'+(nodeCount - 1), function() {
		nextBtnWithoutCalling(function() {
			var addressId;
			if (lang == 'c') {
				addressId = 'malloc()';
			} else if (lang == 'cpp') {
				addressId = 'new list';
			}
			text = 'Now, the <span class="ct-code-b-yellow">address</span> (i.e. <span class="ct-code-b-yellow">'
					+ $("#dataAddress" + (nodeCount - 1)).text() +')</span> of the memory allocated '
					+ 'by the <span class="ct-code-b-yellow">' + addressId + '</span> method is stored in <span class="ct-code-b-yellow">temp</span>.';
			typing('.introjs-tooltiptext' , text, function() {
				nextBtnWithoutCalling(function() {
					$('#tmpNdeVal').text($('#dataAddress' + (nodeCount - 1)).text());
					fromEffectWithTweenMax('#dataAddress' + (nodeCount - 1), '#tmpNdeVal', false, function() {
						$('#line16').remove();
						if ($('#insertAtPosition').hasClass('insert-position')) {
							svgAnimatingLineBottomToTop('#animationDiv', '#tmpNde div:first', '#dataDiv' + (nodeCount - 1), '#svgId', 'line16',
											'arrow');
						} else {
							svgAnimatingLineTopToBottom('#animationDiv', '#tmpNde', '#dataDiv' + (nodeCount - 1), '#svgId', 'line16', 'arrow');
						}
						introNextSteps('#asgnNlToTmpPrev');
						$('.introjs-nextbutton').show();
					});
				});
			});
		});
	});
}

function storeAddAndData() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#tempNodeVal').text($('#tmpNdeVal').text());
	fromEffectWithTweenMax('#tmpNdeVal', '#tempNodeVal', false, function() {
		if ($('#insertAtPosition').hasClass('insert-position')) {
			svgAnimatingLineBottomToTop("#animationDiv", "#tempNode div:first", "#dataDiv" + (nodeCount - 1), "#svgId", "line12", "arrow", function() {
				storeAddAndDataNext();
			});
		} else {
			svgAnimatingLineTopToBottom("#animationDiv", "#tempNode", "#dataDiv" + (nodeCount - 1), "#svgId", "line12", "arrow", function() {
				storeAddAndDataNext();
			});
		}
	});
}

function storeAddAndDataNext() {
	$("#tmpNde, #line16").remove();
	$("#csllOperations").addClass('opacity00').empty();
	appendNextBtn('storeXValText');
}

function storeXValText() {
	$('.introjs-duplicate-nextbutton').remove();
	text = 'Here, <span class="ct-code-b-yellow">x</span> value (i.e., <span class="ct-code-b-yellow">' + $("#xValInMain").text()
			+ '</span>) is stored in <span class="ct-code-b-yellow">data</span> member of <span class="ct-code-b-yellow">temp</span> node.'
	typing('.introjs-tooltiptext', text, function() {
		arrow("#createNodeMethod", "#streXValInTmpDt", function() {
			appendNextBtn('storeXValAnim');
		});
	});
}

function storeXValAnim() {
	$(".introjs-duplicate-nextbutton").remove();
	$("#data" + (nodeCount - 1)).text($("#xValInAdd").text());
	fromEffectWithTweenMax("#xValInAdd", "#data" + (nodeCount - 1), false, function() {
		nextBtnWithoutCalling(function() {
			if (buttonName == 'insertAtPosition') {
				arrow('#streXValInTmpDt', '#posEqlToOne', function() {
					ifPosIsOne();
				});
			} else {
				lastNodeCount = 1;
				arrow('#streXValInTmpDt', '#ifFrstEqlToNl', function() {
					ifConText($('#firstVal').text());
				});
			}
		});
	});
}

function ifConText(t) {
	$('.introjs-duplicate-nextbutton').remove();
	conditionChecking('#fstToNul', 'first', '==', 'NULL', t, false, '', function() {
		var cond = t == 'NULL';
		conditionMessage(cond, function() {
			if (buttonName == 'addNodes' || buttonName == 'insertAtEnd') {	//addNodes & insertAtEnd
				nextBtnWithoutCalling(function() {
					if (cond) {
						arrow('#ifFrstEqlToNl', '#streTmpToFrst', function() {
							streFrstInTmp();
						});
					} else {
						arrow('#ifFrstEqlToNl', '#whileLstNxtEqlToNl', function() {
							lastNodeCount = 1;
							elseConText();
						});
					}
				});
			} else if (buttonName == 'traverseList') {	//traverseList
				if (cond) {
					printfCount = 1;
					introNextSteps('#printf1', 'listEmpty');
				} else {
					printfCount = 2;
					introNextSteps('#printf2', 'displayElemnts');
				}
				$('.introjs-nextbutton').show();
			} else if (buttonName == 'insertAtPosition') {	//insertAtPosition
				nextBtnWithoutCalling(function() {
					if (cond) {
						streTmpToTmpNxtNprev();
					} else {
						arrow('#fstToNul', '#whileLstNxtEqlToNl', function() {
							//lastNodeCount = 2;
							lastNodeCount = 1;
							elseConText();
						});
					}
				});
			} else if (buttonName == 'deleteAtEnd' || buttonName == 'deleteAtPosition') {	// deleteAtEnd() & deleteAtPosition
				if (cond) {
					printfCount = 1;
					introNextSteps("#printf1", 'deletetionNotPossible', 'bottom');
				} else {
					if (buttonName == 'deleteAtEnd') {
						introNextSteps("#deleteAtEndNodeMethod",'callToMethod', 'bottom');
					} else {
						printfCount = 2
						introNextSteps("#printf2",'printEnterPosText', 'bottom');
					}
				}
				$('.introjs-nextbutton').show();
			}
		});
	});
}

function streFrstInTmp() {
	assignValfromOneVarToAnotherVar('temp', 'first', $('#tempNodeVal').text(), function() {
		if (lang == 'c') {
			storeValAndDrawLine('#tempNodeVal', '#firstNodeVal', 'line11', '#firstNode', function() {
				$('#animationDiv').removeClass('z-index1000000');
				if (buttonName == 'insertAtPosition') {	//insertAtPosition
					arrow('#streTmpToFrst', '#retnFrst', function() {
						retrnFrst('first', '#firstNodeVal');
					});
				} else {
					streFrstInTempNext();
				}
			});
		} else if (lang == 'cpp') {
			fadeInBounceEffectWithTimelineMax('#tempNodeVal', '#firstVal', false, function() {
				$('#line10').remove();
				if (buttonName == 'insertAtPosition' && $('.nodes').length > 1) {
					svgAnimatingLineRightToLeft('#animationDiv', '#firstDiv', '#prevDiv' + (nodeCount - 1), '#svgId', 'line10', 'arrow');
				} else {
					svgAnimatingLineRightToLeft('#animationDiv', '#firstDiv', '#prevDiv' + lastNodeCount, '#svgId', 'line10', 'arrow');
				}
				nextBtnWithoutCalling(function() {
					$('#animationDiv').removeClass('z-index1000000');
					if (buttonName == 'insertAtPosition') {	//insertAtPosition
						if ($('.nodes').length > 1) {
							introNextSteps('#animationDiv', 'streRetnFstVal', 'left');
						} else {
							introNextSteps('#buttonDiv');
						}
						introjs.nextStep();
					} else {
						streFrstInTempNext();
					}
				})
			});
		}
	});
}

function elseConText() {
	var fstId;
	if (lang == 'c') {
		fstId = 'firstNodeVal';
	} else if (lang == 'cpp') {
		fstId = 'firstVal';
	}
	var t = $('#next' + lastNodeCount).text().trim();
	conditionChecking('#lstNxtEqlToNl', 'lastNode -> next', '!=', 'first', t, true, $('#' + fstId).text(), function() {
		var con = t != $('#' + fstId).text();
		conditionMessage(con, function() {
			nextBtnWithoutCalling(function() {
				 if (buttonName == 'deleteAtEnd') {	//deleteAtEnd()
						if (con) {
							arrow('#whileLstNxtEqlToNl','#streLstToTmp', function() {
								assignValfromOneVarToAnotherVar('lastNode', 'temp', $("#next" + lastNodeCount).text(), function() {
									storeValAndDrawLine('#lastNodeVal', '#tempNodeVal', 'line12', '#tempNode', function() {
										arrow('#streLstToTmp','#strLstNxtToLst', function() {
											whileTrueConText();
										});
									});
								});
							});
						} else {
							streFrstInTempNext();
						}
				 } else {
					if (con) {
						arrow('#whileLstNxtEqlToNl','#strLstNxtToLst', function() {
							whileTrueConText();
						});
					} else {
						if (buttonName == 'addNodes' || buttonName == 'insertAtEnd') {
							arrow('#whileLstNxtEqlToNl','#streTmpToLstNxt', function() {
								whileFalseConText();
							});
						} else if (buttonName == 'insertAtPosition') {
							arrow('#whileLstNxtEqlToNl','#streTmpToLstNxt', function() {
								streLstNxtToTmp();
							});
						} else { // deleteAtPosition() 
							arrow('#whileLstNxtEqlToNl','#strefstNxtToLstNxt', function() {
								polyline = 3;
								streValFromOneToAnotherAndDrwCircleLine('first -> next ', 'lastNode -> next', '#next1', '#next' + lastNodeCount,
										true, '#nextDiv' + lastNodeCount, '#prevDiv2', 'pUpLine' + polyline, function() {
									nextBtnWithoutCalling(function() {
										arrow('#strefstNxtToLstNxt','#streLstToFstNxtPrev', function() {
											streValFromOneToAnotherAndDrwCircleLine('lastnode ', 'first -> next -> prev', '#lastNodeVal', '#prev2',
													false , '#prevDiv2', '#nextDiv' + $('.nodes').length, 'pDownLine' + polyline, function() {
												$('#line21').remove();
												nextBtnWithoutCalling(function() {
													arrow('#streLstToFstNxtPrev','#streFrstNxtToFrst', function() {
														polyline = 5;
														assignValfromOneVarToAnotherVar('first -> next ', 'first', $('#next1').text(), function() {
															fadeInBounceEffectWithTimelineMax('#next1', '#' + fstId, false, function() {
																//$('#line11, #line10').remove();
																if (lang == 'cpp') {
																	$(' #line10').remove();
																}
																if (lang == 'c') {
																	$('#line11').remove();
																	svgAnimatingLineTopToBottom("#animationDiv", "#firstNode", "#dataDiv2", "#svgId",
																			"line11", "arrow");
																	$('#line1').remove();
																}
																printfCount = 4;
																arrow('#streLstToFstNxtPrev','#printf4', function() {
																	printDeleteNode(1);
																}); 
															});
														});
													});
												});
											});
										});
									});
						        });
							});
						}
					}
				 }
			});
		});
	});	
}

function whileFalseConText() { //lastNode -> next = temp
	assignValfromOneVarToAnotherVar('temp', 'lastNode -> next', $('#tempNodeVal').text().trim(), function() {
		var id1, id2, lFlag;
		if ($('.nodes').length > 5) {	//arrow reverse after length 5
			id1 = 'prev';
			id2 = 'next';
			lFlag = false;
		} else {
			id1 = 'next';
			id2 = 'prev';
			lFlag = true;
		}
		drawDoubleLine('#tempNodeVal', '#next' + lastNodeCount, '#' + id1 + 'Div'+ (lastNodeCount), 'line' + lineCount,
				'#' + id2 + 'Div'+ (lastNodeCount + 1), lFlag, function() {
			$('#pUpLine1').remove();
			nextBtnWithoutCalling(function() {
				arrow('#streTmpToLstNxt', '#streLstToTmpPrev', function() {
					streLstIntmpPrev();
				});
			});
		});
	});
}

function streLstIntmpPrev() {
	assignValfromOneVarToAnotherVar('lastNode', 'temp -> prev', $('#lastNodeVal').text().trim(), function() {
		var id1, id2, lFlag;
		if ($('.nodes').length <= 5) {	//arrow reverse after length 5
			id1 = 'prev';
			id2 = 'next';
			lFlag = false;
		} else {
			id1 = 'next';
			id2 = 'prev';
			lFlag = true;
		}
		drawDoubleLine('#lastNodeVal', '#prev' + (lastNodeCount + 1), '#' + id1 + 'Div'+ (lastNodeCount + 1), 'line2' + lineCount,
					'#' + id2 + 'Div'+ (lastNodeCount), lFlag, function() {
			lineCount++;
			nextBtnWithoutCalling(function() {
				streFrstInTempNext();
			});
		});
	});
}

function streFrstInTempNext() {
	var polyLine, fstId, selector = '#streTmpToFrst';
	if (lang == 'c') {
		fstId = 'firstNodeVal';
	} else if (lang == 'cpp') {
		fstId = 'firstVal';
	}
	if (buttonName == 'addNodes' || buttonName == 'insertAtEnd') {
		polyLine = 1;
		if ($('.nodes').length != 1) {
			selector = '#streLstToTmpPrev'
			lastNodeCount += 1;
		}
	} else if (buttonName == 'deleteAtEnd') {
		selector = '#whileLstNxtEqlToNl'
		lastNodeCount -= 1;
		polyLine = 2
	}
	arrow(selector, '#streFstToTmpNext', function() {
		streValFromOneToAnotherAndDrwCircleLine('first', 'temp -> next', '#' + fstId, '#next' + lastNodeCount,
				true, '#nextDiv' + lastNodeCount, '#prevDiv1', 'pUpLine' + polyLine, function() {
			if (buttonName == 'deleteAtEnd') {
				$('#line' + lastNodeCount).remove();
			}
			nextBtnWithoutCalling(function() {
				arrow('#streFstToTmpNext', '#streTmpToFstPrev', function() {
					streValFromOneToAnotherAndDrwCircleLine('temp', 'first -> prev', '#tempNodeVal', '#prev1',
							false, '#prevDiv1', '#nextDiv' + lastNodeCount, 'pDownLine' + polyLine,  function() {
						nextBtnWithoutCalling(function() {
							if (buttonName == 'addNodes' || buttonName == 'insertAtEnd') {
								if (lang == 'c') {
									arrow('#streTmpToFstPrev', '#retnFrst', function() {
										retrnFrst('first', '#firstNodeVal');
									});
								} else if (lang == 'cpp') {
									$('.extraNode, #line11, #line12, #line13, .fa').remove();
									outPutCount++;
									printfCount = 2;
									if (buttonName == 'addNodes') {
										introNextSteps('#printf2', 'printText');
									} else {
										introNextSteps('#buttonDiv');
									}
									setTimeout(function() {
										$('#animationDiv').removeClass('z-index1000000');
										$("#csllMethodOperations, #xValDecInAdd, #xValInAdd").addClass('opacity00');
										$('#csllMethodOperations').empty();
										introjs.nextStep();
									}, 800);
								}
							} else if (buttonName == 'deleteAtEnd') {
								arrow('#streTmpToFstPrev', '#printf2', function() {
									printfCount = 2;
									lastNodeCount++;
									printDeleteNode(lastNodeCount);
								});
							}
						});
					});
				});
			});
		}); 
	});
}

function printData() {
	text = 'Here we are printing the <span class="ct-code-b-yellow">lastNode\'s data</span> (i.e.,'
			+ ' <span class="ct-code-b-yellow">' + $('#data' + lastNodeCount).text() + '</span>)';
	typing('.introjs-tooltiptext', text, function() {
		introNextSteps('#consoleId', 'prntngElem');
		$('.introjs-nextbutton').show();
	});
}

function whileTrueConText() { //lastNode = lastNode -> next
	assignValfromOneVarToAnotherVar('lastNode -> next', 'lastNode', $("#next" + lastNodeCount).text(), function() {
		$('#lastNodeVal').parent().effect("highlight", {color : 'blue'}, 400);
		svgAnimatingLineTopToBottom("#animationDiv", "#lastNode", "#dataDiv"+ lastNodeCount, "#svgId", "line31", "arrow", function() {
			$('#line31').remove();
			$('#next' + lastNodeCount).parent().effect("highlight", {color : 'blue'}, 400);
			fadeInBounceEffectWithTimelineMax('#next' + lastNodeCount, '#lastNodeVal', false, function() {
				lastNodeCount++;
				$('#line13').remove();
				if ((lang == 'c' && $('#lastNodeVal').text().trim() == $('#firstNodeVal').text()) || 
						(lang == 'cpp' && $('#lastNodeVal').text().trim() == $('#firstVal').text())) {
					svgAnimatingLineTopToBottom("#animationDiv", "#lastNode", "#dataDiv1", "#svgId", "line13", "arrow");
				} else {
					svgAnimatingLineTopToBottom("#animationDiv", "#lastNode", "#dataDiv" + lastNodeCount, "#svgId", "line13", "arrow");
				}
				nextBtnWithoutCalling(function() {
					if (buttonName == 'traverseList') {	//traverseList
						arrow('#lstNxtToLst', '#wleLstEqlToFst', function() {
							whileCondInTraverse();
						});
					} else if (!$('#insertAtPosition').hasClass('insert-position') && buttonName == 'insertAtPosition') {	//insertAtPosition
						arrow('#strLstNxtToLst1', '#frLoop', function() {
							incrementIValue();
						});
					} else { 	//addNodes, insertAtEnd & deleteAtEnd
						arrow('#strLstNxtToLst','#whileLstNxtEqlToNl', function() {
							elseConText();
						});
					}
				});
			});
		}); 
	});
}

function whileCondInTraverse() {	//while(lastNode != first)
	var fstId;
	if (lang == 'c') {
		fstId = 'firstNodeVal';
	} else if (lang == 'cpp') {
		fstId = 'firstVal';
	}
	$('.introjs-duplicate-nextbutton').remove();
	var t = $('#lastNodeVal').text();
	conditionChecking('#lstEqlToFst', 'lastNode', '!=', 'first', t, true, $('#' + fstId).text(), function() {
		var con = t != $('#' + fstId).text();
		conditionMessage(con, function() {
			$('#animationDiv').removeClass('z-index1000000');
			if (con) {
				nextBtnWithoutCalling(function() {
					arrow('#wleLstEqlToFst', '#printf3', function() {
						printData();
					});
				});
			} else {
				introNextSteps('#buttonDiv');
				$('.introjs-nextbutton').show();
			}
		});
	});
}

function intIDec() {	//insertAtPosition
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#decTempNLstNde', '#decIntI', function() {
		text = 'Here we declared an int variable <span class="ct-code-b-yellow">i</span>';
		typing('.introjs-tooltiptext', text, function() {
			nextBtnWithoutCalling(function() {
				$('#countNme').text('i');
				transferEffect('#decIntI', '#countValDec', function() {
					nextBtnWithoutCalling(function() {
						if (lang == 'c') {
							arrow('#decIntI', '#frLoop', function() {
								cIInitAnim();
							});
						} else if (lang == 'cpp') {
							cppIfCondAnim();
						}
					});
				});
			});
		});
	});
}

function cIInitAnim() {
	text = '<span class="ct-code-b-yellow">i</span> is initialized with <span class="ct-code-b-yellow">1</span>.';
	typing('.introjs-tooltiptext', text, function() {
		transferEffect('#iInit', '#decCountVal', function() {
			$('#countVal').text('1');
			iVal = 1;
			zoomInEffect('#countVal', function() {
				nextBtnWithoutCalling(function() {
					forLoopChecking();
				});
			});
		});
	});
}

function cppIfCondAnim() {
	arrow('#decIntI', '#posIfCond', function() {
		var t = $('#posVal').text();
		var cond = t <= 0 || (t > 1 && $('#firstVal').text() == 'NULL');
		insrtPosIfCondAnim(t, cond, function() {
			nextBtnWithoutCalling(function() {
				if (cond) {
					$('#animationDiv').removeClass('z-index1000000');
					$('.introjs-tooltip').addClass('hide');
					arrow('#posIfCond', '#printf3', function() {
						setTimeout(function() {
							introNextSteps('#consoleId', 'noSuchPosition');
							introjs.nextStep();
						}, 800);
					});
				} else {
					arrow('#posIfCond', '#frLoop', function() {
						cIInitAnim();
					});
				}
			});
		});
	});
}

function forLoopChecking() {	//insertAtPosition
	var t = parseInt($('#posVal').text()) - 1;
	 text = 'Now check the condition : <br/>&nbsp;<span id="ifCondition" class="opacity00 ct-code-b-yellow position">'
			+ '<span id="first" class="position">i</span> < <span id="second" class="position">(<span id="scndPos" class="position">pos</span> - 1)'
			+ '</span></span>&nbsp;&nbsp;<span class="position" id="trueOrFalse"></span><div id="appendSpan"></div>';
	$('.introjs-tooltiptext').text("").append(text);
	$('.introjs-tooltip').removeClass('hide');
	fromEffectWithTweenMax('#frCond', '#ifCondition', true, function() {
		nextBtnWithoutCalling(function() {
			flipEffectWithTweenMax('#first', iVal, function() {
				flipEffectWithTweenMax('#scndPos', $('#posVal').text(), function() {
					flipEffectWithTweenMax('#second', t, function() {
						var cond = iVal < t;
						conditionMessage(cond, function() {
							nextBtnWithoutCalling(function() {
								if (cond) {
									arrow('#frLoop', '#ifLstNxtEqlToFst', function() {
										checkingLstNxtEqlFst();
									});
								} else {
									arrow('#frLoop', '#createNodeMethod', function() {
										callToCreateMethod();
									});
								}
							});
						});
					});
				});
			});
		});
	});
}

function incrementIValue() {
	$(".introjs-duplicate-nextbutton").remove();
	if (buttonName == 'deleteAtPosition') {
		arrow("#tempToTmpNxt", "#forLoop", function() {
			iIncrementText();
		});
	} else {
		iIncrementText();
	}
}

function iIncrementText() {	//insertAtPosition
	iVal++;
	text = '<span class="ct-code-b-yellow">i</span> value is incremented by one (i.e., <span class="ct-code-b-yellow">' + iVal + '</span>)';
	typing('.introjs-tooltiptext', text, function() {
		nextBtnWithoutCalling(function() {
			transferEffect('#iInc', '#decCountVal', function() {
				flipEffectWithTweenMax('#countVal', iVal, function() {
					nextBtnWithoutCalling(function() {
						if (buttonName == 'insertAtPosition') {
							forLoopChecking();
						} else {
							iConText();
						}
					});
				});
			});
		});
	});
}

function streTmpToTmpNxtNprev() {	//insertAtPosition 	//temp -> next = temp; && temp -> prev = temp;
	arrow('#fstToNul', '#tmpToTmpNxt', function() {
		streValFromOneToAnotherAndDrwCircleLine('temp', 'temp -> next', '#tempNodeVal', '#next1', true, '#nextDiv1', '#prevDiv1', 'pUpLine1', function() {
			nextBtnWithoutCalling(function() {
				arrow('#tmpToTmpNxt', '#tmpToTmpPrev', function() {
					streValFromOneToAnotherAndDrwCircleLine('temp', 'temp -> prev', '#tempNodeVal', '#prev1', false, '#prevDiv1', '#nextDiv1', 'pDownLine1',
							function() {
						nextBtnWithoutCalling(function() {
							arrow('#tmpToTmpPrev', '#streTmpToFrst', function() {
								streFrstInTmp();
							});
						});
					});
				});
			});
		});
	});
}

function ifPosIsOne() {	//insertAtPosition	if( pos == 1)
	var t = $('#posVal').text();
	conditionChecking('#posEqlToOne', 'pos', '==', '1', t, false, '', function() {
		var cond = t == 1;
		conditionMessage(cond, function() {
			nextBtnWithoutCalling(function() {
				if (cond) {	//if(first == Null
					arrow('#posEqlToOne', '#fstToNul', function() {
						if (lang == 'c') {
							ifConText($('#firstNodeVal').text());
						} else if (lang == 'cpp') {
							ifConText($('#firstVal').text());
						}
					});
				} else {	//temp -> prev = lastNode
					arrow('#posEqlToOne', '#lstNdeToTmpPrev', function() {
						tmpPrevToLstNode();
					});
				}
			});
		});
	});
}

function tmpPrevToLstNode() {	//insertAtPosition
	assignValNDrawLinesWithoutCircle('lastNode', 'temp -> prev', '#lastNodeVal', '#prev' + (nodeCount - 1), '#prevDiv' + (nodeCount - 1),
				'#nextDiv' + lastNodeCount, 'line' + lineCount, true, function() {
		if ($('#posVal').text() == 1) {
			appendNextBtn('fstToTmpNxt');
		} else {
			appendNextBtn('streLstNxtToTmpNxt');
		}
	});
}

function streLstNxtToTmpNxt() {	//insertAtPosition	//temp -> next = lastNode -> next
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#lstNdeToTmpPrev', '#lstNxtToTmpNxt', function() {
		var val1, val2;
		if ($('#insertAtPosition').hasClass('insert-endpos')) {
			val1 = lastNodeCount + 1;
			val2 = 1;
		} else {
			val1 = nodeCount - 1;
			val2 = lastNodeCount + 1;
		}
		assignValNDrawLinesWithoutCircle('lastNode -> next', 'temp -> next', '#next' + lastNodeCount, '#next' + (nodeCount - 1),
				 '#nextDiv' + val1, '#prevDiv' + val2, 'line45', true, function() {
			nextBtnWithoutCalling(function() {
				arrow('#lstNxtToTmpNxt', '#tmpToLstNxt', function() {
					streLstNxtToTmp();
				});
			});
		});
	});
}

function fstToTmpNxt() {	//insertAtPosition	//temp -> next = first & first -> prev = temp
	$('.introjs-duplicate-nextbutton').remove();
	var fstId;
	if (lang == 'c') {
		fstId = 'firstNodeVal';
	} else if (lang == 'cpp') {
		fstId = 'firstVal';
	}
	arrow('#streLstToTmpPrev', '#streFstToTmpNext', function() {
		assignValNDrawLinesWithoutCircle('first', 'temp -> next', '#' + fstId, '#next' + (nodeCount - 1), '#nextDiv' + (nodeCount - 1), '#prevDiv1',
					'line45', true, function() {
			nextBtnWithoutCalling(function() {
				arrow('#streFstToTmpNext', '#streTmpToFstPrev', function() {	//first -> prev = temp
					assignValNDrawLinesWithoutCircle('temp', 'first -> prev', '#tempNodeVal', '#prev1', '#prevDiv1', '#nextDiv', 
							'line46', false, function() {
						$('#pDownLine1').remove();
						nextBtnWithoutCalling(function() {
							arrow('#streTmpToFstPrev', '#streTmpToFrst', function() {
								streFrstInTmp();
							});
						});
					});
				});
			})
		});
	});
}

function streLstNxtToTmp() {	//insertAtPosition	//lastNode -> next = temp
	$('.introjs-duplicate-nextbutton').remove();
	assignValNDrawLinesWithoutCircle('temp', 'lastNode -> next', '#tempNodeVal', '#next' + lastNodeCount, '#nextDiv' + lastNodeCount, '#prevDiv',
			'line2' + lineCount, false, function() {
		if ($('#next' + $('#dynamicNodes .nodes').length).text() != $('#firstVal').text()) {
			$('#pUpLine1').remove();
		} else {
			$('#line' + (parseInt($('#posVal').text()) - 1)).remove();
		}
		lineCount++;
		nextBtnWithoutCalling(function() {
			if ($('#posVal').text() == 1) {	
				arrow('#streTmpToLstNxt', '#streLstToTmpPrev', function() {
					tmpPrevToLstNode();	
				});
			} else {
				streLstPrevToTmp();
			}
		});
	});
}

function streLstPrevToTmp() {	//insertAtPosition	//temp -> next -> prev = temp
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#tmpToLstNxt', '#tmpTotmpNxtPrev', function() {
		var val;
		if ($('#insertAtPosition').hasClass('insert-endpos')) {
			val = 1;
		} else {
			val = lastNodeCount + 1;
		}
		assignValNDrawLinesWithoutCircle('temp', 'temp -> next -> prev', '#tempNodeVal', '#prev' + val, '#prevDiv' + val, '#nextDiv', 'line46',
					false, function() {
			if ($('#insertAtPosition').hasClass('insert-endpos')) {
				$('#pDownLine1').remove();
			} else {
				$('#line2' + (parseInt($('#posVal').text()) - 1)).remove();
			}
			nextBtnWithoutCalling(function() {
				if (lang == 'c') {
					arrow('#tmpTotmpNxtPrev', '#retnFrst', function() {
						retrnFrst('first', '#firstNodeVal');
					});
				} else if (lang == 'cpp') {
					$('#animationDiv').removeClass('z-index1000000');
					introNextSteps('#animationDiv', 'streRetnFstVal', 'left');
					introjs.nextStep();
				}
			});
		});
	});
}

//insertAtPosition						//insertAtPosition (pos != 1)
function assignValNDrawLinesWithoutCircle(sel1, sel2, selector, idNme1, idNme2, idNme3, lineId, flag, callBackFunction) {
	assignValfromOneVarToAnotherVar(sel1, sel2, $(selector).text(), function() {
		fadeInBounceEffectWithTimelineMax(selector, idNme1, false, function() {
			if (flag) {
				svgAnimatingLineTopToBottom('#animationDiv', idNme2, idNme3, '#svgId', lineId, 'arrow', function() {
					if (typeof callBackFunction === "function") {
						callBackFunction();
					}
				});
			} else {
				lineFlag = true;
				svgAnimatingLineBottomToTop('#animationDiv', idNme2, idNme3 + (nodeCount - 1), '#svgId', lineId, 'arrow', function() {
					lineFlag = false;
					if (typeof callBackFunction === "function") {
						callBackFunction();
					}
				});
			}
		});
	});
}

function streValFromOneToAnotherAndDrwCircleLine(sel1Name, sel2Name, selectr1, selectr2, lineFlag, selectr3, selectr4, line, callBackFunction) {
	$('#animationDiv').addClass('z-index1000000');
	assignValfromOneVarToAnotherVar(sel1Name, sel2Name, $(selectr1).text(), function() {
		fadeInBounceEffectWithTimelineMax(selectr1, selectr2, false, function() {
			setTimeout(function() {
				if (lineFlag) {
					  svgCurveUpper(selectr3,  selectr4, line, function() {
						  if (typeof callBackFunction === "function") {
							  callBackFunction();
						  }
					  });
				} else {
					svgCurveDown(selectr3,  selectr4, line, function() {
						if (typeof callBackFunction === "function") {
							callBackFunction();
						}
					});
				}
			},800);
		});
	});
}

function checkingLstNxtEqlFst() {	//insertAtPosition
	var t2;
	var t1 = $('#next' + lastNodeCount).text();
	if (lang == 'c') {
		t2 = $('#firstNodeVal').text();
	} else if (lang == 'cpp') {
		t2 = $('#firstVal').text();
	}
	conditionChecking('#ifLstNxtEqlToFst', 'lastNode -> next', '==', 'first', t1, true, t2, function() {
		var cond = t1 == t2;
		conditionMessage(cond, function() {
			nextBtnWithoutCalling(function() {
				if (cond) {
					$('#animationDiv').removeClass('z-index1000000');
					$('.introjs-tooltip').addClass('hide');
					arrow('#ifLstNxtEqlToFst', '#printf4', function() {
						$('#printf4').effect('highlight', {color: 'blue'}, 400, function() {
							customIntroNxtStep('#consoleId', 'noSuchPosition');
						});
					});
				} else {
					arrow('#ifLstNxtEqlToFst', '#strLstNxtToLst1', function() {
						whileTrueConText();
					});
				}
			});
		});
	});
}

function streNullInSpecifiedNode(selector1, lineNum, callBackFunction) { //deleteAtEnd first = NULL
	$('.introjs-duplicate-nextbutton').remove();
	$(selector1).parent().effect("highlight", {color : 'blue'}, 400);
	$(selector1).text('NULL').addClass('opacity00');
	zoomInEffect(selector1, function() {
		$(lineNum).remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

//var dec & initval
function varDecNInit(fromId, toId, id1, id2, callBackFunction) {
	transferEffect(fromId, toId, function() {
		$(id1).text($(id2).text());
		fromEffectWithTweenMax(id2, id1, false, function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		})
	});
}

function typing(typingId, typingContent, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval" : '5',
		"cursor_color" : 'white'
	}, function() {
		typingCallbackFunction();
		$('.introjs-tooltip').show();
	});
}

function setTimeToIntroGoNextStep() {
	setTimeout(function() {
		introjs.nextStep();
	}, 1000);
}

function introNextSteps(stepName, animatedStep, position) {
	$('.introjs-disabled').removeClass('introjs-disabled');
	var options = {
			element :stepName,
			intro :'',
			position : position,
			tooltipClass : "hide",
			animateStep: animatedStep
	}
	introjs.insertOption(introjs._currentStep + 1, options);
	introjs._options.steps.push({"element" : stepName});
}

function customIntroNxtStep(stepName, animatedStep, position) {
	introNextSteps(stepName, animatedStep, position);
	setTimeToIntroGoNextStep();
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass('z-index1000000').effect( "highlight",{color: 'blue'}, 500, function() {
		$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 800 , function() {
			$(selector1).removeClass('z-index1000000');
			$(selector2).removeClass('opacity00');
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	});
}

function flipEffectWithTweenMax(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.3, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.3, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function zoomInEffect(selector1, callBackFunction) {
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500, function() {
		$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			$(selector1).removeClass("animated zoomIn");
			$(selector1).removeAttr('style');
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	});
}

function buttonCorrespondingText(nextStepName) {
	$('.displayCode, #consoleEnter').addClass('opacity00').empty();
	buttonName = nextStepName;
	introNextSteps("#inMain", nextStepName, "right");
	$('.introjs-tooltip').css({'min-width' : '350px'})
	introjs.nextStep();
}

function nextBtnWithoutCalling(callBackFunction) {
	$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
	$('.introjs-duplicate-nextbutton').click(function() {
		$(this).remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function appendNextBtn(btnNme) {
	$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton" onclick=' + btnNme + '()>Next &#8594;</a>');
}

function assignValfromOneVarToAnotherVar(selector1, selector2, val, callBackFunction) { //assign value from one var to another var
	$('.introjs-tooltip').removeClass('hide');
	text = 'The <span class="ct-code-b-yellow">'+ selector1 +'</span> value <span class="ct-code-b-yellow">'
			+ val + '</span> is stored in <span class="ct-code-b-yellow">'+ selector2 +'</span>.';
	typing('.introjs-tooltiptext' , text, function() {
		nextBtnWithoutCalling(function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	});
}

//conditionChecking & conditionMessage are if condition functions
function conditionChecking(fromId, text1, cond, text2, val1, flag, val2, callBackFunction) {
	text = 'Now check the condition : <br/>&nbsp;<span id="ifCondition" class="opacity00 ct-code-b-yellow position">'
			+ '<span id="first" class="position">' + text1 +'</span> ' + cond + ' <span id="second" class="position">' + text2 + '</span></span>'
			+ '&nbsp;&nbsp;<span class="position" id="trueOrFalse"></span><div id="appendSpan"></div>';
	$('.introjs-tooltiptext').text("").append(text);
	$('.introjs-tooltip').removeClass('hide');
	fromEffectWithTweenMax(fromId, '#ifCondition', true, function() {
		nextBtnWithoutCalling(function() {
			flipEffectWithTweenMax('#first', val1, function() {
				if (flag) {
					flipEffectWithTweenMax('#second', val2, function() {
						if (typeof callBackFunction === "function") {
							callBackFunction();
						}
					});
				} else {
					if (typeof callBackFunction === "function") {
						callBackFunction();
					}
				}
			});
		});
	});
}

function conditionMessage(value, callBackFunction) {
	if (value) {
		$("#trueOrFalse").text("====> True").addClass("green-color");
	} else {
		$("#trueOrFalse").text("====> False").addClass("red-color");
	}
	text = 'The condition evaluates to <span class="ct-code-b-yellow">'+ value + '</span>.';
	typing('#appendSpan', text, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function callingMethodWithFrstNVar(val, selector) {	//first & variable in method calling text
	$('.introjs-tooltip').removeClass('hide');
	if (lang == 'c') {
		text1 = 'Here, we are calling <span class="ct-code-b-yellow">' + buttonName + '()</span> method and passing <span class="ct-code-b-yellow">'
					+ 'first</span> value (i.e., <span class="ct-code-b-yellow">' + $('#firstVal').text() + '</span>) ';
		text2 = ', <span class="ct-code-b-yellow">pos</span> value (i.e., <span class="ct-code-b-yellow">' + $('#posVal').text() + '</span>) '
		text3 = 'and <span class="ct-code-b-yellow">' + val + '</span> value (i.e., <span class="ct-code-b-yellow"> ' + $(selector).text() 
				+ '</span>) as arguments and the return value is stored in <span class="ct-code-b-yellow">first</span>.';
	} else if (lang == 'cpp') {
		text1 = 'Here, we are calling <span class="ct-code-b-yellow">' + buttonName + '()</span> method and passing <span class="ct-code-b-yellow">'
					+ val + '</span> value (i.e., <span class="ct-code-b-yellow"> ' + $(selector).text() + '</span>) as an argument.';
		text2 = text3 = '';
	}
	if (buttonName == 'insertAtPosition') {
		if (lang == 'c') {
			text = text1 + text2 + text3;
		} else if (lang == 'cpp') {
			text = 'Here, we are calling <span class="ct-code-b-yellow">' + buttonName + '()</span> method and passing'
					+ ' <span class="ct-code-b-yellow">pos</span> value (i.e., <span class="ct-code-b-yellow">' + $('#posVal').text() + '</span>) and'
					+ ' <span class="ct-code-b-yellow">' + val + '</span> value (i.e., <span class="ct-code-b-yellow"> ' 
					+ $(selector).text() + '</span>) as arguments.';
		}
	} else {
		text = text1 + text3;
	}
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}

function callingMethodWithFrst() {	// method declare first node when call the method
	$('.introjs-tooltip').removeClass('hide');
	if (lang == 'c') {
		text1 = 'Here, we are calling <span class="ct-code-b-yellow">' + buttonName + '()</span> method and passing <span class="ct-code-b-yellow">'
				+ 'first</span> value (i.e., <span class="ct-code-b-yellow">' + $('#firstVal').text() + '</span>) as an argument'
		text2 = ' and the return value is stored in <span class="ct-code-b-yellow">first</span>.';
	} else if (lang == 'cpp') {
		text1 = 'Here, we are calling <span class="ct-code-b-yellow">' + buttonName + '()</span> method.';
		text2 = '';
	}
	if (buttonName == 'traverseList') {
		text = text1 + '.';
	} else {
		text = text1 + text2;
	}
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}

function printDeleteNode(delNodeNum) { //print delete node in deleteAtEnd()
	text = 'Here we have to print the deleted node <span class="ct-code-b-yellow">' + $("#data" + delNodeNum).text() +'</span>.'
	typing('.introjs-tooltiptext', text, function() {
		introNextSteps('#consoleId', 'printDelNode');
		$('.introjs-nextbutton').show();
	});
}

function highlightNFlip(id, val, callBackFunction) {
	$(id).effect('highlight', {color: 'yellow'}, 300, function() {
		flipEffectWithTweenMax(id, val, function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		})
	});
}

function NullToSpecificNode(selector1, callBackFunction) { //deleteAtEnd
	text = 'Here, We are assigning a <span class="ct-code-b-yellow">NULL</span> value to <span class="ct-code-b-yellow">' + selector1 + '</span> node.'; 
	typing('.introjs-tooltiptext', text, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function retrnFrst(text, selector) {
	$('#animationDiv').removeClass('z-index1000000');
	if (buttonName == 'addNodes' || buttonName == 'insertAtEnd') {
		introNextSteps('#' + buttonName + 'Method', 'retnFstVal');
	} else if (buttonName == 'insertAtPosition') {
		introNextSteps('#insertAtPositionMethod', 'retnFstVal');
	} else if (buttonName == 'deleteAtEnd') {
		introNextSteps("#" + buttonName + "NodeMethod", 'retnFstVal', 'bottom');
	}
	$('.introjs-tooltip').removeClass('hide');
	text = 'The <span class="ct-code-b-yellow">' + buttonName + '()</span> method returns the <span class="ct-code-b-yellow">' + text
				+ '</span> value (i.e., <span class="ct-code-b-yellow">' + $(selector).text() +'</span>).';
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}

function storeValAndDrawLine(selector1, selector2, lineNum, selector3, callBackFunction) {
	fadeInBounceEffectWithTimelineMax(selector1, selector2, false, function() {
		$('#'+lineNum).remove();
		if (buttonName == 'insertAtPosition' && $('.nodes').length > 1) {
			svgAnimatingLineBottomToTop('#animationDiv', selector3, '#dataDiv' + (nodeCount - 1), '#svgId', lineNum, 'arrow');
		} else {
			svgAnimatingLineTopToBottom('#animationDiv', selector3, '#dataDiv' + lastNodeCount, '#svgId', lineNum, 'arrow');
		}
		nextBtnWithoutCalling(function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	});
}

function movingNodes(val, nodeId, callBackFunction) {	//All nodes move except nodeId
	if (val <= $('#dynamicNodes .nodes').length) {
		var lVal, t;
		if (val <= 4) {
			lVal = '120px';
		} else {
			lVal = '-120px';
		}
		TweenMax.to($('#dynamicNodes .nodes').not(nodeId).eq(val - 1), 1, {left: lVal, onComplete: function () {
	        $(nodeId).removeClass('hide');
	        $.each($('#dynamicNodes .nodes').not(nodeId), function (idx) {
	        	var arr = [5, 6, 7, 8];
	        	t = $('#dynamicNodes .nodes').length;
	        	if (t > 4) {
	        		for (var i = 0; i < (t - 4); i++)  {
	        			$('#node' + arr[i]).addClass('pull-right');
	        		}
	        	}
	        	$(this).css('left', '0');
	        });
		}});
		val++;
		movingNodes(val, nodeId, callBackFunction);
	} else {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}
}

function orderingNodes(val) {	//insertAtPosition node moving
	var t = '<div class="opacity00 col-xs-2 nodes hide position" id="node' + (nodeCount - 1)
			+ '" style="top: 0px; width: auto;">' + $('#posNodes > #node' + (nodeCount - 1)).html() + '</div>'
	if ($('#posVal').text() == 1) {
		nodeCount = 2;
		$('#posNodes .nodes').attr('id', 'node1');
		$('#dynamicNodes .nodes:first').before(t);
	} else if ($('#insertAtPosition').hasClass('insert-endpos')) {
		$('#dynamicNodes .nodes:last').after(t);
	} else if ($('#insertAtPosition').hasClass('insert-middle')) {
		nodeCount = parseInt($('#posVal').text()) + 1;
		$('#posNodes .nodes').attr('id', 'node' + (nodeCount - 1));
		$('#dynamicNodes #node' + parseInt($('#posVal').text())).before(t);
	}
	changeIdsBasedOnCond(1, function() {
		$('line, polyline').remove();
		if ($('#insertAtPosition').hasClass('insert-endpos') && $('.nodes').lenght > 3) {
			$('#node' + val).removeClass("hide");
			positioningNodes();
		} else {
			movingNodes((nodeCount - 1), '#node' + (nodeCount - 1), function() {
				setTimeout(function() {
					positioningNodes();
				}, 1200);
			});
		}
	});
}

function positioningNodes(callBackFunction) {
	var l1 = $("#posNodes #node" + (nodeCount - 1)).offset();
	var l2 = $("#dynamicNodes #node" + (nodeCount - 1)).offset();
	var topLength = l2.top - l1.top;
	var leftLength = l2.left - l1.left;
	TweenLite.to("#posNodes > #node" + (nodeCount - 1), 0.5, {top : topLength, left : leftLength, onComplete: function() {
		$("#dynamicNodes #node" + (nodeCount - 1)).html($("#posNodes > #node" + (nodeCount - 1)).html()).removeClass("opacity00");
		$("#posNodes, .extraNode").remove();
		introjs.refresh();
		changeIdsBasedOnCond(1, function() {
			regenerateArrows();
			introNextSteps('#buttonDiv');
			$('.introjs-nextbutton').show();
		});
	}});
}
function addNegativeValuEvent(selector) {
	$(selector).on('keydown keyup', function(e) {
		$('.error-text').remove();
		var max = $(this).attr('maxlength');
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if ($(this).val() == '-1') {
			$('.introjs-nextbutton').show();
			$('input').attr('disabled', true);
		} else {
			$('.introjs-nextbutton').hide();
		}
		if ($(this).val().length < 1 && (e.keyCode == 109 || e.keyCode == 189 || e.keyCode == 173)) {
			return;
		}
		if ($(this).val().length >= 1 && (e.keyCode == 49 || e.keyCode == 97))  {
			return;
		} else {
			$('.introjs-tooltiptext').append('<div class="error-text">Enter -1 only.</div>');
			e.preventDefault();
		}
	});
}

function events(selector) {
	$(selector).on('keydown', function(e) {
		$('.error-text').remove();
		var max = $(this).attr('maxlength');
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if (e.keyCode == 109 || e.keyCode == 189 || e.keyCode == 173) {
			if ($(this).val().length < 1) {	
				return;
			} else {
				e.preventDefault();
			}
		}
		if (((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) || (e.keyCode == 13 || e.keyCode ==9)){
			e.preventDefault();
		}
		if ($(this).val().length > max - 1) {
			$('.introjs-tooltiptext').append('<div class="error-text">Please restrict the maximum length to 3 digits only.</div>')
			e.preventDefault();
		}
	});
	$(selector).on('keyup', function(e) {
		$('.error-text').remove();
		var firstCon = $(this).val().length > 0 && (!$(this).val().startsWith('-'));
		var secondCon = $(this).val().length >= 2 && $(this).val().indexOf('-', $(this).val().indexOf('-') + 1) == -1 
		if (firstCon || secondCon) {
			$('.introjs-nextbutton').show();
			//if ($('.introjs-nextbutton[style="display: inline-block;"]').length == 1 && e.keyCode == 13) {
			if (e.keyCode == 13) {
				$(selector).attr('disabled', true);
				introjs.nextStep();
			}
		} else {
			$('.introjs-tooltiptext').append('<div class="error-text">Please enter any integer.</div>');
			$('.introjs-nextbutton').hide();
		}
	});
}

function arrow(fromId, toId, callBackFunction) {
	$('.arrow').remove();
	$('#csllMethodOperations').append("<i class='fa fa-arrow-right arrow animated' style='position: absolute; z-index: 10000000;'></i>");
	var l = $(fromId).offset();
	$('.arrow').offset({
		'top': l.top,
		'left': l.left - ($('.arrow').outerWidth())
	});
	var l1 = $(fromId).offset();
	var l2 = $(toId).offset();
	var topLength = parseInt($('.arrow').css('top')) + (l2.top - l1.top);
	var leftLength = parseInt($('.arrow').css('left')) + (l2.left - l1.left);
	TweenMax.to('.arrow', 0.5, { top : topLength, left : leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId, curve) {
	var marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
	marker.setAttribute('id', svgMarkerId);
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$(svgId).append(marker);
	var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	path.setAttribute('d', 'M0,0 L5,2.5 L0,5 Z');
	$('#' + svgMarkerId).append(path);
}

function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2) {
	var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	line.setAttribute('id', svgLineId);
	line.setAttribute('class', 'svg-line lines');
	line.setAttribute('x1', x1);
	line.setAttribute('y1', y1);
	line.setAttribute('x2', x2);
	line.setAttribute('y2', y2);
	line.style.markerEnd = 'url("#' + markerId + '")';
	$(svgId).append(line);
}

function svgAnimatingLineRightToLeft(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var x2 = $(selector2).offset().left - parentOffset.left;
	if (lineFlag) {
		var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 1.6;
		var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 1.6;
	} else {
		var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
		var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	}
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineLeftToRight(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	if (lineFlag) {
		var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 3;
		var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 3;
	} else {
		var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
		var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	}
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineBottomToTop(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
	var y2 = $(selector2).offset().top - parentOffset.top;
		if (lineFlag) {
			var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 5;
			var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 5;
		} else {
			var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
			var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
		}
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineTopToBottom(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function fromEffectWithTweenMax(selector1, selector2, flag, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	if (flag) {
		$('body').append("<span id='dummy' style='position: relative; z-index: 9999999; color: red;'>" + $(selector2).text() + "</span>");
		$('#dummy').offset({'top' : l2.top, 'left' : l2.left});
	}
	$(selector2).removeClass('opacity00');
	if (!flag) {
		$(selector1).addClass('z-index1000000').parent().effect( 'highlight',{color: 'blue'}, 500);
	} else {
		$(selector1).addClass('z-index1000000').effect( 'highlight',{color: 'blue'}, 500);
	}
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		$(selector2).removeAttr('style');
		$(selector1).removeClass('z-index1000000');
		$('#dummy').remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function fadeInBounceEffectWithTimelineMax(selector1, selector2, flag, callBackFunction) {
	var timelineMax = new TimelineMax();
	var val;
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500);
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		$("#animationDiv").append("<span id='dummy' class='ct-green-color ct-fonts' style='position: relative; z-index: 9999999;'>" 
			+ $(selector2).text() + "</span>");
		$('#dummy').offset({"top": l2.top, "left": l2.left});
    if (flag) {
			val = $(selector2).text($(selector1).val());
	} else {
			val = $(selector2).text($(selector1).text());
	}
    TweenLite.from($(selector2), 3, { ease:  Bounce.easeOut, top:l1.top-l2.top, left :l1.left-l2.left, delay :0.5});
	    TweenLite.to($("#dummy"), 0.8, { ease: Sine.easeOut, left:-150 , delay :1.8, opacity:0 , onComplete: function() {
	    	introjs.refresh();
	    	$("#dummy").remove();
	    	if (typeof callBackFunction === "function") {
				callBackFunction();
			}
	    }});
}

function fadeInFromEffectWithTimelineMax(selector1, selector2, flag, callBackFunction) {
	var timelineMax = new TimelineMax();
	if (!flag) {
		$(selector1).effect( "highlight",{color: 'blue'}, 500);
	} else {
		$(selector1).parent().effect( "highlight",{color: 'blue'}, 500);
	}
	$(selector1).removeClass('z-index1000000');
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$("#animationDiv").append("<span id='dummy' style='position: relative;color: black;'>" + $(selector2).text() + "</span>");
	$('#dummy').offset({
		"top": l2.top, 
		"left": l2.left
	});
	if(!flag) {
		$(selector2).text($(selector1).val());
	} else {
		$(selector2).text($(selector1).text());
	}
	timelineMax.from(selector2, 1, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}}).to('#dummy', 1, {opacity: 0, onComplete: function() {
		$("#animationDiv").removeAttr("style");			
		$('#dummy').remove();
	}}, "-=0.8");
}

function changeIds(val, elemParent, idAttr) {//changing Ids based on situation
	$(elemParent).each(function(index){
		$(this).attr('id', (idAttr + (index + val)));
	});
}

function changeIdsBasedOnCond(val, callBackFunction) {
	changeIds(val, $('#dynamicNodes .nodes'), 'node');
	changeIds(val, $('#dynamicNodes .data-nodes'), 'nodeData');
	changeIds(val, $('#dynamicNodes .prev-div'), 'prevDiv');
	changeIds(val, $("#dynamicNodes .data-div"), "dataDiv");
	changeIds(val, $("#dynamicNodes .next-div"), "nextDiv");
	changeIds(val, $("#dynamicNodes .data-address"), "dataAddress");
	changeIds(val, $("#dynamicNodes .prev-span"), "prev");
	changeIds(val, $("#dynamicNodes .data-span"), "data");
	changeIds(val, $("#dynamicNodes .next-span"), "next");
	if (buttonName == 'deleteAtEnd') {
		changeIds(val, $('.lines'), 'line');
	}
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function drawDoubleLine(selector1, selector2, selector3, lineId, selector4, arrowFrom, callBackFunction) {
	$(selector1).parent().effect("highlight", {color : 'blue'}, 400);
	fadeInBounceEffectWithTimelineMax(selector1, selector2, false, function() {
		lineFlag = true;
		$(lineId).remove();
		if (arrowFrom) {
			if ($('.nodes').length == 5) {	//5th node
				svgAnimatingLineBottomToTop('#animationDiv', selector3, selector4, '#svgId', lineId, 'arrow');
			} else {
				svgAnimatingLineRightToLeft('#animationDiv', selector3, selector4, '#svgId', lineId, 'arrow');
			}
		} else {
			if ($('.nodes').length == 5) {	//5th node
				svgAnimatingLineTopToBottom('#animationDiv', selector3, selector4, '#svgId', lineId, 'arrow');
			} else {
				svgAnimatingLineLeftToRight('#animationDiv', selector3, selector4, '#svgId', lineId, 'arrow');
			}
		}
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function svgCurveUpper(selector1, selector2, polyLineId, callBackFunction) {
	$("#" + polyLineId).remove();
	var x = (($(selector1).offset().left - $("#svgId").offset().left) + $(selector1).width());
	var y = (($(selector1).offset().top  + $(selector1).height()) - $('#svgId').offset().top - 15);
	var x1 = x + (($(selector1).outerWidth() / 3));
	var y1 = y;
	var x2 = x1;
	var y2 = y - ($(selector1).outerHeight() * 1.2);
	var x3 = ($(selector2).offset().left - $("#svgId").offset().left ) - $(selector1).outerWidth() / 3;
	var y3 = y2;
	var x4 = x3;
	var y4 = (($(selector2).offset().top  + $(selector2).height()) - $('#svgId').offset().top - 15);
	var x5 = x3 + $(selector2).outerWidth() / 3;
	var y5 = y4;
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
	line.setAttribute("class", "svg-line upcurve");
	line.setAttribute('id', polyLineId);
	var points = x + " " + y + ", " + x1 + " " + y1 + ", " + x2 + " " + y2 + ", " + x3 
				+ " " + y3 + ", " + x4 + " " + y4 + ", " + x5 + " " + y5;  
	line.style.markerEnd = 'url("#arrow")';
	$("#svgId").append(line);
	setTimeout(function() {
		TweenMax.to("#" +polyLineId, 1, {attr: {points : points}});
	},500);
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function svgCurveDown(selector1, selector2, polyLineId, callBackFunction) {
	$("#" + polyLineId).remove();
	var x = $(selector1).offset().left - $("#svgId").offset().left;
	var y = ($(selector1).offset().top + ($(selector1).height())) - $("#svgId").offset().top;
	var x1 = x - $(selector1).width() / 2.1;
	var y1 = y;
	var x2 = x1;
	var y2 = y1 + $(selector1).height() * 1.2 + 2.5;
	var x3 = (($(selector2).offset().left + $(selector2).outerWidth()) - $("#svgId").offset().left) + $(selector1).width() / 2.3;
	var y3 = y2;
	var x4 = x3;
	var y4 = ($(selector2).offset().top + ($(selector2).height())) - $("#svgId").offset().top;
	var x5 = x3 - $(selector2).width() / 2;
	var y5 = y4;
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
	line.setAttribute("class", "svg-line downcurve");
	line.setAttribute('id', polyLineId);
	var points = x + " " + y + ", " + x1 + " " + y1 + ", " + x2 + " " + y2 + ", " + x3 
				+ " " + y3 + ", " + x4 + " " + y4 + ", " + x5 + " " + y5;  
	line.style.markerEnd = 'url("#arrow")';
	$("#svgId").append(line);
	setTimeout(function() {
		TweenMax.to("#" + polyLineId, 1, {attr: {points : points}});
	},500);
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function fixedWidth() {
	if ($('.nodes').length == 4) {
		var x = (($('#node4').offset().left + $('#node4').outerWidth()) - $("#dynamicNodes").offset().left) + $('#node1').width() / 2.5;
		$('#dynamicNodes').css({'width' : x + 'px'});
	}
}


</script>
	<div class="col-xs-12 padding00">
		<div class="ct-box-main">
			 <div class="text-center"><h1 class="label ct-demo-heading text-center" id="headingSection">Doubly Circular Linked List</h1></div> 
		</div>
		<div class="col-xs-12" id="explanationDiv">
			<div class="col-xs-4 padding00">
				<pre class="creamPreTab opacity00 " id="structTypelist"></pre>
				<pre class="creamPreTab opacity00 displayCode" id="inMain"></pre>
				<pre class="creamPreTab opacity00 displayCode" id="csllOperations"></pre>
			</div>
			<div class="col-xs-8"> 
				<div class="col-xs-12 padding00">
					<div class="col-xs-12 margin-top-15 padding00">
						<div class="col-xs-12 box-border opacity00" id="buttonDiv"></div>
						<div class="margin-top-15 col-xs-12 opacity00 padding00" id="animationParent">
							<div class="col-xs-12 margin-7 padding00 box-border" id="animationDiv">
								<div class="col-xs-12">
									<div class="col-xs-2 text-center padding00 opacity00 intVariables" id="xValeDecInMain">
										<div class="margin-top-15" id="decXValInMain"><b>x<sub>(main)</sub> = 
											<span class="box-border padding6"><span class="opacity00 intValues" id="xValInMain">12</span></span></b>
										</div>
									</div>
									<div class="col-xs-3 text-center padding00 opacity00 intVariables" id="xValDecInAdd">
										<div class="margin-top-15" id="decXValInAdd"><b>x<sub id="subVal">(addNode)</sub> = 
											<span class="box-border padding6"><span class="opacity00 intValues" id="xValInAdd">12</span></span></b>
										</div>
									</div>
									<div class="col-xs-2 text-center padding00 opacity00 intVariables" id="posValDec">
										<div class="margin-top-15" id="decPosVal"><b>pos = <span class="box-border padding6">
											<span class="opacity00 intValues" id="posVal">12</span></span></b>
										</div>
									</div>
									<div class="col-xs-3 text-center padding00 opacity00 intVariables" id="opValDec">
										<div class="margin-top-15" id="decOpVal"><b><span id="extraNode">op</span> = 
											<span class="box-border padding6"><span class="opacity00 intValues" id="opVal">12</span></span></b>
										</div>
									</div>
									<div class="col-xs-2 text-center padding00 opacity00 intVariables" id="countValDec">
										<div class="margin-top-15" id="decCountVal"><b><span id="countNme">count</span> = 
											<span class="box-border padding6">
											<span class="opacity00 intValues position" id="countVal">0</span></span></b>
										</div>
									</div>
								</div>
								<div class="col-xs-12 margin-top-25" id="csllNodes">
									<div class="col-xs-1 padding00 opacity00 opacity00" id="firstNodeInMain">
										<div class="text-center col-xs-12 padding00 ct-green-color ct-fonts">first<sub>main</sub></div>
										<div class="col-xs-12 box padding00" id="firstDiv">
											<span  id="firstVal" class="ct-green-color ct-fonts inline-style">NULL</span>
										</div>
									</div>
									<div class="col-xs-11" id="dynamicNodes" style='padding-right: 0;'></div>
								</div>
								<div class="col-xs-12 margin-top-25" id="declareNodes"></div>
							</div>
						</div>
					</div>
					<div class="col-xs-12 padding00 margin-top15">
						<div class="col-xs-12" id="csllOperation">
							<div class="col-xs-12"><pre class="creamPreTab opacity00 displayCode" id="csllMethodOperations"></pre></div>
						</div>
					</div>
					<div class="col-xs-12 padding00 margin-top-15">
						<div class="col-xs-12 padding00">
							<div class="col-xs-12 margin-top" id="outputDiv">
								<div id="consoleId" class="center opacity00">
									<div class="output-console-title-bar"><span class="title"><b>Console</b></span></div>
									<div class="output-console-body" id="consoleBodyDiv"><div id="consoleEnter" class="outputCount1"></div></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>