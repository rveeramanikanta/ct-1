var putElement;
var introjs = null;
var timelineLite = new TimelineLite();	

var functionCallReady = function() {
	introGuide();
	 $("#restart").click(function() {
		 location.reload();
	});
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			 		element : "#totalDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#funName",
					intro : "",
					position : "right",
				},{
			 		element : "#parameters",
					intro : "",
					position : "right",
				},{
			 		element : "#nameFun",
					intro : "",
					position : "right",
				},{
			 		element : "#addFun",
					intro : "",
					position : "right",
				},{
			 		element : "#mulFun",
					intro : "",
					position : "right",
				},{
			 		element : "#leftDiv",
					intro : "",
					position : "right",
				},{
			 		element : "#funDec",
					intro : "",
					position : "right",
				},{
			 		element : "#callingFun",
					intro : "",
					position : "right",
				},{
			 		element : "#funDef",
					intro : "",
					position : "right",
				},{
			 		element : "#printf1",
					intro : "",
					tooltipClass : "hide",
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide",
				}, {
					element: '#endFunc',
					intro: '',
					position: 'right',
				},{
			 		element : "#printf2",
					intro : "",
					tooltipClass : "hide",
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide",
				},{
			 		element : "#restart",
					intro : "Click to restart.",
					position : "right"
				}
			]});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			if (introjs._currentStep != 1) {
				$('.introjs-prevbutton').show();
			}
			if (introjs._currentStep == 1) {
				$("#example").addClass("opacity00");
			}
			if (introjs._currentStep == 2) {
				$("#example").removeClass("opacity00");
			}
			if (introjs._currentStep == 5) {
				$('#leftDiv').addClass("opacity00");
			}
			if (introjs._currentStep == 6) {
				$('#leftDiv').removeClass("opacity00");
			}

			$('.introjs-nextbutton').show();
			return;
		}
		
		if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
			introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		}
		var elementId = targetElement.id;
		switch (elementId) {
		case "totalDiv":
			$("#totalDiv").css({"height" : $("#totalDiv").outerHeight()});
			TweenMax.to($("#li1"), 0.5, {opacity: 1, onComplete: function() {
				TweenMax.to($("#li2"), 0.5, {opacity: 1, onComplete: function() {
					$("#li2").append(' &emsp; <a class="introjs-button user-btn">Next &#8594;</a>');
					$('.user-btn').click(function() {
						$("#typingDiv1").addClass('zindex10');
						$(this).remove();
						$("#syntax").removeClass("opacity00");
						introjs.nextStep();
					});
				}});
			}});
		break;
		case "funName":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Name of the <b class ='ct-code-b-yellow'>function</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "parameters":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The <span class ='ct-code-b-yellow'>parameter-list</span> is a list of variables that are passed to the function.<br><br> A <span class ='ct-code-b-yellow'>" 
							+ "function call </span> must end with a <span class ='ct-code-b-yellow'>semicolon (;)</span>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#example").removeClass("opacity00");
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;
		case "nameFun":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a call to the function <b class ='ct-code-b-yellow'>printName()</b>. "
							+"This function returns <b class ='ct-code-b-yellow'>void</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;
		case "addFun":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a call to the function <b class ='ct-code-b-yellow'>addition()</b>.<br><br> This function "
							+ "has a return type of <b class ='ct-code-b-yellow'>int</b> and the "
							+"<b class ='ct-code-b-yellow'>parameters</b> passed are <b class ='ct-code-b-yellow'>a</b> and"
							+ " <span class ='ct-code-b-yellow'>b</span>."
							+ "<br><br> The returned value will be stored in the variable <b class ='ct-code-b-yellow'>sum</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;
		case "mulFun":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a call to the function <b class ='ct-code-b-yellow'>mul()</b>.<br><br> This function "
							+ "has a return type of <b class ='ct-code-b-yellow'>int</b> and the "
							+"<b class ='ct-code-b-yellow'>parameters</b> passed are <b class ='ct-code-b-yellow'>a</b>,"
							+ " <span class ='ct-code-b-yellow'>b</span> and <span class ='ct-code-b-yellow'>c</span>."
							+ "<br><br> The returned value will be stored in the variable <b class ='ct-code-b-yellow'>total</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;
		case "leftDiv":
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#leftDiv').removeClass("opacity00");
				var text = "Let's consider an example.<br><br> We will learn <b class ='ct-code-b-yellow'>Function Definition</b>"
							+ ", <b class ='ct-code-b-yellow'>Function Declaration</b> and <b class ='ct-code-b-yellow'>Function Call</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;
		case "funDec":
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "This is the <b class ='ct-code-b-yellow'> Function Declaration</b><br>."
							+ " Here, user defined function with name <b class ='ct-code-b-yellow'>printName()</b> is declared.<br><br> This function"
							+ " takes <span class='ct-code-b-yellow'>no parameters</span> and <b class='ct-code-b-yellow'>does not</b> return any value.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
		break;
		case "callingFun":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is a <b class ='ct-code-b-yellow'>Function Call</b>.<br><br> Here, when a call to function is made the control is"
							+ " transferred to the called function,  i.e., <b class ='ct-code-b-yellow'> Function Definition</b> (body)";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;
		case "funDef":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is the <b class ='ct-code-b-yellow'>Function Definition</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;
		case "printf1":
			introjs.refresh();
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
		case "outputDiv":
			if (introjs._currentStep == 11)  {
			introjs.refresh();
			$("#outputDiv").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._direction == "backward") {
					$("#outputDiv").addClass("opacity00");
					$('#outputBody > div:last-child').remove();
					introjs.previousStep();
				} else {
					var text = "<b class='val-color'> Codetantra </b>";
					$("#outputBody").append("<div></div>");
					typing($("#outputBody > div:last-child"), text, function() {
						setTimeout(function() {
							introjs.nextStep();
						}, 500);
					});
				}
				
			});
		 } else if (introjs._currentStep == 14) {
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<b class='val-color'> inside main(), after printName() </b>";
				$("#outputBody").append("<div></div>");
				typing($("#outputBody > div:last-child"), text, function() {
					setTimeout(function(){
						introjs.nextStep();
					}, 1500);
				});
			});
		 }
		break;
		case "endFunc":
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "When the end of the function is reached, the control is transferred back to the "
							+"<b class='ct-code-b-yellow'>calling method</b>.";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;
		case "printf2":
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep()
				}, 1000);
				
			});
		break;
		case "restart":
			$('.introjs-tooltip').css({'min-width' : '120px'});
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#restart').removeClass("opacity00");
			});
		break;
		}
	});
	
	introjs.start();
	$('.introjs-bullets').hide();
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : '1',
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 1, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
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