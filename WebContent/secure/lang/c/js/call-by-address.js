var introjs;
var typingInterval = 1;

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
			element : "#swapDeclareLine",
			intro : "",
		}, {
			element : "#mainMethodBlock",
			intro : "",
		}, {
			element : "#aLine",
			intro : "",
		}, {
			element : "#aBox",
			intro : "",
			animateStep : "aBoxAnimate",
			tooltipClass: 'hide',
		}, {
			element : "#bLine",
			intro : "",
		}, {
			element : "#bBox",
			intro : "",
			animateStep : "bBoxAnimate",
			tooltipClass: 'hide',
		}, {
			element : "#printBeforeSwapInMain",
			intro : "",
		}, {
			element : "#outputBox",
			tooltipClass: "hide",
		}, {
			element : "#swapLine",
			intro : "",
		}, {
			element : "#swapMethodBlock",
			intro : "",
		}, {
			element : "#swapAnimationDiv",
			intro : "",
			tooltipClass: 'hide',
		}, {
			element : "#tDeclareLine",
			intro : "",
		}, {
			element : "#tBox",
			intro : "",
			animateStep : "tBoxAnimate",
			tooltipClass: 'hide',
		}, {
			element : "#tAssignLine",
			intro : "",
		}, {
			element : "#tBox",
			intro : "",
			animateStep : "tBoxValueAnimate",
			tooltipClass: 'hide',
		}, {
			element : "#xLine",
			intro : "",
		}, {
			element : "#aBox",
			intro : "",
			animateStep : "aBoxValueAnimate",
			position : "left",
			tooltipClass: 'hide',
		}, {
			element : "#yLine",
			intro : "",
		}, {
			element : "#bBox",
			intro : "",
			animateStep : "bBoxValueAnimate",
			position : "left",
			tooltipClass: 'hide',
		}, {
			element : "#printAfterSwapInSwap",
			intro : "",
		}, {
			element : "#outputBox",
			tooltipClass: "hide",
		}, {
			element : "#swapMethodCloseBrace",
			intro : "",
		}, {
			element : "#animationDiv",
			tooltipClass: "hide"
		}, {
			element : "#printAfterSwapInMain",
			intro : "",
		}, {
			element : "#outputBox",
			tooltipClass: "hide",
		}, {
			element : "#restartBtn",
			intro : "Click to Restart.",
			position : "right"
		} ]});
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "aLine":
			if (elementId == "aLine") {
				$('#mainMethodBox').removeAttr('style');
			}
			introjs.refresh();
			$('#aBox').addClass('opacity00');
			$('#aValue').text("");
			break;
		case "aBox":
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch (animateStep) {
			case "aBoxAnimate":
				$('#aValue').text("");
				$('#aBox').addClass('opacity00');
				break;
			case "aBoxValueAnimate":
				$('#aValue').text("5");
				break;
			}
			break;
		case "bLine":
			$('#bBox').addClass('opacity00');
			$('#bValue').text("");
			break;
		case "bBox":
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch (animateStep) {
			case "bBoxAnimate":
				$('#bValue').text("");
				$('#bBox').addClass('opacity00');
				break;
			case "bBoxValueAnimate":
				$('#bValue').text("10");
				break;
			}
			break;
		case "swapMethodBlock":
		case "swapAnimationDiv":
			TweenMax.to($('.svg-line').eq(0).hide(), 1, {attr: {x2: '20%', y2: '57%'}});
			TweenMax.to($('.svg-line').eq(1).hide(), 1, {attr: {x2: '65%', y2: '57%'}});
			$('#swapMethodBox').removeAttr('style');
			$('#xBox, #yBox').addClass('opacity00');
			$('#xValue, #yValue').text("");
			break;
		case "tDeclareLine":
			$('#tBox').addClass('opacity00');
			break;
		case "tBox":
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "tBoxAnimate":
					$('#tBox').addClass('opacity00');
					break;
				case "tBoxValueAnimate":
					console.log("tool tip missing");
					$('#tValue').text("");
					break;
				}
			break;
		case "tAssignLine":
			$('#tValue').text("");
			break;
		case "xLine":
			$('#aValue').text("5");
			break;
		case "yLine":
			$('#bValue').text("10");
			break;
		}
	});
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		
		// ********************** start back button logic
		
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
		
		// ********************** end back button logic
		
		var elementId = targetElement.id;
		switch (elementId) {
		case "preCode":
			var typingContent = 'Let us learn <span class="ct-code-b-yellow">call by address</span>.';
			typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case "swapDeclareLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This statement declares a <span class="ct-code-b-yellow">swap()</span> method with two arguments of type ' +
									'<span class="ct-code-b-yellow">int</span>. <br><br>The <span class="ct-code-b-yellow">void</span> ' +
									'keyword is used, when a method <span class="ct-code-b-yellow">does not return</span> any value.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "mainMethodBlock":
			var typingContent = 'This is the <span class="ct-code-b-yellow">main()</span> block where the program execution begins.';
			typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
				$('.introjs-nextbutton, .introjs-prevbutton').show();
			});
			break;
		case "aLine":
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'A variable <span class="ct-code-b-yellow">a</span> of type <span class="ct-code-b-yellow">int</span> is ' +
									'initialized with value <span class="ct-code-b-yellow">' + $('#valueOfA').text() + '</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
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
					animationABox(function() {
						$('.introjs-tooltip').removeClass('hide');
						var typingContent = 'As <span class="ct-code-b-yellow">a</span> is of type <span class="ct-code-b-yellow">int</span>, ' +
											'it occupies <span class="ct-code-b-yellow">2 bytes</span> in memory with some address.<br><br>Let us assume ' +
											'the address to be <span class="ct-code-b-yellow">' + $('#aAddress').text() + '</span>.</br> The variable ' + 
											'<span class="ct-code-b-yellow">a</span> is initialized with  value <span class="ct-code-b-yellow">' + 
											$('#valueOfA').text() + '</span>.';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
					break;
				case "aBoxValueAnimate":
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = 'The value of <span class="ct-code-b-yellow">*y</span> is copied to <span class="ct-code-b-yellow">' + 
										'*x</span> (i.e., <span class="ct-code-b-yellow">a</span> is copied with <span class="ct-code-b-yellow">' +
										$('#bValue').text() + '</span>) as ' +
										'<span class="ct-code-b-yellow">x</span>, <span class="ct-code-b-yellow">y</span> have the address of ' +
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
				var typingContent = 'A variable <span class="ct-code-b-yellow">b</span> of type <span class="ct-code-b-yellow">int</span>  is ' +
				'initialized with value <span class="ct-code-b-yellow">' + $('#valueOfB').text() + '</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "bBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "bBoxAnimate":
					animationBBox(function() {
						$('.introjs-tooltip').removeClass('hide');
						var typingContent = 'As the variable <span class="ct-code-b-yellow">b</span> is of type <span class="ct-code-b-yellow">' +
											'int</span>, it occupies <span class="ct-code-b-yellow">2 bytes</span> of memory with some address. ' +
											'<br><br>Let us assume the address to be <span class="ct-code-b-yellow">' + $('#bAddress').text() + 
											'</span>.</br>The variable <span class="ct-code-b-yellow">b</span> is initialized with  value ' + 
											'<span class="ct-code-b-yellow">' + $('#valueOfB').text() + '</span> .';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
					break;
				case "bBoxValueAnimate":
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = 'The value of <span class="ct-code-b-yellow">t</span> is copied to <span class="ct-code-b-yellow">' + 
										'*y</span> (i.e., <span class="ct-code-b-yellow">b</span> is copied with <span class="ct-code-b-yellow">' +
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
				var typingContent = 'This statement prints the <span class="ct-code-b-yellow">values</span> of <span class="ct-code-b-yellow">' + 
									'a</span>, <span class="ct-code-b-yellow">b</span> before we call the <span class="ct-code-b-yellow">swap()' +
									'</span> method.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "outputBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._direction == "forward") {
					var selector = $('.output-console-body > .visibility-hidden').eq(0).addClass('tempClass');
					var typingContent = selector.removeClass('visibility-hidden').html();
					typing(selector, typingContent, 30, 'white', function() {
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					});
				} else {
					$('.tempClass:last').removeClass('tempClass').addClass('visibility-hidden');
					introjs.previousStep();
				}
			});
			break;
		case "swapLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This is a call for the method <span class="ct-code-b-yellow">swap()</span>.<br><br> In this method call ' +
									' we pass two parameters <span class="ct-code-b-yellow">&a</span>, <span class="ct-code-b-yellow"&>&b</span>.'+
									' These addresses are assigned to the pointer variables ' +
									'<span class="ct-code-b-yellow">*x</span>, <span class="ct-code-b-yellow">*y</span> in the method.</br><br>' +
									'<span class="ct-code-b-yellow">Note:</span> \'<span class="ct-code-b-yellow">&</span>\' returns address ' +
									'of variable.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "swapMethodBlock":
			var typingContent = 'This is the <span class="ct-code-b-yellow">swap()</span> method.<br/><br> It takes two arguments of type ' +
								'<span class="ct-code-b-yellow">int pointers</span> <span class="ct-code-b-yellow">*x</span>, ' +
								'<span class="ct-code-b-yellow">*y</span>. These pointers are assigned with ' +
								'addresses of <span class="ct-code-b-yellow">a</span>, <span class="ct-code-b-yellow">b</span> i.e., '+ 
								'<span class="ct-code-b-yellow">' + $('#aAddress').text() + '</span>, <span class="ct-code-b-yellow">' + 
								$('#bAddress').text() + '</span> respectively.<br/><br/>  This method does not return anything so ' + 
								' the keyword <span class="ct-code-b-yellow">void</span> is used as return type.';
			typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
				$('.introjs-nextbutton, .introjs-prevbutton').show();
			});
			break;
		case "swapAnimationDiv":
			$('.introjs-fixParent').removeClass('introjs-fixParent');
			$('.introjs-helperLayer').one('transitionend', function () {
				TweenMax.to($('#swapMethodBox'), 1, {opacity: 1});
				animationSwap(function() {
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = 'The <span class="ct-code-b-yellow">swap()</span> method takes two arguments of type ' +
										'<span class="ct-code-b-yellow">int pointers</span> <span class="ct-code-b-yellow">*x</span>, ' +
										'<span class="ct-code-b-yellow">*y</span>.<br/> These are assigned with the <span class="ct-code-b-yellow">' +
										'addresses</span> of <span class="ct-code-b-yellow">a</span>, <span class="ct-code-b-yellow">b</span>'+
										' respectively. <br/><br/>Each of them occupy <span class="ct-code-b-yellow">2 bytes</span> in memory.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			});
			break;
		case "tDeclareLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'A temporary variable <span class="ct-code-b-yellow">t</span> is declared of type ' +
									'<span class="ct-code-b-yellow">int</span>.<br/> It will be used to store a temporary value when the ' +
									'values are swapped.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "tBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "tBoxAnimate":
					animationTBox(function() {
						$('.introjs-tooltip').removeClass('hide');
						var typingContent = 'Here, the variable <span class="ct-code-b-yellow">t</span> is of type ' +
											'<span class="ct-code-b-yellow">int</span> and it occupies <span class="ct-code-b-yellow">2 bytes</span> ' +
											'in memory.';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
					break;
				case "tBoxValueAnimate":
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = 'Here the value of <span class="ct-code-b-yellow">t</span> is assigned with the value of <span class' +
										'="ct-code-b-yellow">*x</span> (i.e., <span class="ct-code-b-yellow">' + $('#aValue').text() + '</span>) ' +
										'since <span class="ct-code-b-yellow">x</span> has the address of <span class="ct-code-b-yellow">a</span>.';
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
				var typingContent = 'Here variable <span class="ct-code-b-yellow">t</span> is assigned with value of ' + 
									'<span class="ct-code-b-yellow">*x</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "xLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'The variable <span class="ct-code-b-yellow">*x</span> is assigned with value of ' +
									'<span class="ct-code-b-yellow">*y</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});

			});
			break;
		case "yLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'The variable <span class="ct-code-b-yellow">*y</span> is assigned with value of ' +
									'<span class="ct-code-b-yellow">t</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "printAfterSwapInSwap":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This statement prints the <span class="ct-code-b-yellow">values</span> of <span class="ct-code-b-yellow">' + 
									'*x</span>, <span class="ct-code-b-yellow">*y</span> after calling the <span class="ct-code-b-yellow">' +
									'swap()</span> method.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "swapMethodCloseBrace":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Here <span class="ct-code-b-yellow">swap()</span> method has completed its execution, and all the ' +
									'local variables <span class="ct-code-b-yellow">x</span>, <span class="ct-code-b-yellow">y</span> and ' +
									'<span class="ct-code-b-yellow">t</span> are destroyed.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "animationDiv":
			$('.introjs-helperLayer').one('transitionend', function () {
				
				if (introjs._direction == "forward") {
					TweenMax.to($('#swapMethodBox, .svg-line'), 1, {opacity: 0, onComplete: function() {
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					}});
				} else {
					$('#swapMethodBox, .svg-line').removeAttr('style').css('opacity',"1");
					$('.svg-line').eq(0).css({"display":"inline","marker-end": "url(\"#arrowEnd1\")"});
					$('.svg-line').eq(1).css({"display":"inline","marker-end": "url(\"#arrowEnd2\")"});
					introjs.previousStep();
				}
				
			});
			break;
		case "printAfterSwapInMain":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This statement prints the <span class="ct-code-b-yellow">values</span> of <span class="ct-code-b-yellow">' + 
									'a</span> and <span class="ct-code-b-yellow">b</span> after the <span class="ct-code-b-yellow">swap()</span> '+
									'method call is done.<br><br/>Notice that the values of <span class="ct-code-b-yellow">a</span> and ' + 
									'<span class="ct-code-b-yellow">b</span> have been changed. This is how <span class="ct-code-b-yellow">call ' +
									'by reference</span> works.<br/>The actual variables values are swapped in call by reference.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "restartBtn":
			$('.introjs-tooltip').css({'min-width' : '120px'});
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

function animationABox(callBackFunction) {
	$('#aBox').addClass('animated zoomIn').removeClass('opacity00').one('animationend', function() {
		$('#aBox').removeClass('animated zoomIn');
		$('#valueOfA').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
			$('#valueOfA').removeClass('circle-css');
			$('#aValue').text($('#valueOfA').text());
			fromEffectWithTweenMax('#valueOfA', '#aValue', function() {
				callBackFunction();
			});
		});
	});
}

function animationBBox(callBackFunction) {
	$('#bBox').addClass('animated zoomIn').removeClass('opacity00').one('animationend', function() {
		$('#bBox').removeClass('animated zoomIn');
		$('#valueOfB').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
			$('#valueOfB').removeClass('circle-css');
			$('#bValue').text($('#valueOfB').text());
			fromEffectWithTweenMax('#valueOfB', '#bValue', function() {
				callBackFunction();
			});
		});
	});
}

