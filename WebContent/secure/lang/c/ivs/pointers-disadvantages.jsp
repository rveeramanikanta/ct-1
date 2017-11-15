<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/animate.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<!-- <script src="/secure/lang/c/js-min/pda.min.js"></script> -->
<script src="/secure/lang/c/js/pointers-disadvantages.js"></script>
<title>Pointers Disadvantageous</title>

<style>

.introjs-tooltip {
	min-width: 300px;
}

.introjs-duplicate-nextbutton {
	background-color: green;
}

.buttons-div {
	margin: 20px 0 10px;
	text-align: center;
}

.heading-css {
	margin: 20px 0 10px;
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

.box-border {
	border: 1px solid gray;
	border-radius: 8px;
	padding: 10px;
}

.border-height-css, .td-value-css {
	border: 1px solid;
	height: 22px;
}

.color-gray {
	color: gray;
}

.padding10 {
	padding: 10px;
}

div, span {
	position: relative;
}

pre > span {
	position: static;
}

.vertical-align-center {
	align-items: center;
	display: flex;
	font-family: monospace;
}

.table-css {
	text-align: center;
	width: 100%;
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 9999999;
}

.svg-line {
	display: none;
	position: relative;
	stroke: gray;
	stroke-width: 2; 
}

.output-scanf-line {
	font-weight: normal;
	outline: medium none;
}

.output-scanf-line:empty::before {
	color: lightblue !important;
	content: attr(placeholder);
}

.ct-code-b-red {
	font-family: monospace;
	font-weight: bold;
	color: rgb(252, 66, 66);
}

.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 9999999;
}

.output-value-circle {
	background: white;
	color: black;
}

.z-index9999999 {
	position: relative;
	z-index: 9999999;
}

td, th {
	width: 50px;
}

.padding-top-bottom {
	padding: 10px 0;
}

.malloc-box {
	height: 85px;
}

.Vertical-text-center  {
	height: 62px;
	line-height: 62px;
	text-align: right; 
}

.ct-green-color {
	color: green;
	font-weight: bold;
}

.ct-lime-color {
	color: green;
	font-weight: bold;
}

.ct-blue-color {
	font-weight: bold;
}
</style>
</head>
<body>

<div class='col-xs-12'>
	<div class='text-center heading-css'><h1 class='label ct-demo-heading'>Pointers Disadvantages</h1></div>
	<div class='buttons-div'><button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button></div>
	<div class="col-xs-12">
		<div class='col-xs-5'>
			<div class='col-xs-12 box-border'>
<pre class='creamPreTab4' id='preCode'>
void <b class='ct-blue-color'>main()</b> {
	<span id='intLine'>int *a, *b;</span>
	<span id='aLine1'>a = (int *)<span class='ct-green-color'>malloc(2 * sizeof(int))</span>;</span>
	<span id='aLine2'>a = (int *)<span class='ct-green-color'>malloc(3 * sizeof(int))</span>;</span>
	<span id='bLine'>b = a;</span>
	<span id='bFree' class='ct-green-color'>free(b);</span>
}
</pre>
			</div>
		</div>
		<div class='col-xs-7'>
			<div class='col-xs-12 box-border'>
				<div class='col-xs-12 text-center' id='animationBox'>
					<div class='col-xs-12 vertical-align-center'>
						<div class='col-xs-4' id='arrayBox1'>
							<div class='center width200'>
								<div class='col-xs-12 opacity00' id='aBox'>
									<div class='col-xs-3 Vertical-text-center'>a</div>
									<div class="col-xs-7 text-center">
										<div><span class='color-gray'>2 bytes</span></div>
										<div class='border-height-css'><span id='aValue' class='ct-blue-color'></span></div>
										<div><span id='aAddress' class='ct-lime-color'>1111</span></div>
									</div>
								</div>
							</div>
						</div>
						<div class='col-xs-offset-2 col-xs-6 opacity00' id='mallocTablesDiv1'>
							<table align='center'>
								<tbody>
									<tr><td class="td-value-css"></td><td class="td-value-css"></td></tr>
									<tr><td><span class="ct-lime-color">1280</span></td><td><span class="ct-lime-color">1282</span></td></tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class='col-xs-12 vertical-align-center'>
						<div class='col-xs-4' id='arrayBox2'>
							<div class='center width200'>
								<div class='col-xs-12 opacity00' id='bBox'>
									<div class='col-xs-3 Vertical-text-center'>b</div>
									<div class="col-xs-7 text-center">
										<div><span class='color-gray'>2 bytes</span></div>
										<div class='border-height-css'><span id='bValue' class='ct-blue-color'></span></div>
										<div><span id='bAddress' class='ct-lime-color'>2222</span></div>
									</div>
								</div>
							</div>
						</div>
						<div class='col-xs-offset-2 col-xs-6 opacity00' id='mallocTablesDiv2'>
							<table align='center'>
								<tbody>
									<tr><td class="td-value-css"></td><td class="td-value-css"></td><td class="td-value-css"></td></tr>
									<tr>
										<td><span class="ct-lime-color">2280</span></td>
										<td><span class="ct-lime-color">2282</span></td>
										<td><span class="ct-lime-color">2284</span></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script>
	$(document).ready(function() {
		pointersDisadvantagesReady();
	});
</script>
</body>
</html>