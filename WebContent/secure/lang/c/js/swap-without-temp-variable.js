var typingSpeed = 1;
var introjs;
var num1Val = $('#aValue').text();
var num2Val = $('#bValue').text();

var swapWithoutTempVariableReady = function() {
	$(".allowOnlyNumber").keydown(function (e) {
		var max = $(this).attr("maxlength");
		$(".errorMsg").remove();
		// Allow: backspace, delete, tab, escape, enter and .
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) || (e.keyCode >= 35 && e.keyCode <= 40)) {
		// let it happen, don't do anything
			return;
		}
		// Ensure that it is a number and stop the keypress
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
        
		if ($(this).text().length > max) {
			$('.introjs-tooltiptext').append("<div class='errorMsg'><br/>Enter a number of maximum 3 digits.</div>");
			e.preventDefault();
		}
    });
	
	$(".allowOnlyNumber").keyup(function() {
		introjs.refresh();
		$('.changeVal').text($(this).text());
		if ($(this).text().length > 0) {
        	$(".introjs-nextbutton, .introjs-prevbutton").show();
        	iVal = parseInt($('#initialization_value').text());
        } else {
        	$('.errorMsg').remove();
        	$('.introjs-tooltiptext').append("<div class='errorMsg'><br/>Please enter a value.</div>");
        	$(".introjs-nextbutton, .introjs-prevbutton").hide();
        }
	});
	
	$('#restart').click(function() {
		location.reload();
	});
	
    introJsGuide();
}

