<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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
<script src="/secure/lang/c/js-min/ft.min.js"></script>
<title>Insert title here</title>
<style type="text/css">

.box-border {
    border: 1px solid gray;
    border-radius: 8px;
}

.box-height {
	min-height: 500px;
}

.parallelogram {
	height: 56px;
	/* width: 164px; */
	/* width: 250px; */
	min-width: 50%;
	-webkit-transform: skew(-36deg);
	-moz-transform: skew(-36deg);
	-o-transform: skew(-36deg);
	/* display:-moz-stack; */
	display: inline-block;
	border: 2px solid gray;
	box-shadow: 0 1px 2px 0 gray;
	font-family: verdana;
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgba(0, 141, 255, 0.85) 12%, rgba(0, 115, 255, 0.21) 78%)
}

.oval {
	border: 2px solid gray;
	-moz-border-radius: 100px/35px;
	-webkit-border-radius: 100px/35px;
	border-radius: 100px/35px;
	/* display:-moz-stack; */
	display: inline-block;
	box-shadow: 0 1px 2px 0 gray;
	height: 56px;
	width: 168px;
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgba(0, 128, 0, 0.83) 12%, rgba(0, 255, 0, 0.34) 78%); 
}

.stop {
	border: 2px solid gray;
	-moz-border-radius: 100px/35px;
	border-radius: 100px/35px;
	display: inline-block;
	height: 56px;
	width: 168px;
	box-shadow: 0 1px 2px 0 gray;
	/* background-color: rgba(0, 128, 0, 0.34); */
	/* background-color: rgba(255, 165, 0, 0.5); */
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, orange 12%, rgba(255, 165, 0, 0.29) 78%);
}

.rectangle {
	border: 2px solid gray;
	height: 56px;
	/* width : 260px; */
	min-width: 50%;
	box-shadow: 0 1px 2px 0 gray;
	/* display:-moz-stack; */
	display: inline-block;
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgb(222, 222, 18) 12%, rgba(255, 255, 0, 0.23) 78%); 
}

.center {
	margin-left: auto;
	margin-right: auto;
}

.transform-text {
    display: inline-block;
    transform: skew(28deg);
    font-family: verdana;
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
	marker-end: url("#arrowEnd");
	position: relative;
	stroke: gray;
	stroke-width: 2; 
}

#description {
	/* height: 115px; */
	line-height: 1.7;
    padding: 8px;
}

.rhombus {
	border : 2px solid gray;
    height: 70px;
    width: 70px;
    margin: 30px 0;
    transform : rotate(45deg) skew(15deg, 15deg);
    box-shadow: 0 1px 2px 0 gray;
    background-color: pink;
}

.rhombus-boolean {
	border : 2px solid gray;
    height: 70px;
    width: 70px;
    margin: 30px 0;
    /* transform : rotate(45deg) skew(15deg, 15deg); */
}

.rmbsText {
	display: inline-block;
	font-family: verdana;
	font-size: 10px;
	font-weight: bold;
	line-height: 70px;
	transform: rotate(-45deg);
}

.margin20 {
	margin: 20px 0px;
}

.margin-top-bottom {
	margin: 20px 0;
	line-height: 56px;
}

.display-inline-block {
	display: inline-block;
}

.flow-chart-text {
	font-size: 11px;
}

.div-margin-top-bottom {
	margin: 13px 0;
}

.user-btn {
	background-color: green;
	 margin-top: 4px !important;
}

.borderToMainBox {
	border:2px solid gray;
	border-radius: 5px;
}

#flowChartBox {
	min-height: 500px;
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
    /* margin-top: 10px; */
    font-size: 13px;
}

.padding00 {
	padding: 0;
}

.common-expression {
	background-color: black;
	border: 2px solid green;
	border-radius: 6px;
	color: white;
	padding: 2px 2px 3px 5px;
}

.zIndex {
	position: relative;
	z-index: 9999999;
}
</style>
</head>
<body>
<script type="text/javascript">

$(document).ready(function() {
	flowChartTemperatureReady();
});

</script>
<div class="col-xs-12 div-margin-top-bottom padding00" >
	<div class="text-center">
		<h1 id="heading" class="label ct-demo-heading text-center">Temperature in celsius</h1>
	</div>
</div>
<!-- <div class="col-xs-12 text-center padding00" style="margin-top:20px;"><span class="btn btn-warning opacity00" id="restart">Restart</span></div> -->

<div class="col-xs-12 padding00" style="margin-top:5px">
	<div class="col-xs-offset-3 col-xs-6 padding00 borderToMainBox" id="description">
		<ul>
			<li class='opacity00'>The current problem statement is to design a statement for calculating the given temperature in celsius to fahrenheit.</li>
			<li class='opacity00'>Let us design the algorithm and the flow chart which will depict all the steps involved
					in arriving at a required solution for the temperature in celsius to fahrenheit.</li>
			<li class='opacity00'>The formulae for calculating temperature in celsius to fahrenheit <br/><span class='common-expression'>temp_celsius * 9/5 + 32;</span> <a class="introjs-button user-btn" onclick="nextStep();">Next &#8594;</a></li>
		</ul>
	</div>
</div>

<div class="col-xs-12 div-margin-top-bottom padding00">

