var intro;
var typingInterval = 1;
var tl = new TimelineLite();
var sopLineCount = 1;
var count = 0;

var nestedPrintfStatementsReady = function() {
	intro = introJs();
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
			steps : [{
				element :'#code', 
				intro :'',
			},{
				element :'#VariableDeclararion1', 
				intro :'',
				//tooltipClass : "hide"
			},{
				element :'#animationDiv',
				intro :'',
				tooltipClass : "hide"
			},{
				element :'#sopLine3',
				intro :'',
				//tooltipClass : "hide",
				animateStep : "percentageFormatCharacter"
			},{
				element :'#innerPrintf3',
				intro :'',
				tooltipClass : "hide",
				animateStep : "percentageFormatCharacter"
			},{
				element :'#sopLine3',
				intro :'',
				tooltipClass : "hide",
				animateStep : "outerPrintf"
			},{
				element :'#sopLine4',
				intro :'',
				//tooltipClass : "hide",
				animateStep : "printText"
			},{
				element :'#innerPrintf4',
				intro :'',
				animateStep : "printText"
			},{
				element :'#sopLine4',
				intro :'',
				//tooltipClass : "hide",
				animateStep : "outerPrintf1"
			},{
				element : "#restartBtn",
				intro : "Click to restart.",
				tooltipClass: "introjs-tooltip-min-width-custom",
				position : "right"
			}]
	});
	intro.onbeforechange(function(targetElement){
		var elementId = targetElement.id;
		
			switch (elementId) {
				case "VariableDeclararion" + sopLineCount :
					$("#numberDiv1").addClass("opacity00");
					$("#numberDiv2").addClass("opacity00");
				break;
				
				case "animationDiv" :
					
				break;
				
				case "sopLine" + sopLineCount :
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "percentageFormatCharacter":
							$("#outputAValue, #outputComma,#outputBValue").text("");
						break;
						
						case "outerPrintf" :
							$("#outputCountAandBValue").addClass("opacity00");
						break;
						
						case "outerPrintf1" :
							
						break;
						
						case "printText" :
							
						break;
					}
				break;
				
				case "innerPrintf" + sopLineCount :
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "percentageFormatCharacter":
							
						break;
						
						case "printText" :
							$(".introjs-duplicate-backbutton").remove();
						break;
					}
				break;
				
				
			}
		
	});
	intro.onafterchange(function(targetElement){
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		// ********************** start ************back button logic
				
				if (intro._introItems[intro._currentStep]["tooltipClass"] == "hide") {
					intro._introItems[intro._currentStep]["animation"] = "repeat";
				}
				
				if (intro._introItems[intro._currentStep]["isCompleted"]) {
					if (intro._currentStep != 0) {
						$('.introjs-prevbutton').show();
					}
					$('.introjs-nextbutton').show();
					return;
				}
				
				if (intro._introItems[intro._currentStep]["animation"] != "repeat") {
					intro._introItems[intro._currentStep]["isCompleted"] = true;
				}
				
				// ********************** end ************back button logic
		var elementId = targetElement.id;
		$('.introjs-nextbutton').hide();
		$('.introjs-helperLayer').one('transitionend', function() {
			switch (elementId) {
				case "VariableDeclararion" + sopLineCount :
					$('[contenteditable="false"]').attr('contenteditable', 'true');
					$("#VariableDeclararion1").removeClass("z-index1000000");
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are declaring and initializing the integer variables'
						+ ' <span class="ct-code-b-yellow">a</span> and'
						+ ' <span class="ct-code-b-yellow">b</span>.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				break;
				
				case "animationDiv" :
					setTimeout(function() {
						if (intro._direction=="forward") {
							$("#VariableDeclararion" + sopLineCount).addClass("z-index1000000");
							$("#addressValue1").text($("#number1").text());
							$("#addressValue2").text($("#number2").text());
							transferEffect('#VariableDeclararion' + sopLineCount, '#animationDiv', function() {
								$("#numberDiv1").removeClass("opacity00");
								$("#numberDiv2").removeClass("opacity00");
								$("#addressDiv1").removeClass("opacity00");$("#addressDiv2").removeClass("opacity00");
									sopLineCount += 2;
									//alert(sopLineCount)
									setTimeout(function() {
										intro.nextStep()
									}, 500);
							});
						} else {
							sopLineCount -= 2;
							//alert(sopLineCount)
							intro.previousStep()
							}
							}, 500);
				
				break;
				
				case "sopLine" + sopLineCount :
					$("#VariableDeclararion2").removeClass("z-index1000000");
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "percentageFormatCharacter":
							//$('.introjs-tooltip').removeClass('hide');
							text = 'In this statement we will notice that we are calling'
									+ ' the <span class="ct-code-b-yellow">printf()</span> function inside '
									+ ' another <span class="ct-code-b-yellow">printf()</span> function call.<br/><br/>'
									+ ' Whenever we nested <span class="ct-code-b-yellow">printf()</span> function call like this, '
									+ ' first the inner <span class="ct-code-b-yellow">printf()</span> function containing'
									+ '  <span class="ct-code-b-yellow">printf("%d,%d", a, b)</span> will be evaluated '
									+ ' whose return value is substituted in the outter '
									+ '<span class="ct-code-b-yellow">printf()</span> function.';
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-nextbutton,.introjs-prevbutton').show();	
							});
						break;
						
						case "outerPrintf" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'The inner <span class="ct-code-b-yellow">printf()</span> function returns '
									+ ' the number of characters it has printed.<br/><br/>'
									+ ' First prints the value and then return the number of characters it has printed to the '
									+ ' standared output.<br/><br/>Since the inner <span class="ct-code-b-yellow">printf()</span>'
									+ ' function has actually printed '
									+ ' <span class="ct-code-b-yellow">14,24</span> (a total of <span class="ct-code-b-yellow">5</span>'
									+ ' characters) it will return <span class="ct-code-b-yellow">5</span> to the outer'
									+ ' <span class="ct-code-b-yellow">printf()</span> function.<br/><br/> The outer'
									+ ' <span class="ct-code-b-yellow">printf()</span> function would  '
									+ ' print the value <span class="ct-code-b-yellow">5</span> using '
									+ ' <span class="ct-code-b-yellow">%d</span> and the output will appear next to the '
									+ ' existing output in the console.'
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'"
										 + "onclick=nestedPrintfFunction()>Next &#8594;</a>");
							
							});
							break;
						
						case "outerPrintf1" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'The value <span class="ct-code-b-yellow">10</span> return by the'
									+ ' inner <span class="ct-code-b-yellow">printf()</span> function'
									+ ' is substituted with <span class="ct-code-b-yellow">%d</span> '
									+ ' present in the outer <span class="ct-code-b-yellow">printf()</span> function.'
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'"
										 + "onclick=outerPrintf()>Next &#8594;</a>");
							});
						break;
						
						case "printText" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'This is another example of nested <span class="ct-code-b-yellow">printf()</span> function calls.';
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-tooltipbuttons').prepend("<a class='introjs-button introjs-duplicate-backbutton'>&#8592 Back</a>")
								$('.introjs-nextbutton').show();
								$(".introjs-duplicate-backbutton").click(function() {
									$(".introjs-duplicate-backbutton").remove();
									setTimeout(function () {
									sopLineCount--;
									//alert(sopLineCount)
									intro.previousStep()
									}, 300);
								});
								
							});
						break;
					}
				break;
				
				case "innerPrintf" + sopLineCount :
					$("#VariableDeclararion2").removeClass("z-index1000000");
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "percentageFormatCharacter":
							$('.introjs-tooltip').removeClass('hide');
							text = 'The <span class="ct-code-b-yellow">printf()</span> function call returns the '
									+ 'number of characters it has printed so the inner '
									+ ' <span class="ct-code-b-yellow">printf()</span> function has prints'
									+ ' <span class="ct-code-b-yellow">14,24</span> totally there are '
									+ ' <span class="ct-code-b-yellow">5</span> characters.';
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-tooltipbuttons')/*prepend("<a class='introjs-button introjs-duplicate-backbutton'>&#8592 Back</a>")*/.append("<a class='introjs-button introjs-duplicate-nextbutton'"
										 + "onclick=innerPrintfWithNumbers()>Next &#8594</a>");
								/*$('.introjs-duplicate-backbutton').click(function() {
									$('.introjs-duplicate-backbutton').remove();
									intro.previousStep();
								});*/
							});
						break;
						
						case "printText" :
							
							$('.introjs-tooltip').removeClass('hide');
							text = 'The inner <span class="ct-code-b-yellow">printf()</span> function '
									+ 'directly prints the string '
									+ 'literal <span class="ct-code-b-yellow">Codetantra</span>.<br/><br/> Hence '
									+ 'the inner <span class="ct-code-b-yellow">printf()</span> function would '
									+ ' return the number of characters it has printed, which is equal to'
									+ ' <span class="ct-code-b-yellow">10</span> to the outer '
									+ ' <span class="ct-code-b-yellow">printf()</span> function.';
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'"
										 + "onclick=printCodeTantraText()>Next &#8594;</a>");
							});
						break;
					}
				break;
				
				case "restartBtn":
						$("#restartBtn").removeClass('visibility-hidden');
						$(".introjs-tooltip").css({"min-width": "115px"});
				break;
			}
		});
	});
	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide(); 
	
	//$('.introjs-tooltip').removeClass('hide');
	text = 'Here, we will learn how the nested <span class="ct-code-b-yellow">printf()</span> function works.';
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
	
	$('#restartBtn').click(function() {
		location.reload();
	});
}

