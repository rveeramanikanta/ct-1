<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css" >
<link rel="stylesheet" href="/css/introjs-ct.css" >
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/c/js-min/uofsafs.min.js"></script>
<title>Usage of fputs() and fgets()</title>
<style>
.margin-top-25 {
	margin-top: 25px;
}

.padding0 {
	padding: 0;
}

.margin-0 {
	margin: 0;
}

.typing-div {
	border-radius: 8px;
	border: 1px solid lightgray;
	padding: 8px;
	font-family: monospace;
}

pre {
    tab-size: 4;
    -moz-tab-size: 4;
    font-family: monospace;
}

.ct-file {
	border-radius: 8px;
	height: 150px;
	border: 1px solid gray;
	padding: 8px;
}

.file-name, .panel-heading {
	font-family: monospace;
	font-weight: bold;
	text-align: center;
}

.output-console-title-bar {
	font-weight: bold;
}

.output-console-body {
	height: 150px;
	padding: 10px;
	white-space: initial;
	font-size: 14px;
}

.panel {
	border-radius: 0px;
	margin: 0px;
	border: 1px solid #337ab7;
}

.panel-heading {
	padding: 2px;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
}

.panel-body {
	padding: 4px;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	text-align: center;
	height: 30px;
}

table {
	width: 100%;
	table-layout: fixed;
	text-align: center;
	margin-top: 15px;
}

.td-border {
	padding: 4px;
	text-align: center;
	border: 1px solid black;
}

.memory {
	border: 1px solid lightgray;
	height: 174px;
	border-radius: 8px;
}

.fp-address-storage {
	margin-top: 53px;
}

.svg-css {
	height: 100%;
	width: 100%;
	left: 0;
	top: 0;
	position: absolute;
	z-index: 9999999;
}

.ui-effects-transfer {
    border: 1px solid #337ab7;
    z-index: 99999999 !important;
}

.input {
	background-color: black;
	border: medium none;
	font-family: monospace;
}

.ct-text {
	background-color: transparent;
	border: medium none;
	font-family: monospace;
}

.z-index {
	z-index: 1000004 !important;
	background-color: white;
	position: relative;
}

.char1-address {
	margin-top: 25px;
}

.green {
	color: green;
	font-family: monospace;
	font-weight: bold;
}

.introjs-tooltip {
	min-width: 300px;
}

.user-btn {
	background: green;
	margin: 0 !important;
}

.ct-pink-color {
	color: #a1126c;
	font-weight: bold;
	font-family: monospace;
}
</style>
</head>
<body>
	<div class="demo-heading text-center margin-top-25">
		<h4 class="label ct-demo-heading" id="heading">Usage of fputs() and fgets()</h4>
	</div>
	<div class="col-xs-12 margin-top-25">
		<div id="typingDiv" class="col-xs-8 col-xs-offset-2 typing-div">
			<ul><li id="line1" class="opacity00">The function <span class='green'>fputs()</span> is used to <b class='ct-blue-color'>write</b> a 
					string to the file.<br> &emsp; Syntax : <span class='green'>char *fputs(char *str, FILE *fp);</span></li>
				<li id="line2" class="opacity00">The function <span class='green'>fgets()</span> is used to <b class='ct-blue-color'>read</b>
					    a string (an array of characters) from the file.<br>  &emsp; Syntax : <span class='green'>char *fgets(char *str, int
					    length, FILE *fp);</span></li>
				<li id="line3" class="opacity00">Both the functions will return <b class="ct-blue-color">NULL</b> on unsuccessful execution.</li>
			</ul>
		</div>
		<div class="col-xs-12 margin-top-25 padding0">
			<div class="col-xs-4 padding0 opacity00" id="program">
<pre class="margin-0">
#include&lt;stdio.h&gt;
int main() {
	<span id="fileOperation">FILE *fp;</span>
	<span id="charDec">char str[20], str1[20];</span>
	<span id="openFile1">fp = <span id="wFileOpen">fopen("<span class='ct-blue-color'>codetantra.txt</span>", <span id="writeMode" class='ct-blue-color'>"w"</span>);</span></span>
	<span id="putsPrintf">printf("Enter a String : \n");</span>
	<span id="gets">gets(str);</span>
	<span id="fputsString" class="ct-pink-color">fputs(str, fp);</span>
	<span id="closeFile1">fclose(fp);</span>
	
	<span id="openFile2">fp = <span id="rFileOpen">fopen("<span class='ct-blue-color'>codetantra.txt</span>", <span id="readMode" class='ct-blue-color'>"r"</span>);</span></span>
	<span id="getsPrintf">printf("The given String is \n");</span>
	<span id="fgets" class="ct-pink-color">fgets(str1, 20, fp);</span>
	<span id="puts">puts(str1);</span>
	<span id="closeFile2">fclose(fp);</span>
}
</pre>			
			</div>
			<div class="col-xs-8 padding0">
				<svg class="svg-css"> 
					<marker refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: black;" id="arrow"> 
						<path d="M0,0 L5,2.5 L0,5 Z" class="arrow" /> 
					</marker> 
	 				<line id="arrow1" class="line" x1="55%" y1="73.4%" x2="55%" y2="73.4%" 
	 						style="marker-end: url(#arrow); stroke: black; stroke-width: 2"/>
	 				<line id="arrow2" class="line" x1="78.8%" y1="73.4%" x2="78.8%" y2="73.4%" 
	 						style="marker-end: url(#arrow); stroke: black; stroke-width: 2"/>
	 				<line id="arrow3" class="line" x1="78.8%" y1="24.7%" x2="78.8%" y2="24.7%" 
	 						style="marker-end: url(#arrow); stroke: black; stroke-width: 2"/>
	 			</svg>
				<div class="col-xs-12">
					<div class="opacity00 memory" id="memory">
						<div class="col-xs-9">
							<table id="charAddress" class="opacity00">
								<tr class="str-address"><th class="text-center ct-blue-color">str</th></tr>
								<tr class="user-string"><td><div class="td-border opacity00">00</div></td></tr>
							</table>
							<table id="char1Address" class="char1-address opacity00">
								<tr class="str1-address"><th class="text-center ct-blue-color">str1</th></tr>
								<tr class="str1-string"><td><div class="td-border opacity00">00</div></td></tr>
							</table>
						</div>
						<div class="col-xs-1 col-xs-offset-1 panel-primary padding0 opacity00 fp-address-storage" id="fpAddressStorage">
							<div class="panel-heading">fp</div>
							<div class="panel panel-body"><div class="address"></div></div>
							<div class="value text-center hide">2048</div>
						</div>
					</div>
					<div class="col-xs-12 margin-top-25 padding0">
						<div class="col-xs-5 opacity00 padding0" id="console">
							<div class="output-console-title-bar">Console</div>
							<div class="output-console-body margin-0">
								<div id="printStatmnt1" class="opacity00">Enter a String :</div><div id="textEnter"></div>
								<div id="printStatmnt2" class="opacity00">The given String is</div><div id="userText"></div>
							</div>
						</div>
						<div class="col-xs-5 col-xs-offset-1 opacity00 padding0" id="output">
							<div class="file-name">codetantra.txt</div>
							<div class="ct-file"><div class="ct-file-text"></div><i class="fa fa-arrow-up opacity00"></i>
								<div class="fp-address opacity00">2048</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 text-center margin-top-25">
			<span id="restart" class="opacity00 btn btn-warning">Restart</span>
		</div>
	</div>
	
<script>

//$(document).ready(function() {
$(function() {
	usageOfFputsAndFgets();
});
</script>
</body>
</html>