var introjs;
var typing_interval = 1;

var typingId;
var typingContent;
var typingInterval;
var cursorColor;
var typingCallbackFunction;

var specialOperatorsReady = function() {
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
			element : "#headingTextBox",
			intro : "",
			tooltipClass : "hide"
		},
		{
			element : "#preCode",
			intro : "",
			position: "right"
		},
		{
			element : "#line1",
			intro : ""
		},
		{
			element : "#line5",
			intro : ""
		},
		{
			element : "#line6",
			tooltipClass : "hide"
		},
		{
			element : "#outputBox",
			tooltipClass : "hide"
		},
		{
			element : "#sizeOfPrintfLines",
			intro : "",
			position: "top"
		},
		{
			element : "#line7",
			tooltipClass : "hide"
		},
		{
			element : "#outputBox",
			tooltipClass : "hide"
		},
		{
			element : "#line8",
			tooltipClass : "hide"
		},
		{
			element : "#outputBox",
			tooltipClass : "hide"
		},
		{
			element : "#line9",
			tooltipClass : "hide"
		},
		{
			element : "#outputBox",
			tooltipClass : "hide"
		},
		{
			element : "#line10",
			tooltipClass : "hide"
		},
		{
			element : "#outputBox",
			tooltipClass : "hide"
		},
		{
			element : "#line11",
			tooltipClass : "hide"
		},
		{
			element : "#outputBox",
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
		case "headingTextBox":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;	
		case "preCode":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		break;
		case "line1":
			$('.background-color-pink').removeClass('background-color-pink');
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
		case "headingTextBox":
			$('#headingTextBox .opacity00').eq(0).append('<a class="introjs-button introjs-duplicate-nextbutton1" ' + 
															'onClick="textFunction1()">Next &#8594;</a>');
			opacityTo100WithTweenMax($('#headingTextBox .opacity00').eq(0));
		break;
		case "preCode":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('#demoDiv').removeClass('visibility-hidden');
			$('.introjs-helperLayer').one('transitionend', function () {
				//$('.introjs-tooltip').removeClass('hide');
				typingId = '.introjs-tooltiptext';
				typingContent = 'This code demonstrate the usage of <span class="ct-code-b-yellow">comma</span> and ' +
								'<span class="ct-code-b-yellow">sizeof()</span> operators.</span>';
				typingInterval = typing_interval;
				cursorColor = 'white';
				typingCallbackFunction = function() {
					$('.introjs-nextbutton').show();
				}
				typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
			});
		break;
		case "line1":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$('.introjs-tooltip').removeClass('hide');
				typingId = '.introjs-tooltiptext';
				typingContent = 'Whenever we are declaring multiple variables of the same data type we can use ' +
								'<span class="ct-code-b-yellow">comma</span> operator as shown above.';
				typingInterval = typing_interval;
				cursorColor = 'white';
				typingCallbackFunction = function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
				typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
			});
		break;
		case "line5":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				typingId = '.introjs-tooltiptext';
				typingContent = '<span class="ct-code-b-yellow">Comma</span> operator can also be used to group multiple expressions as shown above.';			
				typingInterval = typing_interval;
				cursorColor = 'white';
				typingCallbackFunction = function() {
					$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton2' onclick='statementFunction1()'>" + 
														"Next &#8594;</a>");
				}
				typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
			});
			break;
		case "sizeOfPrintfLines":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				typingId = '.introjs-tooltiptext';
				typingContent = 'The below five <span class="ct-code-b-yellow">printf()</span> statements demonstrate the usage of ' +
								'<span class="ct-code-b-yellow">sizeof()</span> operator.';
				typingInterval = typing_interval;
				cursorColor = 'white';
				typingCallbackFunction = function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
				typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
			});
		break;
		case "line6":
			$('.background-color-pink').removeClass('background-color-pink');
		case "line7":
		case "line8":
		case "line9":
		case "line10":
		case "line11":
			introjs.refresh();
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
		break;
		case "outputBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._currentStep == 5) {
					if (introjs._direction == "forward") {
						$(".output-console-body #firstVal").removeClass('visibility-hidden');
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					} else {
						setTimeout(function () {
							$(".output-console-body #firstVal").addClass('visibility-hidden');
							introjs.previousStep();
						}, 1000);
					}
				} else if (introjs._currentStep == 8) {
					if (introjs._direction == "forward") {
						$(".output-console-body #secondVal").removeClass('visibility-hidden');
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					} else {
						setTimeout(function () {
							$(".output-console-body #secondVal").addClass('visibility-hidden');
							introjs.previousStep();
						}, 1000);
					}
					
				} else if (introjs._currentStep == 10) {
					if (introjs._direction == "forward") {
						$(".output-console-body #thirdVal").removeClass('visibility-hidden');
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					} else {
						setTimeout(function () {
							$(".output-console-body #thirdVal").addClass('visibility-hidden');
							introjs.previousStep();
						}, 1000);
					}
				} else if (introjs._currentStep == 12) {
					if (introjs._direction == "forward") {
						$(".output-console-body #fourthVal").removeClass('visibility-hidden');
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					} else {
						setTimeout(function () {
							$(".output-console-body #fourthVal").addClass('visibility-hidden');
							introjs.previousStep();
						}, 1000);
					}
				} else if (introjs._currentStep == 14) {
					if (introjs._direction == "forward") {
						$(".output-console-body #fifthVal").removeClass('visibility-hidden');
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					} else {
						setTimeout(function () {
							$(".output-console-body #fifthVal").addClass('visibility-hidden');
							introjs.previousStep();
						}, 1000);
					}
				} else if (introjs._currentStep == 16) {
					if (introjs._direction == "forward") {
						$(".output-console-body #sixthVal").removeClass('visibility-hidden');
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					} else {
						setTimeout(function () {
							$(".output-console-body #sixthVal").addClass('visibility-hidden');
							introjs.previousStep();
						}, 1000);
					}
				}
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
}

