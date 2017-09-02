var introjs;
var typingInterval = 10;

var callByAddressReady = function() {
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});

	$('#restartBtn').click(function() {
		location.reload();
	});

	introJsFunction();
};
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
			element : "#preCode",
			intro : ""
		},
		{
			element : "#swapDeclareLine",
			intro : ""
		},
		{
			element : "#mainMethodBlock",
			intro : ""
		},
		{
			element : "#aLine",
			intro : ""
		},
		{
			element : "#aBox",
			intro : "",
			animateStep : "aBoxAnimate"
		},
		{
			element : "#bLine",
			intro : ""
		},
		{
			element : "#bBox",
			intro : "",
			animateStep : "bBoxAnimate"
		},
		{
			element : "#printBeforeSwapInMain",
			intro : ""
		},
		{
			element : "#outputBox",
			tooltipClass: "hide"
		},
		{
			element : "#swapLine",
			intro : ""
		},
		{
			element : "#swapMethodBlock",
			intro : ""
		},
		{
			element : "#swapAnimationDiv",
			intro : ""
		},
		{
			element : "#tDeclareLine",
			intro : ""
		},
		{
			element : "#tBox",
			intro : "",
			animateStep : "tBoxAnimate"
		},
		{
			element : "#tAssignLine",
			intro : ""
		},
		{
			element : "#tBox",
			intro : "",
			animateStep : "tBoxValueAnimate"
		},
		{
			element : "#xLine",
			intro : ""
		},
		{
			element : "#aBox",
			intro : "",
			animateStep : "aBoxValueAnimate",
			position : "left"
		},
		{
			element : "#yLine",
			intro : ""
		},
		{
			element : "#bBox",
			intro : "",
			animateStep : "bBoxValueAnimate",
			position : "left"
		},
		{
			element : "#printAfterSwapInSwap",
			intro : ""
		},
		{
			element : "#outputBox",
			tooltipClass: "hide"
		},
		{
			element : "#swapMethodCloseBrace",
			intro : ""
		},
		{
			element : "#animationDiv",
			tooltipClass: "hide"
		},
		{
			element : "#printAfterSwapInMain",
			intro : ""
		},
		{
			element : "#outputBox",
			tooltipClass: "hide"
		},
		{
			element : "#restartBtn",
			intro : "Click to Restart",
			tooltipClass: "introjs-tooltip-min-width-custom",
			position : "right"
		}
		]});

	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "preCode":
			var typingContent = 'Let us learn <span class="ct-code-b-yellow">Call By Address</span> in ' +
								'<span class="ct-code-b-yellow">C</span> using this sample code.';
			typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case "swapDeclareLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This line declares <span class="ct-code-b-yellow">swap()</span> method with two ' +
									'<span class="ct-code-b-yellow">int pointer</span> variables as parameters and ' +
									'<span class="ct-code-b-yellow">void</span> as return type (i.e. which doesn\'t return anything).';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "mainMethodBlock":
			var typingContent = 'This is <span class="ct-code-b-yellow">main()</span> block in ' +
								'<span class="ct-code-b-yellow">C</span> language. Program execution starts from ' +
								'<span class="ct-code-b-yellow">main()</span> method always.';
			typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case "aLine":
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Here the <span class="ct-code-b-yellow">int</span> variable <span class="ct-code-b-yellow">a</span> which is ' +
									'initialized with value <span class="ct-code-b-yellow">' + $('#valueOfA').text() + '</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "aBox":
			$('.introjs-fixParent').removeClass('introjs-fixParent');
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "aBoxAnimate":
					TweenMax.to($('#mainMethodBox'), 1, {opacity: 1});
					var typingContent = 'Here the variable <span class="ct-code-b-yellow">a</span> is of type ' +
										'<span class="ct-code-b-yellow">int</span> it occupies <span class="ct-code-b-yellow">2 bytes</span> ' +
										'of memory with some address (i.e. location of memory), lets its address be ' +
										'<span class="ct-code-b-yellow">' + $('#aAddress').text() + 
										'</span>.</br>Then the value <span class="ct-code-b-yellow">' + 
										$('#valueOfA').text() + '</span> is initialized.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationABox()'>" + 
																"Next &#8594;</a>");
					});
					break;
				case "aBoxValueAnimate":
					var typingContent = 'The value of <span class="ct-code-b-yellow">*y</span> is copied to <span class="ct-code-b-yellow">*x</span> ' + 
										'(i.e. <span class="ct-code-b-yellow">a</span> is copied with <span class="ct-code-b-yellow">' +
										$('#bValue').text() + '</span>) since ' +
										'<span class="ct-code-b-yellow">x</span>, <span class="ct-code-b-yellow">y</span> has the address of ' +
										'<span class="ct-code-b-yellow">a</span>, <span class="ct-code-b-yellow">b</span> respectively.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationABoxValue()'>" + 
																"Next &#8594;</a>");
					});
					break;
				}
			});
			break;
		case "bLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Here the <span class="ct-code-b-yellow">int</span> variable <span class="ct-code-b-yellow">b</span> which is ' +
									'initialized with value <span class="ct-code-b-yellow">' + $('#valueOfB').text() + '</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "bBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "bBoxAnimate":
					var typingContent = 'Here the variable <span class="ct-code-b-yellow">b</span> is of type ' +
										'<span class="ct-code-b-yellow">int</span> it occupies <span class="ct-code-b-yellow">2 bytes</span> ' +
										'of memory with some address (i.e. location of memory), lets its address be ' +
										'<span class="ct-code-b-yellow">' + $('#bAddress').text() + 
										'</span>.</br>Then the value <span class="ct-code-b-yellow">' +
										$('#valueOfB').text() + '</span> is initialized.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationBBox()'>" + 
																"Next &#8594;</a>");
					});
					break;
				case "bBoxValueAnimate":
					var typingContent = 'The value of <span class="ct-code-b-yellow">t</span> is copied to <span class="ct-code-b-yellow">*y</span> ' + 
										'(i.e. <span class="ct-code-b-yellow">b</span> is copied with <span class="ct-code-b-yellow">' +
										$('#tValue').text() + '</span>).';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationBBoxValue()'>" + 
																"Next &#8594;</a>");
					});
					break;
				}
			});
			break;
		case "printBeforeSwapInMain":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This line prints the <span class="ct-code-b-yellow">values</span> of <span class="ct-code-b-yellow">a</span>, ' + 
									'<span class="ct-code-b-yellow">b</span> before swapping in <span class="ct-code-b-yellow">main()</span> method.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "outputBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var selector = $('.output-console-body > .visibility-hidden').eq(0);
				var typingContent = selector.removeClass('visibility-hidden').html();
				typing(selector, typingContent, 30, 'white', function() {
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
				});
				
			});
			break;
		case "swapLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'In this line we are calling <span class="ct-code-b-yellow">swap()</span> method with parameters ' +
									'<span class="ct-code-b-yellow">&a</span>, <span class="ct-code-b-yellow">&b</span> and these addresses are assigned to the pointer variables ' +
									'<span class="ct-code-b-yellow">*x</span>, <span class="ct-code-b-yellow">*y</span> respectively in the function definition of<span class="ct-code-b-yellow">swap()</span>.</br>' +
									'<span class="ct-code-b-yellow">Note:</span> \'<span class="ct-code-b-yellow">&</span>\' returns address ' +
									'of variable.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "swapMethodBlock":
			var typingContent = 'This is <span class="ct-code-b-yellow">swap()</span> method with two ' +
								'<span class="ct-code-b-yellow">int pointer</span> ' +
								'variables <span class="ct-code-b-yellow">*x</span>, <span class="ct-code-b-yellow">*y</span> and assigned with ' +
								'<span class="ct-code-b-yellow">' + $('#aAddress').text() + '</span>, <span class="ct-code-b-yellow">' + 
								$('#bAddress').text() + '</span> ' + 
								'respectively and <span class="ct-code-b-yellow">void</span> as return type.';
			typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case "swapAnimationDiv":
			$('.introjs-fixParent').removeClass('introjs-fixParent');
			$('.introjs-helperLayer').one('transitionend', function () {
				TweenMax.to($('#swapMethodBox'), 1, {opacity: 1});
				var typingContent = 'This <span class="ct-code-b-yellow">swap()</span> method has two <span class="ct-code-b-yellow">int</span> ' +
									'parameters <span class="ct-code-b-yellow">*x</span>, <span class="ct-code-b-yellow">*y</span> and they are assigned with ' +
									'<span class="ct-code-b-yellow">addresses</span> of <span class="ct-code-b-yellow">a</span>, <span class="ct-code-b-yellow">b</span> respectively and each occupies ' +
									'<span class="ct-code-b-yellow">2 bytes</span> of memory with some address (i.e. location of memory).';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationSwap()'>" + 
															"Next &#8594;</a>");
				});
			});
			break;
		case "tDeclareLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Here a temporary <span class="ct-code-b-yellow">int</span> variable <span class="ct-code-b-yellow">t</span> is ' +
									'declared for swapping purpose.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "tBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "tBoxAnimate":
					var typingContent = 'Here the variable <span class="ct-code-b-yellow">t</span> is of type ' +
										'<span class="ct-code-b-yellow">int</span> it occupies <span class="ct-code-b-yellow">2 bytes</span> ' +
										'of memory with some address (i.e. location of memory).';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationTBox()'>" + 
																"Next &#8594;</a>");
					});
					break;
				case "tBoxValueAnimate":
					var typingContent = 'Here <span class="ct-code-b-yellow">t</span> value is copied with <span class="ct-code-b-yellow">*x</span> ' +
										'value (i.e. <span class="ct-code-b-yellow">' + $('#aValue').text() + '</span>) since ' +
										'<span class="ct-code-b-yellow">x</span> has the address of <span class="ct-code-b-yellow">a</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationTBoxValue()'>" + 
																"Next &#8594;</a>");
					});
					break;
				}
			});
			break;
		case "tAssignLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Here variable <span class="ct-code-b-yellow">t</span> is assigned with <span class="ct-code-b-yellow">*x</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "xLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'The variable <span class="ct-code-b-yellow">*x</span> is assigned with <span class="ct-code-b-yellow">*y</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "yLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'The variable <span class="ct-code-b-yellow">*y</span> is assigned with <span class="ct-code-b-yellow">t</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "printAfterSwapInSwap":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This line prints the <span class="ct-code-b-yellow">values</span> of <span class="ct-code-b-yellow">*x</span>, ' + 
									'<span class="ct-code-b-yellow">*y</span> after swapping in <span class="ct-code-b-yellow">swap</span> method.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "swapMethodCloseBrace":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Here <span class="ct-code-b-yellow">swap()</span> method completed its execution and all the local variables ' +
									'<span class="ct-code-b-yellow">x</span>, <span class="ct-code-b-yellow">y</span> and ' +
									'<span class="ct-code-b-yellow">t</span> are destroyed.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "animationDiv":
			$('.introjs-helperLayer').one('transitionend', function () {
				TweenMax.to($('#swapMethodBox, .svg-line'), 1, {opacity: 0, onComplete: function() {
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
				}});
			});
			break;
		case "printAfterSwapInMain":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This line prints the <span class="ct-code-b-yellow">values</span> of <span class="ct-code-b-yellow">a</span>, ' + 
									'<span class="ct-code-b-yellow">b</span> after swapping in <span class="ct-code-b-yellow">main()</span> method.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
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

