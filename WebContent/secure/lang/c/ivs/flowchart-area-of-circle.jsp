<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> -->
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/font-awesome.min.css" />
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css" />
<link rel="stylesheet" href="/css/animate.css" />
<link rel="stylesheet" href="/css/custom-styles.css" />
<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenLite.min.js" type="text/javascript"></script>
<script src="/js/gs/TimelineLite.min.js" type="text/javascript"></script>
<script src="/secure/lang/c/js-min/faoc.min.js" type="text/javascript"></script>

<title>Insert title here</title>
<style type="text/css">
.padding00 {
	padding: 0;
}

.borderToMainBox {
	border:2px solid gray;
	border-radius: 5px;
}

.div-margin-top-bottom {
	margin: 13px 0;
}

.oval {
	border: 2px solid gray;
	-moz-border-radius: 100px/35px;
	border-radius: 100px/35px;
	display: inline-block;
	height: 56px;
	width: 168px;
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgba(0, 128, 0, 0.83) 12%, rgba(0, 256, 0, 0.34) 78%) repeat scroll 0 0; 
	box-shadow: 0 1px 2px 0 gray;
}

.margin-top-bottom {
	margin: 15px 0;
	line-height: 56px;
}

.rectangle {
	border: 2px solid gray;
	height: 56px;
	width: 168px;
	display: inline-block;
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgb(222, 222, 18) 12%, rgba(255, 255, 0, 0.23) 78%);
	box-shadow: 0 1px 2px 0 gray;
}

.rhombus {
	border : 2px solid gray;
    height: 70px;
    width: 70px;
    margin: 30px 0; 
    transform : rotate(45deg) skew(15deg, 15deg);
	background-color: pink;
}


.parallelogram {
	height: 56px;
	width: 164px;
	-webkit-transform: skew(-36deg);
	-moz-transform: skew(-36deg);
	transform: skew(-36deg);
	display: inline-block;
	border: 2px solid gray;
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgba(0, 141, 255, 0.85) 12%, rgba(0, 115, 255, 0.21) 78%);
	box-shadow: 0 1px 2px 0 gray;
}

.transform-text {
    display: inline-block;
    transform: skew(28deg);
}

.svg-css {
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


#flowChartBox {
	min-height: 560px;
}

#description {
    padding: 8px;
    font-family: monospace;
}

.step-arrow {
	background-color: #a1126c;
	height: 30px;
	line-height: 30px;
	display: table-row-group;
	border-bottom-left-radius: 8px;
	border-top-left-radius: 8px;
	color: white;
}

.step-arrow::after {
	color: #a1126c;
	border-left: 15px solid;
	border-top: 15px solid transparent;
	border-bottom: 15px solid transparent;
	content: ' ';
	position: absolute;
}

.step-explanation {
    background-color: #fffae6;
    border: 2px solid green;
    border-radius: 8px;
    line-height: 1.4;
}

.user-btn {
	background-color: green;
	margin-top: 4px !important;
}

.center {
	margin-left: auto;
	margin-right: auto;
	display: block;
}

#step5 {
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, orange 12%, rgba(255, 165, 0, 0.29) 78%);
}

.b-green {
	font-family: monospace;
	font-weight: bold;
	color: green;
}

.zIndex {
	z-index: 10000000 !important;
	position: relative;
}

.step-padding {
	padding: 0px 3px;
}

</style>
<script type="text/javascript">
	$(document).ready(function() {
		flowchartAreaOfACircleReady();
	});
</script>
</head>
<body>
<div class="col-xs-12 div-margin-top-bottom padding00" >
	<div class="text-center">
		<h1 id="heading" class="label ct-demo-heading text-center">Area Of Circle</h1>
	</div>
</div>