<!--<div class="col-xs-12 text-center">
		<div id = "algHeading" class="opacity00 col-xs-2 col-xs-offset-2">
			<h4>Algorithm</h4>
		</div>
		<div id = "flowChartHeading" class="opacity00 col-xs-3 col-xs-offset-3">
			<h4>Flowchart</h4>
		</div>
	</div> -->

	

	<!-- <div id="algorithmBox" class="col-xs-offset-1 col-xs-4 box-border box-height opacity00">
	<div class="col-xs-12 text-center div-margin-top-bottom padding00"><h1 class="label ct-demo-heading">Algorithm</h1></div>
		<ul id="algorithmPoints"  style="margin-top: 15px; font-size: 15px; line-height: 32px;">
			<li class="opacity00">START</li>
			<li class="opacity00">Read temp_celsius</li>
			<li class="opacity00">Calculate temp_fahrenheit = temp_celsius * 9/5 + 32</li>
			<li class="opacity00">Calculate Average = (Total / 3 * 100) </li>
			<li class="opacity00">Print "temp_fahrenheit" </li>
			<li class="opacity00">STOP</li>
		</ul>
	</div> -->

		<div id="flowChartBox"	class="col-xs-offset-1 col-xs-10 padding00 borderToMainBox opacity00">
			<div id="flowChartExp" class="col-xs-12 padding00">
			<!-- <div class="col-xs-12 text-center div-margin-top-bottom padding00"><h1 class="label ct-demo-heading">FlowChart</h1></div> -->
				<div id = "stepsToEval" class="col-xs-5 padding00" style="margin-top: 25px">
					<div class="col-xs-12" style="">
						<div class="col-xs-3 opacity00"><span class="step-arrow">&nbsp;&nbsp;Step 1 :</span></div>
						<div class="step-explanation col-xs-8 col-xs-offset-1 opacity00"><span class="opacity00">Let us start the program by analysing the given requirement.</span></div>
					</div>
					<div class="col-xs-12"  style="margin-top: 55px">
						<div class="col-xs-3 opacity00"><span class="step-arrow">&nbsp;&nbsp;Step 2 :</span></div>
						<div class="step-explanation col-xs-8 col-xs-offset-1 opacity00">Read the input from the user as temp_celsius.</div>
					</div>
					<!-- <div class="col-xs-12"  style="margin-top: 55px">
						<div class="col-xs-2 opacity00"><span class="step-arrow">&nbsp;&nbsp;Step3:</span></div>
						<div class="step-explanation col-xs-9 col-xs-offset-1 opacity00">
							In the process since we have to iterate from 1 to the given input number and finally we have to generate an output let us initialize two variables fact and i.
						</div>
					</div> -->
					
					<div class="col-xs-12" style="margin-top: 55px">
						<div class="col-xs-3 opacity00"><span class="step-arrow">&nbsp;&nbsp;Step 3 :</span></div>
						<div class="step-explanation col-xs-8 col-xs-offset-1 opacity00">
							As a step in the processing for calculating the temperature fahrenheit.
						</div>
					</div>
					
					<div class="col-xs-12" style="margin-top: 55px">
						<div class="col-xs-3 opacity00"><span class="step-arrow">&nbsp;&nbsp;Step 4 :</span></div>
						<div class="step-explanation col-xs-8 col-xs-offset-1 opacity00">
							Let us print the calculated temperature fahrenheit.
						</div>
					</div>
					
					<div class="col-xs-12" style="margin-top: 55px">
						<div class="col-xs-3 opacity00"><span class="step-arrow">&nbsp;&nbsp;Step 5 :</span></div>
						<div class="step-explanation col-xs-8 col-xs-offset-1 opacity00">
							After printing the required output the program terminates.
						</div>
					</div>
				</div>
			
			<div id="flowChartBoxChild" class="col-xs-7 text-center padding00">
					<div class="col-xs-12 text-center margin-top-bottom ">
						<div id="step1" class="oval opacity00"><span class="flow-chart-text"><b>Start</b></span></div>
					</div>
					
					<div class="col-xs-12 text-center">
						<div id="step2" class="parallelogram margin-top-bottom opacity00">
							<span class="transform-text"><span class="flow-chart-text"><b>Read</b> temp_celsius</span></span>
						</div>
					</div>
					
					 <!-- <div class="col-xs-12 text-center">
						 <div id="step3" class="center text-center rectangle margin-top-bottom opacity00">
						 	<span class="flow-chart-text">Total = maths_marks + computers_marks + science_marks</span>
						 </div> 
					</div> -->
					
					<div class="col-xs-12 text-center">
						 <div id="step3" class="center text-center rectangle margin-top-bottom opacity00">
						 	<span class="flow-chart-text">temp_fahrenheit = temp_celsius * 9/5 + 32 </span>
						 </div> 
					</div>  
					
					<div class="col-xs-12 text-center">
						<div id="step4" class="parallelogram margin-top-bottom opacity00">
							<span class="transform-text"><span class="flow-chart-text"><b>Print</b> temp_fahrenheit</span></span>
						</div>
					</div>
					
					<div class="col-xs-12 text-center">
						<div id="step5" class="center text-center stop margin-top-bottom opacity00" style="">
							<span class="flow-chart-text"><b>Stop</b></span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 text-center div-margin-top-bottom padding00"><span class="btn btn-warning opacity00 zIndex" id="restart">Restart</span></div>
	</div>
</body>
</html>
