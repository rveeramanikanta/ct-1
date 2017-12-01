var introjs, marks;
var iVal = 1;
var typingSpeed = 1;
var ifConditionBln = false;
var forConditionBln = false;
var continueInCReady = function() {
	introJsGuide();
	$(".allowNumbers").keydown(function(e) { // conditions to enter text
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		
		if ($(this).text().length >= max) {
			e.preventDefault();
		}
	});
	
	$("#initializationValue").keyup(function() {
    	introjs.refresh();
    	$('.changeVal').text($(this).text());
        if ($(this).text().length > 0) {
        	$('.errorText').empty();
        	$(".introjs-nextbutton, .introjs-prevbutton").removeClass("opacity00");
        	iVal = parseInt($('#initializationValue').text());
        } else {
        	$(".introjs-nextbutton, .introjs-prevbutton").addClass("opacity00");
        	
        	$('.errorText').text("please enter a value");
        }
    });
	
	$('#restart').click(function() {
		location.reload();
	});
	
	$(".allowNumbers").parent().click(function() {
		$(".allowNumbers").focus();
	});
	
	$(".flip-animation-btn").click(function() {
		$(this).addClass("hidden");
		if($("#condition").hasClass("introjs-showElement")) {
			flipForCondition(); 
		} else if($("#ifCondition").hasClass("introjs-showElement")) {
			ifConditionBln = true;
			flipIfCondition();
		}
	});
}

function charAtEnd(elementId) {
	$('#' + elementId).select();
	var element = document.getElementById(elementId);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}

function TweenMaxEffect(elmt1, elmt2, duration, callback) {
	var l1 = $(elmt1).offset();
	var l2 = $(elmt2).offset();
	var topLength = l2.top-l1.top;
	var leftLength = l2.left-l1.left;
	TweenMax.from($(elmt1), 0.5, {top:"+=" + topLength, left: "+=" + leftLength, onComplete : function () {
		$(elmt1).css({'top': '', 'left': ''});
		callback();
	}});
}

