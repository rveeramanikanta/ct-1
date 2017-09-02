<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/animate.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/font-awesome-animation.min.css" rel="stylesheet">
<link href="/css/custom-styles.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/gs/TimelineLite.min.js"></script>
<title>Double ended queue using array</title>
<style>

.border {
	border: 1px solid gray;
}

span, i {
	position: relative;
}

.table-css {
	width: 75%;
	position: relative;
}

.table-border {
	border: 2px solid gray;
}

#buttons > div {
	display: inline;
	padding: 0 20px;
}

.margin-top20 {
	margin-top: 20px;
}

.buttons-div {
	padding: 10px 0;
}

.btn-success {
	padding: 4px 8px;
	font-family: monospace;
	font-weight: bold;
	color: black;
}

.animation-div {
	min-height: 300px;
}

button {
    font-family: monospace;
    letter-spacing: 1px;
    box-shadow: 1px 2px 4px 0;
    color: black;
}
.padding10 {
	padding: 10px;
}

pre {
	white-space: pre;
	margin: 5px;
}

.table-padding {
	padding: 90px 0px;
}

.z-index-css {
	z-index: 99999999;
	position: relative;
}

.z-index-transfer {
	z-index:9999999;
}

.z-index-background-color {
	background-color: white;
}

.introjs-fixParent {
	position: relative !important;
}

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 14px;
	margin-bottom: 14px;
	height: 100px;
	overflow: auto;
	padding: 10px;
	white-space: pre-line;
}

.x-border {
	border: 2px solid gray;
	padding: 4px 17px;
	border-radius: 4px;
}

.yellow-color {
	color: yellow;
	font-weight: bold;
}

.display-none {
	display: none;
}

.display-inline-css {
	display: inline-block;;
}

.nextButton {
	background-color: green;
}

.green-color {
	color: green;
	font-weight: bold;
}

.darkblue-color {
	color: darkblue;
	font-weight: bold;
}

.red-color-css {
	color: red;
}

.white-color {
	color: white;
}

.blue-color {
	color: blue;
	font-weight: bold;
	font-family: monospace;
}

.ct-blue-color {
	font-weight: bold;
}

.disabled {
	pointer-events: none;
}

</style>
</head>
<body>
<div>
	<h2 class="text-center">
		<span class="label label-default ct-demo-heading" id="heading">DeQueue using array</span>
	</h2>
</div>
<div class="col-xs-12 margin-top20">
	<div class="col-xs-4">
		<div class="col-xs-12 border visibility-hidden padding10" id = "codingDiv">
<pre id ="globalCode" class='opacity00'>
<div class="display-inline-css" id="arrayLength"><span id="maxLength">#define MAX 10;</span>
<span id="queueMax">int queue[MAX];</span></div>
<span id="frontRareDecleration">int front = -1, rear = -1;</span></pre>
			<div id ="methodCodeDiv" class="opacity00">
<pre id="mainMethod"><div class="blue-color">In main() method</div><div class="hide display-inline-css" id="injectMainMethod"><span id="injectIf">if (<span id="injectIfCond"><span id="injectFlipRear" class="display-inline-css">rear</span> == <span id="flipMax" class="display-inline-css">MAX-1</span></span>) {</span>
  <span id="injectIfPrint">printf("DeQueue is over flow");</span>
<span id="injectElse">} else {</span>
  <span id="elsePrint">printf("Enter a value : ");</span>
  <span id="elseScan">scanf("%d", &x);</span>
  <span id="callinject">inject(x);</span>
<span>}</span></div><div class="display-inline-css hide" id="ejectMainMethod"><span id="ejectIf">if (<span id="ejectIfCond"><span id="ejectFlipRear" class="display-inline-css">rear</span> == -1</span>)</span>
  <span id="ifPrint">printf("DeQueue is under flow");</span>
<span id="else">else</span>
  <span id="ejectElsePrint">printf("The deleted value : %d", eject());</span> 
</div><div class="display-inline-css hide" id="pushMainMethod"><span id="pushIf">if (<span id="pushIfCond"><span id="pushFlipFront" class="display-inline-css">front</span> <= 0</span>) {</span>
  <span id="pushifPrint">printf("DeQueue is over flow");</span>
<span id="pushElse">} else {</span>
  <span id="pushElsePrint">printf("Enter a value : ");</span>
  <span id="pushElseScan">scanf("%d", &x);</span>
  <span id="callPush">push(x);</span>
<span>}</span></div><div class="display-inline-css hide" id="popMainMethod"><span id="popIf">if (<span id="popIfCond"><span id="popFlipFront" class="display-inline-css">front</span> == -1</span>)</span>
  <span id="popIfPrint">printf("DeQueue is under flow");</span>
<span id="else">else</span>
  <span id="popElsePrint">printf("The deleted value : %d", pop());</span>
</div><div class="display-inline-css hide" id="displayMainMethod"><span id="displayIf">if (<span id="ifCondition"><span id="displayFlipFront" class="display-inline-css">front</span> == -1</span>)</span>
  <span id="displayPrint">printf("DeQueue is empty...");</span>
<span id="else">else</span>
  <span id="callPrint">print();</span></div></pre>
