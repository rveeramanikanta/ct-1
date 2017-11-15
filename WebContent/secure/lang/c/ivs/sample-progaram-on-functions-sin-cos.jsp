<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css" />

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<!-- <script src="/secure/lang/c/js-min/spofsc.min.js" type="text/javascript"></script> -->
<script src="/secure/lang/c/js/sample-progaram-on-functions-sin-cos.js" type="text/javascript"></script>

<title>Sample program on functions</title>
<style type="text/css">

.margin-top-20 {
	margin-top: 20px;
}

.box-border {
	border: 1px solid gray;
	border-radius: 8px;
	background-color: #f5f5f5;
}

.center {
	margin-left: auto !important;
	margin-right: auto !important;
	display: block;
}

.output-console-body {
	height: 105px;
	white-space: initial;
	padding: 10px;
}

.output-console {
	margin: 0;
}

.creampretab4 {
	font-size: 11px;
	-moz-tab-size: 4;
	tab-size: 4;
	font-family: monospace;
	background-color: lavender !important;
	line-height: 1.50;
}

#outputDiv {
	margin-top: 45px;
}

.introjs-tooltip {
	min-width: 300px;
}

.blinking-white {
	animation-name: blink-border-background-white ;
	animation-duration: 1s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
	z-index: 10000000;
	position: relative;
}

@keyframes blink-border-background-white { 
	50% {
		border-color: white;
		background: white;
	}
}

.blinking-orange {
	animation-name: blink-border-background-orange ;
	animation-duration: 1s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
	z-index: 10000000;
	position: relative;
}

@keyframes blink-border-background-orange { 
	50% {
		border-color: orange;
		background: orange;
	}
}

.ui-effects-transfer {
    background-color: blue;
    z-index: 99999999 !important;
}

.memory-box {
	height: 40px;
	line-height: 40px;
}

.address-font {
	font-size: 10px;
}

.box-font {
	font-size: 12px;
}

