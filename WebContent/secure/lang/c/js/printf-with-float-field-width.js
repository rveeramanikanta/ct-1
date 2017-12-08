var introjs;
var typingInterval = 1;
var tl = new TimelineLite();
var sopLineCount = 1;
var count = 0;
var floatValue;
var VariableDeclararion = 1;

var printfWithFloatFieldWidthReady = function() {
	introjs = introJs();
	introjs.setOptions({
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
				element :'#codeDiv',
				intro :'',
				//tooltipClass : "hide"
			},{
				element :'#VariableDeclararion1',
				intro :'',
				//tooltipClass : "hide"
			},{
				element :'#animationDiv',
				intro :'',
				tooltipClass : "hide"
			},{
				element :'#VariableDeclararion2',
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
				animateStep: "printFloatValue"
			},{
				element :'#outputDiv',
				intro :'',
				tooltipClass : "hide",
				position : 'left',
				animateStep: "printFloatValue"
			},{
				element :'#sopLine2',
				intro :'',
				//tooltipClass : "hide",
				animateStep: "printFloatWithFieldWith"
			},{
				element :'#outputDiv',
				intro :'',
				tooltipClass : "hide",
				position : 'left',
				animateStep: "printFloatWithFieldWith"
			},{
				element :'#sopLine3',
				intro :'',
				//tooltipClass : "hide",
				animateStep: "printFloatWithFieldWith1"
			},{
				element :'#outputDiv',
				intro :'',
				tooltipClass : "hide",
				position : 'left',
				animateStep: "printFloatWithFieldWith1"
			},{
				element :'#sopLine4',
				intro :'',
				//tooltipClass : "hide",
				animateStep: "printFloatWithFieldWith2"
			},{
				element :'#outputDiv',
				intro :'',
				position : 'left',
				tooltipClass : "hide",
				animateStep: "printFloatWithFieldWith2"
			},{
				element : "#restartBtn",
				intro : "Click to restart.",
				tooltipClass: "introjs-tooltip-min-width-custom",
				position : "right"
			}]
	});
	introjs.onbeforechange(function(targetElement){
		var elementId = targetElement.id;
		switch (elementId) {
				case "VariableDeclararion" + VariableDeclararion :
					if (introjs._direction == "backward") {
						if (introjs._currentStep == 2) {
							$("#numberDiv1").addClass("opacity00");
							}
						if (introjs._currentStep == 4) {
							$("#numberDiv2").addClass("opacity00");
						}
					}
				
			break;
			case "sopLine" + sopLineCount  :
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "printFloatValue" :
							 if (introjs._direction == "backward") {
								  $('#outputAValue2').text("");
							  }
								
						break;
						
						case "printFloatWithFieldWith" :
							if (introjs._direction == "backward") {
								$("#appendDiv3").empty();
							}
						break;
						
						case "printFloatWithFieldWith1" :
							if (introjs._direction == "backward") {
								$('#appendDiv4').text("");
							}
						break;
						
						case "printFloatWithFieldWith2" :
							
						break;
					}
				
			break;
			
			
		}
	});
	introjs.onafterchange(function(targetElement){
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		// ********************** start ************back button logic
				
				if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
					introjs._introItems[introjs._currentStep]["animation"] = "repeat";
				}
				
				if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
					if (introjs._currentStep != 0 && introjs._currentStep != 1) {
						$('.introjs-prevbutton').show();
					}
					$('.introjs-nextbutton').show();
					return;
				}
				
				if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
					introjs._introItems[introjs._currentStep]["isCompleted"] = true;
				}
				
				// ********************** end ************back button logic
		var elementId = targetElement.id;
		switch (elementId) {
			case "printfDefinition" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				TweenMax.to('#text1', 1, {opacity: 1, onComplete: function() {
					TweenMax.to('#text2', 1, {opacity: 1, onComplete: function() {
						$('.introjs-duplicate-nextbutton').removeClass('opacity00').addClass("animated zoomIn").one('animationend', function() {
							$('.introjs-duplicate-nextbutton').click(function() {
								$("#contentOfPage").removeClass('opacity00');
								$(".introjs-duplicate-nextbutton").remove();
								introjs.nextStep();
							});
						});
					}});
				}});
			break;
			
			case "codeDiv" :
				$("#printfDefinition").addClass("z-index1000000");
				$('[contenteditable="true"]').attr('contenteditable', 'false');
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					//$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we learn how the <span class = "ct-code-b-yellow">printf()</span> '+
							'function uses the <span class = "ct-code-b-yellow">%f</span> format'+
							' character with a given field width.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			case "VariableDeclararion" + VariableDeclararion :
				$("#VariableDeclararion").removeClass("z-index1000000");
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					
					text = 'We are declaring and initializing a float variable '+
							'<span class = "ct-code-b-yellow">'+ $('#value'+VariableDeclararion).text() +'</span> to '+
							'<span class = "ct-code-b-yellow">98.7654</span>.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				});
			break;
			
			case "animationDiv" :
				setTimeout(function() {
					if (introjs._direction=="forward") {
						//alert(introjs._currentStep)
						//if (introjs._currentStep == 3) {
							$('.introjs-nextbutton').hide();
							$('.introjs-helperLayer').one('transitionend', function() {
								transferEffect('#VariableDeclararion'+VariableDeclararion, '#numberDiv'+ VariableDeclararion, function() {
								$("#numberDiv1").removeClass("opacity00")
							
								setTimeout(function() {
									VariableDeclararion++;
								introjs.nextStep()
								}, 300);
							});
						});
							} else {
								VariableDeclararion--;
							introjs.previousStep()
							}
					}, 500);
					 

			break;
			
			case "sopLine" + sopLineCount  :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "printFloatValue" :
							//$('.introjs-tooltip').removeClass('hide');
							text = 'The <span class="ct-code-b-yellow">%f</span> format specifier by default'+
									' reserves <span class="ct-code-b-yellow">6</span> spaces for the '+
									'fractional part, hence in our case the <span class="ct-code-b-yellow">.7654</span> '+
									'will be padded with <span class="ct-code-b-yellow">two</span> extra '+
									'<span class="ct-code-b-yellow">zeros</span> at the end while it is being printed.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
								$('.introjs-nextbutton,.introjs-prevbutton').show();
							});
						break;
						
						case "printFloatWithFieldWith" :
							//$('.introjs-tooltip').removeClass('hide');
							text = 'The <span class="ct-code-b-yellow">%7.4f</span> format character specifies that '+
									'the total of <span class="ct-code-b-yellow">7</span> spaces will be used '+
									'while printing the given number. <br/><br/>'+
									'in amoung those <span class="ct-code-b-yellow">7</span> spaces the '+
									' <span class="ct-code-b-yellow">4</span> spaces will be reserves for'+
									' the fractional digits.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
								$('.introjs-nextbutton,.introjs-prevbutton').show();
							});
						break;
						
						case "printFloatWithFieldWith1" :
							//$('.introjs-tooltip').removeClass('hide');
							text = 'In this stament we will notice that we are using a total of <span class="ct-code-b-yellow">7</span> '+
									' spaces for printing the value stored in the variable <span class="ct-code-b-yellow">b</span>'+
									' (<span class="ct-code-b-yellow">198.7654</span>).<br/><br/>'+
									'The value stored in <span class="ct-code-b-yellow">b</span> actually occupies'+
									' <span class="ct-code-b-yellow">8</span> spaces which include'+
									' <span class="ct-code-b-yellow">7</span> digits and a'+
									' <span class="ct-code-b-yellow">.</span>(dot).';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
								$('.introjs-nextbutton,.introjs-prevbutton').show();
							});
						break;
						
						case "printFloatWithFieldWith2" :
							//$('.introjs-tooltip').removeClass('hide');
							text = 'The <span class="ct-code-b-yellow">%8.2f</span> format specifier uses '+
									' <span class="ct-code-b-yellow">8</span> spaces for '+
									' printing the given number';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
								$('.introjs-nextbutton,.introjs-prevbutton').show();
							});
						break;
					}
				});
			break;
			
			case "outputDiv" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "printFloatValue" :
							setTimeout(function() {
								if (introjs._direction == "forward") {
									$('#outputAValue2').text("98.765400");
									$('#outputAValue2').removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
									$('#outputAValue2').removeClass("animated zoomIn");
									sopLineCount++;
								setTimeout(function() {
									introjs.nextStep();
									},800);
									});
									} else {
										sopLineCount--;
										introjs.previousStep();
									}
							}, 500);
							
						break;	
						
						case"printFloatWithFieldWith" :
							console.log(introjs._direction)
							 if (introjs._direction == "forward") {
								for (var i = 7; i > 0; i--) {
									$("#appendDiv3").append('<span id = "borderSpan" class = "bottom-border visibility-hidden"><span class = "visibility-hidden" id = "outputSpan'+ i +'">0</span></span>');
								}
								outputReservedPositions('seven');
							 } else {
								 sopLineCount--; 
								 setTimeout(function() {
								 introjs.previousStep()
								 }, 500);
							 }
						break;
						
						case"printFloatWithFieldWith1" :
							setTimeout(function() {
								if (introjs._direction == "forward") {
									$('.introjs-tooltip').removeClass('hide');
									text = 'Since, the number of characters of the digits in <span class = "ct-code-b-yellow">198.7654</span> '+
									'is more than the significant bit of the field width <span class = "ct-code-b-yellow">7</span>, '+
									' the number <span class = "ct-code-b-yellow">198.7654</span> will be printed '+
									'as it is.';
									typing('.introjs-tooltiptext', text, typingInterval, 'white', function() { 
										$('.introjs-tooltipbuttons').append("<a class = 'introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
										$('.introjs-duplicate-nextbutton').click(function() {
											$('.introjs-duplicate-nextbutton').remove();
											$('.introjs-tooltip').addClass('hide');
											$('#appendDiv4').text("198.7654");
											sopLineCount++;
											setTimeout(function() {
												introjs.nextStep();
												},500);
											});
										});
									} else {
													sopLineCount--;
													introjs.previousStep();
												}
										}, 500);
							break;
						
						
						case"printFloatWithFieldWith2" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'Since, only <span class = "ct-code-b-yellow">2</span> spaces are reserved for the fractional part'+
									' (<span class = "ct-code-b-yellow">.7654</span>), the value in the'+
									' <span class = "ct-code-b-yellow">2<sup>nd</sup></span> position'+
									' (i.e. <span class = "ct-code-b-yellow">6</span>) will be rounded to '+
									'<span class = "ct-code-b-yellow">7</span>.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								for (var i = 8; i > 0; i--) {
									$("#appendDiv5").append('<span id = "borderSpan1" class = "bottom-border visibility-hidden"><span class = "visibility-hidden" id = "outputSpan1'+ i +'">0</span></span>');
								}
								$('.introjs-tooltipbuttons').append("<a class = 'introjs-button introjs-duplicate-nextbutton' " +
								"onclick = outputReservedPositions('eight')>Next &#8594;</a>");
							});
						break;
					}
				});
			break;
			case "restartBtn":
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$("#printfDefinition").removeClass("z-index1000000");
				$('.introjs-helperLayer').one('transitionend', function () {
					$(".introjs-tooltip").css({"min-width": "115px"});
					$("#restartBtn").removeClass('visibility-hidden');
				});
			break;
		}
	});
	introjs.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide(); 
	
	$('#restartBtn').click(function() {
		location.reload();
	});
}