<pre id="methodCode">
<div class="display-inline-css hide" id="injectMethod"><span>void inject(int x) {</span>
  <span id="injectLine1">queue[++rear] = x;</span>
  <span id="injectLine2">if (<span id="injectifCond2"><span id="flipFront2" class="display-inline-css">front</span> == -1</span>)</span> 
    <span id="injectLine3">front = 0;</span>
<span>}</span>
</div><div class="display-inline-css hide" id="ejectMethod">
<span>int <span id="ejectMethodName">eject</span>() {</span>
  <span id="ejectLine1">int x;</span>
  <span id="ejectLine2">x = queue[<span id="changeRear">rear</span>];</span>
  <span id="ejectLine3">if (<span id="ejectifCond2"><span id="flipFront1" class="display-inline-css">front</span> == <span id="flipRear1" class="display-inline-css">rear</span></span>) {</span>
    <span id="ejectLine4">front = rear = -1;</span>
  <span id="ejectLine5">} else {</span>
    <span id="ejectLine6">rear--;</span>
  <span id="ejectLine7">}</span>
  <span id="ejectLine8">return x;</span>
<span>}</span>
</div><div class="display-inline-css hide" id="pushMethod">
<span>void push(int x) {</span>
	<span id="pushLine1">queue[--front] = x;</span>
<span>}</span>
</div><div class="display-inline-css hide" id="displayMethod">
<span>void print() {</span>
  <span id="displayLine1">int i;</span>
  <span id="displayLine2">printf("Elements in the list are : ")</span>
  <span id="displayLine3">for (i = front; i <= rear; i++) {</span>
    <span id="displayLine4">printf(" %d", queue[i]);</span>
  <span>}</span>
<span>}</span>
</div></pre>
			</div>
		</div>
	</div>
	<div class="col-xs-8">
		<div class="col-xs-12">
			<div class="col-xs-offset-2 col-xs-8 text-center padding0 border buttons-div opacity00" id="buttons">
				<div>
					<button type="button" id="injectBtn" class="btn btn-success btn-xs margintop method-buttons disabled">inject</button>
				</div>
				<div>
					<button type="button" id="ejectBtn" class="btn btn-success btn-xs margintop method-buttons disabled">eject</button>
				</div>
				<div>
					<button type="button" id="pushBtn" class="btn btn-success btn-xs margintop method-buttons disabled">push</button>
				</div>
				<div>
					<button type="button" id="popBtn" class="btn btn-success btn-xs margintop method-buttons disabled">pop</button>
				</div>
				<div>
					<button type="button" id="displayBtn" class="btn btn-success btn-xs margintop method-buttons disabled">display</button>
				</div>
			</div>
		</div>
		<div class="col-xs-12 border margin-top20 animation-div opacity00" id= "animationDiv">
			<div class="col-xs-12 margin-top20 opacity00 x-div" id="xDiv" align ="center">
				<span id="frontVariable"><span class="darkblue-color">front = </span>&emsp;
				<span class="x-border opacity00" id ="frontValueBorder"><span class="front-value green-color" id="frontValue">-1</span></span>&emsp;</span>
				<span id="rearVariable"><span class="darkblue-color">rear = </span>&emsp;
				<span class="x-border opacity00" id ="rearValueBorder"><span class="rear-value green-color" id="rearValue">-1</span></span>&emsp;</span>
				<span id="xVariable" class="opacity00"><span class="darkblue-color" id = "x">x = </span>&emsp;
				<span class="x-border" id ="xValueBorder"><span class="x-value visibility-hidden green-color" id="xValue">354</span></span></span>
			</div>
			<div id ="totalTable" class="text-center table-padding">
				<div class="col-xs-12">
					<table id ="animationTable" class="opacity00 table-css" align="center">
						<tr id="upperArrowText">
							<%for( int i = 0; i < 10; i++) {%>
								<td class="opacity00" id="rear<%=i%>"><span class="ct-blue-color">rear</span></td>
							<%} %>
						</tr>
						<tr id="upperArrow">
							<%for( int i = 0; i < 10; i++) {%>
								<td class="opacity00" id="rearArrow<%=i%>"><i class="fa fa-arrow-down" aria-hidden="true"></i></td>
							<%} %>
						</tr>
						<tr id="arrayIndex">
							<%for( int i = 0; i < 10; i++) {%>
								<td id="index<%=i%>"><%=i%></td>
							<%} %>
						</tr>
						<tr id="arrayValues">
							<%for( int i = 0; i < 10; i++) {%>
								<td class ="table-border green-color opacity00" id="box<%=i%>"><span class="green-color">00</span></td>
							<%} %>
						</tr>
						<tr id="lowerArrow">
							<%for( int i = 0; i < 10; i++) {%>
								<td class="opacity00" id="frontArrow<%=i%>"><i class="fa fa-arrow-up" aria-hidden="true"></i></td>
							<%} %>
						</tr>
						<tr id="lowerArrowText">
							<%for( int i = 0; i < 10; i++) {%>
								<td class="opacity00" id="front<%=i%>"><span class="ct-blue-color">front</span></td>
							<%} %>
						</tr>
					</table>
				</div>
			</div>
		</div>
		<div class="col-xs-offset-2 col-xs-8 margin-top20 opacity00" id="outputDiv">
			<div id="consoleId" class="center">
				<div class="output-console-title-bar">
						<span class="title"><b>Console</b></span>
				</div>
				<div class="output-console-body" id="consoleBodyDiv"><span id='print'></span><span id='entreValue' maxLength = '2' contenteditable="false"></span>
				</div>
			</div>
		</div>
	</div>
</div>
<script>

var typingInterval = 5;
var intro;
var front = -1, rear = -1;
$(document).ready(function() {
	initIntroJS();
	clickFunctions();
});

