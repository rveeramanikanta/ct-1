

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/animate.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery.scrollTo.js"></script>
<title>Single Linked List UNION and CONCAT</title>

<style type="text/css">

.introjs-tooltip {
	min-width: 350px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-duplicate-nextbutton {
	margin: 0px !important;
	background-color: green;
}

.introjs-duplicate-skipbutton {
	background-color: orange;
	margin: 0.5px !important;
}

.box-border {
	border-radius: 12px;
	border: 2px solid gray;
}

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}

div, span {
	position: relative;
}

.padding00 {
	padding: 0;
}

.creamPreTab {
	tab-size: 4;
	margin: 2px;
	padding: 12px;
	font-size: 12px;
	-moz-tab-size: 4;
	white-space: pre;
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
	display: inline-block;
	position: relative;
}

.margin-top15 {
	margin-top: 15px;
}

/* .animationDiv {
	height: 260px;
} */

.output-console-title-bar {
	background-image: -moz-linear-gradient(center top, #e8e8e8, #bcbbbc);
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-size: 0.75em;
	padding: 2px 0;
	text-align: center;
}

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 14px;
	margin-bottom: 14px;
	height: 150px;
	overflow: auto;
	padding: 10px;
	white-space: pre-line;
}

#varDec {
    margin-top: 23px;
}

#varDec > span {
    padding: 5px 10px;
}

#firstList, #secondList {
	margin-top: 25px;
}

#secondList {
	margin-bottom: 25px;
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
	border-color: blue;
	border-top-left-radius: 6px;
	border-bottom-left-radius: 6px;
}

.right-radius {
	border-color: green;
	border-top-right-radius: 6px;
	border-bottom-right-radius: 6px;
}

.inline-css {
	margin: 0 10px;
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
	margin-left: 30px;
}

