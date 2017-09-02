<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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
<script src="/secure/lang/c/js-min/lidt.min.js" type="text/javascript"></script>

<title>long int data type</title>

<style>

.box-border {
	border: 1px solid grey;
	border-radius: 8px;
}

.heading-text-div {
	padding: 5px 10px;
	border: 1px solid black;
	border-radius: 8px;
	font-size : 14px !important;
}

.margin-padding {
	margin-top: 10px ;
	margin-bottom: 10px;
	padding: 5px 15px;
}

.table-css {
	position: relative;
	text-align: center;
	width: 100%;
}

.array-div-css {
	margin: 10px 0;
}

.td-border {
    border: 2px solid;
}

.background-color-red {
	background-color : red;
}

.background-color-yellow {
	background-color : #ffffcc; 
}

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}

.introjs-tooltip {
	max-width : 160px!important;
	min-width :150px !important;
}

.introjs-tooltip-max-width-custom {
	min-width: 110px;
}

.introjs-duplicate-nextbutton {
	background-color: green;
	margin: 0 5px !important;
}

.fa {
	color: red;
}

.ct-code-b-green {
	font-weight: bold;
	color: green;
}

</style>
</head>
<body>
<div class='ct-box-main'>
	<div class='text-center'>
		<h1 class='label ct-demo-heading'>long int data type in C language</h1>
	</div>
	<div class='buttons-div'>
		<button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button>
	</div> 
	<div class='col-xs-offset-2 col-xs-8 heading-text-div' id='typingbox'>
		<ul>
			<li class='opacity00'><span class='ct-code-b-green'>long int</span> data type occupies <b>4</b> bytes (32 bits) in the memory.</li>
			<li class='opacity00'><span class='ct-code-b-green'>long int</span> data type has two different qualifiers.</li>
			<li class='opacity00'>They are: <span class='ct-code-b-green'>signed long int</span> and <span class='ct-code-b-green'>unsigned long int</span>.</li>
		</ul>
	</div>
	<div class="col-xs-offset-2 col-xs-8 margin-padding opacity00 box-border" id='signedLongintDiv'>
		<h4 class="text-center">
			<span class="label label-default">signed long int</span>
		</h4>
		<div id='signedLongIntText1' class='signed-long-int-text-div opacity00'><span class='ct-code-b-green'>signed long int</span> occupies <b>4</b> bytes (32 bits) in the memory.</div>
		<div id="signedLongArrayDiv" class='array-div-css opacity00'>
			<table id='tableDiv' class="table-css" align="center">
				<tr id='tableindex'>
					<td><span><b>Bits</b></span></td>
				<%
					for (int i = 31; i >= 0; i--) {
				%>
					<td><span><b><%=i%></b></span></td>
				<%
					}
				%>
				</tr>
				<tr id='tablecell'>
					<td>16</td>
				<%
					for (int i = 31; i >= 0; i--) {
				%>
					<td class="td-border"></td>
				<%
					}
				%>
				</tr>
				<tr>
					<td></td>
					<td><span>Signed bit</span><br><span><b>+</b></span><span> or </span><span><b>-</b></span></td>
				<%
					for (int i = 30; i >= 0; i--) {
				%>
					<td>0<br><span>or</span><br><span>1</span></td>
				<%
					}
				%>
				</tr>
			</table>
		</div>
		<div class='signed-long-int-text-div opacity00'>The left most bit (31<sup>th</sup> bit) is allocated to represent the <b>sign</b> of the number i.e. either <b>positive (+)</b> or <b>negative (-)</b>.</div>
		<div class='signed-long-int-text-div opacity00'>If the value in the <b>31<sup>th</sup></b> bit is <b>1</b> it is considered as a <b>negative (-)</b> number and if it is <b>0</b> it is considered as a <b>positive (+)</b> number.</div>
		<div class='signed-long-int-text-div opacity00'>The remaining <b>31</b> bits (i.e from 0 to 30 bits) are used to store the value of the given number.</div>
		<div class='signed-long-int-text-div opacity00'>The range of the given number for a <span class='ct-code-b-green'>signed long int</span> data type is from <b>-2<sup>31</sup></b> to <b>+2<sup>31</sup> - 1</b> i.e. <b>-2147483648</b> to <b>+2147483647</b>.</div>
		<div class='signed-long-int-text-div opacity00'>The <b>2<sup>31</sup></b> is because one bit is reserved for representing the <b>sign</b>. The maximum positive number is <b>+2<sup>31</sup> - 1</b> because we also have to represent <b>zero</b> (0) which is neither positive (+) nor negative (-).</div>
	</div>
	<div class="col-xs-offset-2 col-xs-8 margin-padding opacity00 box-border" id='unsignedLongintDiv'>
		<h4 class="text-center">
			<span class="label label-default">unsigned long int</span>
		</h4>
		<div id='unsignedLongIntText1' class='unsigned-long-int-text-div opacity00'><span class='ct-code-b-green'>unsigned long int</span> occupies 4 bytes (32 bits) in the memory.</div>
		<div id="unsignedLongArrayDiv" class='array-div-css opacity00'>
			<table id='untableDiv' class="table-css" align="center">
				<tr id='tableunindex'>
					<td><span><b>Bits</b></span></td>
				<%
					for (int i = 31; i >= 0; i--) {
				%>
					<td><span><b><%=i%></b></span></td>
				<%
					}
				%>
				</tr>
				<tr id='tabledisplay'>
					<td>16</td>
				<%
					for (int i = 31; i >= 0; i--) {
				%>
					<td class="td-border"></td>
				<%
					}
				%>
				</tr>
				<tr>
					<td></td>
				<%
					for (int i = 31; i >= 0; i--) {
				%>
					<td>0<br><span>or</span><br><span>1</span></td>
				<%
					}
				%>
				</tr>
			</table>
		</div>
		<div class='unsigned-long-int-text-div opacity00'>The <b>32</b> bits (i.e from 0 to 31 bits) are used to store the value of the given number.</div>
		<div class='unsigned-long-int-text-div opacity00'>The range of the given number for an <span class='ct-code-b-green'>unsigned long int</span> data type is from <b>0</b> to <b>+2<sup>32</sup> - 1</b> i.e. <b>0</b> to <b>+4294967295</b>.</div>
		<div class='unsigned-long-int-text-div opacity00'>The <b>2<sup>32</sup></b> is because we use <b>32</b> bits to store the value of the given number. The maximum positive number is <b>+2<sup>32</sup> - 1</b> because we also have to represent <b>zero</b> (0) which is neither positive (+) nor negative (-).</div>
	</div>
</div>

<script>

	$(document).ready(function() {
		longIntDataTypeReady();
	});

</script>

</body>
</html>