var tl = new TimelineLite();
var typingSpeed = 10;
var executeBtnCount = 1;

var constantsInCReady = function() {
	introjsGuide();
	
	var action =  intro._introItems[intro._currentStep].action;
	$('#intDiv').click(function() {
		action = "integer";
		dynamicSteps("integer");
		intro.nextStep();
		$('#floatDiv').removeClass('disabled',true);
		$('#charDiv').removeClass('disabled',true);
		$('#stringDiv').removeClass('disabled',true);
	});
	
	$('#floatDiv').click(function() {
		action = "float";
		dynamicSteps("float");
		intro.nextStep();
	});
	
	$('#charDiv').click(function() {
		action = "char";
		dynamicSteps("char");
		intro.nextStep();
	});
	
	$('#stringDiv').click(function() {
		action = "string";
		dynamicSteps("string");
		intro.nextStep();
	});
	
	$("body").keypress(function(event) {
		console.log("am in keypresss................");
		if (event.keyCode == 13) {
		     event.preventDefault();
		     return false;
		}
	});
	
	$("#restartBtn").click(function() {
		location.reload();
	});
}
function introjsGuide() {
	intro = introJs();
	intro.setOptions({
		
	steps : [{
				element :'#titleName',
				intro :'',
				position:"right"
			},{
				element :'#informationDiv',
				intro :'',
				tooltipClass:'hide',
				position:"left"
			},{
				element :'#constantsBtnsDiv',
				intro :'',
				tooltipClass:'hide',
				position:"right"
			},{
				element :'#intDiv',
				intro :'',
				tooltipClass:'hide',
				position:"bottom"
			}]
	});
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
			case "titleName":
				var text = "Let us learn about the constants in <span class='ct-code-b-yellow'>C</span>."; 
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").removeClass("opacity00");
				});
				break;
				
			case "informationDiv":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#informationDiv").removeClass("opacity00");
					TweenMax.to("#typingtext", 0.2, {opacity: 1, onComplete: function() {
						$(".next-btn").removeClass("opacity00").addClass("animated zoomIn");;
						manualStep1();
					}});
				});
				break;
				
			case "constantsBtnsDiv":
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#constantsBtnsDiv").removeClass("opacity00");
					$("#nextBtn").remove();
				});
				break;
				
			case "intDiv":
				var text = "";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").removeClass("opacity00");
				//	$("#nextBtn").remove();
				});
				break;
				
			case "integerBox":
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#integerBox").removeClass("opacity00");
					var text = "An integer constant is a sequence of digits without a decimal point.<br/> An integer constant can be assigned from any of the below three numeric representations : <span id='nextBtn2' class='introjs-button next-btn opacity00' onclick='manualStep2()'>Next &#8594;</span>";
					typing("#intDefText", text, function() {
						$(".next-btn").removeClass("opacity00");
						intro.refresh();
						manualStep2();
					});
				});
				break;
				
			case "floatBox":
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#floatBox").removeClass("opacity00");
					var text = "Any number with a decimal point is called a floating point constant or a single-precision constant.<br/>" +
								"It can be written in the exponential form (e or E followed by positive or negative integer): <span id='floatNextBtn' class='introjs-button next-btn opacity00' onclick='floatStep1()'>Next &#8594;</span>";
					typing("#floatDefText", text, function() {
						$(".next-btn").removeClass("opacity00");
						intro.refresh();
						floatStep1();
					});
				});
				break;
				
			case "charBox":
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#charBox").removeClass("opacity00");
					var text = "A character constant contains single character and it should be within single quotes.<span id='charNextBtn' class='introjs-button next-btn opacity00' onclick='charStep1()'>Next &#8594;</span>";
					typing("#charDefText", text, function() {
						$(".next-btn").removeClass("opacity00");
						intro.refresh();
						charStep1();
					});
				});
				break;
				
			case "stringBox":
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#stringBox").removeClass("opacity00");
					var text = "A string constant is a sequence of zero or more characters enclosed within double quotes.<br/>" +
								"<span>A string constant is also known as a string literal.</span><span id='stringNextBtn' class='introjs-button next-btn opacity00' onclick='stringStep1()'>Next &#8594;</span>";
					typing("#stringDefText", text, function() {
						$(".next-btn").removeClass("opacity00");
						intro.refresh();
						stringStep1();
					});
				});
				break;
				
			case "restartBtn" :
				$('.introjs-nextbutton').hide();
				$("#restartBtn").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing(".introjs-tooltiptext", "Click to restart.", 10, "",function() {
						
					});
				});
				break;
		}
	});
	
	intro.setOption('showStepNumbers', false);
	intro.setOption('exitOnOverlayClick', false);
	intro.setOption('exitOnEsc', false);
	intro.setOption('keyboardNavigation', true);
	intro.start();
	
	intro.refresh();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
	$('.introjs-nextbutton').addClass('opacity00');
}