function introJsGuide() {		 
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : '#swapDemo',
			intro : "",
			position : 'right'
		}, {
			element : '#line1',
			intro : "",
			position : 'bottom',
			tooltipClass:"hide"
		}, {
			element : '#aValuePanel',
			intro : "",
			position : 'bottom',
			tooltipClass:"hide"
		}, {
			element : '#line2',
			intro : "",
			position : 'bottom',
			tooltipClass:"hide"
		}, {
			element : '#bValuePanel',
			intro : "",
			position : 'bottom',
			tooltipClass:"hide"
		}, {
			element : '#solution',
			intro : "",
			position : 'bottom',
			tooltipClass:"hide"
		}, {
			element : '#sumDec',
			intro : "",
			position : 'bottom',
			tooltipClass:"hide"
		}, {
			element : '#valuesPanel',
			tooltipClass : 'hide'
		}, {
			element : '#line3',
			intro : "",
			position : 'bottom',
			tooltipClass:"hide"
		}, {
			element : '#valuesPanel',
			tooltipClass : 'hide'
		}, {
			element : '#line4',
			intro : "",
			position : 'bottom',
			tooltipClass:"hide"
		}, {
			element : '#valuesPanel',
			tooltipClass : 'hide'
		}, {
			element : '#line5',
			intro : "The above statement prints the values in variables <b class='ct-code-b-yellow'>num1</b> and <b class='ct-code-b-yellow'>num2</b> after swapping.",
			position : 'bottom',
			tooltipClass:"hide"
		}, {
			element : '#outputDiv',
			tooltipClass : "hide"
		}, {
			element : '#restart',
			intro : "Click to restart.",
			position : 'right'
		}]
	});
	introjs.onbeforechange(function(targetElement) {
		introjs.refresh();
	    switch (targetElement.id) {
	        case "swapDemo":
	        	$('#line1').addClass("opacity00")
		    	break;
		    	
	        case "line1":
	        	$("#aValue").attr("contenteditable", true);
	        	$("#aValuePanel").addClass("opacity00");
	        	$("#num1Address").removeAttr("style").addClass("opacity00");
		    	break;
		    	
	        case "aValuePanel":
	        	//$(".introjs-tooltiptext").empty();
	        	$('#line2').addClass("opacity00")
	        	$("#num1Address").removeAttr("style").addClass("opacity00");
	        	break;
	        	
	        case "sumValuePanel":
	        	
	        	break;
	        	
	        case "bValuePanel":
	        	if (introjs._direction == "backward") {
					$("#num2Address").removeAttr("style").addClass("opacity00");
					}
	        	break;
		    	
	        case "line2":
	        	$("#bValue").attr("contenteditable", true);
	    		$("#bValuePanel").addClass("opacity00");
	    		$("#num2Address").removeAttr("style").addClass("opacity00");
	    		if (introjs._direction == "backward") {
	    			$("#solution").addClass("opacity00");
	    		}
				break;
	        case "solution":
	    		$('#line3').addClass("opacity00");
				$('#line4').addClass("opacity00");
				$("#sumDec").addClass("opacity00");
				if (introjs._direction == "backward") {
					alert("apending text")
					$("#sumDec").text("");
					$("#sumDec").append("<span id='sumDec'>num1 = <span class='sum flip-css'><span class='num1 flip-css'>num1</span> + <span class='num2 flip-css'>num2</span></span>;</span>");
				}
	    		break;
	    		
	    	 case "sumDec":
	
	    		 $("#sumDec").text("");
	    		 $("#sumDec").append("<span id='sumDec'>num1 = <span class='sum flip-css'><span class='num1 flip-css'>num1</span> + <span class='num2 flip-css'>num2</span></span>;</span>");
	    		 $("#aValueInOutput").text("");
	    		 $("#aValueInOutput").text($('#aValue').text());
	    		 $("#line3").text("");
	    		 $("#line3").append("<span id='line3'>num2 = <span id='newBVal' class='flip-css'><span class='sum flip-css'>num1</span> - <span id='bVal1' class='flip-css'>num2</span></span>;</span>");
	    		 /*$("#line3").text("");
	    		 $("#line3").append("<span id='line'>num2 = <span class='sum flip-css'><span class='num2 flip-css'>num1</span> - <span class='num1 flip-css'>num2</span></span>;</span>");*/
		    	break;
				
	    	case "line3":
	    		$("#line3").text("");
	    		 $("#line3").append("<span id='line3'>num2 = <span id='newBVal' class='flip-css'><span class='sum flip-css'>num1</span> - <span id='bVal1' class='flip-css'>num2</span></span>;</span>");
	    		$("#bValueInOutput").text("");
	    		 $("#bValueInOutput").text($('#bValue').text());
	    		 $("#line4").text("");
	    		 $("#line4").append("<span id='line4'>num1 = <span id='newAVal' class='flip-css'><span class='sum flip-css'>num1</span> - <span id='aVal1' class='flip-css'>num2</span></span>;</span>");
	    	break;
	    		
	    	case "line4":
	    		$("#line4").text("");
	    		 $("#line4").append("<span id='line4'>num1 = <span id='newAVal' class='flip-css'><span class='sum flip-css'>num1</span> - <span id='aVal1' class='flip-css'>num2</span></span>;</span>");
	    		 $("#aValueInOutput").text("");
	    		$("#aValueInOutput").text( parseInt($("#aValue").text()) + parseInt($("#bValue").text()));
	    		$("#line5").removeAttr("style").addClass("opacity00");
	    	break;
	    	
			case "valuesPanel":
				
					if (introjs._currentStep == 7) {
						
					} else if (introjs._currentStep == 9) {
						
					} else {
						
					
					}
				break;
				
			case "line5":
				
				break;
				
	        case "outputDiv":
	        	
		    break;	        
	    }
	});
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		// ********************** start ************back button logic
				
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
				
				// ********************** end ************back button logic
		introjs.refresh();
	    switch (targetElement.id) {
	        case "swapDemo":
	        	$(".introjs-nextbutton").hide();
		    	var text = "Let us learn how to exchange values stored in two variables without using an extra temporary variable.";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton").show();
				});
		    	break;
		    	
	        case "line1":
	        	$(".introjs-nextbutton").hide();
		    	$('.introjs-helperLayer').one('transitionend', function () {
		    		num1Val = $('#aValue').text();
		    		$(".introjs-tooltip").removeClass("hide")
		    		var text = "Let us consider an <b class='ct-code-b-yellow'>int</b> variable <b class='ct-code-b-yellow'>num1</b> " 
						+ "with the value <b class='changeVal ct-code-b-yellow'>" + num1Val + "</b>.<br>" 
						+ "<br/>You can change the value of <b class='ct-code-b-yellow changeVal'>" + num1Val + "</b> to any other value.";
					typing(".introjs-tooltiptext", text, function() {
						$("#aValue").effect("highlight", {color: '#ffff00'}, 500, function() {
							charAtEnd("aValue");
							$('.introjs-nextbutton,.introjs-prevbutton').show();
						});
					});
					$('#line1').removeClass("opacity00").addClass("position-absolute animated flipInX");

		    	});
		    	break;
		    	
	        case "aValuePanel":
				$('.introjs-nextbutton').hide();
				$("#aValue").attr("contenteditable", false);
				$('.introjs-helperLayer').one('transitionend', function () {
				//	$(".introjs-tooltip").removeClass("hide")
					sendAValue();
				});
	        	break;
	        	
	        case "sumValuePanel":
	        	introjs._introItems[introjs._currentStep].intro = "The memory location refered by <b class='ct-code-b-yellow'>sum</b> is initialized with " 
							+ "the value <b class='ct-code-b-yellow'> " + (parseInt($("#aValue").text()) + parseInt($("#bValue").text()))  + "</b>."
					sendSumValue()
	        	break;
	        	
	        case "bValuePanel":
				$('.introjs-nextbutton').hide();
				$('.introjs-tooltip').css('min-width', '250px');
				$("#bValue").attr("contenteditable", false);
				$('.introjs-helperLayer').one('transitionend', function () {
					//$(".introjs-tooltip").removeClass("hide")
					sendBValue();
				});
	        	break;
		    	
	        case "line2":
	    		$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					num2Val = $('#bValue').text();
					$(".introjs-tooltip").removeClass("hide")
		    		var text = "Let us consider another <b class='ct-code-b-yellow'>int</b> variable <b class='ct-code-b-yellow'>num2</b> " 
		    					+ "with the value <b class='changeVal ct-code-b-yellow'>" + num2Val + "</b>.<br/>You can change "
		    					+ "the value of <b class='ct-code-b-yellow changeVal'>" + num2Val + " </b> to any other value.";
					typing(".introjs-tooltiptext", text, function() {
						$("#bValue").effect("highlight", {color: '#ffff00'}, 500, function() {
							charAtEnd("bValue");
							$('.introjs-nextbutton,.introjs-prevbutton').show();
						});
					});
					$('#line2').removeClass("opacity00").addClass("position-absolute animated flipInX").one("animationend", function() {
						$(this).removeClass("animated flipInX");
					});
		    	});
				break;
				
	    	case "solution":
	    		$(".introjs-nextbutton").hide();
	    		$('.introjs-tooltip').css('min-width', '370px');
				$('.introjs-helperLayer').one('transitionend', function () {
					$("#solution").removeClass("opacity00");
					$(".introjs-tooltip").removeClass("hide");
					var text = "The steps involved in performing a swap without using a third temporary variable are : ";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick=step1()>Next &#8594;</a>");
					});
				});
	    		break;
	    		
	    	 case "sumDec":
	        	$(".introjs-nextbutton").hide();
	        	$('.introjs-tooltip').css('min-width', '250px');
		    	$('.introjs-helperLayer').one('transitionend', function () {
		    		$(".introjs-tooltip").removeClass("hide")
	    			var text = "Here, the sum of (<span class='ct-code-b-yellow'>num1</span> + <span class='ct-code-b-yellow'>num2</span>)" 
	    						+ " is stored in the variable <span class='ct-code-b-yellow'>num1</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick=step1Flip()>Next &#8594;</a>");
					});
		    	});
		    	break;
				
	    	case "line3":
	    		$(".introjs-nextbutton").hide();
	    		$('.introjs-helperLayer').one('transitionend', function () {
	    			$(".introjs-tooltip").removeClass("hide");
	    			var text = "Here, we are substracting <span class='ct-code-b-yellow'>num2</span> value from " 
	    						+ "<span class='ct-code-b-yellow'>num1</span> and the result is stored " 
	    						+ "in <span class='ct-code-b-yellow'>num2</span>.";
	    			typing(".introjs-tooltiptext", text, function() {
	    				$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick=step2Flip()>Next &#8594;</a>");
	    			});
	    		});
	    	break;
	    		
	    	case "line4":
	    		$(".introjs-nextbutton").hide();
	    		$('.introjs-helperLayer').one('transitionend', function () {
	    			$(".introjs-tooltip").removeClass("hide");
	    			var text = "Here, we are substracting <span class='ct-code-b-yellow'>num2</span> value from " 
						+ "<span class='ct-code-b-yellow'>num1</span> and the result is stored " 
						+ "in <span class='ct-code-b-yellow'>num2</span>.";
	    			typing(".introjs-tooltiptext", text, function() {
	    				$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick=step3Flip()>Next &#8594;</a>");
	    			});
	    		});
	    	break;
	    	
			case "valuesPanel":
				$(".introjs-nextbutton").hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					if (introjs._currentStep == 7) {
						
							setTimeout(function() {
								if (introjs._direction=="forward") {
									bounceEffect("#sumDec .sum","#aValueInOutput", function() {
								introjs.nextStep()
									});
								} else {
								introjs.previousStep()
								}
								}, 500);

						
					} else if (introjs._currentStep == 9) {
						
							setTimeout(function() {
								if (introjs._direction=="forward") {
									bounceEffect("#newBVal", "#bValueInOutput", function() {
								introjs.nextStep()
									});
								} else {
								introjs.previousStep()
								}
							}, 500);

						
					} else {
						
							setTimeout(function() {
								if (introjs._direction=="forward") {
									bounceEffect("#newAVal", "#aValueInOutput", function() {
								introjs.nextStep()
									});
								} else {
								introjs.previousStep()
								}
								}, 500);

						
					}
				});
				break;
				
			case "line5":
				$(".introjs-nextbutton").hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$(".introjs-tooltip").removeClass("hide");
					$("#line5").fadeTo(500, 1, function() {
						$("#line5").removeClass("opacity00");

						$(".introjs-nextbutton,.introjs-prevbutton").show();
					});
				});
				break;
				
	        case "outputDiv":
	        	$(".introjs-nextbutton").hide();
	        	$('.introjs-helperLayer').one('transitionend', function () {
	        		var text = "After swapping : a = " + $("#bValue").text() + ", b = " + $("#aValue").text();
	        		typing("#output", text, function() {
	        			setTimeout(function() {
	        				if (introjs._direction=="forward") {
	        				introjs.nextStep()
	        				} else {
	        				introjs.previousStep()
	        				}
	        				}, 500);

	        		});
	        	});
		    break;	        
	    
			case "restart":
				$(".introjs-nextbutton").hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$('#restart').fadeTo(1, 800, function() {
						$(this).removeClass("opacity00");
						$(".introjs-tooltip").css({"min-width": "115px"});
					});
				});
			break;
	    }
	});

	introjs.setOption('tooltipPosition', 'bottom');
	introjs.setOption('positionPrecedence', [ 'left', 'right', 'bottom','top' ]);
	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.start();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}

