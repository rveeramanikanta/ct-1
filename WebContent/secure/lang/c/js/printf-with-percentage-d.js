var intro;
var typingInterval = 1;
var tl = new TimelineLite();
var sopLineCount = 1;
var count = 0;

var printfWithPercentageDReady = function() {
	intro = introJs();
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
			steps : [{
				element :'#printfDefinition',
				intro :'',
				tooltipClass : "hide"
			},{
				element :'#program',
				intro :'',
				//tooltipClass : "hide"
			},{
				element :'#VariableDeclararion',
				intro :'',
				//tooltipClass : "hide"
			},{
				element :'#animationDiv',
				intro :'',
				tooltipClass : "hide"
			},{
				element :'#sopLine1',
				intro :'',
				//tooltipClass : "hide"
			},{
				element :'#outputDiv',
				intro :'',
				tooltipClass : "hide"
			},{
				element :'#sopLine2',
				intro :'',
				//tooltipClass : "hide"
			},{
				element :'#outputDiv',
				intro :'',
				tooltipClass : "hide"
			},{
				element :'#sopLine3',
				intro :'',
				//tooltipClass : "hide"
			},{
				element :'#outputDiv',
				intro :'',
				tooltipClass : "hide"
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
				case "program" :
					
				break;
				
				case "VariableDeclararion" :
					$("#numberDiv1").addClass("opacity00");
				break;
				case "animationDiv" :
					
				break;
				case "sopLine" + sopLineCount  :
					if (intro._currentStep == 4) {
						if (intro._direction == "backward") {
							$("#outputAValue1").text("");
							}
					} else if (intro._currentStep == 6 ) {
						if (intro._direction == "backward") {
							$("#outputtext2").addClass("opacity00");
							$("#outputAValue2").text("");	
							}
					} else  if (intro._currentStep == 8) {
						
					}
				break;
				case "outputDiv" :
					if (intro._currentStep == 5) {
						
					} else if (intro._currentStep == 7) {
						
					} else if (intro._currentStep == 9) {
						
					}
				break;
				case "sopLine3":
					
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
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		$('.introjs-helperLayer').one('transitionend', function() {
			switch (elementId) {
				case "program" :
					$("#printfDefinition").addClass("z-index1000000");
					//$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we will learn how we can use the '
							+ '<span class = "ct-code-b-yellow">%d</span> format character in '
							+ ' <span class = "ct-code-b-yellow">printf()</span> function to '
							+ 'print the value stored in an integer variable.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
						$('.introjs-nextbutton').show();
					});
				break;
				
				case "VariableDeclararion" :
					$("#VariableDeclararion").removeClass("z-index1000000");
					$('.introjs-tooltip').removeClass('hide');
					text = 'We are declaring and initializing an integer variable '
							+ '<span class = "ct-code-b-yellow">a</span> to '
							+ '<span class = "ct-code-b-yellow">34</span>.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				break;
				case "animationDiv" :
					setTimeout(function() {
						if (intro._direction=="forward") {
							transferEffect('#VariableDeclararion', '#numberDiv1', function() {
							
							
						intro.nextStep()
							});
						} else {
						intro.previousStep()
						}
						}, 500);
					
						
					
				break;
				case "sopLine" + sopLineCount  :
					if (intro._currentStep == 4) {
					//	$('.introjs-tooltip').removeClass('hide');
						text = 'The <span class="ct-code-b-yellow">printf()</span> function prints '
								+ 'the value stored in the variable <span class="ct-code-b-yellow">a</span> '
								+ 'using the <span class="ct-code-b-yellow">%d</span> format character'
								+ ' without printing any other text.';
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							$('.introjs-nextbutton,.introjs-prevbutton').show();
						});
					} else if (intro._currentStep == 6 ) {
						//$('.introjs-tooltip').removeClass('hide');
						text = 'In this example we will learn how we can combain '
								+ 'text and print the number at the end of the text.';
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							$('.introjs-nextbutton,.introjs-prevbutton').show();
						});
					} else  if (intro._currentStep == 8) {
					//	$('.introjs-tooltip').removeClass('hide');
						text = 'In this <span class="ct-code-b-yellow">printf</span> statement '
								+ 'we will learn how the <span class="ct-code-b-yellow">%d</span>'
								+ ' format character can be in the middle of a text that is printed.';
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							$('.introjs-nextbutton,.introjs-prevbutton').show();
						});
					}
				break;
				case "outputDiv" :
					if (intro._currentStep == 5) {
						printDecimalValue();
					} else if (intro._currentStep == 7) {
						if (intro._direction == "backward") {
					
							sopLineCount--
						
							setTimeout(function(){
							intro.previousStep();
							}, 500);
						} else {
						$("#text" + sopLineCount).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 800);
						$("#outputtext"  + sopLineCount).text("The value of a = ").addClass("visibility-hidden");
						$("#text" + sopLineCount).effect( "transfer", { to: $("#outputtext"  + sopLineCount), className: "ui-effects-transfer" }, 800 , function(){
							$("#text" + sopLineCount).removeClass("z-index1000000")
							$("#outputtext"  + sopLineCount).removeClass("visibility-hidden");
							$("#outputtext2").removeClass("opacity00");
							printDecimalValue1();
							
						});
						}
					} else if (intro._currentStep == 9) {
						$("#text" + sopLineCount).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 800);
						$("#outputtext"  + sopLineCount).text("The value of a : ").addClass("visibility-hidden");
						$("#text" + sopLineCount).effect( "transfer", { to: $("#outputtext"  + sopLineCount), className: "ui-effects-transfer" }, 800 , function(){
							$("#text" + sopLineCount).removeClass("z-index1000000")
							$("#outputtext"  + sopLineCount).removeClass("visibility-hidden");
								printDecimalValue2();
						});
					}
				break;
				case "sopLine3":
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$('.introjs-helperLayer').one('transitionend', function() {
						count++;
						$('.introjs-tooltip').removeClass('hide');
						text = 'This statement will not show any  <span class="ct-code-b-red">error</span>, '
								+ 'Here we are use only one format specifier (i.e.) <span class="ct-code-b-yellow">%d</span>'
								+ ' but we are use two arguments (i.e.) <span class="ct-code-b-yellow">a</span> and'
								+ ' <span class="ct-code-b-yellow">b</span>. In this case its follow left to right rule. so '
								+ '<span class="ct-code-b-yellow">a</span> value will be printed';
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
							$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'"
							 	+ "onclick='aValuePrint1()'>Next &#8594;</a>");
						});
					});
				break;
				case "restartBtn":
					$("#printfDefinition").removeClass("z-index1000000");
					$("#restartBtn").removeClass('visibility-hidden');
				break;
			}
		});
	});
	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide(); 
	
	TweenMax.to('#printfDefinition', 1, {opacity: 1, onComplete: function() {
		$('.introjs-duplicate-nextbutton').removeClass('opacity00').addClass("animated zoomIn").one('animationend', function() {
			$('.introjs-duplicate-nextbutton').click(function() {
				$('#bodyOfTheText').removeClass('opacity00');
				$(".introjs-duplicate-nextbutton").remove();
				intro.nextStep();
			});
		});
	}});
	
	$('#restartBtn').click(function() {
		location.reload();
	});
}

