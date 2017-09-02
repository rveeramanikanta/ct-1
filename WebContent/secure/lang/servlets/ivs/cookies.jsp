<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Cookies</title>
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
<script src="/secure/lang/servlets/js/cookies.js"></script>

<style type="text/css">

.border-css {
	border: 1px solid grey;
}

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

.padding00 {
	padding: 0;
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
	min-height: 166px;
	border-top: 1px solid gray;
	background: white;
}

.margin-top5 {
	margin-top: 5px;
}

.margin-top20 {
	margin-top: 20px;
}

.servlet-div {
	min-height: 250px;
}

.container-title {
	background: #856941;
	color: white;
}

.margin-bottom10 {
	margin-bottom: 10px;
}

.margin-top10 {
	margin-top: 10px;
}

.servlet-containerdiv {
	border-radius: 6px;
	background: #dfe2db;
	border-top: none;
	min-height: 114px;
	margin-top: 44px;
}

.servlet-pool {
	background: lightblue none repeat scroll 0 0;
	border-radius: 0 0 6px 6px;
	color: darkred;
	font-size: 14px;
}

table {
	width: 100%;
	table-layout: fixed;
	text-align: center;
	border: 1px solid grey;
}

td {
	padding: 4px;
	text-align: center;
	border: 1px solid grey;
}

.signin-form {
 	maxlength: 15;
 	font-size: 12px;
 	height: 27px;
}

.btn-primary {
    font-size: 10px;
}

.ct-fonts {
	font-family: monospace;
	font-weight: bold;
}

.ellipse {
	background-color: #8a0651;
    box-shadow: 0 0 2px;
    padding: 6px !important;
    color: white;
    text-align: center;
    border-radius: 6px;
}

.servletinstance-box {
    background-color: #634271;
    border-radius: 0 12px;
    box-shadow: 0 0 2px;
    padding: 6px !important;
    color: white;
    text-align: center;
}

.margin-left {
	margin-left: 20px;
}

