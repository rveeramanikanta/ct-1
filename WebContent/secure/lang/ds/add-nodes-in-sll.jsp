<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Add Node Method in SLL</title>
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
<script src="/secure/lang/ds/js/add-nodes-in-sll.js"></script>

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

.ct-fonts, y, g, brn, bl {
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

y {
	color: yellow;
}

.position-css {
	display: inline-block;
	position: relative;
}

.box {
	min-height: 24px;
	text-align: center;
	border-radius: 6px;
	border: 1px solid green;
}

.animation-div, .algorithm-div {
	min-height: 120px;
}

.algorithm-div {
	background-color: #fffae6;
	color: black;
	font-family: monospace;
	padding: 8px;
}

.div-border {
	margin: 0;
	padding: 0;
	width: 50px;
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

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.svg-line {
	marker-end: url("#arrowEnd");
	position: relative;
	stroke: gray;
	stroke-width: 2;
}

.introjs-tooltip {
	min-width: 350px;
}

.user-btn {
	background-color: green;
	margin: 0 !important;
}

.step-arrow {
	background-color: #a1126c;
	height: 26px;
	line-height: 26px;
	display: table-row-group;
	border-bottom-left-radius: 8px;
	border-top-left-radius: 8px;
}

.step-arrow::after {
	color: #a1126c;
	border-left: 14px solid;
	border-top: 13px solid transparent;
	border-bottom: 14px solid transparent;
	content: ' ';
	position: absolute;
}

.step-arrow-text {
	color: white;
	padding-left: 5px;
	font-family: monospace;
	font-size: 12px;
}

.padding3 {
	padding: 0 3px;
}

.z-index10000 {
	z-index: 9999999;
	position: relative; 
}

.creamPreTab {
	tab-size: 4;
	-moz-tab-size: 4;
	padding: 8px;
	border-radius: 8px;
	font-family: monospace;
	background-color: #fffae6;
}

.blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: infinite;
 }

@keyframes blink {
	50% {
		background:  hotpink;
	}
}

.margin-left {
    margin-left: 30px;
    padding: 0!important
}

.padding10 {
	padding: 0 10px;
}

.ui-effects-transfer {
	border: 1px solid blue;
	z-index: 99999999 !important;
}

.zIndex {
	z-index: 99999999;
}
</style>
</head>
<body>
	<script type="text/javascript">
	$(document).ready(function() {
		$('#headingInSll').addClass("zIndex").attr({"data-placement" : "bottom", "title" : "Mallika Balla"}).tooltip();
		addNodesInSLLReady();
	});
	</script>
	<div class="col-xs-12 padding0">
		<div class="text-center margin-top25 col-xs-12 padding0">
			<h1 class="label ct-demo-heading" id="headingInSll">addNode() in SLL</h1>
		</div>
		<div class="col-xs-12 margin-top25 padding0">
			<div class="col-xs-10 col-xs-offset-1 padding0" id="explanationDiv">
				<div class="col-xs-12 padding0">
					<div class="col-xs-5 padding0">
						<div class="col-xs-12 box-border algorithm-div padding0 opacity00" id="algorithmDiv"></div>
					</div>
					<div class="col-xs-6 col-xs-offset-1 padding0">
						<div class="col-xs-12 box-border animation-div opacity00" id="animationDiv">
							<div class="col-xs-12 padding0 margin-top25">
								<div class="col-xs-2 padding0 opacity00" id="firstNode">
									<div class="text-center col-xs-12 padding00 ct-green-color ct-fonts padding0">first</div>
									<div class="col-xs-12 box padding0" id="firstDiv">
										<span id="firstVal" class="ct-green-color ct-fonts position-css opacity00">NULL</span>
									</div>
								</div>
								<div class="col-xs-10" id="dynamicNodes"></div>
							</div>
							<div class="col-xs-12 margin-top25 padding0" style="margin-bottom: 8px;" id="extraNodesParent">
								<div class="col-xs-9 col-xs-offset-2 padding0">
									<div class="col-xs-12 padding0" id="extraNodes">
										<div class="col-xs-2 col-xs-offset-1 padding0 opacity00" id="lastNodeParent">
											<div class="col-xs-12 box padding0">
												<span id="lastNode" class="ct-brown-color ct-fonts position-css temp-node-val opacity00">NULL</span>
											</div>
											<div class="text-center col-xs-12 padding0 ct-green-color ct-fonts">lastNode</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xs-12 padding0 margin-top25">
							<pre class="creamPreTab opacity00 col-xs-10 col-xs-offset-1" id="addMthd"></pre>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 text-center margin-top25">
			<span class="btn btn-warning text-center opacity00" id="restartBtn">Restart</span>
		</div>
	</div>
</body>
</html>