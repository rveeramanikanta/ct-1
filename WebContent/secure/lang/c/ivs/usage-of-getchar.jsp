<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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
<script src='/secure/lang/c/js-min/uog.min.js'></script>
<link rel="stylesheet" href="/css/font-awesome.min.css">

<title>usage of getchar()</title>
</head>

<style>

#infoDiv {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	font-size: 15px;
	padding: 9px 14px;
}

#introduction {
	background-color: rgb(243, 235, 235);
}

#heading {
	margin-top:10px;
}

#restart {
    margin-top: 13%;
} 

.margin-top-2 {
	margin-top: 2%;
}

#line1 {
	color: maroon;
}

.ct-sgreen-color {
	color: springgreen;
}

.ct-orange-color {
	color: orange;
}

.ct-code-b-gold {
	color: gold;
}

.ct-green-color {
	color: green;
}

.ct-Maroon-color {
	color: Maroon;
}

.ct-greenyellow-color {
	color: greenyellow;
}

.ct-color-spring {
	color: mediumspringgreen;
}

.ct-code-b-teal {
	font-family: message-box;
	color: teal;
}

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 13px;
	/* margin-bottom: 14px; */
	/* height: 51px; */
	overflow: auto;
	padding: 10px;
	white-space: nowrap;
}

.input-char, .input-char-2 {
	width: 30px;
	border-width: 0px 0 0 0;
	background-color: #000;
	color: #0f0;
}

div, span {
	position: relative;
}

.z-index9999999 {
	z-index: 9999999;
}

.creamPreTab4 {
	-moz-tab-size: 3;
	tab-size: 3;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 13px;
	margin: 5px;
	padding: 6px;
	white-space: pre;
}

.creamPreTable2 {
	-moz-tab-size: 3;
	tab-size: 3;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 12px;
	margin: 5px;
	padding: 6px;
	white-space: pre;
}

.margin-top-4 {
	margin-top: 4%;
}

.panel-heading, .panel-body {
	padding: 5px;
}

.panel-group {
	margin-top: 40px;
	margin-bottom: 7px;
}

.introjs-tooltip {
	min-width: 220px;
}

.syntax {
	background: black;
	border-radius: 6px;
	color: white;
	padding: 2px;
	font-family: monospace;
}

#animationBox {
	border: 1px solid green;
	border-radius: 4%;
	height: 154px;
}

.fa-arrow-left {
	color: green;
	position: relative;
	-webkit-animation: myfirst 1s infinite; /* Chrome, Safari, Opera */
	-webkit-animation-direction: alternate; /* Chrome, Safari, Opera */
	animation: myfirst 1s infinite;
	/* animation-direction:alternate; */
}

.user-btn {
	background: green;
}

.blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: 1;
 }

@keyframes blink {
	50% {
		background: orange;
	}
}

.ui-effects-transfer {
	border: 1px solid green;
	z-index: 9999999 !important;
}

@keyframes blinker {  
  100% { opacity: 0.0; }
}

@keyframes myfirst { 0% {
	left: 0px;
	top: 0px;
}
100%{
	left:10px;
	top:0px;
	}
}


</style>

<body>
<div class="main-div col-xs-12">
	<div class="row text-center" id="heading">
		<h3 class='label ct-demo-heading margin-top-2'>
			<span>Usage of getchar( )</span>
		</h3>
	</div>
	<div class="col-xs-8 col-sm-offset-2 margin-top-2 infoDiv" id="infoDiv">
		<ul>
		 	<li id="list1" class="opacity00">The function <span class="ct-code-b-teal">getchar( )</span> reads a single character from the 
		 		console.</li> 
		 	<li id="list2" class="opacity00">The <span class="ct-code-b-teal">getchar( )</span> is a standard input library function 
		 		available in <b>stdio.h</b></li>
		 	<li id="list3" class="opacity00">Below line shows the usage of <span class="ct-code-b-teal">getchar( )</span> :<br> <span class="syntax">
		 		char ch = getchar();</span></li>
		 	<li id="list4" class="opacity00">The <span class="ct-code-b-teal">getchar( )</span> returns the <span class="ct-green-color">ASCII</span> 
		 		value of the character which it reads from the standard input.
		 		<span id='nextButton' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span></li>
		</ul>
	</div>
	<div class='col-xs-12 margin-top-2'>
	<br>
	<div class="col-xs-offset-1 col-xs-6">
	<pre id="preTableDiv" class="creamPreTab4 opacity00">
#include &lt;stdio.h&gt;
void main () {
	<span id="line2">char</span><span id="line3"> ch</span>;
	<span id="line4">ch = getchar();</span>
	<span id="line5">printf("The given input character is : %c", ch);</span>
}
	</pre>
	</div>
		<div class="col-sm-3">
			<div id="consoleId" class="center opacity00" style="margin-top: 3%">
				<div class="output-console-title-bar">
					<span class="title"><b>Console</b></span>
				</div>
				<div class="output-console-body" id="consoleBodyDiv">
					<div id="hiddenTypingChar" ><input id='inputChar' maxlength='1' class='input-char' tabindex='0'/></div>
					<span id="printLineInConsole" class="opacity00">The given input character is :</span>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div class="col-xs-offset-1 col-xs-6">
	<pre id="preTableDiv2" class="creamPreTable2 opacity00">
#include &lt;stdio.h&gt;
void main () {
	<span id="preline1">int ascii_code = getchar();</span>
	<span id="preline2">printf("The ascii_code read from input is : %d \n", ascii_code);</span>
	<span id="preline3">printf("The character represented by ascii_code is : %c \n", ascii_code);</span>
}
	</pre>
		</div>
		<div class="col-sm-4">
			<div id="consoleId2" class="center opacity00" style="margin-top: 3%">
				<div class="output-console-title-bar">
					<span class="title"><b>Console</b></span>
				</div>
				<div class="output-console-body" id="consoleBodyDiv">
					<div id="hiddenTypingChar" ><input id='inputChar2' maxlength='1' class='input-char-2' tabindex='0'/></div>
					<div id="printpreLine1" class="opacity00">The ascii_code read from input is :</div>
					<div id="printpreLine2" class="opacity00">The character represented by ascii_code is :</div>
				</div>
			</div>
		</div>
	</div>
	
	<div class="col-xs-3 col-sm-offset-4">
		<div class="col-sm-5 col-sm-offset-4 margin-top-4" id="restartDiv">
			<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
		</div>
	</div>
</div>	


</body>

<script type="text/javascript">
$(document).ready(function() {
	usageOfGetcharReady();
});
</script>
</html>