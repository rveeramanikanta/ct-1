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

<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenLite.min.js" type="text/javascript"></script>
<script src="/js/gs/TimelineLite.min.js" type="text/javascript"></script>

<link rel="stylesheet" href="/css/font-awesome.min.css" />
<link href="/css/introjs.css" rel="stylesheet">
<link rel="stylesheet" href="/css/introjs-ct.css" />
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/animate.css" />
<script src="/secure/lang/c/js/upper-to-lowercase.js" type="text/javascript"></script>
<title>Upper to Lowercase Convertion</title>
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
	white-space: pre-line;
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

.blink {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {  
  100% { opacity: 0.0; }
}

.fa-arrow-right {
	color: red;
	position: relative;
	-webkit-animation: myfirst 1s infinite; /* Chrome, Safari, Opera */
	-webkit-animation-direction: alternate; /* Chrome, Safari, Opera */
	animation: myfirst 1s infinite;
	/* animation-direction:alternate; */
}

@keyframes myfirst { 0% {
	left: 0px;
	top: 0px;
}
100%{
	left:15px;
	top:0px;
	}
}

.address-box {
	height: 169px;
	border: 1px solid lightgray;
	border-radius: 4px;
}

.ct-demo-heading {
	background: highlight none repeat scroll 0 0;
    border-radius: 10px;
    font-size: 18px;
    position: relative;
    z-index: 9999999;
}

.creamPreTab4 {
	height: 180px;
}

.padding0 {
	padding: 0px;
}

.panel-heading {
	padding: 3px;
}

.panel-body {
	height: 46px;
}

.panel-uppercase {
	padding: 1px 58px;	
}

.panel-group {
	margin-top: 45px;
}

#startBtn {
	margin-top: 10px;
}

#in, #lowerValue, .input-char {
   width: 20px;
 /* padding: 8px; */
  border-width: 0px 0 0 0;
  background-color: #000;
  color: yellow;
}

</style>
<body>
<div class="col-xs-12 text-center">
	<div class="margin-padding-css text-center" >
		<div class="col-xs-1"></div>
		<div class="col-xs-offset-3 col-xs-3">
			<h3><span class="ct-demo-heading label label-default" id="titleName">Program to convert upper to lowercase letter</span></h3>
		</div>
	</div>
</div>
<div class="body-div col-xs-12 padding0">
<br>
<div class="col-xs-5">
<!-- <pre id="typewritingId"></pre> -->
<pre class="creamPreTab4" id="preBody">
<span id='line1'>#include &lt;stdio.h&gt;</span>
<span id='line2'>main()</span> {
 <span id='line3'>char ch;</span>
 <span id='line4'>printf( “ Enter an uppercase letter : “);</span>
 ch=<span id='line5'>getchar( );</span>
 <span id='line6'>printf (“ \n The lowercase letter of %c is : “, ch);</span>
 <span id='line7'>ch = ch + 32;</span>
 <span id='line8'>putchar(ch);</span>
<span id='line9'>}</span>
</pre>
</div>
<div class="col-xs-4">
	<div class="address-box" id="addressBox">
  		<div class="col-xs-12 " id="animationBox">
			<div class="col-xs-6">
  				<div class="panel-group visibility-hidden text-center" id="panelBox">
					<div class="panel panel-info">
						<div class="panel-heading">ch</div>
						<div class="panel-body"><span id="panelBodyUpperCaseId" class="panel-uppercase" style=" position: relative; display: inline-block"></span></div>
					</div>
					<span id="addressId" class="visibility-hidden panel-heading">1024</span>
 				</div>
     	 	</div>
     	 	<div class="col-xs-2">
     	 		<div class="visibility-hidden arrowId" id="arrowId1" style="margin-top: 50px;"><i class="fa fa-arrow-right" aria-hidden="true"></i></div>
     	 		<div class="visibility-hidden arrowId" id="arrowId2" style="margin-top: 26px;"><i class="fa fa-arrow-right" aria-hidden="true"></i></div>
     	 		<div class="visibility-hidden arrowId" id="arrowId3" style="margin-top: 16px;"><i class="fa fa-arrow-right" aria-hidden="true"></i></div>
     	 	</div>
     	 	<div class="col-xs-4">
     	 		<div class="visibility-hidden byteId" id="byteId1" style="margin-top: 47px;">variable</i></div>
     	 		<div class="visibility-hidden byteId" id="byteId2" style="margin-top: 20px;">1 byte</i></div>
     	 		<div class="visibility-hidden byteId" id="byteId3" style="margin-top: 10px;">Address</i></div>
     	 	</div>
		</div>
	</div>
</div>
	<div class="col-xs-3">
		<div id="consoleId" class="center">   <!-- style='text-transform: uppercase' -->
			<div class="output-console-title-bar">
				<span class="title"><b>Console</b></span>
			</div>
			<div class="output-console-body" id="consoleBodyDiv">
				<span id="typeChar"></span>
				 <span id="hiddenTypingChar" class="hidden">Enter an uppercase letter : <input id='inputChar' maxlength='1' class='input-char' tabindex='0'  /></span>
				<span id="totalEnterChar" ></span>
				<span id="enterHiddenToltal" class="hidden">The lowercase letter of <span id="upperLetter"></span> is : <input id="hiddenTotalEnterChar" maxlength='1' class='input-char' tabindex='0' /></span>
			</div>
		</div>
	</div>
</div>
<div><button type="button" class="col-sm-1 col-sm-offset-6 btn btn-warning opacity00" id="restartBtn" style="margin-top: 30px;">Restart </button></div>
<script>
	$(document).ready(function() {
		upperToLowerCaseReady();
	});
</script>
</body>
</html>