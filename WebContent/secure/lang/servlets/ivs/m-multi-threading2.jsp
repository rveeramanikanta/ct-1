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
<script src="/secure/lang/servlets/js/m-multi-threading.js"></script>
<title>Multi Threading</title>
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
	min-height: 112px;
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


.margin-top40 {
	margin-top: 80px;
}

.margin-bottom10 {
	margin-bottom: 10px;
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

.background-color-palegreen {
	background-color: #983232;
	border-radius: 12px;
    box-shadow: 0 0 2px;
}

.color-aquamarine {
	color: #008080; 
}

.transform {
	transform: rotate(90deg); 
	width: 60px;
}

.thread-pool-box {
	border: 1px solid grey; 
	background-color: #e3e0cf; 
	border-top: none; 
	padding: 3px; 
	min-height: 66px; 
	display: flex; 
	justify-content: center; 
	align-items: baseline;
}

.eclipse-shape {
	border-radius: 100px / 32px; 
	box-shadow: 0px 0px 5px;
	padding: 6px;
	text-align: center; 
}

.bg-color-top-1 {
	background-color: #f3acac;
}

.bg-color-top-2 {
	background-color: #89aeef;
}

.bg-color-top-3 {
	background-color: #f9b0ed;
}

.new-servlet-box {
    box-shadow: 0px 0px 2px;
    text-align: center;
    color: white;
    font-weight: bold;
}

.margin-left30 {
	margin-left: 30.333%;
}

.eclipse-shape-small {
	background-color: #d7679e;
    border-radius: 50%;
    box-shadow: 0 0 5px;
    padding: 5px;
    text-align: center;
	font-size: 12px;
	color: black;
}

.bg-color-white {
	background-color: white;
}

.response-color {
	stroke: #333db7 !important;
}

.pool-heading {
	background: lightblue;
	border-radius: 0 0 8px 8px;
	color: brown;
}

.instance-box {
	border-top: none;
}

.margin-left20 {
	margin-left: 20px;
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
	marker-end: url("#myMarker");
}

.ct-fonts {
	font-weight: bold;
	font-family: monospace;
}
</style>
</head>
<script type="text/javascript">
$(document).ready(function() {
	multiThreadingReady();
});
</script>
<body>
	<div class="col-xs-12 padding00">
		<div class="text-center margin-top20"><h1 class="label ct-demo-heading text-center" id="headingSection">Servlets MultiThreaded</h1></div>
		<div class="col-xs-12 padding00 margin-top20">
			<div class="col-xs-10 col-xs-offset-1 padding00">
				<div class="col-xs-12 padding00" id="mainDiv">
					<div class="col-xs-4 padding00" id="browserId"></div>
					<div class="col-xs-8 padding00">
						<div class="col-xs-12 padding00">
							<svg class="svg-css">
								<marker id="myMarker" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: maroon;">
									<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
								</marker>
								<line x1="0%" y1="28.6%" x2="8%" y2="28.6%" class="svg-line marker-css" id="arrow1"/>
								<line x1="8.8%" y1="28.6%" x2="24.7%" y2="28.6%" class="svg-line marker-css" id="arrow2"/>
								<line x1="39.8%" y1="31.5%" x2="39.8%" y2="34.3%" class="svg-line marker-css" id="arrow3"/>
								<line x1="45.8%" y1="39.5%" x2="48.5%" y2="39.5%" class="svg-line marker-css" id="arrow4"/>
								<line x1="64.8%" y1="39.5%" x2="67.3%" y2="39.5%" class="svg-line marker-css" id="arrow5"/>
								<line x1="70.8%" y1="35%" x2="70.8%" y2="21.5%" class="svg-line" id="arrow6" stroke-dasharray="9, 5" style="marker-end: url('#myMarker')"/>
								<line x1="70.8%" y1="21.5%" x2="25.4%" y2="21.5%" class="svg-line marker-css" id="arrow7" stroke-dasharray="9, 5"/>
								<line x1="8%" y1="21.5%" x2="0%" y2="21.5%" class="svg-line marker-css" id="arrow8" stroke-dasharray="9, 5"/>
								<line x1="74%" y1="34.5%" x2="74%" y2="11%" class="svg-line" id="arrow9" style="marker-end: url('#myMarker')"/>
								<line x1="74%" y1="11%" x2="47%" y2="11%" class="svg-line marker-css" id="arrow10"/>
								
								<line x1="0%" y1="60%" x2="8%" y2="60%" class="svg-line marker-css" id="arrow11"/>
								<line x1="8.8%" y1="60%" x2="56.5%" y2="60%" class="svg-line marker-css" id="arrow12"/>
								<line x1="72%" y1="57.5%" x2="72%" y2="44%" class="svg-line marker-css" id="arrow13"/>
								<line x1="69.8%" y1="43.8%" x2="69.8%" y2="51%" class="svg-line" id="arrow14" stroke-dasharray="9, 5" style="marker-end: url('#myMarker')"/>
								<line x1="69.8%" y1="51%" x2="25.4%" y2="51%" class="svg-line marker-css" id="arrow15" stroke-dasharray="9, 5"/>
								<line x1="8%" y1="51%" x2="0%" y2="51%" class="svg-line marker-css" id="arrow16" stroke-dasharray="9, 5"/>
								<line x1="77%" y1="34.5%" x2="77%" y2="8%" class="svg-line" id="arrow17" style="marker-end: url('#myMarker')"/>
								<line x1="77%" y1="8%" x2="47%" y2="8%" class="svg-line marker-css" id="arrow18"/>
								
								<line x1="0%" y1="89%" x2="8%" y2="89%" class="svg-line marker-css" id="arrow21"/>
								<line x1="8.8%" y1="89%" x2="63.5%" y2="89%" class="svg-line marker-css" id="arrow22"/>
								<line x1="80%" y1="86.5%" x2="80%" y2="44%" class="svg-line marker-css" id="arrow23"/>
								<line x1="77.8%" y1="43.8%" x2="77.8%" y2="82%" class="svg-line" id="arrow24" stroke-dasharray="9, 5" style="marker-end: url('#myMarker')"/>
								<line x1="77.8%" y1="82%" x2="25.4%" y2="82%" class="svg-line marker-css" id="arrow25" stroke-dasharray="9, 5"/>
								<line x1="8%" y1="82%" x2="0%" y2="82%" class="svg-line marker-css" id="arrow26" stroke-dasharray="9, 5"/>
								<line x1="80%" y1="34.5%" x2="80%" y2="5%" class="svg-line" id="arrow27" style="marker-end: url('#myMarker')"/>
								<line x1="80%" y1="5%" x2="47%" y2="5%" class="svg-line marker-css" id="arrow28"/>

								<text id="text1" x="1%" y="27.1%" fill="purple" class="ct-fonts">request 1</text>
								<text id="text2" x="1%" y="20%" fill="purple" class="ct-fonts">response 1</text>
								<text id="text3" x="1%" y="58.5%" fill="purple" class="ct-fonts">request 2</text>
								<text id="text4" x="1%" y="49.5%" fill="purple" class="ct-fonts">response 2</text>
								<text id="text5" x="1%" y="87.5%" fill="purple" class="ct-fonts">request 3</text>
								<text id="text6" x="1%" y="80.5%" fill="purple" class="ct-fonts">response 3</text>
								
							</svg>
							<div id='singleThreadModelBox' class='col-xs-11 col-xs-offset-1 border-radius5'>
								<div class="col-xs-12 margin-top10 padding00">
									<div class="col-xs-4 col-xs-offset-1 padding00">
										<div class="col-xs-12 instance-box border-css padding00">
											<div class="col-xs-12 padding00" id="poolDiv" style="min-height: 40px;"></div>
											<div class="col-xs-12 padding00 text-center margin-top10 ct-fonts pool-heading">Thread Pool</div>
										</div>
									</div>
								</div>
								<div class="col-xs-12 padding00">
									<div class="col-xs-12 padding00 margin-top10">
										<div class="col-xs-12 padding00 margin-top10">
								 	 		<div class="col-xs-2 padding00 eclipse-shape bg-color-top-1" id="response1">response</div>
								 	 		<!-- <div class="col-xs-2 col-xs-offset-3 eclipse-shape bg-color-top-1 " id="servletConfig">
									  			ServletConfig</div>
										  	<div class="col-xs-1 margin-left20 eclipse-shape-small" id="request">request</div>
									    	<div class="col-xs-1 eclipse-shape-small bg-color-white" id="emptyResponse" style="margin-left: 5px;">
									    		response</div> -->
										</div>
										<div class="col-xs-12 padding00 margin-top10">
											<div class="col-xs-3 col-xs-offset-2 padding00">
												<div class="col-xs-12 padding00">
													<div class="eclipse-shape-small col-xs-5">request</div>
								     				<div class="eclipse-shape-small col-xs-5 bg-color-white" style="margin-left: 5px;">response</div>
								     			</div>
								     		</div>
										</div>
									</div>
									<div class="col-xs-12 padding00 margin-top20">
										<div class="col-xs-9 col-xs-offset-3 padding00">
											<div class="col-xs-12 padding00 font-size" id="model1">
										    	<div class="col-xs-2 new-servlet-box background-color-palegreen margin-left20" 
										    		style="padding: 7px;" id="model10">New servlet instance</div>
										     	<div class="col-xs-3 new-servlet-box background-color-palegreen margin-left20" id="model11"
										     		style="padding: 4px;">Invoke init (<span class='configColor'>ServletConfig</span>) method</div>
												<div class="col-xs-3 new-servlet-box background-color-palegreen margin-left20" id="model12"
										    		style="padding: 8px; padding: 9px;">Invoke service (<span class='reqColor'>request</span>,
										    		 <span class='resColor'>response</span>)</div>
												<div class="col-xs-2 new-servlet-box background-color-palegreen margin-left20" id="model13"
										    		style="padding: 8px;">Invoke destroy</span></div>
										    </div>
										</div>
									</div>
									<div class="col-xs-12 padding00 margin-top20">
										<div class="col-xs-12 padding00">
											<div class="col-xs-2 padding00 eclipse-shape bg-color-top-2" id="response2">response</div>
										</div>
										<div class="col-xs-12 padding00">
											<div class="col-xs-3 col-xs-offset-6 padding00">
												<div class="col-xs-12 padding00 margin-top20 margin-left20">
													<div class="eclipse-shape-small col-xs-5">request</div>
								     				<div class="eclipse-shape-small col-xs-5 bg-color-white" style="margin-left: 5px;">response</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-xs-12 padding00 margin-top40">
										<div class="col-xs-12 padding00 margin-top10">
										  	<div class="col-xs-2 padding00 eclipse-shape bg-color-top-3" id="response3">response</div>
										</div>
										<div class="col-xs-12 padding00">
											<div class="col-xs-3 col-xs-offset-7 padding00">
												<div class="col-xs-12 padding00 margin-top10 margin-left20">
													<div class="eclipse-shape-small col-xs-5">request</div>
										     		<div class="eclipse-shape-small col-xs-5 bg-color-white" style="margin-left: 5px;">response</div>
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
		<div class="col-xs-12 text-center margin-top20"><span id="restartBtn" class="btn btn-warning opacity00">Restart</span></div>
	</div>
</body>
</html>