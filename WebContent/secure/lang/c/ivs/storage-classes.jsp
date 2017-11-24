<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
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
<script src="/secure/lang/c/js-min/sc.min.js"></script>

<title>Storage Classes</title>

<style>

.introjs-tooltip {
	min-width: 400px;
}

.buttons-div {
	margin: 20px 0 10px;
	text-align: center;
}

.heading-css {
	margin: 20px 0 10px;
}

.box-css {
	background-color: hsl(120, 100%, 31%) !important;
	background-image: linear-gradient(#F9DC00, #AE9C0E);
	background-repeat: repeat-x;
	border-color: #009e00 #009e00 hsl(120, 100%, 26.5%);
	border-radius: 6px;
	color: #fff !important;
	display: inline;
	font-size: 16px;
	padding: 10px;
	position: relative;
	text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.29);
	z-index: 9999999;
}

.padding-col0 {
	padding: 0;
}

.padding10 {
	padding: 10px;
}

.creamPreTab4 {
	-moz-tab-size: 4;
	background-color: #fffae6;
	border-radius: 8px;
	font-size: 11px;
	margin: 5px;
	padding: 10px;
	white-space: pre;
}

.margin-top100 {
	margin-top: 100px;
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.svg-line-css {
	position: relative;
	stroke: gray;
	stroke-width: 2;
}

.svg-arrow-line {
	marker-end: url("#arrowEnd");
	display: none;
}

.ct-green-color {
	color: green;
	font-weight: bold;
}

.text-div {
	border-radius: 8px;
	margin-bottom: 10px;
	background: white;
	z-index: 9999999;
	position: relative;
}

y {
	font-weight: bold;
	color: yellow;
}
</style>

</head>
<body>

<div class='col-xs-12'>
	<div class='text-center heading-css'><h1 class='label ct-demo-heading'>Storage Classes</h1></div>
	<div class='buttons-div'>
		<button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button></div>
	<div class="col-xs-12">
		<div class="col-xs-12">
			<div class="col-xs-offset-1 col-xs-10" id='animationDiv' style="font-family : monospace;">
				<div class='padding10 text-div' id='textDiv'>
					A <b class='ct-green-color'>Storage Class</b> defines the <b class='ct-green-color'>scope</b> (visibility) and 
					<b class='ct-green-color'>life-time</b> of variables and/or functions within a '<b>C</b>' 
					program. There are four types of <b class='ct-green-color'>Storage Classes</b>.
				</div>
				<div class="col-xs-12">
					<div class='col-xs-12 padding-col0 text-center'>
						<div class="col-xs-12">
							<div class='col-xs-12 padding10'><div class="box-css opacity00" id='storageClassesBox'>Storage Classes</div></div>
						</div>
						<div class="col-xs-12 margin-top100">
							<div class='col-xs-3 padding10'><div class="box-css opacity00 storage-class" id='autoBox'>Auto</div></div>
							<div class='col-xs-3 padding10'><div class="box-css opacity00 storage-class" id='registerBox'>Register</div></div>
							<div class='col-xs-3 padding10'><div class="box-css opacity00 storage-class" id='staticBox'>Static</div></div>
							<div class='col-xs-3 padding10'><div class="box-css opacity00 storage-class" id='externBox'>Extern</div></div>
						</div>
						<svg class='svg-css'>
							<marker style="fill: gray;" orient="auto" markerWidth="5" markerHeight="5" refX="0" refY="2.5" id="arrowEnd">
								<path d="M0,0 L5,2.5 L0,5 Z"/>
							</marker>
							<line class="svg-line-css svg-line1" x1="50%" y1="22.5%" x2="50%" y2="22.5%"/>
							<line class="svg-line-css svg-line2" x1="50%" y1="48%" x2="50%" y2="48%"/>
							<line class="svg-line-css svg-line2" x1="50%" y1="48%" x2="50%" y2="48%"/>
							<line y2="49%" x2="13.6%" y1="48%" x1="13.6%" class="svg-line-css svg-arrow-line"/>
							<line y2="49%" x2="37.8%" y1="48%" x1="37.8%" class="svg-line-css svg-arrow-line"/>
							<line y2="49%" x2="62%" y1="48%" x1="62%" class="svg-line-css svg-arrow-line"/>
							<line y2="49%" x2="86.2%" y1="48%" x1="86.2%" class="svg-line-css svg-arrow-line"/>
						</svg>
					</div>
					<div class="col-xs-12">
						<div class='col-xs-3'>
<pre class='creamPreTab4 opacity00' id='autoPreCode'>
#include &ltstdio.h&gt
void <b class='ct-blue-color'>main()</b> {
	<span class='ct-green-color'>auto</span> int a;
}
void <b class='ct-blue-color'>demo()</b> {
	int b;
}
</pre>
						</div>
						<div class='col-xs-3'>
<pre class='creamPreTab4 opacity00' id='registerPreCode'>
#include &ltstdio.h&gt
void <b class='ct-blue-color'>main()</b> {
	<span class='ct-green-color'>register</span> int a;	
}
</pre>
						</div>
						<div class='col-xs-3'>
<pre class='creamPreTab4 opacity00' id='staticPreCode'>
#include &ltstdio.h&gt
static int a;
void <b class='ct-blue-color'>main()</b> {
	<span class='ct-green-color'>static</span> int b;
}
</pre>
						</div>
						<div class='col-xs-3'>
<pre class='creamPreTab4 opacity00' id='externPreCode'>
#include &ltstdio.h&gt
int a;
void <b class='ct-blue-color'>main()</b> {
	<span class='ct-green-color'>extern</span> int b;
}
int b;
</pre>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script>
	$(document).ready(function() {
		storageClassesReady();
	});
</script>

</body>
</html>