function setTimeToIntroGoNextStep() {
	setTimeout(function() {
		intro.nextStep();
	},800);
}

function outerPrintf() {
	setTimeout(function() {
		if (intro._direction=="forward") {
			$(".introjs-duplicate-nextbutton").remove();
			$("#outputDiv").addClass("z-index1000000");
			$('.introjs-tooltip').addClass('hide');
			$("#innerPrintfText").effect("highlight",{color: '#ffff33'}, 500);
			$("#innerPrintfText").effect("transfer", { to: $("#totalCharacters"), className: "ui-effects-transfer" }, 1000 , function() {
				$("#totalCharacters").removeClass("opacity00");
				$("#outputDiv").removeClass("z-index1000000");
					intro.nextStep()
					});
		} else {
				intro.previousStep()
		}
	}, 500);
}

function nestedPrintfFunction() {
		setTimeout(function() {
				$('.introjs-tooltip').addClass('hide');
				$(".introjs-duplicate-nextbutton").remove();
				$("#outputDiv").addClass("z-index1000000");
				$("#innerPrintfValue").effect( "highlight",{color: '#ffff33'}, 500);
				$("#innerPrintfValue").effect( "transfer", { to: $("#outputCountAandBValue"), className: "ui-effects-transfer" }, 1000 , function() {
					$("#outputCountAandBValue").removeClass("opacity00");
					$("#outputDiv").removeClass("z-index1000000");
					sopLineCount++;
					intro.nextStep()
					});
			}, 500);
		
	
}

