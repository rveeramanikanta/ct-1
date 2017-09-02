var typingInterval = 10;

var numberCheckingEvenOrOddReady = function() {
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
			tooltipClass : 'hide'
		}, {
			element : "#oddNumberExample",
			intro : '',
		}, {
			element : "#evenNumberExample",
			intro : '',
		} , {
			element : '#totalDiv',
			intro : '',
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch(elementId) {
		case 'infoDiv' :
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$("#list1").fadeTo(300, 1, function() {
				zoomingEffect($('#nextButton'), function() {
					$('.user-btn').click(function() {
						$('.user-btn').remove();
						introjs.nextStep();
					});
				})
			});	
			break;
		case 'oddNumberExample':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#oddNumberExample").removeClass("opacity00");
				var text = "Let us consider a number <span class='ct-code-b-yellow'>45</span> and verify if it is <span class='ct-code-b-yellow'>"+
					"even</span> or <span class='ct-code-b-yellow'>odd</span>.";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					$('.introjs-tooltipbuttons').append("<a class='introjs-button user-btn' " +
					"onclick=oddNumberExample()>Next &#8594;</a>");
				});
			});
			break;
		case 'evenNumberExample':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#evenNumberExample").removeClass("opacity00");
				var text = "Let us consider another number <span class='ct-code-b-yellow'>78</span> and verify if it is "+
				"<span class='ct-code-b-yellow'>even</span> or <span class='ct-code-b-yellow'>odd</span>.";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
				//	evenNumberExample();
					$('.introjs-tooltipbuttons').append("<a class='introjs-button user-btn' " +
					"onclick=evenNumberExample()>Next &#8594;</a>");
				});
			});
			break;
		case 'totalDiv':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#totalDiv").removeClass("opacity00");
				$("#conditionDiv").removeClass("opacity00");
				var text = $("#variablesId").html();
				typing('#variablesId', text, typingInterval, 'white', function() {
					var text = "Let us write a sample <span class='ct-code-b-yellow'>C</span> code to determine the given number "+
					"is <span class='ct-code-b-yellow'>even</span> or <span class='ct-code-b-yellow'>odd</span>."+ 
						"<br>Here we declare variables.<br> You can also change the number.<br><br>" +
					"The value <span class='tooltip-text-edit ct-code-b-yellow'> " + ($("#integerNumber").text()) + "</span> stored " +
					"in variable <span class='ct-code-b-yellow'>number</span>.<br>";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$("#integerNumber").attr({contenteditable: 'true'});
						$("#integerNumber").addClass("blinking-once");
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						charAtEnd('integerNumber');
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							opearationRepeatFunction();
						});
					});
				});
			});
			break;
		}
	});
	introjs.start();
}

function opearationRepeatFunction() {
	$("#integerNumber").attr({contenteditable: 'false'});
	var text = "Now let us write the if condition to verify the given number is <span class='ct-code-b-yellow'>even</span> or "+
	"<span class='ct-code-b-yellow'>odd</span>."
	typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {	
		nextButtonFucntion(function() {
			var text = $("#ifLine").html();
			typing('#ifLine', text, typingInterval, 'white', function() {
				TweenMax.to($("#print1"), 1, {opacity: 1, onComplete: function() {
					var text = $("#elseLine").html();
					typing('#elseLine', text, typingInterval, 'white', function() {
						TweenMax.to($("#print2"), 1, {opacity: 1, onComplete: function() {
							TweenMax.to($("#closeCurlyBrace"), 1, {opacity: 1, onComplete: function() {
								nextButtonFucntion(function() {
									executionDivFunction();
								});
							}});
						}});
					});
				}});
			});
		});
	});
}

function executionDivFunction() {
	var text = "Let us check <span class='ct-code-b-yellow'>" + $("#integerNumber").text() + "</span> is "+
	"<span class='ct-code-b-yellow'>even number</span> or <span class='ct-code-b-yellow'>odd number</span>.";
	typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
		tweenmaxValueAnimation($("#ifCondition"), $("#remainderExecution"), function() {
			flipEffect($("#remainderExecutionSpan"), $("#integerNumber").text(), function() {
				zoomingEffect($("#executionDiv"), function() { 
					$("#inputNumberId").append($("#integerNumber").text());	
					$("#inputNumber").removeClass("opacity00");
					var quotient = $("#integerNumber").text() / 2;
					quotient = ~~quotient;
					$("#quotient3").append(quotient);
					$("#calculation3").append("2" + "x" + $("#quotient3").text()).addClass("opacity00");
					var value1 = 2 * $("#quotient3").text();
					$("#inputFirstNum").append($("#integerNumber").text());
					$("#inputSecondNum").append(value1);
					var value2 = ($("#inputFirstNum").text()-$("#inputSecondNum").text());
					divisionPartAnimation("#openBrace3", "#closedBrace3", "#multiplyNumber3", "#multiplyNumber4", "#quotient3", "#calculation3",
						value1, "#borderTop3", "#inputNumberId", "#reminder3Span", "#inputFirstNum", "#inputSecondNum", value2, function() {
						if (value2 == 0) {
							$("#fontCheck").append('<i class="fa fa-check" aria-hidden="true" style="color: green;"></i>');
							var text = "The condition evaluates <span class='ct-code-b-yellow'>true</span>.";
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								nextButtonFucntion(function() {
									finalResultStepFunction();
								});
							});
						} else {
							$("#fontCheck").append('<i class="fa fa-times" aria-hidden="true" style="color: red;"></i>');
							var text = "The condition evaluates <span class='ct-code-b-yellow'>false</span>.";
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								nextButtonFucntion(function() {
									finalResultStepFunction();
								});
							});
						}
					});
				});
			});
		});
	});
}