function animationABox() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#aBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#aBox').removeClass('animated zoomIn');
		$('#valueOfA').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
			$('#valueOfA').removeClass('circle-css');
			$('#aValue').text($('#valueOfA').text());
			fromEffectWithTweenMax('#valueOfA', '#aValue', function() {
				$('.introjs-nextbutton').show();
			});
		});
	});
}

function animationBBox() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#bBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#bBox').removeClass('animated zoomIn');
		$('#valueOfB').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
			$('#valueOfB').removeClass('circle-css');
			$('#bValue').text($('#valueOfB').text());
			fromEffectWithTweenMax('#valueOfB', '#bValue', function() {
				$('.introjs-nextbutton').show();
			});
		});
	});
}

function animationSwap() {
	$('.introjs-duplicate-nextbutton').remove();
	animationXBox();
	animationYBox();
}

function animationXBox() {
	$('#xBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#xBox').removeClass('animated zoomIn');
		$('#aAddress').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
			$('#aAddress').removeClass('circle-css');
			$('#xValue').text($('#aAddress').text());
			fromEffectWithTweenMax('#aAddress', '#xValue', function() {
				TweenMax.to($('.svg-line').eq(0).show(), 1, {attr: {x2: '26.5%', y2: '30%'}});
			});
		});
	});
}

