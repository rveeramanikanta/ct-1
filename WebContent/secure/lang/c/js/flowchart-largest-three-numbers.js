var introjs;
var typingSpeed = 1;
var tl;
var stepCount = 1;
var step = 1;
var num;
var num1;
var num2;
var x;
var y;
var count = 1;

var largestThreeNumbers = function() {
	introGuide();
	tl = new TimelineLite();
	$("text").hide();
	fadeEffect("#desText1", function() {
		fadeEffect("#desText2", function() {
			
		});
	});
	
	$("#restart").click(function() {
		location.reload();
	});
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : "#description",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#flowChartBox",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#restart",
			intro : "",
			position : "right"
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		
		switch (elementId) {
			case "flowChartBox":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					algorithmText();
				});
			
			break;
			
			case "restart":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#restart").removeClass("opacity00");
					var text = "Click to restart.";
					typing(".introjs-tooltiptext", text, function() {
						$("#restart").click(function() {
							location.reload();
						});
					});
				});
				
			break;
		}
	});
	
	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.start();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function fadeEffect(element, callBackFunction) {
	tl.to(element, 0.5, {opacity:1, onComplete: function() {
		$(element).removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function nextStep() {
	$(".user-next").remove();
	introjs.nextStep();
}


function algorithmText() {
	fadeEffect("#stepArrow" + stepCount, function() {
		$("#algorithm" + stepCount).removeClass("opacity00");
		if(stepCount == 1) {
			var text = "Let us start the program by analysing the given requirement.";
		} else if(stepCount == 2) {
			num = 1;
			y = 13.6;
			var text = "Read the inputs from the user as A, B, C.";
		} else if(stepCount == 3) {
			num = 2;
			y = 25;
			var text = "First check whether the given input value A is greater than B.";
		} else if(stepCount == 4) {
			num1 = 3;
			num2 = 4;
			x= 39;
			y = 41.5;
			var text = "If A > B is true, then check the condition A > C.";
		} else if(stepCount == 5) {
			num1 = 5;
			num2 = 6;
			x= 77;
			y = 41.5;
			var text = "If A > B is false, then check the condition B > C";
		} else if(stepCount == 6) {
			num1 = 7;
			num2 = 8;
			x= 28;
			y = 71.2;
			var text = "Here if A > C is true, then the largest number is A.";
		} else if(stepCount == 7) {
			num1 = 9;
			num2 = 10;
			x= 90;
			y = 71.2;
			var text = "Here if B > C is true, then the largest number is B.";
		} else if(stepCount == 8) {
			num1 = 11;
			num2 = 12;
			x= 57;
			y = 71.2;
			var text = "Otherwise if A > C is false, then largest number is C.";
		} else if(stepCount == 9) {
			num1 = 13;
			num2 = 14;
			x= 57;
			y = 71.2;
			var text = "Here also if B > C is false, then largest number is C.";
		} else {
			num = 15;
			y = 93;
			var text = "After getting the required output let us end the process.";
		}
		
		typing("#algorithm" + stepCount, text, function() {
			if(stepCount >= 4 && stepCount < 10) {
				$("#algorithm" + stepCount).append("<a class='introjs-button user-btn' onclick='arrowReveal2()'>Next &#8594;</a>");
			} else if(stepCount == 1) {
				$("#algorithm" + stepCount).append("<a class='introjs-button user-btn' onclick='flowBox()'>Next &#8594;</a>");
			} else {
				$("#algorithm" + stepCount).append("<a class='introjs-button user-btn' onclick='arrowReveal1()'>Next &#8594;</a>");
			}
		});
	});
}

function arrowReveal1() {
	$(".user-btn").remove();
	$("#arrow" + num).css("marker-end", "url(#myMarker)");
	TweenMax.to("#arrow" + num, 1, {attr:{ y2 : y + "%"}, onComplete: function() {
		flowBox();
	}});
}

function arrowReveal2() {
	$(".user-btn").remove();
	$("#arrow" + num1).css("marker-end", "url(#myMarker)");
	TweenMax.to("#arrow" + num1, 1, {attr:{ x2 : x + "%"}, onComplete: function() {
		$("#text" + count).show();
		$("#arrow" + num1).css("marker-end", "");
		$("#arrow" + num2).css("marker-end", "url(#myMarker)"); 
		TweenMax.to("#arrow" + num2, 1, {attr:{ y2 : y + "%"}, onComplete: function() {
			if(stepCount < 9) {
				flowBox();
			} else {
				if(stepCount == 10) {
					flowBox();
				} else {
					stepCount++;
					algorithmText();
				}
			}
			count++;
		}});
	}});
}

function flowBox() {
	if(stepCount == 1) {
		$(".user-btn").remove();
	}
	if(stepCount == 10) {
		$("#step" + (stepCount-1)).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			
		});
	} else {
		$("#step" + stepCount).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			stepCount++;
			algorithmText();
		});
	}
}