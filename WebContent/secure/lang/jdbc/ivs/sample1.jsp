<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/font-awesome.min.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">

<link rel="stylesheet" href="/css/alertify/alertify.core.css"/>
<link rel="stylesheet" href="/css/alertify/alertify.default.css"/>

<link href="/css/introjs-ct.css" rel="stylesheet">
<!-- <link href="/css/data-structures-css.css" rel="stylesheet"> -->

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<script src="/js/alertify/alertify.js" type="text/javascript"></script>
 <script src ="/secure/lang/jdbc/js/sample1.js"text/javascript"></script>
<title>get-connection</title>
<style type="text/css">

.main-box-border {
	border: 2px solid transparent;
	border-radius: 10px;
	height: 564px;
}
.animation-box {
	margin-top: 65px;
	position: relative;
	display: flex;
	align-items: center;
}

.box-border {
	align-items: center;
    border: 1px solid gray;
    border-radius: 8px;
    display: flex;
    height: 55px;
    justify-content: center;
    text-align: center;
}
.box {
	align-items: center;
    border: 1px solid gray;
    border-radius: 8px;
    display: flex;
    height: 32px;
    justify-content: center;
    text-align: center;
}
.box-border1 {
	align-items: center;
    border: 1px solid gray;
    border-radius: 8px;
    display: flex;
    height: 45px;
    justify-content: center;
    text-align: center;
    margin-top: 5px;
}


.invisable-div {
	
    border: 1px solid gray;
    border-radius: 15px;
   
     height: 220px;
    justify-content: center;
}

.invisable-div2 {
	
    border: 1px solid gray;
    border-radius: 15px;
    height: 220px;
    justify-content: center;
}

.padding-left0 {
	padding-left: 0;
}

.margin-top10 {
	margin-top: 10px;
}

.padding0 {
	padding: 0;
}

.text-font {
	font-size: 12px;
}
.text-font1 {
	font-size: 10px;
}
.text-center1 {
	/* display: flex; */
    /* height: 220px; */
    justify-content: center;
    align-items: center;
}

/* #animationDiv {
	margin-top: 10px;
} */

.popover-content {
	background-color: lightgray;
	color: black;
}

.popover {
	z-index: 99999999;
	width: 215px;
}

.ct-btn-next {
	float: right;
	padding: 2px 5px;
	cursor: pointer;
}

.tooltip-height {
	height: 20px;
	margin-top: 5px;
}

.ui-effects-transfer {
	border: 1px solid gray; 
	border-radius: 15px;
	z-index: 999999999;
 }

.green-color {
	color : green;
	font-weight: bold;
}
.green-color1 {
	color : green;
	font-weight: normal;
}
.border {
	border: 2px solid gray;
	border-radius: 6px;
	box-shadow: 0 1px 4px 1px gray;
	
}
.oval {
	border: 2px solid gray;
    border-radius: 50%;
    display: table-cell;
    height: 28px;
    position: absolute;
    width: 100%;
    margin-top: -9px;
	/* background-color: antiquewhite; */
}
.oval1 {
	border: 2px solid gray;
    border-radius: 50%;
    display: table-cell;
    height: 25px;
    position: absolute;
    width: 100%;
    margin-top: -9px;
	/* background-color: antiquewhite; */
}
.oval2 {
	border: 2px solid gray;
    border-radius: 50%;
    display: table-cell;
    height: 60px;
    position: absolute;
    width: 100%;
    margin-top: -9px;
	/* background-color: antiquewhite; */
}
.oval3 {
	border: 2px solid gray;
    border-radius: 50%;
    display: table-cell;
    height: 60px;
    position: absolute;
    width: 120%;
    margin-top: 15px;
	/* background-color: antiquewhite; */
}
/* .oval4 {
	border: 2px solid gray;
    border-radius: 50%;
   display: inline-flex;
    height: 45px;
    position: relative;
    width: 120%;
    margin-top: 2px;
	/* background-color: antiquewhite; */
} */
.database-box {
	border: 1px solid gray;
	border-radius: 8px;
	height: 80px;
	border-top:none;
	display: table;
	margin-bottom: 30px;
	padding:0;
	width:80px
}
.database-box1 {
	border: 1px solid gray;
	border-radius: 8px;
	height: 53px;
	border-top:none;
	display: table;
	margin-bottom: 30px;
	padding:0;
	width:86px
}
.database-box2 {
	border: 1px solid gray;
	border-radius: 8px;
	height: 53px;
	border-top:none;
	display: table;
	margin-bottom: 30px;
	padding:0;
	width:86px;
	margin-top: 35px;
}
.database-text-middle {
	vertical-align: middle;
	text-align: center;
	display: table-cell;
}
.circle {
    height: 100px;
    width: 100px;
   /* // background-color: gray; */
    border-radius: 50%;
    display: inline-block;
}
.circle2 {
    height: 76px;
    width: 98px;
   /* // background-color: gray; */
    border-radius: 50%;
    display: inline-block;
}
.svg-arrow-line1 {
	marker-end: url("#arrowEnd");
	display: none;
}
.svg-arrow-line2 {
	marker-end: url("#arrowEnd");
	display: none;
} 
.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}
.svg-line {
	stroke: gray;
	stroke-width: 2;
}
.svg-line1 {
	stroke: gray;
	stroke-width: 2;
}
.svg-line2 {
	stroke: gray;
	stroke-width: 2;
}
.svg-line3 {
	stroke: gray;
	stroke-width: 2;
}
.green-color {
	color : green;
	font-weight: lighter;
	font-size: 13px;
}
.border {
	border: 2px solid gray;
	border-radius: 6px;
	//box-shadow: 0 1px 4px 1px gray;
	
}
.blinking-border-background-green {
	animation: blink-border-background-green 3.10s linear 1;
}

