var automaticVarReady=function() {
	intro=introJs();
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
			element :'#automainDeclaration',
			intro :'',
			position:"right" 
		}, {
			element :'#animationDiv',
			intro :'',
			position:"right",
			tooltipClass : "hide"
		}, {
			element :'#numberDiv1',
			intro :'',
			position:"right" 
		}, {
			element :'#numberDiv2',
			intro :'',
			position:"right" 
		}, {
			element :'#mainMemory',
			intro :'',
			position:"right" 
		}, {
			element :'#variableDeclaration1',
			intro :'',
			position:"right" 
		}, {
			element :'#addressDiv1',
			intro :'',
			position:"right",
			tooltipClass : "hide"
		}, {
			element :'#functionDeclaration1',
			intro :'',
			position:"right" 
		}, {
			element :'#mainfunctionDeclaration',
			intro :'',
			position:"right",
			tooltipClass : "hide"
		}, {
			element :'#variableDeclaration2',
			intro :'',
			position:"right" 
		}, {
			element :'#numberDiv3',
			intro :'',
			position:"right" 
		}, {
			element :'#sopLine2',
			intro :'',
			position:"right",
			tooltipClass : "hide"
		}, {
			element :'#outputDiv',
			intro :'',
			position:"right",
			tooltipClass : "hide"
		}, {
			element :'#closeBrace1',
			intro :'',
			position:"right" 
		}, {
			element :'#sopLine1',
			intro :'',
			position:"right",
			tooltipClass : "hide"
		}, {
			element :'#outputDiv',
			intro :'',
			position:"right",
			tooltipClass : "hide"
		}, {
			element :'#printDefinition',
			intro :'',
			position:"right",
			tooltipClass : "hide"
		}, {
			element : "#restartBtn",
			intro : "Click to restart.",
			position : "right"
		}]
	});
	intro.onafterchange(function(targetElement) { 
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId=targetElement.id;
		switch (elementId) {
		case "automainDeclaration" :
			$(".introjs-helperLayer").one("transitionend", function() {
		  		$('.introjs-tooltip').removeClass("hide");
				typing('.introjs-tooltiptext', "An <span class='ct-code-b-yellow'>automatic</span> or <span class='ct-code-b-yellow'>local</span>"
							+ " variable is declared with the keyword <span class='ct-code-b-yellow'>auto</span> and is not mandatory.", function() { 
					$('#animationDiv').css({'opacity':'1'});
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		
		case "mainfunctionDeclaration" :
		case "mainDeclaration" :
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					intro.nextStep();
				}, 500);
			});
		break;
		
		case "animationDiv" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#mainmemoryheading').css({'opacity':'1'});
				$('#mainMemory').removeClass("visibility-hidden").addClass('box-border');
		  		setTimeout(function () {
					intro.nextStep();
				}, 1000);
			});
		break; 
		
		case "numberDiv1" :
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext', "Variable <span class='ct-code-b-yellow'>a</span> is allocated some memory.", function() { 
					$('#aValueAnimation, #addressDiv1, #address1').removeClass('visibility-hidden');
					$('.introjs-nextbutton').show();
		  		});
			});
		break;
		
		case "numberDiv2" :
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext', "Variable <span class='ct-code-b-yellow'>b</span> is allocated some memory.", function() { 
		  			$('#address2, #addressDiv2').removeClass('visibility-hidden');
		  			$('.introjs-nextbutton').show();
		  		});
			});
		break; 
		
		case "variableDeclaration1" :
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "Here, the variable <span class='ct-code-b-yellow'>a</span> is initialized to"
						+ " <span class='ct-code-b-yellow'>10</span>.", function() { 
					$('.introjs-nextbutton').show();
				});
			});
		break;
		
		case "addressDiv1" :
			intro.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				TweenMax.to('#numberDiv1', 0.5, {opacity: 1, onComplete: function() {
					$('#number1').addClass('circle-css').effect("highlight", {color: 'yellow'}, 1000, function() {
						$('#number1').removeClass('circle-css');
						$("#addressValue1").text($("#number1").text());
						fromEffectWithTweenMax('#number1', '#addressValue1', function() {
							$('.introjs-tooltip').removeClass("hide");
							typing('.introjs-tooltiptext', "The value <span class='ct-code-b-yellow'>10</span> is stored in the memory allocated"
										+ " for variable <span class='ct-code-b-yellow'>a</span>.", function() { 
								$('.introjs-nextbutton').show();	
							});	
						});
					});
				}});
			});
		break;
		
		case "mainMemory" :
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "The default values of automatic variables <span class='ct-code-b-yellow'>a</span>"
							+ " and <span class='ct-code-b-yellow'>b</span> are some garbage values.", function() { 
					$('.introjs-nextbutton').show();
	  		 	});
			});
		break;
		
		case "functionDeclaration1" :
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "When a call to the function <span class='ct-code-b-yellow'>ganga()</span> is made, the control"
								+ " is transferred from the function <span class='ct-code-b-yellow'>main() to ganga()</span>.", function() { 
					$('.introjs-nextbutton').show();
	  		 	});
			});
		break;
		
		case "variableDeclaration2" :
			$('.introjs-tooltip').css({'min-width' : '300px'});
			$(".introjs-helperLayer").one("transitionend", function() {
				text = "A variable <span class='ct-code-b-yellow'>a</span> is declared and initialized.<br/> This variable is treated as a" +
						" different variable from the one declared in main method. The scope of this variable <span class='ct-code-b-yellow'>a" +
						"</span> is within the function <span class='ct-code-b-yellow'>ganga()</span>, so it is treated as "+
						"<span class='ct-code-b-yellow'>local / automatic</span> variable.<br><br>Note : Here, " +
						"<b>keyword</b> <span class='ct-code-b-yellow'>auto</span> is not used.";
				typing('.introjs-tooltiptext',text ,function() { 
					$('.introjs-nextbutton').show();
		  		 });
			});
		break; 
		
		case "numberDiv3" :
			intro.refresh();
			$('.introjs-tooltip').css({'min-width' : '200px'});
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#numberDiv3').addClass('box-border');
				$('#addressDiv3, #functionMemory').removeClass('visibility-hidden');
	  			$('.introjs-tooltip').removeClass("hide");
				typing('.introjs-tooltiptext', "Memory is allocated to variable <span class='ct-code-b-yellow'>a</span> and will exist till"
									+ " the  end of function <span class='ct-code-b-yellow'>ganga()</span>.", function() { 
		  			TweenMax.to('#numberDiv3', 1, {opacity: 1, onComplete: function() {
						$('#number3').addClass('circle-css').effect("highlight", {color: 'yellow'}, 1000, function() {
							$('#number3').removeClass('circle-css');
							$("#addressValue3").text($("#number3").text());
							fromEffectWithTweenMax('#number3', '#addressValue3', function() {
								$('.introjs-nextbutton').show();
							});
						});
					}}); 
				});
			});
		break; 
		
		case "sopLine2" :
			$('#outputDiv').css({'opacity':'1'});
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function () {
					intro.nextStep();
				}, 1000);
			});
		break;
		
		case "outputDiv" :
			$('.introjs-helperLayer').one('transitionend', function() {
				 if (intro._currentStep == 14) {
					printDecimalValue();
				 }
				 else if (intro._currentStep == 17) {
					printDecimalValue2();
				} 
			});
		break;
		
		case "closeBrace1" :
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "When the function <span class='ct-code-b-yellow'>ganga()</span> ends, the local variables"
							+ " are destroyed." ,function() { 
					$('.introjs-nextbutton').show();
				});
			});
		break; 
		
		case "sopLine1" :
			$('#functionMemory').addClass('visibility-hidden');
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function () {
					intro.nextStep();
				}, 1000);
			});
		break;
		
		case "printDefinition" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#line1').fadeTo(1000,1,function() {
				  $('#line2').fadeTo(1000,1,function() {
				    $('#line3').fadeTo(1000,1,function() {
				    });
				  });
				});
			});
		break; 
		
		case "restartBtn":
			$('.introjs-tooltip').css({'min-width' : '120px'});
			$("#printDefinition").addClass("z-index1000000");
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
			});
		break;
		}
	});
	
	intro.start();
	text="Let us consider an example.";
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});	
};

