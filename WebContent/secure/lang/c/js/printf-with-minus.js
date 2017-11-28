var intro;
var typingInterval = 1;
var tl = new TimelineLite();
var sopLineCount = 1;
var count = 0;

var printfWithMinusReady = function() {
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
				//tooltipClass : "hide",
				animateStep: "decimal"
			},{
				element :'#outputDiv',
				intro :'',
				position: 'right',
				tooltipClass : "hide",
				animateStep: "decimal"
			},{
				element :'#sopLine2',
				intro :'',
				//tooltipClass : "hide",
				animateStep: "plusSpace"
			},{
				element :'#outputDiv',
				intro :'',
				position: 'auto',
				tooltipClass : "hide",
				animateStep: "plusSpace"
			},{
				element :'#sopLine3',
				intro :'',
				//tooltipClass : "hide",
				animateStep: "minusWithOutLoss"
			},{
				element :'#outputDiv',
				intro :'',
				position: 'auto',
				tooltipClass : "hide",
				animateStep: "minusWithOutLoss"
			},{
				element :'#sopLine4',
				intro :'',
				//tooltipClass : "hide",
				animateStep: "plusWithSpace"
			},{
				element :'#outputDiv',
				intro :'',
				position: 'auto',
				tooltipClass : "hide",
				animateStep: "plusWithSpace"
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
					$("#numberDiv1").addClass("opacity00")
				break;
				
				case "animationDiv" :
					
				break;
				
				case "sopLine" + sopLineCount :
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "decimal" :
							if (intro._direction =="backward") {
								$("#outputAValue1").text("");
								}
						break;
							
						case "plusSpace" :
							if (intro._direction =="backward") {
								$("#outputAValue2").text("");
								}
						break;
							
						case"minusWithOutLoss" :
							if (intro._direction =="backward") {
								$("#outputAValue3").text("");
								}
							
						break;
						
						case "plusWithSpace" :
							
						break;
					}
				break;
				
				case "outputDiv" :
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "decimal" :
							
						break;
						
						case "plusSpace" :
							
						break;
						
						case "minusWithOutLoss" :
							
						break;
							
						case "plusWithSpace" :
							
								
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
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		$('.introjs-helperLayer').one('transitionend', function() {
			switch (elementId) {
				case "program" :
					$("#codeDiv, #animationDiv, #outputDiv").removeClass("opacity00");
					$("#printfDefinition").addClass("z-index1000000");
					$('.introjs-tooltip').removeClass('hide');
					text = 'We will learn how the <span class = "ct-code-b-yellow">printf()</span>'
							+ ' function works with <span class = "ct-code-b-yellow">-</span>'
							+ ' format character.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
				break;
				
				case "VariableDeclararion" :
					$("#codeDiv, #animationDiv, #outputDiv").removeClass("opacity00");
					//$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are declaring and initializing an integer variable '
							+ ' <span class = "ct-code-b-yellow">a</span> to '
							+ ' <span class = "ct-code-b-yellow">14</span>.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
				break;
				
				case "animationDiv" :
					setTimeout(function() {
						if (intro._direction=="forward") {
							transferEffect('#VariableDeclararion', '#numberDiv1', function() {
								setTimeout(function() {
									intro.nextStep()
								}, 300)
							});
						} else {
							intro.previousStep()
							}
						}, 500);
					
				break;
				
				case "sopLine" + sopLineCount :
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "decimal" :
							//$('.introjs-tooltip').removeClass('hide');
							text = 'The <span class="ct-code-b-yellow">printf()</span> function'
									+ ' uses <span class="ct-code-b-yellow">%d</span> format character '
									+ ' to print the value strored in the variable <span class="ct-code-b-yellow">a</span>.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-nextbutton,.introjs-prevbutton').show();
							});
						break;
							
						case "plusSpace" :
						//	$('.introjs-tooltip').removeClass('hide');
							text = 'When we try to print the same variable <span class="ct-code-b-yellow">a</span>'
									+ ' using the format character <span class="ct-code-b-yellow">%-d</span>, '
									+ ' we will notice that there is no change, since it is already '
									+ ' <span class = "ct-code-b-yellow">left justified</span>.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-nextbutton,.introjs-prevbutton').show();
							});
						break;
							
						case"minusWithOutLoss" :
							//$('.introjs-tooltip').removeClass('hide');
							text = 'We are trying to print <span class = "ct-code-b-yellow">999</span>'
									+ ' which has <span class = "ct-code-b-yellow">3</span> digits,'
									+ ' while the <span class = "ct-code-b-yellow">field width</span> specified'
									+ ' in <span class = "ct-code-b-yellow">%-2d</span> is only of '
									+ ' <span class = "ct-code-b-yellow">2</span> spaces, in such a situation the whole number '
									+ ' <span class = "ct-code-b-yellow">999</span> will be printed as it is.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-nextbutton,.introjs-prevbutton').show();
							});
						break;
						
						case "plusWithSpace" :
							$('[contenteditable = "false"]').attr('contenteditable', 'true');
							//$('.introjs-tooltip').removeClass('hide');
							text = 'The <span class="ct-code-b-yellow">printf</span> statement is trying to '
									+ ' print the value <span class="ct-code-b-yellow">14</span>, using  '
									+ ' <span class="ct-code-b-yellow">-</span>(minus) symbol as well as '
									+ ' <span class="ct-code-b-yellow">field width</span> of '
									+ ' <span class="ct-code-b-yellow"><span class = "keyValue">6</span></span> '
									+ ' specified in <span class = "ct-code-b-yellow">%-<span class = "keyValue">6</span>d</span>.'
									+ ' <br/><br/> You can also change the value of field width'
									+ ' <span class = "ct-code-b-yellow keyValue">6</span> to any other value.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$("#number" + sopLineCount).effect( "highlight",{color: 'yellow'});
								caretAtEnd(document.getElementById('number' + sopLineCount));
								changeValue('#number' + sopLineCount, 1);
								clickToFocus("#sopLine" + sopLineCount,"#number" + sopLineCount);
								$('.introjs-nextbutton,.introjs-prevbutton').show();
							});
						break;
					}
				break;
				
				case "outputDiv" :
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "decimal" :
							printDecimalValue();
						break;
						
						case "plusSpace" :
							printDecimalValue();
						break;
						
						case "minusWithOutLoss" :
							printnineValue();
						break;
							
						case "plusWithSpace" :
							var length = $("#addressValue1").text().length;
							var number = parseInt($("#number" + sopLineCount).text());
							if (length < number) {
								$('.introjs-tooltip').removeClass('hide');
								text = 'Since, the value <span class = "ct-code-b-yellow">14</span> stored '
										+ ' in the variable <span class = "ct-code-b-yellow">a</span>'
										+ ' contains only <span class = "ct-code-b-yellow">'+ length +'</span> digits'
										+ ' and the <span class = "ct-code-b-yellow">field width</span> specified'
										+ ' in <span class = "ct-code-b-yellow">%-'+number +'d</span> '
										+ ' has <span class = "ct-code-b-yellow">'+ number +'</span> positions, '
										+ ' the value <span class = "ct-code-b-yellow">14</span> will'
										+ ' be <span class = "ct-code-b-yellow">left justified</span> '
										+ ' because of the format character <span class = "ct-code-b-yellow">-</span>'
										+ ' (minus) and will be followed by '
										+ ' <span class = "ct-code-b-yellow">'+ (number - length) 
										+ ' </span> spaces when it is printed.';
								typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
									for (var i = 0; i < number ; i++) {
										$("#appendDiv" + sopLineCount).append('<span id = "borderSpan" class = "bottom-border visibility-hidden"><span class = "visibility-hidden" id = "outputSpan'+ i +'">0</span></span>');
									}
									$('.introjs-tooltipbuttons').append("<a class = 'introjs-button introjs-duplicate-nextbutton'"
										+ "onclick = outputReservedPositions()>Next &#8594;</a>");
								});
							} else {
								$('.introjs-tooltip').removeClass('hide');
								text = 'Since, the number of characters of the digits in '
										+ '<span class = "ct-code-b-yellow">14</span> '
										+ ' is more than the field width <span class = "ct-code-b-yellow">'+ number+'</span>, '
										+ ' the number <span class = "ct-code-b-yellow">14</span> will be printed as it is. ';
								typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
									$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'"
										+ "onclick=printDecimalValue()>Next &#8594;</a>");
								});
							}
						break;
					}
				break;
				
				case "restartBtn":
					$("#printfDefinition").removeClass("z-index1000000");
					$("#restartBtn").removeClass('visibility-hidden');
				break;
			}
		});
	});
		
	intro.start();
	$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
	
	TweenMax.to('#text1', 1, {opacity: 1, onComplete: function() {
		TweenMax.to('#text2', 1, {opacity: 1, onComplete: function() {
			TweenMax.to('#text3', 1, {opacity: 1, onComplete: function() {
				$('.introjs-duplicate-nextbutton').removeClass('opacity00').addClass("animated zoomIn").one('animationend', function() {
					$('.introjs-duplicate-nextbutton').click(function() {
						$(".introjs-duplicate-nextbutton").remove();
						intro.nextStep();
					});
				});
			}});
		}});
	}});
	
	$('#restartBtn').click(function() {
		location.reload();
	});
	
	var x = Math.floor((Math.random() * 1024) + 2255);
	$("#address1").text(x);
}