@keyframes blink-border-background-green {
	
	25% {
		box-shadow:  0 2px 6px 2px green;
	}
	
	75% {
		box-shadow:  0 2px 6px 2px green;
	}
	
	100% {
		box-shadow:  0 2px 6px 2px gray;
	}
}
.oval4 {
	border: 2px solid gray;
    border-radius: 50%;
   display: inline-flex;
    height: 45px;
    position: relative;
  	 width:93px;
    margin-top: 2px;
	/* background-color: antiquewhite; */
} 
.context {
	/* background-color: rgba(255, 143, 11, 0.15);
    border: 2px dashed green; */
    border-radius: 0;
    height: 91px;
    width: 59.667%;
    margin-top:30px;
   /*  padding: 28px; */
    }
    .con {
	background-color: rgba(255, 143, 11, 0.15);
    border: 2px dashed green; 
    border-radius: 0;
    height: 50px;
    width: 65.667%;
    
   /*  padding: 28px; */
    }
    .display {
    display:none!important;
    }
    .ovel5 {
    border: 2px solid gray;
    border-radius: 50%;
    display: inline-flex;
    height: 35px;
    margin-left: 0;
    margin-top: 4px;
    position: relative;
    width: 83px;
    }
    .duplicate-backbutton {
	background-color:#41bbf4!important;
	float: right;
	padding: 1px 4px;
	cursor: pointer;
}
</style>
</head>
<body>
	<div>
		<h2 class="text-center">
			<span class="label label-default ct-demo-heading">Getting Connection to DB</span>
		</h2>
	</div>
		<div class="col-xs-10">
			<div class="main-box-border" id="mainBox">
			<div class="col-xs-12 margin-top10 padding0">
				<div class="col-xs-4">
					<!-- <div class ="col-xs-12"> -->
						<div class="invisable-div col-xs-12 opacity00" id="invisableDiv1">
							<div class="col-xs-12">
								<div class="col-xs-offset-1 col-xs-4 box-border padding0"
								style="background-color: #fffac2;">
								<div class="text-font1">Java Application</div>
								</div>
							</div>
						<div class = "col-xs-12">
								<div class = "col-xs-8">
									<div class = "col-xs-12">
										<div style="background-color: rgba(249, 145, 145, 0.26);margin-top: 20px;width:80px;margin-left:-9px;"
											class="col-xs-8 box-border padding0 ">
												<div class="text-font1"><b>Driver Manager</b></div>
										</div>
									</div>
								</div>
								<div class = "col-xs-4">
									<div class = "col-xs-12">
										<div class="oval4 col-xs-4"style="background-color:#8ce884;width:92px;margin-top:21px;margin-left: -55px;">
											<span class = "database-text-middle" style = "line-height:37px;display:flex;font-size:12px" >Connection</span>
										</div>
									</div>
								</div>
						</div>
							<div class = "col-xs-12">
								<div class=" col-xs-12 text" style = "display:inline-block;position:relative;">
									<div class= "col-xs-offset-1 col-xs-4 database-box2"style="height:45px;width:68px;border-radius: 2px; margin-left: 10px;">
										<div class="oval1" style="background-color: thistle;height:17px; width:68px;"></div>
											<span class="text-font1 database-text-middle"
													style="background-color: thistle; border-radius: 1px"> <b>D/B</b>
											</span>
										</div>
								</div>
							</div>
							</div>
							<!-- </div> -->
					</div>
						<div  class = "col-xs-offset-1 col-xs-7">
						<div class="invisable-div2 col-xs-12 opacity00" id="invisableDiv2">
						<div class="col-xs-12" style = "height:220px;">
							<div class = "col-xs-12">
								<div class="col-xs-3 box-border padding0"
								style="background-color: #fffac2;">
								<div class="text-font">Java Application
								<div id="jdbcApiBox1" class="border shadow text-center" style="background-color: sandybrown;margin-top: 10px; width: 107px;"> JDBC API
									</div>
								</div>
								</div>
							</div>
							<div class = "col-xs-12 con" style = "margin-left:150px;"> 
								<div class = col-xs-4 style= "padding-right:0px;padding-left:0px;">
									<div class="ovel5  col-xs-3" id = "connection1"style="background-color:  #8ce884;position:realative;font-size: 12px;line-height: 2.5;">Connection
										<!-- <span class = "database-text-middle" style = "line-height: 2.5;font-size: 12px; ">Connection </span> -->
									</div> 
								</div>
								<div class = col-xs-4 style = "padding-right:0px;">
									<div class="ovel5  col-xs-3" id = "st1"style="background-color:  #8ce884;position:realative;">
										<span class = "database-text-middle" style = "line-height: 2.5;font-size: 12px; ">statment </span>
									</div> 
								</div>
							     <div class = col-xs-4 style = "padding-right:0px;">
									<div class="ovel5  col-xs-3" id = "rs1"style="background-color:  #8ce884;position:realative;">
										<span class = "database-text-middle" style = "line-height: 2.5;font-size: 12px; ">resultset </span>
									</div> 
								</div>
							</div>
							
							<div class = "col-xs-12">
								<div class="col-xs-3 box padding0"
										style="background-color:rgba(249, 145, 145, 0.26);">
										<div class="text-font">Driver manager</div>
									</div>
							</div>
						<div class = "col-xs-12">
							<div class=" col-xs-12 text" style = "display:inline-block;position:relative;">
								<div class= "col-xs-4 database-box1 " style = "margin-top: 33px; height:45px; width:77px;margin-bottom:0px; border-radius:2px;">
									<div class="oval1" style="background-color: thistle;height:17px;width:77px; "></div>
										<span class="text-font database-text-middle"
										style="background-color: thistle; border-radius: 2px"> <b>D/B</b>
										</span>
									</div>
							</div>
						</div>
					</div>
					</div>
					</div>
					<div class="col-xs-8" id="animation2">
					<div class = col-xs-12>
						<div class=" col-xs-3">
						<div class="border shadow text-center opacity00" id="JavaBox2"
						style="background-color: lightyellow;">
						<div>
						<b> Java Application</b>
						</div>
						<div class="border  shadow text-center margin-top20 opacity00" id="jdbcApiBox"
						style="background-color: sandybrown;">
						<b>JDBC API</b>
						</div>
						</div>
						</div>
				</div>
		<div class = col-xs-12">
		  	<div class = "col-xs-offset-3 col-xs-9 context opacity00" id = context >
		  	
				<div class = col-xs-3>
				<div class="oval4 opacity00 col-xs-3" id = "connection"style="background-color:  #8ce884;position:realative;
   																			 margin-top: 24px;">
					<span class = "database-text-middle" style = "line-height: 2.5;font-size: 15px; ">Connection </span>
				</div> 
				</div>
				
				<div class = col-xs-3 style = "margin-left:36px;">
					<div class="oval4 opacity00  col-xs-3" id = "statment"style="background-color:  #8ce884;position:realative;margin-top:24px; ">
					<span class = "database-text-middle" style = "line-height: 2.5;font-size: 15px; ">statment </span>
					</div>
				</div> 
				
				<div class = col-xs-3 style = "margin-left:45px;" >
					<div class="oval4 opacity00  col-xs-3" id = "resultset"style="background-color:  #8ce884;position:realative;margin-top: 24px; ">
						<span class = "database-text-middle" style = "line-height: 2.5;font-size: 15px; ">resultset </span>
					</div>
					</div> 
				</div>
				
		 </div>
		 
		<div class = col-xs-3>
		   		 <div style="background-color: rgba(249, 145, 145, 0.26);height:40px;margin-left:17px; margin-top:75px;"
					class=" box-border padding0 opacity00" id="driver2">
					<div class="text-font"><b>Driver Manager</b></div>
				</div>
		</div>
		 <div class = "col-xs-12"> 
		   	<div class= "col-xs-offset-1 col-xs-3 database-box2 opacity00" id = db2 style = "height:70px; margin-top:76px; margin-left:32px">
					<div class="oval1" style="background-color: thistle;"></div>
							<span class="text-font database-text-middle"
								style="background-color: thistle; border-radius: 8px"> <b>D/B</b>
							</span>
			</div>
		   
		   </div>
		
		</div>
					
			</div><!-- // first animation completed -->
	<div id="animationDiv" class="col-xs-12" style = " height: 344px;" >
		<div class="col-xs-12" id="animation1" >
		<div class = "col-xs-12" style = "height: 344px;">
		<div class = "col-xs-offset-2 col-xs-6" style = "height: 344px;">
			<div style="background-color: #fffac2;"
				class="col-xs-offset-3 col-xs-4 box-border padding0 opacity00" id="javaBox">
				<div class="text-font"><b>Java Application</b></div>
			</div>
					<div class = "col-xs-12" style = "margin-top: 40px;">
						<div class = "col-xs-8">
							<div class = "col-xs-12">
								<div style="background-color: rgba(249, 145, 145, 0.26);"
										class="col-xs-offset-4 col-xs-8 box-border padding0 opacity00" id="driver">
										<div class="text-font"><b>Driver Manager</b></div>
								</div>
							</div>
						</div>
						<div class = "col-xs-4">
							<div class = "col-xs-12">
								<div class="oval4 col-xs-9 col-xs-3 opacity00" id = "circle" style="background-color: #8ce884;line-height:12px;"> <center><br>Connection</br></center>
									<!-- <span class = "database-text-middle" style = "line-height:37px; display:flex;"><br>&nbsp;Connection</br> </span> -->
								</div>
							</div>
						</div>
					</div>
						
						<!-- <div class=" col-xs-12 text" style = "display:inline-block;position:relative;margin-top: 85px;">
							<div class= "col-xs-offset-4 col-xs-3 database-box opacity00" id="databaseBox1">
								<div class="oval1" style="background-color: thistle;"></div>
								<span class="text-font database-text-middle"
										style="background-color: thistle; border-radius: 8px"> <b>D/B</b>
									</span>
								</div>
						</div> -->
						<div class=" col-xs-12 text" style = "display:inline-block;position:relative;margin-top: 85px;">
							<div class= "col-xs-offset-3 col-xs-4 database-box opacity00" id="databaseBox1" style ="height:80px; width:130px;">
								<div class="oval1" style="background-color: thistle; width:81px;"></div>
									<span class="text-font database-text-middle"
										style="background-color: thistle; border-radius: 8px; height:80px; width: 80px" > <b>D/B</b>
									</span>
								</div>
						</div>
						
		</div>
		</div>
		</div>
		
		
		</div>
		
	</div>
	</div>
	</div>
