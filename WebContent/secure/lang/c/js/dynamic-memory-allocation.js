var dynamicMemoryAllocationReady = function() {
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
			element :'#preCode',
			intro : '',
		}, {
			element :'#line1',
			intro : '',
		}, {
			element : '#cBox',
			intro : '',
			tooltipClass: 'hide',
		}, {
			element :'#line2',
			intro : '',
		}, {
			element : '#kBox',
			intro : '',
			animateStep : 'kBoxZooming',
			tooltipClass: 'hide',
		}, {
			element :'#line3',
			intro : '',
		}, {
			element : '#kBox',
			intro : '',
			animateStep : 'kBoxAddressing',
			tooltipClass: 'hide',
		}, {
			element : '#memoryDiv',
			intro : '',
			animateStep : 'accessVariable',
			tooltipClass: 'hide',
		}, {
			element :'#line4',
			intro : '',
		}, {
			element : '#memoryDiv',
			intro : '',
			animateStep : 'bounceEffect',
			tooltipClass: 'hide',
		}, {
			element : '#exampleTwo',
			intro : '',
		}, {
			element : '#secondExLine1',
			intro : '',
			animateStep : 'introduction',
		}, {
			element : '#arrayDiv',
			intro : '',
			animateStep : 'memoryAnimate',
			tooltipClass: 'hide',
		}, {
			element : '#secondExLine1',
			intro : '',
			animateStep : 'valuesInitilization',
		}, {
			element : '#arrayDiv',
			intro : '',
			animateStep : 'initializingValues',
			tooltipClass: 'hide',
		}, {
			element : '#secondExLine2',
			intro : '',
		}, {
			element : '#pBox',
			intro : '',
			tooltipClass: 'hide',
		}, {
			element : '#secondExLine3',
			intro : '',
		}, {
			element : '#secondExDiv',
			intro : '',
			animateStep : 'svgAnimate',
			tooltipClass: 'hide',
		}, {
			element : '#secondExLine4',
			intro : '',
		}, {
			element : '#secondExDiv',
			intro : '',
			animateStep : 'arraySizeError',
		}, {
			element : '#finalDiv',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element :"#restart",
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch(elementId) {
		case 'preCode':
			break;
		case 'line1':
			$("#cBox, #cValue").addClass("opacity00");
			break;
		case 'line2':
			$("#kBox").addClass("opacity00");
			break;
		case 'line3':
			$("#kValue").addClass("opacity00");
			break;
		case 'line4':
			$('#cValue').text("10");
			break;
		case 'cBox':
			$("#cBox, #cValue").addClass("opacity00");
			break;
		case 'kBox':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'kBoxZooming':
				$("#kBox").addClass("opacity00");
				break;
			 case 'kBoxAddressing':
				 $("#kValue").addClass("opacity00");
				 $('svg').remove();
				break;
			}
			break; 
		case 'memoryDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'accessVariable':
				$('svg').remove();
				break;
			case 'bounceEffect':
				$('#cValue').text("10");
				$("#exampleTwo, #secondExDiv").addClass("opacity00");
				break;
			}
			break;
		case 'exampleTwo':
			$("#exampleTwo, #secondExDiv").removeClass("opacity00");
			break;
		case 'secondExLine1':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'introduction':
				$('#arrayDiv, #addressId, #elementId').addClass('opacity00');
				break;
			case 'valuesInitilization':
				$("td > .value-css").addClass('opacity00');
				break;
			}
			break;
		case 'secondExLine2':
			$("#pBox").addClass("opacity00");
			break;
		case 'secondExLine3':
			$("#pValue").addClass("opacity00");
			$('#svg2').remove();
			break;
		case 'arrayDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'memoryAnimate':
				$(".small-box").removeAttr('style');
				$('#arrayDiv, #addressId, #elementId').addClass('opacity00');
				break;
			case 'initializingValues':
				$("td > .value-css").addClass('opacity00');
			}
			break;
		case 'pBox':
			$("#pBox").addClass("opacity00");
			break;
		case 'secondExDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'svgAnimate':
				$("#pValue").addClass("opacity00");
				$('#svg2').remove();
				break;
			case 'arraySizeError':
				break;
			}
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
			switch(elementId) {
			case 'preCode':
				$("#preCode").removeClass("opacity00");
				typing('.introjs-tooltiptext', "Let us understand why we need <span class='ct-code-b-yellow'>DMA</span> " +
						"(dynamic memory allocation).", function() {
					$(".introjs-nextbutton").show();
				});
				break;
			case 'line1':
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext', "A variable <span class='ct-code-b-yellow'>c</span> of type <span class='ct-code-b-yellow'>" +
							"int</span> is initialized " +
							"to <span class='ct-code-b-yellow'>10</span>.", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case 'line2':
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext', "A pointer variable <span class='ct-code-b-yellow'>k</span> is "+
							"declared of datatype <span class='ct-code-b-yellow'>int</span>.<br/><br/> It occupies " +
							"<span class='ct-code-b-yellow'>2 bytes</span> in  memory.<br/><br/> An int pointer " +
							"variable, should always " +
							"point to an <span class='ct-code-b-yellow'>int</span> value.", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case 'line3':
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext', "The pointer variable <span class='ct-code-b-yellow'>k</span> is " +
							"assigned to  <span class='ct-code-b-yellow'>&c</span><br/> i.e. the address of " +
							"<span class='ct-code-b-yellow'>c</span> is assigned to <span class='ct-code-b-yellow'>k</span>.", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case 'line4':
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext', "Here the pointer variable <span class='ct-code-b-yellow'>*k</span> is assigned with a " +
							"value of <span class='ct-code-b-yellow'>50</span>.<br>" +
							"In this case, as the variable <span class='ct-code-b-yellow'>k</span> is pointed to " +
							"<span class='ct-code-b-yellow'>c</span> it changes the <span class='ct-code-b-yellow'>c</span> " +
							"value from <span class='ct-code-b-yellow'>10</span> to <span class='ct-code-b-yellow'>50</span>.", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case 'cBox':
				$('.introjs-helperLayer').one('transitionend', function() {
					cBoxAnimation(function() {
						$('.introjs-tooltip').removeClass('hide');
						var text = "The variable <span class='ct-code-b-yellow'>c</span> is of type " +
									"<span class='ct-code-b-yellow'>int</span> and occupies <span class='ct-code-b-yellow'>2 bytes</span> in memory " +
									"at some address. <br><br>Let us assume this address to be <span class='ct-code-b-yellow'>2048</span>.<br>" +
									"The variable <span class='ct-code-b-yellow'>c</span> is initialized to <span class='ct-code-b-yellow'>10</span>."
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case 'kBox':
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case 'kBoxZooming':
					$('.introjs-helperLayer').one('transitionend', function() {
						kBoxAnimation(function() {
							$('.introjs-tooltip').removeClass('hide');
							typing('.introjs-tooltiptext', "The variable <span class='ct-code-b-yellow'>k</span> is of type " +
									"<span class='ct-code-b-yellow'>int</span>, so it occupies <span class='ct-code-b-yellow'>2 bytes</span> of memory " +
									"with some address.<br><br>Let us assume the address to be " +
									"<span class='ct-code-b-yellow'>2054</span>.", function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					});
					break;
				 case 'kBoxAddressing':
					$('.introjs-helperLayer').one('transitionend', function() {
						$('.introjs-tooltip').removeClass('hide');
						typing('.introjs-tooltiptext', "The address of <span class='ct-code-b-yellow'>c</span>(i.e. " +
								"<span class='ct-code-b-yellow'>2048</span>) is copied to <span class='ct-code-b-yellow'>k</span>.", function() {
							$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
							$(".introjs-duplicate-nextbutton").click(function() {
								$(".introjs-duplicate-nextbutton").remove();
								tweenmaxAnimation("#cBoxAddress", "#kValue", function() {
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								});
							});
						});
					});
					break;
				}
				break; 
			case 'memoryDiv':
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case 'accessVariable':
					$('.introjs-helperLayer').one('transitionend', function() {
						 $('.introjs-tooltip').removeClass('hide');
						typing('.introjs-tooltiptext', "The pointer variable <span class='ct-code-b-yellow'>k</span> has the " +
								"address of <span class='ct-code-b-yellow'>c</span>. So it can access the " +
								"variable <span class='ct-code-b-yellow'>c</span>.", function() {
							svgAppend($('#memoryDiv'), 'svg1');
							svgMarkerAppend($('#svg1'), 'marker1');
							svgAnimatingLineSelector1LeftSideToSelector2RightSide($('#memoryDiv'), $('#memoryBox2'), $('#memoryBox1'),
									$('#svg1'), 'svgLine1', 'marker1', function() {	
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					});
					break;
				case 'bounceEffect':
					$('.introjs-helperLayer').one('transitionend', function() {
						 $('.introjs-tooltip').removeClass('hide');
						var text = "The pointer variable <span class='ct-code-b-yellow'>k</span> is pointed to <span class='ct-code-b-yellow'>" +
									"c</span> so <span class='ct-code-b-yellow'>*k</span> means the value of <span class='ct-code-b-yellow'>" +
									"c</span>.<br><br> When <span class='ct-code-b-yellow'>*k</span> is assigned <span class='ct-code-b-yellow'>"+
									"50</span>, it has changed the value of <span class='ct-code-b-yellow'>c </span> to " +
									"<span class='ct-code-b-yellow'>50</span>.";
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' onClick='animationClick()'>Next &#8594;</a>");
						});
					});
					break;
				}
				break;
			case 'exampleTwo':
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext', "Let us consider another example.", function() {
						$("#exampleTwo, #secondExDiv").removeClass("opacity00");
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case 'secondExLine1':
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case 'introduction':
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "An array variable <span class='ct-code-b-yellow'>a</span> with size " +
									" <span class='ct-code-b-yellow'>5</span> is declared."
						typing('.introjs-tooltiptext', text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					});
					break;
				case 'valuesInitilization':
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "In this statement, the array is initialized with <span class='ct-code-b-yellow'>three</span> values " +
									"and the memory is allocated for " +
									"<span class='ct-code-b-yellow'>five</span> elements.<br/><br/> The rest of the memory allocated will be " +
									" filled with <span class='ct-code-b-yellow'>zero's</span> as the datatype of array is int."
						typing('.introjs-tooltiptext', text, function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					});
					break;
				}
				break;
			case 'secondExLine2':
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext', "The pointer variable <span class='ct-code-b-yellow'>p</span> occupies " +
							"<span class='ct-code-b-yellow'>2 bytes</span> of memory since it is of <span class='ct-code-b-yellow'>int datatype" +
							"</span>.<br/><br/> An <span class='ct-code-b-yellow'>int</span> pointer variable can refer to only an <span class='ct-code-b-yellow'>int</span> value.", function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case 'secondExLine3':
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext', "The pointer variable <span class='ct-code-b-yellow'>p</span> is " +
							"assigned with <span class='ct-code-b-yellow'>&a</span><br/> i.e. the address of " +
							"<span class='ct-code-b-yellow'>a</span> is copied to <span class='ct-code-b-yellow'>p</span>.", function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case 'arrayDiv':
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case 'memoryAnimate':
					$('.introjs-helperLayer').one('transitionend', function() {
						$(".small-box").css("visibility", "visible");
						$("#arrayDiv").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
							$("#arrayDiv").removeClass("animated zoomIn");
							$("#smallBox").effect("transfer", { to: $("#addressId")}, 1000).addClass(".ui-effects-transfer", function() {
								$("#addressId").removeClass("opacity00", function() {
									$("#elementId").removeClass("opacity00");
									$('.introjs-tooltip').removeClass('hide');
									var text = "Here <span class='ct-code-b-yellow'>1112</span> is the base address of the array.<br/><br/> " +
												"This is incremented by <span class='ct-code-b-yellow'>2 bytes</span> for every element " +
												"of the array.<br/>The array elements are of type <span class='ct-code-b-yellow'>int</span> hence occupy 2 bytes in memory.";
									typing('.introjs-tooltiptext', text, function() {
										$(".introjs-nextbutton, .introjs-prevbutton").show();
									});
								});
							});
						});
					});
					break;
				case 'initializingValues':
					$('.introjs-helperLayer').one('transitionend', function() {
						$("#inputArray").effect("transfer", { to: $("#smallBox")}, 1000).addClass(".ui-effects-transfer", function() {
							$("#smallBox").removeClass("opacity00");
							$("#valuesId1, #valuesId2, #valuesId3").removeClass("opacity00");
							$('.introjs-tooltip').removeClass('hide');
							typing('.introjs-tooltiptext', "The initilaized values are stored in the first three memory locations and the rest " +
									"two are filled with <span class='ct-code-b-yellow'>zero's</span>.", function() {
								$("#valuesId4").removeClass("opacity00").effect( "highlight", {color:"dodgerblue"}, 1000, function() {
									$("#valuesId5").removeClass("opacity00").effect( "highlight", {color:"dodgerblue"}, 1000, function() {
										$(".introjs-nextbutton, .introjs-prevbutton").show();
									});
								});
							});
						});
					});
					break;
				}
				break;
			case 'pBox':
				$('.introjs-helperLayer').one('transitionend', function() {
					pBoxAnimation(function() {
						$('.introjs-tooltip').removeClass('hide');
						typing('.introjs-tooltiptext', "Here <span class='ct-code-b-yellow'>p</span> is a " +
								"<span class='ct-code-b-yellow'>int pointer</span> variable, so it occupies <span class='ct-code-b-yellow'>2 bytes" +
								"</span> in memory with some address.<br/><br> We assume the address to be  " +
								"<span class='ct-code-b-yellow'>1044</span>.", function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					});
				});
				break;
			case 'secondExDiv':
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch(animateStep) {
				case 'svgAnimate':
					$('.introjs-helperLayer').one('transitionend', function() {
						$('.introjs-tooltip').removeClass('hide');
						typing('.introjs-tooltiptext', "Here the base address of <span class='ct-code-b-yellow'>a</span> is copied to " +
								"<span class='ct-code-b-yellow'>p</span> i.e. <span class='ct-code-b-yellow'>1112</span> is copied to " +
								"<span class='ct-code-b-yellow'>p</span>.", function() {
							tweenmaxAnimation("#firstAddressId", "#pValue", function() {
								$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
								$(".user-btn").click(function() {
									$(".user-btn").remove();
									typing('.introjs-tooltiptext', "Here the pointer variable <span class='ct-code-b-yellow'>p</span> has the " +
											"address of <span class='ct-code-b-yellow'>a</span>, so it can access the " +
											"variable <span class='ct-code-b-yellow'>a</span>.", function() {
										svgAppend($('#secondExDiv'), 'svg2');
										svgMarkerAppend($('#svg2'), 'marker2');
										svgAnimatingLineSelector1RightSideToSelector2LeftSide($('#secondExDiv'), $('#memoryBox3'), 
												$('#variableA'), $('#svg2'), 'svgLine2', 'marker2', function() {	
											$('.introjs-nextbutton, .introjs-prevbutton').show();
										});
									});
								});
							});
						});
					});
					break;
				case 'arraySizeError':
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "The size of an array once declared cannot be changed, as memory allocation for the array has already been done once. "+
						"<br><br>So, changing the size of the array <span class='ct-code-b-yellow'>a</span> throws an "+
						" <span class='ct-color-red'><b>error</b></span>."
						typing('.introjs-tooltiptext', text, function() {
									$("#secondExLine4").addClass("ct-color-red");
									$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					});
					break;
				}
				break;
			case 'secondExLine4':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#secondExLine4").removeClass("opacity00");
					typing('.introjs-tooltiptext', "Let us increase the size of array from <span class='ct-code-b-yellow'>5</span> " +
							" to <span class='ct-code-b-yellow'>10.</span>", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case 'finalDiv':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#finalDiv").removeClass("opacity00").css({height: $("#finalDiv").outerHeight()});
					$("#finalLine1").fadeTo(300, 1, function() {
						$("#list1").fadeTo(300, 1, function() {
							$("#list2").fadeTo(300, 1, function() {
								$("#finalLine2").fadeTo(300, 1, function() {
									$("#finalDiv").addClass('z-index9999999');
									setTimeout(function () {
										introjs.nextStep();
									}, 1000);
								});
							});
						});	
					});	
				});
				break;
			case 'restart':
				$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
				$(".introjs-tooltip").css({"min-width" : "120px"});
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#restart").removeClass("opacity00");
				});
				break;
			}
	});
	introjs.start();
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting( text , {
		"typing_interval": '1',
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

function cBoxAnimation(callBackFunction) {
	$("#cBox").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$("#cBox").removeClass("animated zoomIn");
		tweenmaxAnimation("#cInputValue", "#cValue", function() {
			callBackFunction();	
		});
	});
}