function outputReservedPositions(value) {
	$('.introjs-tooltip').addClass('hide');
	$(".introjs-duplicate-nextbutton").remove();
	$("#seven"+sopLineCount).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
	$("#seven"+ sopLineCount).effect( "transfer", { to: $("#appendDiv" + (sopLineCount+1)), className: "ui-effects-transfer" }, 1000 , function(){
		$("#seven"+sopLineCount).removeClass("z-index1000000")
		$(".bottom-border").removeClass("visibility-hidden");
				if (value == "seven") {
					$("#outputSpan1").text("4");$("#outputSpan2").text("5");$("#outputSpan3").text("6");$("#outputSpan4").text("7");
					zoomInDownEffect("#outputSpan1");
					zoomInDownEffect("#outputSpan2");
					zoomInDownEffect("#outputSpan3");
					zoomInDownEffect("#outputSpan4", function() {
						digitalPart('seven');
						$('.introjs-tooltip').removeClass('hide');
						text = 'The decimal point  (<span class = "ct-code-b-yellow">.</span>) occupies one position.';
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							$('.introjs-duplicate-nextbutton').remove();
							$('.introjs-tooltipbuttons').append("<a class = 'introjs-button introjs-duplicate-nextbutton' " +
								"onclick = digitalPart('seven')>Next &#8594;</a>");
						}); 
					});
				} else {
					$("#outputSpan11").text("7");$("#outputSpan12").text("7");
					zoomInDownEffect("#outputSpan11");
					zoomInDownEffect("#outputSpan12", function() {
						digitalPart('eight');
						$('.introjs-tooltip').removeClass('hide');
						text = 'The decimal point  (<span class = "ct-code-b-yellow">.</span>) occupies one position.';
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							$('.introjs-duplicate-nextbutton').remove();
							$('.introjs-tooltipbuttons').append("<a class = 'introjs-button introjs-duplicate-nextbutton' " +
							"onclick = digitalPart('eight')>Next &#8594;</a>");
						});
					});
				}
	});
}

