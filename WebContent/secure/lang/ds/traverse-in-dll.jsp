<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Traverse in DLL</title>

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
<script src="/secure/lang/ds/js/traverse-in-dll.js"></script>
<style type="text/css">

.introjs-tooltip {
	min-width: 410px;
	overflow-y: auto;
}

.introjs-duplicate-nextbutton {
	margin: 0px !important;
	background-color: green;
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
	z-index: 10000000 !important;
	marker-end: url("#arrowEnd"); 
}

.ct-fonts, .ct-css {
	font-weight: bold;
	font-family: monospace;
}

.ct-green-color, g{
	color: green;
}

.ct-brown-color, brown{
	color: brown;
}

.error-text {
	color :red;
	font-weight: bold;
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

div, span {
	position: relative;
}

blue {
	color: blue;
}

y {
	font-family: monospace;
	font-weight: bold;
	color: yellow;
}

.y {
	font-family: monospace;
	font-weight: bold;
	background-color: yellow; 
}

bgb {
	color: white;
	font-weight: bold;
	border-radius: 4px;
	font-family: monospace;
	background-color: black;
	padding: 2px 4px;
}

#animationDiv {
	margin-top: 35px;
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

</style>
</head>
<body>

<script type="text/javascript">
	$(document).ready(function() {
		traverseInDll();
	});
</script>

<div class='col-xs-12 padding00'>
		<div class='col-xs-12 padding00'>
			<div class="ct-box-main">
				<div class='text-center'>
					<h4 class='label ct-demo-heading' id='headingDiv'>Traverse() in DLL</h4>
				</div>
			</div>
			
			<div class='col-xs-12 margin-top-5' id='totalDiv'>
				<div class='col-xs-12 padding00'>
					<div class='col-xs-6 padding00'>
						<div class='col-xs-12 margin-top-15 padding00'>
							<div class='col-xs-12 box-border padding00' id='animationDiv'>
								<div class='col-xs-12 margin-top-5 margin-bottom-25 padding00'>
									<div class="col-xs-12 padding00 margin-top-5">
										<div class="col-xs-12 padding00" id="traverseValDiv">
											<div class="col-xs-12 opacity00" id="traverseVar">Elements in SLL = 
												<span id="ndata1"></span><span id="ndata2"></span><span id="ndata3"></span><span id="ndata4"></span>
											</div>
										</div>
									</div>
									<div class="col-xs-2 opacity00 position margin-top-5" id="firstNode">
										<div class="text-center col-xs-12 padding00 ct-fonts" id="firstLabel">first</div>
											<div class="col-xs-12 box1 padding00 tooltopClass zindex" id="firstDiv">
												<span  id="firstVal" class="position ct-fonts" style="color: darkslategrey;">NULL</span>
											</div>
											<div class="col-xs-12 padding00">
											<div class="col-xs-6 padding00 text-center">
												<span id="dataAddress1" class="position  ct-brown-color ct-fonts opacity00">2318</span>
											</div>
										</div>
									</div>
									<div class="col-xs-12 padding00 margin-top-5" id="csllNodes">
										<div class="col-xs-10" id="dynamicNodes" style='padding-right: 0;'></div>
									</div>
									<div class="col-xs-12 margin-top-20 padding00" id="declareNodes">
										<div class="col-xs-2 col-xs-offset-3 extraNode opacity00 padding00 tooltopClass zindex" id='temp'>
											<div class="col-xs-12 box padding00 position">
												<span id='tempVal' class="extrNodeVal ct-brown-color ct-fonts position"></span>
											</div>
											<div class="text-center col-xs-12 padding00 ct-green-color">last</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class='col-xs-6 margin-top-15'>
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
			<div class='col-xs-12 text-center'>
				<div class='buttons-div'>
					<button type="button" class="btn btn-warning opacity00" id="restartBtn">Restart</button>
				</div>	
			</div>
		</div>
	</div>
</body>
</html>