function typing(typingId, typingContent, callbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval":5,
		"cursor_color": "blue"
	}, function() {
		$(typingId).removeClass('typingCursor');
		callbackFunction();
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

function toEffectWithTweenMax(selector1, selector2, selector3, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset({top: l1.top, left: l1.left});
	TweenMax.to($(selector2), 0.5, {top: 22, left: selector3, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function printDecimalValue() {
  	$("#outputAValue1").text("The local variable value within ganga() = ");
  	$("#percentage2").addClass("z-index1000000").effect( "highlight",{color: 'yellow'},500, function() {
  		$("#percentage2").removeClass("z-index1000000");
  		$("#aValue2").addClass("z-index1000000").effect( "highlight",{color: 'yellow'},500, function() {
  			$("#aValue2").removeClass("z-index1000000")
  			$("#aheading").addClass("z-index1000000").effect( "highlight",{color: 'yellow'},500, function() {
  				$("#aheading").removeClass("z-index1000000")
  				$('#addressValue3').addClass('circle-css z-index1000000').effect("highlight", {color: 'yellow'}, 500, function() {
  					$('#addressValue3').removeClass('circle-css z-index1000000');
  					$("#outputAValue1").append("<span id='output1' class='ct-blue-color'>"+ $("#addressValue3").text()+"</span>");
  					fromEffectWithTweenMax("#addressValue3", "#output1", function() { 
			  			setTimeout(function () {
			  				intro.nextStep();
						}, 1000);
				   });  
  				});
	  		}); 
	  	});
	});
}

function printDecimalValue2() {
	$("#outputAValue2").text("The local variable value within main() = ");
	$("#percentage1").addClass("z-index1000000").effect( "highlight",{color: 'yellow'},500, function() {
		$("#percentage1").removeClass("z-index1000000")
		$("#aValue1").addClass("z-index1000000").effect( "highlight",{color: 'yellow'},500, function() {
			$("#aValue1").removeClass("z-index1000000")
			$("#aheading1").addClass("z-index1000000").effect( "highlight",{color: 'yellow'},500, function() {
				$("#aheading1").removeClass("z-index1000000")
		  		$('#addressValue1').addClass('circle-css z-index1000000').effect("highlight", {color: 'yellow'}, 500, function() {
	  				$('#addressValue1').removeClass('circle-css z-index1000000');
	  				$("#outputAValue2").append("<span id='output2' class='ct-blue-color'>"+ $("#addressValue1").text()+"</span>");
			  	 	fromEffectWithTweenMax("#addressValue1", "#output2", function() {
			  			setTimeout(function () {
							$('#printDefinition').removeClass('visibility-hidden');
							intro.nextStep();
						},1000);
				  	});  
	 			});
	  		}); 
	  	});
	});
}

function animate1() {
	$('.introjs-duplicate-nextbutton').remove();	
	intro.nextStep();
}