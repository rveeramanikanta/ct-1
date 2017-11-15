<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<link href="/css/bootstrap.min.css" rel="stylesheet" >
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/jquery-ui.css" rel="stylesheet" >
<link href="/css/animate.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/alertify/alertify.bootstrap.css" rel="stylesheet">
<link href="/css/alertify/alertify.default.css" rel="stylesheet"> 
<link href="/css/alertify/alertify.core.css" rel="stylesheet"> 
<link href="/css/font-awesome-animation.min.css" rel="stylesheet">


<script src="/js/jquery-latest.js"></script>
<script src="/js/jquery-ui-latest.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/alertify.js"></script>
<script src="/secure/lang/servlets/js-min/sson.min.js"></script>

<!-- <script src="/secure/lang/servlets/js/session.js"></script> -->
<title>HTTP Sessions</title>

<style type="text/css">
.introjs-tooltip {
	min-width: 350px;
}

.introjs-duplicate-nextbutton {
	margin: 0px !important;
	background-color: green;
}

.box-border {
	border-radius: 12px;
	border: 1px solid gray;
}

.buttons-div {
	margin-top: 20px;
	margin-bottom: 5px;
	text-align: center;
}

div, span {
	position: relative;
}

.padding00 {
	padding: 0;
}

.position {
	position: relative;
	display: inline-block;
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
	stroke:	green;
	stroke-width: 2;	
}

.popover {
	min-width: 100px !important;
	z-index: 1;
	min-height: 20px !important;
}

.popover-content {
	font-size: 14px;
}

.container { /*Browser css  */
	padding: 0px;
	margin-top: 30px;
	border: 2px solid grey;
}

.active {
	display: flex;
	align-items: center;
}

#browser {
	margin-top: 3px;
	padding-bottom: 6px;
}

#plus {
	color: white;
	font-size: 18px;
}

.url {
	display: flex;
	border: 1px solid;
	align-items: center;
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

ul.tabs > li.active{
  background: #efefef;
}

ul.tabs > li{
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
}

.tab-container {
   	background: #0a0505 none repeat scroll 0 0;
}

.html-body {
	min-height: 180px;
	border-top: 1px solid gray;
	background: white;
}

.margin-top5 {
	margin-top: 5px;
}

.margin-top20 {
	margin-top: 20px;
} /* browse css closed */

.margin-top30 {
	margin-top: 30px;
}

.animation-div {
	background-color: #fff6ea;
}

.box-border2 {
    border: 1px solid gray;
    border-radius: 4px;
}

.box-border1 {
    border: 2px solid gray;
    border-radius: 4px;
} 

.folder-body {
	border: 2px solid gray;
	 border-radius: 0 5px 5px;
    box-shadow: 1px 1px 0 2px #cccccc;
}

.folder-shape {
    border: 2px solid gray;
    border-radius: 5px 15px 0 0;
    margin-bottom: -2px;
    padding: 5px;
}

.title-of-servlet {
	background: #856941 none repeat scroll 0 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: white;
    font-weight: bold;
    padding: 5px 0;
}

.title-of-servlet-pool {
    color: white;
    font-weight: bold;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
	background: #4d3319 none repeat scroll 0 0;
	padding: 3px 0;
}

.fa-file-text-o {
	font-size: 18px;
}

#formContainer {
    font: 14px/1.3 "Segoe UI",Arial,sans-serif;
    height: 150px;
    perspective: 800px;
    position: relative;
}

#formContainer form {
    border-radius: 10px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    height: 100%;
    left: 0;
    transform-style: preserve-3d;
    transition: all 0.8s ease 0s;
    width: 100%;
}
#login {
    background-color: transparent;
    z-index: 100;
}

.form-group {
    margin-bottom: 5px;
}

.form-control {
	height: 30px;
}

.service, .servlet {
	background: #196619;
	color: white;
	font-weight: bold;
	border-radius: 2px
}

.servlet {
	background: #0066cc;
}

