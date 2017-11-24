
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src='/js/intro.js'></script>
<script src='/secure/lang/c/js-min/mio.min.js'></script>

<title>Multiple indirection operator</title>

<style type="text/css">
.margin-top-2 {
	margin-top: 2%;
}

.margin-top-7 {
	margin-top: 3%;
}

.margin-top-4 {
	margin-top: 4%;
}

.creamPreTab4 {
	-moz-tab-size: 4;
	tab-size: 4;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 13px;
	margin: 5px;
	padding: 10px;
	white-space: pre;
}

.border {
	border: 1px solid;
	border-radius: 8px;
	padding: 15px;
}

.memory-box {
	height: 22px;
	border: 1px solid gray;
	text-align: center;
	padding: 1px;
}

.Vertical-text-center  {
	text-align: right; 
}

div, span {
	position: relative;
}

.css-circle {
	border-radius: 9px;
	border : 1px solid;
	background-color: white;
	padding: 1px;
	z-index: 9999999;
}

.address-div {
	font-size: 13px;
}

.animation-div {
	margin-left: 4%;
	margin-top: 2%;
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
	position: relative;
	stroke: gray;
	stroke-width: 2; 
}

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 11px;
	margin-bottom: 14px;
	height: 60px;
	overflow: auto;
	padding: 10px;
	white-space: nowrap;
}

.introjs-tooltip {
	min-width: 315px;
}

.ct-color-lime {
	color: lime;
	font-weight: bold;
}

.user-btn {
	background-color: green;
}

.value-css {
	color: blue;
	font-family: monospace;
	font-weight: bold;
}

.address-css {
	color: green;
	font-family: monospace;
	font-weight: bold;
}

.font-size-13 {
	font-size: 13px;
}
</style>

</head>

<body>

<div class="col-xs-12">
	<div class="text-center margin-top-2">
		<h3 class='label ct-demo-heading' id="heading"><span>Multiple Indirection Operator</span></h3>
	</div>
	<div class="col-xs-12">
		<div class="text-center margin-top-2" id="restartDiv"><a class="btn btn-warning opacity00" id="restart">Restart</a></div>
	</div>
	<div class="col-xs-12 margin-top-7">
		<div class="col-xs-4">
<pre class="creamPreTab4 opacity00" id="preCode">
void <b class='ct-blue-color'>main()</b> {
	<span id="line1">int x, *p;</span>
	<span id="line7">int **q;</span>
	<span id="line2">x = <span id="input1">10</span>;</span>
	<span id="line3">p = &x;</span>
	<span id="line4">q = &p;</span>
	<span id="line5">**q = <span id = "input2">20</span>;</span>
	<span id="line6">printf("value of **q is : %d", **q);</span>
}
</pre>
		</div>
		<div class="col-xs-7 border animation-div" id="animationDiv">
			<div class="col-xs-12">
				<div class="col-xs-4 text-center">
					<div class="col-xs-12 margin-top-4 opacity00" id="qBox">
						<div class="col-xs-6 Vertical-text-center">int q</div>
						<div class="col-xs-6">
							<div class="memory-box" id="box1"><span class="opacity00 value-css font-size-13" id="qValue">5036</span></div>
							<div class="address-div"><span id="qBoxAddress" class="address-css">2036</span></div>
						</div>
					</div>
				</div>
				<div class="col-xs-4 text-center">
					<div class="col-xs-12 margin-top-4 opacity00" id="pBox">
						<div class="col-xs-6 Vertical-text-center"><span id="pVariable"  style="padding: 8px 8px;">int p</span></div>
						<div class="col-xs-6">
							<div class="memory-box" id="box2"><span class="opacity00 value-css font-size-13" id="pValue">3058</span></div>
							<div class="address-div"><span id="pBoxAddress" class="address-css">5036</span></div>
						</div>
					</div>
				</div>
				<div class="col-xs-4 text-center">
					<div class="col-xs-12 margin-top-4 opacity00" id="xBox">
						<div class="col-xs-6 Vertical-text-center"><span id="xVariable"  style="padding: 8px 8px;">int x</span></div>
						<div class="col-xs-6">
							<div class="memory-box value-css"><span class="opacity00 font-size-13" id="xValue">10</span></div>
							<div class="address-div"><span id="xBoxAddress" class="address-css">3058</span></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-3 col-xs-offset-6" style="margin-top: 0%">
			<div id="consoleId">
				<div class="output-console-title-bar"><span class="title"><b>Console</b></span></div>
				<div class="output-console-body" id="consoleBodyDiv">
					<span class='visibility-hidden' id="printText1">value of **q is : <b class='ct-code-b-yellow'>20</b></span>
				</div>
			</div>
		</div>
	</div>
</div>
</body>
<script type="text/javascript">
$(document).ready(function() {
	multipleIndirectionOperatorReady();
});
</script>
</html>