function finalResultStepFunction() {
	if ($("#reminder3Span").text() == 0 ) {	
		$("#ifCondition").addClass("blinking");
		transferEffect($("#ifCondition"), $("#print1"), function() {
			var text = "Since the remainder of <span class='ct-code-b-yellow'>" + $("#integerNumber").text() + "</span> obtained is "+
			"<span class='ct-code-b-yellow'>" + $("#reminder3").text() + "</span>. So the control comes into the if block and prints "+
			"<span class='ct-code-b-yellow'>" + $("#integerNumber").text() + "</span> is <span class='ct-code-b-yellow'>even number</span>.";
			typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
				nextButtonFucntion(function() {
					recursionFunction();
				});
				});
			});
	} else {
		$("#ifCondition").addClass("blinking");
		transferEffect($("#ifCondition"), $("#print2"), function() {
			var text = "Since the remainder of <span class='ct-code-b-yellow'>" + $("#integerNumber").text() + "</span> obtained is "+
			"<span class='ct-code-b-yellow'>" + $("#reminder3").text() + "</span>. So the control comes into the else block and prints "+
			"<span class='ct-code-b-yellow'>" + $("#integerNumber").text() + "</span> is <span class='ct-code-b-yellow'>odd number</span>.";
			typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
				nextButtonFucntion(function() {
					recursionFunction();
				});
			});
		});
	}
}

function recursionFunction() {
	$("#ifLine, #elseLine, #closeCurlyBrace, #remainderExecution, #multiplyNumber4, #borderTop3, #executionDiv").addClass("opacity00");
	$("#inputFirstNum, #inputSecondNum, #reminder3Span, #inputNumber").addClass("opacity00");
	$("#closeCurlyBrace, #print1, #print2, #quotient3, #calculation3, #openBrace3, #closedBrace3").removeAttr("style");
	$("#inputNumberId, #quotient3, #calculation3, #inputFirstNum, #inputSecondNum, #fontCheck, #reminder3Span").text("");
	$("#reminder3Span").append("<span class='opacity00' id='inputFirstNum'></span> - <span class='opacity00' id='inputSecondNum'></span>");
	$("#executionDiv").removeClass("animated zoomIn");
	$("#integerNumber").removeClass("blinking-once");
	$("#ifCondition").removeClass("blinking");
	
	$("#variablesId").addClass("blinking");
	var text = "Now you can change the number and verify the condition by click on the <b>next</b> button otherwise click to <b>restart</b>.";
	typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
		$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
		$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn-restart' id='restart'><i class='fa fa-refresh'></i>&nbsp;Restart</a>");
		
		$(".user-btn").click(function() {
			$(".user-btn").remove();
			$(".user-btn-restart").remove();
			var text = "You can edit the number.<br>";
			typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
				$("#integerNumber").attr({contenteditable: 'true'});
				$("#integerNumber").addClass("blinking-once");
				$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
				charAtEnd('integerNumber');
				$(".user-btn").click(function() {
					$(".user-btn").remove();
					opearationRepeatFunction();
				});
			});
		});
		$(".user-btn-restart").click(function() {
			$(".user-btn-restart").remove();
			location.reload();
		});
	});
}


