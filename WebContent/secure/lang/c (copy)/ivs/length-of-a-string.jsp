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
<script src="/ivs-js/length-of-a-string.js"></script>
<title>Length of a string</title>
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
	font-family: monospace;
}

.memory {
	border: 1px solid lightgray;
	border-radius: 8px;
	height: 102px;
}

table {
	margin-top: 20px;
	table-layout: fixed;
	width: 100%;
	text-align: center;
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
	font-weight: bold;
}

.output-console-body {
	height: 100px;
	padding: 10px;
	white-space: initial;
	font-size: 14px;
}

.input {
	background-color: black;
	border: medium none;
	font-family: monospace;
}

.user-string {
	font-family: monospace;
	font-weight: bold;
	color: green;
	font-size: 14px;
}

.ct-red {
	font-family: monospace;
	color: red;
}

.fa {
	color: white;
}

.cup-value {
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
	padding-bottom: 2px;
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

.ct-green {
	color: green;
}

#iSpan {
	display: inline-block;
	position: relative;
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
<pre class="margin0"><span id="cup" class="cup-css opacity00"><span class="i-position">i=</span><i class="fa fa-coffee fa-2x sm"></i><span class="cup-value opacity00"><span id="iSpan"></span></span></span>#include&lt;stdio.h&gt;
int main() {
	<span id="charDec">char ch[20];</span>
	<span id="intDec">int i = <span class="zero">0</span>;</span>
	<span id="enterString">printf("Enter a string : ");</span>
	<span id="scanf">scanf ("%s", ch );</span>
	<span id="stringIs">printf("The entered string is : %s\n", ch);</span>
	<span id="whileCond">while (ch[i] <b class="ct-green">!=</b> <b class="ct-blue-color">'\0'</b>)</span> {
		<span id="increment">i++;</span>
	}
	<span id="stringLength">printf("The length of the string :  %s is %d\n", ch, i);</span>
}
</pre>
			</div>
			<div class="col-xs-7">
				<div class="col-xs-12 opacity00 memory" id="memory">
					<table class="opacity00" id="tableId">
						<tbody>
							<tr class="address-one" id="addresId">
								<td><b class="ct-blue-color">ch</b></td>
								<%for (int i = 0; i < 20; i++) {%>
									<td><%=i%></td>
								<%}%>
							</tr>
							<tr id="userString" class="hide user-string">
								<td><div class="td-border opacity00">00</div></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="col-xs-5 col-xs-offset-1 margin-top-25 padding0 opacity00 output" id="output">
				<div class="output-console-title-bar">Output</div>
				<div class="output-console-body margin0">
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
	lengthOfAString();
});


</script>

</body>
</html>