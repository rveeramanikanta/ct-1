

var introjs;
var typingSpeed = 40;
var tl;
var stepCount = 1;
var step = 1;
var textStep = 0;

var flowChartStudentAvgReady = function() {
	introGuide();
	tl = new TimelineLite();
	svgAppend("#flowChartBoxChild", "svg");
	svgMarkerAppend("#svg", "arrow");
	
	tl.to($("#description li:eq(0)"), 1, {opacity :1, onComplete: function() {
		tl.to($("#description li:eq(1)"), 1, {opacity :1, onComplete: function() {
			tl.to($("#description li:eq(2)"), 1, {opacity :1, onComplete: function() {
				
			}})
		}})
	}})
	
	$("#restart").click(function() {
		location.reload();
	})
}

var count = 0;
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
						if (step <= 6) {
							getIntrojsStep("#flowChartBox","","left","");
						}
						var text =  $("#algorithmPoints li:eq("+ (step-1) +")").text(); 
						$("#algorithmPoints li:eq("+ (step-1) +")").removeClass("opacity00");
						typing("#algorithmPoints li:eq("+ (step-1) +")", text, function() {
							$(".introjs-nextbutton").show();
						})
					});
				})
		break;
		
		case "flowChartBox":
			//getIntrojsStep("#flowChartExp","","top","hide");
			$(".introjs-nextbutton").hide();
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

function svgAnimatingBottomToTopLine(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() - 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top - 7;
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

function flowChartStep() {
	$(".user-click").remove();
	flowChartSymbolsReveal();
}

function algorithmTextReveal(textStep) {
	console.log(" in the algorithmTextReveal ...")
	console.log(textStep);
	$("#stepsToEval > div:eq("+ textStep +") > * ").removeClass("opacity00")
	var text = $("#stepsToEval > div:eq("+ textStep +") > div:eq(1) ").text();
	typing($("#stepsToEval > div:eq("+ textStep +") > div:eq(1)"), text, function() {
		$("#stepsToEval > div:eq("+ textStep +") > div:eq(1)").append("<a class='introjs-button user-btn user-click' onclick='flowChartStep();'>Next &#8594;</a>");
		if(textStep == 6) {
			$("#restart").removeClass("opacity00");
	 	}
	}) 
}


function flowChartSymbolsReveal() {
	switch (step) {
	case 1 :
	case 2 :
	case 3 :
	case 4 :
	case 5 :
	case 6 :	
		$("#step" + step).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			 $("#step" + step).removeClass("animated zoomIn");	
			 if (step > 1) {
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
	}
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