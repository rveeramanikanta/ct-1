var typingSpeed = 1;
var introjs;

var swapWithTempVariableReady = function() {
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
        	$(".introjs-nextbutton,.introjs-prevbutton").show();
        	iVal = parseInt($('#initialization_value').text());
        } else {
        	$('.errorMsg').remove();
        	$('.introjs-tooltiptext').append("<div class='errorMsg'><br/>Please enter a value.</div>");
        	$(".introjs-nextbutton,.introjs-prevbutton").hide();
        }
	});
	
	$('#restart').click(function() {
		location.reload();
	});
	
    introJsInit();
}

function introJsInit() {		 
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : '#swapDemo', //step1
			intro : "",
			position : 'right'
		}, {
			element : '#line1',//step2
			intro : "",
			position : 'bottom',
			tooltipClass:"hide"
		}, {
			element : '#aValuePanel',//step3
			intro : "",
			position : 'bottom',
			tooltipClass:"hide"
		}, {
			element : '#line2',//step4
			intro : "",
			position : 'bottom',
			tooltipClass:"hide"
			
		}, {
			element : '#bValuePanel',//step5
			intro : "",
			position : 'bottom',
			tooltipClass:"hide"
		}, {
			element : '#wrongSolution',//step6
			intro : "",
			position : 'bottom',
			tooltipClass:"hide"
		}, {
			element : '#line3',//step7
			intro : "",
			position : 'bottom',
			tooltipClass:"hide"
		}, {
			element : '#valuesPanel',//step8
			intro   :"",
			tooltipClass : 'hide'
		}, {
			element : '#line4',//step9
			intro : "",
			position : 'bottom',
			tooltipClass:"hide"
		}, {
			element : '#valuesPanel',//step10
			intro : "",
			position : 'bottom',
			tooltipClass:"hide"
		}, {
			element : '#wrongSolution',//step11
			intro : "",
			position : 'bottom',
			tooltipClass:"hide"
		}, {
			element : '#lineTemp',//step12
			intro : "",
			position : 'bottom',
			tooltipClass:"hide"
		}, {
			element : '#valuesPanel',//step13
			tooltipClass : 'hide'
		}, {
			element : '#line3',//step14
			intro : "",
			position : 'bottom'
		}, {
			element : '#valuesPanel',//step15
			tooltipClass : 'hide'
		}, {
			element : '#line4',//step16
			intro : "",
			position : 'bottom'
		}, {
			element : '#valuesPanel',//step17
			intro : "",
			position : 'bottom',
			tooltipClass:"hide"
		}, {
			element : '#line5',//step18
			intro : "The above statement prints the values in variables <b class='ct-code-b-yellow'>num1</b> and <b class='ct-code-b-yellow'>num2</b> after swapping.",
			position : 'bottom'
		}, {
			element : '#outputDiv',//step19
			tooltipClass : "hide"
		}, {
			element : '#restart',//step20
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
	        	$('#line2').addClass("opacity00")
	        	$("#num1Address").removeAttr("style").addClass("opacity00");
	        	
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
				break;
				
	    	case "wrongSolution":
	    	
				
					if (introjs._currentStep == 5) {
						$('#line3').addClass("opacity00");
						$('#line4').addClass("opacity00");
					} else if (introjs._currentStep == 10) {
						if (introjs._direction == "backward") {
							$("#line3").text("num1 = num2;");
							$("#line4").text("num2 = num1;"); 
							$("#line3").removeClass("animated bounceOut")
							$("#line4").removeClass("animated bounceOut")
						}
						//$("#line3, #line4").removeClass("animated bounceOut");
						$("#lineTemp").removeAttr("style").addClass("opacity00");
			    	}
				
				break;
				
	    	case "line3":
	    		
	    			if (introjs._currentStep == 6) {
	    				console.log(introjs._direction);
	    				if (introjs._direction == "backward") {
	    				$("#aValueInOutputWithBValue").addClass("opacity00")
	    				$("#aValueInOutput").text($('#aValue').text());
	    			    $("#aValueInOutput").removeAttr("style").removeClass("opacity00");
	    				}
	    			} else if (introjs._currentStep == 13) {
	    				$("#line3").removeClass("opacity00");
	    				$("#line4").addClass("opacity00");
	    		}
	    	break;
	    		
	    	case "line4":
	    		
	    			if (introjs._currentStep == 8) {
	    				if (introjs._direction == "backward") {
	    				$("#line3").removeClass("animated bounceOut")
	    				$("#line4").removeClass("animated bounceOut")
	    				$("#line3").text("num1 = num2;");
	    				$("#line4").text("num2 = num1;"); 
	    				}
	    			} else if (introjs._currentStep == 15) {
	    				if (introjs._direction == "backward") {
	    				$("#bValueInOutputWithAValue").text("");
	    				$("#bValueInOutput").text($('#bValue').text()).removeAttr("style").css('position', 'relative');
	    				//$("#bValueInOutput")
	    				}
	    			}
	    		
	    	break;
	    	
	    	case "lineTemp":
	    	
	    		$("#tValuePanel").addClass("opacity00");
	    		break;
	    		
			case "valuesPanel":
				
				if (introjs._currentStep == 7) {
					$("#aValueInOutput").text($('#aValue').text()).removeAttr("style").css('position', 'relative');
					$('#aValueInOutputWithBValue').addClass('opacity00');
					
				} else if (introjs._currentStep == 9) {
					$('#bValueInOutput').text($('#bValue').text()).removeAttr('style').css('position', 'relative');
					$('#bValueInOutputWithAValue').text('');
				} else if (introjs._currentStep == 12) {
					$("#line3").addClass("opacity00");
				} else if (introjs._currentStep == 14) {
				
				} else if (introjs._currentStep == 16) {
					/*console.log(introjs._direction);
					if (introjs._direction =="backward") {
					$("#bValueInOutput").text($('#aValue').text());
    			    $("#bValueInOutput").removeAttr("style").removeClass("opacity00");*/
					/*$('#bValueInOutput').text($('#bValue').text()).removeAttr('style').css('position', 'relative');
					$('#bValueInOutputWithAValue').text("");*/
					//}
					
				}
				break;
				
			case "line5":
				
				break;
	        
	        case "outputDiv":
	        	
		    break;	        
	    
			case "restart":
				
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
	        	$('.introjs-nextbutton').hide();
		    	var text = "Let us learn how to exchange values stored in two variables. " 
	    					+ "It is commanlly called <b class='ct-code-b-yellow'>swapping</b>.";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
		    	break;
		    	
	        case "line1":
	        	$('.introjs-nextbutton').hide();
		    	$('.introjs-helperLayer').one('transitionend', function () {
		    		$(".introjs-tooltip").removeClass("hide")
		    		var text = "Let us consider an <b class='ct-code-b-yellow'>int</b> variable <b class='ct-code-b-yellow'>num1</b> " 
		    						+ "with the value <b class='changeVal ct-code-b-yellow'>12</b>." 
		    						+ "<br/>You can change the value of <b class='ct-code-b-yellow changeVal'>12</b> to any other value.";
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
					//$(".introjs-tooltip").removeClass("hide");
					sendAValue();
				});
	        	break;
	        	
			case "bValuePanel":
				$('.introjs-nextbutton').hide();
				$("#bValue").attr("contenteditable", false);
				$('.introjs-helperLayer').one('transitionend', function () {
					//$(".introjs-tooltip").removeClass("hide");
					sendBValue();
				});
	        	break;
		    	
	    	case "line2":
	    		$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$(".introjs-tooltip").removeClass("hide")
		    		var text = "Let us consider another <b class='ct-code-b-yellow'>int</b> variable <b class='ct-code-b-yellow'>num2</b> " 
		    					+ "with the value <b class='changeVal ct-code-b-yellow'>45</b>.<br/>You can change "
		    					+ "the value of <b class='ct-code-b-yellow changeVal'>45</b> to any other value.";
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
				
	    	case "wrongSolution":
	    		$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$(".introjs-tooltip").removeClass("hide");
					
					if (introjs._currentStep == 5) {
			    		var text = "To change the value of <b class='ct-code-b-yellow'>num1</b> to that of <b class='ct-code-b-yellow'>num2</b>, " 
			    					+ " we can use the assignment operator.<br/>"
			    					+ "i.e. <b class='ct-code-b-yellow'>num1 = num2</b>.<br/><span></span>";
			    		typing(".introjs-tooltiptext", text, function() {
			    			$('#line3').removeClass("opacity00").addClass("animated flipInX").one("animationend", function() {
			    				$("#line3").removeClass("animated flipInX");
				    			$(".introjs-tooltiptext").append("<div></div>");
				    			var text = "<br/>Similarly, when we want to change the value of <b class='ct-code-b-yellow'>num2</b> to " 
				    						+ "<b class='ct-code-b-yellow'>num1</b>, we can write <b class='ct-code-b-yellow'>num2 = num1.</b>";
				    			typing($(".introjs-tooltiptext > div:last-child"), text, function() {
					    			$('#line4').removeClass("opacity00").addClass("animated flipInX").one("animationend", function() {
					    				$("#line4").removeClass("animated flipInX");
					    				$('.introjs-nextbutton,.introjs-prevbutton').show();
					    			});
				    			});
			    			});
			    		});
					} else if (introjs._currentStep == 10) {
						$(".introjs-tooltip").removeClass("hide");
			    		var text = "Let us consider a new solution where we store the original value of " 
			    				+ "<b class='ct-code-b-yellow'>num1</b> into a temporary variable.";
			    		typing(".introjs-tooltiptext", text, function() {
			    			$('.introjs-nextbutton').hide();
			    			$("#line3").addClass("animated bounceOut");
			    			$("#line4").addClass("animated bounceOut").one("animationend", function() {
			    				$("#line3").text("num1 = num2;");
			    				$("#line4").text("num2 = temp;");
			    				$('.introjs-nextbutton,.introjs-prevbutton').show();
			    			});
			    		});
			    	}
				});
				break;
				
	    	case "line3":
	    		$('.introjs-nextbutton').hide();
	    		$('.introjs-helperLayer').one('transitionend', function () {
	    			$(".introjs-tooltip").removeClass("hide");
	    			if (introjs._currentStep == 6) {
						var text = "This statement assigns the value stored in " 
							+ "<b class='ct-code-b-yellow'>num2</b> to <b class='ct-code-b-yellow'>num1</b>.";
		    			typing(".introjs-tooltiptext", text, function() {
		    				$('.introjs-nextbutton,.introjs-prevbutton').show();
		    			});
	    			} else if (introjs._currentStep == 13) {
		    				if (introjs._direction == "forward") {
		    				console.log("forwordline3",introjs._direction);
		    		
		    				var text = "Now, let us assign the value of  " 
								+ "<b class='ct-code-b-yellow'>num2</b> to <b class='ct-code-b-yellow'>num1</b>.";
			    			typing(".introjs-tooltiptext", text, function() {
			    				$('.introjs-nextbutton,.introjs-prevbutton').show();
			    				$("#line3").removeClass("opacity00").removeClass("bounceOut").addClass("flipInX");
			    			});
		    			  } else {
		    				
		    				$("#aValueInOutputWithBValue").addClass("opacity00")
		    				$("#aValueInOutput").text($('#aValue').text());
		    			    $("#aValueInOutput").removeAttr("style").removeClass("opacity00");
		    			}
	    			}
	    		});
	    	break;
	    		
	    	case "line4":
	    		$('.introjs-nextbutton').hide();
	    		$('.introjs-helperLayer').one('transitionend', function () {
	    			$(".introjs-tooltip").removeClass("hide");
	    			
	    			if (introjs._currentStep == 8) {
						var text = "Now the next statement assigns the value stored in " 
							+ "<b class='ct-code-b-yellow'>num1</b> to <b class='ct-code-b-yellow'>num2</b>.";
		    			typing(".introjs-tooltiptext", text, function() {
		    			
		    				$('.introjs-nextbutton,.introjs-prevbutton').show();
		    			});
	    			} else if (introjs._currentStep == 15) {
	    				var text =  "Now, let us assign the value stored in the temporary variable " 
							+ "<b class='ct-code-b-yellow'>temp</b> to <b class='ct-code-b-yellow'>num2</b>.";
    					typing(".introjs-tooltiptext", text, function() {
    						$("#line4").removeClass("opacity00");
		    				$("#line4").removeClass("bounceOut").addClass("flipInX");
		    				$('.introjs-nextbutton,.introjs-prevbutton').show();
		    			});
	    			}
	    		});
	    	break;
	    	
	    	case "lineTemp":
	    		$('.introjs-nextbutton').hide();
	    		$('.introjs-helperLayer').one('transitionend', function () {
	    			$(".introjs-tooltip").removeClass("hide");
	    			console.log("enter thisblock");
	    		//	$("#lineTemp").removeClass("opacity00");
	    			$("#aValueInOutput").text($("#aValue").text()).css({"opacity" : "1", "left" : ""});
	    			$("#bValueInOutput").text($("#bValue").text()).css({"opacity" : "1", "left" : ""});
	    			$("#aValueInOutputWithBValue").text("");
	    			$("#bValueInOutputWithAValue").text("");
	    			var text = "Let us create a temporary variable called <b class='ct-code-b-yellow'>temp</b>" 
						+ " and initialize it with the value stored in <span class='ct-code-b-yellow'>num1</span>.";
						
    				typing(".introjs-tooltiptext", text, function() {
    					$("#lineTemp").fadeTo(500, 1, function() {
    						$('.introjs-nextbutton,.introjs-prevbutton').show();
    					});
    				});
	    		});
	    		break;
	    		
			case "valuesPanel":
				$('.introjs-nextbutton').hide();
				if (introjs._currentStep == 7) {
					copyBValuetoAValue();
				} else if (introjs._currentStep == 9) {
					copyAValuetoBValue();
				} else if (introjs._currentStep == 12) {
					copyAValuetoTValue();
				} else if (introjs._currentStep == 14) {
					copyBValuetoAValue();
				} else if (introjs._currentStep == 16) {
					copyTValuetoBValue();
				}
				break;
				
			case "line5":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					var text = "After swapping : num1 = " + $("#bValue").text() + ", num2 = " + $("#aValue").text();
					$("#line5").fadeTo(500, 1, function() {
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				});
				break;
	        
	        case "outputDiv":
	        	$('.introjs-nextbutton').hide();
	        	$('.introjs-helperLayer').one('transitionend', function () {
	        		var text = "After swapping : num1 = " + $("#bValue").text() + ", num2 = " + $("#aValue").text();
	        		typing("#output", text, function() {
	        			setTimeout(function() {
	        				introjs.nextStep();
	        			}, 1000);
	        		});
	        	});
		    break;	        
	    
			case "restart":
				$('.introjs-nextbutton').hide();
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
	introjs.setOption('positionPrecedence', [ 'left', 'right', 'bottom',
			'top' ])
	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.start();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}

