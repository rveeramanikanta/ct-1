<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<link rel="stylesheet" href="/css/jquery-ui.css">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/animate.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/font-awesome-animation.min.css" rel="stylesheet">
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/alertify.js"></script>
<link rel="stylesheet" href="/css/alertify/alertify.bootstrap.css"/>
<link rel="stylesheet" href="/css/alertify/alertify.core.css"/>
<link rel="stylesheet" href="/css/alertify/alertify.default.css"/>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/gs/TimelineLite.min.js"></script>
<title>single linkedlist</title>
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
	height: 465px;
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
	display: none;
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

</style>
</head>
<body>
<div class="col-xs-12 padding0">
	<div class="col-xs-offset-4 col-xs-4">
		<h2 class="text-center">
			<span class="label label-default ct-demo-heading" id="heading">Single LinkedList</span>
		</h2>
	</div>

<div class="col-xs-12 margintop padding0" id="mainDiv">
	<div class="col-xs-4">
<pre id="totalCode" class="creampretab4"><span id="structDeclaration" class="opacity00">struct list {
  int info;
  struct list *next;
};
typedef struct list *node;
node first = NULL;</span>

<div id ="methodId"></div>
</pre>
</div>
	<div class="col-xs-8 border" id="animationArea">
		<div class="col-xs-12" id="buttonsDiv"> 
			<div class="buttons-div" style="border: 1px solid grey; height: 60px; border-radius: 4px; margin-top: 10px;" id="buttons">
					<div class='col-xs-1'>
						<button type="button" id="createBtn" class="btn btn-success btn-xs margintop">Create</button>
					</div>
					<div class='col-xs-1'>
						<button type="button" class="btn btn-success btn-xs margintop" id="insertBeginBtn">InsertatBegin</button>
					</div>
					<div class='col-xs-1' style="margin-left: 4%;">
						<button type="button" class="btn btn-success btn-xs margintop" id="insertAtPositionBtn">insertAtPosition</button>
					</div>
					<div class='col-xs-1' style="margin-left: 5%;">
						<button type="button" class="btn btn-success btn-xs margintop" id="insertAtEndBtn">InsertAtEnd</button>
					</div>
					<div class='col-xs-1' style="margin-left: 3%;">
						<button type="button" class="btn btn-success btn-xs margintop" id="deleteAtBeginBtn">deleteAtBegin</button>
					</div>
					<div class='col-xs-1' style="margin-left: 5%;">
						<button type="button" class="btn btn-success btn-xs margintop" id="deleteAtPositionBtn">deleteAtPosition</button>
					</div>
					<div class='col-xs-1' style="margin-left: 6%;">
						<button type="button" class="btn btn-success btn-xs margintop" id="deleteAtEndBtn">deleteAtEnd</button>
					</div>
					<div class='col-xs-1' style="margin-left: 4%;">
						<button type="button" class="btn btn-success btn-xs margintop" id="displayBtn">display</button>
					</div>
			</div>
			</div>
			<div class="col-xs-12" id="totalElementsDiv">
				<div class="buttons-div col-xs-5" id="ElementsDiv" style="border: 1px solid grey; height: 100px; border-radius: 4px; margin-top: 10px;">
					<div class="margintop"><span id="innerHeading"><b>Create Operation :</b></span></div>
					<div class="margintop" id="inputId">
						<form class="form-inline" id="formId">
	 						 <div class="form-group">
	   					 		<span id="EnterTextSpan">Enter Element : &emsp;</span>
	   					 		<input id="inputIdField" type="text" class="input-css" placeholder="number" maxLength ="3">
	  						</div>&emsp;&emsp;
	  					<button type="button" id="inputBtn" class="btn btn-success btn-sm input-btn">Create</button>
						</form>
					</div>
				</div>
				<div class="col-xs-7" style="margin-top: 40px;">
					<div class="col-xs-12">
   						 <div class="col-xs-1 padding0" id="xEqual">x = </div>  <div class="col-xs-2 box-border value-center text-center" id="xBox"></div>
					     <div class="col-xs-offset-1 col-xs-2 padding0" id="temp">temp = </div>  <div class="col-xs-2 box-border value-center text-center"><span id="tempDiv"></span></div>
					     <div id="q"><div class="col-xs-offset-1 col-xs-1 padding0">q = </div>  <div class="col-xs-2 box-border value-center text-center"><span id="lastDiv"></span></div></div>
     				 </div>
 				</div>
			</div>
			<div class="col-xs-12" id="animationDiv" style="margin-top: 40px;">
				<div class="col-xs-2 padding0" style="margin-top: 18px;">
						<div class="col-xs-5" style="margin-top: 4px;">first=</div>
						<div class="col-xs-6 box-border value-center text-center" id="first"><span id="firstDiv">NULL</span></div>
					</div>
				
				<div class="col-xs-10"  id="dynamicNodesDiv"></div>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript">

