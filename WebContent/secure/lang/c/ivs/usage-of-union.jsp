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

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/c/js/usage-of-union.js"></script>
<title>unions</title>
<style>

.information-div {
	background-color: white;
	border-radius: 10px;
	z-index: 9999999;
}

.margin-top20 {
	margin-top: 20px;
}

.margin-bottom20 {
	margin-bottom: 20px;
}

.border-div {
	border: 2px solid gray;
	border-radius: 11px;
}

.table-border {
	border: 2px solid gray;
	text-align: center;
	width: 1%;
	height: 26px;
}

.no-left-border {
	border-left: none;
	margin-left: -5px;
}

.fa-2x {
	font-size: 1em;
	color:blue;
}

.flipClass {
	display: inline-block;
	position: relative;
}

.dot-value {
	display: inline-block;
	position: relative;
	color: navy;
}

.circle {
	border: 2px solid blue;
	border-radius: 50%;
	padding: 3px 8px;
}

.ct-code-b-green {
	color: green;
}

.nextButton {
	background-color: green;
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

.table1-css {
	display: flex;
	height: 100%;
	position: absolute;
	align-items: center;
	top: 0;
	width: 100%;
	left:0;
	padding: 0px 15px;
}

.svg-css {
	top: 0;
	left: 0;
	position: absolute;
	height: 100%;
	width: 100%;
	z-index: 7777777;
}

.add-color {
	background-color: pink;
}

.text-class {
	text-anchor: unset;
}

.introjs-tooltip-min-width-custom {
	min-width: 110px;
}

.creamPreTab {
	tab-size: 4;
	margin: 2px;
	padding: 12px;
	-moz-tab-size: 4;
	border-radius: 8px;
	font-family: monospace;
	background-color: #fffae6;
}

#text {
	font-family: monospace;
	padding: 8px;
}
</style>
</head>
<body>
<script>
$(document).ready(function() {
	usageOfUnion();
});
</script>
	<h2 class="text-center">
		<span class="label label-default ct-demo-heading" id="heading">Usage of Unions</span>
	</h2>
	<div class="col-xs-offset-3 col-xs-7 border-div margin-top20"
		id=mainDiv>
		<div class="col-xs-5" style="margin-top: 10px;">
			<pre class="code-div creamPreTab" id="codeDiv">
<span><b class="flipClass" id="struct1" style="width: 42px;">struct</b> student {</span>
	<span id="intType">int no;</span> <span id="arrow1"></span> <span
					class="ct-code-b-green opacity00" id="byte1">2 bytes</span>
	<span id="floatType">float tot;</span> <span id="arrow2"></span> <span
					class="ct-code-b-green opacity00" id="byte2"><span id="four">4</span> bytes</span>
	<span id="charType">char s;</span> <span id="arrow3"></span> <span
					class="ct-code-b-green opacity00" id="byte3">1 byte</span>
};
<span id="definition"><b class="flipClass" id="struct2"
					style="width: 42px;">struct </b> student st;</span>