function initIntroJS() {
	intro = introJs();
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			element: '#heading',
			intro: '',
			position:'right'
		},{
			element: '#globalCode',
			intro: '',
			position: 'right'
		},{
			element: '#maxLength',
			intro: '',
			position: 'right'
		},{
			element: '#queueMax',
			intro: '',
			position: 'right'
		},{
			element: '#animationDiv',
			intro: '',
			position: 'bottom',
			animateStep: 'firstTable'
		},{
			element: '#frontRareDecleration',
			intro: '',
			position: 'right'
		},{
			element: '#animationDiv',
			intro: '',
			position: 'left',
			animateStep: 'initfrontRear'
		},{
			element: '#buttons',
			intro: '',
			position: 'bottom'
		},{
			element: '#methodCode',
			intro: '',
			position: 'right'
		
		}]
	});
	
	intro.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch(elementId) {
			case "heading":
				var text = "let us discuss about how a <span class='ct-code-b-yellow'>DeQueue</span> works using an array concept."
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			break;
			case "globalCode":
				$('#codingDiv').removeClass('visibility-hidden');
				$(".introjs-helperLayer").one('transitionend', function() {
					TweenMax.to("#globalCode", 1, {opacity : 1, onComplete:function() {
						$("#globalCode").removeClass("opacity00");
						var text = "These are the different variables required to work on queues.";
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-nextbutton").show();
						});
					}});
				});
			break;
			case "maxLength":
				$(".introjs-helperLayer").one('transitionend', function() {
					var text = "<span class='ct-code-b-yellow'>MAX</span> is a symbolic constant with a" 
						+ " constant value <span class='ct-code-b-yellow'>10</span>. So, " 
						+ "whenever, <span class='ct-code-b-yellow'>MAX</span> is applied in the program it will be replaced with the" 
						+ " constant value <span class='ct-code-b-yellow'>10</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				});
			break;
			case "queueMax":
				$(".introjs-helperLayer").one('transitionend', function() {
					var text = "Queue is an array of length <span class='ct-code-b-yellow'>10</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				});
			break;
			case "frontRareDecleration":
				$(".introjs-helperLayer").one('transitionend', function() {
					var text = "<ul><li>Initially both positions are initialized with -1.</li></ul>";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				});
				break;
			case "animationDiv":
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#animationDiv").removeClass("opacity00");
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "firstTable":
							$("#animationTable").removeClass("opacity00");
							TweenMax.to("#animationTable", 1, {opacity : 1, onComplete:function() {
								var text = "New array is created with size <span class='ct-code-b-yellow'>10</span> as it is declared.";
								typing(".introjs-tooltiptext", text, function() {
									$(".introjs-nextbutton").show();
								});
							}});
						break;
						case "initfrontRear":
							$("#xDiv, #frontValueBorder, #rearValueBorder").removeClass("opacity00");
							TweenMax.to("#frontValueBorder", 1, {opacity : 1});
							TweenMax.to("#rearValueBorder", 1, {opacity : 1, onComplete:function() {
								var text = "The value <span class='ct-code-b-yellow'>-1</span> is stored in two variables front and rear.";
								typing(".introjs-tooltiptext", text, function() {
									$(".introjs-nextbutton").show();
								});
							}});
						break;
						case "createXVariable":
							$("#xValue").text("");
							$("#xVariable").removeClass("visibility-hidden");
							nextStep();
						break;
						case "injectMethodAnimation":
							rear++;
							if (rear == 0) {
								$("#rear" + rear).removeClass("opacity00");
								$("#rearArrow" + rear).removeClass("opacity00");
							} else {
								$("#rearArrow" + (rear - 1) + " , #rear" + (rear - 1)).addClass("opacity00");
								$("#rearArrow" + rear + " , #rear" + rear).removeClass("opacity00");
								fromEffectWithTweenMax($('#rearArrow' + (rear - 1) + ' i'), $('#rearArrow' + rear + ' i'));
								fromEffectWithTweenMax($('#rear' + (rear - 1) + ' span'), $('#rear' + rear + ' span'));
							}
							$("#box" + rear).removeClass("opacity00");
							$("#box" + rear).css("opacity","1");
							fromEffectWithOnlyText("#box" + rear, "#xValue", function() {
								$("#rearValue").effect("highlight", {"color" : "yellow"}, function() {
									$("#rearValue").text(rear);
									var text ="x value will be stored in the position of rear.";
									typing(".introjs-tooltiptext", text, function() {
										$(".introjs-nextbutton").show();
									});
								});
							});
							break;
						case "frontVariable":
							front++;
							$("#frontValue").effect("highlight", {"color" : "yellow"}, function() {
								flipEffect("#frontValue", front, function() {
									$("#front" + front).removeClass("opacity00");
									$("#frontArrow" + front).removeClass("opacity00");
									nextStep();
								});
							});
							break;
						case "ejectMethodAnimation":
							if ($("#ejectBtn").hasClass("eject")) {
								$("#box" + rear).effect("highlight", {"color" : "yellow"}, function() {
									fromEffectWithOnlyText("#xValue", "#box" + rear, function() {
										var text = "Here the element present at <span class='code-ct-b-yellow'>rear</span> will be deleted.";
										typing(".introjs-tooltiptext", text, function() {
											$(".introjs-nextbutton").show();
										});
									});
								});
							} else {
								$("#box" + front).effect("highlight", {"color" : "yellow"}, function() {
									fromEffectWithOnlyText("#xValue", "#box" + front, function() {
										var text = "Here the element present at <span class='code-ct-b-yellow'>front</span> will be deleted.";
										typing(".introjs-tooltiptext", text, function() {
											$(".introjs-nextbutton").show();
										});
									});
								});
							}
							break;
						case "deleteElement":
							if (front == rear) {
								$("#box" + rear).effect("highlight", {"color" : "red"}, function() {
									$('#front' + front + ', #frontArrow' + front).addClass('opacity00');
									$('#rear' + rear + ', #rearArrow' + rear).addClass("opacity00");
									$("#box" + rear).effect("highlight", {"color" : "red"}, function() {
										TweenMax.to("#box" + front, 1, {top: -100, opacity : 0, onComplete:function() {
											$("#rearValueBorder").effect("highlight",{"color": "yellow"});
											$("#frontValueBorder").effect("highlight",{"color": "yellow"}, function() {
												$("#frontValue, #rearValue").text("-1");
												$("#box" + front + " span").css({"top" : "0"});
												$("#box" + front + " span").text("");
												front = rear = -1;
												var text = "Here, both the rear and front are at same positions so the element will be deleted.";
												typing(".introjs-tooltiptext", text, function() {
													$(".introjs-nextbutton").show();
												});
											});
										}});
									});
								});
							} else {
								if ($("#ejectBtn").hasClass("eject")) {
									$("#box" + rear).effect("highlight", {"color" : "red"}, function() {
										$("#box" + rear).effect("highlight", {"color" : "red"}, function() {
											$("#rearArrow" + (rear - 1) + " , #rear" + (rear - 1)).removeClass("opacity00");
											$("#rearArrow" + rear + " , #rear" + rear).addClass("opacity00");
											fromEffectWithTweenMax( $('#rearArrow' + rear + ' i'), $('#rearArrow' + (rear - 1) + ' i'));
											fromEffectWithTweenMax($('#rear' + rear + ' span'), $('#rear' + (rear - 1) + ' span'), function() {
												TweenMax.to("#box" + rear, 1, {top: -100, opacity : 0, onComplete:function() {
													$("#box" + rear).css({"top" : "0"});
													$("#box" + rear).text("");
													rear--;
													$("#rearValueBorder").effect("highlight",{"color": "yellow"}, function() {
														$("#rearValue").text(rear);
														var text = "Here the element present at <span class='code-ct-b-yellow'>rear</span> will be deleted.";
														typing(".introjs-tooltiptext", text, function() {
															$(".introjs-nextbutton").show();
														});
													});
												}});
											});
										});
									});
								} else {
									$("#box" + front).effect("highlight", {"color" : "red"}, function() {
										$("#frontArrow" + (front + 1) + " , #front" + (front + 1)).removeClass("opacity00");
										$("#frontArrow" + front + " , #front" + front).addClass("opacity00");
										fromEffectWithTweenMax($('#frontArrow' + front + ' i'), $('#frontArrow' + (front + 1) + ' i'));
										fromEffectWithTweenMax($('#front' + front + ' span'), $('#front' + (front + 1) + ' span'), function() {
											$("#box" + front).effect("highlight", {"color" : "red"}, function() {
												TweenMax.to("#box" + front, 1, {top: -100, opacity : 0, onComplete:function() {
													$("#box" + front).css({"top" : "0"});
													$("#box" + front).text("");
													front++;
													$("#frontValueBorder").effect("highlight",{"color": "yellow"}, function() {
														$("#frontValue").text(front);
														var text = "Here the element present at <span class='code-ct-b-yellow'>front</span> will be deleted.";
														typing(".introjs-tooltiptext", text, function() {
															$(".introjs-nextbutton").show();
														});
													});
												}});
											});
										});
									});
								}
							}
							break;
						case "pushMethodAnimation":
							$("#box" + (front - 1)).effect("highlight", {"color" : "yellow"}, function() {
								$("#frontArrow" + (front - 1) + " , #front" + (front - 1)).removeClass("opacity00");
								$("#frontArrow" + front + " , #front" + front).addClass("opacity00");
								fromEffectWithTweenMax($('#frontArrow' + front + ' i'), $('#frontArrow' + (front - 1) + ' i'));
								fromEffectWithTweenMax($('#front' + front + ' span'), $('#front' + (front - 1) + ' span'), function() {
									front--;
									$("#box" + front).css("opacity",1);
									$("#box" + front).removeClass("opacity00");
									fromEffectWithOnlyText("#box" + front, "#xValue", function() {
										$("#frontValueBorder").effect("highlight",{"color": "yellow"}, function() {
											$("#frontValue").text(front);
											var text="Here in push() method the element will be inserted from front.";
											typing(".introjs-tooltiptext", text, function() {
												$(".introjs-nextbutton").show();
											});
										});
									});
								});
							});
							break;
					}
				});
				break;
			case "mainMethod":
				$("#methodCodeDiv").removeClass("opacity00");
				$(".method-buttons").addClass("disabled");
				$(".introjs-helperLayer").one('transitionend', function() {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "injectMainMethod":
							$("#injectMainMethod").removeClass("hide");
							intro.refresh();
							nextStep();
							break;
						case "ejectMainMethod":
							$("#ejectMainMethod").removeClass("hide");
							intro.refresh();
							nextStep();
							break;
						case "pushMainMethod":
							$("#pushMainMethod").removeClass("hide");
							intro.refresh();
							nextStep();
							break;
						case "popMainMethod":
							$("#popMainMethod").removeClass("hide");
							intro.refresh();
							nextStep();
							break;
						case "displayMainMethod":
							$("#displayMainMethod").removeClass("hide");
							intro.refresh();
							nextStep();
							break;
					}
				});
				break;
			case "methodCode":
				$(".introjs-helperLayer").one('transitionend', function() {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "injectMethod":
							$("#injectMethod").removeClass("hide");
							intro.refresh();
							nextStep();
							break;
						case "ejectMethod":
							$("#ejectMethod").removeClass("hide");
							intro.refresh();
							nextStep();
							break;
						case "pushMethod":
							$("#pushMethod").removeClass("hide");
							intro.refresh();
							nextStep();
							break;
						case "displayMethod":
							$("#displayMethod").removeClass("hide");
							intro.refresh();
							nextStep();
							break;
					}
				});
				break;
			case "ejectIf":
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#ejectIf").effect("highlight", {"color" : "yellow"}, function() {
						var text = "<span class='ct-code-b-yellow' id='condition'></span><span id='conditionText'></span>"; 
						typing(".introjs-tooltiptext", text, function() {
							fromEffect("#condition", "#ejectIfCond", function() {
								flipEffect("#condition #ejectFlipRear", rear, function() {
									if (rear == -1) {
										var text1 = "<ul><li>if condition evalutes to <span class='ct-code-b-yellow'>true</span>.</li></ul>";	
									} else {
										var text1 = "<ul><li>if condition evalutes to <span class='ct-code-b-yellow'>false</span>.</li></ul>";
									}
									typing("#conditionText", text1, function() {
										$(".introjs-nextbutton").show();
									});
								});
							});
						});
					});
				});
				break;
			case "popIf":
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#popIf").effect("highlight", {"color" : "yellow"}, function() {
						var text = "<span class='ct-code-b-yellow' id='condition'></span><span id='conditionText'></span>"; 
						typing(".introjs-tooltiptext", text, function() {
							fromEffect("#condition", "#popIfCond", function() {
								flipEffect("#condition #popFlipFront", front, function() {
									if (front == -1) {
										var text1 = "<ul><li>if condition evalutes to <span class='ct-code-b-yellow'>true</span>.</li></ul>";	
									} else {
										var text1 = "<ul><li>if condition evalutes to <span class='ct-code-b-yellow'>false</span>.</li></ul>";
									}
									typing("#conditionText", text1, function() {
										$(".introjs-nextbutton").show();
									});
								});
							});
						});
					});
				});
				break;
			case "injectIf":
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#injectIf").effect("highlight", {"color" : "yellow"}, function() {
						var text = "<span class='ct-code-b-yellow' id='condition'></span><span id='conditionText'></span>"; 
						typing(".introjs-tooltiptext", text, function() {
							fromEffect("#condition", "#injectIfCond", function() {
								flipEffect("#condition #injectFlipRear", rear, function() {
									flipEffect("#condition #flipMax", 9, function() {
										if (rear == 9) {
											var text1 = "<ul><li>if condition evalutes to <span class='ct-code-b-yellow'>true</span>.</li></ul>";	
										} else {
											var text1 = "<ul><li>if condition evalutes to <span class='ct-code-b-yellow'>false</span>.</li></ul>";
										}
										typing("#conditionText", text1, function() {
											$(".introjs-nextbutton").show();
										});
									});
								});
							});
						});
					});
				});
				break;
			case "pushIf":
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#pushIf").effect("highlight", {"color" : "yellow"}, function() {
						var text = "<span class='ct-code-b-yellow' id='condition'></span><span id='conditionText'></span>"; 
						typing(".introjs-tooltiptext", text, function() {
							fromEffect("#condition", "#pushIfCond", function() {
								flipEffect("#condition #pushFlipFront", front, function() {
									if (front <= 0) {
										var text1 = "<ul><li>if condition evalutes to <span class='ct-code-b-yellow'>true</span>.</li></ul>";	
									} else {
										var text1 = "<ul><li>if condition evalutes to <span class='ct-code-b-yellow'>false</span>.</li></ul>";
									}
									typing("#conditionText", text1, function() {
										$(".introjs-nextbutton").show();
									});
								});
							});
						});
					});
				});
				break;
			case "displayIf" :
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#displayIf").effect("highlight", {"color" : "yellow"}, function() {
						var text = "<span class='ct-code-b-yellow' id='condition'></span><span id='conditionText'></span>"; 
						typing(".introjs-tooltiptext", text, function() {
							fromEffect("#condition", "#ifCondition", function() {
								flipEffect("#condition #displayFlipFront", front, function() {
									if (front == -1) {
										var text1 = "<ul><li>if condition evalutes to <span class='ct-code-b-yellow'>true</span>.</li></ul>";	
									} else {
										var text1 = "<ul><li>if condition evalutes to <span class='ct-code-b-yellow'>false</span>.</li></ul>";
									}
									typing("#conditionText", text1, function() {
										$(".introjs-nextbutton").show();
									});
								});
							});
						});
					});
				});
				break;
			case "popIfPrint":
			case "ifPrint":
				$(".introjs-helperLayer").one('transitionend', function() {
					var text = "There is no element to delete.<br>Insert some elements to perform eject operation.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				});
				break;
			case "injectIfPrint":
			case "pushifPrint":
				$(".introjs-helperLayer").one('transitionend', function() {
					var text = "In push() method insertion will be done from front.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				});
				break;
			case "displayPrint":
				$(".introjs-helperLayer").one('transitionend', function() {
					var text = "As there is no element in the array the list is empty.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				});
				break;
			case "displayLine3":
				var text="This is the for loop to print the elements in the list.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
				break;
			case "displayLine1":
			case "ejectLine1":
				$("#xVariable").removeClass("opacity00");
				nextStep();
				break;
			case "displayLine4":
			case "displayLine2":
			case "callPrint":
			case "pushLine1":
			case "ejectLine6":
			case "ejectLine4":
			case "injectLine3":
			case "elsePrint":
			case "pushElsePrint":
			case "ejectLine2":
			case "injectLine1":
			case "pushElseScan":
			case "elseScan":
			case "ejectLine8":
			case "callinject":
			case "ejectElsePrint":
			case "popElsePrint":
			case "callPush":
				nextStep();
				break;
			case "injectLine2":
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#injectifCond2").effect("highlight", {"color" : "yellow"}, function() {
						var text = "<span class='ct-code-b-yellow' id='condition'></span><span id='conditionText'></span>"; 
						typing(".introjs-tooltiptext", text, function() {
							fromEffect("#condition", "#injectifCond2", function() {
								flipEffect("#condition #flipFront2", front, function() {
									if (front == -1) {
										var text1 = "<ul><li>if condition evalutes to <span class='ct-code-b-yellow'>true</span>.</li></ul>";	
									} else {
										var text1 = "<ul><li>if condition evalutes to <span class='ct-code-b-yellow'>false</span>.</li></ul>";
									}
									typing("#conditionText", text1, function() {
										$(".introjs-nextbutton").show();
									});
								});
							});
						});
					});
				});
				break;
			case "ejectLine3":
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#ejectLine3").effect("highlight", {"color" : "yellow"}, function() {
						var text = "<span class='ct-code-b-yellow' id='condition'></span><span id='conditionText'></span>"; 
						typing(".introjs-tooltiptext", text, function() {
							fromEffect("#condition", "#ejectifCond2", function() {
								flipEffect("#condition #flipFront1", front, function() {
									flipEffect("#condition #flipRear1", rear, function() {
										if (front == rear) {
											var text1 = "<ul><li>if condition evalutes to <span class='ct-code-b-yellow'>true</span>.</li></ul>";	
										} else {
											var text1 = "<ul><li>if condition evalutes to <span class='ct-code-b-yellow'>false</span>.</li></ul>";
										}
										typing("#conditionText", text1, function() {
											$(".introjs-nextbutton").show();
										});
									});
								});
							});
						});
					});
				});
				break;
			case "consoleId":
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#outputDiv").removeClass("opacity00");
					//contenteditibleFunction();
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "displayOverFlow":
							var text="DeQueue is over flow";
							typing("#print", text, function() {
								nextStep();
							});
							break;
						case "displayUnderFlow":
							var text="DeQueue is under flow";
							typing("#print", text, function() {
								nextStep();
							});
							break;
						case "print":
							var text="Enter a value : ";
							typing("#print", text, function() {
								nextStep();
							});
							break;
						case "takeValue":
							$("#entreValue").attr("contenteditable","true");
							numbers();
							$("#entreValue").effect("highlight",{color: 'yellow'}, 1500);
							$("#entreValue").focus();
							var text = "Enter an integer value.";
							typing(".introjs-tooltiptext", text);
							break;
						case "displaydeletedElement":
							var text = "The deleted value : " + $("#xValue").text();
							typing("#print", text, function() {
								nextStep();
							});
							break;
						case "displayListEmpty":
							var text="DeQueue is empty...";
							typing("#print", text, function() {
								nextStep();
							});
							break;
						case "displayText":
							var text="Elements in the list are : ";
							typing("#print", text, function() {
								nextStep();
							});
							break;
						case "displayElements":
							var text="These are the elements in the list."
							typing(".introjs-tooltiptext", text, function() {
								printValues(front);
							});
							break;
					}
				});
				break;
			case "buttons":
				$(".introjs-helperLayer").one('transitionend', function() {
					TweenMax.to("#buttons", 1, {opacity : 1, onComplete : function() {
						$("#print, #entreValue").text("");
						$("#popBtn").removeClass("pop");
						$("#ejectBtn").removeClass("eject");
						$("#buttons").removeClass("opacity00");
						$("#xVariable").addClass("opacity00");
						var text = "Choose any method.";
						typing(".introjs-tooltiptext", text, function() {
							$(".method-buttons").removeClass("disabled");
						});
					}});
				});
			break;
		}
	});
	intro.start();
}

