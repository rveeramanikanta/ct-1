var introjs;
var typingInterval = 2;
var num = 2;
var counter = 0;
var tValue = 1;
var temp = 0;
var lValue;
var pVal = 0;

var sampleProgramOnPrimeNumbersReady = function() {
	introGuide();
	$('#restart').click(function() {
		location.reload();
	});
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		steps : [ {
					element: '#description',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#example',
					intro: '',
					position: 'left',
					tooltipClass: "hide"
				}, {
					element: '#wholeLogic',
					intro: '',
					position: 'right',
					tooltipClass: "hide"
				}, {
					element: '#intDec',
					intro: '',
					tooltipClass: "hide"
				}, {
					element: '#iInit',
					intro: '',
					tooltipClass: "hide"
				}, {
					element: '#printfEnter',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#console',
					intro: '',
					tooltipClass: 'hide',
					consoleSteps: 'printEnter'
				}, {
					element: '#scanf',
					intro: ''
				}, {
					element: '#console',
					intro: '',
					consoleSteps: 'EnterNumber',
					tooltipClass: "hide"
				}, {
					element: '#whileLoop',
					intro: '',
					position: 'right',
					tooltipClass: "hide"
				}]
	});
	
	
	introjs.onbeforechange(function(targetElement) {
		$('.introjs-prevbutton, .introjs-skipbutton, .introjs-nextbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		
			case "description":
				
				break;
				
			case "example":
				
				tValue = 1;
				
				$("#example").addClass("opacity00");
				$("#primeDiv1").addClass("opacity00");
				
				$("#program").addClass("opacity00");
				$("#fa1, #primeDiv2, #primeDiv3").remove();
				
				$("#example br").remove();
				
				break;
				
			case "wholeLogic":

				$(".explanation, #cCupDiv").addClass("opacity00");
				$("#cVal").text('');
				
				break;
			
			case "ifLogic":
				
				break;
				
			case "intDec":
				$(".explanation, #cCupDiv").addClass("opacity00");
				$("#cVal").text('');
				$("#iCupDiv").addClass("opacity00");
				$("#iVal").text('');
				break;
				
			case "iInit":
				
				$("#iCupDiv").addClass("opacity00");
				$("#iVal").text('');
				
				break;
				
			case "printfEnter":
			case "falsePrint":
			case "truePrint":
				
				break;
				
			case "console":
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#console").removeClass("opacity00");
					var consoleSteps = introjs._introItems[introjs._currentStep].consoleSteps;
					switch(consoleSteps) {
					
					case "printEnter":
						
						break;
						
					case "EnterNumber":
						
						$("#textEnter").remove();
						
						if (introjs._introItems.length > 10) {
							introjs._introItems.splice(10);
						}
						
						break;
						
					case "secondPrint":
						
						break;
						
					}
				});
				break;
				
			case "scanf":
				
				$("#textEnter").remove();
				
				break;
				
			case "whileLoop":
				
				if (introjs._direction == "backward") {
					
					
					if (num <= ($("#enteredText").val()/2)) {
						introjs._introItems.splice(introjs._introItems.length - 2);
					} else {
						introjs._introItems.splice(introjs._introItems.length - 4);
					}
				}
				
				break;
				
			case "whileCode":
				
				break;
				
			case "ifCond":
				
				if (introjs._direction == "backward") {
					
					
					if (($("#enteredText").val() % num) == 0) {
						introjs._introItems.splice(introjs._introItems.length - 1);
					} else {
						introjs._introItems.splice(introjs._introItems.length - 1);
					}
				}
				
				break;
				
			case "cInc":
				
				if (introjs._direction == "backward") {
					$("#cVal").text( --counter );
					introjs._introItems.splice(introjs._introItems.length - 1);
				}
				
				break;
				
			case "cCupDiv":
			
				if (introjs._direction == "backward") {
					introjs._introItems.splice(introjs._introItems.length - 2);
				}
				
				break;
				
			case "breakSpan":
				console.log(" in the breakSpan of before step...");
				if (introjs._direction == "backward") {
					introjs._introItems.splice(introjs._introItems.length - 4);
				}
				
				break;
				
			case "iInc":
				if (introjs._direction == "backward") {
					$("#iVal").text( --num );
					introjs._introItems.splice(introjs._introItems.length - 1);
				}
				
				break;
				
			case "iCupDiv":
				if (introjs._direction == "backward") {
					introjs._introItems.splice(introjs._introItems.length - 2);
				}
				
				break;
				
			case "outerIf":
				
				
				break;
	
			case "restart":
				
				break;
		}
	});
	
	
	introjs.onafterchange(function(targetElement) {
		
		$('.introjs-prevbutton, .introjs-skipbutton, .introjs-nextbutton').hide();
		
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
		switch (elementId) {
		
			case "description":
				$("#description").removeClass("opacity00");
				TweenMax.to($("#line1"), 0.5, {opacity: 1, onComplete: function() {
					TweenMax.to($("#line2"), 0.5, {opacity: 1, onComplete: function() { 
						$("#example").append('<div id="primeDiv'+ tValue +'" style="padding-top: 5px;"><span id="number'
											+ tValue +'" class="opacity00">5</span>&nbsp;</div>');
						$("#description > ul li:last-child").append('&emsp;&emsp;<a class="introjs-button usr-btn"'
																+ ' onclick="nextStep()">next &#8594;</a>');
					}});
				}});
				break;
				
			case "example":
				$('.introjs-tooltip').css({'min-width' : '300px'});
				$("#example").removeClass("opacity00");
				
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass("hide");
					var text = "Let us consider a few examples to verify if a given number is prime number or not.<br><br>";
					typing('.introjs-tooltiptext', text, function() {
						//$('.introjs-tooltipbuttons').append('<a class="introjs-button skip-button" id="skipBtn" onClick="skipNext()">Skip</a>');
						exampleText();
					});
				});
				break;
				
			case "wholeLogic":
				$(".skip-button, .usr-btn").remove();
				$("#program").removeClass("opacity00");
				$('.introjs-tooltip').css({'min-width' : '200px'});
				$('.introjs-helperLayer').one('transitionend', function() {
					$(".introjs-tooltip").removeClass("hide");
					var text = "In this program we will go through the algorithm used to determine if a given number is a prime number or not.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			
			case "ifLogic":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "By using <span class='ct-code-b-yellow'>count</span> variable we are finding the given number is"
								+ " <span class='ct-code-b-yellow'>prime</span> or <span class='ct-code-b-yellow'>not</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
				
			case "intDec":
				$('.introjs-helperLayer').one('transitionend', function() {
					$(".introjs-tooltip").removeClass("hide");
					var text = "Let us declare two integer variables <span class='ct-code-b-yellow'>num</span> and"
								+ " <span class='ct-code-b-yellow'>count</span>."
								+ " <br>While <span class='ct-code-b-yellow'>count</span> is being initialized to"
								+ " <span class='ct-code-b-yellow'>0</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$(".explanation, #cCupDiv").removeClass("opacity00");
						$("#cVal").text($("#zero").text());
						fromEffectWithTweenMax("#zero", "#cVal", function() {
							
							$('.introjs-nextbutton, .introjs-prevbutton').show();
							
						});
					});
				});
				break;
				
			case "iInit":
				$('.introjs-helperLayer').one('transitionend', function() {
					$(".introjs-tooltip").removeClass("hide");
					var text = "Let us declare a variable <span class='ct-code-b-yellow'>i</span> of type"
								+ " <span class='ct-code-b-yellow'>int</span> is declared"
								+ " and initialized to <span class='ct-code-b-yellow'>2</span>."
								+ " This variable will be used while trying to find a perfect divisor."
					typing('.introjs-tooltiptext', text, function() {
						$("#iCupDiv").removeClass("opacity00");
						$("#iVal").text($("#one").text());
						fromEffectWithTweenMax("#one", "#iVal", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
				
			case "printfEnter":
			case "falsePrint":
			case "truePrint":
				$('.introjs-helperLayer').one('transitionend', function() {
					//timeOut();
					if (elementId == "printfEnter") {
						$("#console").addClass("opacity00")
					}
					
					stepNext();
				});
				break;
				
			case "console":
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#console").removeClass("opacity00");
					var consoleSteps = introjs._introItems[introjs._currentStep].consoleSteps;
					switch(consoleSteps) {
					
					case "printEnter":
						if (introjs._direction == "forward") {
							$(".console-text").removeClass("opacity00");
						} else {
							$(".console-text").addClass("opacity00");
						}
						//timeOut();
						stepNext();
						break;
						
					case "EnterNumber":
						$(".introjs-tooltip").removeClass("hide");
						
						var text = "Enter a number.";
						typing('.introjs-tooltiptext', text, function() {
							$(".console-text").append('<span id="textEnter"></span>');
							$("#textEnter").append('<input type="text" maxlength="3" spellcheck="false" class="enter-text" id="enteredText" />');
							$("#enteredText").effect("highlight", {color: 'yellow'}, 500);
							$("#enteredText").focus();
							events();
						});
						break;
						
					case "secondPrint":
						if ((counter == 0) && ($("#enteredText").val() != 1)) {
							$("#printing").append('The given number <span class="ct-code-b-yellow">' + $("#enteredText").val() + '</span>'
												+ ' is a <span class="ct-code-b-yellow">prime number</span>');
						} else {
							$("#printing").append('The given number <span class="ct-code-b-yellow">' + $("#enteredText").val() + '</span>'
												+ ' is <span class="ct-code-b-yellow">not a prime number</span>');
						}
						/*setTimeout(function() {
							introjs.nextStep();
						}, 600);*/
						stepNext();
						break;
						
					}
				});
				break;
				
			case "scanf":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "The <span class='ct-code-b-yellow'>scanf()</span> function reads the number which you want to verify as a"
								+ " prime number and stores it into the"
								+ " <span class='ct-code-b-yellow'>num</span>."; 
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});	
				break;
				
			case "whileLoop":
				$("#enteredText").attr("disabled", true);
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass("hide");
					var text = "<span class='opacity00' id='conditionCheck' class='inline-css'><span class='ct-code-b-yellow'>"
								+ "<span id='iValue' class='inline-css'>i</span></span>"
								+ " <= (<span id='nValue' class='inline-css ct-code-b-yellow'><span id='enteredVal' class='inline-css'>num"
								+ " </span> / 2</span>)</span></span>";
					typing('.introjs-tooltiptext', text, function() {
						var l1 = $("#whileLoop").offset();
						$("#conditionCheck").offset({top:l1.top, left:l1.left});
						$("#conditionCheck").removeClass("opacity00");
						TweenMax.to("#conditionCheck", 1, {top:0, left:0, onComplete: function() {
							rotationEffect("#iValue", num, function() {
								rotationEffect("#enteredVal", $("#enteredText").val(), function() {
									rotationEffect("#nValue", ($("#enteredText").val()/2), function() {
								   		$('.introjs-tooltiptext').append('<div id="text"></div>');
								   		var text1 = "since the above condition evaluates to";
								   		if (num <= ($("#enteredText").val() / 2)) {
								   			
													dynamicStep("#ifCond");
								   			
								   			var text = text1 + " <span class='ct-code-b-yellow'>true</span>."
								   						+ " The control <span class='ct-code-b-yellow'>enters</span> into the"
								   						+ " <span class='ct-code-b-yellow'>loop</span>.";
								   			typing("#text", text, function() {
												if ($("#iValue").text() <= 7) {
													$('.introjs-nextbutton, .introjs-prevbutton').show();
												} else {
													$('.introjs-nextbutton').show();
												}
								   				
								   			});
								   		} else {
								   			
												dynamicStep("#outerIf");
								   			
								   			var text = text1 + " <b class='red'>false</b>. The control"
								   						+ " <span class='ct-code-b-yellow'>comes out</span> of the"
								   						+ " <span class='ct-code-b-yellow'>loop</span>.";
								   			typing("#text", text, function() {
								   				if ($("#iValue").text() <= 7) {
													$('.introjs-nextbutton, .introjs-prevbutton').show();
												} else {
													$('.introjs-nextbutton').show();
												}
								   			});
								   		}
									});
								});
							});
						}});
					});
				});
				break;
				
			case "whileCode":
				$('.introjs-helperLayer').one('transitionend', function() {
					timeOut();
				});
				break;
				
			case "ifCond":
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass("hide");
					var text = "<span class='opacity00' id='ifCheck' class='inline-css'>(<span id='module' class='inline-css ct-code-b-yellow'>"
								+ "<span id='valueN' class='inline-css'>num</span>"
								+ " % <span id='valueI' class='inline-css'>i</span></span>)<span class='ct-code-b-yellow'> =="
								+ " <span id='zero'>0</span></span></span>";
					typing('.introjs-tooltiptext', text, function() {
						var l1 = $("#ifCond").offset();
						$("#ifCheck").offset({top:l1.top, left:l1.left});
						$("#ifCheck").removeClass("opacity00");
						TweenMax.to("#ifCheck", 1, {top:0, left:0, onComplete: function() {
							rotationEffect("#valueN", $("#enteredText").val(), function() {
								rotationEffect("#valueI", num, function() {
									rotationEffect("#module", $("#enteredText").val() % num, function() {
										$('.introjs-tooltiptext').append('<div id="text"></div>');
										var text1 = "since the above condition evaluates to";
										var text2 = " The control <span class='ct-code-b-yellow'>";
										if (($("#enteredText").val() % num) == 0) {
											
												dynamicStep("#cInc");
											
									   		var text = text1 + " <span class='ct-code-b-yellow'>true</span>." + text2
									   					+ "enters</span> into the <br><span class='ct-code-b-yellow'>if-block</span>.";
											typing("#text", text, function() {
												$('.introjs-nextbutton, .introjs-prevbutton').show();
											});
										} else {
											
												dynamicStep("#iInc");
											
											var text = text1 + " <b class='red'>false</b>." + text2 
														+ "comes out</span> of the <br><span class='ct-code-b-yellow'>if-block</span>.";
											typing("#text", text, function() {
												$('.introjs-nextbutton, .introjs-prevbutton').show();
											});
										}
							   		});
							   	});
							});
						}});
					});
				});
				break;
				
			case "cInc":
				
				$('.introjs-helperLayer').one('transitionend', function() {
					
					if (introjs._direction == "backward") {
						//$("#cVal").text( --counter );
					} else {
						counter++;
						dynamicStep("#cCupDiv");
					}
					stepNext();
				});
				break;
				
			case "cCupDiv":
				$('.introjs-helperLayer').one('transitionend', function() {
					
					if (introjs._direction == "forward") {
						dynamicStep("#breakSpan");
						countValue(".count-cup", "#cVal", counter);
					} else {
						stepNext();
					}
					
				});
				break;
				
			case "breakSpan":
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass("hide");
					
						dynamicStep("#outerIf");
					var text = "The <span class='ct-code-b-yellow'>break</span> statement will terminate the"
								+ " <span class='ct-code-b-yellow'>while-loop</span> and"
								+ " the control comes out of <span class='ct-code-b-yellow'>while-loop</span> block.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
				
			case "iInc":
				$('.introjs-helperLayer').one('transitionend', function() {
					
					if (introjs._direction == "backward") {
						//$("#iVal").text( --num );
						stepNext();
					} else {
						num++;
						if (num <= 7) {
							dynamicStep("#iCupDiv");
							stepNext();
						} else {
							primeNumber(num);
						}
					}
					
				});
				break;
				
			case "iCupDiv":
				$('.introjs-helperLayer').one('transitionend', function() {
						
						if (introjs._direction == "forward") {
							dynamicStep("#whileLoop");
							countValue(".i-cup", "#iVal", num);
						} else {
							stepNext();
						}
						
						
					
				});
				break;
				
			case "outerIf":
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass("hide").css({'min-width' : '250px'});
					var text = "<span class='ct-code-b-yellow opacity00' id='outer'>(<span id='outerIfCond' class='inline-css'>count</span> =="
								+ " <span id='countVal'>0</span>) && (<span id='secondIf' class='inline-css'>num</span> != 1)</span>";
					typing('.introjs-tooltiptext', text, function() {
						var l1 = $("#outerIf").offset();
						$("#outer").offset({top:l1.top, left:l1.left});
						$("#outer").removeClass("opacity00");
						TweenMax.to("#outer", 1, {top:0, left:0, onComplete: function() {
							rotationEffect("#outerIfCond", counter, function() {
								rotationEffect("#secondIf", $("#enteredText").val(), function() {
									var text1 = "since the above condition evaluates to";
									var text2 = " The control enters into the";
									if ((counter == 0) & ($("#enteredText").val() != 1)) {
										
											
											introjs.insertOption(introjs._currentStep + 1, getStep("#truePrint", "", "hide", "right"));
											introjs.insertOption(introjs._currentStep + 2, getStep("#console", "", "hide", "right", "secondPrint"));
											introjs.insertOption(introjs._currentStep + 3, getStep("#restart", "Click to restart.", "", "right"));
										
										$('.introjs-tooltiptext').append('<div class="outer-text"></div>')	
										var text =  text1 + " <span class='ct-code-b-yellow'>true</span>." + text2
													+ " <span class='ct-code-b-yellow'>if-block</span>.";
										typing('.outer-text', text, function() {
											
											if ($("#iValue").text() <= 7) {
												$('.introjs-nextbutton, .introjs-prevbutton').show();
											} else {
												$('.introjs-nextbutton').show();
											}
										});
									} else {
										
											introjs.insertOption(introjs._currentStep + 1, getStep("#falsePrint", "", "hide", "right"));
											introjs.insertOption(introjs._currentStep + 2, getStep("#console", "", "hide", "right", "secondPrint"));
											introjs.insertOption(introjs._currentStep + 3, getStep("#restart", "Click to restart.", "", "right"));
											
										$('.introjs-tooltiptext').append('<div id="outerText"></div>');
										var text = text1 + " <b class='red'>false</b>." + text2
													+ " <span class='ct-code-b-yellow'>else-block</span>.";
										typing('#outerText', text, function() {
											
											if ($("#iValue").text() <= 7) {
												$('.introjs-nextbutton, .introjs-prevbutton').show();
											} else {
												$('.introjs-nextbutton').show();
											}
										});
									}
									
								});
							});
						}});
					});
				});
				break;
	
			case "restart":
				$('.introjs-tooltip').css("min-width","200px");
				$(".introjs-tooltip").css({"min-width" : "110px"});
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#restart").removeClass("opacity00");
				});
				break;
		}
	});
	introjs.start();
}

