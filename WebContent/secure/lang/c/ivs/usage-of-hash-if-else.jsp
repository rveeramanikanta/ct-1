<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<link rel="stylesheet" href="/css/jquery-ui.css">
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<link rel="stylesheet" href="/css/font-awesome.min.css" />
<link href="/css/introjs.css" rel="stylesheet">
<link rel="stylesheet" href="/css/introjs-ct.css" />
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/animate.css" />

<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenLite.min.js" type="text/javascript"></script>
<script src="/js/gs/TimelineLite.min.js" type="text/javascript"></script>
<script src="/secure/lang/c/js/usage-of-hash-if-else.js" type="text/javascript"></script>

<title>Usage of if-else</title>
</head>
<style>
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
	height: 143px;
	overflow: auto;
	padding: 10px;
	white-space: initial;
}

#informationdiv {
	background-color: rgb(243, 235, 235);
    border-radius: 2px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    height: 192px;
    margin-top: 20px;
  /*   color: green; */
    padding: 10px;
}

.introjs-tooltiptext br {
	margin: 15px;
}

.introjs.tooltiptext > span{
	display: inline-block;
}

.introjs-tooltip {
	min-width: 280px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-prevbutton, .introjs-nextbutton, .introjs-skipbutton {
	border-radius: 3px !important;
}

.introjs-prevbutton {
	background-color: #5bc0de !important;
}

.introjs-nextbutton {
	background-color: green !important;
}

.introjs-skipbutton {
	margin-right: 15px !important;
	background-color: orange !important;
}

.ct-pink-color {
	font-family: monospace;
	color: #ed138e;
	outline: none;
}

.ct-code-b-red {
	font-family: monospace;
	font-weight: bold;
	color: rgb(252, 66, 66);
}

.ct-code-b-brown {
	font-family: monospace;
	font-weight: bold;
	color: brown;
}

.ct-code-b-yellow {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
}

.ct-code-b-green {
	font-family: monospace;
	font-weight: bold;
	color: green;
}

#typewritingId {
	height: 167px; 
}

.position-relative {
	position: relative;
}

.display-inline {
	display: inline-block;
}

.address-box {
	height: 222px;
	border: 1px solid lightgray;
	border-radius: 4px;
}

.opacity00 {
	opacity: 0.0;
}

.ct-demo-heading {
	background: highlight none repeat scroll 0 0;
    border-radius: 10px;
    font-size: 18px;
    position: relative;
    z-index: 9999999;
}

.creamPreTab4 {
	height: 222px;
}

.padding0 {
	padding: 0px;
}

.blur {
	opacity: 0.12;
}

.z-index9999999 {
	z-index: 9999999;
}

.panel-heading {
	padding: 2px 70px;
}

.panel-body {
	height: 46px;
}

#startBtn {
	margin-top: 10px;
}

#in, #lowerValue, .input-char {
   width: 20px;
 /* padding: 8px; */
  border-width: 0px 0 0 0;
  background-color: #000;
  color: #0f0;
} 
y {
 color:yellow;
}

</style>
<body>

<div class="col-xs-12 text-center">
	<div class="margin-padding-css text-center" >
		<div class="col-xs-1"></div>
		<div class="col-xs-offset-3 col-xs-3">
			<h3><span class="ct-demo-heading label label-default" id="titleName">Usage of #if #else</span></h3>
		</div>
	</div>
</div>
<div class='col-xs-12'>
	<div id='informationdiv' class='col-xs-8 col-xs-offset-2 opacity00'>
		<span id='defination'></span>
		<span id='format' class="col-xs-offset-4 col-xs-4"></span>
	</div>
</div>
<div class="body-div col-xs-12 padding0">
<br>
<div class="col-xs-offset-1 col-xs-5">
<!-- <pre id="typewritingId"></pre> -->
<pre class="creamPreTab4 visibility-hidden" id="preBody">
<span id="line1">#include&lt;stdio.h&gt;</span>
<span id="line2">#define MAX 10</span>
<span id="line3"><span id="idDefId">#ifdef</span> <span id="maxValue" class="position-relative display-inline">MAX</span></span>
  <span id="line4">#define MIN 20</span>
<span id="totalElse"><span id="line5">#else</span>
  <span id="line6">#define MAX 100</span>
  <span id="line7">#define MIN 200</span></span>
<span id="line8">#endif</span>
<span id="line9">main()</span> {
  <span id="line10">printf("max and min values are:%d, %d", <span id="printMaxValue" class="position-relative display-inline">MAX</span>, <span id="printMinValue" class="position-relative display-inline">MIN</span>);</span>
<span id="line11">}</span>
</pre>
</div>
	<div class="col-xs-5">
		<div id="consoleId" class="center opacity00">
			<div class="output-console-title-bar">
				<span class="title"><b>Console</b></span>
			</div>
			<div class="output-console-body" id="consoleBodyDiv">
				<span id="typeChar"></span><br>
				<span id="typeChar1"></span>
			</div>
		</div>
	</div>
</div>
<div><button type="button" class="col-sm-1 col-sm-offset-6 btn btn-warning opacity00" id="restartBtn" style="margin-top: 20px;">Restart </button></div>
<script>
$(document).ready(function() {
	usageOfHashIfElseReady();
}); // end of document.ready function
</script>
</body>
</html>
