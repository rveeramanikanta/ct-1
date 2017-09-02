<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet" >
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/jquery-ui.css" rel="stylesheet" >
<link href="/css/animate.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/secure/lang/servlets/js/listeners-working.js"></script>
<title>Listeners</title>
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
	min-height: 152px;
	border-top: 1px solid gray;
	background: white;
}

.border-css {
	border: 1px solid grey;
	border-radius: 8px;
}

.padding00 {
	padding: 0;
}

.padding2 {
	padding: 2px;
}

.margin-top20 {
	margin-top: 20px;
}

.margin-top5 {
	margin-top: 5px;
}

.margin-top10 {
	margin-top: 10px;
}

.margin-bottom10 {
	margin-bottom: 10px;
}

.margin-top40 {
	margin-top: 40px;
}

.container-div {
	min-height: 150px;
}

.ct-fonts {
	font-family: monospace;
	font-weight: bold;
}

.container-heading {
	background: #E3B6E3;
	border-radius: 8px 8px 0 0;
	color: black;
}

.pool-heading {
	background: lightblue;
	border-radius: 0 0 8px 8px;
	color: brown;
}

.instance-box {
	border-top: none;
}

.line-hi8-css {
	line-height: 35px;
}

.borderr-css {
	border: 1px solid;
	border-radius: 50%;
	font-size: 10px;
}

.box-shadow {
	box-shadow: 0 5px 6px 0;
}

.servletinstance-box {
	background-color: #634271;
	border-radius: 0 20px;
	padding: 6px !important;
	color: white;
}

.obj-box {
	background: thistle;
	border: 1px dashed black;
	border-radius: 6px;
	padding: 6px !important;
}

table, th, td {
    border: 1px solid teal;
    text-align: center;
}

td, th {
    padding: 5px;
    font-weight: bold;
}

.signin-form {
 	maxlength: 15;
 	font-size: 12px;
 	height: 27px;
}

.btn-primary {
    font-size: 10px;
}

img {
	width: 19%;
}

.compose-box {
	 /* background: #d14836; */
	 background: #5bc0de;
	 color: white;
	 border-radius: 3px;
}

.svg-css	{
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 9999999;
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

.err-msg {
	color: red;
	font-weight: bold;
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

.user-btn {
	background: green;
	margin: 0 !important;
}

input {
	font-family: monospace;
}

.logout {
    font-family: monospace;
    font-size: 10px;
    font-weight: bold;
    padding: 4px 8px;
}

.zIndex {
	z-index: 9999998;
	background: white;
}

.blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: infinite;
}

@keyframes blink {
	50% {
		background: lightblue;
		color: black;
	}
}
</style>
</head>
<body>
<script type="text/javascript">
$(document).ready(function() {
	$('line').hide();
	listenersReadyFunction();
});
</script> 
<body>
	<div class="col-xs-12 padding00">
		<div class="text-center margin-top20"><h1 class="label ct-demo-heading text-center" id="headingSection">Listeners</h1></div>
		<div class="col-xs-12 padding00 margin-top20">
			<div class="col-xs-10 col-xs-offset-1 padding00">
				<div class="col-xs-12 padding00" id="mainDiv">
					<div class="col-xs-4 padding00" id="browserId"></div>
					<div class="col-xs-8 padding00">
						<div class="col-xs-12 padding00">
							<svg class="svg-css">
								<marker id="markerEnd" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: maroon;">
									<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
								</marker>
								<line id="line1" x1="0%" y1="13%" x2="32%" y2="13%" class="svg-line marker-css"/>
								<line id="line2" x1="32%" y1="19%" x2="0%" y2="19%" class="svg-line marker-css"/>
								<line id="line3" x1="52.5%" y1="16%" x2="72%" y2="16%" class="svg-line marker-css"/>
								<line id="line4" x1="83%" y1="52%" x2="83%" y2="75.5%" class="svg-line marker-css"/>
								<line id="line5" x1="0%" y1="39.5%" x2="32%" y2="39.5%" class="svg-line marker-css"/>
								<line id="line6" x1="32%" y1="45%" x2="0%" y2="45%" class="svg-line marker-css"/>
								<line id="line7" x1="0%" y1="65%" x2="15%" y2="65%" class="svg-line" style="marker-end: url('#markerEnd')"/>
								<line id="line8" x1="15%" y1="65%" x2="15%" y2="13%" class="svg-line" style="marker-end: url('#markerEnd')"/>
								<line id="line9" x1="15%" y1="13%" x2="32%" y2="13%" class="svg-line marker-css"/>
								<line id="line10" x1="32%" y1="19%" x2="19%" y2="19%" class="svg-line" style="marker-end: url('#markerEnd')"/>
								<line id="line11" x1="19%" y1="19%" x2="19%" y2="71%" class="svg-line" style="marker-end: url('#markerEnd')"/>
								<line id="line12" x1="19%" y1="71%" x2="0%" y2="71%" class="svg-line marker-css"/>
								
								<text id="text1" x="4%" y="12%" fill="purple" class="ct-fonts opacity00">request 1</text>
								<text id="text2" x="4%" y="18%" fill="purple" class="ct-fonts opacity00">response 1</text>
								<text id="text3" x="4%" y="38.5%" fill="purple" class="ct-fonts opacity00">request 2</text>
								<text id="text4" x="4%" y="44%" fill="purple" class="ct-fonts opacity00">response 2</text>
								<text id="text5" x="2%" y="64%" fill="purple" class="ct-fonts opacity00">request 1</text>
								<text id="text6" x="4%" y="70%" fill="purple" class="ct-fonts opacity00">response 1</text>
							</svg>
							<div class="col-xs-10 col-xs-offset-2 border-css container-div padding00 opacity00">
								<div class="col-xs-12 text-center padding00 ct-fonts container-heading">Servlet Container</div>
								<div class="col-xs-12 padding00">
									<div class="col-xs-12 margin-top20 padding00">
										<div class="col-xs-5 col-xs-offset-1 padding00">
											<div class="col-xs-12 instance-box border-css padding00 opacity00">
												<div class="col-xs-12 padding00" id="poolDiv"></div>
												<div class="col-xs-12 padding00 text-center margin-top10 ct-fonts pool-heading">Servlet Instance Pool</div>
											</div>
										</div>
										<div class="col-xs-6 padding00 margin-top20">
											<div class="col-xs-12 padding00">
												<div id="httpSession" class="servletinstance-box opacity00">HTTP Session</div>
											</div>
											<div class="col-xs-12 padding00 margin-top40">
												<div id="listenerObj" class="margin-top40 box-shadow obj-box opacity00">Session Listener object</div>
											</div>
										</div>
									</div>
									<div class="col-xs-12 margin-top10 margin-bottom10">
										<div class="col-xs-6 text-center padding00 margin-top40 ">
											<i id="clockDiv" class="fa fa-clock-o fa-3x opacity00"></i>
										</div>
										<div class="col-xs-6 padding00 opacity00" id="tableParentDiv">
											<div class="col-xs-12 ct-fonts padding00 text-center" style="color: #237f23">Table</div>
											<div class="col-xs-12 padding00" id="tableDiv"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 text-center margin-top20"><span id="restartBtn" class="btn btn-warning opacity00">Restart</span></div>
	</div>
</body>
</html> 