<script>
		$(document).ready(function() {
			svgAppend('svgId1', '#invisableDiv1', 'arrow');
			svgMarkerAppend('svgId1', 'arrow1');
			//getconnectiondriver();
			//$('[data-toggle="popover"]').popover(); 
		})
		
		
function svgAppend(svgId, parentId, markerId) {
	var code = '<svg class="svg-css" id=' + svgId +'></svg>';
	$(parentId).append(code);
	svgMarkerAppend(svgId, markerId);
}

function svgMarkerAppend(svgId, markerId) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', markerId);
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$('#' + svgId).append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#' + markerId).append(path);
}

function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + markerId + '")';
	$(svgId).append(line);
}

// Top or bottom to right or left 2 lines
function svgAnimatingDoubleLineTopOrBottomToRightOrLeft(parentId, selector1, selector2, svgId, lineId1, lineId2, markerId, fromId, toId, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var x1, y1, x2, y2, x3, y3;
	if (toId.toLowerCase() == 'top') {
		y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
	} else {
		y1 = $(selector1).offset().top - parentOffset.top;
	}
	x2 = x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	y3 = y2 = $(selector2).offset().top - parentOffset.top  + $(selector2).outerHeight() / 2;
	if (fromId.toLowerCase() == 'right') {
		x3 = $(selector2).offset().left - parentOffset.left;
	} else {
		x3 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	}
	$('#arrow1').css('opacity', '1');
	lineAnimation(svgId, lineId1, 'arrow1', x1, y1, x2, y2, function() {
		$('#arrow1').css('opacity', '0');
		lineAnimation(svgId, lineId2, markerId, x2, y2, x3, y3);
	});
}

