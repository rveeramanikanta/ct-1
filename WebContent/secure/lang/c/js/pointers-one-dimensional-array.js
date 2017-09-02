var introjs;
var typingInterval = 10;
var arr = [];

var pointersOneDimensionalArrayReady = function() {
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});

	$('#restartBtn').click(function() {
		location.reload();
	});

	introJsFunction();
	
	var maxNumberOfInputs = 5;
	var maxLengthOfInput = 3;
	$('.output-scanf-line').on("keydown", function(e) {
		if (arr.length == maxNumberOfInputs) {
			if (e.keyCode == 32) {
				e.preventDefault();
			}
		}
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 32, 35, 36, 37, 39]) !== -1) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
	});
	
	$('.output-scanf-line').on("keyup", function(e) {
		$('.length-error-text').remove();
		if ($(this).text() == "") {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
												"Please enter " + maxNumberOfInputs + " number and separate each with space.</span>");
		}
		var givenText = $(this).text();
		var splittedText = givenText.split(" ");
		arr = [];
		
		$.each(splittedText, function(idx, val) {
			if (val != '') {
				arr.push(val);
			}
		});
		
		if (arr.length < maxNumberOfInputs) {
			$(".introjs-nextbutton").hide();
		} else if (arr.length == maxNumberOfInputs) {
			$(".introjs-nextbutton").show();
		}
		
		$.each(arr, function(idx, val) {
			if (val > 999 || val < 0) {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
														"Please limit the index " + idx + " number in between 0 and 999 .</span>");
				$(".introjs-nextbutton").hide();
			}
		});
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
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
			element : "#preCode",
			intro : ""
		}, {
			element : "#line1",
			intro : ""
		}, {
			element : "#variablesBox",
			intro : "",
			tooltipClass: 'hide',
		}, {
			element : "#pLine",
			intro : ""
		}, {
			element : "#animationBox",
			intro : "",
			animateStep: 'arrayBox',
			tooltipClass: 'hide',
		}, {
			element : "#printf1",
			tooltipClass: "hide"
		}, {
			element : "#outputBox",
			tooltipClass: "hide",
			outputStep: 'printf'
		}, {
			element : "#forScanf",
			intro : ""
		}, {
			element : "#outputBox",
			intro : "",
			outputStep: 'forScanf'
		}, {
			element : "#animationBox",
			intro : "",
			tooltipClass: "hide",
			animateStep: 'arrayBoxValues'
		}, {
			element : "#printf2",
			tooltipClass: "hide"
		}, {
			element : "#outputBox",
			tooltipClass: "hide",
			outputStep: 'printf'
		}, {
			element : "#forPrintf",
			intro : ""
		}, {
			element : "#outputBox",
			tooltipClass: "hide",
			outputStep: 'forPrintf'
		}, {
			element : "#restartBtn",
			intro : "Click to restart.",
			position : "right"
		} ]});

	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "preCode":
			var typingContent = 'Let us learn <span class="ct-code-b-yellow">pointers with one dimensional array</span>.';
			typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case "line1":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Here the <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">p</span> and ' +
									'<span class="ct-code-b-yellow">int</span> variable <span class="ct-code-b-yellow">i</span> are declared.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "variablesBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				animationVariablesBox(function() {
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = 'The <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">p</span> occupies ' +
										'<span class="ct-code-b-yellow">2 bytes</span> of memory with some address <span class="ct-code-b-yellow">' + 
										$('#pAddress').text() +'</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
				});
			});
			break;
		case "pLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = "<ul><li> A <span class='ct-code-b-yellow'>malloc()</span> function returns the pointer to the " + 
									"<span class='ct-code-b-yellow'>base address</span> of the <span class='ct-code-b-yellow'>heap memory</span> " + 
									"allocated.</li><li>A <span class='ct-code-b-yellow'>malloc()</span> function always returns a <span class=" +
									"'ct-code-b-yellow'>void</span> pointer. So a typecast should be done to the datatype of the pointer.</li></ul>"; 
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "animationBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "arrayBox":
					animationArrayBox(function() {
						$('.introjs-tooltip').removeClass('hide');
						var typingContent = 'Each location occupies <span class="ct-code-b-yellow">2 bytes</span> of memory, a total of ' +
										'<span class="ct-code-b-yellow">10 bytes</span> is allocated in the <span class="ct-code-b-yellow">' +
										'heap memory</span> and the <span class="ct-code-b-yellow">base address</span> ' +
										'is returned which is stored in the pointer variable <span class="ct-code-b-yellow">p</span>.';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton').show();
						});
					});
					break;
				case "arrayBoxValues":
					$('#outputScanfLine').removeAttr('contenteditable placeholder');
					var splittedText = $('#outputScanfLine').text().split(" ");
					$('#outputScanfLine').html('');
					$.each(splittedText, function(idx, val) {
						if (val != '') {
							$('#outputScanfLine').append('<span class="scanfValue">' + val + '</span> ');
							$('#outputPrintfLine').append('<span class="printfValue visibility-hidden">' + parseInt(val) + '</span> ');
						} else {
							$('#outputScanfLine').append(' ');
						}
					});
					$('.scanfValue').addClass('output-value-circle circle-css');
					TweenMax.fromTo($('.scanfValue'), 1, {backgroundColor: '#FFFFFF'}, {backgroundColor: 'inherit', onComplete: function() {
						$('.scanfValue').removeClass('output-value-circle circle-css');
						$.each(arr, function(idx, val) {
							$('.arrayValue').eq(idx).text(parseInt(val));
						});
						for (var i = 0; i < $('.scanfValue').length; i++) {
							if (i == ($('.scanfValue').length - 1)) {
								fromEffectWithTweenMax($('.scanfValue').eq(i), $('.arrayValue').eq(i), function() {
									$('.introjs-tooltip').removeClass('hide');
									var typingContent = 'Here <span class="ct-code-b-yellow">(p + i)</span> returns the address of each element in ' +
														'the array. <span class="ct-code-b-yellow">p</span> has the base address of the array and ' +
														'<span class="ct-code-b-yellow">i</span> is the index.<br><br>For example : <br>' + 
														'<span class="ct-code-b-yellow">p + i</span> = p + (i * scale factor)<br> i can range ' +
														'between <span class="ct-code-b-yellow">{0, 1, 2, 3, 4}</span><br> scale factor = ' +
														'<span class="ct-code-b-yellow">2</span> for int datatype <br><br>Suppose to access the ' + 
														'second element in the array, the index is 1 <br><span class="ct-code-b-yellow">' +
														$('#pValue').text() + ' + (1 * 2) = ' + (parseInt($('#pValue').text()) + 2) + 
														'</span><br><br><b>Note : </b> ' +
														'<span class="ct-code-b-yellow">Scale factor</span> is the size of the ' +
														'datatype.';
									typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
										$('.introjs-nextbutton').show();
									});
								});
							} else {
								fromEffectWithTweenMax($('.scanfValue').eq(i), $('.arrayValue').eq(i));
							}
						}
					}});
					break;
				}
			});
			break;
		case "printf1":
		case "printf2":
			$('.introjs-helperLayer').one('transitionend', function () {
				setTimeout(function() {
					introjs.nextStep();
				}, 1000);
			});
			break;
		case "outputBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var outputStep = introjs._introItems[introjs._currentStep].outputStep;
				switch (outputStep) {
				case "printf":
					var selector = $('.output-console-body > .visibility-hidden').eq(0);
					var typingContent = selector.removeClass('visibility-hidden').html();
					typing(selector, typingContent, 30, 'white', function() {
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					});
					break;
				case "forScanf":
					var typingContent = 'Here enter <span class="ct-code-b-yellow">5</span> values and separate each with space.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.output-scanf-line').attr({contenteditable: 'true', placeholder: 'Enter 5 values'});
						caretAtEnd(document.getElementById('outputScanfLine'));
					});
					break;
				case "forPrintf":
					$('.arrayValue').addClass('z-index9999999');
					TweenMax.from($('.arrayValue'), 1, {ease: Power4.easeIn, backgroundColor: '#FFFFFF', onComplete: function() {
						$('.arrayValue').removeClass('z-index9999999');
						$('.printfValue').removeClass('visibility-hidden');
						TweenMax.from($('.printfValue'), 1, {ease: Power4.easeIn, opacity: 0, onComplete: function() {
							setTimeout(function() {
								introjs.nextStep();
							}, 1000);
						}});
					}});
					break;
				}
			});
			break;
		case "forScanf":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Here the <span class="ct-code-b-yellow">for</span> loop executes <span class="ct-code-b-yellow">5</span> times ' +
									'and the <span class="ct-code-b-yellow">scanf()</span> reads <span class="ct-code-b-yellow">5</span> values ' +
									'from the user. ';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "forPrintf":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'This <span class="ct-code-b-yellow">for</span> loop executes <span class="ct-code-b-yellow">5</span> times so ' +
									'that <span class="ct-code-b-yellow">printf()</span> prints values of the array.<br/> Here, ' +
									'<span class="ct-code-b-yellow">*(p + i)</span> returns the array values starting from the base address.' + 
									'<span class="ct-code-b-yellow">p</span><br><br><b>Note : </b>i = i * 2(scale factor for int)';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
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

function caretAtEnd(element) {
	element.focus();
	if (typeof window.getSelection != "undefined"&& typeof document.createRange != "undefined") {
		var range = document.createRange();
		range.selectNodeContents(element);
		range.collapse(false);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
	}    	   
}

function animationVariablesBox(callBackFunction) {
	$('.introjs-duplicate-nextbutton').remove();
	$('#pBox, #iBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#pBox, #iBox').removeClass('animated zoomIn');
		callBackFunction();
	});
}

function animationArrayBox(callBackFunction) {
	$('.introjs-duplicate-nextbutton').remove();
	$('#arrayBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#arrayBox').removeClass('animated zoomIn');
		$('#arrayAddress').effect("highlight", {color: 'blue'}, 1000, function() {
			$('#pValue').text($('#arrayAddress').text());
			fromEffectWithTweenMax($('#arrayAddress'), $('#pValue'), function() {
				TweenMax.to($('.svg-line').show(), 1, {attr: {x2: '44%', y2: '35%'}, onComplete: function() {
					callBackFunction();
				}});
			});
		});
	});
}