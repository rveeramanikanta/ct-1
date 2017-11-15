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

<script type="text/javascript" src="/secure/lang/servlets/js/jsp-life-cycle.js"></script>

<title>Jsp Life cycle</title>

</head>

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
	font-size: 15px;
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

img {
	width: 100%;
	height: 100%;
}

#img0, #img1,#img2 {
	width: 14%
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
    padding: 4px 4px;
}

.service, .bg-color, .servlet  {
	background: #4d4d00;
	color: white;
	font-weight: bold;
	/* border-radius: 4px; */
	 
}

.service {
	border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}

/* //#b30047  #0066cc*/

.servlet {
	border-radius: 4px;
	background: #b30047;
}

.bg-color {
	background: #e6f2ff;
	color: black;
	border: 1px solid gray;
	border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.faa-passing {
    position: relative;
    animation-name: example;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}

/* Standard syntax */
@keyframes example {
      0% {
      	left: 4px;
      	bottom: 0px;
      }
    100% {
    	left: 8px;
    	bottom: 0px;
    }
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


</style>

<body>

<script type="text/javascript">
	$(document).ready(function() {
		jspLifeCycleAnimation();
		//$(".opacity00").removeClass("opacity00");
		
	})
</script>

<div class="col-xs-12 padding00">
	<div class="ct-box-main">
		 <div class="text-center">
			<h1 class="label ct-demo-heading text-center" id="headingSection">JSP Life Cycle</h1>
		</div> 
	</div>
	<div class="col-xs-12">
		<div class="col-xs-12">
			<div class="col-xs-12 padding00 box-border animation-div" id="animationDiv">
				<svg class="svg-css" id="svgId">
					<marker id="myMarker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: #970f0f;"> <path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/></marker>
					<line x1="32.1%" y1="13.5%" x2="42.7%" y2="13.5%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line1"/>
					<line x1="61.7%" y1="85%" x2="61.7%" y2="80%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line2"/>
					<line x1="61.7%" y1="68%" x2="61.7%" y2="62%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line3"/>
					<line x1="70.7%" y1="49%" x2="70.7%" y2="44%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line4"/>
					<line x1="63.3%" y1="36%" x2="60.7%" y2="36%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line5"/>
					<line x1="53.7%" y1="29%" x2="53.7%" y2="24%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line6"/>
					<line x1="42.1%" y1="13.5%" x2="46.7%" y2="13.5%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line7"/>
					<line x1="46.6%" y1="16.5%" x2="32.2%" y2="16.5%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line8"/>
					<line x1="32.1%" y1="45.5%" x2="42.7%" y2="45.5%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line9"/>
					<line x1="42.1%" y1="45.5%" x2="43.7%" y2="45.5%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line10"/>
					<line x1="43.7%" y1="45.5%" x2="43.7%" y2="21.5%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line11"/>
					<line x1="43.7%" y1="21.5%" x2="46.4%" y2="21.5%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line12"/>
					<line x1="46.7%" y1="19.5%" x2="41.4%" y2="19.5%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line13"/>
					<line x1="41.5%" y1="19.6%" x2="41.5%" y2="41.5%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line14"/>
					<line x1="41.5%" y1="41.5%" x2="32.2%" y2="41.5%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line15"/>
					<line x1="60.7%" y1="17.5%" x2="63.1%" y2="17.5%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line16"/>
					<line x1="32.1%" y1="74.5%" x2="42.7%" y2="74.5%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line17"/>
					<line x1="42.1%" y1="74.5%" x2="43.7%" y2="74.5%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line18"/>
					<line x1="43.7%" y1="74.5%" x2="43.7%" y2="21.5%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line19"/>
					<line x1="43.7%" y1="21.5%" x2="46.4%" y2="21.5%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line20"/>
					<line x1="46.7%" y1="19.5%" x2="41.4%" y2="19.5%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line21"/>
					<line x1="41.5%" y1="19.6%" x2="41.5%" y2="69.5%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line22"/>
					<line x1="41.5%" y1="69.5%" x2="32.2%" y2="69.5%" style="marker-end: url('#myMarker'); display: inline;" class="svg-line" id="line23"/>
					
					<text id="text1" fill="black" y="12.1%" x="35.4%">request 1</text>
					<text id="text2" fill="black" y="19.1%" x="35.4%">response 1</text>
					<text id="text3" fill="black" y="48.1%" x="35.4%">request 2</text>
					<text id="text4" fill="black" y="39.1%" x="34.4%">response 2</text>
					<text id="text5" fill="black" y="77.1%" x="34.4%">request 3</text>
					<text id="text6" fill="black" y="68.1%" x="34.4%">response 3</text>
					</svg>
			
			
				<div class="col-xs-12 padding00">
					<div class="col-xs-4" id="browserDiv">
						<div class="col-xs-12 padding00" id="browser1"></div>
						<div class="col-xs-12 padding00" id="browser2"></div>
						<div class="col-xs-12 padding00" id="browser3"></div>
						<div class="col-xs-12 margin-top20"></div>
					</div>
					<div class="col-xs-7 col-xs-offset-1 margin-top5 servlet-container">
						<div class="col-xs12 padding00">
							<div class="col-xs-12 box-border padding00 opacity00" id="servletContainer">
								<div class="col-xs-12 padding00 title-of-servlet text-center padding00" id="servletContainerTitle">Servlet Container</div>
								<div class="col-xs-12">
									<div class="col-xs-8 padding00">
										<div class="col-xs-12 padding00" id="servletLifeCycleAnim"></div>
									</div>
									<div class="col-xs-4 padding00 margin-top30">
										<div class="col-xs-12 opacity00" id="servletJspFolder">
												<div class="col-xs-8 folder-shape margin-top20"></div>
												<div class="col-xs-12 folder-body text-center padding00" id="dotJspFilesList"></div>
												<div class="col-xs-12 text-center">JSP Files</div>
										</div>
										<div class="col-xs-12 margin-top30">
											<div class="col-xs-12">
												<div class="col-xs-12 padding00 text-center opacity00" id="destroyIcon">
  												<i class="fa fa-clock-o fa-4x fa-spin" id="clock"></i>
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
