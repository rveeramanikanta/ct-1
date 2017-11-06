
<%@ page language="java" contentType="text/html; charset=UTF-8" 
pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>anil demo one</title>
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/font-awesome-animation.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/secure/lang/c/js-min/pmt.min.js" type="text/javascript"></script>

<style>

.margin-top20 {
	margin-top: 20px;
}

#starDisplay {
    font-family: monospace;
}

#topDiv {
	border-radius: 6px;
	height: 200px;
	padding: 10px;
}

.background-color-yellow {
	background-color: yellow;
}

.background-color-green {
	background-color: #90EE90;
}

.background-color-blue {
	background-color: #87CEFA;
}

pre {
	border:medium none;
}

#codeDiv pre {
	tab-size: 4;
	-moz-tab-size: 4;
}

.output-console-body {
    background-color: black;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    color: #f0f0f0;
    font-family: monospace;
    font-size: 14px;
    height: 220px;
    overflow: unset;
    padding: 10px;
    white-space: nowrap;
}


.z-index {
	background-color: white;
	position: relative;
	z-index: 10000000 !important;
}

.outline-none {
	outline:none;
}

.error-msg {
	color: red;
	font-weight: bold;
}

[contenteditable=true]:empty:before {
  content: attr(placeholder);
  color: gray;
}

.display-inline-block {
	display: inline-block;
}

.ct-code-b-red {
	color: #ff0000;
}

.color-white {
	color: white;
	font-weight: bold;
}

.user-btn {
	background-color: green;
}


.blinking {
	animation-name: blinking;
	animation-duration: 0.5s;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
}

@keyframes blinking { 
	50% {
		background-color: lightblue;
	}
}

.space {
	color : yellow;
	
}

</style>
</head>

<script>
	$(document).ready(function() {
		pyramidMultiplicationTableReady();
	});
</script>
<body>

	<div class="ct-box-main padding0">
		<div class='text-center'>
			<h1 class='label ct-demo-heading' id="heading">Sample Program to Print Pyramid</h1>
		</div>
		<div class='row'>
		<div class="col-xs-12 margin-top20 center">
		<div  id='topDiv' class='col-xs-offset-4 col-xs-4'>
		<div id='typingDiv'>
						<ul>
							<li>The pyramid of triangle can be represented as &emsp; 
							</li>
							<span class='user-btn introjs-button' onclick='StarPreview()'>Next&#8594;</span>
						</ul>
					</div>
					
		<pre class='opacity00' id='starDisplay'>
		      1
		      2 4
		      3 6 9
		      4 8 12 16
		      5 10 15 20 25
		      ..........</pre>
	</div></div>
		</div>
	</div>
	<div class='col-xs-12 center'>
	<div class='col-xs-offset-2 col-xs-4' ><div id="codeDiv" class='opacity00'>
	<pre class='bg-info'>
#include &lt;stdio.h&gt;
<span id='mainMethod'>void <span id='main'>main()</span> {
	<span id='variableDeclaration'>int rows, i, j;</span>
	<span id='getPrintf'>printf("Enter number of rows: ");</span>
	<span id='getScanf'>scanf("%d", &rows);</span>
	<span id="totalForLoop"><span class='outer'>for (i = 1; i &lt;= rows; i++) {</span>
		<span id="jForLoop" class="inner-one">for ( j = 1; j &lt;= i; j++) {</span>
			<span id='printNumber' class="inner-one">printf("%d ",(i*j));</span>
		<span class="inner-one">}</span>
		<span id="codeNextLine" class='outer'>printf("\n");</span>
	<span class='outer'>}</span></span>
}</span>	</pre>
	</div></div>
	<div class='col-xs-4'><div id="outputDiv">
	<div id="consoleId1" class="center opacity00">
						<div class="output-console-title-bar">
							<span class="title"><b>Console</b></span>
						</div>
						<div class="output-console-body" id="consoleBodyDiv1">
							<span id="animationDivText" class='opacity00'>Enter number of rows:&emsp;<div spellcheck="false" class="opacity00 empty matrix input-char outline-none" 
							id="rowValue" placeholder="rows" maxlength="0" contenteditable="true" style='display: inline-block; font-family: monospace; font-weight: bold;'></div></span>
					</div></div>
	
	</div></div>
	<div class='col-xs-12 margin-top20 text-center'>
		<span id='restart' class='btn btn-warning btn-sm opacity00'>Restart &nbsp;<i class='fa fa-refresh'></i></span>
	</div>
	</div>
	
</body>
</html>