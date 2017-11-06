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
			position : 'right'
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
	intro.onafterchange(function(targetElement) { 
		$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "registermainDeclaration" :
			$('.introjs-tooltip').css({'min-width' : '300px'}).removeClass("hide");
			$(".introjs-helperLayer").one("transitionend", function() {
		  		var text = "<ul><li>A <span class='ct-code-b-yellow'>register</span> variable is declared with the keyword"
		  					+ " <span class='ct-code-b-yellow'>register</span>.</li>"
		  					+ "<li><span class='ct-code-b-yellow'>Register</span> variables are stored at <span class='ct-code-b-yellow'>"
		  					+ "registers</span>(A register is one of a small set of data holding places that are a part of the CPU)</li>"
		  					+ "<li>Accessing <span class='ct-code-b-yellow'>register</span> variables are <span class='ct-code-b-yellow'>"
		  					+ "faster</span> than variables stored in memory.</li></ul>";
				typing('.introjs-tooltiptext', text ,function() { 
					$('#animationDiv').css({'opacity':'1'});
					$('.introjs-nextbutton').show();
				});
			});
		break; 
		
		case "i1" :
			$(".introjs-helperLayer").one("transitionend", function() {
				text = "The variable <span class='ct-code-b-yellow'>i</span> is initialized to <span class='ct-code-b-yellow'>1</span>."; 
				typing('.introjs-tooltiptext', text, function() { 
					$('.introjs-nextbutton').show();	
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
				$('#mainmemoryheading').css({'opacity':'1'});
				$('#mainMemory').removeClass("visibility-hidden").addClass('box-border');
		  		setTimeout(function () {
					intro.nextStep();
				}, 500);
			});
		break;
		
		case "numberDiv1" :
			$(".introjs-helperLayer").one("transitionend", function() {
	  			$('#addressDiv1').removeClass('visibility-hidden');
				$('.introjs-tooltip').removeClass("hide");
				typing('.introjs-tooltiptext', "Variable <span class='ct-code-b-yellow'>i</span> stored at register." ,function() { 
					$('.introjs-nextbutton').show();
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
											+ " <span class='ct-code-b-yellow'>1</span> is stored in the register."
								typing('.introjs-tooltiptext', text,function() { 
									introNextStep('#iCondition')
									$('.introjs-nextbutton').show();	
								});	
							});
						});
					}});
				} else if(intro._currentStep > 12) {
					$("#addressValue1").text(iValue);
					introNextStep("#iCondition");
					setTimeout(function () {
						intro.nextStep();
					}, 500);
				}
			});
		break; 
		
		case "iIncrement" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.introjs-tooltip').removeClass("hide");
				typing('.introjs-tooltiptext',"The variable <span class='ct-code-b-yellow'>i(i.e., " + iValue + ")</span> is "
							+ "<span class='ct-code-b-yellow'>incremented</span> by <span class='ct-code-b-yellow'>1(i = " 
							+ (iValue + 1) + ")</span>.", function() { 
					iValue++;
					introNextStep("#addressDiv1");
					$('.introjs-nextbutton').show();	
				});
			});
		break; 
		
		case "outputDiv" :
			$('.introjs-helperLayer').one('transitionend', function() {
				$(".output").append('<div id = "outputAValue' + iValue + '"></div>');
				$('#outputAValue' + iValue).text(iValue);
				introNextStep("#iIncrement");
				setTimeout(function () {
					intro.nextStep();
				}, 500);
			});
		break;
		
		case "iCondition" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.introjs-tooltip').removeClass("hide");
				$('.introjs-tooltiptext').append('<span id= "firstDiv" class="opacity00  ct-code-b-yellow"><span id="iCount" class="position">'
						+ 'i</span> <= 5</span><br><div id="itrue"></div>');
				if(iValue <= 5) {
					$('#firstDiv').removeClass('opacity00');
					fromEffectWithTweenMax('#iCondition','#firstDiv', function() {
						flipEffectWithTweenMax("#iCount", iValue, function() {
							$("#itrue").append("returns <span class='ct-code-b-yellow'>true</span>");
							$('#itrue').append('<ul><li><span id = gotoloop class = color-white></span></li></ul>');
							typing('#gotoloop',"The body of the loop is executed." ,function() { 
								introNextStep("#sopLine1");
								$('.introjs-nextbutton').show();
							});
						});		
					});
				} else {
					$('#firstDiv').removeClass('opacity00');
					fromEffectWithTweenMax('#iCondition','#firstDiv', function() {
						flipEffectWithTweenMax("#iCount", iValue, function() {
							$("#itrue").append("returns <span class='ct-code-b-yellow'>false</span>");
							$('#itrue').append('<ul><li><span id = gotoloop class = color-white>The control comes out of the loop.</li></ul>');							
							$('.introjs-nextbutton').show();
						});		
					});
				}
			});
		break; 
	 
		case "sopLine1" :
			nextLine();
			introNextStep("#outputDiv");
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
	text = "Let us consider an example."	
		typing('.introjs-tooltiptext', text, function() {
			$('.introjs-nextbutton').show();
	});	
}
function typing(typingId, typingContent, callbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval" : 5,
		"cursor_color": "blue"
	}, function() {
		$(typingId).removeClass('typingCursor');
		callbackFunction();
	});
}

function introNextStep(elementId) {
	var dynamicStep = {
			"element" : elementId,
		    "intro" : "",
			"tooltipClass" : "hide",
		}
	intro.insertOption(intro._currentStep + 1, dynamicStep); 
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
		setTimeout(function () {
			intro.nextStep();
		}, 500);
	});
}