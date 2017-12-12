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
<script src="/secure/lang/c/js-min/uofrafw.min.js"></script>

<title>fread and fwrite.jsp</title>
<style type="text/css">
.introjs-tooltiptext br {
	margin: 15px;
}

.introjs-tooltip {
	min-width: 350px;
}

/* .introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
} */

.introjs-duplicate-nextbutton {
	background-color: green;
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
	height: 106px;	
}

.creamPreTab4 {
    margin: 8px;
    padding: 10px;
    font-size: 13px;
    white-space: pre;
	-moz-tab-size: 3;
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

.output-console-body {
	padding: 10px;
	color: #f0f0f0;
	font-size: 10px;
	white-space: inherit;
}

.output-console {
    border-radius: 8px !important;
    margin: 10px 10px 10px;
    overflow: auto;
}

[contenteditable="true"] {
	font-weight: normal;
	outline: medium none;
}

#svgDiv1 {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10000000 !important;
}

#tableValue >td{
    padding: 4px 6px;
    border: 2px solid gray;
    height: 30px !important;
    min-width: 100px !important;  
    text-align: center !important;
}

#structAddressDiv {
	margin-bottom: 30px;
}

#textFile {
	height: 100px;
}

/* #codetantraFile {
	margin: 30px 10px 10px;
}
 */
.input-box {
	font-weight: normal;
	outline: medium none;
}

.input-box::before {
	color: lightblue !important;
	content: attr(placeholder);
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

.bg-color {
	background: green;
}

.position {
	position: relative;
	display: inline-block;
}

#putcharacter1 {
	font-weight: bold;
	font-family: monospace;
	color: green;
}

#putcharacter2 {
	font-weight: bold;
	font-family: monospace;
	color: #e60073;
}

#putcharacter3 {
	font-weight: bold;
	font-family: monospace;
	color: blue;
}

.z-index1000000 {
	/* position: relative; */
	background-color: white;
	z-index: 1000000 !important;
}

[contenteditable="true"] {
	font-weight: normal;
	outline: medium none;
}

.input-all {
  width: 100%;
  border-width: 0px 0 0 0;
  background-color: #000;
  color: #0f0;
}


.input-box {
	background-color: black;
    border: medium none;
}


.ct-code-b-green {
	font-weight: bold;
	font-family: monospace;
	color: green;
}