function copyAValuetoTValue() {
			setTimeout(function() {
				if (introjs._direction=="forward") {
					$('.introjs-nextbutton').hide();
					$('#tValueInOutput').addClass('opacity00');
					$("#tValueInOutput").text($('#aValue').text());
					var l1 = $('#aValueInOutput').offset();
					var l2 = $("#tValueInOutput").offset();
					$("#tValuePanel").removeClass('opacity00');
					TweenMax.from($("#tValuePanel"), 1.3, {top:-200, onComplete: function() {
						$('#tValueInOutput').removeClass('opacity00');
						$("#tValueInOutput").css('z-index','999999999')
						TweenLite.from($('#tValueInOutput'), 1.5, { ease:  Power4.easeOut, top:l1.top-l2.top, left :l1.left-l2.left, onComplete: function() {
							setTimeout(function() {
						introjs.nextStep()
							}, 500);
						}});
					}});
				} else {
					introjs.previousStep()
				}
			}, 500);
	
}

function sendAValue() {
	$('.introjs-nextbutton').hide();
	$('#aValueInOutput').addClass('opacity00');
	$("#aValueInOutput").text($('#aValue').text());
	$("#aValuePanel").removeClass('opacity00');
	TweenMax.from($("#aValuePanel"), 1.3, {top:-200, onComplete: function() {
		$('#aValueInOutput').removeClass('opacity00').addClass("focus");
		//$('#aValueInOutput').css('opacity','1');
		var l1 = $('#aValue').offset();
		var l2 = $('#aValueInOutput').offset();
		TweenMax.from($('#aValueInOutput'), 1.2, {top: l1.top-l2.top, left: l1.left-l2.left, onComplete: function() {
			$('#aValueInOutput').removeClass("focus");
			$(".introjs-tooltip").removeClass("hide");
			var text = "The memory location refered by <span class='ct-code-b-yellow'>num1</span> is " 
					+ "initialized with the value <span class='ct-code-b-yellow'>" + $("#aValue").text() + "</span>.";
		
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick=addressExp('#num1Address')>Next &#8594;</a>");
			});
		}});
	}});
}