function manualStep1() {
	$("#nextBtn").click(function() {
		//$('.introjs-nextbutton').click();
		intro.nextStep();
	});
}

function manualStep2() {
	$("#nextBtn2").click(function() {
		manualStep3();
	});
}

function manualStep3() {
	TweenMax.to("#list1", 0.2, {opacity: 1, onComplete: function() {
		TweenMax.to("#list2", 0.2, {opacity: 1, onComplete: function() {
			TweenMax.to("#list3", 0.2, {opacity: 1, onComplete: function() {
				TweenMax.to("#intExampleDiv", 0.2, {opacity: 1, onComplete: function() {
					TweenMax.to("#intEx1", 0.2, {opacity: 1, onComplete: function() {
						var text = "<span id='manualStep5Id' class='introjs-button next-btn opacity00' onclick='manualStep5()'>Next &#8594;</span>"
						typing("#intExBtn1", text, function() {
							intro.refresh();
							newAnimateBtn();
						});
					}});
				}});
				
				/* var text = "<span class='introjs-button next-btn opacity00' onclick='manualStep4()'>Next &#8594;</span>"
				typing("#test1", text, function() {
					newAnimateBtn();
				}) */
			}});
		}});
	}});
}

/* function manualStep4() {
	TweenMax.to("#intExampleDiv", 0.2, {opacity: 1, onComplete: function() {
		TweenMax.to("#intEx1", 0.2, {opacity: 1, onComplete: function() {
			var text = "<span id='manualStep5Id' class='introjs-button next-btn opacity00' onclick='manualStep5()'>Next &#8594;</span>"
			typing("#intExBtn1", text, function() {
				newAnimateBtn();
			});
		}});
	}});
} */

function manualStep5() {
	$("#manualStep5Id").removeClass("next-btn").addClass("next-btn-info");
	$("#manualStep5Id").text("info");
	var popText = "This is a valid constant. An <span class='ct-code-b-yellow'>integer constant</span> can contain integers within the range of an integer.";
	var popBtn = "<span id='popBtn1' class='introjs-button next-btn' onclick='popoverStep1()'>Next &#8594;</span>";
	popoverText("intExBtn1", popText, popBtn);
}

function popoverStep1() {
	TweenMax.to("#intEx2", 0.2, {opacity: 1, onComplete: function() {
		var text = "<span id='manualStep6Id' class='introjs-button next-btn opacity00' onclick='manualStep6()'>Next &#8594;</span>"
		typing("#intExBtn2", text, function() {
			newAnimateBtn();
			$('#intExBtn1').off('shown.bs.popover');
		});
	}});
}

function manualStep6() {
	$("#manualStep6Id").removeClass("next-btn").addClass("next-btn-info");
	$("#manualStep6Id").text("info");
	var popText = "This is <span class='ct-code-b-red'>not a valid constant</span>. An <span class='ct-code-b-yellow'>integer constant</span> cannot contain blank spaces or commas.";
	var popBtn = "<span id='popBtn2' class='introjs-button next-btn' onclick='popoverStep2()'>Next &#8594;</span>";
	popoverText("intExBtn2", popText, popBtn);
}

function popoverStep2() {
	TweenMax.to("#intEx3", 0.2, {opacity: 1, onComplete: function() {
		var text = "<span id='manualStep7Id' class='introjs-button next-btn opacity00' onclick='manualStep7()'>Next &#8594;</span>";
		typing("#intExBtn3", text, function() {
			newAnimateBtn();
			$('#intExBtn2').off('shown.bs.popover');
		});
	}});
}

