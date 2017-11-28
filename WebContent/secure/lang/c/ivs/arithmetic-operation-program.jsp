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

<script src="/secure/lang/c/js/arithmetic-operation-program.js"></script>

<title>Arithmetic Operations</title>
</head>
<style>

.ct-demo-heading {
	background: highlight none repeat scroll 0 0;
    border-radius: 10px;
    font-size: 18px;
    position: relative;
    z-index: 9999999;
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

.ct-code-b-green {
	font-family: monospace;
	font-weight: bold;
	color: green;
}

.ct-b-green {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
}

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
	height: 299px;
	overflow: auto;
	padding: 10px;
	white-space: pre-line;
}

.panel-heading {
    padding: 2px 15px;
}

.panel-group {
    margin-top: 7px;
}

.panel-body {
    padding: 10px;
}

.spanel-body {
	margin-left: 33px;
}

.address-css {
	padding: 1px 42px;
}

.animationbox-css {
	height: 318px;
	border: 1px solid lightgray;
	border-radius: 4px;
}

.position-relative {
	position: relative;
}

.display-inline {
	display: inline-block;
}

.ab-adress-css {
	margin-left: 14px;
}

.enter-values {
	width: 60px;
 /* padding: 8px; */
	border-width: 0px 0 0 0;
	background-color: #000;
	color: yellow;
	border: 1px solid grey;
	border-radius : 4px;
}

</style>
<body>
<div class="col-sm-12 text-center">
	<div class="margin-padding-css text-center" >
		<div class="col-sm-1"></div>
		<div class="col-sm-offset-3 col-sm-3">
			<h3><span class="ct-demo-heading label label-default" id="titleName">Program to illustrate Arithmetic Operations</span></h3>
		</div>
	</div>
