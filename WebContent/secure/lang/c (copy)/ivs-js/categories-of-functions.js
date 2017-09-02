var introjs;
var tl;
var i;
var count = 1;
		
var categoriesOfFunctions = function() {
	introGuide();
	tl = new TimelineLite();
	$("#type1").click(function() {
		i = 1;
		$("#funcHeading").text("Function with No return type and No Arguments");
	});
	
	$("#type2").click(function() {
		i = 2;
		$("#funcHeading").text("Function with No return type and With Arguments");
	});
	
	$("#type3").click(function() {
		i = 3;
		$("#funcHeading").text("Function With return type and No Arguments");
	});
	
	$("#type4").click(function() {
		i = 4;
		$("#funcHeading").text("Function With return type and With Arguments");
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
			element : "#heading",
			intro : "",
			position : "right"
		},{
			element : "#functionBox",
			intro : "",
			tooltipClass : "hide",
			position : "right"
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "heading":
			var text = "Here we will discuss about different categories of <span class='ct-code-b-yellow'>functions</span>. " 
						+ "Click next to see various categories of <span class='ct-code-b-yellow'>functions</span>.";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-nextbutton").show();
			});
			break;
		
		case "functionBox":
			$("br").remove();
			$("#type" + i).removeClass("clicked");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#description").empty();
				$("#funcType" + i).addClass("hide opacity00");
				$(".output-text").remove();
				$("#funcHeading").empty();
				var text = "These are the four different categories of functions with their <span class='ct-code-b-yellow'>return types</span>"
							+ " and <span class='ct-code-b-yellow'>arguments</span>. click on any type among these four to see the action.";
				if($("#functionBox").hasClass('opacity00')) {
					$('.introjs-tooltip').removeClass("hide");
					tl.to("#functionBox", 1, {opacity: 1, onComplete: function() {
						$("#functionBox").removeClass("opacity00");
					}});
				}
				typing(".introjs-tooltiptext", text, function() {
					$(".fun-btn").removeClass('disabled');
				});
			});
			break;  
			
		case "funcType" + i:
			$("#funcHeading").removeClass('opacity00');
			$("#actionBox").removeClass('opacity00');
			$(".introjs-helperLayer").one("transitionend", function() {
				if($("#type1").hasClass("clicked")) {
					var text = "This is the code for  the function with <span class='ct-code-b-yellow'>No</span> return type " 
								+ " and <span class='ct-code-b-yellow'>No</span> arguments.";
				} else if($("#type2").hasClass("clicked")) {
					var text = "This is the code for  the function with <span class='ct-code-b-yellow'>No</span> return type " 
								+ " and <span class='ct-code-b-yellow'>with</span> arguments.";
				} else if($("#type3").hasClass("clicked")) {
					var text = "This is the code for  the function <span class='ct-code-b-yellow'>with</span> return type " 
								+ " and <span class='ct-code-b-yellow'>No</span> arguments.";
				} else if($("#type4").hasClass("clicked")) {
					var text = "This is the code for  the function <span class='ct-code-b-yellow'>with</span> return type " 
								+ " and <span class='ct-code-b-yellow'>with</span> arguments.";
				}
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "funDec" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				if($("#type1").hasClass("clicked")) {
					var text = "Here we are declaring the function <span class='ct-code-b-yellow'>void getName(void)</span> with " 
								+ " <span class='ct-code-b-yellow'>No</span> return type and "
								+ " with <span class='ct-code-b-yellow'>No</span> arguments."
				} else if($("#type2").hasClass("clicked")) {
					var text = "Here we are declaring the function <span class='ct-code-b-yellow'>void getValue(int)</span> with " 
								+ " <span class='ct-code-b-yellow'>No</span> return type and " 
								+ " <span class='ct-code-b-yellow'>with</span> one argument which is type <b>int</b>.";
				} else if($("#type3").hasClass("clicked")) {
					var text = "Here we are declaring the function <span class='ct-code-b-yellow'>int calculateSum()</span> " 
								+ " <span class='ct-code-b-yellow'>with</span> return type " 
								+ " and with <span class='ct-code-b-yellow'>No</span> arguments.";
				} else if($("#type4").hasClass("clicked")) {
					var text = "Here we are declaring the function <span class='ct-code-b-yellow'>int calculateSum(int, int)</span> " 
								+ " <span class='ct-code-b-yellow'>with</span> return type " 
								+ " and <span class='ct-code-b-yellow'>with</span> two arguments(<b>int</b>, <b>int</b>).";
				}
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "main" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is <span class='ct-code-b-yellow'>main()</span> function.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "userPrintf" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#userPrintf" + i).addClass("output-line1");
				var text = "This <span class='ct-code-b-yellow'>printf()</span> function will print the message on the standard " 
					+ " output device(monitor).";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "mainPrintf" + i:
			$("#callingFun" + i).removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This <span class='ct-code-b-yellow'>printf()</span> function will print the message on the standard " 
							+ " output device(monitor).";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
					
		case "funDef" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is the function definition which we have declared above.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		
		case "callingFun" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				if($("#type1").hasClass("clicked")) {
		        	var text = "This is <span class='ct-code-b-yellow'>main()</span> function. here we will call the function " 
				      		   + " <span class='ct-code-b-yellow'>getName()</span>.";
				} else if($("#type2").hasClass("clicked")) {
					var text = "This is <span class='ct-code-b-yellow'>main()</span> function. here we will call the function " 
					   		  + " <span class='ct-code-b-yellow'>getValue(123)</span> by sending 123 as an argument which is type int.";
				} else if($("#type3").hasClass("clicked")) {
					var text = "Here we will call the function <span class='ct-code-b-yellow'>calculateSum()</span>. " 
								 + " And it will return an integer value, that will be stored in <span class='ct-code-b-yellow'>addition</span>.";
				} else if($("#type4").hasClass("clicked")) {
					var text = "Here we will call the function <span class='ct-code-b-yellow'>calculateSum(a, b)</span> by "
					  		   + " sending a and b are as arguments which are type int. And it will return an integer value, that " 
					  		   + " will be stored in variable <span class='ct-code-b-yellow'>addition</span>.";
				}
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "varInMain" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				if($("#type3").hasClass("clicked")) {
					var text = "Here we are declaring one integer variable <span class='ct-code-b-yellow'>addition</span>";
				} else if($("#type4").hasClass("clicked")) {
					var text = "Here we are initializing 3 integer variables <b>a</b>, <b>b</b> and <b>addition</b>." 
								+ "<ul><li> <b>a</b> value is delared to  10</li>"
								+ "<li> <b>b</b> value is delared to  20</li></ul>";
				}
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "varInit" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				if($("#type3").hasClass("clicked")) {
					var text = "Here we are initializing 3 integer variables <b>a</b>, <b>b</b> and <b>sum</b>." 
								+ "<ul><li> <b>a</b> value is delared to  10</li>"
								+ "<li> <b>b</b> value is delared to  20</li></ul>";
				} else if($("#type4").hasClass("clicked")) {
					var text = "Here we are initializing an integer variable <b>sum</b>." 
				}
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "varDec" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				if($("#type3").hasClass("clicked")) {
					var text = "In this statement we are adding <b>a</b>, <b>b</b> and storing the result in <b>sum</b>.";
				} else if($("#type4").hasClass("clicked")) {
					var text = "In this statement we are adding <b>x</b>, <b>y</b> and storing the result in <b>sum</b>.";
				}
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "returnVal" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#callingFun" + i).addClass("blinking-white");
				var text = "This return value sum will be stored in <span class='ct-code-b-yellow'>addition</span> variable " 
							+ " which is in <span class='ct-code-b-yellow'>main()</span> function.<br/>" 
							+ " <b>Note:</b> Statements which have declared under the <span class='ct-code-b-yellow'>return</span> " 
							+ " statement will not executed. And control goes to called function and executes next statement which "
							+ " is after this function call.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "endFunction" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "After completing all statements in called function control goes to the " 
							+ " <span class='ct-code-b-yellow'>main()</span> function and executes next statement which is after this function call.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "endMain" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "function <span class='ct-code-b-yellow'>main()</span> ended here.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "description":
			$("#description").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				if($("#type1").hasClass("clicked")) {
					$("#description").append("<ul style='margin-top: 14px;'><li id='line11' class='opacity00'>Whenever the function has"
											+ " no arguments, it does not receives any data from the calling function.</li>"
											+ "<li id='line12' class='opacity00'>When the function has no return value, " 
											+ " the calling function doesn't receive any data from the called function.</li></ul>");
					tl.to($("#line11"), 0.5, {opacity: 1, onComplete: function() {
						tl.to($("#line12"), 0.5, {opacity: 1, onComplete: function() {
							introjs.refresh();
							$('.introjs-tooltip').removeClass("hide");
							var text = "Click next to go function categories.";
							typing(".introjs-tooltiptext", text, function() {
								$(".introjs-nextbutton").show();
							});
						}});
					}});
				} else if($("#type2").hasClass("clicked")) {
					$("#description").append("<ul style='margin-top: 14px;'><li id='line21'>When function definition has arguments, it" 
										+ " recevies data from calling function </li><li id='line22'>When the function has no return value," 
										+ " the calling function doesn't receive any data from the called function.</li></ul>");
					tl.to($("#line21"), 0.5, {opacity: 1, onComplete: function() {
						tl.to($("#line22"), 0.5, {opacity: 1, onComplete: function() {
							introjs.refresh();
							$('.introjs-tooltip').removeClass("hide");
							var text = "Click next to go function categories.";
							typing(".introjs-tooltiptext", text, function() {
								$(".introjs-nextbutton").show();
							});
						}});
					}});
				} else if($("#type3").hasClass("clicked")) {
					$('#description').append("<ul style='margin-top: 14px;'><li id='line31'>Whenever the function has no arguments,"
										+ " it does not receives any data from the calling function. </li><li id='line32'>After completion"
										+ " of function definition execution, only one value will be returned from the called function to"
										+ " calling function through return statement.</li></ul>");
					tl.to($("#line31"), 0.5, {opacity: 1, onComplete: function() {
						tl.to($("#line32"), 0.5, {opacity: 1, onComplete: function() {
							introjs.refresh();
							$('.introjs-tooltip').removeClass("hide");
							var text = "Click next to go function categories.";
							typing(".introjs-tooltiptext", text, function() {
								$(".introjs-nextbutton").show();
							});
						}});
					}});
				} else if($("#type4").hasClass("clicked")) {
					$("#description").append("<ul style='margin-top: 14px;'><li id='line41'>When function definition has arguments, it" 
										+ " recevies data from calling function </li><li id='line42'>After completion of function"
										+ " definition execution, only one value will be returned from the called function to calling"
										+ " function through return statement.</li></ul>");
					tl.to($("#line41"), 0.5, {opacity: 1, onComplete: function() {
						tl.to($("#line42"), 0.5, {opacity: 1, onComplete: function() {
							introjs.refresh();
							$('.introjs-tooltip').removeClass("hide");
							var text = "Click next to go function categories.";
							typing(".introjs-tooltiptext", text, function() {
								$(".introjs-nextbutton").show();
							});
						}});
					}});
				}
			});
			break;
			
		case "consoleId":
			$("#consoleId").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				if($("#type1").hasClass("clicked")) {
					if($("#userPrintf" + i).hasClass("output-line1")) {
						$("#userPrintf" + i).removeClass("output-line1");
						$("#outputPrint").append("<span id='runEditor1' class='output-text'></span><br>");
						var text = "Inside getName()";
						typing("#runEditor1", text, function() {
							timeout();
						});
					} else {
						$("#outputPrint").append("<span id='runEditor2' class='output-text'></span><br>");
						var text = "Inside main()";
						typing("#runEditor2", text, function() {
							timeout();							
						});
					}
				} else if($("#type2").hasClass("clicked")) {
					if($("#userPrintf" + i).hasClass("output-line1")) {
						$("#userPrintf" + i).removeClass("output-line1");
						$("#outputPrint").append("<span id='runEditor1' class='output-text'></span><br>");
						var text = "123 printed in getValue()";
						typing("#runEditor1", text, function() {
							setTimeout(function(){
								introjs.nextStep();
							}, 1000);
						});
					} else {
						$("#outputPrint").append("<span id='runEditor2' class='output-text'></span><br>");
						var text = "Inside main(), after getValue()";
						typing("#runEditor2", text, function() {
							timeout();							
						});
					}
				} else if($("#type3").hasClass("clicked")) {
					$("#outputPrint").append("<span id='runEditor1' class='output-text'></span><br>");
					var text = "Sum = 30";
					typing("#runEditor1", text, function() {
						timeout();
					});
				} else if($("#type4").hasClass("clicked")) {
					$("#outputPrint").append("<span id='runEditor1' class='output-text'></span><br>");
					var text = "Sum = 30";
					typing("#runEditor1", text, function() {
						timeout();
					});
				}
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
		}
	});
}