function sendBValue() {
	$('.introjs-nextbutton').hide();
	$('#bValueInOutput').addClass('opacity00');
	$("#bValueInOutput").text($('#bValue').text());
	$("#bValuePanel").removeClass('opacity00');
	TweenMax.from($("#bValuePanel"), 1.3, {top:-200, onComplete: function() {
		$('#bValueInOutput').removeClass('opacity00').addClass("focus");
		
		var l1 = $('#bValue').offset();
		var l2 = $('#bValueInOutput').offset();
		TweenMax.from($('#bValueInOutput'), 1.2, {top: l1.top-l2.top, left: l1.left-l2.left, onComplete: function() {
			$('#bValueInOutput').removeClass("focus");
			$(".introjs-tooltip").removeClass("hide");
			var text = "The memory location refered by <span class='ct-code-b-yellow'>num2</span> is " 
				+ "initialized with the value <span class='ct-code-b-yellow'>" + $("#bValue").text() + "</span>.";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick=addressExp('#num2Address')>Next &#8594;</a>");
			});
			
		}});
	}});
}

function copyBValuetoAValue() {
	$('.introjs-nextbutton').hide();
		setTimeout(function() {
			if (introjs._direction=="forward") {
					$("#aValueInOutputWithBValue").text($('#bValue').text());
					var l1 = $('#bValueInOutput').offset();
					var l2 = $("#aValueInOutputWithBValue").offset();
					$("#aValueInOutputWithBValue").css('z-index','999999999').removeClass("opacity00");
					TweenLite.from($('#aValueInOutputWithBValue'), 3, { ease:  Bounce.easeOut, top:l1.top-l2.top, left :l1.left-l2.left, delay :1.3});
					TweenLite.to($('#aValueInOutput'), 1.5, { ease: Sine.easeOut, left:-150 , delay : 2.4, opacity:0 , onComplete: function() {
						$('#aValueInOutput').text("");
						introjs.nextStep()
					}});	
			} else {
				setTimeout(function() {
					$("#aValueInOutputWithBValue").addClass("opacity00")
    				$("#aValueInOutput").text($('#aValue').text()).removeAttr("style").css('position', 'relative');
					introjs.previousStep()
				}, 500);
			}
		}, 500);
	
}