function digitalPart(value) {
	$('.introjs-tooltip').addClass('hide');
	$(".introjs-duplicate-nextbutton").remove();
	if (value == 'seven') {
		$("#outputSpan5").text(".");
		zoomInDownEffect("#outputSpan5");
	} else if (value == "eight") {
		$("#outputSpan13").text(".");
		zoomInDownEffect("#outputSpan13");
	} else {
		$("#outputSpan26").text(".");
		zoomInDownEffect("#outputSpan26");
	}
	$('.introjs-tooltip').removeClass('hide');
	text = ' Before the decimal point (<span class = "ct-code-b-yellow">.</span>) the significant part of the '+
			'number will be printed.';
	typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
		$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
			">Next &#8594;</a>");
			$(".introjs-duplicate-nextbutton").click(function() {
				$(".introjs-duplicate-nextbutton").remove();
				$('.introjs-tooltip').addClass('hide');
				if (value == "seven") {
					$("#outputSpan6").text("8");$("#outputSpan7").text("9");
					zoomInDownEffect("#outputSpan6");
					zoomInDownEffect("#outputSpan7", function() {
							sopLineCount++;
							setTimeout(function() {
								introjs.nextStep();
							},800);
						});
				} else if (value == "eight") {
					$("#outputSpan14").text("8");$("#outputSpan15").text("9");
					zoomInDownEffect("#outputSpan14");
					zoomInDownEffect("#outputSpan15", function() {
							sopLineCount++;
							setTimeout(function() {
								introjs.nextStep();
							},800);
						});
				} else {
					$("#outputSpan27").text("9");
							zoomInDownEffect("#outputSpan27", function() {
							sopLineCount++;
							setTimeout(function() {
								introjs.nextStep();
							},800);
						});
				}
			});
		});
}

