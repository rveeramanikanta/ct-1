var typingInterval = 10;

var initializationOfCharacterArrays = function() {
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
			element :'#exampleDiv1',
			intro : '',
			//animateStep : 'firstExIntro',
			tooltipClass : 'hide',
		}, {
			element :'#exampleDiv2',
			intro : '',
			//animateStep : 'secondExIntro',
			tooltipClass : 'hide',
		}, {
			element :'#exampleDiv3',
			intro : '',
			//animateStep : 'thirdExIntro',
			tooltipClass : 'hide',
		}, {
			element :'#exampleDiv4',
			intro : '',
			//animateStep : 'fourthExIntro',
			tooltipClass : 'hide',
		}, {
			element :'#exampleDiv5',
			intro : '',
			//animateStep : 'fifthExIntro',
			tooltipClass : 'hide',
			position : 'top'
		}, {
			element :'#restart',
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case 'exampleDiv1':
			$("#exampleDiv1").css("opacity", "0");
			$("#tableDiv1").addClass("opacity00").removeClass("animated zoomIn");
			$("#value").addClass('opacity00'); 
			$('.displayChar1').addClass('opacity00'); 
			$("#secondExample,#exampleDiv2").css("opacity", "0");
			break;
			
		case 'exampleDiv2':
			$("#secondExample, #exampleDiv2").css("opacity", "0");
			$("#tableDiv2").addClass("opacity00").removeClass("animated zoomIn");
			$("#stringValue").addClass('opacity00'); 
			$('.displayChar2').addClass('opacity00'); 
			$("#stringValue5").addClass("opacity00").removeClass("animated zoomIn blinking-once");
			$("#thirdExample,#exampleDiv3").css("opacity", "0");
			break;
		case 'exampleDiv3':
			$("#thirdExample,#exampleDiv3").css("opacity", "0");
			$("#tableDiv3").addClass("opacity00").removeClass("animated zoomIn");
			$(".displayChar3").css("opacity", "0");
			$("#fourthExample,#exampleDiv4").addClass("opacity00");
			break;
		case 'exampleDiv4':
			$("#fourthExample,#exampleDiv4").addClass("opacity00");
			$("#tableDiv4").addClass("opacity00").removeClass("animated zoomIn");
			$(".char-visible-one").css("opacity", "0");
			$(".char-visible-two").css("opacity", "0");
			$(".char-visible-one-zero").addClass("opacity00").removeClass("animated zoomIn blinking-once");
			$(".char-visible-two-zero").addClass("opacity00").removeClass("animated zoomIn blinking-once");
			$(".char-invisible").removeAttr("style");
			$("#fifthExample,#exampleDiv5").addClass("opacity00");
			
		//	$("#fifthExample,#exampleDiv5").addClass("opacity00");
			$("#tableDiv5").addClass("opacity00").removeClass("animated zoomIn");
			$("#displayValue").addClass('opacity00'); 
			$(".appendZero").addClass("opacity00").removeClass("animated zoomIn blinking-once");
			break;
		case 'exampleDiv5':
			$("#fifthExample,#exampleDiv5").addClass("opacity00");
			$("#tableDiv5").addClass("opacity00").removeClass("animated zoomIn");
			$(".displayChar5").addClass('opacity00'); 
			$(".char-invisible-two").removeAttr("style");
			$(".appendZero").addClass("opacity00").removeClass("animated zoomIn blinking-once");		
			break;
		}
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
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
		var elementId = targetElement.id;
		switch(elementId) {
		case 'infoDiv' :
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			//var text = $("#infoDiv").html();
			$("#list1").fadeTo(300, 1, function() {
				$("#list2").fadeTo(300, 1, function() {
					$('#nextButton').removeClass("opacity00");
					$('.user-btn').click(function() {
						$('.user-btn').remove();
						introjs.nextStep();
					});
				});
			});
			break;
		case 'exampleDiv1':
			$('.user-btn').remove();
			$('.introjs-helperLayer').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				var text = "Let us learn how a simple character array is initialized.<span id='text1'></span>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					TweenMax.to($("#exampleDiv1"), 1, {opacity: 1, onComplete: function() {
						nextButtonFucntion(function() {
							var text = "<br>You will notice that in the above statement while initializing the character array "+
							"<span class='ct-code-b-yellow'>ch[]</span> we have not specified any length in such situations the compiler "+
							"automatically calculates the length depending on the number of characters present in between the braces."+
							"<span id='text2'></span>";
							typing('#text1', text, typingInterval, 'white', function() {
								nextButtonFucntion(function() {
									boxAnimation("#tableDiv1", function() {
										animatingChar('#char', '#value', ($('.inputChar1').length + 1), 1, function() {
											var text = "<br>The character <span class='ct-code-b-yellow'>\'\\0\'</span> "+
											"(<span class='ct-code-b-yellow'>null character</span>) must be "+
											"provided to mark the end of the string.<span id='text3'></span>";
											typing('#text2', text, typingInterval, 'white', function() {
												$(".introjs-nextbutton").show();
											});
										});
									});
								});
							});
						});
					}});
				});
			});
			break;
		case 'exampleDiv2':
			$('.user-btn').remove();
			$('.introjs-helperLayer').one('transitionend', function() {
				TweenMax.to($("#secondExample,#exampleDiv2"), 1, {opacity: 1, onComplete: function() {
					$('.introjs-tooltip').removeClass('hide');
					var text = "In this example you will notice that the character array is initialized directly using string literal which is "+
					"similar to initializing a character array with individual characters excepting In such cases we did not provide the null "+
					"character. <br><br>The compiler will automatically create an array with the number of characters present in the string literal "+
					"including a position for the null character <span class='ct-code-b-yellow'>\'\\0\'</span>.";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						nextButtonFucntion(function() {
							boxAnimation("#tableDiv2", function() {
								animatingChar('#stringChar', '#stringValue', ($('.inputChar2').length + 1), 1, function() {
									zoomEffectWithBlinking("#stringValue5", function() {
										$(".introjs-nextbutton, .introjs-prevbutton").show();
									});
								});
							});
						});
					});
				}});
			});
			break;
		case 'exampleDiv3':
			$('.user-btn').remove();
			$('.introjs-helperLayer').one('transitionend', function() {
				TweenMax.to($("#thirdExample,#exampleDiv3"),1, {opacity: 1, onComplete: function() {
					$('.introjs-tooltip').removeClass('hide');
					var text = "In this exmple we are trying to initialize the character array of size <span class='ct-code-b-yellow'>6</span> "+
						"while the number of characters with a string literal which has <span class='ct-code-b-yellow'>10</span> characters. "+
						"Hence only the first <span class='ct-code-b-yellow'>6</span> characters would be stored in the character array. Since we "+
						"have limited the size of the character array to <span class='ct-code-b-yellow'>6</span>.<br><br>"+
						"<span id='exampleDiv3SpanText1'></span>";
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						nextButtonFucntion(function() {
							boxAnimation("#tableDiv3", function() {
								$("#inputString3").effect("transfer", { to: $("#smallBox3")}, 2000).addClass(".ui-effects-transfer", function() {
									TweenMax.to($(".displayChar3"), 1, {opacity: 1, onComplete: function() {
										nextButtonFucntion(function() {
											$("#exampleDiv3SpanText1").append("As you can notice the character array has ignored the remaining "+
													"<span class='ct-code-b-yellow'>4</span> characters in the original string literal. Since the length "+
													"of the character array is restricted to <span class='ct-code-b-yellow'>6</span>. "+
													"<br><br> You will also notice that the <span class='ct-code-b-yellow'>\'\\0\'</span> is not present "+
													"in the character array. In such situations whenever we are trying to access the character array "+
													"to read since there is no null character the results of readings such a character array are "+
													"unexpected.");
											var text = $("#exampleDiv3SpanText1").html();
											typing('#exampleDiv3SpanText1', text, typingInterval, 'white', function() {
												$(".introjs-nextbutton, .introjs-prevbutton").show();
											});
										});
									}});
								});
							});
						});
					});
				}})
			});
			break;
		case 'exampleDiv4':
			$('.user-btn').remove();
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#fourthExample,#exampleDiv4").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				var text = "This example demonstrate initializing of a two dimensional character array using two string literals."+
				"<br>As you can notice since we have declared a character array <span class='ct-code-b-yellow'>a[2][7]</span> the system will "+
				"allocate memory for <span class='ct-code-b-yellow'>2*7</span> positions to store a total of <span class='ct-code-b-yellow'>14</span>"+
				" characters.<br>However the string literals are provided to be stored in the two dimensional character array are "+
				"<span class='ct-code-b-yellow'>MAY</span> and <span class='ct-code-b-yellow'>JUNE</span> whose lengths are lesser than "+
				"<span class='ct-code-b-yellow'>7</span> characters they will occupie the initial slots in the <span class='ct-code-b-yellow'>"+
				"0<sup>th</sup></span> and <span class='ct-code-b-yellow'>1<sup>st</sup></span> rows.<br><span id='exampleDiv4SpanText1'></span>";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					nextButtonFucntion(function() {
						boxAnimation("#tableDiv4", function() {
							$(".fourthIndex1").effect( "highlight", {color:"dodgerblue"}, 1000, function() {
								TweenMax.to($(".char-visible-one"), 1, {opacity: 1, onComplete: function() {
									$(".fourthIndex2").effect( "highlight", {color:"dodgerblue"}, 1000, function() {
										TweenMax.to($(".char-visible-two"), 1, {opacity: 1, onComplete: function() {
											nextButtonFucntion(function() {
												$("#exampleDiv4SpanText1").append("Since there are more locations available in the "+
													"<span class='ct-code-b-yellow'>0<sup>th</sup></span> and <span class='ct-code-b-yellow'>"+
													"1<sup>st</sup></span> rows "+
													"after fill in the characters present in <span class='ct-code-b-yellow'>MAY</span> and "+
													"<span class='ct-code-b-yellow'>JUNE</span> the system will automaticlly insert "+
													"<span class='ct-code-b-yellow'>\'\\0\'</span> character at the end of each string literal "+
													"indicates the termination of the string literal. <br>In case the characters provided exceed "+
													"the length allocated for each row then <span class='ct-code-b-yellow'>\'\\0\'</span> character "+
													"will not allocated automatically.");
												var text = $("#exampleDiv4SpanText1").html();
												typing('#exampleDiv4SpanText1', text, typingInterval, 'white', function() {
													nextButtonFucntion(function() {
														zoomEffectWithBlinking(".char-visible-one-zero", function() {
															zoomEffectWithBlinking(".char-visible-two-zero", function() {
																$(".char-invisible").css("background-color", "buttonshadow");
																$(".introjs-nextbutton, .introjs-prevbutton").show();
															});
														});
													});
												});
											});
										}});
									});
								}});
							});
						});
					});
				});
			});
			break;
		case 'exampleDiv5':
			$('.user-btn').remove();
			$('.introjs-helperLayer').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				var text = "Let us consider yet another example of two dimensional array where only the number of columns provided.<br> "+
				"In such situations the compiler automatically determines the number of rows from the data being initialized.<br>"+
				"As you can notice since in each row there only one character specified the compiler would automatically append a "+
				"<span class='ct-code-b-yellow'>\'\\0\'</span> at the end of each character in the row.";
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
					$("#fifthExample,#exampleDiv5").removeClass("opacity00");
					nextButtonFucntion(function() {
						boxAnimation("#tableDiv5", function() {
							animatingChar('#character', '#displayValue', ($('.inputChar5').length + 1), 1, function() {
								zoomEffectWithBlinking(".appendZero", function() {
									$(".char-invisible-two").css("background-color", "buttonshadow");
									$(".introjs-nextbutton, .introjs-prevbutton").show();
								});
							});
						});
					});
				});
			});
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

function nextButtonFucntion(callBackFunction) {
	$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
	$(".user-btn").click(function() {
		$(".user-btn").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		} 
	});
}

function prevButtonFucntion(callBackFunction) {
	$(".introjs-tooltipbuttons").append("<a class='introjs-button back-button'>&#8592; Back</a>");
	$(".back-button").click(function() {
		$(".back-button").remove();
		introjs.previousStep();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		} 
	});
}

function zoomEffectWithBlinking(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn blinking-once").one('animationend', function() {
		$(id).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
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

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	TweenMax.from($(selector2), 0.5, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function animatingChar(selector1, selector2, length, index, callBackFunction) {
	$(selector2 + index).removeClass('opacity00'); 
	fromEffectWithTweenMax(selector1 + index, selector2 + index, function() {
		index++;
		if (length > index) {
			animatingChar(selector1, selector2, length, index, callBackFunction);
		} else {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}
	});
}