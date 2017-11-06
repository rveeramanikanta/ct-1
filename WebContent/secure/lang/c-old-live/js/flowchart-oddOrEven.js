
var introjs;
var typingSpeed = 40;
var tl;
var stepCount = 1;
var step = 1;
var textStep = 0;

var flowChartOddOrEvenReady = function() {
	introGuide();
	tl = new TimelineLite();
	svgAppend("#flowChartBoxChild", "svg");
	svgMarkerAppend("#svg", "arrow");
	
	tl.to($("#description li:eq(0)"), 1, {opacity :1, onComplete: function() {
		tl.to($("#description li:eq(1)"), 1, {opacity :1, onComplete: function() {
		}})
	}})
	$("#restart").click(function() {
		location.reload();
	})
	console.log("In the Odd or Even...");
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : "#description",
			intro : "",
			position : "right",
			tooltipClass: "hide"
		},{
			element : "#restart",
			intro : "",
			tooltipClass: "hide"
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "description":
			$(".introjs-nextbutton").hide();
				var text = "problem solving steps.";
				typing(".introjs-tooltiptext", text, function() {
					getIntrojsStep("#flowChartBox","","top","hide");
					$(".introjs-nextbutton").show();
				});
			
		break;
		
		case "algorithmBox":
			$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#algorithmBox,  #algHeading").removeClass("opacity00");
					
					var text = "In the algorithm step..";
					typing(".introjs-tooltiptext", text, function() {
						console.log(step)
						if (step <= 6) {
							getIntrojsStep("#flowChartBox","the flowChartBox","left","");
							var text =  $("#algorithmPoints li:eq("+ (step-1) +")").text(); 
							$("#algorithmPoints li:eq("+ (step-1) +")").removeClass("opacity00");
							typing("#algorithmPoints li:eq("+ (step-1) +")", text, function() {
								$(".introjs-nextbutton").show();
							})
						} else {
							getIntrojsStep("#restart","Click to restart","left","");
							var text =  $("#algorithmPoints li:eq("+ (step-1) +")").text(); 
							$("#algorithmPoints li:eq("+ (step-1) +")").removeClass("opacity00");
							typing("#algorithmPoints li:eq("+ (step-1) +")", text, function() {
								$(".introjs-nextbutton").show();
							})
						}
					});
				})
		break;
			
				
		case "flowChartBox":
			getIntrojsStep("#flowChartExp","","top","hide");
			$(".introjs-nextbutton").hide();
			console.log("in the flowCharExp...");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#flowChartBox").removeClass("opacity00");
				if (textStep == 0) {
					 $("#stepsToEval div:eq("+ textStep +") > * ").removeClass("opacity00");
					var text = $("#stepsToEval div:eq("+ textStep +") > div:eq(1) ").text();
					typing($("#stepsToEval div:eq("+ textStep +") > div:eq(1) "), text, function() {
						$("#stepsToEval div:eq("+ textStep +") > div:eq(1)").append("<a class='introjs-button user-btn user-click' onclick='flowChartStep();'>Next &#8594;</a>");
					}) 
				}
 			});
		break;
				
		case "restart":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restart").removeClass("opacity00");
				$("#restart").click(function() {
					location.reload();
				})
			});
			
			break;
		}
	});
	
	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.start();
	//svgAnimationLeftToRight();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

 var count = 1;
 
 function svgAnimationLeftToRight(callBackFunction) {
	 
	var x1 = $("#step4").offset().left - $("#flowChartBoxChild").offset().left;
	var y1 = $("#step4").offset().top - $("#flowChartBoxChild").offset().top + $("#step4").height()/2 + 15;
	var x2 = x1 - $("#step5").width()/2;
	
		x1 = ((x1 / ($("#svg").width() / 100)) + '%');
		y1 = ((y1 / ($("#svg").height() / 100)) + '%');
		x2 = ((x2 / ($("#svg").width() / 100)) + '%');
		
	svgLineAppend("#svg", "horiz" + (count), "arrow", x1, y1, x1, y1);
	TweenMax.to($('#horiz' + (count)).show(), 1, {attr: {x2: x2}, onComplete: function() {
		
		$("#horiz" + (count)).css({markerEnd : ''});
		
		svgTextAppend("#svg", (parseInt(x1) - 5) + '%', (parseInt(y1) - 1) + '%', "TRUE");
		svgAnimationTopToBottomWithLeftToRight(x2, y1, callBackFunction);
		
	}})
 }
 
 function svgAnimationTopToBottomWithLeftToRight(x1, y1, callBackFunction) {
	svgLineAppend("#svg", "vertical" + (++count), "arrow", x1, y1, x1, y1);
	var y2 = $("#step5").offset().top - $("#flowChartBoxChild").offset().top;
	console.log(" in the y2...")
	console.log(y2)
		y2 = ((y2 / ($("#svg").height() / 100)) + '%');
	 TweenMax.to($('#vertical' +  (count)).show(), 1, {attr: {y2: y2}, onComplete: function() {
		 $("#vertical" + (count)).css({markerEnd : ''});
		 
		 if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		
	}})
}