.pool-height {
	margin-top: 55px;
	min-height: 105px;
	border-color: gray;
	border-style: none solid none solid;
	border-width: 2px;
	box-shadow: 0 20px 23px rgba(0, 0, 0, 0.3);
}

tr,td {
	border: 2px solid gray;
	padding: 2px
}

#servletContainer {
	font-family: status-bar;
}

.inline-block {
	display: inline-block;
    margin: 0 35px;
    padding: 4px 6px;
}

.ct-code-b-red {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

.compose-box {
	background: #d14836;
	color: white;
	border-radius: 3px;
}

.border-css {
	border: 1px solid grey;
}

.padding2 {
	padding: 2px;
}

.border-bottom {
	border-bottom: 1px solid grey;
}

.margin0 {
	margin: 0 !important;
}

#img0 {
	width: 25%
}
#img1,#img2 {
	width: 14%
}
#content1 {
	z-index: 1;
}
table {
	width: 100%;
}

.blinking {
	animation-name: blink;
	animation-duration: 1s;
	animation-iteration-count: infinite;
 }

@keyframes blink {
	50% {
		background: #b0e8c1;
	}
}
#servletPool {
	margin-top: 75px;
}
#destroy {
	text-align: right;
}

</style>

</head>
<body>
<script type="text/javascript">
$(document).ready(function() {
	sessionAnimation();
});
</script>

