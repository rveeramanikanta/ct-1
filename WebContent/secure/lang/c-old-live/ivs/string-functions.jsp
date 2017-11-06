<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src='/js/intro.js'></script>
<link rel="stylesheet" href="/css/font-awesome.min.css">
<script src = '/secure/lang/c/js-min/strf.min.js'></script>

<title>String functions</title>

<style type="text/css">
.margin-top-1 {
	margin-top: 1%;
}

.margin-top-2 {
	margin-top: 2%;
}

.margin-top-6 {
	margin-top: 6%;
}

.margin-top-3 {
	margin-top: 3%;
}

.creamPreTab4 {
	-moz-tab-size: 4;
	tab-size: 2;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 11px;
	margin: 5px;
	padding: 10px;
	white-space: pre;
}

.memory-box {
	height: 22px;
	border: 1px solid;
	text-align: center;
	padding: 1px;
}

.border {
	border: 1px solid;
	border-radius: 8px;
	padding: 15px;
	/* height: 215px; */
}

.small-box {
	border: 1px solid gray;
	padding: 1px;
	text-align: center;
	width: 28px;
	height: 25px;
}

.index-box {
	border: 1px;
	padding: 1px;
	text-align: center;
	width: 25px;
	height: 25px;
	color: gray;
	font-size: 12px;
}

.Vertical-variable-text-center  {
	height: 62px;
	line-height: 68px;
	text-align: right; 
}

.Vertical-text-center  {
	height: 62px;
	line-height: 62px;
	text-align: right; 
}

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 11px;
	margin-bottom: 14px;
	min-height: 140px;
	overflow: auto;
	padding: 10px;
	white-space: nowrap;
}

.input-text, .input-text-two {
	font-weight: normal;
	outline: medium none;
}

.input-text:empty::before {
	color: lightblue !important;
	content: attr(placeholder);
}

.input-text-two:empty::before {
	color: lightblue !important;
	content: attr(placeholder);
}

.ct-code-b-red {
	color: red;
}

.output-value-circle {
	background: white;
	color: black;
}

.circle-css {
	border-radius: 9px;
	border : 1px solid;
	background-color: white;
	padding: 1px;
	z-index: 9999999;
	color: black;
}

.ui-effects-transfer {
	border: 2px solid green;
	border-radius: 50%;
	padding: 3px;
	z-index: 9999999 !important;
}

.z-index9999999 {
	z-index: 9999999;
	background-color: white;
}

.function-class {
	margin-top: 2%; 
}

.count-length {
	color: seagreen;
	font-size: 15px;
	font-weight: bold;
	padding: 6px 12px; 
}

div, span, tr, td {
	position: relative;
}

.add-strings, .comparison {
	display: inline-block;
}

.user-btn {
	background-color: green;
}

.introjs-tooltip {
	min-width: 280px;
}

.blinking {
	animation-name: blinking;
	animation-duration: 2s;
	animation-iteration-count: 2;
 }

@keyframes blinking {
	50% {
		background: turquoise;
	}
}

.blink {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: 1;
 }

@keyframes blink {
	50% {
		background: orange;
	}
}

</style>

</head>

<body>
<div class="main-div col-xs-12">
	<div class="text-center margin-top-2">
		<h3 class='label ct-demo-heading' id="heading">
			<span>String Functions</span>
		</h3>
	</div>
	<div class="col-xs-12">
		<div class="text-center margin-top-2" id="restartDiv">
			<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
		</div>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div class="col-xs-5">
<pre class="creamPreTab4 opacity00" id="preCode">
#include &lt;stdio.h&gt;
#include &lt;string.h&gt;
void main () {
	<span id="line1">char a[20], b[20], c[20];</span>
	<span id="line2">int length;</span>
	<span id="line3">printf("Enter a string :");</span>
	<span id="line4">scanf("%s", a);</span>
	<span id="line5">length = strlen(a);</span>
	<span id="line6">printf("The length of the string %s is %d \n",a, length);</span>
	<span id="line7">strcpy(b, a);</span>
	<span id="line8">printf ("The copied string = %s \n", b);</span>
	<span id="line9">printf("Enter the second string :");</span>
	<span id="line10">scanf("%s", c);</span>
	<span id="line11">strcat(a, c);</span>
	<span id="line12">printf("The concatenated string = %s \n", a);</span>
	<span id="line13">i=strcmp(b, c);</span>
	<span id="line14">if(i == 0) {
		printf("The given two strings are equal \n");</span>
	} <span id="line15">else if(i > 0) {
		printf("The string %s is higher than the string %s \n", b, c);</span>
	} <span id="line16">else {
		printf("The string %s is higher than the string %s \n", c, b);</span>
	}
}
</pre>
		</div>
		<div class="col-xs-7 border" id="arrayDiv">
			<div class="col-xs-12 opacity00" id="aArrayDiv">
				<div class="col-xs-1 Vertical-variable-text-center">a</div>
				<div class="col-xs-10" id="firstMemoryAllocation">
					<table align="center">
						<tr id="indices"></tr>
						<tr class="" id="arrayBox1"></tr>
					</table>
				</div>
			</div>
			<div class="col-xs-12 opacity00" id="bArrayDiv">
				<div class="col-xs-1 Vertical-variable-text-center">b</div>
				<div class="col-xs-10 margin-top-3" id="secondMemoryAllocation">
					<table align="center">
						<tr class="" id="arrayBox2"></tr>
					</table>
				</div>
			</div>
			<div class="col-xs-12 opacity00" id="cArrayDiv">
				<div class="col-xs-1 Vertical-variable-text-center">c</div>
				<div class="col-xs-10 margin-top-3" id="thirdMemoryAllocation">
					<table align="center">
						<tr class="" id="arrayBox3"></tr>
					</table>
				</div>
			</div>
		</div>
		<div class="col-xs-5 col-xs-offset-1 border margin-top-2" id="functionDiv">
			<div class="col-xs-12">
				<div class="function-class opacity00">Length of given string <b>length</b> =  <span id="countLength" class="opacity00 count-length">0</span></div>
				<div id="concateId" class="opacity00">Concatenating given two strings = <span id="adding" class="add-strings"></span></div>
				<div id="compareId" class="opacity00">Comparison of two strings : <span id="comparison" class="comparison"></span></div>
			</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-4 col-xs-offset-6 margin-top-1">
			<div id="consoleId">
				<div class="output-console-title-bar">
					<span class="title"><b>Console</b></span>
				</div>
				<div class="output-console-body" id="consoleBodyDiv">
					<div class='visibility-hidden' id="printText1">Enter a string : <span class="input-text" maxlength="9" id ="inputText" spellcheck="false" style="display: inline-block;"></span></div>
					<div class='visibility-hidden' id="printText2"></div>
					<div class='visibility-hidden' id="printText3"></div>
					<div class='visibility-hidden' id="printText4">Enter the second string : <span class="input-text-two" maxlength="9" id ="inputTextTwo" spellcheck="false" style="display: inline-block;"></span></div>
					<div class='visibility-hidden' id="printText5"></div>
					<div class='visibility-hidden' id="printText6"></div>
				</div>
			</div>
		</div>
	</div>
</div>
</body>

<script type="text/javascript">
$(document).ready(function() {
	stringFunctionsReady();
});

</script>

</html>