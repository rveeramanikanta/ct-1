<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<link rel="stylesheet" href="/css/bootstrap.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">
<link rel="stylesheet" href="/css/font-awesome-animation.min.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script type="text/javascript" src="/js/intro.js"></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src="/secure/lang/c/js-min/ro.min.js"></script>

<title>relational-operators</title>
<style type="text/css">
.border {
	border: 2px solid gray;
	border-radius: 15px;
	min-height: 165px;
}

.animation-div-border {
	height: 320px;
	font-family: monospace;
}

.table-border {
	border: 2px solid gray;
	padding: 4px 6px;
}

.background-color {
	background-color: lavender;
}

.margin-top20 {
	margin-top: 20px;
}

.margin-top06 {
	margin-top: 6px;
}

.input-text {
	border: 2px solid orange;
	text-align: center;
	border-radius: 5px;
	width: 18%;
}

.line-div {
	border: 1px solid gray;
}

.nextButton {
	background-color: green;
}

th {
	text-align: center;
}

table {
	table-layout: fixed;
	text-align: center;
	width: 100%;
}

td, th {
    padding: 2px;
    width: 2%;
}

.reveal-right {
	position: relative;
	overflow: hidden;
	-moz-animation: reveal-right 1s ease;
	-moz-animation-fill-mode: forwards; 
}

.inputBox {
	height: 26px;
	width: 9%;
}

.inputWidth {
	width: 19%;
	text-align: center;
}


@-moz-keyframes reveal-right {
	0%   {width: 0%;}
	100% {width: 100%;}
}

.position-relative {
	position: relative;
	display: inline-block;
}

.next-button {
	background-color: green !important; 
	border: 1px solid #d4d4d4;
    border-radius: 0.2em;
    /* color: #333;*/
    cursor: pointer; 
    display: inline-block;
    font: 11px sans-serif;
    padding: 3px;
}
.blinking-circle {
	border: 1px solid red;
	border-radius : 50%;
	padding: 2px 3px;
}

.padding0 {
	padding: 0;
}

#animationDiv {
	background-color: #eeeefe;
}

#operatorAnimation {
	background-color: #fffbf5;
	font-family: monospace;
}

#selectList {
	color: #FF308F;
	text-align: center;
}

.length-error-text {
	color: red;
}

.zIndex9999999 {
	z-index: 9999999;
	position: relative;
}

.ct-code-b-green {
	color: green;
    font-family: monospace;
    font-weight: bold;
}

.dropdown, .dropup {
    display: inline-block;
    position: relative;
}

.dropDown-btn {
    font-family: monospace;
    padding: 2px 8px;
}

ul {
	margin-top: 8px;
}

#initialize {
	font-family: monospace;
}

.padding3 {
	padding: 3px;
}
</style>
<script type="text/javascript">
	$(document).ready(function() {
		relationalOperatorsReady();
	});
</script>
</head>
<body>
	<div class="col-xs-12">
		<h2 class="text-center">
			<span class="label label-default ct-demo-heading">Relational Operators</span>
		</h2>
		<div id="informationDiv" class="col-xs-offset-2 col-xs-8 border margin-top20 background-color padding0"></div>
		<div class="col-xs-offset-4 col-xs-4 border margin-top20 visibility-hidden" id="animationDiv">
		<div class="col-xs-12 padding0">
			<div class="col-xs-12 padding0">
				<div class="col-xs-12">
					<div class="margin-top06" id="initialize"><span>int&nbsp;</span><span>num1</span> = <span><input maxlength=2 type="text" placeholder="eg:6" id='firstNum' class='inputWidth'></span>,
				 	<span>num2</span> = <span><input maxlength=2 type="text" id='secondNum' placeholder="eg:6" class='inputWidth'></span>;</div>
				 </div>
				 <div class="col-xs-12 margin-top06" id="selectDiv">
					<div class="col-xs-12 margin-top06"><span>Relational Operator:</span>
				 		<%-- <span>
					 			<select id='selectList'>
					 				<option value="0" selected>--select--</option>
									<option value=">"> > </option>
									<option value="<"> < </option>
									<option value=">="> >= </option>
									<option value="<="> <= </option>
									<option value="=="> == </option>
									<option value="!="> != </option>
								</select>
							</span> --%>
							<div class="dropdown dropdown-select">
							    <button class="btn btn-primary dropdown-toggle dropDown-btn" type="button" data-toggle="dropdown">--select--
							    <span class="caret"></span></button>
							    <ul class="dropdown-menu" style="text-align: center;">
							      <li><a class="dropdown-item"> > </a></li>
							      <li><a class="dropdown-item"> < </a></li>
							      <li><a  class="dropdown-item"> >= </a></li>
							      <li><a  class="dropdown-item"> <= </a></li>
							      <li><a class="dropdown-item"> == </a></li>
							      <li><a class="dropdown-item"> != </a></li>
							    </ul>
						  </div>
					</div>
					<div class='col-xs-12 text-center' style="margin-top: 4px; margin-left: 15px;"><button type="button" id='submit'  class="btn btn-success padding3">&nbsp;Evaluate&nbsp;</button></div>
				</div>
				</div>
				<div class="col-xs-12">
					<div id='operatorAnimation' class='margin-top20' style='height:135px;border:1px solid gray;margin-bottom: 10px;border-radius: 10px;'></div>
				</div>	
			</div>
		</div>
		<!-- <div class="col-xs-12 margin-top20 text-center">
			<span class="btn btn-warning opacity00" id="restart">Restart</span>
		</div> -->
	</div>
</body>
</html>
