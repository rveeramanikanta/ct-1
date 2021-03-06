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
<title>Queue using array</title>
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

.table-padding {
	padding: 90px 0px;
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

.red-color-css {
	color: red;
}

.white-color {
	color: white;
}

.disabled {
	pointer-events: none;
}

</style>
</head>
<body>
<div>
	<h2 class="text-center">
		<span class="label label-default ct-demo-heading" id="heading">Queue using array</span>
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
			<pre id="methodCode"></pre>
			</div>
		</div>
	</div>
	<div class="col-xs-8">
		<div class="col-xs-12">
			<div class="col-xs-offset-3 col-xs-6 text-center padding0 border buttons-div opacity00" id="buttons">
				<div>
					<button type="button" id="enqueueBtn" class="btn btn-success btn-xs margintop method-buttons disabled">enqueue</button>
				</div>
				<div>
					<button type="button" id="dequeueBtn" class="btn btn-success btn-xs margintop method-buttons disabled">dequeue</button>
				</div>
				<div>
					<button type="button" id="displayBtn" class="btn btn-success btn-xs margintop method-buttons disabled">display</button>
				</div>
			</div>
		</div>
		<div class="col-xs-12 border margin-top20 animation-div opacity00" id= "animationDiv">
			<div class="col-xs-12 margin-top20 opacity00 x-div" id="xDiv" align ="center">
				<span>front = </span>&emsp;
				<span class="x-border opacity00" id ="frontValueBorder"><span class="front-value" id="frontValue">-1</span></span>&emsp;
				<span>rear = </span>&emsp;
				<span class="x-border opacity00" id ="rearValueBorder"><span class="rear-value" id="rearValue">-1</span></span>&emsp;
				<span id = "x" class="visibility-hidden">x = </span>&emsp;
				<span class="x-border visibility-hidden" id ="xValueBorder"><span class="x-value opacity00" id="xValue">354</span></span>
			</div>
			<div id ="totalTable" class="text-center table-padding">
				<div class="col-xs-12">
					<table id ="animationTable" class="opacity00 table-css" align="center">
						<tr id="upperArrowText">
							<%for( int i = 0; i < 10; i++) {%>
								<td class="opacity00" id="rear<%=i%>"><span>rear</span></td>
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
								<td class ="table-border opacity00" id="box<%=i%>"><span>00</span></td>
							<%} %>
						</tr>
						<tr id="lowerArrow">
							<%for( int i = 0; i < 10; i++) {%>
								<td class="opacity00" id="frontArrow<%=i%>"><i class="fa fa-arrow-up" aria-hidden="true"></i></td>
							<%} %>
						</tr>
						<tr id="lowerArrowText">
							<%for( int i = 0; i < 10; i++) {%>
								<td class="opacity00" id="front<%=i%>"><span>front</span></td>
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
				<div class="output-console-body" id="consoleBodyDiv"><span id='takeValue'></span><span id='entreValue' maxLength = '2' contenteditable="false"></span>
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
	$("#enqueueBtn").click(function() {
		$(".method-buttons").addClass("disabled");
		enqueueBtnDynamicSteps();
	});
	$("#dequeueBtn").click(function() {
		$(".method-buttons").addClass("disabled");
		dequeueBtnDynamicSteps();
	});
	$("#displayBtn").click(function() {
		$(".method-buttons").addClass("disabled");
		displayBtnDynamicSteps();
	});
});

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
				var text = "let us discuss about how a queue works using an array concept."
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
					var text = "<ul><li>The variable <span class='ct-code-b-yellow'>front</span> is used to represent" 
						+ " the position one side of the queue i.e. at <span class='ct-code-b-yellow'>deletion</span> side.</li>" 
						+ "<li>The variable <span class='ct-code-b-yellow'>rear</span> is used to represent the position another side of the" 
						+ " queue i.e. at <span class='ct-code-b-yellow'>insertion</span> side.</li>" 
						+ "<li>Initially both positions are initialized with -1.</li></ul>";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				});
			break;
			case "methodCode":
				$(".introjs-helperLayer").one('transitionend', function() {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "enqueueMethod":
							$("#methodCode").text("");
							$("#methodCode").append('<div id="enqueueMethod">'
								+ '<span>void enqueue() {</span></br>'
								+ '&emsp;<span id="line1">int x;</span></br>'
								+ '&emsp;<span id="line2">printf("Enter element : ");</span></br>'
								+ '&emsp;<span id="line3">scanf("%d", &x);</span></br>'
								+ '<span id="ifandElse">&emsp;<span class="ifclass" id="line4">if (<span id="eifCondition1">' 
									+ '<span id ="rearSpan">rear</span> == ' 
									+ '<span id="MaxSpan"><span id ="MaxInnerSpan">Max</span> - 1</span></span>) {</span></br>'
								+ '&emsp;&emsp;<span id="line5" class="ifclass">printf("Queue is full...");</span></br>'
								+ '&emsp;<span id="line6"><span class="ifclass">}</span> <span class="elseClass">else {</span></span></br>'
								+ '&emsp;&emsp;<span class="elseClass" id="line7">rear++;</span></br>'
								+ '&emsp;&emsp;<span class="elseClass" id="line8">queue[<span id ="flipRear">rear</span>] = <span id ="flipX">x</span>;</span></br>'
								+ '&emsp;<span class="elseClass" id="line9">}</span></span></br>'
								+ '<span id="secondIf">&emsp;<span id="line10">if (' 
										+ '<span id="eifCondition2"><span id="flipFront">front</span> == -1</span>) {</span></br>'
								+ '&emsp;&emsp;<span id="line11">front++;</span></br>'
								+ '&emsp;<span>}</span></span></br>'
								+ '<span>}</span></div>');
							intro.refresh();
							TweenMax.to("#methodCodeDiv", 1, {opacity : 1, onComplete:function() {
								var text = "This sample code is used to <span class='ct-code-b-yellow'>insert</span> an element in the queue.";
								typing(".introjs-tooltiptext", text, function() {
									$("#enqueueMethod").addClass("z-index-css");
									$("#line1").effect("highlight", {color : "yellow"}, 2000, function() {
										$(".introjs-nextbutton").show();
									});
								});
							}});
						break;
						case "printValue":
							$("#entreValue").attr("contenteditable","false");
								$("#line2").effect("highlight", {color : "yellow"}, 2000, function() {
								intro.nextStep();
							});
						break;
						case "scanValue":
							$("#line3").effect("highlight", {color : "yellow"}, 2000, function() {
								intro.nextStep();
							});
						break;
						case "dequeueMethod":
							$("#methodCode").text("");
							$("#methodCode").append('<div id="dequeueMethod">'
								+ '<span>void dequeue() {</span></br>'
								+ '&emsp;<span id="line1">if (<span id="ifCondition1">' 
										+ '<span id="flipFront" style="display:inline-block;">front</span> == -1</span>) {</span></br>'
								+ '&emsp;&emsp;<span id="line2">printf("Queue is empty...");</span></br>'
								+ '&emsp;<span id="line3">} else {</span></br>'
								+ '&emsp;&emsp;<span id="line4">printf("Delete element = %d", queue[front]);</span></br>'
								+ '<span id="dequeueIf">&emsp;&emsp;<span id="line5" class="ifClass">if (' 
										+ '<span id ="rareFlip">rear</span> == <span id="frontFlip">front</span>) {</span></br>'
								+ '&emsp;&emsp;&emsp;<span id="line6" class="ifClass">rear = front = -1;</span></br>'
								+ '&emsp;&emsp;<span id="line7"><span class="ifClass">}</span> <span class="elseClass">else {</span></span></br>'
								+ '&emsp;&emsp;&emsp;<span class ="elseClass" id="line8">front++;</span></br>'
								+ '&emsp;&emsp;<span class="elseClass" id="line9">}</span></span></br>'
								+ '&emsp;<span>}</span></br>'
								+ '<span>}</span></div>');
							intro.refresh();
							TweenMax.to("#methodCodeDiv", 1, {opacity : 1, onComplete:function() {
								var text = "This sample code is used to <span class='ct-code-b-yellow'>delete</span> an element in the queue.";
								typing(".introjs-tooltiptext", text, function() {
									$("#methodCode").addClass("z-index-css");
									$(".introjs-nextbutton").show();
								});
							}});
						break;
						case "displayMethod":
							$("#methodCode").text("");
							$("#methodCode").append('<div>'
								+ '<span>void display() {</span></br>'
								+ '&emsp;<span id="line1">if (<span id="if"><span id="displayFront"">front</span>' 
										+ ' == -1 && <span id = "displayRear">rear</span> == -1</span>) {</span></br>'    
								+ '&emsp;&emsp;<span id="line2">printf("Queue is empty...");</span></br>'
								+ '&emsp;<span id="line3">} else {</span></br>'
								+ '&emsp;&emsp;<span id="line4">printf("Elements in queue are :");</span>'
								+ '<span id= "fullForLoop"><div id="line5">&emsp;&emsp;for (int i = <span id="forInitFront">front</span>;' 
									+ ' i <= <span if="forCondRear">rear</span>; <span id="forInc">i++</span>) {</div>'
								+ '&emsp;&emsp;&emsp;<span id="line6">printf("%d ", queue[i]);</span></br>'
								+ '&emsp;&emsp;<span id="line7">}</span></span></br>'
								+ '&emsp;<span>}</span></br>'
								+ '<span>}</span></div>');
							intro.refresh();
							TweenMax.to("#methodCodeDiv", 1, {opacity : 1, onComplete:function() {
								var text = "This sample code is to <span class='ct-code-b-yellow'>display</span> elements from the queue.";
								typing(".introjs-tooltiptext", text, function() {
									$("#methodCode").addClass("z-index-css");
									$(".introjs-nextbutton").show();
								});
							}});
						break;
					}
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
								var text = "New array is created with size <span class='ct-code-b-yellow'>10</span> as it is declared";
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
							$("#x, #xValueBorder").removeClass("visibility-hidden");
							setTimeout(function() {
								intro.nextStep();
							},1000);
						break;
						case "enqueueAnimation":
							$("#entreValue").effect("highlight", {"color" : "yellow", "z-index" : "9999999"}, function() {
								var l1 = $("#entreValue").offset();
								$("#xValue").text($("#entreValue").text()).removeClass("opacity00").offset({
									"top":l1.top,
									"left":l1.left
								});
								TweenMax.to("#xValue", 1, {"top":0, "left": 0, onComplete:function() {
									$("#methodCode").addClass("z-index-css");
									var text= "<span id='checkIf1'></span>&nbsp;<span id='checkIfText'></span>";
									typing(".introjs-tooltiptext", text, function() {
										var l1 = $("#ifandElse").offset();
										$("#checkIf1").html($("#ifandElse").html()).offset({
											"top": l1.top,
											"left": l1.left
										});
										$("#checkIf1 span").css({"display" : "inline-block"});
										$("#checkIf1").addClass("yellow-color");
										TweenMax.to("#checkIf1", 1, {"top" : "0", "left" : "0", onComplete:function() {
											flipEffect("#checkIf1 #rearSpan", rear, function() {
												flipEffect("#checkIf1 #MaxInnerSpan", "10", function() {
													flipEffect("#checkIf1 #MaxSpan", "9", function() {
														if (rear == 9) {
															$("#checkIf1 .elseClass").addClass("white-color");
															typing("#checkIfText", "true", function() {
																$("#checkIf1 #line5").effect("highlight", {"color" : "yellow"}, function() {
																	var steps = 0;
																	var options = {
																		element :'#consoleId',
																		intro :'',
																		position : 'bottom',
																		animateStep: "queueFull"
																	}
																	intro.insertOption(intro._currentStep + ++steps, options);
																	$(".introjs-nextbutton").show();
																});
															});
														} else {
															$("#checkIf1 .ifclass").addClass("white-color");
															$("#checkIf1 #line6").effect("highlight", {"color" : "yellow"}, function() {
																$("#checkIfText").text("");
																$("#checkIf1 #line7").effect("highlight", {"color" : "yellow"}, function() {
																	rear++;
																	$("#rearValue").text(rear);
																	if (front == -1 && rear == 0) {
																		TweenMax.to($("#rearArrow" + rear), 1, {"opacity" : "1"});
																		TweenMax.to($("#rear" + rear), 1, {"opacity" : "1"});
																		$("#rearArrow" + rear).removeClass("opacity00");
																		$("#rear" + rear).removeClass("opacity00");
																	} else {
																		$("#rearArrow" + (rear - 1) + " , #rear" + (rear - 1)).css({"opacity" : "0"});
																		$("#rearArrow" + rear).removeClass("opacity00");
																		$("#rear" + rear).removeClass("opacity00");
																		fromEffectWithTweenMax($('#rearArrow' + (rear - 1) + ' i'), $('#rearArrow' + rear + ' i'));
																		fromEffectWithTweenMax($('#rear' + (rear - 1)), $('#rear' + rear + ' span'));
																	}
																	$("#checkIf1 #line8").effect("highlight", {"color" : "yellow"}, function() {
																		$("#flipRear, #flipX").addClass("display-inline-css");
																		flipEffect("#checkIf1 #flipRear", rear, function() {
																			flipEffect("#checkIf1 #flipX", $("#xValue").text(), function() {
																				$("#box" + rear + " span").text($("#xValue").text());
																				$("#box" + rear).removeClass("opacity00");
																				$("#box" + rear + " span").removeClass("opacity00");
																				$("#box" + rear + " span").css({"opacity" : "1"});
																				fromEffectWithTweenMax($("#xValue"), $("#box" + rear + " span"), function() {
																					$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'enqueueSecondIf();'>Next &#8594;</a>");
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
										}});
									});
								}});
							});
						break;
						case "dequeueAnimation":
							$("#line1").effect("highlight", {"color": "yellow"}, function() {
								var text = '<ul><li><span id="conditionText"></span><span class="yellow-color" id="checkCond"></span>' 
											+ '</li><li class="opacity00"><span id="flipSpan"></span></li><li class="opacity00">' 
											+ '<span id="ifRes"></span></li></ul>';
								typing(".introjs-tooltiptext", text, function() {
									var l1 = $("#line1 > span").offset();
									$("#checkCond").html($("#line1 > span").html()).removeClass("opacity00").offset({
										"top":l1.top,
										"left":l1.left
									});
									typing("#conditionText", "The condition is, ", function() {
										TweenMax.to("#checkCond", 1, {"top": 0, "left": 0, onComplete:function() {
											$(".introjs-tooltiptext ul li").eq(1).removeClass("opacity00");
											fromEffect("#flipSpan", "#checkCond", function() {
												flipEffect("#flipSpan #flipFront", front, function() {
													$(".introjs-tooltiptext ul li:last").removeClass("opacity00");
													if (front == -1) {
														var text1 = "Condition evaluates to <span class='yellow-color'>true</span>."
														typing("#ifRes", text1, function() {
															$("#line2").effect("highlight", {"color": "yellow"}, function() {
																$(".introjs-nextbutton").show();
															});
														});
													} else {
														var text1 = "Condition evaluates to <span class='yellow-color'>false</span>.";
														typing("#ifRes", text1 , function() {
															$("#line3").effect("highlight", {"color": "yellow"}, function() {
																$("#line4").effect("highlight", {"color": "yellow"}, function() {
																	$(".introjs-nextbutton").show();
																});
															});
														});
													}
												});
											});
										}});
									});
								});
							});
						break;
						case "dequeueRemainingAnimation":
							$("#dequeueIf").effect("highlight", {"color" : "yellow"}, function() {
								var text = "<span class='yellow-color' id='elseIfCond'></span>";
								typing(".introjs-tooltiptext", text, function() {
									var l1 = $("#dequeueIf").offset();
									$("#elseIfCond").html($("#dequeueIf").html()).removeClass("opacity00").offset({
										"top":l1.top,
										"left":l1.left
									});
									TweenMax.to("#elseIfCond", 1, {"top":0, "left": 0, onComplete:function() {
										$("#elseIfCond #frontFlip, #elseIfCond #rareFlip").addClass("display-inline-css");
										flipEffect("#elseIfCond #rareFlip", rear, function() {
											flipEffect("#elseIfCond #frontFlip", front, function() {
												if (rear == front) {
													$("#elseIfCond .elseClass").addClass("white-color");
													$("#elseIfCond #line6").effect("highlight", {"color" : "yellow"}, function() {
														$('#front' + front + ', #frontArrow' + front).addClass('opacity00');
														$("#frontValue, #rearValue").text("-1")
														$('#rear' + rear + ', #rearArrow' + rear).css("opacity","0");
														TweenMax.to("#box" + front + " span", 1, {top: -100,opacity : 0, onComplete:function() {
															$("#box" + front + " span").css({"top" : "0"});
															$("#box" + front + " span").text("");
															front = rear = -1;
															$(".introjs-nextbutton").show();
														}});
													});
												} else {
													$("#elseIfCond .ifClass").addClass("white-color");
													$("#elseIfCond #line7").effect("highlight", {"color" : "yellow"}, function() {
														$("#elseIfCond #line8").effect("highlight", {"color" : "yellow"}, function() {
															$("#frontArrow" + front + ", #front" + front).addClass("opacity00");
															$("#front" + (front + 1) + ", #frontArrow" + (front + 1)).removeClass("opacity00");
															fromEffectWithTweenMax($('#frontArrow' + front + ' i'),$('#frontArrow' + (front + 1) + ' i'));
															fromEffectWithTweenMax($('#front' + front + ' span'), $('#front' + (front + 1) + ' span'), function () {
																TweenMax.to("#box" + front + " span", 1, {top: -100, opacity : 0, onComplete:function() {
																	$("#box" + front + " span").css({"top" : "0"});
																	$("#box" + front + " span").text("");
																	front++;
																	$("#frontValue").text(front);
																	$(".introjs-nextbutton").show();
																}});
															});
														});
													});
												}
											});
										});
									}});
								});
							});
						break;
						case "displayAnimation":
							var text = '<ul><li><span id="conditionText"></span><span class="yellow-color" id="displayIf"></span>' 
								+ '</li><li class="opacity00"><span id="flipSpan"></span></li><li class="opacity00">' 
								+ '<span id="displayIfRes"></span></li></ul>';
							typing(".introjs-tooltiptext", text, function() {
								$("#line1").effect("highlight", {"color": "yellow"}, function() {
									var l1 = $("#if").offset();
									$("#displayIf").html($("#if").html()).offset({
										"top": l1.top,
										"left":l1.left
									});
									typing("#conditionText", "The condition is, ", function() {
										TweenMax.to("#displayIf", 1, {top : 0, left : 0, onComplete:function() {
											$(".introjs-tooltiptext ul li").eq(1).removeClass("opacity00");
											$("#displayIf #displayFront, #displayIf #displayRear").addClass("display-inline-css");
											fromEffect("#flipSpan", "#displayIf", function() {
												flipEffect("#flipSpan #displayFront", front, function() {
													flipEffect("#flipSpan #displayRear", rear, function() {
														$(".introjs-tooltiptext ul li:last").removeClass("opacity00");
														if (front == -1 && rear == -1) {
															var text1 = "Condition evaluates to <span class='yellow-color'>true</span>.";
															typing("#displayIfRes", text1, function() {	
																$("#line2").effect("highlight", {"color": "yellow"}, function() {
																	$(".introjs-nextbutton").show();
																});
															});
														} else {
															var text1 = "Condition evaluates to <span class='yellow-color'>false</span>.";
															typing("#displayIfRes", text1, function() {
																$("#line3").effect("highlight",{"color" : "yellow"}, function() {
																	$(".introjs-nextbutton").show();
																});
															});
														}
													});
												});
											});
										}});
									});
								});
							});
						break;
					}
				});
			break;
			case "buttons":
				$(".introjs-helperLayer").one('transitionend', function() {
					TweenMax.to("#buttons", 1, {opacity : 1, onComplete:function() {
						$("#methodCode").removeClass("z-index-css");
						$("#buttons").removeClass("opacity00");
						$("#x, #xValueBorder").addClass("visibility-hidden");
						var text = "Choose any method.";
						typing(".introjs-tooltiptext", text, function() {
							$(".method-buttons").removeClass("disabled");
						});
					}});
				});
			break;
			case "consoleId":
				$(".introjs-helperLayer").one('transitionend', function() {
					$("#animationDiv").removeClass("opacity00");
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					contenteditibleFunction();
					switch(animateStep) {
						case "enqueueTakeValue":
							TweenMax.to("#outputDiv", 1, {opacity : 1, onComplete:function() {
								$("#outputDiv").removeClass("opacity00");
								$("#takeValue, #entreValue").text("");
								var text = "Enter element : ";
								typing("#takeValue", text, function() {
									setTimeout(function() {
										intro.nextStep();
									},1000);
								});
							}});
						break;
						case "enterValue":
							$("#entreValue").attr("contenteditable","true");
							numbers();
							$("#entreValue").effect("highlight",{color: 'yellow'}, 1500);
							$("#entreValue").focus();
							var text = "Enter an integer value.";
							typing(".introjs-tooltiptext", text);
						break;
						case "queueFull":
							$("#fullDiv").text("");
							$("#consoleBodyDiv").append("<div id='fullDiv'></div>");
							var text = "Queue is full...";
							typing("#fullDiv",text,function() {
								$(".introjs-nextbutton").show();
							});
						break;
						case "dequeuePrintValue":
							$("#entreValue").text("");
							if (front == -1) {
								var text = "Queue is empty...";
								var text1 = "There is no element to delete as the array is empty."; 
							} else {
								var text = "Delete element = " + $("#box" + front).text() + ".";
								var text1 = "The element <span class='yellow-color'>" + $("#box" + front).text() + "</span> will be deleted from the array."
							}
							typing($("#takeValue"), text, function() {
								typing(".introjs-tooltiptext", text1, function() {
									$(".introjs-nextbutton").show();
								});
							});
						break;
						case "displayElements":
							$("#entreValue").text("");
							if (front == -1 && rear == -1) {
								var text = "Queue is empty... ";
								typing($("#takeValue"), text, function() {
									$(".introjs-nextbutton").show();
								});
							} else {
								var text = "Elements in queue are : ";
								typing($("#takeValue"), text, function() {
									$("#fullForLoop").effect("highlight",{color: 'yellow'},function() {
										var text = "<span class='yellow-color' id='displayFor'></span>";
										typing(".introjs-tooltiptext", text, function(){
											var l1 = $("#fullForLoop").offset();
											$("#displayFor").html($("#fullForLoop").html()).offset({
												"top" : l1.top,
												"left" : l1.left
											});
											TweenMax.to("#displayFor", 1, {top : 0, left : 0, onComplete:function() {
												$("#displayFor #forInitFront").effect("highlight",{color: 'yellow'}, function() {
													printValues(0);
												});
											}});
										});
									}, 1500);
								});
							}
						break;
					}
				});
			break;
		}
	});
	intro.start();
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

function enqueueBtnDynamicSteps() {
	var steps = 0;
	var options = {
		element :'#methodCode',
		intro :'',
		position : 'right',
		animateStep: "enqueueMethod"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		tooltipClass: "hide",
		animateStep: "createXVariable"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#methodCode',
		intro :'',
		tooltipClass: "hide",
		animateStep: "printValue"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#consoleId',
		tooltipClass: "hide",
		animateStep: "enqueueTakeValue"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#methodCode',
		intro :'',
		tooltipClass : "hide",
		animateStep: "scanValue"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#consoleId',
		intro :'',
		position : 'bottom',
		animateStep: "enterValue"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "enqueueAnimation"
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

function dequeueBtnDynamicSteps() {
	var steps = 0;
	var options = {
		element :'#methodCode',
		intro :'',
		position : 'right',
		animateStep: "dequeueMethod"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "dequeueAnimation"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#consoleId',
		intro :'',
		position : 'bottom',
		animateStep: "dequeuePrintValue"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	if (front == -1) {
		var options = {
			element :'#buttons',
			intro :'',
			position : 'bottom',
		}
		intro.insertOption(intro._currentStep + ++steps, options);
	} else {
		var options = {
			element :'#animationDiv',
			intro :'',
			position : 'bottom',
			animateStep: "dequeueRemainingAnimation"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		
		var options = {
			element :'#buttons',
			intro :'',
			position : 'bottom'
		}
		intro.insertOption(intro._currentStep + ++steps, options);
	}
	intro.nextStep();
}

function displayBtnDynamicSteps() {
	var steps = 0;
	var options = {
		element :'#methodCode',
		intro :'',
		position : 'right',
		animateStep: "displayMethod"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "displayAnimation"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#consoleId',
		intro :'',
		position : 'bottom',
		animateStep: "displayElements"
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
	TweenMax.to(id1, 0.5, {top : 0, left : 0, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
			$(id1).removeClass("z-index");
		}
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
			$('.introjs-nextbutton').show();
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

function enqueueSecondIf() {
	$(".nextButton").remove();
	var text = "<span class='yellow-color' id= 'checkIf1'></span>";
	typing("-introjs-tooltiptext", text, function() {
		var l1 = $("#secondIf").offset();
		$("#checkIf1").html($("#secondIf").html()).offset({
			"top": l1.top,
			"left": l1.left
		});
		$("#checkIf1 span").css({"display" : "inline-block"});
		$("#checkIf1").addClass("yellow-color");
		TweenMax.to("#checkIf1", 1, {"top" : "0", "left" : "0", onComplete:function() {
			$("#checkIf1 #line10").effect("highlight", {"color" : "yellow"}, function() {
				flipEffect("#checkIf1 #flipFront", front, function() {
					if (front == -1) {
						$("#checkIf1 #line11").effect("highlight", {"color" : "yellow"}, function() {
							front++;
							$("#initFront, #initFrontArrow").addClass("opacity00");
							$("#front" + front + ", #frontArrow" + front).removeClass("opacity00");
							$("#frontValue").text(front);
							$(".introjs-nextbutton").show();
						});
					} else {
						$("#checkIf1 #line10").addClass("white-color");
						var text1 = "<ul><li>Condition evaluates to <span class='yellow-color'>false</span>.</li></ul>"
						typing("#checkIfText", text1, function() {
							$(".introjs-nextbutton").show();
						});
					}
				});
			});	
		}});
	});
}

function printValues(i) {
	if (i <= rear) {
		if ($("#box" + i).text() != "") {
			$("#box" + i).addClass("z-index-css z-index-background-color");
		}
		$("#takeValue").append("<span id = 'value" + i + "'></span>&nbsp;");
		var l1 = $("#box" + i).offset();
		$("#value" + i).text($("#box" + i).text()).offset({
			"top" : l1.top,
			"left" : l1.left
		});
		TweenMax.to("#value" + i, 1, {top : 0, left : 0, onComplete:function() {
			$("#box" + i).removeClass("z-index-css z-index-background-color");
			i++;
			printValues(i);
		}});
	} else {
		$(".introjs-nextbutton").show();
	}
}


</script>
</body>
</html>