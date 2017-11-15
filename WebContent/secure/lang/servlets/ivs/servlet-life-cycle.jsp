<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/font-awesome-animation.min.css">
<link rel="stylesheet" href="/css/animate.css"/>

<script type="text/javascript" src="/js/jquery-latest.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/gs/TweenMax.min.js"></script>
<script type="text/javascript" src='/js/intro.js'></script>
<script type="text/javascript" src="/js/typewriting.min.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>

<script type="text/javascript" src="/secure/lang/servlets/js-min/slc.min.js"></script>

 <script type="text/javascript" src="/secure/lang/servlets/js/servlet-life-cycle.js"></script> 

<title>Servlet life cycle</title>

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
	margin-top: 10px;
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
	height: 100px;
	border-top: 1px solid gray;
	background: white;
	/* overflow: auto; */
}

.margin-top5 {
	margin-top: 5px;
}

.margin-top20 {
	margin-top: 15px;
} /* browse css closed */

.margin-top30 {
	margin-top: 30px;
}

.animation-div {
	background-color: #fff6ea;
}

.margin0 {
	margin: 0 !important;
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

#servletContainer {
	font-family: status-bar;
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

.inline-block {
	display: inline-block;
    margin: 0 35px;
    padding: 4px 6px;
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

img {
	width: 100%;
	height: 100%;
}

.introjs-fixParent {
	position: relative !important;
}

</style>
</head>

<body>
	<script type="text/javascript">
	$(document).ready(function() {
		lifeCycleAnimation();
		//$('.html-body').css({'overflow' : 'auto'});
		//$('.opacity00').removeClass('opacity00');
	});
	</script>
<div class="col-xs-12 padding00">
	<div class="ct-box-main">
		 <div class="text-center">
			<h1 class="label ct-demo-heading text-center" id="headingSection">Servlet Life Cycle</h1>
		</div> 
	</div>
	<div class="col-xs-12">
		<div class="col-xs-12">
			<div class="col-xs-12 padding00 box-border opacity00" id="animationDiv">
			<svg class="svg-css" id="svgId">
					<marker id="myMarker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: #970f0f;"> <path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/></marker>
					<line x1="40.5%" y1="28%" x2="51.1%" y2="28%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line1"/>
					<line x1="63.7%" y1="67%" x2="63.7%" y2="50%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line2"/>
					<line x1="63.7%" y1="44.6%" x2="63.7%" y2="32.5%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line3"/>
					<line x1="50.5%" y1="28%" x2="60.5%" y2="28%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line4"/>
					<line x1="60.5%" y1="31%" x2="40.5%" y2="31%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line5"/>
					<line x1="40.5%" y1="38%" x2="51.1%" y2="38%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line6"/>
					<line x1="50.5%" y1="38%" x2="61.2%" y2="38%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line7"/>
					<line x1="61.2%" y1="38%" x2="61.2%" y2="32.9%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line8"/>
					<line x1="62.4%" y1="32%" x2="62.4%" y2="40.9%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line9"/>
					<line x1="62.4%" y1="40.9%" x2="40.4%" y2="40.9%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line10"/>
					<line x1="63.7%" y1="27.6%" x2="63.7%" y2="15.5%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line11"/>
					<line x1="40.5%" y1="80%" x2="51.1%" y2="80%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line12"/>
					<line x1="50.5%" y1="80%" x2="53.1%" y2="80%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line13"/>
					<line x1="53.1%" y1="80%" x2="53.1%" y2="31%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line14"/>
					<line x1="53.1%" y1="31%" x2="60.4%" y2="31%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line15"/>
					<line x1="60.6%" y1="28%" x2="49.4%" y2="28%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line16"/>
					<line x1="49.4%" y1="28%" x2="49.4%" y2="73%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line17"/>
					<line x1="49.4%" y1="73%" x2="40.4%" y2="73%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line18"/>
					
					
					<text id="text1" fill="black" y="27.1%" x="43.4%">request 1</text>
					<text id="text2" fill="black" y="34.1%" x="43.4%">response 1</text>
					<text id="text3" fill="black" y="37.1%" x="43.4%">request 2</text>
					<text id="text4" fill="black" y="44.1%" x="43.4%">response 2</text>
					<text id="text5" fill="black" y="84.1%" x="43.4%">request 1</text>
					<text id="text6" fill="black" y="76.1%" x="43.4%">response 1</text>
					
				</svg>
			
				<div class='col-xs-12 padding00'>
					<div class='col-xs-5' id='browsersDiv'>
						<div class="col-xs-12 padding00">
							<div class='col-xs-12 padding00 opacity00' id='browser1'></div>
							<div class='col-xs-12 padding00 opacity00' id='browser2'></div>
							<div class='col-xs-12 padding00 opacity00' id='browser3'></div>
							<div class="col-xs-12 margin-top5"></div>
						</div>
					</div>
					<div class="col-xs-6 col-xs-offset-1 margin-top5 servlet-container">
						<div class="col-xs-12 padding00">
							<div class="col-xs-12 box-border padding00 opacity00" id="servletContainer">
								<div class="col-xs-12 padding00 title-of-servlet text-center padding00" id="servletContainerTitle">Servlet Container</div>
								<div class="col-xs-12">
									<div class="col-xs-6">
										<div class="col-xs-12">
											<div class="col-xs-12 margin-top20">
											<div class="col-xs-12 padding00 text-center" id="destroy">
												<div class="opacity00 inline-block service margin-top30 text-center padding00" id="destroyObj">
													<span id="desMtd">destroy()</span></div>
												</div>
											</div>
											<div class="col-xs-12 margin-top30">
												<div class="col-xs-12 text-center margin-top30">
													<div class="opacity00 inline-block service margin-top30 text-center padding00" id="service1">
														<span id="serMth">service()</span></div>
												</div>
											</div>
											<div class="col-xs-12 margin-top30">
												<div class="col-xs-12 text-center margin-top30 padding00">
													<div class="opacity00 inline-block servlet margin-top30 text-center padding00" id="initMethod"><span>init()</span></div>
												</div>
											</div>
										</div>
										<div class="col-xs-12">
											<div class="col-xs-12 padding00 opacity00" id="servletPool">
											<div class="col-xs-12 pool-height padding00" id="servletObjects">
												<div class="col-xs-12 text-center margin-top30 padding00" id="div1">
													<div class="inline-block margin-top30 text-center" id="servletInsta">
													<span id="srltInst" class="opacity00">servlet Instance</span></div>
												</div>
											</div>
												<div class="col-xs-12 padding00 title-of-servlet-pool text-center padding00" id="servletInstanceTitle">Servlet Instance Pool</div>
											</div>
										</div>
										<div class="col-xs-12 margin-top30"></div>
									</div>
									<div class="col-xs-6">
										<div class="col-xs-12">
											<div class="col-xs-12 margin-top30 text-center opacity00" id="extraText">Servlet Instance</div>
											<div class="col-xs-12 opacity00" id="servletClassFolder">
												<div class="col-xs-9 folder-shape margin-top20"></div>
												<div class="col-xs-12 folder-body text-center" id="dotClassFilesList"></div>
												<div class="col-xs-12 text-center">Class</div>
											</div>
										</div>
										<div class="col-xs-12 margin-top30">
											<div class="col-xs-12 margin-top30">
												<div class="col-xs-12 padding00 text-center opacity00" id="destroyIcon">
  												<i class="fa fa-clock-o fa-4x fa-spin margin-top30" id="clock"></i>
  												</div>
  											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class='col-xs-12 text-center buttons-div'>
		<button type="button" class="btn btn-warning visibility-hidden" id="restartBtn">Restart</button>
	</div>
</div>
</body>

</html>
