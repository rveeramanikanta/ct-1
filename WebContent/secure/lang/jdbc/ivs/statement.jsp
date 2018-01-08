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
<script type="text/javascript" src="/secure/lang/jdbc/js/statement.js"></script>
<title>JDBC Drivers</title>
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
	border-radius: 10px;
}

.text {
	/* display:flex; */
	align-items:center;
	justify-content: center;
}

.database-box {
	border: 1px solid gray;
	border-radius: 8px;
	height: 85px;
	border-top:none;
	display: table;
	padding:0;
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
	padding: 2px 5px;
	cursor: pointer;
}

.tooltip-height {
	height: 20px;
	margin-top: 5px;
}
.arrow {
	top:25% !important;
}

.margin-top-bottom {
	margin: 20px 0;
	line-height: 56px;
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

.text {
	/* display:flex; */
	align-items:center;
	justify-content: center;
}

.marginBtm {
	margin-bottom: 40px;
}

.javaApp {
	height: 50px;
	line-height: 50px;
}

.padding10 {
	padding: 10px;
}

.rectangle {
	/* border: 1px solid gray;
	height: 56px;
	min-width : 50%;
	display: inline-block; */
	box-shadow: 0 1px 4px 1px gray;
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgb(201, 201, 85) 12%, rgba(255, 255, 61, 0.6) 78%); 
}

.driver {
	box-shadow: 0 1px 4px 1px gray;
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgb(92, 203, 187) 12%, rgba(55, 240, 227, 0.7) 78%);
 
}

.dbLibrary {
	box-shadow: 0 1px 4px 1px gray;
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgb(196, 173, 197) 12%, rgba(219, 207, 221, 0.7) 78%);
}

.dataBase {
	box-shadow: 0 1px 4px 1px gray;
	background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgb(192, 146, 195) 12%, rgba(255, 255, 255, 0.5) 78%);
}

.svg-css {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.svg-line {
	stroke: #f53f3f;
	stroke-width: 2;
}

.padding00 {
	padding: 0;
}

.opacity00 {
	opacity: 0;
}

.padding35 {
	padding: 35px;
}

.blinking-border-background-blue {
	/* animation-name: blink-border-background-blue;
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-direction: ; */
	animation: blink-border-background-blue 1.0s linear 1;
}

@keyframes blink-border-background-blue {
	
	25% {
		box-shadow:  0 2px 6px 2px blue;
	}
	
	75% {
		box-shadow:  0 2px 6px 2px blue;
	}
	
	100% {
		box-shadow:  0 2px 6px 2px gray;
	}
}


/* .svg-revline {
	stroke: #f53f3f;
	stroke-dasharray: 3;
	stroke-width: 2;
} */


.svg-hor {
	stroke: gray;
	stroke-dasharray: 3;
	stroke-width: 2;
}

.position-css {
	display: inline-block;
}
</style>

<script type="text/javascript">
$(document).ready(function() {
	javaDriversReadyFunction();
})
</script>

</head>
<body>
	<div>
		<h2 class="text-center">
			<span class="label label-default ct-demo-heading">JDBC
				Drivers</span>
		</h2>
	</div>
	<div class="col-xs-12 text-center margin-top-40">
		<span id="restartBtn" class="opacity00 btn btn-warning">Restart</span>
	</div>
	<div class="col-xs-offset-1 col-xs-10 main-div text margin-top20" id="mainDiv">
		<div class="col-xs-offset-1 col-xs-10 animation-div border  padding00" id="animationDiv" style="height: 625px; ">
			<div class="col-xs-12 padding00">
				<div class="col-xs-12 marginBtm padding00" style="margin-top: 35px;">
					<div class="col-xs-offset-4 col-xs-4">
						<div id="jApp" class="border text-center jvaApp rectangle opacity00" style="padding:5px;">
							<div><img src="index.png" alt="coffeeCup" width="22" height="22"></div>
							<b><div>Java Application</div></b>
						</div>
					</div>
				</div>
				
				<div class="col-xs-12 padding00" style="margin: 0 0 45px">
					<div class="col-xs-offset-2 col-xs-8">
						<div id="jdbcApi" class="border text-center padding10 driver opacity00">
							<b>JDBC API</b>
						</div>
					</div>
				</div>
				<div class="col-xs-12 padding00 text-center" style="margin-bottom: 45px;"><div class="position-css" id="emptySpan"></div></div>
				
				<div class="col-xs-12">
					<div class="col-xs-12 padding00">
						<div class="col-xs-3 padding00">
							<div class="col-xs-12 pading00 marginBtm">
								<div id="bridge" class="border text-center dbLibrary opacity00">
									<div class="padding10">
										<b><div>JDBC/ODBC</div>
										<div>Bridge Driver</div></b>
									</div>
								</div>
							</div>
							
							<div class="col-xs-12 pading00">
								<div id="odbcLib" class="border text-center dbLibrary opacity00">
									<div class="padding10">
										<b><div>ODBC/DB Library</div></b>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xs-3 padding00">
							<div class="col-xs-12 pading00 marginBtm">
								<div id="nativeDriver" class="border text-center dbLibrary opacity00">
									<div class="padding10">
										<b><div>Native Driver</div></b>
									</div>
								</div>
							</div>
							<div class="col-xs-12 pading00 mainBtm">
								<div id="nativeLib" class="border text-center dbLibrary opacity00">
									<div class="padding10">
										<b><div>Native Library</div></b>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xs-3 padding00">
							<div class="col-xs-12" style="margin-top: 15px;">
								<div class="col-xs-9 col-xs-offset-2 padding00">
									<div id="middleLayer" class="border text-center dbLibrary opacity00">
										<div class="padding35">
											<b>Middle Server</b>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div class="col-xs-3 padding00">
							<div class="col-xs-12" style="margin: 50px 0px 0px;">
								<div id="thinDriver" class="border text-center dbLibrary opacity00">
									<div class="padding10"><b><div>Thin Driver</div></b></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xs-12" style="margin-top: 45px;">
				<div class="col-xs-3 text-center"><div class="position-css" id="span1"></div></div>
				<div class="col-xs-3 text-center"><div class="position-css" id="span2"></div></div>
				<div class="col-xs-3 text-center"><div class="col-xs-12" style="padding-right: 0px;"><div class="col-xs-1 col-xs-offset-5">
					<div class="position-css" id="span3"></div></div></div>
				</div>
				<div class="col-xs-3 text-center"><div class="position-css" id="span4"></div></div>
			</div>
			<div class="col-xs-12" style="margin-top: 30px;">
				<div id="driver1" class="col-xs-offset-4 col-xs-3  database-box opacity00 padding00">
					<div class="oval dataBase" style="background-color: thistle;"></div>
					<span class="text-font database-text-middle dataBase" style="background-color: thistle; border-radius: 8px"> <b>Database</b>
					</span>
				</div>
			</div>
		</div>
	</div>	
</body>


</html>