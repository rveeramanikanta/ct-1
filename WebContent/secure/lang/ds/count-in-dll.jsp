<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Count in DLL</title>

<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery.scrollTo.js"></script>
<script src="/secure/lang/ds/js-min/cid.min.js"></script>

<style type="text/css">

.introjs-tooltip {
	min-width: 410px;
	overflow-y: auto;
}

.user-btn {
	margin: 0px !important;
	background-color: green;
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

.margin-top-15 {
	margin-top: 15px;
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
	height: 260px;
	background-color: #fffae6;
	overflow-y: auto; 
	font-family: monospace;
	font-size: 12px;
}

.box, .box1 {
	min-height: 24px;
	text-align: center;
	border-radius: 6px;
	border: 1px solid green;
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
	padding: 10px;
	-moz-tab-size: 2;
	tab-size: 2;
	border-radius: 8px;
	font-family: monospace;
	background-color: #fffae6;
	margin: 0;
}

.ct-fonts, y, .y {
	font-weight: bold;
	font-family: monospace;
}

.ct-green-color, g {
	color: green;
}

.ct-brown-color, brown {
	color: brown;
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
	font-weight: bold;
	border-radius: 4px;
	font-family: monospace;
	background-color: black;
	padding: 2px 4px;
}

.ui-effects-transfer {
	border: 1px solid blue;
	z-index: 99999999 !important;
}

.zindex {
	z-index: 1000000;
}

.padding5 {
	padding: 5px;
}

.first-val {
	 color: darkslategrey;
	 font-weight: bold;
}

.tooltip {
	font-family: monospace;
	zindex: 999999999;
}

.radius-50 {
	border: 1px solid grey;
	border-radius: 50%;
	padding: 4px;
}
</style>
</head>
<body>

<script type="text/javascript">
	$(document).ready(function() {
		countInDll();
	});
</script>

	<div class='col-xs-12 padding00'>
		<div class="ct-box-main text-center"><h4 class='label ct-demo-heading' id='headingDiv'>Count() in DLL</h4></div>
		<div class='col-xs-12 margin-top-15' id='totalDiv'>
			<div class='col-xs-5 padding5'>
				<div class='col-xs-12 box-border' id='animationDiv'>
					<div class='col-xs-12 margin-top-5 margin-bottom-25 padding00'>
						<div class="col-xs-12">
							<div class="col-xs-2 padding00 opacity00 position" id="firstNode">
								<div class="text-center col-xs-12 padding00" id="firstLabel">first</div>
								<div class="col-xs-12 box1 box-border padding00 zindex" id="firstDiv">
									<span  id="firstVal" class="position first-val">NULL</span>
								</div>
								<div class="col-xs-12 padding00 text-center">
									<span id="dataAddress1" class="position  ct-brown-color ct-fonts opacity00">2318</span>
								</div>
							</div>
							<div class="col-xs-3 col-xs-offset-2 margin-top-15" id="sumValDiv">
								<div class="text-center opacity00" id="sumVar">sum = 
									<span class="radius-50 position zindex"><span id="sum" class="position">0</span></span></div>
							</div>
						</div>
						<div class="col-xs-12 padding00 margin-top-20" id="csllNodes">
							<div class="col-xs-12" id="dynamicNodes" style='padding-right: 0;'></div>
						</div>
						<div class="col-xs-12 margin-top-20 padding00" id="declareNodes">
							<div class="col-xs-2 col-xs-offset-1 extraNode opacity00 padding00 zindex" id='temp'>
								<div class="col-xs-12 box padding00 position">
									<span id='tempVal' class="extrNodeVal ct-brown-color ct-fonts position"></span>
								</div>
								<div class="text-center col-xs-12 padding00 ct-green-color">last</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class='col-xs-7'>
				<div class='col-xs-12 box-border padding00' id="mainDiv">
					<div class='col-xs-6 padding5'>
						<div class='col-xs-12 box-border algorithm-steps-Div opacity00 padding00' id='algorithmStepsDiv'></div>
					</div>
					<div class='col-xs-6 padding5'>
						<pre class="creamPreTab opacity00 box-border" id="parentPre"></pre>
					</div>
				</div>
			</div>
		</div>
		<div class='col-xs-12 margin-top-20 text-center'><span class="btn btn-warning opacity00" id="restartBtn">Restart</span></div>	
	</div>
</body>
</html>