function manualStep7() {
	$("#manualStep7Id").removeClass("next-btn").addClass("next-btn-info");
	$("#manualStep7Id").text("info");
	var popText = "This is a <span class='ct-code-b-yellow'>valid constant</span>. A <span class='ct-code-b-yellow'>decimal integer constant</span> may end with" +
					"<ul><li><span class='ct-code-b-yellow'>u</span> or <span class='ct-code-b-yellow'>U</span> representing <span class='ct-code-b-yellow'>unsigned int.</span></li>" +
					"<li><span class='ct-code-b-yellow'>I</span> or <span class='ct-code-b-yellow'>L</span> representing <span class='ct-code-b-yellow'>long int</span>.</li>" +
					"<li><span class='ct-code-b-yellow'>UL</span> representing <span class='ct-code-b-yellow'>unsigned long int</span>.</li>" +
				"</ul>";
	var popBtn = "<span id='popBtn3' class='introjs-button next-btn' onclick='popoverStep3()'>Next &#8594;</span>";
	popoverText("intExBtn3", popText, popBtn);
}

function popoverStep3() {
	TweenMax.to("#intEx4", 0.2, {opacity: 1, onComplete: function() {
		var text = "<span id='manualStep8Id' class='introjs-button next-btn opacity00' onclick='manualStep8()'>Next &#8594;</span>";
		typing("#intExBtn4", text, function() {
			newAnimateBtn();
			$('#intExBtn3').off('shown.bs.popover');
		});
	}});
}

function manualStep8() {
	$("#manualStep8Id").removeClass("next-btn").addClass("next-btn-info");
	$("#manualStep8Id").text("info");
	var popText = "This is <span class='ct-code-b-red'>not a valid</span> constant. An <span class='ct-code-b-yellow'>integer constant</span> cannot contain a decimal point.";
	var popBtn = "<span id='popBtn4' class='introjs-button next-btn' onclick='popoverStep4()'>Next &#8594;</span>";
	popoverText("intExBtn4", popText, popBtn);
}

function popoverStep4() {
	TweenMax.to("#intEx5", 0.2, {opacity: 1, onComplete: function() {
		var text = "<span id='manualStep9Id' class='introjs-button next-btn opacity00' onclick='manualStep9()'>Next &#8594;</span>";
		typing("#intExBtn5", text, function() {
			newAnimateBtn();
			intro.refresh();
			$('#intExBtn4').off('shown.bs.popover');
		});
	}});
}

function manualStep9() {
	$("#manualStep9Id").removeClass("next-btn").addClass("next-btn-info");
	$("#manualStep9Id").text("info");
	var popText = "This is a <span class='ct-code-b-yellow'>valid constant</span>. An octal representation of a integer will start with <span class='ct-code-b-yellow'>zero (0)</span>.";
	var popBtn = "<span id='popBtn5' class='introjs-button next-btn' onclick='popoverStep5()'>Next &#8594;</span>";
	popoverText("intExBtn5", popText, popBtn);
}

function popoverStep5() {
	TweenMax.to("#intEx6", 0.2, {opacity: 1, onComplete: function() {
		var text = "<span id='manualStep10Id' class='introjs-button next-btn opacity00' onclick='manualStep10()'>Next &#8594;</span>";
		typing("#intExBtn6", text, function() {
			newAnimateBtn();
			$('#intExBtn5').off('shown.bs.popover');
		});
	}});
}

function manualStep10() {
	$("#manualStep10Id").removeClass("next-btn").addClass("next-btn-info");
	$("#manualStep10Id").text("info");
	var popText = "This is <span class='ct-code-b-red'>not a valid</span> constant. An <span class='ct-code-b-yellow'>octal integer constant</span> can contain only digits from 0 to 7.";
	var popBtn = "<span id='popBtn6' class='introjs-button next-btn' onclick='popoverStep6()'>Next &#8594;</span>";
	popoverText("intExBtn6", popText, popBtn);
}

function popoverStep6() {
	TweenMax.to("#intEx7", 0.2, {opacity: 1, onComplete: function() {
		var text = "<span id='manualStep11Id' class='introjs-button next-btn opacity00' onclick='manualStep11()'>Next &#8594;</span>";
		typing("#intExBtn7", text, function() {
			newAnimateBtn();
			$('#intExBtn6').off('shown.bs.popover');
		});
	}});
}

function manualStep11() {
	$("#manualStep11Id").removeClass("next-btn").addClass("next-btn-info");
	$("#manualStep11Id").text("info");
	var popText = "This is a <span class='ct-code-b-yellow'>valid constant</span>. <span class='ct-code-b-yellow'>A hexadecimal integer constant</span> starts with <span class='ct-code-b-yellow'>0X</span> or <span class='ct-code-b-yellow'>0x</span>.";
	var popBtn = "<span id='popBtn7' class='introjs-button next-btn' onclick='popoverStep7()'>Next &#8594;</span>";
	popoverText("intExBtn7", popText, popBtn);
}

