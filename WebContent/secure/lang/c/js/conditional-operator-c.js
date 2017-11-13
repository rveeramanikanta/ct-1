var introjs;
var typing_interval = 5;

var typingId;
var typingContent;
var typingInterval;
var cursorColor;
var typingCallbackFunction;

var conditionalOperatorReady = function() {
	$(".introjs-duplicate-nextbutton").remove();
	$('.introjs-nextbutton, .introjs-prevbutton').hide();
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});

	$('#restartBtn').click(function() {
		location.reload();
	});
	
	introJsFunction();
	
	$("[contenteditable=true]").on("keydown", function(e) {
		$('.length-error-text').remove();
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39]) !== -1) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		
		if ($(this).text().length > max) {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>Please limit the digits length to 3.</span>");
			e.preventDefault();
		}
	});
	
	$("[contenteditable=true]").on("keyup", function(e) {
		if ($(this).text() == "") {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>Please enter some number.</span>");
			$(this).addClass("empty");
		} else {
			$(this).removeClass("empty");
		}
		introjs.refresh();
		
		if ($(".empty").length > 0) {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
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
			element : "#maxLine",
			intro : ""
		},
		{
			element : "#animationBox",
			intro : "",
			tooltipClass : "hide"
		},
		{
			element : "#num1Line",
			intro : ""
		},
		{
			element : "#num2Line",
			intro : ""
		},
		{
			element : "#maxLine",
			intro : "",
			tooltipClass : "hide"
		},
		{
			element : "#animationBox",
			intro : "",
			tooltipClass : "hide"
		},
		{
			element : "#printfLine",
			intro : "",
			tooltipClass : "hide"
		},
		{
			element : "#outputBox",
			intro : "",
			tooltipClass : "hide"
		},
		{
			element : "#restartBtn",
			intro : "Click to restart.",
			tooltipClass: "introjs-tooltip-min-width-custom",
			position : "right"
		}
		]});

	
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "maxLine":
			if (introjs._currentStep == 0) {
				$(".introjs-duplicate-nextbutton").remove();
				$(".animation-div1").css({"opacity":0});
				/*$("#condition").addClass("opacity00");
				$("#svgLine1").hide();
				$("#qMark, #true").addClass("opacity00");
				$("#svgLine2").hide();
				$("#collan, #false").addClass("opacity00");
				$("#svgLine3").hide();*/
			} else if (introjs._currentStep == 4) {
				$(".introjs-duplicate-nextbutton").remove()
			}
	break;
	case "animationBox":
		if (introjs._currentStep == 1) {
			$(".introjs-duplicate-nextbutton").remove()
			$(".animation-div1").css({"opacity":1});
			$("#box1, #box2, #box3, .statement-css").addClass("opacity00");
			$('#svgId').remove();
			$('.statement-css').removeAttr('style');
			$('.box-css').css({'border-color' : 'transparent'});
			
			//$("#svgLine1, #svgLine2, #svgLine3").hide();
			/*$("#condition, #num1-num2").removeClass("opacity00");
			$("#svgLine1").show();*/
		} else if (introjs._currentStep == 5) {
			$(".introjs-duplicate-nextbutton").remove()
		}
	break;
	case "num1Line":
		$(".introjs-duplicate-nextbutton").remove()
		
	break;
	case "num2Line":
		$(".introjs-duplicate-nextbutton").remove();
		
	break;
	case "printfLine":
		
	break;
	case "outputBox":
		
	break;
		}
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton').hide();
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
		
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "maxLine":
				if (introjs._currentStep == 0) {
					$(".introjs-duplicate-nextbutton").remove();
					 $('.introjs-nextbutton, .introjs-prevbutton').hide();
					typingId = '.introjs-tooltiptext';
					typingContent = 'In the above statement <span class="ct-code-b-yellow">(</span><b>num1 > num2</b>' +
									'<span class="ct-code-b-yellow">)</span>' +
									' <span class="ct-code-b-yellow">?</span> <b>num1</b> <span class="ct-code-b-yellow">:</span> <b>num2</b>' +
									'<span class="ct-code-b-yellow">;</span>' +
									'</br>This expression is a <span class="ct-code-b-yellow">ternary operator</span>.' +
									'</br>Syntax for ternary operator is:</br><b>condition</b> <span class="ct-code-b-yellow">?</span> <b>true_part</b> ' +
									'<span class="ct-code-b-yellow">:</span> <b>false_part</b><span class="ct-code-b-yellow">;</span>';
					typingInterval = typing_interval;
					cursorColor = 'white';
					typingCallbackFunction = function() {
						$('.introjs-nextbutton').show();
					}
					typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
					
				} else if (introjs._currentStep == 4) {
					$(".introjs-duplicate-nextbutton").remove()
					 $('.introjs-nextbutton, .introjs-prevbutton').hide();
					$('.introjs-helperLayer').one('transitionend', function() {
					$('[contenteditable="true"]').attr('contenteditable', 'false');
					$('.introjs-helperLayer').one('transitionend', function () {
						if (introjs._direction == "forward") {
							setTimeout(function () {
								introjs.nextStep();
							}, 1000);
						} else {
							setTimeout(function () {
								introjs.previousStep();
							}, 1000);
						}
					});
					});
				}
		break;
		case "animationBox":
				$('.introjs-helperLayer').one('transitionend', function () {
					$('.introjs-nextbutton, .introjs-prevbutton').hide();
					$(".introjs-duplicate-nextbutton").remove();
					if (introjs._currentStep == 1) {
						//$("#condition, #num1-num2").removeClass("opacity00");
					TweenMax.to('.animation-div1', 1, {opacity: 1, onComplete: function() {
						svgAppend($('.animation-div1'), 'svgId');
						svgMarkerAppend($('#svgId'), 'markerEnd');
						$("#box1").removeClass("opacity00");
						//$("#svgLine1").show();
						svgBoxAnimation(1, function() {
							$('.introjs-tooltip').removeClass('hide');
							typingId = '.introjs-tooltiptext';
							typingContent = 'When the <span class="ct-code-b-yellow">condition (num1 > num2)</span> evaluates to ' +
											'<span class="ct-code-b-yellow">true</span> then <span class="ct-code-b-yellow">num1</span> is returned ' +
											'else <span class="ct-code-b-yellow">num2</span> is returned.';
							typingInterval = typing_interval;
							cursorColor = 'white';
							typingCallbackFunction = function() {
								$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationStep2()'>" + 
																	"Next &#8594;</a>");
							}
							typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
						});
					}});
				}
		 else if (introjs._currentStep == 5) {
			 $(".introjs-duplicate-nextbutton").remove()
			 $('.introjs-nextbutton, .introjs-prevbutton').hide();
			 $('.introjs-nextbutton, .introjs-prevbutton').hide();
					TweenMax.to('.animation-div2', 1, {opacity: 1, onComplete: function() {
						flipEffectWithTweenMax('#num1', $('#num1value').text(), function() {
							flipEffectWithTweenMax('#num2', $('#num2value').text(), function() {
								flipEffectWithTweenMax('#n1', $('#num1value').text(), function() {
									flipEffectWithTweenMax('#n2', $('#num2value').text(), function() {
										$('.introjs-tooltip').removeClass('hide');
										typingId = '.introjs-tooltiptext';
										var num1 = parseInt($('#num1value').text());
										var num2 = parseInt($('#num2value').text());
										typingContent = 'The <span class="ct-code-b-yellow">condition (' + num1 + ' > ' + num2 + 
														')</span> evaluates to <span class="ct-code-b-yellow">' + (num1 > num2).toString() + 
														'</span> and hence the value <span class="ct-code-b-yellow">' + 
														((num1 > num2) ? num1 : num2).toString() + '</span> is assigned to the variable ' +
														'<span class="ct-code-b-yellow">max</span>.';
										typingInterval = typing_interval;
										cursorColor = 'white';
										typingCallbackFunction = function() {
											$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
																				"onclick='animatingDiv2()'>Next &#8594;</a>");
										}
										typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
									});
								});
							});
						});
					}});
				}
			});
		break;
		case "num1Line":
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".introjs-duplicate-nextbutton").remove()
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				typingId = '.introjs-tooltiptext';
				typingContent = 'We can change the value of <span class="ct-code-b-yellow">num1</span>.';
				typingInterval = typing_interval;
				cursorColor = 'white';
				typingCallbackFunction = function() {
					caretAtEnd('num1value');
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
				typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
			});
			break;
		case "num2Line":
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".introjs-duplicate-nextbutton").remove();
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				typingId = '.introjs-tooltiptext';
				typingContent = 'We can change the value of <span class="ct-code-b-yellow">num2</span>.';
				typingInterval = typing_interval;
				cursorColor = 'white';
				typingCallbackFunction = function() {
					caretAtEnd('num2value');
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
				typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
			});
			break;
		case "printfLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				if (introjs._direction == "forward") {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				} else {
					setTimeout(function () {
						introjs.previousStep();
					}, 1000);
				}
			});
			break;
		case "outputBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				typingId = '.output-console-body span';
				typingContent = 'The max number is ' + $('.max-value-div').children().text();
				typingInterval = 30;
				cursorColor = 'white';
				typingCallbackFunction = function() {
					if (introjs._direction == "forward") {
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					} else {
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					}
				}
				typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
			});
		break;
		case "restartBtn":
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
			});
		break;
		}
});
introjs.start();
	$('.introjs-nextbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
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

function svgLineAppend(svgId, svgLineId, svgMarkerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + svgMarkerId + '")';
	$(svgId).append(line);
}

function svgAnimatingLineSelector1TopSideToSelector2BottomSide(parentSelector, selector1, selector2, svgId, svgLineId, svgMarkerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	svgLineAppend(svgId, svgLineId, svgMarkerId, x1, y1, x1, y1 - 10);
	TweenMax.to($('#' + svgLineId).show(), 0.5, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function opacityTo100WithTweenMax(selector, callBackFunction) {
	TweenMax.to($(selector), 0.5, {opacity: 1, onComplete: function() {
		$(selector).removeClass('opacity00')
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgBoxAnimation(index, callBackFunction) {
	var element = $('.animation-div1 > span').eq(index);
	TweenMax.to(element, 0.5, {borderColor: 'gray', onComplete: function() {
		element.children().css({'width': element.width()});
		svgAnimatingLineSelector1TopSideToSelector2BottomSide($('.animation-div1'), element, element.children(),
																$('#svgId'), 'svgLine' + index, 'markerEnd', function () {
			opacityTo100WithTweenMax(element.children(), function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			});
		});
	}});
}

function animationStep2() {
	/*$("#qMark, #num1, #true").removeClass("opacity00");
	$("#svgLine2").show();*/
	$('.introjs-duplicate-nextbutton').remove();
	$('.introjs-prevbutton').hide();
	$('.introjs-tooltip').addClass('hide');
	$("#box2").removeClass("opacity00");
	$("#svgLine2").show();
	svgBoxAnimation(2, function() {
		$('.introjs-tooltip').removeClass('hide');
		typingId = '.introjs-tooltiptext';
		typingContent = 'This is the value to be return if the <span class="ct-code-b-yellow">condition</span> evaluates to ' +
						'<span class="ct-code-b-yellow">true</span>.';
		typingInterval = typing_interval;
		cursorColor = 'white';
		typingCallbackFunction = function() {
			$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationStep3()'>" + 
												"Next &#8594;</a>");
		}
		typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
	});
}

function animationStep3() {
	/*$("#collan, #num2").removeClass("opacity00");
	$("#svgLine3").show();*/
	$('.introjs-prevbutton').hide();
	$('.introjs-duplicate-nextbutton').remove();
	$('.introjs-tooltip').addClass('hide');
	$("#box3").removeClass("opacity00");
	$("#svgLine3").show();
	svgBoxAnimation(3, function() {
		$('.introjs-tooltip').removeClass('hide');
		typingId = '.introjs-tooltiptext';
		typingContent = 'This is the value to be return if the <span class="ct-code-b-yellow">condition</span> evaluates to ' +
						'<span class="ct-code-b-yellow">false</span>.';
		typingInterval = typing_interval;
		cursorColor = 'white';
		typingCallbackFunction = function() {
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		}
		typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
	});
}

function animatingDiv2() {
	$('.introjs-duplicate-nextbutton').remove();
	$('.introjs-tooltip').addClass('hide');
	var num1 = parseInt($('#num1value').text());
	var num2 = parseInt($('#num2value').text());
	(num1 > num2) ? animatingMax('n1') : animatingMax('n2');
}

function animatingMax(id) {
	TweenMax.to($('.max-value-div').children().not('#' + id), 1, {opacity: 0, onComplete: function() {
		var beforeRemoveLeft = $('#' + id).offset().left;
		$('.max-value-div').children().not('#' + id).remove();
		TweenMax.from($('#' + id), 1, {left: beforeRemoveLeft - $('#' + id).offset().left, onComplete: function() {
			setTimeout(function() {
				introjs.nextStep();
			}, 1000);
		}});
	}});
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

function caretAtEnd(element) {
	var element = document.getElementById(element);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}

function flipEffectWithTweenMax(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}