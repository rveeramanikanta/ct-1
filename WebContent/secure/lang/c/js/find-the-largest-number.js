var typingInterval = 1;

var findTheLargestNumberReady = function() {
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
			element : '#preCode',
			intro : '',
			animateStep : 'declaration',
		} , {
			element : '#inputSpan1',
			intro : ''
		}, {
			element : '#inputSpan2',
			intro : ''
		}, {
			element : '#inputSpan3',
			intro : ''
		}, {
			element : '#preCode',
			intro : '',
			animateStep : 'preCodeZooming',
			position : 'right',
		 }, {
			 element : '#consoleId',
			 intro : '',
			 tooltipClass : 'hide'
		 }, {
			element :'#restart',
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	
	introjs.onbeforechange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch(elementId) {
		}
	});
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch(elementId) {
		case 'inputSpan1':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#inputSpan1").removeClass("opacity00");
				var text = "Here <span  class='tooltip-text-edit-1 ct-code-b-yellow'>" + $("#input1").text() + 
							"</span> is stored in variable <span class='ct-code-b-yellow'> num1</span>.<br><br>You can also change the number.<br>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					$("#input1").attr({contenteditable: 'true'});
					$("#input1").addClass("blinking-once");
					charAtEnd('input1');
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case 'inputSpan2':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#inputSpan2").removeClass("opacity00");
				var text = "Here <span  class='tooltip-text-edit-2 ct-code-b-yellow'>" + $("#input2").text() + 
							"</span> is stored in variable <span class='ct-code-b-yellow'> num2</span>.<br><br>You can also change the number.<br>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					$("#input2").attr({contenteditable: 'true'});
					$("#input2").addClass("blinking-once");
					charAtEnd('input2');
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case 'inputSpan3':
			$(".user-btn").remove();
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#inputSpan3").removeClass("opacity00");
				var text = "Here <span  class='tooltip-text-edit-3 ct-code-b-yellow'>" + $("#input3").text() + 
							"</span> is stored in variable <span class='ct-code-b-yellow'> num3</span>.<br><br>You can also change the number.<br>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					$("#input3").attr({contenteditable: 'true'});
					$("#input3").addClass("blinking-once");
					charAtEnd('input3');
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case 'preCode':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'declaration':
				var text = "Let us try to understand how to write code that can find the largest number among three given numbers using "+
				"<span class='ct-code-b-yellow'>nested if</span> and <span class='ct-code-b-yellow'>if-else</span> statements.";	
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					TweenMax.to($("#preCode, #consoleId"), 1, {opacity: 1, onComplete: function() {
						$('.introjs-nextbutton').show();
					}});
				});
				break;
			case 'preCodeZooming':
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Condition for checking largest number.<br><span id='condition1' class='opacity00'></span>"+
						"<span id='booleanSpan1'></span><span id='resultText1'></span>";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$("#input1, #input2, #input3").attr({contenteditable: 'false'});
						$("#condition1").append("<span class='ct-code-b-yellow'><span id='variableNum1' class='display-inline'>num1</span> > "+
								"<span id='variableNum2' class='display-inline'>num2</span></span>");
						$("#ifCondition1").effect( "highlight", {color:"yellow"}, 1000, function() {
							tweenmaxValueAnimation("#ifCondition1", "#condition1", function() {
								flipEffect("#variableNum1", $("#input1").text(), function() {
									flipEffect("#variableNum2", $("#input2").text(), function() {
										if(parseInt($("#input1").text()) > parseInt($("#input2").text())) {
											$("#booleanSpan1").append("<span class='ct-code-b-turquoise'> true</span>");
											zoomingEffect("#booleanSpan1", function() {
												$("#resultText1").append("<br>Since the condition evaluates <span class='ct-code-b-yellow'>true</span> "+
														"the control enters into next <span class='ct-code-b-yellow'>if</span> block."+
														"<span id='condition2' class='opacity00'></span><span id='booleanSpan2'></span>"+
														"<span id='resultText2'></span>");
												var text = $("#resultText1").html();
												typing('#resultText1', text, typingInterval, 'white', function() {
													nextButtonFucntion(function() {
														transferEffect("#preLine1", "#preLine2", function() {
															$("#condition2").append("<br><span class='ct-code-b-yellow'><span id='intNum1' class='display-inline'>"+
																	"num1</span> > <span id='variableNum3' class='display-inline'>num3</span></span>");
															$("#ifCondition2").effect( "highlight", {color:"yellow"}, 1000, function() {
																tweenmaxValueAnimation("#ifCondition2", "#condition2", function() {
																	flipEffect("#intNum1", $("#input1").text(), function() {
																		flipEffect("#variableNum3", $("#input3").text(), function() {
																			if(parseInt($("#input1").text()) > parseInt($("#input3").text())) {
																				$("#booleanSpan2").append("<span class='ct-code-b-turquoise'> true</span>");
																				zoomingEffect("#booleanSpan2", function() {
																					$("#resultText2").append("<br>Since the condition evaluates "+
																							"<span class='ct-code-b-yellow'>true</span> "+
																							"the control prints the statement within the "+
																							"<span class='ct-code-b-yellow'>if</span> block.");
																					var text = $("#resultText2").html();
																					typing('#resultText2', text, typingInterval, 'white', function() {
																						transferEffect("#preLine2", "#preLine3", function() {
																							$("#preLine3").addClass("blinking");
																							$('.introjs-nextbutton, .introjs-prevbutton').show();
																						});
																					});
																				});
																			} else {
																				$("#booleanSpan2").append("<span class='ct-code-b-red'> false</span>");
																				zoomingEffect("#booleanSpan2", function() {
																					$("#resultText2").append("<br>Since the condition evaluates "+
																							"<span class='ct-code-b-yellow'>false</span> "+
																							"the control prints the statement within the "+
																							"<span class='ct-code-b-yellow'>else</span> block.");
																					var text = $("#resultText2").html();
																					typing('#resultText2', text, typingInterval, 'white', function() {
																						transferEffect("#preLine2", "#preLine4", function() {
																							$("#preLine4").addClass("blinking");
																							$('.introjs-nextbutton, .introjs-prevbutton').show();
																						});
																					});
																				});
																			}
																		});
																	});
																});
															});
														});
													});
												});
											});
										} else {
											$("#booleanSpan1").append("<span class='ct-code-b-red'> false</span>");
											$("#resultText1").append("<br>Since the condition evaluates <span class='ct-code-b-yellow'>false</span> "+
													"the control enters into <span class='ct-code-b-yellow'>else-if</span> block."+
													"<br><span id='condition2' class='opacity00'></span><span id='booleanSpan2'></span>"+
													"<span id='resultText2'></span>");
											var text = $("#resultText1").html();
											typing('#resultText1', text, typingInterval, 'white', function() {
												nextButtonFucntion(function() {
													transferEffect("#preLine1", "#preLine5", function() {
														$("#condition2").append("<span class='ct-code-b-yellow'><span id='intNum2' class='display-inline'>"+
														"num2</span> > <span id='intNum3' class='display-inline'>num3</span></span>");
														$("#ifCondition3").effect( "highlight", {color:"yellow"}, 1000, function() {
															tweenmaxValueAnimation("#ifCondition3", "#condition2", function() {
																flipEffect("#intNum2", $("#input2").text(), function() {
																	flipEffect("#intNum3", $("#input3").text(), function() {
																		if(parseInt($("#input2").text()) > parseInt($("#input3").text())) {
																			$("#booleanSpan2").append("<span class='ct-code-b-turquoise'> true</span>");
																			zoomingEffect("#booleanSpan2", function() {
																				$("#resultText2").append("<br>Since the condition evaluates "+
																						"<span class='ct-code-b-yellow'>true</span> the "+
																						"control prints the statement within the "+
																						"<span class='ct-code-b-yellow'>if</span> block.");
																				var text = $("#resultText2").html();
																				typing('#resultText2', text, typingInterval, 'white', function() {
																					transferEffect("#preLine5", "#preLine6", function() {
																						$("#preLine6").addClass("blinking");
																						$('.introjs-nextbutton, .introjs-prevbutton').show();
																					});
																				});
																			});
																		} else {
																			$("#booleanSpan2").append("<span class='ct-code-b-red'> false</span>");
																			zoomingEffect("#booleanSpan2", function() {
																				$("#resultText2").append("<br>Since the condition evaluates "+
																						"<span class='ct-code-b-yellow'>false</span> the "+
																						"control prints the statement within the "+
																						"<span class='ct-code-b-yellow'>else</span> block.");
																				var text = $("#resultText2").html();
																				typing('#resultText2', text, typingInterval, 'white', function() {
																					transferEffect("#preLine5", "#preLine7", function() {
																						$("#preLine7").addClass("blinking");
																						$('.introjs-nextbutton, .introjs-prevbutton').show();
																					});
																				});
																			});
																		}
																	});
																});
															});
														});
													});
												});
											});
										}
									});
								});
							});
						});
					});
				});
				break;
			}
			break;
		case 'consoleId':
			$(".introjs-helperLayer").one('transitionend', function() {
				var n1 = parseInt($("#input1").text());
				var n2 = parseInt($("#input2").text());
				var n3 = parseInt($("#input3").text());
				var largest = (((n1 > n2 && n1 > n3)) ? n1 : (n2 > n3) ? n2 : n3);
				$("#printText1").append(parseInt(largest) + " is the largest number.");
				var text = $("#printText1").html();
				typing('#printText1', text, 20, 'white', function() {
					setTimeout(function() {
						introjs.nextStep();
					}, 500);
				});
				
			});
			break;
		case 'restart':
			$("#ternaryOperator, #statementDiv1").removeClass('z-index9999999');
			$("#checkCondtion1, #checkCondtion2, #numValue5, #checkCondtion3, #numValue8, #numValue9").removeClass("blinking");
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	
	introjs.start();
}

