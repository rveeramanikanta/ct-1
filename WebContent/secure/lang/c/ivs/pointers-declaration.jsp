<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/animate.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<!-- <script src="/secure/lang/c/js-min/pdl.min.js"></script> -->
<script src="/secure/lang/c/js/pointers-declaration.js"></script>

<title>Pointers Declaration</title>
<style>

.introjs-tooltip {
	min-width: 300px;
}

.introjs-duplicate-nextbutton {
	background-color: green;
}

.buttons-div {
	margin: 20px 0 10px;
	text-align: center;
}

.heading-css {
	margin: 20px 0 10px;
}

.creamPreTab4 {
	-moz-tab-size: 4;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 11px;
	margin: 5px;
	padding: 10px;
	white-space: pre;
	font-family: monospace;
}

.box-border {
	border: 1px solid gray;
	border-radius: 8px;
	padding: 10px;
}

.border-height-css {
	border: 1px solid;
	height: 22px;
}

.Vertical-text-center  {
	height: 62px;
	line-height: 62px;
	text-align: right; 
}

.width200 {
	width: 200px;
}

.padding10 {
	padding: 10px;
}

.padding-col0 {
	padding: 0;
}

div, span {
	position: relative;
}

.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 9999999;
}

.color-gray {
	color: rgb();
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.svg-line {
	display: none;
	position: relative;
	stroke: gray;
	stroke-width: 2; 
}

.ct-lime-color {
	color: green;
	font-weight: bold;
}

.ct-blue-color {
	color: blue;
}
</style>
</head>
<body>

<div class='col-xs-12'>
	<div class='text-center heading-css'><h1 class='label ct-demo-heading'>Pointers Declaration</h1></div>
	<div class='buttons-div'><button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button></div>
	<div class="col-xs-12">
		<div class='col-xs-offset-2 col-xs-8'>
			<div class='col-xs-12'>
				<div class='col-xs-5'>
					<div class='col-xs-12 box-border'>
<pre class='creamPreTab4' id='preCode'>
<span id='line1'>int x = <span id='valueOfX'>3</span>;</span>
<span id='line2'>float *p;</span>
<span id='line3'>p = &x;</span>
</pre>
					</div>
				</div>
				<div class='col-xs-7'>
					<div class='col-xs-12 box-border'>
						<div class="col-xs-12 padding10" id='animationBox'>
							<div class='col-xs-6'>
								<div class='center width200'>
									<div class='col-xs-12 visibility-hidden' id='xBox'>
										<div class='col-xs-4 Vertical-text-center'>x =</div>
										<div class="col-xs-6 text-center">
											<div><span class='color-gray'>2 bytes</span></div>
											<div class='border-height-css'><span class='visibility-hidden ct-blue-color' id='xValue'>3</span></div>
											<div><span id='xAddress' class="ct-lime-color">1111</span></div>
										</div>
									</div>
								</div>
							</div>
							<div class='col-xs-6'>
								<div class='center width200'>
									<div class='col-xs-12 visibility-hidden' id='pBox'>
										<div class='col-xs-4 Vertical-text-center padding-col0'><span class='padding10'>p =</span></div>
										<div class="col-xs-6 text-center">
											<div><span class='color-gray'>2 bytes</span></div>
											<div class='border-height-css'><span id='pValue' class='ct-blue-color'></span></div>
											<div><span id='pAddress' class="ct-lime-color">1234</span></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script>
	$(document).ready(function() {
		pointersDeclarationReady();
	});
</script>
</body>
</html>