function fromEffect(id1, id2, callBackFunction) {
	var l1 = $(id2).offset();
	$(id1).html($(id2).html()).offset({
		"top" : l1.top,
		"left" : l1.left
	});
	TweenMax.to(id1, 0.5, {top : 0, left : 0, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
			$(id1).removeClass("z-index");
		}
	}});
}

function fromEffectWithOnlyText(id1, id2, callBackFunction) {
	var l1 = $(id2).offset();
	$(id1).text($(id2).text()).offset({
		"top" : l1.top,
		"left" : l1.left
	});
	$(id1).parent().removeClass("opacity00");
	TweenMax.to(id1, 0.5, {top : 0, left : 0, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
			$(id1).removeClass("z-index");
		}
	}});
}
		
function typing(typingId, typingContent,callBackFunction) {
	$(typingId).typewriting( typingContent , {
		"typing_interval": typingInterval,
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		$(selector).html(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function nextStep() {
	setTimeout(function() {
		intro.nextStep();
	},1000);
}

function contenteditibleFunction() {
	($("#entreValue").parent()).click(function() {
		$("#entreValue").focus();
	});
	$("#entreValue").on("keydown keyup", function() {
		if ($("#entreValue").text() == "") {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
		}
	});
}

function numbers() {
	var flag = true;
	$("#entreValue").on("keydown keyup", function(e) {
		$(".red-color-css").remove();
		if ((e.shiftKey)) {
			e.preventDefault();
		}
		if ($('#entreValue').text().length >= 1) {
			flag = false;
		} else if ($('#entreValue').text().indexOf('-') == -1) {
			flag = true;
		}
		//173 for mozila
		if ((e.which == 109 || e.which == 189) && flag) {
			flag = false;
			return true;
		}
		var max = $(this).attr("maxlength");
		if (($(this).text().length) > max) {
			$(".introjs-tooltiptext").append("<div class='red-color-css'></br>Please restrict the length of text to 3 characters.</div>");
			if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
				return true;
			} else {
				e.preventDefault();
			}
		}
		if ($("#entreValue").text().length == 0) {
			$('.introjs-nextbutton').hide();
		} else {
			$(".nextButton").remove();
			$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'storeXValue();'>Next &#8594;</a>");
		} 
		if (((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105))) {
			return true;
		} else {
			if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
				return true;
			}  else {
				e.preventDefault();
			}
		}
	});
}

function storeXValue() {
	$(".nextButton").remove();
	$("#xValue").removeClass("visibility-hidden");
	$("#xVariable").removeClass("opacity00");
	$("#xValue").addClass("z-index-transfer yellow-color");
	fromEffectWithOnlyText("#xValue", "#entreValue", function() {
		$("#xValue").removeClass("z-index-transfer yellow-color")
		$(".introjs-nextbutton").show();
	});
}

function clickFunctions() {
	$("#injectBtn").click(function() {
		$("#ejectMethod, #pushMethod, #injectMethod, #displayMethod, #ejectMainMethod, #pushMainMethod, #popMainMethod, #displayMainMethod").addClass("hide");
		injectBtnDynamicSteps();
	});
	$("#ejectBtn").click(function() {
		$("#ejectBtn").addClass("eject");
		$("#ejectMethodName").text("eject");
		$("#ejectLine6").text("rear--;");
		$("#changeRear").text("rear");
		$("#injectMethod, #pushMethod, #ejectMethod, #displayMethod, #injectMainMethod, #pushMainMethod, #popMainMethod, #displayMainMethod").addClass("hide");
		ejectBtnDynamicSteps();
	});
	$("#pushBtn").click(function() {
		$("#injectMethod, #ejectMethod, #pushMethod, #displayMethod, #ejectMainMethod, #injectMainMethod, #popMainMethod, #displayMainMethod").addClass("hide");
		pushBtnDynamicSteps();
	});
	$("#popBtn").click(function() {
		$("#ejectMethodName").text("pop");
		$("#ejectLine6").text("front++;");
		$("#popBtn").addClass("pop");
		$("#changeRear").text("front");
		$("#injectMethod, #ejectMethod, #pushMethod, #displayMethod, #ejectMainMethod, #pushMainMethod, #injectMainMethod, #displayMainMethod").addClass("hide");
		ejectBtnDynamicSteps();
	});
	$("#displayBtn").click(function() {
		$("#injectMethod, #ejectMethod, #pushMethod, #displayMethod, #ejectMainMethod, #pushMainMethod, #popMainMethod, #injectMainMethod").addClass("hide");
		displayBtnDynamicSteps();
	});
}

function printValues(i) {
	if (i <= rear) {
		if ($("#box" + i).text() != "") {
			$("#box" + front).effect("highlight", {"color" : "yellow"}, function() {
				$("#box" + i).addClass("z-index-transfer yellow-color");
			});
		}
		$("#entreValue").append("<span id = 'value" + i + "'></span>&nbsp;");
		var l1 = $("#box" + i).offset();
		$("#value" + i).text($("#box" + i).text()).offset({
			"top" : l1.top,
			"left" : l1.left
		});
		TweenMax.to("#value" + i, 1, {top : 0, left : 0, onComplete:function() {
			$("#box" + i).removeClass("z-index-transfer yellow-color");
			i++;
			printValues(i);
		}});
	} else {
		$(".introjs-nextbutton").show();
	}
}

function injectBtnDynamicSteps() {
	var steps = 0;
	var options = {
		element :'#mainMethod',
		tooltipClass: "hide",
		animateStep: "injectMainMethod"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	var options = {
		element :'#injectIf',
		intro :'',
		position : 'right',
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	if (rear == 9) {
		var options = {
			element :'#injectIfPrint',
			intro :'',
			position : 'right',
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#consoleId',
			tooltipClass: 'hide',
			animateStep: "displayOverFlow"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
	} else {
		var options = {
			element :'#elsePrint',
			tooltipClass: 'hide',
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#consoleId',
			tooltipClass: 'hide',
			animateStep: "print"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#elseScan',
			tooltipClass: 'hide',
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#consoleId',
			intro :'',
			position : 'bottom',
			animateStep: "takeValue"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#callinject',
			tooltipClass: "hide",
			position : 'right',
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#methodCode',
			tooltipClass: "hide",
			animateStep: "injectMethod"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#injectLine1',
			tooltipClass: "hide",
			position : 'right',
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#animationDiv',
			intro :'',
			position : 'left',
			animateStep: "injectMethodAnimation"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#injectLine2',
			intro :'',
			position : 'right',
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		if (front == -1) {
			var options = {
				element :'#injectLine3',
				tooltipClass:"hide"
			}
			intro.insertOption(intro._currentStep + ++steps, options);
			var options = {
				element : "#animationDiv",
				animateStep :'frontVariable',
				tooltipClass: "hide"
			}
			intro.insertOption(intro._currentStep + ++steps, options);
		}
	}
	var options = {
		element :'#buttons',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	intro.nextStep();
}

function ejectBtnDynamicSteps() {
	var steps = 0;
	if ($("#ejectBtn").hasClass("eject")) {
		var options = {
			element :'#mainMethod',
			tooltipClass: 'hide',
			animateStep: "ejectMainMethod"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#ejectIf',
			intro :'',
			position : 'right',
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		if (rear == -1) {
			var options = {
				element :'#ifPrint',
				intro :'',
				position : 'right',
			}
			intro.insertOption(intro._currentStep + ++steps, options);
			var options = {
				element :'#consoleId',
				tooltipClass: 'hide',
				animateStep: "displayUnderFlow"
			}
			intro.insertOption(intro._currentStep + ++steps, options);
			var options = {
				element :'#buttons',
				intro :'',
				position : 'bottom',
			}
			intro.insertOption(intro._currentStep + ++steps, options);
		} else {
			var options = {
				element :'#ejectElsePrint',
				tooltipClass: 'hide',
			}
			intro.insertOption(intro._currentStep + ++steps, options);
		}
	} else {
		var options = {
			element :'#mainMethod',
			tooltipClass: 'hide',
			animateStep: "popMainMethod"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#popIf',
			intro :'',
			position : 'right',
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		if (front == -1) {
			var options = {
				element :'#popIfPrint',
				intro :'',
				position : 'right',
			}
			intro.insertOption(intro._currentStep + ++steps, options);
			var options = {
				element :'#consoleId',
				tooltipClass: 'hide',
				animateStep: "displayUnderFlow"
			}
			intro.insertOption(intro._currentStep + ++steps, options);
			var options = {
				element :'#buttons',
				intro :'',
				position : 'bottom',
			}
			intro.insertOption(intro._currentStep + ++steps, options);
		} else {
			var options = {
				element :'#popElsePrint',
				tooltipClass: 'hide',
			}
			intro.insertOption(intro._currentStep + ++steps, options);
		}
	}
	var options = {
			element :'#methodCode',
			tooltipClass: 'hide',
			animateStep: "ejectMethod"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#ejectLine1',
			tooltipClass: 'hide',
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#ejectLine2',
			tooltipClass: "hide"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#animationDiv',
			intro :'',
			position : 'left',
			animateStep: "ejectMethodAnimation"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#ejectLine3',
			intro :'',
			position : 'right',
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		if (front == rear) {
			var options = {
				element :'#ejectLine4',
				tooltipClass: "hide"
			}
			intro.insertOption(intro._currentStep + ++steps, options);
		} else {
			var options = {
				element :'#ejectLine6',
				tooltipClass: "hide"
			}
			intro.insertOption(intro._currentStep + ++steps, options);
		}
		var options = {
			element :'#animationDiv',
			intro :'',
			position : 'left',
			animateStep: 'deleteElement'
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#ejectLine8',
			tooltipClass: "hide"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		if ($("#ejectBtn").hasClass("eject")) {
			var options = {
				element :'#ejectElsePrint',
				tooltipClass: "hide"
			}
			intro.insertOption(intro._currentStep + ++steps, options);
		} else {
			var options = {
				element :'#popElsePrint',
				tooltipClass: "hide"
			}
			intro.insertOption(intro._currentStep + ++steps, options);
		}
		var options = {
			element :'#consoleId',
			tooltipClass: 'hide',
			animateStep: "displaydeletedElement"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#buttons',
			intro :'',
			position : 'bottom',
		}
		intro.insertOption(intro._currentStep + ++steps, options);
	intro.nextStep();
}

function pushBtnDynamicSteps() {
	var steps = 0;
	var options = {
		element :'#mainMethod',
		tooltipClass: 'hide',
		animateStep: "pushMainMethod"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	var options = {
		element :'#pushIf',
		intro :'',
		position : 'right',
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	if (front <= 0) {
		var options = {
			element :'#pushifPrint',
			intro :'',
			position : 'right',
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#consoleId',
			tooltipClass: 'hide',
			animateStep: "displayOverFlow"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
	} else {
		var options = {
			element :'#pushElsePrint',
			tooltipClass: 'hide',
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#consoleId',
			tooltipClass: 'hide',
			animateStep: "print"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#pushElseScan',
			tooltipClass: 'hide',
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#consoleId',
			intro :'',
			position : 'bottom',
			animateStep: "takeValue"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#callPush',
			tooltipClass: 'hide',
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#methodCode',
			tooltipClass: 'hide',
			animateStep: "pushMethod"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#pushLine1',
			tooltipClass: 'hide',
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#animationDiv',
			intro :'',
			position : 'left',
			animateStep: "pushMethodAnimation"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
	}
	var options = {
		element :'#buttons',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	intro.nextStep();
}

function displayBtnDynamicSteps() {
	var steps = 0;
	var options = {
		element :'#mainMethod',
		tooltipClass: 'hide',
		animateStep: "displayMainMethod"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	var options = {
		element :'#displayIf',
		intro :'',
		position : 'right',
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	if (front == -1) {
		var options = {
			element :'#displayPrint',
			intro :'',
			position : 'right',
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#consoleId',
			tooltipClass: 'hide',
			animateStep: "displayListEmpty"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
	} else {
		var options = {
			element :'#callPrint',
			tooltipClass: 'hide',
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#methodCode',
			tooltipClass: 'hide',
			animateStep: "displayMethod"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#displayLine1',
			tooltipClass: 'hide',
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#displayLine2',
			tooltipClass: "hide"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#consoleId',
			tooltipClass: "hide",
			animateStep: 'displayText'
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#displayLine3',
			intro :'',
			position : 'right',
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#displayLine4',
			tooltipClass: "hide"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		var options = {
			element :'#consoleId',
			intro :'',
			position : 'right',
			animateStep: 'displayElements'
		}
		intro.insertOption(intro._currentStep + ++steps, options);
	}
	var options = {
		element :'#buttons',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	intro.nextStep();
}

</script>
</body>
</html>