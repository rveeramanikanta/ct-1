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
<title>JDBC Driver-1</title>
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
	margin-bottom: 30px;
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

</style>
</head>
<body>
<script>

var intro;
var typingInterval = 5;
var tl = new TimelineLite();
$(document).ready(function() {
	$(".line").hide();
	/* $(".line").hide();
	$("text").hide(); */
		intro = introJs();
		intro.setOptions({
			showStepNumbers: false,
			exitOnOverlayClick: false,
			showBullets: false,
			exitOnEsc: false,
			keyboardNavigation: false,
			steps : [ {
				element : "#mainDiv",
				intro : "",
				tooltipClass : "hide"
			}
			]});
		
		intro.onafterchange(function(targetElement) {
			var elementId = targetElement.id;
			switch (elementId) {
			case "mainDiv":
				$('.introjs-nextbutton').hide();
				$('#animationDiv').popover({
					placement: 'left',
					viewport: '#animationDiv',
					html: true,
					trigger: "focus",
					content: '<div id="popover1"></div>',
				});
				$('#animationDiv').popover('show');
				$(".popover").css("top" , "0");
				var text = "Type-1 driver is also called as <b>JDBC-ODBC Bridge Driver.</b><br> <span id ='jdbc'>Here,<br> <b>JDBC</b>- Java Database Connectivity.</span><br><span id = 'odbc'><b>ODBC</b>- Open Database Connectivity.<br></span>";
				typing("#popover1", text, function(){
					$('#popover1').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="client();">Next &#8594;</span><div>');

				});
				
			break;	
			}
		});
		intro.start();
		$('.introjs-nextbutton').show();
		$('.introjs-prevbutton').hide();
		$('.introjs-skipbutton').hide();
		$('.introjs-bullets').hide();
});

function client() {
	$(".ct-btn-next").remove();
	$("#jdbc").remove();
	$("#odbc").remove();
	TweenMax.to("#callJavaBox", 1, {"opacity" : "1", onComplete:function() {
	$('#callJavaBox').popover({
		placement: 'left',
		viewport: '#callJavaBox',
		tip: "#callJavaBox",
		html: true,
		trigger: "focus",
		content: '<div id="popover2"></div>',
	});
	$('#callJavaBox').popover('show');
	$(".popover").css("top" , "0");
	var text = "This is the Client's java application.";
	typing("#popover2", text, function(){
		$('#popover2').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="javaApi();">Next &#8594;</span><div>');

	});
	}});
	
}

function javaApi() {
	$(".ct-btn-next").remove();
	TweenMax.to("#jdbcApiBox", 1, {"opacity" : "1", onComplete:function() {
	$('#jdbcApiBox').popover({
		placement: 'right',
		viewport: '#jdbcApiBox',
		tip: "#jdbcApiBox",
		html: true,
		trigger: "focus",
		content: '<div id="popover3"></div>',
	});
	$('#jdbcApiBox').popover('show');
	$(".popover").css("top" , "0");
	var text = "It provides various methods and interfaces for easy communication with database.";
	typing("#popover3", text, function(){
		$('#popover3').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="driverManager();">Next &#8594;</span><div>');

	});
	}});
}

function driverManager() {
	$(".ct-btn-next").remove();
	TweenMax.to("#managerBox", 1, {"opacity" : "1", onComplete:function() {
	$('#managerBox').popover({
		placement: 'left',
		viewport: '#managerBox',
		tip: "#managerBox",
		html: true,
		trigger: "focus",
		content: '<div id="popover4"></div>',
	});
	$('#managerBox').popover('show');
	$(".popover").css("top" , "0");
	var text = "Driver Manager is responsible for establishing the connection to the database through the driver for that it loads database specific drivers in a application."
	typing("#popover4", text, function(){
		$('#popover4').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="type1();">Next &#8594;</span><div>');

	});
	}});
}

