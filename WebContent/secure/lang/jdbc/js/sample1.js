var intro;
var typingInterval = 5;
var tl = new TimelineLite();
var getconnectiondriver = function() {
	$(".svg-line").hide();
	$(".svg-line1").hide();
	$(".svg-line2").hide();
	$(".svg-line3").hide();
	$(".ani").hide();
	$(".ani2").hide();
	$("#animation2").addClass("display");
	$("#animation1").addClass("display");
	$("#invisableDiv2").addClass("display");
	
	//$("#context").hide();	
	
		intro = introJs();
		intro.setOptions({
			showStepNumbers: false,
			exitOnOverlayClick: false,
			showBullets: false,
			exitOnEsc: false,
			keyboardNavigation: false,
			steps : [ {
				element : "#mainBox",
				intro : "",
				tooltipClass : "hide"
			}
			]});
		
		intro.onafterchange(function(targetElement) {
			var elementId = targetElement.id;
			switch (elementId) {
			case "mainBox":
				$('.introjs-nextbutton').hide();
				$('#mainBox').popover({
					placement: 'right',
					viewport: '#mainBox',
					html: true,
					trigger: "focus",
					content: '<div id="popover1"></div>',
				});
				$('#mainBox').popover('show');
				$(".popover").css("top" , "0");
				var text = "<br>connection</br>";
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
function animation1() { 
	$("#animation1").removeClass("display");
	$("text").hide();
	$(".ct-btn-next").remove();
		$("#javaBox").removeClass("opacity00").hide().fadeIn(2000,function() {
			$('#javaBox').popover({
					placement: 'left',
					viewport: '#javaBox',
					html: true,
					trigger: "focus",
					content: '<div id="popover2"></div>',
			});
				$('#javaBox').popover('show');
					var text = "This is the java Application nothing but client side application.";
						typing("#popover2", text, function(){
							$("#driver").removeClass("opacity00").hide().fadeIn(2000,function() {
								$('#driver').popover({
								placement: 'left',
								viewport: '#driver',
								html: true,
								trigger: "focus",
								content: '<div id="popover3"></div>',
							});
				$('#driver').popover('show');
					var text = "This is database which is used to store,captures and analyze data.";
						typing("#popover3", text, function(){
							$("#line1").show();
								TweenMax.to($("#line1"), 1, {attr:{y2: "57%" },onComplete:function(){
									$("#query1").show();
										tl.fromTo("#query1", 0.5, {"opacity" : "0"}, {"opacity" : "1" , repeat: 1});
											$("#databaseBox1").removeClass("opacity00").hide().fadeIn(2000,function() {
												$('#databaseBox1').popover({
													placement: 'left',
													viewport: '#databaseBox1',
													html: true,
													trigger: "focus",
													content: '<div id="popover4"></div>',
												});
												$('#databaseBox1').popover('show');
												var text = "This is database which is used to store,captures and analyze data.";
													typing("#popover4", text, function(){
														$("#line2").show();
														TweenMax.to($("#line2"), 1, {attr:{y2: "81%" },onComplete:function() {
															$("#query2").show();
															tl.fromTo("#query2", 0.5, {"opacity" : "0"}, {"opacity" : "1" , repeat: 1});
															$("#line3").show();
															TweenMax.to($("#line3"), 1, {attr:{y2: "69%" },onComplete:function() {
																$("#query3").show();
																tl.fromTo("#query3", 0.5, {"opacity" : "0"}, {"opacity" : "1" , repeat: 1});
																	$("#line4").show();
																	TweenMax.to($("#line4"), 1, {attr:{y2: "73%" },onComplete:function() {
																		$("#line5").show();
																		TweenMax.to($("#line5"), 1, {attr:{x2: "51.5%" },onComplete:function() {
																			$("#query4").show();
																			tl.fromTo("#query4", 0.5, {"opacity" : "0"}, {"opacity" : "1" , repeat: 1});
																	$("#circle").removeClass("opacity00").hide().fadeIn(2000,function() {
																			$('#circle').popover({
																				placement: 'bottom',
																				viewport: '#circle',
																				html: true,
																				trigger: "focus",
																				content: '<div id="popover5"></div>',
																			});
																			$('#circle').popover('show');
																			var text = "Connection Object.";
																			typing("#popover5", text, function(){
																				$("#line6").show();
																				TweenMax.to($("#line6"), 1, {attr:{y1: "47%" },onComplete:function() {
																					$("#line7").show();
																					TweenMax.to($("#line7"), 1, {attr:{x2: "47%" },onComplete:function() {
																						$("#line8").show();
																						TweenMax.to($("#line8"), 1, {attr:{x2: "48%" },onComplete:function() {
																							$("#line9").show();
																							TweenMax.to($("#line9"), 1, {attr:{y2: "58%" },onComplete:function() {
																								$('#popover1').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="transferAnimation1();">Next &#8594;</span></div>');
																							}});
																						}});
																					}});
																				}});
																			});
																		});
																	}});
																}});
															}});
														}});
													});
												});
											}});
										});
									});
								});
							});
						}
/*function point2() {
	$(".ct-btn-next").remove();
	$(".tooltip-height").remove();
	var text = "2. To connect with individual databases, JDBC (the Java Database Connectivity API) requires drivers for each database.</br>";
	typing("#popover1", text, function(){
		$('#popover1').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="animation2();">Next &#8594;</span></div>');
	});
}*/
function transferAnimation1() {
	$(".ct-btn-next").remove();
	$(".tooltip-height").remove();
	$("#animation1").effect("transfer",{ to: $("#invisableDiv1"), className: "ui-effects-transfer"}, 1500, function (){
		$("#invisableDiv1").removeClass("opacity00");
		$("#invisableDiv1").show();
		$(".svg-line1").show();
		$(".ani2").show();
		$("#animation1").addClass("display");
		$(".svg-line").hide();
		$(".ani").hide();
		//$('#driverBox').popover('show');
		/* var text = "JDBC Driver is a software component software.";
		typing("#popover1", text, function(){ */
			$('#popover1').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="point2();">Next &#8594;</span></div>');

		/* }); */
	});
}

function animation2() {
	$("#animation2").removeClass("display");
	$(".ct-btn-next").remove();
	$("#JavaBox2").removeClass("opacity00").hide().fadeIn(2000,function() {
	$("#jdbcApiBox").removeClass("opacity00").hide().fadeIn(2000,function() {
		$('#javaBox2').popover({
				placement: 'left',
				viewport: '#javaBox2',
				html: true,
				trigger: "focus",
				content: '<div id="popover2"></div>',
		});
				$('#javaBox2').popover('show');
				$("#driver2").removeClass("opacity00").hide().fadeIn(2000,function() {
							$("#line35").show();
							TweenMax.to($("#line35"), 1, {attr:{y2: "45%" },onComplete:function() {
								$("#db2").removeClass("opacity00").hide().fadeIn(2000,function() {
									$("#line36").show();
									TweenMax.to($("#line36"), 1, {attr:{y2: "64%" },onComplete:function() {
										$("#line37").show();
										TweenMax.to($("#line37"), 1, {attr:{y2: "54%" },onComplete:function() {
											$("#line38").show();
											TweenMax.to($("#line38"), 1, {attr:{x2: "58.5%" },onComplete:function() {
												$("#line39").show();
												TweenMax.to($("#line39"), 1, {attr:{y2: "33%" },onComplete:function() {
												$("#connection").removeClass("opacity00").hide().fadeIn(2000,function() {
											//$("#context").addClass("blinking-border-background-green");
												$("#context").removeClass("opacity00").hide().fadeIn(2000,function() {
												$("#context").css({'background-color':'rgba(255, 143, 11, 0.15)', 'border': '2px dashed green'})
												$("#context").addClass("blinking-border-background-green");
													$("#line40").show();
													TweenMax.to($("#line40"), 1, {attr:{y1: "6%" },onComplete:function() {
														$("#line41").show();
														TweenMax.to($("#line41"), 1, {attr:{x2: "51%" },onComplete:function() {
															var text = "The connection established from ja to db.</br>";
															typing("#popover1", text, function(){
																$('#popover1').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="animation3();">Next &#8594;</span></div>');	
																});
															}});
														}});
													});
												});
											}});
										}});
									}});
								}});
							});
						}});
					});
				});
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
function transfer2() {
	
	$(".svg-line3").hide();
//  $(".ct-btn-next").remove();
	$(".tooltip-height").remove();
	$("#invisableDiv2").removeClass("display");
	//$("#animation2").effect("transfer",{ to: $("#secondanimation"), className: "ui-effects-transfer"}, 1500, function (){
		$("#invisableDiv2").removeClass("opacity00");
		$("#invisableDiv2").show();
		$("#animation2").addClass("display");
		$(".svg-line2").show();
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
			//$('#popover1').parents(".popover-content").append('<div class = "tooltip-height"><span class="back-button duplicate-backbutton" onclick = "animationback1();">&#8592 Back;</span></div>');

		/* }); */
	//});
}
function animation3() {
	$(".ct-btn-next").remove();
	$(".tooltip-height").remove();
	$("#line42").show();
		TweenMax.to($("#line42"), 1, {attr:{x1: "60%" },onComplete:function() {
			$("#line43").show();
				TweenMax.to($("#line43"), 1, {attr:{y2: "15%" },onComplete:function() {
				$("#line44").show();
					TweenMax.to($("#line44"), 1, {attr:{x2: "65.5%" },onComplete:function() {
						$("#statment").removeClass("opacity00").hide().fadeIn(2000,function() {
							var text = "sataement object.";
							typing("#popover1", text, function() {
								$('#popover1').parents(".popover-content").append('<div></div>');
								$("#line42").hide();
								$("#line43").hide();
								$("#line40").hide();
								$("#line41").hide();
								$("#line45").show();
								TweenMax.to($("#line45"), 1, {attr:{y2: "6%" },onComplete:function() {
									$("#line46").show();
									TweenMax.to($("#line46"), 1, {attr:{x2: "51%" },onComplete:function() {
										$("#line47").show();
										TweenMax.to($("#line47"), 1, {attr:{x2: "72%" },onComplete:function() {
											$("#line48").show();
											TweenMax.to($("#line48"), 1, {attr:{y2: "15%" },onComplete:function() {
												var text = "statment object goes to java aplication and back .";
												typing("#popover1", text, function() {
													$('#popover1').parents(".popover-content").append('<div></div>');
													$("#line44").hide();
													$("#line49").show();
													TweenMax.to($("#line49"), 1, {attr:{x2: "63%" },onComplete:function() {
														var text = "statment object to connection .";
														typing("#popover1", text, function() {
															$('#popover1').parents(".popover-content").append('<div></div>');
															$("#line38").hide();
															$("#line39").hide();
															TweenMax.to($("#line38"), 1, {attr:{x2: "49.5%" },onComplete:function() {
																TweenMax.to($("#line39"), 1, {attr:{y2: "48%" },onComplete:function() {
																	$("#line50").show();
																	TweenMax.to($("#line50"), 1, {attr:{y2: "50%" },onComplete:function() {
																		$("#line51").show();
																		TweenMax.to($("#line51"), 1, {attr:{x2: "50%" },onComplete:function() {
																			var text = "connection to driver manager .";
																			typing("#popover1", text, function() {
																				$('#popover1').parents(".popover-content").append('<div></div>');
																				$("#line52").show();
																				TweenMax.to($("#line52"), 1, {attr:{y2: "64%" },onComplete:function() {
																					var text = "driver manager to data base .";
																					typing("#popover1", text, function() {
																						$('#popover1').parents(".popover-content").append('<div></div>');
																						$("#line50").hide();
																						$("#line51").hide();
																						$("#line52").hide();
																						$("#line37").hide();
																						TweenMax.to($("#line37"), 1, {attr:{y2: "64%" },onComplete:function() {
																							$("#line37").show();
																							TweenMax.to($("#line37"), 1, {attr:{y2: "53%" },onComplete:function() {
																								$("#line38").show();
																								TweenMax.to($("#line38"), 1, {attr:{x2: "58.5%" },onComplete:function() {
																									$("#line39").show();
																									TweenMax.to($("#line39"), 1, {attr:{y2: "33%" },onComplete:function() {
																										var text = "driver manager to connection .";
																										typing("#popover1", text, function() {
																											$('#popover1').parents(".popover-content").append('<div></div>');
																											$("#line49").hide();
																											TweenMax.to($("#line44"), 1, {attr:{x2: "64%" },onComplete:function() {
																												$("#line44").show();
																												TweenMax.to($("#line44"), 1, {attr:{x2: "65.5%" },onComplete:function() {
																													var text = "------------ .";
																													typing("#popover1", text, function() {
																														$('#popover1').parents(".popover-content").append('<div></div>');
																														$("#line45").hide();
																														$("#line46").hide();
																														$("#line47").hide();
																														$("#line48").hide();
																														$("#line53").show();
																														TweenMax.to($("#line53"), 1, {attr:{x2: "78.5%" },onComplete:function() {
																															var text = "result set object created .";
																															typing("#popover1", text, function() {
																																$('#popover1').parents(".popover-content").append('<div></div>');
																																$("#resultset").removeClass("opacity00").hide().fadeIn(2000,function() {
																																	$("#line54").show();
																																	TweenMax.to($("#line54"), 1, {attr:{y2: "6%" },onComplete:function() {
																																		$("#line55").show();
																																		TweenMax.to($("#line55"), 1, {attr:{x2: "51%" },onComplete:function() {
																																			var text = "result set to java application .";
																																			typing("#popover1", text, function() {
																																				$('#popover1').parents(".popover-content").append('<div></div>');
																																				$('#popover1').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="transfer2();">Next &#8594;</span></div>');
																																			}); 
																																		}});
																																	}});
																																});
																															});
																														}});
																													});
																												}});
																											}});
																										});
																									}});
																								}});
																							}});
																						}});
																					});
																				}});
																			});
																		}});
																	}});
																}});
															}});
														});
													}});
												});
											}});
										}});
									}});
								}});
							});
						});
					}});
				}});
			}});
}
function animationback1() {
    $(".duplicate-backbutton").remove();
//  $(".ct-btn-next").remove();
	$(".tooltip-height").remove();
	$("#invisableDiv2").addClass("display");
	$("#animation2").removeClass("display");
	$(".svg-line3").show();
	//$("#animation2").effect("transfer",{ to: $("#secondanimation"), className: "ui-effects-transfer"}, 1500, function (){
	//$("#invisableDiv2").removeClass("opacity00");
	//$("#invisableDiv2").show();
	$(".svg-line2").hide();
	animation2();
}