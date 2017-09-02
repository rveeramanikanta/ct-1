<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet" >
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/jquery-ui.css" rel="stylesheet" >
<link href="/css/animate.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/ds1/js/scll.js"></script>

<title>Circular Singly Linked List</title>

<style type="text/css">

.introjs-tooltip {
	min-width: 350px;
}

.introjs-duplicate-nextbutton {
	margin: 0px !important;
	background-color: green;
}

.box-border {
	border-radius: 12px;
	border: 2px solid gray;
}

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}

div, span {
	position: relative;
}

.padding00 {
	padding: 0;
}

.padding6 {
	padding: 6px;
}

.creamPreTab {
	tab-size: 2;
	margin: 2px;
	padding: 10px;
	-moz-tab-size: 2;
	border-radius: 8px;
	font-family: monospace;
	background-color: #fffae6;
}

.ui-effects-transfer {
	border: 1px solid blue;
	z-index: 99999999 !important;
}

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}

.position {
	position: relative;
	display: inline-block;
}

.margin-top-15 {
	margin-top: 15px;
}

.margin-top-25 {
	margin-top: 25px;
}

.output-console-title-bar {
	border-radius: 8px 8px 0 0;
}

.output-console-body {
	height: 150px;
	padding: 10px;
	font-size: 14px;
	margin-bottom: 14px;
	white-space: pre-line;
	border-radius: 0 0 8px 8px;
}

.box {
	min-height: 24px;
	text-align: center;
	border-radius: 6px;
	border: 1px solid green;
}

.div-border {
	margin: 0;
	padding: 0;
	width: 45px;
	min-height: 24px;
	text-align: center;
	display: inline-block;
	border: 2px solid gray;
}

.left-radius {
	border-right: none;
	border-color: blue;
	border-radius: 6px 0 0 6px;
}

.right-radius {
	border-color: green;
	border-radius: 0 6px 6px 0;
}

.inline-css {
	margin: 0 10px;
	position: relative;
	display: inline-block;
}

.buttons {
	color: black;
	letter-spacing: 1px;
	font-family: monospace;
	box-shadow: 1px 2px 4px 0;
}

.user-text {
	width: 82px;
	height: 27px;
	border: none;
	background: black;
}

.btn:hover {
	color: white;
	background-color: #4CAF50 !important;
}

.btn:active{
	color: white;
	background-color: #2E8B57 !important;
}

.disabled {
	pointer-events: none;
}

.margin-left30 {
	margin-left: 55px;
}

.margin-7 {
	margin-top: 9px;
	margin-bottom: 12px;
}

.svg-css {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
}

.svg-line {
	stroke: gray;
	stroke-width: 2; 
	position: relative;
	z-index: 10000000 !important;
	marker-end: url("#arrowEnd"); 
}

.ct-fonts {
	font-weight: bold;
	font-family: monospace;
}

.ct-green-color {
	color: green;
	font-weight: bold;
}
.ct-brown-color {
	color: brown;
}

.error-text {
	color :red;
	font-weight: bold;
}

.green-color {
	color: #40f940;
	font-weight: bold;
}

.red-color {
	color: #f23a21;
	font-weight: bold;
}

polyline {
	fill: transparent;
	stroke: red;
	stroke-width: 4;
}

</style>
</head>
<body>
<script type="text/javascript">
$(document).ready(function() {
	sCLLReadyFunction();
});
</script>
	<div class="col-xs-12 padding00">
		<div class="ct-box-main">
			 <div class="text-center">
				<h1 class="label ct-demo-heading text-center" id="headdingSection">Circular Singly Linked List</h1>
			</div> 
		</div>
		<div class='buttons-div'>
			<button type="button" class="btn btn-warning opacity00" id="restartBtn">Restart</button>
		</div>
		<div class="col-xs-12" id="explanationDiv">
			<div class="col-xs-4 padding00">
				<pre class="creamPreTab opacity00 " id="structTypelist"></pre>
				<pre class="creamPreTab opacity00 displayCode" id="inMain"></pre>
				<pre class="creamPreTab opacity00 displayCode" id="csllOperations"></pre>
			</div>
			<div class="col-xs-8"> 
				<div class="col-xs-12 padding00">
					<div class="col-xs-12 margin-top-15">
						<div class="col-xs-12 box-border opacity00" id="buttonDiv"></div>
						<div class="margin-top-15 col-xs-12 opacity00 padding00" id="animationParent">
							<div class="col-xs-12 margin-7 padding00 box-border" id="animatinDiv">
								<div class="col-xs-12">
									<div class="col-xs-2 text-center padding00 opacity00 intVariables" id="xValeDecInMain">
										<div class="margin-top-15" id="decXValInMain"><b>x<sub>(main)</sub> = 
											<span class="box-border padding6"><span class="opacity00 intValues" id="xValInMain">12</span></span></b>
										</div>
									</div>
									<div class="col-xs-3 text-center padding00 opacity00 intVariables" id="xValDecInAdd">
										<div class="margin-top-15" id="decXValInAdd"><b>x<sub id="subVal">(addNode)</sub> = 
											<span class="box-border padding6"><span class="opacity00 intValues" id="xValInAdd">12</span></span></b>
										</div>
									</div>
									<div class="col-xs-2 text-center padding00 opacity00 intVariables" id="posValDec">
										<div class="margin-top-15" id="decPosVal"><b>pos = <span class="box-border padding6">
											<span class="opacity00 intValues" id="posVal">12</span></span></b>
										</div>
									</div>
									<div class="col-xs-3 text-center padding00 opacity00 intVariables" id="opValDec">
										<div class="margin-top-15" id="decOpVal"><b><span id="extraNode">op</span> = 
											<span class="box-border padding6"><span class="opacity00 intValues" id="opVal">12</span></span></b>
										</div>
									</div>
									<div class="col-xs-2 text-center padding00 opacity00 intVariables" id="countValDec">
										<div class="margin-top-15" id="decCountVal"><b><span id="countNme">count</span> = 
											<span class="box-border padding6">
											<span class="opacity00 intValues position" id="countVal">0</span></span></b>
										</div>
									</div>
									<div class="col-xs-12 padding00 margin-top-25" id="csllNodes">
										<div class="col-xs-1 padding00 opacity00 opacity00" id="firstNodeInMain">
											<div class="text-center col-xs-12 padding00 ct-green-color">first<sub>main</sub></div>
											<div class="col-xs-12 box padding00" id="firstDiv">
												<span  id="firstVal" class="ct-green-color inline-style">NULL</span>
											</div>
										</div>
										<div class="col-xs-11" id="dynamicNodes" style='padding-right: 0;'>
											<div id='row1' style='display: inline-block'></div><div id='row2'></div>
										</div>
									</div>
									<div class="col-xs-12 margin-top-25 padding00" id="declareNodes"></div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xs-12 padding00 margin-top15">
						<div class="col-xs-12" id="csllOperation">
							<div class="col-xs-12"><pre class="creamPreTab opacity00 displayCode" id="csllMethodOperations"></pre></div>
						</div>
					</div>
					<div class="col-xs-12 padding00 margin-top-15">
						<div class="col-xs-12 padding00">
							<div class="col-xs-12 margin-top" id="outputDiv">
								<div id="consoleId" class="center opacity00">
									<div class="output-console-title-bar"><span class="title"><b>Console</b></span></div>
									<div class="output-console-body" id="consoleBodyDiv"><div id="consoleEnter" class="outputCount1"></div></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>