function clickToFocus(id1, id2) {
	$(id1).click(function(){
		$(id2).focus();
	});
}

function outputReservedPositions(text) {
	$('.introjs-tooltip').addClass('hide');
	var number = parseInt($("#number" + sopLineCount).text());
	var length = $("#addressValue1").text().length;
	$(".introjs-duplicate-nextbutton").remove();
	$("#persentage" + sopLineCount).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
	$("#persentage" + sopLineCount).effect( "transfer", { to: $("#appendDiv" + sopLineCount), className: "ui-effects-transfer" }, 1000 , function(){
		$("#persentage" + sopLineCount).removeClass("z-index1000000")
		$(".bottom-border").removeClass("visibility-hidden");
		printOutputWithSpaces('plusWithSpace');
	});
}

function printOutputWithSpaces(text) {
	$('.introjs-tooltip').addClass('hide');
	$(".introjs-duplicate-nextbutton").remove();
	var length = $("#addressValue1").text().length;
	var number = parseInt($("#number" + sopLineCount).text());
	for (var i = 0, j = 0; i < length, j < length; i++, j++) {
			$("#outputSpan" + i).text($("#addressValue1").text().charAt(j)).addClass("move-values");
	}
	$('#addressValue1').addClass('circle-css').effect("highlight", {color: '#cccccc'}, 1000, function() {
		$('#addressValue1').removeClass('circle-css');
		$(".move-values").removeClass("visibility-hidden");
		fromEffectWithTweenMax("#addressValue1", ".move-values", false, function() {
				setTimeout(function(){
	  				sopLineCount++;
	  				intro.nextStep();
	  			},800);
		});
	});
}