function typing(typingId, text, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(text, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof typingCallbackFunction === "function") {
			typingCallbackFunction();
		}
	});
}

function tweenmaxValueAnimation(selector1, selector2, callBackFunction) {
	var l3 = $(selector1).offset();
	var l4 = $(selector2).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	$(selector2).removeClass("opacity00");
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function nextButtonFucntion(callBackFunction) {
	$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
	$(".introjs-prevbutton").show();
	$(".user-btn").click(function() {
		$(".introjs-prevbutton").hide();
		$(".user-btn").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function zoomingEffect(selector, callBackFunction) {
	$(selector).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}	
	});
}

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {css: {top : 0, rotationX : 0,}, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).effect("transfer", { to: $(selector2)}, 2000).addClass(".ui-effects-transfer", function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}


function charAtEnd(elementId) {
	$('#' + elementId).select();
	var element = document.getElementById(elementId);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
	
	$("#input1, #input2, #input3").keydown(function(e) {
		introjs.refresh();
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length == max) {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'></span>");
			e.preventDefault();
		} else {
		//	$(".introjs-duplicate-nextbutton").remove();
		}
	});
	
	$("#input1, #input2, #input3").on("keyup", function(e) {
		introjs.refresh();
		$('.length-error-text').remove();
		$(".tooltip-text-edit-1").text($("#input1").text());
		$(".tooltip-text-edit-2").text($("#input2").text());
		$(".tooltip-text-edit-3").text($("#input3").text());
		if ($(this).text() == "") {
			$('.introjs-tooltiptext').append("<span class='ct-color-red length-error-text'><b>Please enter number.</b></span>");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		} else {
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		}
	});
}