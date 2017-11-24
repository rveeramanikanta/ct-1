<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/animate.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/c/js-min/aops.min.js"></script>
<title>Array of Pointers</title>

<style>

.introjs-tooltip {
	min-width: 300px;
}

.introjs-duplicate-nextbutton {
	background-color: green;
}

.buttons-div {
	margin: 20px 0 10px;
	text-align: center;
}

.heading-css {
	margin: 20px 0 10px;
}

.creamPreTab4 {
	-moz-tab-size: 3;
	tab-size: 3;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 11px;
	margin: 5px;
	padding: 10px;
	white-space: pre;
}

.cream-span-css {
	background-color: #fffae6;
	border: 1px solid #ccc;
	border-radius: 8px;
	display: inline-block;
	font-family: monospace;
	padding: 6px 10px;
}

.box-border {
	border: 1px solid gray;
	border-radius: 8px;
	padding: 10px;
}

td, th {
	width: 50px;
}

.border-height-css, .td-value-css {
	border: 1px solid;
	height: 22px;
}

.padding10 {
	padding: 10px;
}

.padding-top-bottom {
	padding: 10px 0;
}

.vertical-align-center {
	align-items: center;
	display: flex;
	font-family: monospace;
}

.output-console-body {
	font-size: 11px;
	padding: 5px 20px;
}

.color-gray {
	color: gray;
}

.variable-color {
	color: brown;
}

div, span {
	position: relative;
}

pre > span {
	position: static;
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
	position: relative;
	stroke: gray;
	stroke-width: 2; 
}

.display-none {
	display: none;
}

.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 9999999;
}

.ct-lime-color {
	color: green;
	font-weight: bold;
}

.ct-blue-color {
	font-weight: bold;
	font-family: monospace;
}
</style>
</head>
<body>

<div class='col-xs-12'>
	<div class='text-center heading-css'><h1 class='label ct-demo-heading'>Array Of Pointers</h1></div>
	<div class='buttons-div'><button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button></div>
	<div class="col-xs-12 text-center padding-top-bottom" id='box1'>
		<div class='col-xs-6'>
			<div class='col-xs-offset-2 col-xs-8 box-border'>
				<div class='col-xs-12 padding10'>
					<span class='cream-span-css' id='array1'>int a[3];</span>
				</div>
				<div class='col-xs-12 padding10 vertical-align-center'>
					<table align='center' class='opacity00' id='table1'>
						<tbody>
							<tr>
								<td><span class='variable-color'>a[0]</span></td>
								<td class='td-value-css'><span class='opacity00 ct-blue-color'>10</span></td>
							</tr>
							<tr>
								<td><span class='variable-color'>a[1]</span></td>
								<td class='td-value-css'><span class='opacity00 ct-blue-color'>20</span></td>
							</tr>
							<tr>
								<td><span class='variable-color'>a[2]</span></td>
								<td class='td-value-css'><span class='opacity00 ct-blue-color'>30</span></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class='col-xs-6'>
			<div class='col-xs-offset-1 col-xs-9 box-border'>
				<div class='col-xs-12 padding10'>
					<span class='cream-span-css' id='array2'>int *a[3];</span>
				</div>
				<div class='col-xs-12 padding10 vertical-align-center' id='table2Box'>
					<div class='col-xs-4'>
						<table align='center' class='opacity00' id='table2'>
							<tbody>
								<tr>
									<td><span class='variable-color'>a[0]</span></td>
									<td class='td-value-css'><span id='value1' class='ct-blue-color'></span></td>
								</tr>
								<tr>
									<td><span class='variable-color'>a[1]</span></td>
									<td class='td-value-css'><span id='value2' class='ct-blue-color'></span></td>
								</tr>
								<tr>
									<td><span class='variable-color'>a[2]</span></td>
									<td class='td-value-css'><span id='value3' class='ct-blue-color'></span></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class='col-xs-offset-2 col-xs-6'>
						<div class='col-xs-12 padding-top-bottom'>
							<table align='center' class='opacity00' id='table21'>
								<tbody>
									<tr><td class='td-value-css'></td><td class='td-value-css'></td><td class='td-value-css'></td></tr>
									<tr>
										<td><span class='ct-lime-color' id='address1'>1086</span></td>
										<td><span class='ct-lime-color'>1088</span></td><td><span class='ct-lime-color'>1090</span></td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class='col-xs-12 padding-top-bottom'>
							<table align='center' class='opacity00' id='table22'>
								<tbody>
									<tr><td class='td-value-css'></td><td class='td-value-css'></td></tr>
									<tr>
										<td><span class='ct-lime-color' id='address2'>2086</span></td>
										<td><span class='ct-lime-color'>2088</span></td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class='col-xs-12 padding-top-bottom'>
							<table align='center' class='opacity00' id='table23'>
								<tbody>
									<tr>
										<td class='td-value-css'></td><td class='td-value-css'></td>
										<td class='td-value-css'></td><td class='td-value-css'></td>
									</tr>
									<tr>
										<td><span class='ct-lime-color' id='address3'>3086</span></td>
										<td><span class='ct-lime-color'>3088</span></td><td><span class='ct-lime-color'>3090</span></td>
										<td><span class='ct-lime-color'>3092</span></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div class="col-xs-12 padding-top-bottom display-none" id='box2'>
		<div class='col-xs-6'>
			<div class='col-xs-offset-2 col-xs-8 box-border'>