function sendAValue() {
	setTimeout(function() {
	if (introjs._direction == "forward") {
	$('#aValueInOutput').addClass('opacity00');
	$("#aValueInOutput").text($('#aValue').text());
	$("#aValuePanel").removeClass('opacity00');
	TweenMax.from($("#aValuePanel"), 1.3, {top:-200, onComplete: function() {
		$("#aValuePanel").removeAttr("style");
		$('#aValueInOutput').removeClass('opacity00').addClass("focus");
		$('#aValueInOutput').css('opacity','1');
		var l1 = $('#aValue').offset();
		var l2 = $('#aValueInOutput').offset();
		TweenMax.from($('#aValueInOutput'), 1.2, {top: l1.top - l2.top, left: l1.left - l2.left, onComplete: function() {
			$('#aValueInOutput').removeClass("focus").removeAttr("style");
			$(".introjs-tooltip").removeClass("hide");
			var text = "The memory location refered by <span class='ct-code-b-yellow'>num1</span> is " 
				+ "initialized with the value <span class='ct-code-b-yellow'>" + $("#aValue").text() + "</span>.";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick=addressExp('#num1Address')>Next &#8594;</a>");
			});
		}});
	}});
	} else {
		introjs.previousStep();
	}
	}, 600);
}

function sendBValue() {
	setTimeout(function() {
	if (introjs._direction == "forward") {
	$('#bValueInOutput').addClass('opacity00');
	$("#bValueInOutput").text($('#bValue').text());
	$("#bValuePanel").removeClass('opacity00');
	TweenMax.from($("#bValuePanel"), 1.3, {top:-200, onComplete: function() {
		$("#bValuePanel").removeAttr("style");
		$('#bValueInOutput').removeClass('opacity00').addClass("focus");
		var l1 = $('#bValue').offset();
		var l2 = $('#bValueInOutput').offset();
		TweenMax.from($('#bValueInOutput'), 1.2, {top: l1.top - l2.top, left: l1.left - l2.left, onComplete: function() {
			$('#bValueInOutput').removeClass("focus").removeAttr("style");
			$(".introjs-tooltip").removeClass("hide");
			var text = "The memory location refered by <span class='ct-code-b-yellow'>num2</span> is " 
				+ "initialized with the value <span class='ct-code-b-yellow'>" + $("#bValue").text() + "</span>.";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick=addressExp('#num2Address')>Next &#8594;</a>");
			});
			
		}});
	}});
	} else {
		introjs.previousStep();
	}
	}, 600);
}