// Right or left to bottom or top 2 lines
function svgAnimatingDoubleLineRightOrLeftToBottomOrTop(parentId, selector1, selector2, svgId, lineId1, lineId2, markerId, fromId, toId, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var x1, y1, x2, y2, x3, y3;
	if (fromId.toLowerCase() == 'right') {
		x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	} else {
		x1 = $(selector1).offset().left - parentOffset.left;
	}
	x3 = x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	y2 = y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	if (toId.toLowerCase() == 'bottom') {
		y3 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	} else {
		y3 = $(selector2).offset().top - parentOffset.top;
	}
	$('#arrow1').css('opacity', '1');
	lineAnimation(svgId, lineId1, 'arrow1', x1, y1, x2, y2, function() {
		$('#arrow1').css('opacity', '0');
		lineAnimation(svgId, lineId2, markerId, x2, y2, x3, y3);
	});
}

// Right to left, Left to right
function svgAnimatingLineRightAndLeft(parentId, selector1, selector2, svgId, svgLineId, markerId, fromId, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	var x1, x2;
	if (fromId.toLowerCase() == 'right') {	// right to left
		x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
		x2 = $(selector2).offset().left - parentOffset.left;
	} else {	// left to right
		x1 = $(selector1).offset().left - parentOffset.left;
		x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	}
	lineAnimation(svgId, svgLineId, markerId, x1, y1, x2, y2, callBackFunction);
}

