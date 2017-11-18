var readPrintStringUsingGetsPutsReady = function() {
	$("#restartBtn").click(function() {
		$("#inputChar").val('');
		$("#hiddenTotalEnterChar").val('');
		location.reload();
	});
	
	console.log();
	introjs = introJs();
	introjs.setOptions({
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
						tooltipClass: "hide",
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
						element :'#line6',
						intro :'',
						position:"bottom"
					},{
						element :'#hiddenTotalEnterChar',
						intro :'',
						tooltipClass: "hide",
						position:"bottom"
					},{
						element :'#line7',
						intro :'',
						position:"bottom"
					},{
						element :'#restartBtn',
						intro :'',
						position:"right"
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
				TweenMax.to(".td-css", 0 , {opacity: 0});
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
		break;
		
		case "line5" :
			$("#totalEnterChar").addClass("hidden");
			$("#enterHiddenTotal").addClass("hidden");
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
		case "preBody" :
			typing(".introjs-tooltiptext", "Let us see a sample program on the usage of the functions " +
					"<span class='ct-code-b-yellow'>gets()</span> and <span class='ct-code-b-yellow'>puts()</span>.", 1, "",function() {
				$('.introjs-nextbutton').show();
				$(".introjs-prevbutton").hide();
			});
			break;	
			
		case "line1" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>main()</span> is the operating system call." +
						"<ul><li><span class='ct-code-b-yellow'>main()</span> is execution starting point for any " +
						"<span class='ct-code-b-yellow'>C</span> program.</li></ul>", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "line2" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<ul><li>Here, ch is the <span class='ct-code-b-yellow'>character " +
						"array varaiable</span> which contains 20 characters.</li><li>Each element occupies " +
						"<span class='ct-code-b-yellow'>1</span> byte(8 bits) in the memory.</li></ul> ", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "addressBox" :
			if(introjs._currentStep == 3) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#addressBox").removeClass("opacity00");
					TweenMax.to("#tableId", 0.2, {opacity: 1, onComplete: function() {
						$('.introjs-tooltip').removeClass('hide');
						typing(".introjs-tooltiptext", "20 bytes are allocated to the array of the variable " +
								"<span class='ct-code-b-yellow'>ch</span>.", 1, "",function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					}});
				});
			} else if(introjs._currentStep == 7) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#tableRowId").removeClass("opacity00");
					introjs.refresh();
					$(".td-css").addClass("ct-code-b-green");
					TweenMax.to(".td-css", 0.2, {opacity: 1, onComplete: function() {
						insertCharacters(function() {
							$('.introjs-tooltip').removeClass('hide');
							typing(".introjs-tooltiptext", "The given string is stored in the array and delimiter " +
									"<span class='ct-code-b-yellow'>\\0</span> (or) <span class='ct-code-b-yellow'>\\n</span>" +
									" is placed at the end of the string by the system.", 1, "",function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					}});
				});
			}
			break;
			
		case "line3" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This statement is used to print the string in the console.";
				typing(".introjs-tooltiptext",text, 1, "",function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "line4" :
			$("#hiddenTypingChar").removeClass("hidden");
			$("#totalBlinkText").addClass("hidden");
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
				typing(".introjs-tooltiptext", "<ul><li><span class='ct-code-b-yellow'>gets()</span> is library " +
						"function it reads a string from the keyboard. </li><li><span class='ct-code-b-yellow'>gets()</span> " +
						"function reads <span class='ct-code-b-yellow'>whitespace</span> characters.</li></ul>", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		
		case "line5" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This statement is used to print the string in the console.";
				typing(".introjs-tooltiptext",text, 1, "",function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "line6" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>puts()</span> is library function." +
						"<br/> It displays a string onto the output screen.", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "consoleId" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				if(introjs._currentStep == 5) {
					$("#consoleId").removeClass("opacity00");
					$('.introjs-tooltip').removeClass('hide');
					typing("#typeChar", "<span id='totalBlinkText'>Enter a String : "
							+ " <span id='blinkChar'><input id='in' maxlength='0' tabindex='0' value=''/></span></span>", 1, "",function() {
						$("#hiddenTypingChar").removeClass("hidden");
						$("#totalBlinkText").addClass("hidden");
						$("#inputChar").focus();
						typing(".introjs-tooltiptext", "Enter a string. ", 1, "",function() {
							$('#inputChar').keyup(function(e) {
								if ($("#inputChar").val().length < 1) {
									$('.introjs-nextbutton, .introjs-prevbutton').hide();
								} else {
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								}
							});
						});
					});
				} else if(introjs._currentStep == 9) {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							$("#totalEnterChar").removeClass("hidden");
							$("#enterHiddenTotal").addClass("hidden");
							introjs.previousStep();
						}, 1000);
					} else {
						typing("#totalEnterChar", "The entered string is : <span id='putValueId'></span>", 1, "",function() {
							$("#totalEnterChar").addClass("hidden");
							$("#enterHiddenTotal").removeClass("hidden");
							setTimeout(function() {
								introjs.nextStep();
							},500);
						});
					}
				}
			});
			break;
			
		case "hiddenTotalEnterChar" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				if (introjs._direction == "backward") {
					$("#hiddenTotalEnterChar").val("");
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
		case 'line7':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This is the end of the main() function where the program execution ends.";
				typing(".introjs-tooltiptext", text, 1, "", function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "restartBtn" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				$(".introjs-tooltip").css("min-width", "max-content");
				$("#restartBtn").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Click to restart.", 1, "",function() {

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
				$("table tr:nth-child(2) td:eq("+ (i+1) + ")").addClass('filled').text("\\0");
				break;
			} else {
				$("table tr:nth-child(2) td:eq("+ (i+1) +")").addClass('filled').text(result[i]);
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