function type1() {
	$(".ct-btn-next").remove();
	TweenMax.to("#odbcBridgeBox", 1, {"opacity" : "1", onComplete:function() {
	$('#odbcBridgeBox').popover({
		placement: 'right',
		viewport: '#odbcBridgeBox',
		tip:"#odbcBridgeBox",
		html: true,
		trigger: "focus",
		content: '<div id="popover5"></div>',
	});
	$('#odbcBridgeBox').popover('show');
	$(".popover").css("top" , "0");
	var text = "The JDBC-ODBC Bridge will convert JDBC methods into ODBC function calls.";
	typing("#popover5", text, function(){
		$('#popover5').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="odbcDriver();">Next &#8594;</span><div>');

	});
	}});
}

function odbcDriver() {
	$(".ct-btn-next").remove();
	TweenMax.to("#odbcBox", 1, {"opacity" : "1", onComplete:function() {
		$("#line1").show();
		TweenMax.to("#line1", 1, {attr:{x2: "38%", y2: "98%" }, onComplete:function(){
		//TweenMax.to("#arrows1", 1, {attr:{x2: "98.2%", y2: "30.5%" }, onComplete:function(){
	$('#odbcBox').popover({
		placement: 'left',
		viewport: '#odbcBox',
		tip: '#odbcBox',
		html: true,
		trigger: "focus",
		content: '<div id="popover6"></div>',
	});
	$('#odbcBox').popover('show');
	$(".popover").css("top" , "0");
	var text = "ODBC driver must be installed in the client's system, this ODBC depends on native libraries of the operating system.";
	typing("#popover6", text, function(){
		$('#popover6').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="databaseLibrary();">Next &#8594;</span><div>');
	});
		}});
	}});
}

function databaseLibrary() {
	$(".ct-btn-next").remove();
	TweenMax.to("#libBox", 1, {"opacity" : "1", onComplete:function() {
	$('#libBox').popover({
		placement: 'right',
		viewport: '#libBox',
		html: true,
		trigger: "focus",
		content: '<div id="popover7"></div>',
	});
	$('#libBox').popover('show');
	$(".popover").css("top" , "0");
	var text = "This is the Database related library.";
	typing("#popover7", text, function(){
		$('#popover7').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="database();">Next &#8594;</span><div>');
	});
	}});
}

function database() {
	$(".ct-btn-next").remove();
	TweenMax.to("#databaseBox", 1, {"opacity" : "1", onComplete:function() {
		$("#line4").show();
		TweenMax.to("#line4", 1, {attr:{x2: "40%", y2: "95%" }, onComplete:function(){
			$("#line3").show();						
			TweenMax.to("#line3", 1, {attr:{x2: "60%", y2: "1%" }, onComplete:function(){
				$("#line2").show();							
				TweenMax.to("#line2", 1, {attr:{x2: "60%", y2: "1%" }, onComplete:function(){
					$('#databaseBox').popover({
						placement: 'left',
						viewport: '#databaseBox',
						html: true,
						trigger: "focus",
						content: '<div id="popover8"></div>',
					});
					$('#databaseBox').popover('show');
					$(".popover").css("top" , "0");
					var text = "This is the Database which the executes query and gives result.";
					typing("#popover8", text, function(){
						$('#popover8').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="a();">Next &#8594;</span><div>');
					});
				}});
			}});
		}});
	}});
}

function a() {
	$(".ct-btn-next").remove();
	var text = "<b>Advantages :</b> <br>------------------<br> Connect to almost any database on any system, for which ODBC driver is installed.</br>" 
		+ "<br><b>Disadvantages :</b><br>-----------------------<br> 1. Performance overhead since the calls have to go through the JDBC bridge to the ODBC driver, then to the" 
		+ " native db connectivity interface.<br>" 
		+ " 2. The ODBC driver needs to be installed on the client machine.<br>" 
		+ " 3. Not suitable for applets, because the ODBC driver needs to be installed on the client.</br>";
	typing("#popover1", text, function(){
	});
}