function typing(typingId, typingContent,callBackFunction) {
	$(typingId).typewriting( typingContent , {
		"typing_interval": typingInterval,
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}

function nextStep() {
	$(".usr-btn").remove();
	introjs.nextStep();
}

function getStep(element, intro, tooltipClass, position, consoleSteps) {
	var step = {};
	if (typeof element != 'undefined') {
		step['element'] = element;
	}
	if (typeof intro != 'undefined') {
		step['intro'] = intro;
	}
	if (typeof tooltipClass != 'undefined') {
		step['tooltipClass'] = tooltipClass;
	}
	if (typeof position != 'undefined') {
		step['position'] = position;
	}
	
	if (typeof consoleSteps != 'undefined') {
		step['consoleSteps'] = consoleSteps;
	}
	return step;
}

function timeOut() {
	setTimeout(function() {
		introjs.nextStep();
	}, 400);
}

function dynamicStep(id) {
	var newStep = getStep(id, '', 'hide', 'right', '');
	introjs.insertOption(introjs._currentStep + 1, newStep);
}

//====examples function====
function exampleText() {
	$(".usr-btn").remove();
	if (tValue == 2) {
		//$('.introjs-tooltipbuttons').append('<a class="introjs-button skip-button" id="skipBtn" onClick="skipNext()">Skip</a>');
	}
	$(".introjs-tooltipbuttons").append('<a class="introjs-button usr-btn visibility-hidden" onClick="dividing()">Next &#8594;</a>');
	$("#appendText").remove();
	$('.introjs-tooltiptext').append('<div id="appendText"><ul><li></li></ul></div>');
	if (tValue == 1) {
		$('#primeDiv'+ tValue).removeClass("opacity00");
	} else if (tValue == 2) {
		$("#example").append('<br><div id="primeDiv'+ tValue +'"><span id="number'+ tValue +'" class="opacity00">45</span></div>');
	} else {
		$("#example").append('<br><div id="primeDiv'+ tValue +'" style="padding-bottom: 5px;">'
						+ '<span id="number'+ tValue +'" class="opacity00">47</span></div>');
	}
	introjs.refresh();
	var text = "Let us consider a number <span class='ct-code-b-yellow'>" + $("#number" + tValue).text() + "</span>.";
	typing('#appendText > ul li:last-child', text, function() {
		$("#number" + tValue).removeClass("opacity00");
		$(".usr-btn").removeClass("visibility-hidden");
	});
}

function dividing() {
	$(".usr-btn").remove();
	$(".introjs-tooltipbuttons").append('<a class="introjs-button usr-btn visibility-hidden" onClick="checkPrime()">Next &#8594;</a>');
	$('#appendText > ul').append('<li></li>');
	var text = "We will try to divide <span class='ct-code-b-yellow'>" + $("#number" + tValue).text() + "</span> with all numbers between"
				+ " <span class='ct-code-b-yellow'>1</span> and <span class='ct-code-b-yellow'>" + $("#number" + tValue).text() +"</span>.";
	typing("#appendText > ul li:last-child", text, function() {
		$(".usr-btn").removeClass("visibility-hidden");
	});
}

function checkPrime() {
	$(".usr-btn").remove();
	if ((tValue) < 3) {
		$(".introjs-tooltipbuttons").append('<a class="introjs-button usr-btn visibility-hidden" onClick="exampleText()">Next &#8594;</a>');
	} else {
		$(".introjs-tooltipbuttons").append('<a class="introjs-button usr-btn visibility-hidden" onClick="nextStep()">Next &#8594;</a>');
	}
	$("#primeDiv"+ tValue).append('&emsp;<span id="fa'+ tValue +'"><i class="fa fa-arrow-right display-inline-block"></i>');
	lValue = 2;
	$("#divisors"+ tValue).append('<span id="fa1'+ tValue +'" class="opacity00">6&emsp;</span>'
								+ '<i class="fa fa-arrow-right opacity00 display-inline-block">'
								+ '</i>&emsp;<span id="findingNumber"></span>');
	$("#fa" + tValue).append('&emsp;<span id="dividors' + tValue + '"><span id="multiples' + tValue +'">' 
							+ $("#number" + tValue).text() + '</span> / '
							+ '<span id="divisions' + tValue +'">' + lValue + '</span>&nbsp;'
							+ '<i class="fa fa-arrow-right display-inline-block"></i>&nbsp;</span>');
	$("#fa" + tValue).append('<span id="divisorText' + tValue + '"></span><span id="primeNumberText' + tValue + '"></span>');
	changeValue(2);
}

function changeValue(i) {
	if (i <= ($('#number' + tValue).text() - 1)) {
		$('#divisions' + tValue).text(i);
		if (($('#multiples' + tValue).text() % $('#divisions' + tValue).text()) == 0) {
			$('#divisorText' + tValue).removeClass("red").addClass("green");
			$('#divisorText' + tValue).text((i) + ' is a perfect divisor');
			pVal++;
			setTimeout(function() {
				checking(pVal);
			}, 400);
		} else {
			$('#divisorText' + tValue).removeClass("green").addClass("red");
	        $('#divisorText' + tValue).text((i) + ' is not a perfect divisor');
        	iValueIncrement(i);
	   	}
	} else {
		checking(pVal);
	}
	introjs.refresh();
}

function iValueIncrement(i) {
	if (i <= ($('#number' + tValue).text())	) {
		i++;
	  	if (i <= 5) {
			setTimeout(function() {
	  			$('#divisions' + tValue).effect('highlight', {color: 'yellow'}, 200, function() {
					changeValue(i);
				});
			}, 400);
	  	} else {
			$('#divisions' + tValue).effect('highlight', {color: 'yellow'}, 100, function() {
		  			changeValue(i);
			});
	  	}
	}
}

function checking(pVal) {
	$("#dividors" + tValue).addClass("hide");
	if (pVal == 0) {
		//$('#divisorText' + (tValue)).removeClass("green red");
		$('#divisorText' + tValue).text('');
		$('#primeNumberText' + (tValue)).append("Since " + $('#number' + (tValue)).text() + " is not divisible by any number between 1 and "
										+ $('#number' + (tValue)).text() + ";<br> &emsp; &emsp; &emsp; <b class='green'>"
										+ $('#number' + (tValue)).text() + " is a prime number</b>.");
     } else {
		//$('#divisorText' + (tValue)).removeClass("green red");
		$('#primeNumberText' + (tValue)).append(". Since " + $('#number' + (tValue)).text() + " is perfectly divisible by "
										+ $('#divisions' + tValue).text() + ";<br> &emsp; &emsp; &emsp; <b class='red'>"
										+ $('#number' + (tValue)).text() + " is not a prime number</b>.");
    }
	introjs.refresh();
	tValue++;
	primeText();
}

function primeText() {
	pVal = 0;
	$('#appendText > ul').append('<li></li>');
	var text1 = "Hence <span class='ct-code-b-yellow'>" + $("#number" + (tValue - 1)).text() + "</span> is ";
	if ((tValue - 1) == 2) {
		var text = text1 + "<span class='ct-code-b-yellow'>not a prime number</span>.";
	} else {
		var text = text1 + "<span class='ct-code-b-yellow'>a prime number</span>.";
	}
	typing('#appendText > ul li:last-child', text, function() {
		$(".usr-btn").removeClass("visibility-hidden");
	});
}
//====example functions end====

function skipNext() {
	$(".usr-btn").remove();
	introjs.nextStep();
	$("#example").remove();
}
	
function events() {
	$("#enteredText").on("keydown", function(e) {
		var max = $(this).attr("maxlength");
		
		//backspace = 8, delete = 46, leftarrow = 37, rightarrow = 39, esc = 27, enter = 13, ctrl = 17, tab = 9;
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		
		if (e.keyCode == 13 || e.keyCode === 9) {
			e.preventDefault();
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96) || (e.keyCode > 105)) {
			e.preventDefault();
		}
		$('.error-text').remove();
		if ($(this).val().length > max-1) {
			$('.introjs-tooltiptext').append("<span class='ct-red error-text'><br/>Please restrict the number maximum length to 3 digits.</span>");
			e.preventDefault();
		}
	});
		
	$("#enteredText").on("keyup", function(e) {
		if ($("#enteredText").val().length < 1) {
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		} else {
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		}
	});
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$(selector2).addClass("z-index");
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		$(selector2).removeClass("z-index");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function rotationEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : 90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

//===i value increment based on n===
function primeNumber(value) {
	
		if (value <= ($("#enteredText").val() - 1)) {
			if ((value <= ($("#enteredText").val() / 2)) && ($("#enteredText").val() % value == 0)) {
				counting();
			} else {
				num++;
				value++;
				primeNumber(value);
			}
		} else {
			counting();
		}
}

function counting() {
	
	$('.introjs-tooltip').removeClass("hide");
	var text = "Similarly loop continuosly runs upto <span class='ct-code-b-yellow'>i = " + (num - 1) + "</span>. ";
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-tooltiptext').append("<div id='numText'></div>");
		var text = "<br><span class='ct-code-b-yellow'>i</span> value incremented to <span class='ct-code-b-yellow'>"
					+ (num)+"</span>"; 
		typing("#numText", text, function() {
				dynamicStep("#iCupDiv");
			$('.introjs-nextbutton').show();
		});	
	});	
}
//====end====
	
function countValue(selector1, selector2, val) {
	$(selector1).css({'color': 'lightpink'});
	rotationEffect(selector2, val, function () {
		if ($(selector2).text().length == 2) {
			$(selector2).css({'margin-left' : '11px'});
		} else if ($(selector2).text().length == 3) {
			$(selector2).css({'margin-left' : '8px'});
		}
		setTimeout(function() {
			$(selector1).css({'color': '#e1e1e1'});
			stepNext();
		}, 400);
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
