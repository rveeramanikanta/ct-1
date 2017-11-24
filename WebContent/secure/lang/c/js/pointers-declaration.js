var introjs;
var typingInterval = 1;

var pointersDeclarationReady = function() {
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
		steps : [ {
			element : "#preCode",
			intro : "",
		}, {
			element : "#line1",
			intro : "",
		}, {
			element : "#xBox",
			intro : "",
			tooltipClass: 'hide',
		}, {
			element : "#line2",
			intro : "",
			animateStep: 'floatP',
		}, {
			element : "#pBox",
			intro : "",
			animateStep: 'floatP',
			tooltipClass: 'hide',
		}, {
			element : "#line3",
			intro : "",
			animateStep: 'floatP',
		}, {
			element : "#line2",
			tooltipClass: "hide",
			animateStep: 'intP',
		}, {
			element : "#pBox",
			intro : "",
			animateStep: 'intP',
		}, {
			element : "#line3",
			intro : "",
			animateStep: 'intP',
		}, {
			element : "#animationBox",
			intro : "",
			tooltipClass: 'hide',
		}, {
			element : "#restartBtn",
			intro : "Click to restart.",
			position : "right"
		} ]});
	
	introjs.onbeforechange(function(targetElement){
		var elementId = targetElement.id;
		switch(elementId) {
		case "line1":
			$('#xBox').addClass('opacity00');
			$('#xValue').addClass('visibility-hidden');
			break;
		case "xBox":
			$('#xBox').addClass('opacity00');
			break;
		case "animationBox":
			$('#pValue').text("");
			break;
		case "line2":
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch (animateStep) {
				case "floatP":
					$('#pBox').addClass('opacity00');
					break;
			}
			break;
		case "line3":
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch (animateStep) {
				case "intP":
					$('svg').remove();
					$('#pValue').text("");
					break;
			}
			break;
		case "pBox":
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch (animateStep) {
				case "floatP":
					$('#pBox').addClass('opacity00');
					break;
			}
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
			var typingContent = 'Let us learn how to declare <span class="ct-code-b-yellow">pointers</span> in '
								+ '<span class="ct-code-b-yellow">C</span>.';
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
			$('#xValue').addClass('visibility-hidden');
			$('.introjs-helperLayer').one('transitionend', function () {
				animationXBox(function() {
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = 'The variable <span class="ct-code-b-yellow">x</span> is of type '
										+ '<span class="ct-code-b-yellow">int</span>, it occupies <span class="ct-code-b-yellow">2 bytes</span> '
										+ 'in memory and has some address (i.e. location).<br><br> Let the address be '
										+ '<span class="ct-code-b-yellow">1111</span>. The variable <span class="ct-code-b-yellow">x</span> is initialized to '
										+ '<span class="ct-code-b-yellow">3</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			});
			break;
		case "line2":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "floatP":
					var typingContent = 'The <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">p</span> occupies '
										+ '<span class="ct-code-b-yellow">2 bytes</span> of memory. <br><br> This <span class="ct-code-b-yellow">pointer'
										+ '</span> variable is declared as <span class="ct-code-b-yellow">float</span> datatype, so it should point '
										+ 'to the address that contains a <span class="ct-code-b-yellow">float</span> value.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
					break;
				case "intP":
					if (introjs._direction == "forward") {
						TweenMax.to($('#line2'), 1, {opacity: 0, onComplete: function() {
							$('#line2').text('int *p;');
							TweenMax.to($('#line2'), 1, {opacity: 1, onComplete: function() {
								setTimeout(function() {
									introjs.nextStep();
								}, 1000);
							}});
						}});
					} else {
						TweenMax.to($('#line2'), 1, {opacity: 0, onComplete: function() {
							$('#line2').text('float *p;');
							introjs.refresh();
							TweenMax.to($('#line2'), 1, {opacity: 1, onComplete: function() {
								setTimeout(function() {
									introjs.previousStep();
								}, 1000);
							}});
						}});
					}
					break;
				}
			});
			break;
		case "pBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "floatP":
					animationPBox(function() {
						$('.introjs-tooltip').removeClass('hide');
						var typingContent = 'The variable <span class="ct-code-b-yellow">p</span> is a <span class="ct-code-b-yellow">pointer</span> and '
											+ 'it allocates <span class="ct-code-b-yellow">2 bytes</span> of memory. <br><br>'
											+ '<span class="ct-code-b-yellow">Note:</span> In this example <span class="ct-code-b-yellow">pointer</span> '
											+ 'variable is of type <span class="ct-code-b-yellow">float</span>, so it should refer only to the memory '
											+ 'address which contains <span class="ct-code-b-yellow">float</span> value.';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
					break;
				case "intP":
					var typingContent = 'The variable <span class="ct-code-b-yellow">p</span> is a <span class="ct-code-b-yellow">pointer</span>, '
										+ 'it occupies <span class="ct-code-b-yellow">2 bytes</span> in memory to store the address.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
					break;
				}
			});
			break;
		case "line3":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "floatP":
					var typingContent = 'In this statement, the <span class="ct-code-b-yellow">pointer</span> variable '
										+ '<span class="ct-code-b-yellow">p</span> is assigned with <span class="ct-code-b-yellow">&x</span>. It '
										+ 'throws an error since <span class="ct-code-b-yellow">x</span> is of type <span class="ct-code-b-yellow">'
										+ 'int</span> and <span class="ct-code-b-yellow">p</span> is of type <span class="ct-code-b-yellow">'
										+ 'float</span>.</br><br><span class="ct-code-b-yellow">Note:</span> The <span class="ct-code-b-yellow">'
										+ 'pointer</span> variable can refer only to the variable of the type it is declared, i.e. the '
										+ '<span class="ct-code-b-yellow">pointer</span> variable declared with <span class="ct-code-b-yellow">'
										+ 'float</span> can be assigned with address of the variable of type <span class="ct-code-b-yellow">float</span>.'
										+ '<br></br>So, let us change the datatype of <span class="ct-code-b-yellow">p</span> '
										+ 'to <span class="ct-code-b-yellow">int</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
					break;
				case "intP":
					var typingContent = 'The <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">p</span> is '
										+ 'assigned with <span class="ct-code-b-yellow">&x</span>. <br><br> So the address of '
										+ '<span class="ct-code-b-yellow">x</span> is stored in <span class="ct-code-b-yellow">p</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
					break;
				}
			});
			break;
		case "animationBox":
			$('#pValue').text();
			$('svg').remove();
			$('.introjs-helperLayer').one('transitionend', function () {
				$('.introjs-tooltip').removeClass('hide');
				var typingContent = 'Now the address of <span class="ct-code-b-yellow">x</span> is stored in ' +
									'<span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">p</span>. <br>So the ' +
									'pointer variable <span class="ct-code-b-yellow">p</span> points to <span class="ct-code-b-yellow">x</span>.'
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationPBoxArrow()'>" + 
															"Next &#8594;</a>");
				});
			});
			break;
		case "restartBtn":
			$('.introjs-tooltip').css({'min-width' : '125px'});
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

function animationPBoxArrow() {
	$('.introjs-duplicate-nextbutton, svg').remove();
	TweenMax.from($('#xAddress'), 1, {ease: Power4.easeIn, backgroundColor: 'blue', onComplete: function() {
		$('#pValue').text($('#xAddress').text());
		fromEffectWithTweenMax($('#xAddress'), $('#pValue'), function() {
			svgAppend($('#animationBox'), 'svg');
			svgMarkerAppend($('#svg'), 'markerEnd');
			var parentSelector = $('#animationBox');
			var selector1 = $('#pBox .padding10');
			var selector2 = $('#xBox .border-height-css');
			var svgId =  $('#svg');
			var svgLineId = 'svgLine';
			var markerId = 'markerEnd';
			svgAnimatingLineSelector1LeftSideToSelector2RightSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, function() {
				$('.introjs-nextbutton, .introjs-prevbutton').show();
			});
		});
	}});
}
