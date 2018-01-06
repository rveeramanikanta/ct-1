
var typingInterval = 0.1;

var javaDriversReadyFunction = function() {
	$("line, text").hide();
	svgAppend('svgId', '#animationDiv', 'arrow');
	svgMarkerAppend('svgId', 'arrow1');
	$('.opacity00').removeClass('opacity00');
	svgAnimatingDoubleLineTopOrBottomToRightOrLeft('#animationDiv', '#odbcLib', '#driver1', '#svgId', 'line1', 'line2', 'arrow', 'bottom', 'left', function() {
		svgAnimatingDoubleLineRightOrLeftToBottomOrTop('#animationDiv', '#driver1', '#odbcLib', '#svgId', 'line3', 'line4', 'arrow', 'left', 'bottom', function() {
	svgAnimatingDoubleLineTopOrBottomToRightOrLeft('#animationDiv', '#thinDriver', '#driver1', '#svgId', 'line5', 'line6', 'arrow', 'bottom', 'right', function() {
		svgAnimatingDoubleLineRightOrLeftToBottomOrTop('#animationDiv', '#driver1', '#thinDriver', '#svgId', 'line7', 'line8', 'arrow', 'right', 'bottom', function() {
	svgAnimatingDoubleLineTopOrBottomToRightOrLeft('#animationDiv', '#bridge', '#jdbcApi', '#svgId', 'line9', 'line10', 'arrow', 'top', 'left', function() {
		svgAnimatingDoubleLineRightOrLeftToBottomOrTop('#animationDiv', '#jdbcApi', '#bridge', '#svgId', 'line11', 'line12', 'arrow', 'left', 'top', function() {
	svgAnimatingDoubleLineTopOrBottomToRightOrLeft('#animationDiv', '#thinDriver', '#jdbcApi', '#svgId', 'line13', 'line14', 'arrow', 'top', 'right', function() {
		svgAnimatingDoubleLineRightOrLeftToBottomOrTop('#animationDiv', '#jdbcApi', '#thinDriver', '#svgId', 'line15', 'line16', 'arrow', 'right', 'top', function() {
	});});});});});});});});
		
	
	
	//introFunction();
	
}

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

//Right to left, Left to right
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

//Top to bottom, Bottom to top
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

//Right or left to bottom or top
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

//top or bottom to right or left
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


//Top or bottom to right or left 2 lines
function svgAnimatingDoubleLineTopOrBottomToRightOrLeft(parentId, selector1, selector2, svgId, lineId1, lineId2, markerId, fromId, toId, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var x1, y1, x2, y2, x3, y3;
	if (fromId.toLowerCase() == 'top') {
		y1 = $(selector1).offset().top - parentOffset.top;
	} else {
		y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
	}
	x2 = x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	y3 = y2 = $(selector2).offset().top - parentOffset.top  + $(selector2).outerHeight() / 2;
	if (toId.toLowerCase() == 'left') {
		x3 = $(selector2).offset().left - parentOffset.left;
	} else {
		x3 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	}
	lineAnimation(svgId, lineId1, markerId, x1, y1, x2, y2, function() {
		$('#' + lineId1).css('marker-end', '');
		lineAnimation(svgId, lineId2, markerId, x2, y2, x3, y3, function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	});
}

//Right or left to bottom or top 2 lines
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
	lineAnimation(svgId, lineId1, markerId, x1, y1, x2, y2, function() {
		$('#' + lineId1).css('marker-end', '');
		lineAnimation(svgId, lineId2, markerId, x2, y2, x3, y3, function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	});
}

function lineAnimation(svgId, svgLineId, markerId, x1, y1, x2, y2, callBackFunction) {
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 0.8, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function introFunction() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
			element : "#mainDiv",
			intro : "",
			tooltipClass : "hide"
		},{
			element : "#restartBtn",
			intro : "",
			tooltipClass : "hide"
		}
		]});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "mainDiv":
			TweenMax.to("#animationDiv", 1, {"opacity" : "1", onComplete:function() {
				toolTipPopOver("animationDiv", "right", "1");
				var text = "All JDBC drivers";
				typing("#popover1", text, function() {
					$('#popover1').parents(".popover-content").append('<div class = "tooltip-height">'
								+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
				});
			}});
		break;	
		
		case "restartBtn":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restartBtn").removeClass("opacity00");
				var text = "Click to restart.";
				typing(".introjs-tooltiptext", text,  function() {
					$("#restartBtn").click(function() {
						location.reload(true);
					})
				})
			});
		break;	
		}
	})
	
	
	introjs.start();
	$('.introjs-nextbutton').show();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}






