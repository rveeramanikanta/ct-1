
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>review</title>
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
<!-- <script src="/secure/lang/c/js-min/suc.min.js" type="text/javascript"></script> -->
<script src="/secure/lang/c/js/scanf-usage-c.js" type="text/javascript"></script>
<style>
.margin-top-20 {
	margin-top: 20px;
}

.margin-top-40 {
	margin-top: 40px;
}

.box-border {
	border: 1px solid gray;
    border-radius: 8px;
}

.creampretab4 {
	-moz-tab-size: 1;
	tab-size: 1;
	background-color:#fffae6 !important;
	line-height: 2.5;
}

.Vertical-text-center {
    line-height: 20px;
    text-align: right;
}
.padding-col0 {
	padding: 0px;
}

.border-height-css {
	border: 1px solid;
	height: 22px;
}

.box-height {
	height: 113px;
}

.output-console {
    margin: 0;
}

.output-console-body {
	height: 120px;
	font-size: 14px;
	line-height: 2.5;
	white-space: nowrap;
}

.ui-effects-transfer {
	border: 1px solid #003399;
	border-radius: 6px;
	position: relative;
	z-index: 10000000;
}

 .z-index {
	background-color: white;
	position: relative;
	z-index: 10000000 !important;	
} 

.input-char {
  width: 30px;
  border-width: 0px 0 0 0;
  background-color: #000;
  color: #0f0;
  text-align: center;
}

.input-all {
  width: 100%;
  border-width: 0px 0 0 0;
  background-color: #000;
  color: #0f0;
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

.blinking-orange {
	animation-name: blink-background-orange ;
	animation-duration: 1s;
	animation-iteration-count: 1s;
	animation-direction: alternate;
}

@keyframes blink-background-orange { 
	50% {
		background-color: orange;
	}
}

.ct-code-b-red {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

</style>
</head>
<body>
<script>
	$(document).ready(function() {
		scanfUsageCReady();
	});
</script>
	<div class="ct-box-main">
		<div class='text-center'>
			<h1 class='label ct-demo-heading' id="heading">usage of scanf( )</h1>
		</div>
		
		<div class='col-xs-12 text-center'>
			<span id='restart'
				class='btn btn-warning btn-sm opacity00 margin-top-20'>Restart
				&nbsp;<i class='fa fa-refresh'></i>
			</span>
		</div>

		<div
			class="margin-top-20 col-xs-offset-3 col-xs-7">
			<ol id="typingDiv">
				<li>The <b class="ct-blue-color">scanf()</b> function is used to read values of different data types from the standard input.</li>
				<li>The <b class="ct-blue-color">scanf()</b> function is available in  <b class="ct-blue-color">"stdio.h"</b> header file included in the standard library.</li>
				<li>The general format for using a <b class="ct-blue-color">scanf()</b>
					function is <b>scanf (“control_string”,
						argument_list);</b></li>
			</ol>

		</div>
		<div class='col-xs-offset-4  col-xs-8 text-center margin-top-20'>
			<table id='myTable' class='table-bordered opacity00'>
				<tr>
					<th class='text-center'>Conversion character</th>
					<th class='text-center'>Represents</th>
				</tr>
				<tr>
					<td>%d</td>
					<td>decimal integer</td>
				</tr>
				<tr>
					<td>%c</td>
					<td>single character</td>
				</tr>
				<tr>
					<td>%e,%f,%g</td>
					<td>floating-point value</td>
				</tr>
				<tr>
					<td>%h</td>
					<td>short integer value</td>
				</tr>
				<tr>
					<td>%i</td>
					<td>a decimal, hexadecimal or octal</td>
				</tr>
				<tr>
					<td>%o</td>
					<td>octal integer</td>
				</tr>
				<tr>
					<td>%s</td>
					<td>a string followed by a whitespace character</td>
				</tr>
				<tr>
					<td>%u</td>
					<td>unsigned decimal integer</td>
				</tr>
				<tr>
					<td>%x</td>
					<td>hexadecimal integer</td>
				</tr>
			</table>
		</div>
		<div id="mainDiv" class="col-xs-12 margin-top-20">
		<div class="col-xs-offset-1 col-xs-5">
				<pre id="codeAnimation" class="creampretab4 box-border opacity00">
				<span id="exampleOneChar">char ch;</span>
				<span id="firstPrintf">printf("Enter a character = ");</span>
				<span id='firstScanf'>scanf("%c", &ch);</span>
				
				<span id="exampleTwoInt">int i;</span>
				<span id="exampleTwoFloat">float f;</span>
				<span id="exampleTwoSecondPrintf">printf("Enter an interger and a float value = \n");</span>
				<span id="exampleTwoSecondScanf">scanf("%d %f",&i,&f);</span></pre>
			</div>
		<div class="col-xs-5">
		<div class="col-xs-12 box-border box-height opacity00" id="mainMemoryDiv">
					<div id='memoryDiv1'
					class='back-color col-xs-12 margin-top-40'>
					<div id='charBox' class='col-xs-4 padding-col0 opacity00'>

						<div class="col-xs-3 Vertical-text-center padding-col0">ch =</div>
						<div class="col-xs-9 text-center ">
							<div class="border-height-css">
								<span id="xValue" class=''></span>
							</div>
						</div>
					</div>
					<div id='intBox' class='col-xs-4 padding-col0 opacity00'>

						<div class="col-xs-3 Vertical-text-center padding-col0">i &nbsp; = </div>
						<div class="col-xs-9 text-center">
							<div class="border-height-css">
								<span id="xValue2" class=''></span>
							</div>
						</div>
					</div>
					<div id='floatBox' class='col-xs-4 padding-col0 opacity00'>

						<div class="col-xs-3 Vertical-text-center padding-col0">f &nbsp; = </div>
						<div class="col-xs-9 text-center">
							<div class="border-height-css">
								<span id="xValue3" class=''></span>
							</div>
						</div>
					</div>
				</div>
		</div>
				<div class="col-xs-12 box-height margin-top-20">
					<div id="consoleId" class="output-console padding0 opacity00">
						<div class="output-console-title-bar">
							<span>Output</span>
						</div>
						<div class="output-console-body">
						<div><span class="opacity00">Enter a character = </span><input id='inputChar' maxlength='1' class='input-char'/></div>
						<div><span class="opacity00">Enter  an interger and a float value = </span></div>
						<div><span id="inputVal" class='input-all'><input id='secondInput' maxlength='20' class='input-all'/></span></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
</body>
</html>

