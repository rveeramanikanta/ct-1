var introjs;
var typingSpeed = 1;
var tl;
var presentStep = 0;

var localGlobalVariablesReady = function() {
	introGuide();
	tl = new TimelineLite();
	$("#address1").text(Math.floor((Math.random() * 1024) + 1986));
	$("#address2").text(Math.floor((Math.random() * 1024) + 1996));
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		keyboardNavigation: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		showBullets: false,
		steps : [ {
			element : "#heading",
			intro : "",
			position : "right",
		}, {
			element : "#codeAnimation",
			intro : "",
			position : "right",
			tooltipClass : "hide"
		}, {
			element : "#funcDec",
			intro : "",
			position : "right",
		}, {
			element : "#globalVar",
			intro : "",
			position : "right",
		}, {
			element : "#addressDiv",
			intro : "",
			tooltipClass : "hide",
			position : "left",
		}, {
			element : "#mainFunc",
			intro : "",
			tooltipClass : "hide",
		}, {
			element : "#funcDef",
			intro : "",
			position : "right",
		}, {
			element : "#startMain",
			intro : "",
			tooltipClass : "hide",
		}, {
			element : "#localVar",
			intro : "",
			position : "right",
		}, {
			element : "#addressDiv",
			intro : "",
			tooltipClass : "hide",
			position : "left",
		}, {
			element : "#mainPf1",
			intro : "",
			tooltipClass : "hide",
			position : "right",
		}, {
			element : "#consoleId",
			intro : "",
			tooltipClass : "hide",
		}, {
			element : "#functionCall",
			intro : "",
			position : "right",
		}, {
			element : "#valRes",
			intro : "",
			position : "right",
		}, {
			element : "#valDec",
			intro : "",
		}, {
			element : "#valAddition",
			intro : "",
			position : "right",
		}, {
			element : "#addressDiv",
			intro : "",
			tooltipClass : "hide",
			position : "left",
		}, {
			element : "#userPrintf",
			intro : "",
			tooltipClass : "hide",
			position : "right",
		}, {
			element : "#consoleId",
			intro : "",
			tooltipClass : "hide",
		}, {
			element : "#endFunc",
			intro : "",
			position : "right",
		}, {
			element : "#mainPf2",
			intro : "",
			tooltipClass : "hide",
			position : "right",
		}, {
			element : "#consoleId",
			intro : "",
			tooltipClass : "hide",
		}, {
			element : "#endMain",
			intro : "",
			position : "right",
		}, {
			element : "#restart",
			intro : "Click to restart.",
			tooltipClass : "introjs-tooltip-min-width",
			position : "right"
		} ]
	});
	
	introjs.onafterchange(function(targetElement) {
		
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			if (introjs._currentStep != 0) {
				$('.introjs-prevbutton').show();
			}
			$('.introjs-nextbutton').show();
			if ([introjs._currentStep] == 0) {
				$('#codeAnimation').addClass("opacity00");
			}
			if ([introjs._currentStep] == 3) {
				$('#addressDiv').addClass("opacity00");
			}
			if ([introjs._currentStep] == 8) {
				$("#boxHeading, #varBox").removeAttr("style").addClass("opacity00");
			}
			if ([introjs._currentStep] == 13) {
				$(".blinking-white").removeClass("blinking-white");
			}
			if ([introjs._currentStep] == 14) {
				$("#globalVar").addClass("blinking-white");
			}
			if ([introjs._currentStep] == 15) {
				$('#gVal').text("50");
			}
			return;
		}
		
		
		if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
			introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		}
		
		switch (elementId) {
		case "heading":
			var text = "Let us understand <span class='ct-code-b-yellow'>Local and Global</span> variables.";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-nextbutton").show();
			});
			break;
			
		case "codeAnimation":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#codeAnimation").removeClass("opacity00");
				$('.introjs-tooltip').removeClass("hide");
				var text = "Consider an example.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "funcDec":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "We declare a function <span class='ct-code-b-yellow'>display()</span> with <span class='ct-code-b-yellow'>no" 
							+ " arguments</span> and with <span class='ct-code-b-yellow'>no</span> return value.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "globalVar":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "A variable <span class='ct-code-b-yellow'>a</span> is declared out side the " 
							+ "<span class='ct-code-b-yellow'>main()</span> method.<br><br> These variables that are declared "
							+ "<span class='ct-code-b-yellow'>out side</span> of any method are" 
							+ " called <span class='ct-code-b-yellow'>global variables</span>. <br><br>They are available"
							+ " <span class='ct-code-b-yellow'>throughout</span> the program.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "startMain":
		case "mainFunc":
			$("#globalVar").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._direction == "backward") {
						introjs.previousStep();
				} else {
					setTimeout(function() {
						introjs.nextStep();
					}, 500);
				}
			});
			break;
			
		case "funcDef":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is the definition of the function <span class='ct-code-b-yellow'>display()</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "addressDiv":
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#addressDiv').removeClass("opacity00");
				if(introjs._currentStep == 4) {
					$("#gVal").text(50);
					var l1 = $("#tweenVal1").offset();
					$("#gVal").offset({"top": l1.top, "left": l1.left});
					$("#globalVar").addClass("blinking-white");
					tl.to("#globalVal", 1, {opacity: 1, onComplete: function() {
						$("#globalVar").removeClass("opacity00, blinking-white");
						$("#tweenVal1, gVal").addClass("blinking-white");
						$("#gVal").removeClass("opacity00");
						tl.to("#gVal", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
							$("#tweenVal1, #gVal").removeClass("blinking-white");
							$('.introjs-tooltip').removeClass("hide");
							var text = "The variable <span class='ct-code-b-yellow'>a</span> is allocated 2 bytes in memory and assigned" 
										+ " with value <b class='ct-code-b-yellow'>50</b>.";
							typing(".introjs-tooltiptext", text, function() {
								$(".introjs-nextbutton, .introjs-prevbutton").show();
							});
						}});
					}});
				} else if(introjs._currentStep == 9) {
					$("#lVal").text(20);
					var l1 = $("#tweenVal2").offset();
					$("#lVal").offset({"top": l1.top, "left": l1.left});
					$("#localVar").addClass("blinking-white");
					tl.to("#boxHeading, #varBox", 1, {opacity: 1, onComplete: function() {
						$("#localVar").removeClass("opacity00, blinking-white");
						$("#tweenVal2, #lVal").addClass("blinking-white");
						$("#lVal").removeClass("opacity00");
						tl.to("#lVal", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
							$("#tweenVal2, #lVal").removeClass("blinking-white");
							$('.introjs-tooltip').removeClass("hide");
							var text = "The variable <span class='ct-code-b-yellow'>a</span> is allocated 2 bytes in memory and assigned" 
										+ " with value <b class='ct-code-b-yellow'>20</b>."; 
							typing(".introjs-tooltiptext", text, function() {
								$(".introjs-nextbutton, .introjs-prevbutton").show();
							});
						}});
					}});
				} else {
					$("#gVal").text(50);
					$("#valRes").effect( "transfer", { to: $("#gVal"), className: "ui-effects-transfer" }, 1000 , function() {
						tl.to("#gVal", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
							$("#gVal").text(70);
							tl.to("#gVal", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
								$('.introjs-tooltip').removeClass("hide");
								var text = "Now <span class='ct-code-b-yellow'>global</span> variable <span class='ct-code-b-yellow'>a</span>"
											+ " becomes <b class='ct-code-b-yellow'>70</b>.";
								typing(".introjs-tooltiptext", text, function() {
									$(".introjs-nextbutton, .introjs-prevbutton").show();
								});
							}});
						}});
					});
				}
			});
			break;
			
		case "functionCall":
			$("#localVar").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() { 
				var text = "A call to the function <span class='ct-code-b-yellow'>display()</span> is made.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "localVar":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "An integer variable with the <span class='ct-code-b-yellow'>same</span> name <span class='ct-code-b-yellow'>a</span> is declared and assigned with"
							+ " value <span class='ct-code-b-yellow'>20</span>.<br><br> This variable is called <span class='ct-code-b-yellow'>local</span>"
							+ " variable and can be used only inside the <span class='ct-code-b-yellow'>main()</span> method.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "mainPf1":
		case "mainPf2":
		case "userPrintf":
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._direction == "backward") {
						introjs.previousStep();
				} else {
					setTimeout(function() {
						introjs.nextStep();
					}, 500);
				}
			});
			break;
			
		case "valRes":
			$('#globalVar').removeClass('blinking-white');
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here, <b class='ct-code-b-yellow'>20</b> is added to <span class='ct-code-b-yellow'>a</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "valDec":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The <span class='ct-code-b-yellow'>display()</span> function will first search if any "
							+ "<span class='ct-code-b-yellow'>local variable</span> exists with that"
							+ " name, if it does not exist, it searches for a <span class='ct-code-b-yellow'>global variable</span> of that name."
							+ "<br><br> Here, a <span class='ct-code-b-yellow'>global variable</span> with the name "
							+ "<span class='ct-code-b-yellow'>a</span>"
							+ " exist.";
				typing(".introjs-tooltiptext", text, function() {
					$("#globalVar").addClass("blinking-white");
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "valAddition":
			$("#globalVar").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() { 
				var text = "Here, <span class='ct-code-b-yellow'>20</span> is added to the existing value <span class='ct-code-b-yellow'>50</span>."; 
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "endFunc":
			$(".introjs-helperLayer").one("transitionend", function() { 
				var text = "When the <span class='ct-code-b-yellow'>end</span> of the <span class='ct-code-b-yellow'>function</span>"
							+ " is reached, the <span class='ct-code-b-yellow'>control</span> is transferred back to the "
							+ "<span class='ct-code-b-yellow'>calling method</span> and executes the next" 
							+ " statement that <span class='ct-code-b-yellow'>occurs after</span> this function call.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "endMain":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<span class='ct-code-b-yellow'>End</span> of the program.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "consoleId":
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#consoleId').removeClass("opacity00");
				if(introjs._currentStep == 11) {
					if (introjs._direction == "backward") {
						$("#runEditor1").empty();
					} else {
						$("#runEditor1").append("value in main() before call : <b style='color: yellow'>20</b>");
					}
					nextStep();
				} else if(introjs._currentStep == 18) {
					if (introjs._direction == "backward") {
						$("#runEditor2").empty();
					} else {
						$("#runEditor2").append("value in display() : <b style='color: yellow'>70</b>");
					}
					nextStep();
				} else {
					if (introjs._direction == "backward") {
						$("#runEditor3").empty();
					} else {
						$("#runEditor3").append("value in main() after call : <b style='color: yellow'>20</b>");
					}
					nextStep();
				} 
			});
			break;
			
		case "restart":
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
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}

function nextStep() {
	if (introjs._direction == "backward") {
			introjs.previousStep();
	} else {
		setTimeout(function() {
			introjs.nextStep();
		}, 1000);
	}
}