function svgAnimationTopToBottomLinkWithTopToBottom(callBackFunction) {
	var x1 = $("#step4").offset().left - $("#flowChartBoxChild").offset().left;
	x1 = x1 - $("#step5").width()/2;
	
	var y1 = $("#step5").offset().top - $("#flowChartBoxChild").offset().top + ($("#step5").height()) + 2;
	x1 = ((x1 / ($("#svg").width() / 100)) + '%');
	y1 = ((y1 / ($("#svg").height() / 100)) + '%');
	svgLineAppend("#svg", "vertical" + (++count), "arrow", x1, y1, x1, y1);
	var y2 = ($("#step7").offset().top - $("#flowChartBoxChild").offset().top) + $("#step7").height()/2;
		y2 = ((y2 / ($("#svg").height() / 100)) + '%');
	TweenMax.to($('#vertical' + (count)).show(), 1, {attr: {y2: y2}, onComplete: function() {
		$("#vertical" + (count)).css({markerEnd : ''});
		svgAnimationTopToBottomLinkWithRightToLeft(x1, y2, callBackFunction);
	}})
 }
 
 
 function svgAnimationTopToBottomLinkWithRightToLeft(x1, y1, callBackFunction) {
	 svgLineAppend("#svg", "horiz" + (++count), "arrow", x1, y1, x1, y1);
	 var x2 = ($("#step7").offset().left - $("#flowChartBoxChild").offset().left);
	 	x2 = ((x2 / ($("#svg").width() / 100)) + '%');
	 TweenMax.to($('#horiz' + (count)).show(), 1, {attr: {x2: x2}, onComplete: function() {
		 algorithmTextReveal(++textStep);
		 if (typeof callBackFunction === "function") {
				callBackFunction();
			}
	 }})
 }
 
function svgAnimationRightToLeft(callBackFunction) {
	var x1 = ($("#step4").offset().left - $("#flowChartBoxChild").offset().left) + $("#step4").outerWidth() + $(".rmbsText").width()/2 + 4;
	var y1 = $("#step4").offset().top - $("#flowChartBoxChild").offset().top + $("#step4").height()/2 + 17;
	var x2 = x1 + $("#step6").width()/2;
	
		x1 = ((x1 / ($("#svg").width() / 100)) + '%');
		y1 = ((y1 / ($("#svg").height() / 100)) + '%');
		x2 = ((x2 / ($("#svg").width() / 100)) + '%');
	
	svgLineAppend("#svg", "horiz" + (++count), "arrow", x1, y1, x1, y1);
	TweenMax.to($('#horiz' + (count)).show(), 1, {attr: {x2: x2}, onComplete: function() {
		 $("#horiz" + (count)).css({markerEnd : ''});
		 svgTextAppend("#svg", (parseInt(x1) + 2) + '%', (parseInt(y1) - 1) + '%', "FALSE")
		svgAnimationTopToBottomWithRightToLeft(x2, y1, callBackFunction);
	}})
}

function svgAnimationTopToBottomWithRightToLeft(x1, y1, callBackFunction) {
	svgLineAppend("#svg", "vertical"+ (++count), "arrow", x1, y1, x1, y1);
	var y2 = $("#step6").offset().top - $("#flowChartBoxChild").offset().top;
		y2 = ((y2 / ($("#svg").height() / 100)) + '%');
	TweenMax.to($('#vertical' + (count)).show(), 1, {attr: {y2: y2}, onComplete: function() {
		 $("#vertical" + (count)).css({markerEnd : ''});
		 if (typeof callBackFunction === "function") {
			 callBackFunction();
			}
	}})
}

function svgAnimationLeftToRightLinkWithTopToBottom(callBackFunction) {
	var x1 = ($("#step4").offset().left - $("#flowChartBoxChild").offset().left) + $("#step4").outerWidth() + $(".rmbsText").width()/2 + 4;
	x1 = x1 + $("#step6").width()/2;
	var y1 = $("#step6").offset().top - $("#flowChartBoxChild").offset().top + $("#step6").height() + 2;
	x1 = ((x1 / ($("#svg").width() / 100)) + '%');
	y1 = ((y1 / ($("#svg").height() / 100)) + '%');
	svgLineAppend("#svg", "vertical" + (++count), "arrow", x1, y1, x1, y1);
	var y2 = ($("#step7").offset().top - $("#flowChartBoxChild").offset().top) + $("#step7").height()/2;
	y2 = ((y2 / ($("#svg").height() / 100)) + '%');
	TweenMax.to($('#vertical' + (count)).show(), 1, {attr: {y2: y2}, onComplete: function() {
		 $("#vertical" + (count)).css({markerEnd : ''});
		svgAnimationTopToBottomLinkWithLeftToRight(x1, y2, callBackFunction);
	}});
}