.error-text {
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
.response-color {
	stroke: black !important;
}

img {
	width: 19%
}

.position-css {
	display: inline-block;
	position: relative; 
}

.form-body {
	box-shadow: 5px 5px 9px 0 #888888;
	font-family: monospace;
}

text {
	font-family: monospace;
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

.compose-box {
	 background: #d14836;
	 color: white;
	 border-radius: 3px;
}

.green-clr {
	color: green;
}

.margin-bottom5 {
	margin-bottom: 5px;
}

.folder-shape {
	border: 2px solid gray;
	border-radius: 5px 15px 0 0;
	margin-bottom: -1px;
	padding: 5px;
}

.folder-body {
	border-radius: 0 10px 10px;
	box-shadow: 1px 1px 0 2px #cccccc;
	border: 2px solid gray;
}
</style>
</style>
</head>
<script type="text/javascript">
$(document).ready(function() {
	cookiesReadyFunction();
});
</script>
<body>
	<div class="col-xs-12">
		<div class="text-center margin-top20"><h1 class="label ct-demo-heading text-center" id="headingSection">Cookies</h1></div> 
		<div class="col-xs-12 padding00 margin-top20">
			<div class="col-xs-10 col-xs-offset-1 padding00" id="mainDiv">
				<svg class="svg-css">
					<marker id="markerEnd" refX="4" refY="2.5" markerWidth="5" markerHeight="5" orient="auto" style="fill: maroon;">
						<path d="M0,0 L5,2.5 L0,5 Z" class="arrow"/>
					</marker>
					<line id="line1" x1="33.3%" y1="40%" x2="41.6%" y2="40%" class="svg-line" style="marker-end: url('#markerEnd');"/>
					<text id="text1" x="34%" y="39%" class="opacity00" fill="purple">request 1</text>
					<line id="line2" x1="50.8%" y1="81.6%" x2="50.8%" y2="43.3%" class="svg-line marker-css"/>
					<line id="line3" x1="49.2%" y1="36%" x2="49.2%" y2="34%" class="svg-line" style="marker-end: url('#markerEnd');"/>
					<line id="line4" x1="49.2%" y1="34%" x2="33.5%" y2="34%" class="svg-line marker-css"/>
					<text id="text2" x="35.4%" y="33%" class="opacity00" fill="purple">response 1</text> 
					
					<line id="line5" x1="33.3%" y1="28%" x2="41.6%" y2="28%" class="svg-line" style="marker-end: url('#markerEnd');"/>
					<text id="text3" x="35%" y="27%" class="opacity00" fill="purple">request 2</text>
					<line id="line6" x1="58.5%" y1="81.5%" x2="58.5%" y2="32%" class="svg-line marker-css"/>
					<line id="line7" x1="58.5%" y1="25%" x2="58.5%" y2="22%" class="svg-line" style="marker-end: url('#markerEnd');"/>
					<line id="line8" x1="58.5%" y1="22%" x2="33.5%" y2="22%" class="svg-line marker-css"/>
					<text id="text4" x="35.5%" y="21%" class="opacity00" fill="purple">response 2 &lt;- 2314regd..</text>
					
					<line id="line9" x1="33.3%" y1="16%" x2="41.6%" y2="16%" class="svg-line" style="marker-end: url('#markerEnd');"/>
					<text id="text5" x="35%" y="15%" class="opacity00" fill="purple"> request 3 -&gt; 2314regd..</text>
					<line id="line10" x1="68%" y1="81.5%" x2="68%" y2="21%" class="svg-line marker-css"/>
					<line id="line11" x1="67.7%" y1="13.5%" x2="67.7%" y2="10%" class="svg-line" style="marker-end: url('#markerEnd');"/>
					<line id="line12" x1="67.7%" y1="10%" x2="33.5%" y2="10%" class="svg-line marker-css"/>
					<text id="text6" x="35.4%" y="9%" class="opacity00" fill="purple">response 3 &lt;- 2314regd..</text>
					
					<line id="line13" x1="33.3%" y1="71%" x2="49%" y2="71%" class="svg-line" style="marker-end: url('#markerEnd');"/>
					<line id="line14" x1="49%" y1="71%" x2="49%" y2="43.3%" class="svg-line marker-css"/>
					<text id="text7" x="34%" y="70%" class="opacity00" fill="purple">request 1</text>
					<line id="line15" x1="47.3%" y1="43%" x2="47.3%" y2="66%" class="svg-line" style="marker-end: url('#markerEnd');"/>
					<line id="line16" x1="47.3%" y1="66%" x2="33.3%" y2="66%" class="svg-line marker-css"/>
					<text id="text8" x="35.5%" y="65.5%" class="opacity00" fill="purple">response 1</text>
					
					<line id="line17" x1="33.3%" y1="60%" x2="44.5%" y2="60%" class="svg-line" style="marker-end: url('#markerEnd');"/>
					<line id="line18" x1="44.5%" y1="60%" x2="44.5%" y2="30%" class="svg-line" style="marker-end: url('#markerEnd');"/>
					<line id="line19" x1="44.5%" y1="30%" x2="55.5%" y2="30%" class="svg-line marker-css"/>
					<text id="text9" x="36.4%" y="59%" class="opacity00" fill="purple">request 2</text>
					<line id="line20" x1="55.5%" y1="26%" x2="42.5%" y2="26%" class="svg-line" style="marker-end: url('#markerEnd');"/>
					<line id="line21" x1="42.5%" y1="26%" x2="42.5%" y2="55%" class="svg-line" style="marker-end: url('#markerEnd');"/>
					<line id="line22" x1="42.5%" y1="55%" x2="33.3%" y2="55%" class="svg-line marker-css"/>
					<text id="text10" x="43%" y="24%" class="opacity00" fill="purple">response 2 &lt;- 17gw47de..</text>
					
					<line id="line1a" x1="41.6%" y1="40%" x2="46%" y2="40%" class="svg-line marker-css"/>
					<line id="line2a" x1="41.6%" y1="28%" x2="55.5%" y2="28%" class="svg-line marker-css"/>
					<line id="line3a" x1="41.6%" y1="16%" x2="64.5%" y2="16%" class="svg-line marker-css"/>
				</svg>
				<div class="col-xs-12 padding00">
					<div class="col-xs-4 padding00" id="browserId1"></div>
					<div class="col-xs-7 col-xs-offset-1 servlet-div border-css padding00" id="servletContainerDiv">
						<div class="col-xs-12 padding00">
							<div class="col-xs-12 text-center container-title ct-fonts padding00">ServletContainer</div>
							<div class="col-xs-12" id="firstDiv">
								<div class="col-xs-8 padding00 margin-top10">
									<div class="col-xs-12 padding00">
										<div class="col-xs-12 padding00 text-center">
											<div class="col-xs-3 col-xs-offset-3 ct-fonts servletinstance-box opacity00 position-css"
													style="padding: 6px;" id="dupObjFile">
												<span id="dupObjFileNme" class="opacity00 position-css">signIn.obj</span>
											</div>
										</div>
										<div id="serviceMthdDiv" class="col-xs-12 padding00"></div>
									</div>
								</div>
								<div class="col-xs-3 col-xs-offset-1 margin-bottom10 margin-top5 padding00 opacity00" id="servletClassFile">
									<div class="col-xs-9 padding00 folder-shape"></div>
									<div class="border-css col-xs-12 padding00 folder-body">
										<div class="col-xs-12 text-center margin-top10 padding00" id="fileMainDiv"></div>
										<div class="col-xs-12 text-center margin-top5 padding00 opacity00" id="faEtcSymbol">
					            			<i class="fa fa-ellipsis-h"></i><br/><i class="fa fa-ellipsis-h"></i>
										</div>
									</div>
									<div class="col-xs-12 text-center ct-fonts padding00">Servlet Class Files</div>
								</div>
							</div>
							<div class="col-xs-12 margin-top20">
								<div class="col-xs-7 padding00 margin-bottom10">
									<div class="col-xs-12 border-css servlet-containerdiv padding00 opacity00" id="servletContainer">
										<div class="col-xs-12 padding00 margin-bottom10"  style="min-height: 83px;">
											<div class="col-xs-12 padding00" id="objFileDiv" style="margin-top: 39px;"></div>
										</div>
										<div class="col-xs-12 text-center padding00 servlet-pool ct-fonts">Servlet Instance Pool</div>
									</div>
								</div>
								<div class="col-xs-4 col-xs-offset-1 padding00 margin-top20">
									<div class="col-xs-12 padding00 opacity00 destroy" id="hashMapDiv">
										<div class="text-center col-xs-12 ct-fonts ct-blue-color">Cookies Hashmap</div>
										<table class="col-xs-12">
											<tr><td class="ct-fonts" style="color: green;">cookie Id</td>
												<td class="ct-fonts" style="color: green;">file name</td></tr>
											<tr><td id="objTd1" class="opacity00">2314regd..</td><td id="objId1" class="opacity00">logIn.obj</td></tr>
											<tr><td id="objTd2" class="opacity00">17gw47de..</td><td id="objId2" class="opacity00">logIn.obj</td></tr>
										</table>
									</div>
									<div class="col-xs-12 padding00 text-right opacity00" id="clockDiv"><i class="fa fa-clock-o fa-3x"></i></div>
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