function popoverStep7() {
	TweenMax.to("#intEx8", 0.2, {opacity: 1, onComplete: function() {
		var text = "<span id='manualStep12Id' class='introjs-button next-btn opacity00' onclick='manualStep12()'>Next &#8594;</span>";
		typing("#intExBtn8", text, function() {
			newAnimateBtn();
			$('#intExBtn7').off('shown.bs.popover');
		});
	}});
}

function manualStep12() {
	$("#manualStep12Id").removeClass("next-btn").addClass("next-btn-info");
	$("#manualStep12Id").text("info");
	var popText = "This is <span class='ct-code-b-red'>not a valid</span> constant. A <span class='ct-code-b-yellow'>hexadecimal integer constant</span> will start with <span class='ct-code-b-yellow'>0x</span> or <span class='ct-code-b-yellow'>0X</span>.";
	var popBtn = "<span id='popBtn8' class='introjs-button next-btn' onclick='popoverStep8()'>Next &#8594;</span>";
	popoverText("intExBtn8", popText, popBtn);
}

function popoverStep8() {
	TweenMax.to("#intEx9", 0.2, {opacity: 1, onComplete: function() {
		var text = "<span id='manualStep13Id' class='introjs-button next-btn opacity00' onclick='manualStep13()'>Next &#8594;</span>";
		typing("#intExBtn9", text, function() {
			newAnimateBtn();
			intro.refresh();
			$('#intExBtn8').off('shown.bs.popover');
		});
	}});
}

function manualStep13() {
	$("#manualStep13Id").removeClass("next-btn").addClass("next-btn-info");
	$("#manualStep13Id").text("info");
	var popText = "This is a <span class='ct-code-b-yellow'>valid constant</span>. since it is valid <span class='ct-code-b-yellow'>hexadecimal integer constant</span>.";
	var popBtn = "<span id='popBtn9' class='introjs-button next-btn' onclick='popoverStep9()'>Next &#8594;</span>";
	popoverText("intExBtn9", popText, popBtn);
}

function popoverStep9() {
	TweenMax.to("#intEx10", 0.2, {opacity: 1, onComplete: function() {
		var text = "<span id='manualStep14Id' class='introjs-button next-btn opacity00' onclick='manualStep14()'>Next &#8594;</span>";
		typing("#intExBtn10", text, function() {
			newAnimateBtn();
			intro.refresh();
			$('#intExBtn9').off('shown.bs.popover');
		});
	}});
}

function manualStep14() {
	$("#manualStep14Id").removeClass("next-btn").addClass("next-btn-info");
	$("#manualStep14Id").text("info");
	var popText = "<span>This is <span class='ct-code-b-red'>not a valid</span> constant. Because it is a wrong <span class='ct-code-b-yellow'>hexadecimal integer constant</span></span>";
	var popBtn = "<span id='popBtn10' class='introjs-button next-btn' onclick='popoverStep10()'>Next &#8594;</span>";
	popoverText("intExBtn10", popText, popBtn);
}

function popoverStep10() {
	$('#intExBtn10').off('shown.bs.popover');
	$("#popBtn10").remove();
	$("#manualStep15Id").removeClass("next-btn").addClass("next-btn-info");
	$("#manualStep15Id").text("info");
	//$('.introjs-nextbutton').click();
	intro.nextStep();
	$('.popover').popover('hide');
}

//float constant steps...

function floatStep1() {
	$("#floatNextBtn").click(function() {
		floatStep2();
	});
}

function floatStep2() {
	TweenMax.to("#floatExampleDiv", 0.2, {opacity: 1, onComplete: function() {
		TweenMax.to("#floatEx1", 0.2, {opacity: 1, onComplete: function() {
			var text = "<span id='floatStep3Id' class='introjs-button next-btn opacity00' onclick='floatStep3()'>Next &#8594;</span>"
			typing("#floatExBtn1", text, function() {
				newAnimateBtn();
			});
		}});
	}});
}

function floatStep3() {
	$("#floatStep3Id").removeClass("next-btn").addClass("next-btn-info");
	$("#floatStep3Id").text("info");
	var popText = "This is a <span class='ct-code-b-yellow'>valid constant</span>. A floating point constant can have either an integral part or a fractional part.";
	var popBtn = "<span id='floatPopBtn1' class='introjs-button next-btn' onclick='floatPopoverStep1()'>Next &#8594;</span>";
	popoverText("floatExBtn1", popText, popBtn);
}