/*var index = 1;
function javaDriverStep() {
		$(".ct-btn-next").remove();
		if (index == 1) {
			$("#jApp").addClass("blinking-border-background-blue");
			TweenMax.to("#jApp", 1, {"opacity" : "1", onComplete:function() {
				toolTipPopOver("jApp", "left", "2");
				var text = "Java Application...";
				typing("#popover2", text, function(){
					$('#popover2').parents(".popover-content").append('<div class = "tooltip-height">'
								+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
					index++;
				});
			}});
		} else if (index == 2) {
			
			$("#jdbcApi").addClass("blinking-border-background-blue");
			TweenMax.to("#jdbcApi", 1, {"opacity" : "1", onComplete:function() {
				revealArrow("line:eq(0)", function() {
					
					toolTipPopOver("jdbcApi", "left", "3");
					var text = "Java partial...";
					typing("#popover3", text, function(){
						$('#popover3').parents(".popover-content").append('<div class = "tooltip-height">'
								+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
						index++;
					});
				})
			}})
		} else if (index == 3) {
			$("#bridge").addClass("blinking-border-background-blue");
			TweenMax.to("#bridge", 1, {"opacity" : "1", onComplete:function() {
				revealArrow("line:eq(1)", function() {
					$("line:eq(1)").removeAttr("style");
					revealArrow("line:eq(2)", function() {
						$("line:eq(2)").removeAttr("style");
						revealArrow("line:eq(3)", function() {
							$("line:eq(3)").removeAttr("style");
							revealArrow("line:eq(4)", function() {
								revealArrow("line:eq(5)", function() {
									toolTipPopOver("bridge", "left", "4");
									var text = "Java vendorOracle...";
									typing("#popover4", text, function(){
										$('#popover4').parents(".popover-content").append('<div class = "tooltip-height">'
													+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
										index++;
									});
								})
							})
						})
					})
				})
			}})
		} else if (index == 4) {
			$("#odbcLib").addClass("blinking-border-background-blue");
			TweenMax.to("#odbcLib", 1, {"opacity" : "1", onComplete:function() {
				toolTipPopOver("odbcLib", "left", "5");
				var text = "Java oracleDB...";
				typing("#popover5", text, function(){
					$('#popover5').parents(".popover-content").append('<div class = "tooltip-height">'
								+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
					index++;
				});
			}})
		} else if (index == 5) {
			$("#driver1").addClass("blinking-border-background-blue");
			TweenMax.to("#driver1", 1, {"opacity" : "1", onComplete:function() {
				toolTipPopOver("driver1", "left", "6");
				var text = "Java vendorMySql...";
				typing("#popover6", text, function(){
					$('#popover6').parents(".popover-content").append('<div class = "tooltip-height">'
								+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
					index++;
				});
			}})
		} else if (index == 6) {
			$("#nativeDriver").addClass("blinking-border-background-blue");
			TweenMax.to("#nativeDriver", 1, {"opacity" : "1", onComplete:function() {
				toolTipPopOver("nativeDriver", "right", "7");
				var text = "Java sqlDB...";
				typing("#popover7", text, function(){
					$('#popover7').parents(".popover-content").append('<div class = "tooltip-height">'
								+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
					index++;
				});
			}})
		} else if (index == 7) {
			$("#nativeLib").addClass("blinking-border-background-blue");
			TweenMax.to("#nativeLib", 1, {"opacity" : "1", onComplete:function() {
				toolTipPopOver("nativeLib", "right", "8");
				var text = "Java sqlDB...";
				typing("#popover8", text, function(){
					$('#popover8').parents(".popover-content").append('<div class = "tooltip-height">'
								+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
					index++;
				});
			}})
		} else if (index == 8) {
			$("#driver2").addClass("blinking-border-background-blue");
			TweenMax.to("#driver2", 1, {"opacity" : "1", onComplete:function() {
				toolTipPopOver("driver2", "right", "9");
				var text = "Java vendorMySql...";
				typing("#popover9", text, function(){
					$('#popover9').parents(".popover-content").append('<div class = "tooltip-height">'
								+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
					index++;
				});
			}})
		} else if (index == 9) {
			$("#middleLayer").addClass("blinking-border-background-blue");
			TweenMax.to("#middleLayer", 1, {"opacity" : "1", onComplete:function() {
				toolTipPopOver("middleLayer", "right", "10");
				var text = "Java vendorMySql...";
				typing("#popover10", text, function(){
					$('#popover10').parents(".popover-content").append('<div class = "tooltip-height">'
								+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
					index++;
				});
			}})
		} else if (index == 10) {
			$("#driver3").addClass("blinking-border-background-blue");
			TweenMax.to("#driver3", 1, {"opacity" : "1", onComplete:function() {
				toolTipPopOver("driver3", "right", "11");
				var text = "Java vendorMySql...";
				typing("#popover11", text, function(){
					$('#popover11').parents(".popover-content").append('<div class = "tooltip-height">'
								+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
					index++;
				});
			}})
		} else if (index == 11) {
			$("#thinDriver").addClass("blinking-border-background-blue");
			TweenMax.to("#thinDriver", 1, {"opacity" : "1", onComplete:function() {
				toolTipPopOver("thinDriver", "right", "12");
				var text = "Java vendorMySql...";
				typing("#popover12", text, function(){
					$('#popover12').parents(".popover-content").append('<div class = "tooltip-height">'
								+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
					index++;
				});
			}})
		} else if (index == 12) {
			$("#driver4").addClass("blinking-border-background-blue");
			TweenMax.to("#driver4", 1, {"opacity" : "1", onComplete:function() {
				toolTipPopOver("driver4", "right", "13");
				var text = "Java vendorMySql...";
				typing("#popover13", text, function(){
					$('#popover13').parents(".popover-content").append('<div class = "tooltip-height">'
								+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
					index++;
				});
			}})
		}
}*/