function opacityTo100WithTweenMax(selector, callBackFunction) {
	TweenMax.to($(selector), 0.5, {opacity: 1, onComplete: function() {
		$(selector).removeClass('opacity00')
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

function textFunction1() {
	$('.introjs-duplicate-nextbutton1').remove();
	headingOpacityEffect('.commaLine.opacity00', function() {
		$('.commaLine').last().append('<a class="introjs-button introjs-duplicate-nextbutton1" onClick="textFunction2()">Next &#8594;</a>');
		introjs.refresh();
	});
}

function textFunction2() {
	$('.introjs-duplicate-nextbutton1').remove();
	headingOpacityEffect('.sizeofLine.opacity00', function() {
		$('.sizeofLine').last().append('<a class="introjs-button introjs-duplicate-nextbutton1" onClick="textFunction3()">Next &#8594;</a>');
		introjs.refresh();
	});
}

function textFunction3() {
	$('.introjs-duplicate-nextbutton1').remove();
	$('#headingTextBox').addClass("z-index");
	introjs.nextStep();
}

function statementFunction1() {
	$('.introjs-duplicate-nextbutton2').remove();
	$('.introjs-tooltiptext').append('<span id="typing1"></span>');
	$('#line5 span').eq(1).addClass('background-color-pink');
	typingId = '#typing1';
	typingContent = '<br>In the above expression' +
					'<ul><li>first <span class="ct-code-b-yellow">f</span> is assigned to the value <span class="ct-code-b-yellow">5</span></li></ul>';			
	typingInterval = typing_interval;
	cursorColor = 'white';
	typingCallbackFunction = function() {
		$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton2' onclick='statementFunction2()'>" + 
											"Next &#8594;</a>");
	}
	typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
}

function statementFunction2() {
	$('.introjs-duplicate-nextbutton2').remove();
	$('.background-color-pink').removeClass('background-color-pink');
	$('#line5 span').eq(2).addClass('background-color-pink');
	$('#typing1 ul').append('<li></li>');
	typingId = $('#typing1 li').eq(1);
	typingContent = 'then <span class="ct-code-b-yellow">g</span> is assigned to the value <span class="ct-code-b-yellow">4</span>';			
	typingInterval = typing_interval;
	cursorColor = 'white';
	typingCallbackFunction = function() {
		$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton2' onclick='statementFunction3()'>" + 
											"Next &#8594;</a>");
	}
	typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
}

function statementFunction3() {
	$('.introjs-duplicate-nextbutton2').remove();
	$('.background-color-pink').removeClass('background-color-pink');
	$('#line5 span:eq(0), #line5 span:eq(3)').addClass('background-color-pink');
	$('#typing1 ul').append('<li></li>');
	typingId = $('#typing1 li').eq(2);
	typingContent = 'finally the value <span class="ct-code-b-yellow">a</span> is assigned to <span class="ct-code-b-yellow">f + g</span>';			
	typingInterval = typing_interval;
	cursorColor = 'white';
	typingCallbackFunction = function() {
		$('.introjs-nextbutton, .introjs-prevbutton').show();
	}
	typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
}