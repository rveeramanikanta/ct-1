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
<script src="/secure/lang/c/js-min/coas.min.js"></script>

<title>Copy of a string</title>
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

.padding0 {
	padding: 0;
}

pre {
	tab-size: 4;
	-moz-tab-size: 4;
	font-family: monospace;
}

.memory-css {
	border: 1px solid lightgray;
	border-radius: 8px;
	height: 130px;
}

table {
	margin-top: 10px;
	width: 100%;
	text-align: center;
	table-layout: fixed;
}

.td-border {
	padding: 4px;
	text-align: center;
	border: 1px solid black;
}

.output-console-title-bar {
	font-weight: bold;
}

.output-console-body {
	height: 70px;
	padding: 10px;
	white-space: initial;
	font-size: 14px;
}

.input {
	background-color: black;
	border: medium none;
	font-family: monospace;
}

.style-css {
	font-family: monospace;
	font-weight: bold;
	color: green;
	font-size: 14px;
}

.ct-red {
	font-family: monospace;
	font-weight: bold;
	color: red;
}

.fa {
	color: white;
}

.value {
     font-size: 12px;
	color: black;
	display: block;
	font-weight: bold;
	margin: -24px 0 0;
	position: relative;
	text-align: center;
	z-index: 9;
}

.cup-css {
	background-color: #003399;
	border: 1px solid white;
	border-radius: 7px;
	box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
	height: 30px;
	left: 353px;
	position: absolute;
	top: 70px;
	width: 54px;
}

.i-position {
	color: white;
	position: relative;
	display: inline-block;
	bottom: 6px;
}

.z-index {
	z-index: 9999999;
}

.ui-effects-transfer {
	z-index: 999999;
	border: 1px solid #003399;
	border-radius: 5px;
}

b {
	font-family: monospace;
}

.ct-green {
	color: green;
}

#iSpan, .position-css {
	display: inline-block;
	position: relative;
}

.usr-btn {
	background-color: green;
}

</style>
</head>

<body>
	<div class="demo-heading text-center margin-top-25">
		<h4 class="label ct-demo-heading" id="heading">Sample Program on Strings</h4>
	</div>
	<div class="col-xs-12 margin-top-40">
		<div class="col-xs-12">
			<div class="col-xs-5 padding0" id="program">
<pre class="margin0"><span id="cup" class="opacity00 cup-css"><span class="i-position">i=</span><i class="fa fa-coffee fa-2x sm"></i><span class="value opacity00"><span id="iSpan"></span></span></span>#include&lt;stdio.h&gt;
int main() {
	<span id="intDec">int i;</span>
	<span id="charDec">char a[20], b[20];</span>
	<span id="enterString">printf("Enter a string : ");</span>
	<span id="scanf">scanf("%s", a);</span>
	<span id="forLoop">for (<span id="iInitialization">i = <span class="zero">0</span></span>; <span id="condition">a[i] <b class='ct-green'>!=</b> <b class='ct-blue-color'>'\0'</b></span>; <span id="increment">i++</span>) {</span>
		<span id="line1">b[i] = a[i];</span>
	}
	<span id="delimeter">b[i] = '\0';</span>
	<span id="stringLength">printf("The copied string = %s\n", b);</span>
}</pre>
			</div>
			<div class="col-xs-7">
				<div class="col-xs-12 opacity00 memory-css" id="memory">
					<table id="tableId1" class="opacity00" align="center">
						<tbody>
							<tr id="addres1Id">
								<td><b class="ct-blue-color">a</b></td>
								<%for (int i = 0; i < 20; i++) {%>
									<td><%=i%></td>
								<%}%>
							</tr>
							<tr id="userString" class="style-css">
								<td><div class="td-border opacity00">00</div></td>
							</tr>
							</tbody>
						</table>
						
						<table id="tableId2" class="opacity00" id="zeroAppend" align="center">
						<tbody>
							<tr id="addres2Id">
								<td><b class="ct-blue-color">b</b></td>
								<%for (int i = 0; i < 20; i++) {%>
									<td><%=i%></td>
								<%}%>
							</tr>
							<tr id="copyString" class="style-css">
								<td><div class="td-border opacity00">00</div></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="col-xs-5 col-xs-offset-1 margin-top-25 padding0 output-css opacity00" id="output">
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
	copyOfStringReady();
});

</script>
</body>
</html>