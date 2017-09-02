<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/animate.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src="/js/jquery.scrollTo.js"></script>
<script src="/secure/lang/ds/js-min/toh.min.js"></script>

<title>tower-of-hanoi</title>

<style type="text/css">
.margin-top-20 {
	margin-top: 20px;
}

.padding0 {
	padding: 0;
}

.box-border {
	border: 1px solid gray;
	border-radius: 8px;
}

#informationDiv {
	letter-spacing: 0.5px;
	min-height: 155px;
	padding: 15px 0;
	z-index: 9999999;
}

.creampretab4 {
	-moz-tab-size: 2;
	tab-size: 2;
	background-color: lavender !important;
	font-style: inherit;
	margin-bottom: 0;
	padding: 5px;
	overflow-y: auto;
}

#outputDiv {
	margin-top: 100px;
	padding: 0;
	z-index: 9999999;
}

.output-console-title-bar {
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}

.output-console-body {
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
	height: 100px;
	padding: 10px;
}

.ct-code-b-red {
	font-family: monospace;
	font-weight: bold;
	color: red;
}

#animationDiv .panel-body, #invisibleDiv .panel-body {
	font-family: monospace;
	font-size: 10px;
	padding: 5px;
}

#mainStack {
	border: 2px solid;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	border-top: none;
	height: 430px;
	overflow: auto;
}

#invisibleDiv {
	height: 120px;
	border: 2px solid rgba(255, 255, 255, 0);
}

.panel-heading {
	padding: 3px 0;
}

.panel {
	margin-bottom: 5px;
	position: relative;
}

.ui-effects-transfer {
	border: 2px solid #003399;
	border-radius: 6px;
	position: relative;
	z-index: 9999999;
}

#numberVal {
	display: inline-block;
	outline: none;
}

.errMsg {
	font-family: monospace;
	font-weight: bold;
	color: red;
}

.flip-css {
	position: relative;
	display: inline-block;
}

#arrow1, #arrow2, #arrow3 {
	marker-end: url('#myMarker');
}

.arrow-display-none {
	display: none;
}

.user-btn {
	background-color: green;
}

.ct-code-b-green {
	color: green;
	font-family: monospace;
	font-weight: bold;
}

.introjs-button {
	margin: 0 !important;
}

.introjs-fixParent {
	position: relative !important;
}

.svg-css {
	top: 0;
	left: 0;
	height: 100%;
	position: absolute;
	width: 100%;
}

.svg-line {
	position: relative;
	stroke-width: 3;
}

#discsStand .svg-line, #stackSvg .svg-line {
	stroke: gray;
}

.padding0 {
	padding: 0;
}

.svg-text {
	font-family: monospace;
	font-size: 100%;
	font-weight: bold;
}

.svg-disc {
	transform: rotateX(75deg);
	fill: white;
}

.stand1-disc1 {
	stroke: orange;
}

.stand1-disc2 {
	stroke: blue;
}

.stand1-disc3 {
	stroke: green;
}

.stand1-disc4 {
	stroke: red;
}

.stand1-disc5 {
	stroke: brown;
}

.circles-lines line {
	stroke-width: 4;
}

#animationDialog {
	position: relative;
	z-index: 10000000;
}

.dynamic-popover {
	color: yellow;
	font-family: monospace;
	font-weight: bold;
}

/* .opacity00 {
	opacity: 1;
} */

.opacity05 {
	opacity: 0.5;
}

.bg-color-greenyellow {
	background-color: greenyellow;
}

.print-stmt {
	display: inline-block;
	word-spacing: -4px;
}

</style>

<script type="text/javascript">
	$(document).ready(function() {
		towerOfHanoiReady();
	});
</script>

</head>
<body>
	<div class='text-center margin-top-20'>
		<h4 class='label ct-demo-heading'>Tower of Hanoi</h4>
	</div>

	<div
		class='col-xs-offset-2 col-xs-8 box-border margin-top-20 bg-info padding0'
		id='informationDiv'></div>
	<div class='col-xs-12 margin-top-20'>
		<div class='col-xs-7 padding0'>
			<pre class='creampretab4 opacity00 col-xs-10' id='cCode'><span id="preproceserDir"></span>
			
<span id='mainBlk'>void <span id='main'>main() {</span>
	<span id='mainStackNumDec'>int disks = <span id='numberVal' contenteditable='true' maxlength='0'>3</span>;</span>
	<span id='mainHanoiCall'>solveHanoi(disks, 'A', 'B', 'C');</span>
}</span>

