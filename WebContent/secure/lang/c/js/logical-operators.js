var tl = new TimelineLite();
var firstVal = 0;
var secondVal = 0;
var next = 0;

var logicalOperatorsReady = function() {
	$(".inputWidth").on("keydown keyup", function(e) {
		$(".length-error-text").remove();
		if ($(this).val() == "") {
			$(this).addClass("empty");
		} else {
			$(this).removeClass("empty");
		}
		//introjs.refresh();
		if ($(".empty").length > 0) {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
		}
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			$('.length-error-text').remove();
			$(".introjs-tooltiptext").append("<div class='length-error-text'>Enter only the integers.</div>");
			e.preventDefault();
		}
		if ($(this).val().length >= max) {
			$(".introjs-tooltiptext").append("<div class='length-error-text'>Max Length 2 digits only</div>")
			e.preventDefault();
		}
	});
	
	
	intro =  introJs();
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [
					{
						element : "#informationDiv",
						position : "bottom",
						tooltipClass:"hide"
					},
					{
						element : "#inputDiv",
						intro : "",
						position : "right"
					},
					{
						element : "#animationDiv",
						intro : "",
						position : "right"
					},
					{
						element : "#restart",
						intro : "Click to restart.",
						position : "right",
						tooltipClass: 'tooltip-min-width'
						
					}
				]
	})
	intro.onafterchange(function(targetElement) {
		var ElementId = targetElement.id;
		switch (ElementId) {

		case "inputDiv":
			$("#" + ElementId).removeClass("visibility-hidden");
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Enter <y>integer</y> values in both the boxes."
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").hide();
				});
			});
		break;	
		
		case "animationDiv":
			$("#" + ElementId).removeClass("visibility-hidden");
			firstVal = parseInt($("#firstNum").val());
			secondVal = parseInt($("#secondNum").val());
			$(".introjs-nextbutton").addClass("visibility-hidden");
			$(".introjs-tooltipbuttons").append('<span class="btn visibility-hidden next-button">Next →</span>');
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<span id='first'>Here, we can see different <y>logical operators</y> with expressions.</span><ul><span id='amperson'></span></ul>";
				typing(".introjs-tooltiptext", text, function() {
					nextClick();
					$(".next-button").removeClass("visibility-hidden");
				});
			});
		break;
		
		case "restart":
			$(".introjs-nextbutton").hide();
			$("#informationDiv").removeClass("zIndex")
				$("#restart").text("Restart").removeClass("visibility-hidden");
		break;
		
		}
	})
	intro.start();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	
	$(".introjs-nextbutton").hide();
	$("#informationDiv").removeClass("visibility-hidden");
	 var text = "<ul><li>In addition to the <span class='ct-code-b-green'>relational and equality operators</span>, C has two <span class='ct-code-b-green'>binary logical"
		+" operators</span> and one <span class='ct-code-b-green'>unary logical operator</span>. They are :  </li>"
		+"<ol><li><span class='ct-code-b-green'>&&</span> - logical AND</li><li><span class='ct-code-b-green'>||</span> - logical OR</li><li><span class='ct-code-b-green'>!</span> - logical NOT</li></ol>"
		+"<li>The result of <span class='ct-code-b-green'>&&</span> is <span class='ct-code-b-green'>non-zero(true)</span> if and only if both operands are <span class='ct-code-b-green'>non-zero</span>;"
		+" otherwise, the result is <span class='ct-code-b-green'>zero(false)</span>.</li><li>The result of <span class='ct-code-b-green'>||</span> is <span class='ct-code-b-green'>zero(false)</span> if and only if both the"
		+" operators are <span class='ct-code-b-green'>zero</span>; otherwise, the result is <span class='ct-code-b-green'>non-zero(true)</span>.</li><li>The logical operator <span class='ct-code-b-green'>!(NOT)</span>"
		+" requires only one operand which represents a logical value <span class='ct-code-b-green'>0</span> or <span class='ct-code-b-green'>non-zero</span>.The result of"
		+" operation is <span class='ct-code-b-green'>non-zero</span> if and only if the operand is <span class='ct-code-b-green'>0</span>, otherwise the result is <span class='ct-code-b-green'>0</span>.</li></ul>"
		typing("#informationDiv", text, function() {
			$("#informationDiv").addClass("zIndex");
			intro.nextStep();
		}) 
	
	var isVisible = false;
	$("#restart").click(function() {
		location.reload(true);
	})
}

