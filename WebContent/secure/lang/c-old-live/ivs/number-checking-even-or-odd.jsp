<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src='/js/intro.js'></script>
<link rel="stylesheet" href="/css/font-awesome.min.css">
<script src='/secure/lang/c/js-min/nceoo.min.js'></script>

<title>if else In Action</title>
<style type="text/css">

.infoDiv {
	background-color: rgb(243, 235, 235);
	border-radius: 10px;
	font-size: 15px;
	padding: 11px 12px;
}

.margin-top-1 {
	margin-top: 1%;
}

.margin-top-2 {
	margin-top: 2%;
}

.margin-top-5 {
	margin-top: 5%;
}

.border {
	background-color: #f2f9d7;
	border: 1px solid;
	border-radius: 13px;
	height: 160px;
}

.z-index9999999 {
	background-color: white;
	z-index: 9999999 !important;
}

.user-btn {
	background-color: green;
}

.display-inline {
	display: inline-block;
}

.background-effect {
	color: black;
	background-color: yellow;	
}

.ct-color-orangered {
	color: orangered;
}

.border-css {
	border: 1px solid lightgray;
	border-radius: 10px;
	padding: 3px;
}

.border-css-main {
	border: 1px solid green;
	border-radius: 10px;
	padding: 3px;
}

.ct-color-red {
	color: red;
}

.ct-code-b-teal {
	color: teal;
}

.ct-code-b-green {
	color: green;
}

.ct-demo-mediumblue {
	color: mediumblue;
}

.ct-color-teal {
	color: teal;
}

.integer-number {
	outline: medium none navy;
}

.ui-effects-transfer {
	border: 1px solid green;
	z-index: 9999999 !important;
	opacity: 1;
}

pre {
	border: 1px;
	-moz-tab-size: 3;
	tab-size: 3;
}

div, span {
	position: relative;
}

.blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: 2;
 }

@keyframes blink {
	50% {
		background: turquoise;
	}
}

.popover-content {
	background-color: lightgray;
	color: black;
	min-height: 28px;
}

.popover {
	z-index: 9999996;
	/* width: 100px; */
}

.blinking-once {
	animation-name: blinking;
	animation-duration: 1s;
	animation-iteration-count: 1;
 }

@keyframes blinking {
	50% {
		background: orange;
	}
}

td {
	width: 20px;
}

.panel-heading {
	padding: 2px;
}
.panel-body {
	padding: 18px;	
}

.panel-group {
	margin-top: 3px;
	margin-bottom: 7px;
}

.font-family {
	font-family: monospace;
}

.cream-color-gold {
	background-color: #fffae6;
}

.user-btn-restart {
	background-color: #e99211;
}

</style>

