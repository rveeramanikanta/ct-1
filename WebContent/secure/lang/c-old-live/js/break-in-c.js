var introjs;
var iVal = 1;
var typingSpeed = 10;
var breakInCReady = function() {
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
        	$(".introjs-nextbutton").removeClass("opacity00");
        	iVal = parseInt($('#initializationValue').text());
        } else {
        	$(".introjs-nextbutton").addClass("opacity00");
        	$('.errorText').text("please enter a value");
        }
    });
	
	$(".allowNumbers").parent().click(function() {
		$(".allowNumbers").focus();
	});
	
	$(".flip-animation-btn").click(function() {
		
		$(this).addClass("hidden");
		
		if($("#condition").hasClass("introjs-showElement")) {
			flipForCondition(); 
		} else if($("#ifCondition").hasClass("introjs-showElement")) {
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
	$(".introjs-tooltiptext").append("<span class='flip-area'></span><br/><span class='typing-area'></span>");
	
	$('.flip-area').html("<div id='numArrOfiBy5' class='display-inline-block'>i % 5</div> == " 
						+ "<div id='zero' class='display-inline-block'>0</div>");
		TweenMaxEffect(".flip-area", "#ifCondition", 0.5, function() {
			TweenMax.to( $('#numArrOfiBy5'), 0.8, {rotationX:90, onComplete:function() {
				  $('#numArrOfiBy5').text(iVal % 5);
				  TweenMax.to( $('#numArrOfiBy5'), 0.8, {rotationX : 0, onComplete: function() {
				      $('#numArrOfiBy5').css('transform', '');
				      if (iVal % 5 == 0) {
				    	  var newStep = {
									element : "#breakStmt",
									intro : "",
									position : "right"
								};
							introjs.insertOption(introjs._currentStep + 1, newStep);
							
							var newStep = {
									element : "#mainEnd",
									intro : "",
									position : "right"
								};
							introjs.insertOption(introjs._currentStep + 2, newStep);
							var newStep = {
								element : "#restart",
								intro : "<span>Click to restart.</span>",
								tooltipClass: "introjs-tooltip-min-width-custom",
								position : "right"
							};
							introjs.insertOption(introjs._currentStep + 3, newStep);
							typing(".typing-area", "evaluates to <b class='ct-code-b-yellow'>true</b>.");
						} else {
							typing(".typing-area", "evaluates to <b class='color-red'>false</b>.");
						}
				  }});
				}});
		});
}



function flipForCondition() {
	$(".introjs-tooltiptext").append("<span class='flip-area'></span><br/><span class='typing-area'></span>");
	
	$('.flip-area').html("<div id='i' class='display-inline-block'>i</div> < " 
						+ "<div id='numLength' class='display-inline-block'>10</div>");
	TweenMaxEffect(".flip-area", "#condition", 0.5, function() {
		TweenMax.to( $('#i'), 0.8, {rotationX:90, onComplete:function() {
			$('#i').text(iVal);
			TweenMax.to( $('#i'), 0.8 , {rotationX : 0, onComplete: function() {
				$('#i').css('transform', '');
				$('#numLength').css('transform', '');
				if (iVal < 10) {
					var newStep1 = {
							element : "#ifBlk",
							tooltipClass : "hide"
					}
					introjs.insertOption(introjs._currentStep + 1, newStep1);
					var newStep2 = {
							element : "#sop",
							intro : "Since the condition evaluates to <b class='color-red'>false</b>, the control does not enter into the " +
									"<b class='ct-code-b-yellow'>if-block</b>.<br>This statement prints the value of <b class='ct-code-b-yellow'>i</b>.",
							position : "bottom"
					}
					introjs.insertOption(introjs._currentStep + 2, newStep2);
					var newStep3 = {
							element : "#outputDiv",
							tooltipClass : "hide"
					}
					introjs.insertOption(introjs._currentStep + 3, newStep3);
					typing('.typing-area', "evaluates to <b class='ct-code-b-yellow'>true</b>.");
				} else {
					var newStep = {
							element : "#mainEnd",
							intro : "",
							position : "right"
						};
					introjs.insertOption(introjs._currentStep + 1, newStep);
					var newStep5 = {
							element : "#restart",
							intro : "Click to restart.",
							tooltipClass: "introjs-tooltip-min-width-custom",
							position : "right"
					}
					introjs.insertOption(introjs._currentStep + 2, newStep5);
					typing('.typing-area', "evaluates to <b class='color-red'>false</b>.");
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
		}
	});
}
		
function introJsGuide() {
	introjs = introJs();
	introjs.setOptions({
		steps : [ {
			element : "#brkLoop",
			intro : "Above example demonstrates the working of <b class='ct-code-b-yellow'>break</b> " 
					+ "statement.",
			position : "bottom"
		}, {
			element : "#initialization",
			intro : "The local variable <b class='ct-code-b-yellow'>i</b> is declared and initialized to " 
					+ "<b class='changeVal ct-code-b-yellow'>1</b>.<br>We can also change value " 
					+ "<b class='changeVal ct-code-b-yellow'>1</b> to any number.<br/><span class='errorText'>",
			position : "bottom"
		}, {
			element : "#condition",
			intro : "",
			position : "bottom"
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
	
	$(".introjs-tooltipbuttons").append("<a class='introjs-button flip-animation-btn hidden'>Next &#8594;</a>");
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "initialization":
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#initializationValue').attr('contenteditable', true);
				charAtEnd("initializationValue");
			});
			break;
		case "condition":
			$('.introjs-nextbutton').addClass('opacity00');
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#initializationValue').attr('contenteditable', false);
				
				if (introjs._currentStep == 2) {
					var text = "This is the <b class='ct-code-b-yellow'>condition</b> part. <br>If the condition evaluates " 
						+ "to <b class='ct-code-b-yellow'>true</b>, the control enters into the " 
						+ "<b class='ct-code-b-yellow'>for-loop</b> body." 
						+ "<br/><span class='errorText'></span>";
			
					typing(".introjs-tooltiptext", text, function() {
						$(".flip-animation-btn").removeClass("hidden");
						$(".introjs-nextbutton").addClass("opacity00");
					});
				} else {
					flipForCondition();
				}
			});
			break;
		case "ifBlk":
			$('.introjs-nextbutton').addClass('opacity00');
			var newStep5 = {
					element : "#ifCondition",
					intro : "",
					position : "bottom"
			}
			introjs.insertOption(introjs._currentStep + 1, newStep5);
			$('.introjs-helperLayer').one('transitionend', function () {
				setTimeout(function() {
					introjs.nextStep();
				}, 1000);
			});
			break;
		case "ifCondition":
			$('.introjs-nextbutton').addClass('opacity00');
			$('.introjs-helperLayer').one('transitionend', function () {
				
				if (introjs._currentStep == 4) {
					var text = "This is the <b class='ct-code-b-yellow'>condition</b> part. If the condition evaluates " 
								+ "to <b class='ct-code-b-yellow'>true</b>, the control enters into " 
								+ "the <b class='ct-code-b-yellow'>if</b> body.</span><br/>";
					typing(".introjs-tooltiptext", text, function() {
						$(".flip-animation-btn").removeClass("hidden");
						$(".introjs-nextbutton").addClass("opacity00");
					});
				} else {
					flipIfCondition();
				}
				
			});
			break;
		case "breakStmt":
			$('.introjs-nextbutton').addClass('opacity00');
			$('.introjs-helperLayer').one('transitionend', function () {
				
				var text = "Since the condition evaluates to <b class='ct-code-b-yellow'>true</b>, the control enters into the " +
							"<b class='ct-code-b-yellow'>if-block</b>.<br>The <b class='ct-code-b-yellow'>break;</b> statement terminates the " 
							+ "<b class='ct-code-b-yellow'>for-loop</b> abruptly and the control comes " 
							+ "out of the <b class='ct-code-b-yellow'>for-loop</b>.";
				typing(".introjs-tooltiptext", text);
			});
			break;
		case "sop": 
			$('.introjs-nextbutton').addClass('opacity00');
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#output').append("<div class='opacity00'> i : " + iVal + "</div>");
				$('.introjs-nextbutton').removeClass('opacity00');
			});
			break;
		case "outputDiv":
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#output > div:last-child").fadeTo(200, 1 , function() {
					var newStep = {
							element : "#update",
							intro : "Now the control is transferred to the <b class='ct-code-b-yellow'>update</b> section. " 
									+ "<br/>Here <b class='ct-code-b-yellow'>i</b> value is incremented by " 
									+ "<b class='ct-code-b-yellow'>1</b>. <br/>" 
									+ "Now <b class='ct-code-b-yellow'>i</b> value is <b class='ct-code-b-yellow'> " 
									+ (iVal + 1) + "</b>.",
							position : "bottom"
						};
					introjs.insertOption(introjs._currentStep + 1, newStep);
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
				});
			});
			break;
		case "update":
			$('.introjs-nextbutton').removeClass('introjs-disabled');
			$('.introjs-helperLayer').one('transitionend', function () {
				iVal++;
				var newStep = {
					element : "#condition",
					intro : "",
					position : "bottom"
				};
				introjs.insertOption(introjs._currentStep + 1, newStep);
			});
			break;
		case "mainEnd" :
			$('.introjs-nextbutton').addClass("opacity00");
			$('.introjs-helperLayer').one('transitionend', function () {
				var text = "The control comes out of the <b class='ct-code-b-yellow'>for-loop</b> and the program terminates.";
				
				typing(".introjs-tooltiptext", text);
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
}