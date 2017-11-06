var ifElseInCReady = function() {
	introJsGuide();
	$('.evaluateBtn').click(function() {
		$(this).addClass('hidden');
		if (marks > distinction_marks) {
			introjs.goToStep(7);
		} else {
			introjs.goToStep(9);
		}
	});
	
	$('.initializeBtn').click(function() {
		marks = $('#initializationValue').val();
		$(this).addClass('hidden');
		introjs.nextStep();
		$('.introjs-nextbutton').addClass("opacity00");
		$("#initializationValue").removeAttr("contenteditable");
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
		$('.changeVal').text($(this).val());
		if ($('#initializationValue').val().length > 0) {
			$(".initializeBtn").removeClass("opacity00");
			$('.errorText').empty();
		} else {
			$('.errorText').html("Please enter a value for marks.");
			$('#initializationValue').focus();
			$(".initializeBtn").addClass("opacity00");
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

var marks;
var distinction_marks = 75;
var typingSpeed = 5;
	function charAtEnd(elementId) {
		$('#' + elementId).select();
		var element = document.getElementById(elementId);
		var SearchInput = element;
	    SearchInput.focus();
	}
	
	function flipEffect() {
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
							$(".evaluateBtn").removeClass("hidden");
						});
					} else {
						typing('#conditionTyping', 'evaluates to <b class=color-red>false</b>.', function() {
							$(".evaluateBtn").removeClass("hidden");
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
			intro : "Above code demonstrates the working of <b class='ct-code-b-yellow' style = 'white-space: nowrap;'>if-else</b> block.",
			position : 'bottom',
			tooltipClass : 'introjs-tooltip-custom-width'
		}, {
			element : '#ifBlock',
			intro : "This is called the <b class='ct-code-b-yellow' style = 'white-space: nowrap;'>if-block</b>.",
			position : 'bottom',
			tooltipClass : 'introjs-tooltip-custom-width'
		}, {
			element : '#elseBlock',
			intro : "This is called the <b class='ct-code-b-yellow' style = 'white-space: nowrap;'>else-block</b>",
			position : 'bottom',
			highlightClass : "else-css",
			tooltipClass : 'introjs-tooltip-custom-width'
		}, {
			element : '#citizenAge',
			intro : "An <b class='ct-code-b-yellow'>int</b> variable <b class='ct-code-b-yellow'>distinction_marks</b> is declared and initialized to " 
					+ "<b class='ct-code-b-yellow'>75</b>.",
			position : 'bottom',
			tooltipClass : 'introjs-tooltip-custom-width',
		}, {
			element : '#initialization',
			intro : "An <b class='ct-code-b-yellow'>int</b> variable <b class='ct-code-b-yellow'>marks</b> is declared and initialized to " 
					+ "<b class='ct-code-b-yellow changeVal'>60</b>.<br/> You can also change the value " 
					+ "<b class='ct-code-b-yellow'>60</b> to any other number.</span><br><span class='errorText'>",
			position : 'bottom',
			tooltipClass : 'introjs-tooltip-custom-width'
		}, {
			element : "#condition",
			intro : "<span class='opacity00 conditionTxt'>This is the <b class='ct-code-b-yellow'>condition</b> part. <br/>If the condition evaluates to " 
					+ "<b class='ct-code-b-yellow'>true</b>, control enters into the " 
					+ "<b class='ct-code-b-yellow'>if-block</b>, otherwise the control enters into the " 
					+ "<b class='ct-code-b-yellow'>else-block</b>." 
					+ "</span><br><div id='conditionTest'></div><br><span id='conditionTyping'></span>",
			position: "bottom"
		}, {
			element : "#ifStmt",
			intro : "Since the condition evaluates to <b class='ct-code-b-yellow'>true</b>, control enters " 
					+ "into the <b class='ct-code-b-yellow'>if-block</b>.",
			position: "bottom"
		}, {
			element : "#outputDiv",
			tooltipClass : 'hide'
		}, {
			element : "#elseStmt",
			intro : "Since the condition evaluates to <b class='color-red'>false</b>, control enters " 
					+ "into the <b class='ct-code-b-yellow'>else-block</b>.",
			position: "bottom"
		}, {
			element : "#outputDiv",
			tooltipClass : 'hide'
		}, {
			element : '#mainEnd',
			tooltipClass : 'hide'
		}, {
			element : "#restart",
			intro : "Click to restart.",
			tooltipClass: "introjs-tooltip-min-width-custom",
			position: "right",
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
	$(".introjs-tooltipbuttons").append("<a class='introjs-button animateBtn hidden' onclick='flipEffect()'>Next &#8594;</a>");
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "initialization":
			$('.introjs-helperLayer').one('transitionend', function () {
				charAtEnd("initializationValue");
				$('.introjs-nextbutton').addClass("opacity00");
				$('.initializeBtn').removeClass("hidden");
			});
			break;
			
		case "ifBlock":
		case "elseBlock":
			introjs.refresh();
			break;
		
		case "condition":
			$('.introjs-helperLayer').one('transitionend', function () {
				$('.introjs-nextbutton').addClass("opacity00");
				var text = $(".conditionTxt").removeClass("opacity00").html();
				typing(".conditionTxt", text, function() {
					$(".animateBtn").removeClass("hidden");
				});
			});
			break;
			
		case "ifStmt":
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#output').append("<div class='opacity00'>User got distinction.</div>");
			});
			break;
			
		case "elseStmt":
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#output').append("<div class='opacity00'>User did not get distinction.</div>");
			});
			break;
			
		case "outputDiv":
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#output > div').fadeTo(200, 1, function () {
					setTimeout(function() {
						introjs.goToStep(11);
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
			$('.introjs-tooltipbuttons').addClass("hide");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
}

function typing(id, text, callBackFunction) {
	$(id).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(id).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}