var typingInterval = 5;
var multiplyAction;
var coefficent;
var subtraction;

var leapYearProgramReady = function() {
	introjs = introJs();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	$("#restart").click(function() {
		$("#inputYear").val("");
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
			tooltipClass : 'hide'
		}, {
			element : '#preCode',
			intro : '',
			animateStep : 'removingOpacity'
		}, {
			element : '#printfLine1',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element : '#consoleId',
			intro : '',
			animateStep : 'showFirstLine',
			tooltipClass : 'hide'
		}, {
			element : '#scanfLine1',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element : '#consoleId',
			intro : '',
			animateStep : 'enterNumber',
			tooltipClass: 'hide'
		}, {
			element : '#preCode',
			intro : '',
			position : 'right',
			tooltipClass: 'hide',
			animateStep : 'firstConditionCheck'
		}, {
			element : '#consoleId',
			intro : '',
			animateStep : 'finalResult',
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
		case 'infoDiv':
			
			break;
		case 'preCode':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'removingOpacity':
				
				break;
			case 'firstConditionCheck':
				
				break;
			}
			break;
		case 'printfLine1':
			
			
			if (introjs._direction == "backward") {

			}
			
			
			break;
		case 'scanfLine1':
				if (introjs._direction == "backward") {
					$("#inputYear").val('');
					$("#inputYear").removeAttr("contenteditable");
					$("#inputYear").removeClass("blinking-once");
				}
			
			break;
		case 'consoleId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'showFirstLine':
				
				if (introjs._direction == "backward") {
					$("#printText1").addClass("opacity00");
				}
				
				
				break;
			case 'enterNumber':
				
				
				if (introjs._direction == "backward") {
					$("#inputYear").val('');
					$("#inputYear").removeAttr("contenteditable");
					$("#inputYear").removeClass("blinking-once");
				}
				
				break;
			case 'finalResult':
				
				break;
			}
			break;
		case 'restart':
			
			break;
		}
	});
	
	
		
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			
			if (introjs._currentStep != 0 && targetElement.id !== "codeDiv") {
				$('.introjs-prevbutton').show();
			}

			$('.introjs-nextbutton').show();
			return;
		}
		
		if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
			introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		}

		var elementId = targetElement.id;
		switch(elementId) {
		case 'infoDiv':
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$("#list1").fadeTo(300, 1, function() {
				$("#list2").fadeTo(300, 1, function() {
						$("#infoDiv").addClass('z-index9999999');
						
						stepNext();
					});
				});
			break;
		case 'preCode':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'removingOpacity':
				$('.introjs-helperLayer').one('transitionend', function() {
					TweenMax.to($("#preCode, #consoleId"), 1, {opacity: 1, onComplete: function() {
						var text = "We will use the above code to demonstrate we are using <span class='ct-code-b-yellow'>nested if</span> and "+
							"<span class='ct-code-b-yellow'>if-else</span> constructs to verify if a given year is a leap year or not.";
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							$(".introjs-nextbutton").show();
						});
					}});
				});
				break;
			case 'firstConditionCheck':
				$('.introjs-helperLayer').one('transitionend', function() {
					$(".introjs-tooltip").removeClass("hide");
					var text = "Now check the condition for given <span class='ct-code-b-yellow'>" + $("#inputYear").val() + "</span> is a leap year"+
						" or not.<br><div id='div1'><ul class='dispaly-inline'>"+
							"<li><span id='firstIf' class='opacity00 ct-code-b-yellow'>"+
								"<span id='variable1' class='display-inline'>year</span> % 4 == 0</span>"+
							"</li></ul>"+
							"<br><span class='opacity00' id='line1'></span></div>";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
/** (year % 4) **/		yearDevideWithFour(function() {
							var remainderResult = $("#inputYear").val() % 4;
							if(remainderResult == 0) {
								$("#calculationSpan1").after("<span class='ct-code-b-turquoise' id='trueSpan1'> true</span>");
								$("#trueSpan1").addClass("animated zoomIn").one('animationend', function() {
									$("#trueSpan1").after("<br><span id='evaluationSpan1'>Since the condition evaluates to "+
											"<span class='ct-code-b-yellow'>true</span> the control enters into the next "+
											"<span class='ct-code-b-yellow'>if</span> block.");
									var text = $("#evaluationSpan1").html();
									
									typing('#evaluationSpan1', text, typingInterval, 'white', function() {
										$(".introjs-prevbutton").show();
										$("#div1").after("<div id='div2'><ul class='dispaly-inline'><li class='opacity00' id='line2'></li></ul>"+
												"<br><span class='opacity00' id='line3'></span></div>");
										
										nextButtonFucntion(function() {
/** (year % 100) **/						yearDevideWithHundred(function() {
												secondIfElseConditionAnimation();
											});
										});
									});
									
								});
							} else {
								$("#line1").append("<span class='ct-color-red' id='falseSpan3'> false</span>");
								$("#falseSpan3").addClass("animated zoomIn").one('animationend', function() {
									$("#falseSpan3").after("<br><span id='evaluationSpan6'>Since the condition evaluates to "+
											"<span class='ct-code-b-yellow'>false</span> the control prints the statement in "+
											"the <span class='ct-code-b-yellow'>else</span> block.");
									var text = $("#evaluationSpan6").html();
									typing('#evaluationSpan6', text, typingInterval, 'white', function() {
										$(".introjs-prevbutton").show();
										nextButtonFucntion(function() {
											transferEffect("#ifStatement1", "#printLine4", function() {
												$("#elseSpan3").effect( "highlight", {color:"turquoise"}, 1000, function() {
													stepNext();
												});
											});
										});
									});
								});
							}
						});
					});
				});
				break;
			}
			break;
			
		case 'printfLine1':
			$('.introjs-helperLayer').one('transitionend', function() {
				
				/*setTimeout(function() {
					introjs.nextStep();
				}, 200);*/
				
				stepNext();
				
			});
			break;
			
		case 'scanfLine1':
			$('.introjs-helperLayer').one('transitionend', function() {
				/*setTimeout(function() {
					introjs.nextStep();
				}, 200);*/
				stepNext();
			});
			break;
			
		case 'consoleId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'showFirstLine':
				$('.introjs-helperLayer').one('transitionend', function() {
					
					if (introjs._direction == "forward") {
						$("#printText1").removeClass("opacity00");
						var text = $("#printText1").html();
						typing('#printText1', text, typingInterval, 'white', function() {
							stepNext();
						});
					} else {
						stepNext();
					}
					
				});
				break;
				
			case 'enterNumber':
				$('.introjs-helperLayer').one('transitionend', function() {
					$(".user-btn").remove();
					$(".introjs-tooltip").removeClass("hide");
					var text = "Please enter a value for variable year.<br>"
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$("#inputYear").attr({contenteditable: 'true'});
						$("#inputYear").addClass("blinking-once");
						charAtEnd('inputYear');
					});
				});
				break;
			case 'finalResult':
				$('.introjs-helperLayer').one('transitionend', function() {
					if ($("#inputYear").val() % 4 == 0) {
						
						if ($("#inputYear").val() % 100 == 0) {
							if ($("#inputYear").val() % 400 == 0) {
								$("#printText2").text($("#inputYear").val() + " is a leap year.");
							} else {
								$("#printText2").text($("#inputYear").val() + " is not a leap year.");
							}
						} else {
							$("#printText2").text($("#inputYear").val() + " is a leap year.");
						}
						
					} else {
						$("#printText2").text($("#inputYear").val() + " is not a leap year.");
					}
					var text = $("#printText2").html();
					typing('#printText2', text, 20, 'white', function() {
						/*setTimeout(function() {
							introjs.nextStep();
						}, 500);*/
						
						stepNext();
						
					});
				});
				break;
			}
			break;
		case 'restart':
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
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}

