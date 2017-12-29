<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Kruskal's algorithm</title>

<link rel="stylesheet" href="/css/bootstrap.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/alertify/alertify.bootstrap.css">
<link rel="stylesheet" href="/css/alertify/alertify.core.css">
<link rel="stylesheet" href="/css/alertify/alertify.default.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-all.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/jquery.scrollTo.js"></script>
<script type="text/javascript" src="/js/alertify.js"></script>


<script type="text/javascript" src="js/an-li/custom-events.js"></script>
<script type="text/javascript" src="js/an-li/undo-functions.js"></script>
<script type="text/javascript" src="js/an-li/animated-object.js"></script>
<script type="text/javascript" src="js/an-li/animated-circle.js"></script>
<script type="text/javascript" src="js/an-li/animated-rectangle.js"></script>
<script type="text/javascript" src="js/an-li/animated-linked-list.js"></script>
<script type="text/javascript" src="js/an-li/highlight-circle.js"></script>
<script type="text/javascript" src="js/an-li/line.js"></script>
<script type="text/javascript" src="js/an-li/draw-line.js"></script>
<script type="text/javascript" src="js/an-li/object-manager.js"></script>
<script type="text/javascript" src="js/an-li/animated-label.js"></script>
<script type="text/javascript" src="js/an-li/animation-main.js"></script>
<script type="text/javascript" src="js/al-li/algorithm.js"></script>

<script type="text/javascript" src="js/al-li/kruskals-alg.js"></script>
<script type="text/javascript" src="js/kruskal.js"></script>

<!-- <link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet">
<script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script> -->


<style type="text/css">
.alertify-buttons {
	background: white;
}

.alertify-dialog {
	padding: 0;
}

.alertify {
	top: 200px;	
	width: 350px;
	z-index: 100000000 !important;
}

.ct-demo-heading {
	background: highlight none repeat scroll 0 0;
	border-radius: 10px;
	font-size: 18px;
	position: relative;
	z-index: 9999999;
	position: relative;
}

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

.popover {
	min-width: 50px !important;
	z-index: 1;
	min-height: 20px !important;
}

.popover-content {
	font-size: 12px;
}

/* .introjs-tooltip {
	max-height: 400px;
} */

.introjs-tooltiptext li span {
	display: inline-block;
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

.btn-sm, .btn-group-sm>.btn {
	padding: 0 6px;
}

.input-group-addon-border {
	border: 1px solid #ccc !important;
	border-radius: 4px !important;
}

.padding-col0 {
	padding: 0;
}

.user-btn {
	background-color: green;
}

.restart-btn {
	background-color: orange;
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

.btn-css {
	display: inline-block;
	margin: 0 10px;
}

.dropdown {
	display: inline-block;
	margin: 5px;
	font-family: monospace;
}

.popover-content {
	display: table;
}

.toggle-group label {
	font-family: monospace;
	font-weight: bold;
}

.code {
	display: none;
}

.code.active {
	display: block;
	transition: 5s;
}

#addVertexBtn, #addEdgeBtn {
	font-family: monospace;
	font-weight: bold;
}

#btnsDiv {
	align-items: center;
	display: flex;
	justify-content: center;
}

.introjs-tooltiptext ol, .introjs-tooltiptext ul {
	margin-bottom: 0;
	margin-left: -15px;
}

.vertical-center {
	align-items: center;
	display: flex;
	justify-content: center;
}

.padding10 {
	padding: 10px;
}

#canvasExpDiv {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.canvas-tooltip {
	background: black none repeat scroll 0 0;
	border-radius: 3px;
	color: white;
	line-height: 150%;
	padding: 12px 12px 24px;
	z-index: 9999;
	position: relative;
	display: inline-block;
	min-width: 200px;
	max-width: 300px;
}

.canvas-tooltip-arrow.left {
	border-color: transparent black transparent transparent;
	left: -10px;
	top: 10px;
}
.canvas-tooltip-arrow {
	border: 5px solid black;
	content: "";
	position: absolute;
}

.canvas-tooltip-buttons {
	text-align: right;
	white-space: nowrap;
}

canvas {
	position: relative;
	z-index: 1;
}

td:first-child {
	width : 100px;
}

.input-edge {
	margin-left: 6px;
	margin-right: 6px;
}

</style>