function flipIfCondition() {
	$(".introjs-nextbutton, .introjs-prevbutton").hide();
	$(".flip-area, .typing-area, br").remove();
	$(".introjs-tooltiptext").append("<br><span class='flip-area'></span><br/><span class='typing-area'></span>");
	$('.flip-area').html("<div id='numArrOfiBy2' class='display-inline-block'>i % 2</div> == " 
						+ "<div id='zero' class='display-inline-block'>0</div>");
	TweenMaxEffect(".flip-area", "#ifCondition", 0.5, function() {
		TweenMax.to( $('#numArrOfiBy2'), 0.8, {rotationX: 90, onComplete:function() {
			$('#numArrOfiBy2').text(iVal % 2);
			TweenMax.to( $('#numArrOfiBy2'), 0.8, {rotationX : 0, onComplete: function() {
				$('#numArrOfiBy2').css('transform', '');
				if (iVal % 2 == 0) {
					if (introjs._direction == "forward") {
						introjs.insertOption(introjs._currentStep + 1, getStep("#continueStmt", "", "right", "hide"));
					}
					typing(".typing-area", "evaluates to <b class='ct-code-b-yellow'>true</b>.", function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
					//ifConditionBln = true;
				} else {
					typing(".typing-area", "evaluates to <b class='color-red'>false</b>.", function() {
					if (introjs._direction == "forward") { //New if
						introjs.insertOption(introjs._currentStep + 1, getStep("#sop", "", "bottom", "hide"));
					}
					ifConditionBln = true;
					$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
					/*introjs.insertOption(introjs._currentStep + 2, getStep("#outputDiv", "", "", "hide"));*/
				}
			}});
		}});
	});
}

function flipForCondition() {
	$(".introjs-nextbutton, .introjs-prevbutton").hide();
	$(".flip-area, .typing-area, br").remove();
	$(".introjs-tooltiptext").append("<br><span class='flip-area'></span><br/><span class='typing-area'></span>");
	$('.flip-area').html("<div id='i' class='display-inline-block'>i</div> < " 
						+ "<div id='numLength' class='display-inline-block'>10</div>");
	TweenMaxEffect(".flip-area", "#condition", 0.5, function() {
		TweenMax.to( $('#i'), 0.8, {rotationX: 90, onComplete:function() {
			$('#i').text(iVal);
			TweenMax.to( $('#i'), 0.8 , {rotationX : 0, onComplete: function() {
				
				$('#i').css('transform', '');
				$('#numLength').css('transform', '');
				
				if (iVal < 10) {
					
					if (introjs._direction == "forward") { //New if
						introjs.insertOption(introjs._currentStep + 1, getStep("#ifBlk", "", "", "hide"));
					}
					
					typing('.typing-area', "evaluates to <b class='ct-code-b-yellow'>true</b>.", function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else {
					
					if (introjs._direction == "forward") { //New if
						introjs.insertOption(introjs._currentStep + 1, getStep("#mainEnd", "", "right", "hide"));
						//introjs.insertOption(introjs._currentStep + 2, getStep("#restart", "Click to restart", "right", "introjs-tooltip-min-width-custom"));
					}
					
					typing('.typing-area', "evaluates to <b class='color-red'>false</b>.", function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				}
			}});
		}});
	});
}

function typing(id, content, callBackFunction) {
	$('.introjs-nextbutton').addClass('opacity00');
	$(id).typewriting( content , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function () {
		$(id).removeClass('typingCursor');
		$(".introjs-nextbutton").removeClass("opacity00 introjs-disabled");	
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
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


function introJsGuide() {
	introjs = introJs();
	introjs.setOptions({
		steps : [ {
			element : "#continueLoop",
			intro : "",
			position : "bottom",
			/*tooltipClass: "hide"*/
		}, {
			element : "#initialization",
			intro : "",
			position : "bottom",
			tooltipClass: "hide"
		}, {
			element : "#condition",
			intro : "",
			position : "bottom",
			tooltipClass: "hide"
		}]
	});
	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.start();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
	
	$(".introjs-tooltipbuttons").append("<a class='introjs-button flip-animation-btn hidden'>Next &#8594;</a>");
	
	
	introjs.onbeforechange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		
		var elementId = targetElement.id;
		switch (elementId) {
		case "initialization":
			if (introjs._introItems.length > 3) {
				introjs._introItems.splice(introjs._introItems.length - 1);
			}
			break;
		case "ifBlk":
			if (introjs._direction == "backward") {
				if (!ifConditionBln) {
					introjs._introItems.splice(introjs._introItems.length - 1);
					console.log("only one step..");
				} else {
					ifConditionBln = false;
					introjs._introItems.splice(introjs._introItems.length - 2);
				}
			}
			break;
		case "ifCondition":
				if (introjs._direction == "backward") {
					introjs._introItems.splice(introjs._introItems.length - 1);
				}
			break;
		case "continueStmt":
			if (introjs._direction == "backward") {
				introjs._introItems.splice(introjs._introItems.length - 1);
			}
			break;
		case "outputDiv":
			if (introjs._direction == "backward") {
				$("#output > div").last().remove();
				introjs._introItems.splice(introjs._introItems.length - 2);
			}
			
			break;
		case "update":
			if (introjs._direction == "backward") {
				introjs._introItems.splice(introjs._introItems.length - 1);
			}
			break;
		}
	});
	
	
	introjs.onafterchange(function(targetElement) {
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
		$(".flip-animation-btn").addClass("hidden");
		switch (elementId) {
		
		case "continueLoop":
			$(".introjs-tooltip").removeClass("hide");
			var text = "Above example demonstrates the working of <b class='ct-code-b-yellow'>continue</b> statements.";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-nextbutton").show();
			})
		break;	
		
		case "initialization":
			
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".introjs-tooltip").removeClass("hide");
				marks = $("#initializationValue").text();
				var text = "The local variable <b class='ct-code-b-yellow'>i</b> is declared and initialized to value " 
							+ "<b class='changeVal ct-code-b-yellow'>" + marks + "</b>.<br> We can also change the value " 
							+ "<b class='changeVal ct-code-b-yellow'>" + marks + "</b> to any number.<br/><span class='errorText'>";
				
				typing(".introjs-tooltiptext", text, function() {
					$('#initializationValue').attr('contenteditable', true);
					charAtEnd("initializationValue");
	        		$(".introjs-nextbutton, .introjs-prevbutton").show();
	        	});
				
			});
			
		break;
		
		case "condition":
		
			
			$('.introjs-helperLayer').one('transitionend', function () {
				
				$('#initializationValue').attr('contenteditable', false);
				
				$(".introjs-tooltip").removeClass("hide");
				
				if (introjs._currentStep == 2) {
					var text = "This is the <b class='ct-code-b-yellow'>condition</b> part.<br> If the condition evaluates " 
						+ " to <b class='ct-code-b-yellow'>true</b>, control enters into " 
						+ "<b class='ct-code-b-yellow'>for-loop</b> body." 
						+ "<br/><span class='errorText'></span>";
			
					typing(".introjs-tooltiptext", text, function() {
						
						$(".flip-animation-btn").removeClass("hidden");
						//$(".introjs-prevbutton").show();
						
					});
				} else {
					flipForCondition();
				}
			});
			break;
		case "ifBlk":
			
			$('.introjs-helperLayer').one('transitionend', function () {
				
				if (introjs._direction == "forward") {
					introjs.insertOption(introjs._currentStep + 1, getStep("#ifCondition", "", "bottom", "hide"));
					stepNext();
				} else {
					stepNext();
				}
			});
			break;
		case "ifCondition":
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".introjs-tooltip").removeClass("hide");
				if (introjs._currentStep == 4) {
					
					var text = "This is the <b class='ct-code-b-yellow'>condition</b> part.<br>If the condition evaluates " 
								+ " to <b class='ct-code-b-yellow'>true</b>, control enters into " 
								+ "<b class='ct-code-b-yellow'>if</b> body.</span>";
					
					typing(".introjs-tooltiptext", text, function() {
						
						$(".flip-animation-btn").removeClass("hidden");
						//$('.introjs-prevbutton').show();
					});
					
				} else {
					flipIfCondition();
				}
			});
			break;
		case "continueStmt":
			$('.introjs-nextbutton').addClass('opacity00');
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".introjs-tooltip").removeClass("hide");
				
					if (introjs._direction == "forward") {
						introjs.insertOption(introjs._currentStep + 1, getStep("#update", "", "bottom", "hide"));
					} else {
						iVal--;
					}
					
					var text = "Since the condition evaluates to <b class='ct-code-b-yellow'>true</b>, the control enters into the " 
								+ "<b class='ct-code-b-yellow'>if-block</b>.<br>"
								+ "The <b class='ct-code-b-yellow'>continue;</b> statement transfers control to the " 
								+ "<b class='ct-code-b-yellow'>update</b> section of <span style='white-space:nowrap;' class='ct-code-b-yellow'>for-loop</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
			});
			break;
			
		case "sop": 
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".introjs-tooltip").removeClass("hide");
				var text = "Since the condition evaluates to <b class='color-red'>false</b>, the control does not enter into the " +
							"<b class='ct-code-b-yellow'>if-block</b>.<br>This statement prints the value of <b class='ct-code-b-yellow'>i</b>.";
				typing(".introjs-tooltiptext", text, function() {
					if (introjs._direction == "forward") {
						introjs.insertOption(introjs._currentStep + 1, getStep("#outputDiv", "", "", "hide"));
					//	$('#output').append("<div class='opacity00'> i : " + iVal + "</div>");
					}
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
				
			});
			break;
		case "outputDiv":
			$('.introjs-helperLayer').one('transitionend', function () {
					
				if (introjs._direction == "forward") {
					$('#output').append("<div class='opacity00'> i : " + iVal + "</div>");
						$("#output > div:last-child").fadeTo(200, 1 , function() {
							introjs.insertOption(introjs._currentStep + 1, getStep("#update", "", "bottom", "hide"));
							stepNext();
					})
				} else {
					iVal--;
					stepNext();
				}
			});
			break;
		case "update":
			
			$('.introjs-nextbutton').removeClass('introjs-disabled');
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".introjs-tooltip").removeClass("hide");
				if (introjs._direction == "forward") {
					iVal++;
				} else {
					//iVal--;
				}
				
				var text = "Now the control is transferred to the <b class='ct-code-b-yellow'>update</b> section. " 
							+ "<br/>Here <b class='ct-code-b-yellow'>i</b> value is incremented by " 
							+ "<b class='ct-code-b-yellow'>1</b>. <br/>" 
							+ "Now <b class='ct-code-b-yellow'>i</b> value is <b class='ct-code-b-yellow'> " 
							+ (iVal) + "</b>";//(iVal + 1)
				typing(".introjs-tooltiptext", text, function() {
					if (introjs._direction == "forward") {
						introjs.insertOption(introjs._currentStep + 1, getStep("#condition", "", "bottom", "hide"));
					}
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
				
			});
			break;
			
		case "mainEnd" :
			$('.introjs-nextbutton').addClass("opacity00");
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".introjs-tooltip").removeClass("hide");
				
				if (introjs._direction == "forward") {
					introjs.insertOption(introjs._currentStep + 1, getStep("#restart", "Click to restart", "right", "introjs-tooltip-min-width-custom"));
				}
				
				
				var text = "Control comes out of the <b class='ct-code-b-yellow'>for-loop</b> and the program terminates.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "restart":
			$('.introjs-tooltipbuttons').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	
	var text = "Above example demonstrates the working of <b class='ct-code-b-yellow'>continue</b> statements.";
	typing(".introjs-tooltiptext", text, function() {
		$(".introjs-nextbutton").show();
	})
	
}


function getStep(element, intro, position, tooltipClass) {
	var step = {};
	if (typeof element != 'undefined') {
		step['element'] = element;
	}
	if (typeof intro != 'undefined') {
		step['intro'] = intro;
	}
	if (typeof position != 'undefined') {
		step['position'] = position;
	}
	if (typeof tooltipClass != 'undefined') {
		step['tooltipClass'] = tooltipClass;
	}
	return step;
}