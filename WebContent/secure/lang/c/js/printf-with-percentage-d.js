var introcode;
var typingInterval = 5;
var tl = new TimelineLite();
var sopLineCount = 1;
var count = 0;

var printfWithPercentageDReady = function() {
	introcode = introJs();
	introcode.setOptions({
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
				tooltipClass : "hide"
			},{
				element :'#VariableDeclararion',
				intro :'',
				tooltipClass : "hide"
			},{
				element :'#animationDiv',
				intro :'',
				tooltipClass : "hide"
			},{
				element :'#sopLine1',
				intro :'',
				tooltipClass : "hide"
			},{
				element :'#outputDiv',
				intro :'',
				tooltipClass : "hide"
			},{
				element :'#sopLine2',
				intro :'',
				tooltipClass : "hide"
			},{
				element :'#outputDiv',
				intro :'',
				tooltipClass : "hide"
			},{
				element :'#sopLine3',
				intro :'',
				tooltipClass : "hide"
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
	introcode.onafterchange(function(targetElement){
		var elementId = targetElement.id;
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		$('.introjs-helperLayer').one('transitionend', function() {
			switch (elementId) {
				case "program" :
					$("#printfDefinition").addClass("z-index1000000");
					$('.introjs-tooltip').removeClass('hide');
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
						$('.introjs-nextbutton').show();
					});
				break;
				case "animationDiv" :
					transferEffect('#VariableDeclararion', '#numberDiv1', function() {
						introNextStep();
					});
				break;
				case "sopLine" + sopLineCount  :
					if (introcode._currentStep == 4) {
						$('.introjs-tooltip').removeClass('hide');
						text = 'The <span class="ct-code-b-yellow">printf()</span> function prints '
								+ 'the value stored in the variable <span class="ct-code-b-yellow">a</span> '
								+ 'using the <span class="ct-code-b-yellow">%d</span> format character'
								+ ' without printing any other text.';
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							$('.introjs-nextbutton').show();
						});
					} else if (introcode._currentStep == 6 ) {
						$('.introjs-tooltip').removeClass('hide');
						text = 'In this example we will learn how we can combain '
								+ 'text and print the number at the end of the text.';
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							$('.introjs-nextbutton').show();
						});
					} else  if (introcode._currentStep == 8) {
						$('.introjs-tooltip').removeClass('hide');
						text = 'In this <span class="ct-code-b-yellow">printf</span> statement '
								+ 'we will learn how the <span class="ct-code-b-yellow">%d</span>'
								+ ' format character can be in the middle of a text that is printed.';
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							$('.introjs-nextbutton').show();
						});
					}
				break;
				case "outputDiv" :
					if (introcode._currentStep == 5) {
						printDecimalValue("decimalValueOnly");
					} else if (introcode._currentStep == 7) {
						$("#text" + sopLineCount).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 800);
						$("#outputtext"  + sopLineCount).text("The value of a = ").addClass("visibility-hidden");
						$("#text" + sopLineCount).effect( "transfer", { to: $("#outputtext"  + sopLineCount), className: "ui-effects-transfer" }, 800 , function(){
							$("#text" + sopLineCount).removeClass("z-index1000000")
							$("#outputtext"  + sopLineCount).removeClass("visibility-hidden");
							printDecimalValue("decimalValueOnly");
							
						});
					} else if (introcode._currentStep == 9) {
						$("#text" + sopLineCount).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 800);
						$("#outputtext"  + sopLineCount).text("The value of a : ").addClass("visibility-hidden");
						$("#text" + sopLineCount).effect( "transfer", { to: $("#outputtext"  + sopLineCount), className: "ui-effects-transfer" }, 800 , function(){
							$("#text" + sopLineCount).removeClass("z-index1000000")
							$("#outputtext"  + sopLineCount).removeClass("visibility-hidden");
								printDecimalValue("decimalValueOnly1");
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
	introcode.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide(); 
	
	TweenMax.to('#printfDefinition', 1, {opacity: 1, onComplete: function() {
		$('.introjs-duplicate-nextbutton').removeClass('opacity00').addClass("animated zoomIn").one('animationend', function() {
			$('.introjs-duplicate-nextbutton').click(function() {
				$('#bodyOfTheText').removeClass('opacity00');
				$(".introjs-duplicate-nextbutton").remove();
				introcode.nextStep();
			});
		});
	}});
	
	$('#restartBtn').click(function() {
		location.reload();
	});
}

function printDecimalValue(text) {
	$(".introjs-duplicate-nextbutton").remove();
	highlightFunction("#persentageD" + sopLineCount, "z-index1000000", function() {
		highlightFunction("#aValue" + sopLineCount, "z-index1000000", function() {
			$("#aValueAnimation").removeClass("visibility-hidden");  
			fromEffectWithTweenMax("#aValue" + sopLineCount, "#aValueAnimation", true, function() {
				$("#aValue" + sopLineCount).removeClass("z-index1000000");
				$("#persentageD" + sopLineCount).removeClass("z-index1000000");
	  			$('#addressValue1').addClass('circle-css z-index1000000').effect("highlight", {color: 'yellow'}, 1000, function() {
	  				$('#addressValue1').removeClass('circle-css z-index1000000');
	  				if (text == "decimalValueOnly") {
	  					$("#outputAValue" + sopLineCount).text($("#addressValue1").text());
				  		fromEffectWithTweenMax("#addressValue1", "#outputAValue" + sopLineCount, false,function() {
							setTimeout(function() {
								sopLineCount++;
								introcode.nextStep();
							},800);
						  });
	  				} else if (text == "decimalValueOnly1") {
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
									introcode.nextStep();
								},800);
							});
				  		});
  					} else {
  						
  					}
  				});
	  		});
	  	});
	});
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
		introcode.nextStep();
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
		$('.introjs-tooltip').show();
	});
} 