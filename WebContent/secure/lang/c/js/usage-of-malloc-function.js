var usageOfmallocFunctionReady = function() {
	introGuide();
}
function introGuide() {
	introjs = introJs();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	
	$("#restart").click(function() {
		location.reload();
	});
	
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		tooltip : false,
		steps :[{
			element :'#infoDiv',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#preCode',
			intro : '',
		}, {
			element : '#firstExLine1',
			intro : '',
		}, {
			element : '#pBox',
			intro : '',
			tooltipClass: 'hide',
		}, {
			element : '#sizeofSpan',
			intro : '',
		}, {
			element : '#mallocSpan1',
			intro : '',
		}, {
			element : '#firstExLine2',
			intro : '',
		}, {
			element : '#newBox',
			intro : '',
			tooltipClass: 'hide',
		}, {
			element : '#firstExDiv',
			intro : '',
			animateStep : 'tweenmaxSvg',
			tooltipClass: 'hide',
		}, {
			element : '#firstExLine3',
			intro : '',
		}, {
			element : '#firstExDiv',
			intro : '',
			animateStep : 'tweenmax',
			tooltipClass: 'hide',
		}, {
			element : '#firstExLine4',
			intro : '',
		}, {
			element : '#consoleId',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#preCodeTwo',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#secondExLine1',
			intro : '',
		}, {
			element : '#kBox',
			intro : '',
			tooltipClass: 'hide',
		}, {
			element : '#sizeofSpan2',
			intro : '',
		}, {
			element : '#mallocSpan2',
			intro : '',
		}, {
			element : '#secondExLine2',
			intro : '',
		}, {
			element : '#arrayDiv',
			intro : '',
			tooltipClass: 'hide',
		}, {
			element : '#secondExDiv',
			intro : '',
			position : 'left',
			tooltipClass: 'hide',
		}, {
			element :'#restart',
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch(elementId) {
		case 'firstExLine1':
			$("#totalfirstExDiv, #pBox").addClass("opacity00");
			break;
		case 'pBox':
			$("#pBox").addClass("opacity00");
			break;
		case 'firstExLine2':
			$("#dataTypeFloat1, #dataTypeFloat2").addClass("blinking");
			$("#newBox").addClass("opacity00");
			break;
		case 'mallocSpan1':
			$(".blinking").removeClass("blinking");
			break;
		case 'firstExLine3':
			$('#Value').addClass('opacity00');
			break;
		case 'newBox':
			$(".blinking").removeClass("blinking");
			$("#newBox").addClass("opacity00");
			$("#cValue").addClass("opacity00");
			$('#svg1').remove();
			break;
		case 'firstExDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'tweenmaxSvg':
				$("#cValue, #value").addClass("opacity00");
				$('#svg1').remove();
				
				break;
			case 'tweenmax':
				$('#Value').addClass('opacity00');
				break;
			}
			break;
		case 'secondExLine1':
			$('#kBox, #secondExDiv').addClass('opacity00');
			break;
		case 'kBox':
			$('.introjs-fixParent').removeClass('introjs-fixParent');
			$('#kBox, #secondExDiv').addClass('opacity00');
			break;
		case 'mallocSpan2':
			$(".blinking").removeClass("blinking");
			break;
		case 'arrayDiv':
			$(".blinking").removeClass("blinking");
			$('#arrayDiv, #kValue').addClass('opacity00');
			$('#svg2').remove();
			break;
		case 'secondExLine2':
			$('#arrayDiv').addClass('opacity00');
			$("#dataTypeInt1, #dataTypeInt2").addClass("blinking");
			break;
		}
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		
		// ********************** start back button logic
		
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			if (introjs._currentStep != 1) {
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
		switch(elementId) {
		case 'infoDiv':
			$("#list1").fadeTo(300, 1, function() {
				$("#list2").fadeTo(300, 1, function() {
					$("#infoDiv").addClass('z-index9999999');
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);	
				});
			});	
			break;
		case 'preCode':
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#exampleOne").removeClass("opacity00");
				typing('.introjs-tooltiptext',"Let us consider an example.", function() {
					TweenMax.to($("#preCode"), 1, {opacity: 1, onComplete: function(){
						$("#preCode").removeClass("opacity00");
						$('.introjs-nextbutton').show();
					}});
				});
			});
			break;
		case 'firstExLine1':
			$('.introjs-helperLayer').one('transitionend', function() {
				typing('.introjs-tooltiptext', "A pointer variable <span class='ct-code-b-yellow'>p</span> is declared of datatype " +
						"<span class='ct-code-b-yellow'>float</span>.<br/><br/> " +
						"A <span class='ct-code-b-yellow'>float</span> pointer variable, should always point to a <span class='ct-code-b-yellow'>float</span> value.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case 'pBox':
			$('.introjs-fixParent').removeClass('introjs-fixParent');
			$("#totalfirstExDiv").removeClass("opacity00");
			$('.introjs-helperLayer').one('transitionend', function() {
				boxAnimation("#pBox", function() {
					$('.introjs-tooltip').removeClass('hide');
					var text = "The variable pointer <span class='ct-code-b-yellow'>p</span> is of type <span class='ct-code-b-yellow'>float</span> " +
								"and it occupies <span class='ct-code-b-yellow'>2 bytes</span> of memory with some address. " +
								"<br><br>Let us assume this address to be <span class='ct-code-b-yellow'>2024</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			});
			break;
		case 'sizeofSpan':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "<span class='ct-code-b-yellow'>sizeof</span> is an operator that returns the number of bytes " +
							"allocated for the required <span class='ct-code-b-yellow'>datatype, variable, or constant</span>.";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case 'firstExLine2':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#dataTypeFloat1, #dataTypeFloat2").addClass("blinking");
				var text = "<ul><li> A <span class='ct-code-b-yellow'>malloc()</span> function returns the pointer to the " + 
							"<span class='ct-code-b-yellow'>base address</span> of the <span class='ct-code-b-yellow'>heap memory</span> allocated." + 
							"</li><li>A <span class='ct-code-b-yellow'>malloc()</span> function always returns a <span class='ct-code-b-yellow'>" +
							"void</span> pointer. So a typecast should be used to convert to the datatype of the pointer.</li></ul>";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case 'mallocSpan1':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "A <span class='ct-code-b-yellow'>malloc()</span> function allocates a part of the " +
							"<span class='ct-code-b-yellow'>heap memory</span>, which is of the size that is declared as its argument.";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case 'firstExLine3':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Here the <span class='ct-code-b-yellow'>pointer</span> variable <span class='ct-code-b-yellow'>*p</span> is " +
							"assigned a value of <span class='ct-code-b-yellow'>20</span>.";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case 'firstExLine4':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = 'This statement prints the <span class="ct-code-b-yellow">value</span> of <span class="ct-code-b-yellow">*p</span>.';
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case 'newBox':
			$('.introjs-helperLayer').one('transitionend', function() {
				boxAnimation("#newBox", function() {
					$('.introjs-tooltip').removeClass('hide');
					var text = "The size of memory allocated is <span class='ct-code-b-yellow'>4 bytes</span> in " + 
								"<span class='ct-code-b-yellow'>heap memory</span>, " +
								"as the sizeof operator has returned <span class='ct-code-b-yellow'>4 bytes</span> for the" +
								" <span class='ct-code-b-yellow'>float</span> datatype. " +
								"<br><br>Let us assume the address as <span class='ct-code-b-yellow'>1054</span>.";
					typing($('.introjs-tooltiptext'), text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			});
			break;
		case 'firstExDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'tweenmaxSvg':
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					var text = "So the address is stored into the variable <span class='ct-code-b-yellow'>p</span> i.e. " +
								"<span class='ct-code-b-yellow'>1054</span> is stored.";
					typing('.introjs-tooltiptext', text, function() {
						tweenmaxAnimation();
					});
				});
				break;
			case 'tweenmax':
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					var text = "The <span class='ct-code-b-yellow'>pointer</span> variable <span class='ct-code-b-yellow'>p</span> is " +
								"pointed to the address <span class='ct-code-b-yellow'>1054</span>.<br>" +
								"<span class='ct-code-b-yellow'>*p</span> represents value at that address. " +
								"So the value <span class='ct-code-b-yellow'>20</span> is stored at " +
								"<span class='ct-code-b-yellow'>1054</span>.";
					typing('.introjs-tooltiptext', text, function() {
						tweenmaxValueAnimation();
					});
				});
				break;
			}
			break;
		case 'consoleId':
			$('.introjs-helperLayer').one('transitionend', function() {
				if (introjs._direction == "forward") {
					$("#printText").removeClass("visibility-hidden");
					var text = $("#printText").html();
					typing($("#printText"), text, function() {
						setTimeout(function () {
							introjs.nextStep();
						}, 500);
					});
				} else {
					$("#printText").addClass("visibility-hidden");
					introjs.previousStep();
					$("#exampleTwo").addClass("opacity00");
					$('#preCodeTwo').removeAttr('style').addClass('opacity00');
				}
				
			});
			break;
		case 'preCodeTwo':
			introjs.refresh();
			$('.introjs-fixParent').removeClass('introjs-fixParent');
			$('.introjs-helperLayer').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				$("#exampleTwo").removeClass("opacity00");
				typing('.introjs-tooltiptext', "Let us consider another example.", function() {
					TweenMax.to($("#preCodeTwo"), 0.5, {opacity: 1, onComplete: function(){
						introjs.refresh();
						$("#preCodeTwo").removeClass("opacity00");
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					}});
				});
			});
			break;
		case 'secondExLine1':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text =  "A pointer variable <span class='ct-code-b-yellow'>k</span> is declared of datatype " +
							"<span class='ct-code-b-yellow'>int</span>.<br/><br/> " +
							"An <span class='ct-code-b-yellow'>int</span> pointer variable, should always point to an <span class='ct-code-b-yellow'>int</span> value." 
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case 'kBox':
			$('.introjs-fixParent').removeClass('introjs-fixParent');
			$("#secondExDiv").removeClass("opacity00");
			$('.introjs-helperLayer').one('transitionend', function() {
				boxAnimation("#kBox", function() {
					$('.introjs-tooltip').removeClass('hide');
					var text = "The variable pointer <span class='ct-code-b-yellow'>k</span> is of type <span class='ct-code-b-yellow'>int</span> " +
								"and it occupies <span class='ct-code-b-yellow'>2 bytes</span> in memory with some address. " +
								"<br><br>Let us assume this address to be <span class='ct-code-b-yellow'>1234</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			});
			break;
		case 'sizeofSpan2':
			$('.introjs-helperLayer').one('transitionend', function() {
				typing('.introjs-tooltiptext', "<span class='ct-code-b-yellow'>sizeof(int)</span> returns the size of an integer.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case 'mallocSpan2':
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "Here <span class='ct-code-b-yellow'>5</span> is the size of the one dimensional array and is also " +
						"the number of memory locations to be allocated " +
						" on the <span class='ct-code-b-yellow'>heap</span>.<br/><br/> These five locations are allocated in sequence.";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case 'arrayDiv':
			$('.introjs-helperLayer').one('transitionend', function() {
				boxAnimation("#arrayDiv", function() {
					$('.introjs-tooltip').removeClass('hide');
					var text = "Here each int value will occupy <span class='ct-code-b-yellow'>2 bytes</span> of memory, so total memory " +
								"allocated is <span class='ct-code-b-yellow'>10 bytes</span> divided as <span class='ct-code-b-yellow'>5</span> addresses.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			});
			break;
		case 'secondExLine2':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#dataTypeInt1, #dataTypeInt2").addClass("blinking");
				var text = "<span class='ct-code-b-yellow'>malloc()</span> function here selects <span class='ct-code-b-yellow'>10 bytes(5 * 2)" +
							"</span> of memory from the <span class='ct-code-b-yellow'>heap</span>.<br><br>" +
							"The address of first byte(base address) is typecasted to <span class='ct-code-b-yellow'>int*</span>.<br><br>" +
							"This address is stored  in the <span class='ct-code-b-yellow'>int</span> pointer <span class='ct-code-b-yellow'>k</span>."; 
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case 'secondExDiv':
			$('.introjs-tooltip').css("min-width", "370px");
			$('.introjs-helperLayer').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				var text = "The base address of <span class='ct-code-b-yellow'>heap memory</span> is stored in " +
						"<span class='ct-code-b-yellow'>k</span><br> " +
						"i.e <span class='ct-code-b-yellow'>1924</span> is stored in <span class='ct-code-b-yellow'>k</span>.";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onClick='tweenmaxArrayAnimation()'>Next &#8594;</a>");
				});
			});
			break;
		case 'restart':
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	introjs.start();
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 1;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	})
}

function tweenmaxAnimation() {
	var l3 = $("#newAddress").offset();
	var l4 = $("#cValue").offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	$("#newAddress").effect( "highlight", {color:"dodgerblue"}, 1000, function() {
		$("#cValue").removeClass("opacity00");
		TweenMax.from("#cValue", 1, {top: topLength, left: leftLength, onComplete: function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
			$(".user-btn").click(function() {
				$(".user-btn").remove();
				var text = "Here the <span class='ct-code-b-yellow'>pointer</span> variable <span class='ct-code-b-yellow'>p</span> has the " +
							"address of the <span class='ct-code-b-yellow'>dynamic memory</span> allocated, so it can access the " +
							"value at <span class='ct-code-b-yellow'>1054</span>.";
				$(".introjs-tooltiptext").empty();
				$(".introjs-tooltiptext").append("<div></div>");
				typing($('.introjs-tooltiptext div:last'), text, function() {
					svgAppend($('#firstExDiv'), 'svg1');
					svgMarkerAppend($('#svg1'), 'marker1');
					svgAnimatingLine($('#firstExDiv'), $('#memoryBox1'), $('#memoryBox2'), $('#svg1'), 'svgLine1', 'marker1', function() {	
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});	
				});
			});
		}});
	});
}

function tweenmaxValueAnimation() {
	var l3 = $("#pValue").offset();
	var l4 = $("#Value").offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	$("#pValue").addClass("css-circle").effect( "highlight", {color:"white"}, 1000, function() {
		$("#Value").removeClass("opacity00");
		$("#pValue").removeClass("css-circle");
		TweenMax.from("#Value", 1.5, {top: topLength, left: leftLength, onComplete: function() {
			$(".introjs-nextbutton, .introjs-prevbutton").show();
		}});
	});
}

function tweenmaxArrayAnimation() {
	$(".user-btn").remove();
	var l3 = $("#firstAddressId").offset();
	var l4 = $("#kValue").offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	$("#firstAddressId").effect( "highlight", {color:"dodgerblue"}, 1000, function() {
		$("#kValue").removeClass("opacity00");
		TweenMax.from("#kValue", 1, {top: topLength, left: leftLength, onComplete: function() {
			svgAppend($('#secondExDiv'), 'svg2');
			svgMarkerAppend($('#svg2'), 'marker2');
			svgAnimatingLine($('#secondExDiv'), $('#memoryBox3'), $('#memoryBox4'), $('#svg2'), 'svgLine2', 'marker2', function() {	
				var text = "Here the locations are accessed using pointers as :<br><br>" +
				"<ul class='ct-code-b-yellow'><li>(p + 0) --> (1924 + 0) --> (1924 + (0 x 2)) = 1924.</li>"+
				"<li>(p + 1) --> (1924 + 1) --> (1924 + (1 x 2)) = 1926.</li></ul><br><br>" +
				"The value stored at the address can be accessed by appending <span class='ct-code-b-yellow'>*</span> before the address.<br>" +
				"<ul><li class='ct-code-b-yellow'>*(p + 0) --> *(1924) --> value at 1924.</li></ul>" +
				"<br><span class='ct-code-b-yellow'>Note:</span><ul><li> In (p + 0), <span class='ct-code-b-yellow'>p</span> is " +
				"<span class='ct-code-b-yellow'>address</span> and <span class='ct-code-b-yellow'>0</span> is the " +
				"<span class='ct-code-b-yellow'>array index</span> value. </li>" +
				"<li>This <span class='ct-code-b-yellow'>index</span> value is not added to the address but to be multiplied by 2.</li>" +
				" <li>Here 2 is known as the <span class='ct-code-b-yellow'>scale factor</span> for <span class='ct-code-b-yellow'>int</span>.</li></ul>";
				typing('.introjs-tooltiptext', text, function() {
					introjs.refresh();
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		}});
	});
}

function boxAnimation(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(id).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
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

function svgAnimatingLine(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}