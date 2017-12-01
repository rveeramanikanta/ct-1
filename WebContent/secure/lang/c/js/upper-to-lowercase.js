var t1;

var upperToLowerCaseReady = function() {
	t1 = new TimelineLite();
	$("#restartBtn").click(function() {
		location.reload();
	});
	
	$("#inputChar").keyup(function() {
		if ($("#inputChar").val().length < 1) {
			$('.introjs-nextbutton').hide();
		} else {
			$('.introjs-nextbutton').show();
		}
	});
	
	intro = introJs();
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
		steps : [{
					element :'#preBody',
					intro :'',
					position:"bottom"
				},{
					element :'#line1',
					intro :'',
					position:"bottom"
				},{
					element :'#line2',
					intro :'',
					position:"bottom"
				},{
					element :'#line3',
					intro :'',
					position:"bottom"
				},{
					element :'#addressBox',
					intro :'',
					position:"bottom",
					tooltipClass:"hide"
				},{
					element :'#line4',
					intro :'',
					position:"bottom"
				},{
					element :'#consoleId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line5',
					intro :'',
					position:"bottom",
					tooltipClass:"hide"
				},{
					element :'#inputChar',
					intro :'',
					position:"left",
					tooltipClass:"hide"
				},{
					element :'#addressBox',
					intro :'',
					position:"bottom",
					tooltipClass:"hide"
				},{
					element :'#line6',
					intro :'',
					position:"bottom"
				},{
					element :'#consoleId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line7',
					intro :'',
					position:"bottom",
					tooltipClass:"hide"
				},{
					element :'#panelBox',
					intro :'',
					position:"bottom",
					tooltipClass:"hide"
				},{
					element :'#line8',
					intro :'',
					position:"bottom"
				},{
					element :'#hiddenTotalEnterChar',
					intro :'',
					position:"left",
					tooltipClass:"hide"
				},{
					element :'#restartBtn',
					intro :'',
					position:"left"
			}]
	});
	
	intro.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "line3" :
			$("#panelBox").addClass("visibility-hidden");
			$('#addressId').addClass("visibility-hidden");
			break;
		case "line5" :
			$("#inputChar").val('');
			break;
		case "line8" :
			$("#hiddenTotalEnterChar").val('');
			break;
		case "inputChar" :
			if (intro._direction == "backward") {
				$(".arrowId").addClass("visibility-hidden");
				$(".byteId").addClass("visibility-hidden");
				$("#panelBodyUpperCaseId").text("");
				$("#inputChar").val('');
			}
			break;
		case "addressBox" :
			if (intro._currentStep == 4) {
				$("#panelBox").addClass("visibility-hidden");
				$('#addressId').addClass("visibility-hidden");
			} else if(intro._currentStep == 9) {
				$(".arrowId").addClass("visibility-hidden");
				$(".byteId").addClass("visibility-hidden");
			}
			break;
		case "consoleId" :
			if(intro._currentStep == 6) {
				if (intro._direction == "backward") {
					$("#hiddenTypingChar").addClass("hidden");
					$("#typeChar").addClass("visibility-hidden")
				}
			} else if(intro._currentStep == 11) {
				if (intro._direction == "backward") {
				$("#enterHiddenToltal").addClass("opacity00");
				}
			}
			
		break;
		case "panelBox":
			$("#panelBodyUpperCaseId").text($('#inputChar').val().toUpperCase());
		break;
		
		}
	});
	intro.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		// ********************** start ************back button logic
				
				if (intro._introItems[intro._currentStep]["tooltipClass"] == "hide") {
					intro._introItems[intro._currentStep]["animation"] = "repeat";
				}
				
				if (intro._introItems[intro._currentStep]["isCompleted"]) {
					if (intro._currentStep != 0) {
						$('.introjs-prevbutton').show();
					}
					$('.introjs-nextbutton').show();
					return;
				}
				
				if (intro._introItems[intro._currentStep]["animation"] != "repeat") {
					intro._introItems[intro._currentStep]["isCompleted"] = true;
				}
				
				// ********************** end ************back button logic
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "line1" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "It is a header file which contains standard <span class='ct-code-b-yellow'>input/output</span> library functions.", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "line2" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>main()</span> is the operating system call.<ul><li><span class='ct-code-b-yellow'>main()</span> is execution starting point for any c program.</li></ul>", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "line3" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>ch</span> is character variable which is of type char.<ul><li>It allocates 1 byte of memory to each element.</li></ul>", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "line4" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>printf()</span> is library function, uesd to display anything in double quotes on the output screen.", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "line5" :
			$("#hiddenTypingChar").removeClass("hidden");
			$("#totalBlinkText").addClass("hidden");
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$(".introjs-tooltip").removeClass("hide");
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>getchar()</span> is library function which reads only 1 char from keyboard.", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "line6" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>printf()</span> is library function, uesd to display anything in double quotes on the output screen.", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "line7" :
			$('.introjs-nextbutton').hide();
			  if (intro._direction == "forward") {
				$("#totalEnterChar").addClass("hidden");
				$("#upperLetter").append($('#inputChar').val().toUpperCase());
				$("#enterHiddenToltal").removeClass("hidden");
				$("#hiddenTotalEnterChar").removeClass("hidden");
				$('.introjs-helperLayer ').one('transitionend', function() {
					$(".introjs-tooltip").removeClass("hide");
					typing(".introjs-tooltiptext", "here, ch + 32 is <span class='ct-code-b-yellow'>ASCII</span> code value, which converts into lowercase.", 1, "",function() {
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				});
			  } else {
				  $('.introjs-helperLayer ').one('transitionend', function() {
				
							$("#panelBodyUpperCaseId").text($('#inputChar').val().toUpperCase());
							$(".introjs-tooltip").removeClass("hide");
							typing(".introjs-tooltiptext", "The value of uppercase is converted to lowercase and is stored in <span class='ct-code-b-yellow'>ch</span>.", 1, "",function() {
								$('.introjs-nextbutton,.introjs-prevbutton').show();
							});
						
					});
			  }
			break;
			
		case "line8" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#input-char").removeClass("opacity00");
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>putchar()</span> is library function which writes a string onto the output screen.", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "inputChar" :
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$(".introjs-tooltip").removeClass("hide")
				typing(".introjs-tooltiptext", "Enter any <span class='ct-code-b-yellow'>uppercase</span> letter.</br> <span id='errorText'></span>", 1, "",function() {
					$("#inputChar").focus();
					
					$('#inputChar').keyup(function(e) {
						$(".error-text").remove();
						var str = $("#inputChar").val();
						if ($("#inputChar").val().length < 1) {
							$('.introjs-nextbutton,.introjs-prevbutton').hide();
						} else {
							if (!/^[a-zA-Z]*$/g.test(this.value)) {
								$(".introjs-tooltiptext").append("<span id='errorText' class='ct-code-b-red error-text'>Enter only alphabets</span>");
								$('.introjs-nextbutton,.introjs-prevbutton').hide();
						    } else if(str === str.toLowerCase()) {
						    	$(".introjs-tooltiptext").append("<span id='errorText' class='ct-code-b-red error-text'>Enter only Uppercase letters</span>");
								$('.introjs-nextbutton,.introjs-prevbutton').hide();
						    } else {
						    	$('.introjs-nextbutton,.introjs-prevbutton').show();
						    }
						}
						
						if (e.which === 13) {
							e.preventDefault();
						}
					
					});
				});
			});
			break;
			
		case "addressBox" :
			$('.introjs-nextbutton').hide();
			if(intro._currentStep == 4) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#panelBox").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
						$("#panelBox").removeClass("animated zoomIn");
						$('#addressId').removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
							$('#addressId').removeClass("animated zoomIn")
							$(".introjs-tooltip").removeClass("hide");
							typing(".introjs-tooltiptext", "The variable <span class='ct-code-b-yellow'>ch</span> is stored in certain memory location. <ul><li>The address <span class='ct-code-b-yellow'>2046</span> is allocated to it.</li></ul>", 1, "",function() {
								$('.introjs-nextbutton,.introjs-prevbutton').show();
							});
						});
					});
				});
			} else if(intro._currentStep == 9) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					
				//	$("#panelBox").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
						$('.panel-uppercase').text($('#inputChar').val().toUpperCase()).fadeIn();
						//$('#addressId').removeClass("visibility-hidden").fadeIn();
						$(".arrowId").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
							$(".arrowId").removeClass("animated zoomIn");
							$(".byteId").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
								$(".byteId").removeClass("animated zoomIn");
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext", "Arrows shows that : <ul><li><span class='ct-code-b-yellow'>ch</span> is a character variable.</li><li>ch allocated by 1 byte and it stores the <span class='ct-code-b-yellow'>ASCII</span> value of character <span class='ct-code-b-yellow'>" + $('#inputChar').val() + "</span>.</li><li><span class='ct-code-b-yellow'>2046</span> is the address.</li></ul>", 1, "",function() {
									$('.introjs-nextbutton,.introjs-prevbutton').show();
								});
							});
						});
				//	});
				});
			}
			break;
			
		case "panelBox" :
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
		
			$('.introjs-helperLayer ').one('transitionend', function() {
			
				t1.to("#panelBodyUpperCaseId", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
					$("#panelBodyUpperCaseId").text($('#inputChar').val().toLowerCase());
				}});
				
				t1.to("#panelBodyUpperCaseId", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
					$(".introjs-tooltip").removeClass("hide");
					typing(".introjs-tooltiptext", "The value of uppercase is converted to lowercase and is stored in <span class='ct-code-b-yellow'>ch</span>.", 1, "",function() {
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				}});
				
			});
					
			break;
			
		case "consoleId" :
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			if(intro._currentStep == 6) {
				setTimeout(function() {
					if (intro._direction == "forward") {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#typeChar").removeClass("visibility-hidden")
					typing("#typeChar", "<span id='totalBlinkText'>Enter an uppercase letter : <span id='blinkChar'><input id='in' maxlength='0' tabindex='0' value=''/></span></span>", 1, "",function() {
						//$("#in").focus();
					       setTimeout(function() {	
							intro.nextStep()
							}, 900);
							});
						});
					} else {
						intro.previousStep()
					}
				}, 500);
			} else if(intro._currentStep == 11) {
				setTimeout(function() {
		
				if (intro._direction == "forward") {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#enterHiddenToltal").removeClass("opacity00");
					//$(".introjs-tooltip").removeClass("hide");
					typing("#totalEnterChar", "The lowercase letter of "+ $('#inputChar').val().toUpperCase() + " is : <span id='putValueId'><input id='lowerValue' maxlength='0' tabindex='0' value=''/></span> ", 1, "",function() {
						$("#lowerValue").attr('disabled', 'disabled');
							setTimeout(function() {
								intro.nextStep();
							}, 1000);
					});
				});
					} else {
						intro.previousStep()
					}
				}, 500);
			} 
			break;
			
		case "hiddenTotalEnterChar" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				$(".introjs-tooltip").removeClass("hide");
				$("#hiddenTotalEnterChar").attr("disabled", true);
				$("#hiddenTotalEnterChar").val($('#inputChar').val().toLowerCase()).fadeIn('slow');
				typing(".introjs-tooltiptext", "here, the given character is converted and printed on to the output screen.", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
		break;
			
		case "restartBtn" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$(".introjs-tooltip").css({"min-width": "115px"});
				$("#restartBtn").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Click to restart.", 1, "",function() {
					
				});
			});
			break;
		}
	});
	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	
	typing(".introjs-tooltiptext", "It is a sample program to convert upper to lowercase letters.", 1, "",function() {
		$('.introjs-nextbutton').show();
	});
}

function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		typingCallbackFunction();
		intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
	});
}