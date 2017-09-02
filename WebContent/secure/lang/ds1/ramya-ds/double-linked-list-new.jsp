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

<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/gs/TimelineLite.min.js"></script>
<title>doubly linkedlist</title>
<style type="text/css">

.padding0 {
	padding: 0;
}

.creampretab4 {
	-moz-tab-size: 2;
	background-color: lavender !important;
	font-size: 11px;
	font-style: inherit;
	line-height: 1.5;
	overflow-y: auto;
	white-space: pre;
	word-spacing: -3px;
	position: relative;
}

.border {
	border: 1px solid grey;
	min-height: 465px;
	border-radius: 4px;
}

.box-border {
	border: 1px solid grey;
	height: 30px;
	border-radius: 4px;
}

.div-border {
	display: inline-block;
	padding: 0;
	text-align: center;
	width: 45px;
	margin: 0;
	border: 2px solid gray;
	min-height: 24px;
}

.no-border {
	display: inline-block;
	padding: 0;
	text-align: center;
	height: 21px;
	margin: 0;
	border: 2px solid transprent;
}

.margintop {
	margin-top: 15px;
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

.input-css {
	width: 72px;
}

.introjs-fixParent {
	position: relative !important;
}

.value-center {
	align-items: center;
	display: flex;
	text-align: center;
}

.z-index-class {
	position: relative;
	z-index: 9999999;
	background-color: white;
}

span {
	position: relative;
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

.yellow-color {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
}

.output-console-title-bar {
	background-image: -moz-linear-gradient(center top, #e8e8e8, #bcbbbc);
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-size: 0.75em;
 	/* margin-top: 20px;  */
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
	height: 100px;
	overflow: auto;
	padding: 10px;
	white-space: pre-line;
}


.margin-top20 {
	margin-top: 20px;
}

.green-color {
	font-family: monospace;
	font-weight: bold;
	color: #0f0;
}

.nextButton {
	background-color: green;
}

.z-index-transfer {
	z-index:9999999;
}

.red-color-css {
	color: red;
}

#buttonsDiv > div > div {
	display: inline;
	margin: 0 10px;
}

#buttons {
	border: 1px solid gray;
	margin-top: 5px;
}

#buttons > div > button {
	margin-bottom: 15px;
}

</style>
</head>
<body>
	<div class="col-xs-12">
		<div class="col-xs-offset-4 col-xs-4">
			<h2 class="text-center">
				<span class="label label-default ct-demo-heading" id="heading">Doubly
					LinkedList</span>
			</h2>
		</div>

		<div class="col-xs-12 margintop padding0 opacity00" id="mainDiv">
			<div class="col-xs-4 opacity00 padding0" id="code">
				<pre id="totalCode" class="creampretab4">
<span id="structDeclaration" class="opacity00">struct list {
  struct list *prev;
  int info;
  struct list *next;
};
typedef struct list *node;
node first = NULL;</span>

<div id="methodId"></div>
</pre>
			</div>
			<div class="col-xs-8" style="padding-right: 0px;">
				<div class="col-xs-12 border" id="animationArea">
					<div class="col-xs-12" id="buttonsDiv">
						<div class="col-xs-12 text-center padding0" id="buttons">
							<div>
								<button type="button" id="createBtn"
									class="btn btn-success btn-xs margintop createClass">Create</button>
							</div>
							<div>
								<button type="button" class="btn btn-success btn-xs margintop"
									id="insertAtBeginBtn">InsertatBegin</button>
							</div>
							<div>
								<button type="button" class="btn btn-success btn-xs margintop"
									id="insertAtPositionBtn">insertAtPosition</button>
							</div>
							<div>
								<button type="button" class="btn btn-success btn-xs margintop"
									id="insertAtEndBtn">InsertAtEnd</button>
							</div>
							<div>
								<button type="button" class="btn btn-success btn-xs margintop"
									id="deleteAtBeginBtn">deleteAtBegin</button>
							</div>
							<div>
								<button type="button" class="btn btn-success btn-xs margintop"
									id="deleteAtPositionBtn">deleteAtPosition</button>
							</div>

							<div>
								<button type="button" class="btn btn-success btn-xs margintop"
									id="deleteAtEndBtn">deleteAtEnd</button>
							</div>
							<div>
								<button type="button" class="btn btn-success btn-xs margintop"
									id="displayBtn">display</button>
							</div>
						</div>
					</div>

					<div class="col-xs-12 opacity00" id="totalElementsDiv">
						<div class="buttons-div col-xs-5" id="ElementsDiv" style="border: 1px solid grey; height: 100px; border-radius: 4px; margin-top: 10px;">
							<div class="margintop">
								<span id="innerHeading"><b>Create Operation :</b></span>
							</div>
							<div class="margintop" id="inputId">
								<form class="form-inline" id="formId">
									<div class="form-group">
										<span id="EnterTextSpan">Enter element : &emsp;</span> 
										<input id="inputIdField" type="text" class="input-css" placeholder="number" maxLength="3">
									</div>
									&emsp;&emsp;
									<button type="button" id="inputBtn"
										class="btn btn-success btn-sm input-btn">Create</button>
								</form>
							</div>
						</div>
						<div class="col-xs-7" style="margin-top: 40px;">
							<div class="col-xs-12">
								<div class="col-xs-1 padding0" id="xEqual">x =</div>
								<div class="col-xs-2 box-border value-center text-center numbers" id="xBox"></div>
								<div class="col-xs-offset-1 col-xs-2 padding0" id="temp">temp =</div>
								<div class="col-xs-2 box-border value-center text-center">
									<span class="numbers" id="tempDiv"></span>
								</div>
								<div id="q">
									<div class="col-xs-offset-1 col-xs-1 padding0">q =</div>
									<div class="col-xs-2 box-border value-center text-center">
										<span class="numbers" id="lastDiv"></span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xs-12 opacity00" id="animationDiv" style="margin-top: 40px; min-height: 220px;">
						<div class="col-xs-2 padding0" style="margin-top: 18px;">
							<div class="col-xs-5" style="margin-top: 4px;">first=</div>
							<div class="col-xs-6 box-border value-center text-center"
								id="first">
								<span id="firstDiv">NULL</span>
							</div>
						</div>
						<div class="col-xs-10" id="dynamicNodesDiv"></div>
					</div>
					<div class="col-xs-offset-2 col-xs-8 margin-top20 opacity00" id="outputDiv">
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
	<script type="text/javascript">

