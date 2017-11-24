var introjs;
var typingInterval = 1;

var pointersDisadvantagesReady = function() {
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
			element : "#intLine",
			intro : "",
		}, {
			element : "#animationBox",
			tooltipClass: "hide",
			animateStep: 'intLine',
		}, {
			element : "#aLine1",
			intro : "",
		}, {
			element : "#animationBox",
			intro : "",
			animateStep: 'aLine1',
			tooltipClass: "hide",
		}, {
			element : "#aLine2",
			intro : "",
		}, {
			element : "#animationBox",
			intro : "",
			animateStep: 'aLine2',
			tooltipClass: "hide",
		}, {
			element : "#mallocTablesDiv1",
			intro : "",
		}, {
			element : "#bLine",
			intro : "",
		}, {
			element : "#animationBox",
			intro : "",
			animateStep: 'bLine',
			tooltipClass: "hide",
		}, {
			element : "#bFree",
			intro : "",
		}, {
			element : "#animationBox",
			intro : "",
			animateStep: 'bFree',
			tooltipClass: "hide",
		}, {
			element : "#arrayBox1",
			intro : "",
			animateStep: 'bFree',
		}, {
			element : "#restartBtn",
			intro : "Click to restart.",
			position : "right"
		} ]
	});
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "intLine":
			$('#aBox, #bBox').addClass('opacity00');
			break;
		case "animationBox":
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "intLine":
					$('#aBox, #bBox').addClass('opacity00');
					break;
				case "aLine1":
					$('svg').remove();
					$('#aValue').empty();
					$('#mallocTablesDiv1').addClass('opacity00');
					break;
				case "aLine2":
					$('#svgLine1').show();
					$('#svgLine11').remove();
					$('#aValue').text('1280');
					$('#mallocTablesDiv2').addClass('opacity00');
					break;
				case "bLine":
					$('#bValue').empty();
					$('#svgLine2').remove();
					break;
				case "bFree":
					$('#mallocTablesDiv2, #bValue').removeAttr('style');
					$('.svg-line').css('opacity','1');
					$('#bValue').text("2280");
					break;
				}
			break;
		case "aLine2":
			$('#svgLine1').show();
			$('#svgLine11').remove();
			$('#aValue').text('1280');
			$('#mallocTablesDiv2').addClass('opacity00');
			break;
		case "aLine1":
			$('svg').remove();
			$('#aValue').empty();
			$('#mallocTablesDiv1').addClass('opacity00');
			break;
		case "bLine":
			$('#bValue').empty();
			$('#svgLine2').remove();
			break;
		case "bFree":
			$('#mallocTablesDiv2, #bValue').removeAttr('style');
			$('.svg-line').css('opacity','1');
			$('#bValue').text("2280");
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
			var typingContent = 'Let us learn the disadvantages of <span class="ct-code-b-yellow">pointers</span>.';
			typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case "intLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Two <span class="ct-code-b-yellow">pointer</span> variables <span class="ct-code-b-yellow">a</span> and ' +
									'<span class="ct-code-b-yellow">b</span> of type <span class="ct-code-b-yellow">int</span> are declared.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "animationBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "intLine":
					animatedZoomInEffect($('#aBox, #bBox'), function() {
						$('.introjs-tooltip').removeClass('hide');
						var typingContent = '<span class="ct-code-b-yellow">Pointer</span> variables <span class="ct-code-b-yellow">a</span> and ' +
											'<span class="ct-code-b-yellow">b</span> occupy <span class="ct-code-b-yellow">2 bytes</span> in ' +
											'memory at some address.';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
					break;
				case "aLine1":
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = 'Each location occupies <span class="ct-code-b-yellow">2 bytes</span> in memory.<br><br> A total of ' +
										'<span class="ct-code-b-yellow">4 bytes</span> is allocated in the heap memory and the ' +
										'base address is returned which is stored in the pointer variable <span class="ct-code-b-yellow">a</span>.'; 
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationALine1Box()'>" + 
																"Next &#8594;</a>");
					});
					break;
				case "aLine2":
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = 'Here a new array of type int of size <span class="ct-code-b-yellow">3</span> is created dynamically ' +
										'and the base address of this location is overwritten in the variable <span class="ct-code-b-yellow">' + 
										'a</span>. <br><br>The previously created array still exists in memory with no reference.<br/><br/> This is one known ' +
										'<span class="ct-code-b-yellow">disadvantage</span> when using pointers.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationALine2Box()'>" + 
																"Next &#8594;</a>");
					});
					break;
				case "bLine":
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = 'The value <span class="ct-code-b-yellow">a</span> is copied to <span class="ct-code-b-yellow">b</span>, ' + 
										'<span class="ct-code-b-yellow">a</span> has the address of the dynamically allocated memory, ' + 
										'<span class="ct-code-b-yellow">b</span> also points to the same memory location.'
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationBLineBox()'>" + 
																"Next &#8594;</a>");
					});
					break;
				case "bFree":
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = 'Here <span class="ct-code-b-yellow">free(b)</span> clears the dynamic memory pointed by the pointer variable ' + 
										'<span class="ct-code-b-yellow">b</span>.<br/><br/>In this case the dynamic memory is cleared, but the pointer ' +
										'<span class="ct-code-b-yellow">a</span> still points to the address that does not exist anymore.<br/>' + 
										'<br>This is known as <span class="ct-code-b-yellow">Dangling Pointers</span>. This ' + 
										'<span class="ct-code-b-yellow">disadvantage</span> can be avoided by setting the pointer to ' +
										'<span class="ct-code-b-yellow">null</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationBFree()'>" + 
																"Next &#8594;</a>");
					});
					break;
				}
			});
			break;
		case "aLine2":
		case "aLine1":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = "A <span class='ct-code-b-yellow'>malloc()</span> function returns the pointer to the " + 
									"<span class='ct-code-b-yellow'>base address</span> of the <span class='ct-code-b-yellow'>heap memory</span> " + 
									"allocated."; 
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "mallocTablesDiv1":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'The unreferenced memory has to be explicitly freed using the <span class="ct-code-b-yellow">free()</span> function.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "bLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Here <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">b</span> is ' +
									'assigned with <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">a</span> ' +
									'and the value of <span class="ct-code-b-yellow">a</span> is stored in <span class="ct-code-b-yellow">b</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "bFree":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = '<span class="ct-code-b-yellow">free(b)</span> clears the memory of the address ' + 
									'which is pointed by the pointer variable <span class="ct-code-b-yellow">b</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "arrayBox1":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = '<span class="ct-code-b-yellow">' + $("#aValue").text() + '</span> is the address ' +
									'in the pointer variable <span class="ct-code-b-yellow">a</span>.</br></br> The address it points does not exist as it ' +
									'was freed by pointer variable <span class="ct-code-b-yellow">b</span>. This is a ' + 
									'<span class="ct-code-b-yellow">Dangling Pointer</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
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