function animationYBox() {
	$('#yBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#yBox').removeClass('animated zoomIn');
		$('#bAddress').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
			$('#bAddress').removeClass('circle-css');
			$('#yValue').text($('#bAddress').text());
			fromEffectWithTweenMax('#bAddress', '#yValue', function() {
				TweenMax.to($('.svg-line').eq(1).show(), 1, {attr: {x2: '71.5%', y2: '30%'}, onComplete: function() {
					$('.introjs-nextbutton').show();
				}});
			});
		});
	});
}

function animationTBox() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#tBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#tBox').removeClass('animated zoomIn');
		$('.introjs-nextbutton').show();
	});
}

function animationTBoxValue() {
	$('.introjs-duplicate-nextbutton').remove();
	TweenMax.fromTo('#xValue', 0.5, {ease: Sine.easeInOut, backgroundColor: 'blue'},
									{ease: Sine.easeInOut, backgroundColor: 'inherit', repeat: 4, onComplete: function() {
		TweenMax.fromTo($('.svg-line').eq(0), 0.5, {ease: Sine.easeInOut, stroke: 'red'}, {ease: Sine.easeInOut, stroke: 'gray', repeat: 4});
		TweenMax.fromTo($('#arrowEnd1'), 0.5, {ease: Sine.easeInOut, fill: 'red'},
												{ease: Sine.easeInOut, fill: 'gray', repeat: 4, onComplete: function() {
			TweenMax.fromTo('#aValue', 0.5, {ease: Sine.easeInOut, backgroundColor: 'blue'},
											{ease: Sine.easeInOut, backgroundColor: 'inherit', repeat: 4, onComplete: function() {
				$('#aValue').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
					$('#aValue').removeClass('circle-css');
					$('#tValue').text($('#aValue').text());
					fromEffectWithTweenMax('#aValue', '#tValue', function() {
						$('.introjs-nextbutton').show();
					});
				});
			}});
		}});
	}});
}

