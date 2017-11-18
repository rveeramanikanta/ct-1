<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Delete at Position Algorithm</title>

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
<script src="/secure/lang/ds/js-min/dapid.min.js"></script>

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

.ct-fonts, y, .y, bwBg {
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
	font-family: monospace;
	font-size: 12px;
}

.box, .box1 {
	min-height: 24px;
	text-align: center;
	border-radius: 6px;
	border: 1px solid green;
}

.box1 {
	border: 1px solid gray;
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

.no-radius {
	border-color: blue;
}

.left-radius {
	border-right: none;
	border-color: green;
	border-radius: 6px 0 0 6px;
}

.right-radius {
	border-left: none;
	border-color: green;
	border-radius: 0 6px 6px 0;
}

.inline-css {
	margin: 0 10px;
	position: relative;
	display: inline-block;
}

.user-text {
	width: 82px;
	height: 27px;
	border: none;
	background: black;
}

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000;
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

.blinkingRed {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: infinite;
 }

@keyframes blink {
	50% {
		background:  #ffad99;
	}
}

.blinkingGreen {
	animation-name: blink1;
	animation-duration: 1s;
	animation-iteration-count: infinite;
 }

@keyframes blink1 {
	50% {
		background:   #ccffcc;
	}
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

#pos {
	width: 21px;
	padding: 5px 4px;
}

.tooltip {
	font-family: monospace;
	z-index: 9999999; 
}
</style>
</head>
<body>

<script type="text/javascript">
	$(document).ready(function() {
		deleteAtPositionAnimation();
	});
</script>

	<div class='col-xs-12 padding00'>
		<div class='col-xs-12 padding00'>
			<div class="ct-box-main">
				<div class='text-center'>
					<h4 class='label ct-demo-heading' id='headingDiv'>deleteAtPosition() in DLL</h4>
				</div>
			</div>
			
			<div class='col-xs-12 margin-top-5' id='totalDiv'>
				<div class='col-xs-12 padding00 margin-top-15'>
					<div class='col-xs-5 padding00'>
						<div class='col-xs-12 padding00'>
							<div class='col-xs-12 box-border' id='animationDiv' style="min-height: 270px">
								<div class='col-xs-12 margin-top-25 margin-bottom-25 padding00'>
									<div class="col-xs-12">
										<div class="col-xs-2 padding00 opacity00 position" id="firstNode">
											<div class="text-center col-xs-12 padding00" id="firstLabel">first</div>
											<div class="col-xs-12 box1 padding00 zindex" id="firstDiv">
												<span  id="firstVal" class="position ct-fonts" style="color: darkslategrey;">NULL</span>
											</div>
										</div>
										<div class="col-xs-3 col-xs-offset-1 padding00 margin-top-15">
											<div class="text-center position opacity00" id="posVal">position =
												 <div class="box-border position zindex" id="pos">
													<span id="position" class="opacity00">1</span>
												 </div>
											</div>
										</div>
									</div>
									<div class="col-xs-12 padding00 margin-top-25" id="csllNodes">
										<div class="col-xs-12 padding00" id="dynamicNodes"></div>
									</div>
									<div class="col-xs-12 margin-top-20 padding00" id="declareNodes"></div>
								</div>
							</div>
						</div>
					</div>
					<div class='col-xs-7'>
						<div class='col-xs-12 box-border padding00' id="mainDiv">
							<div class='col-xs-6' style='padding: 5px;'>
								<div class='col-xs-12 box-border algorithm-steps-Div opacity00 padding00' id='algorithmStepsDiv'></div>
							</div>
							<div class='col-xs-6 padding00''>
								<pre class="creamPreTab opacity00 box-border" id="parentPre"></pre>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class='col-xs-12 text-center margin-top-20'>
				<div class='buttons-div'>
					<button type="button" class="btn btn-warning opacity00" id="restartBtn">Restart</button>
				</div>	
			</div>
		</div>
	</div>
</body>
</html>