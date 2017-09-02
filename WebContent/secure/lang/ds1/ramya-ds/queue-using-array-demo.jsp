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

/* .table-width50 {
	width: 50%;
} */

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
<span id="arrayLength">#define MAX 10;
int queue[MAX];</span>
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
					<button type="button" id="enqueueBtn" class="btn btn-success btn-xs margintop createClass">enqueue</button>
				</div>
				<div>
					<button type="button" id="dequeueBtn" class="btn btn-success btn-xs margintop createClass">dequeue</button>
				</div>
				<div>
					<button type="button" id="displayBtn" class="btn btn-success btn-xs margintop createClass">display</button>
				</div>
			</div>
		</div>
		<div class="col-xs-12 border margin-top20 animation-div opacity00" id= "animationDiv">
			<div class="col-xs-12 margin-top20 opacity00 x-div" id="xDiv" align ="center">
				<span>front = </span>&emsp;
				<span class="x-border opacity00" id ="frontValueBorder"><span class="front-value" id="frontValue">-1</span></span>&emsp;
				<span>rear = </span>&emsp;
				<span class="x-border opacity00" id ="rearValueBorder"><span class="rear-value" id="rearValue">-1</span></span>&emsp;
				<span id = "x" class="opacity00">x = </span>&emsp;
				<span class="x-border opacity00" id ="xValueBorder"><span class="x-value opacity00" id="xValue">354</span></span>
			</div>
			<div id ="totalTable" class="text-center table-padding">
				<!-- <div class="col-xs-offset-2 col-xs-2 display-none" id="startingTable">
					<table>
						<tr>
							<td>
								<div id="initRear">rear</div>
								<div id="initRearArrow"><i class="fa fa-arrow-down" aria-hidden="true"></i></div>
							</td>
						</tr>
						<tr>
							<td class ="table-border">
								<span>-1</span>
							</td>
						</tr>
						<tr>
							<td>
								<div id="initFrontArrow"><i class="fa fa-arrow-up" aria-hidden="true"></i></div>
								<div id="initFront">front</div>
							</td>
						</tr>
					</table>
				</div> -->
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
				<div class="output-console-body" id="consoleBodyDiv"><span id='takeValue'></span><span id='entreValue' maxLength = '3' contenteditable="false"></span>
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
		enqueueBtnDynamicSteps();
	});
	$("#dequeueBtn").click(function() {
		dequeueBtnDynamicSteps();
	});
	$("#displayBtn").click(function() {
		displayBtnDynamicSteps();
	});
	/* if ($("#entreValue").text() == "") {
		$(".introjs-nextbutton").hide();
	} else {
		$(".introjs-nextbutton").show();
	} */
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
			element: '#arrayLength',
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
				var text = "let us discuss about queue using array."
				typing(".introjs-tooltiptext", text, function(){
					$(".introjs-nextbutton").show();
				});
			break;
			case "globalCode":
				$('#codingDiv').removeClass('visibility-hidden');
				$(".introjs-helperLayer").one('transitionend', function() {
					TweenMax.to("#globalCode", 1, {opacity : 1, onComplete:function() {
						$("#globalCode").removeClass("opacity00");
						var text = "This is the global decleration of variables.";
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-nextbutton").show();
						});
					}});
				});
			break;
			case "arrayLength":
				$(".introjs-helperLayer").one('transitionend', function() {
					var text = "Here the array length is declared as 10.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				});
			break;
			case "frontRareDecleration":
				$(".introjs-helperLayer").one('transitionend', function() {
					var text = "Here front and rear variables assigned with -1.";
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
								+ '&emsp;<span id="ifandElse"><span id="line4">if (<span id="eifCondition1">' 
									+ '<span id ="rearSpan">rear</span> == ' 
									+ '<span id="MaxSpan"><span id ="MaxInnerSpan">Max</span> - 1</span></span>) {</span></br>'
								+ '&emsp;&emsp;<span id="line5">printf("Queue is full...");</span></br>'
								+ '&emsp;<span id="line6">} else {</span></br>'
								+ '&emsp;&emsp;<span id="line7">rear++;</span></br>'
								+ '&emsp;&emsp;<span id="line8">queue[<span id ="flipRear">rear</span>] = <span id ="flipX">x</span>;</span></br>'
								+ '&emsp;<span id="line9">}</span></span></br>'
								+ '&emsp;<span id="line10">if (<span id="eifCondition2"><span id="flipFront">front</span> == -1</span>) {</span></br>'
								+ '&emsp;&emsp;<span id="line11">front++;</span></br>'
								+ '&emsp;<span>}</span></br>'
								+ '<span>}</span></div>');
							intro.refresh();
							TweenMax.to("#methodCodeDiv", 1, {opacity : 1, onComplete:function() {
								var text = "This is the code to enter elements in the queue.";
								typing(".introjs-tooltiptext", text, function() {
									$("#enqueueMethod").addClass("z-index-css");
									$("#line1").effect("highlight", {color : "yellow"}, 2000, function() {
										$(".introjs-nextbutton").show();
									});
								});
							}});
						break;
						case "printValue":
							var text = "This is the code to enter elements in the queue.";
							$("#entreValue").attr("contenteditable","false");
							typing(".introjs-tooltiptext", text, function() {
								$("#line2").effect("highlight", {color : "yellow"}, 2000, function() {
									$(".introjs-nextbutton").show();
								});
							});
						break;
						case "scanValue":
							var text = "This is the code to enter elements in the queue.";
							//$("#entreValue").attr("contenteditable","false");
							typing(".introjs-tooltiptext", text, function() {
								$("#line3").effect("highlight", {color : "yellow"}, 2000, function() {
									$(".introjs-nextbutton").show();
								});
							});
						break;
						case "dequeueMethod":
							$("#methodCode").text("");
							$("#methodCode").append('<div id="dequeueMethod">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           '
								+ '<span>void dequeue() {</span></br>'
								+ '&emsp;<span id="line1">if (<span id="ifCondition1">' 
										+ '<span id="flipFront" style="display:inline-block;">front</span> == -1</span>) {</span></br>'
								+ '&emsp;&emsp;<span id="line2">printf("Queue is empty...");</span></br>'
								+ '&emsp;<span id="line3">} else {</span></br>'
								+ '&emsp;&emsp;<span id="line4">printf("Delete element = %d", queue[front]);</span></br>'
								+ '&emsp;&emsp;<span id="line5">if (<span id="ifCondition2">' 
										+ '<span id ="rareFlip">rear</span> == <span id="frontFlip">front</span></span>) {</span></br>'
								+ '&emsp;&emsp;&emsp;<span id="line6">rear = front = -1;</span></br>'
								+ '&emsp;&emsp;<span id="line7">} else {</span></br>'
								+ '&emsp;&emsp;&emsp;<span id="line8">front++;</span></br>'
								+ '&emsp;&emsp;<span id="line9">}</span></br>'
								+ '&emsp;<span>}</span></br>'
								+ '<span>}</span></div>');
							intro.refresh();
							TweenMax.to("#methodCodeDiv", 1, {opacity : 1, onComplete:function() {
								var text = "This is the code to delete elements from the queue.";
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
								+ '&emsp;<span id="line1">if (front == -1 && rear == -1) {</span></br>'    
								+ '&emsp;&emsp;<span id="line2">printf("Queue is empty...");</span></br>'
								+ '&emsp;<span id="line3">} else {</span></br>'
								+ '&emsp;&emsp;<span id="line4">printf("Elements in queue are :");</span>'
								+ '&emsp;&emsp;<div id="line5">for (int <span id="forInit">i = front</span>;' 
									+ ' <span if="forCond">i <= rear</span>; <span id="forInc">i++</span>) {</div>'
								+ '&emsp;&emsp;&emsp;<span id="line6">printf("%d", queue[i]);</span></br>'
								+ '&emsp;&emsp;<span id="line7">}</span></br>'
								+ '&emsp;<span>}</span></br>'
								+ '<span>}</span></div>');
							intro.refresh();
							TweenMax.to("#methodCodeDiv", 1, {opacity : 1, onComplete:function() {
								var text = "This is the code to display elements from the queue.";
								typing(".introjs-tooltiptext", text, function() {
									$("#line2").effect("highlight", {color : 'yellow'}, 1000, function() {
										//$(".introjs-nextbutton").show();
										$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'displayCondition()'>Next &#8594;</a>");
									});
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
								var text = "New array is created with size 10 as it is declared";
								typing(".introjs-tooltiptext", text, function() {
									$(".introjs-nextbutton").show();
								});
							}});
						break;
						case "initfrontRear":
							$("#xDiv, #frontValueBorder, #rearValueBorder").removeClass("opacity00");
							TweenMax.to("#frontValueBorder", 1, {opacity : 1});
							TweenMax.to("#rearValueBorder", 1, {opacity : 1, onComplete:function() {
								var text = "The two variables front and rear will store the value -1.";
								typing(".introjs-tooltiptext", text, function() {
									$(".introjs-nextbutton").show();
								});
							}});
							/* var l1 = $("#animationTable").offset();
							$("#startingTable").toggleClass("display-none visibility-hidden");
							//$("#animationTable").parent().toggleClass("col-xs-12 col-xs-8");
							$("#animationTable").addClass("table-css");
							var l2 = $("#animationTable").offset();
							var leftLength = l1.left - l2.left;
							TweenMax.from($("#animationTable"), 1, {left: leftLength, onComplete: function() {
								$("#startingTable").toggleClass("visibility-hidden animated zoomIn").one("animationend", function() {
									$("#startingTable").removeClass("animated zoomIn");
									var text = "Choose any method.";
									typing(".introjs-tooltiptext", text, function() {
										$(".introjs-nextbutton").show();
									});
								});
							}}); */
							//TweenMax.to("#startingTable", 1, {opacity : 1, onComplete:function() {
								/* $("#startingTable").fadeIn(1500, function() {
									$("#startingTable").removeClass("hide");
									var text = "abc";
									typing(".introjs-tooltiptext", text, function() {
										$(".introjs-nextbutton").show();
									});
								}); */
							//}});
							
							/* TweenMax.to("#animationTable", 1, {"margin-left" : "285px", onComplete:function() {
								$("#animationTable").removeAttr("style");
								$("#startingTable").removeClass("hide");
								var text = "abc";
								typing(".introjs-tooltiptext", text, function() {
									$(".introjs-nextbutton").show();
								});
							}}); */ 
						break;
						case "createXVariable":
							TweenMax.to("#xValueBorder, #x", 1, {"opacity" : "1", onComplete:function() {
								$("#xValueBorder, #x").removeClass("opacity00");
								intro.nextStep();
							}});
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
									var text= "<span id='checkIf1'></span>&nbsp;<span class='yellow-color' id='checkIfText'></span>";
									typing(".introjs-tooltiptext", text, function() {
										var l1 = $("#eifCondition1").offset();
										$("#checkIf1").html($("#eifCondition1").html()).offset({
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
															typing("#checkIfText", "true", function() {
																$("#line5").effect("highlight", {"color" : "yellow"}, function() {
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
															typing("#checkIfText", "false", function() {
																$("#line6").effect("highlight", {"color" : "yellow"}, function() {
																	typing("#checkIf1", "else", function() {
																		$("#checkIfText").text("");
																		$("#line7").effect("highlight", {"color" : "yellow"}, function() {
																			rear++;
																			fromEffect("#checkIfText","#line7", function() {
																				if (front == -1 && rear == 0) {
																					$("#initRear, #initRearArrow").addClass("opacity00");
																					$("#rear" + rear + ", #rearArrow" + rear).removeClass("opacity00");
																					fromEffectWithTweenMax($("#initRearArrow i"), $("#rearArrow" + rear + " i"));
																					fromEffectWithTweenMax($("#initRear"), $("#rear" + rear + " span"));
																				} else {
																					$("#rearArrow" + (rear - 1) + " i, #rear" + (rear - 1)).addClass("opacity00");
																					$("#rear" + rear + ", #rearArrow" + rear).removeClass("opacity00");
																					fromEffectWithTweenMax($('#rearArrow' + (rear - 1) + ' i'), $('#rearArrow' + rear + ' i'));
																					fromEffectWithTweenMax($('#rear' + (rear - 1)), $('#rear' + rear + ' span'));
																				}
																				$("#line8").effect("highlight", {"color" : "yellow"}, function() {
																					$("#checkIfText").html($("#line8").html());
																					$("#checkIfText").before("</br>");
																					fromEffectWithTweenMax($("#line8"), $("#checkIfText"), function() {
																						$("#flipRear, #flipX").addClass("display-inline-css");
																						flipEffect("#checkIfText #flipRear", rear, function() {
																							flipEffect("#checkIfText #flipX", $("#xValue").text(), function() {
																								$("#box" + rear + " span").text($("#xValue").text());
																								$("#box" + rear).removeClass("opacity00");
																								fromEffectWithTweenMax($("#xValue"), $("#box" + rear + " span"), function() {
																									$("#line10").effect("highlight", {"color" : "yellow"}, function() {
																										fromEffect("#checkIf1","#line10 #eifCondition2", function() {
																											$("#flipRear, #flipX").addClass("display-inline-css");
																											flipEffect("#checkIfText #flipFront", front, function() {
																												if (front == -1) {
																													$("#line11").effect("highlight", {"color" : "yellow"}, function() {
																														fromEffect("#checkIfText","#line11", function() {
																															front++;
																															$("#initFront, #initFrontArrow").addClass("opacity00");
																															$("#front" + front + ", #frontArrow" + front).removeClass("opacity00");
																															fromEffectWithTweenMax($('#initFrontArrow i'), $('#frontArrow' + front + ' i'));
																															fromEffectWithTweenMax($("#initFront"), $("#front" + front + " span"), function() {
																																$(".introjs-nextbutton").show();
																															});
																														});
																													});
																												} else {
																													typing("#checkIfText","false", function() {
																														$(".introjs-nextbutton").show();
																													});
																												}
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
								var text = '<span class="yellow-color" id="checkCond"></span><span id="ifRes"></span>';
								typing(".introjs-tooltiptext", text, function() {
									//fromEffectWithTweenMax($("#line1"), $("#checkCond"), function() {
									var l1 = $("#line1 > span").offset();
									$("#checkCond").html($("#line1 > span").html()).removeClass("opacity00").offset({
										"top":l1.top,
										"left":l1.left
									});
									TweenMax.to("#checkCond", 1, {"top":0, "left": 0, onComplete:function() {
										flipEffect("#checkCond #flipFront", front, function() {
											if (front == -1) {
												typing("#ifRes", " true", function() {
													$("#line2").effect("highlight", {"color": "yellow"}, function() {
														$(".introjs-nextbutton").show();
													});
												});
											} else {
												typing("#ifRes", " false", function() {
													$("#line3").effect("highlight", {"color": "yellow"}, function() {
														$("#line4").effect("highlight", {"color": "yellow"}, function() {
															$(".introjs-nextbutton").show();
														});
													});
												});
											}
										});
									}});//});
								});
							});
						break;
						case "dequeueRemainingAnimation":
							$("#line5").effect("highlight", {"color" : "yellow"}, function() {
								var text = "<span class='yellow-color' id='elseIfCond'></span></br><span class='yellow-color' id='elseIftext'></span>";
								typing(".introjs-tooltiptext", text, function() {
									var l1 = $("#line5 > span").offset();
									$("#elseIfCond").html($("#line5 > span").html()).removeClass("opacity00").offset({
										"top":l1.top,
										"left":l1.left
									});
									TweenMax.to("#elseIfCond", 1, {"top":0, "left": 0, onComplete:function() {
										$("#elseIfCond #frontFlip, #elseIfCond #rareFlip").addClass("display-inline-css");
										flipEffect("#elseIfCond #rareFlip", rear, function() {
											flipEffect("#elseIfCond #frontFlip", front, function() {
												if (rear == front) {
													typing("#elseIftext", "true", function() {
														$("#line6").effect("highlight", {"color" : "yellow"}, function() {
															var l1 = $("#line6").offset();
															$("#elseIftext").html($("#line6").html()).removeClass("opacity00").offset({
																"top":l1.top,
																"left":l1.left
															});
															TweenMax.to("#elseIftext", 1, {"top":0, "left": 0, onComplete:function() {
																$('#front' + front + ', #frontArrow' + front).addClass('opacity00');
																$('#initFront, #initFrontArrow').removeClass('opacity00');
																fromEffectWithTweenMax($('#frontArrow' + front + ' i'), $('#initFrontArrow i'));
																fromEffectWithTweenMax($('#front' + front + ' span'), $('#initFront'));
																$('#rear' + rear + ', #rearArrow' + rear).addClass('opacity00');
																$('#initRear, #initRearArrow').removeClass('opacity00');
																fromEffectWithTweenMax($('#rearArrow' + rear + ' i'), $('#initRearArrow i'));
																fromEffectWithTweenMax($('#rear' + rear + ' span'), $('#initRear'));
																TweenMax.to("#box" + front + " span", 1, {top: -100,opacity : 0, onComplete:function() {
																	$("#box" + front + " span").css({"top" : "0"});
																	$("#box" + front + " span").text("");
																	front = rear = -1;
																	$(".introjs-nextbutton").show();
																}});
															}});
														});
													});
												} else {
													typing("#elseIftext", "false", function() {
														$("#line7").effect("highlight", {"color" : "yellow"}, function() {
															typing("#elseIfCond", "else", function() {
																$("#line8").effect("highlight", {"color" : "yellow"}, function() {
																	var l1 = $("#line8").offset();
																	$("#elseIftext").html($("#line8").html()).removeClass("opacity00").offset({
																		"top":l1.top,
																		"left":l1.left
																	});
																	TweenMax.to("#elseIftext", 1, {"top":0, "left": 0, onComplete:function() {
																		if (front == -1 && rear == -1) {
																			$("#initFront, #initFrontArrow").addClass("opacity00");
																			$("#front" + (front + 1) + ", #frontArrow" + (front + 1)).removeClass("opacity00");
																			fromEffectWithTweenMax($('#initFrontArrow i'), $('#frontArrow' + (front + 1) + ' i'));
																			fromEffectWithTweenMax($("#initFront"), $("#front" + (front + 1) + " span"), function() {
																				TweenMax.to("#box" + front + " span", 1, {top: -100,opacity : 0, onComplete:function() {
																					$("#box" + front + " span").text("");
																					front = rear = -1;
																				}});
																			});
																		} else {
																			$("#frontArrow" + front + ", #front" + front).addClass("opacity00");
																			$("#front" + (front + 1) + ", #frontArrow" + (front + 1)).removeClass("opacity00");
																			fromEffectWithTweenMax($('#frontArrow' + front + ' i'),$('#frontArrow' + (front + 1) + ' i'));
																			fromEffectWithTweenMax($('#front' + front + ' span'), $('#front' + (front + 1) + ' span'), function () {
																				TweenMax.to("#box" + front + " span", 1, {top: -100,opacity : 0, onComplete:function() {
																					$("#box" + front + " span").css({"top" : "0"});
																					$("#box" + front + " span").text("");
																					front++;
																					$(".introjs-nextbutton").show();
																				}});
																			});
																		}
																	}});
																});
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
							$("#line1").effect("highlight", {"color": "yellow"}, function() {
								if (front == -1 && rear == -1) {
									$("#line2").effect("highlight", {"color": "yellow"}, function() {
										$(".introjs-nextbutton").show();
									});
								} else {
									$("#line3").effect("highlight",{"color" : "yellow"}, function() {
										$(".introjs-nextbutton").show();
									});
								}
							});
						break;
					}
				});
			break;
			/* case "line3":
				$("#line3").effect("highlight", {color : 'yellow'}, 1000, function() {
					var text = "Choose any method.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				});
			break; */
			case "buttons":
				$(".introjs-helperLayer").one('transitionend', function() {
					$(".introjs-nextbutton").hide();
					TweenMax.to("#buttons", 1, {opacity : 1, onComplete:function() {
						$("#buttons").removeClass("opacity00");
						var text = "Choose any method.";
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-nextbutton").show();
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
									//$(".introjs-nextbutton").show();
									intro.nextStep();
								});
							}});
						break;
						case "enterValue":
							/* $("#entreValue").attr("contenteditible","true").css({"width" : "15px"});
							$("#entreValue").focus(); */
							$("#entreValue").attr("contenteditable","true");
							$("#entreValue").effect( "highlight",{color: 'yellow'}, 1500);
							$("#entreValue").focus();
						break;
						case "queueFull":
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
							} else {
								var text = "Delete element = " + $("#box" + front).text() + ".";
							}
							typing($("#takeValue"), text, function() {
								$(".introjs-nextbutton").show();
							});
						break;
						case "displayElements":
							$("#entreValue").text("");
							if(front == -1 && rear == -1) {
								var text = "Queue is empty... ";
								typing($("#takeValue"), text, function() {
									$(".introjs-nextbutton").show();
								});
							} else {
								var text = "Elements in queue are : ";
								typing($("#takeValue"), text, function() {
									forLoopDynamicSteps();
									$(".introjs-nextbutton").show();
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
		position : 'bottom',
		animateStep: "createXVariable"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#methodCode',
		intro :'',
		position : 'bottom',
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
		position : 'right',
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
		element :'#consoleId',
		intro :'',
		position : 'bottom',
		animateStep: "displayElements"
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	if (front == -1 && rear == -1) {
		var options = {
			element :'#buttons',
			intro :'',
			position : 'bottom',
		}
		intro.insertOption(intro._currentStep + ++steps, options);
	}
	intro.nextStep();
}

function forLoopDynamicSteps() {
	var steps = 0;
	var options = {
		element :'#forInit',
		intro :'',
		position : 'right',
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#forCond',
		intro :'',
		position : 'right',
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#line6',
		intro :'',
		position : 'right',
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	
	var options = {
		element :'#forInc',
		intro :'',
		position : 'right',
	}
	intro.insertOption(intro._currentStep + ++steps, options);
	intro.nextStep();
}

function fromEffect(id1, id2, callBackFunction) {
	var l1 = $(id2).offset();
	$(id1).html($(id2).text()).offset({
		"top" : l1.top,
		"left" : l1.left
	});
	//$(id1).addClass("z-index");
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

function displayCondition() {
	$(".nextButton").remove();
	var text = "<span class='yellow-color' id='ifConditons'></span><span id='ifConditionResult'></span>";
	typing("#tooltiptext", text, function() {
		
	});
}


</script>
</body>
</html>