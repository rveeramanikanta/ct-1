<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>DeQueue Using Array</title>

<link rel="stylesheet" href="/css/bootstrap.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-all.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src="/js/jquery.scrollTo.js"></script>

<script type="text/javascript" src="js-min/dequa.min.js"></script>


<!-- Javascript for the actual visualization code -->
<script type="text/javascript" src="js-min/an-li/custom-events.min.js"></script>
<script type="text/javascript" src="js-min/an-li/undo-functions.min.js"></script>
<script type="text/javascript" src="js-min/an-li/animated-object.min.js"></script>
<script type="text/javascript" src="js-min/an-li/animated-label.min.js"></script>
<script type="text/javascript" src="js-min/an-li/animated-circle.min.js"></script>
<script type="text/javascript" src="js-min/an-li/animated-rectangle.min.js"></script>
<script type="text/javascript" src="js-min/an-li/animated-linked-list.min.js"></script>
<script type="text/javascript" src="js-min/an-li/highlight-circle.min.js"></script>
<script type="text/javascript" src="js-min/an-li/line.min.js"></script>
<script type="text/javascript" src="js-min/an-li/draw-line.min.js"></script>
<script type="text/javascript" src="js-min/an-li/object-manager.min.js"></script>
<script type="text/javascript" src="js-min/an-li/animation-main.min.js"></script>
<script type="text/javascript" src="js-min/al-li/algorithm.min.js"></script>

<script type="text/javascript" src="js-min/al-li/dequeue-array.min.js"></script>

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
	padding: 0 10px;
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
	font-family: monospace;
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
	font-weight: bold;
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

.introjs-tooltiptext ul li, .style-css {
	font-family: monospace;
}

.position-css {
	display: inline-block;
	position: relative;
}


</style>

<script type="text/javascript">

 $(document).ready(function() {
	DeQueueArrayReady();
});
</script>
</head>
<body onload="init();" class="VisualizationMainPage">
	<div id="container">
		<div class='col-xs-12 text-center' style="margin-top: 20px;">
			<h1 class='label label-default ct-demo-heading' id="deQueueHeading">Double Ended Queue using Arrays</h1>
		</div>

		<div id="mainContent" class='col-xs-12 margin-top-20 padding0'>
			<div class='col-xs-3'>
				<div class='col-xs-12 box-border opacity00' id="preCode">
					<pre class='creampretab4' id='queueInit' style="margin-top: 10px;"><span id="headerFiles">#include&lt;stdio.h&gt;</span>
#include &lt;stdlib.h&gt;

#define MAX 20
int deQueue[MAX];
int front = -1, rear = -1;</pre>
					<pre class='creampretab4 hide' id="queueMain">void main() {
	<div id="mainCallMethod" class="position-css"></div>		
}</pre>
					<div id="deQueueMethods"></div>
				</div>
				<div id="outputDiv" class='opacity00 col-xs-12 padding0 margin-top-20'>
					<div class="output-console-title-bar">
						<span class="title">Output</span>
					</div><div class="output-console-body"><span id="output"></span>
					</div>
				</div>

			</div>
			<div class='col-xs-9'>
				<div class='col-xs-12 padding0 box-border text-center opacity00' id='animationDiv'>
					<div class='col-xs-12 padding0 margin-top-20 text-center'>
						<div class='col-xs-12 padding0 margin-top-20 text-center'>
							<div class='col-xs-offset-1 col-xs-10 padding0' id='btnsDiv'>
								
								<div class='col-sm-2 padding0'>
									<div class='col-sm-12' style="padding: 0 5px">
										<div class="input-group">
											<input class="form-control input-sm text-center" id="injectText" name="inject" type="text" />
												<span class="input-group-addon"> <span id="injectBtn" class="btn btn-sm btn-success">Inject</span>
											</span>
										</div>
									</div>
								</div>
								
								<div class="col-sm-2">
									<div class='col-sm-6'>
										<div class="input-group">
											<span class="input-group-addon input-group-addon-border">
												<span id="popBtn" class="btn btn-sm btn-success">Pop</span>
											</span>
										</div>
									</div>
								</div>
								
								<div class='col-sm-2 padding0'>
									<div class='col-sm-12'>
										<div class="input-group">
											<input class="form-control input-sm text-center" id="pushText" name="push" type="text" />
												<span class="input-group-addon"> <span id="pushBtn" class="btn btn-sm btn-success">Push</span>
											</span>
										</div>
									</div>
								</div>
								
								<div class="col-sm-2">
									<div class='col-sm-7'>
										<div class="input-group">
											<span class="input-group-addon input-group-addon-border">
												<span id="ejectBtn" class="btn btn-sm btn-success">Eject</span>
											</span>
										</div>
									</div>
								</div>
								
								<div class="col-sm-2">
									<div class='col-sm-8'>
										<div class="input-group">
											<span class="input-group-addon input-group-addon-border">
												<span id="displayBtn" class="btn btn-sm btn-success">Display</span>
											</span>
										</div>
									</div>
								</div>
								
								<div class="col-sm-2">
									<div class='col-sm-8 padding0'>
										<div class="input-group">
											<span class="input-group-addon input-group-addon-border">
												<span id="clearBtn" class="btn btn-sm btn-success">Clear Queue</span>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<canvas id="canvas" width="900" height="500"></canvas>
				</div>
			</div>
			<div id="generalAnimationControlSection">
				<table id="GeneralAnimationControls" class='hide'></table>
			</div>
		</div>
	</div>
</body>
</html>