function printOutputWithOutLossData(number,length) {
	$('.introjs-tooltip').removeClass('hide');
	text = 'The number of characters of the <span class = "ct-code-b-yellow">output</span>'
			+ ' data (i.e. <span class = "ct-code-b-yellow">'+ length + '</span> ) is more '
			+ ' then the field width (i.e. <span class = "ct-code-b-yellow">'+ number + '</span>). '
			+ ' In this case the value (i.e. <span class = "ct-code-b-yellow">'+ $("#addressValue1").text()  
			+ ' </span>) will be printed to the <span class = "ct-code-b-yellow">output</span>'
			+ ' without loss.';
	typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
		$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'"
			+ "onclick=printDecimalValue()>Next &#8594;</a>");
	});
}

function printDecimalValue() {
	setTimeout(function() {
		if (intro._direction == "forward") {
		$(".introjs-duplicate-nextbutton").remove();
		highlightFunction("#persentage" + sopLineCount, "z-index1000000", function() {
			$("#persentage" + sopLineCount).removeClass("z-index1000000");
			highlightFunction("#aValue" + sopLineCount, "z-index1000000", function() {
				$("#aValue" + sopLineCount).removeClass("z-index1000000");
				$("#aValueAnimation").removeClass("visibility-hidden");  
				fromEffectWithTweenMax("#aValue" + sopLineCount, "#aValueAnimation", true,function() {
		  			$('#addressValue1').addClass('circle-css z-index1000000').effect("highlight", {color: 'yellow'}, 1000, function() {
		  				$('#addressValue1').removeClass('circle-css z-index1000000');
		  				$("#outputAValue" + sopLineCount).text($("#addressValue1").text());
					  	fromEffectWithTweenMax("#addressValue1", "#outputAValue" + sopLineCount, false, function() {
					  		sopLineCount++;
					  		setTimeout(function() {
								intro.nextStep()
							}, 300)
						});
	  				});
		  		});
		  	});
		});
		} else {
			sopLineCount--
		intro.previousStep()
		}
	}, 500);
	
}

