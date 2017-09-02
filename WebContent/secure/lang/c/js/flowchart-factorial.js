var introjs;
var typingSpeed = 40;
var tl;
var stepCount = 1;
var step = 1;

var flowchartFactorialReady = function() {
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : "#description",
			intro : "",
			position : "right"
		},{
			element : "#restart",
			intro : "",
			position : "right"
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "description":
			$(".introjs-nextbutton").hide();
				var text = "problem solving steps.";
				typing(".introjs-tooltiptext", text, function() {
					getIntrojsStep("#algorithmBox","","right","");
					$(".introjs-nextbutton").show();
				});
		break;
		
		case "algorithmBox":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#algorithmBox").removeClass("opacity00");
				var text = "In the algorithm step..";
				typing(".introjs-tooltiptext", text, function() {
					if (step <= 7) {
						getIntrojsStep("#flowChartBox","the flowChartBox","left","");
					}
					$("#algSteps div:nth-child("+ step +")").removeClass("opacity00");
					var text = $("#algSteps div:nth-child("+ step +")").html();
					typing($("#algSteps div:nth-child("+ step +")"), text, function() {
						$(".introjs-nextbutton").show();
					})
				})
			})
		break;	
			
		case "flowChartBox":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#flowChartBox").removeClass("opacity00");
				var text = "In the flowChartBox step..";
				/* if (step > 1 && step <=4) {
					getIntrojsStep("#algorithmBox","the algorithmBox","right","");
					$("#step" + step).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
						 $("#step" + step).removeClass("animated zoomIn");	
						 arrowAppend(function() {
							 ++step;
						 	$('.introjs-nextbutton').show();
						 })
					 });
				} */
				
				switch (step) {
				case 1 :
				case 2 :
				case 3 :	
					getIntrojsStep("#algorithmBox","the algorithmBox","right","");
					$("#step" + step).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
						 $("#step" + step).removeClass("animated zoomIn");	
						 if (step > 1) {
							 arrowAppend(function() {
								 ++step;
							 	$('.introjs-nextbutton').show();
							 }) 
						 } else {
							 ++step;
							 $('.introjs-nextbutton').show();
						 }
					 });
				break;
				
				case 4 :
					getIntrojsStep("#algorithmBox","the algorithmBox","right","");
					$("#step" + step).parent().removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
						 $("#step" + step).removeClass("animated zoomIn");	
						 arrowAppend(function() {
							 ++step;
						 	$('.introjs-nextbutton').show();
						 })
					 });
				break; 
				
				case 5:
					getIntrojsStep("#algorithmBox","the algorithmBox","right","");
					$("#step" + step).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
						 $("#step" + step).removeClass("animated zoomIn");	
							 svgAnimationForOneArrowTopToBottom();
							 ++step;
						 	$('.introjs-nextbutton').show();
					 });
				break;
				
				case 6:
					getIntrojsStep("#algorithmBox","the algorithmBox","right","");
					++step;
					svgAnimationLeftToRight();
					$(".introjs-nextbutton").show();
				break;
				
				case 7:
					getIntrojsStep("#algorithmBox","the algorithmBox","right","");
					$("#step" + step).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
						svgAnimationRightToLeft(lastX2, lastY2, function() {
							$("#step8" ).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
								$(".introjs-nextbutton").show();
							})
							//step8
						});
						++step;
					})
					//svgAnimationLeftToRight();
				break;
				
				/* case 8:
					getIntrojsStep("#algorithmBox","the algorithmBox","right","");
					$("#step" + step).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
						svgAnimationRightToLeftLinkFromTopToBottom();
						//svgAnimationRightToLeft(lastX2, lastY2);
						++step;
					})
					//svgAnimationLeftToRight();
				break; */
				
				}
				//getIntrojsStep("#algorithmBox","the algorithmBox","right","");
				
				
			})
		break;
			
		case "restart":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restart").removeClass("opacity00");
				var text = "Click to restart.";
				typing(".introjs-tooltiptext", text, function() {
					$("#restart").click(function() {
						location.reload();
					})
				})
			});
		break;
		
		}
	})
	
	tl = new TimelineLite();
	svgAppend("#flowChartBox", "svg");
	svgMarkerAppend("#svg", "arrow");
	
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

function svgAnimationLeftToRight() {
	
	var x1 = $(".step5").offset().left  - $("#flowChartBox").offset().left;
	var y1 = ($(".step5").offset().top  - $("#flowChartBox").offset().top) + $(".step5").height()/2;
	var x2 = ($(".step5").offset().left - $("#flowChartBox").offset().left)/2;
	
	svgLineAppend("#svg", "horiz", "arrow", x1, y1, x1, y1);
	TweenMax.to($('#' + "horiz").show(), 1, {attr: {x2: x2}, onComplete: function() {
		$("#horiz").css({"marker-end": ""});
		svgAnimationLeftToRightLinkFromBottomToTop(x2, y1);
	}});
	
}