</head>
<body>
<div class="col-xs-12">
<div class="col-xs-offset-2 col-xs-8">
	<div class="text-center margin-top-2">
		<h3 class='label ct-demo-heading'>
			<span>Example With if-else</span>
		</h3>
	</div>
	<div class="col-xs-12 margin-top-2 infoDiv" id="infoDiv">
		<span id="list1" class="opacity00">To determine a given number is even or odd we divide the given number by 
			<span id="multiplyId">2</span> and consider it as <span class="ct-code-b-green">even number</span> if the remainder is 0 
			otherwise consider it as <span class="ct-code-b-green">odd number</span>.
			<span id='nextButton' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span>
		</span>
	</div>
	<div class="col-xs-12 margin-top-1">
		<div class="col-xs-5 col-xs-offset-1 margin-top-2">
			<div class="col-xs-12 border-css opacity00" id="oddNumberExample">
				<div class="col-xs-12">
					<div class="margin-top-2">
						<div class="col-xs-12 text-center" id="memoryBox">
							<div class="panel-group" id="panelBox">
								<div class="panel panel-info">
									<div class="panel-heading"><b>odd number</b></div>
									<div class="panel-body" id="panelBody">
										<table align="center">
											<tr>
												<td><span class="opacity00" id="multiplyNumber1">2</span></td>
												<td><span class="opacity00" id="openBrace1">)</span></td>
												<td><span class="opacity00" id="oddNumber"><span id="oddNumberId">45</span></span></td>
												<td><span class="opacity00" id="closedBrace1">(</span></td>
												<td><span class="opacity00" id="quotient1">22</span></td>
											</tr>
										</table>
										<div class="col-xs-12 text-center">
											<span class="opacity00 display-inline" id="calculation1">2 x 22</span>
										</div>
										<div class="col-xs-12 text-center">
											<div class="col-xs-4 col-xs-offset-4 opacity00" id="borderTop1" style="border-top: 2px solid;"></div>
											<div id="reminder1" class="col-xs-12 text-center">
												<span id="reminder1PopOver" class="display-inline opacity00">
													<span class="opacity00" id="firstNumber">45</span> - <span class="opacity00" id="secondNumber">44</span>
												</span>
											</div>
										</div>
									</div>
								</div>
				 			</div>
						</div>
					</div>
				</div>
				<div class="col-xs-12">
					<div class="col-xs-offset-4 margin-top-2 opacity00" id="resultStep1">
						<span class="display-inline" id="modulusId1">45 % 2</span> <span class='opacity00' id='equalZero1'>== 1</span>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-5 margin-top-2">
			<div class="col-xs-12 border-css opacity00" id="evenNumberExample">
				<div class="col-xs-12">
					<div class="margin-top-2">
						<div class="col-xs-12 text-center" id="memoryBox">
							<div class="panel-group" id="panelBox">
								<div class="panel panel-info">
									<div class="panel-heading"><b>even number</b></div>
									<div class="panel-body" id="panelBody">
										<table align="center">
											<tr>
												<td><span class="opacity00" id="multiplyNumber2">2</span></td>
												<td><span class="opacity00" id="openBrace2">)</span></td>
												<td><span class="opacity00" id="evenNumber"><span id="evenNumberId">78</span></span></td>
												<td><span class="opacity00" id="closedBrace2">(</span></td>
												<td><span class="opacity00" id="quotient2">34</span></td>
											</tr>
										</table>
										<div class="col-xs-12 text-center">
											<span class="opacity00 display-inline" id="calculation2">2 x 34</span>
										</div>
										<div class="col-xs-12 text-center">
											<div class="col-xs-4 col-xs-offset-4 opacity00" id="borderTop2" style="border-top: 2px solid;"></div>
											<div id="reminder2" class="col-xs-12 text-center">
												<span id="reminder2Span" class="display-inline opacity00">
													<span class="opacity00" id="firstNumberEven">78</span> - <span class="opacity00" id="secondNumberEven">78</span>
												</span>
											</div>
										</div>
									</div>
								</div>
			 				</div>
						</div>
						<div class="col-xs-12">
							<div class="col-xs-offset-4 margin-top-2 opacity00" id="resultStep2">
								<span class="display-inline" id="modulusId2">78 % 2</span> <span class='opacity00' id='equalZero2'>== 0</span></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-10 col-xs-offset-1">
		<div class="col-xs-12 margin-top-2 border-css-main opacity00 cream-color-gold" id="totalDiv">
			<div class="col-xs-7 margin-top-2 opacity00 font-family" id="conditionDiv" style="border-radius: 10px;">
				<div id="variablesId" class="display-inline">int number = 
					<div class="ct-color-teal integer-number display-inline" id="integerNumber" MaxLength="4" contenteditable="false">254</div>;
				</div>
<pre id="preCode" class="cream-color-gold">
<span id="ifLine" class="opacity00">if (<span id="ifCondition"><span class='display-inline' id="remainderValue">number % 2</span> == 0</span>) {</span>
	<span id="print1" class="opacity00">printf("%d is even number.", number);</span>
<span id="elseLine" class="opacity00">} else {</span>
	<span id="print2" class="opacity00">printf("%d is odd number.", number);</span>
<span id="closeCurlyBrace" class="opacity00">}</span>
</pre>
			</div>
			<div class="col-xs-5">
				<div class="opacity00 margin-top-2 text-center" id="remainderExecution">
					<span class="display-inline" id="remainderExecutionSpan">number</span> % <span id="multiplyNumber3">2</span> == 0&nbsp;
					<span id="fontCheck"></span>
				</div>
				<div class="col-xs-12 text-center opacity00" id="executionDiv">
					<div class="panel-group" id="panelBox">
						<div class="panel panel-info">
							<div class="panel-heading cream-color-gold"><b>Division</b></div>
							<div class="panel-body cream-color-gold" id="panelBody" style="min-height: 100px;">
								<table align="center">
									<tr>
										<td><span class="opacity00" id="multiplyNumber4">2</span></td>
										<td><span class="opacity00" id="openBrace3">)</span></td>
										<td><span class="opacity00" id="inputNumber"><span id="inputNumberId"></span></span></td>
										<td><span class="opacity00" id="closedBrace3">(</span></td>
										<td><span class="opacity00" id="quotient3"></span></td>
									</tr>
								</table>
								<div class="col-xs-12 text-center">
									<span class="display-inline" id="calculation3"></span>
								</div>
								<div class="col-xs-12 text-center">
									<div class="col-xs-4 col-xs-offset-4 opacity00" id="borderTop3" style="border-top: 2px solid;"></div>
									<div id="reminder3" class="col-xs-12 text-center">
										<span id="reminder3Span" class="display-inline opacity00">
											<span class="opacity00" id="inputFirstNum"></span> - <span class="opacity00" id="inputSecondNum"></span>
										</span>
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
</body>
<script type="text/javascript">
	$(document).ready(function() {
		numberCheckingEvenOrOddReady();
	});
</script>
</html>