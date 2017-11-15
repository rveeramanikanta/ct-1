<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Search in DLL</title>

<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery.scrollTo.js"></script>
<script src="/secure/lang/ds/js/search-in-dll.js"></script>
<style type="text/css">

.introjs-tooltip {
	min-width: 410px;
	overflow-y: auto;
}

.user-btn {
	margin: 0px !important;
	background-color: green;
}

.margin-top-25 {
	margin-top: 30px;
}

.margin-top-20 {
	margin-top: 25px;
}

.margin-top-5 {
	margin-top: 5px;
}

.margin-bottom-25 {
	margin-bottom: 30px;
}

.margin-bottom-20 {
	margin-bottom: 25px;
}

.margin-top-15 {
	margin-top: 15px;
}

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;

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
	marker-end: url("#arrowEnd"); 
}

.ct-fonts, .y, y, bwBg {
	font-weight: bold;
	font-family: monospace;
}

.ct-green-color, g{
	color: green;
}

.ct-brown-color, brown{
	color: brown;
}

.padding00 {
	padding: 0px;
}

.position {
	display: inline-block;
	position: relative;
}

.box-border {
	border: 1px solid grey;
	border-radius: 6px;
}

.algorithm-steps-Div, #parentPre {
	height: 300px;
	background-color: #fffae6;
	overflow-y: auto; 
	margin: 0;
	font-family: monospace;
	font-size: 12px;
}

.box, .box1 {
	min-height: 24px;
	text-align: center;
	border-radius: 6px;
	border: 1px solid green;
	padding: 0;
}

.box1 {
	border: 1px solid gray;
	color: darkslategrey;
	font-weight: bold;
}

.div-border {
	margin: 0;
	padding: 0;
	width: 44px;
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

.no-radius {
	border-color: blue;
	border-right: none;
}

.right-radius {
	border-color: green;
	border-radius: 0 6px 6px 0;
}

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
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

blue, bl {
	color: blue;
}

y {
	color: yellow;
}

.y {
	background-color: yellow; 
}

bwBg {
	color: white;
	border-radius: 4px;
	background-color: black;
	padding: 2px 4px;
}

#animationDiv {
	min-height: 250px;
}

.ui-effects-transfer {
	border: 1px solid blue;
	z-index: 99999999 !important;
}

.zindex {
	z-index: 1000000 !important;
}

.padding5 {
	padding: 5px;
}


.tooltip-inner {
	font-family: monospace;
}

.radius-50 {
	border-radius: 50%;
	padding: 4px;
}
</style>
</head>
<body>

<script type="text/javascript">
	$(document).ready(function() {
		searchInDll();
	});
</script>

	<div class='col-xs-12 padding00'>
		<div class='text-center margin-top-20'><h4 class='label ct-demo-heading' id='headingDiv'>Search() in DLL</h4></div>
		<div class='col-xs-12 margin-top-15' id='totalDiv'>
			<div class='col-xs-5 padding00 margin-top-15'>
				<div class='col-xs-12 padding00 box-border margin-top-20' id='animationDiv'>
					<div class="col-xs-12 margin-top-5 margin-bottom-25">
						<div class="col-xs-12 padding00">
							<div class="col-xs-2 padding00 opacity00 position" id="firstNode">
								<div class="text-center col-xs-12 padding00" id="firstLabel">first</div>
								<div class="col-xs-12 box1 padding00 zindex" id="firstDiv"><span  id="firstVal" class="position">NULL</span></div>
							</div>
							<div class="col-xs-8 col-xs-offset-1 margin-top-15" id="countValDiv">
								<div class="col-xs-4" id="countVar">count = <span class="radius-50"><span id="count" class="position">0</span></span></div>
								<div class="col-xs-5" id="keyVar">key = <span id="key" class="radius-50">10</span></div>
							</div>
						</div>
						<div class="col-xs-12 margin-top-5 padding00" id="dynamicNodes"></div>
						<div class="col-xs-12 margin-top-20 padding00" id="declareNodes">
							<div class="col-xs-2 col-xs-offset-3 extraNode opacity00 padding00 tooltopClass zindex" id='currentNode'>
								<div class="col-xs-12 box position">
									<span id='currentVal' class="extrNodeVal ct-brown-color ct-fonts position"></span>
								</div>
								<div class="text-center col-xs-12 padding00 ct-green-color">currentNode</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class='col-xs-7 margin-top-15'>
				<div class='col-xs-12 box-border padding00' id="mainDiv">
					<div class='col-xs-6 padding5'>
						<div class='col-xs-12 box-border algorithm-steps-Div opacity00 padding00' id='algorithmStepsDiv'></div>
					</div>
					<div class='col-xs-6 padding5'><pre class="creamPreTab opacity00 box-border" id="parentPre"></pre></div>
				</div>
			</div>
		</div>
		<div class='col-xs-12 text-center margin-top-20'><span class="btn btn-warning opacity00" id="restartBtn">Restart</span></div>	
	</div>
</body>
</html>