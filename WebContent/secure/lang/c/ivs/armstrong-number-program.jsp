<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css" >
<link rel="stylesheet" href="/css/introjs-ct.css" >
<link rel="stylesheet" href="/css/animate.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/secure/lang/c/js/armstrong-number-program.js"></script>

<title>armstrong-number.jsp</title>

<style type="text/css">
.introjs-tooltiptext br {
	margin: 8px;
}

.introjs-tooltip {
	min-width: 300px;
}

.introjs-tooltip-min-width-custom {
	min-width: -moz-max-content;
}

.introjs-duplicate-nextbutton {
	background-color: green;
	margin: 0 !important;
}

.box-border {
	border-radius: 12px;
	border: 2px solid gray;
}

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}

div,span {
	position: relative;
}

.creamPreTab4 {
    margin: 8px;
    padding: 10px;
    font-size: 13px;
    white-space: pre;
	-moz-tab-size: 6;
    border-radius: 8px;
}

#armstrongDefinition {
	margin-bottom: 12px;
}

#algorithmStepsDiv {
	background: lemonchiffon none repeat scroll 0 0;
}

[contenteditable="true"] {
    outline: medium none;
}

.ui-effects-transfer {
    border: 1px solid blue;
    z-index: 99999999 !important;
 }

 .blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: infinite;
 }

@keyframes blink {
	50% {
		background: lightgreen;
	}
}

.position {
	position: relative;
	display: inline-block;
}

.z-index1000000 {
	position: relative;
	background-color: white;
	z-index: 1000000 !important;
}

.ct-code-b-red {
	font-weight: bold;
	font-family: monospace;
	color: rgb(252, 66, 66);
}

.ct-code-b-green {
	font-weight: bold;
	font-family: monospace;
	color: green;
}

.ct-code-b-blue {
	font-weight: bold;
	font-family: monospace;
	color: blue;
}

.ct-code-b-green {
	font-weight: bold;
	font-family: monospace;
	color: green;
}

.ct-code-green {
	color: green;
	font-family: monospace;
}

#algorithmDiv {
	margin-top: 12px;
}

#outputDiv {
	margin-top: 20px;
	padding: 0px;
	z-index: 9999999;
}

.output-console-title-bar {
 	border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

#algorithmDiv {
	-moz-tab-size: 2;
    tab-size: 2;
    background-color: #fffae6;
    border-radius: 9px;
    font-family: monospace;
    font-size: 13px;
    margin-top: 12px;
}

#output {
	padding: 1px;
	font-family: monospace;
}

.output-console-body {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 10px;
}

.padding00 {
	padding: 0px;
}

#notNumberExplanation > span {
    padding: 10px;
}

#notArmstrongExample {
	min-height: 145px;
}

</style>
</head>
<body>
	<div class="col-xs-12">
		<div class="ct-box-main">
			<div class="text-center">
				<h1 class="label ct-demo-heading text-center">Armstrong Number in Action</h1>
			</div>
			<div class='buttons-div'>
				<button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button>
			</div>
			<div class="col-xs-12">
				<div id="armstrongDefinition" class="col-xs-6 col-xs-offset-3" style="font-family: monospace;">
				<ul><li id="text1" class="opacity00">An <span class = "ct-code-b-green">armstrong</span> number is a number which is the
				 	<span class="ct-code-b-green">sum</span> of its digits each raised to the
				  	<span class="ct-code-b-green">power</span> of the <span class = "ct-code-b-green">number of digits.</span></li>
				    <li id="text2" class="opacity00">For example, <span class = "ct-code-b-green">153  = 1<sup>3</sup> + 5<sup>3</sup> + 3<sup>3</sup></span>, Similarly
				    	<span class = "ct-code-b-green">1634  = 1<sup>4</sup> + 6<sup>4</sup> + 3<sup>4</sup> + 4<sup>4</sup></span>.
					<a class="introjs-button introjs-duplicate-nextbutton opacity00">Next &#8594;</a></li></ul>
				</div>
			</div>
			<div class="col-xs-12">
				<div class="col-xs-6" id="code">
					<br><div id="algorithmDiv"  class="col-xs-12 margin-top opacity00">
						<div class="opacity00" id="enterArmstrongNumber">int number = <div style="display:inline-block" id="armstrongNumber" class="allowNumbers ct-code-green" maxlength="2" contenteditable="true">153</div> , remainder, copy_of_numbers, sum=0;</div>
						<br><div class="opacity00" id = "StoreValueInToTemp">copy_of_numbers = <span id="number" class="position">number</span>;<br><br></div>
						<div class="col-xs-12 opacity00" id="whileLoop1">
							while(<span id="condition">number != 0</span>)&nbsp;&nbsp;{<br>
								<span id="remainderDiv">&emsp;&emsp;remainder = number % 10;</span><br>
								<span id="numberDiv">&emsp;&emsp;number = number / 10;</span><br>
								<span id="sumDiv">&emsp;&emsp;sum = sum + (remainder*remainder*remainder);</span><br>
							}<br>
							<span id="ifConditionDiv">if (sum == copy_of_numbers) {</span><br>
								&emsp;&emsp;<span id="trueStatement">printf("%d is an Armstrong number", copy_of_numbers);</span><br>
							} else {<br>
								&emsp;&emsp;<span id="falseStatement">printf("%d is not an Armstrong number", copy_of_numbers);</span><br/>
							}
						</div>
					</div>
				</div>
				<div class="col-xs-5">
				<div class="col-xs-12">
						<br><div id="algorithmStepsDiv"  class="col-xs-12 box-border margin-top opacity00">
							<div class="col-xs-12 padding00">
								<div class="col-xs-2 opacity00" id="step1">Step1:</div>
								<div class="col-xs-10 padding00 loop-font-size" id="whileLoopStep1"></div>
							</div>
							<div class="col-xs-12 padding00">
								<div class="col-xs-2 opacity00" id="step2">Step2:</div>
								<div class="col-xs-10 padding00 loop-font-size" id="whileLoopStep2"></div>
							</div>
							<div class="col-xs-12 padding00">
								<div class="col-xs-2 opacity00" id="step3">Step3:</div>
								<div class="col-xs-10 padding00 loop-font-size" id="whileLoopStep3"></div>
							</div>
							<div class="col-xs-12 padding00">
								<div class="col-xs-2 opacity00" id="step4">Step4:</div>
								<div class="col-xs-10 padding00 loop-font-size" id="whileLoopStep4"></div>
							</div>
							<div class="col-xs-12 padding00">
								<div class="col-xs-10 col-xs-offset-2 padding00 loop-font-size" id="whileLoopStep5"></div>
							</div>
								<div class="col-xs-10 col-xs-offset-2 padding00 opacity00" id="printArmstrongNumber">
								153 is an armstrong number</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

<script type="text/javascript">
	$(document).ready(function() {
		algoritmStepsDivs();
		introGuide();
	});

</script>
</body>
</html>
