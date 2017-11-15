var introjs;
var typingInterval = 1;

var pointersDrawbacksReady = function() {
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});

	$('#restartBtn').click(function() {
		location.reload();
	});

	introJsFunction();
}

function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof typingCallbackFunction === "function") {
			typingCallbackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}

function introJsFunction() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			element : "#preCode",
			intro : "",
		}, {
			element : "#line1",
			intro : "",
		}, {
			element : "#xBox",
			intro : "",
			animateStep : "xBoxAnimate",
			tooltipClass: 'hide',
		}, {
			element : "#line2",
			intro : "",
		}, {
			element : "#pBox",
			intro : "",
			animateStep : "pBoxAnimate",
			tooltipClass: 'hide',
		}, {
			element : "#line3",
			intro : "",
		}, {
			element : "#pBox",
			intro : "",
			animateStep : "pBoxValueAnimate",
			tooltipClass: 'hide',
		}, {
			element : "#animationDiv",
			intro : "",
			animateStep : "arrowAnimate",
			tooltipClass: 'hide',
		}, {
			element : "#line4",
			intro : "",
		}, {
			element : "#animationDiv",
			intro : "",
			animateStep : "*pValueAnimate",
			tooltipClass: 'hide',
		}, {
			element : "#print1",
			intro : "",
		}, {
			element : "#xBox",
			intro : "",
			animateStep : "xValuePrint",
		}, {
			element : "#outputBox",
			tooltipClass: "hide",
		}, {
			element : "#print2",
			intro : "",
		}, {
			element : "#animationDiv",
			intro : "",
			animateStep : "*pValuePrint",
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#restartBtn",
			intro : "Click to restart.",
			tooltipClass: "introjs-tooltip-min-width-custom",
			position : "right"
		} ]});
	
	introjs.onbeforechange(function(targetElement) {
		
		var elementId = targetElement.id;
		switch (elementId) {
		case "line1":
			$('#xBox').addClass('opacity00');
			$('#xValue').addClass('visibility-hidden');
			break;
		case "xBox":
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch (animateStep) {
				case "xBoxAnimate":
					$('#xValue').addClass('visibility-hidden');
					break;
				case "xValuePrint":
					$('#xValue').addClass('blinking-border-background-blue');
					break;
			}
			break;
		case "line2":
			$('#pBox').addClass('opacity00');
			break;
		case "pBox":
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch (animateStep) {
				case "pBoxValueAnimate":
					$('svg').remove();
					$('#pValue').addClass('visibility-hidden');
					break;
			}
			break;
		case "line3":
			$('#pValue').addClass('visibility-hidden');
			break;
		case "animationDiv":
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch (animateStep) {
				case "*pValueAnimate":
					$('#xValue').text("3");
					break;
				case "*pValuePrint":
					$('#xValue').addClass('blinking-border-background-blue');
					break;
			}
			break;
		case "line4":
			$('#xValue').text("3");
			break;
		case "print1":
		case "print2":
			$('.blinking-border-background-blue').removeClass('blinking-border-background-blue');
			break;
		}
	});
	
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		
		
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			if (introjs._currentStep != 0) {
				$('.introjs-prevbutton').show();
			}

			$('.introjs-nextbutton').show();
			return;
		}
		
		if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
			introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		}
		
		
		var elementId = targetElement.id;
		switch (elementId) {
		case "preCode":
			var typingContent = 'Let us understand a drawback of <span class="ct-code-b-yellow">pointers</span>.';
			typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case "line1":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This statement initializes an <span class="ct-code-b-yellow">int</span> variable'
								+ ' <span class="ct-code-b-yellow">x</span> with value <span class="ct-code-b-yellow">3</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "xBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "xBoxAnimate":
						animationXBox(function() {
						$('.introjs-tooltip').removeClass('hide');
						var typingContent = 'The variable <span class="ct-code-b-yellow">x</span> is of type '
									+ '<span class="ct-code-b-yellow">int</span>, it occupies <span class="ct-code-b-yellow">2 bytes</span> '
									+ 'in memory at some address (i.e. location). <br><br>Let its address be '
									+ '<span class="ct-code-b-yellow">1111</span>. The variable <span class="ct-code-b-yellow">x</span> is initialized to <span class="ct-code-b-yellow">3</span>.';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
						});
					break;
				case "xValuePrint":
					$('#xValue').addClass('blinking-border-background-blue');
					var typingContent = 'The blinking value is returned by <span class="ct-code-b-yellow">x</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
					break;
				}
			});
			break;
		case "line2":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'The <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">p</span> occupies '
								+ '<span class="ct-code-b-yellow">2 bytes</span> of memory.<br><br> This <span class="ct-code-b-yellow">pointer'
								+ '</span> variable is declared with <span class="ct-code-b-yellow">int</span> datatype, so it should point '
								+ 'to the address that contains an <span class="ct-code-b-yellow">int</span> value.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "pBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "pBoxAnimate":
					animationPBox(function() {
						$('.introjs-tooltip').removeClass('hide');
						var typingContent = 'The variable <span class="ct-code-b-yellow">p</span> is of type '
										+ '<span class="ct-code-b-yellow">int</span>, it occupies <span class="ct-code-b-yellow">2 bytes</span> '
										+ 'in memory at some address (i.e. location). <br>Let its address be '
										+ '<span class="ct-code-b-yellow">1234</span>.'
										+ '<br></br>A <span class="ct-code-b-yellow">pointer</span>\'s initial value is always some '
										+ '<span class="ct-code-b-yellow">garbage</span> value.';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
					break;
				case "pBoxValueAnimate":
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = 'The address of <span class="ct-code-b-yellow">x</span>(i.e., <span class="ct-code-b-yellow">1111</span>'
										+ ') is stored in <span class="ct-code-b-yellow">p</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationPBoxValue()'>" + 
																"Next &#8594;</a>");
					});
					break;
				}
			});
			break;
		case "line3":
				$('.introjs-helperLayer').one('transitionend', function () {
					var typingContent = 'The <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">p</span> is '
										+ 'assigned with <span class="ct-code-b-yellow">&x</span>, so the address of '
										+ '<span class="ct-code-b-yellow">x</span> is stored in <span class="ct-code-b-yellow">p</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
		case "animationDiv":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "arrowAnimate":
					$('svg').remove();
					$('.introjs-tooltip').removeClass('hide');
						var typingContent = 'Here the <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">p</span> has '
											+ 'the address of <span class="ct-code-b-yellow">x</span>, so it can access the variable '
											+ '<span class="ct-code-b-yellow">x</span>.';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationPointerArrow()'>" + 
																	"Next &#8594;</a>");
						});
					break;
				case "*pValueAnimate":
					$('.introjs-tooltip').removeClass('hide');
						var typingContent = 'The <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">p</span> '
										+ 'is pointing to <span class="ct-code-b-yellow">x</span> and it has changed the value of <span class="ct-code-b-yellow">'
										+ 'x</span> to <span class="ct-code-b-yellow">20</span>.<br/><br/>The <span class="ct-code-b-yellow">'
										+ 'drawback</span> in pointers is, without the knowledge of variable <span class="ct-code-b-yellow">x</span>, '
										+ 'the value of the variable <span class="ct-code-b-yellow">x</span> had been changed through the '
										+ 'pointer variable <span class="ct-code-b-yellow">*p</span>.';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationXBoxValue()'>" + 
																	"Next &#8594;</a>");
						});
					break;
				case "*pValuePrint":
						$('#xValue').addClass('blinking-border-background-blue');
						var typingContent = 'The blinking value is returned by <span class="ct-code-b-yellow">*p</span>.';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					break;
				}
			});
			break;
		case "line4":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Here the <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">*p</span> '
									+ 'is assigned with value <span class="ct-code-b-yellow">20</span>. <br><br/>In this case, since the '
									+ '<span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">p</span> '
									+ 'is pointing to <span class="ct-code-b-yellow">x</span>, this assignment has changed the value stored in '
									+ '<span class="ct-code-b-yellow">x</span> to <span class="ct-code-b-yellow">20</span>.'
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "print1":
				$('.introjs-helperLayer').one('transitionend', function () {
					var typingContent = 'This statement prints the <span class="ct-code-b-yellow">value</span> of <span class="ct-code-b-yellow">x</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
		case "print2":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This statement prints the <span class="ct-code-b-yellow">value</span> of <span class="ct-code-b-yellow">*p</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "outputBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._direction == "forward") {
					$('.blinking-border-background-blue').removeClass('blinking-border-background-blue');
					var selector = $('.output-console-body > .visibility-hidden').eq(0).addClass("temp");
					var typingContent = selector.removeClass('visibility-hidden').html();
					typing(selector, typingContent, 30, 'white', function() {
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					});
				} else {
					$('.temp:last').removeClass("temp").addClass("visibility-hidden");
					introjs.previousStep();
				}
			});
			break;
		case "restartBtn":
			$('.introjs-tooltip').css({'min-width' : '110px'});
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
			});
			break;
		}
	});
	
	introjs.start();
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function bounceFromEffextWithTimelineMax(selector1, selector2, callBackFunction) {
	var timelineMax = new TimelineMax();
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$(selector2).parent().append('<span id="temp" style="position: absolute;"></span>');
	$('#temp').offset({top: l2.top, left: l2.left}).text($(selector2).text());
	$(selector2).text($(selector1).text());
	timelineMax.from(selector2, 3, {ease:  Bounce.easeOut, top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}}).to('#temp', 1, { ease: Sine.easeOut, top: "-=100", opacity: 0, onComplete: function() {
		$('#temp').remove();
	}}, "-=2");
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

