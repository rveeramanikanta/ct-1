
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>scanf</title>
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
<script src="/secure/lang/c/js-min/su.min.js" type="text/javascript"></script>

<style>

.margin-top20 {
	margin-top: 20px;
}

#typingDiv {
	height: 70px;
}

.text-center {
	text-align: center;
}

.back-color {
	background-color: #D6C2E7;
}

table, th, td {
    border: 1px solid black;
    
}

div, span {
    position: relative;
}

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 14px;
	margin-bottom: 14px;
	height: 100px;
	overflow: auto;
	padding: 10px;
	white-space: pre-line;
}

.input-char {
  width: 30px;
  border-width: 0px 0 0 0;
  background-color: #000;
  color: #0f0;
   text-align: center;
}

.input-char:empty::before {
 	color: black;
	content: attr(placeholder);
}

.left-padding-120 {
	padding-left: 120px;
}

.text-center {
	text-align: center;
}

.text-color-green {
	color: green;
}

.ui-effects-transfer {
	border: 1px solid #003399;
	border-radius: 6px;
	position: relative;
	z-index: 10000000;
}

/* .zIndex {
	background-color: white;
	position: relative;
	z-index: 10000001 !important;
} */

 .zIndex {
	background-color: white;
	position: relative;
	z-index: 10000000 !important;
} 

.border {
	border: 1px solid black;
}

.margin-top10 {
	margin-top: 10px;
}

.padding20 {
	padding:20px;
}

.col-xs-12 {
	width: 100%;
}

.border-height-css {
	border: 1px solid;
	height: 22px;
}

.Vertical-text-center  {
	height: 62px;
	line-height: 62px;
	text-align: right; 
}

.padding-col0 {
	padding: 0;
}

.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 9999999;
	background-color: white;
}

.height-124 {
	height: 124px;
}

.user-btn {
	background-color: green;
}

.error-msg {
	color: red;
	font-weight: bold;
}

.int, .float {
	outline: none;
}

:-moz-placeholder { 
  color: pink;
}

#inputInt {
width : 30px;
height : 20px;
}

#consoleBodyDiv1 {
	height: 100px;
}

.margin-top150 {
	margin-top: 142px;
}

.margin-left10 {
	margin-left: 10px;
}

</style>
</head>
<body>
<script>
	$(document).ready(function() {
		scanfUsageReady();
	});