function charAtEnd(id) {
	var element = document.getElementById(id);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}	

function typing(id, content, callBackFunction) {
	$(id).typewriting( content , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}

function flipVal(selector, val, callBackFunction) {
	TweenMax.to(selector, 0.5, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to(selector, 0.5, {rotationX : 0, onComplete:function() {
			introjs.refresh();
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function bounceEffect(selector1, selector2, callBackFunction) {
	$("body").append("<span id='dummyVal' class='display-inline-block position-relative zIndex'>" + $(selector1).text() + "</span>");
	var l = $(selector1).offset();
	$("#dummyVal").offset({
	  "top" : l.top,
	  "left" : l.left
	});
	var l1 = $(selector1).addClass("zIndex").offset();
	var l2 = $(selector2).offset();
	
	TweenLite.to(selector1, 3, { ease:  Bounce.easeOut, top:l2.top-l1.top, left :l2.left-l1.left, delay : 1.3, onComplete : function() {
		$(selector1).removeAttr("style").removeClass("zIndex");
		$(selector2).text($(selector1).text()).removeAttr("style");
	  	$("#dummyVal").remove();
		if (typeof callBackFunction === "function") {
	  		callBackFunction();
		}
	}});
	TweenLite.to($(selector2), 1.5, { ease: Sine.easeOut, left:150 , delay : 2.4, opacity : 0});
}

function addressExp(id) {
	$(".user-btn").remove();
	$(".introjs-tooltiptext").append("<div></div>");
	
	var text = "";
	
	if (id == "#num1Address") {
		text = "<br/>Let us assume the variable <span class='ct-code-b-yellow'>num1</span> is allocated at a " 
			+ "particular memory location of <span class='ct-code-b-yellow'>2485</span>.";
	} else {
		text = "<br/>Let us assume the variable <span class='ct-code-b-yellow'>num2</span> is allocated at a " 
			+ "particular memory location of <span class='ct-code-b-yellow'>2086</span>.";
	}
	
	typing($(".introjs-tooltiptext div:last-child"), text, function() {
		$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick=addressFadeInEffect('" + id + "')>Next &#8594;</a>");
	});
}

function addressFadeInEffect(id) {
	$(".user-btn").remove();
	TweenMax.to(id, 0.5, {opacity: 1, onComplete:function() {
		$(id).removeClass("opacity00");
		$(".introjs-nextbutton,.introjs-prevbutton").show();
	}});
}

function step1() {
	$(".user-btn").remove();
	var text = "First let us store the summation of both numbers into the first variable.";
	$(".introjs-tooltiptext").append("<ul><li></li></ul>");
	typing($(".introjs-tooltiptext li:last-child"), text, function() {
		$(".introjs-tooltiptext li:last-child").append("<br/><span class='ct-code-b-yellow'>num1 = num1 + num2;</span>");
		$("#sumDec").removeClass("opacity00").addClass("animated flipInX").one("animationend", function() {
			$("#sumDec").removeClass("animated flipInX");
			$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick=step2()>Next &#8594;</a>");
		});
	});
}


function step2() {
	$(".user-btn").remove();
	$(".introjs-tooltiptext ul").append("<li></li>");
	var text = "Then let us store the difference into the second variable.";
	typing($(".introjs-tooltiptext li:last-child"), text, function() {
		$(".introjs-tooltiptext li:last-child").append("<br/><span class='ct-code-b-yellow'>num2 = num1 - num2;</span>");
		$("#line3").removeClass("opacity00").addClass("animated flipInX").one("animationend", function() {
			$("#line3").removeClass("animated flipInX");
			$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick=step3()>Next &#8594;</a>");
		});
	});
}

function step3() {
	$(".user-btn").remove();
	$(".introjs-tooltiptext ul").append("<li></li>");
	var text = "Finally assign the difference between <span class='ct-code-b-yellow'>num1</span> and " 
			+ "<span class='ct-code-b-yellow'>num2</span> again into <span class='ct-code-b-yellow'>num1</span>.";
	typing($(".introjs-tooltiptext li:last-child"), text, function() {
		$(".introjs-tooltiptext li:last-child").append("<br/><span class='ct-code-b-yellow'>num1 = num1 - num2;</span>");
		$("#line4").removeClass("opacity00").addClass("animated flipInX").one("animationend", function() {
			$("#line4").removeClass("animated flipInX");
			$(".introjs-nextbutton,.introjs-prevbutton").show();
		});
	});
}

function step1Flip() {
	$(".user-btn").remove();
	
	flipVal("#sumDec .num2", $("#bValue").text(), function() {
		flipVal("#sumDec .num1", $("#aValue").text(), function() {
			flipVal("#sumDec .sum", parseInt($("#aValue").text()) + parseInt($("#bValue").text()), function() {
				$(".introjs-nextbutton,.introjs-prevbutton").show();
			});
		});
	});
}

function step2Flip() {
	$(".user-btn").remove();
	flipVal("#bVal1", $("#bValue").text(), function() {
		flipVal("#line3 .sum", parseInt($("#aValue").text()) + parseInt($("#bValue").text()), function() {
			flipVal("#newBVal", $("#aValue").text(), function() {
				$(".introjs-nextbutton,.introjs-prevbutton").show();
			});
		});
	});
}

function step3Flip() {
	$(".user-btn").remove();
	flipVal("#aVal1", $("#aValue").text(), function() {
		flipVal("#line4 .sum", parseInt($("#aValue").text()) + parseInt($("#bValue").text()), function() {
			flipVal("#newAVal", $("#bValue").text(), function() {
				$(".introjs-nextbutton,.introjs-prevbutton").show();
			});
		});
	});
}