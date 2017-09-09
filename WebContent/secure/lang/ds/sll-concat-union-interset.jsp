<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/animate.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery.scrollTo.js"></script>
<script src="/secure/lang/ds/js-min/sllcui.min.js"></script>


<title>Single Linked List UNION, CONCAT and INTERSECTION</title>

<style type="text/css">

.introjs-tooltip {
	min-width: 350px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.user-btn {
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

.padding00 {
	padding: 0;
}

.creamPreTab {
	tab-size: 2;
	-moz-tab-size: 2;
	margin: 2px;
	padding: 5px;
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

.margin-top15 {
	margin-top: 15px;
}

.margin-btm8 {
	margin-bottom: 8px;
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

.list1, .list2 {
	margin-top: 25px;
}

.list2 {
	margin-bottom: 25px;
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
	margin-left: 30px;
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

.ct-code-b-red {
	color: rgb(252, 66, 66);
}

.ct-lime-color {
	color: lime;
}

.ct-green-color {
	color: green;
}

.ct-brown-color {
	color: brown;
}

.ct-code-b-black {
	color: white;
	padding: 1px;
	font-size: 12px;
	border-radius: 4px;
	background-color: black;
}

.ct-code-b-green {
	color: #42f44e;
}

.error-text {
	color :red;
}

.popover-content {
	font-size: 14px;
}

.popover {
	width: 200px;
	font-size: 15px !important;
}

.srt-css {
	margin-left: 25px;
}

.introjs-duplicate-skipbutton {
	background-color: orange;
	margin: 0.5px !important;
}

.ct-blue-color {
	font-weight: bold;
	font-family: monospace;
}

.ct-brown-color {
	color: brown;
	font-weight: bold;
	font-family: monospace;
}

.error-text {
	color :red;
	font-weight: bold;
}

.true {
    color: white;
    font-weight: bold;
    border-radius: 3px;
	background: green none repeat scroll 0 0;
}

.false {
    color: white;
    font-weight: bold;
    border-radius: 3px;
	background: red none repeat scroll 0 0;
}

.red-color {
	color: red;
}

.green-color {
	color: green;
}

.blue {
    color: blue;
}

.box-border1 {
	border-radius: 12px;
	border: 2px solid white;
}

</style>
</head>
<body>

<script type="text/javascript">

$(document).ready(function() {
	documentCallFunctin();
});

</script>

	<div class="col-xs-12 padding00">
		<div class="ct-box-main">
			<div class="text-center">
				<h1 class="label ct-demo-heading text-center" id="headdingSection">SLL with Concat, Union and Intersect Operations</h1>
			</div> 
		</div>
		<div class="col-xs-12 opacity00" id="explanationDiv">
			<div class="col-xs-4 padding00">
				<pre class="creamPreTab opacity00" id="structTypelist"></pre>
				<pre class="creamPreTab opacity00" id="inMain"></pre>
				<pre class="creamPreTab opacity00" id="sllOperations"></pre>
			</div>
			<div class="col-xs-8"> 
				<div class="col-xs-12 padding00">
					<div class="col-xs-12 margin-top15">
						<div class="col-xs-12 box-border text-center opacity00" id="buttonDiv"></div>
						<div class="margin-top15 col-xs-12 opacity00 padding00" id="animationParent">
							<div class="col-xs-12 margin-7 padding00" id="animatinDiv">
								<div class="col-xs-12 animationDiv box-border">
									<div class="col-xs-12 padding00 margin-top15 box-border1" id="NoOfLists"></div>
									<div class="col-xs-12 padding00 margin-top15 box-border1" id="NoOfListsInUnion"></div>
									<div class="col-xs-12 padding00 list1" id="firstList"></div>
									<div class="col-xs-12 padding00" id="nodeAddress1"></div>
									<div class="col-xs-12 padding00 list2" id="secondList"></div>
									<div class="col-xs-12 padding00" id="nodeAddress2"></div>
									<div class="col-xs-12 padding00 list3 margin-btm8" id="thirdList"></div>
									<div class="col-xs-12 padding00" id="nodeAddress3"></div>
								</div>
							</div>
							<div id="sortingDiv" class="col-xs-12 box-border hide" style="margin-bottom: 10px;">
								<pre class="col-xs-7 padding00 creamPreTab margin-7" id="sortingLogic"></pre>
								<div id="srtingExplanation" class="col-xs-4 box-border margin-7 hide srt-css">
									<div id="srtExplain" style="min-height: 140px;"></div><div id="autoCompleButtons"></div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xs-12 padding00">
						<div class="col-xs-12" id="uninonOperation">
							<div class="col-xs-12">
								<pre class="creamPreTab opacity00" id="unionOperations"></pre>
							</div>
						</div>
					</div>
					<div class="col-xs-12 padding00 margin-top15">
						<div class="col-xs-12 padding00">
							<div class="col-xs-12 margin-top" id="outputDiv">
								<div id="consoleId" class="center opacity00">
									<div class="output-console-title-bar">
										<span class="title"><b>Console</b></span>
									</div>
									<div class="output-console-body" id="consoleBodyDiv"></div>
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