function floatPopoverStep1() {
	TweenMax.to("#floatEx2", 0.2, {opacity: 1, onComplete: function() {
		var text = "<span id='floatStep4Id' class='introjs-button next-btn opacity00' onclick='floatStep4()'>Next &#8594;</span>"
		typing("#floatExBtn2", text, function() {
			newAnimateBtn();
			intro.refresh();
			$('#floatExBtn1').off('shown.bs.popover');
		});
	}});
}

function floatStep4() {
	$("#floatStep4Id").removeClass("next-btn").addClass("next-btn-info");
	$("#floatStep4Id").text("info");
	var popText = "This is a <span class='ct-code-b-yellow'>valid constant</span>, Because a floating point constant can end with <span class='ct-code-b-yellow'>f</span> or <span class='ct-code-b-yellow'>F</span>.";
	var popBtn = "<span id='floatPopBtn2' class='introjs-button next-btn' onclick='floatPopoverStep2()'>Next &#8594;</span>";
	popoverText("floatExBtn2", popText, popBtn);
}

function floatPopoverStep2() {
	TweenMax.to("#floatEx3", 0.2, {opacity: 1, onComplete: function() {
		var text = "<span id='floatStep5Id' class='introjs-button next-btn opacity00' onclick='floatStep5()'>Next &#8594;</span>"
		typing("#floatExBtn3", text, function() {
			newAnimateBtn();
			$('#floatExBtn2').off('shown.bs.popover');
		});
	}});
}

function floatStep5() {
	$("#floatStep5Id").removeClass("next-btn").addClass("next-btn-info");
	$("#floatStep5Id").text("info");
	var popText = "This is <span class='ct-code-b-red'>not a valid constant</span>. Because in a floating point constant exponent cannot have a decimal point.";
	var popBtn = "<span id='floatPopBtn3' class='introjs-button next-btn' onclick='floatPopoverStep3()'>Next &#8594;</span>";
	popoverText("floatExBtn3", popText, popBtn);
}

function floatPopoverStep3() {
	TweenMax.to("#floatEx4", 0.2, {opacity: 1, onComplete: function() {
		var text = "<span id='floatStep6Id' class='introjs-button next-btn opacity00' onclick='floatStep6()'>Next &#8594;</span>"
		typing("#floatExBtn4", text, function() {
			newAnimateBtn();
			intro.refresh();
			$('#floatExBtn3').off('shown.bs.popover');
		});
	}});
}

function floatStep6() {
	$("#floatStep6Id").removeClass("next-btn").addClass("next-btn-info");
	$("#floatStep6Id").text("info");
	var popText = "This is a <span class='ct-code-b-yellow'>valid constant</span>. because an exponent <span class='ct-code-b-yellow'>e</span> or <span class='ct-code-b-yellow'>E</span> can have a positive or negative integer.";
	var popBtn = "<span id='floatPopBtn4' class='introjs-button next-btn' onclick='floatPopoverStep4()'>Next &#8594;</span>";
	popoverText("floatExBtn4", popText, popBtn);
}

function floatPopoverStep4() {
	TweenMax.to("#floatEx5", 0.2, {opacity: 1, onComplete: function() {
		var text = "<span id='floatStep7Id' class='introjs-button next-btn opacity00' onclick='floatStep7()'>Next &#8594;</span>"
		typing("#floatExBtn5", text, function() {
			newAnimateBtn();
			intro.refresh();
			$('#floatExBtn4').off('shown.bs.popover');
		});
	}});
}

function floatStep7() {
	$("#floatStep7Id").removeClass("next-btn").addClass("next-btn-info");
	$("#floatStep7Id").text("info");
	var popText = "This is a <span class='ct-code-b-red'>not a valid constant</span>. because Commas, blank spaces are not allowed while using the exponent <span class='ct-code-b-yellow'>e</span>.";
	var popBtn = "<span id='floatPopBtn5' class='introjs-button next-btn' onclick='floatPopoverStep5()'>Next &#8594;</span>";
	popoverText("floatExBtn5", popText, popBtn);
}

function floatPopoverStep5() {
	$('#floatExBtn5').off('shown.bs.popover');
	$("#floatPopBtn5").remove();
//	$('.introjs-nextbutton').click();
	intro.nextStep();
	$('.popover').popover('hide');
}

// character constant steps...


function charStep1() {
	$("#charNextBtn").click(function() {
		charStep2();
	});
}

