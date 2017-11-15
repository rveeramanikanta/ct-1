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

<!-- <script type="text/javascript" src="/secure/lang/c/js-min/lo.min.js"></script> -->
<script type="text/javascript" src="../js/logical-operators.js"></script>

<title>Logical-operators</title>
<style type="text/css">
.border {
	border: 2px solid gray;
	border-radius: 15px;
	min-height: 150px;
	padding: 6px;
}

#animationDiv {
	/* height: 320px;
	font-family: monospace;*/
	border: 2px solid gray;
	border-radius: 15px;
	}

.table-border {
	border: 2px solid gray;
	padding: 4px 6px;
}

.background-color {
	background-color: lavender;
	font-family: monospace;
}

.margin-top20 {
	margin-top: 20px;
}

.input-text {
	/* width: 40px; */
	border: 2px solid orange;
	text-align: center;
	border-radius: 5px;
	width: 35%;
}

.line-div {
	border: 1px solid gray;
}

.nextButton {
	background-color: green;
}

.ct-code-b-green {
	color: green;
}

/* .ct-code-b-green {
	color: green;
	font-family: monospace;
	font-weight: bold;
} */

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
   /*  width: 2%; */
}

.fontSize {
	font-size: 12px;
}

.reveal-right {
	position: relative;
	overflow: hidden;
	-moz-animation: reveal-right 1s ease;
	-moz-animation-fill-mode: forwards; 
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
    /* color: #333;
    cursor: pointer; */
    display: inline-block;
    font: 11px sans-serif;
    padding: 3px;
}
.blinking-circle {
	border: 1px solid red;
	border-radius : 50%;
	padding: 2px 3px;
}

.display-none {
	display: none;
}

.operator-color {
	color: green;
}

.boolean-color {
	color: red;
}

.ofBrace {
	color: blue;
}

.zIndex {
	z-index: 9999999;
	position: relative;
}

.length-error-text {
	color: red;
}

.introjs-tooltip {
	min-width: 300px;
	font-family: monospace;
}

y {
	color: yellow;
	font-weight: bold;
}

.tooltip-min-width {
	min-width: 145px;
}
</style>
<script type="text/javascript">

	$(document).ready(function() {
		logicalOperatorsReady();
	});
	
</script>
</head>
<body>
	<div class="col-xs-12">
		<h2 class="text-center">
			<span class="label label-default ct-demo-heading">Logical Operators</span>
		</h2>
		 <div class="margin-top20 text-center">
			<span class="btn btn-warning visibility-hidden" id="restart">restart</span>
		</div> 
		<div id="informationDiv" class="col-xs-offset-2 col-xs-8 border margin-top20 background-color visibility-hidden"></div>
		<div class="col-xs-12 margin-top20">
			<div class="col-xs-offset-5 col-xs-3 visibility-hidden" id="inputDiv">
					<span>A = <input type="text" id="firstNum" class="input-text inputWidth empty"	contenteditable="true" maxlength="2" placeholder="Number"></span>
					<span>&emsp; B = <input type="text" id="secondNum" class="input-text inputWidth empty"	contenteditable="true" maxlength="2" placeholder="Number"></span>
			</div>
		</div>
		<div class="col-xs-offset-4 col-xs-5 margin-top20 background-colr visibility-hidden" id="animationDiv">
			<table>
				<tbody>
					<tr>
						<th>Expression</th>
						<th>Interpretation</th>
						<th>Value</th>
					</tr>
					<tr class="fontSize">
						<td class="opacity00"><span class="ofBrace">(</span><span class="position-relative">A</span>&nbsp;<span class="operator-color">>=</span>&nbsp;
							<span>16</span><span class="ofBrace">)</span>&nbsp;<span class="operator-color">&&</span>&nbsp;
							<span class="ofBrace">(</span><span class="position-relative">B</span> 
							<span class="operator-color">==</span>
							<span>25</span><span class="ofBrace">)</span>
						</td>
						<td><span class="display-none boolean-color"></span></td>
						<td><span class="display-none"></span></td>
					</tr>
					<tr class="fontSize">
						<td class="opacity00 ">
						<span class="ofBrace">(</span><span class="position-relative">A</span>&nbsp; <span class="operator-color"> < </span> &nbsp;<span>11</span><span class="ofBrace">)</span>
						&nbsp;<span class="operator-color">||</span>&nbsp;
						<span class="ofBrace">(</span><span class="position-relative">B</span>&nbsp;<span class="operator-color">></span>&nbsp;<span>100</span><span class="ofBrace">)</span></td>
						<td><span class="display-none boolean-color"></span></td>
						<td><span class="display-none"></span></td>
					</tr>
					<tr class="fontSize">
						<td class="opacity00"><span class="operator-color"><b>!</b></span><span class="ofBrace">(</span><span class="position-relative">A</span>&nbsp;<span class="operator-color"> <= </span>&nbsp;<span>3</span><span class="ofBrace">)</span></td>
						<td><span class="display-none boolean-color"></span></td>
						<td><span class="display-none"></span></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</body>
</html>
