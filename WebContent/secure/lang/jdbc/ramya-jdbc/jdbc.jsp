<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/tablesorter/jquery-ui.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">

<link href="/css/introjs-ct.css" rel="stylesheet">
<link href="/css/data-structures-css.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<title>JDBC</title>
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
    height: 85px;
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
	align-items: center;
    border: 1px solid gray;
    border-radius: 15px;
    display: flex;
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
	font-size: 10px;
}

.text-center1 {
	display: flex;
    /* height: 220px; */
    justify-content: center;
    align-items: center;
}

#animationDiv {
	margin-top: 100px;
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

.ui-effects-transfer {
	border: 1px solid gray; 
	border-radius: 15px;
	z-index: 999999999;
 }

.green-color {
	color : green;
	font-weight: bold;
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
	$("text").hide();
		intro = introJs();
		intro.setOptions({
			showStepNumbers: false,
			exitOnOverlayClick: false,
			showBullets: false,
			exitOnEsc: false,
			keyboardNavigation: false,
			steps : [ {
				element : "#mainBoxBorder",
				intro : "",
				tooltipClass : "hide"
			}
			]});
		
		intro.onafterchange(function(targetElement) {
			var elementId = targetElement.id;
			switch (elementId) {
			case "mainBoxBorder":
				$('.introjs-nextbutton').hide();
				$('#mainBoxBorder').popover({
					placement: 'right',
					viewport: '#mainBoxBorder',
					html: true,
					trigger: "focus",
					content: '<div id="popover1"></div>',
				});
				$('#mainBoxBorder').popover('show');
				$(".popover").css("top" , "0");
				var text = "1. A JDBC driver is a software component enabling a Java application to interact with a database.</br>";
				typing("#popover1", text, function(){
					$('#popover1').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="animation1();">Next &#8594;</span></div>');
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

function animation1() {
	$(".ct-btn-next").remove();
	$(".tooltip-height").remove();
	$("#javaBox").removeClass("visibility-hidden").hide().fadeIn(2000,function() {
		$('#javaBox').popover({
			placement: 'bottom',
			viewport: '#javaBox',
			html: true,
			trigger: "focus",
			content: '<div id="popover2"></div>',
		});
		$('#javaBox').popover('show');
		var text = "This is the java Application nothing but client side application.";
		typing("#popover2", text, function(){
			$("#databaseBox").removeClass("visibility-hidden").hide().fadeIn(2000,function() {
				$('#databaseBox').popover({
					placement: 'bottom',
					viewport: '#databaseBox',
					html: true,
					trigger: "focus",
					content: '<div id="popover3"></div>',
				});
				$('#databaseBox').popover('show');
				var text = "This is database which is used to store,captures and analyze data.";
				typing("#popover3", text, function(){
					//$('#popover1').parents(".popover-content").append('<span class="btn-success ct-btn-next" onclick="revealDriver();">Next</span>');
					$("#driverBox").removeClass("visibility-hidden").hide().fadeIn(2000,function() {
						$('#driverBox').popover({
							placement: 'bottom',
							viewport: '#mainBoxBorder',
							html: true,
							trigger: "focus",
							content: '<div id="popover5"></div>',
						});
						$('#driverBox').popover('show');
						var text = "This is the driver used to connect the user application and database.";
						typing("#popover5", text, function(){
							$("#arrowMark1").show();
							TweenMax.to("#arrowMark1", 1, {attr:{x2: "98.2%", y2: "30.5%" },onComplete:function(){
								$("#arrowMark3").show();
								TweenMax.to("#arrowMark3", 1, {attr:{x2: "98.2%", y2: "30.5%" }, onComplete:function(){
									$("#arrowMark4").show();
									TweenMax.to("#arrowMark4", 1, {attr:{x2: "1.2%", y2: "64%" }, onComplete:function(){
										$("#arrowMark2").show();
										TweenMax.to("#arrowMark2", 1, {attr:{x2: "1.2%", y2: "64%" }, onComplete:function(){
											$('#popover1').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="transferAnimation1();">Next &#8594;</span></div>');
										}});
									}});
								}});
							}});
						});
					});
				});
			
			});
			//$('#popover1').parents(".popover-content").append('<a class="btn-success ct-btn-next" onclick="revealDatabase();">Next</a>');
		});
	});
}

/* function revealDatabase() {
	$(".ct-btn-next").remove();
	$("#databaseBox").removeClass("visibility-hidden").hide().fadeIn(2000,function() {
		$('#databaseBox').popover({
			placement: 'bottom',
			viewport: '#databaseBox',
			html: true,
			trigger: "focus",
			content: '<span id="popover3"></span>',
		});
		$('#databaseBox').popover('show');
		var text = "JDBC Driver is a software component software.";
		typing("#popover3", text, function(){
			$('#popover1').parents(".popover-content").append('<span class="btn-success ct-btn-next" onclick="revealDriver();">Next</span>');

		});
	
	});
} */

/* function revealDriver() {
	$(".ct-btn-next").remove();
	$("#driverBox").removeClass("visibility-hidden").hide().fadeIn(2000,function() {
		$('#driverBox').popover({
			placement: 'bottom',
			viewport: '#mainBoxBorder',
			html: true,
			trigger: "focus",
			content: '<span id="popover5"></span>',
		});
		$('#driverBox').popover('show');
		var text = "JDBC Driver is a software component software.";
		typing("#popover5", text, function(){
			$('#popover1').parents(".popover-content").append('<span class="btn-success ct-btn-next" onclick="transferAnimation1();">Next</span>');

		});
	
	});
}
 */
function transferAnimation1() {
	$(".ct-btn-next").remove();
	$(".tooltip-height").remove();
	$("#animation1").effect("transfer",{ to: $("#invisableDiv1"), className: "ui-effects-transfer"}, 1500, function (){
		$("#invisableDiv1").removeClass("opacity00");
		$("#invisableDiv1 .line").show();
		$("#animation1").empty();
		//$('#driverBox').popover('show');
		/* var text = "JDBC Driver is a software component software.";
		typing("#popover1", text, function(){ */
			$('#popover1').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="point2();">Next &#8594;</span></div>');

		/* }); */
	});
}
 
function point2() {
	$(".ct-btn-next").remove();
	$(".tooltip-height").remove();
	var text = "2. To connect with individual databases, JDBC (the Java Database Connectivity API) requires drivers for each database.</br>";
	typing("#popover1", text, function(){
		$('#popover1').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="animation2();">Next &#8594;</span></div>');
	});
}

function animation2() {
	$(".ct-btn-next").remove();
	$(".tooltip-height").remove();
		$("#javaBox1").removeClass("opacity00").hide().fadeIn(2000,function() {
			$('#javaBox1').popover({
				placement: 'bottom',
				viewport: '#javaBox1',
				html: true,
				trigger: "focus",
				content: '<div id="popover5"></div>',
			});
			$('#javaBox1').popover('show');
			var text = "This is the client side application.";
			typing("#popover5", text, function(){
				TweenMax.to("#databaseBox1", 1, {"opacity" : "1", onComplete:function() {
					TweenMax.to("#databaseBox2", 1, {"opacity" : "1", onComplete:function() {
						TweenMax.to("#databaseBox3", 1, {"opacity" : "1", onComplete:function() {
							$('#databaseBox3').popover({
								placement: 'bottom',
								viewport: '#databaseBox3',
								html: true,
								trigger: "focus",
								content: '<div id="popover6"></div>',
							});
							$('#databaseBox3').popover('show');
							var text = "These are the different types of Databases.";
							typing("#popover6", text, function(){
								//reveal
								TweenMax.to("#driverBox1", 1, {"opacity" : "1", onComplete:function() {
									TweenMax.to("#driverBox2", 1, {"opacity" : "1", onComplete:function() {
										TweenMax.to("#driverBox3", 1, {"opacity" : "1", onComplete:function() {
											$('#driverBox3').popover({
												placement: 'bottom',
												viewport: '#driverBox3',
												html: true,
												trigger: "focus",
												content: '<div id="popover7"></div>',
											});
											$('#driverBox3').popover('show');
											var text = "JDBC Driver is used to connect any type of databases.";
											typing("#popover7", text, function(){
												$("#arrow1").show();
												TweenMax.to("#arrow1", 1, {attr:{x2: "98.2%", y2: "20.5%" },onComplete:function(){
													$("#arrow2").show();
													TweenMax.to("#arrow2", 1, {attr:{x2: "98.2%", y2: "52.5%" }, onComplete:function(){
														$("#arrow3").show();
														TweenMax.to("#arrow3", 1, {attr:{x2: "98.2%", y2: "88.5%" }, onComplete:function(){
															$("#arrow4").show();
															TweenMax.to("#arrow4", 1, {attr:{x2: "98.2%", y2: "10.5%" },onComplete:function(){
																$("#arrow5").show();
																TweenMax.to("#arrow5", 1, {attr:{x2: "98.2%", y2: "52.5%" }, onComplete:function(){
																	$("#arrow6").show();
																	TweenMax.to("#arrow6", 1, {attr:{x2: "98.2%", y2: "95.5%" }, onComplete:function(){
																		$('#popover1').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="transferAnimation2();">Next &#8594;</span></div>');
																	}});
																}});
															}});
														}});
													}});
												}});
											});
										}});
									}});
								}});
								
								//$('#popover1').parents(".popover-content").append('<span class="btn-success ct-btn-next" onclick="revealthreeDriver();">Next</span>');
							});
						}});
					}});
				}});
			});
	
			//$('#popover1').parents(".popover-content").append('<span class="btn-success ct-btn-next" onclick="revealthreeDatabase();">Next</span>');
		});
}

/*function revealthreeDatabase() {
 	$(".ct-btn-next").remove();
	TweenMax.to("#databaseBox1", 1, {"opacity" : "1", onComplete:function() {
		TweenMax.to("#databaseBox2", 1, {"opacity" : "1", onComplete:function() {
			TweenMax.to("#databaseBox3", 1, {"opacity" : "1", onComplete:function() {
				$('#databaseBox3').popover({
					placement: 'bottom',
					viewport: '#databaseBox3',
					html: true,
					trigger: "focus",
					content: '<span id="popover9"></span>',
				});
				$('#databaseBox3').popover('show');
				var text = "JDBC Driver is a software component software.";
				typing("#popover9", text, function(){
					$('#popover1').parents(".popover-content").append('<span class="btn-success ct-btn-next" onclick="revealthreeDriver();">Next</span>');
				});
			}});
		}});
	}});
}
 */
/* function revealthreeDriver() {
	$(".ct-btn-next").remove();
	TweenMax.to("#driverBox1", 1, {"opacity" : "1", onComplete:function() {
		TweenMax.to("#driverBox2", 1, {"opacity" : "1", onComplete:function() {
			TweenMax.to("#driverBox3", 1, {"opacity" : "1", onComplete:function() {
				$('#driverBox3').popover({
					placement: 'bottom',
					viewport: '#driverBox3',
					html: true,
					trigger: "focus",
					content: '<span id="popover10"></span>',
				});
				$('#driverBox3').popover('show');
				var text = "JDBC Driver is a software component software.";
				typing("#popover10", text, function(){
					$('#popover1').parents(".popover-content").append('<span class="btn-success ct-btn-next" onclick="transferAnimation2();">Next</span>');
		
				});
			}});
		}});
	}});
}
 */
function transferAnimation2() {
	$(".ct-btn-next").remove();
	$(".tooltip-height").remove();
	$("#animation2").effect("transfer",{ to: $("#invisableDiv2"), className: "ui-effects-transfer"}, 1500, function (){
		$("#invisableDiv2").removeClass("opacity00");
		$("#invisableDiv2 .line").show();
		$("#animation2").empty();
		$('#mainBoxBorder').popover({
			placement: 'bottom',
			viewport: '#mainBoxBorder',
			html: true,
			trigger: "focus",
			content: '<div id="popover6"></div>',
		});
		//$('#driverBox').popover('show');
		/* var text = "JDBC Driver is a software component software.";
		typing("#popover6", text, function(){ */
			$('#popover1').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="point3();">Next &#8594;</span></div>');

		/* }); */
	});
}

function point3() {
	$(".ct-btn-next").remove();
	$(".tooltip-height").remove();
	var text = "3. The JDBC driver gives out the connection to the database and implements the protocol for transferring the query and result between client and database.";
	typing("#popover1", text, function(){
		$('#popover1').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="animation3();">Next &#8594;</span></div>');
	});
}
 
function animation3() {
	$(".ct-btn-next").remove();
	$(".tooltip-height").remove();
		TweenMax.to("#javaBox2", 1, {"opacity" : "1", onComplete:function() {
		$('#javaBox2').popover({
			placement: 'bottom',
			viewport: '#javaBox2',
			html: true,
			trigger: "focus",
			content: '<div id="popover11"></div>',
		});
		$('#javaBox2').popover('show');
		var text = "This is the client's java application, Which will send Query to the database through driver.";
		typing("#popover11", text, function(){
			TweenMax.to("#databaseBox4", 1, {"opacity" : "1", onComplete:function() {
				$('#databaseBox4').popover({
					placement: 'bottom',
					viewport: '#databaseBox4',
					html: true,
					trigger: "focus",
					content: '<div id="popover12"></div>',
				});
				$('#databaseBox4').popover('show');
				var text = "This is the Database which executes and sends the result to client through Driver.";
				typing("#popover12", text, function(){
					//$('#popover1').parents(".popover-content").append('<span class="btn-success ct-btn-next" onclick="revealDriver2();">Next &#8594;</span>');
					TweenMax.to("#driverBox4", 1, {"opacity" : "1", onComplete:function() {
						$('#driverBox4').popover({
							placement: 'bottom',
							viewport: '#driverBox4',
							html: true,
							trigger: "focus",
							content: '<div id="popover13"></div>',
						});
						$('#driverBox4').popover('show');
						var text = "JDBC Driver is used to send the user query to Database.";
						typing("#popover13", text, function(){
							$("#query1").show();
							tl.fromTo("#query1", 0.5, {"opacity" : "0"}, {"opacity" : "1" , repeat: 1});
							$("#arrows1").show();
							TweenMax.to("#arrows1", 1, {attr:{x2: "98.2%", y2: "30.5%" }, onComplete:function(){
								$("#query2").show();
								tl.fromTo("#query2", 0.5, {"opacity" : "0"}, {"opacity" : "1" , repeat: 1});
								$("#arrows3").show();
								TweenMax.to("#arrows3", 1, {attr:{x2: "98.2%", y2: "30.5%" }, onComplete:function(){
									$("#result2").show();
									tl.fromTo("#result2", 0.5, {"opacity" : "0"}, {"opacity" : "1" , repeat: 1});
									$("#arrows4").show();
									TweenMax.to("#arrows4", 1, {attr:{x2: "1.2%", y2: "64.2%" }, onComplete:function(){
										$("#result1").show();
										tl.fromTo("#result1", 0.5, {"opacity" : "0"}, {"opacity" : "1" , repeat: 1});
										$("#arrows2").show();
										TweenMax.to("#arrows2", 1, {attr:{x2: "1.2%", y2: "64.2%" }, onComplete:function(){
											$('#popover1').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="transferAnimation3();">Next &#8594;</span></div>');
										}});
									}});
								}});
							}});
						});
					
					}});
				});
			
			}});
			
			//$('#popover1').parents(".popover-content").append('<span class="btn-success ct-btn-next" onclick="revealDatabase2();">Next &#8594;</span>');
		
		});
	
	}});
}
/* function revealDatabase2() {
	$(".ct-btn-next").remove();
		TweenMax.to("#databaseBox4", 1, {"opacity" : "1", onComplete:function() {
		$('#databaseBox4').popover({
			placement: 'bottom',
			viewport: '#databaseBox4',
			html: true,
			trigger: "focus",
			content: '<span id="popover12"></span>',
		});
		$('#databaseBox4').popover('show');
		var text = "JDBC Driver is a software component software.";
		typing("#popover12", text, function(){
			$('#popover1').parents(".popover-content").append('<span class="btn-success ct-btn-next" onclick="revealDriver2();">Next</span>');
			
		});
	
	}});
} */

/* function revealDriver2() {
	$(".ct-btn-next").remove();
	TweenMax.to("#driverBox4", 1, {"opacity" : "1", onComplete:function() {
		$('#driverBox4').popover({
			placement: 'bottom',
			viewport: '#driverBox4',
			html: true,
			trigger: "focus",
			content: '<span id="popover13"></span>',
		});
		$('#driverBox4').popover('show');
		var text = "JDBC Driver is a software component software.";
		typing("#popover13", text, function(){
			$('#popover1').parents(".popover-content").append('<span class="btn-success ct-btn-next" onclick="transferAnimation3();">Next</span>');

		});
	
	}});
} */

function transferAnimation3() {
	$(".ct-btn-next").remove();
	$(".tooltip-height").remove();
	$("#animation3").effect("transfer",{ to: $("#invisableDiv3"), className: "ui-effects-transfer"}, 1500, function (){
		$("#invisableDiv3").removeClass("opacity00");
		$("text").show();
		$("#invisableDiv3 .line").show();
		$("#animation3").empty();
		$('#mainBoxBorder').popover({
			placement: 'bottom',
			viewport: '#mainBoxBorder',
			html: true,
			trigger: "focus",
			content: '<div id="popover15"></div>',
		});
		//$('#driverBox').popover('show');
		var text = "JDBC Driver is a software component software.";
		typing("#popover15", text, function(){
			//$('#popover1').parents(".popover-content").append('<span class="btn-success ct-btn-next" onclick="revealJavaBox2();">Next</span>');

		});
	});
}
</script>

	<div>
		<h2 class="text-center">
			<span class="label label-default ct-demo-heading">JDBC</span>
		</h2>
	</div>
	<div class="col-xs-10 margin-top10">
		<div class="main-box-border" id="mainBoxBorder">
			<div class="col-xs-12 margin-top10 padding0">
				<div class="col-xs-4">
					<div class="invisable-div opacity00" id="invisableDiv1">
						<div class="col-xs-12">
							<div class="col-xs-2 box-border padding0"
								style="background-color: #fffac2;">
								<div class="text-font">Java Application</div>
							</div>
							<div class="col-xs-2 padding0" style="height: 85px;">
								<svg height="100%" width="100%">
								<marker style="fill: gray;" orient="auto"
											markerHeight="5" markerWidth="5" refY="2.5" refX="4" id="arrow">
								<path class="arrow" d="M0,0 L5,2.5 L0,5 Z" />
								</marker>
								
								<line class="line" x1="0%" y1="30.5%" x2="98.2%"
											y2="30.5%"
											style="marker-end: url(#arrow); stroke: gray; stroke-width: 2" />
											<line class="line" x1="101%" y1="64%" x2="1.2%"
											y2="64%"
											style="marker-end: url(#arrow); stroke: gray; stroke-width: 2" />
								</svg>
							</div>
							<div class="col-xs-2 box-border padding0"
								style="background-color: rgba(249, 145, 145, 0.26);">
								<span class="text-font">Driver</span>
							</div>
							<div class="col-xs-2 padding0" style="height: 85px;">
								<svg height="100%" width="100%">
								<marker style="fill: gray;" orient="auto"
											markerHeight="5" markerWidth="5" refY="2.5" refX="4">
								<path class="arrow" d="M0,0 L5,2.5 L0,5 Z" />
								</marker>
								<line class="line" x1="0%" y1="30.5%" x2="98.2%"
											y2="30.5%"
											style="marker-end: url(#arrow); stroke: gray; stroke-width: 2" />
											<line class="line" x1="101%" y1="64%" x2="1.2%"
											y2="64%"
											style="marker-end: url(#arrow); stroke: gray; stroke-width: 2" />
								</svg>
							</div>
							<div class="col-xs-4 box-border"
								style="background-color: antiquewhite;">
								<span class="text-font">Database</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-4 padding-left0">
					<div class="invisable-div col-xs-12 opacity00" id="invisableDiv2">
						<div class="col-xs-2 box-border padding0"
							style="background-color: #fffac2;">
							<div class="text-font">Java Application</div>
						</div>
						<div class="col-xs-2 padding0" >
							<svg height="100%" width="100%">
							<marker style="fill: gray;" orient="auto"
									markerHeight="5" markerWidth="5" refY="2.5" refX="4">
							<path class="arrow" d="M0,0 L5,2.5 L0,5 Z" />
							</marker>
							<line class="line" x1="0%" y1="51.5%" x2="98.2%"
									y2="20.5%"
									style="marker-end: url(#arrow); stroke: gray; stroke-width: 2" />
									<line class="line" x1="0%" y1="52.5%" x2="98.2%"
									y2="52.5%"
									style="marker-end: url(#arrow); stroke: gray; stroke-width: 2" />
									<line class="line" x1="0%" y1="53.5%" x2="98.2%"
									y2="88.5%"
									style="marker-end: url(#arrow); stroke: gray; stroke-width: 2" />
							</svg>
						</div>
						<div class="col-xs-3 padding0">
							<div class="box-border1"
								style="background-color: rgba(249, 145, 145, 0.26);">
								<div class="text-font">Oracle JDBC Driver</div>
							</div>
							<div class="box-border1"
								style="background-color: rgba(249, 145, 145, 0.26);">
								<div class="text-font">SQL JDBC Driver</div>
							</div>
							<div class="box-border1"
								style="background-color: rgba(249, 145, 145, 0.26);">
								<div class="text-font">My SQL JDBC Driver</div>
							</div>
						</div>
						<div class="col-xs-2 padding0" style="height: 120px;">
							<svg height="100%" width="100%">
							<marker style="fill: gray;" orient="auto"
									markerHeight="5" markerWidth="5" refY="2.5" refX="4">
							<path class="arrow" d="M0,0 L5,2.5 L0,5 Z" />
							</marker>
							<line class="line" x1="0%" y1="6.5%" x2="98.2%"
									y2="6.5%"
									style="marker-end: url(#arrow); stroke: gray; stroke-width: 2" />
									<line class="line" x1="0%" y1="52.5%" x2="98.2%"
									y2="52.5%"
									style="marker-end: url(#arrow); stroke: gray; stroke-width: 2" />
									<line class="line" x1="0%" y1="95.5%" x2="98.2%"
									y2="95.5%"
									style="marker-end: url(#arrow); stroke: gray; stroke-width: 2" />
							</svg>
						</div>
						<div class="col-xs-3 padding0">
							<div class="box-border1" style="background-color: antiquewhite;">
								<div class="text-font">Oracle</div>
							</div>
							<div class="box-border1" style="background-color: antiquewhite;">
								<div class="text-font">SQL Server</div>
							</div>
							<div class="box-border1" style="background-color: antiquewhite;">
								<div class="text-font">My SQL</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-4 padding-left0">
					<div class="invisable-div opacity00" id="invisableDiv3">
						<div class="col-xs-12">
							<div class="col-xs-2 box-border padding0"
								style="background-color: #fffac2;">
								<div class="text-font">Java Application</div>
							</div>
							<div class="col-xs-2 padding0" style="height: 85px;">
								<svg height="100%" width="100%">
								<marker style="fill: gray;" orient="auto"
											markerHeight="5" markerWidth="5" refY="2.5" refX="4">
								<path class="arrow" d="M0,0 L5,2.5 L0,5 Z" />
								</marker>
								<text y="12" x="14" font-size="10" id=smallQuery1>Query</text>
								<line class="line" x1="0%" y1="30.5%" x2="98.2%"
											y2="30.5%"
											style="marker-end: url(#arrow); stroke: gray; stroke-width: 2" />
											<line class="line" x1="101%" y1="64%" x2="1.2%"
											y2="64%"
											style="marker-end: url(#arrow); stroke: gray; stroke-width: 2" />
											<text y="72" x="14" font-size="10" id="smallResult1">Result</text>
								</svg>
							</div>
							<div class="col-xs-2 box-border padding0"
								style="background-color: rgba(249, 145, 145, 0.26);">
								<span class="text-font">Driver</span>
							</div>
							<div class="col-xs-2 padding0" style="height: 85px;">
								<svg height="100%" width="100%">
								<marker style="fill: gray;" orient="auto"
											markerHeight="5" markerWidth="5" refY="2.5" refX="4">
								<path class="arrow" d="M0,0 L5,2.5 L0,5 Z" />
								</marker>
								<text y="12" x="14" font-size="10" id="smallQuery2">Query</text>
								<line class="line" x1="0%" y1="30.5%" x2="98.2%"
											y2="30.5%"
											style="marker-end: url(#arrow); stroke: gray; stroke-width: 2" />
											<line class="line" x1="101%" y1="64%" x2="1.2%"
											y2="64%"
											style="marker-end: url(#arrow); stroke: gray; stroke-width: 2" />
											<text y="72" x="14" font-size="10" id="smallResult2">Result</text>
								</svg>
							</div>
							<div class="col-xs-4 box-border"
								style="background-color: antiquewhite;">
								<span class="text-font">Database</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="animationDiv" class="col-xs-12">
				<div class="col-xs-12" id="animation1">
					<div style="background-color: #fffac2;"
						class="col-xs-offset-2 col-xs-2 box-border padding0 visibility-hidden" id="javaBox">
						<div class="text-font"><b>Java Application</b></div>
					</div>
					<div style="height: 85px;" class="col-xs-1 padding0">
						<svg width="100%" height="100%">
							<marker refX="4" refY="2.5" markerWidth="5" markerHeight="5"
								orient="auto" style="fill: gray;" id="arrow">
							<path d="M0,0 L5,2.5 L0,5 Z" class="arrow" />
							</marker>
							<line
								style="marker-end: url(#arrow); stroke: gray; stroke-width: 2"
								y2="30.5%" x2="0%" y1="30.5%" x1="0%" class="line"
								id="arrowMark1"/>
										<line
								style="marker-end: url(#arrow); stroke: gray; stroke-width: 2"
								y2="64%" x2="101%" y1="64%" x1="101%" class="line" id="arrowMark2" />
						</svg>
					</div>
					<div style="background-color: rgba(249, 145, 145, 0.26);"
						class="col-xs-2 box-border padding0 visibility-hidden" id="driverBox">
						<span class="text-font"><b>Driver</b></span>
					</div>
					<div style="height: 85px;" class="col-xs-1 padding0">
						<svg width="100%" height="100%">
							<marker refX="4" refY="2.5" markerWidth="5" markerHeight="5"
								orient="auto" style="fill: gray;">
							<path d="M0,0 L5,2.5 L0,5 Z" class="arrow" />
							</marker>
							<line
								style="marker-end: url(#arrow); stroke: gray; stroke-width: 2"
								y2="30.5%" x2="0%" y1="30.5%" x1="0%" class="line"
								id="arrowMark3" />
										<line
								style="marker-end: url(#arrow); stroke: gray; stroke-width: 2"
								y2="64%" x2="101%" y1="64%" x1="101%" class="line" id="arrowMark4" />
						</svg>
					</div>
					<div style="background-color: antiquewhite;"
						class="col-xs-2 box-border visibility-hidden" id="databaseBox">
						<span class="text-font"><b>Database</b></span>
					</div>
				</div>

				<div class="col-xs-12 text-center1" id="animation2">
					<div style="background-color: #fffac2;"
						class="col-xs-2 box-border padding0 opacity00" id = "javaBox1">
						<div class="text-font"><b>Java Application</b></div>
					</div>
					<div class="col-xs-1 padding0">
						<svg width="100%" height="100%">
							<marker refX="4" refY="2.5" markerWidth="5" markerHeight="5"
								orient="auto" style="fill: gray;">
							<path d="M0,0 L5,2.5 L0,5 Z" class="arrow" />
							</marker>
							<line
								style="marker-end: url(#arrow); stroke: gray; stroke-width: 2"
								y2="51.5%" x2="0%" y1="51.5%" x1="0%" class="line"
								id="arrow1" />
									<line
								style="marker-end: url(#arrow); stroke: gray; stroke-width: 2"
								y2="52.5%" x2="0%" y1="52.5%" x1="0%" class="line"
								id="arrow2" />
									<line
								style="marker-end: url(#arrow); stroke: gray; stroke-width: 2"
								y2="53.5%" x2="0%" y1="53.5%" x1="0%" class="line" 
								id="arrow3" />
						</svg>
					</div>
					<div class="col-xs-2 padding0">
						<div style="background-color: rgba(249, 145, 145, 0.26);"
							class="box-border1 opacity00" id = "driverBox1">
							<div class="text-font"><b>Oracle JDBC Driver</b></div>
						</div>
						<div style="background-color: rgba(249, 145, 145, 0.26);"
							class="box-border1 opacity00" id = "driverBox2">
							<div class="text-font"><b>SQL JDBC Driver</b></div>
						</div>
						<div style="background-color: rgba(249, 145, 145, 0.26);"
							class="box-border1 opacity00" id = "driverBox3">
							<div class="text-font"><b>My SQL JDBC Driver</b></div>
						</div>
					</div>
					<div style="height: 120px;" class="col-xs-1 padding0">
						<svg width="100%" height="100%">
							<marker refX="4" refY="2.5" markerWidth="5" markerHeight="5"
								orient="auto" style="fill: gray;">
							<path d="M0,0 L5,2.5 L0,5 Z" class="arrow" />
							</marker>
							<line
								style="marker-end: url(#arrow); stroke: gray; stroke-width: 2"
								y2="10.5%" x2="0%" y1="10.5%" x1="0%" class="line" id="arrow4" />
									<line
								style="marker-end: url(#arrow); stroke: gray; stroke-width: 2"
								y2="52.5%" x2="0%" y1="52.5%" x1="0%" class="line"
								id="arrow5" />
									<line
								style="marker-end: url(#arrow); stroke: gray; stroke-width: 2"
								y2="95.5%" x2="0%" y1="95.5%" x1="0%" class="line"
								id="arrow6" />
						</svg>
					</div>
					<div class="col-xs-2 padding0">
						<div style="background-color: antiquewhite;" class="box-border1 opacity00" id = "databaseBox1">
							<div class="text-font"><b>Oracle</b></div>
						</div>
						<div style="background-color: antiquewhite;" class="box-border1 opacity00" id = "databaseBox2">
							<div class="text-font"><b>SQL server</b></div>
						</div>
						<div style="background-color: antiquewhite;" class="box-border1 opacity00" id = "databaseBox3">
							<div class="text-font"><b>My SQL</b></div>
						</div>
					</div>
				</div>
				<div class="col-xs-12" id="animation3">
					<div class="col-xs-offset-2 col-xs-2 box-border padding0 opacity00"
						style="background-color: #fffac2;" id = "javaBox2">
						<div class="text-font"><b>Java Application</b></div>
					</div>
					<div class="col-xs-1 padding0" style="height: 85px;">
						<svg height="100%" width="100%">
							<marker style="fill: gray;" orient="auto"
								markerHeight="5" markerWidth="5" refY="2.5" refX="4">
							<path class="arrow" d="M0,0 L5,2.5 L0,5 Z" />
							</marker>
							<text y="12" x="14" font-size="15" id="query1" class="green-color">Query</text>
							<line id="arrows1" class="line" x1="0%" y1="30.5%" x2="0%"
								y2="30.5%"
								style="marker-end: url(#arrow); stroke: gray; stroke-width: 2" />
										<line id="arrows2" class="line" x1="101%" y1="64%" x2="1.2%"
								y2="64%"
								style="marker-end: url(#arrow); stroke: gray; stroke-width: 2" />
								<text y="77" x="24" font-size="15" id="result1" class="green-color">Result</text>
						</svg>
					</div>
					<div class="col-xs-2 box-border padding0 opacity00"
						style="background-color: rgba(249, 145, 145, 0.26);" id = "driverBox4">
						<span class="text-font"><b>Driver</b></span>
					</div>
					<div class="col-xs-1 padding0" style="height: 85px;">
						<svg height="100%" width="100%">
							<marker style="fill: gray;" orient="auto"
								markerHeight="5" markerWidth="5" refY="2.5" refX="4">
							<path class="arrow" d="M0,0 L5,2.5 L0,5 Z" />
							</marker>
							<text y="12" x="23" font-size="15" id="query2" class="green-color">Query</text>
							<line id="arrows3" class="line" x1="0%" y1="30.5%" x2="0%"
								y2="30.5%"
								style="marker-end: url(#arrow); stroke: gray; stroke-width: 2" />
										<line id="arrows4" class="line" x1="101%" y1="64%" x2="1.2%"
								y2="64%"
								style="marker-end: url(#arrow); stroke: gray; stroke-width: 2" />
								<text y="76" x="22" font-size="15" id="result2" class="green-color">Result</text>
						</svg>
					</div>
					<div class="col-xs-2 box-border opacity00"
						style="background-color: antiquewhite;" id = "databaseBox4">
						<span class="text-font"><b>Database</b></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>