function charStep2() {
	TweenMax.to("#charExampleDiv", 0.2, {opacity: 1, onComplete: function() {
		TweenMax.to("#charEx1", 0.2, {opacity: 1, onComplete: function() {
			var text = "<span id='charStep3Id' class='introjs-button next-btn opacity00' onclick='charStep3()'>Next &#8594;</span>"
			typing("#charExBtn1", text, function() {
				newAnimateBtn();
			});
		}});
	}});
}

function charStep3() {
	$("#charStep3Id").removeClass("next-btn").addClass("next-btn-info");
	$("#charStep3Id").text("info");
	var popText = "This is a <span class='ct-code-b-yellow'>valid char constant</span>. because it is a single character should be enclosed in single quotes.";
	var popBtn = "<span id='charPopBtn1' class='introjs-button next-btn' onclick='charPopoverStep1()'>Next &#8594;</span>";
	popoverText("charExBtn1", popText, popBtn);
}

function charPopoverStep1() {
	TweenMax.to("#charEx2", 0.2, {opacity: 1, onComplete: function() {
		var text = "<span id='charStep4Id' class='introjs-button next-btn opacity00' onclick='charStep4()'>Next &#8594;</span>"
		typing("#charExBtn2", text, function() {
			newAnimateBtn();
			intro.refresh();
			$('#charExBtn1').off('shown.bs.popover');
		});
	}});
}

function charStep4() {
	$("#charStep4Id").removeClass("next-btn").addClass("next-btn-info");
	$("#charStep4Id").text("info");
	var popText = "This is a <span class='ct-code-b-red'>invalid char constant</span>. because a single quotes is required on both sides.";
	var popBtn = "<span id='charPopBtn2' class='introjs-button next-btn' onclick='charPopoverStep2()'>Next &#8594;</span>";
	popoverText("charExBtn2", popText, popBtn);
}

function charPopoverStep2() {
	TweenMax.to("#charEx3", 0.2, {opacity: 1, onComplete: function() {
		var text = "<span id='charStep5Id' class='introjs-button next-btn opacity00' onclick='charStep5()'>Next &#8594;</span>"
		typing("#charExBtn3", text, function() {
			newAnimateBtn();
			$('#charExBtn2').off('shown.bs.popover');
		});
	}});
}

function charStep5() {
	$("#charStep5Id").removeClass("next-btn").addClass("next-btn-info");
	$("#charStep5Id").text("info");
	var popText = "This is a <span class='ct-code-b-yellow'>valid char constant</span> as Special characters are also be used.";
	var popBtn = "<span id='charPopBtn3' class='introjs-button next-btn' onclick='charPopoverStep3()'>Next &#8594;</span>";
	popoverText("charExBtn3", popText, popBtn);
}

function charPopoverStep3() {
	TweenMax.to("#charEx4", 0.2, {opacity: 1, onComplete: function() {
		var text = "<span id='charStep6Id' class='introjs-button next-btn opacity00' onclick='charStep6()'>Next &#8594;</span>"
		typing("#charExBtn4", text, function() {
			newAnimateBtn();
			intro.refresh();
			$('#charExBtn3').off('shown.bs.popover');
		});
	}});
}

function charStep6() {
	$("#charStep6Id").removeClass("next-btn").addClass("next-btn-info");
	$("#charStep6Id").text("info");
	var popText = "This is a <span class='ct-code-b-red'>not valid char constant</span>. A character constant should be enclosed in single quotes not double quotes.";
	var popBtn = "<span id='charPopBtn4' class='introjs-button next-btn' onclick='charPopoverStep4()'>Next &#8594;</span>";
	popoverText("charExBtn4", popText, popBtn);
}

function charPopoverStep4() {
	TweenMax.to("#charEx5", 0.2, {opacity: 1, onComplete: function() {
		var text = "<span id='charStep7Id' class='introjs-button next-btn opacity00' onclick='charStep7()'>Next &#8594;</span>"
		typing("#charExBtn5", text, function() {
			newAnimateBtn();
			intro.refresh();
			$('#charExBtn4').off('shown.bs.popover');
		});
	}});
}

function charStep7() {
	$("#charStep7Id").removeClass("next-btn").addClass("next-btn-info");
	$("#charStep7Id").text("info");
	var popText = "This is a <span class='ct-code-b-yellow'>valid char constant</span>. Because a blank space is also a valid character.";
	var popBtn = "<span id='charPopBtn5' class='introjs-button next-btn' onclick='charPopoverStep5()'>Next &#8594;</span>";
	popoverText("charExBtn5", popText, popBtn);
}

