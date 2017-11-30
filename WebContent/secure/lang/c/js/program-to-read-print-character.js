var programToReadPrintCharacterReady = function() {
$("#typewritingId").addClass('hidden');
	
	$('.input-char').keydown(function(e) {
		// 13: EnterKey
		if (e.which === 13) {
			e.preventDefault();
		}
		$('.introjs-nextbutton,.introjs-prevbutton').show();
		var max = $(this).attr("maxlength");
		// 8:BackSpace, 46:Delete, 37: LeftArrow, 39:RightArrow
		if ((e.which != 8) && (e.which != 46) && (e.which != 37) && (e.which != 39) &&($(this).text().length + 1) > max) {
			$(".introjs-tooltiptext").append("<span id='errorText'>occupies 1 byte</span>");
		    e.preventDefault();
		}  else {
			$('#inputChar').text("");
		}
	});
	
	$("#restartBtn").click(function() {
		location.reload();
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
						position:"bottom",
						//tooltipClass:"hide"
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
						position:"bottom",
						tooltipClass:"hide"
					},{
						element :'#panelBox',
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
						element :'#hiddenTotalEnterChar',
						intro :'',
						tooltipClass: "hide",
						position:"bottom"
					},{
						element :'#restartBtn',
						intro :'',
						position:"left"
					}]
	});
	intro.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "line1" :
			
			break;
			
		case "line2" :
			
			break;
			
		case "line3" :
			$("#panelBox").addClass("visibility-hidden");
			$('#addressId').addClass("visibility-hidden");

			break;
			
		case "line4" :
			
			
			break;
			
		case "line5" :
			$("#inputChar").val('');
			break;
			
		case "line6" :
			
			break;
			
		case "line7" :
			
			break;
			
		case "inputChar" :
			$("#inputChar").val('');
			if (intro._direction == "backward") {
			//$("#panelBox").addClass("visibility-hidden");
			$(".arrowId").addClass("visibility-hidden");
			$(".byteId").addClass("visibility-hidden");
			$("#panelBody").text("").addClass('visibility-hidden');
			}
			break;
			
		case "addressBox" :
			
			break;
			
		case "panelBox" :
			$(".arrowId").addClass("visibility-hidden");
			$(".byteId").addClass("visibility-hidden");
			$("#panelBody").addClass('visibility-hidden');
			break;
			
		case "consoleId" :
			if(intro._currentStep == 6) {
				if (intro._direction == "backward") {
				$("#hiddenTypingChar").addClass("hidden");
				}
			} else if(intro._currentStep == 11) {
				if (intro._direction == "backward") {
				$("#enterHiddenToltal").addClass("opacity00");
				}
			}
			break;
			
		case "hiddenTotalEnterChar" :
			
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
		//	$("#preBody").removeClass("introjs-showElement introjs-relativePosition introjs-fixParent");
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "It is a header file which contains standard input/output library functions.", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "line2" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>main()</span> is the operating system call.<ul><li><span class='ct-code-b-yellow'>main()</span> is execution starting point for any C program.</li></ul>", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "line3" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>ch</span> is character varaiable which is of type char.<ul><li>It allocates 1 byte of memory to each element.</li></ul>", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "line4" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>printf()</span> is a library function, used to display the message specified with in double quotes on the output screen.", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "line5" :
			$("#hiddenTypingChar").removeClass("hidden");
			$("#totalBlinkText").addClass("hidden");
			$('.introjs-nextbutton,.intro-prevbutton').hide();
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
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>printf()</span> is a library function, used to display the message specified with in double quotes on the output screen.", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "line7" :
			$('.introjs-nextbutton').hide();
			$("#totalEnterChar").addClass("hidden");
			$("#enterHiddenToltal").removeClass("hidden");
			$("#hiddenTotalEnterChar").removeClass("hidden");
			$('.introjs-helperLayer ').one('transitionend', function() {
				$(".introjs-tooltip").removeClass("hide");
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>putchar()</span> is library function which writes a string onto the output screen.", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "inputChar" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$(".introjs-tooltip").removeClass("hide");
				typing(".introjs-tooltiptext", "Enter any character. <span id='errorText'></span>", 1, "",function() {
					$("#inputChar").focus();
					$('.input-char').keydown(function(e) {
						// 13: EnterKey
						if (e.which === 13) {
							e.preventDefault();
						}
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				});
			});
			break;
			
		case "addressBox" :
			$('.introjs-nextbutton').hide();
			/*setTimeout(function() {
			if (intro._direction == "forward") {*/
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#panelBox").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
						$("#panelBox").removeClass("animated zoomIn");
						$('#addressId').removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
							$('#addressId').removeClass("animated zoomIn")
							$(".introjs-tooltip").removeClass("hide");
							typing(".introjs-tooltiptext", "The variable <span class='ct-code-b-yellow'>ch</span> is stored in certain memory location.<ul><li>The address <span class='ct-code-b-yellow'>5206</span> is allocated to it.</li></ul>", 1, "",function() {
								$('.introjs-nextbutton,.introjs-prevbutton').show();
							});
						});
					});
				});
			/*} else {
				intro.previousStep();
			}
			}, 500);*/
			break;
			
		case "panelBox" :
			$('.introjs-nextbutton').hide();
			$('.panel-body').text($('#inputChar').val());
			$('.introjs-helperLayer ').one('transitionend', function() {
				//$(".introjs-tooltip").removeClass("hide");
				$("#panelBox").removeClass("visibility-hidden");
				$("#panelBody").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
					$("#panelBody").removeClass("animated zoomIn");
						$(".arrowId").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
							$(".arrowId").removeClass("animated zoomIn");
							$(".byteId").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
								$(".byteId").removeClass("animated zoomIn");
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext", "Arrows shows that : <ul><li><span class='ct-code-b-yellow'>ch</span> is a character varaible.</li><li>ch allocated by 1 byte and it stores the <span class='ct-code-b-yellow'>ASCII</span> value of character <span class='ct-code-b-yellow'>" + $('#inputChar').val() + "</span>.</li><li><span class='ct-code-b-yellow'>5206</span> is the address.</li></ul>", 50, "",function() {
									$('.introjs-nextbutton,.introjs-prevbutton').show();
								});
							});
					});
				});
			});
			break;
			
		case "consoleId" :
			$('.introjs-nextbutton').hide();
			if(intro._currentStep == 6) {
						setTimeout(function() {
							if (intro._direction=="forward") {
								$('.introjs-helperLayer ').one('transitionend', function() {
									//$("#hiddenTypingChar").removeClass("hidden");
									typing("#typeChar", "<span id='totalBlinkText'>Enter a Character : <span id='blinkChar'><input id='in' maxlength='0' tabindex='0' value=''/></span></span>", 1, "",function() {
										//$("#in").focus();
									setTimeout(function() {	
									intro.nextStep()
									}, 500);
									});
								});
							} else {
								intro.previousStep()
							}
						}, 500);
					
			
			} else if(intro._currentStep == 11) {
				$('.introjs-helperLayer ').one('transitionend', function() {
						//$("#putValueId").focus();
						setTimeout(function() {
							if (intro._direction=="forward") {
								$("#enterHiddenToltal").removeClass("opacity00");
								typing("#totalEnterChar", "The entered character is : <span><input id='putValueId' maxlength='0' tabindex='0' value=''/></span> ", 1, "",function() {
									setTimeout(function(){
									intro.nextStep()
									}, 200);
								});
							} else {
								intro.previousStep()
							}
						}, 500);
					});
				
			}
			break;
			
		case "hiddenTotalEnterChar" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#hiddenTotalEnterChar").val($('#inputChar').val()).fadeIn('slow');
				setTimeout(function() {
					if (intro._direction=="forward") {
							intro.nextStep()
					} else {
						intro.previousStep()
					}
				}, 500);
			});
			break;
			
		case "restartBtn" :
			$('.introjs-tooltip').css('min-width', '125px');
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
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
	
	typing(".introjs-tooltiptext", "It is a sample program for reading and printing character.", 1, "",function() {
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