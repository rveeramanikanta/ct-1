var introjs;
var typingInterval = 1;
var chValueChanged = true;
var charDataTypeReady = function() {
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});

	$('#restartBtn').click(function() {
		location.reload();
	});

	introJsFunction();
	
	$("#chValue").on("keydown", function(e) {
		$('.length-error-text').remove();
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 37, 39]) !== -1) {
			return;
		}
		
		if ((e.keyCode < 47 || e.keyCode > 111)) {
			e.preventDefault();
		}

		if ($(this).val().length == max) {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>Please limit the digits length to 1.</span>");
			e.preventDefault();
		}
	});
	
	$("#chValue").on("keyup", function(e) {
		if ($(this).val() == "") {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>Please enter some number.</span>");
			$(this).addClass("empty").focus();
		} else {
			$(this).removeClass("empty");
		}
		
		if ($(".empty").length > 0) {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
		}
	});
}
function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof typingCallbackFunction === "function") {
			typingCallbackFunction();
		}
	});
}

function introJsFunction() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		steps : [ {
			element : '#headingTextBox',
			intro : '',
			tooltipClass : "hide"
		},
		{
			element : "#charDiv",
			intro : "",
			tooltipClass : "hide"
		},
		{
			element : "#preCode",
			intro : "",
			position : "top"
		},
		{
			element : "#charLine",
			intro : "",
			position : "top"
		},
		{
			element : "#restartBtn",
			intro : "Click to restart",
			position : "right"
		}
		]});

	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "headingTextBox":
			headingOpacityEffect('#headingTextBox .opacity00', function() {
				$('.introjs-tooltip').removeClass("hide");
				var typingContent = 'A variable of <span class="ct-code-b-yellow">char</span> data type can be declared as follows:';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "charDiv":
			$('.introjs-helperLayer').one('transitionend', function () {
				opacityTo100WithTweenMax($('#charDiv'), function() {
					$('#charDiv .opacity00').eq(0).append('<a class="introjs-button introjs-duplicate-nextbutton" onClick="charFunction1()">Next &#8594;</a>');
					opacityTo100WithTweenMax($('#charDiv .opacity00').eq(0));
				});
			});
			break;
		case "preCode":
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function () {
				opacityTo100WithTweenMax($('#preCodeDiv'), function() {
					var typingContent = 'Let us learn declaration and <span class="ct-code-b-yellow">ASCII</span> value of <span class="ct-code-b-yellow">char</span> data type.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
				});
			});
			break;
		case "charLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				introjsDynamicStep('#printf1', '', 'top', '');
				var typingContent = "In this line we declare a <span class='ct-code-b-yellow'>char</span> variable <span class='ct-code-b-yellow'>ch</span> and initialize with '<span class='ct-code-b-yellow'>A</span>'.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "chValue":
			$('.introjs-helperLayer').one('transitionend', function () {
				charAtEnd('chValue');
				introjsDynamicStep('#printf1', '', 'top', '');
				var typingContent = 'You can change the value of <span class="ct-code-b-yellow">ch</span> and try.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-tooltipbuttons").prepend('<a class="introjs-button user-btn" id="skipbutton" onclick="skipRestart()"> Skip</a>');
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "printf1":
			$('.user-btn').remove();
			$('.introjs-helperLayer').one('transitionend', function () {
				introjsDynamicStep('#outputBox', '', 'top', 'hide');
				$('.output-console-body').append('<span class="visibility-hidden">The value of ch in character : ' + $('#chValue').val() + '</span><br>');
				var typingContent = 'In this <span class="ct-code-b-yellow">printf()</span> statement <span class="ct-code-b-yellow">%c</span> prints <span class="ct-code-b-yellow">ch</span> in a <span class="ct-code-b-yellow">character</span> type.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "printf2":
			$('.introjs-helperLayer').one('transitionend', function () {
				introjsDynamicStep('#outputBox', '', '', 'hide');
				$('.output-console-body').append('<span class="visibility-hidden">The value of ch in ASCII : ' + $('#chValue').val().charCodeAt(0) + '</span><br>');
				var typingContent = 'In this <span class="ct-code-b-yellow">printf()</span> statement <span class="ct-code-b-yellow">%d</span> prints <span class="ct-code-b-yellow">ch</span> in a number. That number is <span class="ct-code-b-yellow">ASCII</span> value.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "outputBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (chValueChanged) {
					introjsDynamicStep('#printf2', '', 'top', '');
					chValueChanged = false;
				} else {
					introjsDynamicStep('#chValue', '', 'top', '');
					chValueChanged = true;
				}
				$('.output-console-body').scrollTo('br:last', 200);
				var selector = $('.output-console-body > .visibility-hidden').eq(0);
				var typingContent = selector.removeClass('visibility-hidden').html();
				typing(selector, typingContent, 30, 'white', function() {
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
				});
			});
			break;
		case "restartBtn":
			$('.introjs-tooltip').css('min-width', '125px');
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
			});
			break;
		}
	});
	
	introjs.start();
}

function introjsDynamicStep(element, intro, position, tooltipClass) {
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

function charAtEnd(elementId) {
	$('#' + elementId).select();
	var element = document.getElementById(elementId);
	element.focus();
}

function opacityTo100WithTweenMax(selector, callBackFunction) {
	TweenMax.to($(selector), 0.5, {opacity: 1, onComplete: function() {
		$(selector).removeClass('opacity00');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function headingOpacityEffect(selector, callBackFunction) {
	opacityTo100WithTweenMax($(selector).eq(0), function() {
		if ($(selector).length != 0) {
			headingOpacityEffect(selector, callBackFunction);
		} else {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}
	});
}

function charFunction1() {
	$('.introjs-duplicate-nextbutton').remove();
	opacityTo100WithTweenMax($('#charDiv .opacity00').eq(0), function() {
		$('#charDiv .opacity00').eq(0).append('<a class="introjs-button introjs-duplicate-nextbutton" onClick="charFunction2()">Next &#8594;</a>');
		opacityTo100WithTweenMax($('#charDiv .opacity00').eq(0));
	});
}

function charFunction2() {
	$('.introjs-duplicate-nextbutton').remove();
	opacityTo100WithTweenMax($('#charDiv .opacity00').eq(0), function() {
		opacityTo100WithTweenMax($('#charDiv .opacity00').eq(0), function() {
			$('#charDiv .opacity00').eq(0).append('<a class="introjs-button introjs-duplicate-nextbutton" onClick="charFunction3()">Next &#8594;</a>');
			opacityTo100WithTweenMax($('#charDiv .opacity00').eq(0));
		});
	});
}
function skipRestart() {
	$("#skipbutton").remove();
	introjsDynamicStep('#restartBtn', 'Click to restart', 'right', '');
	introjs.goToStep(introjs._introItems.length);
}
function charFunction3() {
	$('.introjs-duplicate-nextbutton').remove();
	introjs.nextStep();
}