function charPopoverStep5() {
	$('#charExBtn5').off('shown.bs.popover');
	$("#charPopBtn5").remove();
	//$('.introjs-nextbutton').click();
	intro.nextStep();
	intro.refresh();
	$('.popover').popover('hide');
}


// String constants steps...

function stringStep1() {
	$("#stringNextBtn").click(function() {
		stringStep2();
	});
}

function stringStep2() {
	TweenMax.to("#stringExampleDiv", 0.2, {opacity: 1, onComplete: function() {
		TweenMax.to("#stringEx1", 0.2, {opacity: 1, onComplete: function() {
			var text = "<span id='stringStep3Id' class='introjs-button next-btn opacity00' onclick='stringStep3()'>Next &#8594;</span>"
			typing("#stringExBtn1", text, function() {
				newAnimateBtn();
			});
		}});
	}});
}

function stringStep3() {
	$("#stringStep3Id").removeClass("next-btn").addClass("next-btn-info");
	$("#stringStep3Id").text("info");
	var popText = "This is a <span class='ct-code-b-red'>invalid string constant</span>. because a string constant should be enclosed in double quotes not single quotes.";
	var popBtn = "<span id='stringPopBtn1' class='introjs-button next-btn' onclick='stringPopoverStep1()'>Next &#8594;</span>";
	popoverText1("stringExBtn1", popText, popBtn);
}

function stringPopoverStep1() {
	TweenMax.to("#stringEx2", 0.2, {opacity: 1, onComplete: function() {
		var text = "<span id='stringStep4Id' class='introjs-button next-btn opacity00' onclick='stringStep4()'>Next &#8594;</span>"
		typing("#stringExBtn2", text, function() {
			newAnimateBtn();
			intro.refresh();
			$('#stringExBtn1').off('shown.bs.popover');
		});
	}});
}

function stringStep4() {
	$("#stringStep4Id").removeClass("next-btn").addClass("next-btn-info");
	$("#stringStep4Id").text("info");
	var popText = "This is a <span class='ct-code-b-yellow'>valid string constant</span>. A string constant can have zero or multiple characters enclosed within double quotes.";
	var popBtn = "<span id='stringPopBtn2' class='introjs-button next-btn' onclick='stringPopoverStep2()'>Next &#8594;</span>";
	popoverText1("stringExBtn2", popText, popBtn);
}

function stringPopoverStep2() {
	TweenMax.to("#stringEx3", 0.2, {opacity: 1, onComplete: function() {
		var text = "<span id='stringStep5Id' class='introjs-button next-btn opacity00' onclick='stringStep5()'>Next &#8594;</span>"
		typing("#stringExBtn3", text, function() {
			newAnimateBtn();
			$('#stringExBtn2').off('shown.bs.popover');
		});
	}});
}

function stringStep5() {
	$("#stringStep5Id").removeClass("next-btn").addClass("next-btn-info");
	$("#stringStep5Id").text("info");
	var popText = "This is <span class='ct-code-b-red'>not a valid string constant</span>. because a string literal is not enclosed within double quotes.";
	var popBtn = "<span id='stringPopBtn3' class='introjs-button next-btn' onclick='stringPopoverStep3()'>Next &#8594;</span>";
	popoverText1("stringExBtn3", popText, popBtn);
}

function stringPopoverStep3() {
	TweenMax.to("#stringEx4", 0.2, {opacity: 1, onComplete: function() {
		var text = "<span id='stringStep6Id' class='introjs-button next-btn opacity00' onclick='stringStep6()'>Next &#8594;</span>"
		typing("#stringExBtn4", text, function() {
			newAnimateBtn();
			intro.refresh();
			$('#stringExBtn3').off('shown.bs.popover');
		});
	}});
}

function stringStep6() {
	$("#stringStep6Id").removeClass("next-btn").addClass("next-btn-info");
	$("#stringStep6Id").text("info");
	var popText = "This is a <span class='ct-code-b-yellow'>valid string constant</span>. because a string constant can contain combination of digits or any other character.";
	var popBtn = "<span id='stringPopBtn4' class='introjs-button next-btn' onclick='stringPopoverStep4()'>Next &#8594;</span>";
	popoverText1("stringExBtn4", popText, popBtn);
}

function stringPopoverStep4() {
	$('#stringExBtn4').off('shown.bs.popover');
	$("#stringPopBtn4").remove();
	//$('.introjs-nextbutton').click();
	intro.nextStep();
	intro.refresh();
	$('.popover').popover('hide');
}

