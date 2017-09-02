<!DOCTYPE html PUBLIC>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css" >
<link rel="stylesheet" href="/css/introjs-ct.css" >
<link rel="stylesheet" href="/css/animate.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/c/js-min/uopag.min.js"></script>
<title>putw() and getw()</title>

<style type="text/css">
pre {
	tab-size: 4;
	-moz-tab-size: 4;
	font-family: monospace;
	margin: 0;
}

.introjs-duplicate-nextbutton {
	background-color: green;
	margin: 0 !important;
}

.box-border {
	border-radius: 12px;
	border: 1px solid gray;
}

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}

div, span, .fa {
	position: relative;
}

.file-text {
    padding: 3px;
    font-family: monospace;
}

.input-box {
	background-color: black;
    border: medium none;
}

.margin-top {
    margin-top: 12px;
}

.ui-effects-transfer {
    border: 1px solid blue;
    z-index: 99999999 !important;
 }
 
 .text-file {
	height: 230px;
}
 
 .panel-heading {
    padding: 2px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

.panel-body {
    min-height: 90px;
    padding: 4px 0 0;
}

.panel {
 	border-radius: 0px;
    background-color: #000;
    border: 1px solid transparent;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    margin: 0;
}

.number-div > .number-div {
	color: white;
	font-width: bold;
	background-color: #337ab7;
}

.number-div > .number-body {
	color: #e60073;
	font-weight: bold;
	min-height: 31px;
	background-color: white;
	border-color: lightgray;
}

.output-console-title-bar {
	font-weight: bold;
}

.output-console-body {
	padding: 10px;
	white-space: initial;
	height: 200px;
}

.filepadding {
    padding: 2px;
}

.address {
    margin-bottom: 12px;
    margin-top: 12px;
}

.numbers-file {
    margin-top: 35px;
}

.address-value1 {
	display: inline-block;
}

.svg-css {
    height: 100%;
	width: 100%;
	left: 0;
	top: 0;
	position: absolute;
	z-index: 9999999;
}

.line {
	stroke: black;
	stroke-width: 2;
}

.padding00 {
	padding: 0px;
}

.position {
	position: relative;
	display: inline-block;
}

.z-index {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}

.ct-code-b-red {
	font-weight: bold;
	font-family: monospace;
	color: red;
}

.ct-green {
	font-weight: bold;
	font-family: monospace;
	color: green;
}

.ct-pink-color {
	color: #a1126c;
	font-weight: bold;
	font-family: monospace;
}

.introjs-fixParent {
	position: relative !important;
}

.introjs-tooltip {
	min-width: 300px;
}
</style>
</head>

<body>
	<div class="col-xs-12">
		<div class="ct-box-main">
			<div class="text-center">
				<h1 class="label ct-demo-heading text-center">Usage of putw() and getw()</h1>
			</div> 
			<div class="col-xs-12 margin-top padding0">
				<div class="col-xs-8 col-xs-offset-2 box-border margin-top file-text" id="fileText">
					<ul>
						<li id="firstLine" class="opacity00">The function <b class='ct-green'>putw()</b> is used to <b class="ct-blue-color">
							 write</b> an <b>integer</b> value to the file.<br> &emsp; Syntax : <span class='ct-green'>putw(intValue, fp);</span>
						</li>
						<li id="secondLine" class="opacity00">The function <b class='ct-green'>getw()</b> <b class="ct-blue-color">reads</b>
							  an <b>integer</b> value from the file and returns it. It increments the value of the address stored in the file 
							  pointer by 2. <br> &emsp; Syntax : <span class='ct-green'>int getw(fp);</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="col-xs-12 margin-top">
				<div class="col-xs-4 padding00">
					<div id="codeDiv" class="margin-top">
						<pre class='pre-tab opacity00' id="code">
#include &lt;stdio.h&gt;
int main() {
	<span id="filePointer">FILE *fp;</span>
	<span id="characterPointer">int a;</span>
	<div id="fileOpen" style="display: inline-block;"><span id="filePointer1">fp</span> = <div id ="fileOPenMethod" style="display: inline-block;">fopen(<span id="fileName" class='ct-blue-color'>"numbers.txt"</span>, <span id="writeMode" class='ct-blue-color'>"w"</span>);</div></div>
	<span id="sopLine1">printf("Enter number\n");</span>
	<span id="characterStore" >scanf("%d", &a)</span>
	<span id="whileCondition1">while(a != 0)</span> {
		<span id="fputCharacter" class="ct-pink-color">putw(a, fp);</span>
	}
	<span id="closeFile1">fclose(fp);</span>
	<div id="fileOpen1" style="display: inline-block;"><span id="filePointer1">fp</span> = <div id ="fileOPenMethod1" style="display: inline-block;">fopen(<span id="fileName1" class='ct-blue-color'>"numbers.txt"</span>, <span id="readMode" class='ct-blue-color'>"r"</span>);</div></div>
	<span id="sopLine2">printf ("The given numbers are\n ");</span>
	<div id="whileCondition2" style="display: inline-block;">while(<span id="fgetcharacter" >(a = <span class="ct-pink-color">getw(fp)</span>)</span> != EOF)</div> {
		<span id="putChar">printf("%d", a);</span>
	}
	<span id="closeFile2">fclose(fp);</span>
}
</pre>
				</div>
			</div>
			<div class="col-xs-8">
				<div class="col-xs-12">
					<svg id="svgDiv1" class="svg-css">
						<marker id="arrow1" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: black;">
	             	  		<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
	           			</marker>
	           			<marker id="arrow2" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: black;">
	             	  		<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
	           			</marker>
	           			<marker id="arrow3" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: black;">
	             	  		<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
	           			</marker>
	 					<line id="line1" class="line opacity00" x1="53.6%" y1="27.5%" x2="53.6%" y2="27.5%" style="marker-end: url(#arrow1)"/>
	 					<line id="line2" class="line opacity00" x1="50.1%" y1="27.5%" x2="50.1%" y2="27.5%" style="marker-end: url(#arrow2)"/>
	 					<line id="line3" class="line opacity00" x1="50.1%" y1="15.6%" x2="50.1%" y2="15.6%" style="marker-end: url(#arrow3)"/>
	 				</svg>
	 				<div class="col-xs-6">
						<div class="col-xs-12 box-border margin-top opacity00" id="addressDivs">
							<div class="col-xs-5 col-xs-offset-1 address" id="characterAddress">
								<div class="panel-primary number-div opacity00" id="addressDiv2">
			    					<div class="panel-heading text-center number-div">a</div>
			    						<div class="panel panel-body number-body text-center">
			    							<span class="text-center" id="addressValue2"></span>
			    						</div>
							    	</div>
								</div>
								<div class="col-xs-5 address col-xs-offset-1" id="filePointerAddress">
									<div class="panel-primary number-div opacity00" id="addressDiv1">
				    					<div class="panel-heading text-center number-div">fp</div>
			    						<div class="panel panel-body number-body text-center">
			    							<span class="text-center address-value1" id="addressValue1"></span>
			    						</div>
						    		</div>
								</div>
							</div>
							<div class="col-xs-12 padding00">
								<div class="output-console center opacity00" id="outputDiv">
									<div class="output-console-title-bar"><span>Output</span></div>
		        					<div class="output-console-body" id="outputConsoleBody"><span id="outputRandom"></span></div>
								</div>
							</div>
						</div>
						<div class="col-xs-6">
							<div class="col-xs-12 padding00 numbers-file" id="numbersFile">
								<div class="col-xs-12 margin-top text-center opacity00" id="text"><b>numbers.txt</b></div>
								<div class="col-xs-12 box-border margin-top opacity00 text-file" id="textFile">
									<div class="col-xs-12 padding00" id="fileSpan"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 text-center margin-top-20">
			<span id="restartBtn" class="visibility-hidden btn btn-warning">Restart</span>
		</div>
	</div>
<script type="text/javascript">

$(document).ready(function(){
	usageOfPutwAndGetw();
});

</script>
</body>
</html>