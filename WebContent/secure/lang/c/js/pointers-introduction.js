var introjs;
var typingInterval = 1;

var pointersIntroductionReady = function() {
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
			animateStep : "xBoxAnimate",
			tooltipClass: 'hide',
		}, {
			element : "#line2",
			intro : "",
		}, {
			element : "#yBox",
			intro : "",
			animateStep : "yBoxAnimate",
			tooltipClass: 'hide',
		}, {
			element : "#animationDiv",
			intro : "",
			animateStep : "1",
		}, {
			element : "#line3",
			intro : "",
		}, {
			element : "#line4",
			intro : "",
		}, {
			element : "#zBox",
			intro : "",
			animateStep : "zBoxAnimate",
			tooltipClass: 'hide',
		}, {
			element : "#animationDiv",
			intro : "",
			animateStep : "2",
		}, {
			element : "#printf1",
			intro : "",
		}, {
			element : "#xBox",
			intro : "",
			animateStep : "xValuePrint",
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#printf2",
			intro : "",
		}, {
			element : "#xBox",
			intro : "",
			animateStep : "xAddressPrint",
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#printf3",
			intro : "",
		}, {
			element : "#yBox",
			intro : "",
			animateStep : "yValuePrint",
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#printf4",
			intro : "",
		}, {
			element : "#yBox",
			intro : "",
			animateStep : "yAddressPrint",
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#printf5",
			intro : "",
		}, {
			element : "#zBox",
			intro : "",
			animateStep : "zValuePrint",
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#printf6",
			intro : "",
		}, {
			element : "#zBox",
			intro : "",
			animateStep : "zAddressPrint",
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#printf7",
			intro : "",
		}, {
			element : "#animationDiv",
			intro : "",
			tooltipClass: "hide",
			animateStep : "*zValuePrint",
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#restartBtn",
			intro : "Click to restart.",
			position : "right"
		} ]});
	
	
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "line1":
			$('#xBox').addClass('opacity00');
			$('#xValue').addClass('visibility-hidden');
			break;
		case "line2":
			$('#yBox').addClass('opacity00');
			$('#yValue').addClass('visibility-hidden');
			break;
		case "line4":
			$('#zBox').addClass('opacity00');
			$('#zValue').addClass('visibility-hidden');
			break;
		case "printf1":
		case "printf2":
		case "printf3":
		case "printf4":
		case "printf5":
		case "printf6":
		case "printf7":
			if (elementId == "printf7") {
				TweenMax.to($('.svg-line').hide(), 1, {attr: {x2: '47.7%', y2: '73%'}});
			}
			$('.blinking-border-background-blue').removeClass('blinking-border-background-blue');
			break;
		case "xBox":
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "xBoxAnimate":
				$('#xBox').addClass('opacity00');
				$('#xValue').addClass('visibility-hidden');
				break;
			case "xValuePrint":
				$('#xValue').addClass('blinking-border-background-blue');
			break;
			}
			break;
		case "yBox":
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "yBoxAnimate":
				$('#yBox').addClass('opacity00');
				$('#yValue').addClass('visibility-hidden');
				break;
			}
			break;
		case "zBox":
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case "zBoxAnimate":
				$('#zBox').addClass('opacity00');
				$('#zValue').addClass('visibility-hidden');
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
			var typingContent = 'Let us understand <span class="ct-code-b-yellow">pointers</span> in <span class="ct-code-b-yellow">C</span>.';
			typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case "line1":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'A variable <span class="ct-code-b-yellow">x</span> of type <span class="ct-code-b-yellow">int</span>,'
									+ ' is initialized with a value of <span class="ct-code-b-yellow">3</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "xBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "xBoxAnimate":
					animationXBox(function() {
						$('.introjs-tooltip').removeClass('hide');
						var typingContent = 'The variable <span class="ct-code-b-yellow">x</span> is of type ' +
										'<span class="ct-code-b-yellow">int</span>, which occupies <span class="ct-code-b-yellow">2 bytes</span> ' +
										' in memory and is stored in some address (i.e. location).<br><br> Let us assume the address to be ' +
										'<span class="ct-code-b-yellow">1111</span>. The variable <span class="ct-code-b-yellow">x</span>' +
										' is initialized to <span class="ct-code-b-yellow">3</span>.';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
					break;
				case "xValuePrint":
						$('#xValue').addClass('blinking-border-background-blue');
						var typingContent = 'The blinking value is returned by <span class="ct-code-b-yellow">x</span>.';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					break;
				case "xAddressPrint":
						$('#xAddress').addClass('blinking-border-background-blue');
						var typingContent = 'The blinking value is the address returned by <span class="ct-code-b-yellow">&x</span>.<br> ' +
											'<br><span class="ct-code-b-yellow">&</span> (ampersand) returns the address.';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					break;
				}
			});
			break;
		case "line2":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'A variable <span class="ct-code-b-yellow">y</span> of type <span class="ct-code-b-yellow">int</span>, is ' +
									'initialized with the value of <span class="ct-code-b-yellow">x</span> (x = 3).';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "yBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "yBoxAnimate":
					animationYBox(function() {
						$('.introjs-tooltip').removeClass('hide');
						var typingContent = 'The variable <span class="ct-code-b-yellow">y</span> is of type ' +
											'<span class="ct-code-b-yellow">int</span>, which occupies <span class="ct-code-b-yellow">2 bytes</span> ' +
											' in memory and is stored in some address (i.e. location).<br><br> Let us assume the address to be ' +
											'<span class="ct-code-b-yellow">1234</span>. The variable <span class="ct-code-b-yellow">y</span> is initialized' +
											' to <span class="ct-code-b-yellow">x</span> (i.e. <span class="ct-code-b-yellow">3</span>).';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
					break;
				case "yValuePrint":
						$('#yValue').addClass('blinking-border-background-blue');
						var typingContent = 'The blinking value is returned by <span class="ct-code-b-yellow">y</span>.';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					break;
				case "yAddressPrint":
					$('#yAddress').addClass('blinking-border-background-blue');
					var typingContent = 'The blinking value is the address returned by <span class="ct-code-b-yellow">&y</span>.<br> ' +
										'<br><span class="ct-code-b-yellow">&</span> (ampersand) returns the address.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
					break;
				}
			});
			break;
		case "animationDiv":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "1":
					var typingContent = 'Two variables <span class="ct-code-b-yellow">x</span> and'
										+ ' <span class="ct-code-b-yellow">y</span> are stored in memory at two different locations. '
										+ 'These two variables are initialized with the same value (i.e., <span class="ct-code-b-yellow">3</span>).'
										+ '<br><br>Using <span class="ct-code-b-yellow">pointers</span>, these two variables('
										+ '<span class="ct-code-b-yellow">x</span>, <span class="ct-code-b-yellow">y</span>) can point to a'
										+ ' single memory location that holds the value <span class="ct-code-b-yellow">3</span>. '
										+ ' So, <span class="ct-code-b-yellow">pointers</span> are used to manage memory efficiently.'
										+ '<br><br> In <b>pointers</b> we have two <span class="ct-code-b-yellow">unary</span> operators. They are : ' 
										+ '<ul><li><span class="ct-code-b-yellow">&</span> (ampersand) - This returns the <span class="ct-code-b-yellow"> '
										+ 'address</span> of the variable.</li><li><span class="ct-code-b-yellow">*</span> (asterisk) - ' 
										+ 'This returns the <span class="ct-code-b-yellow">value</span> at that address.</li></ul>';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
					break;
				case "2":
					var typingContent = 'The <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">z</span>'+
										' has the address of variable <span class="ct-code-b-yellow">x</span>.<br> To get the value of ' +
										'<span class="ct-code-b-yellow">x</span> we use <span class="ct-code-b-yellow">*z</span>.' +
										'<br><br><span class="ct-code-b-yellow">' +
										'z</span> has the address of <span class="ct-code-b-yellow">x</span>, so <span class="ct-code-b-yellow">' +
										'*z</span> returns the value at the address pointed by <span class="ct-code-b-yellow">z</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
					break;
				case "*zValuePrint":
					TweenMax.to($('.svg-line').show(), 1, {attr: {x2: '32.5%', y2: '41%'}, onComplete: function() {
						$('.introjs-tooltip').removeClass('hide');
						$('#xValue').addClass('blinking-border-background-blue');
						var typingContent = 'Since <span class="ct-code-b-yellow">*</span> (asterisk) returns the value at that address, ' +
											'<span class="ct-code-b-yellow">*z</span> means the value at <span class="ct-code-b-yellow">z</span>\'s ' +
											'value (i.e. the value stored at <span class="ct-code-b-yellow">1111</span>).<br>' +
											'<br>The blinking value is returned by <span class="ct-code-b-yellow">*z</span>.';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					}});
					break;
				}
			});
			break;
		case "line3":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'In \'<span class="ct-code-b-yellow">C</span>\', pointers are declared using'+
									' <span class="ct-code-b-yellow">*</span> (asterisk).<br><br>' + 
									' In the above statement, we have declared a <span class="ct-code-b-yellow">pointer</span> variable ' +
									'<span class="ct-code-b-yellow">*z</span> of type <span class="ct-code-b-yellow">int</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});				
			break;
		case "line4":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'The <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">z</span> is ' +
									'assigned with <span class="ct-code-b-yellow">&x</span> (address of <span class="ct-code-b-yellow">x</span>' + 
									' (i.e., <span class="ct-code-b-yellow">1111</span>)).';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "zBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
					case "zBoxAnimate":
						animationZBox(function() {
							$('.introjs-tooltip').removeClass('hide');
							var typingContent = 'The <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">' +
												'z</span> is of type <span class="ct-code-b-yellow">int</span>, which occupies ' +
												'<span class="ct-code-b-yellow">2 bytes</span> of memory,' +
												' and is stored in some address (i.e. location).<br><br> Let us assume the address to be ' +
												'<span class="ct-code-b-yellow">2222</span>. The variable <span class="ct-code-b-yellow">z</span> is initialized' +
												' to <span class="ct-code-b-yellow">&x</span> (i.e. <span class="ct-code-b-yellow">&x</span> ' +
												'is the address of <span class="ct-code-b-yellow">x</span>).';
							typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					break;
					case "zValuePrint":
						$('#zValue').addClass('blinking-border-background-blue');
						var typingContent = 'The blinking value is returned by <span class="ct-code-b-yellow">z</span>.';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					break;
					case "zAddressPrint":
						$('#zAddress').addClass('blinking-border-background-blue');
						var typingContent = 'The blinking value is the address returned by <span class="ct-code-b-yellow">&z</span>.<br><br> ' +
											'<span class="ct-code-b-yellow">&</span> (ampersand) returns the address.';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					break;
				}
			});
			break;
		case "printf1":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This statement prints the <span class="ct-code-b-yellow">value</span> of <span class="ct-code-b-yellow">x</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "printf2":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This statement prints the <span class="ct-code-b-yellow">address</span> of <span class="ct-code-b-yellow">x</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "printf3":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This statement prints the <span class="ct-code-b-yellow">value</span> of <span class="ct-code-b-yellow">y</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "printf4":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This statement prints the <span class="ct-code-b-yellow">address</span> of <span class="ct-code-b-yellow">y</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "printf5":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This statement prints the <span class="ct-code-b-yellow">value</span> of <span class="ct-code-b-yellow">z</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "printf6":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This statement prints the <span class="ct-code-b-yellow">address</span> of <span class="ct-code-b-yellow">z</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "printf7":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This statement prints the <span class="ct-code-b-yellow">value</span> of <span class="ct-code-b-yellow">*z</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "outputBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._direction == "forward") {
					$('.blinking-border-background-blue').removeClass('blinking-border-background-blue');
					$('.svg-line').hide();
					var selector = $('.output-console-body > .visibility-hidden').eq(0).addClass("temp");
					var typingContent = selector.removeClass('visibility-hidden').html();
					typing(selector, typingContent, 30, 'white', function() {
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					});
				} else {
					$('.temp:last').addClass("visibility-hidden").removeClass("temp");
					introjs.previousStep();
				}
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

function animationYBox(callBackFunction) {
	$('#yBox').addClass('animated zoomIn').removeClass('opacity00').one('animationend', function() {
		$('#yBox').removeClass('animated zoomIn');
		$('#xValue').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
			$('#xValue').removeClass('circle-css');
			$('#yValue').removeClass('visibility-hidden');
			fromEffectWithTweenMax('#xValue', '#yValue', function() {
				callBackFunction();
			});
		});
	});
}

function animationZBox(callBackFunction) {
	$('#zBox').addClass('animated zoomIn').removeClass('opacity00').one('animationend', function() {
		$('#zBox').removeClass('animated zoomIn');
		$('#xAddress').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
			$('#xAddress').removeClass('circle-css');
			$('#zValue').removeClass('visibility-hidden');
			fromEffectWithTweenMax('#xAddress', '#zValue', function() {
				callBackFunction();
			});
		});
	});
}