function svgAnimatingLineSelector1LeftSideToSelector2RightSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function animationXBox(callBackFunction) {
	$('#xBox').addClass('animated zoomIn').removeClass('opacity00').one('animationend', function() {
		$('#xBox').removeClass('animated zoomIn');
		$('#valueOfX').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
			$('#valueOfX').removeClass('circle-css');
			$('#xValue').removeClass('visibility-hidden');
			fromEffectWithTweenMax('#valueOfX', '#xValue', function() {
				callBackFunction();
			});
		});
	});
}

function animationPBox(callBackFunction) {
	$('#pBox').addClass('animated zoomIn').removeClass('opacity00').one('animationend', function() {
		$('#pBox').removeClass('animated zoomIn');
		callBackFunction();
	});
}

function animationPBoxValue() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#xAddress').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
		$('#xAddress').removeClass('circle-css');
		$('#pValue').removeClass('visibility-hidden');
		fromEffectWithTweenMax('#xAddress', '#pValue', function() {
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		});
	});
}

function animationPointerArrow() {
	$('.introjs-duplicate-nextbutton').remove();
	svgAppend($('#animationDiv'), 'svg');
	svgMarkerAppend($('#svg'), 'markerEnd');
	var parentSelector = $('#animationDiv');
	var selector1 = $('#pBox .padding10');
	var selector2 = $('#xBox .border-height-css');
	var svgId =  $('#svg');
	var svgLineId = 'svgLine';
	var markerId = 'markerEnd';
	svgAnimatingLineSelector1LeftSideToSelector2RightSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, function() {
		$('.introjs-nextbutton, .introjs-prevbutton').show();
	});
}

function animationXBoxValue() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#valueOfP20').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
		$('#valueOfP20').removeClass('circle-css');
		$('#xValue').removeClass('visibility-hidden');
		bounceFromEffextWithTimelineMax('#valueOfP20', '#xValue', function() {
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		});
	});
}