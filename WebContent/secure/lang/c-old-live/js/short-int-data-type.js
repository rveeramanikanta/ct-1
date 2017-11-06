var shortIntDataTypeReady = function() {
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
			element : '#signedShortintDiv',
			intro : '',
			position : 'right',
			tooltipClass : "hide"
		},
		{
			element : '#unsignedShortintDiv',
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
			typingContent = 'Let us learn different aspects of <span class="ct-code-b-yellow">short int</span> data type.'; 
			typing('.introjs-tooltiptext', typingContent,function() {
				$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='shortIntFunction1()'>Next &#8594;</a>");
			});
		break;
		case "signedShortintDiv":
			$('.introjs-helperLayer').one('transitionend', function() {
				opacityTo100WithTweenMax($('#signedShortintDiv'), function() {
					$('.signed-short-int-text-div.opacity00').eq(0).append('<a class="introjs-button introjs-duplicate-nextbutton" onClick="signedIntFunction1()">Next &#8594;</a>');
					opacityTo100WithTweenMax($('.signed-short-int-text-div.opacity00').eq(0));
				});
			});
			break;
		case "unsignedShortintDiv":
			$('.introjs-helperLayer').one('transitionend', function() {
				opacityTo100WithTweenMax($('#unsignedShortintDiv'), function() {
					$('.unsigned-short-int-text-div.opacity00').eq(0).append('<a class="introjs-button introjs-duplicate-nextbutton" onClick="unsignedIntFunction1()">Next &#8594;</a>');
					opacityTo100WithTweenMax($('.unsigned-short-int-text-div.opacity00').eq(0));
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
		"typing_interval": 10,
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

function shortIntFunction1() {
	$('.introjs-duplicate-nextbutton').remove();
	$(".introjs-tooltip").addClass("hide");
	opacityTo100WithTweenMax($('#typingbox .opacity00').eq(0), function() {
		opacityTo100WithTweenMax($('#typingbox .opacity00').eq(0), function() {
			$('#typingbox .opacity00').eq(0).append('<a class="introjs-button introjs-duplicate-nextbutton" onClick="shortIntFunction2()">Next &#8594;</a>');
			opacityTo100WithTweenMax($('#typingbox .opacity00').eq(0));
		});
	});
}

function shortIntFunction2() {
	$('.introjs-duplicate-nextbutton').remove();
	introjs.nextStep();
}

function signedIntFunction1() {
	$('.introjs-duplicate-nextbutton').remove();
	opacityTo100WithTweenMax($('#signedShortArrayDiv'), function() {
		opacityTo100WithTweenMax($('.signed-short-int-text-div.opacity00').eq(0), function() {
			$('#tablecell td').eq(2).addClass('background-color-red');
			$('.signed-short-int-text-div.opacity00').eq(0).append('<a class="introjs-button introjs-duplicate-nextbutton" onClick="signedIntFunction2()">Next &#8594;</a>');
			opacityTo100WithTweenMax($('.signed-short-int-text-div.opacity00').eq(0));
		});
	});
}

function signedIntFunction2() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#tablecell td').not(':eq(0), :eq(1), :eq(2)').addClass('background-color-yellow');
	$('.signed-short-int-text-div.opacity00').eq(0).append('<a class="introjs-button introjs-duplicate-nextbutton" onClick="signedIntFunction3()">Next &#8594;</a>');
	opacityTo100WithTweenMax($('.signed-short-int-text-div.opacity00').eq(0));
}

function signedIntFunction3() {
	$('.introjs-duplicate-nextbutton').remove();
	opacityTo100WithTweenMax($('.signed-short-int-text-div.opacity00').eq(0), function() {
		$('.signed-short-int-text-div.opacity00').eq(0).append('<a class="introjs-button introjs-duplicate-nextbutton" onClick="unsignedIntFunction0()">Next &#8594;</a>');
		opacityTo100WithTweenMax($('.signed-short-int-text-div.opacity00').eq(0));
	});
}

function unsignedIntFunction0() {
	$('.introjs-duplicate-nextbutton').remove();
	introjs.nextStep();
}

function unsignedIntFunction1() {
	$('.introjs-duplicate-nextbutton').remove();
	opacityTo100WithTweenMax($('#unsignedShortArrayDiv'), function() {
		$('.unsigned-short-int-text-div.opacity00').eq(0).append('<a class="introjs-button introjs-duplicate-nextbutton" onClick="unsignedIntFunction2()">Next &#8594;</a>');
		opacityTo100WithTweenMax($('.unsigned-short-int-text-div.opacity00').eq(0));
	});
}

function unsignedIntFunction2() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#tabledisplay td').not(':eq(0), :eq(1)').addClass('background-color-yellow');
	opacityTo100WithTweenMax($('.unsigned-short-int-text-div.opacity00').eq(0), function() {
		$('.unsigned-short-int-text-div.opacity00').eq(0).append('<a class="introjs-button introjs-duplicate-nextbutton" onClick="unsignedIntFunction3()">Next &#8594;</a>');
		opacityTo100WithTweenMax($('.unsigned-short-int-text-div.opacity00').eq(0));
	});
}

function unsignedIntFunction3() {
	$('.introjs-duplicate-nextbutton').remove();
	introjs.nextStep();
}