var index =1;
function javaDriverStep() {
	$(".ct-btn-next, .tooltip-height").remove();
	if (index == 1) {
		$(".first").show();
		$("#jApp").addClass("blinking-border-background-blue");
		TweenMax.to("#jApp", 1, {"opacity" : "1", onComplete:function() {
			toolTipPopOver("jApp", "left", "2");
			var text = "Java Application...";
			typing("#popover2", text, function(){
				$('#popover2').parents(".popover-content").append('<div class = "tooltip-height">'
							+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
				index++;
			});
		}});
	} else if (index == 2) {
		$(".second").show();
		$("#jdbcApi").addClass("blinking-border-background-blue");
		TweenMax.to("#jdbcApi", 1, {"opacity" : "1", onComplete:function() {
			revealArrow("line:eq(0)", function() {
				
				toolTipPopOver("jdbcApi", "left", "3");
				var text = "Java partial...";
				typing("#popover3", text, function(){
					$('#popover3').parents(".popover-content").append('<div class = "tooltip-height">'
							+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
					index++;
				});
			})
		}})
	} else if (index == 3) {
		$("#bridge").addClass("blinking-border-background-blue");
		TweenMax.to("#bridge", 1, {"opacity" : "1", onComplete:function() {
			revealArrow("line:eq(1)", function() {
				$("line:eq(1)").removeAttr("style");
				revealArrow("line:eq(2)", function() {
					$("line:eq(2)").removeAttr("style");
					revealArrow("line:eq(3)", function() {
						TweenMax.to("#odbcLib", 1, {"opacity" : "1", onComplete:function() {
							revealArrow("line:eq(4)", function() {
								TweenMax.to("#driver1", 1, {"opacity" : "1", onComplete:function() {
									//$("line").last().show();
									$("line:eq(19), .third").show();
									revealArrow("line:eq(5)", function() {
									//	revealArrow("line:eq(19)", function() {
											$('#popover1').parents(".popover-content").append('<div id="type1"></div>');
											var text = "Text about the driver1......"
											typing("#type1", text, function() {
												$("#popover1").parents(".popover-content").append("<div class = 'tooltip-height'>"
													+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
													index++;
											})
									//	}) 
									})
								}})
							})
						}})
					})
				})
			})	
		}})
	} else if (index == 4) {
		$("#nativeDriver").addClass("blinking-border-background-blue");
		TweenMax.to("#nativeDriver", 1, {"opacity" : "1", onComplete: function() {
			revealArrow("line:eq(6)", function() {
				$("line:eq(6)").removeAttr("style");
				revealArrow("line:eq(7)", function() {
					$("line:eq(7)").removeAttr("style");
					revealArrow("line:eq(8)", function() {
						TweenMax.to("#nativeLib", 1, {"opacity" : "1", onComplete:function() {
							revealArrow("line:eq(9)", function() {
								TweenMax.to("#driver2", 1, {"opacity" : "1", onComplete:function() {
									revealArrow("line:eq(10)", function() {
										$('#popover1').parents(".popover-content").append('<div id="type2"></div>');
										var text = "Text about the driver2......";
										typing("#type2", text, function() {
											$("#popover1").parents(".popover-content").append("<div class = 'tooltip-height'>"
												+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
												index++;
										})
									})
								}})
							})
						}})
					})
				})
			})	
		}});
	} else if (index == 5) {
		$("#middleLayer").addClass("blinking-border-background-blue");
		TweenMax.to("#middleLayer", 1, {"opacity" : "1", onComplete:function() {
			revealArrow("line:eq(11)", function() {
				$("line:eq(11)").removeAttr("style");
				revealArrow("line:eq(12)", function() {
					$("line:eq(12)").removeAttr("style");
					revealArrow("line:eq(13)", function() {
						TweenMax.to("#driver3", 1, {"opacity" : "1", onComplete:function() {
							revealArrow("line:eq(14)", function() {
								$('#popover1').parents(".popover-content").append('<div id="type3"></div>');
								var text = "Text about the driver3......";
								typing("#type3", text, function() {
									$("#popover1").parents(".popover-content").append("<div class = 'tooltip-height'>"
										+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
										index++;
								})
							})
						}})
					})
				})
			})	
		}})
	} else if (index == 6) {
		$("#thinDriver").addClass("blinking-border-background-blue");
		TweenMax.to("#thinDriver", 1, {"opacity" : "1", onComplete:function() {
			revealArrow("line:eq(15)", function() {
				$("line:eq(15)").removeAttr("style");
				revealArrow("line:eq(16)", function() {
					$("line:eq(16)").removeAttr("style");
					revealArrow("line:eq(17)", function() {
							revealArrow("line:eq(18)", function() {
								$('#popover1').parents(".popover-content").append('<div id="type4"></div>');
								var text = "Text about the driver4......";
								typing("#type4", text, function() {
									$("#popover1").parents(".popover-content").append("<div class = 'tooltip-height'>"
											+'<span class="btn-success ct-btn-next" onclick="javaDriverStep();">Next &#8594;</span><div>');
										index++;
								})
							})
					})
				})
			})	
		}})
	} else if (index == 7) {
		introjs.nextStep();
	}
}


function revealArrow(selector, callBackFunction) {
	let x2 = $(selector).attr("x2");	
	let y2 = $(selector).attr("y2");
	$(selector).attr("x2",  $(selector).attr("x1"));
	$(selector).attr("y2",  $(selector).attr("y1"));
	$(selector).show();
	$(selector).attr("style", "marker-end: url(#flow4Marker);");
	TweenMax.to($(selector), 1, {attr: {x2 : x2, y2: y2}, onComplete:function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}


/*function revealArrowHorizantal(selector, callBackFunction) {
	let x2 = $(selector).attr("x2");	
	let y2 = $(selector).attr("y2");
	$(selector).attr("x2",  $(selector).attr("x1"));
	$(selector).attr("y2",  $(selector).attr("y1"));
	$(selector).show();
	$(selector).attr("style", "marker-end: url(#flow4Marker);");
	TweenMax.to($(selector), 1, {attr: {x2 : x2, y2: y2}, onComplete:function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}*/



/*function revealArrowInReverse(selector, callBackFunction) {
	var x1 = $(selector).attr("x1");
	var y1= $(selector).attr("y1");
	
	$(selector).attr("x1", $(selector).attr("x2"));
	$(selector).attr("y1", $(selector).attr("y2"));
	
	$(selector).show();
	$(selector).attr("style", "marker-end: url(#flow5Marker);");
	TweenMax.to($(selector), 1, {attr: {x1 : x1, y1: y1}, onComplete:function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}*/





function typing(typingId, typingContent,callBackFunction) {
	$(typingId).typewriting( typingContent , {
		"typing_interval": typingInterval,
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}


function toolTipPopOver(id, side, number) {
	$('#' + id).popover({
		placement: side,
		viewport: '#' + id,
		html: true,
		trigger: "focus",
		content: '<div id="popover'+ number +'"></div>',
	});
	$('#'+ id).popover('show');
	$(".popover").css("top" , "0");
}