.margin-7 {
	margin-top: 10px;
	margin-bottom: 10px;
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.svg-line {
	/* display: none; */
	marker-end: url("#arrowEnd"); 
	position: relative;
	stroke: gray;
	stroke-width: 2; 
}

.ct-code-b-red {
	font-weight: bold;
	font-family: monospace;
	color: rgb(252, 66, 66);
}

.ct-lime-color, .ct-green-color {
	color: lime;
	font-weight: bold;
	font-family: monospace;
}

.ct-green-color {
	color: green;
}

.ct-blue-color {
	font-weight: bold;
	font-family: monospace;
}

.ct-brown-color {
	color: brown;
	font-weight: bold;
	font-family: monospace;
}

.error-text {
	color :red;
	font-weight: bold;
}

.popover-content {
	font-size: 14px;
}

.popover {
	width: 200px;
	font-size: 15px !important;
}

.srt-css {
	margin-left: 25px;
}

.ct-code-b-black {
	font-family: monospace;
	background-color: black;
	color: white;
	padding: 1px;
	border-radius: 4px;
	font-size: 12px;
}

.ct-code-b-green {
	font-weight: bold;
	font-family: monospace;
	color: #42f44e;
}
</style>
</head>
<body>

<script type="text/javascript">

var buttonNames = ["CONCAT", "UNION", "INTERSET"];
var arr = ["l1", "l2","l3","x"];
var count = 1;
var printfCount = 1,outputLineCount = 1, returnValCount = 1, nodeCount = 1, lineCount = 1, tCount =1;
var tempLine = 11, qLine = 111, infoLine = 33;
var fstNdeInSecdList;
var flag = true;

$(document).ready(function() {
	documentCallFunctin();
});

function documentCallFunctin() {
	preStructTypeList();
	firstAndSecondList();
	appendButtons();
	svgAppend("#animatinDiv", "svgId");
	svgMarkerAppend("#svgId", "arrow");
	noOfNodeList();
	initIntroJS();
}

function preStructTypeList() {
	$("#structTypelist").append('<span id="strcutSpan">struct list {\n'
							+ '\tint data;\n'
							+ '\tstruct list *next;\n'
							+ '};</span>\n'
							+ '<span id="typeDefDec">typedef struct list* nodeptr;</span>\n');
}

function preMain() {
	$("#inMain").append('<div class="text-center ct-blue-color padding00">In Main</div>\n'
					+ '<span id="nodeDec">nodeptr l1, l2, l3;</span>\n'
					+ '<span id="nodeToNull">l1 = l2 = l3 = NULL;</span>\n'
					+ '<span id="printf1">printf("Enter list 1 elements : ");</span>\n'
					+ '<span id="callCreateMethos1">l1 = createAndAddNodes(l1);</span>\n'
					+ '<span id="printf2">printf("Enter list 2 elements : ");</span>\n'
					+ '<span id="callCreateMethos2">l2 = createAndAddNodes(l2);</span>\n');
					//+ '<span id="callConcatMethod">l3 = concat(l1, l2);</span>');
}

function firstAndSecondList() {
	for (var i = 1; i <=2; i++) {
	$(".list" + i).append('<div class="col-xs-1 padding00 opacity00" id="firstNode'+ i +'">'
					+ '	<div class="text-center col-xs-12 padding00 ct-green-color">first</div>'
					+ '	<div class="col-xs-12 box padding00" id="firstDiv'+ i +'">'
					+ '	<span  id="firstVal'+ i +'" class="opacity00 ct-green-color inline-style">NULL</span>'
					+ '	</div>'
					+ '</div>'
					+ '<div class="col-xs-11" id="dynamicNodes'+ i +'"></div>');
	 }
}

function createDynamicNodes(selector, nodeNum) {
	var randomAddress = getRandomInt(1000, 5000);
	$(selector).append('<div class="opacity00 col-xs-2 nodes" id="node' + nodeNum 
					+ '" style="top: 0px; width: auto;">'
					+ ' <div class="col-xs-12 padding00"><div class="col-xs-6 ct-blue-color padding00 text-center">'
					+ ' data</div><div class="ct-green-color text-center">next</div></div>'
					+ ' <div id="nodedata' + nodeNum + '"><div id="dataDiv' + nodeNum + '"'
					+ ' class="div-border left-radius col-xs-6 data-div"><span id="data' + nodeNum +'"'
					+ ' class="data-span opacity00 ct-blue-color" style="top: 0px; left: 0px;"></span></div>'
					+ ' <div id="nextDiv' + nodeNum +'" class="position div-border right-radius col-xs-6 next-div">'
					+ ' <span id="next' + nodeNum +'" class="position next-span ct-green-color inline-style"></span></div></div>'
					+ ' <div class="col-xs-12 padding00"><div class="col-xs-6 padding00 text-center">'
					+ ' <span id="dataAddress' + nodeNum + '" class="data-address padding00 ct-brown-color">'+ randomAddress 
					+ '</span></div></div></div>');
}

function preSingleLinkedListOperations() {
	$("#sllOperations").append('<div id="createAndAddNodeMethod">nodeptr createAndAddNodes(<span id="firstNode">nodeptr first</span>) {\n'
						+ '\t<span id="initTempAndQnode">nodeptr temp, q;</span>\n'
						+ '\t<span id="initXVar">int x;</span>\n'
						+ '\t<span id="printf3">printf("enter element : ");</span>\n'
						+ '\t<span id="scanf3">scanf("%d", &x);</span>\n'
						+ '\t<span id="whileXNotEqlToMinusOne">while(<span id="xNotEqToOne">x != -1</span>) {</span>\n'
						+ '\t\t<span id="createNewTempNode">temp = (nodeptr)malloc(sizeof(struct list));</span>\n'
						+ '\t\t<span id="xValStreInTempData">temp->data = x;</span>\n'
						+ '\t\t<span id="tempNextToNull">temp->next = NULL;</span>\n'
						+ '\t\t<span id="ifFirstEqlToNull">if(first == NULL) {</span>\n'
						+ '\t\t\t<span id="firstEqlToTemp">first = temp;</span>\n'
						+ '\t\t} else {\n'
						+ '\t\t\t<span id="tempToQNext">q->next = temp;</span>\n'
						+'\t\t}\n'	
						+ '\t\t<span id="tempValStreInQ">q = temp;</span>\n'
						+ '\t\t<span id="printf4">printf("enter element : ");</span>\n'
						+ '\t\t<span id="scanf4">scanf("%d", &x);</span>\n'
						+ '\t}\n'
						+ '\t<span id="returnFirst">return first;</span>\n'
						+'}\n</div>');
}

function createLastNode(i, nodeName, nodeNumber) {
	$('#nodeAddress' + i).append('<div class="col-xs-1 padding00 margin-top15 opacity00" id="lastNodeMemory'+ nodeNumber +'">'
							+ '<div class="col-xs-12 box padding00"><span id="nodeVal'
							+ nodeNumber +'" class="ct-brown-color inline-style"></span></div>'
							+ '<div class="text-center col-xs-12 padding00 ct-green-color" id="nodeName'+ nodeNumber +'">'+ nodeName +'</div>'
							+ '</div>');	
	if (nodeNumber == 1) {
		$("#lastNodeMemory" + nodeNumber).addClass("");
	} else {
		$("#lastNodeMemory" + nodeNumber).addClass("margin-left30");
	}
}

function noOfNodeList() {
	for (var i = 0; i < 4; i++ ) {
	$('#NoOfLists').append('<div class="col-xs-1 padding00 opacity00 margin-left30" id="'+ arr[i] +'Node">'
						+ '<div class="col-xs-12 box padding00"><span id="'
						+ arr[i] +'Val" class="ct-brown-color inline-style"></span></div>'
						+ '<div class="text-center col-xs-12 padding00 ct-green-color" id="'
						+ arr[i] +'nodeName">'+ arr[i] +'</div>'
						+ '</div>');
	}
}

function appendButtons() {
	for (var i = 0; i <= 2; i++) {
		$('#buttonDiv').append('<div class="inline-css"><span class="btn btn-success buttons btn-xs margin-7 disabled" id="'
							+ buttonNames[i].toLowerCase() +'">'+ buttonNames[i] +' </span></div>');
	}
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		keyboardNavigation : false,
		exitOnEsc : false,
		showBullets : false,
		steps : [{
			element: '#headdingSection',
			intro: '',
		},{
			element:'#structTypelist',
			intro: '',
			tooltipClass : "hide",
		},{
			element:'#strcutSpan',
			intro: '',
			tooltipClass : "hide",
		},{
			element : "#restart",
			intro : "",
			position: "right"
		}]
	});
	
	introjs.onafterchange(function (targetElement) {
			var elementId = targetElement.id;
			$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
			switch (elementId) {
				case "structTypelist" :
					$("#structTypelist, #explanationDiv").removeClass("opacity00");
					setTimeToIntroGoNextStep();
				break;
				case "strcutSpan":
					$('.introjs-tooltip').removeClass('hide');
					var text = "This is the declaration of a new <span class='ct-code-b-yellow'>struct</span>"
							+ " type <span class='ct-code-b-yellow'> list</span>.";
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#typeDefDec", "", "bottom");
						$('.introjs-nextbutton').show();
					});
				break;
				case "buttonDiv" :
					$("#inMain, #sllOperations, #consoleBodyDiv, #dynamicNodes1, #dynamicNodes2").empty();
					$("#l1Node, #l2Node, #l3Node, #l1Val, #l2Val, #l3Val, #firstNode1, #firstVal1").addClass("opacity00");
					$("#thirdList, #nodeAddress3, #svgId line").remove();
					$(".buttons").removeClass("disabled");
					count = printfCount = outputLineCount = returnValCount = nodeCount = lineCount = tCount = 1;
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "showButtons" :
							clickFunctions();
						break;
					}
				break;
				case "typeDefDec" :
					$('.introjs-tooltip').removeClass('hide');
					var text = "The <span class='ct-code-b-yellow'>typedef</span> "
							+ "creates a <span class='ct-code-b-yellow'>nodeptr</span> as a"
							+ " new type <span class='ct-code-b-yellow'>pointer</span> to "
							+ "<span class='ct-code-b-yellow'>struct list</span>.";
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#buttonDiv", "showButtons", "bottom");
						$('.introjs-nextbutton').show();
					});
				break;
				case "inMain" :
					$("#inMain").removeClass("opacity00");
					customIntro("#nodeDec", "", "bottom");
				break;
				case "nodeDec" :
					$('.introjs-tooltip').removeClass('hide');
					var text = 'Here, we are declaring <span class="ct-code-b-yellow">three</span>'
							+ ' variable <span class="ct-code-b-yellow">l1</span>, '
							+ '<span class="ct-code-b-yellow">l2</span>, and '
							+ '<span class="ct-code-b-yellow">l3</span> to the '
							+ '<span class="ct-code-b-yellow"> nodeptr</span> type.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#animatinDiv", "varDeclr", "bottom");
						$('.introjs-nextbutton').show();
					});
				break;
				case "nodeToNull" :
					$('.introjs-tooltip').removeClass('hide');
					var text = 'Here, we are initializing '
							+ ' <span class="ct-code-b-yellow">l1</span>, '
							+ '<span class="ct-code-b-yellow">l2</span>, and '
							+ '<span class="ct-code-b-yellow">l3</span> to  '
							+ '<span class="ct-code-b-yellow"> NULL</span>.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#animatinDiv", "assignToNull", "bottom");
						$('.introjs-nextbutton').show();
					});
				break;
				case "printf" + printfCount :
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "enterList1Elem" :
							customIntro("#consoleId", "displyEntrList"+ printfCount +"Elem", "bottom");
						break;
						case "enterNodeValText" :
							customIntro("#consoleId", "displyEntrNodeVal", "bottom");
						break;
						case "printL3Text" :
							introNextSteps("#consoleId", "displyL3Text", "bottom");
							setTimeToIntroGoNextStep();
						break;
						case "printEmpty" :
							introNextSteps("#consoleId", "printEmptyText", "bottom");
							setTimeToIntroGoNextStep();
						break;
						case "printListEle" :
							introNextSteps("#consoleId", "printListEleText", "bottom");
							setTimeToIntroGoNextStep();
						break;
						case "printData" :
							introNextSteps("#consoleId", "printListEleData", "bottom");
							setTimeToIntroGoNextStep();
						break;
						case "printNull" :
							introNextSteps("#consoleId", "printNullVal", "bottom");
							setTimeToIntroGoNextStep();
						break;
						case "IntrsctionEmpty":
							customIntro("#consoleId", "displyIntrsctionEmpty");
						break;
						case "printIntrsction":
							customIntro("#consoleId", "displayIntrsctionListStmnt");
						break;
					}
				break;
				case "scanf" + printfCount :
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "readNodeVal" :
							customIntro("#consoleId", "enterNodeVal", "bottom");
						break;
					}
				break;
				case "animatinDiv" :
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "varDeclr" :
							initializeTheL1L2AndL3("Node", function() {
								customIntro("#nodeToNull", "", "bottom");
							});
						break;
						case "assignToNull" :
							initializeTheL1L2AndL3("Val", function() {
								customIntro("#printf" + printfCount, "enterList"+ printfCount +"Elem", "bottom");
							});
						break;
						case "declrFirstNode" :
							zoomInEffect("#firstNode" + printfCount, function() {
								fromEffectWithTweenMax("#l" + printfCount + "Val", "#firstVal" + printfCount, false, function() {
									if ($("#interset").hasClass("intersect")) {
										svgAnimatingLineRightToLeft("#animatinDiv", "#firstDiv"+ printfCount, "#dataDiv"
												+ ($('.completed').length + 1), "#svgId", "line22", "arrow", function() {
											returnValCount = 0;
											customIntro("#initT1T2");
										});
									} else {
										customIntro("#initTempAndQnode", "", "bottom");
									}
								});
							});
						break;
						case "tempAndQvarDeclr" :
							zoomInEffect("#lastNodeMemory1" , function() {
								zoomInEffect("#lastNodeMemory2" , function() {
									customIntro("#initXVar", "", "bottom");
								});
							});
						break;
						case "xValDec" :
							zoomInEffect("#xNode", function() {
								if ($("#interset").hasClass("intersect")) {
									customIntro("#srtForLoop");
								} else {
									printfCount = 3;
									customIntro("#printf3", "enterNodeValText", "bottom");
								}
							});	
						break;
						case "firstValueStorInL" + returnValCount :
							fadeInBounceEffectWithTimelineMax("#firstVal"+ returnValCount, "#l"+ returnValCount +"Val", function() {
								$(".nodes").removeClass("nodes");
								$("#firstNode" + returnValCount + ", #firstNode" + returnValCount + " span").addClass("opacity00");
								$("#line22, #line" + infoLine + ", #temp" + tempLine).remove();
								printfCount = ++returnValCount;
								if ($("#interset").hasClass("intersect")) {
									if ($("#srtMethod").hasClass("sorting")) {
										$(".sorting").removeClass("sorting");
										customIntro("#callL2Srt", "callSrt1");
									} else {
										$("#sortingDiv").addClass("hide");
										nodeCount = count = returnValCount = printfCount = 1;
										customIntro("#printMethod1", "printmethd3")
									}
								} else if (returnValCount == 2 ) {
									customIntro("#printf2", "enterList1Elem", "bottom");
								} else {
									customIntro("#intrsctMainIfCond", 'hide');
								}
							});
						break;
						case "MemoryAllocation" :
							$("#node" + nodeCount).removeClass("opacity00")
							TweenMax.from("#node" + nodeCount, 1, {top : -30, onComplete:function() {
								$("#nodeVal" + (nodeCount + 1)).removeClass("opacity00");
								fadeInBounceEffectWithTimelineMax("#dataAddress" + nodeCount , "#nodeVal1", function() {
									$("#line" + tempLine).remove();
									svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory1", "#nextDiv"
										+ nodeCount, "#svgId", "line"+ tempLine, "arrow", function() {
										customIntro("#xValStreInTempData", "", "");
									});
								});
							}});
						break;
						case "storeXVal":
							$("#data" + nodeCount).text($("#nodeDataVal" + (outputLineCount - 1)).val()).addClass("opacity00")
							fromEffectWithTweenMax("#nodeDataVal" + (outputLineCount - 1), "#data" + nodeCount, false, function() {
								customIntro("#tempNextToNull", "", "");
							});
						break;
						case "assignNullToTmpNxt" :
							$("#next" + nodeCount).text("NULL").addClass("opacity00");
							zoomInEffect("#next" + nodeCount, function() {
								customIntro("#ifFirstEqlToNull", "", "");
							});	
						break;
						case "tempValStredInFirst":
							fadeInBounceEffectWithTimelineMax("#nodeVal1", "#firstVal" + returnValCount ,function() {
								svgAnimatingLineRightToLeft("#animatinDiv", "#firstDiv"+ returnValCount, "#dataDiv"
										+ nodeCount, "#svgId", "line"+ infoLine, "arrow", function() {
									removeLineNum = lineCount;
									if (returnValCount % 2 == 0) {
										fstNdeInSecdList = nodeCount;
									}
									lineCount++;
									customIntro("#tempValStreInQ", "", "");
								});
							});
						break;
						case "tempValStredInQ" :
							fadeInBounceEffectWithTimelineMax("#nodeVal1", "#nodeVal2",function() {
								$("#line" + qLine).remove();
								svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory2", "#nextDiv"
										+ nodeCount, "#svgId", "line"+ qLine, "arrow", function() {
									printfCount = 4;
									nodeCount++;
									customIntro("#printf4", "enterNodeValText", "bottom");
								});
							});
						break;
						case "tempvalstoredInQNext" :
							fadeInBounceEffectWithTimelineMax("#nodeVal1", "#next" + (nodeCount - 1),function() {
								svgAnimatingLineRightToLeft("#animatinDiv", "#nextDiv" + (nodeCount - 1), "#dataDiv"
										+ nodeCount, "#svgId", "line"+ lineCount, "arrow", function() {
									lineCount++;
									customIntro("#tempValStreInQ", "", "");
								});
							});
						break;
						case "mainIfCond":
							$('.introjs-tooltip').removeClass("hide");
							mainIfCondChecking("mainIfCond", "#l1Val", "#l2Val", "#intrsctMainIfCond");
						break;
						case "declareT1T2":
							zoomInEffect("#lastNodeMemory1" , function() {
								zoomInEffect("#lastNodeMemory2" , function() {
									customIntro("#initX");
								});
							});
						break;
						case "l1L2Nodes":
							$("#firstDiv1").prev().text('l1');
							$("#firstDiv2").prev().text('l2');
							$("#firstVal1").text($("#l1Val").text()).addClass("opacity00");
							$("#firstVal2").text($("#l2Val").text()).addClass("opacity00");
							var t = $("#dynamicNodes1 .data-span").length + 1;
							zoomInEffect("#firstNode1", function() {
								fromEffectWithTweenMax("#l1Val", "#firstVal1", false, function() {
									svgAnimatingLineRightToLeft("#animatinDiv", "#firstDiv1", "#dataDiv1",
											"#svgId", "line31", "arrow", function() {
										zoomInEffect("#firstNode2", function() {
											fromEffectWithTweenMax("#l2Val", "#firstVal2", false, function() {
												svgAnimatingLineRightToLeft("#animatinDiv", "#firstDiv2", "#dataDiv"
														+ t, "#svgId", "line32", "arrow", function() {
													customIntro("#initT1T2L3");
												});
											});
										});
									});
								});
							})
						break;
						case "DecT1T2L3":
							nodeCount++;
							printfCount++;
							$("#lastNodeMemory0").removeClass("margin-left30");
							zoomInEffect("#lastNodeMemory1" , function() {
								$("#nodeVal1").text($("#l1Val").text()).addClass("opacity00");
								fromEffectWithTweenMax("#l1Val", "#nodeVal1", false, function() {
									$("#line45, #line46").remove();
									svgAnimatingLineLeftToRight("#animatinDiv", "#lastNodeMemory1 div:first", "#firstDiv1",
											 "#svgId", "line45", "arrow", function() {
										zoomInEffect("#lastNodeMemory2" , function() {
											$("#nodeVal2").text($("#l2Val").text()).addClass("opacity00");
											fromEffectWithTweenMax("#l2Val", "#nodeVal2", false, function() {
												svgAnimatingLineLeftToRight("#animatinDiv", "#lastNodeMemory2 div:first", "#firstDiv2",
														"#svgId", "line46", "arrow", function() {
													$("#nodeName0").append('<sub>intersect</sub>');
													zoomInEffect("#lastNodeMemory0", function() {
														$("#nodeVal0").text("NULL").addClass("opacity00");
														zoomInEffect("#nodeVal0", function() {
															customIntro("#intrsctWhileCond");
														});
													});
												});
											});
										});
									});
								});
							});
						break;
						case "whileCondCheck":
							$('.introjs-tooltip').removeClass("hide");
							mainIfCondChecking("whileCondCheck", "#nodeVal1", "#nodeVal2", "#whileInside");
						break;
						case "intrsctIfCheck":
							$('.introjs-tooltip').removeClass("hide");
							ifCondText("t1->data", "<", "t2->data", function() {
								ifCondAnimation("intrsctIfCheck", "#intrsctIfCond");
							});
						break;
						case "intrsctIfElseCheck":
							$('.introjs-tooltip').removeClass("hide");
							ifCondText("t1->data", ">", "t2->data", function() {
								ifCondAnimation("intrsctIfElseCheck", "#intrsctElseIfCond");
							});
						break;
						case "t1Next":
							t1NxtAnimation(function() {
								introNextSteps("#intrsctWhileCond");
								setTimeToIntroGoNextStep();
							});
						break;
						case "t2Next":
							t2NxtAnimation(function() {
								customIntro("#intrsctWhileCond");
							});
						break;
						case "l3XDec":
							$("#nodeName11").append('<sub>add</sub>');
							$("#lastNodeMemory11").removeClass("margin-left30")
							zoomInEffect("#lastNodeMemory11", function() {
								$("#nodeVal11").text($("#nodeVal0").text());
								fromEffectWithTweenMax("#nodeVal0", "#nodeVal11", false, function() {
									zoomInEffect("#xNode", function() {
										$("#nodeVal1").effect("highlight", {color: 'blue'}, 500, function() {
											svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory1", "#nextDiv" + nodeCount, 
													"#svgId", "line"+ infoLine, "arrow", function() {
												$("#xVal").text($("#data" + nodeCount).text()).addClass("opacity00");
												fromEffectWithTweenMax("#data" + nodeCount, "#xVal", false, function() {
													$("#line" + infoLine).remove();
													customIntro("#initTQVar");
												});
											});
										})
									});
								});
							});
						break;
						case "decTQ":
							zoomInEffect("#lastNodeMemory6", function() {
								zoomInEffect("#lastNodeMemory5", function() {
									$("#nodeVal5").text($("#nodeVal11").text()).addClass("opacity00");
									fromEffectWithTweenMax("#nodeVal11", "#nodeVal5", false, function() {
										console.log(printfCount);
										//svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory5", "#nextDiv"
											//	+ lineCount, "#svgId", "line" + tempLine, "arrow", function() {
										customIntro("#nodeCreation");
									});
								});
							});
						break;
						case "tempMemoryAlloc":
							$("#node" + lineCount).removeClass("opacity00");
							TweenMax.from("#node" + lineCount, 1, {top : -30, onComplete:function() {
								$("#nodeVal6").text($("#dataAddress" + lineCount).text()).addClass("opacity00");
								fromEffectWithTweenMax("#dataAddress" + lineCount, "#nodeVal6", false, function() {
									$("#line" + tempLine).remove();
									svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory6", "#nextDiv"
												+ lineCount, "#svgId", "line" + tempLine, "arrow", function() {
										customIntro("#tInfoVal");
									});
								});
							}});
						break;
						case "tInfoValue":
							$("#data" + lineCount).removeClass("opacity00");
							$("#data" + lineCount).text($("#xVal").text()).addClass("opacity00");
							fromEffectWithTweenMax("#xVal", "#data" + lineCount, false, function() {
								customIntro("#tNextVal");
							});
						break;
						case "tNextValue":
							$("#next" + lineCount).text("NULL").addClass("opacity00");
							zoomInEffect("#next" + lineCount, function() {
								customIntro("#addIfCond");
							});
						break;
						case "addIfCheck":
							$('.introjs-tooltip').removeClass("hide");
							ifCondText("l3", " == ", "NULL", function() {
								toEffectAnimation("#addIfCond", "#mainCond", function() {
									$("#frstCond").effect("highlight", {color: 'yellow'}, 300, function() {
										effectAndRotation("#nodeVal11", "blue", "#frstCond", $("#nodeVal11").text(), function() {
											var frstVal = $("#nodeVal11").text() == "NULL";
											$('.introjs-tooltiptext').append('<span id="whileTrueOrFalse"></span><div id="appendText"></div>');
											text1 = "Condition evaluates to ";
											if (frstVal) {
												$("#whileTrueOrFalse").html(" ====> <span class='ct-lime-color'>true</span>");
												introNextSteps("#ifL3Val");
												text2 = "<span class='ct-lime-color'>true</span>. Hence control enters into the if-block";
											} else {
												$("#whileTrueOrFalse").html(" ====> <span class='ct-code-b-red'>false</span>");
												introNextSteps("#addWhileCond");
												text2 = "<span class='ct-code-b-red'>false</span>. Hence control comes out of the if-block.";												
											}
											text = text1 + text2;
											typing('#appendText', text, function() {
												$('.introjs-nextbutton').show();
											});
										});
									});
								});
							});
						break;
						case "l3ValueInIf":
							fadeInBounceEffectWithTimelineMax("#nodeVal6", "#nodeVal11", function() {
								lineCount = 4;
								customIntro("#retn4", "return4");
							});
						break;
						case "elseT1Next":
							t1NxtAnimation(function() {
								customIntro("#intrsctElseT2Next");
							});
						break;
						case "elseT2Next":
							t2NxtAnimation(function() {
								customIntro("#intrsctWhileCond");
							});
						break;
						case "addWhileCheck":
							$('.introjs-tooltip').removeClass("hide");
							ifCondText("q->next", " != ", "NULL", function() {
								toEffectAnimation("#elseWhileCond", "#mainCond", function() {
									$("#frstCond").effect("highlight", {color: 'yellow'}, 300, function() {
										$("#nodeVal5").effect("highlight", {color: 'blue'}, 500, function() {
											var t =  $("#dynamicNodes3 > .nodes .next-span:first").parent().attr('id');
											svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory5", "#" + t,
													"#svgId", "line" + infoLine, "arrow", function() {
												effectAndRotation("#" + t, "blue", "#frstCond", $("#" + t + " .next-span").text(), function() {
													var frstVal = $("#dynamicNodes3 > .nodes .next-span:first").text() != "NULL";
													$('.introjs-tooltiptext').append('<span id="whileTrueOrFalse"></span>'
																	+ '<div id="appendText"></div>');
													text1 = "Condition evaluates to ";
													if (frstVal) {
														$("#whileTrueOrFalse").html(" ====> <span class='ct-lime-color'>true</span>");
														introNextSteps("#elseWhileQValue");
														text2 = "<span class='ct-lime-color'>true</span>. Hence control enters into"
																+ " the if-block";
													} else {
														$("#whileTrueOrFalse").html(" ====> <span class='ct-code-b-red'>false</span>");
														introNextSteps("#elseQNextVal");
														text2 = "<span class='ct-code-b-red'>false</span>. Hence control comes"
																+ " out of the if-block.";												
													}
													text = text1 + text2;
													typing('#appendText', text, function() {
														$('.introjs-nextbutton').show();
													});
												});
											});
										});
									});
								});
							});
						break;
						case "qNxtValue":
							var l = $(".nodes:first .next-span").parent().attr('id');
							if (lineCount >= 11) {
								t = lineCount + 1;
							} else {
								t = lineCount;
							}
							$("#dynamicNodes3 > div").addClass("nodes");
							fadeInBounceEffectWithTimelineMax("#nodeVal6", "#" + l + " .next-span", function() {
								$("#line" + infoLine).remove();
								if ($("#dynamicNodes3 .data-div").length <= 2) {
									svgAnimatingLineRightToLeft("#animatinDiv", "#" + l, "#dataDiv"
											+ lineCount, "#svgId", "line"+ t, "arrow", function() {
										lineCount = 4;
										customIntro("#retn4", "return4");
									});
								} else {
									svgAnimatingLineRightToLeft("#animatinDiv", "#nextDiv" + (lineCount - 1), "#dataDiv"
											+ lineCount, "#svgId", "line"+ t, "arrow", function() {
										lineCount = 4;
										customIntro("#retn4", "return4");
									});
								}
							});
						break;
						case "elseWhileQVal":	
							var l = $(".nodes:first .next-span").parent().attr('id');
							$('.nodes:first').removeClass('nodes');
							$("#nodeVal5").effect("highlight", {color: 'blue'}, 500, function() {
								fadeInBounceEffectWithTimelineMax("#" + l + " .next-span", "#nodeVal5", function() {
									$("#line" + infoLine).remove();
									customIntro("#elseWhileCond");
								});
							});
						break;
						case "dspFstNode" :
							$("#firstVal" + nodeCount).addClass("opacity00");
							$(".firstNodeName" + nodeCount).text("first");
							zoomInEffect("#firstNode" + nodeCount, function() {
								$("#firstVal" + nodeCount).text($("#l" + nodeCount + "Val").text());
								fromEffectWithTweenMax("#l" + nodeCount + "Val","#firstVal" + nodeCount, false, function() {
									if ($("#firstVal" + nodeCount).text().trim() != "NULL") {
										$("#line21").remove();
										svgAnimatingLineRightToLeft("#animatinDiv", "#firstDiv" + nodeCount, "#dataDiv" + count, "#svgId",
														"line21", "arrow", function() {
											customIntro("#nodeQ", "", "bottom");
	                      				});	
									} else {
										customIntro("#nodeQ", "", "bottom");
									}
				                });
							});
						break;
						case "decAndStreQVal" :
							$("#nodeName" + returnValCount).text("q");
							$("#nodeVal" + returnValCount).addClass("opacity00");
							zoomInEffect("#lastNodeMemory" + returnValCount, function() {
								$("#nodeVal" + returnValCount).text($("#firstVal" + nodeCount).text());
								fromEffectWithTweenMax("#firstVal" + nodeCount, "#nodeVal" + returnValCount, false, function() {
									//if ($("#firstVal" + nodeCount).text().trim() != "NULL") {
										$("#line22").remove();
										svgAnimatingLineLeftToRight("#animatinDiv", "#lastNodeMemory" + returnValCount,
											"#firstDiv" + nodeCount, "#svgId", "line22", "arrow", function() {
											customIntro("#firstIsNull", "", "bottom");
										});	
									//} else {
									//	customIntro("#firstIsNull", "", "bottom");
									//}
								});
							});
						break;
						case "qNxtToQNode" :
							 $("#nodeVal" + returnValCount).parent().effect( "highlight",{color: 'blue'}, 500, function() {
								 $("#line22").remove();
								 svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory" + returnValCount,
											"#nextDiv" + count, "#svgId", "line22", "arrow", function() {
								 	fadeInBounceEffectWithTimelineMax("#next" + count, "#nodeVal" + returnValCount, function() {
								 		count++;
								 		//if ( $("#nodeVal" + returnValCount).text() != "NULL") {
									 	customIntro("#whileQNotEqNull", "", "bottom");
									 });
									/*  } else {
										 customIntro("#whileQNotEqNull", "", "bottom");
									 } */
								 });
								 //changeQNodeAddressToQNextAdd();
							});
						break;
						case "l3AddValueStore":
							fadeInBounceEffectWithTimelineMax("#nodeVal11", "#nodeVal0", function() {
								setTimeout(function() {
									$("#nodeAddress3").empty();
									introjs.refresh();
									customIntro("#intrsctElseT1Next");
								}, 500);
							});
						break;
						case "l3IntrsctValueStore":
							fadeInBounceEffectWithTimelineMax("#nodeVal0", "#l3Val", function() {
								setTimeout(function() {
									$("#nodeAddress1").empty();
									introjs.refresh();
									printfCount = 6;
									customIntro("#printf6", "printIntrsction");
								}, 500);
							});
						break;
					}
				break;
				case "consoleId" :
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "displyEntrList"+ printfCount +"Elem" :
							$("#consoleBodyDiv").append('<span id="output'+ outputLineCount +'">Enter list '
												+ printfCount +' elements : </span>\n');
							$("#consoleBodyDiv").scrollTo($("#consoleBodyDiv > span:first()"), 500, function() {
								outputLineCount++;
								customIntro("#callCreateMethos"+ printfCount +"", "callCreate"+ printfCount +"", "bottom");
							});
						break;
						case "displyEntrNodeVal" :
							$("#consoleBodyDiv").append('<span id="output'+ outputLineCount +'">Enter element : </span>'
									+'<input class="user-text opacity00"'
									+ ' id= "nodeDataVal'+ outputLineCount +'" placeholder="Number" maxlength="3"></span>\n');
							$("#consoleBodyDiv").scrollTo($("#consoleBodyDiv > span:first()"), 500, function() {
								outputLineCount++;
								customIntro("#scanf" + printfCount, "readNodeVal", "bottom");
							});
						break;
						case "enterNodeVal" :
							$('.introjs-tooltip').removeClass('hide');
							var t = $(".nodes").length == 5;
							if (t) {
								addNegativeValuEvent("#nodeDataVal" + (outputLineCount - 1))
								var text = "Here, we are restrict to allow  only <span class='ct-code-b-yellow'>5</span> nodes so "
										+ "  plese enter the <span class='ct-code-b-yellow'>node data</span> as "
										+ "<span class='ct-code-b-yellow'>-1</span> only.";
							} else {
								enterValidNumberOrNot("#nodeDataVal" + (outputLineCount - 1));
								var text = "Enter the <span class='ct-code-b-yellow'>node data</span> value";
							}
							typing('.introjs-tooltiptext', text, function() {
								$("#nodeDataVal" + (outputLineCount - 1)).removeClass("opacity00").effect().focus();
								introNextSteps("#whileXNotEqlToMinusOne", "whileForInsertNode", "bottom");
							});
						break;
						case "printEmptyText" :
							$("#consoleBodyDiv").append('<span id="output'+ outputLineCount +'">Empty</span>\n');
							$("#consoleBodyDiv").scrollTo($("#consoleBodyDiv > span:last()"), 500, function() {
								introNextSteps("#buttonDiv", "showButtons", "bottom");
								setTimeToIntroGoNextStep();
							});
						break;
						case "printListEleText" :
							$("#consoleBodyDiv").append('\n<span id="output' + outputLineCount +'">Elements in list are : '
									+ '<span class="position list-elem" id="displaydata' + count + '"></span></span>');
							$("#consoleBodyDiv").scrollTo($("#consoleBodyDiv > span:last()"), 500, function() {
								introNextSteps("#whileQNotEqNull", "", "bottom");
								setTimeToIntroGoNextStep();
							});
						break;
						case "printListEleData" :
							$(".list-elem").append('<span id="outData'+ count +'"></span>&nbsp;<span class="opacity00"id="arrow'+ count 
									+ '">-->&nbsp;</span>');
							$("#consoleBodyDiv").scrollTo($("#consoleBodyDiv > span:last()"), 500, function() {
								$("#nodeVal" + returnValCount).parent().effect( "highlight",{color: 'blue'}, 500, function() {
									//printL1AndL2Nodes();
									svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory" + returnValCount, "#nextDiv"
										+ count, "#svgId", "line23", "arrow", function() {
										$("#line23").remove();
										$("#dataDiv" + count).effect( "highlight",{color: 'blue'}, 500, function() {
											$("#outData" + count).text($("#dataDiv" + count).text());
											fromEffectWithTweenMax("#dataDiv" + count, "#outData" + count, false, function() {
												$("#outData" + count).css("color", "yellow");
									           	zoomInEffect("#arrow" + count, function() {
									           		introNextSteps("#qNxtToQ", "", "bottom");
													setTimeToIntroGoNextStep();
									           	});
									    	});
										});
									});
								});
							});
						break;
						case "printNullVal" :
							$(".list-elem").append('<span id="null'+ (count - 1) +'">NUll</span>\n');
							outputLineCount++;
							zoomInEffect("#null" + (count - 1), function() {
								$('.list-elem').removeClass("list-elem");
								$("#nodeAddress" + nodeCount).empty();
								introjs.refresh();
								$("#line22, #line21").remove();
								$("#firstNode" + nodeCount).addClass("opacity00");
								if (flag) {
									flag = false;
									printfCount = 2;
									nodeCount++;
									customIntro("#printMethod2", "printmethd3")
								} else if ((count - 1) == $('.completed').length) {
									nodeCount++;
									//printfCount++;
									//printfCount = $("#dynamicNodes1 .data-span").length + 1;
									customIntro("#callIntrsctMethod", 'methodCalling');
								} else {
									customIntro("#buttonDiv", "showButtons", "bottom");
								}
							});
						break;
						case "displyIntrsctionEmpty":
							$("#consoleBodyDiv").append('<span id="output'+ outputLineCount +'">Intersection list is empty</span>\n');
							outputLineCount++;
							lineCount = 0;
							customIntro("#retn0", 'return0');
						break;
						case "displayIntrsctionListStmnt":
							$("#consoleBodyDiv").append('\n<span id="output'+ outputLineCount +'">Intersection list : </span>\n');
							outputLineCount++;
							$("#sllOperations").empty('');
							printfCount = nodeCount = 3;
							count = $('.completed').length + 1;
							$('.completed').removeClass("completed");
							customIntro("#printMethod3", "printmethd3")
						break;
					}
				break;
				case "printMethod" + printfCount:
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "printmethd3":
							$("#srtMethod, #intrsctionMethod, #prePrintMethod").remove();
							prePrintfFunctionOperation();
							customIntro("#sllOperations", "printMethod");
					}
				break;
				case "callCreateMethos" + returnValCount :
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "callCreate" + returnValCount :
							$('.introjs-tooltip').removeClass('hide');
							text = 'Here, we are calling '
								+ ' <span class="ct-code-b-yellow">createAndAddNodes()</span> method and '
								+ ' passing <span class="ct-code-b-yellow">l'+ returnValCount +'</span> data (i.e.'
								+ ' <span class="ct-code-b-yellow">NULL</span>) as an argument and'
								+ ' <span class="ct-code-b-yellow">return</span> value is stored in the'
								+ ' variable <span class="ct-code-b-yellow">l'+ returnValCount +'</span>.';
							typing('.introjs-tooltiptext', text, function() {
								$("#sllOperations").empty();
								preSingleLinkedListOperations();
								introNextSteps("#sllOperations", "addNodes", "right");
								$('.introjs-nextbutton').show();
							});
						break;
						case "returnValueStoreIn" :
							$('.introjs-tooltip').removeClass('hide');
							var text = 'The <span class="ct-code-b-yellow">createAndAddNodes()</span> method return value '
									+ ' <span class="ct-code-b-yellow"> ' + $("#firstVal" + returnValCount).text() 
									+ '</span> is stored in the variable <span class="ct-code-b-yellow">l'+returnValCount +'</span>.';	
							typing('.introjs-tooltiptext', text, function() {
								introNextSteps("#animatinDiv", "firstValueStorInL" + returnValCount + "","bottom");
								$('.introjs-nextbutton').show();
							});
						break;
					}
				break;
				case "sllOperations" :
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "addNodes" :
							$("#sllOperations").removeClass("opacity00");
							customIntro("#firstNode", "", "bottom");
						break;
						case "printMethod":
							customIntro("#printNode");
						break;
					}
				break;
				case "firstNode" :
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are declaring <span class="ct-code-b-yellow">first</span> node'
							+ ' and that will be initialized to <span class="ct-code-b-yellow">createAndAddNodes(l1)</span>'
							+ ' method passed value.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#animatinDiv", "declrFirstNode", "right");
						$('.introjs-nextbutton').show();
					});					
				break;
				case "initTempAndQnode" :
					$('.introjs-tooltip').removeClass('hide');
					var text = 'Here, we are declaring <span class="ct-code-b-yellow">two</span>'
						+ ' variables <span class="ct-code-b-yellow">temp</span> and'
						+ ' <span class="ct-code-b-yellow">q</span> to the'
						+ ' <span class="ct-code-b-yellow">nodeptr</span> type.';
					typing('.introjs-tooltiptext', text, function() {
						createLastNode(returnValCount, "temp2", 4);createLastNode(returnValCount, "temp2", 4);
						createLastNode(returnValCount, "temp", 1);createLastNode(returnValCount, "temp1", 3);
						createLastNode(returnValCount, "q", 2);
						introNextSteps("#animatinDiv", "tempAndQvarDeclr", "bottom");
						$('.introjs-nextbutton').show();
					});
				break;
				case "initX":
				case "initXVar" :
					$('.introjs-tooltip').removeClass('hide');
					var text = "Here, we declared an integer variable <span class = 'ct-code-b-yellow'>x</span>.";
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#animatinDiv", "xValDec", "bottom");
						$('.introjs-nextbutton').show();
 					});
				break;
				case "whileXNotEqlToMinusOne" :
					$("#nodeDataVal" + (outputLineCount - 1)).attr("disabled", true);
					var dataVal = $("#nodeDataVal" + (outputLineCount - 1)).val();
					$("#xVal").text(dataVal);
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "whileForInsertNode" :
							$('.introjs-tooltiptext').append("<span id='whileConForAddNode' class='opacity00 ct-code-b-yellow'>"
									+ "<span id='valOfX' class='position'>x</span> != -1</span> &nbsp;&nbsp;<span id='whileTrueOrFalse' "
									+ "class='opacity00'></span><br/><spna id='appendText'></span>");
							$('.introjs-tooltip').removeClass('hide');
							toEffectAnimation("#xNotEqToOne", "#whileConForAddNode", function() {
								checkWhileCondForisDataValIsNullOrNot();
							});
						break;
					}
				break;
				case "returnFirst" :
					$("#xNode").addClass("opacity00");
					$("#xVal, #nodeAddress" + returnValCount).empty();
					$("#line" + tempLine + ", #line" + qLine).remove();
					customIntro("#callCreateMethos" + returnValCount, "returnValueStoreIn", "bottom");
				break;
				case "createNewTempNode" :
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are creating a <span class="ct-code-b-yellow">nodeptr</span> with <span class="ct-code-b-yellow">'
							+ ' data</span> and <span class="ct-code-b-yellow">next</span> field and'
							+ ' allocate <span class="ct-code-b-yellow">dynamic memory</span>.';
					typing('.introjs-tooltiptext' , text, function() {
						createDynamicNodes("#dynamicNodes" + returnValCount, nodeCount);
						introNextSteps("#animatinDiv", "MemoryAllocation", "bottom");
						$('.introjs-nextbutton').show();
					});
				break;
				case "xValStreInTempData" :
					$('.introjs-tooltip').removeClass('hide');
					text = 'The <span class="ct-code-b-yellow">x</span> value i.e. (<span class="ct-code-b-yellow">'
							+ $("#nodeDataVal" + (outputLineCount - 1)).val() 
							+ '</span>) is stored in <span class="ct-code-b-yellow">temp -> data</span>.';
					typing('.introjs-tooltiptext' , text, function() {
						introNextSteps("#animatinDiv", "storeXVal", "bottom");
						$('.introjs-nextbutton').show();
					});
				break;
				case "tempNextToNull" :
					$('.introjs-tooltip').removeClass('hide');
					text = "Assign <span class='ct-code-b-yellow'>NULL</span> value "
							+ 'to <span class="ct-code-b-yellow">temp -> next</span>.';
					typing('.introjs-tooltiptext' , text, function() {
						introNextSteps("#animatinDiv", "assignNullToTmpNxt", "bottom");
						$('.introjs-nextbutton').show();
					});
				break;
				case "ifFirstEqlToNull" :
					$('.introjs-tooltiptext').append("<span id='ifConForAddNode' class='opacity00 ct-code-b-yellow'>"
							+ "<span id='valOfFirst' class='position'>first</span> == NULL</span> &nbsp;&nbsp;<span id='ifTrueOrFalse' "
							+ "class='opacity00'></span><br/><spna id='appendText'></span>");
					$('.introjs-tooltip').removeClass('hide');
					toEffectAnimation("#ifFirstEqlToNull", "#ifConForAddNode", function() {
						var firstVal = $("#firstVal" + returnValCount).text().trim();
						ifConToChekisFirstEqlToNull(firstVal, "ifFirstEqlToNull");
					});
				break;
				case "firstEqlToTemp" :
					$('.introjs-tooltip').removeClass('hide');
					var text = 'The <span class="ct-code-b-yellow">temp</span> value i.e. (<span class="ct-code-b-yellow">' 
						 	+ $("#nodeVal1").text() + '</span>) is stored in <span class="ct-code-b-yellow">first</span>.';
					typing('.introjs-tooltiptext' , text, function() {
						introNextSteps("#animatinDiv", "tempValStredInFirst", "bottom");
						$('.introjs-nextbutton').show();
					});
				break;
				case "tempValStreInQ" :
					$('.introjs-tooltip').removeClass('hide');
					var text = "The <span class='ct-code-b-yellow'>temp</span> value i.e. (<span class='ct-code-b-yellow'>" 
						 		+ $("#nodeVal1").text() + '</span>) is stored in <span class="ct-code-b-yellow">q</span>.';
					typing('.introjs-tooltiptext' , text, function() {
						introNextSteps("#animatinDiv", "tempValStredInQ", "bottom");
						$('.introjs-nextbutton').show();
					});
				break;
				case "tempToQNext":
					$('.introjs-tooltip').removeClass('hide');
					var text = "The <span class='ct-code-b-yellow'>temp</span> value i.e. (<span class='ct-code-b-yellow'>" 
							+ $("#nodeVal1").text() + '</span>) is stored in <span class="ct-code-b-yellow">q->next</span>.';
					typing('.introjs-tooltiptext' , text, function() {
						introNextSteps("#animatinDiv", "tempvalstoredInQNext", "bottom");
						$('.introjs-nextbutton').show();
					});
				break;
				case "intrsctMainIfCond":
					customIntro("#animatinDiv", 'mainIfCond', 'left');
				break;
				case "retn" + lineCount:
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "return0":
							customIntro("#buttonDiv", "showButtons", "bottom");
						break;
						case "return3":
							if ($("#srtMethod").hasClass("sorting")) {
								customIntro("#callL1Srt", "retunValue");
							} else {
								returnValCount = 2;
								customIntro("#callL2Srt", "retunValue");
							}
						break;
						case "return2":
							customIntro("#callIntrsctMethod", 'retunValue');
						break;
						case "return4":
							customIntro("#callAddMethod", 'retunValue');
						break;
					}
				break;
				case "callL2Srt":
				case "callL1Srt":
					if ($("#srtMethod").hasClass("sorting")) {
						printfCount = returnValCount = 1;
						$("#interset").addClass("intersect");
					} else {
						printfCount = returnValCount = 2;
						flag = true;
					}
					$('.introjs-tooltip').removeClass('hide');
					$("#line" + infoLine + ", #line" + tempLine).remove();
					$("#nodeAddress" + returnValCount).empty();
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "callSrt1":
							text = 'Here, we are calling <span class="ct-code-b-yellow">sort()</span> method and '
								+ ' passing <span class="ct-code-b-yellow">l'+ returnValCount +'</span> data (i.e. '
								+ ' <span class="ct-code-b-yellow">' + $("#l" + returnValCount + "Val").text() + '</span>) as an argument and '
								+ ' the <span class="ct-code-b-yellow">return</span> value is stored in the'
								+ ' variable <span class="ct-code-b-yellow">l'+ returnValCount +'</span>.';
							typing('.introjs-tooltiptext', text, function() {
								introNextSteps("#srtMethod");
								$('.introjs-nextbutton').show();
							});
						break;
						case "retunValue":
							$("#xNode").addClass("opacity00");
							$("#xNode span").empty();
							text = 'The <span class="ct-code-b-yellow">sort()</span> method returns value '
									+ ' i.e., <span class="ct-code-b-yellow"> ' + $("#l" + returnValCount).text() 
									+ '</span> is stored in the variable <span class="ct-code-b-yellow">l' + returnValCount + '</span>.';	
							typing('.introjs-tooltiptext', text, function() {
								introNextSteps("#animatinDiv", "firstValueStorInL" + returnValCount + "","bottom");
								$('.introjs-nextbutton').show();
							});
						break;
					}
				break;
				case "srtMethod":
					customIntro("#firstNodeIn");
				break;
				case "firstNodeIn":
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are declaring <span class="ct-code-b-yellow">first</span> node'
							+ ' and that will be initialized to <span class="ct-code-b-yellow">sort(l' + printfCount + ')</span>'
							+ ' method passed value.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#animatinDiv", "declrFirstNode", "right");
						$('.introjs-nextbutton').show();
					});	
				break;
				case "initT1T2":
					$('.introjs-tooltip').removeClass('hide');
					text = "Here we are declaring two variables <span class='ct-code-b-yellow'>t1</span> and <span class='ct-code-b-yellow'>"
							+ "t2</span> of the type <span class='ct-code-b-yellow'>nodeptr</span>";
					typing('.introjs-tooltiptext', text, function() {
						if ($("#srtMethod").hasClass("sorting")) {
							returnValCount = 1;
						} else {
							returnValCount = 2;
						}
						introNextSteps("#animatinDiv", 'declareT1T2');
						creatingT1T2L3(function() {
							$('.introjs-nextbutton').show();
						});
					});
				break;
				case "srtForLoop":
					$("#sortingDiv").removeClass("hide");
					customIntro("#animationParent");
				break;
				case "animationParent":
					$("#srtForLoop").addClass("z-index1000000").effect("highlight", {color: 'yellow'}, 500, function() {
						$("#srtForLoop").effect("transfer", {to: $("#sortingLogic"), className: "ui-effects-transfer"}, 500, function() {
							sortingLoops();
							introjs.refresh();
							$("#srtForLoop").removeClass("z-index1000000");
							popover('#sortingLogic', 'left');
							text = 'Here we will learn how to sort linked list elements.'
							typing("#popover", text, function() {
								if ($("#srtMethod").hasClass("sorting")) {
									count = 1;
									printfCount = 1;
								} else {
									printfCount = $('.completed').length + 1;
									count++;
								}
								$("#popover").append("<br><a class='introjs-button introjs-duplicate-nextbutton'" 
										+ "onclick = frloop1InitText(" + printfCount + ")>Next &#8594;</a>");
							});
						});
					});
				break;
				case "callIntrsctMethod":
					$('.introjs-tooltip').removeClass('hide');
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "methodCalling":
							$("#srtMethod, #prePrintMethod").remove();
							preIntersectionMethod();
							nodeCount = 0; printfCount = $("#dynamicNodes1 .data-span").length;
							text = 'Here, we are calling <span class="ct-code-b-yellow">intersect()</span> method and '
									+ ' passing <span class="ct-code-b-yellow">l1, l2</span> data (i.e. '
									+ ' <span class="ct-code-b-yellow">' + $("#l1Val").text() + ', ' + $("#l2Val").text() 
									+ '</span>) as an arguments and the <span class="ct-code-b-yellow">return</span> value is stored in the'
									+ ' variable <span class="ct-code-b-yellow">l3</span>.';
							typing('.introjs-tooltiptext', text, function() {
								if ($("#interset").hasClass("intersect")) {
									$("#interset").removeClass("intersect")
									$("#secondList").after('<div id="thirdList" class="col-xs-12 padding00 list3">'
													+ '<div id="firstNode3" class="col-xs-1 padding00 opacity00">'
													+ '<div class="text-center col-xs-12 padding00 ct-green-color">first</div>'
													+ '<div id="firstDiv3" class="col-xs-12 box padding00">'
													+ '<span class="ct-green-color inline-style opacity00" id="firstVal3" style="color: brown;">'
													+ '1217</span></div></div><div id="dynamicNodes3" class="col-xs-11"></div></div>');
									$("#thirdList").after('<div id="nodeAddress3" style="margin-bottom: 7px;"'
											+ ' class="col-xs-12 margin-top15 padding00"></div>');
								}
								introNextSteps("#intrsctionMethod");
								$('.introjs-nextbutton').show();
							});
						break;
						case "retunValue":
							$("#line31, #line32, #line45, #line46, #intrsctionMethod, #line" + tempLine).remove();
							$("#firstNode1, #firstNode2").addClass("opacity00");
							$("#firstDiv1, #firstDiv2").prev().text('first');
							var text = 'The <span class="ct-code-b-yellow">intersect()</span> method returns value '
										+ 'i.e., <span class="ct-code-b-yellow"> ' + $("#nodeVal0").text() 
										+ '</span> is stored in the variable <span class="ct-code-b-yellow">l3</span>.';	
							typing('.introjs-tooltiptext', text, function() {
								introNextSteps("#animatinDiv", "l3IntrsctValueStore","bottom");
								$('.introjs-nextbutton').show();
							});
						break;
					}
				break;
				case "intrsctionMethod":
					customIntro("#l1L2Dec");
				break;
				case "l1L2Dec":
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are declaring <span class="ct-code-b-yellow">l1</span> and <span class="ct-code-b-yellow">l2</span> nodes'
							+ ' and that will be initialized to <span class="ct-code-b-yellow">intersect(l1, l2)</span> method passed value.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#animatinDiv", "l1L2Nodes");
						$('.introjs-nextbutton').show();
					});
				break;
				case "initT1T2L3":
					$('.introjs-tooltip').removeClass('hide');
					text =  'Here, we are declaring and initializing <span class="ct-code-b-yellow">t1</span> with'
							+ ' <span class="ct-code-b-yellow">l1</span> (i.e., <span class="ct-code-b-yellow">' + $("#l1Val").text()
							+ '</span>), <span class="ct-code-b-yellow">t2</span> with <span class="ct-code-b-yellow">l2</span>'
							+ ' (i.e., <span class="ct-code-b-yellow">' + $("#l2Val").text() + '</span>) and'
							+ ' <span class="ct-code-b-yellow">l3</span> with <span class="ct-code-b-yellow">NULL</span>';
					typing('.introjs-tooltiptext', text, function() {
						returnValCount = 1;
						creatingT1T2L3(function() {
							introNextSteps("#animatinDiv", "DecT1T2L3");
							$('.introjs-nextbutton').show();
						});
					});
				break;
				case "intrsctWhileCond":
					$("#line" + infoLine + ", #line" + tempLine).remove();
					customIntro("#animatinDiv", "whileCondCheck", 'left');
				break;
				case "intrsctIfCond":
					customIntro("#animatinDiv", 'intrsctIfCheck', 'left');
				break;
				case "intrsctElseIfCond":
					customIntro("#animatinDiv", 'intrsctIfElseCheck', 'left');
				break;
				case "intrsctIfT1Next":
					customIntro("#animatinDiv", "t1Next");
				break;
				case "intrsctElseIfT2Next":
					customIntro("#animatinDiv", "t2Next");
				break;
				case "callAddMethod":
					$('.introjs-tooltip').removeClass("hide");
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "methodCalling":
							text = 'Here, we are calling <span class="ct-code-b-yellow">add()</span> method and '
									+ ' passing <span class="ct-code-b-yellow">l3, t1->data</span> (i.e. '
									+ ' <span class="ct-code-b-yellow">' + $("#nodeVal0").text() + ', ' + $("#data" + nodeCount).text() 
									+ '</span>) as an arguments and the <span class="ct-code-b-yellow">return</span> value is stored in the'
									+ ' variable <span class="ct-code-b-yellow">l3</span>.';
							typing('.introjs-tooltiptext', text, function() {
								preAddMethod();
								introNextSteps("#addMethod");
								$('.introjs-nextbutton').show();
							});
						break;
						case "retunValue":
							$("#addMethod, #line" + infoLine + ", #line" + tempLine).remove();
							$("#xNode").addClass("opacity00");
							$("#xNode span").empty();
							var text = 'The <span class="ct-code-b-yellow">add()</span> method returns value '
										+ 'i.e., <span class="ct-code-b-yellow"> ' + $("#nodeVal11").text() 
										+ '</span> is stored in the variable <span class="ct-code-b-yellow">l3</span>.';	
							typing('.introjs-tooltiptext', text, function() {
								introNextSteps("#animatinDiv", "l3AddValueStore","bottom");
								$('.introjs-nextbutton').show();
							});
						break;
					}
				break;
				case "addMethod":
					customIntro("#l3XIn");
				break;
				case "l3XIn":
					$('.introjs-tooltip').removeClass("hide");
					text = 'Here, we are declaring <span class="ct-code-b-yellow">l3</span> and <span class="ct-code-b-yellow">x</span>'
							+ ' and that will be initialized to <span class="ct-code-b-yellow">add(l3, t1->data)</span> method passed value.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#animatinDiv", "l3XDec");
						returnValCount = 3;
						createLastNode(returnValCount, "l3", 11);createLastNode(returnValCount, "temp2", 4);
						createLastNode(returnValCount, "q", 5);createLastNode(returnValCount, "temp2", 3);
						createLastNode(returnValCount, "t", 6);
						$('.introjs-nextbutton').show();
					});
				break;
				case "initTQVar":
					$('.introjs-tooltip').removeClass("hide");
					text = 'Here we declaring <span class="ct-code-b-yellow">t</span> and <span class="ct-code-b-yellow">q</span> nodes, and'
							+ ' <span class="ct-code-b-yellow">q</span> is initialized with <span class="ct-code-b-yellow">l3</span>.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#animatinDiv", "decTQ");
						$('.introjs-nextbutton').show();
					});
				break;
				case "nodeCreation":
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are create a <span class="ct-code-b-yellow">nodeptr</span> with <span class="ct-code-b-yellow">'
							+ 'data</span> and <span class="ct-code-b-yellow">next</span> field and allocate'
							+ ' <span class="ct-code-b-yellow">dynamic memory</span>.';
					typing('.introjs-tooltiptext' , text, function() {
						lineCount = $(".data-div").length + 1;
						createDynamicNodes("#dynamicNodes" + returnValCount, lineCount);
						introNextSteps("#animatinDiv", "tempMemoryAlloc");
						$('.introjs-nextbutton').show();
					});
				break;
				case "tInfoVal":
					customIntro("#animatinDiv", "tInfoValue");
				break;
				case "tNextVal":
					customIntro("#animatinDiv", "tNextValue");
				break;
				case "addIfCond":
					customIntro("#animatinDiv", 'addIfCheck', 'left');
				break;
				case "ifL3Val":
					customIntro("#animatinDiv", 'l3ValueInIf');
				break;
				case "intrsctElseT1Next":
					customIntro("#animatinDiv", "elseT1Next");
				break;
				case "intrsctElseT2Next":
					customIntro("#animatinDiv", "elseT2Next");
				break;
				case "addWhileCond":
					customIntro("#elseWhileCond");
				break;
				case "elseWhileCond":
					customIntro("#animatinDiv", 'addWhileCheck', 'left');
				break;
				case "elseWhileQValue":
					customIntro("#animatinDiv", "elseWhileQVal");
				break;
				case "elseQNextVal":
					customIntro("#animatinDiv", "qNxtValue");
				break;
				case "printNode":
					customIntro("#animatinDiv", "dspFstNode", "bottom");
				break;
				case "nodeQ" :
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are declaring and initializing <span class="ct-code-b-yellow">q</span> node'
							+ ' with <span class="ct-code-b-yellow">first</span> node value.'
					typing('.introjs-tooltiptext', text, function() {
						createLastNode(nodeCount, "temp2", 4);createLastNode(nodeCount, "temp2", 4);
						createLastNode(nodeCount, "q", 1);createLastNode(nodeCount, "temp2", 3);
						createLastNode(nodeCount, "t", 2);
						introNextSteps("#animatinDiv", "decAndStreQVal", "bottom");
						$('.introjs-nextbutton').show();
					});
				break;
				case "firstIsNull":
					ifConditionCheckingText("first", " == NULL", function() {
						toEffectAnimation("#ifFstEqNull", "#ifConForAddNode", function() {
							var firstVal = $("#firstVal" + nodeCount).text().trim();
							ifConToChekisFirstEqlToNull(firstVal, "ifFirstIsNull");
						});	
					});
				break;
				case "whileQNotEqNull":
					whileConditionCheckingText("q", " != NULL", function() {
						toEffectAnimation("#checkQNxtNull", "#whileConForAddNode", function() {
							var firstVal = $("#nodeVal" + returnValCount).text().trim();  
							whileConForT1nextNotEqNull(firstVal, "whileQNotEqNull");
						});
					});
				break;
				case "qNxtToQ" :
					introNextSteps("#animatinDiv", "qNxtToQNode", "bottom");
					setTimeToIntroGoNextStep();
				break;
			}
		});
	});
	introjs.start();
	var text = "Here, we learn about <span class='ct-code-b-yellow'>Single Linked List Operations</span>"
				+ " i.e. <span class='ct-code-b-yellow'>Concat</span>,<span class='ct-code-b-yellow'>Union</span>,"
				+ " <span class='ct-code-b-yellow'>Intersect</span>.";
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
	$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
}

