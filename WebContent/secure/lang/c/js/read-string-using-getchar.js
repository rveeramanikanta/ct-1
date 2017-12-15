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
					}, {
						element :'#whileCompare',
						intro :'',
						position:"bottom"
					}, {
						element :'#totalCompare',
						intro :'',
						position:"bottom"
					}, {
						element :'#consoleId',	//added step
						intro :'',				
						tooltipClass: "hide",
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
			} else if(introjs._currentStep == 11) {
				TweenMax.to(".td-css, #baseAddresssId", 0 , {opacity: 0});
				$("#iValue").text("0");
			}
		break;
		case "line3" :	
			$("#panelIntBox").addClass("opacity00").removeClass("animated zoomIn ct-code-b-green");
			$("#iValue").addClass("opacity00").removeClass("animated zoomIn ct-code-b-green");
		break;
		case "line4" :
			$("#hiddenTypingChar").addClass("opacity00");
			$("#inputChar").val("");
			$("#consoleId").addClass("opacity00");
			$("#totalBlinkText").addClass("opacity00");
		break;
			
		case "whileCompare" :
			//$("#inputChar").val("").attr('disabled','disabled');
			/*$("#iValue").text("0");
			$('.filled').text('');
			$('.filled').removeClass('filled');
			$('#baseAddresssId').css("opacity", "0");*/
		break;
		
		case "totalCompare":
			$("#inputChar").val("").attr('disabled','disabled');
			break;
		
		case "line6" :
			$("#totalEnterChar").addClass("opacity00");
			$("#enterHiddenTotal").addClass("opacity00");
		break;
		
		case "line8" :
			$("#hiddenTotalEnterChar").val("");
			break;
		case "consoleId" :
			
			if(introjs._currentStep == 7) {
				$("#consoleId").addClass("opacity00");
			} else if(introjs._currentStep == 10) {
				$('#iValue, .filled').empty().removeClass('filled');
				$('#baseAddresssId').css("opacity", "0");
				$("#inputChar").removeAttr("disabled").val("");
			} else if(introjs._currentStep == 15) {
				
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
			var text = "Let us see a sample program to read a string  by using <y>getchar()</y> and print the string using by <y>puts()</y>.";
			typing(".introjs-tooltiptext", text, 1, "",function() {
				$('.introjs-nextbutton').show();
				$(".introjs-prevbutton").hide();
			});
			break;
			
		case "line1" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				
				
				var text = "<y>main()</y> is an operating system call and which is the execution starting point for all <y>C</y> programs.";
				
				
				typing(".introjs-tooltiptext", text , 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "line2" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "<ul><li><y>ch</y> is the character array varaiable of size <y>20</y>.</li>"
					+"<li>Each element of character array occupies <y>1</y> byte (<y>8</y> bits) of memory.</li><ul>";
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
						typing(".introjs-tooltiptext", "<y>20 bytes</y> are allocated to character array " +
								"variable <span class='ct-code-b-yellow'>ch</span>.", 1, "",function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					}});
				} else if(introjs._currentStep == 11) {
				 i = 0;
				var interval = setInterval(function() {
					if ($("#inputChar").val().charAt(i)  == "#") {
						clearInterval(interval);
						
						if ($("#inputChar").val().length  == 1 ) {
							$('.td-css:first').addClass('ct-code-b-green filled').removeClass('opacity00').removeAttr('style').text("#");
						}
						
						$('.introjs-tooltip').removeClass('hide');
						
						var text  = "The given <y>string</y> is stored in the array.";
						
						typing(".introjs-tooltiptext", text , 1, "", function() {
							TweenMax.to("#baseAddresssId", 0.2, {opacity: 1, onComplete: function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							}});
						});
					} else {
						$("#tableRowId").removeClass("opacity00");
						introjs.refresh();
						$(".td-css").addClass("ct-code-b-green");
						TweenMax.to(".td-css", 0.2, {opacity: 1, onComplete: function() {
							insertCharacters(function() {
								
							});
						}});
						i++;
						$("#iValue").text(i);
				}
			}, 200);					
				} else if (introjs._currentStep == 13) {
					if (introjs._direction == "forward") {
						flipEffect('.filled:last', "\\0" , function() {
							introjs.nextStep();
						});
					} else {
						flipEffect('.filled:last', "#" , function() {
							introjs.previousStep();
						});
					}
					
				} else if(introjs._currentStep == 11) {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#addressBox, #animationBox").removeClass("opacity00");
						 $("#tableRowId td:eq(" + $("#inputChar").val().length  + ")").addClass("blink");
						setTimeout(function(){
							introjs.nextStep();
						},1000);
					}
				}
			});
			break;
			
		case "line3" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				
				var text = "Here, an <y>int</y> variable <y>i</y> declared and initialized with <y>0</y>.";
				
				typing(".introjs-tooltiptext", text , 1, "",function() {
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
							setTimeout(function() {
								introjs.nextStep();
							},1000);
						});
					});
				}
			});
			break;
			
		case "line4" :
			
			$('.introjs-helperLayer ').one('transitionend', function() {
				
				var text = "This statement is used to print the string on the console.";
				
				typing(".introjs-tooltiptext", text , 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			
			break;
		case "whileCompare" :
			$('.introjs-helperLayer').one('transitionend', function() {
				
				var text = "<y>getchar()</y> is used to read only character at a time and is assigned to <y>ch[i]</y>.";
				
				typing(".introjs-tooltiptext", text , 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "totalCompare" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				
				var text = "<ul><li>This loop is used to read a string as character by character upto <y>#</y> is given.</li>"
					+"<li>Every time <y>i</y> incremented.</li></ul>";
				
				typing(".introjs-tooltiptext", text , 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "line6" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				
				var text = "<ul><li>The given characters are stored in the character array <y>ch</y>.</li>"
							+"<li>The <y>user</y> placed by character by character in the chracter array variable </y>ch</y>.</li>"
							+"<li>So, the delimiter <y>\\0</y> is also to be placed by the user at the end of string.</li></ul>";
				
				
				typing(".introjs-tooltiptext", text , 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "line7" :
			$('.introjs-helperLayer ').one('transitionend', function() {
				 $("#tableRowId td:eq(" + $("#inputChar").val().length  + ")").removeClass("blink");
				typing(".introjs-tooltiptext", "This statement is used to print the string on the console.", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();;
				});
			});
			break;
			
		case "line8" :
			$("#hiddenTotalEnterChar").attr("disabled", true);
			$('.introjs-helperLayer ').one('transitionend', function() {
				
				var text = "<y>puts()</y> is library function which displays the given string on the output screen.";
				
				typing(".introjs-tooltiptext", text , 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "consoleId" :
			$("#consoleId").removeClass("opacity00");
			
			if(introjs._currentStep == 7) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "forward") {
						$('#hiddenTypingChar').removeClass('opacity00');
						setTimeout(function() {
							introjs.nextStep();
						},500);
					} else {
						$('#hiddenTypingChar').addClass('opacity00');
						setTimeout(function() {
							introjs.previousStep();
						},500);
					}
					
				});
			} else if(introjs._currentStep == 10) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing("#typeChar", "<span id='totalBlinkText'>Enter a string : <span id='blinkChar'>"
								+ " <input id='in' maxlength='19' tabindex='0' value=''/></span></br></span>", 1, "",function() {
						$("#hiddenTypingChar").removeClass("opacity00");
						$("#totalBlinkText").addClass("opacity00");
						$("#inputChar").focus();
						$('.introjs-tooltip').removeClass('hide');
						typing(".introjs-tooltiptext", "Enter a string followed by <y>#</y> symbol to terminate the loop."
								+"<span class='error-text ct-code-b-red'></span>" +
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
									$('.introjs-nextbutton, .introjs-prevbutton').hide();
								}
							});
						});
					});
				});
				
			} else if(introjs._currentStep == 15) { 
				$("#hiddenTotalEnterChar").attr("disabled", 'disabled');
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (introjs._direction == "backward") {
						setTimeout(function () {
							$("#totalEnterChar").removeClass("opacity00");
							$("#enterHiddenTotal").addClass("opacity00");
							introjs.previousStep();
						}, 1000);
					} else {
						$("#totalEnterChar").addClass("opacity00");
						$("#enterHiddenTotal").removeClass("opacity00");
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
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				}
			});
			break;
		case 'line9':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "This is the end of the <y>main()</y>.";
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
				$("table tr:nth-child(2) td:eq("+ (i+1) + ")").addClass("filled").text("#");
			} else {
				if(result.length == 20) {
					$("table tr:nth-child(2) td:eq("+ (i+1) + ")").addClass("filled").text("#");
				} else {
					$("table tr:nth-child(2) td:eq("+ (i+2) + ")").addClass("filled").text("#");
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

function flipEffect(selector, val, callBackFunction) {
	$(selector).effect('highlight', {color: 'yellow'}, 500, function() {
		TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete: function() {
			$(selector).text(val);
			TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete: function() {
				callBackFunction();
			}});
		}});
	});
}