function kBoxAnimation(callBackFunction) {
	$("#kBox").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$("#kBox").removeClass("animated zoomIn");
		callBackFunction();
	});
}

function pBoxAnimation(callBackFunction) {
	$("#pBox").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$("#pBox").removeClass("animated zoomIn");
		callBackFunction();
	});
}

/*function animationPointerStraightArrow() {
	$('.introjs-duplicate-nextbutton').remove();
	TweenMax.to($('.svg-line').show(), 1, {attr: {x2: '42%'}, onComplete: function() {
		$(".introjs-nextbutton, .introjs-prevbutton").show();
	}});
}

function animationPointerArrow() {
	TweenMax.to($('.svg-line-cross').show(), 2, {attr: {x2: '35%', y2: '52%'}, onComplete: function() {
		$("#pValue").removeClass("opacity00");
		$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
		$(".user-btn").click(function() {
			$(".user-btn").remove();
			$('.svg-line-cross').hide();
			typing('.introjs-tooltiptext', "Here the pointer variable <span class='ct-code-b-yellow'>p</span> has the " +
					"address of <span class='ct-code-b-yellow'>a</span> so it can access the " +
					"variable <span class='ct-code-b-yellow'>a</span>.", function() {
				TweenMax.to($('.svg-line-right').show(), 1, {attr: {x2: '50%'}, onComplete: function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}});
			});
		});
	}});
}*/