<div class="col-xs-12 padding00">
	<div class="ct-box-main">
		 <div class="text-center">
			<h1 class="label ct-demo-heading text-center" id="headingSection">Sessions</h1>
		</div> 
	</div>
	<div class="col-xs-12">
		<div class="col-xs-12">
			<div class="col-xs-12 box-border animation-div" id="animationDiv">
				<svg class="svg-css" id="svgId">
					<marker id="myMarker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: #970f0f;"> <path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/></marker>
					<line x1="33.7%" y1="42%" x2="41.9%" y2="42%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line1"/>
					<line x1="49.8%" y1="71.2%" x2="49.7%" y2="42.9%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line2"/>
					<line x1="46.1%" y1="38.2%" x2="33.9%" y2="38.2%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line3"/>
					<line x1="33.6%" y1="33.6%" x2="41.7%" y2="33.6%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line4"/>
					<line x1="62.9%" y1="70.9%" x2="62.9%" y2="34.6%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line5"/>
					<line x1="61.3%" y1="29.8%" x2="33.7%" y2="29.9%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line6"/>
					<line x1="33.7%" y1="25.4%" x2="41.6%" y2="25.4%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line7"/>
					<line x1="77.1%" y1="71.1%" x2="77.1%" y2="26.2%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line8"/>
					<line x1="75.8%" y1="21.7%" x2="33.8%" y2="21.7%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line9"/>
					<line x1="33.7%" y1="64%" x2="48.0%" y2="64%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line10"/>
					<line x1="48.1%" y1="64.2%" x2="48.1%" y2="42.9%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line11"/>
					<line x1="46.3%" y1="42.2%" x2="46.3%" y2="59.9%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line12"/>
					<line x1="46.4%" y1="60%" x2="33.8%" y2="60%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line13"/>
					<line x1="33.7%" y1="56%" x2="44.6%" y2="56%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line14"/>
					<line x1="44.6%" y1="55.9%" x2="44.6%" y2="32.7%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line15"/>
					<line x1="44.6%" y1="32.9%" x2="60.8%" y2="32.9%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line16"/>
					<line x1="60.8%" y1="29.9%" x2="42.8%" y2="29.9%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line17"/>
					<line x1="42.8%" y1="29.9%" x2="42.8%" y2="52.9%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line18"/>
					<line x1="42.8%" y1="52.9%" x2="33.8%" y2="52.9%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line19"/>
					<line x1="41.7%" y1="42%" x2="45.9%" y2="42%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line20"/>
					<line x1="41.6%" y1="33.6%" x2="60.7%" y2="33.6%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line21"/>
					<line x1="40.7%" y1="25.4%" x2="75.6%" y2="25.4%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line22"/>
					
					<text id="text1" fill="black" y="41.1%" x="35.4%">request 1</text>
					<text id="text2" fill="black" y="37.1%" x="35.4%">response 1</text>
					<text id="text3" fill="black" y="32.5%" x="35.4%">request 2</text>
					<text id="text4" fill="black" y="28.5%" x="42.4%">responce 2  <=== 1A5345..</text>
					<text id="text5" fill="black" y="24.5%" x="35.4%">request 3  => 1A5345..</text>
					<text id="text6" fill="black" y="20.5%" x="42.4%">request 3  <=== 1A5345..</text>
					<text id="text7" fill="black" y="66.6%" x="35.4%">request 1</text>
					<text id="text8" fill="black" y="62.6%" x="35.4%">response 1</text>
					<text id="text9" fill="black" y="58.6%" x="35.4%">request 2</text>
					<text id="text10" fill="black" y="28.6%" x="44.4%">request <=== 5J1235...</text>
				</svg>
				<div class="col-xs-4 padding00" id="brower1"></div>
				<div class="col-xs-7 col-xs-offset-1 padding00">
					<div class="col-xs-12 box-border margin-top30 padding00 opacity00" id="servletContainer">
						<div class="col-xs-12 padding00 title-of-servlet text-center padding00" id="servletContainerTitle">Servlet Container</div>
						<div class="col-xs-12">
							<div class="col-xs-9 padding00">
								<div class="col-xs-12 padding00 margin-top30 text-center">
									<div class="inline-block service margin-top30 text-center padding00 opacity00 position" id="serrvice">
										<span id="nameOfObj" class="position">signIn.obj</span>
									</div>
								</div>
								<div class="col-xs-12 padding00" id="serviceMethod1">
									<div class="pull-right">
										<div class="opacity00 inline-block service margin-top30 text-center padding00" id="service3"><span>service</span></div>
									</div>
									<div class="col-xs-12 text-center margin-top20">
										<div class="opacity00 inline-block service margin-top30 text-center padding00" id="service2"><span>service</span></div>
									</div>
									<div class="pull-left margin-top20">
										<div class="opacity00 inline-block service margin-top30 text-center padding00" id="service1"><span>service</span></div>
									</div>
								</div>
								<div class="col-xs-12 margin-top30 padding00 opacity00" id="servletPool">
									<div class="col-xs-12 pool-height padding00" id="servletObjects"></div>
									<div class="col-xs-12 padding00 title-of-servlet-pool text-center padding00" id="servletInstanceTitle">Servlet Instance Pool</div>
								</div>
							</div>
							<div class="col-xs-3 padding00">
								<div class="col-xs-12 padding00">
									<div class="col-xs-12 opacity00" id="servletClassFolder">
										<div class="col-xs-9 folder-shape margin-top30"></div>
										<div class="col-xs-12 folder-body text-center abc" id="dotClassFilesList"></div>
										<div class="col-xs-12 text-center">Class</div>
									</div>
								</div>
								<div class="col-xs-12 padding00 margin-top30">
									<div class="col-xs-12 text-center" id="hashTableDisplay">
										<div class="col-xs-12 text-center opacity00 padding00" id="hashTableText">Session HashMap</div>
											<div class="col-xs-12 hashtable padding00" id="hashTable"></div>
										</div>
										<div class="col-xs-12 padding00 opacity00" id="destroy" style="text-align: right;">
  											<i class="fa fa-clock-o fa-3x fa-spin" id="clock"></i>
										</div>
									</div>
								</div>
							</div>	
						<div class="col-xs-12 margin-top30"></div>
					</div>
				</div>
				<div class="col-xs-12 margin-top30"></div>
			</div>
		</div>
	</div>
	<div class='col-xs-12 text-center buttons-div'>
		<button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button>
	</div>
</div>
</body>
</html>