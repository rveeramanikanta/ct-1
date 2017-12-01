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
<script src="/secure/lang/c/js-min/uoffaff.min.js"></script>

<title>fprintf and fscanf.jsp</title>
<style type="text/css">
/* .introjs-tooltiptext br {
	margin: 15px;
} */

.introjs-tooltip {
	min-width: 300px;
}

.introjs-tooltip-min-width-custom {
	min-width: 125px;
}

.introjs-duplicate-nextbutton {
	background-color: green;  /*green*/
}

.box-border {
	border-radius: 12px;
	border: 2px solid gray;
}

.margin-top {
    margin-top: 12px;
}

.margin-bottom {
    margin-top: -10px;
}

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}

div,span {
	position: relative;
}

.ui-effects-transfer {
    border: 1px solid blue;
    z-index: 99999999 !important;
 }
 
.padding00 {
	padding: 0px;
}

#fileText {
	padding: 10px;
}

.creamPreTab4 {
	tab-size: 2;
    margin: 8px;
    padding: 10px;
    font-size: 13px;
    white-space: pre;
	-moz-tab-size: 2;
    border-radius: 8px;
    background-color: #fffae6;
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
	border-radius: 10px;
	margin: 90px 0 0 0 ;
}

.output-console-title-bar {
	background-image: -moz-linear-gradient(center top, #e8e8e8, #bcbbbc);
	font-size: 0.75em;
	padding: 2px 0;
	text-align: center;
}

.output-console-body {
	background-color: black;
	padding: 10px;
	color: #f0f0f0	;
	font-size: 10px;
	height: 200px;
	white-space: inherit;
}

[contenteditable="true"] {
	font-weight: normal;
	outline: medium none;
}

.input-all {
  width: 100%;
  border-width: 0px 0 0 0;
  background-color: #000;
  color: yellow;
  font-family: monospace;
  font-weight: bold;
}


.input-box {
	background-color: black;
    border: medium none;
}


#codetantraFile {
    margin-top: 8px;
}

#textFile {
	height: 140px;
}

#svgDiv1 {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10000000 !important;
}

.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 9999999;
}

