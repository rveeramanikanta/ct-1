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

<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenLite.min.js" type="text/javascript"></script>
<script src="/js/gs/TimelineLite.min.js" type="text/javascript"></script>
<script src="/secure/lang/c/js-min/pds.min.js" type="text/javascript"></script>

<title>Insert title here</title>
<style type="text/css">

.box-shadow {
    box-shadow: 0 5px 6px 0;
    font-weight: bold;
    background-color: rgb(176, 196, 222);
}

.box-border {
    border: 1px solid gray;
    border-radius: 8px;
}

.box-height {
	height: 555px;
}

.user-btn {
	background-color: green;
	margin-top: 2px !important;
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

.text-font {
	font-size: 12px;'
}

.introjs-tooltip {
	min-width: 300px;
}

.box-padding {
	padding: 12px;
}

.ui-effects-transfer {
    border: 1px solid blue;
    z-index: 99999999 !important;
}

.zIndex {
	z-index: 10000000 !important;
	position: relative;
	background-color: #f0f0f0;
	font-family: monospace;
}

.ui-effects-transfer {
	z-index: 99999999;
	border: 1px solid blue;
	border-radius: 4px;
}
</style>
</head>
<body>

<script type="text/javascript">
	$(document).ready(function() {
		programDevelopmentStepsReady();
	});
</script>

<div class="text-center col-xs-12" style="margin-top: 20px;">
		<h1 id="heading" class="label ct-demo-heading text-center">Program Developing Steps</h1>
</div>

	<div class="col-xs-12" style="margin-top: 30px;">
		<div id="phaseDiv" class="col-xs-offset-1 col-xs-4 box-border box-height opacity00">
			<div>
				<div id="phase1" class="col-xs-12 text-center opacity00"
					style="height: 50px; margin-top: 15px; line-height: 50px;">
					<span id="step1" class="box-border box-shadow box-padding">Specify the problem</span>
				</div>

				<div id="phase2" class="col-xs-12 text-center opacity00"
					style="height: 50px; margin-top: 40px; line-height: 50px;">
					<span id="step2" class="box-border box-shadow box-padding">Analysis</span>
				</div>
				
				<div id="phase3" class="col-xs-12 text-center opacity00"
					style="height: 50px; margin-top: 40px; line-height: 50px;">
					<span id="step3" class="box-border box-shadow box-padding">Design</span>
				</div>
				 
				<div id="phase4" class="col-xs-12 text-center opacity00"
					style="height: 50px; margin-top: 40px; line-height: 50px;">
					<span id="step4" class="box-border box-shadow box-padding">Coding</span>
				</div>
				
				<div id="phase5" class="col-xs-12 text-center opacity00"
					style="height: 50px; margin-top: 40px; line-height: 50px;">
					<span id="step5" class="box-border box-shadow box-padding">Testing</span>
				</div>
				<div id="phase6" class="col-xs-12 text-center opacity00"
					style="height: 50px; margin-top: 40px; line-height: 50px;">
					<span id="step6" class="box-border box-shadow box-padding">Maintenance</span>
				</div>
			</div>
		</div>
		
		<div id="discriptionDiv"
			class="col-xs-offset-1 col-xs-5 box-border box-height opacity00">

			<div id="descriptionPhase1" class="opacity00 des-text">
				<h6 style="font-weight: bold; color: green;">Specify the problem : </h6>
				<div class="text-font">
					This step involves in trying to understand the statement of the given problem.
				</div>
			</div>

			<div id="descriptionPhase2" class="opacity00 des-text">
				<h6 style="font-weight: bold; color: green;">Analysis Phase: </h6>
				<div class="text-font">
					The analysis phase involves in identifying the various 
					inputs that are required and the output that is expected by the problem.
				</div>
			</div>

			<div id="descriptionPhase3" class="opacity00 des-text">
				<h6 style="font-weight: bold; color: green;">Designing Phase: </h6>
				<div class="text-font">
					The design phase involves a sequence of steps that will allow us to take the given input to get the required output.
					 A flow chart or some other tool can be used to pictorially represent the design step by step.
				</div>
			</div>

			<div id="descriptionPhase4" class="opacity00 des-text">
				<h6 style="font-weight: bold; color: green;">Coding Phase: </h6>
				<div class="text-font">
					The coding phase involves translating the steps identified in 
					 the design phase into a machine readable code(program) which is executed to produce the required output. 
					 A program is written in a programming language(machine readable code).
				</div>
			</div>

			<div id="descriptionPhase5" class="opacity00 des-text">
				<h6 style="font-weight: bold; color: green;">Testing Phase: </h6>
				<div class="text-font">
					The testing phase involves verifying if the output received in the coding phase, is the required output using the given input.
				</div>
			</div>

			<div id="descriptionPhase6" class="opacity00 des-text">
				<h6 style="font-weight: bold; color: green;">Maintenance Phase: </h6>
				<div id="lastPhase" class="text-font">
					A software program that is developed and tested is moved to real time. Any changes required to this 
					 program involves in adding small updates. This is the maintenance phase. 
				</div>
			</div>

		</div>
	</div>
	<div class="col-xs-12 text-center" style="margin-top: 20px;"><span id="restart" class="btn btn-warning opacity00">Restart</span></div>
</body>
</html>