function animationABoxValue() {
	$('.introjs-duplicate-nextbutton').remove();
	TweenMax.fromTo('#yValue', 0.5, {ease: Sine.easeInOut, backgroundColor: 'blue'},
									{ease: Sine.easeInOut, backgroundColor: 'inherit', repeat: 4, onComplete: function() {
		TweenMax.fromTo($('.svg-line').eq(1), 0.5, {ease: Sine.easeInOut, stroke: 'red'}, {ease: Sine.easeInOut, stroke: 'gray', repeat: 4});
		TweenMax.fromTo($('#arrowEnd2'), 0.5, {ease: Sine.easeInOut, fill: 'red'},
												{ease: Sine.easeInOut, fill: 'gray', repeat: 4, onComplete: function() {
			TweenMax.fromTo('#bValue', 0.5, {ease: Sine.easeInOut, backgroundColor: 'blue'},
											{ease: Sine.easeInOut, backgroundColor: 'inherit', repeat: 4, onComplete: function() {
				$('#bValue').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
					$('#bValue').removeClass('circle-css');
					bounceFromEffextWithTimelineMax('#bValue', '#aValue', function() {
						$('.introjs-nextbutton').show();
					});
				});
			}});
		}});
	}});
}

function animationBBoxValue() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#tValue').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
		$('#tValue').removeClass('circle-css');
		bounceFromEffextWithTimelineMax('#tValue', '#bValue', function() {
			$('.introjs-nextbutton').show();
		});
	});
}