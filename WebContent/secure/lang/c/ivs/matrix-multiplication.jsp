<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<link rel="stylesheet" href="/css/jquery-ui.css">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/animate.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/font-awesome-animation.min.css" rel="stylesheet">
<link rel="stylesheet" href="/css/custom-styles.css" />

<script src="/js/bootstrap.min.js"></script>
<script src="/secure/lang/c/js-min/mm.min.js"></script>

<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/alertify.js"></script>
<link rel="stylesheet" href="/css/alertify/alertify.bootstrap.css"/>
<link rel="stylesheet" href="/css/alertify/alertify.core.css"/>
<link rel="stylesheet" href="/css/alertify/alertify.default.css"/>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/gs/TimelineLite.min.js"></script>
<style type="text/css">
.padding0 {
	padding: 0;
}

.main-two-box {
	border: 1px solid gray;
 	height: 510px;
}

.marginTop20 {
	margin-top: 20px;
}

.fa-square-bracket-left:before {
	content: '[';
	font-size: 75px;
}

.fa-square-bracket-right:before {
	content: ']';
	font-size: 75px;
}

.executeAnimationBtn {
	background-color:green !important;
}

.blinking-white {
	animation-name: blink-border-background-white ;
	animation-duration: 1s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
	z-index: 10000000;
	position: relative;
}

@keyframes blink-border-background-white { 
	50% {
		border-color: white;
		background: green;
	}
}

.blinking-pink {
	animation-name: blink-border-background-pink;
	animation-duration: 1s ;
	animation-iteration-count: infinite;
	animation-direction: alternate ;
	position: relative;
}

@keyframes blink-border-background-pink { 
	50% {
		border-color: white;
		background: #5085ef;
	}
}

th, td {
	height: 24px;
	padding: 0;
	text-align: center;
	width: 19%;
	padding: 2px;
}

.position-relative {
	position: relative;
	display: inline-block; 
}

.background-green {
	background-color: green;
}

.introjs-tooltip {
	min-width: 260px;
}

pre {
	font-size: 10px;
	margin: 0px;
}

.output-console-title-bar {
	border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}

.output-console-body {
	height: 160px;
}

.output-console-body {
    color: #f0f0f0;
    font-family: monospace;
    font-size: 10px;
    white-space: normal;
}

.index-textbox-size {
	background-color: black;
	border-width: 0;
	width: 8%;
}

.zIndex {
	background-color: white;
	position: relative;
	z-index: 9999999;
}

.ct-code-b-yellow {
	color: yellow;
	font-weight: bold;
}
</style>
<script type="text/javascript">
	$(document).ready(function() {
		matrixMultiplicationReady();
	})
	</script>
</head>


<body>
<div class="col-xs-12 padding0">
	<div class="col-xs-offset-4 col-xs-4">
		<h2 class="text-center">
			<span class="label label-default ct-demo-heading">Sample program on two dimensional array</span>
		</h2>
	</div>
</div>
<div class="col-xs-12 margin-top10 text-center">
		<span class="btn btn-warning opacity00" id="restart">Restart</span>