function svgAnimationLeftToRightLinkFromBottomToTop(x1, y1) {
	svgLineAppend("#svg", "vertical", "arrow", x1, y1, x1, y1);
	var y2 = ($("#step4").offset().top - $("#flowChartBox").offset().top) + $("#step4").height() - 6;
	TweenMax.to($('#' + "vertical").show(), 1, {attr: {y2: y2}, onComplete: function() {
		$("#vertical").css({"marker-end": ""});
		svgAnimationBottomToTopLinkFromRightToLeft(x1, y2);
	}});
}

var lastX2;
var lastY2;
function svgAnimationBottomToTopLinkFromRightToLeft(x1, y1) {
	svgLineAppend("#svg", "horiz1", "arrow", x1, y1, x1, y1);
	var x2 = ($("#step4").offset().left + $("#flowChartBox").offset().left)/5 + 8;
	TweenMax.to($('#' + "horiz1").show(), 1, {attr: {x2: x2}, onComplete: function() {
		//svgAnimationBottomToTopLinkFromRightToLeft(x1, y2);
		//svgTextAppend(svgId, x, y, val);
		lastX2 = x2;
		lastY2 = y1;
	}});
}

function svgAnimationRightToLeft(lastX2, lastY2, callBackFunction) {
	var x1 = lastX2  + $("#step4").parent().width() + 9;
	var y1 = lastY2 /* - $("#step4").parent().width() */;
	var x2 = $("#parallelogram").offset().left - $("#flowChartBox").offset().left;
	svgLineAppend("#svg", "horiz2", "arrow", x1, y1, x1, y1);
	TweenMax.to($("#horiz2").show(), 1, {attr: {x2: x2}, onComplete: function() {
		$("#false").css({'top' : y1,'left' : x1});
		svgTextAppend("#svg", x2 - 20, x1, "false");
		svgAnimationRightToLeftLinkFromTopToBottom(callBackFunction);
	}})
}

function svgAnimationRightToLeftLinkFromTopToBottom(callBackFunction) {
	var x1 = $("#parallelogram").offset().left - $("#flowChartBox").offset().left + $("#parallelogram").width()/2;
	var y1 = $("#parallelogram").offset().top - $("#flowChartBox").offset().top + $("#parallelogram").height() - 1; 
	var y2 = $("#step8").offset().top - $("#flowChartBox").offset().top - 9;
	svgLineAppend("#svg", "vertical1", "arrow", x1, y1, x1, y1);
	TweenMax.to($("#vertical1").show(), 1, {attr: {y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}})
}


function svgAnimationForOneArrowTopToBottom () {
	var x1 = $("#step4").parent().offset().left - $("#flowChartBox").offset().left +  $("#step4").parent().width()/2 - 2;
	var y1 = $("#step4").parent().offset().top - $("#flowChartBox").offset().top +  $("#step4").parent().height() - $("#booleanID").height() -5
	var y2 = $(".step5").offset().top - $("#flowChartBox").offset().top - 10 ; 
	svgLineAppend("#svg", "special", "arrow", x1, y1, x1, y1,function() {
		TweenMax.to($("#special").show(), 1, {attr: {y2: y2}, onComplete: function() {
			console.log("y2 / 2 = ")
			svgTextAppend("#svg", x1 + 5, y2, "true")
		}});
	})
	//$("#horiz1").attr({'x1' : x1, 'y1' : y1, 'y2' : y2, 'x2' : x1})
}


function svgAnimatingBottomToTopLine(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() - 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top - 8;
	if(x1 > x2) {
		x2 = x1;
	} else {
		x1 = x2;
	}
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

function svgMarkerAppend(svgId, svgMarkerId) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', svgMarkerId);
	marker.setAttribute('refX', '1');
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

function svgTextAppend(svgId, x, y, val) {
	var text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
	text.setAttribute("x", x);
	text.setAttribute("y", y);
	var textNode = document.createTextNode(val);
	text.appendChild(textNode);
	$(svgId).append(text);
}

function arrowAppend(callBackFunction) {
	svgAnimatingBottomToTopLine("#flowChartBox", "#step"+(stepCount), "#step"+(stepCount+1), "#svg", "line"+stepCount,"arrow", function() {
		stepCount++;
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
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


/* function svgAnimationLeftToRight() {
	var x1 = $("#step4").offset().left - $("#flowChartBox").offset().left;
	var y1 = x1 + $("#step4").height() + $("#step4").height()*1/8; //x1 + $("#step4").height()/2;
	//var y2 = y1;
	//var x2 = $("#step4").offset().left - $("#flowChartBox").offset().left ;
	var x2 = ($("#step4").offset().left - $("#flowChartBox").offset().left)/2;
	svgLineAppend("#svg", "horiz", "arrow", x1, y1, x1, y1);
	TweenMax.to($('#' + "horiz").show(), 1, {attr: {x2: x2}, onComplete: function() {
		svgAnimationTopToBottomLinkWithLeftToRight(x2, y1);
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimationTopToBottomLinkWithLeftToRight(x1, y1) {
	var y2 = $("#step5").offset().top - $("#flowChartBox").offset().top;
	
	svgLineAppend("#svg", "vertical", "arrow", x1, y1, x1, y1);
	TweenMax.to($('#' + "vertical").show(), 1, {attr: {y2: y2}, onComplete: function() {
		
	}});
} */