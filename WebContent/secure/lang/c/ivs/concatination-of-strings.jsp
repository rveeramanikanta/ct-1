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
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<!-- <script src="/secure/lang/c/js-min/cos.min.js"></script> -->
<script src="/secure/lang/c/js/concatination-of-strings.js"></script>

<title>Concatenation of strings</title>
</head>
<style>

.margin-top-25 {
	margin-top: 25px;
}

.margin-top-40 {
	margin-top: 40px;
}

.margin0 {
	margin: 0px;
}

pre {
	tab-size: 4;
	-moz-tab-size: 4;
	margin: 0;
	font-family: monospace;
}

.memory-css {
	border: 1px solid lightgray;
	border-radius: 8px;
	height: 225px;
}

table {
	margin-top: 20px;
	width: 95%;
	text-align: center;
	table-layout: fixed;
}

.td-border {
	padding: 4px;
	text-align: center;
	border: 1px solid black;
}

.padding0 {
	padding: 0;
}

.output-console-title-bar {
	padding: 3px;
	letter-spacing: 1px;
	font-family: monospace;
	font-weight: bold;
	background-color: whitesmoke;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
}

.output-console-body {
	height: 100px;
	padding: 10px;
	white-space: initial;
	font-size: 14px;
}

.input {
	color : yellow; 
	background-color: black;
	border: medium none;
	font-family: monospace;
}

.table-css {
	font-family: monospace;
	font-weight: bold;
	color: green;
	font-size: 14px;
}
#stringTd1, #stringTd2 {
	width : 60px;
	height : 26px;
}
#stringTd3 {
	min-width : 31px;
	min-height : 26px;
}
.ct-red {
	font-family: monospace;
	color: red;
}

.fa {
	color: white;
	position: absolute;
}

.i-value, .j-value {
	color: black;
	display: block;
	font-weight: bold;
	margin: -19px 0 0 3px;
	position: relative;
	text-align: center;
	z-index: 9;
}

.cup-css {
	background-color: #003399;
	border: 1px solid white;
	border-radius: 7px;
	padding-bottom: 2px;
	position: absolute;
	top: 120px;
	width: 54px;
	height: 30px;
}

.i-left {
	left: 352px;
}

.i-position, .j-position {
	color: white;
	position: relative;
	display: inline-block;
	margin-top: 4px;
}

.j-left {
	left: 435px;
}

.z-index {
	z-index: 1000004;
}

.z-index99 {
	z-index: 9999999;
	position: relative;
	background: white;
}

.ui-effects-transfer {
	z-index: 9999999;
	border: 1px solid #003399;
	border-radius: 5px;
}

.ct-green {
	color: green;
}
.usr-btn {
	background-color: green;
}
.back-button {
    background-color: #5bc0de !important;
	display: inline-block;
    border-radius: 3px !important;
}
b {
	font-family: monospace;
}
.position-css {
	display: inline-block;
	position: relative;
}
y {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
}

in {
	color: rgb(62, 50, 173);
}

ink {
	color: 	rgb(255, 0, 191)
}

go {
	color: rgb(134, 19, 19);
}

g {
	color: 	green;
	font-weight: bold;
}

r {
	color: red;
}

.displayInline {
	position: relative;
	display: inline-block;
}
</style>
<body>
	<div class="demo-heading text-center margin-top-25">
		<h4 class="label ct-demo-heading" id="heading">Sample Program on Strings</h4>
	</div>
	<div class="col-xs-12 margin-top-40">
		<div class="col-xs-12">
			<div class="col-xs-5 padding0" id="program">
<pre>
<in>#include</in> <ink>&lt;stdio.h&gt;</ink>
<g>int</g> main() {
   <span id="charDec"><g>char</g> <span id="charA">a[<ink>10</ink>]</span>, <span id="charB">b[<ink>10</ink>]</span>, <span id="charC">c[<ink>20</ink>]</span>;</span>
   <span id="intDec"><g>int</g> <span id="iInit">i</span>, <span id="jInit">j</span>;</span>
   <span id="firstString">printf(<ink>"Enter the first string : "</ink>);</span>
   <span id="scanA">scanf("%s", a);</span>
   <span id="secondString">printf(<ink>"Enter the second string : "</ink>);</span><span id="cupI" class="cup-css i-left opacity00"><span class="i-position">i=</span><i class="fa fa-coffee fa-2x sm"></i><span class="i-value"><span id="iSpan"></span></span></span>
   <span id="scanB">scanf("%s", b);</span>
   <span id="loopA">for (<span id="iInitialization">i = <ink><span class="zero">0</span></ink></span>; <span id="condition1">a[i] <b class='ct-green'>!=</b> <b class='ct-blue-color'>'\0'</b></span>; <span id="iIncrement">i++</span>) {</span>
       <span id="line1">c[i] = a[i];</span></span><span id="cupJ" class="cup-css j-left opacity00"><span class="j-position">j=</span><i class="fa fa-coffee fa-2x sm"></i><span class="j-value"><span id="jSpan"></span></span></span>
   }
   <span id="loopB">for (<span id="jInitialization">j = <ink><span class="j-zero">0</span></ink></span>; <span id="condition2">b[j] <b class='ct-green'>!=</b> <b class='ct-blue-color'>'\0'</b></span>; <span id="jIncrement">j++</span>) {</span>
       <span id="line2">c[i] = b[j];</span>
       <span id="secondIIncrement">i++;</span>
   }
   <span id="delimeter">c[i] = <ink>'\0'</ink>;</span>
   <span id="concatenatedString">printf(<ink>"The concatenated string = %s\n", c</ink>);</span>
<span id="end">}</span>
</pre>
			</div>
			<div class="col-xs-7">
				<div class="col-xs-12 padding0 opacity00 memory-css" id="memory">
					<table  id="tableId1" class="opacity00" align="center">
						<tbody>
							<tr>
								<td><b class="ct-blue-color">a</b></td>
								<%for (int i = 0; i < 10; i++) {%>
									<td><%=i%></td>
								<%}%>
							</tr>
							<tr id="stringTd1" class="table-css">
								<td><div class="td-border opacity00">00</div></td>
							</tr>
						</tbody>
					</table>
					<table id="tableId2" class="opacity00" align="center">
						</tbody>	
							<tr class="text-center">
								<td><b class="ct-blue-color">b</b></td>
								<%for (int i = 0; i < 10; i++) {%>
									<td><%=i%></td>
								<%}%>
							</tr>
							<tr id="stringTd2" class="table-css">
							<td><div class="td-border opacity00">00</div></td>
							</tr>
						</tbody>
					</table>
					<table id="tableId3" class="opacity00" align="center">
						<tbody>
							<tr>
								<td><b class="ct-blue-color">c</b></td>
								<%for (int i = 0; i < 20; i++) {%>
									<td><%=i%></td>
								<%}%>
							</tr>
							<tr id="stringTd3" class="table-css">
							<td><div class="td-border opacity00">00</div></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="col-xs-5 col-xs-offset-1 margin-top-25 padding0 opacity00 output-css" id="output">
				<div class="output-console-title-bar">Output</div>
				<div class="output-console-body">
					<div class="firstLine"></div>
					<div class="secondLine"></div>
					<div class="thirdLine"></div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 text-center margin-top-40">
			<span id="restart" class="opacity00 btn btn-warning">Restart</span>
		</div>
	</div>

<script>

$(document).ready(function() {
	concatinationOfStrings();
});

</script>
</body>
</html>