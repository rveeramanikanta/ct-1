<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css" >
<link rel="stylesheet" href="/css/introjs-ct.css" >
<link rel="stylesheet" href="/css/font-awesome.min.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/c/js/sample-program-on-prime-numbers.js"></script>

<title>Sample program to Find Prime numbers</title>
<style>

.margin-top-25 {
	margin-top: 25px;
}

.margin-top-13 {
	margin-top: 13px;
}

.padding0 {
	padding: 0;
}

.alignment {
	margin: 0 20px;
	text-align: center;
}
 
pre {
	margin: 0;
	tab-size: 4;
	/* font-family: monospace; */
	font-size: 12px; 
}

.description {
	z-index: 9999999;
	position: relative;
	background: white;
	font-family: monospace;
	padding: 5px;
	border: 1px solid black;
	border-radius: 8px;
}

.output-console-title-bar {
	font-weight: bold;
}

.output-console-body {
	height: 65px;
	padding: 5px;
	white-space: initial;
	font-size: 14px;
}

.explanation {
	border: 1px solid #ccc;
	height: 64px;
	border-radius: 8px;
}

.enter-text {
	background-color: black;
	border: none;
}

.ct-red {
	color: red;
	font-family: monospace;
}

.z-index {
	z-index: 1000004 !important;
	background-color: white;
	position: relative;
}

.cup-color {
	color: #e1e1e1;
}

.cup-val {
	color: blue;
	font-weight: bold;
	display: block;
	margin-top: 11px;
}

.cup-name {
	position: relative;
	font-family: monospace;
	font-weight: bold;
	display: block;
}

.inline-css {
	display: inline-block;
	position: relative;
}

.position-css {
	margin-top: 7px;
	position: absolute;
	margin-left: 14px;
	color: blue;
	font-weight: bold;
}

.example-css {
	border: 1px solid gray;
	border-radius: 8px;
	font-family: monospace;
	padding: 5px;
}

.green {
	color: green;
	font-family: monospace;
}

.red {
	color: red;
	font-family: monospace;
}

.usr-btn {
	background-color: green;
	margin: 0 !important;
}

.introjs-fixParent {
	position: relative !important;
}

b {
	font-family: monospace;
}

.skip-button {
	background: orange;
	margin-right: 15px !important;
}

input {
	width: 65px;
}

in {
	color: rgb(62, 50, 173);
	font-weight: bold;
}

ink {
	color: 	rgb(255, 0, 191);
}

go {
	color: rgb(134, 19, 19);
	font-weight: bold;
}

g {
	color: 	rgb(64, 130, 65);
	font-weight: bold;
}

r {
	color: red;
}

</style>
</head>
<body>
<div class="demo-heading text-center margin-top-25">
		<h4 class="label ct-demo-heading" id="heading">Sample Program to Find Prime Numbers</h4>
	</div>
	<div class="col-xs-12 margin-top-25">
		<div class="col-xs-12 padding0">
			<div class="col-xs-8 col-xs-offset-2 description" id="description">
				<ul><li id="line1" class="opacity00">A <b class='green'>prime number</b> is a whole number greater than 
				<b class='green'>1</b> which has no <b class='green'>positive</b>
				 		integer <b class='green'>divisors</b> other than 
					<b class='green'>1</b> and <b class='green'>itself</b>.</li>
					<li id="line2" class="opacity00">Examples of a few prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, etc.</li>
				</ul>
			</div>
		</div>
		<div class="col-xs-12 margin-top-25 padding0">
			<div class="col-xs-6 padding0 opacity00" id="program">
<pre>
<in>#include</in> <ink>&lt;stdio.h&gt;</ink>
<div id="wholeLogic" style="display: inline-block;"><g>void</g> main() {
	<span id="intDec"><g>int</g> num, count = <ink><span id='zero'>0</span></ink>;</span>
	<span id ="iInit"><g>int</g> i = <ink><span id='one'>2</span></ink>;</span>
	<span id="printfEnter">printf(<ink>"Enter any number : "</ink>);</span>
	<span id="scanf">scanf(<ink>"<in>%d</in>"</ink>, &num);</span>
	<span id="whileLoop"><go>while</go> (i <= (num / <ink>2</ink>)) {</span>
		<span id="whileCode"><span id="ifCond"><go>if</go> ((num % i) == <ink>0</ink>) {</span>
			<span id="cInc">count++;</span>
			<span id="breakSpan"><go>break</go>;</span>
		}
		<span id="iInc">i++;</span></span>
	}
	<span id="ifLogic"><span id="outerIf"><go>if</go> ((count <b class="green">==</b> <ink>0</ink>) <b class="ct-blue-color">&&</b> (num <b class="green">!=</b> <ink>1</ink>)) {</span>
		<span id="truePrint">printf(<ink>"The given number <in>%d</in> is a prime number<in>\n</in>"</ink>, num);</span>
	} else {
		<span id="falsePrint">printf(<ink>"The given number <in>%d</in> is not a prime number<in>\n</in>"</ink>, num);</span>
	}</span>
}</div>
</pre>
			</div>
			<div class="col-xs-6">
				<div class="col-xs-12 padding0">
					<div class="col-xs-12 ">
						<div class="col-xs-10 col-xs-offset-1 opacity00 example-css" id="example"></div>
					</div>
					<div class="col-xs-12 margin-top-25">
						<div class="col-xs-8 col-xs-offset-2 padding0 opacity00 explanation text-center">
							<div class="inline-css opacity00 alignment" id='iCupDiv'>
								<span id='iVal' class="position-css"></span>
								<i class='fa fa-coffee fa-3x cup-color i-cup'></i>
								<span class='cup-name'>i</span>
							</div>
							<div class="inline-css opacity00 alignment" id='cCupDiv'>
								<span id='cVal' class="position-css"></span>
								<i class='fa fa-coffee fa-3x cup-color count-cup'></i>
								<span class='cup-name'>count</span>
							</div>
						</div>
					</div>
					<div class="col-xs-12">
						<div class="col-xs-8 col-xs-offset-2 margin-top-25 padding0 opacity00" id="console">
							<div class="output-console-title-bar">Output</div>
							<div class="output-console-body margin-0">
								<div><span class="console-text">Enter any number : </span></div>
								<div id="printing"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 text-center margin-top-25">
			<span id="restart" class="opacity00 btn btn-warning">Restart</span>
		</div>
	</div>
<script>
	$(document).ready(function() {
		sampleProgramOnPrimeNumbersReady();
	});
</script>
</body>
</html>