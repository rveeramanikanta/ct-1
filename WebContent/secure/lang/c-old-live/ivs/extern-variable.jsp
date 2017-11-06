<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css" />
<link href="/css/font-awesome.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/secure/lang/c/js-min/ev.min.js"></script>

<title>Extern Variables</title>

<style type="text/css">
.margin-top-25 {
	margin-top: 25px;
}

.padding0 {
	padding: 0;
}

pre {
	margin: 0;
	font-family: monospace;
	-moz-tab-size: 4;
	tab-size: 4;
}

.explanation {
	font-family: monospace;
	padding: 8px;
	border-radius: 8px;
	background: white;
	z-index: 9999999;
}

.ct-green {
	color: green;
	font-weight: bold;
}

.panel-heading {
    padding: 2px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

.panel-body {
	color: #e60073;
	background-color: white;
	border-color: lightgray;
	padding: 3px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    margin: 0;
    min-height: 30px;
}

.memory-div {
	padding: 5px;
	border: 1px solid black;
	border-radius: 8px;
}

.output-console-body {
	min-height: 85px;
	padding: 15px;
	white-space: initial;
	color: blue;
	font-weight: bold;
}

.heightSpace {
	width : 50px;
	height : 10px;
}

.animation-nextbtn {
	background: green;
}

.z-index1000000 {
	z-index: 99999999;
	position: relative;
	background: white;
}

.introjs-fixParent {
	position: relative !important;
}

.ct-green-color {
	color: green;
	font-weight: bold;
}

.panel > span, .output-console-body div {
	position: relative;
}

</style>
</head>
<body>
	<div class="demo-heading text-center margin-top-25">
		<h4 class="label ct-demo-heading" id="heading">Extern Variables</h4>
	</div>
	<div class="col-xs-12 margin-top-25">
		<div class="col-xs-12">
			<div class="col-xs-8 col-xs-offset-2 explanation opacity00" id="printDefinition">
				<ul>
					<li id='line1' class="opacity00">The variables that are declare outside of any function are known as  
							<span class='ct-green'>extern </span> or <span class='ct-green'>global variables</span>.</li>
					<li id='line2' class="opacity00">The scope of <span class='ct-green'>extern variables</span> is throughout the program.</li>
				</ul>
			</div>
		</div>
		<div class="col-xs-12 margin-top-25">
			<div class="col-xs-4 col-xs-offset-2 padding0 " id="codeDiv">
				<pre>
		<span id="globalDeclaration">int x;</span>						
		<span id="funDeclaration"><span id = "funDeclaration1">int ganga();</span>
		<span id="funDeclaration2">int yamuna();</span>
		<span id="mainDeclaration">void <b class='ct-blue-color'>main()</b></span> <span id="openBrace">{</span>
			<span id='variableDeclaration1'>x = <span id="number1">10</span>;</span>
			<span id="sopLine1">printf("<span id="percentage1">%d</span>\n"<span id="comma1">, </span><span id="xValue1">x</span>);</span>
			<div id="sopLine2" style="display: inline-block;">printf("<span id="percentage2">%d</span>\n"<span id="comma1">, </span><span id="xValue2">ganga()</span>);</div>
			<div id="sopLine3" style="display: inline-block;">printf("<span id="percentage3">%d</span>\n"<span id="comma1">, </span><span id="xValue3">yamuna()</span>);</div>
		<span id="closeBrace">}</span>
		<span id="openspace" class='heightSpace' style="display: inline-block;"></span>
		<span id="functionDeclaration1">int <b class='ct-blue-color'>ganga()</b></span> <span id="openBrace1">{</span>
			<span id='variableDeclaration2'>x <span id="num">+= <span id="number2">10</span></span>;</span>
			<span id='return1'>return x;</span>
		<span id="closeBrace1">}</span>
		<span id="openspace1" class='heightSpace' style="display: inline-block;"></span>
		<span id="functionDeclaration2">int <b class='ct-blue-color'>yamuna()</b></span> <span id="openBrace2">{</span>
			<span id='variableDeclaration3'>int <span id="number3">x</span>;</span>
			<span id='initialize1'>x = <span id="number4">1</span>;</span>
			<span id='return2'>return x;</span>
		<span id="closeBrace2">}</span>
		<span id="globalDeclaration1" class="opacity00"><span class='fa fa-arrow-right'></span> int x;</span>
				</pre>
			</div>
			<div class="col-xs-3 col-xs-offset-1">
				<div class="col-xs-12 memory-div opacity00" id="animationDiv">
					<div class="text-center ct-blue-color" id="memoryheading">memory</div>
					<div class="col-xs-12 padding0" id="mainMemory" style="margin-top: 15px;">
						<div class="col-xs-6 padding0" style="margin-top: 20px;">
							<div id="numberDiv1" class="col-xs-6 col-xs-offset-3 padding0 opacity00">
				    			<div class="panel-primary number-div"  id="addressDiv1">
	   								<div class="panel-heading text-center number-div"><span id="aheading1">x</span></div>
	   								<div class="panel panel-body number-body text-center">
	   									<span class="text-center opacity00" id="addressValue1">10</span>
	   								</div>
				    			</div>
					    	</div>
						</div>
						<div class="col-xs-6 padding0 opacity00" id="functionMemory">
							<div class="text-center ct-blue-color" id="functionmemoryheading1">In Yamuna</div>
							<div class="col-xs-12 padding0" id="mainMemory">
								<div id="numberDiv4" class="col-xs-6 col-xs-offset-3 padding0">
					    			<div class="panel-primary number-div"  id="addressDiv4">
		   								<div class="panel-heading text-center number-div"><span id="aheading4">x</span></div>
		   								<div class="panel panel-body number-body text-center">
		   									<span class="text-center opacity00" id="addressValue4">1</span>
		   								</div>
					    			</div>
						    	</div>
						    </div>
						</div>
					</div>
				</div>
				<div class="col-xs-12 padding0 margin-top-25 opacity00" id="outputDiv">
					<div class="output-console-title-bar"><span class="title">Output</span></div>
					<div class="output-console-body">
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 text-center margin-top-25">
			<span id="restart" class="btn btn-warning opacity00">Restart</span>
		</div>
	</div>
	
	<script>
	$(document).ready(function() {
		externVariable();
	});
	</script> 
	</body>
	</html>