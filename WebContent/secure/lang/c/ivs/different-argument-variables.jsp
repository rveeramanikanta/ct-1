<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css" />

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/secure/lang/c/js-min/dav.min.js"></script>

<title>Function Argument-variables</title>
<style type="text/css">

.margin-top-20 {
	margin-top: 20px;
}

.box-border {
	border: 1px solid gray;
	border-radius: 8px;
	background-color: #f5f5f5;
}

.center {
	margin-left: auto !important;
	margin-right: auto !important;
	display: block;
}

.address-div {
	height: 275px;
}

.output-console-body {
	height: 100px;
}

.output-console {
	margin: 0;
}

.creampretab4 {
	font-size: 13px;
	-moz-tab-size: 4;
	tab-size: 4;
	background-color: lavender !important;
	line-height: 1.75;
	font-family: monospace;
}

#outputDiv {
	margin-top: 45px;
}

.main-div {
	margin-top: 55px;
}

.introjs-tooltip {
	min-width: 300px;
}

.blinking-white {
	animation-name: blink-border-background-white ;
	animation-duration: 1s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
	z-index: 10000000;
	position: relative;
}

@keyframes blink-border-background-white { 
	50% {
		border-color: white;
		background: white;
	}
}

.blinking-orange {
	animation-name: blink-border-background-orange ;
	animation-duration: 2s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
	z-index: 10000000;
	position: relative;
}

@keyframes blink-border-background-orange { 
	50% {
		border-color: white;
		background: orange;
	}
}

.zIndex {
	z-index: 10000000;
	position: relative;
}

.span-box {
    height: 17px;
    width: 30%;
}

[contenteditable=true] {
	 outline: none;
}

.ct-code-b-red {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

.ui-effects-transfer {
    background-color: white;
    z-index: 99999999 !important;
}

.output-console-body {
	padding: 10px;
	
}

.introjs-tooltip-min-width {
	min-width: 110px;
}

.ui-effects-transfer {
	border: 1px solid #003399;
	border-radius: 6px;
	position: relative;
	z-index: 9999999;
}




</style>
</head>
<body>
	<div id='mainBox'>
	<div class="text-center margin-top-20">
		<h1 id="heading" class="label ct-demo-heading text-center">Formal and Actual Arguments</h1>
	</div>
	<div class="main-div col-xs-12" id="mainDiv">
		<div class="col-xs-4" id="codeDiv">
			<pre id="codeAnimation" class='creampretab4 box-border code-div opacity00'>
	#include&lt;stdio.h&gt;
	<span id="funcDec">void <span class='ct-blue-color'>addition(int, int)</span>;</span>
	<span id="globalVar">int <span id="globVarSum">sum;</span></span>
	<span id="mainFunc">void <b class='ct-blue-color'>main()</b> {
		<span id="localVar">int a, b;</span>
		<span id="printf1">printf("Enter two numbers : ");</span>
		<span id="scanf">scanf("<span id="d1">%d</span> <span id="d2">%d</span>", <span id="addr1">&a</span>, <span id="addr2">&b</span>);</span>
		<span id="functionCall">addition(<span id='actArg1'>a</span>,<span id='actArg2'>b</span>);</span>
		<span id="printf2">printf("sum = %d", sum);</span>
	<span id="endMain">}</span></span>
	<span id="funcDef"><span id="formalArgs">void <b class='ct-blue-color'>addition(int <span id='formArg1'>x</span>, int <span id='formArg2'>y</span>)</b></span> {
		<span id="addVar"><span id="sumDec">sum</span> = <span id="sumRes">x + y</span>;</span>
	<span id="endFunction">}</span></span></pre>
		</div>
		<div id="addressDiv" class="col-xs-7 col-xs-offset-1 box-border address-div opacity00">
			<div class="col-xs-12">
				<div id="sumAddress" class="col-xs-2 col-xs-offset-5 margin-top-20 text-center opacity00 check">
					<div><b style="color: maroon;">sum</b></div>
					<div class="box-border" style="line-height: 50px; height: 50px;"><span id="sumVal" class="opacity00"></span></div>
				</div>
			</div>
			<div class="col-xs-12">
				<div class="col-xs-12 text-center" style="font-weight: bold; color: rgb(47, 79, 79); padding: 0px;">
					<div id="boxHeading1" class="col-xs-4 opacity00">In main()</div>
					<div id="boxHeading2" class="col-xs-4 col-xs-offset-4 opacity00">In addition()</div>
				</div>
				<div id="varBox1" class="box-border col-xs-4 opacity00" style="height: 110px; margin-top: 5px;">
					<div id="aAddress" class="col-xs-6  text-center opacity00" style="margin-top: 10px;">
						<div><b style="color: maroon;">a</b></div>
						<div style="line-height: 50px; height: 50px;" class="box-border">
							<span id="aVal" class="opacity00"></span>
						</div>
					</div>
					<div id="bAddress" class="col-xs-6  text-center opacity00" style="margin-top: 10px;">
						<div><b style="color: maroon;">b</b></div>
						<div style="line-height: 50px; height: 50px;" class="box-border">
							<span id="bVal" class="opacity00"></span>
						</div>
					</div>
				</div>
				<div id="varBox2" class="box-border col-xs-4 col-xs-offset-4 opacity00"	style="height: 110px; margin-top: 5px;">
					<div id="xAddress" class="col-xs-6   text-center opacity00" style="margin-top: 10px;">
						<div><b style="color: maroon;">x</b></div>
						<div style="line-height: 50px; height: 50px;" class="box-border">
							<span id="xVal" class="opacity00"></span>
						</div>
					</div>
					<div id="yAddress" class="col-xs-6  text-center opacity00" style="margin-top: 10px;">
						<div><b style="color: maroon;">y</b></div>
						<div style="line-height: 50px; height: 50px;" class="box-border">
							<span id="yVal" class="opacity00"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-5 col-xs-offset-2" style="margin-top: 35px;">
			<div style="" id="consoleId" class="output-console padding0 opacity00">
				<div class="output-console-title-bar"><span class="title">Output</span></div>
<div style="color: white;" class="output-console-body"><span id="runEditor1"></span>
<span id="runEditor2"></span></div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 margin-top-20 text-center"><span id="restart" class="btn btn-warning opacity00">Restart</span></div>
	</div>
	<script type="text/javascript">
		$(document).ready(function() {
			differentArgumentVariableReady();
		});
	</script>
</body>
</html>