var readStringUsingGetcharReady = function() {
	$("#restartBtn").click(function() {
		$("#inputChar").attr("disabled", false);
		$("#hiddenTotalEnterChar").attr("disabled", false);
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
						tooltipClass: "hide",
						position:"bottom"
					},{
						element :'#line5',
						intro :'',
						position:"bottom"
					},{
						element :'#addressBox',
						intro :'',
						position:"left",
						tooltipClass: "hide"
					},{
						element :'#line6',
						intro :'',
						position:"bottom"
					},{
						element :'#addressBox',
						intro :'',
						tooltipClass: "hide"
					},{
						element :'#line7',
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
						tooltipClass: "hide",
						position:"bottom"
					},{
						element :'#line9',
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
			} else if(introjs._currentStep == 9) {
				TweenMax.to(".td-css, #baseAddresssId", 0 , {opacity: 0});
				$("#iValue").text("0");
			}
		break;
		case "line3" :	
			$("#panelIntBox").addClass("opacity00").removeClass("animated zoomIn ct-code-b-green");
			$("#iValue").addClass("opacity00").removeClass("animated zoomIn ct-code-b-green");
		break;
		case "line4" :
			$("#hiddenTypingChar").addClass("hidden");
			$("#inputChar").val("");
			$("#consoleId").addClass("opacity00");
			$("#totalBlinkText").addClass("hidden");
		break;
			
		case "line5" :
			$("#iValue").text("0");
			$('.filled').text('');
			$('.filled').removeClass('filled');
			$('#baseAddresssId').css("opacity", "0");
		break;
		
		case "line6" :
			$("#totalEnterChar").addClass("hidden");
			$("#enterHiddenTotal").addClass("hidden");
		break;
		
		case "line8" :
			$("#hiddenTotalEnterChar").val("");
			break;
		case "consoleId" :
			if(introjs._currentStep == 7) {
				$("#hiddenTypingChar").addClass("hidden");
				$("#inputChar").val("");
				$("#consoleId").addClass("opacity00");
				$("#totalBlinkText").addClass("hidden");
				$("#inputChar").removeAttr("disabled");
			} else if(introjs._currentStep == 13) {
				
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
			
			if (introjs._currentStep != 0) {
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
			$("#preBody").removeClass("opacity00");
			//$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Let us learn execution of sample program for reading " +
						"(or) printing a string using <span class='ct-code-b-yellow'>getchar()</span> and " +
						"<span class='ct-code-b-yellow'>puts()</span>.", 1, "",function() {
					$('.introjs-nextbutton').show();
					$(".introjs-prevbutton").hide();
				});
			//});
			break;
			
		case "line1" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>main()</span> is the operating system call." +
						"<ul><li><span class='ct-code-b-yellow'>main()</span> is execution starting point for any " +
						"<span class='ct-code-b-yellow'>C</span> program.</li></ul>", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "line2" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = 	"<span class='ct-code-b-yellow'>ch</span> is a character array varaiable with 20 elements." +
							"<ul><li>It allocates <span class='ct-code-b-yellow'>1 byte</span> of memory to each element " +
							"of the character array variable.</li>" +
							"<li>It stores <span class='ct-code-b-yellow'>1 character</span> in each element of the character " +
							"array variable.</li></ul> ";
				typing(".introjs-tooltiptext", text, 1, "",function() {
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
								"variable <span class='ct-code-b-yellow'>ch</span>.", 1, "",function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					}});
				} else if(introjs._currentStep == 9) {
					var num = $("#inputChar").val().length - 2;
					 i = 0;
					var interval = setInterval(function() {
						if (i == num) {
							$("#tableRowId").removeClass("opacity00");
							introjs.refresh();
							$(".td-css").addClass("ct-code-b-green");
							TweenMax.to(".td-css", 0.2, {opacity: 1, onComplete: function() {
								insertCharacters(function() {
									$('.introjs-tooltip').removeClass('hide');
									typing(".introjs-tooltiptext", "The entered string is allocated in a memory of an array and " +
												"<span class='ct-code-b-yellow'>\\0</span> is append at the end of the string.", 1, "", function() {
										TweenMax.to("#baseAddresssId", 0.2, {opacity: 1, onComplete: function() {
											$('.introjs-nextbutton, .introjs-prevbutton').show();
										}});
									});
								});
							}});
							clearInterval(interval);
						}
						i++;
						$("#iValue").text(i);
					}, 200);
				} else if(introjs._currentStep == 11) {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#addressBox, #animationBox").removeClass("opacity00");
						setTimeout(function(){
							introjs.nextStep();
						},1000);
					}
				}
			});
			break;
			
		case "line3" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>int</span> is a datatype, " +
						"where zero is assigned to a variable i.", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "panelIntBox" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				if (introjs._direction == "backward") {
					setTimeout(function () {
						introjs.previousStep();
					}, 1000);
				} else {
					$("#panelIntBox").removeClass("opacity00").addClass("animated zoomIn ct-code-b-green").one('animationend', function() {
						$("#iValue").removeClass("opacity00").addClass("animated zoomIn ct-code-b-green").one('animationend', function() {
							setTimeout(function(){
								introjs.nextStep();
							},1000);
						});
					});
				}
			});
			break;
			
		case "line4" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>printf()</span> is library function, " +
						"used to display anything in double quotes on the output screen.", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "line5" :
			$("#hiddenTypingChar").removeClass("hidden");
			$("#totalBlinkText").addClass("hidden");
			$("#inputChar").attr("disabled", true);
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "while loop checks and increments the string. whenever the " +
						"string encounter <span class='ct-code-b-yellow'>#</span> it will stop incrementing " +
						"and comes out of loop.", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "line6" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "this line shows that <span class='ct-code-b-yellow'>\\0</span> is " +
						"appended at the end of the entered string.", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "line7" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "This statement is used to print the string in the console.", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();;
				});
			});
			break;
			
		case "line8" :
			$("#hiddenTotalEnterChar").attr("disabled", true);
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>puts()</span> is used " +
						"to write the string.", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "consoleId" :
			$("#consoleId").removeClass("opacity00");
			if(introjs._currentStep == 7) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing("#typeChar", "<span id='totalBlinkText'>Enter a String : <span id='blinkChar'>"
								+ " <input id='in' maxlength='19' tabindex='0' value=''/></span></br></span>", 1, "",function() {
						$("#hiddenTypingChar").removeClass("hidden");
						$("#totalBlinkText").addClass("hidden");
						$("#inputChar").focus();
						$('.introjs-tooltip').removeClass('hide');
						typing(".introjs-tooltiptext", "Enter a String.<span class='error-text ct-code-b-red'></span>" +
								"<br><span id='errText' class='ct-code-b-red'></span> ", 1, "",function() {
							$("#inputChar").on("keydown", function(e) {
								$('.error-text').empty();
								if ($.inArray(e.keyCode, [8, 46, 32, 37, 39, 27]) !== -1) {
									return;
								}
								if ($(this).val().length > 19) {
									$('.error-text').html("<br/>Please restrict the string maximum length to 20.");
									e.preventDefault();
								}
							}); 
							$("#inputChar").keyup(function() {
								$("#errText").text("");
								if ($("#inputChar").val().includes("#")) {
									$('.introjs-nextbutton, .introjs-prevbutton').show()
								} else {
									$("#errText").append("please enter # symbol.");
									$('.introjs-nextbutton, .introjs-prevbutton').hide();
								}
							});
						});
					});
				});
				
			} else if(introjs._currentStep == 13) {
				$("#hiddenTotalEnterChar").attr("disabled", 'disabled');
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							$("#totalEnterChar").removeClass("hidden");
							$("#enterHiddenTotal").addClass("hidden");
							introjs.previousStep();
						}, 1000);
					} else {
						$("#totalEnterChar").addClass("hidden");
						$("#enterHiddenTotal").removeClass("hidden");
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					}
					
				});
			}
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
					var totalLength = $("#inputChar").val().length;
					var finalResult = $("#inputChar").val().substring(0, totalLength - 1);				
					$("#hiddenTotalEnterChar").val(finalResult);
					$('.introjs-tooltip').removeClass('hide');
					typing(".introjs-tooltiptext", "The entered string is printed on to the output screen.", 1, "",function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				}
			});
			break;
		case 'line9':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This is the end of the main() function where the program execution ends.";
				typing(".introjs-tooltiptext", text, 1, "", function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
			
		case "restartBtn" :
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#restartBtn").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Click to restart.", 1, "",function() {});
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
				$("table tr:nth-child(2) td:eq("+ (i+1) + ")").addClass("filled").text("\\0");
			} else {
				if(result.length == 20) {
					$("table tr:nth-child(2) td:eq("+ (i+1) + ")").addClass("filled").text("\\0");
				} else {
					$("table tr:nth-child(2) td:eq("+ (i+2) + ")").addClass("filled").text("\\0");
					$("table tr:nth-child(2) td:eq("+ (i+1) +")").addClass("filled").text(result[i]);
				}
				
			}
		} else {
			$("table tr:nth-child(2) td:eq("+ (i+1) +")").addClass("filled").text(result[i]);
			
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