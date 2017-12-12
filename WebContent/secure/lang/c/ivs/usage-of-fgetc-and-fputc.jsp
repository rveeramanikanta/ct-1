<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/secure/lang/c/js-min/uofgafp.min.js"></script>

<title>fgetc-and-fputc.jsp</title>

<style type="text/css">

.introjs-tooltip {
	min-width: 300px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-duplicate-nextbutton {
	margin: 0 !important;
	background-color: green;
}

.box-border {
	border-radius: 12px;
	border: 2px solid gray;
}

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}

div,span, .fa {
	position: relative;
}

.creamPreTab4 {
    margin: 8px;
	tab-size: 4;
    padding: 10px;
    font-size: 13px;
    white-space: pre;
	-moz-tab-size: 6;
    border-radius: 8px;
    background-color: #fffae6;
}

.input-box {
    border: medium none;
	background-color: black;
}

.margin-top {
    margin-top: 12px;
}

.ui-effects-transfer {
    border: 1px solid blue;
    z-index: 99999999 !important;
 }
 
 #textFile {
	min-height: 230px;
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
}

.number-div > .number-div {
	color: white;
	font-width: bold;
	background-color: #337ab7;
}

.number-div > .number-body {
	color: #e60073;
	font-width: bold;
	min-height: 31px;
	background-color: white;
	border-color: lightgray;
}

.output-console {  
	overflow: hidden;
	border-radius: 10px;
}

.output-console-title-bar {
	padding: 2px 0;
	font-size: 0.75em;
	text-align: center;
	background-image: -moz-linear-gradient(center top, #e8e8e8, #bcbbbc);
}

.output-console-body {
	padding: 10px;
	height: 200px;
	color: #f0f0f0;
	font-size: 10px;
	background-color: black;
}

.address-text {
    margin-top: -18px;
}

.address {
    margin-top: 12px;
    margin-bottom: 12px;
}

#codetantraFile {
    margin-top: 35px;
}

#addressValue1 {
	display: inline-block;
}

#svgDiv1 {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 10000000 !important;
}

.padding00 {
	padding: 0px;
}

.position {
	position: relative;
	display: inline-block;
}

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}

.ct-code-b-blue, .ct-code-b-green, .ct-code-b-red {
	color: blue;
	font-weight: bold;
	font-family: monospace;
}

.ct-code-b-red {
	color: red;
}

.ct-code-b-green {
	color: green;
}

.pink-color {
	font-weight: bold;
	color: #ff4dd2
}

.purpl-color {
	font-weight: bold;
	color: #9900ff;
}

.blue-color {
	font-weight: bold;
	color: blue;
}

.brown-color {
	color: #b30000;
}

#fileText {
	font-family: monospace;
}


</style>
</head>


<body>
	<div class="col-xs-12">
		<div class="ct-box-main">
			<div class="text-center">
				<h1 class="label ct-demo-heading text-center">Usage of fgetc() and fputc()</h1>
			</div> 
			<div class='buttons-div'>
				<button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button>
			</div> 
			<div class="col-xs-12">
				<div class="col-xs-8 col-xs-offset-2 box-border margin-top" id="fileText">
				<ul><li id="text3" class="opacity00">The function <span class="ct-code-b-green">fgetc()</span> is used to read 
					a character from the file.<br/>
					 Syntax: <span class="ct-code-b-green">int fgetc(FILE *stream);</span>
					 </li>
					<li id="text4" class="opacity00">The function  
						<span class="ct-code-b-green">fputc()</span> is used to write a character to the file.
							<br/>Syntax: <span class="ct-code-b-green">int fputc(int char, FILE *stream) </span>
							 <a class="introjs-button introjs-duplicate-nextbutton opacity00">Next &#8594;</a></li></ul>
				</div>
			</div>
			
			<div class="col-xs-12 margin-top opacity00" id = "mainDiv">
				<svg id="svgDiv1" class="svgDiv">
						<marker id="arrow1" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;">
	             	  		<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
	           			</marker>
	           			<marker id="arrow11" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;">
	             	  		<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
	           			</marker>
	           			<marker id="arrow111" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;">
	             	  		<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
	           			</marker>
						<line id="line2" class = "opacity00" x2="66.8%" y2="33.6%" y1="34.9%" x1="66.8%" style="marker-end: url(#arrow11); stroke: gray; stroke-width: 2"/>
						<line id="line1" class = "opacity00" x1="66.8%" y1="15.8%" y2="15.8%" x2="65.4%" style="marker-end: url(#arrow1); stroke: gray; stroke-width: 2"/>
						<line id="line3" class = "opacity00" x1="68.6%" y1="34.8%" y2="34.8%" x2="68.1%" style="marker-end: url(#arrow111); stroke: gray; stroke-width: 2" />
						<line id="line12" class = "opacity00" x2="66.8%" y2="33.6%" y1="34.9%" x1="66.8%" style="marker-end: url(#arrow11); stroke: gray; stroke-width: 2"/>
						<line id="line11" class = "opacity00" x1="66.8%" y1="15.8%" y2="15.8%" x2="65.4%" style="marker-end: url(#arrow1); stroke: gray; stroke-width: 2"/>
						<line id="line13" class = "opacity00" x1="68.6%" y1="34.8%" y2="34.8%" x2="68.1%" style="marker-end: url(#arrow111); stroke: gray; stroke-width: 2" />				
  					</svg>
				<div class="col-xs-4 padding00">
					<div id="codeDiv"  class="margin-top">
						<pre class='creamPreTab4' id="code">