function copyAValuetoBValue() {
	$('.introjs-nextbutton').hide();
	if (introjs._direction == "forward") {
		$("#bValueInOutputWithAValue").text($('#aValueInOutputWithBValue').text());
		var l1 = $('#aValueInOutputWithBValue').offset();
		var l2 = $("#bValueInOutputWithAValue").offset();
		$("#bValueInOutputWithAValue").css('z-index','999999999');
		TweenLite.from($('#bValueInOutputWithAValue'), 3, { ease:  Bounce.easeOut, top:l1.top-l2.top, left :l1.left-l2.left, delay :1.3});
		TweenLite.to($('#bValueInOutput'), 1.5, { ease: Sine.easeOut, left:150 , delay :2.4, opacity:0 , onComplete: function() {
			$('#bValueInOutput').text("");
			
			$(".introjs-tooltip").removeClass("hide");
			var text = "As you can notice there is only <b class='ct-code-b-yellow'>num2</b>'s value (<b class='ct-code-b-yellow'>" + $("#bValue").text() +"</b>) " 
							+ "in both <b class='ct-code-b-yellow'>num1</b> and <b class='ct-code-b-yellow'>num2</b>.<br/> "
							+ "The original value stored in <b class='ct-code-b-yellow'>num1</b> is lost, hence this is not a correct solution.";
			typing(".introjs-tooltiptext", text, function() {
				$('.introjs-nextbutton,.introjs-prevbutton').show();
			
			});
		}});
	} else {
		$('#bValueInOutput').text($('#bValue').text()).removeAttr('style').css('position', 'relative');
		$('#bValueInOutputWithAValue').text('');
		setTimeout(function() {
			introjs.previousStep()
		}, 500);
	}
}

