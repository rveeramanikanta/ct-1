var readPrintStringUsingScanfPrintfReady = function() {
	$("#restartBtn").click(function() {
		$("#inputChar").attr("disabled", false);
		$("#hiddenTotalEnterChar").attr("disabled", false);
		$("#inputChar").val('');
		$("#hiddenTotalEnterChar").val('');
		location.reload();
	});
	
	introjs= introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
			steps : [{
						element :'#preBody',
						intro :'',
						position:"bottom",
					},{
						element :'#line1',
						intro :'',
						tooltipClass: "hide",
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
						tooltipClass: "hide",
						position:"bottom"
							
					},{
						element :'#line4',
						intro :'',
						position:"bottom"
					},{
						element :'#addressBox',
						intro :'',
						position:"left",
						tooltipClass: "hide"
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
						tooltipClass: "hide",
					},{
						element :'#line6',
						intro :'',
						position:"bottom"
					},{
						element :'#restartBtn',
						intro :'',
						position:"bottom"
					}]
	});
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "line2" :
			$("#addressBox").addClass("opacity00");
			$("#tableId").removeAttr('style');
			break;
			
		case "addressBox" :
			$('.introjs-nextbutton').hide();
			if(introjs._currentStep == 3) {
				$("#addressBox").addClass("opacity00");
				$("#tableId").removeAttr('style'); 
			} else if(introjs._currentStep == 7) {
				TweenMax.to(".td-css, #baseAddresssId", 0 , {opacity: 0});
			}
			break;
			
		case "line3" :
			$("#hiddenTypingChar").addClass("hidden");
			$("#inputChar").val("");
			$("#consoleId").addClass("opacity00");
			$("#totalBlinkText").addClass("hidden");
		break;
			
		case "line4" :
			$('.filled').text('');
			$('.filled').removeClass('filled');
			$('#baseAddresssId').css("opacity", "0");
		break;
		
		case "line5" :
			$("#totalEnterChar").addClass("hidden");
			$("#enterHiddenTotal").addClass("hidden");
		break;
			
		case "line6" :
			
		break;
			
		case "consoleId" :
			if(introjs._currentStep == 5) {
				$("#hiddenTypingChar").addClass("hidden");
				$("#inputChar").val("");
				$("#consoleId").addClass("opacity00");
				$("#totalBlinkText").addClass("hidden");
			} else if(introjs._currentStep == 9) {
				
			}
			break;
		}
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
		
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			
			if (introjs._currentStep != 0 && introjs._currentStep != 1) {
				$('.introjs-prevbutton').show();
			}

			$('.introjs-nextbutton').show();
			return;
		}
		
		if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
			introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		}
		var elementId = targetElement.id;
		switch (elementId) {
		case "preBody":
			//$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Let us learn execution of sample program for reading " +
						"(or) printing a string using <span class='ct-code-b-yellow'>scanf()</span> and " +
						"<span class='ct-code-b-yellow'>printf()</span>.", 10, "",function() {
					$('.introjs-nextbutton').show();
					$(".introjs-prevbutton").hide();
				});
			//});
			break;
		case "line1" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>main()</span> is the operating " +
						"system call.<ul><li><span class='ct-code-b-yellow'>main()</span> is execution starting " +
						"point for any <span class='ct-code-b-yellow'>C</span> program.</li></ul>", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "line2" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>ch</span> is a " +
						"<span class='ct-code-b-yellow'>character array variable</span> with 20 elements." +
						"<ul><li>It allocates <span class='ct-code-b-yellow'>1</span> byte of memory to " +
						"each element of the character array variable.</li>" +
						"<li>It stores <span class='ct-code-b-yellow'>1</span> character in each element " +
						"of the character array variable.</li></ul> ", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "addressBox" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				if(introjs._currentStep == 3) {
					$("#addressBox").removeClass("opacity00");
					TweenMax.to("#tableId", 0.2, {opacity: 1, onComplete: function() {
						$('.introjs-tooltip').removeClass('hide');
						typing(".introjs-tooltiptext", "<y>20 bytes</y> are allocated to the array of the " +
								"variable <span class='ct-code-b-yellow'>ch</span>.", 10, "",function() {
							$('.introjs-tooltip').removeClass('hide');
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					}});
				} else if(introjs._currentStep == 7) {
					$("#tableRowId").removeClass("opacity00");
					introjs.refresh();
					$(".td-css").addClass("ct-code-b-green");
					TweenMax.to(".td-css", 0.2, {opacity: 1, onComplete: function() {
						insertCharacters(function() {
							$('.introjs-tooltip').removeClass('hide');
							typing(".introjs-tooltiptext", "The entered string is allocated in a memory of an array and " +
										"<span class='ct-code-b-green'>\0</span> is append at the end of the string.", 10, "", function() {
								TweenMax.to("#baseAddresssId", 0.2, {opacity: 1, onComplete: function() {
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								}});
							});
						});
					}});
				}
			});
			break;
			
			
		case "line3" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>printf()</span> is library function, " +
						"used to display anything in double quotes on the output screen.", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "line4" :
			$("#hiddenTypingChar").removeClass("hidden");
			$("#totalBlinkText").addClass("hidden");
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>scanf()</span> is a library function, " +
						"<span class='ct-code-b-yellow'>%s</span> scan a Character String and terminates at whitespace. " +
						"The <span class='ct-code-b-yellow'>null</span> character stored at the end of the string. ", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "line5" :
			$("#inputChar").attr("disabled", true);
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>printf()</span> is library function, used " +
						"to display anything in double quotes on the output screen.", 10, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "consoleId" :
			if(introjs._currentStep == 5) {
				$("#hiddenTypingChar").addClass("hidden");
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#inputChar").val("");
					$("#consoleId").removeClass("opacity00");
					$('.introjs-tooltip').removeClass('hide');
					typing("#typeChar", "<span id='totalBlinkText'>Enter a String : <span id='blinkChar'><input id='in' maxlength='0' tabindex='0' value=''/></span></br></span>", 10, "",function() {
						$("#hiddenTypingChar").removeClass("hidden");
						$("#totalBlinkText").addClass("hidden");
						$("#inputChar").focus();
						typing(".introjs-tooltiptext", "Enter a string.", 10, "",function() {
							$('#inputChar').keyup(function(e) {
								if ($("#inputChar").val().length < 1) {
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								} else {
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								}
							});
						});
					});
				});
			} else if(introjs._currentStep == 9) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "forward") {
						typing("#totalEnterChar", "The entered string is : <span id='putValueId'></span>", 10, "",function() {
							$("#totalEnterChar").addClass("hidden");
							$("#enterHiddenTotal").removeClass("hidden");
							setTimeout(function() {
								introjs.nextStep();
							},500);
						});
					} else {
						$("#hiddenTotalEnterChar").val("");
						setTimeout(function() {
							introjs.previousStep();
						},1000);
					}
				});
			}
			break;
			
		case "hiddenTotalEnterChar" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				if (introjs._direction == "backward") {
					setTimeout(function () {
						introjs.previousStep();
					}, 1000);
				} else {
					var totalLength = $("#tableRowId > td:not(:first)").text().length;
					var finalResult = $("#tableRowId > td:not(:first)").text().substring(0,totalLength-2);
					$("#hiddenTotalEnterChar").val(finalResult);
					setTimeout(function() {
						introjs.nextStep();
					},1000);
				}
			});
			break;
		case 'line6':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This is the end of the main() function where the program execution ends.";
				typing(".introjs-tooltiptext", text, 10, "", function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "restartBtn" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				$(".introjs-tooltip").css("min-width", "-moz-max-content");
				$(".introjs-tooltip").css("min-width", "max-content");
				$("#restartBtn").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Click to restart.", 10, "", function() {
																						
				});
			});
			break;
		}
	});
	introjs.start();
	$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
}

var flag1 = true;
function insertCharacters(callBack) {
	var result = $("#inputChar").val();
	for(var i = 0; i <= result.length; i++) {
		
		if (result.length >= 0 && result.length < 20) {
			if (i == result.length) {
				$("table tr:nth-child(2) td:eq("+ (i+1) + ")").addClass('filled').text("\\0");
			} else {
				$("table tr:nth-child(2) td:eq("+ (i+1) +")").addClass('filled').text(result[i]);
			}
		}  else {
			if (i == 19) {
				$("table tr:nth-child(2) td:eq("+ (i+1) + ")").text("\\0");
				break;
			} else {
				$("table tr:nth-child(2) td:eq("+ (i+1) +")").text(result[i]);
			}
		}
		
	}
	setTimeout(function() {
		if (typeof callBack === "function") {
			callBack();
		}
	},600);
}

function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		typingCallbackFunction();
		introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
	});
}