function innerPrintfWithNumbers() {
	setTimeout(function() {
		if (intro._direction=="forward") {
			$(".introjs-duplicate-nextbutton").remove();
			//$('.introjs-tooltip').addClass('hide');
			$("#outputDiv").addClass("z-index1000000");
				innerPrintfUsingPercentages("#persentageD1", "#aValue", "#aValueAnimation", "#addressValue1", "#outputAValue", function() {
					$("#separateOperator").addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500, function() {
					$("#separateOperator").removeClass("z-index1000000");
						transferEffect('#separateOperator', '#outputComma', function() {
							$("#outputComma").text(",");
								innerPrintfUsingPercentages("#persentageD2", "#bValue", "#bValueAnimation", "#addressValue2", "#outputBValue", function() {
									$("#outputCountAandBValue").text($("#number1").text().length + $("#number2").text().length+1).addClass("opacity00");
									$("#innerPrintfValue").effect( "highlight",{color: '#ffff33'}, 500);
									$("#outputDiv").removeClass("z-index1000000");
									$(".introjs-prevbutton, .introjs-nextbutton").show();
									});
						});
					});
				});
		}
		}, 500);
	
}

function printCodeTantraText() {
	setTimeout(function() {
		if (intro._direction=="forward") {
	$(".introjs-duplicate-nextbutton").remove();
	$('.introjs-tooltip').addClass('hide');
	$("#outputDiv").addClass("z-index1000000");
	$("#innerPrintfText").text("Codetantra").addClass("opacity00");	
	$("#number4").effect("highlight",{color: '#ffff33'}, 500);
	$("#number4").effect("transfer", { to: $("#innerPrintfText"), className: "ui-effects-transfer" }, 1000 , function() {
		$("#innerPrintfText").removeClass("opacity00");	
		$("#totalCharacters").text($("#innerPrintfText").text().length).addClass("opacity00");
		$("#outputDiv").removeClass("z-index1000000");
		intro.nextStep()
	});
	} else {
			intro.previousStep()
			}
			}, 500);
	
}

function innerPrintfUsingPercentages(selector1, selector2, selector3, selector4, selector5, callBackFunction) {
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500, function() {
		$(selector1).removeClass("z-index1000000");
		$(selector2).addClass("z-index1000000").effect("highlight", {color: '#ffff33'}, 500, function() {
			$(selector2).removeClass("z-index1000000");
			fromEffectWithTweenMax(selector2, selector3, true, function() {
				$(selector4).addClass("circle-css z-index1000000").effect("highlight", {color: '#ffff33'}, 500, function() {
					$(selector4).removeClass("circle-css z-index1000000");
					$(selector5).text($(selector4).text());
					fromEffectWithTweenMax(selector4, selector5, false, function() {
						if (typeof callBackFunction === "function") {
							callBackFunction();
						}
					});
				});
			});
		});
	});
}
//*****From effect animation*****
function fromEffectWithTweenMax(selector1, selector2, flag, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).css({"color" : "red", "z-index" : "99999999"}).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	if (flag) {
		$("body").append("<span id='dummy' style='position: relative; z-index: 9999999; color: white;'>" + $(selector2).text() + "</span>");
		$("#dummy").offset({
			"top" : l2.top,
			"left" : l2.left
		});
	}
	TweenMax.from($(selector2), 0.6, {top: topLength, left: leftLength, onComplete: function() {
		$(selector2).removeAttr("style").css("color", "white");
		$("#dummy").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

//********* Transfer effect function *********
function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass('z-index1000000').effect( "highlight",{color: '#ffff33'}, 500, function() {
		$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 500 , function() {
			$(selector1).removeClass('z-index1000000');
			$(selector2).removeClass('opacity00');
			if (typeof callBackFunction === "function") {
					callBackFunction();
			}
		});
	});
}

//typing function
function typing(typingId, typingContent, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval" : typingInterval,
		"cursor_color" : 'white',
	}, function() {
		$(typingId).removeClass("typingCursor");
		typingCallbackFunction();
		intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
		$('.introjs-tooltip').show();
	});
} 