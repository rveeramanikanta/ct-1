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
<title>DeQueue using linked list</title>
<style>

.border {
	border: 1px solid gray;
}

span, i {
	position: relative;
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
}

.animation-div {
	min-height: 300px;
}

.padding10 {
	padding: 10px;
}

pre {
	white-space: pre;
	margin: 5px;
}

.z-index-css {
	z-index: 99999999;
	position: relative;
	
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

.variable-border {
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

.red-color-css {
	color: red;
}

.left-radius {
	border-bottom-left-radius: 6px;
	border-top-left-radius: 6px;
}

.right-radius {
	border-bottom-right-radius: 6px;
	border-top-right-radius: 6px;
	border-left: none;
}

.div-border {
	display: inline-block;
	padding: 0;
	text-align: center;
	margin: 0;
	border: 2px solid gray;
}

.no-border {
	display: inline-block;
	padding: 0;
	text-align: center;
	height: 21px;
	margin: 0;
	border: 2px solid transprent;
}

.padding0 {
	padding: 0;
}

.bold {
	font-weight: bold;
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.svg-line {
	display: none;
	marker-end: url("#arrowEnd"); 
	position: relative;
	stroke: gray;
	stroke-width: 2; 
}

.disabled {
	pointer-events: none;
}

.white-color {
	color: white;
}

.margin-left5 {
	margin-left: 5%;
}

</style>
</head>
<body>
<div>
	<h2 class="text-center">
		<span class="label label-default ct-demo-heading" id="heading">DeQueue using linked list</span>
	</h2>
</div>
<div class="col-xs-12">
	<div class="col-xs-4">
				<div class="col-xs-12 border visibility-hidden padding10" id = "codingDiv">
			<pre id ="globalCode" class='opacity00'>
<div class="display-inline-css" id="arrayLength">struct dequeue {
  int info;
  struct dequeue *next;
};
typedef struct dequeue *Q;</div>
<span id="frontRareDecleration">Q front = NULL, rear = NULL;</span></pre>
			<div id ="methodCodeDiv" class="opacity00">
<pre id="mainMethod"><div class="ct-blue-color bold">In main() method</div><div class="hide display-inline-css" id="injectMainMethod">Q t = NULL;
<span>t = (Q)malloc(sizeof(struct dqueue));</span>
<span>if (t == NULL)</span>
  <span>printf("queue is overflow");</span>
<span>else {</span>
  <span>t->info = x;</span>
  <span>t->next = NULL;</span>
  <span>if (front == NULL)</span>
    <span>front = t;</span>
  <span>else</span>
    <span>rear->next = t;</span>
  <span>rear = t;</span>
<span>}</span></div><div class="display-inline-css hide" id="ejectMainMethod">
<span>Q t = front;</span>
<span>int x;</span>
<span>if (rear == NULL)</span>
  <span>printf("queue is underflow");</span>
<span>else {</span>
  <span>if (front == rear) {</span>
    <span>front = rear = NULL;</span>
    <span>rear->info = front->info = -1;</span>
  <span>}</span>
  <span>while (t->next != rear)</span>
    <span>t = t->next;</span>
  <span>x = rear->info;</span>
  <span>rear = t;</span>
  <span>rear->next = NULL;</span>
  <span>return x;</span>
<span>}</span>
</div><div class="display-inline-css hide" id="pushMainMethod"><span>Q t = NULL;</span>
<span>t = (Q)malloc(sizeof(struct dqueue));</span>
<span>if(front < 0)</span>
  <span>printf("queue is overflow");</span>
<span>else {</span>
  <span>t->info = x;</span>
  <span>t->next = front;</span>
  <span>front = t;</span>
<span>}</span></div><div class="display-inline-css hide" id="popMainMethod"><span>Q t = front;</span>
<span>int x;</span>
<span>if (rear == NULL)</span>
  <span>printf ( "queue is underflow" );</span>
<span>else {</span>   
  <span>x = front->info;</span>
  <span>if (front == rear)</span>
    <span>front = rear = NULL;</span>
  <span>else {</span>
    <span>front = front->next;</span>
    <span>free(t);</span>
    <span>return x;</span>
  <span>}</span>
<span>}</span>
</div><div class="display-inline-css hide" id="displayMainMethod"><span>Q t=front;</span>
<span>if (t == 0)</span>
  <span>printf("List is empty");</span>
<span>else {</span>
  <span>printf("Elements in the list are :");</span>	
  <span>do {</span>
    <span>printf(" %d ",t->info);</span>
    <span>t = t->next;</span>
  <span>} while(t != 0);</span>
<span>}</span></div></pre>
<pre id="methodCode" class="opacity00"><div class="display-inline-css hide" id="injectMethod"><span>void inject(int x) {</span>
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
		<div class="col-xs-12 margin-top20 opacity00" id="outputDiv">
			<div id="consoleId" class="center">
				<div class="output-console-title-bar">
					<span class="title"><b>Console</b></span>
				</div>
				<div class="output-console-body" id="consoleBodyDiv"><span id='takeValue'></span><span id='entreValue' maxLength = '2' 
				contenteditable="false"></span>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-8">
		<div class="col-xs-12">
			<div class="col-xs-offset-2 col-xs-8 text-center padding10 border buttons-div opacity00" id="buttons">
				<div>
					<span id="injectBtn" class="btn btn-success btn-xs margintop method-buttons disabled">inject</span>
				</div>
				<div>
					<span id="ejectBtn" class="btn btn-success btn-xs margintop method-buttons disabled">eject</span>
				</div>
				<div>
					<span id="pushBtn" class="btn btn-success btn-xs margintop method-buttons disabled">push</span>
				</div>
				<div>
					<span id="popBtn" class="btn btn-success btn-xs margintop method-buttons disabled">pop</span>
				</div>
				<div>
					<span id="displayBtn" class="btn btn-success btn-xs margintop method-buttons disabled">display</span>
				</div>
			</div>
		</div>
		<div class="col-xs-12 margin-top20">
			<div class="col-xs-12 border margin-top20 animation-div opacity00" id="animationDiv">
				<div class="col-xs-offset-3 col-xs-2 padding0 margin-top20 x-div visibility-hidden" id="xDiv" align ="center" style ="margin-top:41px;">
					<span id = "x" class="">x =&emsp;</span>
					<span class="variable-border" id ="xValueBorder">
					<span class="x-value" id="xValue"></span></span>
				</div>
				<div class="col-xs-4 margin-top20 t-div opacity00" id="tDiv" align ="left" style="display: inline-flex; position: relative;">
					<div id = "t" class="margin-top20">t&emsp;</div>
					<div class="margin-top20"><i class="fa fa-arrow-right" aria-hidden="true"></i>&emsp;</div>
					<div class="col-xs-12" id="dynamicnodesDiv" style="position:relative;"></div>
				</div>
				<div class="col-xs-12" id="nodesDiv">
					<div id="nodeInnerDiv"></div>
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
			element: '#buttons',
			intro: '',
			position: 'bottom'
		}]
	});
	intro.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch(elementId) {
			case "heading":
				var text = "let us discuss about how a <span class='ct-code-b-yellow'>DeQueue</span> works using an array concept.";
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
			case "buttons":
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#fullDiv, #dynamicnodesDiv, #entreValue").text("");
					TweenMax.to("#buttons", 1, {opacity : 1, onComplete:function() {
						$("#methodCode").removeClass("z-index-css");
						$("#buttons").removeClass("opacity00");
						$("#xDiv, #tDiv").addClass("visibility-hidden");
						$("#takeValue, #xValue").text("");
						if (front == -1 && rear == -1) {
							$("#nodeInnerDiv").text("");
						}
						var text = "Choose any method.";
						typing(".introjs-tooltiptext", text, function() {
							$(".method-buttons").removeClass("disabled");
						});
					}});
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
		}
	});
	intro.start();
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