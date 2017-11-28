var introjs;
var typingSpeed = 1;
var tl;
var arr;
var a;
var b;
var c;
var consoleCount = 1;

var nestedIfElseInCReady = function() {
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : "#nestedIf",
			intro : "",
			position : "right"
		},{
			element : "#nestedBlock1",
			intro : "",
			position : "right"
		},{
			element : "#nestedBlock2",
			intro : "",
			position : "right"
		},{
			element : "#varInit",
			intro : "",
			position : "right"
		},{
			element : "#mainPrintf",
			intro : "",
			position : "right"
		},{
			element : "#mainScanf",
			intro : "",
			position : "right"
		},{
			element : "#consoleId",
			intro : "",
			position : "left",
			tooltipClass: "hide"
		},{
			element : "#ifCondtn",
			intro : "",
			position : "right",
			tooltipClass: "hide"
		} ]
	});
	
	
	
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
			
		case "mainScanf":
			consoleCount = 1;
			$("#runEditor1").empty();
			break;
			
		case "consoleId":
			if(introjs._currentStep == 6) {
				consoleCount = 1;
				$('#runEditor1').empty();
			} else {
				$("#runEditor2").empty();
			}
			break;
			
		case "ifCondtn":
			
			if (introjs._introItems.length > 8) {
				introjs._introItems.splice(8);
			}
			break;
			
		}
	})
	
	
	
	introjs.onafterchange(function(targetElement) {
				
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		
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
		switch (elementId) {
		
		case "nestedIf":
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			var text = "This code demonstrates the working of <span class='ct-code-b-yellow'>nested</span> <b>if-else</b> block.";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-nextbutton").show();
			});
			break;
			
		case "varInit":
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "It is the declaration of 3 <b>int</b> variables <b>a, b </b> and <b>c</b>. These are declared inside "
							+ " <span class='ct-code-b-yellow'>main()</span>.";
							
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "nestedBlock1":
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "If we write an <b>if-else</b> block in an other <b>if-else</b> block like this, " 
							+ " then this type of constructs are called as can if as " 
							+ " <span class='ct-code-b-yellow'>nested</span> <b>if-else</b> constructs.";
							
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "nestedBlock2":
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is an other <span class='ct-code-b-yellow'>nested</span> <b>if-else</b> construct " 
							+ " in <span class='ct-code-b-yellow'>else</span> block.";
							
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "mainPrintf":
		case "printfInIf1":	
		case "printfInIf2":
		case "printfInElse1":
		case "printfInElse2":
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This <span class='ct-code-b-yellow'>printf()</span> function will print the message on the standard " 
					+ " output device (monitor).";
				
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "mainScanf":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here <span class='ct-code-b-yellow'>scanf()</span> function is used to read <b>integer</b> values.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "consoleId":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				if(consoleCount == 1) {
					consoleCount++;
					var text = "Enter the values of a , b , c : <input id='inputVals' spellcheck='false' class='int-num'/>";
					
					typing("#runEditor1", text, function() {
						var text2 = "Enter 3 numbers. press <span class='ct-code-b-yellow'>space</span> to enter another number.";
						$(".introjs-tooltip").removeClass("hide");
						typing(".introjs-tooltiptext", text2, function() {
							$("#inputVals").addClass("blinking-orange");
							$("#inputVals").focus();
							arr = [];
							$('#inputVals').on("keydown", function(e) {
								if (arr.length == 3) {
									if (e.keyCode == 32) {
										e.preventDefault();
									}
								}
								if ($.inArray(e.keyCode, [46, 8, 9, 27, 32, 35, 36, 37, 39]) !== -1) {
									return;
								}
								if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
									e.preventDefault();
								}
							});
							
							$('#inputVals').on("keyup", function(e) {
								$('.length-error-text').remove();
								if ($(this).val() == "") {
									$(".ct-code-b-red").remove();
									$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
																		"Please enter 3 numbers and separate each with space.</span>");
								}
								var givenText = $(this).val();
								var splittedText = givenText.split(" ");
								arr = [];
								
								$.each(splittedText, function(idx, val) {
									if (val != '') {
										arr.push(val);
									}
								});
								
								if (arr.length < 3) {
									$(".introjs-nextbutton, .introjs-prevbutton").hide();
								} else if (arr.length == 3) {
									$(".introjs-nextbutton, .introjs-prevbutton").show();
								}
								
								$.each(arr, function(idx, val) {
									if (val.length > 2) {
										$(".ct-code-b-red").remove();
										$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
																				"Please limit the number length to 2.</span>");
										$(".introjs-nextbutton, .introjs-prevbutton").hide();
									}
								});
							});
						});
					});
				} else if(consoleCount == 2) {
					if (introjs._direction == "forward") {
						var i;
						if(a > b && a > c) {
							i = a;
						} else if(a > b && a < c) {
							i = c;
						} else if (a < b && b > c) {
							i = b;
						} else {
							i = c;
						}
						
						var text = i + " is the biggest number";
						typing("#runEditor2", text, function() {
							setTimeout(function() {
								consoleCount++;
								introjs.nextStep();
							}, 1000);
						});
					} else {
						stepNext();
					}
					
					
				}
			});
			break;
			
		case "ifCondtn":
			$(".introjs-nextbutton").hide();
			$( "#inputVals" ).prop( "disabled", true );
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
				a = parseInt( $("#inputVals").val().substring( 0, $("#inputVals").val().indexOf(" ") ) );
				b = parseInt( $("#inputVals").val().substring( $("#inputVals").val().indexOf(" ") + 1, $("#inputVals").val().lastIndexOf(" ") ) );
				c = parseInt ( $("#inputVals").val().substring( $("#inputVals").val().lastIndexOf(" ") + 1 ) );
				var text1 = "If this condition evaluates to <span class='ct-code-b-yellow'>true</span>, " 
							+ " the control enters into the <span class='ct-code-b-yellow'>if</span> block, otherwise the control "  
							+ " enters into the <span class='ct-code-b-yellow'>else</span> block."
							+ "<br/> <span id='verifyCond1' class='opacity00 flip'><b id='aVal' class='flip'>a</b> &gt; " 
							+ " <b id='bVal' class='flip'>b</b></span> <br/><span id='result1'></span>";
							
				typing(".introjs-tooltiptext", text1, function() {
					var l1 = $("#ifCondtn").offset();
					$("#verifyCond1").offset({"top": l1.top, "left": l1.left});
					$("#verifyCond1").removeClass("opacity00");
					tl.to("#verifyCond1", 1, {opacity: 1, top:0, left:0, onComplete: function() {
						flipEffect("#aVal", a, function() {
							flipEffect("#bVal", b, function() {
								if(a > b) {
									var text2 = "evaluates to <span class='ct-code-b-yellow'>true</span>.";
								} else {
									var text2 = "evaluates to <span class='ct-code-b-red'>false</span>.";
								}
								typing("#result1", text2, function() {
									if(a > b) {
										ifSteps();
									} else {
										elseSteps();
									}
									$(".introjs-nextbutton, .introjs-prevbutton").show();
								});
							});
						});
					}});
				});
			});
			break;
			
		case "elseBlock":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This  is <span class='ct-code-b-yellow'>else</span> block.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "ifCond1":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
				var text1 = " This is <span class='ct-code-b-yellow'>nested</span> if construct. If the "  
							+ " condition evaluates to true, the control enters into the if block, " 
							+ " otherwise the control enters into the <span class='ct-code-b-yellow'>else</span> block. " 
							+ "<br/> <span id='verifyCond2' class='opacity00 flip'><b id='aVal1' class='flip'>a</b> &gt; " 
							+ " <b id='cVal' class='flip'>c</b></span> <br/><span id='result2'></span>";
							
				typing(".introjs-tooltiptext", text1, function() {
					var l1 = $("#ifCond1").offset();
					$("#verifyCond2").offset({"top": l1.top, "left": l1.left});
					$("#verifyCond2").removeClass("opacity00");
					tl.to("#verifyCond2", 1, {opacity: 1, top:0, left:0, onComplete: function() {
						flipEffect("#aVal1", a, function() {
							flipEffect("#cVal", c, function() {
								if(a > c) {
									var text2 = "evaluates to <span class='ct-code-b-yellow'>true</span>.";
								} else {
									var text2 = "evaluates to <span class='ct-code-b-red'>false</span>.";
								}
								typing("#result2", text2, function() {
									$(".introjs-nextbutton, .introjs-prevbutton").show();
								});
							});
						});
					}});
				});
			});
			break;
			
		case "ifInElse":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
				var text1 = "This is <span class='ct-code-b-yellow'>nested</span> if construct. If the "  
					+ " condition evaluates to true, the control enters into the if block, " 
					+ " otherwise the control enters into the <span class='ct-code-b-yellow'>else</span> block."
					+ "<br> <span id='verifyCond3' class='opacity00 flip'><b id='bVal2' class='flip'>b</b> &gt;  " 
					+ "<b id='cVal1' class='flip'>c</b> </span> <br><span id='result3'></span>";
				
				typing(".introjs-tooltiptext", text1, function() {
					var l1 = $("#ifInElse").offset();
					$("#verifyCond3").offset({"top": l1.top, "left": l1.left});
					$("#verifyCond3").removeClass("opacity00");
					tl.to("#verifyCond3", 1, {opacity: 1, top:0, left:0, onComplete: function() {
						flipEffect("#bVal2", b, function() {
							flipEffect("#cVal1", c, function() {
								if(b > c) {
									var text2 = "evaluates to <span class='ct-code-b-yellow'>true</span>.";
								} else {
									var text2 = "evaluates to <span class='ct-code-b-red'>false</span>.";
								}
								typing("#result3", text2, function() {
									$(".introjs-nextbutton, .introjs-prevbutton").show();
								});
							});
						});
					}});
				});
			});
			break;
			
		case "endMain":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
				}, 500);
			});
			break;
		
		case "restart":
			$(".introjs-nextbutton").hide();
			$('.introjs-tooltip').css({'min-width' : '125px'});
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restart").removeClass("opacity00");
				$('.introjs-tooltiptext').append('Click to restart.');
				$("#restart").click(function() {
					location.reload();
				});
			});
			break;
		}
	});
	
	tl = new TimelineLite();
	
	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.start();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}

