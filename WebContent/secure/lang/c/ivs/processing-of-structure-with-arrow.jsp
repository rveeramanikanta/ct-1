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
	border-radius: 11px;
	border:2px solid gray;
}

.information-div {
	z-index: 9999999;
	border-radius: 10px;
	background-color: white;
}

.table-border {
	width: 12%;
	height: 26px;
	text-align: center;
	border: 2px solid gray;
}

.creampretab4 {
	tab-size: 2;
	font-size: 11px;
	-moz-tab-size: 2;
	line-height: 1.5;
	overflow-y: auto;
	white-space: pre;
	word-spacing: -3px;
	position: relative;
	font-style: inherit;
	background-color: #fffae6;
}

.output-console-title-bar {
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}

.output-console-body {
	padding: 10px;
	height: 135px;
	white-space: normal;
	border-bottom-left-radius: 6px; 
	border-bottom-right-radius: 6px;
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
	width: 100%;
	height: 100%;
	position: absolute;
}

.padding0 {
	padding: 0;	
}

.input {
	outline: none;
}

.position {
	position: relative;
	display: inline-block; 
}

.ct-code-b-red {
	color: red;
	font-weight: bold;
}

ul {
	font-family: monospace;
}

#text {
	padding: 8px;
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
		<span class="label label-default ct-demo-heading" id = "heading">Processing of Structure using Arrow(->) Operator</span>
	</h2>
	<div id="informationDiv"
		class="col-xs-offset-2 col-xs-8 information-div margin-top20">
		<div class="col-xs-12" id="text">
			<ul>
				
				<li id="li1" class="opacity00">A pointer to a
					structure is known as a <b class='ct-code-b-green'>structure pointer</b>.</li>
				<li id="li2" class="opacity00">If a pointer to the structure is declared,  
					 the members of structure are accessed using the <b class='ct-code-b-green'>arrow operator</b>.</li>
				<li id="li3" class="opacity00">The <b class='ct-code-b-green'>left hand
					side</b> of the arrow operator should be a pointer to a structure.</li>
			</ul>
		</div>
	</div>
	<div class="col-xs-12 margin-top20">
		<div class="col-xs-5 padding0">
			<pre class="code-div creampretab4 opacity00" id="codeDiv">
<span id="declaration">struct book {
	char name[20];
	int pages;
	int price;
};</span>
main() {
	<span id="pointerVariable">struct book *p;</span>
	<span id="mallocStmt">p = (struct book*)malloc(sizeOf(struct book));</span>
	<span id="enterName">printf("Enter name : ");</span>
	<span id="readName">scanf("%s",(p->name));</span>
	<span id="enterPages">printf("Enter pages : ");</span>
	<span id="readPages">scanf("%d",&(p->pages));</span>
	<span id="enterPrice">printf("Enter price : ");</span>
	<span id="readprice">scanf("%d",&(p->price));</span>
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
									<td id="pvalue" class="table-border"><span id="address"	class="position opacity00">4024</span></td>
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
									<td style="text-align: center; color: green"><span id="address1">4024</span></td>
									<td style="text-align: center; color: green;">4044</td>
									<td style="text-align: center; color: green;">4046</td>
								</tr>

							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-6 margin-top20 output-div padding0 opacity00" id="outputDiv" style="margin-left: 10px;">
			<div class="output-console-title-bar">
				<span class="title">Output</span>
			</div>
			<div class="output-console-body">
				<span class="output" id="output"></span>
			</div>
		</div>
		<div class="col-xs-6 margin-top20 text-center">
			<span class="btn btn-warning opacity00" id="restart"> <i class='fa fa-refresh'></i> Restart</span>
		</div>
		</div>
		</body>
</html>