function printnineValue() {
	setTimeout(function() {
		if (intro._direction == "forward") {
	$('.introjs-tooltip').addClass('hide');
	$(".introjs-duplicate-nextbutton").remove();
	highlightFunction("#persentage" + sopLineCount, "z-index1000000", function() {
		$("#persentage" + sopLineCount).removeClass("z-index1000000");
		highlightFunction("#aValue" + sopLineCount, "z-index1000000", function() {
			$("#aValue" + sopLineCount).removeClass("z-index1000000");
			$('#aValue'+sopLineCount).addClass('circle-css z-index1000000').effect("highlight", {color: 'yellow'}, 1000, function() {
				$('#aValue'+sopLineCount).removeClass('circle-css z-index1000000');
  				$("#outputAValue" + sopLineCount).text($('#aValue'+sopLineCount).text());
				fromEffectWithTweenMax('#aValue'+sopLineCount, "#outputAValue" + sopLineCount, false, function() {
					sopLineCount++;
					setTimeout(function() {
						intro.nextStep()
					}, 300)
				 });
  			});
	  	});
	});
		} else {
			sopLineCount--
		intro.previousStep()
		}
   }, 500);
}

//*******Text highlight function*****
function highlightFunction(selector1, selector2, callBackFunction) {
	$(selector1).addClass(selector2).effect( "highlight",{color: 'yellow'},500, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

//*****setTimeout function to intro go next step step*****
function introNextStep() {
	setTimeout(function() {
		if (intro._direction=="forward") {
		intro.nextStep()
		} else {
		intro.previousStep()
		}
		}, 500);
}

//*****From effect animation*****
function fromEffectWithTweenMax(selector1, selector2, flag, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).css({"color" : "red", "z-index" : "99999999"}).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	if (flag) {
		$("body").append("<span id='dummy' style='position: relative; z-index: 9999999; color: white;'>" 
				+ $(selector2).text() + "</span>");
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

//cursor position at end
function caretAtEnd(element) {
	element.focus();
	if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
		var range = document.createRange();
		range.selectNodeContents(element);
		range.collapse(false);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
	}
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

//Allow only numbers,Condition to  enter text, change the array values, Display error message & Fill all the array elements
function changeValue(id1, id2) {
	$(id1).on("keydown", function(e) {
		$(".keyValue").text($(id1).text());
		$('.error-text').remove();
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39]) !== -1) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > max-1) {
			if (id2 != 1) {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>String length to 3.</span>");
				e.preventDefault();
			} else {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>String length to 1.</span>");
				e.preventDefault();
			}
		}
	});
	$(id1).on("keyup", function(e) {
		$(".keyValue").text($(id1).text());
		if ($(this).text() == "") {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter a number.</span>");
			$(this).addClass("empty");
		} else {
			$(this).removeClass("empty");
		}
		intro.refresh();
		if ($(".empty").length > 0) {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
		}
	});
}