var count = 0,arrowCount = 0;
var intro;
var typingInterval = 5;
var arr=[];
var tl = new TimelineMax();
var position, positionValue;
$(document).ready(function() {
	$(".line").hide();
	//$(".text-class").hide();
	svgAppend("#animationDiv", "svgId");
	svgMarkerAppend("#svgId", "arrow");
	$("#svgId").addClass("z-indexArrow");
	$(document).keydown(function(objEvent) {
	    if (objEvent.keyCode == 9) {  //tab pressed
	        objEvent.preventDefault(); // stops its action
	    }
	});
	
	$("#createBtn").click(function() {
		//$("#createBtn").addClass("createClass");
		createMethodDynamicSteps();
		intro.nextStep();
	});
	
	$("#insertAtBeginBtn").click(function() {
		console.log("click")
		insertAtBeginMethodDynamicSteps();
	});
	
	$("#deleteAtBeginBtn").click(function() {
		console.log("clicked")
		deleteAtBeginMethodDynamicSteps();
	});
	
	$("#insertAtEndBtn").click(function() {
		$("#insertAtEndBtn").addClass("insertAtEndClass");
		insertAtEndMethodDynamicSteps();
	});
	
	$("#deleteAtEndBtn").click(function() {
		deleteAtEndMethodDynamicSteps();
	});
	
	$("#insertAtPositionBtn").click(function() {
		insertAtPositionMethodDynamicSteps();
	});
	
	$("#deleteAtPositionBtn").click(function() {
		deleteAtPositionMethodDynamicSteps();
	});
	
	$("#displayBtn").click(function() {
		displayMethodDynamicSteps();
	});
	
		intro = introJs();
		intro.setOptions({
			showStepNumbers: false,
			exitOnOverlayClick: false,
			showBullets: false,
			exitOnEsc: false,
			keyboardNavigation: false,
			steps : [ {
				element : "#heading",
				intro : "",
				position:"right"
			},{
				element : "#structDeclaration",
				intro : "",
				position:"right"
			},{
				element : "#buttons",
				intro : "",
				position:"left"
			} 
		]});
		
		intro.onafterchange(function(targetElement) {
			var elementId = targetElement.id;
			switch (elementId) {
				case "heading":
					$('.introjs-nextbutton').hide();
					$('.nextButton').hide();
					var text="Let us discuss about <span class='ct-code-b-yellow'>doubly linkedlist</span>."
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				break;
				case "structDeclaration":
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer ").one('transitionend', function() {
						$("#mainDiv, #code").removeClass("opacity00");
						$("#structDeclaration").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							var text = "This is the <span class='ct-code-b-yellow'>definition</span> of the new" 
									+ " structure user defined datatype <span class='ct-code-b-yellow'>list</span>.";
							typing(".introjs-tooltiptext", text, function() {
								$("#structDeclaration").removeClass("animated zoomIn");
								$('.introjs-nextbutton').show();
							});
						});
					});
					break;
				case "buttons":
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer ").one('transitionend', function() {
						$(".z-index-class").removeClass("z-index-class");
						$("#buttonsDiv").removeClass("opacity00");
						$("#totalElementsDiv").addClass("opacity00");
						//$("#firstDiv").text("NULL");
						$("#inputIdField").val("");
						$(".numbers").text("");
						var text = "Choose any button.";
						typing(".introjs-tooltiptext", text, function() {
						});
					});
					break;
				case "methodId":
					$('.introjs-nextbutton').hide();
					//$(".introjs-helperLayer ").one('transitionend', function() {
						var animateStep = intro._introItems[intro._currentStep].animateStep;
						console.log(animateStep);
						switch(animateStep) {
							case "createMethod" :
								$("#methodId").empty();
								$("#methodId").append('<div class="opacity00" id="createMethodId"><pre>node create(node first) {<br/>'
										+ '&emsp;<span id= "line1">node temp, q;</span><br/>'
										+ '&emsp;<span id= "line2">int x;</span><br/>'
										+ '&emsp;<span id= "line3">printf("Enter element:");</span>'
										+ '&emsp;<span id= "line4">scanf("%d", &x);</span><br>'
										+ '<div id="whileLoop" style="display: inline-block;">' 
											+ '&emsp;<span id= "line5">while(<span id= "flipX" style="display: inline-block;">x</span> != -1) {</span><br/>'
										+ '&emsp;&emsp;<span id= "line6">temp = (struct list*)malloc(sizeof(struct list));</span><br/>'
										+ '&emsp;&emsp;<span id= "line7">temp->prev = NULL;</span><br/>'
										+ '&emsp;&emsp;<span id= "line8">temp->info = ' 
										+ '<span id="flipX1" style="display: inline-block;">x</span>;</span><br/>'
										+ '&emsp;&emsp;<span id= "line9">temp->next = NULL;</span><br/>'
										+ '&emsp;&emsp;<span id= "line10">if (' 
											+ '<span id="firstValue" style: "inline-block;">first</span> == NULL) {</span><br/>'
										+ '&emsp;&emsp;&emsp;<span id= "line11">first = temp;</span><br/>'
										+ '&emsp;&emsp;<span id= "line12">} else {</span><br/>'
										+ '&emsp;&emsp;&emsp;<span id= "line13" style="display:inline-block;">q->next = temp;</span><br/>'
										+ '&emsp;&emsp;&emsp;<span id= "line14" style="display:inline-block;">temp->prev = q;</span><br/>'
										+ '&emsp;&emsp;<span id= "line15">}</span><br/>'
										+ '&emsp;&emsp;<span id= "line16" style="display:inline-block">q = temp;</span><br/>'
										+ '&emsp;&emsp;<span id= "line17">printf("Enter element:");</span><br/>'
										+ '&emsp;&emsp;<span id= "line18">scanf("%d", &x);</span><br/>'
										+ '&emsp;<span id= "line19">}</span></div><br/>'
										+ '&emsp;<span id= "line20">return first;</span><br/>'
									+ '}</pre></div>');
								intro.refresh();
								$(".input-btn").remove();
								$(".introjs-helperLayer").one('transitionend', function() {
									$("#formId").append('<button type="button" id="createInputBtn" class="btn btn-success btn-sm input-btn">' 
												+ 'create</button>');
									TweenMax.to($("#createMethodId"), 1, {opacity: 1, onComplete: function() {
										$(".nu  mbers, #totalElementsDiv, #q").removeClass("opacity00");
										if (count != 0) {
											count = 0;
											$(".node, .svg-line").fadeOut(1500, function() {
												$(".node, .svg-line").remove();	
												$("#firstDiv").text("NULL");
												$("#inputIdField").val("");
												$(".numbers").text("");
											});
										}
										var text = "This is the code to create a node <span class='ct-code-b-yellow'>dynamically</span>" 
											+ " in a new linkedlist. Hence, initially <span class='ct-code-b-yellow'>first = NULL</span>";
										typing(".introjs-tooltiptext", text, function() {
											$("#line3").effect("highlight", {color: 'yellow'}, 1500, function() {
												$('.introjs-nextbutton').show();
											});
										});
									}});
								});
							break;
							case "insertAtBeginMethod" :
								console.log("fddf");
								$("#methodId").empty();
								$("#methodId").append('<div class="opacity00" id="insertAtBeginMethodId"><pre>node inbegin(node first) {<br/>'
										+ '&emsp;<span id= "line1">node temp;</span><br/>'
										+ '&emsp;<span id= "line2">int x;</span><br/>'
										+ '&emsp;<span id= "line3" style="display:inline-block;">temp=(node)malloc(sizeof(struct list));</span><br/>'
										+ '&emsp;<span id= "line4">printf("Enter a value:");</span><br/>'
										+ '&emsp;<span id= "line5">scanf("%d", &x);</span><br/>'
										+ '&emsp;<span id= "line6">temp->info = x;</span><br/>'
										+ '&emsp;<span id= "line7">temp->next = temp->prev = NULL;</span><br/>'
										+ '&emsp;<span id= "line8">if(first == NULL) {</span><br/>'
										+ '&emsp;&emsp;<span id= "line9">first = temp;</span><br/>'
										+ '&emsp;<span id= "line10">} else {</span><br/>'
										+ '&emsp;&emsp;<span id= "line11">temp->next = first;</span><br/>'
										+ '&emsp;&emsp;<span id= "line12">first->prev = temp;</span><br/>'
										+ '&emsp;&emsp;<span id= "line13" style="display:inline-block;">first = temp;</span><br/>'
										+ '&emsp;<span id= "line14">}</span><br/>'
										+ '&emsp;<span id= "line15">return first;</span><br/>'
										+ '<span id= "line16">}</span></pre></div>');
								intro.refresh();
								$(".input-btn").remove();
								$("#formId").append('<button type="button" id="insertAtBeginInputBtn" class="btn btn-success btn-sm input-btn">' 
										+ 'insert</button>');
								$("#q").addClass("opacity00");
								$("#innerHeading").html("Insert At Begin Operation:");
								$("#EnterTextSpan").text("Enter a value: ");
								$("#ElementsDiv, #xEqual, #xBox, #totalElementsDiv").removeClass("opacity00");
								TweenMax.to($("#insertAtBeginMethodId"), 1, {opacity: 1, onComplete: function() {
									var text = "This is the code to create a node <span class='ct-code-b-yellow'>dynamically</span>" 
											+ " at the <span class='ct-code-b-yellow'>begining</span> of the linkedlist.";
									typing(".introjs-tooltiptext", text, function() {
										$('.introjs-nextbutton').show();
									});
								}});
								break;
							case "insertAtPositionMethod":
								$("#methodId").empty();
								$("#methodId").append('<div class="opacity00" id="insertAtPositionMethodId"><pre>node inpos(node first, int pos) {</br>'
										+ '&emsp;<span id= "line1">node temp, q = first, p;</span><br/>'
										+ '&emsp;<span id= "line2">int x;</span><br/>'
										+ '&emsp;<span id= "line3">for (int i = 1; i < pos; i++) {</span><br/>'
										+ '&emsp;&emsp;<span id= "line4">if (q == NULL) {</span><br/>'
										+ '&emsp;&emsp;&emsp;<span id= "line5">printf("no such position");</span><br/>'
										+ '&emsp;&emsp;&emsp;<span id= "line6">return first;</span><br/>'
										+ '&emsp;&emsp;<span id= "line7">}</span><br/>'
										+ '&emsp;&emsp;<span id= "line8">q = q->next;</span><br/>'
										+ '&emsp;<span id= "line9">}</span><br/>'
										+ '&emsp;<span id= "line10">if (pos == 1) {</span><br/>'
										+ '&emsp;&emsp;<span id= "line11">first = inbegin(first);</span><br/>'
										+ '&emsp;<span id= "line12">} else {</span><br/>'
										+ '&emsp;&emsp;<span id= "line13">p = q->next;</span><br/>'
										+ '&emsp;&emsp;<span id= "line14">temp = (node)malloc(sizeof(struct list));</span><br/>'
										+ '&emsp;&emsp;<span id= "line15">printf("Enter a value:");</span><br/>'
										+ '&emsp;&emsp;<span id= "line16">scanf("%d", &x);</span><br/>'
										+ '&emsp;&emsp;<span id= "line17">temp->info = x;</span><br/>'
										+ '&emsp;&emsp;<span id= "line18">temp->next = temp->prev = NULL;</span><br/>'
										+ '&emsp;&emsp;<span id= "line19">temp->next = p;</span><br/>'
										+ '&emsp;&emsp;<span id= "line20">p->prev = temp;</span><br/>'
										+ '&emsp;&emsp;<span id= "line21">q->next = temp;</span><br/>'
										+ '&emsp;&emsp;<span id= "line22">temp->prev = q;</span><br/>'
										+ '&emsp;<span id= "line23">}</span><br/>'
										+ '&emsp;<span id= "line24"> return first;</span><br/>'
										+ '<span id="line25">}</span></pre></div>');
								intro.refresh();
								TweenMax.to($("#insertAtPositionMethodId"), 1, {opacity: 1, onComplete: function() {
									$(".input-btn").remove();
									$("#innerHeading").text("Insert At Positon :");
									$("#EnterTextSpan").text("Enter Position :");
									$("#formId").append('<button type="button" id="insertAtpositionInputBtn" class="btn btn-success btn-sm input-btn">' 
												+ 'insert</button>');
									$("#q").append('<div id="pDiv" class="margin-top20">' 
											+ '<div class="col-xs-offset-1 col-xs-1 padding0 numbers">p =</div>'
											+ '<div class="col-xs-2 box-border value-center text-center">'
											+ '<span class="numbers" id="pValue"></span>'
											+ '</div></div>');
									$("#ElementsDiv, .numbers, #totalElementsDiv, #q, #lastDiv").removeClass("opacity00");
									$("#insertAtPositionMethodId").addClass("z-index-class");
									var text = "This is the code to create a node <span class='ct-code-b-yellow'>dynamically</span>" 
									+ " at the given <span class='ct-code-b-yellow'>position</span> of the linkedlist.";
									typing(".introjs-tooltiptext", text, function() {
										$('.introjs-nextbutton').show();
									});
								}});
								break;
							case "insertAtEndMethod":
								console.log("fdd76f");
								$("#methodId").empty();
								$("#methodId").append('<div class="opacity00" id="insertAtEndMethodId"><pre>node insertAtEnd(node first) {<br/>'
										+ '&emsp;<span id= "line1">node temp, q = first;</span><br/>'
										+ '&emsp;<span id= "line2">int x;</span><br/>'
										+ '&emsp;<span id= "line3">if (q == NULL) {</span><br/>'
										+ '&emsp;&emsp;<span id= "line4">first = inbegin(first);</span><br/>'
										+ '&emsp;<span id= "line5">} <span id= "lineNo5">else {</span></span><br/>'
										+ '&emsp;&emsp;<span id= "line6">while(q->next != NULL) {</span><br/>'
										+ '&emsp;&emsp;&emsp;<span id= "line7">q = q->next;</span><br/>'
										+ '&emsp;<span id= "line8">}</span><br/>'
										+ '&emsp;&emsp;<span id= "line9">temp = (node)malloc(sizeof(struct list));</span><br/>'
										+ '&emsp;&emsp;<span id= "line10">printf("Enter a value:");</span><br/>'
										+ '&emsp;&emsp;<span id= "line11">scanf("%d", &x);</span><br/>'
										+ '&emsp;&emsp;<span id= "line12">temp->info = x;</span><br/>'
										+ '&emsp;&emsp;<span id= "line13">temp->next = temp->prev = NULL;</span><br/>'
										+ '&emsp;&emsp;<span id= "line14">q->next = temp;</span><br/>'
										+ '&emsp;&emsp;<span id= "line15">temp->prev = q;</span><br/>'
										+ '&emsp;<span id= "line16">}</span><br/>'
										+ '&emsp;<span id= "line17">return first;</span><br/>'
										+ '<span id="line18">}</span></pre></div>');
								intro.refresh();
								TweenMax.to($("#insertAtEndMethodId"), 1, {opacity: 1, onComplete: function() {
									$(".input-btn").remove();
									$("#formId").append('<button type="button" id="insertAtEndInputBtn" class="btn btn-success btn-sm input-btn">' 
											+ 'insert</button>');
									$("#pDiv").remove();
									$(".numbers, #totalElementsDiv, #xEqual, #q, #lastDiv").removeClass("opacity00");
									$("#insertAtEndMethodId").addClass("z-index-class");
									var text = "This is the code to create a node <span class='ct-code-b-yellow'>dynamically</span>" 
											+ " at the <span class='ct-code-b-yellow'>end</span> of the linkedlist.";
									typing(".introjs-tooltiptext", text, function() {
										$('.introjs-nextbutton').show();
									});
								}});
								break;
							case "deleteAtBeginMethod":
								$("#methodId").empty();
								$("#methodId").append('<div class="opacity00" id="deleteAtBeginMethodId"><pre>node deleteAtBegin(node first) {<br/>'
									+ '&emsp;<span id="line1">node <span id="line1AssignValue">temp = first;</span></span><br/>'
									+ '&emsp;<span id="line2" style="display:inline-block;">if(temp == NULL)</span><br/>'
									+ '&emsp;&emsp;<span id="line3" style="display:inline-block;">printf("List is empty");</span><br/>'
									+ '&emsp;<span id="line4" style="display:inline-block;">else {</span><br/>' 
									+ '&emsp;&emsp;<span id="line5" style="display:inline-block;">first = <span style="display: inline-block">first->next</span>;</span><br/>'
									+ '&emsp;&emsp;<span id="line6" style="display:inline-block;">first->prev = NULL;</span><br/>'
									+ '&emsp;&emsp;<span id="line7" style="display:inline-block;">free(temp);</span><br/>' 
									+ '&emsp;<span id="line8">}</span><br/>' 
									+ '&emsp;<span id="line9">return first;</span></br>' 
									+ '<span id="line10">}</span></pre></div>');
								intro.refresh();
								TweenMax.to($("#deleteAtBeginMethodId"), 1, {opacity: 1, onComplete: function() {
									//$(".input-btn").remove();
									$(".numbers, #xEqual, #ElementsDiv").addClass("opacity00");
									//$("#formId").append('<button type="button" id="insertAtBeginInputBtn" class="btn btn-success btn-sm input-btn">' 
											//+ 'insert</button>');
									$("#temp, #tempDiv, #totalElementsDiv").removeClass("opacity00");
									$("#deleteAtBeginMethodId").addClass("z-index-class");
									var text = "This is the code to delete the begining node from the linkedlist.";
									typing(".introjs-tooltiptext", text, function() {
										$('.introjs-nextbutton').show();
									});
								}});
								break;
							case "deleteAtPositionMethod":
								$("#methodId").empty();
								$("#methodId").append('<div class="opacity00" id="deleteAtPositionMethodId">' 
										+ '<pre class="creampretab4">node deleteAtPosition(node first, int pos) {\n'
										+ '&emsp;<span id="line1">node temp, q = first;</span>\n'
										+ '&emsp;<span id="line2">if(q == NULL) {</span>\n'
										+ '&emsp;&emsp;<span id="line3">printf("List is empty");</span>\n'
										+ '&emsp;<span id="line4">}</span>\n'
										+ '&emsp;<span id="line5">else if(pos == 1) {</span>\n'
										+ '&emsp;&emsp;<span id="line6">first = delbegin(q);</span>\n'
										+ '&emsp;<span id="line7">} else {</span>\n'
										+ '&emsp;&emsp;<span id="line8">for(int i = 1; i < pos; i++) {</span>\n'
										+ '&emsp;&emsp;&emsp;<span id="line9">if(q == NULL) {</span>\n'
										+ '&emsp;&emsp;&emsp;&emsp;<span id="line10">printf("no such position");</span>\n'
										+ '&emsp;&emsp;&emsp;&emsp;<span id="line11">return first;</span>\n'
										+ '&emsp;&emsp;&emsp;<span id="line12">}</span>\n'
										+ '&emsp;&emsp;&emsp;<span id="line13">q = q->next;</span>\n'
										+ '&emsp;&emsp;<span id="line14">}</span>\n'
										+ '&emsp;&emsp;<span id="line15">temp = q->next;</span>\n'
										+ '&emsp;&emsp;<span id="line16">if (temp->next == NULL) {</span>\n' 
										+ '&emsp;&emsp;&emsp;<span id="line17">q->next = NULL;</span>\n'
										+ '&emsp;&emsp;<span id="line18">} else {</span>\n'
										+ '&emsp;&emsp;&emsp;<span id="line19">q->next = temp->next;</span>\n'
										+ '&emsp;&emsp;&emsp;<span id="line20">p->next->prev = q;</span>\n'
										+ '&emsp;&emsp;<span id="line21">}</span>\n'
										+ '&emsp;<span id="line22">free(temp);</span>\n'
										+ '&emsp;<span id="line23">}</span>\n'
										+ '&emsp;<span id="line24">return first;</span>\n'
										+ '}</pre></div>');
								intro.refresh();
								TweenMax.to($("#deleteAtPositionMethodId"), 1, {opacity: 1, onComplete: function() {
									$("#innerHeading").text("Delete at position :")
									$("#EnterTextSpan").text("Enter position: ");
									$("#xEqual, #xBox").addClass("opacity00");
									$(".input-btn").remove();
									$("#formId").append('<button type="button" id="deletePositionInputBtn" class="btn btn-success btn-sm input-btn">' 
												+ 'delete</button>');
									$("#totalElementsDiv, #ElementsDiv").removeClass("opacity00");
									$("#deleteAtPositionMethodId").addClass("z-index-class");
									$('.introjs-nextbutton').show();
								}});
								break;
							case "deleteAtEndMethod":
								$("#methodId").empty();
								$("#methodId").append('<div class="opacity00" id="deleteAtEndMethodId"><pre>node deleteAtEnd(node first) {<br/>' 
										+ '&emsp;<span id="line1">node temp, q = first;</span><br/>' 
										+ '&emsp;<span id="line2">if (q == NULL) {</span><br/>' 
										+ '&emsp;&emsp;<span id="line3">return NULL;</span><br/>'
										+ '&emsp;<span id="line4">} else if (q->next == NULL) {</span><br/>'
										+ '&emsp;&emsp;<span id="line5">first = delbegin(q);</span><br/>' 
										+ '&emsp;<span id="line6">} else {</span><br/>'
										+ '&emsp;&emsp;<span id="line7">while (q->next != NULL) {</span><br/>' 
										+ '&emsp;&emsp;&emsp;<span id="line8">q = <span style="display: inline-block">q->next</span>;</span><br/>' 
										+ '&emsp;&emsp;&emsp;<span id="line9">temp = q->prev;</span><br/>' 
										+ '&emsp;&emsp;<span id="line10">}</span><br/>' 
										+ '&emsp;&emsp;<span id="line11">temp->next = NULL;</span><br/>' 
										+ '&emsp;&emsp;<span id="line12">free(q);</span><br/>' 
										+ '&emsp;&emsp;<span id="line13">}</span><br/>' 
										+ '&emsp;<span id="line14">return first;</span><br/>' 
										+ '<span id="line15">}</span> </pre></div>');
									intro.refresh();
									TweenMax.to($("#deleteAtEndMethodId"), 1, {opacity: 1, onComplete: function() {
										$("#deleteAtEndMethodId").addClass("z-index-class");
										$("#ElementsDiv, #xEqual, #xBox").addClass("opacity00");
										$("#totalElementsDiv, #q, #lastDiv").removeClass("opacity00");
										$('.introjs-nextbutton').show();
									}});
								break;
							case "displayMethod":
								$("#methodId").empty();
								$("#methodId").append('<div class="opacity00" id="displayMethodId"><pre>void display(node first) {<br/>'
									 + '&emsp;<span id="line1">node q = first;</span><br/>'
									 + '&emsp;<span id="line2">if (first == NULL) {</span><br/>'
									 + '&emsp;&emsp;<span id="line3">printf("empty");</span><br/>'
									 + '&emsp;<span id="line4">} else {</span><br/>'
									 + '&emsp;&emsp;<span id="line5">printf("The elements in list are:");</span><br/>'
									 + '&emsp;&emsp;<span id="line6">while(q != NULL) {</span><br/>'
									 + '&emsp;&emsp;&emsp;<span id="line7">printf("%d-->",q->info);</span><br/>'
									 + '&emsp;&emsp;&emsp;<span id="line8">q = q->next;</span><br/>'
									 + '&emsp;&emsp;<span id="line9">}</span><br/>'
									 + '&emsp;&emsp;<span id="line10">printf("NULL");</span><br/>'
									 + '&emsp;<span id="line11">}</span><br/>'
									 + '<span id="line12">}</span></pre></div>');
								 intro.refresh();
								$(".input-btn").remove();
								$("#totalElementsDiv, #q, #lastDiv").removeClass("opacity00");
								TweenMax.to($("#displayMethodId"), 1, {opacity: 1, onComplete: function() {
									$("#displayMethodId").addClass("z-index-class");
									$('.introjs-nextbutton').show();
								}});
							break;
						}
					//});
					break;
				case "animationDiv":
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer").one('transitionend', function() {
						var ramdomAddress = getRandomInt(1000, 5000);
						var animateStep = intro._introItems[intro._currentStep].animateStep;
						switch(animateStep) {
							case "createAnimation":
								var ramdomAddress = getRandomInt(1000, 5000);
								$("#whileLoop").addClass("z-index-class");
								$("#animationDiv").removeClass("opacity00");
								$("#dynamicNodesDiv").append('<div class="col-xs-2 node opacity00" id="node' + count +'" style="top: 0px; width: auto;">'
										+ '<div class="col-xs-12" style="padding: 0px;">'
										+ '<div class="col-xs-4 no-border left-radius">prev</div>'
										+ '<div class="col-xs-4 no-border left-radius">info</div>'
										+ '<div class="col-xs-4 no-border right-radius">next</div>'
										+ '</div>'
										+ '<div>'
										+ '<div class="div-border left-radius col-xs-4 prev-div" id="prevDiv' + count +'">' 
										+ '<span class="prev-span visibility-hidden" id="prev' + count +'" style="top: 0px; left: 0px;">0</span></div>'
						        		+ '<div class="div-border col-xs-4 info-div" id="infoDiv' + count +'" style="border-left:none;">' 
										+ '<span class="info-span visibility-hidden" id="info' + count +'" style="top: 0px; left: 0px;">0</span></div>'
										+ '<div class="div-border right-radius col-xs-4 next-div" id="nextDiv' + count +'">' 
										+ '<span class="next-span visibility-hidden" id="next' + count +'">0</span></div>'
										+ '</div>'
										+ '<div class="col-xs-12" style="padding: 0px;">'
										+ '<div class="col-xs-4 no-border left-radius">' 
										+ '<span class="prev-address" id="prevAddress' + count +'" style=""> ' + ramdomAddress + '</span></div>'
										+ '<div class="col-xs-4 no-border right-radius"> ' + (ramdomAddress + 2) + '</div>'
										+ '<div class="col-xs-4 no-border right-radius"> ' + (ramdomAddress + 4) + '</div>'
										+ '</div></div>');
								intro.refresh();
								$("#line5").effect("highlight",{color: 'yellow'}, 1500, function() {
									var text = "<span class='yellow-color' id='createWhileLoop'></span><br>" 
											+ "<span id='createWhileLoopContent'></span><span id ='textSpan'></span>";
									typing(".introjs-tooltiptext", text, function() {
										var l1= $("#line5").offset();
										$("#createWhileLoop").html($("#line5").html()).removeClass("opacity00").offset({
											"top":l1.top,
											"left":l1.left
										});
										$("#createWhileLoop").addClass("z-index-transfer yellow-color");
										TweenMax.to("#createWhileLoop",1,{top:0,left:0, onComplete:function() {
											$("#createWhileLoop").removeClass("z-index-transfer");
											flipEffect("#createWhileLoop > #flipX", $("#xBox").text() , function() {
												$("#line6").effect("highlight",{color: 'yellow'}, 1500, function() {
													var l1= $("#line6").offset();
													$("#createWhileLoopContent").html($("#line6").html()).removeClass("opacity00").offset({
														"top":l1.top,
														"left":l1.left
													});
													$("#createWhileLoopContent").addClass("z-index-transfer yellow-color");
													TweenMax.to("#createWhileLoopContent",1,{top:0,left:0, onComplete:function() {
														$("#createWhileLoopContent").removeClass("z-index-transfer");
														typing("#textSpan", "<br>This statement will allocate memory for the new node.", function() {
															//$("#textSpan").append("<br>This statement will allocate memory for the new node.");
															$("#node" + count).removeClass("opacity00");
															TweenMax.from($("#node" + count), 1, {top: -100, onComplete:function() {
																$("#prevAddress" + count).effect("highlight",{color: 'yellow'}, 1500, function() {
																	var l1= $("#prevAddress" + count).offset();
																	$("#tempDiv").text($("#prevAddress" + count).text()).removeClass("opacity00").offset({
																		"top":l1.top,
																		"left":l1.left
																	});
																	$("#tempDiv").addClass("z-index-transfer yellow-color");
																	TweenMax.to("#tempDiv",1,{top:0,left:0, onComplete:function() {
																		$("#tempDiv").removeClass("z-index-transfer yellow-color");
																		$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'createMethodSecondStep()'>Next &#8594;</a>");
																	}});
																});
															}});
														});
													}});
												});
											});
										}});
									});
								});
								break;
							case "insertAtBeginAnimation":
								$('.introjs-nextbutton').hide();
								var ramdomAddress = getRandomInt(1000, 5000);
								$("#insertAtBeginMethodId").addClass("z-index-class");
								var text = '<span id="createNode"></span></br><span id="createText"></span>';
								typing(".introjs-tooltiptext", text, function() {
									var l1= $("#line3").offset();
									$("#createNode").html($("#line3").html()).removeClass("opacity00").offset({
										"top":l1.top,
										"left":l1.left
									});
									$("#createNode").addClass("z-index-transfer yellow-color");
									TweenMax.to("#createNode",1,{top:0,left:0, onComplete:function() {
										$("#createNode").removeClass("z-index-transfer");
										var text1 = "This statement is used to create a new node dynamically.";
										typing("#createText", text1, function() {
											if (count != 0) {
												/* $("#startLine0").fadeOut(1000, function() {
													$("#rightLines0, #leftLines0").fadeOut(1000, function() {
														
													});
												}); */
												//$("#startLine" + (arrowCount - 1)).remove();
												//$("#startLine0, #rightLines0, #leftLines0").remove();
												console.log("count when !=0 ---- " + count);
												$('#dynamicNodesDiv > div').each(function(index) {
													arr[index] = $(this).offset();
												});
												
												//$("#rightLines0").remove();
												$("#node0").before('<div class="col-xs-2 node opacity00" id="node' + count +'" style="top: 0px; width: auto;">'
														+ '<div class="col-xs-12" style="padding: 0px;">'
														+ '<div class="col-xs-4 no-border left-radius">prev</div>'
														+ '<div class="col-xs-4 no-border left-radius">info</div>'
														+ '<div class="col-xs-4 no-border right-radius">next</div>'
														+ '</div>'
														+ '<div>'
														+ '<div class="div-border left-radius col-xs-4 prev-div" id="prevDiv' + count +'">'
														+ '<span class="prev-span visibility-hidden" id="prev' + count +'" style="top: 0px; left: 0px;">' 
															+ '0</span></div>'
										                + '<div class="div-border col-xs-4 info-div" id="infoDiv' + count +'" style="border-left:none;">' 
														+ '<span class="info-span visibility-hidden" id="info' + count +'" style="top: 0px; left: 0px;">' 
															+ '0</span></div>'
														+ '<div class="div-border right-radius col-xs-4 next-div" id="nextDiv' + count +'">' 
														+ '<span class="next-span visibility-hidden" id="next' + count +'">0</span></div>'
														+ '</div>'
														+ '<div class="col-xs-12" style="padding: 0px;">'
														+ '<div class="col-xs-4 no-border left-radius">' 
															+ '<span class="prev-address" id="prevAddress' + count +'" style=""> ' + ramdomAddress + '</span>' 
															+ '</div>'
														+ '<div class="col-xs-4 no-border right-radius"> ' + (ramdomAddress + 2) + '</div>'
														+ '<div class="col-xs-4 no-border right-radius"> ' + (ramdomAddress + 4) + '</div>'
														+ '</div></div>');
												
												
												$("#rightLines1, #leftLines1, #startLine0").remove();
												//$("line").last().remove();
												if (count != 1) {
													rightToLeftArrow($("#animationDiv"), $("#nextDiv" + (count - 2)),$("#prevDiv" + (count - 1)), "#svgId", "rightLines" + arrowCount, "arrow");
													leftToRightArrow($("#animationDiv"), $("#prevDiv" + (count - 1)), $("#nextDiv" + (count - 2)), "#svgId", "leftLines" + arrowCount, "arrow");
												}
												changeIds();
												movingBoxes(1);
											} else if (count == 0) {
												console.log("count when ==0 ---- " + count);
												$("#animationDiv").removeClass("opacity00");
												$("#dynamicNodesDiv").append('<div class="col-xs-2 node opacity00" id="node' + count +'" style="top: 0px; width: auto;">'
														+ '<div class="col-xs-12" style="padding: 0px;">'
														+ '<div class="col-xs-4 no-border left-radius">prev</div>'
														+ '<div class="col-xs-4 no-border left-radius">info</div>'
														+ '<div class="col-xs-4 no-border right-radius">next</div>'
														+ '</div>'
														+ '<div>'
														+ '<div class="div-border left-radius col-xs-4 prev-div" id="prevDiv' + count +'">' 
														+ '<span class="prev-span visibility-hidden" id="prev' + count +'" style="top: 0px; left: 0px;">' 
															+ '0</span></div>'
										                + '<div class="div-border col-xs-4 info-div" id="infoDiv' + count +'" style="border-left:none;">' 
														+ '<span class="info-span visibility-hidden" id="info' + count +'" style="top: 0px; left: 0px;">' 
															+ '0</span></div>'
														+ '<div class="div-border right-radius col-xs-4 next-div" id="nextDiv' + count +'">' 
														+ '<span class="next-span visibility-hidden" id="next' + count +'">0</span></div>'
														+ '</div>'
														+ '<div class="col-xs-12" style="padding: 0px;">'
														+ '<div class="col-xs-4 no-border left-radius">' 
															+ '<span class="prev-address" id="prevAddress' + count +'" style=""> ' + ramdomAddress + '</span>' 
															+ '</div>'
														+ '<div class="col-xs-4 no-border right-radius"> ' + (ramdomAddress + 2) + '</div>'
														+ '<div class="col-xs-4 no-border right-radius"> ' + (ramdomAddress + 4) + '</div>'
														+ '</div></div>');
											}
											$("#line3").effect("highlight",{color: 'yellow'}, 1500, function() {
												$("#node0").removeClass("opacity00");
												TweenMax.from($("#node0"), 1, {top: -100, onComplete:function() {
													$("#prevAddress0").effect("highlight",{color: 'yellow'}, 1500, function() {
														var l1= $("#prevAddress0").offset();
														$("#tempDiv").text($("#prevAddress0").text()).removeClass("opacity00").offset({
															"top":l1.top,
															"left":l1.left
														});
														$("#tempDiv").addClass("z-index-transfer yellow-color");
														TweenMax.to("#tempDiv",1,{top:0,left:0, onComplete:function() {
															$("#tempDiv").removeClass("z-index-transfer yellow-color");
															$("#line4").effect("highlight",{color: 'yellow'}, 1500, function() {
																/* movingBoxes(0); */
																$('.introjs-nextbutton').show();
															});
														}});
													});
												}});
											});
										});
									}});
								});
							break;
							case "insertAtBeginAfterTakingValueAnimation":
								$(".nextButton").remove();
								var text = "<span id='xValue'></span></br><span id='xValueText'></span>";
								$("#line6").effect("highlight",{color: 'yellow'}, 1500, function() {
									typing(".introjs-tooltiptext", text, function() {
										var l1= $("#line6").offset();
										$("#xValue").html($("#line6").html()).removeClass("opacity00").offset({
											"top":l1.top,
											"left":l1.left
										});
										$("#xValue").addClass("z-index-transfer yellow-color");
										TweenMax.to("#xValue",1,{top:0,left:0, onComplete:function() {
											$("#xValue").removeClass("z-index-transfer");
											var text1 = "This statement is used to create a new node dynamically.";
											typing("#xValueText", text1, function() {
											
									
												var l1= $("#xBox").offset();
												$("#info0").text($("#xBox").text()).removeClass("visibility-hidden").offset({
													"top":l1.top,
													"left":l1.left
												});
												$("#info0").addClass("z-index-transfer yellow-color");
												TweenMax.to("#info0",1,{top:0,left:0, onComplete:function() {
													$("#info0").removeClass("z-index-transfer yellow-color");
													$("#line7").effect("highlight",{color: 'yellow'}, 1500, function() {
														var l1= $("#line7").offset();
														$("#xValue").html($("#line7").html()).removeClass("opacity00").offset({
															"top":l1.top,
															"left":l1.left
														});
														$("#xValue").addClass("z-index-transfer yellow-color");
														TweenMax.to("#xValue",1,{top:0,left:0, onComplete:function() {
															$("#xValue").removeClass("z-index-transfer");
															var text1 = "This statement is used to store x value in the node.";
															typing("#xValueText", text1, function() {
															
																$("#prev0").effect("highlight",{color: 'yellow'}, 1500, function() {
																	$("#next0").effect("highlight",{color: 'yellow'}, 1500, function() {
																		$("#prev0, #next0").text("NULL").removeClass("visibility-hidden");
																		//var text = "r555555556";
																		//typing(".introjs-tooltiptext", text, function() {
																			$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'insertBeginFirstStep();'>Next &#8594;</a>");
																		//});
																	});
																});
															});
														}});
													});
												}});
											});
										}});
									});
								});
								break;
							case "insertAtPositionAnimation":
								$(".nextButton").remove();
								$("#EnterTextSpan").text("Enter Element :");
								$("#line1").effect("highlight",{color: 'yellow'}, 1500, function() {
									var l1 = $("#firstDiv").offset();
									$("#lastDiv").text($("#firstDiv").text()).removeClass("visibility-hidden").offset({
										"top":l1.top,
										"left":l1.left
									});
									$("#lastDiv").addClass("z-index-transfer yellow-color");
									TweenMax.to("#lastDiv",1,{top:0,left:0, onComplete:function() {
										$("#lastDiv").removeClass("z-index-transfer yellow-color");
										var text = "r555djfh dgdhg555556";
										typing(".introjs-tooltiptext", text, function() {
											$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'insertAtPositionLoopAnimation(0);'>Next &#8594;</a>");
										});
									}});
								});
								break;
							case "insertAtPositionRemainingAnimation":
								$(".nextButton").remove();
								$("#line17").effect("highlight",{color: 'yellow'}, 1500, function() {
									var l1 = $("#xBox").offset();
									$("#info" + (position - 1)).text($("#xBox").text()).removeClass("visibility-hidden").offset({
										"top":l1.top,
										"left":l1.left
									});
									$("#info" + (position - 1)).addClass("z-index-transfer yellow-color");
									TweenMax.to("#info" + (position - 1),1,{top:0,left:0, onComplete:function() {
										$("#info" + (position - 1)).removeClass("z-index-transfer yellow-color");
										$("#line18").effect("highlight",{color: 'yellow'}, 1500, function() {
											$("#prev" + (position - 1)).text("NULL").removeClass("visibility-hidden");
											$("#next" + (position - 1)).text("NULL").removeClass("visibility-hidden");
											$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'insertPositionRemainingFirstStep();'>Next &#8594;</a>");
										});
									}});
								});
								break;
							case "insertAtEndAnimation":
								$(".nextButton").remove();
								$("#line1").effect("highlight",{color: 'yellow'}, 1500, function() {
									var l1 = $("#firstDiv").offset();
									$("#lastDiv").text($("#firstDiv").text()).removeClass("visibility-hidden").offset({
										"top":l1.top,
										"left":l1.left
									});
									$("#lastDiv").addClass("z-index-transfer yellow-color");
									TweenMax.to("#lastDiv", 1, {top:0,left:0, onComplete:function() {
										$("#lastDiv").removeClass("z-index-transfer yellow-color");
										$("#line3").effect("highlight",{color: 'yellow'}, 1500, function() {
											var text = "<span id='ifCond'></span></br><span id='ifCondText'></span>";
											typing(".introjs-tooltiptext", text, function() {
												var l1= $("#line3").offset();
												$("#ifCond").html($("#line3").html()).removeClass("opacity00").offset({
													"top":l1.top,
													"left":l1.left
												});
												$("#ifCond").addClass("z-index-transfer yellow-color");
												TweenMax.to("#ifCond",1,{top:0,left:0, onComplete:function() {
													$("#ifCond").removeClass("z-index-transfer");
													if ($("#lastDiv").text() == "NULL") {
														$("#line4").effect("highlight",{color: 'yellow'}, 1500, function() {
															typing(".introjs-tooltiptext", text, function() {
																var l1 = $("#line4").offset();
																$("#ifCond").html($("#line4").html()).removeClass("opacity00").offset({
																	"top":l1.top,
																	"left":l1.left
																});
																$("#ifCond").addClass("z-index-transfer yellow-color");
																TweenMax.to("#ifCond",1,{top:0,left:0, onComplete:function() {
																	$("#ifCond").removeClass("z-index-transfer");
																	insertAtBeginMethodDynamicSteps();
																}});
															});
														});
													} else {
														$("#line5").effect("highlight",{color: 'yellow'}, 1500, function() {
															var text = "<span id='ifCond'></span></br><span id='ifCondText'></span>";
															typing(".introjs-tooltiptext", text, function() {
																var l1 = $("#lineNo5").offset();
																$("#ifCond").html($("#lineNo5").html()).removeClass("opacity00").offset({
																	"top":l1.top,
																	"left":l1.left
																});
																$("#ifCond").addClass("z-index-transfer yellow-color");
																TweenMax.to("#ifCond",1,{top:0,left:0, onComplete:function() {
																	$("#ifCond").removeClass("z-index-transfer");
																	insertAtEndLoopAnimation(0);
																}});
															});
														});
													}
												}});
											});
										});
									}});
								});
								//$('.introjs-nextbutton').show();
								break;
							case "insertAtEndRemainingAnimation":
								$(".nextButton").remove();
								var text = "<span id='xValue'></span><br/><span id='xValueText'></span>";
								$("#line12").effect("highlight",{color: 'yellow'}, 1500, function() {
									typing(".introjs-tooltiptext", text, function() {
										var l1 = $("#line12").offset();
										$("#xValue").html($("#line12").html()).removeClass("opacity00").offset({
											"top":l1.top,
											"left":l1.left
										});
										$("#xValue").addClass("z-index-transfer yellow-color");
										TweenMax.to("#xValue",1,{top:0,left:0, onComplete:function() {
											$("#xValue").removeClass("z-index-transfer");
											var text1 = "This statement will store x value in info of temp.";
											typing("#xValueText", text1, function() {
												console.log("count ++++++++++++++++++" + count);
												var l1= $("#xBox").offset();
												$("#info" + count).text($("#xBox").text()).removeClass("visibility-hidden").offset({
													"top":l1.top,
													"left":l1.left
												});
												$("#info" + count).addClass("z-index-transfer yellow-color");
												TweenMax.to("#info" + count,1,{top:0,left:0, onComplete:function() {
													$("#info" + count).removeClass("z-index-transfer yellow-color");
													$("#line13").effect("highlight",{color: 'yellow'}, 1500, function() {
														typing(".introjs-tooltiptext", text, function() {
															var l1 = $("#line13").offset();
															$("#xValue").html($("#line13").html()).removeClass("opacity00").offset({
																"top":l1.top,
																"left":l1.left
															});
															$("#xValue").addClass("z-index-transfer yellow-color");
															TweenMax.to("#xValue",1,{top:0,left:0, onComplete:function() {
																$("#xValue").removeClass("z-index-transfer");
																var text1 = "This statement will store x value in info of temp.";
																typing("#xValueText", text1, function() {
																	$("#prev" + count).text("NULL");
																	$("#prev" + count).removeClass("visibility-hidden");
																	$("#next" + count).text("NULL");
																	$("#next" + count).removeClass("visibility-hidden");
																	$("#line14").effect("highlight",{color: 'yellow'}, 1500, function() {
																	//typing(".introjs-tooltiptext", text, function() {
																		var l1 = $("#line14").offset();
																		$("#xValue").html($("#line14").html()).removeClass("opacity00").offset({
																			"top":l1.top,
																			"left":l1.left
																		});
																		$("#xValue").addClass("z-index-transfer yellow-color");
																		TweenMax.to("#xValue",1,{top:0,left:0, onComplete:function() {
																			$("#xValue").removeClass("z-index-transfer");
																			var text1 = "This statement will store x value in info of temp.";
																			typing("#xValueText", text1, function() {
																					var l1= $("#tempDiv").offset();
																					$("#next" + (count - 1)).text($("#tempDiv").text()).removeClass("visibility-hidden").offset({
																						"top":l1.top,
																						"left":l1.left
																					});
																					$("#next"  + (count - 1)).addClass("z-index-transfer yellow-color");
																					TweenMax.to("#next" + (count - 1),1,{top:0,left:0, onComplete:function() {
																						$("#next"  + (count - 1)).removeClass("z-index-transfer yellow-color");
																						rightToLeftArrow("#animationDiv", "#nextDiv" + (count-1), "#prevDiv" + count, "#svgId", "rightLines" + arrowCount, "arrow", function() {
																							$("#line15").effect("highlight",{color: 'yellow'}, 1500, function() {
																								typing(".introjs-tooltiptext", text, function() {
																									var l1 = $("#line15").offset();
																									$("#xValue").html($("#line15").html()).removeClass("opacity00").offset({
																										"top":l1.top,
																										"left":l1.left
																									});
																									$("#xValue").addClass("z-index-transfer yellow-color");
																									TweenMax.to("#xValue",1,{top:0,left:0, onComplete:function() {
																										$("#xValue").removeClass("z-index-transfer");
																										var text1 = "This statement will store x value in info of temp.";
																										typing("#xValueText", text1, function() {
																											var l1= $("#lastDiv").offset();
																											$("#prev" + count).text($("#lastDiv").text()).removeClass("visibility-hidden").offset({
																												"top":l1.top,
																												"left":l1.left
																											});
																											$("#prev"  + count).addClass("z-index-transfer yellow-color");
																											TweenMax.to("#prev" + count,1,{top:0,left:0, onComplete:function() {
																												$("#prev"  + count).removeClass("z-index-transfer yellow-color");
																												leftToRightArrow($("#animationDiv"),  $("#prevDiv" + count), $("#nextDiv" + (count - 1)) , "#svgId", "leftLines" + arrowCount, "arrow", function() {
																													regenerateArrows();
																													arrowCount++;
																													count++;
																													$('.introjs-nextbutton').show();
																												});
																											}});
																										});
																									}});
																								});
																							});
																						});
																					}});
																				//});
																			});
																		}});
																	});
																});
															}});
														});
													});
												}});
											});
										}});
									});
								});
								break;
							case "deleteAtBeginAnimation":
								var text = "<span id='ifElseSpan'></span></br><span id='ifElseSpanText'></span>";
								$("#line1").effect("highlight", {color: 'yellow'}, 1500, function() {
									var l1 = $("#firstDiv").offset();
									$("#tempDiv").text($("#firstDiv").text()).removeClass("visibility-hidden").offset({
										"top":l1.top,
										"left":l1.left
									});
									$("#tempDiv").addClass("z-index-transfer yellow-color");
									TweenMax.to("#tempDiv", 1, {top:0,left:0, onComplete:function() {
										$("#tempDiv").removeClass("z-index-transfer yellow-color");
										typing(".introjs-tooltiptext", text, function() {
											$("#line2").effect("highlight",{color: 'yellow'}, 1500, function() {
												console.log("line2");
												var l1 = $("#line2").offset();
												$("#ifElseSpan").html($("#line2").html()).removeClass("opacity00").offset({
													"top":l1.top,
													"left":l1.left
												});
												$("#ifElseSpan").addClass("z-index-transfer yellow-color");
												console.log("line2 -----------");
												TweenMax.to("#ifElseSpan",1,{top:0,left:0, onComplete:function() {
													$("#ifElseSpan").removeClass("z-index-transfer");
													var text1 = "This statement is used to store the value in x."
													typing("#ifElseSpanText", text1, function(){
														
													});
													if ($("#tempDiv").val() == "NULL") {
														$("#line3").effect("highlight",{color: 'yellow'}, 1500, function() {
															var text1 = "List is empty.</br>So, please create some new nodes.";
															typing("#ifElseSpanText", text1, function() {
																
															});
														});
													} else {
														$("#line4").effect("highlight",{color: 'yellow'}, 1500, function() {
															var l1 = $("#line4").offset();
															$("#ifElseSpan").html($("#line4").html()).removeClass("opacity00").offset({
																"top":l1.top,
																"left":l1.left
															});
															$("#ifElseSpan").addClass("z-index-transfer yellow-color");
															TweenMax.to("#ifElseSpan",1,{top:0,left:0, onComplete:function() {
																$("#ifElseSpan").removeClass("z-index-transfer");
																$("#line5").effect("highlight",{color: 'yellow'}, 1500, function() {
																	var l1 = $("#line5").offset();
																	$("#ifElseSpan").html($("#line5").html()).removeClass("opacity00").offset({
																		"top":l1.top,
																		"left":l1.left
																	});
																	$("#ifElseSpan").addClass("z-index-transfer yellow-color");
																	TweenMax.to("#ifElseSpan",1,{top:0,left:0, onComplete:function() {
																		$("#ifElseSpan").removeClass("z-index-transfer");
																		var l1= $("#prevAddress1").offset();
																		$("#firstDiv").text($("#prevAddress1").text()).offset({
																			"top":l1.top,
																			"left":l1.left
																		});
																		TweenMax.to("#firstDiv",1,{top:0,left:0, onComplete:function() {
																			$("#line6").effect("highlight",{color: 'yellow'}, 1500, function() {
																				var l1 = $("#line6").offset();
																				$("#ifElseSpan").html($("#line6").html()).removeClass("opacity00").offset({
																					"top":l1.top,
																					"left":l1.left
																				});
																				$("#ifElseSpan").addClass("z-index-transfer yellow-color");
																				TweenMax.to("#ifElseSpan",1,{top:0,left:0, onComplete:function() {
																					$("#ifElseSpan").removeClass("z-index-transfer");
																					$("#prev1").effect("highlight",{color: 'yellow'}, 1500, function() {
																						$("#prev1").text("NULL");
																						$("#line7").effect("highlight",{color: 'yellow'}, 1500, function() {
																							var l1 = $("#line7").offset();
																							$("#ifElseSpan").html($("#line7").html()).removeClass("opacity00").offset({
																								"top":l1.top,
																								"left":l1.left
																							});
																							$("#ifElseSpan").addClass("z-index-transfer yellow-color");
																							TweenMax.to("#ifElseSpan",1,{top:0,left:0, onComplete:function() {
																								$("#ifElseSpan").removeClass("z-index-transfer");
																								$("#dynamicNodesDiv > div:first-child").effect("highlight",{color: 'red'}, 1500, function() {
																									TweenMax.to("#dynamicNodesDiv > div:first-child", 1, {top: -100,opacity : 0, onComplete:function() {
																										$("#svgId > line:last-child").fadeOut(1000);
																										$("#svgId > line:last-child").fadeOut(1000, function() {
																											var marginRight = $("#dynamicNodesDiv > div:first-child").outerWidth();
																											TweenMax.to($("#dynamicNodesDiv > div:nth-child(1)"), 1, {marginRight: '-=' + marginRight,onComplete: function() {
																												$("#svgId > line:last-child").remove();
																												$("#svgId > line:last-child").remove();
																												$("#dynamicNodesDiv > div:first-child").remove();
																												$("#line9").effect("highlight",{color: 'yellow'}, 1500, function() {
																													var text = "This statement will return first value.";
																													typing("#ifElseSpanText",text, function() {
																														changeIds();
																														regenerateArrows();
																														count--;
																														$('.introjs-nextbutton').show();
																													});
																												});
																											}});
																										});
																									}});
																								});
																							}});
																						});
																					});
																				}});
																			});
																		}});
																	}});
																});
															}});
														});
													}
												}});
											});
										});
									}});
								});
								break;
							case "deleteAtPositionAnimation":
								$("#line1").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
									$("#q, #lastDiv, #temp, #tempDiv").removeClass("opacity00");
									var l1= $("#firstDiv").offset();
									$("#lastDiv").text($("#firstDiv").text()).offset({
										"top":l1.top,
										"left":l1.left
									});
									$("#lastDiv").addClass("z-index-transfer yellow-color");
									TweenMax.to("#lastDiv", 1,{top:0,left:0, onComplete:function() {
										$("#lastDiv").removeClass("z-index-transfer yellow-color");
										$("#line2").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
											if ($("#lastDiv").text() == "NULL") {
												$("#line3").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
													//print error
												});
											} else if (position == 1) {
												$("#line5").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
													$("#line6").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
														deleteAtBeginMethodDynamicSteps();
													});
												});
											} else {
												position = $("#inputIdField").val() - 1;
												$("#line7").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
													deletePositionLoopAnimation(0);
												});
											}
										});
									}});
								});
								break;
							case "deleteAtEndAnimation":
								$("#line1").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
									var l1= $("#firstDiv").offset();
									$("#lastDiv").text($("#firstDiv").text()).offset({
										"top":l1.top,
										"left":l1.left
									});
									$("#lastDiv").addClass("z-index-transfer yellow-color");
									TweenMax.to("#lastDiv", 1,{top:0,left:0, onComplete:function() {
										$("#lastDiv").removeClass("z-index-transfer yellow-color");
										$("#line2").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
											//twen
											
											
											if ($("#lastDiv").text() == "NULL") {
												$("#line3").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
													$('.introjs-nextbutton').show();
												});
											} else if (count == 1) {
												$("#line4").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
													$("#line5").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
														deleteAtBeginMethodDynamicSteps();
													});
												});
											} else {
												$("#line6").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
													deleteAtEndRemainingAnimation(0);
												});
											}
										});
									}});
								});
								break;
							case "displayAnimation":
								$("#line1").effect( "highlight",{color: 'yellow'}, 2000, function() {
									var l1= $("#firstDiv").offset();
									$("#lastDiv").text($("#firstDiv").text()).offset({
										"top":l1.top,
										"left":l1.left
									});
									$("#lastDiv").addClass("z-index-transfer yellow-color");
									TweenMax.to("#lastDiv", 1,{top:0,left:0, onComplete:function() {
										$("#lastDiv").removeClass("z-index-transfer yellow-color");
										$("#line2").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
											if ($("#lastDiv").text() == "NULL") {
												$("#line3").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
													$('.introjs-nextbutton').show();
												});
											} else {
												$("#line4").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
													$('.introjs-nextbutton').show();
												});
											}
										});
									}});
								});
							break;
						}
					});
					break;
				case "inputId":
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer ").one('transitionend', function() {
						$("#inputIdField").effect( "highlight",{color: 'yellow'}, 1500);
						$("#inputIdField").focus();
						numbers();
						var animateStep = intro._introItems[intro._currentStep].animateStep;
						console.log(animateStep);
						switch(animateStep) {
							case "createValue":
								$("#createInputBtn").off("click");
								$("#createInputBtn").on("click", function() {
									$("#xBox").text($("#inputIdField").val());
									repeatDynamicStepsForCreate($("#inputIdField").val());
									intro.nextStep();
								});
								break;
							case "insertAtBeginValue":
								$("#insertAtBeginInputBtn").off("click");
								$("#insertAtBeginInputBtn").on("click", function() {
									$("#xBox").text($("#inputIdField").val());
									intro.nextStep();
								});
								break;
							case "insertAtEndValue":
								$("#insertAtEndInputBtn").off("click");
								$("#insertAtEndInputBtn").on("click", function() {
									$("#xBox").text($("#inputIdField").val());
									intro.nextStep();
								});
								break;
							case "insertAtPosition":
								$("#insertAtpositionInputBtn").off("click");
								$("#insertAtpositionInputBtn").on("click", function() {
									//$("#xBox").text($("#inputIdField").val());
									position = $("#inputIdField").val();
									intro.nextStep();
								});
								break;
							case "insertAtPositionValue":
								$("#insertAtpositionInputBtn").off("click");
								$("#insertAtpositionInputBtn").on("click", function() {
									$("#xBox").text($("#inputIdField").val());
									positionValue = $("#inputIdField").val();
									intro.nextStep();
								});
								break;
							case "deleteAtPosition":
								$("#deletePositionInputBtn").off("click");
								$("#deletePositionInputBtn").on("click", function() {
									position = $("#inputIdField").val();
									intro.nextStep();
								});
								break;
						}
						$("#ElementsDiv").show();
						$("#inputIdField").val("");
						if ($("#createBtn").hasClass("createClass")) {
							var text = "Enter any number to insert, if you want to exit from loop then enter -1.";
						} else {
							var text = "Enter number.";
						}
						typing(".introjs-tooltiptext", text, function() {
							$("#createBtn").removeClass("createClass");
						});
					});
					break;
					case "outputDiv":
						$('.introjs-nextbutton').hide();
						$("#outputDiv").removeClass("opacity00");
						$(".introjs-helperLayer ").one('transitionend', function() {
							$("#consoleBodyDiv").append("<span id ='displaytitle'></span>");
							if($("#firstDiv").text() == "NULL") {
								$("#displaytitle").text("List is empty...");
								$('.introjs-nextbutton').show();
							} else {
								for(var k =0; k <= count; k++) {
									$("#consoleBodyDiv").append("<span id='displaySpanId" + k + "'></span>");
								}
								$("#line5").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
									$("#displaytitle").text("The elements in the list are:  ");
									display(0);
								});
							}
						});
					break;
				case "line20":
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer ").one('transitionend', function() {
						$("#whileLoop").removeClass("z-index-class");
						var text = "Here it will return first to the next method.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
					});
					break;
			}
		});
		intro.start();
		$('.introjs-nextbutton').hide();
		$('.introjs-prevbutton').hide();
		$('.introjs-skipbutton').hide();
		$('.introjs-bullets').hide();
	});
		
	function typing(typingId, typingContent,callBackFunction) {
		$('.nextButton').hide();
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
	
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}
	
	function changeId(elementParent, idAttr) {
		$(elementParent).each(function(index) {
			$(this).attr("id", idAttr + (index));
		});
	}
	
	function changeIds() {
		$('#dynamicNodesDiv > div').each(function( index ) {
			$(this).attr("id", "node"+ (index));
			arr[index] = $(this).offset();
		});
		changeId($("#dynamicNodesDiv .prev-div"), "prevDiv");
		changeId($("#dynamicNodesDiv .info-div"), "infoDiv");
		changeId($("#dynamicNodesDiv .next-div"), "nextDiv");
		changeId($(".prev-address"), "prevAddress");
		changeId($(".prev-span"), "prev");
		changeId($(".info-span"), "info");
		changeId($(".next-span"), "next");
		changeId($("[id ^= rightLines]"), "rightLines");
		changeId($("[id ^= leftLines]"), "leftLines");
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
	function svgAnimatingLineSelector1RightSideToSelector2LeftSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
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
	function svgAnimatingLineSelector1LeftSideToSelector2RightSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
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
	
	// from selector1 Right side to selector2 Left side
	function rightToLeftArrow(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
		var parentOffset = $(parentSelector).offset();
		var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
		var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 3;
		var x2 = $(selector2).offset().left - parentOffset.left;
		var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 3;
		svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
		TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}

	// from selector1 Left side to selector2 Right side
	function leftToRightArrow(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
		var parentOffset = $(parentSelector).offset();
		var x1 = $(selector1).offset().left - parentOffset.left;
		var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() * 2 / 3;
		var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
		var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() * 2 / 3;
		svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
		TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}
	
	function fromEffectWithTweenMaxX(index, selector2, callBackFunction) {
		var l1 = arr[index - 1];
		var l2 = arr[index];
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}
		
	function movingBoxes(index) {
		if (index < ($('#dynamicNodesDiv > div').length)) {
			var selector2 = '#node' + index;
			fromEffectWithTweenMaxX(index, selector2)
		movingBoxes(++index);
		} else {
			$('.introjs-nextbutton').show();
		}
	}
	
	function createMethodDynamicSteps() {
		var steps = 0;
		var options = {
			element :'#methodId',
			intro :'',
			position : 'right',
			animateStep: "createMethod"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		
		var options = {
			element :'#inputId',
			intro :'',
			position : 'bottom',
			animateStep: "createValue"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
	}
	
	function repeatDynamicStepsForCreate() {
		var steps =0;
		if ($("#inputIdField").val() != -1) {
			var options = {
				element :'#animationDiv',
				intro :'',
				position : 'bottom',
				animateStep: "createAnimation"
			}
			intro.insertOption(intro._currentStep + ++steps, options);
			
			var options = {
				element :'#inputId',
				intro :'',
				position : 'bottom',
				animateStep: ""
			}
			intro.insertOption(intro._currentStep + ++steps, options);
			
			var options = {
				element : '#animationDiv',
				intro : '',
				position : 'bottom',
				animateStep : ""
			}
			intro.insertOption(intro._currentStep + ++steps, options);
		} else {
			var options = {
				element :'#line20',
				intro :'',
				position : 'bottom',
			}
			intro.insertOption(intro._currentStep + ++steps, options);
			
			var options = {
				element :'#buttons',
				intro :'',
				position : 'bottom',
			}
			intro.insertOption(intro._currentStep + ++steps, options);
		}
	}
	
	function insertAtBeginMethodDynamicSteps() {
		var steps = 0;
		var options = {
			element :'#methodId',
			intro :'',
			position : 'right',
			animateStep: "insertAtBeginMethod"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		
		var options = {
			element :'#animationDiv',
			intro :'',
			position : 'bottom',
			animateStep: "insertAtBeginAnimation"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		
		var options = {
			element :'#inputId',
			intro :'',
			position : 'bottom',
			animateStep: "insertAtBeginValue"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		
		var options = {
			element :'#animationDiv',
			intro :'',
			position : 'bottom',
			animateStep: "insertAtBeginAfterTakingValueAnimation"
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
	
	function insertAtPositionMethodDynamicSteps() {
		var steps = 0;
		var options = {
			element :'#methodId',
			intro :'',
			position : 'right',
			animateStep: "insertAtPositionMethod"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		
		var options = {
			element :'#inputId',
			intro :'',
			position : 'bottom',
			animateStep: "insertAtPosition"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		
		var options = {
			element :'#animationDiv',
			intro :'',
			position : 'bottom',
			animateStep: "insertAtPositionAnimation"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		
		var options = {
			element :'#inputId',
			intro :'',
			position : 'bottom',
			animateStep: "insertAtPositionValue"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		
		var options = {
			element :'#animationDiv',
			intro :'',
			position : 'bottom',
			animateStep: "insertAtPositionRemainingAnimation"
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
	
	function insertAtEndMethodDynamicSteps() {
		var steps = 0;
		var options = {
			element :'#methodId',
			intro :'',
			position : 'right',
			animateStep: "insertAtEndMethod"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		
		var options = {
			element :'#animationDiv',
			intro :'',
			position : 'bottom',
			animateStep: "insertAtEndAnimation"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		
		var options = {
			element :'#inputId',
			intro :'',
			position : 'bottom',
			animateStep: "insertAtEndValue"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		
		var options = {
			element :'#animationDiv',
			intro :'',
			position : 'bottom',
			animateStep: "insertAtEndRemainingAnimation"
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
	
	function deleteAtBeginMethodDynamicSteps() {
		var steps = 0;
		var options = {
			element :'#methodId',
			intro :'',
			position : 'right',
			animateStep: "deleteAtBeginMethod"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		
		var options = {
			element :'#animationDiv',
			intro :'',
			position : 'bottom',
			animateStep: "deleteAtBeginAnimation"
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
	
	function deleteAtPositionMethodDynamicSteps() {
		var steps = 0;
		var options = {
			element :'#methodId',
			intro :'',
			position : 'right',
			animateStep: "deleteAtPositionMethod"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		
		var options = {
			element :'#inputId',
			intro :'',
			position : 'bottom',
			animateStep: "deleteAtPosition"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		
		var options = {
			element :'#animationDiv',
			intro :'',
			position : 'bottom',
			animateStep: "deleteAtPositionAnimation"
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
	
	function deleteAtEndMethodDynamicSteps() {
		var steps = 0;
		var options = {
			element :'#methodId',
			intro :'',
			position : 'right',
			animateStep: "deleteAtEndMethod"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		
		var options = {
			element :'#animationDiv',
			intro :'',
			position : 'bottom',
			animateStep: "deleteAtEndAnimation"
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
	
	function displayMethodDynamicSteps() {
		var steps = 0;
		var options = {
			element :'#methodId',
			intro :'',
			position : 'right',
			animateStep: "displayMethod"
		}
		intro.insertOption(intro._currentStep + ++steps, options);
		
		var options = {
			element :'#outputDiv',
			intro :'',
			position : 'left',
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
	
	function createremainingAnimation() {
		$(".nextButton").remove();
		$("#line16").effect("highlight",{color: 'yellow'}, 1500, function() {
			text = "<span id='remainingStmt'></span></br><span id='stmtText'></span>";
			typing(".introjs-tooltiptext", text, function() {
				console.log("ty-line16");
				var l1= $("#line16").offset();
				$("#remainingStmt").html($("#line16").html()).removeClass("opacity00").offset({
					"top":l1.top,
					"left":l1.left
				});
				$("#remainingStmt").addClass("z-index-transfer yellow-color");
				TweenMax.to("#remainingStmt",1,{top:0,left:0, onComplete:function() {
					var text1 = "This statement will store temp value in variable q.";
					typing("#stmtText", text1, function() {
						var l1= $("#tempDiv").offset();
						$("#lastDiv").text($("#tempDiv").text()).offset({
							"top":l1.top,
							"left":l1.left
						});
						$("#lastDiv").addClass("z-index-transfer yellow-color");
						TweenMax.to("#lastDiv",1,{top:0,left:0, onComplete:function() {
							$("#lastDiv").removeClass("z-index-transfer yellow-color");
							$("#line17").effect("highlight",{color: 'yellow'}, 1500, function() {
								count++;
								$('.introjs-nextbutton').show();
							})
						}});
					});
				}});
			});
		});
	}
	
	function insertAtPositionLoopAnimation(d) {
		var ramdomAddress = getRandomInt(1000, 5000);
		$("#line3").effect("highlight",{color: 'yellow'}, 1500, function() {
			if (d < (position - 2)) {
				if ($("#lastDiv").text() == "NULL") {
					$("#line4").effect("highlight",{color: 'yellow'}, 1500, function() {
						$("#line5").effect("highlight",{color: 'yellow'}, 1500, function() {
							//print msg
							$("#line6").effect("highlight",{color: 'yellow'}, 1500, function() {
								
							});
						});
					});
				} else {
					$("#line8").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
						var l1= $("#next" + d).offset();
						$("#lastDiv").text($("#next" + d).text()).offset({
							"top":l1.top,
							"left":l1.left
						});
						$("#lastDiv").addClass("z-index-transfer yellow-color");
						TweenMax.to("#lastDiv", 1,{top:0,left:0, onComplete:function() {
							$("#lastDiv").removeClass("z-index-transfer yellow-color");
							d++;
							insertAtPositionLoopAnimation(d);
						}});
					});
				}
			} else {
				var text = "jhghgftr56rfg";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'insertPositionFirstStep();'>Next &#8594;</a>");
				});
			}
		});
	}
	
	function insertAtEndLoopAnimation(i) {
		var ramdomAddress = getRandomInt(1000, 5000);
		var text = "<span id='ifCond'></span></br><span id='ifCondText'></span>";
		$("#line6").effect("highlight",{color: 'yellow'}, 1500, function() {
			typing(".introjs-tooltiptext", text, function() {
				var l1 = $("#line6").offset();
				$("#ifCond").html($("#line6").html()).removeClass("opacity00").offset({
					"top":l1.top,
					"left":l1.left
				});
				$("#ifCond").addClass("z-index-transfer yellow-color");
				TweenMax.to("#ifCond",1,{top:0,left:0, onComplete:function() {
					$("#ifCond").removeClass("z-index-transfer");
					if (i < count) {
						if ($("#lastDiv").text() != "NULL") {
							$("#line7").effect("highlight",{color: 'yellow'}, 1500, function() {
								typing(".introjs-tooltiptext", text, function() {
									var l1 = $("#line7").offset();
									$("#ifCond").html($("#line7").html()).removeClass("opacity00").offset({
										"top":l1.top,
										"left":l1.left
									});
									$("#ifCond").addClass("z-index-transfer yellow-color");
									TweenMax.to("#ifCond",1,{top:0,left:0, onComplete:function() {
										$("#ifCond").removeClass("z-index-transfer");
										var l1= $("#prevAddress" + i).offset();
										$("#lastDiv").text($("#prevAddress" + i).text()).offset({
											"top":l1.top,
											"left":l1.left,
										});
										$("#lastDiv").addClass("z-index-transfer yellow-color");
										TweenMax.to("#lastDiv",1,{top:0,left:0, onComplete:function() {
											$("#lastDiv").removeClass("z-index-transfer yellow-color");
											i++;
											insertAtEndLoopAnimation(i);
										}});
									}});
								});
							});
						}
					} else {
						$("#line9").effect("highlight",{color: 'yellow'}, 1500, function() {
							typing(".introjs-tooltiptext", text, function() {
								var l1 = $("#line9").offset();
								$("#ifCond").html($("#line9").html()).removeClass("opacity00").offset({
									"top":l1.top,
									"left":l1.left
								});
								$("#ifCond").addClass("z-index-transfer yellow-color");
								TweenMax.to("#ifCond",1,{top:0,left:0, onComplete:function() {
									$("#ifCond").removeClass("z-index-transfer");
									$("#dynamicNodesDiv").append('<div class="col-xs-2 node opacity00" id="node' + count +'" style="top: 0px; width: auto;">'
											+ '<div class="col-xs-12" style="padding: 0px;">'
											+ '<div class="col-xs-4 no-border left-radius">prev</div>'
											+ '<div class="col-xs-4 no-border left-radius">info</div>'
											+ '<div class="col-xs-4 no-border right-radius">next</div>'
											+ '</div>'
											+ '<div>'
											+ '<div class="div-border left-radius col-xs-4 prev-div" id="prevDiv' + count +'">'
											+ '<span class="prev-span visibility-hidden" id="prev' + count +'" style="top: 0px; left: 0px;">0</span></div>'
							        		+ '<div class="div-border col-xs-4 info-div" id="infoDiv' + count +'" style="border-left:none;">'
											+ '<span class="info-span visibility-hidden" id="info' + count +'" style="top: 0px; left: 0px;">0</span></div>'
											+ '<div class="div-border right-radius col-xs-4 next-div" id="nextDiv' + count +'">'
											+ '<span class="next-span visibility-hidden" id="next' + count +'">0</span></div>'
											+ '</div>'
											+ '<div class="col-xs-12" style="padding: 0px;">'
											+ '<div class="col-xs-4 no-border left-radius"><span class="prev-address" id="prevAddress' + count +'" style=""> ' + ramdomAddress + '</span></div>'
											+ '<div class="col-xs-4 no-border right-radius"> ' + (ramdomAddress + 2) + '</div>'
											+ '<div class="col-xs-4 no-border right-radius"> ' + (ramdomAddress + 4) + '</div>'
											+ '</div></div>');
									intro.refresh();
									$("#node" + count).removeClass("opacity00");
									TweenMax.from($("#node" + count), 1, {top: -100, onComplete:function() {
										var l1= $("#prevAddress" + count).offset();
										$("#tempDiv").text($("#prevAddress" + count).text()).removeClass("opacity00").offset({
											"top": l1.top,
											"left": l1.left
										});
										$("#tempDiv").addClass("z-index-transfer yellow-color");
										TweenMax.to("#tempDiv",1,{top:0,left:0, onComplete:function() {
											$("#tempDiv").removeClass("z-index-transfer yellow-color");
											$("#line10").effect("highlight",{color: 'yellow'}, 1500, function() {
												//count++;
												$('.introjs-nextbutton').show();
											});
										}});
									}});
								}});
							});
						});
					}
				}});
			});
		});
	}
	
	function deletePositionLoopAnimation(d) {
		$("#line8").effect("highlight",{color: 'yellow'}, 2000 ,function() {
			console.log("position value before if ----------- : " + position);
			if (d < position) {
				console.log("position value after if ----------- : " + position);
				$("#line9").effect("highlight",{color: 'yellow'}, 2000 ,function() {
					if ($("#lastDiv").text() == "NULL") {
						$("#line10").effect("highlight",{color: 'yellow'}, 2000 ,function() {
							//print error
							$("#line11").effect("highlight",{color: 'yellow'}, 2000 ,function() {
								//go to buttons
							});
						});
					} else {
						$("#line13").effect("highlight",{color: 'yellow'}, 2000 ,function() {
							var l1= $("#prevAddress" + d).offset();
							$("#lastDiv").text($("#prevAddress" + d).text()).removeClass("opacity00").offset({
								"top": l1.top,
								"left": l1.left
							});
							$("#lastDiv").addClass("z-index-transfer yellow-color");
							TweenMax.to("#lastDiv",1,{top:0,left:0, onComplete:function() {
								$("#lastDiv").removeClass("z-index-transfer yellow-color");
								d++;
								deletePositionLoopAnimation(d);
							}});
						});
					}
				});
			} else {
				$("#node" + position).effect("highlight",{color: 'red'}, 2000 ,function() {
					$("#line15").effect("highlight",{color: 'yellow'}, 2000 ,function() {
						var l1 = $("#next" + (position - 1)).offset();
						$("#tempDiv").text($("#next" + (position - 1)).text()).removeClass("opacity00").offset({
							"top": l1.top,
							"left": l1.left
						});
						$("#tempDiv").addClass("z-index-transfer yellow-color");
						TweenMax.to("#tempDiv",1,{top:0,left:0, onComplete:function() {
							$("#tempDiv").removeClass("z-index-transfer yellow-color");
							$("#line16").effect("highlight",{color: 'yellow'}, 2000 ,function() {
								if ($("#next" + position).text() == "NULL") {
									$("#line17").effect("highlight",{color: 'yellow'}, 2000 ,function() {
										$("next" + (position - 1)).effect("highlight",{color: 'yellow'}, 2000 ,function() {
											$("next" + (position - 1)).text("NULL");
										});
									});
								} else {
									$("#line18").effect("highlight",{color: 'yellow'}, 2000 ,function() {
										$("#line19").effect("highlight",{color: 'yellow'}, 2000 ,function() {
											var l1 = $("#next" + position).offset();
											$("#next" + (position - 1)).text($("#next" + position).text()).removeClass("opacity00").offset({
												"top": l1.top,
												"left": l1.left
											});
											$("#next" + (position - 1)).addClass("z-index-transfer yellow-color");
											TweenMax.to("#next" + (position - 1),1,{top:0,left:0, onComplete:function() {
												$("#next" + (position - 1)).removeClass("z-index-transfer yellow-color");
												$("#line20").effect("highlight",{color: 'yellow'}, 2000 ,function() {
													var l1 = $("#lastDiv").offset();
													$("#prev" + (position + 1)).text($("#lastDiv").text()).removeClass("opacity00").offset({
														"top": l1.top,
														"left": l1.left
													});
													$("#prev" + (position + 1)).addClass("z-index-transfer yellow-color");
													TweenMax.to("#prev" + (position + 1),1,{top:0,left:0, onComplete:function() {
														$("#prev" + (position + 1)).removeClass("z-index-transfer yellow-color");
														deleteNodeAtPosition();
													}});
												});
											}});
										});
									});
								}
							});
						}});
					});
				});
			}
		});
	}
	
	function deleteNodeAtPosition() {
		$("#line22").effect("highlight",{color: 'yellow'}, 2000 ,function() {
			$("#node" + position).effect("highlight",{color: 'red'}, 2000 ,function() {
				if (position == (count - 1)) {
					$("#leftLines" + (count - 1)).fadeOut(1000);
					$("#rightLines" + (count - 1)).fadeOut(1000, function() {
						$("#rightLines" + (count - 1)).remove();
						$("#leftLines" + (count - 1)).remove();
						TweenMax.to("#node" + position, 1, {top: -100,opacity : 0, onComplete:function () {
							var marginRight = $("#node" + position).outerWidth();
							TweenMax.to($("#node" + position), 1, {marginRight: '-=' + marginRight,onComplete: function() {
								$("#node" + position).remove();
								changeIds();
								regenerateArrows();
								count--;
								$('.introjs-nextbutton').show();
							}});
						}});
					});
				} else {
					$("#leftLines" + (position + 1)).fadeOut(1000);
					$("#rightLines" + (position + 1)).fadeOut(1000);
					$("#rightLines" + position).fadeOut(1000);
					$("#leftLines" + position).fadeOut(1000, function() {
						$("#rightLines" + (position + 1)).remove();
						$("#leftLines" + (position + 1)).remove();
						$("#rightLines" + position).remove();
						$("#leftLines" + position).remove();
						TweenMax.to("#node" + position, 1, {top: -100,opacity : 0, onComplete:function () {
							var marginRight = $("#node" + position).outerWidth();
							TweenMax.to($("#node" + position), 1, {marginRight: '-=' + marginRight,onComplete: function() {
								$("#node" + position).remove();
								rightToLeftArrow($("#animationDiv"), $("#nextDiv" + (position - 1)),$("#prevDiv" + position), "#svgId", "rightLines" + arrowCount, "arrow", function() {
									leftToRightArrow($("#animationDiv"), $("#prevDiv" + position), $("#nextDiv" + (position - 1)), "#svgId", "leftLines" + arrowCount, "arrow", function() {
										changeIds();
										regenerateArrows();
										count--;
										$('.introjs-nextbutton').show();	
									});
								});
							}});
						}});
					});
				} 
			});
		});
	}
	
	function deleteAtEndRemainingAnimation(node) {
		$("#line7").effect("highlight",{color: 'yellow'}, 2000 ,function() {
			$("#line8").effect("highlight",{color: 'yellow'}, 2000 ,function() {
				if (node < (count - 1)) {
					$("#next" + node).effect("highlight",{color: 'yellow'}, 2000 ,function() {
						var l1 = $("#next" + node).offset();
						$("#lastDiv").text($("#next" + node).text()).offset({
							"top":l1.top,
							"left":l1.left
						});
						$("#lastDiv").addClass("z-index-transfer yellow-color");
						TweenMax.to("#lastDiv", 1,{top:0,left:0, onComplete:function() {
							$("#lastDiv").removeClass("z-index-transfer yellow-color");
							$("#line9").effect("highlight",{color: 'yellow'}, 2000 ,function() {
								var l1= $("#prev" + node).offset();
								$("#tempDiv").text($("#prev" + node).text()).offset({
									"top":l1.top,
									"left":l1.left
								});
								$("#tempDiv").addClass("z-index-transfer yellow-color");
								TweenMax.to("#tempDiv", 1,{top:0,left:0, onComplete:function() {
									$("#tempDiv").removeClass("z-index-transfer yellow-color");
									node++;
									deleteAtEndRemainingAnimation(node);
								}});
							});
						}});
					});
				} else {
					$("#line11").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
						$("#next" + (count - 2)).effect( "highlight",{color: 'yellow'}, 2000 ,function() {
							$("#next" + (count - 2)).text("NULL");
							$("#line12").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
								$("#dynamicNodesDiv > div:last-child").effect( "highlight",{color: 'red'}, 2000 ,function() {
									console.log("count value  ____________ :" +count);
									count--;
									$("#svgId > line").slice(-2).fadeOut(1000, function() {
										TweenMax.to("#dynamicNodesDiv > div:last-child", 1, {top: -100,opacity : 0, onComplete:function () {
											$("#dynamicNodesDiv > div:last-child").remove();
											$("#svgId > line").slice(-2).remove();
											
											//$("#leftLines" + count).remove();
											//$("#rightLines" + count).remove();
											changeIds();
											regenerateArrows();
											arrowCount--;
											$('.introjs-nextbutton').show();
										}});
									});
								});
							});
						});
					});
				}
			});
		});
	}
	
	function display(d) {
		$("#line6").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
			if (($("#lastDiv").text()) != "NULL") {
				$("#line7").effect("highlight",{color: 'yellow'}, 2000 ,function() {
					if (d < count) {
						$("#displaySpanId" + d).text($("#info" + d).text());
						$("#displaySpanId" + d).append("-->");
						$("#line8").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
							var l1= $("#next" + d).offset();
							$("#lastDiv").text($("#next" + d).text()).offset({
								"top":l1.top,
								"left":l1.left
							});
							$("#lastDiv").addClass("z-index-transfer yellow-color");
							TweenMax.to("#lastDiv", 1,{top:0,left:0, onComplete:function() {
								$("#lastDiv").removeClass("z-index-transfer yellow-color");
								d++;
								display(d);
							}});
						});
					}
				});
			} else {
				$("#line10").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
					$("#consoleBodyDiv span:last-child").append("NULL").addClass("red-color-css");					
					$("#displayMethodId").addClass("z-index-class");
					$('.introjs-nextbutton').show();
				});
			}
		});
	}
	
	function numbers() {
		var flag = true;
		$("#inputIdField").on("keydown keyup", function(e) {
			$(".red-color-css").remove();
			if ((e.shiftKey)) {
				e.preventDefault();
			}
			if ($('#inputIdField').val().length >= 1) {
				flag = false;
			} else if ($('#inputIdField').val().indexOf('-') == -1) {
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
			if ($("#inputIdField").text().length == 0) {
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
	
	function regenerateArrows() {
		$("line").remove();
		startingLineWithoutReveal("#animationDiv", $("#first"), $("#node0").find(".prev-div"), "#svgId", "startLine0", "arrow");
		$.each($("#dynamicNodesDiv > div:not(:last)"), function(index, val) {
			rightToLeftArrowWithoutReveal("#animationDiv", $(this).find(".next-div"), $(this).next().find(".prev-div"), "#svgId", "rightLines" + (index + 1), "arrow");
			leftToRightArrowWithoutReveal("#animationDiv", $(this).next().find(".prev-div"), $(this).find(".next-div"), "#svgId", "leftLines" + (index + 1), "arrow"); 
		});
	}
		
	function rightToLeftArrowWithoutReveal(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
		var parentOffset = $(parentSelector).offset();
		var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
		var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 3;
		var x2 = $(selector2).offset().left - parentOffset.left;
		var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 3;
		svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2);
			if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}

	function leftToRightArrowWithoutReveal(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
		var parentOffset = $(parentSelector).offset();
		var x1 = $(selector1).offset().left - parentOffset.left;
		var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() * 2 / 3;
		var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
		var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() * 2 / 3;
		svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2);
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}
	
	
	function startingLineWithoutReveal(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
		var parentOffset = $(parentSelector).offset();
		var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
		var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
		var x2 = $(selector2).offset().left - parentOffset.left;
		var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
		svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2);
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}
	
	
	function createMethodSecondStep() {
		$(".nextButton").remove();
		//$("#createWhileLoopContent").remove()
		var text="<span id='createWhileLoopContent1'></span><span id='textSpan1'></span>";
		typing(".introjs-tooltiptext", text, function() {
			$("#line7").effect("highlight",{color: 'yellow'}, 1500, function() {
				var l1= $("#line7").offset();
				$("#createWhileLoopContent1").html($("#line7").html()).removeClass("opacity00").offset({
					"top":l1.top,
					"left":l1.left
				});
				$("#createWhileLoopContent1").addClass("z-index-transfer yellow-color");
				TweenMax.to("#createWhileLoopContent1",1,{top:0,left:0, onComplete:function() {
					typing("#textSpan1", "<br>This statement will keep NULL in prev of the temp.", function() {
						//$("#textSpan1").append("<br>This statement will keep NULL in prev of the temp.");
						$("#createWhileLoopContent1").removeClass("z-index-transfer");
						$("#prev" + count).text("NULL").removeClass("visibility-hidden");
						$("#line8").effect("highlight",{color: 'yellow'}, 1500, function() {
							var l1= $("#line8").offset();
							$("#createWhileLoopContent1").html($("#line8").html()).removeClass("opacity00").offset({
								"top":l1.top,
								"left":l1.left
							});
							$("#createWhileLoopContent1").addClass("z-index-transfer yellow-color");
							TweenMax.to("#createWhileLoopContent1",1,{top:0,left:0, onComplete:function() {
								$("#createWhileLoopContent1").removeClass("z-index-transfer");
								flipEffect("#createWhileLoopContent1 > #flipX1", $("#xBox").text() , function() {
									typing("#textSpan1", "<br>This statement will insert given value " + $("#inputIdField").val() + " in info of the temp.", function() {
										//$("#textSpan1").append("<br>This statement will insert x value (given value) in info of the temp.");
										var l1= $("#xBox").offset();
										$("#info" + count).text($("#xBox").text()).removeClass("visibility-hidden").offset({
											"top":l1.top,
											"left":l1.left
										});
										$("#info" + count).addClass("z-index-transfer yellow-color");
										TweenMax.to("#info" + count,1,{top:0,left:0, onComplete:function() {
											$("#info" + count).removeClass("z-index-transfer yellow-color");
											$("#line9").effect("highlight",{color: 'yellow'}, 1500, function() {
												var l1= $("#line9").offset();
												$("#createWhileLoopContent1").html($("#line9").html()).removeClass("opacity00").offset({
													"top":l1.top,
													"left":l1.left
												});
												$("#createWhileLoopContent1").addClass("z-index-transfer yellow-color");
												TweenMax.to("#createWhileLoopContent1",1,{top:0,left:0, onComplete:function() {
													$("#createWhileLoopContent1").removeClass("z-index-transfer");
													//$("#textSpan1").text("");
													typing("#textSpan1", "<br>This statement will insert NULL value in next of the temp.", function() {
														//$("#textSpan1").append("<br>This statement will insert NULL value in next of the temp.");
														$("#next" + count).text("NULL").removeClass("visibility-hidden");
														$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'createMethodThirdStep()'>Next &#8594;</a>");
													});
												}});
											});
										}});
									});
								});
							}});
						});
					});
				}});
			});
		});
	}
	
	function createMethodThirdStep() {
		$(".nextButton").remove();
		var text = "<span id='createIfCondition'></span><br><span id='createIfConditionContent'><br></span><span text='textSpan2'></span>";
		typing(".introjs-tooltiptext", text, function() {
			$("#line10").effect("highlight",{color: 'yellow'}, 1500, function() {
				var l1= $("#line10").offset();
				$("#createIfCondition").html($("#line10").html()).removeClass("opacity00").offset({
					"top":l1.top,
					"left":l1.left
				});
				$("#createIfCondition").addClass("z-index-transfer yellow-color");
				TweenMax.to("#createIfCondition",1,{top:0,left:0, onComplete:function() {
					$("#createIfCondition").removeClass("z-index-transfer");
					flipEffect("#createIfCondition > #firstValue", $("#firstDiv").text() , function() {
						if ($("#firstDiv").text() == "NULL") {
							$("#line11").effect("highlight",{color: 'yellow'}, 1500, function() {
								var l1= $("#line11").offset();
								$("#createIfConditionContent").html($("#line11").html()).removeClass("opacity00").offset({
									"top":l1.top,
									"left":l1.left
								});
								$("#createIfConditionContent").addClass("z-index-transfer yellow-color");
								TweenMax.to("#createIfConditionContent",1,{top:0,left:0, onComplete:function() {
									$("#createIfConditionContent").removeClass("z-index-transfer");
									typing("#textSpan2", "Here, temp value will be stored first", function() {
										var l1= $("#tempDiv").offset();
										$("#firstDiv").text($("#tempDiv").text()).offset({
											"top":l1.top,
											"left":l1.left
										});
										$("#firstDiv").addClass("z-index-transfer yellow-color");
										TweenMax.to("#firstDiv",1,{top:0,left:0, onComplete:function() {
											$("#firstDiv").removeClass("z-index-transfer yellow-color");
											svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#first", "#prevDiv" + count, "#svgId", "startLine" + arrowCount, "arrow", function() {
												/* $("#startLine" + arrowCount).addClass("start-arrow"); */
												arrowCount++;
												$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'createremainingAnimation()'>Next &#8594;</a>");
												//createremainingAnimation();
											});
										}});
									});
								}});
							});
						} else {
							var text = "<span id= 'elsePart'></span></br><span id='elseText'></span>"
							$("#line13").effect("highlight",{color: 'yellow'}, 1500, function() {
								typing(".introjs-tooltiptext", text, function() {
									var l1= $("#line13").offset();
									$("#elsePart").html($("#line13").html()).removeClass("opacity00").offset({
										"top":l1.top,
										"left":l1.left
									});
									$("#elsePart").addClass("z-index-transfer yellow-color");
									TweenMax.to("#elsePart",1,{top:0,left:0, onComplete:function() {
										var text1 = "This statement is used to store temp value in q next.";
										var l1= $("#tempDiv").offset();
										$("#next" + (count - 1)).text($("#tempDiv").text()).removeClass("visibility-hidden").offset({
											"top":l1.top,
											"left":l1.left
										});
										$("#next"  + (count - 1)).addClass("z-index-transfer yellow-color");
										TweenMax.to("#next" + (count - 1),1,{top:0,left:0, onComplete:function() {
											$("#next"  + (count - 1)).removeClass("z-index-transfer yellow-color");
											rightToLeftArrow("#animationDiv", "#nextDiv" + (count-1), "#prevDiv" + count, "#svgId", "rightLines" + arrowCount, "arrow", function() {
												//var text = "<span id='elseStmt2'></span></br><span id 'text'></span>";
												$("#line14").effect("highlight",{color: 'yellow'}, 1500, function() {
													
													var l1= $("#line14").offset();
													$("#elsePart").html($("#line14").html()).removeClass("opacity00").offset({
														"top":l1.top,
														"left":l1.left
													});
													$("#elsePart").addClass("z-index-transfer yellow-color");
													TweenMax.to("#elsePart",1,{top:0,left:0, onComplete:function() {
														var text1 = "This statement is used to store q value in prev of temp."
														typing("#elseText", text1, function() {
															var l1= $("#lastDiv").offset();
															$("#prev" + count).text($("#lastDiv").text()).removeClass("visibility-hidden").offset({
																"top":l1.top,
																"left":l1.left
															});
															$("#prev"  + count).addClass("z-index-transfer yellow-color");
															TweenMax.to("#prev" + count,1,{top:0,left:0, onComplete:function() {
																$("#prev"  + count).removeClass("z-index-transfer yellow-color");
																leftToRightArrow($("#animationDiv"),  $("#prevDiv" + count), $("#nextDiv" + (count - 1)) , "#svgId", "leftLines" + arrowCount, "arrow", function() {
																	arrowCount++;
																	//var text = "dfhgj";
																	//typing(".introjs-tooltiptext", text, function() {
																		$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'createremainingAnimation()'>Next &#8594;</a>");
																		//createremainingAnimation();
																	//});
																});
															}});
														});
													}});
												});
											});
										}});
									}});
								});
							});
						}
					});
				}});
			});
		});
	}
	
	function insertBeginFirstStep() {
		$(".nextButton").remove();
		var text = "<span id='xValue1'></span></br><span id='xText1'></span>";
		$("#line8").effect("highlight",{color: 'yellow'}, 1500, function() {
			typing(".introjs-tooltiptext", text, function() {
				var l1= $("#line8").offset();
				$("#xValue1").html($("#line8").html()).removeClass("opacity00").offset({
					"top":l1.top,
					"left":l1.left
				});
				$("#xValue1").addClass("z-index-transfer yellow-color");
				TweenMax.to("#xValue1",1,{top:0,left:0, onComplete:function() {
					$("#xValue1").removeClass("z-index-transfer");
					var text1 = "This statement is used to create a new node dynamically.";
					typing("#xText1", text1, function() {
						console.log("count value before if --------" + count)
						console.log("first value before if --------" + $("#firstDiv").text())
						if ($("#firstDiv").text() == "NULL") {
							$("#line9").effect("highlight",{color: 'yellow'}, 1500, function() {
								typing(".introjs-tooltiptext", text, function() {
									var l1= $("#line9").offset();
									$("#xValue1").html($("#line9").html()).removeClass("opacity00").offset({
										"top":l1.top,
										"left":l1.left
									});
									$("#xValue1").addClass("z-index-transfer yellow-color");
									TweenMax.to("#xValue1",1,{top:0,left:0, onComplete:function() {
										$("#xValue1").removeClass("z-index-transfer");
										var text1 = "This statement is used to create a new node dynamically.";
										typing("#xText1", text1, function() {
											var l1= $("#tempDiv").offset();
											$("#firstDiv").text($("#tempDiv").text()).offset({
												"top":l1.top,
												"left":l1.left
											});
											$("#firstDiv").addClass("z-index-transfer yellow-color");
											TweenMax.to("#firstDiv",1,{top:0,left:0, onComplete:function() {
												$("#firstDiv").removeClass("z-index-transfer yellow-color");
												svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#first", "#prevDiv" + count, "#svgId", "startLine" + arrowCount, "arrow", function() {
													$("#startLine" + arrowCount).addClass("start-arrow");
													$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'insertAtBeginEnding()'>Next &#8594;</a>");
													/* arrowCount++;
													$("#line15").effect("highlight",{color: 'yellow'}, 1500, function() {
														count++;
														var text = "524";
														typing(".introjs-tooltiptext", text, function() {
															$('.introjs-nextbutton').show();
															//regenerateArrows();
														});
													}); */
												});
											}});
										});
									}});
								});
								});
							} else {
								$("#line11").effect("highlight",{color: 'yellow'}, 1500, function() {
									typing(".introjs-tooltiptext", text, function() {
										var l1= $("#line11").offset();
										//chane
										$("#xValue1").html($("#line11").html()).removeClass("opacity00").offset({
											"top":l1.top,
											"left":l1.left
										});
										$("#xValue1").addClass("z-index-transfer yellow-color");
										TweenMax.to("#xValue1",1,{top:0,left:0, onComplete:function() {
											$("#xValue1").removeClass("z-index-transfer");
											var text1 = "This statement is used to create a new node dynamically.";
											typing("#xText1", text1, function() {
												var l1= $("#firstDiv").offset();
												$("#next0").text($("#firstDiv").text()).offset({
													"top":l1.top,
													"left":l1.left
												});
												$("#next0").addClass("z-index-transfer yellow-color");
												TweenMax.to("#next0", 1,{top:0,left:0, onComplete:function() {
													$("#next0").removeClass("z-index-transfer yellow-color");
													rightToLeftArrow($("#animationDiv"), $("#nextDiv0"),$("#prevDiv1"), "#svgId", "rightLines" + arrowCount, "arrow", function() {
														$("#next0").removeClass("z-index-transfer yellow-color");
														$("#line12").effect("highlight",{color: 'yellow'}, 1500, function() {
															typing(".introjs-tooltiptext", text, function() {
																var l1= $("#line12").offset();
																//chane
																$("#xValue1").html($("#line12").html()).removeClass("opacity00").offset({
																	"top":l1.top,
																	"left":l1.left
																});
																$("#xValue1").addClass("z-index-transfer yellow-color");
																TweenMax.to("#xValue1",1,{top:0,left:0, onComplete:function() {
																	$("#xValue1").removeClass("z-index-transfer");
																	var text1 = "This statement is used to create a new node dynamically.";
																	typing("#xText1", text1, function() {
																		var l1= $("#tempDiv").offset();
																		$("#prev1").text($("#tempDiv").text()).offset({
																			"top":l1.top,
																			"left":l1.left
																		});
																		$("#prev1").addClass("z-index-transfer yellow-color");
																		TweenMax.to("#prev1",1,{top:0,left:0, onComplete:function() {
																			leftToRightArrow($("#animationDiv"), $("#prevDiv1"), $("#nextDiv0"), "#svgId", "leftLines" + arrowCount, "arrow", function() {
																				$("#prev1").removeClass("z-index-transfer yellow-color");
																				$("#line13").effect("highlight",{color: 'yellow'}, 1500, function() {
																					typing(".introjs-tooltiptext", text, function() {
																						var l1= $("#line13").offset();
																						//chane
																						$("#xValue1").html($("#line13").html()).removeClass("opacity00").offset({
																							"top":l1.top,
																							"left":l1.left
																						});
																						$("#xValue1").addClass("z-index-transfer yellow-color");
																						TweenMax.to("#xValue1",1,{top:0,left:0, onComplete:function() {
																							$("#xValue1").removeClass("z-index-transfer");
																							var text1 = "This statement is used to create a new node dynamically.";
																							typing("#xText1", text1, function() {
																								var l1= $("#tempDiv").offset();
																								$("#firstDiv").text($("#tempDiv").text()).offset({
																									"top":l1.top,
																									"left":l1.left
																								});
																								$("#firstDiv").addClass("z-index-transfer yellow-color");
																								TweenMax.to("#firstDiv",1,{top:0,left:0, onComplete:function() {
																									svgAnimatingLineSelector1RightSideToSelector2LeftSide($("#animationDiv"),  $("#first"), $("#prevDiv0") , "#svgId", "startLine" + arrowCount, "arrow", function() {
																										$("#startLine" + arrowCount).addClass("start-arrow");
																										$("#firstDiv").removeClass("z-index-transfer yellow-color");
																										$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'insertAtBeginEnding()'>Next &#8594;</a>");
																									/* $("#line15").effect("highlight",{color: 'yellow'}, 1500, function() {
																										changeIds();
																										arrowCount++;
																										count++;
																										regenerateArrows();
																										$('.introjs-nextbutton').show();
																									}); */
																									//regenerateArrows();
																									});
																								}});
																							});
																						}});
																					});
																				});
																			});
																		}});
																	});
																}});
															});
														});
													});
												}});
											});
										}});
									});
								});
							}
						});
					}});
				});
			});
		}
	
	function insertAtBeginEnding() {
		$(".nextButton").remove();
		var text = "It returns the first value.";
		$("#line15").effect("highlight",{color: 'yellow'}, 1500, function() {
			changeIds();
			arrowCount++;
			count++;
			regenerateArrows();
			typing(".introjs-tooltiptext", text, function() {
				$('.introjs-nextbutton').show();
			});
		});
	}
	
	function insertPositionFirstStep() {
		$(".nextButton").remove();
		$("#line10").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
			if (position == 1) {
				$("#line11").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
					insertAtBeginMethodDynamicSteps();
				});
			} else {
				$("#line12").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
					$("#line13").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
						var l1= $("#next" + (position - 2)).offset();
						$("#pValue").text($("#next" + (position - 2)).text()).offset({
						  "top":l1.top,
						  "left":l1.left
						});
						$("#pValue").addClass("z-index-transfer yellow-color");
						TweenMax.to("#pValue", 1,{top:0,left:0, onComplete:function() {
							$("#pValue").removeClass("z-index-transfer yellow-color");
							$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'insertPositionSecondStep()'>Next &#8594;</a>");
						}});
					});
				});
			}
		});
	}
	
	function insertPositionSecondStep() {
		$(".nextButton").remove();
		var ramdomAddress = getRandomInt(1000, 5000);
		$("#line14").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
			$("#node" + (position - 1)).before('<div class="col-xs-2 node opacity00" id="node' + count +'" style="top: 0px; width: auto;">'
					+ '<div class="col-xs-12" style="padding: 0px;">'
					+ '<div class="col-xs-4 no-border left-radius">prev</div>'
					+ '<div class="col-xs-4 no-border left-radius">info</div>'
					+ '<div class="col-xs-4 no-border right-radius">next</div>'
					+ '</div>'
					+ '<div>'
					+ '<div class="div-border left-radius col-xs-4 prev-div" id="prevDiv' + count +'">'
					+ '<span class="prev-span visibility-hidden" id="prev' + count +'" style="top: 0px; left: 0px;">0</span></div>'
	        		+ '<div class="div-border col-xs-4 info-div" id="infoDiv' + count +'" style="border-left:none;">'
					+ '<span class="info-span visibility-hidden" id="info' + count +'" style="top: 0px; left: 0px;">0</span></div>'
					+ '<div class="div-border right-radius col-xs-4 next-div" id="nextDiv' + count +'">'
					+ '<span class="next-span visibility-hidden" id="next' + count +'">0</span></div>'
					+ '</div>'
					+ '<div class="col-xs-12" style="padding: 0px;">'
					+ '<div class="col-xs-4 no-border left-radius"><span class="prev-address" id="prevAddress' + count +'" style=""> ' + ramdomAddress + '</span></div>'
					+ '<div class="col-xs-4 no-border right-radius"> ' + (ramdomAddress + 2) + '</div>'
					+ '<div class="col-xs-4 no-border right-radius"> ' + (ramdomAddress + 4) + '</div>'
					+ '</div></div>');
			intro.refresh();
			$("#leftLines" + (position - 1) +  ", #leftLines" + (position - 2) + ", #rightLines" + (position - 1) + ", #rightLines" + (position - 2)).remove();
			//$("#rightLines" + (position - 1)).remove();
			//$("#rightLines" + (position - 2)).remove();
			//$("#leftLines" + (position - 1)).remove();
			//$("#leftLines" + (position - 2)).remove();
			$("#node" + count).removeClass("opacity00");
			regenerateArrows();
			TweenMax.from($("#node" + count), 1, {top: -100, onComplete:function() {
				var l1= $("#prevAddress" + count).offset();
				$("#tempDiv").text($("#prevAddress" + count).text()).removeClass("opacity00").offset({
					"top": l1.top,
					"left": l1.left
				});
				$("#tempDiv").addClass("z-index-transfer yellow-color");
				TweenMax.to("#tempDiv",1,{top:0,left:0, onComplete:function() {
					$("#tempDiv").removeClass("z-index-transfer yellow-color");
					changeIds();
					$("#line15").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
						$('.introjs-nextbutton').show();
					});
				}});
			}});
		});
	}
	
	function insertPositionRemainingFirstStep() {
		$(".nextButton").remove();
		$("#line19").effect("highlight",{color: 'yellow'}, 1500, function() {
			var l1 = $("#pValue").offset();
			$("#next" + (position - 1)).text($("#pValue").text()).removeClass("visibility-hidden").offset({
				"top":l1.top,
				"left":l1.left
			});
			$("#next" + (position - 1)).addClass("z-index-transfer yellow-color");
			TweenMax.to("#next" + (position - 1),1,{top:0,left:0, onComplete:function() {
				$("#next" + (position - 1)).removeClass("z-index-transfer yellow-color");
				$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'insertPositionRemainingSecondStep()'>Next &#8594;</a>");
			}});
		});
	}
	
	function insertPositionRemainingSecondStep() {
		$(".nextButton").remove();
		$("#line20").effect("highlight",{color: 'yellow'}, 1500, function() {
			var l1 = $("#tempDiv").offset();
			$("#prev" + position).text($("#tempDiv").text()).removeClass("visibility-hidden").offset({
				"top":l1.top,
				"left":l1.left
			});
			$("#prev" + position).addClass("z-index-transfer yellow-color");
			TweenMax.to("#prev" + position,1,{top:0,left:0, onComplete:function() {
				$("#prev" + position).removeClass("z-index-transfer yellow-color");
				$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'insertPositionRemainingThirdStep()'>Next &#8594;</a>");
			}});
		});
	}
	
	function insertPositionRemainingThirdStep() {
		$(".nextButton").remove();
		$("#line21").effect("highlight",{color: 'yellow'}, 1500, function() {
			var l1 = $("#tempDiv").offset();
			$("#next" + (position - 2)).text($("#tempDiv").text()).removeClass("visibility-hidden").offset({
				"top":l1.top,
				"left":l1.left
			});
			$("#next" + (position - 2)).addClass("z-index-transfer yellow-color");
			TweenMax.to("#next" + (position - 2),1,{top:0,left:0, onComplete:function() {
				$("#next" + (position - 2)).removeClass("z-index-transfer yellow-color");
				$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'insertPositionRemainingThirdStep()'>Next &#8594;</a>");	
			}});
		});
	}
	
	function insertPositionRemainingThirdStep() {
		$(".nextButton").remove();
		$("#line22").effect("highlight",{color: 'yellow'}, 1500, function() {
			var l1 = $("#lastDiv").offset();
			$("#prev" + (position - 1)).text($("#lastDiv").text()).removeClass("visibility-hidden").offset({
				"top":l1.top,
				"left":l1.left
			});
			$("#prev" + (position - 1)).addClass("z-index-transfer yellow-color");
			TweenMax.to("#prev" + (position - 1),1,{top:0,left:0, onComplete:function() {
				$("#prev" + (position - 1)).removeClass("z-index-transfer yellow-color");
				$("#line24").effect("highlight",{color: 'yellow'}, 1500, function() {
					changeIds();
					arrowCount++;
					count++;
					regenerateArrows();
					$('.introjs-nextbutton').show();
				});
			}});
		});	
	}
	
	
	
</script>
</body>
</html>