<div class="col-xs-12 padding00" style="margin-top: 10px;">
<div id="description" class="col-xs-offset-3 col-xs-6 borderToMainBox padding00">
	<ul>
		<li id="desText1" class='opacity00'>Let us learn how to design a flowchart and the related algorithm for calculating an area of a <span class="b-green">circle</span>, given the <span class="b-green">radius</span>.</li>
		<li id="desText2" class='opacity00'>The flowchart and the algorithm will depict the various steps involved in arriving at a required solution for calculating the area of a <span class="b-green">circle</span>.</li>
		<li id="desText3" class='opacity00'>The formula for calculating the area of a circle is:<br> area = &Pi; r<sup>2</sup> =  3.14 * r * r <a class="introjs-button user-btn user-next" onclick="nextStep()">Next &#8594;</a></li>
	</ul>
</div>
</div>
<div class="col-xs-12 div-margin-top-bottom padding00">
	<div id="flowChartBox" class="col-xs-offset-1 col-xs-10 padding00 borderToMainBox">
		<div class="col-xs-12 padding00">
			<div class="col-xs-4 padding00" style="margin-top: 16px;">
				<div class="col-xs-12">
					<div class="col-xs-3 step-padding">
					<span id="stepArrow1" class="step-arrow opacity00">&nbsp; &nbsp;Step 1 :</span>
					</div>
					
					<div id="algorithm1" class="step-explanation col-xs-8 col-xs-offset-1 opacity00"></div>
				</div>
				<div class="col-xs-12" style="margin-top: 55px;">
					<div class="col-xs-3 step-padding">
						<span id="stepArrow2" class="step-arrow opacity00">&nbsp; &nbsp;Step 2 :</span>
					</div>
					
					<div id="algorithm2" class="step-explanation col-xs-8 col-xs-offset-1 opacity00"></div>
				</div>
				<div class="col-xs-12" style="margin-top: 55px;">
					<div class="col-xs-3 step-padding">
						<span id="stepArrow3" class="step-arrow opacity00">&nbsp; &nbsp;Step 3 :</span>
					</div>
					
					<div id="algorithm3" class="step-explanation col-xs-8 col-xs-offset-1 opacity00"></div>
				</div>
				<div class="col-xs-12" style="margin-top: 55px;">
					<div class="col-xs-3 step-padding">
						<span id="stepArrow4" class="step-arrow opacity00">&nbsp; &nbsp;Step 4 :</span>
					</div>
					
					<div id="algorithm4" class="step-explanation col-xs-8 col-xs-offset-1 opacity00"></div>
				</div>
				<div class="col-xs-12" style="margin-top: 55px;">
					<div class="col-xs-3 step-padding">
						<span id="stepArrow5" class="step-arrow opacity00">&nbsp; &nbsp;Step 5 :</span>
					</div>
					<div id="algorithm5" class="step-explanation col-xs-8 col-xs-offset-1 opacity00"> </div>
				</div>
			</div>
			
			<div id="flowChartBoxChild" class="col-xs-8">
				<div id="step1" class="center text-center oval opacity00"
				style="margin-top: 10px; line-height: 56px;">Start</div>
				
				<div id="svgArrow1" class="center text-center"
				style="height: 56px;"></div>
				
				<div id="step2" class="center text-center parallelogram opacity00"
					style="line-height: 56px;">
					<span class="transform-text">Read radius</span>
				</div>
				
				<div id="svgArrow2" class="center text-center"
				style="height: 56px;"></div>
				
				<div id="step3" class="center text-center rectangle opacity00"
					style="line-height: 56px;">area = 3.14 * r *
					r</div>
					
				<div id="svgArrow3" class="center text-center"
				style="height: 56px;"></div>
					
				<div id="step4" class="center text-center parallelogram opacity00"
					style="line-height: 56px;">
					<span class="transform-text">Print area</span>
				</div>
				
				<div id="svgArrow4" class="center text-center"
				style="height: 56px;"></div>
				
				<div id="step5" class="center text-center oval opacity00"
					style="line-height: 56px;">Stop</div>
			</div>	
		</div>
	</div>
</div>
<div class="col-xs-12 text-center" style="margin-top: 20px;"><span id="restart" class="btn btn-warning opacity00">Restart</span></div>
</body>
</html>