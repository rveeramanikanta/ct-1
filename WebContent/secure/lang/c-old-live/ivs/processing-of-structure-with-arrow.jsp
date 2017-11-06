<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
<script src="/secure/lang/c/js-min/poswa.min.js"></script>
<title>processing of structure with arrow operator</title>
<style>

.border-div {
	border:2px solid gray;
	border-radius: 11px;
	/* height: 658px; */
}

.information-div {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	z-index: 9999999;
}

.table-border {
	border: 2px solid gray;
	text-align: center;
	/* padding:14px 42px; */
	/* width: 54%; */
	width: 12%;
	height: 26px;
}

.creampretab4 {
	-moz-tab-size: 1;
	tab-size: 1;
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

.margin-top20 {
	margin-top: 20px;
}

.cursor-wait {
	cursor: wait !important;
}

.padding3 {
	padding: 3px 9px 0 3px;
}

.ct-code-b-green {
	color: green;
}

.margin-bottom30 {
	margin-bottom: 30px;
}

.introjs-fixParent {
	position: relative !important;
}

.svg-css {
	top: 0;
	left: 0;
	position: absolute;
	height: 100%;
	width: 100%;
}

.padding0 {
	padding: 0;	
}

</style>
</head>
<body>
<script>

$(document).ready(function() {
	processingOfStructureWithArrow();
});

</script>
<h2 class="text-center">
		<span class="label label-default ct-demo-heading" id = "heading">Processing of structure using arrow(->) operator</span>
	</h2>
	<div id="informationDiv"
		class="col-xs-offset-2 col-xs-8 information-div margin-top20">
		<div class="col-xs-12 margin-top20" id="text">
			<ul>
				<li id="li1" class="opacity00">A pointer pointing to a
					structure is known as a structure pointer.</li>
				<li id="li2" class="opacity00">If a pointer to the structure
					variable is declared, then arrow notation is used to access the
					members of structure.</li>
				<li id="li3" class="opacity00">Remember that on the left hand
					side of dot operator there must always be a structure variable,
					whereas on the left hand side of the arrow operator there must
					always be a pointer to a structure.</li>
			</ul>
		</div>
	</div>
	<div class="col-xs-12 margin-top20">
		<div class="col-xs-5">
			<pre class="code-div creampretab4 opacity00" id="codeDiv">
<span id="declaration">struct book {
  char name[20];
  int pages;
  float price;
};</span>
main() {
	<span id="pointerVariable">struct book *p;</span>
	<span id="mallocStmt">p = (struct book*)malloc(sizeOf(struct book));</span>
	<span id="enterName">printf("Enter name : ");</span>
	<span id="readName">scanf("%s",(p->name));</span>
	<span id="enterPages">printf("Enter pages : ");</span>
	<span id="readPages">scanf("%d",&(p->pages));</span>
	<span id="enterPrice">printf("Enter price : ");</span>
	<span id="readprice">scanf("%f",&(p->price));</span>
	<span id="printDetails">printf("Name : ",(p->name),"\tpages : ",(p->pages),"\tprice : ",(p->price));</span>
<span id="termination">}</span>
	</pre>
		</div>
		<div class="col-xs-6" id="animationDiv">
			<div class="col-xs-12" id="svgDiv">
				<svg class="svg-css" id="svgId"> 
						<marker refX="4" refY="2.5" markerWidth="5" markerHeight="5"
						orient="auto" style="fill: gray;" id="arrow"> 
							<path d="M0,0 L5,2.5 L0,5 Z" class="arrow" /> 
						</marker> 
						<line id="arrowMark1" class="line" x1="24.9%" y1="45%" x2="24.9%"
						y2="45%"
						style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;" />
						<!-- <line id="arrowMark1" class="line" style="marker-end: url("#arrow"); stroke: gray; stroke-width: 2; display: inline;" y2="45%" x2="24.9%" y1="45%" x1="24.9%" /> -->				
				</svg>
				<div class="col-xs-12 margin-bottom30">
					<div class="margin-top20 col-xs-offset-1 col-xs-2" id="pDiv">
						<table align="center" class="margin-top20 opacity00" id="tableOfp">
							<tbody>
								<tr>
									<td id="pvalue" class="table-border"><span id="address"
										class="opacity00">1024</span></td>
								</tr>
								<tr>
									<td class="text-center" id="p">p</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div
						class="col-xs-offset-1 margin-top20 col-xs-6 border-div opacity00"
						id="memory">
						<table align="center">
							<tbody>
								<tr>
									<td style="text-align: center;">name</td>
									<td style="text-align: center;">pages</td>
									<td style="text-align: center;">price</td>
								</tr>
								<tr>
									<td class="table-border" id="pname"></td>
									<td class="table-border" id="ppages"></td>
									<td class="table-border" id="pprice"></td>
								</tr>
								<tr>
									<td style="text-align: center; color: violet" id="address1">1024</td>
									<td style="text-align: center; color: violet;">1044</td>
									<td style="text-align: center; color: violet;">1046</td>
								</tr>

							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-6 margin-top20 output-div padding0 opacity00" id="outputDiv">
			<div class="output-console-title-bar">
				<span class="title">Output</span>
			</div>
			<div class="output-console-body">
				<span class="output" id="output"></span>
			</div>
		</div>
		<div class="col-xs-6 margin-top20 text-center">
			<span class="btn btn-warning opacity00" id="restart">Restart</span>
		</div>
		</div>
		</body>
</html>