function animationSwap(callBackFunction) {
	$('.introjs-duplicate-nextbutton').remove();
	animationXBox();
	animationYBox(function() {
		callBackFunction();
	});
}

function animationXBox() {
	$('#xBox').addClass('animated zoomIn').removeClass('opacity00').one('animationend', function() {
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

function animationYBox(callBackFunction) {
	$('#yBox').addClass('animated zoomIn').removeClass('opacity00').one('animationend', function() {
		$('#yBox').removeClass('animated zoomIn');
		$('#bAddress').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
			$('#bAddress').removeClass('circle-css');
			$('#yValue').text($('#bAddress').text());
			fromEffectWithTweenMax('#bAddress', '#yValue', function() {
				TweenMax.to($('.svg-line').eq(1).show(), 1, {attr: {x2: '71.5%', y2: '30%'}, onComplete: function() {
					callBackFunction();
				}});
			});
		});
	});
}

function animationTBox(callBackFunction) {
	$('#tBox').addClass('animated zoomIn').removeClass('opacity00').one('animationend', function() {
		$('#tBox').removeClass('animated zoomIn');
		callBackFunction();
	});
}

function animationTBoxValue() {
	$('.introjs-duplicate-nextbutton').remove();
	TweenMax.fromTo('#xValue', 0.5, {ease: Sine.easeInOut, backgroundColor: 'blue'},
									{ease: Sine.easeInOut, backgroundColor: 'inherit', repeat: 2, onComplete: function() {
		TweenMax.fromTo($('.svg-line').eq(0), 0.5, {ease: Sine.easeInOut, stroke: 'red'}, {ease: Sine.easeInOut, stroke: 'gray', repeat: 2});
		TweenMax.fromTo($('#arrowEnd1'), 0.5, {ease: Sine.easeInOut, fill: 'red'},
												{ease: Sine.easeInOut, fill: 'gray', repeat: 2, onComplete: function() {
			TweenMax.fromTo('#aValue', 0.5, {ease: Sine.easeInOut, backgroundColor: 'blue'},
											{ease: Sine.easeInOut, backgroundColor: 'inherit', repeat: 2, onComplete: function() {
				$('#aValue').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
					$('#aValue').removeClass('circle-css');
					$('#tValue').text($('#aValue').text());
					fromEffectWithTweenMax('#aValue', '#tValue', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			}});
		}});
	}});
}

function animationABoxValue() {
	$('.introjs-duplicate-nextbutton').remove();
	TweenMax.fromTo('#yValue', 0.5, {ease: Sine.easeInOut, backgroundColor: 'blue'},
									{ease: Sine.easeInOut, backgroundColor: 'inherit', repeat: 2, onComplete: function() {
		TweenMax.fromTo($('.svg-line').eq(1), 0.5, {ease: Sine.easeInOut, stroke: 'red'}, {ease: Sine.easeInOut, stroke: 'gray', repeat: 2});
		TweenMax.fromTo($('#arrowEnd2'), 0.5, {ease: Sine.easeInOut, fill: 'red'},
												{ease: Sine.easeInOut, fill: 'gray', repeat: 2, onComplete: function() {
			TweenMax.fromTo('#bValue', 0.5, {ease: Sine.easeInOut, backgroundColor: 'blue'},
											{ease: Sine.easeInOut, backgroundColor: 'inherit', repeat: 2, onComplete: function() {
				$('#bValue').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
					$('#bValue').removeClass('circle-css');
					bounceFromEffextWithTimelineMax('#bValue', '#aValue', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
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
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		});
	});
}