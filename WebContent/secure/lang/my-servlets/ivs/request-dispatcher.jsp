<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Request Dispatcher</title>
<link href="/css/bootstrap.min.css" rel="stylesheet" >
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/jquery-ui.css" rel="stylesheet" >
<link href="/css/animate.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/font-awesome-animation.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/servlets/js/request-dispatcher.js"></script>
<style type="text/css">

.container {
	padding: 0px;
	margin-top: 30px;
	margin: 0;
}

.active {
	display: flex;
	align-items: center;
}

.browser {
	margin-top: 3px;
}

.plus {
	color: white;
	font-size: 18px;
}

.url {
	display: flex;
	border: 1px solid;
	align-items: center;
	margin-bottom: 5px;
}

.fa-display {
	display: flex;
	align-items: center;
}

ul.tabs {
    margin: 0 0 -4px;
    max-height: 26px;
    overflow: hidden;
    line-height: 25px;
    list-style-type: none;
    display: inline-block;
}

ul.tabs > li.active {
  background: #efefef;
}

ul.tabs > li {
	margin: 2px 0 -4px;
	position: relative;
	width: 170px;
	border-left: 20px solid rgb(10, 5, 5);
	border-bottom: 24px solid rgba(211, 211, 211, 0.21);
	border-right: 20px solid rgb(10, 5, 5);
	height: 0px;
}

.arrow {
	color: lightgray;
    font-size: 15px;
}

.fa {
    cursor: default;
}

.tabs {
  height:25px;
  padding: 0;
  overflow:visible;
}

.usr-text {
	border: medium none;
	font-family: Bitstream Vera Serif Bold,sans-serif;
	width: 100%;
	padding-left: 5px;
}

.tab-container {
   	background: #0a0505 none repeat scroll 0 0;
}

.html-body {
	min-height: 212px;
	border-top: 1px solid gray;
	background: white;
}

.margin-top5 {
	margin-top: 5px;
}

.border-css {
	border: 1px solid grey;
	border-radius: 8px;
}

.margin-top20 {
	margin-top: 20px;
}

.padding00 {
	padding: 0;
}

.margin-top10 {
	margin-top: 10px;
}

.margin-bottom10 {
	margin-bottom: 10px;
}

.signin-form {
 	maxlength: 15;
 	font-size: 12px;
 	height: 27px;
 	font-family: monospace;
 	color: purple;
 }

.btn-primary {
    font-size: 10px;
    box-shadow: 1px 1px 2px 2px #7a7a7a;
    padding: 4px 6px !important;
}

.ct-fonts {
	font-family: monospace;
	font-weight: bold;
}

.borderr-css {
	border: 1px solid;
	border-radius: 50%;
	font-size: 10px;
}

.box-shadow {
	box-shadow: 0 5px 6px 0;
}

.engine-heading {
	background: #aacdcd;
	color: #8a0651;
	border-radius: 8px 8px 0px 0px;
}

.svg-css	{
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 1;
}

.svg-line	{
	position: relative;
	stroke:	blue;
	stroke-width: 2;
	display: inline;
}

.marker-css {
	marker-end: url("#markerEnd");
}

text {
	fill: purple;
}

.ct-red {
	color: red;
}

.user-btn {
	background: green;
	margin: 0 !important;
}

.line-hi8-css {
	line-height: 45px;
}

.popover-content {
	font-size: 14px;
}

.popover {
	min-width: 200px;
	font-size: 15px !important;
	z-index: 100000000;
	min-height: 20px;
}

.logo {
	width: 16%;
}

.introjs-tooltip {
	min-width: 300px;
}

ol {
	margin-bottom: 0px !important;
}
</style>
<script type="text/javascript">
$(document).ready(function() {
	requestDispatcherReady();
});
</script>
</head>
<body>
	<div class="col-xs-12">
		<div class="text-center margin-top20"><h1 class="label ct-demo-heading text-center" id="headingSection">RequestDispatcher</h1></div> 
		<div class="col-xs-12 padding00 margin-top20">
			<div class="col-xs-8 col-xs-offset-2 padding00" id="mainDiv">
				<div class="col-xs-12 padding00">
					<div class="col-xs-5 padding00 opacity00 margin-top10" id="browserId"></div>
					<div class="col-xs-7 padding00">
					<svg class="svg-css">
						<marker id="markerEnd" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: maroon;">
							<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
						</marker>
						<line id="line1" x1="0%" y1="20%" x2="68.5%" y2="20%" class="svg-line marker-css"/>
						<line id="line2" x1="80.8%" y1="28%" x2="80.8%" y2="44%" class="svg-line marker-css"/>
						<line id="line3" x1="74.8%" y1="51%" x2="56.5%" y2="51%" class="svg-line marker-css"/>
						<line id="line4" x1="31.5%" y1="51%" x2="0%" y2="51%" class="svg-line marker-css"/>
						<line id="line5" x1="80.8%" y1="58%" x2="80.8%" y2="73.9%" class="svg-line marker-css"/>
						<line id="line6" x1="69%" y1="83%" x2="0%" y2="83%" class="svg-line marker-css"/>
						
						<text id="text1" x="7%" y ="18%" class="opacity00 ct-fonts">Request</text>
						<text id="text2" x="60%" y ="48%" class="opacity00 ct-fonts">include()</text>
						<text id="text3" x="7%" y ="49%" class="opacity00 ct-fonts">Response</text>
						<text id="text4" x="83%" y ="68%" class="opacity00 ct-fonts">Forward()</text>
						<text id="text5" x="7%" y ="81%" class="opacity00 ct-fonts">Response</text>
					</svg>
						<div class="col-xs-12 padding00">
							<div class="col-xs-9 col-xs-offset-3 border-css padding00 opacity00" style="min-height: 276px;" id="servletDiv">
								<div class="col-xs-12 padding00 text-center ct-fonts engine-heading">Servlet Engine</div>
								<div class="col-xs-12 padding00 margin-top10">
									<div id="loginServlet" class="servlets col-xs-4 col-xs-offset-7 line-hi8-css" style="background-color: wheat;">
										Login Servlet</div>
								</div>
								<div class="col-xs-12 padding00" style="margin-top: 40px;">
									<div id="errorServlet" class="servlets col-xs-4 col-xs-offset-1 line-hi8-css" style="background-color: #90caf9;">
										Login Form</div>
									<div id="rDServlet" class="servlets col-xs-2 col-xs-offset-3 margin-top5"
										style="background-color: plum; line-height: 35px;">RD</div>
								</div>
								<div class="col-xs-12 padding00 margin-bottom10" style="margin-top: 40px;">
									<div id="welcomeServlet" class="servlets col-xs-4 col-xs-offset-7 line-hi8-css" style="background-color: #90caf9;">
										Welcome Form</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 text-center margin-top20"><span class="btn btn-warning text-center opacity00" id="restartBtn">Restart</span></div>
	</div>
</body>
</html>