</div>
<div class="body-div col-sm-12 padding0">
<br>
<div class="col-xs-5">
<!-- <pre id="typewritingId"></pre> -->
<pre class="creamPreTab4" id="preBody">
<span id="line1">#include &lt;stdio.h&gt;</span>
<span id="line2">main() {</span>
  <span id="line3">int a,b,s1,s2,s3,s4,s5;</span>
  <span id="line4">printf (“ Enter any two integer values\n “);</span>
  <span id="line5">scanf (“ <span id="scanPercent1">%d</span> <span id="scanPercent2">%d</span> “, <span id="scanAmpPercentAId">&a</span>, <span id="scanAmpPercentBId">&b</span>);</span>
  <span id="line6">s1 = a + b;</span>
  <span id="line7">s2 = a – b;</span>
  <span id="line8">s3 = a * b;</span>
  <span id="line9">s4 = a / b;</span>
  <span id="line10">s5 = a % b;</span>
  <span id="line11">printf (“ Addition of two values = %d \n “, s1);</span>
  <span id="line12">printf (“ Subtraction of two values = %d \n “, s2);</span>
  <span id="line13">printf (“ Multiple of two values = %d \n “, s3);</span>
  <span id="line14">printf (“ Division of two values = %d \n “, s4);</span>
  <span id="line15">printf (“ Modulo of two values = %d \n “, s5);</span>
<span id="line16">}</span>
</pre>
</div>
	<div class="col-xs-4">
		<div id="animationDiv" class="animationbox-css">
			<div class="col-xs-12">
				<div class="col-xs-3 col-xs-offset-1">
					<div class="panel-group visibility-hidden" id="panelBoxA">
						<div class="panel panel-info">
							<div class="panel-heading text-center">a</div>
							<div class="panel-body text-center">
								<span id="panelABody" class="position-relative display-inline visibility-hidden"><span id="aValue" class="ct-code-b-green"></span></span>
							</div>
						</div>
						<span id="addressId" class="ab-adress-css">1024</span>
 					</div>
				</div>
				<div class="col-xs-3">
					<div class="panel-group visibility-hidden" id="panelBoxB">
						<div class="panel panel-info">
							<div class="panel-heading text-center">b</div>
							<div class="panel-body text-center">
								<span id="panelBBody" class="position-relative display-inline visibility-hidden"><span id="bValue" class="ct-code-b-green"></span></span>
							</div>
						</div>
						<span id="addressId" class="ab-adress-css">1026</span>
 					</div>
				</div>
				<div class="col-xs-5">
					<div class="panel-group visibility-hidden" id="panelBox1">
						<div class="panel panel-info">
							<div class="panel-heading text-center">s1</div>
							<div class="panel-body text-center">
								<span id="s1panelBody" class="position-relative display-inline visibility-hidden"><span id="s1AValue" class="position-relative display-inline">a</span> <span class="ct-code-b-red position-relative display-inline">+</span> <span id="s1BValue" class="position-relative display-inline">b</span></span>
							</div>
						</div>
						<span id="addressId" class="address-css">1028</span>
 					</div>
				</div>
				
			</div>
			<div class="col-xs-12">
				<div class="col-xs-5 col-xs-offset-1">
					<div class="panel-group visibility-hidden" id="panelBox2">
						<div class="panel panel-info">
							<div class="panel-heading text-center">s2</div>
							<div class="panel-body text-center">
								<span id="s2panelBody" class="position-relative display-inline visibility-hidden"><span id="s2AValue" class="position-relative display-inline" >a</span> <span class="ct-code-b-red position-relative display-inline">-</span> <span id="s2BValue" class="position-relative display-inline">b</span></span>
							</div>
						</div>
						<span id="addressId" class="address-css">1030</span>
 					</div>
				</div>
				<div class="col-xs-5">
					<div class="panel-group visibility-hidden" id="panelBox3">
						<div class="panel panel-info">
							<div class="panel-heading text-center">s3</div>
							<div class="panel-body text-center">
								<span id="s3panelBody" class="position-relative display-inline visibility-hidden"><span id="s3AValue" class="position-relative display-inline">a</span> <span class="ct-code-b-red position-relative display-inline">*</span> <span id="s3BValue" class="position-relative display-inline">b</span></span>
							</div>
						</div>
						<span id="addressId" class="address-css">1032</span>
 					</div>
				</div>
				
			</div>
			<div class="col-xs-12">
				<div class="col-xs-5 col-xs-offset-1">
					<div class="panel-group visibility-hidden" id="panelBox4">
						<div class="panel panel-info">
							<div class="panel-heading text-center">s4</div>
							<div class="panel-body text-center">
								<span id="s4panelBody" class="position-relative display-inline visibility-hidden"><span id="s4AValue" class="position-relative display-inline">a</span> <span class="ct-code-b-red position-relative display-inline">/</span> <span id="s4BValue" class="position-relative display-inline">b</span></span>
							</div>
						</div>
						<span id="addressId" class="address-css">1034</span>
 					</div>
				</div>
				<div class="col-xs-5">
					<div class="panel-group visibility-hidden" id="panelBox5">
						<div class="panel panel-info">
							<div class="panel-heading text-center">s5</div>
							<div class="panel-body text-center">
								<span id="s5panelBody" class="position-relative display-inline visibility-hidden"><span id="s5AValue" class="position-relative display-inline">a</span> <span class="ct-code-b-red position-relative display-inline">%</span> <span id="s5BValue" class="position-relative display-inline">b</span></span>
							</div>
						</div>
						<span id="addressId" class="address-css">1036</span>
 					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-3">
		<div id="consoleId" class="center">
			<div class="output-console-title-bar">
				<span class="title"><b>Console</b></span>
			</div>
			<div class="output-console-body" id="consoleBodyDiv">
				<span id="typeChar"></span>
				<span id="hiddenTypingChar" class="hidden">Enter any two integer values : </span>
				<span id="firstInputInteger" class="hidden">first value : <input id='inputChar1' maxlength='3' class='enter-values' tabindex='0' onkeypress="return isNumber(event)" /></span>
				<span id="secondInputInteger" class="hidden">second value: <input id='inputChar2' maxlength='3' class='enter-values' tabindex='0' onkeypress="return isNumber(event)" /></span>
				
				<span id="totalAddValue"></span>
				<span id="totalSubValue"></span>
				<span id="totalMulValue"></span>
				<span id="totalDivValue"></span>
				<span id="totalMudValue"></span>
			</div>
		</div>
	</div>
</div>
<div><button type="button" class="col-sm-1 col-sm-offset-6 btn btn-warning opacity00" id="restartBtn" style="margin-top: 30px;">Restart </button></div>
<script>

$(document).ready(function() {
	aopReady();	
}); // end of document.ready function..




</script>

</body>
</html>