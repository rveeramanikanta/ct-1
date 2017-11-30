<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/jquery.scrollTo.js"></script>
<script src="/secure/lang/c/js-min/cdt.min.js"></script>
<title>char data type</title>
<style>

.introjs-tooltip-max-width-custom {
	min-width: 110px;
}

.introjs-duplicate-nextbutton {
	background-color: green;
	margin: 0 5px !important;
}

.buttons-div {
	margin: 20px 0 10px;
	text-align: center;
}

.heading-css {
	margin: 20px 0 10px;
}

.heading-text-div {
	padding: 5px 10px;
	font-size : 14px !important;
}

.box-border {
	border: 1px solid grey;
	border-radius: 8px;
}

.table-css1 {
	color: blue; 
	font-size: 12px;
	margin-top: 10px;
}

.table-css1 td {
	border: 2px solid black;
	padding: 5px;
}

.table-css2 {
	table-layout: fixed;
	position: relative;
	text-align: center;
}

.table-css2 td {
	width: 50px;
}

.td-css {
	background-color: #ffffcc;
	border: 2px solid black;
}

.ct-code-b-black {
	color: black;
	font-weight: bold;
}

.ct-code-b-green {
	font-weight: bold;
	color: green;
}

.margin-padding {
	margin-top: 10px ;
	margin-bottom: 10px;
	padding: 5px 15px;
	min-height: 280px;
}

.array-div-css {
	margin: 10px 0;
}
.user-btn {
	background-color: orange;
	width : 35px; 
}
.creamPreTab4 {
	-moz-tab-size: 4;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 11px;
	margin: 5px;
	padding: 10px;
	white-space: pre;
}

.padding-col0 {
	padding: 0;
}

.padding10 {
	padding: 10px;
}

.output-console {
	margin-bottom: 0;
	margin-top: 0;
}

.output-console-body {
	overflow-y: auto;
	height: 80px; 
	padding: 5px 20px;
}

.ct-code-b-red {
	font-family: monospace;
	font-weight: bold;
	color: rgb(252, 66, 66);
}

.input-text-editor {
	background-color: transparent;
	border: none;
	width: 10px;
}

.input-text-editor:focus {
	outline: none;
}

</style>
</head>
<body>
	<div class='col-xs-12'>
		<div class='text-center heading-css'>
			<h1 class='label ct-demo-heading'>char data type in C language</h1>
		</div>
		<div class='buttons-div'>
			<!-- <button type="button" class="btn btn-success" id="startBtn">Start</button> -->
			<button type="button" class="btn btn-warning visibility-hidden"
				id="restartBtn">Restart</button>
		</div>
		
		<div class="col-xs-12">
			<div class='col-xs-offset-2 col-xs-8 heading-text-div box-border' id='headingTextBox' style="font-family: monospace;">
				<ul>
					<li class='opacity00'><span class='ct-code-b-green'>char</span> data type is used to store only one character.</li>
					<li class='opacity00'>In the memory, a single <span class='ct-code-b-green'>char</span> bit occupies <b>1</b> byte (8 bits).</li>
					<li class='opacity00'>Each character has its own <a href="https://en.wikipedia.org/wiki/ASCII" target="_blank">ASCII</a> value.</li>
					<li class='opacity00'>Total characters in <a href="https://en.wikipedia.org/wiki/ASCII" target="_blank">ASCII</a> are 256.</li>
					<li class='opacity00'>The <a href="https://en.wikipedia.org/wiki/ASCII" target="_blank">ASCII</a> values are in the range of 0 to 255.</li>
					<li class='opacity00'>Some of the <a href="https://en.wikipedia.org/wiki/ASCII" target="_blank">ASCII</a> values for the character are :</li>
				</ul>
				
				<div class="col-xs-12 opacity00">
					<table class="text-center table-css1" align="center">
						<tbody>
							<tr>
								<td><span class='ct-code-b-black'>Character</span></td>
								<td><span>Null</span></td>
								<td><span>space</span></td>
								<td><span>'0' to '9'</span></td>
								<td><span>'A' to 'Z'</span></td>
								<td><span>'a' to 'z'</span></td>
							</tr>
							<tr>
								<td><span class='ct-code-b-black'>ASCII value</span></td>
								<td><span>0</span></td>
								<td><span>32</span></td>
								<td><span>48 - 57</span></td>
								<td><span>65 - 90</span></td>
								<td><span>97 - 122</span></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		
		<div class='col-xs-12'>
			<div class='col-xs-offset-2 col-xs-8 margin-padding box-border opacity00' id='charDiv' style="font-family: monospace;">
				<h4 class="text-center">
					<span class="label label-default">char data type</span>
				</h4>
				<div class='opacity00'><span class='ct-code-b-green'>char</span> data type occupies <b>1</b> byte (8 bits) in the memory.</div>
				<div id="charArrayDiv" class='array-div-css opacity00'>
					<table id='tableDiv' class="table-css2" align="center">
						<tbody>
							<tr>
								<td><span><b>Bits</b></span></td>
								<%
									for (int i = 7; i >= 0; i--) {
								%>
									<td><span><b><%=i%></b></span></td>
								<%
									}
								%>
							</tr>
							<tr>
								<td><span>8</span></td>
								<%
									for (int i = 7; i >= 0; i--) {
								%>
									<td class="td-css"></td>
								<%
									}
								%>
							</tr>
						</tbody>
					</table>
				</div>
				<div class='opacity00'>The <b>8</b> bits (i.e from 0 to 7 bits) are used to store the value of given character.</div>
				<div class='opacity00'><b>Declaration</b>: <span class='ct-code-b-green'>char</span> ch = 'A';</div>
				<div class='opacity00'>Here 
					<ul>
						<li><b>char</b> is a data type</li>
						<li><b>ch</b> is a variable name</li>
						<li>'<b>A</b>' is a character data</li>
					</ul>
				</div>
				<div class='opacity00'>The character data '<b>A</b>' (i.e. 65) has its <a href="https://en.wikipedia.org/wiki/ASCII" target="_blank">ASCII</a> value which is converted into its binary value and stored in the memory (i.e. 8 bits).</div>
			</div>
		</div>
		
		<div class='col-xs-12'>
			<div class='col-xs-offset-2 col-xs-8 padding-col0 opacity00' id='preCodeDiv'>
				<div class='col-xs-6 box-border padding10'>
<pre class='creamPreTab4' id='preCode'>
<span id='charLine'>char ch = '<input type="text" name="lname" id='chValue' class='input-text-editor' maxlength="1" value='A'>';</span>
<span id='printf1'>printf("The value of ch in character : %c\n", ch);</span>
<span id='printf2'>printf("The value of ch in ASCII : %d\n", ch);</span>
</pre>
				</div>
				<div class='col-xs-6'>
					<div class="output-console center" id="outputBox">
						<div class="output-console-title-bar">
							<span>Output</span>
						</div>
<div class="output-console-body"></div>
					</div>
				</div>
			</div>
		</div>
		
		
	</div>

<script>
	$(document).ready(function() {
		charDataTypeReady();
	});
</script>
</body>
</html>