function svgAnimatingLine(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
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

function animatedZoomInEffect(selector, callBackFunction) {
	$(selector).removeClass('opacity00').addClass('animated zoomIn').one('animationend', function() {
		$(selector).removeClass('animated zoomIn');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function animationALine1Box() {
	$('.introjs-duplicate-nextbutton').remove();
	animatedZoomInEffect($('#mallocTablesDiv1'), function() {
		var mallocTableAddress =  $('#mallocTablesDiv1 .ct-lime-color').eq(0);
		var aElement = $('#aValue');
		TweenMax.from(mallocTableAddress, 1, {backgroundColor: 'blue', onComplete: function() {
			aElement.text(mallocTableAddress.text());
			fromEffectWithTweenMax(mallocTableAddress, aElement, function() {
				svgAppend($('#animationBox'), 'svg');
				svgMarkerAppend($('#svg'), 'arrowEnd');
				var parentSelector = $('#animationBox');
				var selector1 = $('#aBox .border-height-css');
				var selector2 = $('#mallocTablesDiv1 .td-value-css').eq(0);
				var svgId = $('#svg');
				var markerId = 'arrowEnd';
				var svgLineId = 'svgLine1';
				svgAnimatingLine(parentSelector, selector1, selector2, svgId, svgLineId, markerId, function() {
					//svgAnimatingLine($('#animationBox'), $('#aBox .border-height-css'), $('#mallocTablesDiv1 .td-value-css').eq(0), $('#svg'), 'arrowEnd', 'svgLine1');
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		}});
	});
}

function animationALine2Box() {
	$('.introjs-duplicate-nextbutton').remove();
	animatedZoomInEffect($('#mallocTablesDiv2'), function() {
		var mallocTableAddress =  $('#mallocTablesDiv2 .ct-lime-color').eq(0);
		var aElement = $('#aValue');
		TweenMax.from(mallocTableAddress, 1, {backgroundColor: 'blue', onComplete: function() {
			bounceFromEffextWithTimelineMax(mallocTableAddress, aElement, function() {
				$('#svgLine1').hide();
				var parentSelector = $('#animationBox');
				var selector1 = $('#aBox .border-height-css');
				var selector2 = $('#mallocTablesDiv2 .td-value-css').eq(0);
				var svgId = $('#svg');
				var markerId = 'arrowEnd';
				var svgLineId = 'svgLine11';
				svgAnimatingLine(parentSelector, selector1, selector2, svgId, svgLineId, markerId, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		}});
	});
}

function animationBLineBox() {
	$('.introjs-duplicate-nextbutton').remove();
	TweenMax.from($('#aValue'), 1, {backgroundColor: 'blue', onComplete: function() {
		$('#bValue').text($('#aValue').text());
		fromEffectWithTweenMax($('#aValue'), $('#bValue'), function() {
			var parentSelector = $('#animationBox');
			var selector1 = $('#bBox .border-height-css');
			var selector2 = $('#mallocTablesDiv2 .td-value-css').eq(0);
			var svgId = $('#svg');
			var markerId = 'arrowEnd';
			var svgLineId = 'svgLine2';
			svgAnimatingLine(parentSelector, selector1, selector2, svgId, svgLineId, markerId, function() {
				$('.introjs-nextbutton, .introjs-prevbutton').show();
			});
		});
	}});
}

function animationBFree() {
	$('.introjs-duplicate-nextbutton').remove();
	var element = $('.svg-line, #mallocTablesDiv2, #bValue');
	TweenMax.to(element, 1, {opacity: 0, onComplete: function() {
		TweenMax.to($('#bValue').text('null'), 1, {opacity: 1, onComplete: function() {
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		}});
	}});
}