function printDecimalValue() {
	setTimeout(function() {
		if (intro._direction == "forward") {
	$(".introjs-duplicate-nextbutton").remove();
	highlightFunction("#persentageD" + sopLineCount, "z-index1000000", function() {
		highlightFunction("#aValue" + sopLineCount, "z-index1000000", function() {
			$("#aValueAnimation").removeClass("visibility-hidden");  
			fromEffectWithTweenMax("#aValue" + sopLineCount, "#aValueAnimation", true, function() {
				$("#aValue" + sopLineCount).removeClass("z-index1000000");
				$("#persentageD" + sopLineCount).removeClass("z-index1000000");
	  			$('#addressValue1').addClass('circle-css z-index1000000').effect("highlight", {color: 'yellow'}, 1000, function() {
	  				$('#addressValue1').removeClass('circle-css z-index1000000');
	  					$("#outputAValue" + sopLineCount).text($("#addressValue1").text());
				  		fromEffectWithTweenMax("#addressValue1", "#outputAValue" + sopLineCount, false,function() {
				  			sopLineCount++;
							intro.nextStep();
			  			});
	  			});
		  		});
		  	});
		});
				  		     } else {
									sopLineCount--;
									intro.previousStep();
								}
						 
		}, 500);
}
	function printDecimalValue1() {
		setTimeout(function() {
			if (intro._direction == "forward") {
			$("#outputAValue" + sopLineCount).text($("#addressValue1").text());
			fromEffectWithTweenMax("#addressValue1", "#outputAValue" + sopLineCount, false,function() {
  			
  			sopLineCount++;
			intro.nextStep();
  		});
  		}/* else {
  			alert("going 2nd step")
  			//sopLineCount--;
			intro.previousStep();
  		}*/
  		
		}, 500);
	}
	function printDecimalValue2() {
		if (intro._direction == "forward") {
			$(".introjs-duplicate-nextbutton").remove();
			highlightFunction("#persentageD" + sopLineCount, "z-index1000000", function() {
				highlightFunction("#aValue" + sopLineCount, "z-index1000000", function() {
					$("#aValueAnimation").removeClass("visibility-hidden");  
					fromEffectWithTweenMax("#aValue" + sopLineCount, "#aValueAnimation", true, function() {
						$("#aValue" + sopLineCount).removeClass("z-index1000000");
						$("#persentageD" + sopLineCount).removeClass("z-index1000000");
			  			$('#addressValue1').addClass('circle-css z-index1000000').effect("highlight", {color: 'yellow'}, 1000, function() {
	  			$("#outputAValue" + sopLineCount).text($("#addressValue1").text());
				 fromEffectWithTweenMax("#addressValue1", "#outputAValue" + sopLineCount, false, function() {
					
				  sopLineCount++;
		  			$("#text" + sopLineCount).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 1000);
					$("#outputtext"  + (sopLineCount + 1)).text(" can be included in between text. ").addClass("visibility-hidden");
					$("#text" + sopLineCount).effect( "transfer", { to: $("#outputtext"  + (sopLineCount + 1)), className: "ui-effects-transfer" }, 1500 , function() {
					$("#text" + sopLineCount).removeClass("z-index1000000")
					$("#outputtext"  + (sopLineCount + 1)).removeClass("visibility-hidden");
					setTimeout(function() {
					sopLineCount++;
					intro.nextStep();
							});
						});
				 	});
				});
			  });
			});
					},800);
					} else {
						sopLineCount--;
						intro.nextStep();
					}
			
  		
}

//*******Text highlight function*****
function highlightFunction(selector1, selector2, callBackFunction) {
	$(selector1).addClass(selector2).effect( "highlight",{color: 'yellow'},500, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

//********* Transfer effect function ********* 
function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
		$(selector2).removeClass("opacity00");
		$(selector1).removeClass("z-index1000000");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

//*****setTimeout function to intro go next step step*****
function introNextStep() {
	setTimeout(function() {
		intro.nextStep();
	},800);
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
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		$(selector2).removeAttr("style").css("color", "white");
		$("#dummy").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

//typing function
function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval" : typingInterval,
		"cursor_color" : cursorColor
	}, function() {
		$(typingId).removeClass("typingCursor");
		typingCallbackFunction();
		intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
		$('.introjs-tooltip').show();
	});
} 