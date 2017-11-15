<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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
<script src="/secure/lang/servlets/js/multi-threading.js"></script>
<title>Multi Threading</title>
<style type="text/css">
.container {
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
}

ul.tabs {
    margin: 0 0 -4px;
    max-height: 26px;
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
	height: 123px;
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

.margin-top5 {
	margin-top: 5px;
}

.margin-top10 {
	margin-top: 10px;
}

.margin-top20 {
	margin-top: 20px;
}

.margin-top40 {
	margin-top: 80px;
}

.margin-bottom5 {
	margin-bottom: 5px;
}

.margin-left20 {
	margin-left: 20px;
}

.border-radius5 {
	border-radius: 5px;
	border: 2px solid green;
	min-height: 553px;
	background-color: #efe5d9;
}

.font-size {
	font-size: 11px;
}

.bg-color-top-1 {
	background-color: #f3acac;
}

.eclipse-shape {
	border-radius: 50%; 
	padding: 6px;
}

.new-servlet-box {
    color: white;
    font-weight: bold;
    background-color: #983232;
	border-radius: 12px;
	padding: 9px;
}

.eclipse-shape-small {
	background-color: #d7679e;
    border-radius: 50%;
    padding: 5px;
	font-size: 12px;
	color: black;
}

.box-shadow {
	box-shadow: 0px 0px 5px;
	text-align: center;
}

.bg-color-white {
	background-color: white;
}

.pool-heading {
	background: lightblue;
	border-radius: 0 0 8px 8px;
	color: brown;
}

.instance-box {
	border-top: none;
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

.ct-fonts {
	font-weight: bold;
	font-family: monospace;
}

.signin-form {
 	maxlength: 15;
 	font-size: 12px;
 	height: 27px;
 	font-family: monospace;
}

.btn-primary {
    font-size: 10px;
}

.progress-bar-vertical {
	width: 10px;
	min-height: 57px;
	display: inline-block;
	position: relative;
	margin: 0;
}

.bar-margin {
	margin: 0 9px; 
}

.progress-bar-vertical .progress-bar {
	width: 100%;
}

img {
	width: 100%;
}

.scrollbar-css {
	height: 100%;
	overflow: auto;
}

.logo {
	width: 16%;
}

.thread-pool {
	min-height: 61px;
}

.user-btn {
	background: green;
	margin: 0 !important;
}

.err-msg {
	color: red;
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
</style>
</head>
<script type="text/javascript">
$(document).ready(function() {
	$('line').hide();
	multiThreadingReady();
});
</script>
<body>
	<div class="col-xs-12 padding00">
		<div class="text-center margin-top20"><h1 class="label ct-demo-heading text-center" id="headingSection">Servlets MultiThreaded</h1></div>
		<div class="col-xs-12 padding00 margin-top20">
			<div class="col-xs-10 col-xs-offset-1 padding00">
				<div class="col-xs-12 padding00" id="mainDiv">
					<div class="col-xs-12 opacity00 servlet-container padding00">
						<div class="col-xs-4"></div>
						<div class="col-xs-8 padding00">
							<div class="col-xs-11 col-xs-offset-1 ct-fonts text-center padding00" style="color: purple">Servlet container</div>
						</div>
					</div>
					<div class="col-xs-4 padding00" id="browserId"></div>
					<div class="col-xs-8 padding00">
						<div class="col-xs-12 padding00">
							<svg class="svg-css" id="svgDiv">
								<marker id="myMarker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: maroon;">
									<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
								</marker>
								<!-- lines in this path: /home/ramana/Desktop/All/multi-threading-lines -->
								<text id="text1" x="1%" y="23%" fill="purple" class="ct-fonts opacity00">request 1</text>
								<text id="text2" x="1%" y="30%" fill="purple" class="ct-fonts opacity00">response 1</text>
								<text id="text3" x="1%" y="56%" fill="purple" class="ct-fonts opacity00">request 2</text>
								<text id="text4" x="1%" y="61.5%" fill="purple" class="ct-fonts opacity00">response 2</text>
								<text id="text5" x="1%" y="83.5%" fill="purple" class="ct-fonts opacity00">request 3</text>
								<text id="text6" x="1%" y="90%" fill="purple" class="ct-fonts opacity00">response 3</text>
							</svg>
							<div id='singleThreadModelBox' class='col-xs-11 col-xs-offset-1 border-radius5 opacity00 servlet-container'>
								<div class="col-xs-12 margin-top10 padding00">
									<div class="col-xs-12 padding00" id="poolDiv">
										<div class="col-xs-4 padding00 text-center margin-top20 opacity00" id="clockDiv">
											<i class="fa fa-clock-o fa-3x margin-top10" id="clockFa"></i>
										</div>
									</div>
									<div class="col-xs-12 padding00">
										<div class="col-xs-12 padding00 margin-top10">
											<div class="col-xs-12 padding00 margin-top10">
												<div class="col-xs-3 col-xs-offset-2 padding00"><div id="reqEcpBox1"></div></div>
											</div>
											<div class="col-xs-12 padding00 margin-top10">
									 	 		<div class="eclipse-shape bg-color-top-1 destroy" id="response1">response</div>
									 	 		<div class="col-xs-offset-3 eclipse-shape bg-color-top-1" id="servletConfig">ServletConfig</div>
											</div>
										</div>
										<div class="col-xs-12 padding00 margin-top20">
											<div class="col-xs-9 col-xs-offset-3 padding00">
												<div class="col-xs-12 padding00 font-size">
											    	<div class="col-xs-2 new-servlet-box destroy" id="model10">servlet instance</div>
											     	<div class="col-xs-3 new-servlet-box destroy" id="model11">	
											     			init (<span class='configColor'>ServletConfig</span>) method</div>
													<div class="col-xs-3 new-servlet-box destroy" id="model12">
															service (<span class='reqColor'>request</span>, <span id='resColor'>response</span>)</div>
													<div class="col-xs-2 new-servlet-box margin-top5" id="model13" style="padding: 8px;">
															destroy</span></div>
											    </div>
											</div>
										</div>
										<div class="col-xs-12 padding00 margin-top20">
											<div class="col-xs-12 padding00 margin-top5">
												<div class="col-xs-3 col-xs-offset-6 padding00"><div class="margin-top20" id="reqEcpBox2"></div></div>
											</div>
											<div class="col-xs-12 padding00">
												<div class="eclipse-shape" id="response2" style="background-color: #89aeef;">response</div>
											</div>
										</div>
										<div class="col-xs-12 padding00 margin-top40">
											<div class="col-xs-12 padding00">
												<div class="col-xs-3 col-xs-offset-7 padding00"><div class="margin-top10" id="reqEcpBox3"></div></div>
											</div>
											<div class="col-xs-12 padding00 margin-top10">
											  	<div class="eclipse-shape" id="response3" style="background-color: #f9b0ed;">response</div>
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
	</div>
</body>
</html>