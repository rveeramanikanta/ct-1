var readPrintStringUsingScanfPrintfReady = function() {
	$("#restartBtn").click(function() {
		$("#inputChar").attr("disabled", false);
		$("#hiddenTotalEnterChar").attr("disabled", false);
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
						element :'#line1',
						intro :'',
						position:"bottom"
					},{
						element :'#line2',
						intro :'',
						position:"bottom"
					},{
						element :'#addressBox',
						intro :'',
						tooltipClass: "hide",
						position:"bottom"
					},{
						element :'#line3',
						intro :'',
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
						element :'#tableId',
						intro :'',
						position:"left"
					},{
						element :'#line5',
						intro :'',
						position:"bottom"
					},{
						element :'#consoleId',
						intro :'',
						tooltipClass: "hide",
						position:"bottom"
					},{
						element :'#hiddenTotalEnterChar',
						intro :'',
						position:"bottom"
					},{
						element :'#restartBtn',
						intro :'',
						position:"bottom"
					}]
	});
	
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "line1" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>main()</span> is the operating system call.<ul><li><span class='ct-code-b-yellow'>main()</span> is execution starting point for any <span class='ct-code-b-yellow'>C</span> program.</li></ul>", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line2" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>ch</span> is a <span class='ct-code-b-yellow'>character array variable</span> with 20 elements.<ul><li>It allocates <span class='ct-code-b-yellow'>1</span> byte of memory to each element of the character array variable.</li><li>It stores <span class='ct-code-b-yellow'>1</span> character in each element of the character array variable.</li></ul> ", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "addressBox" :
			$('.introjs-nextbutton').hide();
			$("#addressBox").removeClass("opacity00");
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#tableId").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
					setTimeout(function() {
						intro.nextStep();
					}, 1000);
				});
			});
			break;
			
			
		case "line3" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>printf()</span> is library function, used to display anything in double quotes on the output screen.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line4" :
			$("#hiddenTypingChar").removeClass("hidden");
			$("#totalBlinkText").addClass("hidden");
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>scanf()</span> is a library function, <span class='ct-code-b-yellow'>%s</span> scan a Character String and terminates at whitespace. The <span class='ct-code-b-yellow'>null</span> character stored at the end of the string. ", 10, "",function() {
					var result = $("#inputChar").val();
					var finalIndex = result.indexOf(" ");
					console.log("final index -----------" + finalIndex);
					if (finalIndex != -1) {
						toFillCharacterArray(finalIndex, result, finalIndex);
					} else {
						if (result.length >= 0 && result.length < 20) {
							toFillCharacterArray(result.length, result, result.length);
						} else {
							toFillCharacterArray(result.length, result, 19);
						}
					}
					console.log("final result = " + result);
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "tableId" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#tableRowId").removeClass("hidden");
				intro.refresh();
				setTimeout(function() {
					$(".td-css").removeClass("visibility-hidden").addClass("animated zoomIn ct-code-b-green").one('animationend', function() {
						$("#baseAddresssId").removeClass("visibility-hidden").addClass("animated zoomIn ct-code-b-green").one('animationend', function() {
							typing(".introjs-tooltiptext", "The entered string is allocated in a memory of an array and <span class='ct-code-b-green'>\0</span> is append at the end of the string.", 10, "", function() {
								$('.introjs-nextbutton').show();
							});
						});
					});
				}, 1000);
			});
			break;
			
		case "line5" :
			$('.introjs-nextbutton').hide();
			$("#inputChar").attr("disabled", true);
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>printf()</span> is library function, used to display anything in double quotes on the output screen.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "consoleId" :
			$('.introjs-nextbutton').hide();
			$("#consoleId").removeClass("opacity00");
			if (intro._currentStep == 5) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing("#typeChar", "<span id='totalBlinkText'>Enter a String : <span id='blinkChar'><input id='in' maxlength='0' tabindex='0' value=''/></span></span>", 10, "",function() {
						$("#hiddenTypingChar").removeClass("hidden");
						$("#totalBlinkText").addClass("hidden");
						$("#inputChar").focus();
						typing(".introjs-tooltiptext", "Enter the string. ", 10, "", function() {
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
				
			} else if (intro._currentStep == 9) {
				$(".introjs-tooltip").hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing("#totalEnterChar", "The entered string is : <span id='putValueId'></span>", 10, "", function() {
						$("#totalEnterChar").addClass("hidden");
						$("#enterHiddenTotal").removeClass("hidden");
						setTimeout(function() {
							intro.nextStep();
						},1000);
					});
				});
			}
			break;
			
		case "hiddenTotalEnterChar" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var totalLength = $("#tableRowId td").text().length
				var finalResult = $("#tableRowId td:nth-child(-n+" + (totalLength-1) +")").text();
				$("#hiddenTotalEnterChar").val(finalResult);
				typing(".introjs-tooltiptext", "The entered string is printed.", 10, "", function() {
					$("#hiddenTotalEnterChar").attr("disabled", true);
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "restartBtn" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#restartBtn").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Click to restart.", 10, "", function() {
																						
				});
			});
			break;
		}
	});
	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	
	typing(".introjs-tooltiptext", "Let us learn execution of sample program for reading (or) printing a string using <span class='ct-code-b-yellow'>gets()</span> and <span class='ct-code-b-yellow'>puts()</span>.", 10, "",function() {
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

function toFillCharacterArray(arraySize, resultString, finalIndexVal) {
	console.log("arraySize = " + arraySize + " resultString = " + resultString + " finalIndexVal = " + finalIndexVal);
	for(var i = 0; i <= arraySize; i++) {
		if(i == finalIndexVal) {
			$("table tr:nth-child(2) td:eq("+ (i+1) +")").addClass("table-bordered").text("\\0");
			$("table tr:nth-child(2)").addClass("table-bordered");
		} else if(i < arraySize) {
			$("table tr:nth-child(2) td:eq("+ (i+1) +")").addClass("table-bordered").text(resultString[i]);
			$("table tr:nth-child(2)").addClass("table-bordered");
		}
	}
}