function tweenmaxAnimation(selector1, selector2, callBackFunction) {
	$(selector1).addClass('circle-css');
	var l3 = $(selector1).offset();
	var l4 = $(selector2).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left-l4.left;
	$(selector1).effect( "highlight", {color:"dodgerblue"}, 1000, function() {
		$(selector2).removeClass("opacity00");
		TweenMax.from(selector2, 1, {top: topLength, left: leftLength, onComplete: function() {
			$(selector1).removeClass('circle-css');
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	});
}

function bounceFromEffectWithTimelineMax(selector1, selector2, callBackFunction) {
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

function svgAnimatingLineSelector1LeftSideToSelector2RightSide(parentSelector, selector1, selector2, svgId, svgLineId, svgMarkerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, svgMarkerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function animationClick() {
	$(".introjs-duplicate-nextbutton").remove();
	bounceFromEffectWithTimelineMax("#kInputValue", "#cValue", function() {
		$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
		$(".user-btn").click(function() {
			$(".user-btn").remove();
			var text = "Here something wrong has happened, <br><br>" +
						"The variable <span class='ct-code-b-yellow'>c</span> is not aware of the change done by " +
						"the pointer <span class='ct-code-b-yellow'>k</span> i.e., from " +
						"<span class='ct-code-b-yellow'>10</span> to <span class='ct-code-b-yellow'>50</span>.";
			typing('.introjs-tooltiptext', text, function() {
				$(".introjs-nextbutton, .introjs-prevbutton").show();
			});
		});
	});
}