<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>polynomial using linked list</title>


<link rel="stylesheet" href="/css/bootstrap.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-all.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src="/js/jquery.scrollTo.js"></script>

<!-- <script type="text/javascript" src="js/polynomial-using-linked-list.js"></script> -->

<script type="text/javascript" src="js/polynomial-using-linked-list1.js"></script>

<!-- Javascript for the actual visualization code -->

<script type="text/javascript" src="js/an-li/custom-events.js"></script>
<script type="text/javascript" src="js/an-li/undo-functions.js"></script>
<script type="text/javascript" src="js/an-li/animated-object.js"></script>
<script type="text/javascript" src="js/an-li/animated-label.js"></script>
<script type="text/javascript" src="js/an-li/animated-circle.js"></script>
<script type="text/javascript" src="js/an-li/animated-rectangle.js"></script>
<script type="text/javascript" src="js/an-li/animated-linked-list.js"></script>
<script type="text/javascript" src="js/an-li/highlight-circle.js"></script>
<script type="text/javascript" src="js/an-li/line.js"></script>
<script type="text/javascript" src="js/an-li/draw-line.js"></script>
<script type="text/javascript" src="js/an-li/object-manager.js"></script>
<script type="text/javascript" src="js/an-li/animation-main.js"></script>
<script type="text/javascript" src="js/al-li/algorithm.js"></script>
 
<!-- <script type="text/javascript" src="js/al-li/poly-dummy.js"></script> -->

<!-- <script type="text/javascript" src="js/al-li/polynomial-LL.js"></script> -->

<script type="text/javascript" src="js/al-li/polynomial-LL1.js"></script>

<style type="text/css">

.ct-demo-heading {
	background: highlight none repeat scroll 0 0;
	border-radius: 10px;
	font-size: 18px;
	position: relative;
	z-index: 9999999;
	position: relative;
}

.padding0 {
	padding: 0;
}

.margin-top-20 {
	margin-top: 20px;
}

.margin-left-4 {
	margin-left: 4%;
}

.box-border {
	border: 2px solid gray;
	border-radius: 8px;
}

.creampretab4 {
	-moz-tab-size: 2;
	tab-size: 2;
	background-color: lavender !important;
	font-size: 10.8px;
	font-style: inherit;
	padding: 3px;
	overflow-y: auto;
	white-space: pre;
	word-spacing: -3px;
}

.introjs-tooltiptext {
	min-width: 250px;
}

.introjs-tooltiptext li span {
	display: inline-block;
}

.ct-code-b-red {
	color: red;
	font-weight: bold;
}

.background-color-yellow {
	background-color: yellow;
}

.output-console-body {
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
	height: 100px;
	padding: 10px;
	white-space: initial;
}

.output-console-title-bar {
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}

#outputDiv {
	position: relative;
	/* z-index: 9999999; */
}

.btn-sm, .btn-group-sm>.btn {
	padding: 0 6px;
}

.input-group-addon-border {
	border: 1px solid #ccc !important;
	border-radius: 4px !important;
	padding: 4px 6px;
	display: inline-table;
}

.padding-col0 {
	padding: 0;
}

y, r, .b {
	font-family: monospace;
	font-weight: bold;
}

y {
	color: yellow;
}

r {
	color: red;
}

.b {
	color: blue;
}

.green {
	color: green;
}


.user-btn {
	background-color: green;
}

.introjs-tooltiptext>ul>li {
	font-family: monospace;
}

.position {
	display: inline-block;
	position: relative;
}

.input {
	font-weight: normal;
	outline: medium none;
	border: none;
	background-color: black;
}

.output-scanf-line:empty::before {
	color: lightblue !important;
	content: attr(placeholder);
}

.blinkingRed {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: infinite;
 }

@keyframes blink {
	50% {
		background:  #ffad99;
	}
}
.z-index1000000 {
	background-color: white;
	z-index : 1000000 !important;
	position: relative;
}
</style>

