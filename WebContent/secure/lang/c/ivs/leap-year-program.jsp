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
<script src='/secure/lang/c/js/leap-year-program.js'></script>

<title>Insert title here</title>

<style type="text/css">

.info-div {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	padding: 11px 12px;
	font-family: monospace;
}

.margin-top-1 {
	margin-top: 1%;
}

.margin-top-2 {
	margin-top: 2%;
}

.border-css {
	border: 1px solid lightgray;
	border-radius: 10px;
	padding: 3px;
}

.introjs-tooltip {
	min-width: 280px;
}

.user-btn {
	background-color: green;
}

.display-inline {
	display: inline-block;
}

.background-effect {
	color: black;
	background-color: yellow;	
}

.padding-6 {
	padding: 6px;
}

.padding-3 {
	padding: 3px;
}

.border-top {
	border-top: 2px solid;
}

.border {
	background-color: #f2f9d7;
	border: 1px solid;
	border-radius: 13px;
	height: 270px;
}

.outline-css {
	outline: medium none navy;
}

.ct-color-red {
	color: red;
}

.z-index9999999 {
	background-color: white;
	z-index: 9999999 !important;
}

.ct-color-orangered {
	color: orangered;
}

.ui-effects-transfer {
	border: 1px solid green;
	z-index: 9999999 !important;
	opacity: 1;
}

.ct-color-red {
	color: red;
}

.ct-code-b-teal {
	color: teal;
}

.ct-demo-mediumblue {
	color: mediumblue;
}

.ct-color-teal {
	color: teal;
}

.ct-color-turquoise {
	background-color: turquoise;
}

.ct-year-color {
	color: #002B47;
}

.ct-code-b-green {
	color: green;
}

.ct-code-b-turquoise {
	color: turquoise;
	font-weight: bold;
}

.ct-color-red {
	color: red;
	font-weight: bold;
}

.blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: 1;
 }

@keyframes blink {
	50% {
		background: turquoise;
	}
}

div, span, li {
	position: relative;
}

pre {
	border: 1px;
	-moz-tab-size: 3;
	tab-size: 3;
}

td {
	width: 20px;
}

.blinking-once {
	animation-name: blinking;
	animation-duration: 1s;
	animation-iteration-count: 1;
 }

@keyframes blinking {
	50% {
		background: orange;
	}
}

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 11px;
	margin-bottom: 14px;
	height: 80px;
	overflow: auto;
	padding: 10px;
	white-space: nowrap;
}

.dispaly-inline {
	display: inline-block;
}

.input-char {
	width: 30px;
	border-width: 0px 0 0 0;
	background-color: #000;
	color: #0f0;
}

.margin-left-9 {
	margin-left: 9%;
}

in {
	color: rgb(62, 50, 173);
	font-weight: bold;
}

ink {
	color: 	rgb(255, 0, 191);
}

go {
	color: rgb(134, 19, 19);
	font-weight: bold;
}

g {
	color: 	rgb(64, 130, 65);
	font-weight: bold;
}

r {
	color: red;
}






</style>

</head>
<body>
<div class="col-xs-12">
	<div class="text-center margin-top-2">
		<h3 class='label ct-demo-heading'>
			<span>Example With Nested if-else</span>
		</h3>
	</div>
	<div class="col-xs-12">
		<div class="col-xs-8 col-xs-offset-2 margin-top-1 info-div" id="infoDiv">
			<ul>
				<li id="list1" class="opacity00">Any year except <span class='ct-code-b-green'>century years</span> (years ending with 00) is 
					said to be the <span class="ct-code-b-green">leap year</span> only when it is divisible by <span id='multiplyId'><b>4</b></span>.</li>
				<li id="list2" class="opacity00">A <span class='ct-code-b-green'>century year</span> is said to be the <span class="ct-code-b-green">
					leap year</span> only when it is divisible by <span id="multipleOfCenturyId"><b>400</b></span>.</li>
			</ul>
		</div>
	</div>
	<div class="col-xs-12 margin-top-2">
		<div class="col-xs-5 col-xs-offset-1">
			<div class="col-xs-12 margin-top-2" id="conditionDiv" style="border-radius: 10px;">
				<pre id="preCode" class="opacity00">
<in>#include</in> <ink>&lt;stdio.h&gt;</ink>
<g>void</g> main() {
	<g>int</g> year;
	<span id='printfLine1'>printf(<ink>"Enter a year: "</ink>);</span>
	<span id='scanfLine1'>scanf(<ink>"<in>%d</in>"</ink>,&year);</span>
	<span id="ifStatement1"><go>if</go> (<span id="ifCondition">year % <ink>4</ink> == <ink>0</ink></span>)</span> {
		<span id="ifStatement2"><go>if</go> (<span id="ifConditionForCenturyYear">year % <ink>100</ink> == <ink>0</ink></span>)</span> {
			<span id="ifStatement3"><go>if</go> (<span id="elseIfCondition">year % <ink>400 == <ink>0</ink></span>)</span> {
				<span id="printLine1">printf(<ink>"<in>%d</in> is a leap year."</ink>, year);</span>
			} <span id='elseSpan1'><go>else</go> {
				<span id="printLine2">printf(<ink>"<in>%d</in> is not a leap year."</ink>, year);</span>
			}</span>
		} <span id='elseSpan2'><go>else</go> {
			<span id="printLine3">printf(<ink>"<in>%d</in> is a leap year."</ink>, year);</span>
		}</span>
	} <span id='elseSpan3'><go>else</go> {
		<span id="printLine4">printf(<ink>"<in>%d</in> is not a leap year."</ink>, year);</span>
	}</span>
}
</pre>
			</div>
		</div>
		<div class="col-xs-3 col-xs-offset-1" style="margin-left: 4%; margin-top: 4%;">
			<div class="col-xs-12">
				<div id="consoleId" class="center opacity00">
					<div class="output-console-title-bar">
						<span class="title"><b>Console</b></span>
					</div>
					<div class="output-console-body" id="consoleBodyDiv">
						<div class='opacity00 dispaly-inline' id="printText1">Enter a year:</div>
						<div class="dispaly-inline"><input class="console-input-line dispaly-inline input-char" id="inputYear" maxlength="4"></div>
						<div class='' id="printText2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12">
		<div class="text-center margin-top-2" id="restartDiv">
			<a class="btn btn-warning opacity00" id="restart"><i class="fa fa-refresh"></i>&nbsp;Restart</a>
		</div>
	</div>
</div>
</body>

<script type="text/javascript">

$(document).ready(function() {
	leapYearProgramReady();
});

</script>

</html>