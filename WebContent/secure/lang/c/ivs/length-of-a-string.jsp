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
<!-- <script src="/secure/lang/c/js-min/loas.min.js"></script> -->
<script src="/secure/lang/c/js/length-of-a-string.js"></script>
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
	/* font-family: monospace; */
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
	min-width: 31px;
    min-height: 25px;
}

.padding0 {
	padding: 0;
}
.panel-heading {
	padding: 3px;
	letter-spacing: 1px;
	font-family: monospace;
	font-weight: bold;
	background-color: whitesmoke;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
}

.panel {
	border-radius: 0px;
}

.panel-body {
	padding: 8px;
	letter-spacing: 1px;
	background-color: black;
	color: white;
	height: 100px;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
}


.output-console-title-bar {
	padding: 3px;
	letter-spacing: 1px;
	font-family: monospace;
	font-weight: bold;
	background-cole: whitesmoke;
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
	color: #0f0;
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
	font-weight: bold;
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

#iSpan, .position-css {
	display: inline-block;
	position: relative;
}

.usr-btn {
	background-color: green;
}

.skip-button {
	background: orange;
	margin-right: 15px !important;
}
.back-button {
    background-color: #5bc0de !important;
	display: inline-block;
    border-radius: 3px !important;
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
	color: 	rgb(64, 130, 65);
	font-weight: bold;
}

r {
	color: red;
}

pi {
	color: fuchsia;
}

y {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
}

.usr-btn {
	background-color: green;
	border: 1px solid white;
	border-radius: 3px;
	color: grenn;
	font: 11px sans-serif;
	padding: 4px;
	cursor: pointer;
	margin-bottom: 2px;
	display:inline-block;
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
<pre class="margin0"><span id="cup" class="cup-css opacity00"><span class="i-position">i=</span><i class="fa fa-coffee fa-2x sm"></i><span class="cup-value opacity00"><span id="iSpan"></span></span></span><in>#include</in> <ink>&lt;stdio.h&gt;</ink>
<g>int</g> main() {
	<span id="charDec"><g>char</g> ch[<ink>20</ink>];</span>
	<span id="intDec"><g>int</g> i = <ink><span class="zero">0</span></ink>;</span>
	<span id="enterString">printf(<ink>"Enter a string : "</ink>);</span>
	<span id="scanf">scanf("%s", ch);</span>
	<span id="stringIs">printf(<ink>"The entered string is : " %s\n", ch</ink>);</span>
	<span id="whileCond"><go><b>while</b></go> (<span id="chIsNotZero">ch[i] <b class="ct-green">!=</b> <ink><b class="ct-blue-color">'\0'</b></ink></span>)</span> {
		<span id="increment">i++;</span>
	}
	<span id="stringLength">printf(<ink>"The length of the string</ink> %s <ink>is : </ink>%d<g>\n</g>", ch, i);</span>
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
				<div class="panel-heading text-center">Output</div>
				<div class="panel panel-body margin0">
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
	lengthOfAStringReady();
});


</script>

</body>
</html>