function typing(typingId, text, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).removeClass("opacity00");
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
	TweenMax.from(selector2, 0.5, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function tweenmaxValueAnimationWithTop(selector1, selector2, callBackFunction) {  //left: leftLength,
	var l3 = $(selector1).offset();
	var l4 = $(selector2).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	selector2.removeClass("opacity00");
	TweenMax.from(selector2, 0.5, {top: topLength, left: leftLength, onComplete: function() {
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

function transferEffect(selector1, selector2, callBackFunction) {
	selector1.effect("transfer", { to: selector2}, 2000).addClass(".ui-effects-transfer", function() {
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

function nextButtonFucntion(callBackFunction) {
	$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
	$(".user-btn").click(function() {
		$(".user-btn").remove();
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
	
	$("#integerNumber").keydown(function(e) {
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
	
	$("#integerNumber").on("keyup", function(e) {
		$('.length-error-text').remove();
		$(".tooltip-text-edit").text($("#integerNumber").text());
		if ($(this).text() == "") {
			$('.introjs-tooltiptext').append("<span class='ct-color-red length-error-text'><b>Please enter number.</b></span>");
			$('.user-btn').hide();
		} else {
			$('.user-btn').show();
		}
	});
}

function oddNumberExample() {
	$(".user-btn").remove();
	zoomingEffect($("#oddNumber"), function() {
		calucationForOddNumDivision();
	}); 
}

function calucationForOddNumDivision() {
//	$(".user-btn").remove();
	divisionPartAnimation("#openBrace1", "#closedBrace1", "#multiplyId", "#multiplyNumber1", "#quotient1", "#calculation1", '44', "#borderTop1", 
			"#oddNumberId", "#reminder1PopOver", "#firstNumber", "#secondNumber", '1', function() {
		$('#quotient1').popover({
			placement: 'right',
			html: true,
			trigger: "focus",
			content: 'Quotient',
		});
		$('#reminder1PopOver').popover({
			placement: 'left',
			html: true,
			trigger: "focus",
			content: 'Remainder',
		});
		$('#quotient1').popover('show');
		$('#reminder1PopOver').popover('show');
		nextButtonFucntion(function() {
			$('#quotient1').popover('hide');
			$('#reminder1PopOver').popover('hide');
			var text = "<span class='ct-code-b-yellow'>C</span> language provides a special operator called "+
			"<span class='ct-code-b-yellow'>modulus(%)</span> that is used to find out the remainder when a division is performed.";
			typing(".introjs-tooltiptext", text, typingInterval, 'white', function() {
				var text =$("#resultStep1").html();
				$("#resultStep1").removeClass("opacity00");
				typing("#resultStep1", text, 30, 'white', function() {
					TweenMax.to($("#equalZero1"), 1, {opacity: 1, onComplete: function() {
						nextButtonFucntion(function() {
							var text = "Since the remainder is <span class='ct-code-b-yellow'>1</span> so the number "+
							"<span class='ct-code-b-yellow'>45</span> is <span class='ct-code-b-yellow'>odd</span>.";
							typing(".introjs-tooltiptext", text, typingInterval, 'white', function() {
								$('.introjs-nextbutton').show();
							});
						});
					}});
				});
			});
		});
	});
	
}

function evenNumberExample() {
	$(".user-btn").remove();
	zoomingEffect($("#evenNumber"), function() {
		calucationForEvenNumDivision();
	});
}

function calucationForEvenNumDivision() {
	divisionPartAnimation("#openBrace2", "#closedBrace2", "#multiplyId", "#multiplyNumber2", "#quotient2", "#calculation2", '78', "#borderTop2", 
			"#evenNumberId", "#reminder2Span", "#firstNumberEven", "#secondNumberEven", '0', function() {
		nextButtonFucntion(function() {
			var text =$("#resultStep2").html();
			$("#resultStep2").removeClass("opacity00");
			typing("#resultStep2", text, 30, 'white', function() {
				TweenMax.to($("#equalZero2"), 1, {opacity: 1, onComplete: function() {
					var text = "Since the remainder is <span class='ct-code-b-yellow'>0</span> so the number "+
					"<span class='ct-code-b-yellow'>78</span> is <span class='ct-code-b-yellow'>even</span>.";
					typing(".introjs-tooltiptext", text, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
				}});
			});
		});
	});
}

function divisionPartAnimation(id1, id2, id3, id4, id5, id6, value1, id8, id9, id10, id11, id12, value2, callBackFunction) {
		TweenMax.to((id1), 1, {opacity: 1});
		TweenMax.to((id2), 1, {opacity: 1, onComplete: function() {
		$(id3).addClass('background-effect');
		tweenmaxValueAnimation(id3, id4, function() {
			$(id3).removeClass('background-effect');
			TweenMax.to($(id5), 1, {opacity: 1, onComplete: function() {
				$(id4).addClass('background-effect');
				$(id5).addClass('background-effect');
				TweenMax.to($(id6), 1, {opacity: 1, onComplete: function() {
					$(id4).removeClass('background-effect');
					$(id5).removeClass('background-effect');
					flipEffect($(id6), value1, function() {
						$(id8).removeClass("opacity00");
						$(id6).addClass('background-effect');
						$(id9).addClass('background-effect');
						$(id10).removeClass("opacity00");
	 					tweenmaxValueAnimation($(id9), $(id11));
						tweenmaxValueAnimation($(id6), $(id12), function() {
							$(id9).removeClass('background-effect');
							$(id6).removeClass('background-effect');
							flipEffect($(id10), value2, function() {
								if (typeof callBackFunction === "function") {
									callBackFunction();
								}
							});
						});
					});
				}});
			}});
		});
	}});
}