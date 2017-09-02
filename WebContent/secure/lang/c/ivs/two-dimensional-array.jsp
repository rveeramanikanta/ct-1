<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>review</title>
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link href="/css/font-awesome.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<script src="/secure/lang/c/js-min/tda.min.js" type="text/javascript"></script>
<style>

.zIndex {
	position: relative;
	z-index: 9999999;
} 

.input-all {
  width: 50%;
  border-width: 0px 0 0 0;
  background-color: #000;
  color: #0f0;
}

.background-color {
    background-color: #BCBCBC;
}

#mainDiv {
	margin-top: 20px;
}

pre {
	tab-size: 4;
	-moz-tab-size: 4;
}

#tableDiv {
	height:80px;
}

.output-console-body {
	background-color: black;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	color: #f0f0f0;
	font-family: monospace;
	font-size: 14px;
	height: 346px;
	overflow:unset;
	padding: 10px;
	white-space: nowrap;
}

.margin-top20 {
	margin-top: 20px;
}

#typingDiv {
	height: 40px;
}

.back-color {
	background-color: #D6C2E7;
}

.green-color {
	color: green;
}

.input-char {
    background-color: #000;
    border-width: 0;
    color: #0f0;
    width: 50px;
}

.padding0 {
	padding: 0;
}
 
.input-char:empty::before {
	content: attr(placeholder);
	color: gray;
}

.outline-none {
	outline:none;
}

.error-msg {
	color: red;
	font-weight: bold;
}

.border-height-css, .td-value-css {
	border: 1px solid;
	height: 22px;
}
 .red {
 	border:1px solid red;
 }
 
 .red-text {
 	color: red;
 }
 
 .green-text {
 	color: green;
 }
 
 .blue-text {
 	color: blue;
 }
 
 .green {
 	border:1px solid green;
 }
 
 
 .blue {
 	border:1px solid blue;
 }
 
div, span {
	position: relative;
}

pre > span {
	position: static;
}

.table-css {
	text-align: center;
	width: 100%;
}

.user-btn {
	background-color: green;
}

.output-value-circle {
	background: white;
	color: black;
}

.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 9999999;
	background-color: white;
	color: black; 
}

.text-bold {
	font-weight: bold;
}

.ct-code-b-red {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

.blinking-orange {
	animation-name: blink-background-orange ;
	animation-duration: 1s;
	animation-iteration-count: 1s;
	animation-direction: alternate;
}

@keyframes blink-background-orange {
	50% {
		background-color: orange;
	}
}

</style>
</head>
<body>
	<script>
	
	
		$(document).ready(function() {
			twoDimensionalArrayReady();
		});
	</script>
	<div class="ct-box-main padding0">
		<div class='text-center'>
			<h1 class='label ct-demo-heading' id="heading">Two Dimensional Array</h1>
		</div>

		<div class='col-xs-12 text-center'>
			<span id='restart'
				class='btn btn-warning btn-sm opacity00 margin-top20'>Restart
				&nbsp;<i class='fa fa-refresh'></i>
			</span>
		</div>

		<div id="typingDiv"
			class='margin-top20 col-xs-offset-3 col-xs-7 col-xs-offset-2'>
				<ul><li>Two dimensional array can be used to represents matrix form of elements.</li>
				<li>General format of two dimenstional array is as follows 
				<div id="textAnimate" class="text-bold" style="display:inline-block"> 
				<span id="part1">data_type</span> 
				<span id="part2">array_name</span>
				<span id="part3">[<span class="green-color">size1</span>]</span>
				<span id="part4">[<span class="green-color">size2</span>]</span>;</div></li></ul>
		</div>
		<div id='mainDiv' class='col-xs-12 padding0'>
			<div class='col-xs-6 '>
				<pre class="creampretab4 opacity00" id='codeDiv'>
#include <span>&lt;stdio.h&gt;</span>
void main() {
	<span id='variableDeclaraiton'><span id='array'>int a[3][3]</span>, rows, cols, i, j;</span>
	<span id='getRowColumn'>printf (" Enter the number of rows and columns: ");</span>
	<span id='scanf'>scanf ("%d %d", &rows, &cols );</span>
	<span id='getInputValues'>for (i = 0; i &lt; rows; i++ ) {
		for (j = 0; j &lt; cols; j++ ) {
			<span id='matrixValues'>printf ( " Enter the value of a[%d][%d] : " , i, j );</span>
			scanf ("%d", &a[i][j]);
		}
	} </span>
	<span id='codePrintf'>printf (" The array elements are : \n");</span>
	<span id='printForLoop'>for( i = 0; i &lt; rows; i++ ) {
		for( j = 0; j &lt; cols; j++) {
			printf (" \t %d ", a[i][j]);
		}
		printf("\n");
	}</span>
}</pre>
			
			</div>
			<div class='col-xs-6'>
				<div id='animationDiv' class='opacity00'>
					<div id="consoleId1" class="center">
						<div class="output-console-title-bar">
							<span class="title"><b>Console</b></span>
						</div>
						<div class="output-console-body" id="consoleBodyDiv1">
							<div id="animationDivText" class='opacity00'>Enter number of rows and columns : <span id="inputVal" class='input-all'><input id='secondInput' maxlength='20' class='input-all'/></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
<div class="col-xs-12"><div id='tableDiv'>

<div class='col-xs-12' id='arrayBox'>
						<table class='table-css'>
							<tbody>
								<tr>
								</tr>
								<tr>
								</tr>
								<tr>
								</tr>
							</tbody>
						</table>
					</div>
</div></div>
	</div>
</body>
</html>
