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
<!-- <script src="/secure/lang/c/js-min/ptda.min.js"></script> -->
<script src="/secure/lang/c/js/pointers-two-dimensional-array.js"></script>
<title>Pointers with Two Dimensional Array</title>

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
	-moz-tab-size: 3;
	tab-size: 3;
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

.Vertical-text-center  {
	height: 62px;
	line-height: 62px;
	text-align: right; 
}

.width200 {
	width: 200px;
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

.output-console {
	margin: auto;
	width: 400px;
}

.margin-top30 {
	margin-top: 30px;
}

.output-console-body {
	font-size: 11px;
	height: 150px;
	padding: 5px 20px;
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
	marker-end: url("#arrowEnd");
	position: relative;
	stroke: black;
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

.ct-green-color {
	color: green;
	font-weight: bold;
}

.ct-lime-color {
	color: green;
	font-weight: bold;
}

.blue {
 	border:1px solid blue;
 }
 
 .red {
 	border:1px solid red;
 }
 
 .green {
 	border:1px solid green;
 }
 
  .red-text {
 	color: red;
 	font-weight: bold;
 }
 
  .green-text {
 	color: green;
 	font-weight: bold;
 }
 
  .blue-text {
 	color: blue;
 	font-weight: bold;
 }
 
</style>
</head>
<body>
<div class='col-xs-12'>
	<div class='text-center heading-css'><h1 class='label ct-demo-heading'>Pointers with Two Dimensional Array</h1></div>
	<div class='buttons-div'><button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button></div>
	<div class="col-xs-12">
		<div class='col-xs-5'>
			<div class='col-xs-12 box-border'>
<!-- <pre class='creamPreTab4' id='preCode'>
<span>#include&lt;iostream&gt;</span>
<span>using namespace std;</span>
int <b class='ct-blue-color'>main()</b> {
	<span id='line1'>int *p, m, n, i, j;</span>
	<span id='printf1'>cout << "Enter number of rows and columns : ";</span>
	<span id='scanf1'>cin >> m >> n;</span>
	<span id='pLine'>p = <span class='ct-green-color'>new int[m * n]</span>;</span>
	<span id='printf2'>cout << "Enter the matrix elements : ";</span>
	<span id='forScanf'>for (i = 0; i < m; i++) {
		for (j = 0; j < n; j++) {
			<span id='scanf2'>cin >> *(p + (i * n) + j);</span>
		}
	}</span>
	<span id='printf3'>cout << "The given matrix is : \n";</span>
	<span id='forPrintf'>for (i = 0; i < m; i++) {
		for (j = 0; j < n; j++) {
			<span id='printf4'>cout << *(p + (i * n) + j) << " ";</span>
		}
		<span id='printf5'>cout << "\n";</span>
	}</span>
}
</pre> -->
<pre class='creamPreTab4' id='preCode'>
void <b class='ct-blue-color'>main()</b> {
	<span id='line1'>int *p, m, n, i, j;</span>
	<span id='printf1'>printf("Enter number of rows and columns : \n");</span>
	<span id='scanf1'>scanf("%d %d", &m, &n);</span>
	<span id='pLine'>p = (int *)<span class='ct-green-color'>malloc(m * n * sizeof(int))</span>;</span>
	<span id='printf2'>printf("Enter the matrix elements : \n");</span>
	<span id='forScanf'>for (i = 0; i < m; i++) {
		for (j = 0; j < n; j++) {
			<span id='scanf2'>scanf("%d", (p + (i * n) + j));</span>
		}
	}</span>
	<span id='printf3'>printf("The given matrix is : \n");</span>
	<span id='forPrintf'>for (i = 0; i < m; i++) {
		for (j = 0; j < n; j++) {
			<span id='printf4'>printf(" %d", *(p + (i * n) + j));</span>
		}
		<span id='printf5'>printf("\n");</span>
	}</span>
}
</pre>
			</div>
		</div>
		<div class='col-xs-7'>
			<div class='col-xs-12 box-border'>
				<div class='col-xs-12 vertical-align-center' id='animationBox'>
					<div class='col-xs-4' id='variablesBox'>
						<div class='center width200'>
							<div class='col-xs-12 opacity00' id='pBox'>
								<div class='col-xs-3 Vertical-text-center'>p</div>
								<div class="col-xs-7 text-center">
									<div><span class='color-gray'>2 bytes</span></div>
									<div class='border-height-css'><span id='pValue' class='ct-blue-color'></span></div>
									<div><span id='pAddress' class='ct-lime-color'>1111</span></div>
								</div>
							</div>
						</div>
					</div>
					<div class='col-xs-8 opacity00' id='arrayBox'>
						<table class='table-css'>
							<tbody><tr></tr><tr></tr><tr></tr></tbody>
						</table>
					</div>
					
					<svg class='svg-css' id='svg'>
						<marker id="arrowEnd" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: black;">
							<path d="M0,0 L5,2.5 L0,5 Z"/>
						</marker>
						<line class="svg-line" x1="23.8%" y1="50%" x2="25%" y2="50%"/>
					</svg>
				</div>
			</div>
			<div class="col-xs-12 margin-top30">
				<div id="outputBox" class="output-console center">
					<div class="output-console-title-bar"><span>Output</span></div>
<div class="output-console-body"><span class="visibility-hidden">Enter number of rows and columns : </span>
<span class='output-scanf-line' id='outputScanfLine1'></span>
<span class="visibility-hidden">Enter the matrix elements : </span>
<span class='output-scanf-line' id='outputScanfLine2'></span>
<span class="visibility-hidden">The given matrix is : </span>
<span id='outputPrintfLine' class='ct-code-b-yellow'></span>
</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script>
	$(document).ready(function() {
		pointersTwoDimensionalArrayReady();
	});
</script>
</body>
</html>