function timeout() {
	setTimeout(function() {
		introjs.nextStep();
	}, 1000);
}

function getStep(element, intro, tooltipClass, position) {
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
	return step;
}

function nextStepRight(id, val) {
	var dynamicStep = getStep(id, "", "", "right");
	introjs.insertOption(introjs._currentStep + val, dynamicStep);
}

function dynamicSteps() {
	setTimeout(function() {
		$("#type" + i).addClass("clicked");
		$("#funcType" + i).removeClass("hide opacity00");
		
		nextStepRight("#funcType" + i, 1);
		nextStepRight("#funDec" + i, 2);
		nextStepRight("#main" + i, 3)
		
		if($("#type1").hasClass("clicked") || $("#type2").hasClass("clicked")) {
			
			nextStepRight("#funDef" + i, 4);
			nextStepRight("#callingFun" + i, 5);
			nextStepRight("#userPrintf" + i, 6);

			var dynamicStep = getStep("#consoleId", "", "hide", "");
			introjs.insertOption(introjs._currentStep + 7, dynamicStep);
			
			nextStepRight("#endFunction" + i, 8);
			nextStepRight("#mainPrintf" + i, 9);
			
			var dynamicStep = getStep("#consoleId", "", "hide", "");
			introjs.insertOption(introjs._currentStep + 10, dynamicStep);
			
			nextStepRight("#endMain" + i, 11);
			
			var dynamicStep = getStep("#description", "", "hide", "");
			introjs.insertOption(introjs._currentStep + 12, dynamicStep);
			
			nextStepRight("#functionBox", 13);
			
		} else if($("#type3").hasClass("clicked") || $("#type4").hasClass("clicked")) {
			
			nextStepRight("#funDef" + i, 4);
			nextStepRight("#varInMain" + i, 5);
			nextStepRight("#callingFun" + i, 6);
			nextStepRight("#varInit" + i, 7);
			nextStepRight("#varDec" + i, 8);
			nextStepRight("#returnVal" + i, 9);
			nextStepRight("#mainPrintf" + i, 10);
			
			var dynamicStep = getStep("#consoleId", "", "hide", "");
			introjs.insertOption(introjs._currentStep + 11, dynamicStep);
			
			nextStepRight("#endMain" + i, 12);
			
			var dynamicStep = getStep("#description", "", "hide", "");
			introjs.insertOption(introjs._currentStep + 13, dynamicStep);
			
			nextStepRight("#functionBox", 14);
		}
		introjs.nextStep();
	}, 100);
}