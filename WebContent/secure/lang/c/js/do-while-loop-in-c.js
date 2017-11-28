var value = 1;
var condition;
var introjs;
var incrementTextTypingSpeed = 0;
var evaluateBtnCount = 0;
var isCompleted = false;

var doWhileLoopInCReady = function() {
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
	
	$("body").keydown(function(e){
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	
	$("#initializationValue").keyup(function() {
    	introjs.refresh();
    	$('.changeVal').text($(this).text());
        if ($(this).text().length > 0) {
        	$('.errorText').empty();
        	$(".initializeBtn").removeClass("opacity00");
        	value = parseInt($('#initializationValue').text());
        	$(".introjs-prevbutton").show();
        } else {
        	$(".initializeBtn").addClass("opacity00");
        	$('.errorText').html("Please initialize the variable <b class='ct-code-b-yellow'>value</b> with a value.");
        	$(".introjs-prevbutton").hide();
			charAtEnd("initializationValue");
        }
    });
	
	$("#conditionValue").keyup(function() {
    	introjs.refresh();
    	$('.changeVal').text($(this).text());
        if ($(this).text().length > 0) {
        	$('.errorText').empty();
        	$(".evaluateBtn").removeClass("opacity00"); 

        	//$(".introjs-prevbutton").show();
        } else {
        	$(".evaluateBtn").addClass("opacity00");
        	$('.errorText').html("Please enter a value.");
			charAtEnd("conditionValue");
        }
    });

	$('.initializeBtn').click(function() {
		$(".introjs-prevbutton").hide();
		value = parseInt($("#initializationValue").text());
		$(this).addClass('hidden');
		
		$('#initializationValue').removeClass('position-absolute');
		$('#initializationValue').addClass('position-relative');
		
		initializeCup();
	});
	
	$(".incrementBtn").click(function() {
		$(this).addClass("hidden");
		var text = " Post-increment operator increments the value of variable <b class='ct-code-b-yellow'>value</b> " 
					+ "by <b class='ct-code-b-yellow'>1</b>. Now " 
					+ "<span id='innerTravelledNum'><b>value</b></span><span id='travelledNum'><b>value</b></span> = " 
					+ "<span id='updatedValue'></span></b>";
		typing('#incrementText', text);
	});
	
	$('.FinishBtn').click(function() {
		$('.introjs-tooltipbuttons').hide();
		$('.output-console-body').animate({scrollTop: 1500}, 500);
		for (var i = value; i <= condition; i++, value++) {
			$("#output").append("<div>value : " + value + "</div>");
			$("#cupValue").text(i + 1);
		}
		introjs.goToStep(8);
	});
	
	
	var flag = true;
	$('.continueBtn').click(function() {
		//$(".introjs-prevbutton").hide();
		$(this).addClass('hidden');
		if (flag) {
			$('.FinishBtn').addClass('hidden abc');
		} else {
			$('.FinishBtn').addClass('hidden');
		}
		$('.FinishBtn').addClass('hidden');
		
		introjs.goToStep(4);
	});
	
	$(".oneStepBackBtn").click(function() {
		/*if(value > 2) {
			$('.FinishBtn').removeClass('abc');
		}*/
		
		evaluateBtnCount = 0;
		introjs.goToStep(7);
	})
	
	
	$("#initialization").click(function() {
		$("#initializationValue").focus();
	});
	
	$("#condition").click(function() {
		$("#conditionValue").focus();
	});
	
	setInterval(function() {
		if ($('#cupValue').text().length == 2) {
			$('#cupValue').css('left', '8px');				
		} else if ($('#cupValue').text().length == 3) {
			$('#cupValue').css('left', '5px');
		}
	}, 100);
	
	$('#restart').click(function() {
		location.reload();
	});
	
	$('.evaluateBtn').click(function() {
		isCompleted = true;
		$(".introjs-prevbutton").hide();
		if ($("#conditionValue").text().length > 0) {
			$(this).addClass('hidden');
			$('#conditionValue').attr('contenteditable', false);
			condition = parseInt($("#conditionValue").text());
			$('#conditionTest').html("<b><div style='display: inline-block' id='value'>value</div> <= " + condition +"</b>");
			var l1 = $('#condition').offset();
			var l2 = $('#conditionTest').offset();
			var topLength = l1.top - l2.top;
			TweenMax.from('#conditionTest', 1, {top:"+=" + topLength, onComplete: function() {
				$('#conditionTest').css({'top': '', 'left': ''});
					setTimeout(function() {
						$('#value').text(value);
					}, 500);
					$('#value').addClass('flip')
			}});
			if ( value <= condition) {
				$('#value').one('animationend', function() {
					$('#value').removeClass("flip");
					$('.introjs-nextbutton').addClass('opacity00');
					if (evaluateBtnCount > 0) {
						typing('#conditionTyping', 'evaluates to <b class="ct-code-b-yellow">true</b>.', function() {
							$('.introjs-nextbutton').addClass("hidden opacity00");
							$('.continueBtn').removeClass("hidden opacity00");
							$('.FinishBtn').removeClass("hidden opacity00");
							
							//$('.introjs-prevbutton').show();
						});
					} else {
						typing('#conditionTyping', 'evaluates to <b class="ct-code-b-yellow">true</b>.', function() {
							//$('.introjs-nextbutton').addClass("hidden opacity00");
							$('.continueBtn').removeClass("hidden opacity00");
							$('.introjs-prevbutton').show();
						});
					}
					if (introjs._direction == "forward") {
						evaluateBtnCount++;
					}
				});
			} else {
				$('#value').one('animationend', function() {
					$('#value').removeClass("flip");
					
					var text = "evaluates to <b class='color-red'>false</b>.<br>Since the condition evaluates to " 
								+ "<b class='color-red'>false</b>, the control comes out of the " 
								+ "<b class='ct-code-b-yellow'>do-while</b> body and the program terminates.";
					
					typing('#conditionTyping', text , function() {
						//$('.introjs-nextbutton').addClass("hidden opacity00");
						$('.FinishBtn').removeClass("hidden opacity00");
						//$('.introjs-prevbutton').show();
					});
					$('.FinishBtn').text("Done");
				});
			}
		} else {
			$('.introjs-tooltiptext span:first-child').append("<br><span class='errorText'>Please enter any value. </span>");
			charAtEnd("conditionValue");
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

function initializeCup() {
	$('.cup-bg').fadeTo(1500, 1, function() {
		value = parseInt($('#initializationValue').text());
		var l1 = $('#initializationValue').offset();
		var l2 = $('#cupValue').offset();
		var topLength = l2.top-l1.top;
		var leftLength = l2.left-l1.left;
		$('#initialization').append("<span id='inner_initializationValue'></span>");
		$("#inner_initializationValue").text(value);
		$("#inner_initializationValue").offset({ top: l1.top, left: l1.left});
		TweenMax.to($('#initializationValue'), 1, {top:"+=" + topLength, left: "+=" + leftLength, onComplete : function () {
			$('#initializationValue').css({'top': '', 'left': ''});
			$('#cupValue').text(value);
			$("#inner_initializationValue").remove();
			introjs.nextStep();
			$('#initializationValue').removeClass('position-relative');
			$('#initializationValue').addClass('position-absolute');
		}});
	});
}

function travelEffect() {
	//$(".introjs-nextbutton").addClass("opacity00");
	$(".introjs-nextbutton, .introjs-prevbutton").hide();
	var l1 = $('#travelledNum').offset();
	var l2 = $('#cup_num').offset();
	var topLength = l2.top-l1.top;
	var leftLength = l2.left-l1.left;
	
	TweenMax.to('#travelledNum', 1, {top:"+=" + topLength, left: "+=" + leftLength, onComplete: function() {
		
		$('#travelledNum').css({'top': '', 'left': ''});
		
		setTimeout(function() {
			$('#cupValue').text(value);
		}, 500);
		
		$('#cupValue').addClass('flip').one('animationend', function() {
			$('#cupValue').removeClass('flip');
			$('#updatedValue').text($('#cupValue').text());
			var l1 = $('#updatedValue').offset();
			var l2 = $('#cupValue').offset();
			var topLength = l2.top-l1.top;
			var leftLength = l2.left-l1.left;
			$('#updatedValue').offset({'top':l2.top, 'left':l2.left});
			$('#updatedValue').animate({'top': 0, 'left' : 0}, 1000, function() {
				//$(".introjs-nextbutton").removeClass("opacity00");
				$(".introjs-nextbutton, .introjs-prevbutton").show();
			});
		});
		
	}});
}

function typing(id, content, callBackFunction) {
	var typingSpeed = 1;
	if (id.substring(1) === 'incrementText') {
		if (incrementTextTypingSpeed == 0) {
			typingSpeed = 1;
			incrementTextTypingSpeed = 1;
		} else {
			typingSpeed = 1;
		}
	}
	$(".introjs-nextbutton").addClass("opacity00 hidden");
	$(id).typewriting( content , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(id).removeClass('typingCursor');
		$(".introjs-nextbutton").removeClass("opacity00 hidden");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}

function introJsGuide() {
	introjs = introJs();
	introjs.setOptions({
		steps : [ {
			element : '#doWhile',
			intro : "",
			position : 'bottom',
			tooltipClass: "hide"
		},{
			element : '#initialization',
			intro : "",
			position : 'bottom',
			tooltipClass: "hide"
		},{
			element : '#docondition',
			intro : "",
			position : 'bottom',
		},{
			element : '#statement',
			intro : '',
			position : 'bottom',
			tooltipClass: "hide"
		}, {
			element : '#outputDiv',
			tooltipClass : 'hide'
		}, {
			element : '#update',
			intro : "",
			position : 'right',
			tooltipClass:"hide"
		}, {
			element : '#condition',
			intro : "",
			position : 'bottom',
			tooltipClass: "hide"
		}, {
			element: "#mainEnd",
			intro : "",
			position: "right"
		}, {
			element: "#restart",
			intro : "Click to restart.",
			tooltipClass: "introjs-tooltip-min-width-custom",
			position: "right"
		}]
	});
	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.start();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
	
	$(".introjs-tooltipbuttons").append("<a class='introjs-button initializeBtn hidden'>Next &#8594;</a>");
	$(".introjs-tooltipbuttons").append("<a class='introjs-button evaluateBtn hidden'>Next &#8594;</a>");
	$(".introjs-tooltipbuttons").append("<a class='introjs-button incrementBtn hidden'>Next &#8594;</a>");
	$(".introjs-tooltipbuttons").append("<a class='introjs-button FinishBtn hidden'>Finish</a>");
	$(".introjs-tooltipbuttons").append("<a class='introjs-button continueBtn hidden'>Next &#8594;</a>");
	$(".introjs-tooltipbuttons").prepend("<a class='introjs-button oneStepBackBtn hidden'>&#8594; Back</a>");
	
	
	introjs.onbeforechange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "initialization" :
			if (introjs._direction == "backward") {
				$('#initializationValue').removeAttr("style");
				$(".cup-bg").removeAttr("style");
				$("#cupValue").text('');
			}
			break;
		case "update" :
			if (introjs._direction == "backward") {
				value--;
				if ($("#conditionValue").text().length > 0) {
					if ( value <= condition) {
						if (evaluateBtnCount > 0) {
							evaluateBtnCount--;
						}
					}
				}
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
		switch (elementId) {
		
		case "doWhile":
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".initializeBtn").addClass("hidden");
				$(".introjs-tooltip").removeClass("hide");
				var text = "Above code demonstrates the working of <b class='ct-code-b-yellow'>do-while</b>.";
					typing(".introjs-tooltiptext", text, function() {
						
						$('.introjs-nextbutton').show();
					})
			})	
		break;	
		
		case "initialization" :
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".introjs-tooltip").removeClass("hide");
				var text = "The <b class='ct-code-b-yellow'>int</b> variable <b class='ct-code-b-yellow'>value</b> is declared and initialized to " 
					+ "<b class='ct-code-b-yellow changeVal'>"+ value +"</b>. <br/><br/>You can also change the " 
					+ "value <b class='ct-code-b-yellow changeVal'>"+ value +"</b> to any other number." 
					+ "<br><span class='errorText'></span>";
				typing(".introjs-tooltiptext", text, function() {
					$("#initializationValue").attr("contenteditable", true);
					//$('.introjs-nextbutton').addClass("opacity00");
					$('.initializeBtn').removeClass("hidden");
					$('.introjs-prevbutton').show();
					charAtEnd("initializationValue");
				})
			});
			break;
		case "docondition" :
			//$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				//$('.introjs-tooltipbuttons').hide();
				var text = "<b class='ct-code-b-yellow'>do-while</b> is an <b class='ct-code-b-yellow'>exit controlled loop</b> where the statements are executed atleast once.";
				typing(".introjs-tooltiptext", text, function() {
					//$('.introjs-tooltipbuttons').show();
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "condition" :
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".oneStepBackBtn").addClass("hidden");
				charAtEnd("conditionValue");
				$(".introjs-tooltip").removeClass("hide");
				if(introjs._currentStep == 6) {
				var text = "This is the <b class='ct-code-b-yellow'>condition</b> part. <br>If the condition evaluates " 
					+ "to <b class='ct-code-b-yellow'>true</b>, the control enters into the " 
					+ "<b class='ct-code-b-yellow'>do-while</b> body." 
					+ "<br><span class='errorText'>"
					+ "<br></span><span id='conditionTest'></span><br><span id='conditionTyping'></span>";
				
				typing('.introjs-tooltiptext', text, function() {
					$('.evaluateBtn').removeClass("hidden");
					$(".introjs-prevbutton").show();
				})
			} else {
				
				$(".introjs-tooltiptext").append("<span id='conditionTest'></span><br><span id='conditionTyping'></span>");
				
				if (evaluateBtnCount > 0) {
					$(".abc").removeClass("abc");
					$('.evaluateBtn').click();
				}
				
			}	
			});
			break;
		case "statement":
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".introjs-tooltip").removeClass("hide");
				var text = "Above statement prints the value of variable <b class='ct-code-b-yellow'>value</b>.";
				typing('.introjs-tooltiptext', text, function() {
					
					//$('#output').append("<div class='opacity00'>value : " + value + "</div>");
					//$('.introjs-tooltipbuttons').show();
					if ($(".FinishBtn").hasClass("abc")) {
						$(".introjs-nextbutton").show();
						//$(".oneStepBackBtn").removeClass("hidden");
					} else {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					}
				})
			});
			break;
		case "outputDiv" :
			$('.introjs-helperLayer').one('transitionend', function () {
				$('.introjs-prevbutton').hide();
				$(".oneStepBackBtn").addClass("hidden");
				if (introjs._direction == "forward") {
					//$(".incrementText").remove();
					$('#output').append("<div class='opacity00'>value : " + value + "</div>");
					//$('.output-console-body').animate({scrollTop: 1500}, 500);
					$('#output > div:last-child').fadeTo(1500, 1, function () {
						stepNext();
					});
				} else {
					$('#output > div:last-child').remove();
					$("#cupValue").text(--value);
					stepNext();
				}
			});
			break;
		case "update":
			//$('.introjs-nextbutton').show().addClass("opacity00");
			//$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".incrementText").remove();
				$(".evaluateBtn, .continueBtn").addClass("hidden");
				
				$(".introjs-tooltip").removeClass("hide");
				var text = "The post-increment operator increments the value of <b class='ct-code-b-yellow'> variable value</b>" 
					+ " by <b class='ct-code-b-yellow'>1</b>.<br> Now  <b class=''>" 
					+ "<span id='travelledNum' class='''>value</span> = <span id='updatedValue'></span></b>";
				
				$(".introjs-tooltiptext").append("<span class='incrementText'></span>");
				typing('.incrementText', text , function() {
					travelEffect();
				});
				if (isCompleted) {
					introjs._introItems[6].intro = "<span id='conditionTest'></span><br><span id='conditionTyping'></span>";
				}
				
				value++;
				//$('.introjs-tooltipbuttons').show();
				//$('.introjs-nextbutton').removeClass("opacity00");
				
			});
			break;
		case "mainEnd" :
			$(".FinishBtn").remove();
			$(".continueBtn").remove();
			$('.introjs-helperLayer').one('transitionend', function () {
				$('.introjs-tooltipbuttons').hide();
				var text = "Control comes out of the <b class='ct-code-b-yellow'>do-while</b> loop and the program terminates.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-tooltipbuttons').show();
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "restart":
			$('.introjs-tooltipbuttons').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
				$('.cup-bg').css({'opacity': '0'});
			});
			break;
		}
	});
	
	$(".introjs-tooltip").removeClass("hide");
	var text = "Above code demonstrates the working of <b class='ct-code-b-yellow'>do-while</b>.";
		typing(".introjs-tooltiptext", text, function() {
			$("#initializeBtn").removeClass("hidden");
			$('.introjs-nextbutton').show();
		})
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
