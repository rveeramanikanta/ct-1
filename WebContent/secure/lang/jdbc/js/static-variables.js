var introjs;
var tl;
var i = 1;
var count = 0;

var staticVariablesReady = function() {
	introGuide();
	tl = new TimelineLite();
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		exitOnOverlayClick: false,
		keyboardNavigation: false,
		exitOnEsc: false,
		showStepNumbers: false,
		showBullets: false,
		steps : [ {
			element : "#codeAnimation",
			intro : "",
			position : "right",
		}, {
			element : "#functionDec",
			intro : "",
			position : "right",
		}, {
			element : "#mainFunction",
			intro : "",
			position : "right",
		}, {
			element : "#functionDef",
			intro : "",
			position : "right",
		}, {
			element : "#startMain",
			intro : "",
			tooltipClass : "hide",
			stepFlag: "false"
		}, {
			element : "#endMain",
			intro : "",
			tooltipClass : "hide",
			stepFlag: "false"
		}, {
			element : "#restart",
			intro : "Click to restart.",
			position : "right"
		} ]
	});
	
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
			case "codeAnimation":
				$("#codeAnimation").addClass("display");
			break;
			case "functionDec":
			break;
			case "mainFunction":
			break;
			case "functionDef":
			break;
			case "startMain":
			break;
			case "functionCall" + i:
			break;
			case "varDec":
				if (introjs._currentStep == 6) {
					$("#boxHeading, #functionBox").css({'opacity' : '0'})
					$("#localVal").addClass("opacity00");
					$("#animationBox").addClass("opacity00");
					$("#varDec").removeClass("blinking-white");
				}
				if(count != 0) {
					$("#varDec").text("int i = 1;");
				}
			break;
			case "animationBox":
				if (introjs._currentStep == 7) {
					$("#animationBox").addClass("opacity00");
				}
					if((i < 4) && (count == 0)) {
						$("#lVal").text(1);
						if( i == 1) {
							$("#boxHeading, #functionBox").css({'opacity' : '0'})
							$("#localVal").addClass("opacity00");
						}
						$("#localVal, #lVal").css({'opacity' : '0'});
					} else {
						if(i == 1) {
							$("#lVal").text(1);
							$("#localVal").css({opacity: '0'})
						}
						$("#lVal").css({opacity: '0'});
						$("#lVal").addClass("opacity00");
					}
				break;
				
			case "localVal":
				$("#lVal").text(1);
				$("#localVal").removeClass("blinking-white");
				$("#localVal, #lVal").css({opacity: '1'});
				$("#localVal, #lVal").removeClass("opacity00");
				break;
			case "printf":
			break;
			case "iInc":
			break;
			case "consoleId":
				if (introjs._currentStep == 10) {
					$("#lVal").text(1);
				}
			break;
			case "endFunc":
				if(i < 4 && count == 0) {
					$("#localVal").removeClass("blinking-white");
					$("#localVal, #lVal").css({opacity: '1'})
					$("#localVal, #lVal").removeClass("opacity00");
				} else {
				}
				break;
			case "endMain":
			break;
		}
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		introjs.refresh();
		// ********************** start ************back button logic
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
		// ********************** end ************back button logic
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "codeAnimation":
			$("#codeAnimation").removeClass("opacity00");
			if(count == 1) {
				$(".console-print").empty();
				$("#codeAnimation").removeClass("display");
				var text = "Now we will try the same program by using a <span class='ct-code-b-yellow'>static variable</span> " 
							+ " in function <span class='ct-code-b-yellow'>display()</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			} else {
				$("#codeAnimation").addClass("display");
				var text = "This is the program to understand the behavior of <span class='ct-code-b-yellow'>static variables</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			}
			
			break;
			
		case "functionDec":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us declare a function <span class='ct-code-b-yellow'>display()</span> " 
							+ " with return type <span class='ct-code-b-yellow'>void</span> (does <y>not</y> return any value).";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "mainFunction":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The <span class='ct-code-b-yellow'>main()</span> method here has <y>three</y> calls to the "
							+ "<span class='ct-code-b-yellow'>display()</span> function.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "functionDef":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is the function <span class='ct-code-b-yellow'>display()</span> which prints the value of an <y>int</y> variable"
							+ " <span class='ct-code-b-yellow'>i</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "startMain":
			$(".introjs-helperLayer").one("transitionend", function() {
				if(count == 0 && introjs._introItems[introjs._currentStep].stepFlag == "false") {
					introjs._introItems[introjs._currentStep].stepFlag = "true";
					dynamicSteps();
				}
				setTimeout(function() {
					if (introjs._direction == 'forward') {
						introjs.nextStep();
					} else {
						introjs.previousStep();
					}
				}, 500);
			});
			break;
			
		case "functionCall" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "A call to the <span class='ct-code-b-yellow'>display()</span> function is made.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "varDec":
			$(".introjs-helperLayer").one("transitionend", function() {
				if(count == 0) {
					var text = "A local variable <span class='ct-code-b-yellow'>i</span> of type <b class='ct-code-b-yellow'>int</b> is declared inside the "
								+ "<span class='ct-code-b-yellow'>display()</span> function."; 
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				} else {
					flipEffect("#varDec", "static int i = 1;", function() {
						$("#varDec").text('').append("<span class='ct-green-color'>static</span> int i = 1;");
						introjs.refresh();
						$('.introjs-tooltip').removeClass("hide");
						var text = "We are initializing the <y>local</y> variable <span class='ct-code-b-yellow'>i</span> of type <span "
							+"class='ct-code-b-yellow'>int</span> with the" 
									+ " <span class='ct-code-b-yellow'>static</span> keyword.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				}
			});
			break;
			
		case "animationBox":
			$("#animationBox").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				if((i < 4) && (count == 0)) {
					$("#lVal").text(1);
					$('.introjs-tooltip').removeClass("hide");
					var text = "The variable <span class='ct-code-b-yellow'>i</span> is allocated <span class='ct-code-b-yellow'>2</span> bytes in memory and the value "
								+ "<span class='ct-code-b-yellow'>1</span> is stored in the memory of <span class='ct-code-b-yellow'>i</span>.";
					typing(".introjs-tooltiptext", text, function() {
						if( i == 1) {
							tl.to("#boxHeading, #functionBox", 0.5, {opacity: 1, onComplete: function() {
								$("#varDec").addClass("blinking-white");
								$("#localVal").removeClass("opacity00");
							}});
						}
						tl.to("#localVal", 0.5, {opacity: 1, onComplete: function() {
							$("#localVal").removeClass("opacity00");
						}});
						tl.to("#lVal", 0.5, {opacity: 1, onComplete: function() {
							$("#lVal").removeClass("opacity00");
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						}});
					});
				} else {
					if(i == 1) {
						$("#lVal").text(1);
						tl.to("#localVal", 0.5, {opacity: 1, onComplete: function() {
							$("#localVal").removeClass("opacity00");
						}});
					}
					$("#lVal").effect("highlight", {color: 'blue'}, 500, function() {
						flipEffect("#lVal", i, function() {
							tl.to("#lVal", 0.5, {opacity: 1, onComplete: function() {
								$("#lVal").removeClass("opacity00");
								$('.introjs-tooltip').removeClass("hide");
								if(i > 1) {
									var text = "The value <y>" + i + "</y> is incremented and stored in the memory allocated for"
												+ " <span class='ct-code-b-yellow'>i</span>.";
								} else {
									var text = " <ul><li>Here the <span class='ct-code-b-yellow'>static</span> variable <span class='ct-code-b-yellow'>"
												+ "i</span> is created once, but <y>persists</y> till the end of the program.</li>" 
												+ "<li>The <y>scope</y> of the variable <span class='ct-code-b-yellow'>i</span> is within the function"
												+ " <span class='ct-code-b-yellow'>display()</span>.</li>" 
												+ "<li>The <y>same</y> variable <b class='ct-code-b-yellow'>i</b> is used when a call to the function is made again.</li>" 
												+ "<li>Here the value <b class='ct-code-b-yellow'>" + i + "</b> is stored at the memory allocated for"
												+ " <span class='ct-code-b-yellow'>i</span>.</li></ul>";
								}
								typing(".introjs-tooltiptext", text, function() {
									if(i < 4 && introjs._introItems[introjs._currentStep].stepFlag == "false") {
										introjs._introItems[introjs._currentStep].stepFlag = "true";
										dynamicSteps();
									}
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								});
							}});
						});
					});
				}
			});
			break;
			
		case "localVal":
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.introjs-tooltip').removeClass('hide');
				if (introjs._direction == 'backward') {
					--i;
				}
				if (i < 4) {
					var text = "The value <span class='ct-code-b-yellow'>i</span> gets <span class='ct-code-b-yellow'>incremented</span> after"
								+ " it gets displayed on the console.";
					typing(".introjs-tooltiptext", text, function() {
						$("#lVal").effect("highlight", {color: 'blue'}, 500, function() {
							$("#lVal").text(2);
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				} else {
					var text = 'The static variables are destroyed at the end of the execution of the program.';
					typing('.introjs-tooltiptext', text, function() {
						$("#localVal").addClass("blinking-white");
						tl.to("#localVal", 0.5, {opacity: 0, onComplete: function() {
							$("#localVal, #lVal").addClass("opacity00");
							$("#localVal").removeClass("blinking-white");
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						}});
					})
				}
			});
			break;
			
		case "printf":
			$("#varDec").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() {
				if(count == 1) {
					$('.introjs-tooltip').removeClass("hide");
					var text1 = "The value of the <span class='ct-code-b-yellow'>static</span> variable <span class='ct-code-b-yellow'>i</span> is "
									+ "<span class='ct-code-b-yellow'>"+ i + "</span>, which is the value ";
					if (i == 1) {
						var text2 = "initialized before the <y>execution</y> of the program";
					} else {
						var text2 = "incremented when the <y>previous call</y> to the function <span class='ct-code-b-yellow'>display()</span> was made.";
					}
					var text = text1 + text2 + "<br><br> This <span class='ct-code-b-yellow'>printf()</span> function prints the value of "
								+ "<span class='ct-code-b-yellow'>i</span>(i.e., <span class='ct-code-b-yellow'>" + i
								+ "</span>) on the standard output device(console).";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				} else {
					setTimeout(function() {
						if (introjs._direction == 'forward') {
							introjs.nextStep();
						} else {
							introjs.previousStep();
						}
					}, 500);
				}
			});
			break;
			
		case "iInc":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here, the value of <span class='ct-code-b-yellow'>i</span> is printed in the console before it gets <y>incremented</y>.";  
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "consoleId":
			$("#consoleId").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._direction == 'forward') {
					$(".output-console-body").append('<div id="runEditor' + i + '" class="console-print"></div>')
					if(count == 1) {
						var text = "i = " + i;
					} else {
						var text = "i = 1";
					}
					typing("#runEditor" + i, text, function() {
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					});
				} else {
					if (count != 1) {
						$('#lVal').text('1');
					}
					setTimeout(function() {
						$(".output-console-body div:last").remove();
						introjs.previousStep();
					}, 500);
				}
			});
			break;
			
		case "endFunc":
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.introjs-tooltip').removeClass('hide');
				if (count == 1 && introjs._direction == 'backward') {
					i = 4;
					--count;
					for (let t = 1; t <= 3; t++) {
						$('.output-console-body').append('<div id="runEditor' + t + '">i = 1</div>');
					}
				}
				if(i < 4 && count == 0) {
					$("#localVal").addClass("blinking-white");
					var text = "When the <span class='ct-code-b-yellow'>display()</span> function ends, all the <span class='ct-code-b-yellow'>"
								+ "local</span> variables will be <span class='ct-code-b-yellow'>destroyed</span>.";
					typing(".introjs-tooltiptext", text, function() {
						tl.to("#localVal", 0.5, {opacity: 0, onComplete: function() {
							$("#localVal").addClass("opacity00");
							$("#lVal").addClass("opacity00");
							$("#lVal").css("opacity", 0);
							$("#localVal").removeClass("blinking-white");
							if (introjs._direction == "forward") {
								++i;
							} 
							if(i < 4 && introjs._introItems[introjs._currentStep].stepFlag == "false") {
								introjs._introItems[introjs._currentStep].stepFlag = "true";
								dynamicSteps();
							}
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						}});
					});
				} else {
					if (introjs._direction == "forward") {
						++i;
					}
					var text = "<span class='ct-code-b-yellow'>display()</span> function ends here.<br><br> The static variable "
						+ " <span class='ct-code-b-yellow'>i</span> will not be <y>destroyed</y> and will persist till the end of the program."; 
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				}
			});
			break;
			
		case "endMain":
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._direction == 'forward') {
					++count;
				}
				if(count == 1 && introjs._introItems[introjs._currentStep].stepFlag == "false") {
					introjs._introItems[introjs._currentStep].stepFlag = "true";
					i = 1;
					staticSteps();
				}
				setTimeout(function() {
					if (introjs._direction == 'forward') {
						introjs.nextStep();
					} else {
						introjs.previousStep();
					}
				}, 500);
			});
			break;
			
		case "restart":
			$('.introjs-tooltip').css({'min-width' : '120px'});
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restart").removeClass("opacity00");
				$("#restart").click(function() {
					location.reload();
				});
			});
			break;
		}
	});
	introjs.start();
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting( text , {
		"typing_interval": 5,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}

function flipEffect(element, value, callBackFunction) {
	tl.to(element, 0.5, {opacity:1, rotationX: -90, onComplete: function() {
		$(element).text(value);
	}});
	tl.to(element, 0.5, {opacity:1, rotationX: 0, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function getStep(element, intro, tooltipClass, position, stepFlag) {
	var step = {}
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
	if (typeof stepFlag != 'undefined') {
		step['stepFlag'] = stepFlag;
	}
	return step;
}

function dynamicSteps() {
	if (introjs._introItems[introjs._currentStep]["visited_flag"] == undefined) {
		introjs._introItems[introjs._currentStep]["visited_flag"] = true;
		console.log(introjs._introItems[introjs._currentStep]["element"]["id"] + ' This is visiting flag  ' + introjs._currentStep );
		
		var n = 0;
		var dynamicStep = getStep("#functionCall" + i, "", "", "right");
		introjs.insertOption(introjs._currentStep + ++n, dynamicStep);

		if(count != 1) {
			var dynamicStep = getStep("#varDec", "", "", "right");
			introjs.insertOption(introjs._currentStep + ++n, dynamicStep);
		
			var dynamicStep = getStep("#animationBox", "", "hide", "left", "false");
			introjs.insertOption(introjs._currentStep + ++n, dynamicStep);
		}
		
		var dynamicStep = getStep("#printf", "", "hide", "right");
		introjs.insertOption(introjs._currentStep + ++n, dynamicStep);
		
		var dynamicStep = getStep("#iInc", "", "", "right");
		introjs.insertOption(introjs._currentStep + ++n, dynamicStep);
		
		var dynamicStep = getStep("#consoleId", "", "hide", "");
		introjs.insertOption(introjs._currentStep + ++n, dynamicStep);
		if ($("#codeAnimation").hasClass("display")) {
			var dynamicStep = getStep("#localVal", "", "hide", "left");
			introjs.insertOption(introjs._currentStep + ++n, dynamicStep);
		}
		
		var dynamicStep = getStep("#endFunc", "", "hide", "right", "false");
		introjs.insertOption(introjs._currentStep + ++n, dynamicStep);
		
		if(count == 1) {
			var dynamicStep = getStep("#animationBox", "", "hide", "left", "false");
			introjs.insertOption(introjs._currentStep + ++n, dynamicStep);
		}
		
		if(i == 3 && count == 0) {
			var dynamicStep = getStep("#endMain", "", "hide", "right", "false");
			introjs.insertOption(introjs._currentStep + ++n, dynamicStep);
		}
	}
}

function staticSteps() {
	var step = 0;
	var dynamicStep = getStep("#codeAnimation", "", "", "right","false");
	introjs.insertOption(introjs._currentStep + ++step, dynamicStep);

	var dynamicStep = getStep("#functionDec", "", "", "right","false");
	introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
	
	var dynamicStep = getStep("#mainFunction", "", "", "right","false");
	introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
	
	var dynamicStep = getStep("#functionDef", "", "", "right","false");
	introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
	
	var dynamicStep = getStep("#varDec", "", "hide", "top","false");
	introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
	
	var dynamicStep = getStep("#animationBox", "", "hide", "left", "false");
	introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
}