
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>test</title>
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link href="/css/font-awesome.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/secure/lang/c/js-min/psc.min.js" type="text/javascript"></script>

<style>

.border {
	border: 1px solid red;
}

.margin-top20 {
	margin-top: 20px;
}

.margin-top40 {
	margin-top: 40px;
}

.margin-top10 {
	margin-top: 10px;
}

.Vertical-text-center  {
	height: 62px;
	line-height: 62px;
	text-align: right; 
}

.text-center {
	text-align: center;
}

.padding-col0 {
	padding: 0;
}

.border-height-css {
	border: 1px solid;
	height: 22px;
}

.output-console-body {
    background-color: black;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    color: #f0f0f0;
    font-family: monospace;
    font-size: 14px;
    height: 304px;
    overflow: unset;
    padding: 10px;
    white-space: pre-line;
}

.star-css {
	color: red;
	font-size: 21px;
}

.zIndex {
	background-color: white;
	position: relative;
	z-index: 10000000 !important;
}

.input-char {
    background-color: #000;
    border-width: 0;
    color: #0f0;
    text-align: center;
    width: 30px;
} 

.outline-none {
	outline:none;
}

.error-msg {
	color: red;
	font-weight: bold;
}

.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 9999999;
	background-color: white;
}

.display-inline-block {
	display: inline-block;
}

.ct-code-b-red {
	color: #ff0000;
}

.color-white {
	color: white;
	font-weight: bold;
}



</style>
</head>

<script>
	$(document).ready(function() {
		pyramidStarCReady();
	});
</script>



<body>

	<div class="ct-box-main padding0">
		<div class='text-center'>
			<h1 class='label ct-demo-heading' id="heading">Pyramid Star</h1>
		</div>
		<div class='row'>
		<div class="col-xs-12 border margin-top20 center">
		<div   class='border col-xs-offset-4 col-xs-4'>
		<pre id='starDisplay'>
		        *
		       * *
		      * * *
		     * * * *
		    * * * * *
		   * * * * * *	 
		  * * * * * * *
		 * * * * * * * * 
		* * * * * * * * *</pre>
	</div></div>
		</div>
	</div>
	<div class='col-xs-12 border center'>
	<div class='col-xs-4 border' ><div id="codeDiv" class='border'>
	<pre>
#include&lt;stdio.h&gt;
void main() {
   <span id='variableDeclaration'>int rows, i, j, k;</span>
   <span id='getPrintf'>printf("Enter number of rows: ");</span>
   <span id='getScanf'>scanf("%d", &rows);</span>
   <span id='assignStar'>char star = '*';</span>
   <span id="totalForLoop">for (<span id='forLoopI'>i = 0</span>;<span id='iCondition'> i < rows</span>; <span id='iIncrement'>i++</span>) {
	for (<span id='forLoopJ'>j = 0</span>; <span id='jCondition'>j < rows - i</span>; <span id='jIncrement'>j++</span>) {
	   <span id='printfSpace'>printf(" ")</span>;
	}
       for (k = 0; k <= i; k++) {
          printf("%c ",star);
       }
   printf("\n");
   }</span>
}	</pre>
	</div></div>
	<div class='col-xs-4 border'>
			<div id="memoryDiv" class='border'>
			<div id='memoryIntDiv' class='col-xs-12'>
				<div class="col-xs-12 border margin-top10">
					<div  id="rowBox" class="col-xs-5 border opacity00">
					
					<div class="col-xs-2 Vertical-text-center padding-col0">rows</div>
						<div class="col-xs-10 text-center ">
							<div>
								<span class="color-gray">2 bytes</span>
							</div>
							<div class="border-height-css">
								<span id="rowMemory" class='opacity00'></span>
							</div>
							<div>
								<span id="rowAddress">1400</span>
							</div>
						</div>
					
					
					</div>
					<div id='iBox'class="col-xs-offset-1 col-xs-5 border opacity00">
						
						<div class="col-xs-2 Vertical-text-center padding-col0">i</div>
						<div class="col-xs-10 text-center ">
							<div>
								<span class="color-gray">2 bytes</span>
							</div>
							<div class="border-height-css">
								<span id="iMemory" class='opacity00'>0</span>
							</div>
							<div>
								<span id="iAddress">1232</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-12 border margin-top40">
					<div id='jBox' class="col-xs-5 border opacity00">
					
					<div class="col-xs-2 Vertical-text-center padding-col0">j</div>
						<div class="col-xs-10 text-center ">
							<div>
								<span class="color-gray">2 bytes</span>
							</div>
							<div class="border-height-css">
								<span id="jMemory" class='display-inline-block opacity00 '>0</span>
							</div>
							<div>
								<span id="jAddress">1728</span>
							</div>
						</div>
					
					
					</div>
					<div id='kBox' class="col-xs-offset-1 col-xs-5 border opacity00">
					
					<div class="col-xs-2 Vertical-text-center padding-col0">k</div>
						<div class="col-xs-10 text-center ">
							<div>
								<span class="color-gray">2 bytes</span>
							</div>
							<div class="border-height-css">
								<span id="kMemory" class='opacity00'></span>
							</div>
							<div>
								<span id="kAddress">5625</span>
							</div>
						</div>
	
					</div>
				</div>
				</div>
				<div class="col-xs-12 border margin-top40"><div id='starBox' class='col-xs-offset-3 col-xs-6 opacity00'>
				
				<div class="col-xs-2 Vertical-text-center padding-col0">star</div>
						<div class="col-xs-10 text-center ">
							<div>
								<span class="color-gray">1 byte</span>
							</div>
							<div class="border-height-css">
								<span id="starValue" class='opacity00 star-css'>*</span>
							</div>
							<div>
								<span id="starAddress">7458</span>
							</div>
						</div>
				
				
				
				</div></div>
			</div>
		</div>
	<div class='col-xs-4 border'><div id="outputDiv" class='border'>
	
	<div id="consoleId1" class="center">
						<div class="output-console-title-bar">
							<span class="title"><b>Console</b></span>
						</div>
						<div class="output-console-body" id="consoleBodyDiv1">
							<span id="animationDivText" class='opacity00'>Enter number of rows:&emsp;<span spellcheck="false" class="opacity00 empty matrix input-char outline-none" 
							id="rowValue" placeholder="row" maxlength="0" contenteditable="true"><b></b></span></span>
					</div></div>
	
	</div></div>
	
	</div>
	
</body>
</html>