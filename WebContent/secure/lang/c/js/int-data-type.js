var intDataTypeReady = function() {
	$('#restartBtn').click(function() {
		location.reload();
	});
	introJsFunction();
}

function introJsFunction() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ 
		{
			element : '#typingbox',
			intro : '',
			position : 'right'
		},
		{
			element : '#signedintDiv',
			intro : '',
			position : 'right',
			tooltipClass : "hide"
		},
		{
			element : '#unsignedintDiv',
			intro : '',
			position : 'right',
			tooltipClass : "hide"
		},
		{
			element : "#restartBtn",
			intro : "Click to restart.",
			tooltipClass: "introjs-tooltip-min-width-custom",
			position : "right"
		}
		]
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "typingbox":
			typingContent = 'Let us learn different aspects of <span class="ct-code-b-yellow">int</span> data type.'; 
			typing('.introjs-tooltiptext', typingContent,function() {
				$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='intFunction1()'>Next &#8594;</a>");
			});
		break;
		case "signedintDiv":
			$('.introjs-helperLayer').one('transitionend', function() {
				opacityTo100WithTweenMax($('#signedintDiv'), function() {
					$('.signed-int-text-div.opacity00').eq(0).append('<a class="introjs-button introjs-duplicate-nextbutton" onClick="signedIntFunction1()">Next &#8594;</a>');
					opacityTo100WithTweenMax($('.signed-int-text-div.opacity00').eq(0));
				});
			});
			break;
		case "unsignedintDiv":
			$('.introjs-helperLayer').one('transitionend', function() {
				opacityTo100WithTweenMax($('#unsignedintDiv'), function() {
					$('.unsigned-int-text-div.opacity00').eq(0).append('<a class="introjs-button introjs-duplicate-nextbutton" onClick="unsignedIntFunction1()">Next &#8594;</a>');
					opacityTo100WithTweenMax($('.unsigned-int-text-div.opacity00').eq(0));
				});
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

function typing(typingId, typingContent, callbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": 1,
		"cursor_color": "blue"
	}, function() {
		$(typingId).removeClass('typingCursor');
		callbackFunction();
	});
}

function opacityTo100WithTweenMax(selector, callBackFunction) {
	TweenMax.to($(selector), 0.5, {opacity: 1, onComplete: function() {
		$(selector).removeClass('opacity00')
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function intFunction1() {
	$('.introjs-duplicate-nextbutton').remove();
	$(".introjs-tooltip").addClass("hide");
	opacityTo100WithTweenMax($('#typingbox .opacity00').eq(0), function() {
		opacityTo100WithTweenMax($('#typingbox .opacity00').eq(0), function() {
			opacityTo100WithTweenMax($('#typingbox .opacity00').eq(0), function() {
				opacityTo100WithTweenMax($('#typingbox .opacity00').eq(0), function() {
					$('#typingbox .opacity00').eq(0).append('<a class="introjs-button introjs-duplicate-nextbutton" onClick="intFunction2()">Next &#8594;</a>');
					opacityTo100WithTweenMax($('#typingbox .opacity00').eq(0));
				});
			});
		});
	});
}

function intFunction2() {
	$('.introjs-duplicate-nextbutton').remove();
	introjs.nextStep();
}

function signedIntFunction1() {
	$('.introjs-duplicate-nextbutton').remove();
	opacityTo100WithTweenMax($('#signedArrayDiv'), function() {
		opacityTo100WithTweenMax($('.signed-int-text-div.opacity00').eq(0), function() {
			$('#tablecell td').eq(1).addClass('background-color-red');
			$('.signed-int-text-div.opacity00').eq(0).append('<a class="introjs-button introjs-duplicate-nextbutton" onClick="signedIntFunction2()">Next &#8594;</a>');
			opacityTo100WithTweenMax($('.signed-int-text-div.opacity00').eq(0));
		});
	});
}

function signedIntFunction2() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#tablecell td').not(':eq(0), :eq(1)').addClass('background-color-yellow');
	$('.signed-int-text-div.opacity00').eq(0).append('<a class="introjs-button introjs-duplicate-nextbutton" onClick="signedIntFunction3()">Next &#8594;</a>');
	opacityTo100WithTweenMax($('.signed-int-text-div.opacity00').eq(0));
}

function signedIntFunction3() {
	$('.introjs-duplicate-nextbutton').remove();
	opacityTo100WithTweenMax($('.signed-int-text-div.opacity00').eq(0), function() {
		$('.signed-int-text-div.opacity00').eq(0).append('<a class="introjs-button introjs-duplicate-nextbutton" onClick="unsignedIntFunction0()">Next &#8594;</a>');
		opacityTo100WithTweenMax($('.signed-int-text-div.opacity00').eq(0));
	});
}

function unsignedIntFunction0() {
	$('.introjs-duplicate-nextbutton').remove();
	introjs.nextStep();
}

function unsignedIntFunction1() {
	$('.introjs-duplicate-nextbutton').remove();
	opacityTo100WithTweenMax($('#unsignedArrayDiv'), function() {
		$('.unsigned-int-text-div.opacity00').eq(0).append('<a class="introjs-button introjs-duplicate-nextbutton" onClick="unsignedIntFunction2()">Next &#8594;</a>');
		opacityTo100WithTweenMax($('.unsigned-int-text-div.opacity00').eq(0));
	});
}

function unsignedIntFunction2() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#tabledisplay td').not(':eq(0)').addClass('background-color-yellow');
	opacityTo100WithTweenMax($('.unsigned-int-text-div.opacity00').eq(0), function() {
		$('.unsigned-int-text-div.opacity00').eq(0).append('<a class="introjs-button introjs-duplicate-nextbutton" onClick="unsignedIntFunction3()">Next &#8594;</a>');
		opacityTo100WithTweenMax($('.unsigned-int-text-div.opacity00').eq(0));
	});
}

function unsignedIntFunction3() {
	$('.introjs-duplicate-nextbutton').remove();
	introjs.nextStep();
}