<pre class='creamPreTab4' id='preCode'>
void <b class='ct-blue-color'>main()</b> {
	<span id='intLine'>int *a[2], f1 = <span id='f1Val'>10</span>, f2 = <span id='f2Val'>20</span>;</span>
	<span id='a0Line'>a[0] = &f1;</span>
	<span id='a1Line'>a[1] = &f2;</span>
	<span id='printf1'>printf("The address of a[0] : %d\n", (a + 0));</span>
	<span id='printf2'>printf("The address of a[1] : %d\n", (a + 1));</span>
	<span id='printf3'>printf("The value of a[0] : %d\n", *(a + 0));</span>
	<span id='printf4'>printf("The value of a[1] : %d\n", *(a + 1));</span>
	<span id='printf5'>printf("The value of f1 : %d\n", *(*(a + 0)));</span>
	<span id='printf6'>printf("The value of f2 : %d\n", *(*(a + 1)));</span>
}
</pre>
			</div>
		</div>
		<div class='col-xs-6'>
			<div class='col-xs-offset-1 col-xs-9 box-border text-center'>
				<div class='col-xs-12 padding10 vertical-align-center opacity00' id='animationBox'>
					<div class='col-xs-4'>
						<table align='center' id='aTable'>
							<tbody>
								<tr><td colspan='2'><span class='variable-color'>a</span></td></tr>
								<tr>
									<td><span class='ct-lime-color' id='a0Address'>1080</span></td>
									<td class='td-value-css'><span id='a0Value' class='ct-blue-color'></span></td>
								</tr>
								<tr>
									<td><span class='ct-lime-color' id='a1Address'>1082</span></td>
									<td class='td-value-css'><span id='a1Value' class='ct-blue-color'></span></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class='col-xs-offset-2 col-xs-6'>
						<div class='col-xs-12 padding-top-bottom'>
							<table align='center' id='f1Table'>
								<tbody>
									<tr><td><span class='variable-color'>f1</span></td></tr>
									<tr><td class='td-value-css'><span id='f1Value' class='ct-blue-color'></span></td></tr>
									<tr><td><span class='ct-lime-color' id='f1Address'>1086</span></td></tr>
								</tbody>
							</table>
						</div>
						<div class='col-xs-12 padding-top-bottom'>
							<table align='center' id='f2Table'>
								<tbody>
									<tr><td><span class='variable-color'>f2</span></td></tr>
									<tr><td class='td-value-css'><span id='f2Value' class='ct-blue-color'></span></td></tr>
									<tr><td><span class='ct-lime-color' id='f2Address'>2086</span></td></tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div class='col-xs-offset-1 col-xs-9'>
				<div id="outputBox" class="output-console center">
					<div class="output-console-title-bar"><span>Output</span></div>
<div class="output-console-body"><span class="visibility-hidden">The address of a[0] : </span>
<span class="visibility-hidden">The address of a[1] : </span>
<span class="visibility-hidden">The value of a[0] : </span>
<span class="visibility-hidden">The value of a[1] : </span>
<span class="visibility-hidden">The value of f1 : </span>
<span class="visibility-hidden">The value of f2 : </span>
</div>
				</div>
			</div>
		</div>
	</div>
	
</div>

<script>
	$(document).ready(function() {
		arrayOfPointersReady();
	});
</script>

</body>
</html>