<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/font-awesome.min.css" />
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css" />

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenLite.min.js" type="text/javascript"></script>
<script src="/js/gs/TimelineLite.min.js" type="text/javascript"></script>
<script src="/secure/lang/c/js-min/scd.min.js" type="text/javascript"></script>

<title>scanf() with comma</title>

<style type="text/css">

.margin-top-20 {
	margin-top: 20px;
}

.padding0 {
	padding: 0px;
}

.box-border {
	border: 1px solid gray;
	border-radius: 8px;
}

.code-div, .address-div {
	height: 250px;
}

.output-console-body {
	height: 100px;
}

.output-console {
	margin: 0;
}

.creampretab4 {
	-moz-tab-size: 2;
	tab-size: 2;
	background-color: #fffae6 !important;
	line-height: 2.5;
}

.main-div {
	margin-top: 40px;
}

.center {
	margin-left: auto;
	margin-right: auto;
}

#outputDiv {
	margin-top: 45px;
}

.errMsg {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

.blinking-yellow {
	animation-name: blink-border-background-yellow;
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-direction: alternate;
}

@keyframes blink-border-background-yellow { 
	50% {
		border-color: yellow;
		background: yellow;
	}
}

.blinking-orange {
	animation-name: blink-background-orange ;
	animation-duration: 1s ;
	animation-iteration-count: 1s;
	animation-direction: alternate ;
}

@keyframes blink-background-orange { 
	50% {
		background-color: orange;
	}
}

.zIndex {
	z-index: 10000000;
	position: relative;
}

.int-num {
	border-width: 0;
	background-color: black;
}

.ct-code-b-red {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

.introjs-tooltip {
	min-width: 300px;
}

.user-btn {
	background-color: green;
}

.ui-effects-transfer {
	border: 2px solid yellow;
	border-radius: 6px;
	position: relative;
	z-index: 9999999;
}

.popover-content {
    background-color: blue;
    border-radius: 4px;
    color: white;
    font-size: 9px;
    font-weight: bold;
    margin: 1px;
    padding: 2px;
}

.popover {
	z-index: 10000000;
}

.output-console-title-bar {
	background-color: rgba(165, 165, 165, 0.5);
}

.b-blue {
	font-weight: bold;
	font-family: monospace;
	color: blue;
}

.b-black {
	background-color: black;
	border-radius: 12px;
	color: white;
	font-family: monospace;
	font-size: 12px;
	padding: 4px 10px;
}
#description {
font-family:monospace;
}
</style>

<script type="text/javascript">
	$(document).ready(function() {
		scanfCommaDotReady();
	});
</script>

</head>
<body>

<div class="text-center margin-top-20">
	<h1 id="heading" class="label ct-demo-heading text-center">Working with scanf()</h1>
</div>

<div class=" margin-top-20 col-xs-12">
  <div class="col-xs-8 col-xs-offset-2   box-border" id="description" style="float: unset;">
  	<div id="desText" style="padding: 7px 0px; line-height: 1.7;"> 
	  	<ul>
	 		<li id="desList1" class="opacity00">In the statement <span class="b-black">scanf
	 			("<span class='ct-code-b-yellow'>%d</span>,<span class='ct-code-b-yellow'>%d</span>", &a,&b);</span> 
	 			"<span class='b-blue'>%d</span>,<span class='b-blue'>%d</span>" is called the <b>control string</b> 
	 			and <span class='b-blue'>&a</span>, <span class='b-blue'>&b</span> are called the list of arguments.</li>
			<li id="desList2" class="opacity00">The control string in a <span class='b-blue'>scanf()</span> function can contain spaces, commas, 
				dots or any other characters in between format character sequences as shown above. 
				<a class='introjs-button user-btn' onclick='nextStep()'>Next &#8594;</a></li>
		</ul>
  	 </div>
  </div>
</div>

<div class="main-div col-xs-12" id="mainDiv">
	<div class="col-xs-4 col-xs-offset-2" id="codeDiv">
	<pre id="codeAnimation" class='creampretab4 box-border code-div opacity00 col-xs-12'>
	<span id="varDeclaratn">int a, b;</span>
	<span id="printf1">printf("Enter two numbers: ");</span>
	<span id="scanf1">scanf("<span id='percentile1'><span id='dBlink1'>%d</span><span id='commaBlink'>,</span><span id='dBlink2'>%d</span></span>", <span id='scanNum1' data-trigger='focus' data-animation='false' rel='popover' data-placement='top' data-toggle='popover' data-content='<span id="popoverContent1">44</span>' >&a</span>, <span id='scanNum2' data-trigger='focus' data-animation='false' rel='popover' data-placement='top' data-toggle='popover' data-content='<span id="popoverContent2">55</span>'>&b</span>);</span>
	<span id="printf2">printf("a = %d b = %d", a, b);</span>
	<span id="printf3">printf("Enter two numbers: ");</span>
	<span id="scanf2">scanf("<span id='percentile2'><span id='dBlink3'>%d</span><span id='codeDot1'>.</span><span id='dBlink4'>%d</span>", <span id='scanNum3' data-trigger='focus' data-animation='false' rel='popover' data-placement='top' data-toggle='popover' data-content='<span id="popoverContent3">12</span>' >&a</span>, <span id='scanNum4' data-trigger='focus' data-animation='false' rel='popover' data-placement='top' data-toggle='popover' data-content='<span id="popoverContent4">55</span>' >&b</span>);</span></span>
	<span id="finalPrintf">printf("a = %d b = %d", a, b);</span></pre>
	</div>

		<div class="col-xs-4 box-border address-div opacity00" id="addressDiv">
			<div id="addressLocation" style="margin-top: 72px;" class="opacity00">
				<div class="col-xs-2 col-xs-offset-3  text-center"><b>a</b></div>
				<div class="col-xs-2 col-xs-offset-1 text-center"><b>b</b></div>
				<div class="col-xs-2 col-xs-offset-3  box-border  text-center"
					style="height: 50px; line-height: 50px;"><span id="givenNum1" class="opacity00"></span></div>
				<div class="col-xs-2 col-xs-offset-1  box-border text-center"
					style="height: 50px; line-height: 50px;"><span id="givenNum2" class="opacity00"></span></div>
			</div>
		</div>

</div>

<div id="outputDiv" class="col-xs-12">
<div class="col-xs-4 col-xs-offset-4">
<div class="output-console padding0 opacity00" id="consoleId" style="">
						<div class="output-console-title-bar">
								<span class="title">Output</span>
						</div>
								
<div class="output-console-body" style="color: white;">
<span id="runEditor1"></span>
<span id="runEditor2"></span>
<span id="runEditor3"></span>
<span id="runEditor4"></span>
<span id="runEditor5"></span>
</div>
</div>
</div>
</div>
<div class="col-xs-12 margin-top-20 text-center"><span id="restart" class="btn btn-warning opacity00">Restart</span></div>
</body>
</html>