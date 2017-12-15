var readPrintStringUsingGetsPutsReady = function() {
	$("#restartBtn").click(function() {
		$("#inputChar").val('');
		$("#hiddenTotalEnterChar").val('');
		location.reload();
	});
	
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
					}, {
						element :'#line1',
						intro :'',
						position:"bottom"
					}, {
						element :'#line2',
						intro :'',
						position:"bottom"
					}, {
						element :'#addressBox',
						intro :'',
						tooltipClass: "hide",
						position:"bottom"
					}, {
						element :'#line3',
						intro :'',
						position:"bottom"
					}, {
						element :'#consoleId',
						intro :'',
						tooltipClass: "hide",
						position:"bottom"
					}, {
						element :'#line4',
						intro :'',
						position:"bottom"
					}, {
						element :'#consoleId',
						intro :'',
						tooltipClass: "hide",
						position:"bottom"
					}, {
						element :'#addressBox',
						intro :'',
						tooltipClass: "hide",
						position:"left"
					}, {
						element :'#line5',
						intro :'',
						position:"bottom"
					}, {
						element :'#consoleId',
						intro :'',
						tooltipClass: "hide",
						position:"bottom"
					}, {
						element :'#line6',
						intro :'',
						position:"bottom"
					}, {
						element :'#hiddenTotalEnterChar',
						intro :'',
						tooltipClass: "hide",
						position:"bottom"
					}, {
						element :'#line7',
						intro :'',
						position:"bottom"
					}, {
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
			} else if(introjs._currentStep == 8) {
				TweenMax.to(".td-css", 0 , {opacity: 0});
			}
			break;
			
		case "line4" :
			$("#inputChar").val("");
		break;
		
		case "line5" :
			$("#totalEnterChar").addClass("hidden");
			$("#enterHiddenTotal").addClass("opacity00");
		break;
			
		}
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
		
		//************* back button*****************//
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
		//************* back button*****************//
		
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
				typing(".introjs-tooltiptext", "<y>main()</y> is an operating system call and "
						+"which is the execution starting point for all <y>C</y> programs.", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "line2" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<ul><li><y>ch</y> is the character " +
						"array varaiable of size <y>20</y>.</li><li>Each element of character array occupies " +
						"<y>1</y> byte (<y>8</y> bits) of memory.</li></ul> ", 1, "",function() {
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
						typing(".introjs-tooltiptext", "<y>20</y> bytes are allocated to the character array variable " +
								"<span class='ct-code-b-yellow'>ch</span>.", 1, "",function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					}});
				});
			} else if(introjs._currentStep == 8) {
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
				var text = "This statement is used to print the string on the console.";
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
						"function which reads a string from the keyboard. </li><li><span class='ct-code-b-yellow'>gets()</span> " +
						"can also reads <span class='ct-code-b-yellow'>whitespace</span> characters.</li></ul>", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		
		case "line5" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This statement is used to print the string on the console.";
				typing(".introjs-tooltiptext",text, 1, "",function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "line6" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>puts()</span> is library function" +
						" which displays the given string on the output screen.", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "consoleId" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				if(introjs._currentStep == 5) {
					
					if (introjs._direction == "forward") {
						$("#consoleId").removeClass("opacity00");
						$('#hiddenTypingChar').removeClass('opacity00');
						setTimeout(function() {
							introjs.nextStep();
							},500);
					} else {
						$('#hiddenTypingChar').addClass('opacity00');
						setTimeout(function() {
							$("#consoleId").addClass("opacity00");
							introjs.previousStep();
						},500);
					} 
					
					
					
					
				} else if(introjs._currentStep == 7) {
					$('.filled').empty();
					$("#inputChar").val("").focus();
					$("#inputChar").on("keydown", function(e) {
						$('.ct-code-b-red').remove();
						if ($.inArray(e.keyCode, [8, 46, 32, 37, 39, 27]) !== -1) {
							return;
						}
						if ($(this).val().length > 18) {
							$('.introjs-tooltiptext').append("<span class='ct-code-b-red'><br/>Please restrict the string maximum"
										+ " length to 19.</span>");
							e.preventDefault();
						}
						
						$('#inputChar').keyup(function(e) {
							if ($("#inputChar").val().length < 1) {
								$('.introjs-nextbutton, .introjs-prevbutton').hide();
							} else {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							}
						});
					}); 
					$('.introjs-tooltip').removeClass('hide');
					typing(".introjs-tooltiptext", "Enter a string. ", 1, "",function() {
						
					});
				} else if(introjs._currentStep == 10) {
					$("#hiddenTotalEnterChar").attr("disabled", 'disabled');
					if (introjs._direction == "backward") {
						setTimeout(function () {
							$("#totalEnterChar").removeClass("opacity00");
							$("#enterHiddenTotal").addClass("opacity00");
							introjs.previousStep();
						}, 1000);
					} else {
						typing("#totalEnterChar", "The given string is : <span id='putValueId'></span>", 1, "",function() {
							$("#totalEnterChar").addClass("hidden");
							$("#codePrinf").addClass("z-index-td").effect('highlight',{color:'#da5805'}, 1500);
							transferEffectFunction("#codePrinf","#enterHiddenTotal", function() {
								$("#codePrinf").removeClass("z-index-td");
								setTimeout(function() {
									introjs.nextStep();
								},500);
							});
						});
					}
				}
					
			});
			break;
			
		case "hiddenTotalEnterChar" :
			$("#hiddenTotalEnterChar").attr("disabled", 'disabled');
			$('.introjs-helperLayer ').one('transitionend', function() {
				if (introjs._direction == "backward") {
					$("#hiddenTotalEnterChar").val("");
					setTimeout(function () {
						introjs.previousStep();
					}, 1000);
				} else {
					$('.filled:not(:last)').addClass('blinking z-index-td');
					
					setTimeout(function() {
					$("#hiddenTotalEnterChar").val($('.filled:not(:last)').text());
					setTimeout(function() {
						$('.filled:not(:last)').removeClass('blinking z-index-td');
						introjs.nextStep();
					},1000);
					},1000);
				}
			});
			break;
		case 'line7':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This is the end of the <y>main()</y>.";
				typing(".introjs-tooltiptext", text, 1, "", function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "restartBtn" :
			$('input').attr('disabled','disabled');
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-helperLayer ').one('transitionend', function() {
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


function transferEffectFunction(selector1, selector2, callBackFunction) {
	$(selector1).effect("transfer", { to: $(selector2)}, 1000).addClass(".ui-effects-transfer", function() {
		$(selector2).removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}