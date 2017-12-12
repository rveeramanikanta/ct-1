var introjs;
var typingSpeed = 1;
var tl;
var stepCount = 1;
var step = 1;

var flowchartAreaOfACircleReady = function() {
	introGuide();
	tl = new TimelineLite();
	for(var i = 1; i <= 4 ; i++) {
		svgAppend("#svgArrow" + i, "svg" + i);
		svgMarkerAppend("#svg" + i, "arrow" + i);
	}
					
	fadeEffect("#desText1", function() {
		fadeEffect("#desText2", function() {
			fadeEffect("#desText3", function() {
				
			});
		});
	});
	
	$("#restart").click(function() {
		location.reload();
	});
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : "#description",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#flowChartBox",
			intro : "",
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
			case "flowChartBox":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					algorithmText();
				});
			
			break;
		}
	});
	
	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.start();
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

function fadeEffect(element, callBackFunction) {
	tl.to(element, 0.5, {opacity:1, onComplete: function() {
		$(element).removeClass("opacity00");
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
	marker.setAttribute('refX', '5');
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

function nextStep() {
	$(".user-next").remove();
	introjs.nextStep();
}

function svgAnimatingBottomToTopLine(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top;
	if(x1 > x2) {
		x2 = x1;
	} else {
		x1 = x2;
	}
	x1 = (x1 / ($("#svg" + (stepCount-1)).width() / 100)) + "%";
	y1 = (y1 / ($("#svg" + (stepCount-1)).height() / 100)) + "%";
	x2 = (x2 / ($("#svg" + (stepCount-1)).width() / 100)) + "%";
	y2 = (y2 / ($("#svg" + (stepCount-1)).height() / 100)) + "%";
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function arrowAppend() {
	$(".user-btn" + stepCount).remove();
	if(stepCount == 1) {
		$("#step" + stepCount).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			$("#step" + stepCount).removeClass("animated zoomIn");
			stepCount++;
			algorithmText();
		});
	} else {
		var x = stepCount - 1;
		svgAnimatingBottomToTopLine("#svgArrow" + x, "#step"+ x, "#step"+(stepCount), "#svg" + x, "svgLine"+ x, "arrow" + x, function() {
			$("#step" + stepCount).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
				$("#step" + stepCount).removeClass("animated zoomIn");
				stepCount++;
				if(stepCount == 6) {
					$("#restart").removeClass("opacity00");
					$("#restart").addClass("zIndex");
				}
				algorithmText();
			});
		});
	}
}

function algorithmText() {
	fadeEffect("#stepArrow" + stepCount, function() {
		$("#algorithm" + stepCount).removeClass("opacity00");
		if(stepCount == 1) {
			var text = "Let us start the program by analysing the given requirement. ";
		} else if(stepCount == 2) {
			var text = "Read the input from the user as radius. ";
		} else if(stepCount == 3) {
			var text = "The processing part involves calculating the area of a circle using the formula <b style='white-space: nowrap;'>area = 3.14 * r * r</b>. ";
		} else if(stepCount == 4) {
			var text = "Once the area of circle is calculated the next step is to print the area.";
		} else {
			var text = "After printing the required output the program terminates. ";
		}
		
		typing("#algorithm" + stepCount, text, function() {
			$("#algorithm" + stepCount).append("<a class='introjs-button user-btn user-btn"+stepCount+"' onclick='arrowAppend()'>Next &#8594;</a>");
		});
	});
}