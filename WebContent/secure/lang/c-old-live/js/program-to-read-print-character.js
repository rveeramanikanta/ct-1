var programToReadPrintCharacterReady = function() {
$("#typewritingId").addClass('hidden');
	
	$('.input-char').keydown(function(e) {
		console.log("keydown is pressed.......");
		// 13: EnterKey
		if (e.which === 13) {
			e.preventDefault();
		}
		$('.introjs-nextbutton').show();
		var max = $(this).attr("maxlength");
		// 8:BackSpace, 46:Delete, 37: LeftArrow, 39:RightArrow
		if ((e.which != 8) && (e.which != 46) && (e.which != 37) && (e.which != 39) &&($(this).text().length + 1) > max) {
			console.log("keydown is pressed.......");
			$(".introjs-tooltiptext").append("<span id='errorText'>occupies 1 byte</span>");
		    e.preventDefault();
		}  else {
			$('#inputChar').text("");
		}
	});
	
	$("#restartBtn").click(function() {
		location.reload();
	});
	
	console.log();
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
						position:"bottom"
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
						position:"bottom"
					},{
						element :'#inputChar',
						intro :'',
						position:"bottom"
					},{
						element :'#panelBox',
						intro :'',
						position:"bottom"
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
						position:"bottom"
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
	
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "line1" :
			$('.introjs-nextbutton').hide();
		//	$("#preBody").removeClass("introjs-showElement introjs-relativePosition introjs-fixParent");
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "It is a header file which contains standard input/output library functions.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line2" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>main()</span> is the operating system call.<ul><li><span class='ct-code-b-yellow'>main()</span> is execution starting point for any C program.</li></ul>", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line3" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>ch</span> is character varaiable which is of type char.<ul><li>It allocates 1 byte of memory to each element.</li></ul>", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line4" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>printf()</span> is a library function, used to display the message specified with in double quotes on the output screen.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line5" :
			$("#hiddenTypingChar").removeClass("hidden");
			$("#totalBlinkText").addClass("hidden");
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>getchar()</span> is library function which reads only 1 char from keyboard.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line6" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>printf()</span> is a library function, used to display the message specified with in double quotes on the output screen.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line7" :
			$('.introjs-nextbutton').hide();
			$("#totalEnterChar").addClass("hidden");
			$("#enterHiddenToltal").removeClass("hidden");
			$("#hiddenTotalEnterChar").removeClass("hidden");
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>putchar()</span> is library function which writes a string onto the output screen.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "inputChar" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Enter any character. <span id='errorText'></span>", 10, "",function() {
					$("#inputChar").focus();
					$('.input-char').keydown(function(e) {
						console.log("keydown is pressed.......");
						// 13: EnterKey
						if (e.which === 13) {
							e.preventDefault();
						}
						$('.introjs-nextbutton').show();
					});
				});
			});
			break;
			
		case "addressBox" :
			$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#panelBox").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
						$('#addressId').removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
							typing(".introjs-tooltiptext", "The variable <span class='ct-code-b-yellow'>ch</span> is stored in certain memory location.<ul><li>The address <span class='ct-code-b-yellow'>1024</span> is allocated to it.</li></ul>", 10, "",function() {
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
			break;
			
		case "panelBox" :
			$('.introjs-nextbutton').hide();
			$('.panel-body').text($('#inputChar').val());
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#panelBody").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
						$(".arrowId").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
							$(".byteId").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
								typing(".introjs-tooltiptext", "Arrows shows that : <ul><li><span class='ct-code-b-yellow'>ch</span> is a character varaible.</li><li>ch allocated by 1 byte and it stores the <span class='ct-code-b-yellow'>ASCII</span> value of character <span class='ct-code-b-yellow'>" + $('#inputChar').val() + "</span>.</li><li><span class='ct-code-b-yellow'>1024</span> is the address.</li></ul>", 50, "",function() {
									$('.introjs-nextbutton').show();
								});
							});
					});
				});
			});
			break;
			
		case "consoleId" :
			$('.introjs-nextbutton').hide();
			if(intro._currentStep == 6) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing("#typeChar", "<span id='totalBlinkText'>Enter a Character : <span id='blinkChar'><input id='in' maxlength='0' tabindex='0' value=''/></span></span>", 10, "",function() {
						//$("#in").focus();
							setTimeout(function() {
								intro.nextStep();
							}, 1000);
					});
				});
			} else if(intro._currentStep == 11) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing("#totalEnterChar", "The entered character is : <span><input id='putValueId' maxlength='0' tabindex='0' value=''/></span> ", 10, "",function() {
						//$("#putValueId").focus();
							setTimeout(function() {
								intro.nextStep();
							}, 1000);
					});
				});
			}
			break;
			
		case "hiddenTotalEnterChar" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#hiddenTotalEnterChar").val($('#inputChar').val()).fadeIn('slow');
				setTimeout(function() {
					intro.nextStep();
				}, 1000);
			});
			break;
			
		case "restartBtn" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#restartBtn").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Click to restart.", 10, "",function() {
					
				});
			});
			break;
		}
	});
	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	
	typing(".introjs-tooltiptext", "It is a sample program for reading and printing character.", 10, "",function() {
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
	});
}