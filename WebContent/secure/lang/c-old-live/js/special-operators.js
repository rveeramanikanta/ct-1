var introjs;
var typing_interval = 10;

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

	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "headingTextBox":
			$('#headingTextBox .opacity00').eq(0).append('<a class="introjs-button introjs-duplicate-nextbutton1" ' + 
															'onClick="textFunction1()">Next &#8594;</a>');
			opacityTo100WithTweenMax($('#headingTextBox .opacity00').eq(0));
			break;
		case "preCode":
			$('#demoDiv').removeClass('visibility-hidden');
			$('.introjs-helperLayer').one('transitionend', function () {
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
			$('.introjs-helperLayer').one('transitionend', function () {
				typingId = '.introjs-tooltiptext';
				typingContent = 'Whenever we are declaring multiple variables of the same data type we can use ' +
								'<span class="ct-code-b-yellow">comma</span> operator as shown above.';
				typingInterval = typing_interval;
				cursorColor = 'white';
				typingCallbackFunction = function() {
					$('.introjs-nextbutton').show();
				}
				typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
			});
			break;
		case "line5":
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
			$('.introjs-helperLayer').one('transitionend', function () {
				typingId = '.introjs-tooltiptext';
				typingContent = 'The below five <span class="ct-code-b-yellow">printf()</span> statements demonstrate the usage of ' +
								'<span class="ct-code-b-yellow">sizeof()</span> operator.';
				typingInterval = typing_interval;
				cursorColor = 'white';
				typingCallbackFunction = function() {
					$('.introjs-nextbutton').show();
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
				setTimeout(function() {
					introjs.nextStep();
				}, 1000);
			});
			break;
		case "outputBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				typingId = $(".output-console-body .visibility-hidden").eq(0);
				typingContent = $(".output-console-body .visibility-hidden").eq(0).html();
				$(".output-console-body .visibility-hidden").eq(0).removeClass('visibility-hidden');
				typingInterval = 30;
				cursorColor = 'white';
				typingCallbackFunction = function() {
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
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
		$('.introjs-nextbutton').show();
	}
	typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
}