function exponentFunction() {
	$('.introjs-tooltip').addClass('hide');
	$(".introjs-duplicate-nextbutton").remove();
	$("#seven"+sopLineCount).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
	$("#seven"+ sopLineCount).effect( "transfer", { to: $("#appendDiv" + (sopLineCount+1)), className: "ui-effects-transfer" }, 1000 , function(){
		$("#seven"+sopLineCount).removeClass("z-index1000000")
		$(".bottom-border").removeClass("visibility-hidden");
		$('.introjs-tooltip').removeClass('hide');
		text = 'The given number is <span class = "ct-code-b-yellow">98.7654</span>. We can represent '+
				'an <span class = "ct-code-b-yellow">exponent</span>. <br> '+
				'Follow the bellow steps to calculate exponent number: <span id="appendSpan"></span>';
		typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
			$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
			"onclick=exponentSteps()>Next &#8594;</a>");
		});
	});
}

function exponentSteps() {
	$(".introjs-duplicate-nextbutton").remove();
	text = '<ul><li>The given number <span class = "ct-code-b-yellow">98.7654</span> is divided by'+
			' <span class = "ct-code-b-yellow">10<sup>1</sup></span><br>'+
			'<span class = "ct-code-b-yellow"><span id="calValue"><span class="number opacity00">98.7654</span>'+
			'<span class="divide visibility-hidden">/</span>'+
			'<span class="exponent visibility-hidden">10<sup>1</sup></span></span></span><br>'+
			'<span class = "ct-code-b-yellow"><span id="result" class="position visibility-hidden">98.7654/10<sup>1</sup></span></span>'+
			'</li></ul><span id="appendSpan1"></span>';
	typing('#appendSpan', text, typingInterval, 'white', function() {
		$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
		">Next &#8594;</a>");
		$(".introjs-duplicate-nextbutton").click(function() { 
			$(".introjs-duplicate-nextbutton").remove();
			$('#number1').addClass('circle-css').effect("highlight", {color: 'yellow'}, 500, function() {
				$(".number").removeClass("opacity00");
				$('#number1').removeClass('circle-css');
				fromEffectWithTweenMax('#number1', '.number', true, function() {
					zoomInDownEffect('.divide', function() {
						zoomInDownEffect('.exponent', function() {
							setTimeout(function() {
								$('#calValue').addClass('circle-css').effect("highlight", {color: 'yellow'}, 500, function() {
									$('#calValue').removeClass('circle-css');
									$("#result").removeClass("visibility-hidden");
									fromEffectWithTweenMax('#calValue', '#result', false, function() {
										setTimeout(function() {
											flipEffectWithTweenMax('#result', '9.87654', function() {
												$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
												"onclick=addExponentText()>Next &#8594;</a>");
											});
										},500);
									});
								});
							},800);
						});
					});
				});
			});
		});
	});
}