var i = 0,temp = 0;
var intro;
var typingInterval = 5;
var arr=[];
var tl = new TimelineMax();
var pos, positionValue;
$(document).ready(function() {
	$(".line").hide();
	$(".text-class").hide();
	svgAppend("#animationDiv", "svgId");
	svgMarkerAppend("#svgId", "arrow");
	$("#svgId").addClass("z-indexArrow");
	$(document).keydown(function(objEvent) {
	    if (objEvent.keyCode == 9) {  //tab pressed
	        objEvent.preventDefault(); // stops its action
	    }
	});
	$("#restart").click(function() {
		location.reload(); 
	});
	$("#createBtn").click(function() {
		$("#createBtn").addClass("createClass");
		createDynamicSteps();
		$('.introjs-nextbutton').click();
	});
	$("#insertBeginBtn").click(function() {
		console.log("click")
		insertAtBeginDynamicSteps();
	});
	$("#deleteAtBeginBtn").click(function() {
		console.log("clicked")
		deleteAtBeginDynamicSteps();
	});
	$("#insertAtEndBtn").click(function() {
		$("#insertAtEndBtn").addClass("insertAtEndClass");
		insertAtEndDynamicSteps();
	});
	$("#deleteAtEndBtn").click(function() {
		deleteAtEndDynamicSteps();
	});
	$("#insertAtPositionBtn").click(function() {
		insertAtPositionDynamicSteps();
	});
	$("#deleteAtPositionBtn").click(function() {
		deleteAtPositionDynamicSteps();
	});
	$("#displayBtn").click(function() {
		deleteDynamicSteps();
	});
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
	changeId($("#dynamicNodesDiv .info-div"), "infoDiv");
	changeId($("#dynamicNodesDiv .next-div"), "nextDiv");
	changeId($(".info-span span"), "info");
	changeId($(".next-span span"), "next");
	changeId($(".info-address"), "infoAddress");
	changeId($(".info-span"), "info");
	changeId($(".next-span"), "next");
	changeId($(".svg-line"), "lines");
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

// from selector1 Bottom side to selector2 Top side
function svgAnimatingLineSelector1BottomSideToSelector2TopSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
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
function svgAnimatingLineSelector1TopSideToSelector2BottomSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
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
	if (index < $('#dynamicNodesDiv > div').length) {
		var selector2 = '#node' + index;
		fromEffectWithTweenMaxX(index, selector2, function() {
		});
		movingBoxes(++index);
	} else {
		console.log("boxes else");
			insertingElementAtBegining();
	}
}



function createDynamicSteps() {
	console.log("create dynamic steps");
	var count = 0;
	var options = {
		element : "#methodId",
		intro : "",
		position:"right",
		animateStep: "createMethod"
	}
	intro.insertOption(intro._currentStep + ++count, options);
			
	var options = {
			element :'#inputId',
			intro :'',
			position : 'bottom',
			animateStep: "createValue"
	}
	intro.insertOption(intro._currentStep + ++count, options);
}

function dynamicSteps(value) {
	var count = 0;
	if(value != -1) {
		var options = {
			element :'#animationDiv',
			intro :'',
			position : 'bottom',
			animateStep: "animationDiv1"
		}
		intro.insertOption(intro._currentStep + ++count, options);
		
		/* var options = {
			element :'#line15',
			intro :'',
			position : 'right',
		}
		intro.insertOption(intro._currentStep +  ++count, options); */
		var options = {
			element :'#inputId',
			intro :'',
			position : 'right',
			tooltipClass:"hide"
		}
		intro.insertOption(intro._currentStep +  ++count, options);
	} else {
		var options = {
				element : "#line18",
				intro : "",
				position : "right"
		}
		intro.insertOption(intro._currentStep +  ++count, options);
		var options = {
				element : "#buttons",
				intro : "",
				tooltipClass:"hide"
		}
		intro.insertOption(intro._currentStep +  ++count, options);
	}
}

function insertAtBeginDynamicSteps() {
	var count = 0;
	var options = {
		element : "#methodId",
		intro : "",
		position:"right",
		animateStep: "insertAtBeginMethodId"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
			element :'#animationDiv',
			intro :'',
			position : 'bottom',
			animateStep: "animationDiv2"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#inputId',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "animationDiv21"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#buttons',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	intro.nextStep();	
}

function insertAtPositionDynamicSteps() {
	var count = 0;
	var options = {
		element : "#methodId",
		intro : "",
		position:"right",
		animateStep: "insertAtPositionMethodId"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#inputId',
		intro :'',
		position : 'bottom',
		animateStep: "insertAtPositionVal1"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "animationDiv8"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#inputId',
		intro :'',
		position : 'bottom',
		animateStep: "insertAtPositionVal2"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "animationDiv81"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#buttons',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	intro.nextStep();
}

function insertAtEndDynamicSteps() {
	var count = 0;
	var options = {
		element : "#methodId",
		intro : "",
		position:"right",
		animateStep: "insertAtEndMethodId"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "animationDiv3"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#inputId',
		intro :'',
		position : 'bottom',
		animateStep:"insertAtEndValue"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "animationDiv3"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#buttons',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	intro.nextStep();
}

function deleteAtBeginDynamicSteps() {
	var count = 0;
	console.log("dynamic steps")
	var options = {
		element : "#methodId",
		intro : "",
		position:"right",
		animateStep: "deleteAtBeginMethodId"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "animationDiv5"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#buttons',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++count, options);
		
	
	intro.nextStep();
}

function deleteAtPositionDynamicSteps() {
	var count = 0;
	var options = {
		element : "#methodId",
		intro : "",
		position:"right",
		animateStep: "deleteAtPositionMethodId"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element : "#inputId",
		intro : "",
		position:"right",
		animateStep: "delPositionVal"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "animationDiv7"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#buttons',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	intro.nextStep();
}

function deleteAtEndDynamicSteps() {
	var count = 0;
	var options = {
		element : "#methodId",
		intro : "",
		position:"right",
		animateStep: "deleteAtEndMethodId"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "animationDiv4"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#buttons',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++count, options);
	intro.nextStep();	
}

function deleteDynamicSteps() {
	var count = 0;
	var options = {
		element : "#methodId",
		intro : "",
		position:"right",
		animateStep: "displayMethodId"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#animationDiv',
		intro :'',
		position : 'bottom',
		animateStep: "animationDiv9"
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#outputDiv',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++count, options);
	
	var options = {
		element :'#buttons',
		intro :'',
		position : 'bottom',
	}
	intro.insertOption(intro._currentStep + ++count, options);
	intro.nextStep();	
}
</script>
</body>
</html>