// Top to bottom, Bottom to top
function svgAnimatingLineTopAndBottom(parentId, selector1, selector2, svgId, svgLineId, markerId, fromId, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y1, y2;
	if (fromId.toLowerCase() == "top") {	// top to bottom
		y1 = $(selector1).offset().top - parentOffset.top;
		y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	} else { // bottom to top
		y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
		y2 = $(selector2).offset().top - parentOffset.top;
	}
	lineAnimation(svgId, svgLineId, markerId, x1, y1, x2, y2, callBackFunction);
}

// Right or left to bottom or top
function svgAnimatingLineRightOrLeftToBottomOrTop(parentId, selector1, selector2, svgId, svgLineId, markerId, fromId, toId, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var x1, y2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	if (fromId.toLowerCase() == 'right') {	// from right
		x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	} else {	// from left
		x1 = $(selector1).offset().left - parentOffset.left;
	}
	if (toId.toLowerCase() == 'top') { // to top
		y2 = $(selector2).offset().top - parentOffset.top;
	} else { // to bottom
		y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	}
	lineAnimation(svgId, svgLineId, markerId, x1, y1, x2, y2, callBackFunction);
}

// top or bottom to right or left
function svgAnimatingLineTopOrBottomToLeftOrRight(parentId, selector1, selector2, svgId, svgLineId, markerId, fromId, toId, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var y1, x2;
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	if (fromId.toLowerCase() == 'top') {	// from top
		y1 = $(selector1).offset().top - parentOffset.top;
	} else {	// from bottom
		y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
	}
	if (toId.toLowerCase() == 'right') { // to right
		x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	} else { // to left
		x2 = $(selector2).offset().left - parentOffset.left;
	}
	lineAnimation(svgId, svgLineId, markerId, x1, y1, x2, y2, callBackFunction);
}

function lineAnimation(svgId, svgLineId, markerId, x1, y1, x2, y2, callBackFunction) {
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 0.8, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}
</script> 
	</body>
</html>