function checkWhileCondForisDataValIsNullOrNot() {
	var dataVal = $("#nodeDataVal" + (outputLineCount - 1)).val();
	rotationEffect("#valOfX", dataVal, function() {
		if (dataVal != -1) {
			$("#whileTrueOrFalse").html("====> <span class='ct-lime-color'>true</span>");
			zoomInEffect("#whileTrueOrFalse", function() {
				var text = "The condition evaluates to <span class='ct-lime-color'>true</span>."
					+ " So the control enters into the while-body.";
				typing("#appendText", text, function() {
					introNextSteps("#createNewTempNode", "createTempNode", "bottom");
					$('.introjs-nextbutton').show();
				});
			});
		} else {
			$("#whileTrueOrFalse").html("====> <span class='ct-code-b-red'>false</span>");
			zoomInEffect("#whileTrueOrFalse", function() {
				var text = "The condition evaluates to <span class='ct-code-b-red'>false</span>.";
				typing("#appendText", text, function() {
					printfCount = 1;
					introNextSteps("#returnFirst", "", "bottom");
					$('.introjs-nextbutton').show();
					
				});
			});
		}
	});
}

function initializeTheL1L2AndL3(idName, callBackFunction) {
	if (idName == "Val") {
		for (var i = 0; i < 3; i++ ) {
			$("#" + arr[i] + idName).text("NULL").addClass("opacity00");
		}
	}
	for(var  i = 0; i < 3; i++) {
		  zoomInEffect("#" + arr[i] + idName);
	}
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function addNegativeValuEvent(selector) {
	$(selector).on("keydown keyup", function(e) {
		$('.error-text').remove();
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if ($(this).val() == "-1") {
			$('.introjs-nextbutton').show();
			$("input").attr("disabled", true);
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

function enterValidNumberOrNot(selector) {
	$(selector).on("keydown", function(e) {
		$('.error-text').remove();
		var max = $(this).attr("maxlength");
		//backspace = 8, delete = 46, leftarrow = 37, rightarrow = 39, esc = 27, enter = 13, ctrl = 17, tab = 9;
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
		if (((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) || (e.keyCode == 13 || e.keyCode == 9)) {
			e.preventDefault();
		}
		if ($(this).val().length > max - 1) {
			$('.introjs-tooltiptext').append('<div class="error-text">Please restrict the maximum length to 3 digits only.</div>')
			e.preventDefault();
		}
	});
	$(selector).on("keyup", function(e) {
		$('.error-text').remove();
		if ($(this).val().length > 0 && (!$(this).val().startsWith('-'))) {
			$('.introjs-nextbutton').show();
		} else if ($(this).val().length >= 2 && $(this).val().indexOf('-', $(this).val().indexOf('-') + 1) == -1) {
			$('.introjs-nextbutton').show();
		} else if (!$(this).val().startsWith('-')) {
			$('.introjs-nextbutton').hide();
			$('.introjs-tooltiptext').append('<div class="error-text">Please enter number.</div>')
		} else {
			$('.introjs-nextbutton').hide();
		}
	});
}


function fadeInBounceEffectWithTimelineMax(selector1, selector2, callBackFunction) {
	var timelineMax = new TimelineMax();
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500, function() {
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		$("#explanationDiv").append("<span id='dummy' class='ct-brown-color' style='position: relative;z-index: 9999999;'>" 
			+ $(selector2).text() + "</span>");
		$('#dummy').offset({
			"top": l2.top, 
			"left": l2.left
		});
		$(selector2).text($(selector1).text());
		timelineMax.from(selector2, 1, {ease: Bounce.easeOut, top: topLength, left: leftLength, onComplete: function() {
      $(selector2).removeAttr("style")
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}}).to('#dummy', 0.5, {opacity: 1, top: parseInt($('#dummy').css("top")) - 40, onComplete: function() {
      		$(selector2).text($(selector1).text());
			$("#animationDiv").removeAttr("style");			
			$('#dummy').remove();
		}}, "-=0.5");
	});
}

function rotationEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : 90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function toEffectAnimation(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	$(selector2).offset({top:l1.top, left:l1.left});
	$(selector2).removeClass("opacity00");
	$(selector1).effect( "highlight",{color: '#ffff33'}, 500);
	TweenMax.to(selector2, 0.5, {top:0, left:0, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function fromEffectWithTweenMax(selector1, selector2, flag, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).css({"color" : "brown", "font-width" : "bold", "z-index" : "99999999"}).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	if (flag) {
		$("body").append("<span id='dummy' style='position: relative; z-index: 9999999; color: red;'>" + $(selector2).text() + "</span>");
		$("#dummy").offset({
			"top" : l2.top,
			"left" : l2.left
		});
	}
	$(selector2).removeClass('opacity00')
	$(selector1).addClass('z-index1000000').effect( "highlight",{color: '#ffff33'}, 500);
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		$(selector2).removeAttr("style").css("color", "brown");
		$(selector1).removeClass('z-index1000000');
		$("#dummy").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function zoomInEffect(selector1, callBackFunction) {
	$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(selector1).removeClass("animated zoomIn")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function setTimeToIntroGoNextStep() {
	setTimeout(function() {
		introjs.nextStep();
	},800); 
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

function ifConditionCheckingText(selector1, selector2, callBackFunction) {
	$('.introjs-tooltiptext').append("<span id='ifConForAddNode' class='opacity00 ct-code-b-yellow'>"
			+ "<span id='valOfFirst' class='position'>"+ selector1 +"</span> "+ selector2 
			+ "</span> &nbsp;&nbsp;<span id='ifTrueOrFalse' "
			+ "class='opacity00'></span><br/><spna id='appendText'></span>");
	$('.introjs-tooltip').removeClass('hide');
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function ifConToChekisFirstEqlToNull(firstVal, caseName) {
	rotationEffect("#valOfFirst", firstVal, function() {
		if (firstVal == "NULL") {
			$("#ifTrueOrFalse").html("====> <span class='ct-lime-color'>true</span>");
			zoomInEffect("#ifTrueOrFalse", function() {
				var text = "The condition evaluates to <span class='ct-lime-color'>true</span>."
					+ " So the control enters into the if-body.";
				typing("#appendText", text, function() {
					if (caseName == "ifFirstEqlToNull") {
						introNextSteps("#firstEqlToTemp", "", "bottom");
					} else if (caseName == "ifT"+ tCount +"IsNull") {
						introNextSteps("#returnT" + tCount, "", "bottom");
					} else if (caseName == "ifFirstIsNull") {
						printfCount = 7;
						introNextSteps("#printf7", "printEmpty", "bottom");
					}
					$('.introjs-nextbutton').show();
				});
			});
		} else {
			$("#ifTrueOrFalse").html("====> <span class='ct-code-b-red'>false</span>");
			zoomInEffect("#ifTrueOrFalse", function() {
				var text = "The condition evaluates to <span class='ct-code-b-red'>false</span>.";
				typing("#appendText", text, function() {
					$('.introjs-tooltip').removeClass('hide');
					if (caseName == "ifFirstEqlToNull") {
						introNextSteps("#tempToQNext", "", "bottom");
					} else if (caseName == "ifT1IsNull") {
						tCount++;
						introNextSteps("#ifT2IsNull", "", "bottom");
					} else if (caseName == "ifFirstIsNull") {
						printfCount = 8;
						introNextSteps("#printf8", "printListEle", "bottom");
					} else {
						introNextSteps("#t1StoredToT3", "", "bottom");
					}
					$('.introjs-nextbutton').show();
				});
			});
		}
	});
}

function whileConditionCheckingText(selector1, selector2, callBackFunction) {
	$('.introjs-tooltiptext').append("<span id='whileConForAddNode' class='opacity00 ct-code-b-yellow'>"
			+ "<span id='valOfX' class='position'>"+ selector1 +"</span> "+ selector2 +"</span> &nbsp;&nbsp;<span id='whileTrueOrFalse' "
			+ "class='opacity00'></span><br/><spna id='appendText'></span>");
	$('.introjs-tooltip').removeClass('hide');
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function whileConForT1nextNotEqNull(firstVal, caseName) {
	rotationEffect("#valOfX", firstVal, function() {
		if (firstVal != "NULL") {
			$("#whileTrueOrFalse").html("====> <span class='ct-lime-color'>true</span>");
			zoomInEffect("#whileTrueOrFalse", function() {
				var text = "The condition evaluates to <span class='ct-lime-color'>true</span>."
					+ " So the control enters into the while-body.";
				typing("#appendText", text, function() {
					if (caseName == "whileT1NxtNotEqNull") {
						introNextSteps("#t1nxtToT1", "", "bottom");
					} else {
						printfCount = 9;
						introNextSteps("#printf9", "printData", "bottom");
					}
					$('.introjs-nextbutton').show();
				});
			});
		} else {
			$("#whileTrueOrFalse").html("====> <span class='ct-code-b-red'>false</span>");
			zoomInEffect("#whileTrueOrFalse", function() {
				var text = "The condition evaluates to <span class='ct-code-b-red'>false</span>.";
				typing("#appendText", text, function() {
					if (caseName == "whileT1NxtNotEqNull") {
						introNextSteps("#t2StoreT1Nxt", "", "bottom");
					} else {
						printfCount = 10;
						introNextSteps("#printf10", "printNull", "bottom");
					}
					$('.introjs-nextbutton').show();
					
				});
			});
		}
	});
}

function changeQNodeAddressToQNextAdd() {
	var isL1AndL2 = $("#l1Val").text().trim() != "NULL" && $("#l2Val").text().trim() == "NULL";
	var isL2AndL1 = $("#l2Val").text().trim() != "NULL" && $("#l1Val").text().trim() == "NULL";
	if (isL1AndL2) {
		l1ValueNorEqNullAndL2ValNull();
	} else if (isL2AndL1) {
		l2ValueNorEqNullAndL1ValNull();
	} else {
		notL1AndL2();
	}
}

function l1ValueNorEqNullAndL2ValNull() {
	 svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory1", "#nextDiv"
				+ count, "#svgId", "line23", "arrow", function() {
		$("#line23").remove();
		$("#nextDiv" + count).effect( "highlight",{color: 'blue'}, 500, function() {
			$("#outData"+count).text($("#dataDiv"+count).text());
			fadeInBounceEffectWithTimelineMax("#next" + count, "#nodeVal1",  function() {
				count++;
				$("#line22").remove();
				if ($("#nodeVal1").text().trim() == "NULL") {
					introNextSteps("#whileQNotEqNull", "", "bottom");
			        setTimeToIntroGoNextStep();
				} else {
					svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory1", "#nextDiv"
					+ count, "#svgId", "line22", "arrow", function() {
                  		introNextSteps("#whileQNotEqNull", "", "bottom");
				       	setTimeToIntroGoNextStep();
                  	});	
				}
			});
		});
	 });
}

function l2ValueNorEqNullAndL1ValNull() {
	svgAnimatingLineRightToLeft("#animatinDiv", "#lastNodeMemory1", "#dataDiv"
			+ count, "#svgId", "line23", "arrow", function() {
		$("#line23").remove();
		$("#nextDiv" + count).effect( "highlight",{color: 'blue'}, 500, function() {
			$("#outData"+count).text($("#dataDiv"+count).text());
			fadeInBounceEffectWithTimelineMax("#next" + count, "#nodeVal1",  function() {
				$("#line22").remove();
				if ($("#nodeVal1").text().trim() == "NULL") {
					introNextSteps("#whileQNotEqNull", "", "bottom");
					setTimeToIntroGoNextStep();
				} else {
					count++;
					svgAnimatingLineRightToLeft("#animatinDiv", "#lastNodeMemory1", "#dataDiv"
					+ count, "#svgId", "line22", "arrow", function() {
	            		introNextSteps("#whileQNotEqNull", "", "bottom");
					  	setTimeToIntroGoNextStep();
	                });
				}
			});
		});
	});
} 

function printL1AndL2Nodes() {
	var isl1NodeData = $("#l1Val").text().trim() != "NULL" && $("#l2Val").text().trim() == "NULL";
	var isL2NodeData = $("#l2Val").text().trim() != "NULL" && $("#l1Val").text().trim() == "NULL";
	var isL3NodeData = $("#l3Val").text().trim() != "NULL" && $("#l3Val").text().trim() == "NULL";
		if (isl1NodeData || isL3NodeData) {
			printL1NodeData();
		} else if (isL2NodeData) {
			printL2NodeData();
		} else {
			if (count < fstNdeInSecdList) {
				printUpToL1LastNode();
		 } else {
			 printUpToL2LastNode();
		 }
	}
}

function printL1NodeData() {
	svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory5", "#nextDiv"
	+ count, "#svgId", "line23", "arrow", function() {
		printL1AndL2CommanCode();
	});
}

function printL2NodeData() {
	svgAnimatingLineRightToLeft("#animatinDiv", "#lastNodeMemory5", "#dataDiv"
	+ count, "#svgId", "line23", "arrow", function() {
		printL1AndL2CommanCode();
	});
}

function printUpToL1LastNode() {
	svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory5", "#nextDiv"
	+ count, "#svgId", "line23", "arrow", function() {
		printL1AndL2CommanCode();
	});
}

function printUpToL2LastNode() {
	svgAnimatingLineRightToLeft("#animatinDiv", "#lastNodeMemory5", "#dataDiv"
	+ count, "#svgId", "line23", "arrow", function() {
		printL1AndL2CommanCode();
	});
}

function printL1AndL2CommanCode() {
	$("#line23").remove();
	$("#dataDiv" + count).effect( "highlight",{color: 'blue'}, 500, function() {
		$("#outData"+count).text($("#dataDiv" + count).text());
		fromEffectWithTweenMax("#dataDiv" + count, "#outData"+count, false, function() {
           	$("#outData"+count).css("color", "yellow");
           	zoomInEffect("#arrow"+count, function() {
           		introNextSteps("#qNxtToQ", "", "bottom");
				setTimeToIntroGoNextStep();
           	});
    	});
	});
}

function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', svgMarkerId);
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$(svgId).append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#' + svgMarkerId).append(path);
}

function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + markerId + '")';
	$(svgId).append(line);
}

// from selector1 Right side to selector2 Left side
function svgAnimatingLineRightToLeft(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

// from selector1 Left side to selector2 Right side
function svgAnimatingLineLeftToRight(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

// from selector1 Bottom side to selector2 Top side
function svgAnimatingLineBottomToTop(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

// from selector1 Top side to selector2 Bottom side
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

function customIntro(stepName, animatedStep, position) {
	introNextSteps(stepName, animatedStep, position);
	setTimeToIntroGoNextStep();
}

function clickFunctions() {
	$("#concat").click(function() {
		preMain();
		$("#callCreateMethos2").after('\n<span id="callConcatMethod">l3 = concat(l1, l2);</span>\n'
									+ '<span id="p1">printf("elements in list3 : ");</span>\n'
									+ '<span id="p2">print(l3);</span>');
		introNextSteps("#inMain", "", "bottom");
		introjs.nextStep();
	});
	$("#union").click(function() {
		preMain();
		$("#callCreateMethos2").after('\n<span id="callConcatMethod">l3 = unions(l1, l2);</span>\n'
									+ '<span id="p3">printf("unions list : \n");</span>\n'
									+ '<span id="p4">print(l3);</span>');
		introNextSteps("#inMain", "", "bottom");
		introjs.nextStep();
	});
	$("#interset").click(function() {
		preMain();
		$("#callCreateMethos2").after('\n<span id="intrsctMainIfCond">if (l1 == NULL || l2 == NULL) {</span>\n'
									+ '\t<span id="printf5">printf("Intersection list is empty\\n");</span>\n'
									+ '\t<span id="retn0">return 0;</span>\n'
									+ '}\n'
									+ '<span id="callL1Srt">l1 = sort(l1);</span>\n'
									+ '<span id="callL2Srt">l2 = sort(l2);</span>\n'
									+ '<span id="printMethod1">print(l1);</span>\n'
									+ '<span id="printMethod2">print(l2);</span>\n'
									+ '<span id="callIntrsctMethod">l3 = intersect(l1, l2);</span>\n'
									+ '<span id="printf6">printf("Intersection list : \\n");</span>\n'
									+ '<span id="printMethod3">print(l3);</span>');
		introNextSteps("#inMain", "", "bottom");
		introjs.nextStep();
	});
}

function creatingT1T2L3(callBackFunction) {
	createLastNode(returnValCount, "l3", 0);createLastNode(returnValCount, "temp2", 4);
	createLastNode(returnValCount, "t1", 1);createLastNode(returnValCount, "temp2", 3);
	createLastNode(returnValCount, "t2", 2);
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function ifCondText(selector1, condition, selector2, callBackFunction) {
	text = "<span class='ct-code-b-yellow opacity00 position' id='mainCond'><span id='frstCond' class='position'>" + selector1 + "</span> "
			+ condition + " <span id='secndCond' class='position'>" + selector2 + "</span>";
	typing('.introjs-tooltiptext', text, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	})
}

function effectAndRotation(id1, clrVal, id2, val, callBackFunction) {
	$(id1).effect("highlight", {color: clrVal}, 500, function() {
		rotationEffect(id2, val, function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		})
	})
}

function mainIfCondChecking(selector, id1, id2, fromId) {
	if (selector == "mainIfCond") {
		$('.introjs-tooltiptext').append("<span class='ct-code-b-yellow opacity00 position' id=conditions><span id='condition1'"
									+ " class='position'><span id='l1Value' class='position'>l1</span> == NULL</span> ||"
									+ " <span id='condition2' class='position'><span id='l2Value' class='position'>"
									+ "l2</span> == NULL</span></span>");
		var frstCond = $(id1).text() == "NULL";
		var secndCond = $(id2).text() == "NULL";
		var mainCond = frstCond || secndCond;
	} else {
		$('.introjs-tooltiptext').append("<span class='ct-code-b-yellow opacity00 position' id=conditions><span id='condition1'"
									+ "  class='position'><span id='l1Value' class='position'>t1</span> != NULL</span> &&"
									+ "  <span id='condition2' class='position'><span id='l2Value' class='position'>t2"
									+ "</span> != NULL</span></span>");
			var frstCond = $(id1).text() != "NULL";
			var secndCond = $(id2).text() != "NULL";
			var mainCond = frstCond && secndCond;
	}
	toEffectAnimation(fromId, "#conditions", function() {
		$("#l1Value").effect("highlight", {color: 'yellow'}, 300, function() {
			effectAndRotation(id1, 'blue', '#l1Value', $(id1).text(), function() {
				effectAndRotation('#condition1', 'yellow', '#condition1', frstCond, function() {
					$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
					$('.introjs-duplicate-nextbutton').click(function() {
						$(".introjs-duplicate-nextbutton").remove();
						$("#l2Value").effect("highlight", {color: 'yellow'}, 300, function() {
							effectAndRotation(id2, 'blue', '#l2Value', $(id2).text(), function() {
								effectAndRotation('#condition2', 'yellow', '#condition2', secndCond, function() {
									$('.introjs-tooltiptext').append(' <span id="whileTrueOrFalse"></span>');
									var text1 = "Condition evaluates to ";
									if (mainCond == true) {
										$("#whileTrueOrFalse").html("====> <span class='ct-lime-color'>true</span>");
										if (selector == "mainIfCond") {
											printfCount = 5;
											introNextSteps("#printf5", "IntrsctionEmpty");
											text2 = "Hence control enters into the if-block.";
										} else {
											introNextSteps("#intrsctIfCond");
											text2 = "Hence control enters into the while-loop-block.";
										}
										text = text1 + "<span class='ct-lime-color'>true</span>. " + text2;
									} else {
										$("#whileTrueOrFalse").html("====> <span class='ct-code-b-red'>false</span>");
										if (selector == "mainIfCond") {
											$("#createAndAddNodeMethod").remove();
											preSortMethod();
											$("#srtMethod").addClass("sorting");
											introNextSteps("#callL1Srt", 'callSrt1');
											text2 = "Hence control comes out of the if-block."
										} else {
											introNextSteps("#retn2", "return2");
											printfCount = lineCount = 2;
											text2 = "Hence control comes out of the while-loop-block.";
										}
										text = text1 + "<span class='ct-code-b-red'>false</span>. " + text2;
									}
									$('.introjs-tooltiptext').append('<div id="appendText"></div>');
									zoomInEffect("#whileTrueOrFalse", function() {
										typing("#appendText", text, function() {
											$('.introjs-nextbutton').show();
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

function ifCondAnimation(selector, fromId) {
	if (selector == "intrsctIfCheck") {
		var ifCond = parseInt($("#data" + nodeCount).text()) <
		parseInt($("#data" + printfCount).text());
	} else {
		var ifCond = parseInt($("#data" + nodeCount).text()) >
		parseInt($("#data" + printfCount).text());
	}
	toEffectAnimation(fromId, "#mainCond", function() {
		$("#frstCond").effect("highlight", {color: 'yellow'}, 300, function() {
			$("#nodeVal1").effect("highlight", {color: 'blue'}, 500, function() {
				svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory1", "#nextDiv" + nodeCount,
						"#svgId", "line"+ infoLine, "arrow", function() {
					effectAndRotation("#data" + nodeCount, "blue", "#frstCond", $("#data" + nodeCount).text(), function() {
						$("#secndCond").effect("highlight", {color: 'yellow'}, 300, function() {
							$("#nodeVal2").effect("highlight", {color: 'blue'}, 500, function() {
								svgAnimatingLineBottomToTop("#animatinDiv", "#lastNodeMemory2 > div:first", "#nextDiv" 
										+ printfCount, "#svgId", "line"+ tempLine, "arrow", function() {
									effectAndRotation("#data" + printfCount, "blue", "#secndCond", $("#data" + printfCount).text(), function() {
										$('.introjs-tooltiptext').append('<span id="whileTrueOrFalse"></span>'
																	+ '<div id="appendText"></div>');
										var text1 = "Condition evaluates to ";
										if (ifCond == true) {
											$("#whileTrueOrFalse").html(" ====> <span class='ct-lime-color'>true</span>");
											text = text1 + "<span class='ct-lime-color'>true</span>."
													+ " Hence control enters into the if-block.";
											if (selector == "intrsctIfCheck") {
												introNextSteps("#intrsctIfT1Next");
											} else {
												introNextSteps("#intrsctElseIfT2Next");
											}
										} else {
											$("#whileTrueOrFalse").html(" ====> <span class='ct-code-b-red'>false</span>");
											text = text1 + "<span class='ct-code-b-red'>false</span>."
													+ " Hence control comes out of the if-block.";
											if (selector == "intrsctIfCheck") {
												introNextSteps("#intrsctElseIfCond");
											} else {
												introNextSteps("#callAddMethod", "methodCalling");
											}
										}
										typing('#appendText', text, function() {
											$("#line" + infoLine + ", #line" + tempLine).remove();
											$('.introjs-nextbutton').show();
										})
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

function t1NxtAnimation(callBackFunction) {
	$("#nodeVal1").effect("highlight", {color: 'blue'}, 500, function() {
		svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory1", "#nextDiv" + nodeCount, 
				"#svgId", "line"+ infoLine, "arrow", function() {
			fadeInBounceEffectWithTimelineMax("#next" + nodeCount, "#nodeVal1", function() {
				//if (nodeCount <= $("#dynamicNodes1 .data-div").length) {
				$("#line45").remove();
				svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory1", "#nextDiv"
						+ nodeCount, "#svgId", "line45", "arrow", function() {
					nodeCount++;
					$("#line" + infoLine + ", #line" + tempLine).remove();
					if (typeof callBackFunction === "function") {
						callBackFunction();
					}
				});
			});
		});
	});
}

function t2NxtAnimation(callBackFunction) {
	$("#nodeVal2").effect("highlight", {color: 'blue'}, 500, function() {
		svgAnimatingLineBottomToTop("#animatinDiv", "#lastNodeMemory2 > div:first", "#nextDiv" + printfCount, 
				"#svgId", "line"+ tempLine, "arrow", function() {
			fadeInBounceEffectWithTimelineMax("#next" + printfCount, "#nodeVal2", function() {
				//if (printfCount <= $("#dynamicNodes2 .data-div").length) {
				$("#line46").remove();
				svgAnimatingLineBottomToTop("#animatinDiv", "#lastNodeMemory2 div:first", "#nextDiv"
							+ printfCount, "#svgId", "line46", "arrow", function() {
					$("#line" + infoLine + ", #line" + tempLine).remove();
					printfCount++;
					if (typeof callBackFunction === "function") {
						callBackFunction();
					}
				});
			});
		});
	});
}

function preSortMethod() {
	$("#sllOperations").append('<div id="srtMethod">nodeptr sort(<span id="firstNodeIn">nodeptr first</span>) {\n'
			 				+ '\t<span id="initT1T2">nodeptr t1, t2;</span>\n'
			 				+ '\t<span id="initX">int x;</span>\n'
			 				+ '\t<span id="srtForLoop">for(t1 = first; t1->next != NULL; t1 = t1->next) {\n'
							+ '\t\tfor(t2 = t1->next; t2 != NULL; t2 = t2->next) {\n'
							+ '\t\t\tif (t1->data > t2->data) {\n'	
							+ '\t\t\t\tx = t1->data;\n'
							+ '\t\t\t\tt1->data = t2->data;\n'
							+ '\t\t\t\tt2->data = x;\n'
							+ '\t\t\t}\n\t\t}\n\t}</span>\n'
							+ '\t<span id="retn3">return first;</span>\n}</div>');
}

function sortingLoops() {
	$("#sortingLogic").append('<span id="nodeSrtLogic">\t<span id="frLoop1">for(<span id="loop1Init">t1 = first</span>; '
			+ ' <span id="loop1Cond">t1->next != NULL</span>; <span id="loop1Inc">t1 = t1->next</span>) {</span>\n'
			+ '\t\t<span id="frLoop2">for(<span id="loop2Init">t2 = t1->next</span>; <span id="loop2Cond"">t2 != NULL</span>;'
			+ ' <span id="loop2Inc">t2 = t2->next</span>) {</span>\n'
			+ '\t\t\t<span id="loopIfCond">if (t1->data > t2->data) {</span>\n'
			+ '\t\t\t\t<span id="ifXVal">x = t1->data</span>;\n'
			+ '\t\t\t\t<span id="t1InfoVal">t1->data = t2->data;</span>\n'
			+ '\t\t\t\t<span id="t2InfoVal">t2->data = x;</span>\n'
			+ '\t\t\t}\n\t\t}\n\t}</span>');
}

function preIntersectionMethod() {
	$("#sllOperations").append('<div id="intrsctionMethod">nodeptr intersect(<span id="l1L2Dec">nodeptr l1, nodeptr l2</span>) {\n'
							+ '\t<span id="initT1T2L3">nodeptr t1 = l1, t2 = l2, l3 = NULL;</span>\n'
							+ '\t<span id="intrsctWhileCond">while(<span id="whileInside">t1 != NULL && t2 != NULL</span>) {</span>\n'
		    				+ '\t\t<span id="intrsctIfCond">if (t1->data < t2->data) {</span>\n'
							+ '\t\t\t<span id="intrsctIfT1Next">t1 = t1->next;</span>\n'
							+ '\t\t} <span id="intrsctElseIfCond">else if (t1->data > t2->data) {</span>\n'
							+ '\t\t\t<span id="intrsctElseIfT2Next">t2 = t2->next;</span>\n'
							+ '\t\t} else {\n'
							+ '\t\t\t<span id="callAddMethod">l3 = add(l3, t1->data);</span>\n'
							+ '\t\t\t<span id="intrsctElseT1Next">t1 = t1->next;</span>\n'
							+ '\t\t\t<span id="intrsctElseT2Next">t2 = t2->next;</span>\n'
			     	 		+ '\t\t}\n\t}\n'
			     	 		+ '\t<span id="retn2">return l3;</span>\n}</div>');
}

function preAddMethod() {
	$("#intrsctionMethod").after('<div id="addMethod">nodeptr add(<span id="l3XIn">nodeptr l3, int x</span>) {\n'
							+ '\t<span id="initTQVar">nodeptr t, q = l3;</span>\n'
							+ '\t<span id="nodeCreation">t = (nodeptr)malloc(sizeof(struct list));</span>\n'
							+ '\t<span id="tInfoVal">t->data = x;</span>\n'
							+ '\t<span id="tNextVal">t->next = NULL;</span></span>\n'
							+ '\t<span id="addIfCond">if (l3 == NULL) {</span>\n'
							+ '\t\t<span id="ifL3Val">l3 = t;</span>\n'
							+ '\t} else {\n'
							+ '\t\t<div id="addWhileCond" class="position"><span id="elseWhileCond">while(q->next != NULL) {</span>\n'
							+ '\t<div id="elseWhileQValue" class="position">q = q->next;</div>\n'
							+ '}</div>\n\t\t<span id="elseQNextVal">q->next = t;</span>\n'
							+ '\t}\n\t<span id="retn4">return l3;</span>\n}</div>');
}


function prePrintfFunctionOperation() {
	$("#sllOperations").append('<div id="prePrintMethod">void print(<span id="printNode">nodeptr first</span>) {\n'
							+ '\t<span id="nodeQ">nodeptr q = first;</span>\n'
							+ '\t<span id="firstIsNull">if (<span id="ifFstEqNull">first == NULL</span>) {</span>\n'
							+ '\t\t<span id="printf7">printf("Empty\n");</span>\n'
							+ '\t} else {\n'
							+ '\t\t<span id="printf8">printf("Elements in list are:");</span>\n'
							+ '\t\t<span id="whileQNotEqNull">while (<span id="checkQNxtNull">q != NULL</span>) {</span>\n'
							+ '\t\t\t<span id="printf9">printf("%d---> ",q -> data);</span>\n'
							+ '\t\t\t<span id="qNxtToQ">q = q -> next;</span>\n\t\t}\n'
							+ '\t\t<span id="printf10">printf("NULL\\n");</span>\n\t}\n}\n</div>');
}

function ifConditionText(selector1, selector2, callBackFunction) {
	var text = '<span id="mainSpan" class="ct-code-b-yellow opacity00 position"><span id="selector1Span" class="position">'
				+ selector1 + '</span><span id="selector2Span" class="position">' + selector2 + '</span></span>';
	typing('.introjs-tooltiptext', text, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function popover(selector, position) {
	$(selector).popover({
		placement: position,
		viewport: selector,
		html: true,
		trigger: "focus",
		content: '<div id="popover"></div>',
	});
	$(selector).popover('show');
	$(".popover").css("top" , "0");
}

function faArrow(fromId, toId, callBackFunction) {
	$(".arrow").remove();
	$('body').append("<i class='fa fa-arrow-right arrow faa-passing animated' style='position: relative; z-index: 10000000;'></i>");
	var l = $(fromId).offset();
	$('.arrow').offset({
		'top': l.top,
		'left': l.left - ($('.arrow').outerWidth() * 2)
	});
	var l1 = $(fromId).offset();
	var l2 = $(toId).offset();
	var topLength = parseInt($(".arrow").css("top")) + (l2.top - l1.top);
	var leftLength = parseInt($(".arrow").css("left")) + (l2.left - l1.left);
	TweenMax.to(".arrow", 0.5, { top : topLength, left : leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function frloop1InitText(idxVal) {
	$('.introjs-duplicate-nextbutton, .popover').remove();
	$('#srtingExplanation').removeClass('hide'); 
	returnValCount = 1;
	faArrow('#frLoop1', '#frLoop1', function() {
		$('#loop1Init').effect( "highlight",{color: 'blue'}, 800, function() {
			text1 = '<span class="ct-code-b-black">t1</span> is initialized to <b class="ct-blue-color">first</b>'
					+ ' (i.e., <b class="ct-blue-color">'
			if ($("#srtMethod").hasClass("sorting")) {
				nodeCount = 0;
				text = text1 + $("#firstVal" + returnValCount).text() + '</b>). <span id="appendButton"></span>'; 
				$("#nodeVal" + returnValCount).text($("#firstVal" + returnValCount).text()).addClass("opacity00");
				fromEffectWithTweenMax("#firstVal" + returnValCount, "#nodeVal" + returnValCount, false, function() {
					svgAnimatingLineLeftToRight("#animatinDiv", "#lastNodeMemory" + returnValCount, "#firstDiv" + returnValCount, 
							"#svgId", "line" + tempLine, "arrow", function() {
						typing('#srtExplain', text, function() {
							$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick=frLoop1CondCheck("  
										+ idxVal + ")>Next &#8594;</a>");
						});
					});
				});
			} else {
				nodeCount = idxVal - 1;
				text = text1 + $("#firstVal" + (returnValCount + 1)).text() + '</b>). <span id="appendButton"></span>';
				$("#nodeVal" + returnValCount).text($("#firstVal" + (returnValCount + 1)).text()).addClass("opacity00");
				fromEffectWithTweenMax("#firstVal" + (returnValCount + 1), "#nodeVal" + returnValCount, false, function() {
					svgAnimatingLineLeftToRight("#animatinDiv", "#lastNodeMemory" + returnValCount, "#firstDiv" + (returnValCount + 1), 
							"#svgId", "line" + tempLine, "arrow", function() {
						typing('#srtExplain', text, function() {
							$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick=frLoop1CondCheck("  
										+ idxVal + ")>Next &#8594;</a>");
						});
					});
				});	
			}
		});
	});
}

function frLoop1CondCheck(idxVal) {
	$('.introjs-duplicate-nextbutton, .introjs-duplicate-skipbutton').remove();
	nodeCount++;
	$('#loop1Cond').css('background', 'lightgreen').effect( "highlight",{color: 'blue'}, 800, function() {
		$("#nodeVal" + returnValCount).effect("highlight", {color: 'blue'}, 500, function() {
			svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory" + returnValCount, "#next" + idxVal, 
					"#svgId", "line" + infoLine, "arrow", function() {
				$("#next" + idxVal).effect("highlight", {color: 'blue'}, 500, function() {
					var text1 = '<span class="ct-code-b-black">t1->next != NULL</span> evaluates to ';
					if ($("#next" + idxVal).text() != "NULL") {
						text = text1 + '<span class="ct-code-b-green">true</span>.&nbsp; <span id="appendButton"></span>';
						typing('#srtExplain', text, function() {
							if (flag) {
								$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'" 
							 			+ "onclick=frLoop2InitText(" + idxVal + ")>Next &#8594;</a>");
							} else {
								setTimeout(function() {
									frLoop2InitText(idxVal);
								}, 500);
							}
						});
					} else {
						$("#dynamicNodes" + count + " .data-div").not(".completed").first().addClass("completed");
						text = text1 + '<span class="ct-code-b-red">false</span>.&nbsp; <span id="appendButton"></span>';
						typing('#srtExplain', text, function() {
							$('#loop1Cond').css('background', '');
							$('#temp' + infoLine).remove();
							$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'" 
						 			+ "onclick=endingText()>Next &#8594;</a>");
						});
					}
				});
			});
		});
	});
}

function endingText() {
	$('.introjs-duplicate-skipbutton, .introjs-duplicate-nextbutton, .fa').remove();
	$("#dynamicNodes" + count + " .data-span").removeAttr("style");
	text = 'All elements are sorted successfully. <span id="appendButton"></span>';
	typing('#srtExplain', text, function() {
		$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'>next &#8594;</a>");
		$('.introjs-duplicate-nextbutton').click(function() {
			$('.introjs-duplicate-nextbutton').remove();
			lineCount = 3;
			$("#srtExplain, #sortingLogic").empty('');
			$("#srtingExplanation, #sortingDiv").addClass("hide");
			introNextSteps("#retn3", 'return3');
			introjs.nextStep();
		});
	});
}

function frLoop1IncText(idxVal) {
	$('.introjs-duplicate-skipbutton').addClass('opacity00');
	$('.introjs-duplicate-nextbutton, #line' + tempLine + ", #line" + qLine).remove();
	faArrow('#frLoop2', '#frLoop1', function() {
		text = '<span class="ct-code-b-black">t1 = t1->next</span> &nbsp; <span id="appendButton"></span>';
		typing('#srtExplain', text, function() {
			if (flag) {
				$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'" 
				 		+ "onclick=frLoop1Inc(" + idxVal + ")>Next &#8594;</a>");
			} else {
				setTimeout(function() {
					frLoop1Inc(idxVal);
				}, 500);
			}
		});
	});
}

function frLoop1Inc(idxVal) {
	$('.introjs-duplicate-nextbutton').remove();
	$('#loop1Inc').effect( "highlight",{color: 'blue'}, 500, function() {
		returnValCount = 1;
		$("#nodeVal" + returnValCount).effect( "highlight",{color: 'blue'}, 500, function() {
			svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory" + returnValCount, "#next" + (idxVal - 1), 
						"#svgId", "line" + tempLine, "arrow", function() {
				fadeInBounceEffectWithTimelineMax("#next" + (idxVal - 1), "#nodeVal" + returnValCount, function() {
					flag = false;
					$('#autoCompleButtons').append("<a class='introjs-button introjs-duplicate-skipbutton'" 
						 	+ "onclick=sorting(" + idxVal + ")>Auto Complete &#8594;</a>");
					$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick=frLoop1CondCheck(" + idxVal + ");>"
									+ "Next &#8594;</a>");
				});
			});
		});
	});
}

function frLoop2InitText(idxVal) {
	$('.introjs-duplicate-nextbutton, #line' + infoLine).remove();
	$('#loop1Cond').css('background', '');
	returnValCount = 2;
	faArrow('#frLoop1', '#frLoop2', function() {
		text = '<span class="ct-code-b-black">t2</span> is initialized to <b class="ct-blue-color">t1->next</b> (i.e., '
				+ '<b class="ct-blue-color">' + $("#next" + idxVal).text() + '</b>).&nbsp; <span id="appendButton"></span>';
		typing('#srtExplain', text, function() {
			$('#loop2Init').effect( "highlight",{color: 'blue'}, 800, function() {
				$("#nodeVal" + (returnValCount - 1)).effect("highlight", {color: 'blue'}, 500, function() {
					svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory" + (returnValCount - 1), "#nextDiv" + idxVal, 
							"#svgId", "line" + infoLine, "arrow", function() {
						fadeInBounceEffectWithTimelineMax("#next" + idxVal, "#nodeVal" + returnValCount, function() {
							$("#line" + infoLine).remove();
							svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory" + returnValCount, "#nextDiv" + idxVal, 
									"#svgId", "line" + qLine, "arrow", function() {
								$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'" 
				 					+ "onclick=frLoop2CondCheck(" + idxVal + ")>Next &#8594;</a>");
							});
						});
					});
				}); 
			});
		});
	});
}

function frLoop2CondCheck(idxVal) {
	$('.introjs-duplicate-nextbutton, #line' + infoLine).remove();
	$('#loop2Cond').css('background', 'lightgreen').effect( "highlight",{color: 'blue'}, 800, function() {
		$("#nodeVal" + returnValCount).effect("highlight", {color: 'blue'}, 500, function() {
			var text1 = '<span class="ct-code-b-black">t2 != NULL</span> evaluates to ';
			if ($("#next" + idxVal).text() != "NULL") {
				text = text1 + '<span class="ct-code-b-green">true</span>.&nbsp; <span id="appendButton"></span>';
				typing('#srtExplain', text, function() {
					if (flag) {
						$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'" 
					 			+ "onclick=checkIfCondition(" + idxVal + ")>Next &#8594;</a>");
					} else {
						setTimeout(function() {
							checkIfCondition(idxVal);
						}, 500);
					}
				});
			} else {
				$('#loop2Cond').css('background', '');
				text = text1 + '<span class="ct-code-b-red">false</span>.&nbsp; '
						+ '<br/></span> <span id="appendButton"></span>';
				typing('#srtExplain', text, function() {
					$("#dynamicNodes" + count + " .data-div").not(".completed").first().addClass("completed");
					$('.introjs-duplicate-skipbutton').remove();
					$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'" 
					 						+ "onclick=frLoop1IncText(" + ($('.completed').length + 1) + ")>Next &#8594;</a>");
				});
			}
		});
	});
}


function frLoop2IncrementText(idxVal) {
	$('#loop2Cond').css('background', '');
	$('.introjs-duplicate-nextbutton, #line' + infoLine).remove();
	faArrow('#ifXVal', '#frLoop2', function() {
		text = 'Now, <span class="ct-code-b-black">t2 = t2->next</span>&nbsp; <span id="appendButton"></span>';
		typing('#srtExplain', text, function() {
			if (flag) {
				$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'" 
					 		+ "onclick=frLoop2Increment(" + idxVal + ")>Next &#8594;</a>");
			} else {
				setTimeout(function() {
					frLoop2Increment(idxVal);
				}, 500);
			}
		});
	});
}

function frLoop2Increment(idxVal) {
	$('#ifXVal, #t1InfoVal, #t2InfoVal').css('background', '');
	$('.introjs-duplicate-nextbutton').remove();
	$('#loop2Inc').effect( "highlight",{color: 'blue'}, 500, function() {
		$("#line" + qLine).remove();
		idxVal++;
		$("#nodeVal" + returnValCount).effect( "highlight",{color: 'blue'}, 500, function() {
			svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory" + returnValCount, "#nextDiv" + idxVal, 
						"#svgId", "line" + qLine, "arrow", function() {
				fadeInBounceEffectWithTimelineMax("#next" + idxVal, "#nodeVal" + returnValCount, function() {
					flag = false;
					setTimeout(function() {
						frLoop2CondCheck(idxVal);
					}, 500);
				});
			});
		});
	});
}

function checkIfCondition(idxVal) {
	$('.introjs-duplicate-nextbutton').remove();
	$('#loop2Cond').css('background', '');
	faArrow('#frLoop2', '#loopIfCond', function() {
		$('#loopIfCond').effect( "highlight",{color: 'blue'}, 500, function() {
			var t1 = parseInt($("#data" + nodeCount).text());
			var t2 = parseInt($("#data" + (idxVal + 1)).text());
			var text1 = '<span class="ct-code-b-black">t1->data > t2->data</span> evaluates to ';
			if (t1 > t2) {
				text = text1 + '<span class="ct-code-b-green">true</span>. <span id="appendButton"></span>';
				typing('#srtExplain', text, function() {
					setTimeout(function() {
						swapElements(idxVal);
					}, 500);
				});
			} else {
				text = text1 + '<span class="ct-code-b-red">false</span>. <span id="appendButton"></span>';
				typing('#srtExplain', text, function() {
					if (flag) {
						$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'" 
					 			+ "onclick=frLoop2IncrementText(" + idxVal + ")>Next &#8594;</a>");
					} else {
						setTimeout(function() {
							frLoop2IncrementText(idxVal);
						}, 500);
					}
				});
			}
		});
	});
}

function swapElements(idxVal) {
	faArrow('#loopIfCond', '#ifXVal', function() {
		text = 'Now swap the elements. <span id="appendButton"></span>';
		typing('#srtExplain', text, function() {
			$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
			$('.introjs-duplicate-nextbutton').click(function() {
				$('.introjs-duplicate-nextbutton').remove();
				$('#ifXVal, #t1InfoVal, #t2InfoVal').css('background', 'lightgreen');
				$('#ifXVal').effect( "highlight",{color: 'blue'}, 500, function() {
					$("#nodeVal" + (returnValCount -1)).effect( "highlight",{color: 'blue'}, 500, function() {
						svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory" + (returnValCount -1), "#nextDiv" + nodeCount, 
								"#svgId", "line" + infoLine, "arrow", function() {
							fadeInBounceEffectWithTimelineMax("#data" + nodeCount, "#xVal", function() {
								$("#line" + infoLine).remove();
								$('#t1InfoVal').effect( "highlight",{color: 'blue'}, 500, function() {
									$("#nodeVal" + returnValCount).effect( "highlight",{color: 'blue'}, 500, function() {
										svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory" + returnValCount, "#nextDiv" 
												+ (idxVal + 1), "#svgId", "line" + infoLine, "arrow", function() {
											fadeInBounceEffectWithTimelineMax("#data" + (idxVal + 1), "#data" + nodeCount, function() {
												$('#t2InfoVal').effect( "highlight",{color: 'blue'}, 800, function() {
													fadeInBounceEffectWithTimelineMax("#xVal", "#data" + (idxVal + 1), function() {
														$("#line" + infoLine).remove();
														setTimeout(function() {
															frLoop2IncrementText(idxVal);
														},500);
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
			});	
		});
	});
}

function sorting(idxVal) {
	$(".introjs-duplicate-skipbutton, .introjs-duplicate-nextbutton, #line" + infoLine + ", #line" + tempLine + ", #line" + qLine).remove();
	if ($("#srtMethod").hasClass("sorting")) {
		nodeCount = $('.completed').length;
		idxVal = nodeCount + 1;
		returnValCount = 1;
		if (idxVal <= $("#dynamicNodes" + returnValCount + " .data-div").length) {
			mainFrSorting(idxVal);
		}
	} else {
		nodeCount = $('.completed').length;
		idxVal = nodeCount + 1;
		returnValCount = 2;
		if (idxVal <= $(".data-div").length) {
			mainFrSorting(idxVal);
		}
	}
}

function linkedListSorting(idxVal) {
	if ($("#next" + (idxVal)).text() != "NULL") {
		var t1 = parseInt($("#data" + (nodeCount + 1)).text());
		var t2 = parseInt($("#data" + (idxVal + 1)).text());
		var elmt1 = $("#data" + (nodeCount + 1));
		var elmt2 = $("#data" + (idxVal + 1));
		$(elmt1).parent().effect("highlight", {color: 'pink'}, 400, function() {
			if (t1 > t2) {
				var l1 = elmt1.text(t2).offset();
				var l2 = elmt2.text(t1).offset();
				$("#xVal").text(t1);
				var leftLength = l2.left - l1.left;
				$("#eleAtInnerIdxVal").text(t1);
				TweenMax.from(elmt1, 0.2, {"left" : leftLength});
				TweenMax.from(elmt2, 0.2, {"left" : -leftLength, onComplete:function() {
        			idxVal++;
        			linkedListSorting(idxVal);
      			}});
			} else {
			  idxVal++;
			  linkedListSorting(idxVal);
			}
		});
	} else {
		$("#dynamicNodes" + count + " .data-div").not(".completed").first().addClass("completed");
		idxVal = $('.completed').length + 1;
		nodeCount = nodeCount + 1;
		mainFrSorting(idxVal);
	}
}

function mainFrSorting(idxVal) {
	if ($("#next" + (nodeCount)).text() != "NULL") {
		linkedListSorting(idxVal);
	} else {
		endingText();
	}
}
</script>

	<div class="col-xs-12 padding00">
		<div class="ct-box-main">
			<div class="text-center">
				<h1 class="label ct-demo-heading text-center" id="headdingSection">SLL with Concat, Union and intersect Operations</h1>
			</div> 
		</div>
		<div class='buttons-div hide'>
			<button type="button" class="btn btn-warning opacity00" id="restartBtn">Restart</button>
		</div>
		<div class="col-xs-12 opacity00" id="explanationDiv">
			<div class="col-xs-4 padding00">
				<pre class="creamPreTab opacity00" id="structTypelist"></pre>
				<!-- <pre class="creamPreTab opacity00" id="createNodeMethod"></pre> -->
				<pre class="creamPreTab opacity00" id="inMain"></pre>
				<pre class="creamPreTab opacity00" id="sllOperations"></pre>
			</div>
			<div class="col-xs-8"> 
				<div class="col-xs-12 box-border padding00">
					<div class="col-xs-12 margin-top15">
						<div class="col-xs-12 box-border text-center" id="buttonDiv"></div>
						<div class="margin-top15 col-xs-12 box-border" id="animationParent">
							<div class="col-xs-12 margin-7 padding00" id="animatinDiv">
								<div class="col-xs-12 animationDiv box-border">
									<div class="col-xs-12 padding00 margin-top15" id="NoOfLists"></div>
									<div class="col-xs-12 padding00 list1" id="firstList"></div>
									<div class="col-xs-12 padding00" id="nodeAddress1"></div>
									<div class="col-xs-12 padding00 list2" id="secondList"></div>
									<div class="col-xs-12 padding00" id="nodeAddress2"></div>
								</div>
							</div>
							<div id="sortingDiv" class="col-xs-12 box-border hide" style="margin-bottom: 10px;">
								<pre class="col-xs-7 padding00 creamPreTab margin-7" id="sortingLogic"></pre>
								<div id="srtingExplanation" class="col-xs-4 box-border margin-7 hide srt-css">
									<div id="srtExplain" style="min-height: 140px;"></div><div id="autoCompleButtons"></div>
								</div>
							</div>
						</div>
						<div class="col-xs-12 padding00 margin-top15">
							<div class="col-xs-12 padding00">
								<div class="col-xs-12 margin-top" id="outputDiv">
									<div id="consoleId" class="center">
										<div class="output-console-title-bar">
											<span class="title"><b>Console</b></span>
										</div>
										<div class="output-console-body" id="consoleBodyDiv"></div>
									</div>
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