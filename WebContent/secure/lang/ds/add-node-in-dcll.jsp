<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>AddNode in DCLL</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/animate.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery.scrollTo.js"></script>
<script src="/secure/lang/ds/js/add-node-in-dcll.js"></script>

<script src="/secure/lang/jdbc/js/line-testing.js"></script>

<style type="text/css">
.margin-top25 {
	margin-top: 25px;
}

.padding0 {
	padding: 0;
}

.box-border {
	border: 1px solid black;
	border-radius: 8px;
}

.ct-fonts, y {
	font-weight: bold;
	font-family: monospace;
}

.ct-green-color, g {
	color: green;
}

.ct-brown-color, brn {
	color: brown;
}

.ct-blue-color, bl {
	color: blue;
}

y, yy {
	color: yellow;
}

.error-text {
	color: red;
}

.position-css {
	display: inline-block;
	position: relative;
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
	border-color: green;
	border-radius: 6px 0 0 6px;
}

.no-radius {
	border-color: blue;
}

.right-radius {
	border-color: green;
	border-radius: 0 6px 6px 0;
	border-left: none;
}


.box {
	min-height: 24px;
	text-align: center;
	border-radius: 6px;
	border: 1px solid green;
}

.creamPreTab {
	tab-size: 2;
	-moz-tab-size: 2;
	margin-bottom: 0;
}

.algorithm-div, .code-div {
	font-family: monospace;
	background-color: #fffae6;
	height: 330px;
	overflow-y: auto;
	padding: 8px;
	font-size: 12px;
}

.padding5 {
	padding: 5px;
}

.introjs-tooltip {
	min-width: 400px;
}

.user-btn {
	background-color: green;
	margin: 0!important;
}

.ui-effects-transfer {
	border: 1px solid blue;
	z-index: 99999999 !important;
}

.z-index10000 {
	z-index: 99999999;
	background-color: white;
}

.tooltip-inner {
	font-family: monospace;
}

.tooltip {
	z-index: 999999999 !important;
}

.zIndex {
	z-index: 99999999;
}

.usr-txt {
	background: black;
	border: none;
	border-radius: 5px;
	color: white;
	text-align: center;
}

bgb {
	color: white;
	background-color: black;
	padding: 2px 4px;
	border-radius: 3px;
	font-family: monospace;
}

.animation-div {
	padding-left: 0;
	margin-top: 39px;
	min-height: 262px;
}

.svg-css {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
}

.svg-line {
	stroke-width: 2; 
	position: relative;
	marker-end: url("#arrowEnd"); 
}

.svg-dotted-line {
	stroke-dasharray: 5;
}

</style>
</head>
<body>
	<script type="text/javascript">
		$(document).ready(function() {
			addNodesInDCLLReady();
		});
	</script>
	<div class="col-xs-12 padding0">
		<div class="text-center margin-top25 col-xs-12 padding0">
			<h1 class="label ct-demo-heading" id="headingInDcll">addNode() in DCLL</h1>
		</div>
		<div class="col-xs-12 margin-top25">
			<div class="col-xs-5 box-border opacity00 animation-div" id="animationDiv">
				<div class="col-xs-12 margin-top25" id="fstExplain">
					<div class="col-xs-2 padding0 opacity00" id="firstNode">
						<div class="text-center col-xs-12 ct-fonts padding0">first</div>
						<div class="col-xs-12 box padding0" id="firstDiv" style="border: 1px solid black;">
							<span id="firstVal" class="ct-fonts position-css" style="color: darkslategrey;">NULL</span>
						</div>
					</div>
				</div>
				<div class="col-xs-12 margin-top25" id="dynamicNodes"></div>
				<div class="col-xs-12 margin-top25" id="tempDynamicNodes" style="margin-bottom: 15px;"></div>
			</div>
			<div class="col-xs-7" style="padding-right: 0px">
				<div class="col-xs-12 padding0" id="codeAndAlgorithmDiv">
					<div class="col-xs-6 padding5"><div class="col-xs-12 padding0 algorithm-div box-border opacity00" id="algorithmDiv"></div></div>
					<div class="col-xs-6 padding5"><pre class="creamPreTab col-xs-12 box-border code-div opacity00" id="codeDiv"></pre></div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 text-center margin-top25"><span class="btn btn-warning text-center opacity00" id="restartBtn">Restart</span></div>
	</div>
</body>
</html>