var introjs;
var typingInterval = 5;
var arr = [];
var m;
var n;

var pointersTwoDimensionalArrayReady = function() {
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});
	$('#restartBtn').click(function() {
		location.reload();
	});
	introJsFunction();
	
	var maxNumberOfInputs;
	var maxLengthOfInput;
	$('.output-scanf-line').on("keydown", function(e) {
		var id = $(this).attr('id');
		if (id == 'outputScanfLine1') {
			maxNumberOfInputs = 2;
			maxLengthOfInput = 1;
		} else {
			maxNumberOfInputs = m * n;
			maxLengthOfInput = 1;
		}
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
		var id = $(this).attr('id');
		if (id == 'outputScanfLine1') {
			maxNumberOfInputs = 2;
			maxLengthOfInput = 1;
		} else {
			maxNumberOfInputs = m * n;
			maxLengthOfInput = 1;
		}
		$('.length-error-text').remove();
		if ($(this).text() == "") {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
												"Please enter " + maxNumberOfInputs + " numbers and separate each with a space.</span>");
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
			if ((val > 3 || val == 0) && id == 'outputScanfLine1') {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
														"Please enter a number between 1 and 3 at index " + idx + ".</span>");
				$(".introjs-nextbutton").hide();
			} else if ((val > 9 || val < 0) && id == 'outputScanfLine2') {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
														"Please enter a number between 0 and 9 at index " + idx + ".</span>");
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
			tooltipClass: 'hide'
		}, {
			element : "#printf1",
			tooltipClass: "hide"
		}, {
			element : "#outputBox",
			tooltipClass: "hide",
			outputStep: 'printf'
		}, {
			element : "#scanf1",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#outputBox",
			intro : "",
			outputStep: 'scanf'
		}, {
			element : "#pLine",
			intro : ""
		}, {
			element : "#animationBox",
			intro : "",
			animateStep: 'arrayBox',
			tooltipClass: 'hide'
		}, {
			element : "#printf2",
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
			element : "#printf3",
			tooltipClass: "hide"
		}, {
			element : "#outputBox",
			tooltipClass: "hide",
			outputStep: 'printf'
		}, {
			element : "#forPrintf",
			intro : "",
			position : "right"
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
			var typingContent = 'Let us learn <span class="ct-code-b-yellow">Pointers with Two Dimensional Array</span>.';
			typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case "line1":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Here the <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">p</span> and ' +
									'<span class="ct-code-b-yellow">int</span> variables <span class="ct-code-b-yellow">m</span>, ' +
									'<span class="ct-code-b-yellow">n</span>, <span class="ct-code-b-yellow">i</span>, ' +
									'<span class="ct-code-b-yellow">j</span> are declared but the demo shows only ' +
									'<span class="ct-code-b-yellow">pointer</span> the variable <span class="ct-code-b-yellow">p</span>.';
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
		case "printf1":
		case "printf2":
		case "printf3":
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
				case "scanf":
					var typingContent = 'Enter <span class="ct-code-b-yellow">2</span> values (between 1 and 3) and separate each with a space.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('#outputScanfLine1').attr({contenteditable: 'true', placeholder: 'Enter 2 values'});
						caretAtEnd(document.getElementById('outputScanfLine1'));
					});
					break;
				case "forScanf":
					var typingContent = 'Enter <span class="ct-code-b-yellow">' + m * n + '</span> values and separate each with a space.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('#outputScanfLine2').attr({contenteditable: 'true', placeholder: 'Enter ' + m * n + ' values'});
						caretAtEnd(document.getElementById('outputScanfLine2'));
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
		case "scanf1":
			$('.introjs-helperLayer').one('transitionend', function () {
				setTimeout(function() {
					introjs.nextStep();
				}, 800);
			});
			break;
		case "pLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#outputScanfLine1').removeAttr('contenteditable placeholder');
				m = arr[0];
				n = arr[1];
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
											'<span class="ct-code-b-yellow">' + ((m * n) * 2) + ' bytes</span> is allocated in the heap memory and the ' +
											'base address is returned which is stored in the pointer variable <span class="ct-code-b-yellow">p</span>.'; 
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton').show();
						});
					});
					break;
				case "arrayBoxValues":
					$('#outputScanfLine2').removeAttr('contenteditable placeholder');
					var splittedText = $('#outputScanfLine2').text().split(" ");
					$('#outputScanfLine2').html('');
					var values = [];
					$.each(splittedText , function(idx, val) {
						if (val != "") {
							values.push(val);
						}
					});
					$.each(values, function(idx, val) {
						if (val != "") {
							$('#outputScanfLine2').append('<span class="scanfValue">' + val + '</span> ');
							$('#outputPrintfLine').append('<span class="printfValue visibility-hidden">' + parseInt(val) + '</span> ');
							if ((idx % n) == (n - 1)) {
								$('#outputPrintfLine').append('<br/>');
							}
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
									var typingContent = 'Here <span class="ct-code-b-yellow">(p + (i * n) + j)</span> returns the address of each ' +
														'element of the array. <span class="ct-code-b-yellow">p</span> has the base address of ' +
														'array and the <span class="ct-code-b-yellow">Scale Factor</span>(2 for int datatype) is ' +
														'multipled with both <span class="ct-code-b-yellow">(i * n)</span> and <span class=' +
														'"ct-code-b-yellow">j</span>.<br><br>For example: <br>To access the element of [0][0] with ' +
														'value ' + arr[0] + '<br>' + '<span class="ct-code-b-yellow">' +
														'(p + ((i * n) * 2) + (j * 2))</span> = <br>' + $('#pValue').text() +
														' + (0 * ' + n + ') * 2 + 0 * 2) = <span class="ct-code-b-yellow">'+ $('#pValue').text() + 
														'</span><br/><br>Note:</b> <span class="ct-code-b-yellow">Scale factor</span> will be ' +
														'multiplied with the index of the array implicitly by the system.';
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
		case "forScanf":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Here we have two <span class="ct-code-b-yellow">for</span> loops' +
									'<ul><li>The outer <span class="ct-code-b-yellow">for</span> loop executes ' +
									'<span class="ct-code-b-yellow">' + m + '</span> times that represents the number of rows.</li>' +
									'<li>The inner <span class="ct-code-b-yellow">for</span> loop executes <span class="ct-code-b-yellow">'
									+ n + '</span> times that represents the number of columns.</li>' + 
									'<li>The <span class="ct-code-b-yellow">scanf()</span> with in the for loops is executed ' + 
									'<span class="ct-code-b-yellow">' + m * n + '</span> times.</li>' +
									'<li><span class="ct-code-b-yellow">(p + (i * n) + j)</span> returns the address of the array index ' +
									'with respective to <span class="ct-code-b-yellow">i</span>, <span class="ct-code-b-yellow">j</span>.</li></ul>';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "forPrintf":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'To read from a <span class="ct-code-b-yellow">two dimensional array</span> two loops are required.' +
									'<ul><li>The outer <span class="ct-code-b-yellow">for</span> loop executes ' +
									'<span class="ct-code-b-yellow">' + m + '</span> times that represents the number of rows.</li>' +
									'<li>The inner <span class="ct-code-b-yellow">for</span> loop executes <span class="ct-code-b-yellow">'
									+ n + '</span> times that represents the number of columns.</li>' + 
									'<li>The <span class="ct-code-b-yellow">printf()</span> with in the for loops is executed ' + 
									'<span class="ct-code-b-yellow">' + m * n + '</span> times.</li>' +
									'<li><span class="ct-code-b-yellow">*(p + (i * n) + j)</span> returns the value of the each element in the ' +
									'array where <span class="ct-code-b-yellow">i</span>, <span class="ct-code-b-yellow">j</span> are the ' +
									'indices.</li></ul>';
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
	$('#pBox, #iBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#pBox, #iBox').removeClass('animated zoomIn');
		callBackFunction();
	});
}

function animationArrayBox(callBackFunction) {
	var address = 1222;
	for (i = 0; i < m; i++) {
		var flag = true;
		for (j = 0; j < n; j++) {
			if (flag) {
				$('tr').eq(0).append('<td colspan=' + n + '><span class="arrayRow">' + (i + 1) + ' row</span></td>');
				flag = false;
			}
			$('tr').eq(1).append('<td class="td-value-css"><span class="arrayValue"></span></td>');
			$('tr').eq(2).append('<td><span id="arrayAddress" class="ct-lime-color">' + address + '</span></td>');
			address += 2;
		}
	}
	$('#arrayBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#arrayBox').removeClass('animated zoomIn');
		$('#arrayAddress').effect("highlight", {color: 'blue'}, 1000, function() {
			$('#pValue').text($('#arrayAddress').text());
			fromEffectWithTweenMax($('#arrayAddress'), $('#pValue'), function() {
				TweenMax.to($('.svg-line').show(), 1, {attr: {x2: '35.6%', y2: '50%'}, onComplete: function() {
					callBackFunction();
				}});
			});
		});
	});
}