function typing(typingId, typingContent,callBackFunction) {
	$(typingId).append("<div></div>");
	$(typingId + " > div:last-child").typewriting( typingContent , {
		"typing_interval": typingInterval,
		"cursor_color": 'white',
	}, function() {
		$(typingId + " > div:last-child").removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

</script>
	<div>
		<h2 class="text-center">
			<span class="label label-default ct-demo-heading">JDBC
				Driver-1</span>
		</h2>
	</div>
	<div class="col-xs-offset-1 col-xs-9 main-div text margin-top20"
		id="mainDiv">
		<div
			class="col-xs-offset-4 col-xs-8 animation-div border margin-top20"
			id="animationDiv">
			<div class="col-xs-12 margin-top20">
				<div class="col-xs-offset-4 col-xs-4 text">
					<div class="border text-center opacity00" id="callJavaBox"
						style="background-color: lightyellow;">
						<b>Calling Java Application</b>
					</div>

				</div>
				<div class="col-xs-12 margin-top20"></div>
				<div class="col-xs-offset-4 col-xs-4 text">
					<div class="border text-center margin-top20 opacity00" id="jdbcApiBox"
						style="background-color: sandybrown;">
						<b>JDBC API</b>
					</div>
				</div>
				<div class="col-xs-12 margin-top20">
					<div class="col-xs-offset-4 col-xs-4 text">
						<div class="border text-center margin-top20 opacity00" id="managerBox"
							style="background-color: lightyellow;">
							<b>JDBC Driver Manager</b>
						</div>
					</div>
				</div>
			</div>

			<div class="col-xs-12  margin-top20">
				<div class="col-xs-offset-4 col-xs-4 text">
					<div class="border text-center opacity00" id="odbcBridgeBox"
						style="background-color: turquoise;">
						<b>JDBC-ODBC Bridge<br> (Type-1 Driver)
						</b>
					</div>
				</div>
			</div>
			<div class="col-xs-12 margin-top20" style="margin: 0px;">
				<svg width="100%" height="85" class="col-xs-offset-4 col-xs-4 text">
							<marker refX="4" refY="2.5" markerWidth="5" markerHeight="5"
						orient="auto" style="fill: gray;" id="arrow">
							<path d="M0,0 L5,2.5 L0,5 Z" class="arrow" />
							</marker>
								<line class="line" id="line1" x1="38%" y1="0%" x2="38%" y2="2%"
						style="marker-end: url(#arrow); stroke: gray; stroke-width: 2" />
										<line class="line" id="line2" x1="60%" y1="100%" x2="60%" y2="100%"
							style="marker-end: url(#arrow); stroke: gray; stroke-width: 2" />	
					</svg>
			</div>
			<div class="col-xs-12 margin-top20" style="margin: 0px;">
				<div class="col-xs-offset-4 col-xs-4 text">
					<div class="border text-center opacity00" id="odbcBox"
						style="background-color: turquoise;">
						<b>ODBC Driver</b>
					</div>
				</div>
			</div>
			<div class="col-xs-12 margin-top20">
				<div class="col-xs-offset-4 col-xs-4 text">
					<div class="border text-center opacity00" id="libBox"
						style="background-color: thistle;">
						<b>Database library APIs</b>
					</div>
				</div>
			</div>
			<div class="col-xs-12 margin-top20" style="margin: 0px;">
				<div class="col-xs-offset-4 col-xs-4 text">
					<svg width="100%" height="85">
							<marker refX="4" refY="2.5" markerWidth="5" markerHeight="5"
							orient="auto" style="fill: gray;" id="arrow">
							<path d="M0,0 L5,2.5 L0,5 Z" class="arrow" />
							</marker>
								<line class="line" id="line3" x1="60%" y1="97%" x2="60%" y2="97%"
							style="marker-end: url(#arrow); stroke: gray; stroke-width: 2" />
										<line class="line" id="line4" x1="40%" y1="0%" x2="40%" y2="0%"
							style="marker-end: url(#arrow); stroke: gray; stroke-width: 2" />
					</svg>
				</div>
			</div>
			<div class="col-xs-12 margin-top20" style="margin: 0px;">
				<div class="col-xs-offset-4 col-xs-4 text">
					<div class="col-xs-12 database-box opacity00" id="databaseBox">
						<div class="oval" style="background-color: thistle;"></div>
						<span class="text-font database-text-middle"
							style="background-color: thistle; border-radius: 8px"> <b>Database</b>
						</span>
					</div>

				</div>
			</div>
		</div>
	</div>
</body>
</html>