function nextClick() {
	$(".next-button").click(function() {
		
		 if (next == 0) {
			 $(".next-button").addClass("visibility-hidden");
			$("table tr:eq(1) td:eq(0)").removeClass("opacity00");
			setTimeout(function() {
			var text = "<li>Logical <span class='ct-code-b-yellow'>AND(&&)</span> : If both the operands"
						+" or expression are non-zero, then the condition becomes <span class='ct-code-b-yellow'>true</span>."
						+"If not it returns <span class='ct-code-b-yellow'>false</span>.</li><span id='lOR'></span>"
				typing("#amperson", text, function() {
					$(".next-button").removeClass("visibility-hidden");
				});
			},400);
		} else if (next == 1) {
			var isBoolean = (parseInt(firstVal) >= 16) && (parseInt(secondVal) == 25);
			$(".next-button").addClass("visibility-hidden");
			flipEffect($("table tr:eq(1) td:eq(0) span:eq(1)"),parseInt(firstVal), function() {
				  flipEffect($("table tr:eq(1) td:eq(0) span:eq(7)"), parseInt(secondVal), function() {
					  
					  $("table tr:eq(1) td:eq(1) > span").append("<span class='position-relative'><span>"+ (parseInt(firstVal) >= 16) +"</span> && <span>"+ (parseInt(secondVal) == 25) +"</span></span>")
						$("table tr:eq(1) td:eq(1) > span").fadeIn(600, function() {
							$("table tr:eq(1) td:eq(2) > span").text(Number((parseInt(firstVal) >= 16) && (parseInt(secondVal) == 25)));
							flipEffect($("table tr:eq(1) td:eq(1) > span :nth-child(1)"), isBoolean, function() {
								$("table tr:eq(1) td:eq(2) > span").fadeIn( 800, function() {
						    		$(".next-button").removeClass("visibility-hidden");
						    	})
							})
						})
				  })
				})
		} else if (next  == 2) {
			 $(".next-button").addClass("visibility-hidden");
				$("table tr:eq(2) td:eq(0)").removeClass("opacity00");
				setTimeout(function() {
					var text = "<li>Logical <span class='ct-code-b-yellow'>OR(||)</span> : If any of the two"
							+" operands or expression is non-zero, then the condition becomes <span class='ct-code-b-yellow'>true</span>"
							+" else returns <span class='ct-code-b-yellow'>false</span>.</li><span id='lNOT'></span>"
						typing("#lOR", text, function() {
							//$(".introjs-nextbutton").hide();
							$(".next-button").removeClass("visibility-hidden");
						});
					},400);
		} else if (next == 3) {
			$(".next-button").addClass("visibility-hidden");
			var isBoolean = (parseInt(firstVal) < 11) || (parseInt(secondVal) > 100);
			flipEffect($("table tr:eq(2) td:eq(0) span:eq(1)"),parseInt(firstVal), function() {
				  flipEffect($("table tr:eq(2) td:eq(0) span:eq(7)"), parseInt(secondVal), function() {
					  
					  $("table tr:eq(2) td:eq(1) > span").append("<span class='position-relative'><span>"+ (parseInt(firstVal) < 11) +"</span> || <span>"+ (parseInt(secondVal) > 100) +"</span></span>")
						$("table tr:eq(2) td:eq(1) > span").fadeIn(600, function() {
							$("table tr:eq(2) td:eq(2) > span").text(Number((parseInt(firstVal) < 11) || (parseInt(secondVal) > 100)));
							flipEffect($("table tr:eq(2) td:eq(1) > span :nth-child(1)"), isBoolean, function() {
								$("table tr:eq(2) td:eq(2) > span").fadeIn( 800, function() {
						    		$(".next-button").removeClass("visibility-hidden");
						    	})
							})
						})
				  })
				})
		} else if (next == 4) {
			$(".next-button").addClass("visibility-hidden");
			$("table tr:eq(3) td:eq(0)").removeClass("opacity00");
			setTimeout(function() {
				var text = "<li>Logical <span  class='ct-code-b-yellow'>NOT(!)</span> : It is used to reverse the logical state of its operand."
						+"If a condition is <span class='ct-code-b-yellow'>true</span>, then logical"
						+" <span class='ct-code-b-yellow'>NOT</span> operator will make it <span class='ct-code-b-yellow'>false</span>.</li>"
					typing("#lNOT", text, function() {
						//$(".introjs-nextbutton").hide();
						$(".next-button").removeClass("visibility-hidden");
					});
				},400);
		} else if (next == 5) {
			$(".next-button").hide();
			var isBoolean = !(parseInt(firstVal) <= 3);
			flipEffect($("table tr:eq(3) td:eq(0) span:eq(2)"),parseInt(firstVal), function() {
				$("table tr:eq(3) td:eq(1) > span").append("<span class='position-relative'><span>!</span>(<span>"+ (parseInt(firstVal) <= 3) +"</span>)</span>")
				$("table tr:eq(3) td:eq(1) > span").fadeIn(600, function() {
					$("table tr:eq(3) td:eq(2) > span").text(Number(!(parseInt(firstVal) <= 3)));
					flipEffect($("table tr:eq(3) td:eq(1) > span :nth-child(1)"), isBoolean, function() {
						$("table tr:eq(3) td:eq(2) > span").fadeIn( 800, function() {
							$(".introjs-nextbutton").removeClass("visibility-hidden");
				    	})
					})
				})
				
			})
		}
		next++;
	});
	}

function typing(selector, text, callBackFunction) {
		var typingSpeed = 0;
		$(selector).typewriting( text , {
			"typing_interval": typingSpeed,
			"cursor_color": 'white',
		}, function() {
			$(selector).removeClass("typingCursor");
			$(".introjs-nextbutton").show();
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		})
	}
	
function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}	