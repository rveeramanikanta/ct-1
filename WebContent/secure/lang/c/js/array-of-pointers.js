var introjs;
var typingInterval = 1;
var toggle = true;
function arrayOfPointersReady() {
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
			element : "#array1",
			intro : "",
		}, {
			element : "#table1",
			intro : "",
			tooltipClass: 'hide',
		}, {
			element : "#array2",
			intro : "",
		}, {
			element : "#table2",
			intro : "",
			tooltipClass: 'hide',
		}, {
			element : "#table2Box",
			intro : "",
			tooltipClass: 'hide',
		}, {
			element : "#preCode",
			intro : "",
		}, {
			element : "#intLine",
			intro : "",
		}, {
			element : "#animationBox",
			tooltipClass: "hide",
			animateStep: 'variables'
		}, {
			element : "#a0Line",
			intro : "",
			elementNumber: '0',
		}, {
			element : "#animationBox",
			intro : "",
			animateStep: 'a0Line',
			tooltipClass: "hide",
			
		}, {
			element : "#a1Line",
			intro : "",
			elementNumber: '1',
		}, {
			element : "#animationBox",
			intro : "",
			animateStep: 'a1Line',
			tooltipClass: "hide",
		}, {
			element : "#printf1",
			tooltipClass: "hide"
		}, {
			element : "#animationBox",
			intro : "",
			animateStep: 'printf1',
			elementNumber: '0',
			tooltipClass: "hide"
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#printf2",
			tooltipClass: "hide"
		}, {
			element : "#animationBox",
			intro : "",
			animateStep: 'printf2',
			tooltipClass: "hide",
			elementNumber: '1'
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#printf3",
			tooltipClass: "hide"
		}, {
			element : "#animationBox",
			intro : "",
			animateStep: 'printf3',
			tooltipClass: "hide",
			elementNumber: '0'
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#printf4",
			tooltipClass: "hide"
		}, {
			element : "#animationBox",
			intro : "",
			animateStep: 'printf4',
			tooltipClass: "hide",
			elementNumber: '1'
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#printf5",
			tooltipClass: "hide"
		}, {
			element : "#animationBox",
			intro : "",
			animateStep: 'printf5',
			tooltipClass: "hide",
			elementNumber: '0'
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#printf6",
			tooltipClass: "hide"
		}, {
			element : "#animationBox",
			intro : "",
			animateStep: 'printf6',
			tooltipClass: "hide",
			elementNumber: '1'
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
		case "array1":
		case "table1":
			$('.temp1, #table1').addClass('opacity00').removeAttr('style');
			break;
		case "array2":
			$('#table2').addClass('opacity00');
			break;
		case "table2":
			$('#table2').addClass('opacity00');
			$('[id*=value]').empty();
			$('svg').remove();
			$('.temp2').addClass('opacity00');
			break;
		case "table2Box":
			$('[id*=value]').empty();
			$('svg').remove();
			$('.temp2').addClass('opacity00');
			
			if (introjs._direction == "backward") {
				$('#box1').removeClass('display-none');
				$('#box2').addClass('display-none');
				introjs.refresh();
			}
			
			break;
		case "preCode":
			$('#box1').addClass('display-none');
			$('#box2').removeClass('display-none');
			introjs.refresh();
			break;
		case "animationBox":
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "variables":
					break;
				case "a0Line":
					$('#a0Value, #a1Value').empty();
					$('#svgLine21, #svgLine22').remove();
					break;
				case "a1Line":
					$('#a1Value').empty();
					$('#svgLine22').remove();
					break;
				}
			break;
		case "a0Line":
			$('#a0Value, #a1Value').empty();
			$('#svgLine21, #svgLine22').remove();
		case "a1Line":
			break;
		case "printf1":
			//*** Below code removes the child class ***//
			$('.output-console-body > .visibility-hidden').find('span').remove();
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
		var elementNumber = parseInt(introjs._introItems[introjs._currentStep].elementNumber);
		switch (elementId) {
		case "array1":
			var typingContent = 'Lets declare an <span class="ct-code-b-yellow">int</span> array <span class="ct-code-b-yellow">a</span> of size <span class="ct-code-b-yellow">3</span>.';
			typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
				$('.introjs-nextbutton').show();
			});
			break;
		case "table1":
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#table1').removeClass('opacity00').addClass('animated zoomIn').one('animationend', function() {
					$('#table1').removeClass('animated zoomIn');
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = 'Here  <span class="ct-code-b-yellow">a</span> is assigned with values ' +
										'<span class="ct-code-b-yellow">{10, 20, 30}</span> ' +
										'at <span class="ct-code-b-yellow">0, 1, 2</span> indices.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onclick='animationTable1Values()'>" + 
																"Next &#8594;</a>");
					});
				});
			});
			break;
		case "array2":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Now declare an int <span class="ct-code-b-yellow">pointer</span> array <span class="ct-code-b-yellow">a</span> ' +
									'of size <span class="ct-code-b-yellow">3</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "table2":
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#table2').removeClass('opacity00').addClass('animated zoomIn').one('animationend', function() {
					$('#table2').removeClass('animated zoomIn');
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = 'Here  <span class="ct-code-b-yellow">a</span> is assigned with addresses ' +
										'<span class="ct-code-b-yellow">{1086, 2086, 3086}</span> ' +
										'at <span class="ct-code-b-yellow">0, 1, 2</span> indices.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			});
			break;
		case "table2Box":
			$('.introjs-helperLayer').one('transitionend', function () {
					var parentSelector = $('#table2Box');
					svgAppend(parentSelector, 'svg1');
					var svgId = $('#svg1');
					var svgMarkerId = 'markerEnd1';
					svgMarkerAppend(svgId, svgMarkerId);
					animatingTable2Boxes(1, parentSelector, svgId, 'svgLine11', svgMarkerId);
					animatingTable2Boxes(2, parentSelector, svgId, 'svgLine12', svgMarkerId);
					animatingTable2Boxes(3, parentSelector, svgId, 'svgLine13', svgMarkerId, function() {
						$('.introjs-tooltip').removeClass('hide');
						var text = 'Here  <span class="ct-code-b-yellow">a</span> is assigned with ' +
						'<span class="ct-code-b-yellow">{1086, 2086, 3086}</span> ' +
						'at <span class="ct-code-b-yellow">0, 1, 2</span> indices.';
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
			});
			break;
		case "preCode":
			$('#box1').addClass('display-none');
			$('#box2').removeClass('display-none');
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'Now let us learn <span class="ct-code-b-yellow">array of pointers</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "intLine":
			$('.introjs-helperLayer').one('transitionend', function () {
				var typingContent = 'We declare <span class="ct-code-b-yellow">pointer</span> array <span class="ct-code-b-yellow">a</span> of size ' +
									'<span class="ct-code-b-yellow">2</span>. Two int variables <span class="ct-code-b-yellow">f1</span> and ' +
									'<span class="ct-code-b-yellow">f2</span> are initialized with <span class="ct-code-b-yellow">10</span> and ' +
									'<span class="ct-code-b-yellow">20</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "animationBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "variables":
					if (introjs._direction == 'forward') {
						$('#animationBox').removeClass('opacity00').toggleClass('animated zoomIn').one('animationend', function() {
							$('#animationBox').removeClass('animated zoomIn');
							animatingVariable(1);
							animatingVariable(2, function() {
								setTimeout(function() {
									introjs.nextStep();
								}, 1300);
							});
						});
					} else {
						$('#animationBox').addClass('opacity00');
						$('#f1Value, #f2Value').empty();
						introjs.previousStep();
					}
					
					break;
				case "a0Line":
					var parentSelector = $('#animationBox');
					svgAppend(parentSelector, 'svg2');
					var svgId = $('#svg2');
					var svgMarkerId = 'markerEnd2';
					svgMarkerAppend(svgId, svgMarkerId);
					var typingContent = 'The address of <span class="ct-code-b-yellow">f1</span> is assigned to ' +
										'<span class="ct-code-b-yellow">a[0]</span>. An <span class="ct-code-b-yellow">&</span> returns the ' +
										'address (i.e., <span class="ct-code-b-yellow">' + $('#f1Address').text() + '</span>).';
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'" +
																"onclick=\"animationALine(1)\">Next &#8594;</a>");
					});
					break;
				case "a1Line":
					$('.introjs-duplicate-nextbutton').remove();
					var typingContent = 'The address of <span class="ct-code-b-yellow">f2</span> is assigned to ' + 
										'<span class="ct-code-b-yellow">a[1]</span>. An <span class="ct-code-b-yellow">&</span> returns the' +
										' address (i.e., <span class="ct-code-b-yellow">' + $('#f2Address').text() + '</span>).';
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'" +
																"onclick=\"animationALine(2)\">Next &#8594;</a>");
					});
					break;
				case "printf1":
				case "printf2":
					var typingContent = 'In <span class="ct-code-b-yellow">(a + ' + elementNumber + ')</span>, ' +
										'<span class="ct-code-b-yellow">a</span> ' +
										'is the base address of the array and <span class="ct-code-b-yellow">' + 
										elementNumber + '</span> represents subscript (or) index. This index is mutiplied with the '+
										'<span class="ct-code-b-yellow">scale factor</span> implicitly by the system.</br><br>' +
										'<span class="ct-code-b-yellow">(a + ' + elementNumber + ') => (' + $('#a0Address').text() + 
										' + (' + elementNumber + ' * 2)) => ' + $('#a' + elementNumber + 'Address').text() + '</span>';
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'" +
																"onclick='animationArrayAddress(" + elementNumber + ")'>Next &#8594;</a>");
					});
					break;
				case "printf3":
				case "printf4":
					var typingContent = '<span class="ct-code-b-yellow">(a + ' + elementNumber + ')</span> returns the address of ' +
										'<span class="ct-code-b-yellow">a[' + elementNumber + ']</span> and <br>' +
										'<span class="ct-code-b-yellow">*(a + ' + elementNumber + ')</span> ' +
										'returns the value at <span class="ct-code-b-yellow">a[' + elementNumber + ']</span>.</br><br>' +
										'<span class="ct-code-b-yellow">*(a + ' + elementNumber + ') => *(' + $('#a0Address').text() + 
										' + (' + elementNumber + ' * 2)) => *(' + $('#a' + elementNumber + 'Address').text() + ') => ' +
										$('#a' + elementNumber + 'Value').text() + '</span>';
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'" +
																"onclick='animationArrayValue(" + elementNumber + ")'>Next &#8594;</a>");
					});
					break;
				case "printf5":
				case "printf6":
					var typingContent = '<span class="ct-code-b-yellow">*(a + ' + elementNumber + ')</span> returns the value at ' +
										'<span class="ct-code-b-yellow">a[' + elementNumber + ']</span>. <br>' +
										'<span class="ct-code-b-yellow">*(*(a + ' + elementNumber + '))</span> ' +
										'returns the value at <br><span class="ct-code-b-yellow">*(a + ' + elementNumber + ')</span>.</br><br>' +
										'<span class="ct-code-b-yellow">*(*(a + ' + elementNumber + ')) => *(*(' + $('#a0Address').text() + 
										' + (' + elementNumber + ' * 2))) => *(*(' + $('#a' + elementNumber + 'Address').text() + ')) => *(' +
										$('#a' + elementNumber + 'Value').text() + ') => ' + $('#f' + (elementNumber + 1) + 'Value').text() + '</span>';
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'" +
																"onclick='animationFValue(" + elementNumber + ")'>Next &#8594;</a>");
					});
					break;
				}
			});
			break;
		case "a0Line":
		case "a1Line":
			$('.introjs-helperLayer').one('transitionend', function () {
					var typingContent = 'Here <span class="ct-code-b-yellow">a[' + elementNumber + ']</span> is assigned with address of ' +
										'<span class="ct-code-b-yellow">f' + (elementNumber + 1) + '</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
			});
			break;
		case "printf1":
		case "printf2":
		case "printf3":
		case "printf4":
		case "printf5":
		case "printf6":
			$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._direction == "forward") {
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
				} else {
					setTimeout(function() {
						introjs.previousStep();
					}, 100);
				}
				
			});
			break;
		case "outputBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._direction == "forward") {
					var selector = $('.output-console-body > .visibility-hidden').eq(0).addClass('output-temp');
					var typingContent = selector.removeClass('visibility-hidden').html();
					typing(selector, typingContent, 30, 'white', function() {
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					});
				} else {
					setTimeout(function() {
						$('.output-temp:last').addClass('visibility-hidden').removeClass('output-temp');
						$('.output-console-body > .visibility-hidden').find('span').remove();
						introjs.previousStep();
					}, 1000);
					
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

function svgLineAppend(svgId, svgLineId, svgMarkerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + svgMarkerId + '")';
	$(svgId).append(line);
}

function svgAnimatingLineSelector1RightSideToSelector2LeftSide(parentSelector, selector1, selector2, svgId, svgLineId, svgMarkerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, svgMarkerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function animationTable1Values() {
	$('.introjs-duplicate-nextbutton').remove();
	TweenMax.from($('#table1 .opacity00').addClass("temp1").removeClass('opacity00'), 1, {left: 150, opacity: 0, onComplete: function() {
		$('.introjs-nextbutton, .introjs-prevbutton').show();
	}});
}

function animatingTable2Boxes(index, parentSelector, svgId, svgLineId, svgMarkerId, callBackFunction) {
	$('#table2' + index).removeClass('opacity00').addClass('animated zoomIn temp2').one('animationend', function() {
		$('#table2' + index).removeClass('animated zoomIn');
		TweenMax.from($('#address' + index), 1, {backgroundColor: 'blue', onComplete: function() {
			$('#value' + index).text($('#address' + index).text());
			fromEffectWithTweenMax($('#address' + index), $('#value' + index), function() {
				var selector1 = $('#table2 .td-value-css').eq(index - 1);
				var selector2 = $('#table2' + index + ' .td-value-css');
				svgAnimatingLineSelector1RightSideToSelector2LeftSide(parentSelector, selector1, selector2, svgId,
																		svgLineId, svgMarkerId, callBackFunction);
			});
		}});
	});
}

function animatingVariable(index, callBackFunction) {
	var elementVal = $('#f' + index + 'Val');
	var elementValue = $('#f' + index + 'Value');
	TweenMax.fromTo(elementVal.addClass('circle-css'), 1, {backgroundColor: '#FFFFFF'}, 
																		{backgroundColor: 'inherit', onComplete: function() {
		elementVal.removeClass('circle-css');
		elementValue.text(elementVal.text());
		fromEffectWithTweenMax(elementVal, elementValue, function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	}});
}

function animationALine(index) {
	$('.introjs-duplicate-nextbutton').remove();
	var elementAddress = $('#f' + index + 'Address');
	var elementValue = $('#a' + (index - 1) + 'Value');
	TweenMax.from(elementAddress, 1, {backgroundColor: 'blue', onComplete: function() {
		elementValue.text(elementAddress.text());
		fromEffectWithTweenMax(elementAddress, elementValue, function() {
			var parentSelector = $('#animationBox');
			var svgId = $('#svg2');
			var svgLineId = 'svgLine2' + index;
			var svgMarkerId = 'markerEnd2';
			var selector1 = $('#aTable .td-value-css').eq(index - 1);
			var selector2 = $('#f' + index + 'Table .td-value-css');
			svgAnimatingLineSelector1RightSideToSelector2LeftSide(parentSelector, selector1, selector2, svgId, svgLineId, svgMarkerId, function() {
				$('.introjs-nextbutton, .introjs-prevbutton').show();
			});
		});
	}});
}

function animationArrayAddress(index) {
	$('.introjs-duplicate-nextbutton').remove();
	var element = $('#a' + index + 'Address');
	TweenMax.from(element, 1, {backgroundColor: 'blue', repeat: 1, onComplete: function() {
		$('.output-console-body > .visibility-hidden').eq(0).append('<span class="ct-code-b-yellow">' + element.text() + '</span>');
		$('.introjs-nextbutton, .introjs-prevbutton').show();
	}});
}

function animationArrayValue(index) {
	$('.introjs-duplicate-nextbutton').remove();
	var elementAddress = $('#a' + index + 'Address');
	var elementValue = $('#a' + index + 'Value');
	TweenMax.from(elementAddress, 1, {backgroundColor: 'blue', repeat: 1, onComplete: function() {
		TweenMax.from(elementValue, 1, {backgroundColor: 'blue', repeat: 1, onComplete: function() {
			$('.output-console-body > .visibility-hidden').eq(0).append('<span class="ct-code-b-yellow">' + elementValue.text() + '</span>');
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		}});
	}});
}

function animationFValue(index) {
	$('.introjs-duplicate-nextbutton').remove();
	var elementArrayAddress = $('#a' + index + 'Address');
	var elementArrayValue = $('#a' + index + 'Value');
	var elementFValue =  $('#f' + (index + 1) + 'Value');
	TweenMax.from(elementArrayAddress, 1, {backgroundColor: 'blue', repeat: 1, onComplete: function() {
		TweenMax.from(elementArrayValue, 1, {backgroundColor: 'blue', repeat: 1, onComplete: function() {
			TweenMax.from(elementFValue, 1, {backgroundColor: 'blue', repeat: 1, onComplete: function() {
				$('.output-console-body > .visibility-hidden').eq(0).append('<span class="ct-code-b-yellow">' + elementFValue.text() + '</span>');
				$('.introjs-nextbutton, .introjs-prevbutton').show();
			}});
		}});
	}});
}