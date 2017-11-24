var ifElseInCReady = function() {
	introJsGuide();
	var text = "Above code demonstrates the working of <b class='ct-code-b-yellow' style = 'white-space: nowrap;'>if-else</b> block.";
	typing(".introjs-tooltiptext", text, function() {
	});
	
	$('#restart').click(function() {
		location.reload();
	});
	
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
	
	document.getElementById("initializationValue").addEventListener("input", function() {
		introjs.refresh();
		marks = $('#initializationValue').val();
		$('.changeVal').text($(this).val());
		
		if ($('#initializationValue').val().length > 0) {
			$(".introjs-nextbutton, .introjs-prevbutton").show();
			$('.errorText').empty();
		} else {
			$('.errorText').html("Please enter a value for marks.");
			$('#initializationValue').focus();
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
		}
		
	});
	
	$("body").keydown(function(e){
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	
	$("#initialization").click(function() {
		$("#initializationValue").focus();
	});
}

var marks = 60;
var distinction_marks = 75;
var typingSpeed = 1;
	function charAtEnd(elementId) {
		$('#' + elementId).select();
		var element = document.getElementById(elementId);
		var SearchInput = element;
	    SearchInput.focus();
	}
	
	function flipEffect() {
		$(".introjs-nextbutton, .introjs-prevbutton").hide();
		$(".animateBtn").remove();
		$('#conditionTest').html("<b><span id='marks' style='display: inline-block;'>marks</span> &gt; <span id='disMarks' style='display: inline-block;'>distinction_marks</span></b>");
		var l1 = $('#condition').offset();
		var l2 = $('#conditionTest').offset();
		var topLength = l1.top - l2.top;
		TweenMax.from('#conditionTest', 2, {top:"+=" + topLength, onComplete: function() {
			$('#conditionTest').css({'top': '', 'left': ''});
			flipEffectWithTweenMax($('#marks'), marks, function() {
				flipEffectWithTweenMax($('#disMarks'), distinction_marks, function(){
					if (marks > distinction_marks) {
						typing('#conditionTyping', 'evaluates to <b class=ct-code-b-yellow>true</b>.', function() {
								introjs.insertOption(introjs._currentStep + 1,insertionIntro("ifStmt", "", "top", "hide"));
								introjs.insertOption(introjs._currentStep + 2,insertionIntro("outputDiv", "", "top", "hide"));
								introjs.insertOption(introjs._currentStep + 3,insertionIntro("mainEnd", "", "top", "hide"));
								introjs.insertOption(introjs._currentStep + 4,insertionIntro("restart", "Click to restart", "right", ""));
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					} else {
						typing('#conditionTyping', 'evaluates to <b class=color-red>false</b>.', function() {
								introjs.insertOption(introjs._currentStep + 1,insertionIntro("elseStmt", "", "top", "hide"));
								introjs.insertOption(introjs._currentStep + 2,insertionIntro("outputDiv", "", "top", "hide"));
								introjs.insertOption(introjs._currentStep + 3,insertionIntro("mainEnd", "", "top", "hide"));
								introjs.insertOption(introjs._currentStep + 4,insertionIntro("restart", "Click to  restart.", "right", ""));
							$(".introjs-nextbutton,.introjs-prevbutton").show();
						});
					}
				});
			});
			
		}});
	}

function flipEffectWithTweenMax(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}
	
function introJsGuide() {
	introjs = introJs();
	introjs.setOptions({
		steps : [ {
			element : '#ifElseBlock',
			intro : "",
			position : 'bottom',
			tooltipClass : ''
		}, {
			element : '#ifBlock',
			intro : "",
			position : 'bottom',
			tooltipClass : ''
		}, {
			element : '#elseBlock',
			intro : "",
			position : 'bottom',
			highlightClass : "else-css",
			tooltipClass : ''
		}, {
			element : '#citizenAge',
			intro : "",
			position : 'bottom',
			tooltipClass : '',
		}, {
			element : '#initialization',
			intro : "",
			position : 'bottom',
			tooltipClass : 'hide'
		}, {
			element : "#condition",
			intro : "",
			position: "bottom",
			tooltipClass: "hide"
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
	
	
	introjs.onbeforechange(function(targetElement) {
		$(".introjs-nextbutton, .introjs-prevbutton").hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "initialization":
			$(".animateBtn").remove();
			break;
		case "condition":
			$("#conditionTest, #conditionTyping").empty();
			$("#output").empty();
			if (introjs._introItems.length == 10) {
				introjs._introItems.splice(6);
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
		
		case "ifElseBlock":
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".introjs-nextbutton").show();
			})
		break;	
			
		case "citizenAge":
			$('.introjs-helperLayer').one('transitionend', function () {
				var text = "An <b class='ct-code-b-yellow'>int</b> variable <b class='ct-code-b-yellow'>distinction_marks</b> is declared and initialized to " 
				+ "<b class='ct-code-b-yellow'>75</b>."
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			
		break;	
		
		case "initialization":
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".introjs-tooltip").removeClass("hide");
				var text = "An <b class='ct-code-b-yellow'>int</b> variable <b class='ct-code-b-yellow'>marks</b> is declared and initialized to " 
				+ "<b class='ct-code-b-yellow changeVal'>60</b>.<br/> You can also change the value " 
				+ "<b class='ct-code-b-yellow'>60</b> to any other number.</span><br><span class='errorText'>";
				charAtEnd("initializationValue");
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
				
			});
			break;
			
		case "ifBlock":
		case "elseBlock":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (elementId == "ifBlock") {
					var text = "This is called the <b class='ct-code-b-yellow' style = 'white-space: nowrap;'>if-block</b>."
				} else {
					var text = "This is called the <b class='ct-code-b-yellow' style = 'white-space: nowrap;'>else-block</b>";
				}
				
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				})
				
			})	
			introjs.refresh();
			break;
		
		case "condition":
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".introjs-tooltip").removeClass("hide");
				var text = "<span class='oacity00 conditionTxt'>This is the <b class='ct-code-b-yellow'>condition</b> part. <br/>If the condition evaluates to " 
				+ "<b class='ct-code-b-yellow'>true</b>, control enters into the " 
				+ "<b class='ct-code-b-yellow'>if-block</b>, otherwise the control enters into the "
				+ "<b class='ct-code-b-yellow'>else-block</b>." 
				+ "</span><br><div id='conditionTest'></div><br><span id='conditionTyping'></span>";
				
				typing(".introjs-tooltiptext", text, function() {
					if (introjs._direction == "forward") {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button animateBtn' onclick='flipEffect()'>Next &#8594;</a>");
						$(".introjs-prevbutton").show();
					} else {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button animateBtn' onclick='flipEffect()'>Next &#8594;</a>");
						$(".introjs-prevbutton").show();
					}
					
				})
			});
			break;
			
		case "ifStmt":
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".introjs-tooltip").removeClass("hide");
				var text = "Since the condition evaluates to <b class='ct-code-b-yellow'>true</b>, control enters " 
					+ "into the <b class='ct-code-b-yellow'>if-block</b>.";
				$('#output').append("<div class='opacity00'>User got distinction.</div>");
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
				
			});
			break;
			
		case "elseStmt":
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".introjs-tooltip").removeClass("hide");
				var text = "Since the condition evaluates to <b class='color-red'>false</b>, control enters " 
					+ "into the <b class='ct-code-b-yellow'>else-block</b>.";
				$('#output').append("<div class='opacity00'>User did not get distinction.</div>");
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "outputDiv":
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#output > div').fadeTo(200, 1, function () {
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
				});
			});
			break;
			
		case "mainEnd":
			
			$(".introjs-nextbutton").addClass("opacity00");
			$('.introjs-helperLayer').one('transitionend', function () {
				setTimeout(function() {
					introjs.nextStep();
				}, 1000);
			});
			break;
		
		case "restart":
			$('.introjs-tooltip').css({'min-width' : '125px'});
			$('.introjs-tooltipbuttons').addClass("hide");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
}

function insertionIntro(element, msg, position, tooltip, action) {
	
	var insert = {}; 
	if (typeof element != undefined) {
		insert["element"] = "#"+ element;
	} 
	if (typeof msg != undefined) {
		insert["intro"] = msg;
	}
	if (typeof position != undefined) {
		insert["position"] = position;
	}
	if (typeof tooltip != undefined) {
		insert["tooltipClass"] = tooltip;
	}
	if (typeof action != undefined) {
		insert["action"] = action;
	}
	return insert;
}



function typing(id, text, callBackFunction) {
	$(id).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(id).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}