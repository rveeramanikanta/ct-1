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
<script src="/secure/lang/c-my/js/usage-of-hash-define.js" type="text/javascript"></script>
<title>Usage of #define</title>
</head>
<style>
#informationdiv {
	background-color: rgb(243, 235, 235);
	border-radius: 2px;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
	height: 80px;
	margin-top: 20px;
	/*   color: green; */
	padding: 10px;
}

.introjs-tooltip {
	min-width: 280px;
}

.ct-demo-heading {
	background: highlight none repeat scroll 0 0;
	border-radius: 10px;
	font-size: 18px;
	position: relative;
	z-index: 9999999;
}

.ct-code-b-green {
	font-family: monospace;
	font-weight: bold;
	color: green;
}

.ct-code-b-brown {
	font-family: monospace;
	font-weight: bold;
	color: brown;
}

.position-relative {
	position: relative;
}

.display-inline {
	display: inline-block;
}

.preJavaBoxCodeDiv {
	border: 1px solid grey;
	border-radius: 4px;
	/* height: 240px; */
	margin-top: 10px;
}

.output-console-title-bar {
	background-image: -moz-linear-gradient(center top, #e8e8e8, #bcbbbc);
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-size: 0.75em;
	/* margin-top: 20px; */
	padding: 2px 0;
	text-align: center;
}

.blinking-orange {
	animation-name: blink-background-orange;
	animation-duration: 1s;
	animation-iteration-count: 1s;
	animation-direction: alternate;
}

@keyframes blink-background-orange {
	50% {
		background-color: orange;
	}
}

.output-console-body {
	background-color: black;
	border-bottom-left-radius:						 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 14px;
	margin-bottom: 14px;
	height: 88px;
	overflow: auto;
	padding: 10px;
	white-space: inherit;
}

.preJavaBoxCodeDiv1 {
	border: 1px solid grey;
	border-radius: 4px;
	/* height: 170px; */
	margin-top: 10px;
}

.ct-code-b-red {
	font-family: monospace;
	font-weight: bold;
	color: rgb(252, 66, 66);
}

.ct-code-b-yellow {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
}

.ct-code-b-blue {
	font-family: monospace;
	font-weight: bold;
	color: blue;
}

.ct-code-b-brown {
	font-family: monospace;
	font-weight: bold;
	color: brown;
}

.ct-code-b-green {
	font-family: monospace;
	font-weight: bold;
	color: green;
}

.panel-heading {
	padding: 2px;
}

.enter-values {
	border-width: 0px 0 0 0;
	background-color: #000;
	color: yellow;
	border: 1px solid grey;
	border-radius: 4px;
}

.next-btn {
	border-radius: 3px !important;
	background-color: green !important;
	margin: 0 5px !important;
}
</style>
<body>
	<div class="col-sm-12 text-center">
		<div class="margin-padding-css text-center">
			<div class="col-sm-1"></div>
			<div class="col-sm-offset-3 col-sm-3">
				<h3>
					<span class="ct-demo-heading label label-default" id="titleName">Usage of #define</span>
				</h3>
			</div>
		</div>
	</div>
	<div class='col-xs-12'>
		<div id='informationdiv' class='col-xs-8 col-xs-offset-2 opacity00'>
			<ul id='defination' class='opacity00'>
				<li id='list1' class='opacity00'><span class='ct-code-b-green'>#define</span>
					is a preprocessor command which replaces symbolic name with
					constant values.</li>
				<li id='list2' class='opacity00'><span class='ct-code-b-green'>hash</span>
					is a preprocessor which executes the directives before the
					compilation process.</li>
				<li id='list3' class='opacity00'>The format of #define is : <span class='ct-code-b-green' style='margin-left: 15px;'>#define symbolicname constant</span> <span id="nextBtn" class='introjs-button next-btn opacity00'>Next &#8594;</span><span id='stepId'></span></li>
			</ul>
		</div>
	</div>
	<div class="col-xs-12 padding0">
		<div class="col-xs-6">
			<div class="">
				<pre class="creamPreTab4 preJavaBoxCodeDiv opacity00" id="preBody">
<span id="line1">#include &lt;stdio.h&gt;</span>
<span id="line2"><b>#define</b> PI 3.141</span>
void <span id="line3"><b>main()</b></span> {
  <span id="line4">float radius, area, circumference;</span>
  <span id="line5"><b>printf</b>("Enter the radius: ");</span>
  <span id="line6"><b>scanf</b>("<span id="scanPercent">%f</span>", <span
						id="scanAmpPercentId">&amp;radius</span>);</span>
  <span id="line7">area = <span id="piValue1"
						class="position-relative display-inline">PI</span> * radius * radius;</span>
  <span id="line8">circumference = 2 * <span id="piValue2"
						class="position-relative display-inline">PI</span> * radius;</span>
  <span id="line9"><b>printf</b>("Area of a circle is %f\n", <b>area</b>);</span>
  <span id="line10"><b>printf</b>("Circumference of circle : %0.4f\n", <b>circumference</b>);</span>
<span id="line11">}</span>
			</pre>
			</div>
		</div>
		<div class="col-xs-6">
			<div class="preJavaBoxCodeDiv opacity00" id="animationDiv" style="height: 244px;">
				<div class="col-xs-12" style="margin-top: 10px;">
					<div class="col-xs-4">
						<div class="panel-group text-center opacity00 position-relative"
							id="radiusId">
							<div class="panel panel-info" style="height: 72px;">
								<div class="panel-heading">radius</div>
								<div class="panel-body text-center">
									<span id="panelRadiusBody" class="visibility-hidden"><span
										id="radiusValue" class="ct-code-b-green"></span></span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xs-4">
						<div class="panel-group text-center opacity00 position-relative"
							id="areaId">
							<div class="panel panel-info" style="height: 72px;">
								<div class="panel-heading">area</div>
								<div class="panel-body text-center">
									<span id="panelAreaBody"
										class="visibility-hidden ct-code-b-green"></span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xs-4">
						<div class="panel-group text-center opacity00 position-relative"
							id="circumferenceId">
							<div class="panel panel-info" style="height: 72px;">
								<div class="panel-heading">circumference</div>
								<div class="panel-body text-center">
									<span id="panelCircumferenceBody"
										class="visibility-hidden ct-code-b-green"></span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-12">
					<div class="col-xs-offset-1 col-xs-9">
						<div id="consoleId" class="center opacity00">
							<div class="output-console-title-bar">
								<span class="title"><b>Console</b></span>
							</div>
							<div class="output-console-body" id="consoleBodyDiv">
								<span id="typeRadiusId" class=""></span> <span
									id="enterRadiusValue" class="hidden">Enter the radius :
									<input id='inputChar' maxlength='3' class='enter-values'
									tabindex='0' />
								</span> <span id="finalAreaValue"></span><br /> <span id="finalCircumferenceValue"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="col-xs-12 padding0">
		<div class="col-xs-6">
			<div class="">
				<pre class="creamPreTab4 preJavaBoxCodeDiv1 opacity00" id="preBody1">
#include&lt;stdio.h&gt;
<span id="line12"><b>#define</b> CUBE(num) num * num * num</span>
void <span id="line13"><b>main()</b></span> {
    <span id="line14">int a;</span>
    <span id="line15"><b>printf</b>("Enter a number: ");</span>
    <span id="line16"><b>scanf</b>("<span id="scanPercent1">%d</span>", <span id="scanAmpPercentId1">&amp;a</span>);</span>
    <span id="line17"><b>printf</b>("The cube of the given number = %d", <span id="cubeAId"><span id="aCubeValue" class="position-relative display-inline">CUBE(a)</span></span>)</span>;
<span id="line18">}</span>
				</pre>
			</div>
		</div>
		<div class="col-xs-6">
			<div class="preJavaBoxCodeDiv1 opacity00" id="animationDiv1" style="height: 188px;">
				<div class="col-xs-12" style="margin-top: 10px;">
					<div class="col-xs-3">
						<div class="panel-group text-center visibility-hidden" id="aValue">
							<div class="panel panel-info">
								<div class="panel-heading" style="padding: 1px 25px;">a</div>
								<div class="panel-body text-center">
									<span id="panelABody" class="visibility-hidden"><span id="aNumber" class="ct-code-b-green"></span></span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xs-9">
						<div id="consoleId1" class="center opacity00">
							<div class="output-console-title-bar">
								<span class="title"><b>Console</b></span>
							</div>
							<div class="output-console-body" id="consoleBodyDiv1">
								<span id="typeNumberId" class=""></span><span
									id="enterNumberId" class="hidden">Enter a number : <input
									id='inputChar1' maxlength='3' class='enter-values' tabindex='0'
									onkeypress="return isNumber(event)" /></span><br /> <span
									id="finalCubeValue"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div>
		<button type="button" class="col-sm-1 col-sm-offset-6 btn btn-warning opacity00" id="restartBtn" style="margin-top: 10px;">Restart</button>
	</div>
<script type="text/javascript">
$(document).ready(function() {
	usageOfHashDefineReady();
});
</script>
</body>
</html>