</pre>
		</div>
		<div class="col-xs-7">
			<div class="col-xs-12" id="svgDiv">
				<div class="col-xs-12 opacity00" id="memoryallocation1"
					style="padding: 0 15px 50px;">
					<svg class="svg-css" id="svgId"> 
							<marker refX="4" refY="2.5" markerWidth="5" markerHeight="5"
							orient="auto" style="fill: gray;" id="arrow"> 
								<path d="M0,0 L5,2.5 L0,5 Z" class="arrow" /> 
							</marker> 
							<line id="arrowMark1" class="line" x1="45.9%" y1="47%" x2="54.9%"
							y2="47%"
							style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;" />
							<text x="220" y="84" fill="green" id="btext" class="text-class">no</text>
							<line id="arrowMark2" class="line" x1="69.9%" y1="47%" x2="61.9%"
							y2="47%"
							style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;" />
							<line id="arrowMark3" class="line" x1="81.9%" y1="55%" x2="77.9%"
							y2="55%"
							style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;" />
							<text x="285" y="99" fill="green" id="atext" class="text-class">tot</text>
							<line id="arrowMark4" class="line" x1="67.9%" y1="55%" x2="72.9%"
							y2="55%"
							style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;" />
							<text x="320" y="115" fill="green" id="ctext" class="text-class">s</text>
							<line id="arrowMark5" class="line" x1="87.8%" y1="65%" x2="85.8%"
							y2="65%"
							style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;" />
							<line id="arrowMark6" class="line" x1="79.9%" y1="65%" x2="81.9%"
							y2="65%"
							style="marker-end: url(#arrow); stroke: gray; stroke-width: 2; display: inline;" />
					</svg>
					<div class="col-xs-offset-2 col-xs-10 text-center">st</div>
					<div class="col-xs-offset-2 col-xs-10 border-div"
						style="padding: 0px 15px 50px;">
						<div class="table1-css">
							<table align="center" class="opacity00" id="table1">
								<tbody>
									<tr>
										<td style="text-align: center;" id="intBytes"
											class="ct-code-b-green">2 bytes</td>
										<td style="text-align: center;" id="floatBytes"
											class="ct-code-b-green">4 bytes</td>
										<td style="text-align: center;" id="charBytes"
											class="ct-code-b-green">1 byte</td>
									</tr>
									<tr>
										<td style="text-align: center;" id="a">no</td>
										<td style="text-align: center;" id="b">tot</td>
										<td style="text-align: center;" id="c">s</td>
									</tr>
									<tr>
										<td class="table-border"></td>
										<td class="table-border"></td>
										<td class="table-border"></td>
									</tr>
									<tr>
										<td style="text-align: center; color: navy;" id="aaddress">1032</td>
										<td style="text-align: center; color: navy;" id="baddress">1034</td>
										<td style="text-align: center; color: navy;" id="caddress">1038</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="table2-css opacity00">
							<table id="table2">
								<tbody>
									<tr>
										<td colspan="4" class="ct-code-b-green"
											style="text-align: center;">4 bytes</td>
									</tr>
									<tr>
										<td class="table-border" id="tabletd1"></td>
										<td class="table-border" id="tabletd2"></td>
										<td class="table-border" id="tabletd3"></td>
										<td class="table-border" id="tabletd4"></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="informationDiv" class="col-xs-offset-2 col-xs-8 information-div margin-top20 visibility-hidden">
		<div class="col-xs-12 margin-top20" id="text">
			<ul>
				<li id="li1" class="opacity00"><b class='ct-code-b-green'>Union</b> is a derived data type to organize a group of related data items of different
					data types, in which only one member should be accessed at any <b class='ct-code-b-green'>point of time</b>.</li>
				<li id='li2' class='opacity00'>The memory allocated for union is equal to the memory occupied by its <b class='ct-code-b-green'>largest</b> datatype member.</li>
				<li id="li3" class="opacity00"><b>Syntax :</b><br> <div class="ct-code-b-green col-xs-offset-2 col-xs-7">union
						tagname {<br><div class="col-xs-offset-1">datatype1 var1;</div> <div class="col-xs-offset-1">datatype2 var2;</div>
						<div class="col-xs-offset-0">};</div><div>union tagname uvar1,uvar2,...uvarn;</div>
				</div>
				</li>
			</ul>
		</div>
	</div>


	<div>
		<div class="col-xs-offset-1 col-xs-4 margin-top20">
			<pre class="code-div opacity00 creamPreTab" id="codeDiv1">
<span id="union">union emp {
	int no;
	float price;
	char s;
};</span>
<span id="mainMethod">void main() {</span>
	<span id="variable">union emp e;</span>
	<span id="noValue">e.no = <span id="res1">99</span>;</span>
	<span id="printno">printf("%d \n", e.no);</span>
	<span id="priceValue">e.price = <span id="res2">5.5</span>;</span>
	<span id="printPirce">printf("%f \n", e.price);</span>
	<span id="sValue">e.s = '<span id="res3">A</span>';</span>
	<span id="prints">printf("%c \n", e.s);</span>
<span id="termination">}</span>
</pre>
		</div>
		<div class="col-xs-offset-1 col-xs-4">
			<div class="col-xs-12 margin-bottom30 margin-top20" id="animationDiv">
				<div class="col-xs-12" style="padding: 5px 15px;">
					<span class="col-xs-offset-3 col-xs-6 opacity00 text-center" id="e"
						style="padding-right: 0px;"><span class="inner-span1"
						id="innerspans1">e</span></span>
				</div>
				<div class="col-xs-12">
					<div class="col-xs-offset-2 col-xs-8 border-div opacity00"
						id="ememory" style="padding: 15px;">
						<div class="text-center opacity00" id="dotValue" class="dot-value">e</div>
						<table align="center">
							<tbody>
								<tr>
									<td class="table-border" id="data1"></td>
									<td class="table-border" id="data2"></td>
									<td class="table-border" id="data3"></td>
									<td class="table-border" id="data4"></td>
									<td class="table-border hide" id="data5" style="width: 2%"></td>
									<td class="table-border hide" id="data6"></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<div class="col-xs-12 margin-top20 output-div opacity00"
				id="outputDiv">
				<div class="output-console-title-bar">
					<span class="title">Output</span>
				</div>
				<div class="output-console-body">
					<span class="output" id="output"></span>
				</div>
			</div>
			<div class="col-xs-6 margin-top20 text-center">
				<span class="btn btn-warning opacity00" id="restart"><i class='fa fa-refresh'></i> Restart</span>
			</div>
		</div>
	</div>
</body>
</html>