</script>
	<div class="ct-box-main">
		<div class='text-center'>
			<h1 class='label ct-demo-heading' id="heading">usage of scanf( )</h1>
		</div>
		
		<div class='col-xs-12 text-center'>
			<span id='restart'
				class='btn btn-warning btn-sm opacity00 margin-top20'>Restart
				&nbsp;<i class='fa fa-refresh'></i>
			</span>
		</div>
		
		<div id="typingDiv"
			class='margin-top20 col-xs-offset-3 col-xs-7 col-xs-offset-2'>
		</div>
		<!-- <div class='col-xs-12 text-center'>
			<span id='restart'
				class='btn btn-warning btn-sm opacity00 margin-top20'>Restart
				&nbsp;<i class='fa fa-refresh'></i>
			</span>
		</div> -->
		<div class='col-xs-offset-4  col-xs-8 text-center margin-top20'>
			<table id='myTable' class='opacity00'>
				<tr>
					<th class='text-center'>Conversion character</th>
					<th class='text-center'>Meaning</th>
				</tr>
				<!-- <tr>
					<td>%c</td>
					<td>data item is a single character</td>
				</tr> -->
				<tr>
					<td>%d</td>
					<td>represents  a decimal integer</td>
				</tr>
				<tr>
					<td>%c</td>
					<td>represents a single character</td>
				</tr>
				<tr>
					<td>%e,%f,%g</td>
					<td>represents a floating-point value</td>
				</tr>
				<tr>
					<td>%h</td>
					<td>represents a short integer value</td>
				</tr>
				<tr>
					<td>%i</td>
					<td>represents a decimal, hexadecimal or octal</td>
				</tr>
				<tr>
					<td>%o</td>
					<td>represents an octal integer</td>
				</tr>
				<tr>
					<td>%s</td>
					<td>represents a string followed by a white space character</td>
				</tr>
				<tr>
					<td>%u</td>
					<td>represents an unsigned decimal integer</td>
				</tr>
				<tr>
					<td>%x</td>
					<td>represents a hexadecimal integer</td>
				</tr>
				<!-- <tr>
					<td>%[ ]</td>
					<td>data item is a string, may include white space characters</td>
				</tr> -->
			</table>
		</div>
		<div class='col-xs-12 margin-top20'>
			<div id='mainExampleDiv' class='col-xs-4'>
				 <div id='exampleDiv' class='opacity00 col-xs-7'>
					<!-- <div class='text-color-green text-center'>Example1</div> -->
					<!-- <div><span id="exampleOneChar">char ch;</span></div>
					<div>
						printf("<span id='EnterChar'>Enter a character</span> = ");
					</div>
					<div>
						scanf("<span id='charSpan'><span id='charPercent'>
								%c</span>", <span id='charAmp'>&ch</span></span>);
					</div> -->
					<div id='sampleOne'><span>&nbsp;&nbsp;&nbsp;</span><span><span id="exampleOneChar">char ch;</span></span><br>
					<span>&nbsp;&nbsp;</span><span>
					printf("<span id='EnterChar'>Enter a character</span> = ");
					</span><br>
					<span>&nbsp;&nbsp;</span><span>
						scanf("<span id='charSpan'><span id='charPercent'>
								%c</span>", <span id='charAmp'>&ch</span></span>);
					</span></div>
				</div> 
				<!-- <div id='exampleDiv' class='back-color opacity00'>
				<pre>
				char ch;
				printf("<span id='EnterChar'>Enter a character = </span> ");
				scanf("<span id='charSpan'><span id='charPercent'>%c</span>",<span id='charAmp'>&ch</span></span>);
				</pre>
				</div>
 -->				<div id='exampleDiv1' class='back-color margin-top150 opacity00'>
					<!-- <div class='text-color-green text-center'>Example2</div> -->
					<div class='margin-left10'><span id='exampleTwoChar'>char ch;</span></div>
					<div class='margin-left10'><span id='exampleTwoInt'>int i;</span></div>
					<div class='margin-left10'><span id='exampleTwoFloat'>float f;</span></div>
					<div class='margin-left10'>printf("Enter a character, an interger and a float value = \n");</div>
					<div class='margin-left10'><span id='example2Scanf'>scanf("<span id='charSpan1'>%c</span>
					 <span id='intSpan'>%d</span><span id='floatSpan'> %f"</span>,<span id='charAmp1'>&ch</span>,<span id='intAmp'>&i</span>,<span id='floatAmp'>&f</span>);</span></div>
				</div>
			</div>
			<div id='mainMemoryDiv' class='col-xs-4'>
				<div id='memoryDiv' class='back-color col-xs-12 opacity00'>
					<div class='text-color-green text-center' class='col-xs-4'>Memory</div>
					<div class="col-xs-offset-4 col-xs-4 padding-col0 opacity00"
						id="charBox">
						<div class="col-xs-2 Vertical-text-center padding-col0">ch</div>
						<div class="col-xs-10 text-center ">
							<div>
								<span class="color-gray">1 byte</span>
							</div>
							<div class="border-height-css">
								<span id="xValue">3</span>
							</div>
							<div>
								<span id="xAddress">1113</span>
							</div>
						</div>
					</div>
				</div>
				<div id='memoryDiv1'
					class='back-color col-xs-12 margin-top20 opacity00'>
					<div class='text-color-green text-center' class='col-xs-4'>Memory</div>
					<div id='charBox1' class='col-xs-4 padding-col0 opacity00'>

						<div class="col-xs-2 Vertical-text-center padding-col0">ch</div>
						<div class="col-xs-10 text-center ">
							<div>
								<span class="color-gray">1 byte</span>
							</div>
							<div class="border-height-css">
								<span id="xValue1" class='opacity00'></span>
							</div>
							<div>
								<span id="xAddress">1200</span>
							</div>
						</div>
					</div>
					<div id='intBox' class='col-xs-4 padding-col0 opacity00'>

						<div class="col-xs-2 Vertical-text-center padding-col0">i</div>
						<div class="col-xs-10 text-center">
							<div>
								<span class="color-gray">2 bytes</span>
							</div>
							<div class="border-height-css">
								<span id="xValue2" class='opacity00'></span>
							</div>
							<div>
								<span id="xAddress">1300</span>
							</div>
						</div>
					</div>
					<div id='floatBox' class='col-xs-4 padding-col0 opacity00'>

						<div class="col-xs-2 Vertical-text-center padding-col0">f</div>
						<div class="col-xs-10 text-center ">
							<div>
								<span class="color-gray">4 bytes</span>
							</div>
							<div class="border-height-css">
								<span id="xValue3" class='opacity00'></span>
							</div>
							<div>
								<span id="xAddress">1400</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id='mainOutputDiv' class='col-xs-4'>
				<div id='outputDiv' class='opacity00'>
					<div id="consoleId" class="center">
						<div class="output-console-title-bar">
							<span class="title"><b>Console</b></span>
						</div>
						<div class="output-console-body" id="consoleBodyDiv">
							<span id="hiddenTypingChar"><span id='enterCharText'
								class='opacity00'>Enter a character = </span><input
								id='inputChar' maxlength='1' class='input-char' tabindex='0' /></span>
						</div>
					</div>
				</div>
				<div id='outputDiv1' class='margin-top20'>
					<div id="consoleId1" class="center opacity00">
						<div class="output-console-title-bar">
							<span class="title"><b>Console</b></span>
						</div>
						<div class="output-console-body" id="consoleBodyDiv1">
							<span id="hiddenTypingChar1"><span id='enterCharText1'
								class='t'>Enter a character, an interger and float value =
								<span contenteditable='true' spellcheck='false' class='int input-char empty' id='inputChar1' placeholder='char'
								maxlength='0'></span> <span contenteditable='true' spellcheck='false' class='int input-char empty' id='inputInt' placeholder='int'
								maxlength='2'><b></b></span> <span contenteditable='true' spellcheck='false' class='float input-char empty' id='inputFloat' placeholder='float' 
								maxlength='4'><b></b></span></span></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>