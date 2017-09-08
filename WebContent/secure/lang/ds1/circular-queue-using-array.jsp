<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Circular Queue using Array</title>

<link rel="stylesheet" href="/css/bootstrap.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-all.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src="/js/jquery.scrollTo.js"></script>
<!-- <script type="text/javascript" src="js/queue-using-array.js"></script> -->



<!-- Javascript for the actual visualization code -->
<script type="text/javascript" src="js/an-li/custom-events.js"></script>
<script type="text/javascript" src="js/an-li/undo-functions.js"></script>
<script type="text/javascript" src="js/an-li/animated-object.js"></script>
<script type="text/javascript" src="js/an-li/animated-label.js"></script>
<script type="text/javascript" src="js/an-li/animated-circle.js"></script>
<script type="text/javascript" src="js/an-li/animated-rectangle.js"></script>
<script type="text/javascript" src="js/an-li/animated-linked-list.js"></script>
<script type="text/javascript" src="js/an-li/highlight-circle.js"></script>
<script type="text/javascript" src="js/an-li/line.js"></script>
<script type="text/javascript" src="js/an-li/draw-line.js"></script>
<script type="text/javascript" src="js/an-li/object-manager.js"></script>
<script type="text/javascript" src="js/an-li/animation-main.js"></script>

<script type="text/javascript" src="js/al-li/algorithm.js"></script>

<script type="text/javascript" src="js/al-li/circular-queue-using-array.js"></script>

<style type="text/css">
.padding0 {
	padding: 0;
}

.margin-top-20 {
	margin-top: 20px;
}

.box-border {
	border: 2px solid gray;
	border-radius: 8px;
}

.creampretab4 {
	-moz-tab-size: 2;
	tab-size: 2;
	background-color: lavender !important;
	font-size: 10.8px;
	font-style: inherit;
	padding: 5px;
	overflow-y: auto;
	white-space: pre;
	word-spacing: -3px;
}

.introjs-tooltiptext {
	min-width: 250px;
}

.introjs-tooltiptext li span {
	display: inline-block;
}

.ct-code-b-red {
	color: red;
	font-weight: bold;
}

.background-color-yellow {
	background-color: yellow;
}

.output-console-body {
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
	height: 100px;
	padding: 10px;
}

.output-console-title-bar {
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}

#outputDiv {
	position: relative;
	z-index: 9999999;
}

.input-group-addon {
	padding: 4px 6px;
}

.btn-sm, .btn-group-sm > .btn {
	padding: 0 6px;
	font-family: monospace;
}

.input-group-addon-border {
	border: 1px solid #ccc !important;
	border-radius: 4px !important;
}

.padding-col0 {
	padding: 0;
}

y, r {
	font-family: monospace;
	font-weight: bold;
}

y {
	color: yellow;
}

r {
	color: red;
}

.user-btn {	
	background-color: green;
}

.introjs-tooltiptext > ul > li {
	font-family: monospace;
}
</style>

<script type="text/javascript">

/* $(document).ready(function() {
	queueArrayReady();
}); */
</script>
</head>
<body onload="init();" class="VisualizationMainPage">
	<div id="container">
		<div class='col-xs-12 text-center' style="margin-top: 20px;">
			<h1 class='label label-default ct-demo-heading'>Circular Queue using Arrays</h1>
		</div>

		<div id="mainContent" class='col-xs-12 margin-top-20 padding0'>
			<div class='col-xs-3'>
				<!-- <div class='col-xs-12 box-border'>
					<pre class='creampretab4' id='queueInit' style="margin-top: 10px;">
					</pre>
				</div> -->

				<div id="outputDiv" class='opacity00 col-xs-12 padding0 margin-top-20'>
					<div class="output-console-title-bar">
						<span class="title">Output</span>
					</div><div class="output-console-body"><span id="output"></span>
					</div>
				</div>

			</div>
			<div class='col-xs-9'>
				<div class='col-xs-12 padding0 box-border text-center' id='animationDiv'>
					<div class='col-xs-12 padding0 margin-top-20 text-center'>
						<div class='col-xs-offset-3 col-xs-6 padding0' id='btnsDiv'>
							<div class='col-sm-4'>
								<div class='col-sm-12 padding-col0' id='enqueueDiv'>
									<div class="input-group">
										<input class="form-control input-sm" id="enqueueText" name="enqueue" type="text" /> 
										<span class="input-group-addon">
											<span id="enqueueBtn" class="btn btn-sm btn-success">enqueue</span>
										</span>
									</div>
								</div>
							</div>
							
							<div class="col-sm-offset-1 col-sm-2" style='padding: 0;'>
								<div class='col-sm-12' id='dequeueDiv'>
									<div class="input-group">
										<span class="input-group-addon input-group-addon-border">
											<span id="dequeueBtn" class="btn btn-sm btn-success">dequeue</span>
										</span>
									</div>
								</div>
							</div>
							
							<div class="col-sm-offset-1 col-sm-2" style='padding: 0;'>
								<div class='col-sm-12' id='displayDiv'>
									<div class="input-group">
										<span class="input-group-addon input-group-addon-border">
											<span id="displayBtn" class="btn btn-sm btn-success">display</span>
										</span>
									</div>
								</div>
							</div>
						</div>

					</div>
					<canvas id="canvas" width="700" height="500"></canvas>
				</div>
			</div>
			<div id="generalAnimationControlSection">
				<table id="GeneralAnimationControls" class='hide'></table>
			</div>
		</div>
	</div>
</body>
</html>