function stepNext() {
	if (introjs._direction == "forward") {
		setTimeout(function() {
			introjs.nextStep();
		}, 800);
	} else {
		setTimeout(function() {
			introjs.previousStep();
		}, 800);
	}
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

function charAtEnd(elementId) {
	var element = document.getElementById(elementId);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
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

function ifSteps() {
	var step = 0;
	var dynamicStep = {
			"element" : "#ifCond1",
			"intro" : "",
			"position" : "right",
			"tooltipClass": "hide"
	}
	introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
	
	if(a > c) {
		var dynamicStep = {
				"element" : "#printfInIf1",
				"intro" : "",
				"position" : "right"
		}
		introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
	} else {
		var dynamicStep = {
				"element" : "#printfInIf2",
				"intro" : "",
				"position" : "right"
		}
		introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
	}
	var dynamicStep = {
			"element" : "#consoleId",
			"intro" : "",
			"tooltipClass" : "hide"
	}
	introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
	
	var dynamicStep = {
			"element" : "#endMain",
			"intro" : "",
			"position" : "right",
			"tooltipClass": "hide"
	}
	introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
	
	var dynamicStep = {
			"element" : "#restart",
			"intro" : "",
			"position" : "right",
			"tooltipClass": ""
	}
	introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
}

function elseSteps() {
	var step = 0;
	var dynamicStep = {
			"element" : "#elseBlock",
			"intro" : "",
			"position" : "right"
	}
	introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
	
	var dynamicStep = {
			"element" : "#ifInElse",
			"intro" : "",
			"position" : "right",
			"tooltipClass": "hide"
	}
	introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
	
	if(b > c) {
		var dynamicStep = {
				"element" : "#printfInElse1",
				"intro" : "",
				"position" : "right"
		}
		introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
	} else {
		var dynamicStep = {
				"element" : "#printfInElse2",
				"intro" : "",
				"position" : "right"
		}
		introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
	}
	
	var dynamicStep = {
			"element" : "#consoleId",
			"intro" : "",
			"tooltipClass" : "hide"
	}
	introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
	
	var dynamicStep = {
			"element" : "#endMain",
			"intro" : "",
			"position" : "right",
			"tooltipClass" : "hide"
	}
	introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
	
	var dynamicStep = {
			"element" : "#restart",
			"intro" : "",
			"position" : "right",
			"tooltipClass" : ""
	}
	introjs.insertOption(introjs._currentStep + ++step, dynamicStep);
}