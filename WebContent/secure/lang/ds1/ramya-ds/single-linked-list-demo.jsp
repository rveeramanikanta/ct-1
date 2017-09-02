<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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

.white-color {
	color: white;
}

.red-color-css {
	color: red;
}

.display-inline-css {
	display: inline-block;
}

</style>
</head>
<body>
<div class="col-xs-12">
		<div class="col-xs-offset-4 col-xs-4">
			<h2 class="text-center">
				<span class="label label-default ct-demo-heading" id="heading">single
					LinkedList</span>
			</h2>
		</div>

		<div class="col-xs-12 margintop padding0 opacity00" id="mainDiv">
			<div class="col-xs-4 opacity00 padding0" id="code">
				<pre id="totalCode" class="creampretab4">
<pre id="totalCode" class="creampretab4"><span id="structDeclaration" class="opacity00">struct list {
  int info;
  struct list *next;
};
typedef struct list *node;
node first = NULL;</span>

<div id ="methodId"></div>
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

var i = 0,temp = 0, lineCount = 0;;
var intro;
var typingInterval = 5;
var arr=[];
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
	
	$("#insertAtBeginBtn").click(function() {
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
		displayDynamicSteps();
	});
	
	$("#insertPositionValBtn1").click(function() {
		if ($("#inputIdField").val() > i) {
			var text = "<span>Please enter the value which is less than the length.</span>";
			$("#introjs-tooltiptext").addClass("red-color-css");
			typing(".introjs-tooltiptext", text, function() {
				
			});
		}	
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
					var text="Let us discuss about single linkedlist."
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
					break;
				case "structDeclaration":
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer ").one('transitionend', function() {
						$("#code").removeClass("opacity00");
						$("#structDeclaration").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							var text = "This is the definition of the new structure  user defined datatype list.";
							typing(".introjs-tooltiptext", text, function() {
								$("#structDeclaration").removeClass("animated zoomIn");
								$('.introjs-nextbutton').show();
							});
						});
					});
					break;
				case "methodId":
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer ").one('transitionend', function() {
						var animateStep = intro._introItems[intro._currentStep].animateStep;
						console.log(animateStep);
						switch(animateStep) {
							case "createMethod" :
								$("#methodId").empty();
								$("#methodId").append('<div class="opacity00" id="createMethodId"><pre>node create(node first) {</br>'
									  + '&emsp;<span id="line1">node temp, q;</span></br>'
									  + '&emsp;<span id="line2">int x;</span></br>'
									  + '&emsp;<span id="line3">printf("enter element:");</span></br>'
									  + '&emsp;<span id="line4">scanf("%d", &amp;x);</span></br>'
									  + '<div id="whileLoop">&emsp;<span id="line5">while (<span id="flipX" class="display-inline-css">x</span> != -1) {</span></br>'
									  + '&emsp;&emsp;<span id="line6">temp = (struct list*)malloc(sizeof(struct list));</span></br>'
									  + '&emsp;&emsp;<span id="line7">temp-&gt;info = x;</span></br>'
									  + '&emsp;&emsp;<span id="line8">temp-&gt;next = NULL;</span></br>'
								      + '<span id = "totalIfId">&emsp;&emsp;<span id="line9" class="ifClass">if (<span class="display-inline-css" id="flipFirst">first</span> == NULL)</span> {</br>'
								      + '&emsp;&emsp;&emsp;<span id="line10" class="ifClass">first = temp;</span></br>'
								      + '&emsp;&emsp;<span id="line11"><span class="ifClass">}</span> <span class="elseClass">else {</span></span></br>'
								      + '&emsp;&emsp;&emsp;<span id="line12" class="elseClass">q-&gt;next = temp;</span></br>'
								      + '&emsp;&emsp;<span id="line13" class="elseClass">}</span></span></br>'
								      + '&emsp;&emsp;<span id="line14">q = temp;</span></br>'
								      + '&emsp;&emsp;<span id="line15">printf("enter element:");</span></br>'
								      + '&emsp;&emsp;<span id="line16">scanf("%d", &amp;x);</span></br>'
								      + '<span id="line17">&emsp;}</span></div>'
								      + '&emsp;<span id="line18">return first;</span></br>'
								      + '<span id="line19">}</span></pre></div>');
								
								/* intro.refresh();
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
								}); */
								intro.refresh();
								$(".input-btn").remove();
								$("#formId").append('<button type="button" id="inputBtn" class="btn btn-success btn-sm input-btn">create</button>');
								$("#inputId").addClass("insert-text-class");
								TweenMax.to($("#createMethodId"), 1, {opacity: 1, onComplete: function() {
									if (i != 0) {
										i = 0;
										$("#firstDiv").text("NULL");
										$(".svg-line").fadeOut(1000);
										$("#xBox, #tempDiv, #lastDiv").text("");
										$(".node").fadeOut(1000, function(){
											$(".node, .svg-line").remove();
											
										});
									}
									$("#totalElementsDiv, #ElementsDiv, #xEqual, #xBox, #q, #lastDiv,#temp, #tempDiv, #totalFirstDiv").removeClass("opacity00");
									var text = "This is the code to create a node dynamically.";
									typing(".introjs-tooltiptext", text, function() {
										$('.introjs-nextbutton').show();
									});
								}});
							break;
							case "insertAtBeginMethodId" :
								console.log("fddf");
								$("#methodId").empty();
								$("#methodId").append('<div class="opacity00" id="insertAtBeginMethodId"><pre>node insertAtBegin(node first) {<br/>' +
										  '&emsp;<span id="line1">node temp;</span><br/>' +
										  '&emsp;<span id="line2">int x;</span><br/>' +
										  '&emsp;<span id="line3">temp = (node)malloc(sizeof(struct list));</span><br/>' +
										  '&emsp;<span id="line4">printf(&quot;enter a value:&quot;);</span><br/>' +
										  '&emsp;<span id="line5">scanf("%d", &amp;x);</span><br/>' +
										  '&emsp;<span id="line6">temp-&gt;info = x;</span><br/>' +
										  '&emsp;<span id="line7">temp-&gt;next = first;</span><br/>' +
										  '&emsp;<span id="line8">first = temp;</span><br/>' +
										  '&emsp;<span id="line9">return first;</span><br/>' +
										'<span id="line10">}</span><br/>' +
										'</pre></div>');
								intro.refresh();
								$("#innerHeading").html("<b>Insert at begin :</b>");
								$("#EnterTextSpan").text("enter a value :");
								$(".input-btn").remove();
								$("#formId").append('<button type="button" id="inputBtn1" class="btn btn-success btn-sm input-btn">insert</button>');
								$("#xEqual, #xBox").removeClass("opacity00");
								$("#temp").text("temp =");
								$("#tempDiv, #xBox").text("");
								$("#q, #ElementsDiv").addClass('opacity00');
								intro.refresh();
								TweenMax.to($("#insertAtBeginMethodId"), 1, {opacity: 1, onComplete: function() {
									$("#totalElementsDiv, #ElementsDiv, #totalFirstDiv").removeClass("opacity00");
									var text = "This is the code to insert a node dynamically at begining of the linkedlist.";
									typing(".introjs-tooltiptext", text, function() {
										$("#inputBtn1").click(function() {
											console.log("i am in insert button");
											$("#xBox").text($("#inputIdField").val());
											$('.introjs-nextbutton').click();
										});
										$("#insertAtBeginMethodId").addClass("z-index-class");
										$('.introjs-nextbutton').show();
									});
								}});
								break;
							case "insertAtPositionMethodId":
								$("#methodId").empty();
								$("#methodId").append('<div class="opacity00" id="insertAtPositionMethodId"><pre>node insertAtPosition(node first, int pos) {</br>'
									+ '&emsp;<span id="line1">node temp, q = first;</span></br>'
									+ '&emsp;<span id="line2">int x;</span></br>'
									+ '&emsp;<span id="line3">for (int i = 1; i < pos-1; i++) {</span></br>'
									+ '&emsp;&emsp;<span id="line4">if (q == NULL) {</span></br>'
									+ '&emsp;&emsp;&emsp;<span id="line5">printf("no such position");</span></br>'
									+ '&emsp;&emsp;&emsp;<span id="line6">return first;</span></br>'
									+ '&emsp;&emsp;<span id="line7">}</span></br>'
									+ '&emsp;&emsp;<span id="line8">q = q->next;</span></br>'
									+ '&emsp;<span id="line9">}</span></br>'
									+ '&emsp;<span id="line10">if (pos == 1) {</span></br>'
									+ '&emsp;&emsp;<span id="line11">first = insertAtBegin(first);</span></br>'
									+ '&emsp;<span id="line12">} else {</span></br>'
									+ '&emsp;&emsp;<span id="line13">temp = (node)malloc(sizeof(struct list));</span></br>'
									+ '&emsp;&emsp;<span id="line14">printf("enter a value:");</span></br>'
									+ '&emsp;&emsp;<span id="line15">scanf("%d", &x);</span></br>'
									+ '&emsp;&emsp;<span id="line16">temp->info = x;</span></br>'
									+ '&emsp;&emsp;<span id="line17">temp->next = q->next;</span></br>'
									+ '&emsp;&emsp;<span id="line18">q->next = temp;</span></br>'
									+ '&emsp;<span id="line19">}</span></br>'
									+ '&emsp;<span id="line20">return first;</span></br>'
									+ '<span id="line21">}</span></pre></div>');
								intro.refresh();
								TweenMax.to($("#insertAtPositionMethodId"), 1, {opacity: 1, onComplete: function() {
									$("#insertAtPositionMethodId").addClass("z-index-class");
									var text = "This is the code to insert a node dynamically at the given position.";
									typing(".introjs-tooltiptext", text, function() {
										$("#q").removeClass("opacity00");
										$('.introjs-nextbutton').show();
									});
								}});
								break;
							case "insertAtEndMethodId":
								$("#methodId").empty();
								//intro.refresh();
								$("#methodId").append('<div class="opacity00" id="insertAtEndMethodId"><pre>node insertAtEnd(node first) {<br/>' +
									'&emsp;&emsp;<span id="line1">node temp, q = first;</span><br/>' +
									'&emsp;&emsp;<span id="line2">int x;</span><br/>' +
									'&emsp;&emsp;<span id="line3">if(q == NULL) {</span><br/>' +
									'&emsp;&emsp;&emsp;&emsp;<span id="line4">first = insertAtBegin(first);</span><br/>' +
									'&emsp;&emsp;<span id="line5">} else {</span><br/>' +
									'&emsp;&emsp;&emsp;&emsp;<span id="line6">while(q->next != NULL) {</span><br/>' +
									'&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span id="line7">q = q->next;</span><br/>' +
									'<span>&emsp;&emsp;&emsp;&emsp;}</span><br/>' +
									'&emsp;&emsp;&emsp;&emsp;<span id="line8">temp = (node)malloc(sizeof(struct list));</span><br/>' +
									'&emsp;&emsp;&emsp;&emsp;<span id="line9">printf("enter a value:");</span><br/>' +
									'&emsp;&emsp;&emsp;&emsp;<span id="line10">scanf("%d", &x);</span><br/>' +
									'&emsp;&emsp;&emsp;&emsp;<span id="line11">temp->info = x;</span><br/>' +
									'&emsp;&emsp;&emsp;&emsp;<span id="line12">temp->next = NULL;</span><br/>' +
									'&emsp;&emsp;&emsp;&emsp;<span id="line13">q->next = temp;</span><br/>' +
									'&emsp;&emsp;<span id="line14">}</span><br/>' +
									'&emsp;&emsp;<span id="line15">return first;</span><br/>' +
									'<span id="line16">}</span><br/>' +
								'</pre></div>');
								intro.refresh();
								$("#EnterTextSpan").text("enter a value :");
								$(".input-btn").remove();
								$("#formId").append('<button type="button" id="inputBtn2" class="btn btn-success btn-sm input-btn">insertEnd</button>');
								$("#q").removeClass('opacity00');
								$("#lastDiv, #xBox, #tempDiv").text("");
								intro.refresh();
								TweenMax.to($("#insertAtEndMethodId"), 1, {opacity: 1, onComplete: function() {
									$("#totalElementsDiv").removeClass("opacity00");
									var text = "This is the code to insert a node dynamically at the end of the linked list.";
									typing(".introjs-tooltiptext", text, function() {
										$("#insertAtEndMethodId").addClass("z-index-class");
										$('.introjs-nextbutton').show(); 
									});
								}});
								
								break;
							case "deleteAtBeginMethodId":
								$("#methodId").empty();
								//intro.refresh();
								$("#methodId").append('<div class="" id="deleteAtBeginMethodId"><pre>node deleteAtBegin(node first) {<br/>'
									+ '&emsp;<span id="line1">node <span id="line1AssignValue">temp = first;</span></span><br/>'
									+ '&emsp;<span id="line2">if(temp == NULL) {</span><br/>'
									+ '&emsp;&emsp;&emsp;<span id="line3">printf("list is empty");</span><br/>'
									+ '&emsp;<span id="line4">} else {</span><br/>' 
									+ '&emsp;&emsp;&emsp;<span id="line5">first = <span style="display: inline-block">first->next</span>;</span><br/>'
									+ '&emsp;&emsp;&emsp;<span id="line6">free(temp);</span><br/>'
									+ '&emsp;<span id="line7">}</span><br/>'
									+ '&emsp;<span id="line8">return first;</span></br>'
									+ '<span id="line9">}</span></pre></div>');
								intro.refresh();
								$("#ElementsDiv").hide();
								$("#temp").text("temp = ");
								$("#xBox, #xEqual, #q").addClass("opacity00");
								$("#deleteAtBeginMethodId").addClass("z-index-class");
								var text = "This is the code to delete the begining node of the linked list.";
								typing(".introjs-tooltiptext", text, function() {
									$('.introjs-nextbutton').show();
								});
								break;
								
							case "deleteAtPositionMethodId":
								$("#methodId").empty();
								$("#methodId").append('<div class="opacity00" id="deleteAtPositionMethodId"><pre class="creampretab4">node deleteAtPosition(node first, int pos) {\n'
										+ '&emsp;<span id="line1">node p, q = first;</span>\n'
										+ '&emsp;<span id="line2">if(q == NULL) {</span>\n'
										+ '&emsp;&emsp;<span id="line3">printf("list is empty");</span>\n'
										+ '&emsp;<span id="line4">} </span>'
										+ '&emsp;<span id="line5">else if(pos == 1) {</span>\n'
										+ '&emsp;&emsp;<span id="line6">first = deleteAtBegin(q);</span>\n'
										+ '&emsp;<span id="line7">} else {</span>\n'
										+ '&emsp;&emsp;<span id="line8">for(int i = 1; i < pos; i++) {</span>\n'
										+ '&emsp;&emsp;&emsp;<span id="line9">if(q == NULL) {</span>\n'
										+ '&emsp;&emsp;&emsp;&emsp;<span id="line10">printf("no such position");</span>\n'
										+ '&emsp;&emsp;&emsp;&emsp;<span id="line11">return first;</span>\n'
										+ '&emsp;&emsp;&emsp;<span id="line12">}</span>\n'
										+ '&emsp;&emsp;&emsp;<span id="line13">p = q;</span>\n'
										+ '&emsp;&emsp;&emsp;<span id="line14">q = q->next;</span>\n'
										+ '&emsp;&emsp;<span id="line15">}</span>\n'
										+ '&emsp;&emsp;<span id="line16">p->next = q->next;</span>\n'
										+ '&emsp;&emsp;<span id="line17">q->next = NULL;</span>\n'
										+ '&emsp;&emsp;<span id="line18">free(q);</span>\n'
										+ '&emsp;<span id="line19">}</span>\n'
										+ '&emsp;<span id="line20">return first;</span>\n'
									+ '}</pre></div>');
								intro.refresh();
								TweenMax.to($("#deleteAtPositionMethodId"), 1, {opacity: 1, onComplete: function() {
									$("#first").addClass("z-index-class");
									$("#first").removeClass("yellow-color");
									$("#first").effect("highlights", {"color" : "yellow"}, function() {
										$("#first").removeClass("z-index-class");
										$("#first").removeClass("yellow-color");
										var text = "This is the statement used to create the year light statement in the sample code.";
										$("#deleteAtPositionMethodId").addClass("z-index-class");
										var text = "This is the code to delete a node from a particular location from the linked list.";
										typing(".introjs-tooltiptext", text, function() {
											$('.introjs-nextbutton').show();
										});
									});
								}});
								break;
								
							case "deleteAtEndMethodId":
								$("#methodId").empty();
								//intro.refresh();
								$("#methodId").append('<div class="opacity00" id="deleteAtEndMethodId"><pre>node deleteAtEnd(node first) {<br/>' 
										+ '&emsp;<span id="line1">node p, q = first;</span><br/>' 
										+ '&emsp;<span id="line2">if (q == NULL) {</span><br/>' 
										+ '&emsp;&emsp;<span id="line3">return NULL;</span><br/>'
										+ '&emsp;<span id="line4">} else if (q->next == NULL) {</span><br/>'
										+ '&emsp;&emsp;<span id="line5">first=delbegin(q);</span><br/>' 
										+ '&emsp;<span id="line6">} else {</span><br/>'
										+ '&emsp;&emsp;<span id="line7">while (q->next != NULL) {</span><br/>' 
										+ '&emsp;&emsp;&emsp;<span id="line8">p = <span style="display: inline-block">q</span>;</span><br/>' 
										+ '&emsp;&emsp;&emsp;<span id="line9">q = <span style="display: inline-block">q->next</span>;</span><br/>' 
										+ '&emsp;&emsp;<span id="line10">}</span><br/>' 
										+ '&emsp;&emsp;<span id="line11">p->next = NULL;</span><br/>' 
										+ '&emsp;&emsp;<span id="line12">free(q);</span><br/>' 
										+ '&emsp;&emsp;<span id="line13">}</span><br/>' 
										+ '&emsp;<span id="line14">return first;</span><br/>' 
										+ '<span id="line15">}</span> </pre></div>');
									intro.refresh();
									$("#ElementsDiv").hide();
									$("#temp").text("p = ");
									$("#q, #lastDiv").removeClass("opacity00");
									$("#xBox #xEqual").addClass("opacity00");
									$("#deleteAtEndMethodId").addClass("z-index-class");
									TweenMax.to($("#deleteAtEndMethodId"), 1, {opacity: 1, onComplete: function() {
										var text = "This is the code to delete a node from the end of the linked list.";
										typing(".introjs-tooltiptext", text, function() {
											$('.introjs-nextbutton').show();
										});
									}});
									break;
									
							case "displayMethodId":
								$("#methodId").empty();
								$("#methodId").append('<div class="opacity00" id="displayMethodId"><pre>void display(node first) {<br/>'
									 + '&emsp;<span id="line1">node q = first;</span><br/>'
									 + '&emsp;<span id="line2">if(first == NULL) {</span><br/>'
									 + '&emsp;&emsp;<span id="line3">printf("empty");</span><br/>'
									 + '&emsp;<span id="line4">} else {</span><br/>'
									 + '&emsp;&emsp;<span id="line5">printf("The elements in list r:");</span><br/>'
									 + '&emsp;&emsp;<span id="line6">while(q != NULL) {</span><br/>'
									 + '&emsp;&emsp;&emsp;<span id="line7">printf("%d--->",q->info);</span><br/>'
									 + '&emsp;&emsp;&emsp;<span id="line8">q = q->next;</span><br/>'
									 + '&emsp;&emsp;<span id="line9">}</span><br/>'
									 + '&emsp;&emsp;<span id="line10">printf("NULL");</span><br/>'
									 + '&emsp;<span id="line11">}</span><br/>'
									 + '<span id="line12">}</span></pre></div>');
									 intro.refresh();
									TweenMax.to($("#displayMethodId"), 1, {opacity: 1, onComplete: function() {
										var text = "This is the code to display the elements of the linked list.";
										typing(".introjs-tooltiptext", text, function() {
											$("#totalElementsDiv").removeClass("opacity00");
											$("#displayMethodId").addClass("z-index-class");
											$("#consoleBodyDiv").html("");
											$('.introjs-nextbutton').show();
										});
									}});
								break;
						}
					});
					break;
				case "whileLoop":
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer ").one('transitionend', function() {
						if ($("#whileLoop").hasClass("zIndex")) {
							$("#whileLoop").removeClass("z-index-class");	
							intro.nextStep();
						} else {
							$("#whileLoop").addClass("z-index-class");
							var text = ".";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						}
					});
					break;
				case "animationDiv":
					$('.introjs-nextbutton').hide();
					intro.refresh();
					$("#animationDiv").removeClass("opacity00");
					$(".introjs-helperLayer").one('transitionend', function() {
						var ramdomAddress = getRandomInt(1000, 5000);
						var animateStep = intro._introItems[intro._currentStep].animateStep;
						switch(animateStep) {
							case "createAnimation" :
								if ($("#inputIdField").val() != -1) {
									var ramdomAddress = getRandomInt(1000, 5000);
									$("#dynamicNodesDiv").append('<div class="col-xs-2 node opacity00" id="node' + i +'" style="top: 0px; width: auto;">' +
										 	'<div class="col-xs-12" style="padding: 0px;">' +
									 		'<div class="col-xs-6 no-border left-radius">info</div>' +
												'<div class="no-border right-radius">next</div>' +
											'</div>' +
											'<div>' +
												'<div class="div-border left-radius col-xs-6 info-div" id="infoDiv' + i +'"><span class="visibility-hidden info-span" id="info' + i +'" style="top: 0px; left: 0px;">0</span></div>' +
												'<div class="div-border right-radius col-xs-6 next-div" id="nextDiv' + i +'"><span class="visibility-hidden next-span" id="next' + i +'">0</span></div>' +
											'</div>' +
											'<div class="col-xs-12" style="padding: 0px;">' +
												'<div class="col-xs-6 no-border left-radius"><span class="info-address" id="infoAddress' + i +'" style="">' + ramdomAddress + '</span></div>' +
												'<div class="col-xs-6 no-border right-radius">' + (ramdomAddress + 2) + '</div>' +
											'</div>' +
										'</div>');
									intro.refresh();
									var text = "<span id='createTooltiptext'></span>";
									typing(".introjs-tooltiptext", text, function() {
										$("#createTooltiptext").addClass("yellow-color");
										fromEffect("#createTooltiptext", "#whileLoop", function() {
											$("#whileLoop").removeClass("z-index-class");
											$("#createTooltiptext #line5").effect( "highlight",{color: 'yellow'}, 1000 ,function() {
												$("#infoAddress" + i).effect("highlight",{color: 'yellow'}, 1000, function() {
													flipEffect("#createTooltiptext #flipX", $("#xBox").text(), function() {
														if ($("#xBox").text() != -1) {
															$("#createTooltiptext #line6").effect("highlight", {"color" : "yellow"}, function() {
																$("#node" + i).removeClass("opacity00");
																TweenMax.from($("#node" + i), 1, {top : -100, onComplete:function() {
																	$("#tempDiv").addClass("z-index-class");
																	fromEffectWithOnlyText("#tempDiv", "#infoAddress" + i, function() {
																		$("#tempDiv").removeClass("z-index-class");
																		$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'xvalueAndNull();'>Next &#8594;</a>");
																	});
																}});
															});
														}
													});
												});
											});
										});
									});
								}
							break;
							case "insertAtBeginAnimation":
								console.log("insert at begin");
								var ramdomAddress = getRandomInt(1000, 5000);
								var text = '<span class="yellow-color" id="insertBeginStmts"></span><span id="insertBeginStmtsText"></span>';
								typing(".introjs-tooltiptext", text, function() {
									console.log("insert at begin line 3");
									$("#line3").effect("highlight",{color : 'yellow'}, 1500, function() {
										fromEffect("#insertBeginStmts", "#line3", function() {
											var text1 = "<ul><li>This statement is used to allocate memory.</li></ul>";
											typing("#insertBeginStmtsText", text1, function() {
												if (i >= 1) {
													console.log("insert at begin line if1");
													$('#dynamicNodesDiv > div').each(function(index) {
														arr[index] = $(this).offset();
													});
													changeIds();
												}
												var x = '<div class="col-xs-2 opacity00 node" id="node' + i + '"  style="top: 0px; width: auto; left: 2px;">' 
												+ '<div class="col-xs-12" style="padding: 0px;">' 
												+ '<div class="col-xs-6 no-border left-radius">info</div>' 
												+ '<div class="no-border right-radius">next</div>' 
												+ '</div><div><div class="div-border left-radius col-xs-6 info-div" id="infoDiv' + i + '">' 
												+ '<span class="visibility-hidden info-span" id="info' + i + '" style="top: 0px; left: 0px;">0</span></div>' 
												+ '<div class="div-border right-radius col-xs-6 next-div" id="nextDiv' + i + '">' 
													+ '<span class="visibility-hidden next-span" id="next' + i + '" style="top: 0px; left: 0px;">0</span></div></div>' 
												+ '<div class="col-xs-12" style="padding: 0px;"><div class="col-xs-6 no-border left-radius">' 
												+ '<span class="info-address" id="infoAddress' + i + '" style="">' + ramdomAddress + '</span></div>' 
												+ '<div class="col-xs-6 no-border right-radius">' + (ramdomAddress + 2) + '</div>' 
												+ '</div></div>';
												
												if (i == 0) {
													console.log("insert at begin line 2");
													$("#dynamicNodesDiv").append(x);
													//svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#first", "#infoDiv" + i, "#svgId", "lines" + lineCount, "arrow");
												} else if (i >= 1) {
													$('#node0').before(x);
													console.log("i>=1");
													if (i == 1) {
														console.log("i == 1");
														//svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#first", "#infoDiv" + i, "#svgId", "lines" + lineCount, "arrow");
													} else {
														console.log("i == 1 in else");
														svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#nextDiv" + (i - 2), "#infoDiv" + (i - 1), "#svgId", "lines" + lineCount, "arrow");
														lineCount++;
													}
												}
												changeIds();
												movingBoxes(1)
											});
										});
									});
								});
							break;
							case "insertAtBeginRemainingAnimation":
								$("#line6").effect( "highlight",{color: 'yellow'}, 1000 ,function() {
									var text = "<span class='yellow-color' id='insertBeginLine6Code'></span>";
									typing(".introjs-tooltiptext", text, function() {
										fromEffectWithOnlyText("#insertBeginLine6Code", "#line6", function() {
											$("#info0").removeClass("visibility-hidden");
											$("#info0").addClass("z-index-tranfer yellow-color");
											fromEffectWithOnlyText("#info0", "#xBox", function() {
												$("#info0").removeClass("z-index-tranfer yellow-color");
												$("#line7").effect( "highlight",{color: 'yellow'}, 1000 ,function() {
													fromEffectWithOnlyText("#insertBeginLine6Code", "#line7", function() {
														$("#next0").removeClass("visibility-hidden");
											    		$("#next0").addClass("z-index-tranfer yellow-color");
														fromEffectWithOnlyText("#next0", "#firstDiv", function() {
															$("#next0").removeClass("z-index-tranfer yellow-color");
															console.log("i value before lines -----" + i);
															if (i >= 1) {
																//svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#first", "#infoDiv0", "#svgId", "lines" + i, "arrow");
																svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#nextDiv0","#infoDiv1",  "#svgId", "lines" + lineCount, "arrow");
																lineCount++;
															}
															$("#line8").effect( "highlight",{color: 'yellow'}, 1000 ,function() {
																fromEffectWithOnlyText("#insertBeginLine6Code", "#line8", function() {
																	$("#firstDiv").addClass("z-index-tranfer yellow-color");
																	fromEffectWithOnlyText("#firstDiv", "#tempDiv", function() {
																		$("#firstDiv").removeClass("z-index-tranfer yellow-color");
																		if (i == 0) {
																			svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#first", "#infoDiv" + i, "#svgId", "lines" + lineCount, "arrow");
																			lineCount++;
																		} else if (i == 1) {
																			svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#first", "#infoDiv0", "#svgId", "lines" + lineCount, "arrow");
																			//svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#nextDiv" + i, "#infoDiv" + (i-1), "#svgId", "lines" + lineCount, "arrow");
																			lineCount++;
																		} else if (i > 1) {
																			//svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#nextDiv" + (i-2), "#infoDiv" + (i-1), "#svgId", "lines" + i, "arrow");
																			svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#first", "#infoDiv0", "#svgId", "lines" + lineCount, "arrow");
																		}
																		$("#line9").effect( "highlight",{color: 'yellow'}, 1000 ,function() {
																			fromEffectWithOnlyText("#insertBeginLine6Code", "#line9", function() {
																				i++;
																				changeIds();
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
									});
								});
							break;
							
							
						
							case "deleteAtEndAnimation":
								$("#line1").effect("highlight",{color: 'yellow'}, 1500,function() {
									$("#totalElementsDiv").removeClass('opacity00');
									$("#totalFirstDiv").removeClass('opacity00');
									var l1= $("#firstDiv").offset();
									$("#tempDiv").text($("#firstDiv").text()).offset({
									  "top":l1.top,
									  "left":l1.left
									});
									TweenMax.to("#tempDiv",1,{top:0,left:0, onComplete:function() {
										var text = "<span id='line2IfId'></span><br><span id='line4elseIfId'></span><br><span id='line6elseId'></span><br><span id='line7WhileId'></span><br/><span id='pqTooltipId'></span><br/><span id='qNextTooltipId'></span>";
										typing(".introjs-tooltiptext", text, function() {
											var l1= $("#line2").offset();
											$("#line2IfId").text($("#line2").text()).offset({
												"top":l1.top,
												"left":l1.left
											});
											$("#line2IfId").addClass("yellow-color");
											TweenMax.to("#line2IfId",1,{top:0,left:0, onComplete:function() {
												if ($("#dynamicNodesDiv > div").length == 0) {
													//error
													var text = "<span class='yellow-color'>true</span><br/><span class='ct-code-b-red'>There is no node to delete, please insert node to delete.</span>"
													typing(".introjs-tooltiptext", text, function() {
														$('.introjs-nextbutton').show();	
													});
												} else if (($("#dynamicNodesDiv > div").length == 1)) {
													//tooltip
													$("#line2IfId").append('<span class="yellow-color">false</span>');
														var l1= $("#line4").offset();
														$("#line4elseIfId").text($("#line4").text()).offset({
															"top":l1.top,
															"left":l1.left
														});
														$("#line4elseIfId").addClass("yellow-color");
														TweenMax.to("#line4elseIfId",1,{top:0,left:0, onComplete:function() {
															i--;
															deleteAtBeginAnimation();
														}})
												} else {
													//in else case
													$("#line2IfId").append('<span class="yellow-color">false</span>');
													var l1= $("#line4").offset();
													$("#line4elseIfId").text($("#line4").text()).offset({
														"top":l1.top,
														"left":l1.left
													});
													$("#line4elseIfId").addClass("yellow-color");
													TweenMax.to("#line4elseIfId",1,{top:0,left:0, onComplete:function() {
														$("#line4elseIfId").append("<span class='yellow-color'>false</span>");
														var text = "<span class='yellow-color'>In else case,</span>";
														typing("#line6elseId", text, function() {
															i--;
															deleteAtEndAnimation(0);
														});
													}});
												}
											}});
										});
									}});
								});
								break;
							case "deleteAtBeginAnimation":
								$("#line1").effect("highlight",{color: 'yellow'}, 2000 ,function() {
									var text = "<span id='delAtBeginLine1'></span>";
									typing(".introjs-tooltiptext", text, function() {
									//	$("#line5").effect("highlight",{color: 'yellow'}, 2000 ,function() {
											var l1= $("#line1").offset();
											$("#delAtBeginLine1").text($("#line1").text()).offset({
												"top":l1.top,
												"left":l1.left
											});
											$("#delAtBeginLine1").addClass("yellow-color");
											TweenMax.to("#delAtBeginLine1",1,{top:0,left:0, onComplete: function() {
												$("#totalElementsDiv").removeClass("opacity00");
												$("#line1AssignValue").effect("highlight",{color: 'yellow'}, 1500 ,function() {
													$("#firstDiv").effect("highlight",{color: 'yellow'}, 1500 ,function() {
														var l1= $("#firstDiv").offset();
														$("#tempDiv").text($("#firstDiv").text()).offset({
															"top":l1.top,
															"left":l1.left
														});
														$("#tempDiv").addClass("z-index-tranfer yellow-color");
														TweenMax.to("#tempDiv",1,{top:0,left:0, onComplete:function() {
															$("#tempDiv").removeClass("z-index-tranfer yellow-color");
															$("#line2").effect("highlight",{color: 'yellow'}, 2000 ,function() {
																var text = "<span id='tooltipIfCondition'></span>";
																typing(".introjs-tooltiptext", text, function() {
																	var l1= $("#line2").offset();
																	$("#tooltipIfCondition").text($("#line2").text()).offset({
																		"top":l1.top,
																		"left":l1.left
																	});
																	$("#tooltipIfCondition").addClass("yellow-color");
																	TweenMax.to("#tooltipIfCondition",1,{top:0,left:0, onComplete: function() {
																		if ($("#firstDiv").text() == "NULL") {
																			$("#line3").effect("highlight",{color: 'yellow'}, 2000 ,function() {
																				var text = "list is empty";
																				typing(".introjs-tooltiptext", text, function() {
																					$("#line8").effect("highlight",{color: 'yellow'}, 2000 ,function() {
																						$('.introjs-nextbutton').show();
																					});
																				});
																			});
																		} else {
																			$("#line4").effect("highlight",{color: 'yellow'}, 2000 ,function() {
																				var text = "<span class='yellow-color'>In else case</span><br><span id='elseCondition'></span>";
																				typing(".introjs-tooltiptext", text, function() {
																					$("#line5").effect("highlight",{color: 'yellow'}, 2000 ,function() {
																						var l1= $("#line5").offset();
																						$("#elseCondition").text($("#line5").text()).offset({
																							"top":l1.top,
																							"left":l1.left
																						});
																						$("#elseCondition").addClass("yellow-color");
																						TweenMax.to("#elseCondition",1,{top:0,left:0, onComplete: function() {
																							flipEffect("#elseCondition span", $("#infoAddress1").text() , function() {
																								$("#infoAddress1").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
																									var l1= $("#infoAddress1").offset();
																									$("#firstDiv").text($("#infoAddress1").text()).offset({
																										"top":l1.top,
																										"left":l1.left
																									});
																									$("#firstDiv").addClass("z-index-tranfer yellow-color");
																									TweenMax.to("#firstDiv",1,{top:0,left:0, onComplete:function() {
																										$("#firstDiv").removeClass("z-index-tranfer yellow-color");
																										$("#line6").effect("highlight",{color: 'yellow'}, 2000 ,function() {
																											var l1= $("#line6").offset();
																											$("#elseCondition").text($("#line6").text()).offset({
																												"top":l1.top,
																												"left":l1.left
																											});
																											$("#elseCondition").addClass("yellow-color");
																											TweenMax.to("#elseCondition",1,{top:0,left:0, onComplete: function() {
																												TweenLite.to("#dynamicNodesDiv > div:first-child", 1, {top: -100,opacity : 0, onComplete:function() {
																													$("#svgId > line:last-child").fadeOut(1000, function() {
																														var marginRight = $("#dynamicNodesDiv > div:first-child").outerWidth();
																														TweenMax.to($("#dynamicNodesDiv > div:nth-child(1)"), 1, {marginRight: '-=' + marginRight,onComplete: function() {
																															$("#svgId > line:last-child").remove();
																															$("#dynamicNodesDiv > div:first-child").remove();
																															$("#line8").effect("highlight",{color: 'yellow'}, 2000 ,function() {
																																changeIds();
																																i--;
																																$('.introjs-nextbutton').show();
																															});
																														}});
																													});
																												}});
																											}});
																										});
																									}});
																								});
																							});
																						}});
																					});
																				});
																			});
																		}
																	}});
																});
															});
														}});
													});
												});
											}});
									//	});
									});
								});
								break;
							case "deleteAtPositionAnimation":
								console.log("animation7 start");
								$("#temp").text("p = ");
								$("#q, #temp, #tempDiv").removeClass("opacity00");
								$("#xEqual, #xBox").addClass("opacity00");
								$("#line1").effect("highlight",{color: 'yellow'}, 1500,function() {
									var text = "<span id='delAtPosLine1'></span>";
									typing(".introjs-tooltiptext", text, function() {
										var l1= $("#line1").offset();
									  	$("#delAtPosLine1").text($("#line1").text()).offset({
									    	"top":l1.top,
									    	"left":l1.left
									  	});
										$("#delAtPosLine1").addClass("yellow-color");
										TweenMax.to("#delAtPosLine1",1,{top:0,left:0, onComplete:function() {
											$("#ElementsDiv").show();
											$("#totalElementsDiv").removeClass("opacity00");
											var l1= $("#firstDiv").offset();
											$("#lastDiv").text($("#firstDiv").text()).offset({
												"top":l1.top,
												"left":l1.left
											});
											$("#lastDiv").addClass("z-index-tranfer yellow-color");
											TweenMax.to("#lastDiv", 1, {top:0,left:0, onComplete:function() {
												$("#lastDiv").removeClass("z-index-tranfer yellow-color");
												$("#line2").effect("highlight",{color: 'yellow'}, 1500,function() {
													if ($("#lastDiv").text() == "NULL") {
														$("#line3").effect("highlight",{color: 'yellow'}, 1500,function() {
															$("#line20").effect("highlight",{color: 'yellow'}, 1500,function() {
																intro.nextStep();
																console.log("NULL");
															});
														});
													} else if ($("#inputIdField").val() == "1") {
														$("#line6").effect("highlight",{color: 'yellow'}, 1500,function() {
															console.log("position : 1");
															deleteAtBeginDynamicSteps();
														});
													} else if ($("#inputIdField").val() == (i-1)) {
														$("#line7").effect("highlight",{color: 'yellow'}, 1500,function() {
															console.log("position : 1");
															deleteAtEndDynamicSteps();
														});
													} else {
														$("#line5").effect("highlight",{color: 'yellow'}, 1500,function() {
															console.log("animation7 end");
															$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'findingPositionToDelete(1)'>Next &#8594;</a>");
														});
													}
												});
											}});
										}});
									});
								});
								break;
							case "insertAtPositionAnimation":
								$("#line1").effect("highlight",{color: 'yellow'}, 1500,function() {
									$("#xEqual, #xBox").addClass("opacity00");
									$("#totalElementsDiv").removeClass("opacity00");
									$("#line2").effect("highlight",{color: 'yellow'}, 1500,function() {
										$("#xEqual, #xBox").removeClass("opacity00");
										$("#line3").effect("highlight",{color: 'yellow'}, 1500,function() {
											$("#line4").effect("highlight",{color: 'yellow'}, 1500,function() {
												if ($("#lastDiv").text() == "NULL") {
													$("#line5").effect("highlight",{color: 'yellow'}, 1500,function() {
														$("#line6").effect("highlight",{color: 'yellow'}, 1500,function() {
															var count = 0;
															var options = {
																element :'#buttons',
																intro :'',
																position : 'bottom',
															}
															intro.insertOption(intro._currentStep + ++count, options);
														});
													});
												} else {
													findingPositiontoInsert();
												}
											});
										});
									});
								});
								break;
								
							case "insertAtPositionRemainingAnimation":
								pos = $("#inputIdField").val();
								$("#line16").effect("highlight",{color:'yellow'}, 1500,function() {
									var text = "<span id='insertAtPosLine16Code'></span>";
									typing(".introjs-tooltiptext", text, function() {
										var l1= $("#line16").offset();
									  	$("#insertAtPosLine16Code").text($("#line16").text()).offset({
									    	"top":l1.top,
									    	"left":l1.left
									  	});
										$("#insertAtPosLine16Code").addClass("yellow-color");
										TweenMax.to("#insertAtPosLine16Code",1,{top:0,left:0, onComplete:function() {
											$("#info" + positionValue).removeClass("visibility-hidden");
											var l1 = $("#xBox").offset();
											$("#info" + positionValue).text($("#xBox").text()).offset({
												"top" : l1.top,
												"left" : l1.left
											});
											$("#info" + positionValue).addClass("z-index-tranfer yellow-color");
											TweenMax.to("#info" + positionValue, 1, {top : 0,left : 0, onComplete: function() {
												$("#info" + positionValue).removeClass("z-index-tranfer yellow-color");
												$("#line17").effect("highlight", {color:'yellow'}, 1500, function() {
													var l1 = $("#line17").offset();
												  	$("#insertAtPosLine16Code").text($("#line17").text()).offset({
												    	"top":l1.top,
												    	"left":l1.left
												  	});
													$("#insertAtPosLine16Code").addClass("yellow-color");
													TweenMax.to("#insertAtPosLine16Code", 1, {top : 0,left : 0, onComplete: function() {
														$("#next" + positionValue).removeClass("visibility-hidden");
														var l1 = $("#next" + (positionValue - 1)).offset();
														$("#next" + positionValue).text($("#next" + (positionValue - 1)).text()).offset({
															"top" : l1.top,
															"left" : l1.left
														});
														$("#next" + positionValue).addClass("z-index-tranfer yellow-color");
														TweenMax.to("#next" + positionValue,1,{top:0,left:0, onComplete: function() {
															$("#next" + positionValue).removeClass("z-index-tranfer yellow-color");
															$("#line18").effect("highlight",{color:"yellow"},1500,function() {
																var l1 = $("#line18").offset();
															  	$("#insertAtPosLine16Code").text($("#line18").text()).offset({
															    	"top":l1.top,
															    	"left":l1.left
															  	});
																$("#insertAtPosLine16Code").addClass("yellow-color");
																TweenMax.to("#insertAtPosLine16Code",1,{top : 0,left : 0, onComplete: function() {
																	var l1 = $("#infoAddress" + positionValue).offset();
																	$("#next" + (positionValue - 1)).text($("#infoAddress" + positionValue).text()).offset({
																	  "top" : l1.top,
																	  "left" : l1.left
																	});
																	$("#next" + (positionValue - 1)).addClass("z-index-tranfer yellow-color");
																	TweenMax.to("#next" + (positionValue - 1),1,{top:0,left:0, onComplete: function() {
																		$("#next" + (positionValue - 1)).removeClass("z-index-tranfer yellow-color");
																		$("#line20").effect("highlight",{color:"yellow"},1500,function() {
																			$('.introjs-nextbutton').show();
																		});
																	}});
																}});
															});
														}});
													}});
												});
											}});
										}});
									});
								});
								break;
								
							case "displayAnimation":
								$("#line1").effect("highlight",{color:"yellow"},1500,function() {
									var l1= $("#firstDiv").offset();
									$("#lastDiv").text($("#firstDiv").text()).offset({
									  "top":l1.top,
									  "left":l1.left
									});
									TweenMax.to("#lastDiv",1,{top:0,left:0, onComplete:function() {
										$("#line2").effect("highlight",{color:"yellow"},1500,function() {
											if($("#firstDiv").text() == "NULL") {
												$("#line3").effect("highlight",{color:"yellow"},1500,function() {
													$('.introjs-nextbutton').show();
												});
											} else {
												$("#line4").effect("highlight",{color:"yellow"},1500,function() {
													$('.introjs-nextbutton').show();
												});
											}
										});
									}});
								});
								break;
							case "insertAtEndAnimation" :
								$("#line1").effect("highlight", {color: 'yellow'}, 1500, function() {
									var l1 = $("#firstDiv").offset();
									$("#lastDiv").text($("#firstDiv").text()).offset({
									  "top":l1.top,
									  "left":l1.left
									});
									TweenMax.to("#lastDiv",1,{top : 0,left : 0, onComplete : function() {
										$("#line3").effect("highlight",{color: 'yellow'}, 1500, function() {
											//if ($("#first > span").text() == "NULL") {
												if (temp == 0) {
												$("#line4").effect("highlight",{color: 'yellow'}, 1500, function() {
													changeIds();
													i++;
													insertAtBeginDynamicSteps();
													temp = 1;
												});
											} else {
												$("#line5").effect("highlight",{color: 'yellow'}, 1500, function() {
													temp = 0;
													console.log("function");
													animationAfterValue();
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
					$("#whileLoop").addClass("z-index-class");
					$(".introjs-helperLayer ").one('transitionend', function() {
						$("#inputIdField").val("");
						$("#inputIdField").effect( "highlight",{color: 'yellow'}, 500 ,function() {
							$("#inputIdField").focus();
							numbers();
							var animateStep = intro._introItems[intro._currentStep].animateStep;
							console.log(animateStep);
							switch(animateStep) {
								case "createValue":
									console.log("entered----------");
								//	var text = "Enter any value to create or enter <span class='yellow-color'>-1</span> to exit from the loop.";
								//	typing(".introjs-tooltiptext", text, function() {
										 $("#inputBtn").click(function() {
											$("#xBox").text($("#inputIdField").val());
											$("#tempDiv").text("");
											console.log("clicked nextBtn");
											dynamicSteps($("#inputIdField").val());
											//abc();
											$('.introjs-nextbutton').click();
										});
								//	});
									break;
								case "insertAtEndValue" :
									$("#inputBtn2").click(function() {
										$("#xBox").text($("#inputIdField").val());
										//animationAfterValue();
										$('.introjs-nextbutton').click();
									});
									break;
								case "delPositionVal":
									$(".input-btn").remove();
									$("#formId").append('<button type="button" id="inputBtnForDelPos" class="btn btn-success btn-sm input-btn">delete</button>');
									$("#inputBtnForDelPos").click(function() {
										$("#tempDiv").text("");
										console.log("i am in delete at position button");
										$('.introjs-nextbutton').click();
									});
									break;
								case "insertAtPositionVal1":
									$("#EnterTextSpan").text("Enter Position :");
									$(".input-btn").remove();
									$("#formId").append('<button type="button" id="insertPositionValBtn1" class="btn btn-success btn-sm input-btn">insert</button>');
									$("#insertPositionValBtn1").click(function() {
										if ($("#inputIdField").val() <= i) {
											$(".introjs-tooltiptext span").removeClass("red-color-css");
											$(".introjs-tooltiptext span").text("");
											console.log("i am in insert Position Value button");
											$('.introjs-nextbutton').click();
										} /* else {
											var text = "<span>Please enter the value of the position which is less than the length.</span>";
											typing(".introjs-tooltiptext", text, function() {
												$(".introjs-tooltiptext span").addClass("red-color-css");
											});
										} */
									});
									break;
								case "insertAtPositionVal2":
									$("#EnterTextSpan").text("enter a value :");
									$(".input-btn").remove();
									$("#formId").append('<button type="button" id="insertPositionValBtn2" class="btn btn-success btn-sm input-btn">insert</button>');
									$("#insertPositionValBtn2").click(function() {
										$("#xBox").text($("#inputIdField").val());
										console.log("i am in insert at Position element Value button");
										$('.introjs-nextbutton').click();
									});
									break;
							}
							$("#ElementsDiv").show();
							if($("#inputId").hasClass("insert-text-class")) {
								var text = "Enter any value to create or enter <span class='yellow-color'>-1</span> to exit from the loop.";
								typing(".introjs-tooltiptext", text, function() {
								});
							} else {
								var text = "Enter a number.";
								typing(".introjs-tooltiptext", text, function() {
								});
							}
						});
					});
					break;
					
				case "line18":
					$("#whileLoop").removeClass("z-index-class zIndex");
					var text = "loop has terminated.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
					break;
					
				case "outputDiv":
					$('.introjs-nextbutton').hide();
					$("#outputDiv").removeClass("opacity00");
					$("#consoleBodyDiv").append("<span id='displaytitle'></span>");
					if($("#firstDiv").text() == "NULL") {
						$("#displaytitle").text("list is empty...");
						$('.introjs-nextbutton').show();
					} else {
						for(var k =0; k <= i; k++) {
							$("#consoleBodyDiv").append("<span id='displaySpanId" + k + "' class='ct-code-b-lime';></span>");
						}
						$("#displaytitle").text("The elements in the list are:  ");
						$("#line5").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
							display(0);
						});
					}
					break;
					
				case "buttons":
					$('.introjs-nextbutton').hide();
					$('.introjs-helperLayer ').one('transitionend', function() {
						$("#inputId").removeClass("insert-text-class")
						$("#buttons").removeClass("opacity00");
						$("#totalElementsDiv").addClass("opacity00");
						$(".createClass").removeClass('createClass');
						$(".InsertAtEndClass").removeClass('InsertAtEndClass');
						var text = "Choose any button.";
						typing(".introjs-tooltiptext", text, function() {
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
	
	function regenerateArrows() {
		$("line").remove();
		startingLineWithoutReveal("#animationDiv", $("#first"), $("#node0").find(".info-div"), "#svgId", "startLine0", "arrow");
		$.each($("#dynamicNodesDiv > div:not(:last)"), function(index, val) {
			rightToLeftArrowWithoutReveal("#animationDiv", $(this).find(".next-div"), $(this).next().find(".info-div"), "#svgId", "rightLines" + (index + 1), "arrow");
			//leftToRightArrowWithoutReveal("#animationDiv", $(this).next().find(".prev-div"), $(this).find(".next-div"), "#svgId", "leftLines" + (index + 1), "arrow"); 
		});
	}
		
	function rightToLeftArrowWithoutReveal(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
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

	/* function leftToRightArrowWithoutReveal(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
		var parentOffset = $(parentSelector).offset();
		var x1 = $(selector1).offset().left - parentOffset.left;
		var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() * 2 / 3;
		var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
		var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() * 2 / 3;
		svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2);
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	} */
	
	
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
				animateStep: "createAnimation"
			}
			intro.insertOption(intro._currentStep + ++count, options);
			
			var options = {
				element :'#inputId',
				intro :'',
				position : 'right'
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
				intro : ""
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
			animateStep: "insertAtBeginAnimation"
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
			animateStep: "insertAtBeginRemainingAnimation"
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
			animateStep: "insertAtPositionAnimation"
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
			animateStep: "insertAtPositionRemainingAnimation"
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
			animateStep: "insertAtEndAnimation"
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
			animateStep: "insertAtEndAnimation"
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
			animateStep: "deleteAtBeginAnimation"
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
			animateStep: "deleteAtPositionAnimation"
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
			animateStep: "deleteAtEndAnimation"
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
	
	function displayDynamicSteps() {
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
			animateStep: "displayAnimation"
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
	
	function movingBoxes(index) {
		//$(".nextButton").remove();
		if (index < $('#dynamicNodesDiv > div').length) {
			var selector2 = '#node' + index;
			fromEffectWithTweenMaxX(index, selector2, function() {
			});
			movingBoxes(++index);
		} else {
			console.log("boxes else");
			$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' " 
					+ "onclick = 'insertingElementAtBegining();'>Next &#8594;</a>");
		}
	}
	
	function xvalueAndNull() {
		$(".nextButton").remove();
		$("#createTooltiptext #line7").effect("highlight", {"color" : "yellow"}, function() {
			$("#info" + i).addClass("z-index-tranfer yellow-color");
			$("#info" + i).removeClass("visibility-hidden");
			fromEffectWithOnlyText("#info" + i, "#xBox", function() {
				$("#info" + i).removeClass("z-index-tranfer yellow-color");
				$("#createTooltiptext #line8").effect("highlight", {"color" : "yellow"}, function() {
					$("#next" + i).text("NULL").removeClass("visibility-hidden");
					$("#next" + i).effect("highlight", {"color" : "yellow"}, function() {
						$("#createTooltiptext #line9").effect("highlight", {"color" : "yellow"}, function() {
							flipEffect("#createTooltiptext #flipFirst", $("#firstDiv").text(), function() {
								if ($("#firstDiv").text() == "NULL") {
									$("#createTooltiptext .elseClass").addClass("white-color");
									$("#createTooltiptext #line10").effect("highlight", {"color" : "yellow"}, function() {
										fromEffectWithOnlyText("#firstDiv","#tempDiv", function() {
											svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#first", "#infoDiv" + i, "#svgId", "lines" + i, "arrow", function() {
												$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'CreateStatementsAfterIfCond();'>Next &#8594;</a>");
											});
										});
									});
								} else {
									$("#createTooltiptext .ifClass").addClass("white-color");
									$("#createTooltiptext #line11").effect("highlight", {"color" : "yellow"}, function() {
										$("#createTooltiptext #line12").effect("highlight", {"color" : "yellow"}, function() {
											fromEffectWithOnlyText("#next" + (i - 1), "#tempDiv", function() {
												svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#nextDiv" + (i - 1), "#infoDiv" + i, "#svgId", "lines" + i, "arrow", function() {
													$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'CreateStatementsAfterIfCond();'>Next &#8594;</a>");
												});
											});
										});
									});
								}
							});
						});
					});
				});
			});
		});
	}
	
	function CreateStatementsAfterIfCond() {
		$(".nextButton").remove();
		$("#createTooltiptext #line14").effect("highlight", {"color" : "yellow"}, function() {
			$("#info" + i).addClass("z-index-tranfer yellow-color");
			fromEffectWithOnlyText("#lastDiv", "#tempDiv", function() {
				$("#info" + i).removeClass("z-index-tranfer yellow-color");
				$("#createTooltiptext #line15").effect("highlight", {"color" : "yellow"}, function() {
					i++;
					$(".introjs-nextbutton").show();
				});
			});
		});
	}
	
	function deleteAtEndAnimation(j) {
		if (j < ($("#dynamicNodesDiv > div").length-1)) {
		  //while loop tooltip
			var l1 = $("#line7").offset();
			$("#line7WhileId").text($("#line7").text()).offset({
				"top" : l1.top,
				"left" : l1.left
			});
			$("#line7WhileId").addClass("yellow-color");
			TweenMax.to("#line7WhileId", 1, {top : 0, left : 0, onComplete: function() {
		    	$("#line7").effect("highlight", {color: 'yellow'}, 1500, function() {
		      		$("#line8").effect("highlight", {color: 'yellow'}, 1500, function() {
		      			$("#pqTooltipId").text("");
		      			var l1 = $("#line8").offset();
		      			$("#pqTooltipId").append($("#line8").html()).offset({
		      			  "top":l1.top,
		      			  "left":l1.left
		      			});
		      			$("#pqTooltipId").addClass("yellow-color");
		      			TweenMax.to("#pqTooltipId", 1, {top : 0,left : 0, onComplete: function() {
							flipEffect("#pqTooltipId span", $("#lastDiv").text() , function() {
								var l1 = $("#lastDiv").offset();
				    		    $("#tempDiv").text($("#lastDiv").text()).offset({
				          			"top": l1.top,
				          			"left": l1.left
				        		});
				        		TweenMax.to("#tempDiv", 1, {top : 0, left : 0, onComplete: function() {
									$("#qNextTooltipId").text("");
									var l1 = $("#line9").offset();
					      			$("#qNextTooltipId").append($("#line9").html()).offset({
					      				"top" : l1.top,
					      				"left" : l1.left
					      			});
					      			$("#qNextTooltipId").addClass("yellow-color");
					      			TweenMax.to("#qNextTooltipId", 1, {top : 0,left : 0, onComplete: function() {
										flipEffect("#qNextTooltipId span", $("#next" + j).text() , function() {
						           			$("#line9").effect("highlight",{color: 'yellow'}, 1500, function() {
						             			$("#next" + j).effect("highlight",{color: 'blue'}, 1500, function() {
													var l1 = $("#next" + j).offset();
													$("#lastDiv").text($("#next" + j).text()).offset({
														"top" : l1.top,
														"left" : l1.left
													});
													TweenMax.to("#lastDiv", 1, {top : 0, left : 0, onComplete: function() {
														j++;
														deleteAtEndAnimation(j);
													}});
												});
						           			});
										});
					      			}});
								}});
							});
		      			}});
		      		});
		    	});
			}});
		  } else {
			  $("#line11").effect("highlight", {color: 'yellow'}, 1500, function() {
				var len = $("#dynamicNodesDiv > div").length - 1;
				$("#next" + len).text("NULL");
				$("#svgId > line:last-child").fadeOut(1000, function() {
				   	$("#svgId > line:last-child").remove();
					$("#line12").effect("highlight", {color: 'yellow'}, 1500,function() {
						TweenLite.to("#dynamicNodesDiv > div:last-child", 1, {top: -100, opacity : 0, onComplete:function () {
					    	TweenLite.to("#dynamicNodesDiv > div:last-child", 0.5, {top: 0, onComplete: function() {
								$("#dynamicNodesDiv > div:last-child").remove();
								$("#line15").effect("highlight", {color: 'yellow'}, 1500, function() {
									$('.introjs-nextbutton').show();
					         	});
					     	}});
					   	}});
					});
				});
			});
		}
	}
	
	function insertingElementAtBegining() {
		$(".nextButton").remove();
		if (i >= 1) {
			regenerateArrows();
		}
		$("#svgId .svg-line:first").remove();
		$("#svgId .svg-line:first").remove();
		$("#node0").removeClass("opacity00"); 
		//$("#lines0").remove();
		TweenMax.from($("#node0"), 1, {top: -100, onComplete:function() {
			$("#tempDiv").empty("");
			var l1 = $("#infoAddress0").offset();
			$("#tempDiv").append($("#infoAddress0").html()).offset({
		  		"top" : l1.top,
		  		"left" : l1.left
			});
			$("#tempDiv").addClass("z-index-tranfer yellow-color");
			TweenMax.to("#tempDiv", 1, {top : 0, left : 0, onComplete: function() {
				$("#tempDiv").removeClass("z-index-tranfer yellow-color");
				$('.introjs-nextbutton').show();
			}});
		}});
	}
	
	function createCodeDynamicSteps() {
		var ramdomAddress = getRandomInt(1000, 5000);
		var text = "<span id='createTooltiptext1'></span><br/><span id='mallocText1'></span><br/><span id='line7TransferText1'></span>";
		typing(".introjs-tooltiptext", text, function() {
			if ($("#createBtn").hasClass("createClass")) {
				$("#line6").effect("highlight", {color: 'yellow'}, 2000 ,function() {
				var l1= $("#line6").offset();
				$("#createTooltiptext1").text($("#line6").text()).offset({
					"top":l1.top,
					"left":l1.left
				});
				$("#createTooltiptext1").addClass("yellow-color");
					TweenMax.to("#createTooltiptext1",1,{top:0,left:0, onComplete:function() {
						typing("#mallocText1", "This is used to create memory.", function() {
							console.log("iiiiiiiiiiiiiiiii value = " + i);
							$("#node" + i).removeClass("opacity00");
							createCodeSteps();
						});
					}});
				});
			} else {
				$("#line8").effect("highlight", {color: 'yellow'}, 2000 ,function() {
					var l1 = $("#line8").offset();
					$("#createTooltiptext1").text($("#line8").text()).offset({
						"top" : l1.top,
						"left" : l1.left
				  	});
				  	$("#createTooltiptext1").addClass("yellow-color");
				  	TweenMax.to("#createTooltiptext1", 1, {top : 0, left : 0, onComplete: function() {
						typing("#mallocText1", "This is used to create memory.", function() {
							console.log("iiiiiiiiiiiiiiiii value = " + i);
							$("#node" + i).removeClass("opacity00");
							createCodeSteps();
					  	});
				  	}});
				});
			}
		
			/* $("#dynamicNodesDiv").append('<div class="col-xs-2 node opacity00" id="node' + i +'" style="top: 0px; width: auto;">' +
				'<div class="col-xs-12" style="padding: 0px;">' +
					'<div class="col-xs-6 no-border left-radius">info</div>' +
					'<div class="no-border right-radius">next</div>' +
				'</div>' +
				'<div>' +
					'<div class="div-border left-radius col-xs-6 info-div" id="infoDiv' + i +'">' 
					+ '<span class="visibility-hidden info-span" id="info' + i +'" style="top: 0px; left: 0px;">0</span></div>' +
					'<div class="div-border right-radius col-xs-6 next-div" id="nextDiv' + i +'">' 
					+ '<span class="visibility-hidden next-span" id="next' + i +'">0</span></div>' +
				'</div>' +
				'<div class="col-xs-12" style="padding: 0px;">' +
					'<div class="col-xs-6 no-border left-radius"><span class="info-address" id="infoAddress' + i +'" style=""> ' + ramdomAddress + '</span></div>' +
					'<div class="col-xs-6 no-border right-radius"> ' + (ramdomAddress + 2) + '</div>' +
				'</div>' +
			'</div>');
			intro.refresh();
			$("#node" + i).removeClass("opacity00");
				  
			TweenMax.from($("#node" + i), 1, {top: -100, onComplete:function() {
				if ($("#insertAtEndBtn").hasClass("insertAtEndClass")) {
					$('.introjs-nextbutton').show();
				//	intro.nextStep();
				} else {
					animationAfterValue();
				}
			}}); */
		});  
	}
	
	function createCodeSteps() {
		var ramdomAddress = getRandomInt(1000, 5000);
		$("#dynamicNodesDiv").append('<div class="col-xs-2 node opacity00" id="node' + i +'" style="top: 0px; width: auto;">' +
			'<div class="col-xs-12" style="padding: 0px;">' +
				'<div class="col-xs-6 no-border left-radius">info</div>' +
				'<div class="no-border right-radius">next</div>' +
			'</div>' +
			'<div>' +
				'<div class="div-border left-radius col-xs-6 info-div" id="infoDiv' + i +'">' 
				+ '<span class="visibility-hidden info-span" id="info' + i +'" style="top: 0px; left: 0px;">0</span></div>' +
				'<div class="div-border right-radius col-xs-6 next-div" id="nextDiv' + i +'">' 
				+ '<span class="visibility-hidden next-span" id="next' + i +'">0</span></div>' +
			'</div>' +
			'<div class="col-xs-12" style="padding: 0px;">' +
				'<div class="col-xs-6 no-border left-radius"><span class="info-address" id="infoAddress' + i +'" style=""> ' + ramdomAddress + '</span></div>' +
				'<div class="col-xs-6 no-border right-radius"> ' + (ramdomAddress + 2) + '</div>' +
			'</div>' +
		'</div>');
		intro.refresh();
		$("#node" + i).removeClass("opacity00");
		  
		TweenMax.from($("#node" + i), 1, {top: -100, onComplete:function() {
			if ($("#insertAtEndBtn").hasClass("insertAtEndClass")) {
				$('.introjs-nextbutton').show();
			//	intro.nextStep();
			} else {
				animationAfterValue();
			}
		}});
	}
	
	
	function animationAfterValue() {
		console.log("inside function");
		$("#line6").effect("highlight",{color: 'yellow'}, 2000 ,function() {
			$("#infoAddress" + i).effect("highlight",{color: 'yellow'}, 1500, function() {
				var l1= $("#infoAddress" + i).offset();
				$("#tempDiv").text($("#infoAddress" + i).text()).removeClass("opacity00").offset({
					"top":l1.top,
					"left":l1.left
				});
				$("#tempDiv").addClass("z-index-tranfer yellow-color");
				TweenMax.to("#tempDiv",1,{top:0,left:0, onComplete:function() {
					$("#tempDiv").removeClass("z-index-tranfer yellow-color");
					var text = "<span id='line7TextTooltip'></span>";
						if ($("#createBtn").hasClass("createClass")) {
							$("#line7").effect("highlight",{color: 'yellow'}, 2000 ,function() {
								typing(".introjs-tooltiptext", text, function() {
									var l1= $("#line7").offset();
									$("#line7TextTooltip").text($("#line7").text()).offset({
									   	"top":l1.top,
									   	"left":l1.left
									});
									$("#line7TextTooltip").addClass("yellow-color");
									TweenMax.to("#line7TextTooltip",1,{top:0,left:0, onComplete: function() {
									}})
								})
							});
						} else {
							$("#line11").effect("highlight",{color: 'yellow'}, 2000 ,function() {
								typing(".introjs-tooltiptext", text, function() { 
									var l1= $("#line11").offset();
									  $("#line7TextTooltip").text($("#line11").text()).offset({
									    "top":l1.top,
									    "left":l1.left
									 });
								});
							});
						}
						
						var l1= $("#xBox").offset();
						$("#info" + i).text($("#xBox").text()).removeClass("opacity00").offset({
							"top":l1.top,
							"left":l1.left
						});
						$("#xBox").addClass("z-index-class").effect("highlight",{color: 'yellow'}, 1500, function() {
							$("#info" + i).removeClass("visibility-hidden");
							$("#xBox").removeClass("z-index-class");
							$("#info" + i).addClass("z-index-tranfer yellow-color");
							TweenMax.to("#info" + i, 1, {top : 0,left : 0, onComplete:function() {
								$("#info" + i).removeClass("z-index-tranfer yellow-color");
								var text = "<span id='tooltipelseCheck'></span>&emsp;<span class='yellow-color' id='falseCaseId'></span><br/><span id='qNextEqualTempCondition'></span><br/><span id='qEqualTempCondition'></span>";
								typing(".introjs-tooltiptext", text, function() {
								if ($("#createBtn").hasClass("createClass")) {
									$("#line8").effect("highlight",{color: 'yellow'}, 2000 ,function() {
										$("#next" + i).text("NULL").removeClass("visibility-hidden");
										$("#line9").effect("highlight",{color: 'yellow'}, 2000 ,function() {
											if ($("#firstDiv").text() == "NULL") {
												$("#line10").effect("highlight",{color: 'yellow'}, 2000 ,function() {
													var l1= $("#tempDiv").offset();
													$("#firstDiv").text($("#tempDiv").text()).removeClass("opacity00").offset({
														"top":l1.top,
														"left":l1.left
													});
													TweenMax.to("#firstDiv", 1, {top:0,left:0, onComplete:function() {
														
													}});
												});
											} else {
												$("#line11").effect("highlight", {color: 'yellow'}, 1000 ,function() {
													$("#line12").effect("highlight", {color: 'yellow'}, 1000 ,function() {
														var l1 = $("#line12").offset();
														$("#tooltipIfCheck").text($("#line12").text()).offset({
															"top" : l1.top,
															"left" : l1.left
														});
														$("#tooltipelseCheck").addClass("yellow-color");
														TweenMax.to("#tooltipelseCheck", 1, {top : 0,left : 0, onComplete: function() {
															var text="<b>in else case</b>"
															typing("#falseCaseId", text, function() {
																var l1 = $("#line12").offset();
																$("#qNextEqualTempCondition").append($("#line12").html()).offset({
																	"top" : l1.top,
																	"left" : l1.left
																});
																$("#qNextEqualTempCondition").addClass("yellow-color");
																TweenMax.to("#qNextEqualTempCondition",1,{top:0,left:0, onComplete:function() {
																	flipEffect("#qNextEqualTempCondition span", $("#infoAddress" + i).text() , function() {
																		$("#next" + (i-1)).text("");
																		var l1 = $("#qNextEqualTempCondition span").offset();
																		$("#next" + (i-1)).append($("#qNextEqualTempCondition span").html()).offset({
																			"top" : l1.top,
																			"left" : l1.left
																		});
																		$("#next" + (i-1)).addClass("z-index-tranfer yellow-color");
																		TweenMax.to("#next" + (i-1),1,{top:0,left:0, onComplete:function() {
																			$("#next" + (i-1)).removeClass("z-index-tranfer yellow-color");
																			svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#nextDiv" + (i-1), "#infoDiv" + i, "#svgId", "lines" + i, "arrow", function() {
																				$("#line14").effect("highlight",{color: 'yellow'}, 1500, function() {
																					var l1 = $("#line14").offset();
																					$("#qEqualTempCondition").append($("#line14").html()).offset({
																						"top" : l1.top,
																						"left" : l1.left
																					});
																					$("#qEqualTempCondition").addClass("yellow-color");
																					TweenMax.to("#qEqualTempCondition",1,{top:0,left:0, onComplete:function() {
																						flipEffect("#qEqualTempCondition span", $("#tempDiv").text(), function() {
																							$("#lastDiv").text("");
																							var l1 = $("#qEqualTempCondition span").offset();
																							$("#lastDiv").append($("#qEqualTempCondition span").html()).offset({
																								"top" : l1.top,
																								"left" : l1.left
																							});
																							$("#lastDiv").addClass("z-index-tranfer yellow-color");
																							TweenMax.to("#lastDiv",1,{top:0,left:0, onComplete:function() {
																								$("#lastDiv").removeClass("z-index-tranfer yellow-color");
																								changeIds();
																								i++;
																								$('.introjs-nextbutton').show();
																							}});
																						});
																					}});
																				});
																			});
																		}});
																	});
																}});
															});
														}});
													});
												});
											}
										});
									});
								} else {
									$("#line12").effect("highlight",{color: 'yellow'}, 2000 ,function() {
										$("#next" + i).text("NULL").removeClass("visibility-hidden");
										changeIds();
										$("#line13").effect("highlight",{color: 'yellow'}, 2000 ,function() {
											var l1= $("#tempDiv").offset();
											$("#next" + (i-2)).text($("#tempDiv").text()).offset({
												"top":l1.top,
												"left":l1.left
											});
											TweenMax.to("#next"  + (i-2),1,{top:0,left:0, onComplete:function() {
												svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#nextDiv" + (i - 2), "#infoDiv" + (i - 1), "#svgId", "lines" + (i + 1), "arrow", function() {
													$("#line15").effect("highlight",{color: 'yellow'}, 2000 ,function() {
														var count = 0;
														var options = {
															element :'#buttons',
															intro :'',
															position : 'bottom',
														}
														intro.insertOption(intro._currentStep + ++count, options);
														intro.nextStep();
													}); 
												});
											}});
										});
									});
								}
							});
						}});
					});
				}});
			});
		});
	}
	
	function findingPositiontoInsert() {
		if (i > pos - 1) {
			$("#line8").effect("highlight",{color: 'yellow'}, 1500,function() {
				findingPositiontoInsert();
			});
		} else {
			insertAtPositionAnimation();
		}
	}
	
	function insertAtPositionAnimation() {
		pos = $("#inputIdField").val();
		positionValue = pos;
		var ramdomAddress = getRandomInt(1000, 2000);
		$("#line10").effect("highlight", {color: 'yellow'}, 1500,function() {
			$("#line11").effect("highlight", {color: 'yellow'}, 1500,function() {
				if (pos == 1) {
					insertAtBeginDynamicSteps();
				} else {
					var text = "<span class='yellow-color' id='insertPosElseCase'>In else case</span><br/><span id='insertPosLine13'></span>";
					$("#line12").effect("highlight", {color: 'yellow'}, 1500, function() {
						typing(".introjs-tooltiptext", text, function() {
							$("#line13").effect("highlight", {color: 'yellow'}, 1500, function() {
								typing(".introjs-tooltiptext", text, function() {
									var l1 = $("#line13").offset();
									$("#insertPosLine13").text($("#line13").text()).offset({
										"top":l1.top,
										"left":l1.left
									});
									$("#insertPosLine13").addClass("yellow-color");
									TweenMax.to("#insertPosLine13",1 ,{top : 0, left : 0, onComplete : function() {
										 regenerateArrows();
										$("#node" + positionValue).before('<div class="col-xs-2 node visibility-hidden" id="node' + i +'" style="top: 0px; width: auto;">' +
											'<div class="col-xs-12" style="padding: 0px;">' +
												'<div class="col-xs-6 no-border left-radius">info</div>' +
												'<div class="no-border right-radius">next</div>' +
											'</div>' +
											'<div>' +
												'<div class="div-border left-radius col-xs-6 info-div" id="infoDiv' + i +'">'
													+ '<span class="visibility-hidden info-span" id="info' + i +'" style="top: 0px; left: 0px;">0</span></div>' +
												'<div class="div-border right-radius col-xs-6 next-div" id="nextDiv' + i +'"><span class="visibility-hidden next-span" id="next' + i +'">0</span></div>' +
											'</div>' +
												'<div class="col-xs-12" style="padding: 0px;">' +
													'<div class="col-xs-6 no-border left-radius"><span class="info-address" id="infoAddress' + i +'" style="">' + ramdomAddress + '</span></div>' +
													'<div class="col-xs-6 no-border right-radius">' + (ramdomAddress + 2) + '</div>' +
												'</div>' +
											'</div>');
											changeIds();
											i++;
											var marginLeft = $("#node" + positionValue).outerWidth();
											TweenMax.from("#node" + positionValue, 1, {marginLeft: '-=' + marginLeft,onComplete: function() {
												//intro.refresh();
												$("#node" + positionValue).removeClass("visibility-hidden");
												TweenMax.from($("#node" + positionValue), 1, {top: -100, onComplete:function() {
													changeIds();
													$("#line14").effect("highight",{color: 'yellow'}, 1500, function() {
														$('.introjs-nextbutton').show();
													});
												}});
											}});
										}});
									});
								});
							});
						});
					}
				});
			});
		}
	
	function findingPositionToDelete(x) {
		$(".nextButton").remove();
		console.log("finding position to delete method : ----------------" + x);
		pos = parseInt($("#inputIdField").val());
		if (x < pos) {
			console.log("delepos at if");
			$("#line8").effect("highlight",{color: 'yellow'}, 2000 ,function() {
				if ($("#lastDiv").text() == "NULL") {
					//no such position.
				} 
				var l1= $("#firstDiv").offset();
				$("#tempDiv").text($("#firstDiv").text()).offset({
					"top":l1.top,
					"left":l1.left
				});
				
				var text = "<span id='tooltipDelAtPosText'></span>";
				$("#line13").effect("highlight",{color: 'yellow'}, 2000 ,function() {
					typing(".introjs-tooltiptext", text, function() {
						var l1= $("#line13").offset();
						$("#tooltipDelAtPosText").text($("#line13").text()).offset({
							"top":l1.top,
							"left":l1.left
						});
						$("#tooltipDelAtPosText").addClass("yellow-color");
						TweenMax.to("#tooltipDelAtPosText",1,{top:0,left:0, onComplete:function() {
							$("#tempDiv").addClass("z-index-tranfer yellow-color");
							TweenMax.to("#tempDiv",1,{top:0,left:0, onComplete:function() {
								$("#tempDiv").removeClass("z-index-tranfer yellow-color");
								var l1= $("#nextDiv" + x).offset();
								$("#lastDiv").text($("#nextDiv" + x).text()).offset({
								  "top":l1.top,
								  "left":l1.left
								});
								$("#lastDiv").effect("highlight",{color: 'yellow'}, 2000 ,function() {
									$("#line14").effect("highlight",{color: 'yellow'}, 2000 ,function() {
										var l1= $("#line14").offset();
										$("#tooltipDelAtPosText").text($("#line14").text()).offset({
											"top":l1.top,
											"left":l1.left
										});
										$("#tooltipDelAtPosText").addClass("yellow-color");
										TweenMax.to("#tooltipDelAtPosText",1,{top:0,left:0, onComplete:function() {
											$("#lastDiv").addClass("z-index-tranfer yellow-color");
											TweenMax.to("#lastDiv",1,{top:0,left:0, onComplete:function() {
												$("#lastDiv").removeClass("z-index-tranfer yellow-color");
												x++;
												findingPositionToDelete(x);
											}});
										}});
									});
								});
							}});
						}});
					});
				});
			});
			
		} else {
			console.log("delepos at else");
			$("#line16").effect("highlight",{color: 'yellow'}, 2000 ,function() {
				var l1= $("#line16").offset();
				$("#tooltipDelAtPosText").text($("#line16").text()).offset({
					"top":l1.top,
					"left":l1.left
				});
				$("#tooltipDelAtPosText").addClass("yellow-color");
				TweenMax.to("#tooltipDelAtPosText",1,{top:0,left:0, onComplete:function() {
					$("#node" + x).effect("highlight",{color: 'yellow'}, 2000 ,function() {
			    		var l1= $("#next" + x).offset();
			    		$("#next" + (x-1)).text($("#next" + x).text()).offset({
					  		"top":l1.top,
					  		"left":l1.left
						});
						$("#next" + x).effect("highlight",{color: 'yellow'}, 2000 ,function() {
							$("#next" + (x-1)).addClass("z-index-tranfer yellow-color");
							TweenMax.to("#next" + (x-1),1,{top:0,left:0, onComplete:function() {
								$("#next" + (x-1)).removeClass("z-index-tranfer yellow-color");
								$("#line17").effect("highlight",{color: 'yellow'}, 2000 ,function() {
									
									var l1= $("#line17").offset();
									$("#tooltipDelAtPosText").text($("#line17").text()).offset({
										"top":l1.top,
										"left":l1.left
									});
									$("#tooltipDelAtPosText").addClass("yellow-color");
									TweenMax.to("#tooltipDelAtPosText",1,{top:0,left:0, onComplete:function() {
										$("#next" + x).effect("highlight",{color: 'yellow'}, 2000 ,function() {
											$("#next" + x).text("NULL");
											console.log("x value for arrows :-----------" + x);
											$("#lines" + x).fadeOut(1500, function() {
												$("#lines" + (x + 1)).fadeOut(1500, function() {
													$("#lines" + x).remove();
													$("#lines" + (x + 1)).remove();
													$("#line18").effect("highlight",{color: 'yellow'}, 2000 ,function() {
														var l1= $("#line18").offset();
														$("#tooltipDelAtPosText").text($("#line18").text()).offset({
															"top":l1.top,
															"left":l1.left
														});
														$("#tooltipDelAtPosText").addClass("yellow-color");
														TweenMax.to("#tooltipDelAtPosText",1,{top:0,left:0, onComplete:function() {
															$("#node" + x).effect("highlight",{color: 'red'}, 2000 ,function() {
																TweenMax.to("#node" + x, 1, {top: -100,opacity : 0, onComplete:function() {
																	$("#lines" + (i-1)).remove();
																	var marginRight = $("#node" + x).outerWidth();
																	TweenMax.to("#node" + x, 1, {marginRight: '-=' + marginRight,onComplete: function() {
																		$("#node" + x).remove();
																		changeIds();
											    						i--;
											    						//$("#lines" + pos).show();
											    						svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#nextDiv" + (pos - 1), "#infoDiv" + pos, "#svgId", "lines" + i, "arrow", function(){
												    						if (pos != (i-1)) {
												    							svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#nextDiv" + pos, "#infoDiv" + (pos + 1), "#svgId", "lines" + (i + 1), "arrow");
												    						}
												    						$("#line20").effect("highlight",{color: 'yellow'}, 2000 ,function() {
												    							changeIds();
												    							$('.introjs-nextbutton').show();
												    						});
											    						});
																	}});
																}});
															});
														}});
													});
												});
											});
										});
									}});
								});
							}});
						});
					});
				}});
			});
		}
	}
	
	function display(d) {
		$("#line6").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
			if (($("#lastDiv").text()) != "NULL") {
				$("#line7").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
					if (d < i) {
						$("#displaySpanId" + d).text($("#info" + d).text());
						$("#displaySpanId" + d).append("-->");
						$("#line8").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
							var l1= $("#next" + d).offset();
							$("#lastDiv").text($("#next" + d).text()).offset({
							  "top":l1.top,
							  "left":l1.left
							});
							$("#lastDiv").addClass("z-index-tranfer yellow-color");
							TweenMax.to("#lastDiv",1,{top:0,left:0, onComplete:function() {
								$("#lastDiv").removeClass("z-index-tranfer yellow-color");
								d++;
								display(d);
							}});
						});
					}
				});
			} else {
				$("#line10").effect( "highlight",{color: 'yellow'}, 2000 ,function() {
					$("#consoleBodyDiv span:last-child").removeClass("ct-code-b-lime");
					$("#consoleBodyDiv span:last-child").append("NULL");
					$("#consoleBodyDiv span:last-child").addClass("ct-code-b-red");
					$("#displayMethodId").addClass("z-index-class");
					$('.introjs-nextbutton').show();
				});
			}
		});
	}
	
/* 	svgMarkerAppend("#svgId", "arrow1");
	svgAnimatingLineSelector1BottomSideToSelector2TopSide("#animationArea", "#firstDiv", "#node1", "#svgId", "lines1", "arrow1", function() {
	  $("#arrow1").addClass('opacity00');  
	  svgMarkerAppend("#svgId", "arrow2");
	  svgAnimatingLineSelector1BottomSideToSelector2TopSide("#animationArea", "#firstDiv", "#node1", "#svgId", "lines1", "arrow2", function() {
	      $("#arrow2").addClass('opacity00');  
	    svgAnimatingLineSelector1BottomSideToSelector2TopSide("#animationArea", "#firstDiv", "#node1", "#svgId", "lines1", "arrow", function() {
	    });
	  });
	});	*/
 

</script>
</body>
</html>