<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/animate.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/data-structures-css.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/c/js/self-referential-structure.js"></script>

<!-- <script src="/secure/lang/c/js-min/srs.min.js"></script> -->
<title>Self referential structure</title>
<style>

.border-div {
	border: 2px solid gray;
	border-radius: 11px;
}

.table-border {
	border: 2px solid gray;
	text-align: center;
	width: 12%;
	height: 26px;
}

.margin-top20 {
	margin-top: 20px;
}

.s-value {
	position: relative;
	display: inline-block;
}

.ct-code-b-green {
	color: green;
}

.ct-code-b-red {
	color: red;
	font-weight: bold;
}

.nextButton {
	background-color: green;
}

.information-div {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	z-index: 9999999;
}

.svg-css {
	top: 0;
	left: 0;
	position: absolute;
	height: 100%;
	width: 100%;
	z-index: 7777777;
}

.cursor-wait {
	cursor: wait !important;
}

.padding3 {
	padding: 3px 9px 0 3px;
}

.creampretab4 {
	-moz-tab-size: 2;
	background-color: lavender !important;
	font-size: 11px;
	font-style: inherit;
	line-height: 1.5;
	overflow-y: auto;
	white-space: pre;
	word-spacing: -3px;
	position: relative;
}

.output-console-title-bar {
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}

.output-console-body {
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
	height: 135px;
	padding: 10px;
	white-space: normal;
}

.output {
	font-size: 14px;
	font-weight: bold;
}

.display-inline {
	display: inline-flex;
}

th, td {
	padding: 3px 7px;
}

.introjs-fixParent {
	position: relative !important;
}

.sValue {
	width: 14px;
}

.z-index-class {
	position: relative;
	z-index: 9999999;
	background-color: white;
}

.introjs-tooltip-min-width-custom {
	min-width: 110px;
}

.containnumbers {
    outline: medium none;
}

</style>
</head>
<body>
<script>
$(document).ready(function() {
	selfReferentialStructure();
});
</script>
	<h2 class="text-center">
		<span class="label label-default ct-demo-heading" id="heading">Self
			referential structure</span>
	</h2>
	<div class="col-xs-offset-5 col-xs-3 margin-top20" id="animation1">
		<pre class="code-div creampretab4" id="codeDiv1"><b>
<span>struct student {</span>
	<span id="intType">int a;</span>
	<span id="floatType">float b;</span>
	<span id="innerStruct">struct student <span class="s-value"
				id="sValue">s</span>;</span>
};<!-- </div> --></b>
</pre>
	</div>
	<div id="informationDiv" class="col-xs-offset-2 col-xs-8 information-div margin-top20 visibility-hidden">
		<div class="col-xs-12 margin-top20" id="text">
			<ul>
				<li id="li1" class="opacity00">A self referential structure is a structure which contains a pointer to itself.</li>
				<li id="li2" class="opacity00"><b>Syntax</b> : <br> <span class="ct-code-b-green col-xs-offset-2">struct
						tagname {<br><span class="col-xs-offset-3">datatype1 var1;</span><br> <span class="col-xs-offset-3">datatype2 var2;</span><br>
						<span class="col-xs-offset-3">struct tagname *p;</span><br> <span class="col-xs-offset-2">};</span>
				</span>
				</li>
				<li class="opacity00" id="lastPoint"></li>
			</ul>
		</div>
	</div>
	<div class="col-xs-12 margin-top20 visibility-hidden" id="mainDiv">
		<div class="col-xs-5">
			<pre class="code-div creampretab4 opacity00" id="codeDiv">
<span id="structDeceleration">struct example {
  int data;
  struct example *p;
};</span>
<span id="mainMethod">main() {</span>
  <div id="variables" style="display:inline-block;">struct example <span id="s1variable">s1</span>, <span id="s2variable">s2</span>;</div>
  <span id="s1Printf">printf("Enter a value for s1 : ");</span>
  <span id="s1Scanf">scanf("%d", &s1.data);</span>
  <span id="s2Printf">printf("Enter a value for s2 : ");</span>
  <span id="s2Scanf">scanf("%d", &s2.data);</span>
  <span id="stmt1"><span id="stmt3">s1.p</span> = <span id="value1">&s2;</span></span>
  <span id="stmt2"><span id="stmt4">s2.p</span> = <span id="value2">NULL;</span></span>
  <span id="printf">printf("%d --> %d\n", s1.data, s1.p->data);</span>
<span id="termination">}</span>
</pre>
		</div>
		<div class="col-xs-6">
			<div class="col-xs-12" id="svgDiv">
				<div class="col-xs-12 margin-bottom30 margin-top20" id ="animationDiv">
					<svg class="svg-css" id="svgId"> 
							<marker refX="4" refY="2.5" markerWidth="5" markerHeight="5"
							orient="auto" style="fill: gray;" id="arrow"> 
								<path d="M0,0 L5,2.5 L0,5 Z" class="arrow" /> 
							</marker> 
							<line id="arrowMark1" class="line" x1="44.9%" y1="64%" x2="44.9%"
							y2="64%"
							style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;" />
					</svg>
					<div class="col-xs-12" style="padding: 5px 15px;">
						<span class="col-xs-6 opacity00 text-center" id="s1"><span id="innerspans1">s1</span></span>
						<span class="col-xs-6 opacity00 text-center" id="s2"><span id="innerspans2">s2</span></span>
					</div>
					<div class="col-xs-6">
						<div class="col-xs-12 border-div opacity00" id="s1memory">
							<table align="center">
								<tbody>
									<tr>
										<td style="text-align: center;" id="data">data</td>
										<td style="text-align: center;" id="p">p</td>
									</tr>
									<tr>
										<td class="table-border" id="data1"></td>
										<td class="table-border opacity00" id="p1">1054</td>
									</tr>
									<tr>
										<td style="text-align: center; color: violet" id="address1">1024</td>
										<td style="text-align: center; color: violet;">1026</td>
									</tr>

								</tbody>
							</table>
						</div>
					</div>
					<div class="col-xs-6">
						<div class="col-xs-12 border-div opacity00" id="s2memory">
							<table align="center">
								<tbody>
									<tr>
										<td style="text-align: center;" id="secondData">data</td>
										<td style="text-align: center;" id="secondp">p</td>
									</tr>
									<tr>
										<td class="table-border" id="data2"></td>
										<td class="table-border opacity00" id="p2">NULL</td>
									</tr>
									<tr>
										<td style="text-align: center; color: violet" id="address2">1054</td>
										<td style="text-align: center; color: violet;">1056</td>
									</tr>

								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-6 margin-top20 output-div opacity00" id="outputDiv">
			<div class="output-console-title-bar">
				<span class="title">Output</span>
			</div>
			<div class="output-console-body">
				<span class="output" id="output"></span>
			</div>
		</div>
		<div class="col-xs-4 text-center">
			<span class="btn btn-warning opacity00" id="restart">Restart</span>
		</div>
	</div>
</body>
</html>