<span id='solveHanoiFun'>void solveHanoi(int disks, char <x style='color:blue'>src<b>Rod</b></x>, char temp<b>Rod</b>, char <x style='color:green'>dest<b>Rod</b></x>) {
	if (disks == 1) {
		<span id="ifPrintfStmt"></span>
	} else {
		solveHanoi(disks - 1, <x style='color:blue'>src<b>Rod</b></x>, <x style='color:green'>dest<b>Rod</b></x>, temp<b>Rod</b>);
		<span id="elsePrintfStmt"></span>
		solveHanoi(disks - 1, temp<b>Rod</b>, <x style='color:blue'>src<b>Rod</b></x>, <x style='color:green'>dest<b>Rod</b></x>);
	} 
}</span></pre>
	
	<div class="margin-top-2 opacity00">
		<div style="height: 250px;" id="discsSvgDiv" class="col-xs-6 padding0 ">
			<svg id="discsSvg" class="svg-css">
				<circle class="svg-disc stand1-disc1 disc1" r="33" cx="17.5%" cy="300%" stroke-width="39" discidx="1"/>
				<circle class="svg-disc stand1-disc2 disc2" r="28" cx="17.5%" cy="270%" stroke-width="35" discidx="2"/>
				<circle class="svg-disc stand1-disc3 disc3" r="24" cx="17.5%" cy="240%" stroke-width="28" discidx="3"/>
				<circle class="svg-disc stand1-disc4 disc4" r="19" cx="17.5%" cy="210%" stroke-width="22" discidx="4"/>
				<circle class="svg-disc stand1-disc5 source-disc source-top-disc disc5" r="16" cx="17.5%" cy="180%" stroke-width="17" discidx="5"/>
				<g id="discsStand">
					<g id="baseStand1">
						<line y2="85%" y1="85%" x2="30%" x1="5%" class="svg-line"/>
						<line y2="85%" y1="30%" x2="17.5%" x1="17.5%" class="svg-line"/>
						<text y="92%" x="16.7%" class="svg-text">A</text>
						<text y="99%" x="11%" class="svg-text">(Source)</text>
					</g>
					<g id="baseStand2">
						<line y2="85%" y1="85%" x2="60%" x1="35%" class="svg-line"/>
						<line y2="85%" y1="30%" x2="47.5%" x1="47.5%" class="svg-line"/>
						<text class="svg-text" x="46.7%" y="92%">B</text>
						<text class="svg-text" x="39%" y="99%">(Temporary)</text>
					</g>
					<g id="baseStand3">
						<line y2="85%" y1="85%" x2="90%" x1="65%" class="svg-line"/>					
						<line y2="85%" y1="30%" x2="77.5%" x1="77.5%" class="svg-line"/>
						<text y="92%" x="76.6%" class="svg-text">C</text>
						<text y="99%" x="68%" class="svg-text">(Destination)</text>
					</g>
				</g>
				<g class="circles-lines">
					<line stroke="orange" y2="83%" y1="78.9%" x2="17.5%" x1="17.5%" class="svg-line" style="display: inline;"/>
					<line stroke="blue" y2="74.5%" y1="71%" x2="17.5%" x1="17.5%" class="svg-line" style="display: inline;"/>
					<line stroke="green" y2="66.1%" y1="63.3%" x2="17.5%" x1="17.5%" class="svg-line" style="display: inline;"/>
					<line stroke="red" y2="57.5%" y1="55.3%" x2="17.5%" x1="17.5%" class="svg-line" style="display: inline;"/>
					<line stroke="brown" y2="49.1%" y1="47.3%" x2="17.5%" x1="17.5%" class="svg-line top-disc-line" style="display: inline;"/>
				</g>
				<g class='circles-text'>
					<text x="12%" y="78.9%" class="svg-text" fill="white" style="font-size: 9px;" fixedTop='16.9'>5</text>
					<text x="12%" y="71%" class="svg-text" fill="white" style="font-size: 8px;" fixedTop='16'>4</text>
					<text x="12%" y="63.3%" class="svg-text" fill="white" style="font-size: 8px;" fixedTop='16.3'>3</text>
					<text x="13%" y="55.3%" class="svg-text" fill="white" style="font-size: 7px;" fixedTop='16.3'>2</text>
					<text x="13%" y="47.3%" class="svg-text" fill="white" style="font-size: 7px;" fixedTop='16.3'>1</text>
				</g>
			</svg>
		</div>
		<div id="outputDiv" class='opacity00 col-xs-4 padding0'>
			<div class="output-console-title-bar">
				<span class="title">Output</span>
			</div>
			<div class="output-console-body"><span id="output"></span>
		</div>
	</div>	
	</div>
</div>
		<div class='col-xs-5 padding0'>
			<div class='col-xs-12 padding0 opacity00' id='animationDiv'>
				<div class='col-xs-12 padding0'>
					<div id='invisibleDiv' class='col-xs-12 padding0'></div>
					<div id='mainStack' class='col-xs-12 padding0'>
						<div class='col-xs-offset-1 col-xs-11 padding0'>
							<div class='col-xs-12 padding0'>
								<div id='stackBody' class='col-xs-10 padding0'></div>
								<svg class="svg-css" id="stackSvg">
					               <marker style="fill: gray;" orient="auto" markerHeight="5"
					                 markerWidth="5" refY="2.5" refX="4" id="grayMarker">
					                              <path class="arrow" d="M0,0 L5,2.5 L0,5 Z" />
					               </marker>
					               <marker style="fill: blue;" orient="auto" markerHeight="5"
					                 markerWidth="5" refY="2.5" refX="4" id="blueMarker">
					                              <path class="arrow" d="M0,0 L5,2.5 L0,5 Z" />
					               </marker>
					               <line class="svg-line" id="arrow2" y2="0%" x2="0%" y1="0%" x1="0%" style="display: none; marker-end: url('#grayMarker')"/>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div class='col-xs-12 text-center' style="margin-top: 15px; position: relative; z-index: 10000000;"><span class="label label-default">Function call execution Stack</span></div>
			</div>
		</div>
	</div>
	<div class="text-center margin-top-20 col-xs-12">
		<a class="btn btn-warning opacity00" id="restart">Restart</a>
	</div>
</body>
</html>
<!-- //The variable disks will hold the number of disks to be considered.
//Please provide a number less than 5 to ensure we have less recursive calls. -->

<!-- //The characters 'A', 'B', and 'C' are used to represent the source-rod, temporary-rod and the destination-rod. -->  