.output-value-circle {
	background: white;
	color: black;
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

.ct-code-b-green {
	color: green;
}

.ct-code-b-red {
	font-weight: bold;
	font-family: monospace;
	color: red;
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
</style>
</head>
<body>
	<div class="col-xs-12">
		<div class="ct-box-main">
			<div class="text-center">
				<h1 class="label ct-demo-heading text-center">Usage of fprintf() and fscanf()</h1>
			</div> 
			<div class='buttons-div'>
				<button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button>
			</div> 
			<div class="col-xs-12">
				<div class="col-xs-8 col-xs-offset-2 box-border margin-top" id="fileText" style="font-family: monospace;">
					<ul><li id="text1" class="opacity00">The <span class="ct-code-b-green">fprintf()</span> function is used to write data into a file.<br/>
							Syntax:  <span class="ct-code-b-green">fprintf(FILE *fp, char *controlstring, variables);</span></li>
							<li id="text2" class="opacity00">The <span class="ct-code-b-green">fscanf()</span> function is used to read data from a file.<br/>
							Syntax:  <span class="ct-code-b-green">fscanf(FILE *fp, char *controlstring, &variables);</span>
							 <a class="introjs-button introjs-duplicate-nextbutton opacity00">Next &#8594;</a></li></ul>
				</div>
			</div>
			<div class = "col-xs-12 margin-top opacity00" id = "mainDiv">
				<div class = "col-xs-6">
					<div id = "codeDiv"  class = "box-border margin-top">
						<pre class = 'creamPreTab4' id = "code">
#include &lt;<span class="blue-color">stdio.h</span>&gt;
int main() {
	<span id = "filePointer">FILE *fp;</span>
	<span id = "idDeclaration">int id;</span>
	<span id = "nameDeclaration">char name[10];</span>
	<span id = "salaryDeclaration">float salary;</span>
	<span id = "fileOpen"><span id = "filePointer1">fp</span> = <span id ="fileOPenMethod"><b>fopen(<span id="fileName" class="brown-color">"codetantra.txt"</span>, <span id = "writeMode" class="pink-color">"w"</span>)</b>;</span></span>
	<span id = "printLine1">printf("Enter employee id name and salary\n");</span>
	<span id = "scanfLine1">scanf("%d %s %f", &id, name, &salary);</span>
	<span id = "fprintf"><span class="purpl-color">fprintf</span>(<b>fp, <span id = "idStore">"Id = %d\n"</span> <span id = "nameStore">"Name = %s\n"</span> <span id = "salaryStore">"Salary = %f\n"</span>,
						 id, name , salary</b>);</span>
	<span id = "closeFile1">fclose(fp);</span>
	<span id = "fileOpen1"><span id = "filePointer1">fp</span> = <span id ="fileOPenMethod1"><b>fopen(<span id="fileName1" class="brown-color">"codetantra.txt"</span> , <span id="readMode" class="pink-color">"r"</span></b>);</span></span>
	<span id = "printLine2">printf("Print id name and salary\n ");</span>
	<span id = "fscanf"><span class="purpl-color">fscanf</span>(<b>fp,"%d %s %f", &id, name, &salary</b>);</span>
	<span id = "printLine3">printf("<span id = "idprint">Id = %d\n</span>" "<span id = "nameprint">Name = %s\n</span>" "<span id = "salaryprint">Salary = %f</span>", id, name, salary);</span>
	<span id = "closeFile2">fclose(fp);</span>
}
						</pre>
					</div>
				</div>
				<div class = "col-xs-6">
				<div class = "col-xs-7">
				<svg id = "svgDiv1" class = "svgDiv">
						<marker id="arrow1" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;">
	             	  		<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
	           			</marker>
	           			<marker id="arrow11" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;">
	             	  		<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
	           			</marker>
	           			<marker id="arrow111" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: gray;">
	             	  		<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
	           			</marker>
						<line id="line2" class = "opacity00" x2="5.8%" y2="63.6%" y1="75.6%" x1="5.8%" style="marker-end: url(#arrow11); stroke: black; stroke-width: 2"/>
						<line id="line1" class = "opacity00" x1 = "12.8%" y1="75.8%" y2="75.8%" x2="8.6%" style="marker-end: url(#arrow111); stroke: black; stroke-width: 2"/>
						<line id="line3" class = "opacity00" x1="5.6%" y1="39.8%" y2="39.8%" x2="5.1%" style="marker-end: url(#arrow1); stroke: black; stroke-width: 2" />
						
						<line id="line12" class = "opacity00" x2="8.3%" y2="60.6%" y1="61.9%" x1="8.3%" style="marker-end: url(#arrow11); stroke: black; stroke-width: 2"/>
						<line id="line11" class = "opacity00" x1="8.6%" y1="39.8%" y2="39.8%" x2="11.4%" style="marker-end: url(#arrow1); stroke: black; stroke-width: 2"/>
						<line id="line13" class = "opacity00" x1="10.6%" y1="61.8%" y2="61.8%" x2="8.1%" style="marker-end: url(#arrow111); stroke: black; stroke-width: 2" />				
  					</svg>
					<div class = "col-xs-12 box-border margin-top" id="memoryVal">
						<div class = "col-xs-12">
							<div class = "col-xs-6 address margin-top" id = "characterAddress">
								<div class="panel-primary number-div opacity00" id = "addressDiv2">
			    					<div class="panel-heading text-center number-div">id</div>
			    						<div class="panel panel-body number-body text-center">
			    							<span class="text-center" id="addressValue2"></span>
			    						</div>
			    						<!-- <div id="address1" class="address-text text-center margin-bottom">1024</div> -->
							    	</div>
								</div>
								<div class = "col-xs-6 address margin-top" id = "filePointerAddress">
									<div class="panel-primary number-div opacity00" id = "addressDiv3">
				    				<div class="panel-heading text-center number-div">name</div>
				    					<div class="panel panel-body number-body text-center">
				    						<span class="text-center" id="addressValue3"></span>
				    					</div>
								    	<!-- <div id="address2" class="address-text text-center margin-bottom">1024</div> -->
							    	</div>
								</div>
							</div>
							<div class = "col-xs-12">
							<div class = "col-xs-6 address margin-top" id = "characterAddress">
								<div class="panel-primary number-div opacity00" id = "addressDiv1">
			    					<div class="panel-heading text-center number-div">fp</div>
			    						<div class="panel panel-body number-body text-center">
			    							<span class="text-center position" id="addressValue1"></span>
			    						</div>
			    						<!-- <div id="address3" class="address-text text-center margin-bottom">1024</div> -->
							    	</div>
								</div>
								<div class = "col-xs-6 address margin-top" id = "filePointerAddress">
									<div class="panel-primary number-div opacity00" id = "addressDiv4">
				    				<div class="panel-heading text-center number-div">salary</div>
				    					<div class="panel panel-body number-body text-center">
				    						<span class="text-center position" id="addressValue4"></span>
				    					</div>
								    	<!-- <div id="address4" class="address-text text-center margin-bottom">1024</div> -->
							    	</div>
								</div>
							</div>
						</div>
						<div class = "col-xs-12 opacity00" id = "codetantraFile">
							<div class = "col-xs-12 margin-top text-center opacity00" id = "text"><b>codetantra.txt</b></div>
							<div class = "col-xs-12 box-border margin-top opacity00" id = "textFile">
							<div class = "col-xs-12 padding00" id = "fileSpan"></div>
							</div>
						</div>
					</div>
					<div class="col-xs-5 padding00 margin-top">
						<div class="output-console center" id="outputDiv">
								<div class="output-console-title-bar">
									<span>Output</span>
								</div>
	        					<div class="output-console-body" id="outputConsoleBody">
	        						<span id="outputText" class = "opacity00">Enter employee id name and salary</span><br>
	        						<div><span id="inputVal" class='input-all'><input id='secondInput' maxlength='20' class='input-all'/></span></div>
	        						<span id="outputText1" class = "opacity00">Print id name and salary</span><br>
	        						<span id = "printId"><span id="idText"></span><span id="idvalue" class = "ct-code-b-yellow"></span></span><br>
	        						<span id = "printName"><span id="nameText"></span><span id="namevalue" class = "ct-code-b-yellow"></span></span><br>
	        						<span id = "printSalary"><span id="salaryText"></span><span id="salaryvalue" class = "ct-code-b-yellow"></span></span><br>
	        					</div>
							</div>
						</div>
				</div>
			</div>
		</div>
		</div>
<script type="text/javascript">

	$(document).ready(function(){
		introGuide();
		randomNumbers();
	});
	
</script>
</body> 
</html>