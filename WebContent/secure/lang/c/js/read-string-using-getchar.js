var readStringUsingGetcharReady = function() {
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
						element :'#titleName',
						intro :'',
						position:"right"
					},{
						element :'#preBody',
						intro :'',
						tooltipClass: "hide",
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
						position:"bottom"
					},{
						element :'#line3',
						intro :'',
						position:"bottom"
					},{
						element :'#panelIntBox',
						intro :'',
						tooltipClass: "hide",
						position:"bottom"
					},{
						element :'#line4',
						intro :'',
						position:"bottom"
					},{
						element :'#consoleId',
						intro :'',
						position:"bottom"
					},{
						element :'#line5',
						intro :'',
						position:"bottom"
					},{
						element :'#tableId',
						intro :'',
						position:"left"
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
						element :'#line8',
						intro :'',
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
		
		case "preBody" :
			$('.introjs-nextbutton').hide();
			$("#preBody").removeClass("opacity00");
			$('.introjs-helperLayer ').one('transitionend', function() {
				setTimeout(function() {
					intro.nextStep();
				}, 1000);
			});
			break;
			
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
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>ch</span> is a character array varaiable with 20 elements.<ul><li>It allocates 1 <span class='ct-code-b-yellow'>byte</span> of memory to each element of the character array variable.</li><li>It stores 1 <span class='ct-code-b-yellow'>character</span> in each element of the character array variable.</li></ul> ", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "addressBox" :
			$('.introjs-nextbutton').hide();
			$("#addressBox").removeClass("opacity00");
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#tableId").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
					typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>ch</span> is stored 20 bytes. ", 10, "",function() {
						$('.introjs-nextbutton').show();
					});
				});
			});
			break;
			
		case "line3" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>int</span> is a datatype, where zero is assigned to a variable i.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "panelIntBox" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#panelIntBox").removeClass("visibility-hidden").addClass("animated zoomIn ct-code-b-green").one('animationend', function() {
					$("#iValue").removeClass("visibility-hidden").addClass("animated zoomIn ct-code-b-green").one('animationend', function() {
						setTimeout(function(){
							intro.nextStep();
						},1000);
					});
				});
			});
			break;
			
		case "line4" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>printf()</span> is library function, uesd to display anything in double quotes on the output screen.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line6" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "this line shows that <span class='ct-code-b-yellow'>\\0</span> is appended at the end of the entered string.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line8" :
			$('.introjs-nextbutton').hide();
			$("#hiddenTotalEnterChar").attr("disabled", true);
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>puts()</span> is uesd to write the string.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line5" :
			$("#hiddenTypingChar").removeClass("hidden");
			$("#totalBlinkText").addClass("hidden");
			$('.introjs-nextbutton').hide();
			$("#inputChar").attr("disabled", true);
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "while loop checks and increments the string. whenever the string encounter <span class='ct-code-b-yellow'>#</span> it will stop incrementing and comes out of loop.", 10, "",function() {
					var result = $("#inputChar").val();
					var hashIndex;
					if(result.length > 20) {
						if(result.substring(0, 20).includes("#")) {
							hashIndex = result.substring(0, 20).indexOf("#");
							result = result.substring(0, hashIndex + 1);
						} else {
							result = result.substring(0, 20);
						}
					} else {
						if(result.includes("#")) {
							hashIndex = result.indexOf("#");
							result = result.substring(0, hashIndex + 1);
						} else {
							result = result;
						}
					}
					
					for(var i = 0; i < result.length; i++) {
						if(i == result.length-1) {
							if(result.includes("#")) {
								$("table tr:nth-child(2) td:eq("+ (i+1) + ")").addClass("table-bordered").text("\\0");
								$("table tr:nth-child(2)").addClass("table-bordered");
							} else {
								if(result.length == 20) {
									$("table tr:nth-child(2) td:eq("+ (i+1) + ")").addClass("table-bordered").text("\\0");
									$("table tr:nth-child(2)").addClass("table-bordered");
								} else {
									$("table tr:nth-child(2) td:eq("+ (i+2) + ")").addClass("table-bordered").text("\\0");
									$("table tr:nth-child(2) td:eq("+ (i+1) +")").addClass("table-bordered").text(result[i]);
									$("table tr:nth-child(2)").addClass("table-bordered");
								}
								
							}
						} else {
							$("table tr:nth-child(2) td:eq("+ (i+1) +")").addClass("table-bordered").text(result[i]);
							$("table tr:nth-child(2)").addClass("table-bordered");
						}
					}
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
							typing(".introjs-tooltiptext", "The entered string is stored in a array and <span class='ct-code-b-yellow'>\\0</span> is append at the end of the string.", 10, "",function() {
								$('.introjs-nextbutton').show();
							});
						});
					});
				}, 1000);
			});
			break;
			
		case "consoleId" :
			$('.introjs-nextbutton').hide();
			$("#consoleId").removeClass("opacity00");
			if(intro._currentStep == 8) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing("#typeChar", "<span id='totalBlinkText'>Enter a String : <span id='blinkChar'><input id='in' maxlength='0' tabindex='0' value=''/></span></span>", 10, "",function() {
						$("#hiddenTypingChar").removeClass("hidden");
						$("#totalBlinkText").addClass("hidden");
						$("#inputChar").focus();
						typing(".introjs-tooltiptext", "Enter a String.<br/><span id='errText' class='ct-code-b-red'></span> ", 10, "",function() {
							$("#inputChar").keyup(function() {
								$("#errText").text("");
							//	if ($("#inputChar").val().length == '') {
								if ($("#inputChar").val().includes("#")) {
									$('.introjs-nextbutton').show();
								} else {
									$("#errText").append("please enter # symbol.");
									$('.introjs-nextbutton').hide();
								}
							});
						});
					});
				});
				
			} else if(intro._currentStep == 12) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#totalEnterChar").addClass("hidden");
					$("#enterHiddenTotal").removeClass("hidden");
					setTimeout(function() {
						intro.nextStep();
					},1000);
				});
			}
			break;
			
		case "hiddenTotalEnterChar" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var totalLength = $("#tableRowId td").text().length
				var finalResult = $("#tableRowId td:nth-child(-n+" + (totalLength-1) +")").text();				
				$("#hiddenTotalEnterChar").val(finalResult);
				typing(".introjs-tooltiptext", "The entered string is printed on to the output screen.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
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
	
	typing(".introjs-tooltiptext", "Let us learn execution of sample program for reading (or) printing a string using <span class='ct-code-b-yellow'>getchar()</span> and <span class='ct-code-b-yellow'>puts()</span>.", 10, "",function() {
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