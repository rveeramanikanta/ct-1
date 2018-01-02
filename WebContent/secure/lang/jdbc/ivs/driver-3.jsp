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
<script src = "/secure/lang/jdbc/js/driver-3.js"type = "text/javascript"></script>
<title>JDBC Driver-3</title>
<style>

.main-div {
	border:2px solid transparent;
	border-radius:5px;
}

.margin-top20 {
	margin-top: 20px;
}

.border {
	border: 2px solid gray;
	border-radius: 6px;
}

.text {
	/* display:flex; */
	align-items:center;
	justify-content: center;
}

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

.database-text-middle {
	vertical-align: middle;
	text-align: center;
	display: table-cell;
}

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
	padding: 1px 3px;
	cursor: pointer;
}

.btn-success{
	background-color:green;
}
.tooltip-height {
	height: 20px;
	margin-top: 5px;
}
.arrow {
	top:25% !important;
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
.svg-arrow-line1 {
	marker-end: url("#arrowEnd");
	display: none;
}
.svg-arrow-line2 {
	marker-end: url("#arrowEnd");
	display: none;
}
</style>
</head>
<body>
 <div>
		<h2 class="text-center">
			<span class="label label-default ct-demo-heading">JDBC
				Type-3 Driver</span>
		</h2>
	</div>
	<div class="col-xs-offset-1 col-xs-9 main-div text margin-top20"
		id="mainDiv">
		<div  class="col-xs-offset-4 col-xs-8 animation-div border margin-top20"
			id="animationDiv" >
			<div class="col-xs-12 margin-top20">
			<div class="col-xs-offset-4 col-xs-4 text">
			<div 
			class="border text-center opacity00" id="callJavaBox"
						style="background-color: lightyellow;">
						<div>
						<img src = "/secure/lang/database-drivers/ivs/img/index.png" width="23" height = "21"/>
						</div>
						<div>
						<b> Java Application</b>
						</div>
					</div>
			</div>
			<div class="col-xs-12 margin-top20"></div>
			<div class="col-xs-offset-4 col-xs-4 text">
					<div class="border text-center margin-top20 opacity00" id="jdbcApiBox"
						style="background-color: sandybrown;">
						<b>Type 3 Driver Api Java</b>
					</div>
			</div>
			<div class="col-xs-12 margin-top20" style="margin: 0px;">
				<svg width="100%" height="85" class="col-xs-12 text">
							<marker refX="4" refY="2.5" markerWidth="5" markerHeight="5"
						orient="auto" style="fill: gray;" id="arrow">
							<path d="M0,0 L5,2.5 L0,5 Z" class="arrow" />
							</marker>
							 <line class="svg-line-css line svg-arrow-line1" id="line5" x1="50%" y1="1%" x2="50%" y2="0%" style = "dispaly:inline"/>
							  <line stroke-dasharray = "5" class = "svg-line-css line2 dashline" id = "line2" x1="56%" y1="55.5%" x2="56%" y2="55.5%"/>
							<line stroke-dasharray = "5" class = "svg-line-css line2 dashline" id = "line2" x1="56%" y1="55.5%" x2="56%" y2="55.5%"/>
							
					</svg>
			</div>
			<!-- <div class = "col-xs-12 margin-top20"></div> -->
				<div class = "col-xs-offset-4 col-xs-4 text">
				<div class = "border text-centeer margine-top20 opacity00" id = "thintype"
				style = "background-color: antiquewhite;">
						<b> &nbsp; Middle Ware Server </b> 
				</div>
				</div>
				<div class="col-xs-12 margin-top20" style="margin: 0px;">
				<svg width="100%" height="85" class="col-xs-12 text">
				<marker refX="4" refY="2.5" markerWidth="5" markerHeight="5"
							orient="auto" style="fill: gray;" id="arrowEnd">
							<path d="M0,0 L5,2.5 L0,5 Z"/>
							</marker>
							 <line class="svg-line-css line svg-arrow-line2" id="line1" x1="50%" y1="1%" x2="50%" y2="0%" style = "dispaly:inline"/>
							<line stroke-dasharray = "5" class = "svg-line-css line3 dashline" id = "line3" x1="56%" y1="45.5%" x2="56%" y2="45.5%"/>
							<line stroke-dasharray = "5" class = "svg-line-css line3 dashline" id = "line3" x1="56%" y1="45.5%" x2="56%" y2="45.5%"/>
				</svg>
				</div>
				<div class="col-xs-12 margin-top20" style="margin: 0px;">
				<div class=" col-xs-12 text" style = "display:inline-block;position:relative;">
				<div class="col-xs-offset-4 col-xs-3 database-box opacity00" id="databaseBox1">
						<div class="oval" style="background-color: thistle;"></div>
						<span class="text-font database-text-middle"
							style="background-color: thistle; border-radius: 8px"> <b>oracle</b>
						</span>
					</div>
					<div class="col-xs-3 col-xs-offset-1 database-box opacity00" id="databaseBox2">
						<div class="oval" style="background-color: thistle;"></div>
						<span class="text-font database-text-middle"
							style="background-color: thistle; border-radius: 8px"> <b>mysql</b>
						</span>
					</div>

				</div>
			</div>
		</div>
	</div>
</div>
<script>
$(document).ready(function() {
	databasedriver3();	
})
</script>
</body>
</html>