/* function stringPopoverStep4() {
	TweenMax.to("#stringEx5", 0.2, {opacity: 1, onComplete: function() {
		var text = "<span id='stringStep7Id' class='introjs-button next-btn opacity00' onclick='stringStep7()'>Next &#8594;</span>"
		typing("#stringExBtn5", text, function() {
			newAnimateBtn();
			$('#stringExBtn4').off('shown.bs.popover');
		});
	}});
}

function stringStep7() {
	$("#stringStep7Id").removeClass("next-btn").addClass("next-btn-info");
	$("#stringStep7Id").text("info");
	var popText = "This is a <span class='ct-code-b-yellow'>valid constant</span>. Special characters are allowed in string constants.";
	var popBtn = "<span id='stringPopBtn5' class='introjs-button next-btn' onclick='stringPopoverStep5()'>Next &#8594;</span>";
	popoverText("stringExBtn5", popText, popBtn);
}

function stringPopoverStep5() {
	$('#stringExBtn5').off('shown.bs.popover');
	$("#stringPopBtn5").remove();
	//$('.introjs-nextbutton').click();
	intro.nextStep();
	$('.popover').popover('hide');
} */


// dynamic steps...

function dynamicSteps(action) {
	if (action == "integer") {
		console.log("integer --------------------");
		var dynamicStep = {
				"element" : "#integerBox",
			    "position" : "right",
			    "intro" : "",
			    tooltipClass : "hide",
			    action :action,
			}
		intro.insertOption(intro._currentStep + 1, dynamicStep);
		var dynamicStep = {
			element :'#floatDiv',
			intro :'',
			tooltipClass:'hide',
			position:"bottom"
		}
		intro.insertOption(intro._currentStep + 2, dynamicStep);
		
	} else if (action == "float") {
		console.log("float ----------------------------");
		var dynamicStep = {
				"element" : "#floatBox",
			    "position" : "right",
			    "intro" : "",
			    tooltipClass : "hide",
			    action :action,
			}
		intro.insertOption(intro._currentStep + 1, dynamicStep);
		
		var dynamicStep = {
				element :'#charDiv',
				intro :'',
				tooltipClass:'hide',
				position:"bottom"
			}
		intro.insertOption(intro._currentStep + 2, dynamicStep);
		
	} else if (action == "char") {
		var dynamicStep = {
				"element" : "#charBox",
			    "position" : "right",
			    "intro" : "",
			    tooltipClass : "hide",
			    action :action,
			}
		intro.insertOption(intro._currentStep + 1, dynamicStep);
		
		var dynamicStep = {
				element :'#stringDiv',
				intro :'',
				tooltipClass:'hide',
				position:"bottom"
			}
		intro.insertOption(intro._currentStep + 2, dynamicStep);
		
	} else if (action == "string") {
		var dynamicStep = {
				"element" : "#stringBox",
			    "position" : "right",
			    "intro" : "",
			    tooltipClass : "hide",
			    action :action,
			}
		intro.insertOption(intro._currentStep + 1, dynamicStep);
		
		var dynamicStep = {
				element :'#restartBtn',
				intro :'',
				position:"right",
			}
		intro.insertOption(intro._currentStep + 2, dynamicStep);
		
	}
}

function newAnimateBtn() {
	var l1 = $(".next-btn").eq(0).addClass("opacity00").offset();
	$(".next-btn").eq(1).offset({
		"top" : l1.top,
		"left" : l1.left
	}).removeClass("opacity00");
	
	TweenLite.to($(".next-btn").eq(1), 1, {top: 0, left: 0, onComplete: function() {
		$(".next-btn").eq(0).remove();
		$('.popover').popover('hide');
		$(".next-btn").click();
	}});
}

function popoverText(id, text, popBtn) {
	$('#' + id).popover({
		placement : 'right',
		html : 'true',
		content : text
	}).find('span').removeAttr('onclick');
	
	$('#' + id).on('shown.bs.popover', function() {
		$('#' + id).next().find('.popover-content').append(popBtn);
	});
}

function popoverText1(id, text, popBtn) {
	$('#' + id).popover({
		placement : 'top',
		html : 'true',
		content : text
	}).find('span').removeAttr('onclick');
	
	$('#' + id).on('shown.bs.popover', function() {
		$('#' + id).next().find('.popover-content').append(popBtn);
	});
}


function typing(id, text, callBackFunction) {
	$(id).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}