.errMsg {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

input {
	border: transparent;
	width: 25px;
	background: black;
}

.size-css {
	font-size: 9px;
	position: relative;
}

.introjs-tooltip-min-width {
	min-width: 110px;
}

.introjs-duplicate-nextbutton {
	background: green;
}

.ct-green-color {
	color: green;
}

.position-css {
	display: inline-block;
	position: relative;
}
</style>
</head>
<body>

	<div class="text-center margin-top-20">
		<h1 id="heading" class="label ct-demo-heading text-center">Sample Program Of Functions</h1>
	</div>
	
	<div id="mainDiv" class="col-xs-12" style="margin-top: 30px;">
		<div class="col-xs-5" id="codeBox">
	<pre id="codeAnimation" class='creampretab4 box-border opacity00'>
	#include&lt;stdio.h&gt;
	<span id="funcDec1">float <span class='ct-green-color'>sine(int, float)</span>;</span>
	<span id="funcDec2">float <span class='ct-green-color'>cosine(int, float)</span>;</span>
	<span id="mainFun">void <b class='ct-blue-color'>main()</b> {
		<span id="mainVar1">float x;</span>
		<span id="mainVar2">int n;</span>
		<span id="mainPrintf1">printf("Enter number of terms : ");</span>
		<span id="nScanf">scanf("<span id="dScan">%d</span>", <span id="dAddr">&n</span>);</span>
		<span id="mainPrintf2">printf("Enter number of degrees : ");</span>
		<span id="xScanf">scanf("<span id="fScan">%f</span>", <span id="fAddr">&x</span>);</span>
		<span id="xInDeg">x = (x * 3.14) / 180;</span>
		<span id="mainPrintf3">printf("The sine value = %f\n", <span id="sinCall" class='ct-green-color'>sine(<span id="ntransfer1">n</span>, <span id="xtransfer1">x</span>)</span>);</span>
		<span id="mainPrintf4">printf("The cosine value = %f\n", <span id="cosCall" class='ct-green-color'>cosine(<span id="ntransfer2">n</span>, <span id="xtransfer2">x</span>)</span>);</span>
		<span id="mainPrintf5">printf("The tan value = %f\n", <span id="tanCall" class='ct-green-color'>sine(n, x) / cosine(n, x)</span>);</span>
	<span id="endMain">}</span></span>
	
	<span id="funcDef1"><span id="sinFunc">float <b class='ct-blue-color'>sine(<span id="formalDec1">int <span id="sineFormArg1">n</span>, float <span id="sineFormArg2">x</span></span>)</b></span> {
		<span id="sinVar1">int i;</span>
		<span id="sinVar2">float sum, term;</span>
		<span id="termDec1">term = sum = x;</span>
		<span id="forLoop1"><span id="forstatement1">for( <span id="iDec1">i = 1</span>; <span id="forCond1">i &lt; n</span>; <span id="iInc1">i++</span> )</span> {
			<span id="termInFor1">term = <span id="termCal1">((-term) * (x * x)) / ((2 * i ) * ((2 * i) + 1))</span>;</span>
			<span id="sumInFor1">sum = <span id="sumCal1">sum + term</span>;</span>
		<span id="endFor1">}</span></span>
		<span id="returnVal1">return(sum);</span>
	}</span>
	
	<span id="funcDef2"><span id="cosFunc">float <b class='ct-blue-color'>cosine(<span id="formalDec2">int <span id="cosFormArg1">n</span>, float <span id="cosFormArg2">x</span></span>)</b></span> {
		<span id="cosVar1">int i;</span>
		<span id="cosVar2">float sum, term;</span>
		<span id="termDec2">term = sum = 1;</span>
		<span id="forLoop2"><span id="forstatement2">for( <span id="iDec2">i = 1</span>; <span id="forCond2">i &lt; n</span>; <span id="iInc2">i++</span> )</span> {
			<span id="termInFor2">term = <span id="termCal2">((-term) * (x * x)) / ((2 * i) * ((2 * i) - 1))</span>;</span>
			<span id="sumInFor2">sum = <span id="sumCal2">sum + term</span>;</span>
		<span id="endFor2">}</span></span>
		<span id="returnVal2">return(sum);</span>
	}</span>
	</pre>
		</div>
		<div id="animationBox" class="col-xs-6 col-xs-offset-1 box-border opacity00" style="height: 430px;">
			<div class="col-xs-12 margin-top-20">
				<div class="col-xs-12 text-center" style="font-weight: bold; color: rgb(47, 79, 79); padding: 0px;">
					<div id="boxHeading1" class="col-xs-4 col-xs-offset-4 opacity00">In main()</div>
				</div>
			</div>
			<div class="col-xs-12 box-font" style="margin-top: 10px">
				<div id="mainBox" class="box-border col-xs-10 col-xs-offset-1  text-center opacity00">
					<div id="mainVal1" class="col-xs-2 col-xs-offset-3 opacity00 check">
						<div><b style="color: maroon;">x</b></div>
						<div class="box-border memory-box"><span id="xMainVal" class="opacity00"></span></div>
						<div class="address-font opacity00" id="address1">3478</div>
					</div>
					<div id="mainVal2" class="col-xs-2 col-xs-offset-2 opacity00">
						<div><b style="color: maroon;">n</b></div>
						<div class="box-border memory-box"><span id="nMainVal" class="opacity00"></span></div>
						<div class="address-font opacity00" id="address2">4516</div>
					</div>
				</div>
			</div>
			<div class="col-xs-12 margin-top-20">
				<div class="col-xs-12 text-center" style="font-weight: bold; color: rgb(47, 79, 79); padding: 0px;">
					<div id="boxHeading2" class="col-xs-4  col-xs-4 col-xs-offset-4 opacity00">In sine()</div>
				</div>
			</div>
			<div class="col-xs-12 box-font" style="margin-top: 10px;">
				<div id="sineBox" class="box-border col-xs-10 col-xs-offset-1  text-center opacity00">
					<div id="sineVal1" class="col-xs-2 col-xs-offset-1 opacity00">
						<div><b style="color: maroon;">n</b></div>
						<div class="box-border memory-box"><span id="nSineVal" class="opacity00"></span></div>
						<div class="address-font opacity00" id="address3">0516</div>
					</div>
					<div id="sineVal2" class="col-xs-2 opacity00">
						<div><b style="color: maroon;">x</b></div>
						<div class="box-border memory-box"><span id="xSineVal" class="opacity00 size-css"></span></div>
						<div class="address-font opacity00" id="address4">1125</div>
					</div>
					<div id="sineVal3" class="col-xs-2 opacity00 sin-ival">
						<div><b style="color: maroon;">i</b></div>
						<div class="box-border memory-box"><span id="iSineVal" class="opacity00"></span></div>
						<div class="address-font opacity00" id="address5">2216</div>
					</div>
					<div id="sineVal4" class="col-xs-2 opacity00">
						<div><b style="color: maroon;">sum</b></div>
						<div class="box-border memory-box"><span id="sumSineVal" class="opacity00 size-css"></span></div>
						<div class="address-font opacity00" id="address6">8836</div>
					</div>
					<div id="sineVal5" class="col-xs-2 opacity00">
						<div><b style="color: maroon;">term</b></div>
						<div class="box-border memory-box"><span id="tSineVal" class="opacity00 size-css"></span></div>
						<div class="address-font opacity00" id="address7">0024</div>
					</div>
				</div>
			</div>
			
			<div class="col-xs-12 margin-top-20">
				<div class="col-xs-12 text-center" style="font-weight: bold; color: rgb(47, 79, 79); padding: 0px;">
					<div id="boxHeading3" class="col-xs-4  col-xs-4 col-xs-offset-4 opacity00">In cosine()</div>
				</div>
			</div>
			<div class="col-xs-12 box-font" style="margin-top: 10px;">
				<div id="cosBox" class="box-border col-xs-10 col-xs-offset-1 text-center opacity00">
					<div id="cosVal1" class="col-xs-2 col-xs-offset-1 opacity00">
						<div><b style="color: maroon;">n</b></div>
						<div class="box-border memory-box"><span id="nCosVal" class="opacity00"></span></div>
						<div class="address-font opacity00" id="address8">0012</div>
					</div>
					<div id="cosVal2" class="col-xs-2 opacity00">
						<div><b style="color: maroon;">x</b></div>
						<div class="box-border memory-box"><span id="xCosVal" class="opacity00 size-css"></span></div>
						<div class="address-font opacity00" id="address9">1144</div>
					</div>
					<div id="cosVal3" class="col-xs-2 opacity00 cos-ival">
						<div><b style="color: maroon;">i</b></div>
						<div class="box-border memory-box"><span id="iCosVal" class="opacity00"></span></div>
						<div class="address-font opacity00" id="address10">1020</div>
					</div>

					<div id="cosVal4" class="col-xs-2 opacity00">
						<div><b style="color: maroon;">sum</b></div>
						<div class="box-border memory-box"><span id="sumCosVal" class="opacity00 size-css"></span></div>
						<div class="address-font opacity00" id="address11">3421</div>
					</div>
					<div id="cosVal5" class="col-xs-2 opacity00">
						<div><b style="color: maroon;">term</b></div>
						<div class="box-border memory-box"><span id="tCosVal" class="opacity00 size-css"></span></div>
						<div class="address-font opacity00" id="address12">4513</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-4 col-xs-offset-2" style="margin-top: 40px;">
			<div style="" id="consoleId" class="output-console padding0 opacity00">
				<div class="output-console-title-bar"><span class="title">Output</span></div>
				<div style="color: white;" class="output-console-body">
					<div id="runEditor1"></div>
					<div id="runEditor2"></div>
					<div id="runEditor3"></div>
					<div id="runEditor4"></div>
					<div id="runEditor5"></div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 text-center"><span id="restart" class="btn btn-warning opacity00">Restart</span></div>
	
	<script type="text/javascript">
		$(document).ready(function() {
			sampleProgramOnFunctionsSinCosReady();
		});
	</script>
</body>
</html>