function stepNext() {
	if (introjs._direction == "forward") {
		setTimeout(function() {
			introjs.nextStep();
		}, 800)
	} else {
		setTimeout(function() {
			introjs.previousStep();
		}, 800)
	}
}

function nextButtonFucntion(callBackFunction) {
	//$(".introjs-prevbutton").hide();
	$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
	$(".user-btn").click(function() {
		$(".user-btn").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function tweenmaxValueAnimation(selector1, selector2, callBackFunction) {
	var l3 = $(selector1).offset();
	var l4 = $(selector2).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	$(selector2).removeClass("opacity00");
	TweenMax.from(selector2, 1.5, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function tweenmaxValueAnimationFromTop(selector1, selector2, callBackFunction) { //, left: leftLength
	var l3 = $(selector1).offset();
	var l4 = $(selector2).offset();
	var topLength = l3.top - l4.top;
	$(selector2).removeClass("opacity00");
	TweenMax.from(selector2, 1.5, {top: topLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
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

function charAtEnd(elementId) {
	$('#' + elementId).focus();
	
	$("#inputYear").keydown(function(e) {
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).val().length == max) {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'></span>");
			e.preventDefault();
		}
	});
	
	$("#inputYear").on("keyup", function(e) {
		$('.length-error-text').remove();
		$(".tooltip-text-edit").text($("#inputYear").val());
		if ($(this).val() == "") {
			$('.introjs-tooltiptext').append("<span class='ct-color-red length-error-text'>Please enter number.</span>");
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
		} else {
			$(".introjs-nextbutton, .introjs-prevbutton").show();
			if ($('.introjs-nextbutton[style="display: inline-block;"]').length == 1 && e.keyCode == 13) {
				introjs.nextStep();
			}
		}
	});
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).effect("transfer", { to: $(selector2)}, 2000).addClass(".ui-effects-transfer", function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function yearDevideWithFour(callBackFunction) {
	$("#ifCondition").effect( "highlight", {color:"yellow"}, 1000, function() {
		tweenmaxValueAnimation("#ifCondition", "#firstIf", function() {
			flipEffect("#variable1", $("#inputYear").val(), function() {
				$("#line1").append("<span class='ct-code-b-yellow margin-left-9' id='calculationSpan1'>"+
				"<span id='remainderFlip1' class='display-inline'>"+ $("#inputYear").val() + " % 4</span> == 0</span>");
				tweenmaxValueAnimationFromTop("#firstIf", "#line1", function() {
					var remainderResult = $("#inputYear").val() % 4;
					flipEffect($("#remainderFlip1"), remainderResult, function() {
						if (typeof callBackFunction === "function") {
							callBackFunction();
						}
					});
				});
			});
		});
	});
}

function yearDevideWithHundred(callBackFunction) {
	$(".introjs-prevbutton").hide();
	transferEffect("#ifStatement1", "#ifStatement2", function() {
		$("#line2").append("<span id='secondIf' class='opacity00 ct-code-b-yellow'>"+
		"<span id='variable2' class='display-inline'>year</span> % 100 == 0</span>");
		$("#line2").removeClass("opacity00");
		$("#ifConditionForCenturyYear").effect( "highlight", {color:"yellow"}, 1000, function() {
			tweenmaxValueAnimation("#ifConditionForCenturyYear", "#secondIf", function() {
				flipEffect("#variable2", $("#inputYear").val(), function() {
					$("#line3").append("<span class='margin-left-9' id='calculationSpan2'>"+
							"<span id='remainderFlip2' class='display-inline ct-code-b-yellow'>"+ $("#inputYear").val() + " % 100</span>"+
							"<span class='ct-code-b-yellow'> == 0</span></span>");
					tweenmaxValueAnimationFromTop("#line2", "#line3", function() {
						var remainderResult2 = $("#inputYear").val() % 100;
						flipEffect($("#remainderFlip2"), remainderResult2, function() {
							if (typeof callBackFunction === "function") {
								callBackFunction();
							}
						});
					});
				});
			});
		});
	});
}

function yearDevideWithFourHundred(callBackFunction) {
	$(".introjs-prevbutton").hide();
	transferEffect("#ifStatement2", "#ifStatement3", function() {
		$("#line4").append("<span id='thirdIf' class='opacity00 ct-code-b-yellow'>"+
		"<span id='variable3' class='display-inline'>year</span> % 400 == 0</span>");
		$("#line4").removeClass("opacity00");
		$("#elseIfCondition").effect( "highlight", {color:"yellow"}, 1000, function() {
			tweenmaxValueAnimation("#elseIfCondition", "#thirdIf", function() {
				flipEffect("#variable3", $("#inputYear").val(), function() {
					$("#line5").append("<span class='margin-left-9' id='calculationSpan3'>"+
							"<span id='remainderFlip3' class='display-inline ct-code-b-yellow '>"+ $("#inputYear").val() + " % 400</span>"+
							"<span class='ct-code-b-yellow '> == 0</span></span>");
					tweenmaxValueAnimationFromTop("#line4", "#line5", function() {
						var remainderResult3 = $("#inputYear").val() % 400;
						flipEffect($("#remainderFlip3"), remainderResult3, function() {
							if (typeof callBackFunction === "function") {
								callBackFunction();
							}
						});
					});
				});
			});
		});
	});
}

function secondIfElseConditionAnimation() {
	$(".introjs-prevbutton").hide();
	var remainderResult2 = $("#inputYear").val() % 100;
	if(remainderResult2 == 0) {
		$("#calculationSpan2").append("<span class='ct-code-b-turquoise' id='trueSpan2'> true</span>");
		$("#div2").after("<div id='div3'><ul class='dispaly-inline'><li class='opacity00' id='line4'>"+
				"</li></ul><br><span class='opacity00' id='line5'></span>");
		$("#trueSpan2").addClass("animated zoomIn").one('animationend', function() {
			$("#trueSpan2").after("<br><span id='evaluationSpan2'>Since the condition evaluates to <span class='ct-code-b-yellow'>true</span> the "+
			"control enters into next <span class='ct-code-b-yellow'>if</span> block.");
			var text = $("#evaluationSpan2").html();
			typing('#evaluationSpan2', text, typingInterval, 'white', function() {
				$(".introjs-prevbutton").show();
				nextButtonFucntion(function() {
		/** (year % 400) **/
					yearDevideWithFourHundred(function() {
						var remainderResult3 = $("#inputYear").val() % 400;
						if(remainderResult3 == 0) {
							$("#calculationSpan3").append("<span class='ct-code-b-turquoise' "+
									"id='trueSpan3'> true</span>");
							$("#trueSpan3").addClass("animated zoomIn").one('animationend', function() {
								$("#trueSpan3").after("<br><span id='evaluationSpan3'>Since the condition evaluates to "+
										"<span class='ct-code-b-yellow'>true</span> the control prints the statement within the inner "+
										"<span class='ct-code-b-yellow'>if</span> block.");
								var text = $("#evaluationSpan3").html();
								typing('#evaluationSpan3', text, typingInterval, 'white', function() {
									$(".introjs-prevbutton").show();
									nextButtonFucntion(function() {
										
										transferEffect("#ifStatement3", "#printLine1", function() {
											setTimeout(function() {
												introjs.nextStep();
											}, 1000);
										});
									});
								});
							});
						} else {
							$("#line5").append("<span class='ct-color-red' id='falseSpan1'> false</span>");
							$("#falseSpan1").addClass("animated zoomIn").one('animationend', function() {
								$("#falseSpan1").after("<br><span id='evaluationSpan4'>Since the condition evaluates to "+
										"<span class='ct-code-b-yellow'>false</span> the control prints the statement in inner "+
										"<span class='ct-code-b-yellow'>else</span> block.");
								var text = $("#evaluationSpan4").html();
								typing('#evaluationSpan4', text, typingInterval, 'white', function() {
									$(".introjs-prevbutton").show();
									nextButtonFucntion(function() {
										transferEffect("#ifStatement3", "#printLine2", function() {
											$("#elseSpan1").effect( "highlight", {color:"turquoise"}, 1000, function() {
												setTimeout(function() {
													introjs.nextStep();
												}, 1000);
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
	} else {
		$("#line3").append("<span class='ct-color-red' id='falseSpan2'> false</span>");
		$("#falseSpan2").addClass("animated zoomIn").one('animationend', function() {
			$("#falseSpan2").after("<br><span id='evaluationSpan5'>Since the condition evaluates to <span class='ct-code-b-yellow'>false</span> the "+
			"control prints the statement in the <span class='ct-code-b-yellow'>else</span> block.");
			var text = $("#evaluationSpan5").html();
			typing('#evaluationSpan5', text, typingInterval, 'white', function() {
				$(".introjs-prevbutton").show();
				nextButtonFucntion(function() {
					transferEffect("#ifStatement2", "#printLine3", function() {
						$("#elseSpan2").effect( "highlight", {color:"turquoise"}, 1000, function() {
							setTimeout(function() {
								introjs.nextStep();
							}, 1000);
						});
					});
				});
			});
		});
	}
}