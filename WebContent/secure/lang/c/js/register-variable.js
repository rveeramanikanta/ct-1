var iValue = 1;

var registerVariableReady = function() {
	intro = introJs();
	$('#restartBtn').click(function() {
		location.reload();
		});
	$("body").keypress(function(e) {
		 if (e.which === 13) {
			 e.preventDefault();
			}
	});
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
		steps :	[{
			element :'#codeDiv',
			intro :'',
			position:"right",
		}, {
			element :'#mainDeclaration',
			intro :'',
			tooltipClass:"hide",
		}, {
			element :'#registermainDeclaration',
			intro :'',
			position:"right" 
		}, {
			element :'#animationDiv',
			tooltipClass : "hide"
		}, {
			element :'#numberDiv1',
			intro :'',
			position:"right",
			tooltipClass : "hide"
		}, {
			element :'#formainDeclaration',
			tooltipClass : "hide"
		}, {
			element :'#forDeclaration',
			tooltipClass : "hide"
		}, {
			element :'#i1',
			intro :'',
			position:"right",
		}, {
			element :'#addressDiv1',
			tooltipClass : "hide",
			position : 'right',
			stepFlag: "false"
		}, {
			element :'#closeBrace1',
			tooltipClass : "hide"
		}, {
			element :'#closeBrace',
			tooltipClass : "hide"
		}, {
			element :'#printDefinition',
			tooltipClass : "hide"
		}, {
			element :'#restartBtn',
			intro :'Click to restart.',
			position:"right",
		} ]
	});
	
	intro.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
			case "registermainDeclaration" :
				$('.introjs-tooltip').css({'min-width' : '300px'}).addClass("hide");
			break; 
			case "i1" :
				$('#addressValue1').text('');
			break;
			case "animationDiv" :
				$('.introjs-tooltip').css({'min-width' : '200px'});
				$('#mainmemoryheading').css({'opacity':'0'});
				$('#addressDiv1').addClass('visibility-hidden');
				$('#mainMemory').addClass("visibility-hidden").removeClass('box-border');
			break;
			case "numberDiv1" :
				$('#addressDiv1').addClass('visibility-hidden');
			break; 
			case "addressDiv1" :
				if(intro._currentStep == 8) {
					$('#numberDiv1').css({'opacity' : '0'});
					$("#addressValue1").text('');
				}
			break; 
			case "iCondition" :
				$('#firstDiv').addClass('opacity00');
				$('#iCount').text(iValue - 1);
			break; 
		}
	});
	
	intro.onafterchange(function(targetElement) { 
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
		switch (elementId) {
		case "registermainDeclaration" :
			$('.introjs-tooltip').css({'min-width' : '300px'}).removeClass("hide");
			$(".introjs-helperLayer").one("transitionend", function() {
		  		var text = "<ul><li>A <span class='ct-code-b-yellow'>register</span> variable is declared with the keyword"
		  					+ " <span class='ct-code-b-yellow'>register</span>.</li>"
		  					+ "<li><span class='ct-code-b-yellow'>Register</span> variables are stored in <span class='ct-code-b-yellow'>"
		  					+ "registers. </span><br/>A register is one of a small set of data holding places that are a part of the CPU</li>"
		  					+ "<li>Accessing <span class='ct-code-b-yellow'>register</span> variables are <span class='ct-code-b-yellow'>"
		  					+ "faster</span> than variables stored in <y>memory</y>.</li></ul>";
				typing('.introjs-tooltiptext', text ,function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break; 
		case "i1" :
			$(".introjs-helperLayer").one("transitionend", function() {
				text = "The variable <span class='ct-code-b-yellow'>i</span> is initialized to <span class='ct-code-b-yellow'>1</span>."; 
				typing('.introjs-tooltiptext', text, function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show();	
				});
			});
		break;
		case "forDeclaration" :
		case "mainDeclaration" :
		case "closeBrace1" :
		case "closeBrace" :
			if (elementId == "closeBrace1") {
				$('#printDefinition').removeClass('visibility-hidden');
			}
			nextLine();
		break;
		case "animationDiv" :
			$('.introjs-tooltip').css({'min-width' : '200px'});
			$(".introjs-helperLayer").one("transitionend", function() {
				if (intro._direction == 'forward') {
					$('#mainmemoryheading').css({'opacity':'1'}).removeClass('opacity00');
					$('#mainMemory').removeClass("visibility-hidden").addClass('box-border');
			  		setTimeout(function () {
						intro.nextStep();
					}, 500);
				} else {
			  		setTimeout(function () {
						intro.previousStep();
					}, 500);
				}
			});
		break;
		case "numberDiv1" :
			$(".introjs-helperLayer").one("transitionend", function() {
	  			$('#addressDiv1').removeClass('visibility-hidden');
				$('.introjs-tooltip').removeClass("hide");
				typing('.introjs-tooltiptext', "Variable <span class='ct-code-b-yellow'>i</span> stored at <y>register</y>." ,function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show();
		  		});
			});
		break; 
		case "addressDiv1" :
			$(".introjs-helperLayer").one("transitionend", function() {
				if(intro._currentStep == 8) {
					TweenMax.to('#numberDiv1', 0.5, {opacity: 1, onComplete: function() {
						$('#one').addClass('circle-css').effect("highlight", {color: 'yellow'}, 500, function() {
							$('#one').removeClass('circle-css');
							$("#addressValue1").text($("#one").text());
							fromEffectWithTweenMax('#one', '#addressValue1', function() {
								$('.introjs-tooltip').removeClass("hide");
								var text = "The variable <span class='ct-code-b-yellow'>i</span> with value"
											+ " <span class='ct-code-b-yellow'>1</span> is stored in the <y>register</y>."
								typing('.introjs-tooltiptext', text,function() { 
									if (intro._introItems[intro._currentStep].stepFlag == "false") {
										intro._introItems[intro._currentStep].stepFlag = true;
										var t = 1;
										for (var i = 1; i <= 5; i++) {
											introNextStep("#iCondition", t++);
											introNextStep("#sopLine1", t++);
											introNextStep("#outputDiv", t++);
											introNextStep("#iIncrement", t++);
											introNextStep("#addressDiv1", t++);
										}
										introNextStep('#iCondition', t);
									}
									$('.introjs-nextbutton, .introjs-prevbutton').show();	
								});	
							});
						});
					}});
				} else if(intro._currentStep > 12) {
					if (intro._direction == 'forward') {
						$("#addressValue1").text(iValue);
						setTimeout(function () {
							intro.nextStep();
						}, 500);
					} else {
						$("#addressValue1").text(iValue - 1);
						setTimeout(function () {
							intro.previousStep();
						}, 500);
					}
				}
			});
		break; 
		case "iIncrement" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.introjs-tooltip').removeClass("hide");
				if (intro._direction == 'forward') {
					text = "The variable <span class='ct-code-b-yellow'>i(i.e., " + iValue + ")</span> is "
								+ "<span class='ct-code-b-yellow'>incremented</span> by <span class='ct-code-b-yellow'>1(i = " 
								+ (iValue + 1) + ")</span>."; 
						iValue++;
				} else {
					text = "The variable <span class='ct-code-b-yellow'>i(i.e., " + (iValue - 1) + ")</span> is "
							+ "<span class='ct-code-b-yellow'>incremented</span> by <span class='ct-code-b-yellow'>1(i = " 
							+ (iValue) + ")</span>."; 
				}
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();	
				});
			});
		break; 
		case "outputDiv" :
			$('.introjs-helperLayer').one('transitionend', function() {
				if (intro._direction == 'forward') {
					$(".output").append('<div id = "outputAValue' + iValue + '"></div>');
					$('#outputAValue' + iValue).text(iValue);
					setTimeout(function () {
						intro.nextStep();
					}, 500);
				} else {
					$('.output div:last').remove();
					setTimeout(function () {
						intro.previousStep();
					}, 500);
				}
			});
		break;
		case "iCondition" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.introjs-tooltip').removeClass("hide");
				$('.introjs-tooltiptext').text('').append('<span id= "firstDiv" class="opacity00  ct-code-b-yellow"><span id="iCount" class="position">'
						+ 'i</span> <= 5</span><br><div id="itrue"></div>');
				if (intro._direction != 'forward') {
					iValue--;
				}
				if(iValue <= 5) {
					$('#firstDiv').removeClass('opacity00');
					fromEffectWithTweenMax('#iCondition','#firstDiv', function() {
						flipEffectWithTweenMax("#iCount", iValue, function() {
							$("#itrue").append("returns <span class='ct-code-b-yellow'>true</span>");
							$('#itrue').append('<span id = gotoloop class = color-white></span>');
							typing('#gotoloop',"<br><br>The body of the loop is executed." ,function() { 
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});		
					});
				} else {
					$('#firstDiv').removeClass('opacity00');
					fromEffectWithTweenMax('#iCondition','#firstDiv', function() {
						flipEffectWithTweenMax("#iCount", iValue, function() {
							$("#itrue").append("returns <span class='ct-code-b-yellow'>false</span>");
							$('#itrue').append('<span id = gotoloop class = color-white><br><br>The control comes out of the loop.</spam>');							
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});		
					});
				}
			});
		break; 
		case "sopLine1" :
			nextLine();
			$('#outputDiv').removeClass('opacity00');
		break; 
		case "formainDeclaration" :
			$('#functionMemory').addClass('visibility-hidden');
			nextLine();
		break; 
		case "printDefinition" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#line1').fadeTo(500, 1, function() {
					$('#line2').fadeTo(500, 1, function() {
						$('#line3').fadeTo(500, 1);
					});
				});
			});
		break; 
		case "restartBtn":
			$('.introjs-tooltip').css({'min-width' : '120px'});
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
				$('#restartBtn').click(function() {
					location.reload();
				});
			});
		break;
		}
	});
	intro.start();
	typing('.introjs-tooltiptext', "Let us consider an example.", function() {
		$('.introjs-nextbutton').show();
	});	
}

function typing(typingId, typingContent, callbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval" : 1,
		"cursor_color": "blue"
	}, function() {
		$(typingId).removeClass('typingCursor');
		callbackFunction();
		intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
	});
}

function introNextStep(elementId, val) {
	var dynamicStep = {
			"element" : elementId,
		    "intro" : "",
			"tooltipClass" : "hide",
		}
	intro.insertOption(intro._currentStep + val, dynamicStep); 
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}
function toEffectWithTweenMax(selector1, selector2, selector3, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset({top: l1.top, left: l1.left});
	TweenMax.to($(selector2), 1, {top: 22, left: selector3, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function flipEffectWithTweenMax(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.6, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.6, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function animate1() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#printDefinition').addClass("z-index1000000");
	intro.nextStep();
}

function nextLine() {
	$(".introjs-helperLayer").one("transitionend", function() {
		if (intro._direction == 'forward') {
			setTimeout(function () {
				intro.nextStep();
			}, 500);
		} else {
			setTimeout(function () {
				intro.previousStep();
			}, 500);
		}
	});
}