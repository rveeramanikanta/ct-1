<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<!-- <script src="/secure/lang/ds/js-min/slld.min.js"></script> -->
<script src="/secure/lang/ds/js/sll-demo.js"></script>

<title>Singly Linked List</title>
<style>
.introjs-tooltip {
	min-width: 350px;
}

.margin-top-25 {
	margin-top: 25px;
}

.margin-top-15 {
	margin-top: 15px;
}

.margin-7 {
	margin-top: 9px;
	margin-bottom: 12px;
}

.padding0 {
	padding: 0;
}

.margin0 {
	margin: 0;
}

pre {
	tab-size: 3;
	-moz-tab-size: 3;
	font-family: monospace;
	margin: 3px 0px;
	padding: 6.5px;
}

.border-css {
	border: 2px solid grey;
	border-radius: 4px;
	padding-left: 8px;
	padding-right: 8px;
}

.buttons {
	font-family: monospace;
	letter-spacing: 1px;
	box-shadow: 1px 2px 4px 0;
	color: black;
}

.btn:hover {
	background-color: #4CAF50 !important;
	color: white;
}

.btn:active {
	background-color: #2E8B57 !important;
	color: white;
}

.inline-css {
	display: inline-block;
	position: relative;
	margin: 0 10px;
}

.box {
	border: 1px solid grey;
	text-align: center;
	min-height: 24px;
	border-radius: 6px;
}

.user-text {
	height: 27px;
	width: 82px;
	border: none;
	background: black;
}

.output-console-title-bar {
	font-weight: bold;
}

.output-console-body {
	min-height: 92px;
	padding: 5px;
	white-space: initial;
	font-size: 14px;
}

.div-border {
	padding: 0;
	text-align: center;
	width: 45px;
	border: 2px solid gray;
	min-height: 24px;
}

.left-radius {
	border-radius: 6px 0 0 6px;;
	border-right: none;
	border-color: blue;
}

.right-radius {
	border-radius: 0 6px 6px 0;
	border-color: green;
}

.ct-css {
	font-weight: bold;
	font-family: monospace;
}

.ct-green-color {
	color: green;
}

.ct-brown-color {
	color: brown;
}

.error-text {
	color: red;
}

.introjs-fixParent {
	position: relative !important;
}

.zindex {
	z-index: 9999999;
	background: white;
	position: relative;
}

.ui-effects-transfer {
	z-index: 9999999;
	border: 1px solid #003399;
	border-radius: 5px;
}

.user-btn {
	background: green;
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.svg-line {
	marker-end: url("#arrowEnd");
	position: relative;
	stroke: gray;
	stroke-width: 2;
}

.inline-style {
	display: inline-block;
	position: relative;
}

.disabled {
	pointer-events: none;
}

.node-css {
	top: 0px;
	width: auto;
	padding-left: 14px;
	padding-right: 14px;
}

.ct-green-color {
	color: green;
}

.ct-purple-color {
	color: #a1126c;
}
</style>
</head>
<body>
	<div class="margin-top-25 text-center">
		<h4 class="label ct-demo-heading" id="headingDiv">Singly Linked List</h4>
	</div>
	<div id="explanationDiv" class="col-xs-12 margin-top-15 padding0 opacity00">
		<div class="col-xs-12 padding0">
			<div class="col-xs-4">
				<pre class="margin0" id="structParent"><span id="structSpanParent"><span id="strcutSpan">struct list {
	int data;
	struct listNode *next;
};</span>
<span id="typeDefDec">typedef struct listNode *<span class='ct-blue-color ct-css'>node</span>;</span>
<span id="nodeDec">node first = NULL;</span></span></pre>
<pre class="hide" id="whileCondParent"><div class='ct-blue-color ct-css text-center'><b>In main()</b></div>....................
....................
<span id="mainFunctions"></span>
....................
....................</pre><pre id="parentPre" class="hide"></pre><pre id="createNodePre" class="hide"></pre>
			</div>
			<div class="col-xs-8" style="padding-left: 8px; padding-right: 8px;">
				<div class="col-xs-12 border-css opacity00" id="animationDiv" style="min-height: 240px;">
					<div class="col-xs-12 margin-top-15 padding0"><div class="col-xs-12 border-css opacity00 text-center" id="buttonsDiv"></div></div>
					<div class="col-xs-12 margin-7 border-css" id="arrowDiv">
						<div class="col-xs-12 padding0">
							<div class="col-xs-1 padding0">
								<div class="col-xs-12 padding0 opacity00" id="firstNode">
									<div class="text-center col-xs-12 padding0 ct-green-color ct-css">first</div>
									<div class="col-xs-12 box padding0" id="firstDiv" style="border: 1px solid grey;">
										<span id="firstVal" class="ct-green-color ct-css inline-style">NULL</span>
									</div>
								</div>
								<div class="col-xs-12 padding0">
									<div class="col-xs-12 padding0 hide" id="prevPosParent" style="margin-top: 40px;">
										<div class="col-xs-12 box padding0">
											<span id="prevPosVal" class="ct-brown-color ct-css inline-style pre-pos opacity00">1212</span>
										</div>
										<div class="text-center col-xs-12 padding0 ct-green-color ct-css">prevPos</div>
									</div>
								</div>
							</div>
							<div class="col-xs-11" id="dynamicNodes" style="padding-right: 0;">
								<div id="row1" style="display: inline-block"></div><div id="row2"></div>
							</div>
						</div>
						<div class="col-xs-12 margin-top-25 padding0" style="margin-bottom: 7px;" id="nodeAddress">
							<div class="col-xs-1 opacity00 padding0" id="lastNodeMemory">
								<div class="col-xs-12 box padding0">
									<span id="lastNodeMemoryVal" class='ct-brown-color ct-css inline-style'></span>
								</div>
								<div class="text-center col-xs-12 padding0 ct-green-color ct-css" id="lastNodeName">lastNode</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-12 margin-top-15">
					<div class="col-xs-6 col-xs-offset-3 padding0 opacity00" id="consoleId">
						<div class="output-console-title-bar">Output</div>
						<div class="output-console-body margin0">
							<div id="consoleEnter"></div><div id="consoleOutput"></div><div id="addElementOutputPrint"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script>
$(document).ready(function() {
	sLLDemo();
});
</script>
</body>
</html>