.ct-code-b-red {
	font-weight: bold;
	font-family: monospace;
	color: red;
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
	<div class = "col-xs-12">
		<div class = "ct-box-main">
			<div class = "text-center">
				<h1 class = "label ct-demo-heading text-center">Usage of fread() and fwrite()</h1>
			</div> 
			<div class = 'buttons-div'>
				<button type = "button" class = "btn btn-warning visibility-hidden" id = "restartBtn">Restart</button>
			</div> 
			<div class = "col-xs-12">
				<div class = "col-xs-8 col-xs-offset-2 box-border margin-top" id = "fileText">
				<ul><li id="text1" class="opacity00">The function <span class = "ct-code-b-green">fwrite()</span> is 
					used to write a structure block to a given file.<br/>
					Syntax: <span class = "ct-code-b-green"> fwrite (&Structure_variable, sizeof(structure), 
					integer, file_pointer);</span><br></li>
					<li id="text2" class="opacity00">The function fread() is 
						used to <span class = "ct-code-b-green">read</span> an entire structure block from a given file.<br/>
						Syntax: <span class = "ct-code-b-green">
							fread (&Structure_variable, sizeof(structure), integer, file_pointer);</span>
					 	<a class="introjs-button introjs-duplicate-nextbutton opacity00">Next &#8594;</a></li></ul>
				</div>
			</div>
			<div class = "col-xs-12 margin-top opacity00" id = "mainDiv">
				<div class = "col-xs-5">
					<div id = "codeDiv"  class = "box-border margin-top">
						<pre class = 'creamPreTab4' id = "code">
#include &lt;<span class="blue-color">stdio.h</span>&gt;
<span id = "structor"><span class="purpl-color">struct</span> record
{
	int id;
	char name[10];
	float salary;
};</span>
int main() {
	<span id = "filePointer">FILE *fp;</span>
	<span id = "structureDeclaration">struct record emp;</span>
	<span id = "fileOpen"><span id = "filePointer1">fp</span> = <span id ="fileOPenMethod"><b>fopen</b>(<span id="fileName" class="brown-color">"codetantra.txt"</span>, <span id = "writeMode" class="pink-color">"w"</span>);</span></span>
	<span id = "printLine1">printf("Enter employee id, name and salary\n");</span>
	<span id = "scanfLine1">scanf("%d %s %f", &emp.id, emp.name, &emp.salary);</span>
	<span id = "fwrite"><span class="purpl-color">fwrite</span>(<b>&emp, sizeof(emp), 1, fp</b>);</span>
	<span id = "closeFile1">fclose(fp);</span>
	<span id = "fileOpen1"><span id = "filePointer1">fp</span> = <span id ="fileOPenMethod1"><b>fopen</b>(<span id="fileName1" class="brown-color">"codetantra.txt"</span> , <span id="readMode" class="pink-color">"r"</span>);</span></span>
	<span id = "printLine2">printf ("Print id name and salary\n ");</span>
	<span id = "fread"><span class="purpl-color">fread</span>(<b>&emp,sizeof(emp), 1, fp</b>);</span>
	<span id = "printLine3">printf("%d %s %f", emp.id, emp.name, emp.salary);</span>
	<span id = "closeFile2">fclose(fp);</span>
}
						</pre>
					</div>
				</div>
				<div class = "col-xs-7 ">
					<svg id = "svgDiv1" class = "svgDiv">
						<marker id="arrow1" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: blue;">
	             	  		<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
	           			</marker>
	           			<marker id="arrow2" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: blue;">
	             	  		<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
	           			</marker>
	           			<marker id="arrow5" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: blue;">
	             	  		<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
	           			</marker>
						<line id="line1" class = "opacity00" x1="16.2%" y1="87.8%" y2="87.8%" x2="17.6%" style="marker-end: url(#arrow1); stroke: blue; stroke-width: 2"/>
						<line id="line2" class = "opacity00" x2="98.8%" y2="61.6%" y1="88.10%" x1="98.8%" style="marker-end: url(#arrow2); stroke: blue; stroke-width: 2"/>
						<line id="line5" class = "opacity00" x1="98.9%" y1="13.8%" y2="13.8%" x2="97.9%" style="marker-end: url(#arrow5); stroke: blue; stroke-width: 2" />
						
  					</svg>
					<div class="col-xs-12 box-border margin-top">	
						<div class="col-xs-9 margin-top text-center opacity00" id = "structAddressDiv">
  							<div class="text-center" id="structAddress">emp</div>
  							<div class = "col-xs-12 box-border">
	  							<div id="structTableDiv">
	    							<table id = "structTable" style="width:100%">
										<tbody>
											<tr>
									    		<td id = "empIdName">id</td>
									    		<td id  = "empNameName">name</td> 
									    		<td id = "empSalaryName">salary</td>
									  		</tr>
									  		<tr id = "tableValue">
									    		<td><span id="empIdValue" class="blue-color"></span></td>
									    		<td><span id="empNameValue" class="blue-color"></span></td> 
									    		<td><span id="empSalaryValue" class="blue-color"></span></td>
									  		</tr>
									  		<tr>
									    		<td id = "empIdAddress">1024</td>
									    		<td id  = "empNameAddress">1026</td> 
									    		<td id = "empSalaryAddress">1028</td>
									  		</tr>
									 	</tbody>
									 </table>
	  							</div>
  							</div>
						</div>
						<div class="col-xs-3 address margin-top" id="filePointerAddress">
							<div class="panel-primary number-div opacity00" id="addressDiv1">
			    				<div class="panel-heading text-center number-div">fp</div>
			    				<div class="panel panel-body number-body text-center">
			    					<span class="text-center position" id="addressValue1"></span>
			    				</div>
			    				<!-- <div id="address1" class="address-text text-center margin-bottom">1024</div> -->
							</div>
						</div>
  					</div>
  					<div class = "col-xs-12">
	  					<div class="col-xs-8 col-xs-offset-2 padding00 margin-top">
							<div class="output-console center" id="outputDiv">
									<div class="output-console-title-bar">
										<span>Output</span>
									</div>
		        					<div class="output-console-body" id="outputConsoleBody">
		        						<span id="outputText" class = "opacity00">Enter employee id name and salary</span><br>
		        						<div><span id="inputVal" class='input-all'><input id='secondInput' maxlength='20' class='input-all'/></span></div>
		        						<span id="outputText1" class = "opacity00">Print id name and salary</span><br>
		        						<span id="idvalue" class = "ct-code-b-yellow"></span>&nbsp;<span id="namevalue" class = "ct-code-b-yellow"></span>&nbsp;<span id="salaryvalue" class = "ct-code-b-yellow"></span>
		        					</div>
								</div>
							</div>
						<div class = "col-xs-12">
						<div class = "col-xs-12 opacity00" id = "codetantraFile">
							<div class = "col-xs-12 margin-top text-center " id = "text"><b>codetantra.txt</b></div>
							<div class = "col-xs-12 box-border margin-top " id = "textFile">
							<div class = "col-xs-12 padding00" id = "fileSpan"></div>
							</div>
						</div>
						</div>
  					</div>
				</div>
			</div>
		</div>
	</div>
<script type="text/javascript">

	$(document).ready(function() {
		$("#secondInput").val("");
		introGuide();
		randomNumber();
	});

	
</script>
</body> 
</html>