function copyTValuetoBValue() {
	if (introjs._direction == "forward") {
	$("#bValueInOutputWithAValue").text($('#tValueInOutput').text());
	var l1 = $('#tValueInOutput').offset();
	var l2 = $("#bValueInOutputWithAValue").offset();
	$("#bValueInOutputWithAValue").css('z-index','999999999')
	TweenLite.from($('#bValueInOutputWithAValue'), 3, { ease:  Bounce.easeOut, top:l1.top-l2.top, left :l1.left-l2.left, delay :1.3});
	TweenLite.to($('#bValueInOutput'), 1.5, { ease: Sine.easeOut, left:150 , delay :2.4, opacity:0 , onComplete: function() {
		$('#bValueInOutput').text("");
		$(".introjs-tooltip").removeClass("hide");
		var text = "Finally, we will find that both <span class='ct-code-b-yellow'>num1</span> and <span class='ct-code-b-yellow'>num2</span> values are swapped.";
		typing(".introjs-tooltiptext", text, function() {
			$('.introjs-nextbutton,.introjs-prevbutton').show();
		});
	}});
} else {
	/*$('#bValueInOutputWithAValue').text($('#bValue').text()).removeAttr('style').css('position', 'relative');*/
	setTimeout(function() {
		introjs.previousStep()
	}, 500);
}
}
function showMethodName1(){
	$('#className1').show();
	$('#className').hide();
	$("#aValuePanel").addClass('opacity00');
	$("#bValuePanel").addClass('opacity00');
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
		$(id).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
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