function truncating() {
	$(".introjs-duplicate-nextbutton").remove();
	text = '<ul><li>Here we want to display only <span class = "ct-code-b-yellow">two</span> digits fractional.</span>'+
			' so remaining 3 digits will be removed and '+
			'the second number is rounded to <span class = "ct-code-b-yellow">8</span> '+
			'<br><span class = "ct-code-b-yellow"><span id = "final" class="visibility-hidden">'+
			'9.8<span id="frac1" class="position">7</span><span id="frac2">6</span><span id="frac3">5</span>'+
			'<span id="frac4">4</span>E + 1</span></span></li></ul>';
	typing('#appendSpan2', text, typingInterval, 'white', function() {
		$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
		">Next &#8594;</a>");
		$(".introjs-duplicate-nextbutton").click(function() { 
			$(".introjs-duplicate-nextbutton").remove();
			$('.value1').addClass('circle-css').effect("highlight", {color: 'yellow'}, 500, function() {
				$('.value1').removeClass('circle-css');
				$("#final").removeClass("visibility-hidden");
				fromEffectWithTweenMax('.value1', '#final', false, function() {
					$("#frac2, #frac3, #frac4").effect( "highlight",{color: 'yellow'},1000, function() {
						$("#frac2, #frac3, #frac4").remove();
						$('.ui-effects-transfer').addClass('ct-code-b-red');
						setTimeout(function() {
							flipEffectWithTweenMax('#frac1', '8', function() {
								$("#final").effect( "highlight",{color: 'red'}, 500);
										$("#outputSpan21").text("1");$("#outputSpan22").text("+");
										$("#outputSpan23").text("E");$("#outputSpan24").text("8");
										$("#outputSpan25").text("8");$("#outputSpan26").text(".");
										$("#outputSpan27").text("9");
										$("#final").effect( "highlight",{color: 'yellow'},1000, function() {
											zoomInDownEffect('#outputSpan21');zoomInDownEffect('#outputSpan22');
											zoomInDownEffect('#outputSpan23');zoomInDownEffect('#outputSpan24');
											zoomInDownEffect('#outputSpan25');zoomInDownEffect('#outputSpan26');
											zoomInDownEffect('#outputSpan27', function() {
												$("#outputSpan21, #outputSpan22, #outputSpan23, #outputSpan24, #outputSpan25, #outputSpan26, #outputSpan27").effect( "highlight",{color: 'yellow'},1000, function() {
													$('.introjs-nextbutton').show();
												});
											});
										});
							});
						},800);
					});
				});
			});
		});
	});
}

function addExponentText() {
	$(".introjs-duplicate-nextbutton").remove();
	text = '<ul><li><span class = "ct-code-b-yellow">10<sup>1</sup></span> we can write it as '+
			'<span class = "ct-code-b-yellow">E + 1</span>, it can be places after the '+
			'value.<br><span class = "ct-code-b-yellow">'+
			'<span class = "value1  visibility-hidden">9.87654</span>'+
			'<span class= "eplus1 visibility-hidden">E + 1</span></span></li></ul>'+
			'<span id="appendSpan2"></span>';
	typing('#appendSpan1', text, typingInterval, 'white', function() {
		$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
		">Next &#8594;</a>");
		$(".introjs-duplicate-nextbutton").click(function() { 
			$(".introjs-duplicate-nextbutton").remove();
			$('#result').addClass('circle-css').effect("highlight", {color: 'yellow'}, 500, function() {
				$('#result').removeClass('circle-css');
				$(".value1").removeClass("visibility-hidden");
				fromEffectWithTweenMax('#result', '.value1', false, function() {
					zoomInDownEffect('.eplus1', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
						"onclick=truncating()>Next &#8594;</a>");
					});
				});
			});
		});
	});
}

//*****setTimeout function to intro go next step step*****
function introNextStep() {
	setTimeout(function() {
		introjs.nextStep();
	},800);
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

function flipEffectWithTweenMax(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
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

//********** zoomIn effect function **********
function zoomInDownEffect(selector, callBackFunction) {
	$(selector).removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
		$(selector).removeClass("animated zoomIn")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

//typing function
function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval" : typingInterval,
		"cursor_color" : cursorColor
	}, function() {
		$(typingId).removeClass("typingCursor");
		typingCallbackFunction();
		introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		$('.introjs-tooltip').show();
	});
} 