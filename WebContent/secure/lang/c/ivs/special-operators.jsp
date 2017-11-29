<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/animate.css" rel="stylesheet">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/c/js-min/so.min.js"></script>

<title>special-operators</title>

<style>

.introjs-tooltiptext br {
	content: "";
	display: block;
	margin-top: 10px;
}

.introjs-tooltip {
	min-width: 400px;
}

.introjs-tooltip-min-width-custom {
	min-width: 110px;
}

.introjs-duplicate-nextbutton1 {
	background-color: green;
	margin: 0 5px !important;
}

.introjs-duplicate-nextbutton2 {
	background-color: green;
}

.buttons-div {
	margin: 20px 0 10px;
	text-align: center;
}

.heading-css {
	margin: 20px 0 10px;
}

.box-border {
	border: 1px solid grey;
	border-radius: 8px;
	margin: 30px 10px 10px 6%;
	padding: 10px;
}

.creamPreTab4 {
	tab-size: 3;
    background-color: #fffae6;
    border-radius: 8px;
    font-size: 11px;
    margin: 5px;
    padding: 10px;
    white-space: pre;
}

.output-console {
	padding: 0;
}

.output-console-body {
    background-color: black;
    padding-left: 20px;
    color: #f0f0f0;
    font-family: monospace;
    font-size: 10px;
    /* white-space: pre; */
    overflow-y: auto;
    line-height: 1.2;
}

.heading-text-div {
	border: 1px solid grey;
	border-radius: 8px;
	padding: 5px 10px;
	font-family: monospace;
}

.ct-code-b-green {
	font-weight: bold;
	color: green;
}

.ct-code-text-css {
	background-color: black;
	border-radius: 12px;
	color: white;
	font-family: monospace;
	font-size: 12px;
	padding: 4px 10px;
}

.padding5  {
	padding: 5px;
}

.background-color-pink {
	background-color: pink;
}

.z-index {
	position: relative;
	z-index: 9999999;
	background-color: white;
}
</style>

</head>
<body>

<div class='col-xs-12'>
	<div class='text-center heading-css'>
		<h1 class='label ct-demo-heading'>Special Operators</h1>
	</div>
	<div class='buttons-div'>
		<!-- <button type="button" class="btn btn-success" id="startBtn">Start</button> -->
		<button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button>
	</div>
	
	<div class="col-xs-12">
		<div class='col-xs-offset-2 col-xs-8 heading-text-div' id='headingTextBox'>
			<div class='opacity00'>
				They are two <span class='ct-code-b-green'>special</span> operators. 
				They are: <span class='ct-code-b-green'>comma</span> and <span class='ct-code-b-green'>sizeof()</span> operators.
			</div><br>
			<div class='opacity00 commaLine'>
				<span class='ct-code-b-green'>Comma</span> operator is used to link the related expressions together. 
				For example the below two statements:
			</div>
			<div class='opacity00 padding5 commaLine'><span class='ct-code-text-css'>int x = 0;</span></div>
			<div class='opacity00 padding5 commaLine'><span class='ct-code-text-css'>int y = 0;</span></div>
			<div class='opacity00 commaLine'>can be rewritten using a <span class='ct-code-b-green'>comma</span> operator as:</div>
			<div class='opacity00 padding5 commaLine'><span class='ct-code-text-css'>int x = 0, y = 0;</span></div><br>
			<div class='opacity00 sizeofLine'>
				<span class='ct-code-b-green'>sizeof()</span> operator is also called <b>compile time</b> operator and when used with an 
				operand it returns the number of bytes the operand occupies.
			</div>
			<div class='opacity00 sizeofLine'>The operand may be a variable, constant or a data type. For example in the below statement:</div>
			<div class='opacity00 padding5 sizeofLine'><span class='ct-code-text-css'>int a = sizeof(int);</span></div>
			<div class='opacity00 sizeofLine'>The value stored in the <b>a</b> is the number of bytes occupied by an <b>int</b> data type.</div>
		</div>
	</div>
	
	<div class='col-xs-12 visibility-hidden' id='demoDiv'>
		<div class='col-xs-6 box-border'>
<pre class='creamPreTab4' id='preCode'>
#include &ltstdio.h&gt
void main() {
	<span id='line1'>int a, f, g, e[10];</span>
	<span id='line2'><span>float</span> <span>b</span>;</span>
	<span id='line3'><span>double</span> <span>c</span>;</span>
	<span id='line4'><span>char</span> <span>d</span>;</span>
	<span id='line5'><span>a</span> = (<span>f = 5</span>, <span>g = 4</span>, <span>f + g</span>);</span>
	<span id='line6'>printf("Value of a = %d\n", a);</span>
<span id='sizeOfPrintfLines'>	<span id='line7'>printf("Size of int = %d bytes\n", sizeof(a));</span>
	<span id='line8'>printf("Size of float = %d bytes\n", sizeof(b));</span>
	<span id='line9'>printf("Size of double = %d bytes\n", sizeof(c));</span>
	<span id='line10'>printf("Size of char = %d byte\n", sizeof(d));</span>
	<span id='line11'>printf("Size of integer type array having 10 elements = %d bytes\n", sizeof(e));</span></span>
}
</pre>
		</div>
		<div class="output-console col-xs-4" id='outputBox'>
			<div class="output-console-title-bar">
				<span>Output</span>
			</div>
			<div>
				<div class="output-console-body">
					<div id="firstVal" class='visibility-hidden'>Value of a = 9</div>
					<div id="secondVal" class='visibility-hidden'>Size of int = 4 bytes</div>
					<div id="thirdVal" class='visibility-hidden'>Size of float = 4 bytes</div>
					<div id="fourthVal" class='visibility-hidden'>Size of double = 8 bytes</div>
					<div id="fifthVal" class='visibility-hidden'>Size of char = 1 byte</div>
					<div id="sixthVal" class='visibility-hidden'>Size of integer type array having 10 elements = 40 bytes</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script>
	$(document).ready(function() {
		specialOperatorsReady();
	});
</script>

</body>
</html>