</div>
<div class="col-xs-12 padding0 marginTop20">
	<div class="col-xs-offset-1 col-xs-4 padding0 main-two-box" id="explanation">
	</div>
		<div class="col-xs-offset-1 col-xs-5 padding0 main-two-box"	id="animation">
			<div class="col-xs-12">
				<div class="col-xs-6" id="matrix1">
					<div id="matrixA" class="opacity00">
						<table>
							<tbody>
								<tr>
									<td></td>
									<td></td>
									<td><span><b>0</b></span></td>
									<td><span><b>1</b></span></td>
									<td><span><b>2</b></span></td>
									<td></td>
								</tr>
								<tr class="">
									<td><span><b>0</b></span></td>
									<td rowspan="3"><span class="fa fa-square-bracket-left"></span></td>
									<td><span id="matA00" class="position-relative">(0,0)</span></td>
									<td><span id="matA01" class="position-relative">(0,1)</span></td>
									<td><span id="matA02" class="position-relative">(0,2)</span></td>
									<td rowspan="3"><span class="fa fa-square-bracket-right"></span></td>
								</tr>
								<tr>
									<td><span><b></b></span></td>
									<td><span></span></td>
									<td><span></span></td>
									<td><span></span></td>
									<td><span></span></td>
									<td><span></span></td>
								</tr>
								<tr>
									<td><span><b>1</b></span></td>
									<td><span id="matA10"  class="position-relative">(1,0)</span></td>
									<td><span id="matA11" class="position-relative">(1,1)</span></td>
									<td><span id="matA12" class="position-relative">(1,2)</span></td>
									<td><span></span></td>
									<td><span></span></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td><b>a</b></td>
									<td></td>
									<td></td>
								</tr>

							</tbody>
						</table>
					</div>
				</div>
				<div class="col-xs-6" id="matrix2">
				<div id="matrixB" class="opacity00">
					<table>
						<tbody>
							<tr>
								<td></td>
								<td></td>
								<td><span><b>0</b></span></td>
								<td><span><b></b></span></td>
								<td><span><b>1</b></span></td>
								<td></td>
							</tr>
							<tr class="">
								<td><span><b>0</b></span></td>
								<td rowspan="3"><span class="fa fa-square-bracket-left"></span></td>
								<td><span id="matB00" class="position-relative">(0,0)</span></td>
								<td></td>
								<td><span id="matB01" class="position-relative">(0,1)</span></td>
								<td rowspan="3"><span class="fa fa-square-bracket-right"></span></td>
							</tr>
							<tr>
								<td><span><b>1</b></span></td>
								<td><span id="matB10" class="position-relative">(1,0)</span></td>
								<td><span></span></td>
								<td><span id="matB11" class="position-relative">(1,1)</span></td>
								<td><span id="mat"></span></td>
								<td><span id="mat"></span></td>
							</tr>
							<tr>
								<td><span><b>2</b></span></td>
								<td><span id="matB20" class="position-relative">(2,0)</span></td>
								<td><span></span></td>
								<td><span id="matB21" class="position-relative">(2,1)</span></td>
								<td><span></span></td>
								<td><span></span></td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td><b>b</b></td>
								<td></td>
								<td></td>
							</tr>

						</tbody>
					</table>
				</div>
				</div>
			</div>
			<div class="col-xs-offset-3 col-xs-5">
				<div id="tableC" class="opacity00">
						<table>
							<tbody>
								<tr>
									<td></td>
									<td></td>
									<td><span><b>0</b></span></td>
									<td><span><b></b></span></td>
									<td><span><b>1</b></span></td>
									<td></td>
								</tr>
								<tr class="">
									<td><span><b>0</b></span></td>
									<td rowspan="3"><span class="fa fa-square-bracket-left"></span></td>
									<td><span id="c00" class="position-relative">(0,0)</span></td>
									<td><span id="" class="position-relative"></span></td>
									<td><span id="c01" class="position-relative">(0,1)</span></td>
									<td rowspan="3"><span class="fa fa-square-bracket-right"></span></td>
								</tr>
								<tr>
									<td><span><b></b></span></td>
									<td><span></span></td>
									<td><span></span></td>
									<td><span></span></td>
									<td><span></span></td>
									<td><span></span></td>
								</tr>
								<tr>
									<td><span><b>1</b></span></td>
									<td><span id="c10"  class="position-relative">(1,0)</span></td>
									<td><span id="" class="position-relative"></span></td>
									<td><span id="c11" class="position-relative">(1,1)</span></td>
									<td><span></span></td>
									<td><span></span></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td><b>c</b></td>
									<td></td>
									<td></td>
								</tr>

							</tbody>
						</table>
					</div>
			</div>
			<div class="col-xs-12">
				<div class="col-xs-offset-1 col-xs-9" style="margin-top: 25px">
					<div id="outputDiv" class="opacity00">
						<div class="output-console-title-bar">
							<span class="title">Output</span>
						</div>
						<div class="output-console-body">
							<span class="output" id="output"></span>
						</div>
					</div>
				</div>
			</div>
	</div>
</body>
</html>

<!-- var a = $("[id ^= matA]").text();
var b = $("[id ^= matB]").text()
$("#c00").append("<span id='calc'>"+a[0]+"*"+b[0]+"<span id='add' class='opacity00'>+</span></span>") 

<span id="formulae"><span id="cij">c[<span id="ci">i</span>][<span id="cj">j</span>]</span> + <span id="aik">a[<span id="ai">i</span>][<span id="ak">k</span>]</span> * <span id="bkj">b[<span id="bk">k</span>][<span id="bj">j</span>]</span></span>;

-->