</head>
<body onload="init()">
	<div id="container">
		<div class="col-xs-12">
			<div class='col-xs-12 text-center' style="margin-top: 20px;">
				<h1 class='label label-default ct-demo-heading' id="kruskalHeadding">Kruskal's Algorithm</h1>
			</div>
		</div>
		<div id="mainContent" class='col-xs-12 margin-top-20 padding0'>
			<div class='col-xs-3' style="padding-right: 0;">
				<div class='col-xs-12 box-border' style="padding: 5px;">

					<div id='kruskalDiv'>
						<span class='btn btn-primary' data-toggle='collapse' data-target='#codeDiv' style="margin-bottom: 5px;">Kruskal's</span>
						<div id='codeDiv' class='collapse'>
							<pre class='creampretab4'>void KruskalsAlgorithm() {
}</pre>
						</div>
					</div>
				</div>
			</div>
			<div class='col-xs-9'>
				<div class='col-xs-12 padding0 box-border' id='animationDiv'>
					<div class='col-xs-12 padding0 margin-top-20 text-center'>
						<div class='col-xs-offset-0 col-xs-12 padding0' id='btnsDiv'>
							<div class="btn-css col-xs-2">
								<div class='col-sm-12'>
									<div class="input-group" id='addVertexBtnDiv'>
										<span class="input-group-addon input-group-addon-border">
											<span id="addVertexBtn" class="btn btn-sm btn-success">Add
												Vertex</span>
										</span>
									</div>
								</div>
							</div>
							<div class='col-xs-5'>
								<div id='addEdgeDiv' class='vertical-center box-border padding10'>
									<div style="display: inline-block;">
										<table>
											<tr>
												<td><b style="font-family: monospace;">From Vertex
														: </b></td>
												<td>
													<div class="dropdown dropdown-select" id='fromID'>
														<button class="btn dropdown-toggle btn-info btn-xs"
															type="button" data-toggle="dropdown">
															vertex &nbsp;<span class="caret"></span>
														</button>
														<ul class="dropdown-menu"></ul>
													</div>
												</td>
											</tr>

											<tr>
												<td><b style="font-family: monospace;">To Vertex
														&emsp;&emsp;: </b></td>
												<td>
													<div class="dropdown dropdown-select" id='toID'>
														<button class="btn dropdown-toggle btn-info btn-xs"
															type="button" data-toggle="dropdown">
															vertex &nbsp;<span class="caret"></span>
														</button>
														<ul class="dropdown-menu"></ul>
													</div>
												</td>
											</tr>
											<tr>
												<td><b style="font-family: monospace;">Edge weight&emsp;: </b></td>
												<td>
													<div class="input-edge">
														<input class="form-control input-sm" id="edgeWeight" name="inject" 
														type="text" size="6" maxlength="3"/> 
													</div>
												</td>
											</tr>
										</table>
									</div>

									<div style="display: table;">
										<div class='col-sm-12'>
											<div class="input-group">
												<span class="input-group-addon input-group-addon-border">
													<span id="addEdgeBtn" class="btn btn-sm btn-success">Add
														Edge</span>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="btn-css col-xs-1">
								<div class='col-sm-12'>
									<div class="input-group" id='startBtnDiv'>
										<span class="input-group-addon input-group-addon-border">
											<span id="staerBtn" class="btn btn-sm btn-success"><b>Start</b></span>
											<span id="testBtn" class="btn btn-sm btn-success hide"><b></b></span>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class='col-xs-12' style="padding: 0;">
						<canvas id="canvas" width="950" height="500"></canvas>
						<div id='canvasExpDiv'>
							<div class="canvas-tooltip" style="opacity: 0;">
								<div class='canvas-tooltip-text'></div>
								<div class="canvas-tooltip-arrow left" style="display: inherit;"></div>
								<div class='canvas-tooltip-buttons'></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="generalAnimationControlSection">
				<table id="GeneralAnimationControls" class='hide'></table>
			</div>
		</div>
	</div>

	<script type="text/javascript">
		$(document).ready(function() {
			
			$("#Kruskal").on("click", function() {
				$(this).find(".code").addClass("active");
			});

			$("canvas").on("mousedown", function(evt) {
				console.log(evt.clientX - $("canvas").offset().left);
				console.log(evt.clientY - $("canvas").offset().top);
			});

			$('.dropdown').on('click','.dropdown-menu li a', function() {
				$('.dropdown-menu').css('min-width', $(".dropdown").width());
				$(this).parents('.dropdown-menu').find('li').removeClass('active');
				$(this).parent('li').addClass('active');
				$(this).parents('.dropdown-select').find('.dropdown-toggle').html($(this).text() + ' &nbsp;<span class="caret"></span>');
			});
			introGuide();
		});
	</script>
</body>
</html>