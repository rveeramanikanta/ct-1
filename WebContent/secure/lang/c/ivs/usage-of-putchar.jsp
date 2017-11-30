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
<link rel="stylesheet" href="/css/font-awesome.min.css">
<script src='/secure/lang/c/js-min/uop.min.js'></script>

<title>Usage of putchar()</title>
</head>

<style>
#infoDiv {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	font-size: 15px;
	padding: 11px 12px;
	font-family:monospace;
}

.margin-top-2 {
	margin-top: 2%;
}

#heading {
	margin-top:10px;
}

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 14px;
	margin-bottom: 14px;
	height: 85px;
	overflow: auto;
	padding: 10px;
	white-space: nowrap;
}

.z-index9999999 {
	z-index: 9999999;
	background: white;
}

.input-char {
	width: 30px;
	/* padding: 8px; */
	border-width: 0px 0 0 0;
	background-color: #000;
	color: yellow;
}

.output-char {
	width: 30px;
	border-width: 0px 0 0 0;
	background-color: #000;
	color: #0f0;
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
.ct-color-red {
	color: red;
}

.ct-Maroon-color {
	color: Maroon;
}

.ct-greenyellow-color {
	color: greenyellow;
}

.ct-color-gold {
	color: gold;
}

.ct-color-spring {
	color: mediumspringgreen;
}

.ct-code-b-teal {
	font-family: message-box;
	color: teal;
}
#restart {
    margin-top: 13%;
}

#animationBox, #addressBox {
	/* border: 1px; */
	border-radius: 4%;
	height: 130px;
}

.panel-heading {
	padding: 2px;
}
.panel-body {
	padding: 18px;	
}

.panel-group {
	margin-top: 18px;
	margin-bottom: 7px;
}

.creamPreTab4 {
	-moz-tab-size: 3;
	tab-size: 3;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 13px;
	margin: 5px;
	padding: 10px;
	white-space: pre;
}

.ui-effects-transfer {
	border: 1px solid green;
	 z-index: 9999999 !important;
}

.user-btn {
	background: green;
}

.introjs-tooltip {
	min-width: 240px;
}

.fa-arrow-right {
	color: green;
	position: relative;
	-webkit-animation: myfirst 1s infinite; /* Chrome, Safari, Opera */
	-webkit-animation-direction: alternate; /* Chrome, Safari, Opera */
	animation: myfirst 1s infinite;
	/* animation-direction:alternate; */
}

.finalText {
	border: 1px solid gray;
	border-radius: 8px;
	min-height: 45px;
	padding: 6px;
	font-family: monospace;
}

.syntax {
	background: black;
	border-radius: 6px;
	color: white;
	padding: 2px;
	font-family: monospace;
}

div, span {
	position: relative;
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

</style>

<body>
<div class="main-div col-xs-12">
	<div class="row text-center" id="heading">
		<h3 class='label ct-demo-heading margin-top-2'>
			<span>Usage of putchar( )</span>
		</h3>
	</div>
	<div class="col-xs-9 col-xs-offset-1 margin-top-2 infoDiv" id="infoDiv">
		<ul>
			<li id="list1" class="opacity00">The function <span class="ct-code-b-teal">putchar( )</span> prints a single character on to the console.</li>
			<li id="list2" class="opacity00"><span class="ct-code-b-teal">putchar( )</span> is a standard output library function 
				 available in <b>stdio.h</b>.</li>
			<li id="list3" class="opacity00">Below line shows the usage of <span class="ct-code-b-teal">putchar( )</span> function :<br>
				 <span class="syntax">putchar(variable);</span></li>
			<li id="list4" class="opacity00">When we enter a character using keyboard, the <span class="ct-Maroon-color">getchar( )</span> reads 
				and converts it to <span class="ct-green-color">ASCII</span> value then stores it in the memory.</li>
			<li	id="list5" class="opacity00">The <span class="ct-Maroon-color">getchar( )</span> is used to read where as the 
				<span class="ct-code-b-teal">putchar( )</span> is used to write or send the content to the output device.
				<span id='nextButton' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span></li>
		</ul>
	</div>
	<div class='col-xs-12 margin-top-2'>
		<div class="col-xs-4">
			<div class="col-xs-9 col-xs-offset-3">
<pre id="preTableDiv" class="creamPreTab4 opacity00" style="margin-top: 4%">
#include &lt;stdio.h&gt;
void main() {
	<span id="line3">char ch = getchar();</span>
	<span id="line4">putchar(<span id="variableId">ch</span>);</span>
}
</pre>
			</div>
		</div>
		<div class="col-xs-3">
			<div class="col-xs-12 " id="animationBox" style="margin-top: 3%">
				<div class="address-box" id="addressBox">
					<div class="col-xs-5 col-xs-offset-3 text-center visibility-hidden" id="memoryBox">
						<div class="panel-group" id="panelBox">
							<div class="panel panel-info">
								<div class="panel-heading"><b>ch</b></div>
								<div class="panel-body" id="panelBody"></div>
							</div>
			 			</div>
				 		<div>
				 		<span id="addressId">2034</span>
				 		</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-2">
			<div id="consoleId" class="center opacity00"  style="margin-top: 3%">
				<div class="output-console-title-bar">
					<span class="title"><b>Console</b></span>
				</div>
				<div class="output-console-body" id="consoleBodyDiv">
					<div id='inputValue'><input id='inputChar' maxlength='1' class='input-char' tabindex='0'/></div>
					<span id="typingChar"><input id='outputChar' maxlength='0' class='output-char' tabindex='0' contenteditable="false"/></span>
				</div>
			</div>
		</div>
	</div>
	<div class='col-xs-12 margin-top-2'>
		<div class="col-xs-4">
				<div class="col-xs-9 col-xs-offset-3 margin-top-2">
	<pre id="preDiv" class="creamPreTab4 visibility-hidden" style="margin-top: 8%">
#include &lt;stdio.h&gt;
void main() {
	<span id="line5" class="">putchar('<span id="constantId">p</span>');</span>
	<span id="line6" class="">putchar(65);</span>
}
	</pre>
			</div>
		</div>
		<div class="col-xs-2 col-xs-offset-1">
			<div id="consoleId1" class="center opacity00"  style="margin-top: 22%">
				<div class="output-console-title-bar">
					<span class="title"><b>Console</b></span>
				</div>
				<div class="output-console-body" id="consoleBodyDiv">
					<div><span id="constantChar"></span></div>
					<span id="asciiChar"></span>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div class="col-xs-8 col-xs-offset-2 opacity00 finalText" id="finalText">
			<span>So the <span class='ct-green-color'>putchar()</span> can either take a single character enclosed 
		in double quotes to print or a numerical value in which case its corresponding ASCII character will be printed to the console.</span>
		</div>
	</div>
	<div class="col-xs-1 col-xs-offset-5 margin-top-2" id="restartDiv">
		<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
	</div>
</div>

</body>

<script type="text/javascript">
$(document).ready(function() {
	usageOfPutcharReady();
});
</script>

</html>