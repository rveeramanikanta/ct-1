var readPrintStringUsingGetsPutsReady = function() {
	$("#restartBtn").click(function() {
		$("#inputChar").val('');
		$("#hiddenTotalEnterChar").val('');
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
						element :'#line2',
						intro :'',
						position:"bottom"
					},{
						element :'#addressBox',
						intro :'',
						position:"bottom"
					},{
						element :'#line3',
						intro :'',
						tooltipClass: "hide",
						position:"bottom"
					},{
						element :'#consoleId',
						intro :'',
						position:"bottom"
					},{
						element :'#line4',
						intro :'',
						position:"bottom"
					},{
						element :'#addressBox',
						intro :'',
						position:"left"
					},{
						element :'#line5',
						intro :'',
						tooltipClass: "hide",
						position:"bottom"
					},{
						element :'#consoleId',
						intro :'',
						tooltipClass: "hide",
						position:"bottom"
					},{
						element :'#line6',
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
						position:"right"
					}]
	});
	
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
			
		case "line2" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<ul><li>Here, ch is the <span class='ct-code-b-yellow'>character array varaiable</span> which contains 20 characters.</li><li>Each element occupies <span class='ct-code-b-yellow'>1</span> byte(8 bits) in the memory.</li></ul> ", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "addressBox" :
			$('.introjs-nextbutton').hide();
			if(intro._currentStep == 2) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#addressBox").removeClass("opacity00");
					TweenMax.to("#tableId", 0.2, {opacity: 1, onComplete: function() {
						typing(".introjs-tooltiptext", "20 bytes are allocated to the array of the variable <span class='ct-code-b-yellow'>ch</span>.", 10, "",function() {
							$('.introjs-nextbutton').show();
						});
					}});
				});
			} else if(intro._currentStep == 6) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#tableRowId").removeClass("opacity00");
					intro.refresh();
					$(".td-css").addClass("ct-code-b-green");
					TweenMax.to(".td-css", 0.2, {opacity: 1, onComplete: function() {
						typing(".introjs-tooltiptext", "The given string is stored in the array and delimiter <span class='ct-code-b-yellow'>\\0</span> (or) <span class='ct-code-b-yellow'>\\n</span> is placed at the end of the string by the system.", 5, "",function() {
							$('.introjs-nextbutton').show();
						});
					}});
				});
			}
			break;
			
		case "line3" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				setTimeout(function() {
					intro.nextStep();
				},500);
			});
			break;
			
		case "line4" :
			$("#hiddenTypingChar").removeClass("hidden");
			$("#totalBlinkText").addClass("hidden");
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<ul><li><span class='ct-code-b-yellow'>gets()</span> is library function it reads a string from the keyboard. </li><li><span class='ct-code-b-yellow'>gets()</span> function reads <span class='ct-code-b-yellow'>whitespace</span> characters.</li></ul>", 10, "",function() {
					var result = $("#inputChar").val();
					for(var i = 0; i <= result.length; i++) {
						if (result.length >= 0 && result.length < 20) {
							if (i == result.length) {
								$("table tr:nth-child(2) td:eq("+ (i+1) + ")").text("\\0");
								console.log("i am in if...")
							} else {
								$("table tr:nth-child(2) td:eq("+ (i+1) +")").text(result[i]);
							}
						}  else {
							if (i == 19) {
								console.log("Hello" + result[i]);
								$("table tr:nth-child(2) td:eq("+ (i+1) + ")").text("\\0");
								break;
							} else {
								console.log("I am in else" + result[i]);
								$("table tr:nth-child(2) td:eq("+ (i+1) +")").text(result[i]);
							}
						} 
					}
					$('.introjs-nextbutton').show();
				});
			});
			break;
		
		case "line5" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				setTimeout(function() {
					intro.nextStep();
				},500);
			});
			break;
			
		case "line6" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>puts()</span> is library function.<br/> It displays a string onto the output screen.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "consoleId" :
			$('.introjs-nextbutton').hide();
			if(intro._currentStep == 4) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#consoleId").removeClass("opacity00");
					typing("#typeChar", "<span id='totalBlinkText'>Enter a String : <span id='blinkChar'><input id='in' maxlength='0' tabindex='0' value=''/></span></span>", 10, "",function() {
						$("#hiddenTypingChar").removeClass("hidden");
						$("#totalBlinkText").addClass("hidden");
						$("#inputChar").focus();
						typing(".introjs-tooltiptext", "Enter a string. ", 10, "",function() {
							$('#inputChar').keyup(function(e) {
								if ($("#inputChar").val().length < 1) {
									$('.introjs-nextbutton').hide();
								} else {
									$('.introjs-nextbutton').show();
								}
							});
						});
					});
				});
				
			} else if(intro._currentStep == 8) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing("#totalEnterChar", "The entered string is : <span id='putValueId'></span>", 10, "",function() {
						$("#totalEnterChar").addClass("hidden");
						$("#enterHiddenTotal").removeClass("hidden");
						setTimeout(function() {
							intro.nextStep();
						},500);
					});
				});
			}
			break;
			
		case "hiddenTotalEnterChar" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var totalLength = $("#tableRowId > td:not(:first)").text().length;
				var finalResult = $("#tableRowId > td:not(:first)").text().substring(0,totalLength-2);
				/* var totalLength = $("#tableRowId td").text().length
				var finalResult = $("#tableRowId td:nth-child(-n+" + (totalLength-1) +")").text(); */
				$("#hiddenTotalEnterChar").val(finalResult);
				
			//	$("#hiddenTotalEnterChar").val($("#inputChar").val());
				setTimeout(function() {
					intro.nextStep();
				},500);
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
	
	typing(".introjs-tooltiptext", "Let us see a sample program on the usage of the functions <span class='ct-code-b-yellow'>gets()</span> and <span class='ct-code-b-yellow'>puts()</span>.", 10, "",function() {
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