function svgAnimationTopToBottomLinkWithLeftToRight(x1, y1, callBackFunction) {
	svgLineAppend("#svg", "horiz" + (++count), "arrow", x1, y1, x1, y1);
	var x2 = ($("#step7").offset().left - $("#flowChartBoxChild").offset().left) + $("#step7").width();
	x2 = ((x2 / ($("#svg").width() / 100)) + '%');
	TweenMax.to($('#horiz' + (count)).show(), 1, {attr: {x2: x2}, onComplete: function() {
		algorithmTextReveal(++textStep);
		if (typeof callBackFunction === "function") {
			 callBackFunction();
			}
	}})
}

function svgAnimatingBottomToTopLine(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() - 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top ;
	if(x1 > x2) {
		x2 = x1;
	} else {
		x1 = x2;
	}
	
	x1 = ((x1 / ($("#svg").width() / 100)) + '%');
	y1 = ((y1 / ($("#svg").height() / 100)) + '%');
	x2 = ((x2 / ($("#svg").width() / 100)) + '%');
	y2 = ((y2 / ($("#svg").height() / 100)) + '%');
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function nextStep() {
	$(".user-btn").remove();
	introjs.nextStep();
}

function algorithmTextReveal(textStep) {
	$("#stepsToEval > div:eq("+ textStep +") > * ").removeClass("opacity00")
	var text = $("#stepsToEval > div:eq("+ textStep +") > div:eq(1) ").text();
	typing($("#stepsToEval > div:eq("+ textStep +") > div:eq(1)"), text, function() {
		$("#stepsToEval > div:eq("+ textStep +") > div:eq(1)").append("<a class='introjs-button user-btn user-click' onclick='flowChartStep();'>Next &#8594;</a>");
	}) 
}

function flowChartStep() {
	$(".user-click").remove();
	flowChartSymbolsReveal();
}

function svgMarkerAppend(svgId, svgMarkerId) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', svgMarkerId);
	marker.setAttribute('refX', '4.5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$(svgId).append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#' + svgMarkerId).append(path);
}

function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2, callBackFunction) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + markerId + '")';
	$(svgId).append(line);
	
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function arrowAppend(callBackFunction) {
	svgAnimatingBottomToTopLine("#flowChartBoxChild", "#step"+(stepCount), "#step"+(stepCount+1), "#svg", "line"+stepCount,"arrow", function() {
		stepCount++;
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function svgTextAppend(svgId, x, y, val) {
	var text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
	text.setAttribute("x", x);
	text.setAttribute("y", y);
	var textNode = document.createTextNode(val);
	text.appendChild(textNode);
	$(svgId).append(text);
}

getIntrojsStep = function(element, intro, position, tooltipClass) {
	var step = {};
	if (typeof element != 'undefined') {
		step['element'] = element;
	}
	if (typeof intro != 'undefined') {
		step['intro'] = intro;
	}
	if (typeof position != 'undefined') {
		step['position'] = position;
	}
	if (typeof tooltipClass != 'undefined') {
		step['tooltipClass'] = tooltipClass;
	}
	
	introjs.insertOption(introjs._currentStep + 1, step);
}

function flowChartSymbolsReveal() {
	switch(step) {
	case 1:
	case 2:
	case 3:
			getIntrojsStep("#algorithmBox","the algorithmBox","right","");
			$("#step" + step).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
				 $("#step" + step).removeClass("animated zoomIn");	
				 if (step > 1) {
					 console.log(" step = " + step)
					 arrowAppend(function() {
						 algorithmTextReveal(++textStep);
						 ++step;
					 	$('.introjs-nextbutton').show();
					 })
				 } else {
					 algorithmTextReveal(++textStep);
					 ++step;
					 $('.introjs-nextbutton').show();
				 }
			 });
	break;
	
	case 4:
		getIntrojsStep("#algorithmBox","the algorithmBox","right","");
		$("#step" + step).parent().removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			arrowAppend(function() {
				algorithmTextReveal(++textStep);
				 ++step;
			 	$('.introjs-nextbutton').show();
			 })
		})
	break;	
	
	case 5:
		getIntrojsStep("#algorithmBox","the algorithmBox","right","");
	 		$("#step5").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
	 			 $('.introjs-nextbutton').show();
				 ++step;
				svgAnimationLeftToRight(function() {
					$("#step6").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
						svgAnimationRightToLeft(function() {
							algorithmTextReveal(++textStep);
								++step;
						});
					})
				})
			});
	break;
	
	case 7:
		getIntrojsStep("#algorithmBox","the algorithmBox","right","");
		$("#step" + step).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			svgAnimationTopToBottomLinkWithTopToBottom(function() {
				svgAnimationLeftToRightLinkWithTopToBottom(function() {
					$("#restart").removeClass("opacity00");
				});
			})
		})
	break;
}
}
