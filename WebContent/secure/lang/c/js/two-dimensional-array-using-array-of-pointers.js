var introjs;
var typingInterval = 1;
var arr = [];
var m;
var n;


var twoDimensionalArrayUsingArrayOfPointersReady = function() {
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
											"Please enter " + maxNumberOfInputs + " numbers(between 1 and 3) and separate each with space.</span>");
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
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		} else if (arr.length == maxNumberOfInputs) {
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		}
		
		$.each(arr, function(idx, val) {
			if ((val > 3 || val == 0) && id == 'outputScanfLine1') {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
														"Please limit the index " + idx + " number in between 1 and 3 .</span>");
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
			} else if ((val > 9 || val < 0) && id == 'outputScanfLine2') {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
														"Please limit the index " + idx + " number in between 0 and 9 .</span>");
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
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
			element : "#pArrayBox",
			intro : "",
			tooltipClass: 'hide',
		}, {
			element : "#printf1",
			tooltipClass: "hide",
		}, {
			element : "#outputBox",
			tooltipClass: "hide",
			outputStep: 'printf'
		}, {
			element : "#scanf1",
			intro : "",
		}, {
			element : "#outputBox",
			intro : "",
			outputStep: 'scanf',
			tooltipClass: "hide",
		}, {
			element : "#forPLine",
			intro : "",
		}, {
			element : "#animationBox",
			intro : "",
			animateStep: 'pArrayBoxes',
			tooltipClass: "hide",
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
			outputStep: 'forScanf',
			tooltipClass: "hide",
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
			intro : ""
		}, {
			element : "#outputBox",
			tooltipClass: "hide",
			outputStep: 'forPrintf'
		}, {
			element : "#restartBtn",
			intro : "Click to restart.",
			position : "right"
		}
		]});
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "line1":
			$('#pTable').addClass('opacity00');
			break;
		case "pArrayBox":
			$('#pTable').addClass('opacity00');
			break;
		case "outputBox":
				var outputStep = introjs._introItems[introjs._currentStep].outputStep;
				switch (outputStep) {
				case "printf":
					break;
				case "scanf":
					$('#outputScanfLine1').removeAttr('contenteditable placeholder').empty();
					break;
				case "forScanf":
					$('.arrayValue').text('');
					$('#outputScanfLine2').removeAttr('contenteditable placeholder').empty();
					break;
				}
			break;
		case "scanf1":
			$('#outputScanfLine1').removeAttr('contenteditable placeholder').empty();
			break;
		case "forPLine":
			arr = $('#outputScanfLine1').text().split(' ');
			m = arr[0];
			n = arr[1];	
			$('#mallocTablesDiv, .p-value').empty();
			$('svg').remove();
			break;
		case "animationBox":
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "pArrayBoxes":
					$('#mallocTablesDiv, .p-value').empty();
					$('svg').remove();
					break;
				case "arrayBoxValues":
					$('.arrayValue').text('');
					break;
				}
			break;
		case "forScanf":
			$('#outputScanfLine2').removeAttr('contenteditable placeholder').empty();
			break;
		}
	});
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		
		
		// ********************** start ************back button logic
		
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
		
		// ********************** end ************back button logic
		
		
		
		
		var elementId = targetElement.id;
		switch (elementId) {
		case "preCode":
			var typingContent = 'Let us learn <span class="ct-code-b-yellow">two dimensional array using array of pointers</span>.';
			typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case "line1":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'In this statement, we declare a <span class="ct-code-b-yellow">pointer</span> array ' +
									'<span class="ct-code-b-yellow">p</span> of size <span class="ct-code-b-yellow">3</span>.<br/><br/> ' +
									'Four variables <span class="ct-code-b-yellow">m</span>, <span class="ct-code-b-yellow">n</span>, ' +
									'<span class="ct-code-b-yellow">i</span> and <span class="ct-code-b-yellow">j</span> of ' +
									'<span class="ct-code-b-yellow">int</span> datatype are declared.<br/><br/>In this demo, we will ' + 
									'display the <span class="ct-code-b-yellow">pointer</span> array <span class="ct-code-b-yellow">p</span> ' +
									'as you are aware on how int variables work.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "pArrayBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				animationPArrayBox(function() {
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = 'A <span class="ct-code-b-yellow">pointer</span> array <span class="ct-code-b-yellow">p</span> of size ' +
										'<span class="ct-code-b-yellow">3</span> is declared.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			});
			break;
		case "printf1":
		case "printf2":
		case "printf3":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._direction == "forward") {
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
				} else {
					setTimeout(function() {
						introjs.previousStep();
					}, 500);
				}
				
			});
			break;
		case "outputBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var outputStep = introjs._introItems[introjs._currentStep].outputStep;
				switch (outputStep) {
				case "printf":
					if (introjs._direction == "forward") {
						var selector = $('.output-console-body > .visibility-hidden').eq(0).addClass('output-temp');
						var typingContent = selector.removeClass('visibility-hidden').html();
						typing(selector, typingContent, 30, 'white', function() {
							setTimeout(function() {
								introjs.nextStep();
							}, 1000);
						});
					} else {
						$('.output-temp:last').addClass('visibility-hidden').removeClass('output-temp');
						setTimeout(function() {
							introjs.previousStep();
						}, 500);
					}
					
					break;
				case "scanf":
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = 'Enter <span class="ct-code-b-yellow">2</span> values with a space in between each of them.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('#outputScanfLine1').attr({contenteditable: 'true', placeholder: 'Enter 2 values'});
						caretAtEnd(document.getElementById('outputScanfLine1'));
					});
					break;
				case "forScanf":
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = 'Enter <span class="ct-code-b-yellow">' + m * n + '</span> values with a space in between each of them.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('#outputScanfLine2').attr({contenteditable: 'true', placeholder: 'Enter ' + m * n + ' values'});
						caretAtEnd(document.getElementById('outputScanfLine2'));
					});
					break;
				case "forPrintf":
					$('.arrayValue').addClass('z-index9999999');
					TweenMax.from($('.arrayValue'), 1, {ease: Power4.easeIn, backgroundColor: '#FFFFFF', onComplete: function() {
						$('.arrayValue').removeClass('z-index9999999');
						$('.printfValue').removeClass('visibility-hidden').addClass('opacity00');
						TweenMax.to($('.printfValue'), 1, {opacity: 1, onComplete: function() {
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
				var typingContent = 'The <span class="ct-code-b-yellow">scanf()</span> method reads two numbers ' +
									'<span class="ct-code-b-yellow">m</span> and  <span class="ct-code-b-yellow">n</span>.'
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "forPLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#outputScanfLine1').removeAttr('contenteditable placeholder');
				m = arr[0];
				n = arr[1];
				var typingContent = 'This <span class="ct-code-b-yellow">for</span> loop executes <span class="ct-code-b-yellow">' + m + '</span> ' +
									'times(<span class="ct-code-b-yellow">m</span> represents the <span class="ct-code-b-yellow">no of rows</span> entered by user).<br/><br/>And in each iteration, the  '+
									'<span class="ct-code-b-yellow">pointer</span> array <span class="ct-code-b-yellow">p</span> '+
									'at its current index is assigned with the base address returned by the <span class="ct-code-b-yellow">'+
									'malloc()</span> method. <br/><br/>The <span class="ct-code-b-yellow">malloc()</span> method creates an '+ 
									'<span class="ct-code-b-yellow">int</span> array of size <span class="ct-code-b-yellow">n(columns</span> ' +
									'i.e ' +'<span class="ct-code-b-yellow">' + n +'</span> ) and returns the allocated dynamic memory <span class="ct-code-b-yellow">base address</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "animationBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "pArrayBoxes":
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = 'Here the loop executes for <span class="ct-code-b-yellow">m ('+ m +')</span> times, so the method ' +
										'<span class="ct-code-b-yellow">(int *)malloc(n('+ n +') * sizeof(int))</span> is also executed ' +
										'<span class="ct-code-b-yellow">('+ m +')</span> times.<br/><br/>In each iteration, '+
										'<span class="ct-code-b-yellow">malloc()</span> method allocates dynamic memory and assigns the base address'+
										' to the pointer array <span class="ct-code-b-yellow">p</span> at the respective index.' ;
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationArrayBoxes()'>" + 
																"Next &#8594;</a>");
					});
					break;
				case "arrayBoxValues":
					$('#outputScanfLine2').removeAttr('contenteditable placeholder');
					var splittedText = $('#outputScanfLine2').text().split(" ");
					$('#outputPrintfLine').empty();
					$('#outputScanfLine2').html('');
					var values = [];
					$.each(splittedText , function(idx, val) {
						if (val != "") {
							values.push(val);
						}
					});
					$.each(values, function(idx, val) {
						if (val != '') {
							$('#outputScanfLine2').append('<span class="scanfValue">' + val + '</span> ');
							$('#outputPrintfLine').append('<span class="printfValue visibility-hidden">' + val + '</span> ');
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
									var typingContent = ' <span class="ct-code-b-yellow">(p[i] + j)</span> returns the address of each ' +
														'element in the array.<br/><br/> <span class="ct-code-b-yellow">p</span> has the base address '+
														'of the dynamic memory allocated for that array.<br/><br/> The <span class="ct-code-b-yellow">' +
														'Scale Factor(2 for int)</span> is multipled with <span class="ct-code-b-yellow">i</span> ' +
														'and <span class="ct-code-b-yellow">j</span> implicitly by the system.' +
														'<br/><br/><b>For example:</b><br/> To get the address of element p[0,0] <br/><span class="ct-code-b-yellow">' + 
														'(p[i] + j) = (p[i * 2] + j * 2) </span> (when i=0 & j= 0) = (p[0] + 0) = ' + 
														'<span class="ct-code-b-yellow">' + $('#pValue1').text() + '</span> and so on.';
													
									typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
										$('.introjs-nextbutton, .introjs-prevbutton').show();
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
									'<span class="ct-code-b-yellow">m ('+ m +') </span> times.</li>' +
									'<li>The inner <span class="ct-code-b-yellow">for</span> loop executes <span class="ct-code-b-yellow">n'+
									' ('+ n +')</span> times.</li>' + 
									'<li>The <span class="ct-code-b-yellow">scanf()</span> within the inner for loop is executed ' + 
									'<span class="ct-code-b-yellow">(m * n)i.e.,' + m * n + '</span> times in total.</li>' +
									'<li><span class="ct-code-b-yellow">(p[i] + j)</span> returns the address of the array index with respect ' +
									'to <span class="ct-code-b-yellow">i</span> and <span class="ct-code-b-yellow">j</span> i.e p[0,0]'+
									' for the first element in the array.</li></ul>';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "forPrintf":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Here we have two <span class="ct-code-b-yellow">for</span> loops' +
									'<ul><li>The outer <span class="ct-code-b-yellow">for</span> loop executes ' +
									'<span class="ct-code-b-yellow">m ('+ m +') </span> times.</li>' +
									'<li>The inner <span class="ct-code-b-yellow">for</span> loop executes <span class="ct-code-b-yellow">n'+
									' ('+ n +')</span> times.</li>' + 
									'<li>The <span class="ct-code-b-yellow">printf()</span> with in the inner for loop is executed ' + 
									'<span class="ct-code-b-yellow">(m * n) ' + m * n + '</span> times in total.</li>' +
									'<li><span class="ct-code-b-yellow">*(p[i] + j)</span> returns the value of the each element in the array ' +
									'with respect to indices <span class="ct-code-b-yellow">i</span> and <span class="ct-code-b-yellow">' +
									'j</span>.</li></ul>';
									
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

function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', svgMarkerId);
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$(svgId).append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#' + svgMarkerId).append(path);
}

function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + markerId + '")';
	$(svgId).append(line);
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

function tableAppend(selector, tableId, tdAddressValue) {
	var code = '<div class="col-xs-12 padding-top-bottom">' +
					'<table align="center" id="' + tableId + '">' +
						'<tbody>' +
							'<tr></tr>' +
							'<tr></tr>' +
						'</tbody>' +
					'</table>' +
				'</div>';
	$(selector).append(code);
	for (var i = 0; i < n; i++) {
		$('#' + tableId + ' tr').eq(0).append('<td class="td-value-css"><span class="arrayValue ct-blue-color"></span></td>');
		$('#' + tableId + ' tr').eq(1).append('<td class="color-gray"><span class="ct-lime-color">' + tdAddressValue + '</span></td>');
		tdAddressValue += 2;
	}
}

function animationPArrayBox(callBackFunction) {
	$('#pTable').removeClass('opacity00').addClass('animated zoomIn').one('animationend', function() {
		$('#pTable').removeClass('animated zoomIn');
		callBackFunction();
	});
}

function animationArrayBoxes() {
	$('.introjs-duplicate-nextbutton').remove();
	var address = 2046;
	for (var i = 0; i < m; i++) {
		tableAppend($('#mallocTablesDiv'), 'mallocTable' + i, address);
		address += 1000;
	}
	$('#mallocTablesDiv').addClass('animated zoomIn').one('animationend', function() {
		$('#mallocTablesDiv').removeClass('animated zoomIn');
		svgAppend($('#animationBox'), 'svg');
		svgMarkerAppend($('#svg'), 'arrowEnd');
		for (var i = 0; i < m; i++) {
			if (i == (m - 1)) {
				animatingTableBoxes(i, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			} else {
				animatingTableBoxes(i);
			}
		}
	});
}

function animatingTableBoxes(index, callBackFunction) {
	var mallocTableAddress =  $('#mallocTable' + index + ' .ct-lime-color').eq(0);
	var pElement = $('#pValue' + (index + 1));
	TweenMax.from(mallocTableAddress, 1, {backgroundColor: 'blue', onComplete: function() {
		pElement.text(mallocTableAddress.text());
		fromEffectWithTweenMax(mallocTableAddress, pElement, function() {
			svgAnimationBoxLine(index, $('#mallocTable' + index + ' .td-value-css').eq(0), pElement.parent(), callBackFunction);
		});
	}});
}

function svgAnimationBoxLine(index, mallocTableValue, pElementParent, callBackFunction) {
	var parentDiv = $('#animationBox').offset();
	var x1 = pElementParent.offset().left - parentDiv.left + pElementParent.outerWidth();
	var y1 = pElementParent.offset().top - parentDiv.top + pElementParent.outerHeight() / 2;
	var x2 = mallocTableValue.offset().left - parentDiv.left;
	var y2 = mallocTableValue.offset().top - parentDiv.top + mallocTableValue.outerHeight() / 2;
	svgLineAppend($('#svg'), 'svgLine' + index, 'arrowEnd', x1, y1, x1, y1);
	TweenMax.to($('#svgLine' + index).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}