#include &lt;<span class="blue-color">stdio.h</span>&gt;
int main() {
	<span id="filePointer">FILE *fp;</span>
	<span id="characterPointer">char ch;</span>
	<span id="fileOpen"><span id = "filePointer1">fp</span> = <span id="fileOPenMethod">fopen(<span id="fileName" class="brown-color">"codetantra.txt"</span> , <span id="writeMode" class="pink-color">"w"</span>);</span></span>
	<span id="sopLine1">printf("Enter the character\n");</span>
	<div id="whileCondition1" style="display: inline-block">while(<div id = "characterStore" class="position">(ch = <span id="getCharMethod"><b>getchar()</b></span></div>) != EOF)</div> {
		<span id="fputCharacter" class="purpl-color">fputc(ch, fp);</span>
	}
	<span id="closeFile1">fclose(fp);</span>
	<span id="fileOpen1"><span id="filePointer1">fp</span> = <span id="fileOPenMethod1">fopen(<span id="fileName1" class="brown-color">"codetantra.txt"</span> , <span id="readMode" class="pink-color">"r"</span>);</span></span>
	<span id="sopLine2">printf ("Print the character\n ");</span>
	<div style="display: inline-block" id="whileCondition2">while((<div class="position" id="fgetcharacter" >ch = <span class="purpl-color">fgetc(fp)</span></div>) != EOF)</div> {
		<span id="putChar"><b>putchar(ch)</b>;</span>
	}
	<span id="closeFile2">fclose(fp);</span>
}</pre>
					</div>
				</div>
				<div class="col-xs-4">
					<div class="col-xs-12 box-border margin-top">
						<div class="col-xs-5 address" id = "characterAddress">
							<div class="panel-primary number-div opacity00" id="addressDiv2">
		    					<div class="panel-heading text-center number-div">ch</div>
		    						<div class="panel panel-body number-body text-center">
		    							<span class="text-center" id="addressValue2"></span>
		    						</div>
		    						<!-- <div id="address2" class="address-text text-center">1024</div> -->
						    	</div>
							</div>
							<div class="col-xs-5 address col-xs-offset-1" id="filePointerAddress">
								<div class="panel-primary number-div opacity00" id="addressDiv1">
			    				<div class="panel-heading text-center number-div">fp</div>
			    					<div class="panel panel-body number-body text-center">
			    						<span class="text-center" id="addressValue1"></span>
			    					</div>
							    	<!-- <div id="address1" class="address-text text-center">1024</div> -->
						    	</div>
							</div>
						</div>
						<div class="col-xs-12 padding00">
							<div class="output-console center" id="outputDiv">
								<div class="output-console-title-bar">
									<span>Output</span>
								</div>
	        					<div class="output-console-body" id="outputConsoleBody"><span id="outputRandom"></span></div>
							</div>
						</div>
					</div>
						<div class="col-xs-3 opacity00" id="codetantraFile">
							<div class="col-xs-12 margin-top text-center opacity00" id="text"><b>codetantra.txt</b></div>
							<div class="col-xs-12 box-border margin-top opacity00" id="textFile">
							<div class="col-xs-12 padding00" id="fileSpan"></div>
							</div>
						</div>
				</div>
			</div>
		</div>
		
<script type="text/javascript">

	$(document).ready(function(){
		introGuide();
		randamFunction();
	});
	
</script>
</body>
</html>