<script type="text/javascript">
var arr = [];
var ch
//var size = ["2", "2"];

	$(document).ready(function() {
		polynomialUsingLinkedList();
	});
	
	var readCoeffAndExpValuesFromConsole = function(selector) {
		$(selector).focus();
		$(selector).attr({placeholder: 'Enter 2 values'});
		$(selector).addClass("blinking-orange").removeAttr('disabled').focus();;
		$(selector).on("keydown", function(e) {
			if ((arr.length == 2 || arr.length == 0) && e.keyCode == 32 ) {
				e.preventDefault();
			}
			if (arr.length == 1) {
				var test = false;
				test = $(selector).val().indexOf(' ') >= 0;
				if (e.keyCode == 32 && test) {
					e.preventDefault();
				}
			}
		});
		$(selector).on("keyup", function(e) {
			$('.length-error-text,.size-error').remove();
			if ($(this).val() == "") {
				$(".introjs-nextbutton").hide();
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
														"Please enter 2 values each separated by a space.</span>");
			} 
			var givenText = $(this).val();
			var splittedText = givenText.split(" ");
			arr = [];
			$.each(splittedText, function(idx, val) {
				if (val != '') {
					arr.push(val);
				}
			});
			if (arr.length == 1 && e.keyCode == 8 && $('.backspace-error').length == 0 ) {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red backspace-error length-error-text'>"
						+"</br>Enter two numbers separated by space.</span>");
			}
			var a0 = $.isNumeric(arr[0]);		
			var a1 = $.isNumeric(arr[1]);
			
			if (a0 && a1) {
				if ((arr.length == 2) && (arr[0].length <= 3 && arr[1].length <= 3)) {
					$(".introjs-nextbutton").show();
					
				} else {
					$(".introjs-nextbutton").hide();
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red size-error length-error-text'>"
							+"</br>size should be 1 to 3(inclusive)</span>");
				}
			} else {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red size-error length-error-text'>"
						+"</br>Please enter integers only.</span>");
				$(".introjs-nextbutton").hide();
			}
		});
	}
	
	function readYesOrNoFromConsole(selector) {
		$(selector).focus();
		$(selector).attr({placeholder: 'Enter (y/n)'});
		$(selector).addClass("blinking-orange").removeAttr('disabled').focus();;
		$(selector).on("keydown", function(e) {
			$('.length-error-text').remove();
			var max = $(this).attr("maxlength");
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39]) !== -1) {
				return;
			}
			if ($(this).val().length > max-1) {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>String length to 2.</span>");
				e.preventDefault();
			}
		});
		$(selector).on("keyup", function(e) {
			if (nodeCount < SIZE - 1) {
				if (($(this).val() != "") && (($(this).val().toLowerCase() == "y") || ($(this).val().toLowerCase() == "n"))) {
					ch = $(this).val().toLowerCase();
					$(".introjs-nextbutton").show();
				} else {
					$('.length-error-text').remove();
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>Please enter (y/n (or) Y/N).</span>");
					$(".introjs-nextbutton").hide();
				}
			} else {
				if (($(this).val() != "") && ($(this).val().toLowerCase() == "n")) {
					ch = $(this).val().toLowerCase();
					$(".introjs-nextbutton").show();
				} else {
					$('.length-error-text').remove();
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>Please enter (n (or) N). because "
								+" we are restricted to allow list size to (<y>5</y> nodes) only</span>");
					$(".introjs-nextbutton").hide();
				}
			} 
			introjs.refresh();
		});
	}
	
</script>
</head>
<body onload='init()' class="VisualizationMainPage">
	<div id="container">
		<div class='col-xs-12 text-center' style="margin-top: 20px";>
			<div>
				<h1 class='label label-default ct-demo-heading' id="title">Polynomial using Linked List</h1>
			</div>
		</div>

		<div id="mainContent" class='col-xs-12 margin-top-20 padding0'>
		
			<div class='col-xs-3'>
				<div class='col-xs-12 box-border' id="structDiv">
					<pre class='creampretab4' id='polyInit' style="margin-top: 10px;"><span id="strcutSpan">struct polynomial {
	int coeff;
	int exp;
	struct polynomial * next;
};</span>

<span id="typeDefDec">typedef struct polynomial *poly;</span>
</pre>
	</div>
<div class="col-xs-12 mainDiv margin-top-20 padding0" id="mainDiv">
	<pre id ="preMain" class="creampretab4 hide"><div class="text-center b" id="inMain">In Main()</div>
	</pre>
</div>
<div class="col-xs-12 tempDiv padding0 " id="tempDiv" >
	<pre id="preTemp" class="creampretab4 hide"></pre>
</div>
<div class="col-xs-12 addTermDiv padding0" id="addTermDiv">
	<pre class="creampretab4 hide" id="preAddTerm"></pre>
</div>
	
		<div id="outputDiv" class='col-xs-12 padding0 margin-top-20'>
				<div class="output-console-title-bar">
					<span class="title">Output</span>
				</div>
				<div class="output-console-body">
					<!-- <div id="output1" class = "opacity00">Enter coefficient, exponent of node : 
						<div id="input1"><input class="output-scanf-line input opacity00" id="val1" size="15" maxlength="5"/></div>
					</div> -->
				</div>
			</div>
			</div>
			<div class='col-xs-9'>
				<div class='col-xs-12 padding0 box-border text-center'
					id='animationDiv'>
					<div class='col-xs-12 padding0 margin-top-20 text-center'>
						<div class='col-xs-offset-2 col-xs-8 padding0 opacity00' id='btnsDiv'>
							<div class='position'>
								<span class="input-group-addon-border" id="createDiv">
									<!-- <input class="form-control input-sm" id="createText" size="4" name="create" type="text" /> --> 
									<span id="createBtn" class="btn btn-sm btn-success">Create</span>
								</span>
							</div>
							<div class='position  margin-left-4'>
								<span class="input-group-addon-border" id="displayDiv">
										<span id="displayBtn" class="btn btn-sm btn-success">Display</span>
								</span>
							</div>
							<div class='position  margin-left-4'>
								<span class="input-group-addon-border" id="addDiv">
										<span id="addBtn" class="btn btn-sm btn-success">Addition</span>
								</span>
							</div>
							<div class='position  margin-left-4'>
								<span class="input-group-addon-border" id="subDiv">
										<span id="subBtn" class="btn btn-sm btn-success">Subtraction</span>
								</span>
							</div>
							<div class='position  margin-left-4'>
								<span class="input-group-addon-border" id="mulDiv">
										<span id="mulBtn" class="btn btn-sm btn-success">Multiplication</span>
								</span>
							</div>
							<span id="testBtn" class="btn btn-sm btn-success hide"></span>
							<span id="nodeCreateBtn" class="btn btn-sm btn-success hide"></span>
							<span id="yesOrNoBtn" class="btn btn-sm btn-success hide"></span>
						</div>
					</div>
					<canvas class="opacity00" id="canvas" width="900" height="500"></canvas>
				</div>
			</div>
			<div id="generalAnimationControlSection">
				<table id="GeneralAnimationControls" class='hide'></table>
			</div>
		</div>
	</div>
</body>
</html>
