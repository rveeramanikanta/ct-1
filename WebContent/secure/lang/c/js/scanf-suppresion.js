var introjs;
var typingSpeed = 1;
var tl;

var scanfSuppresionReady = function() {
	introGuide();
	tl = new TimelineLite();
	$("[data-toggle='popover']").popover({html : true});
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : "#description",
			intro : "",
			tooltipClass:"hide"
		},{
			element : "#codeAnimation",
			intro : "",
			position : "right",
			//tooltipClass:"hide"
		},{
			element : "#addressDiv",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#printf",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#consoleId",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#scanf",
			intro : "",
			position : "right",
			tooltipClass:"hide"
		},{
			element : "#consoleId",
			intro : "",
			position : "right",
			tooltipClass:"hide"
		},{
			element : "#addressDiv",
			intro : "",
			position : "top",
			tooltipClass:"hide"
		},{
			element : "#finalPrintf",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#consoleId",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#restart",
			intro : "",
			position : "right"
		}]
	});
	introjs.onbeforechange(function(targetElement) {
		introjs.refresh();
		var elementId = targetElement.id;
		switch (elementId) {
		case "description":
			$("#codeAnimation").addClass("opacity00");
			break;
			
		case "codeAnimation":
			$("#codeAnimation").removeClass("opacity00");
			$("#addressDiv").addClass("opacity00");
			break;
			
		case "printf":
			if (introjs._direction == "backward") {
			$("#consoleId").removeAttr("style").addClass("opacity00")
			$("#runEditor1").addClass("opacity00");
			}
			break;
			
		case "finalPrintf":
			
			break;
			
		case "addressDiv":
			
				if (introjs._currentStep == 2) {
					
				} else {
					
				}
			break;
			
		case "consoleId":
			
				if (introjs._currentStep == 4) {
					
				} else if (introjs._currentStep == 6) {
					//$("#inputVal").append("<input id='num1' spellcheck='false' class='int-num blinking-orange '/>");
					$("[data-toggle='popover']").popover("hide");
					$("#inputVal").text("");
					$("#givenNum1").text("");
					$("#givenNum2").text("");
				}
				
			break;
			
		case "scanf":
			$("#inputVal").text("");
			
			break;
		}
	});
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		// ********************** start ************back button logic
				
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
				
				// ********************** end ************back button logic
		introjs.refresh();
		var elementId = targetElement.id;
		switch (elementId) {
		case "description":
			$(".introjs-nextbutton").hide();
			setTimeout(function() {
				fadeEffect("#desList1", function() {
					fadeEffect("#desList2", function() {
						fadeEffect("#desList3", function() {
							var text2 = "Let us see how it works.";
							$(".introjs-tooltip").removeClass("hide");
							typing(".introjs-tooltiptext", text2, function() {
								$(".introjs-nextbutton").show();
							});
						});
					});
				});
			},100);
			break;
			
		case "codeAnimation":
			$(".introjs-nextbutton").hide();
			$("#codeAnimation").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				//$(".introjs-tooltip").removeClass("hide");
				var text = "In this program we will learn how <span class='ct-code-b-yellow'>scanf()</span> function behaves when " 
							+ " formatting characters are mixed with <span class='ct-code-b-yellow'>asterisk</span> i.e " 
							+ " (<span class='ct-code-b-yellow'>*</span>)."
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "printf":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					if (introjs._direction=="forward") {
						
								introjs.nextStep()
							
					} else {
							introjs.previousStep()
							}
					}, 500);
			});
			break;
			
		case "finalPrintf":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
			setTimeout(function() {
					if (introjs._direction=="forward") {
						introjs.nextStep();
							
					} else {
						introjs.previousStep()
					}
					
				}, 1000);
			});
			break;
			
		case "addressDiv":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				
				if (introjs._currentStep == 2) {
					$("#addressDiv").removeClass("opacity00");
					tl.to("#addressLocation", 1, {opacity: 1, onComplete: function() {
						$("#addressLocation").removeClass("opacity00");
						setTimeout(function() {
							if (introjs._direction=="forward") {
							introjs.nextStep()
							} else {
							introjs.previousStep()
							}
							}, 500);
					}});
				} else {
					
					$('#num1').effect( "transfer", { to: $("#scanNum1"), className: "ui-effects-transfer" }, 1000, function() {
						$("#scanNum1").popover("show");
						$("#popoverContent1").text( $("#num1").val().substring(0, 3) );
						$('#num1').effect( "transfer", { to: $("#scanNum2"), className: "ui-effects-transfer" }, 1000, function() {
							$("#scanNum2").popover("show");
							$("#popoverContent2").text( $("#num1").val().substring( 5, 7 ) );
							$( "#num1" ).prop( "disabled", true );
							$("#givenNum1").text( $("#num1").val().substring(0, 3) );
							$("#givenNum2").text( $("#num1").val().substring( 5, 7 ) );
							
							var l1 = $("#scanNum1").offset();
							var l2 = $("#scanNum2").offset();
							
							$("#givenNum1").offset({"top": l1.top, "left": l1.left});
							$("#givenNum2").offset({"top": l2.top, "left": l2.left});
							$("#dBlink1").addClass("blinking-white");
							$("#dBlink1").addClass("zIndex");
				
							//$("#scanNum1").delay(1000).queue(function() {
							setTimeout(function() {
								$("#dBlink1").removeClass("blinking-white");
								$("#dBlink1").removeClass("zIndex");
								$("#scanNum1").addClass("blinking-white");
								$("#scanNum1").addClass("zIndex");
								$("#givenNum1").addClass("zIndex");
							}, 500);
							});
	
							tl.to("#givenNum1", 1, {opacity: 1, delay: 1, top:0, left:0, onComplete: function() {
								$("#givenNum1").removeClass("opacity00");
								$("#scanNum1").removeClass("blinking-white");
								$("#scanNum1").removeClass("zIndex");
								$("#givenNum1").removeClass("zIndex");
								$("#dBlink2").addClass("blinking-white");
								$("#dBlink2").addClass("zIndex");
							//	$("#dBlink2").delay(1000).queue(function() {
								setTimeout(function() {
									$("#dBlink2").removeClass("blinking-white");
									$("#dBlink2").removeClass("zIndex");
								}, 500);
									$(".introjs-tooltip").removeClass("hide");
					
									var text = "Here given value  <b>"+$('#num1').val().substring(3, 5)+"</b> is <span class='ct-code-b-yellow'>not</span> assigned to <span class='ct-code-b-yellow'>b</span>, " 
											   + "because there is <span class='ct-code-b-yellow'>*</span> suppress character, so <span class='ct-code-b-yellow'>"+ $('#num1').val().substring(3, 5) +"</span>"
											   + " is skipped and next value <b>"+$("#givenNum2").text()+"</b> is read and assigned to <span class='ct-code-b-yellow'>b</span>. "
											   + " <span id='appendTxt'></span>";
									typing(".introjs-tooltiptext", text, function() {
										$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='ignoreChar()'>Next &#8594;</a>");
									});
								//});
							}});
						});
					//});
				}
			});
			break;
			
		case "consoleId":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._currentStep == 4) {
					if (introjs._direction=="forward") {
						tl.to("#consoleId", 1, {opacity: 1, onComplete: function() {
							$("#consoleId").removeClass("opacity00");
							$("#runEditor1").removeClass("opacity00");
							var text = "Enter a number: <span id='inputVal'></span>"
							typing("#runEditor1", text, function() {
								setTimeout(function() {
									introjs.nextStep()
								}, 500);
							});
						}});
					} else {
						setTimeout(function() {
							introjs.previousStep()
						}, 500);
					}
				} else if (introjs._currentStep == 6) {
					$(".introjs-tooltip").removeClass("hide");
					var text = "<input id='num1' spellcheck='false' class='int-num'/>";
					typing("#inputVal", text, function() {
						var text2 = "Enter a number. <br><br>";
						typing(".introjs-tooltiptext", text2, function() {
							$("#num1").addClass("blinking-orange");
							$("#num1").focus();
							arr = [];
							$('#num1').on("keydown", function(e) {
								if (arr.length == 3) {
									if (e.keyCode == 32) {
										e.preventDefault();
									}
								}
								if ($.inArray(e.keyCode, [46, 8, 9, 27, 35, 36, 37, 39]) !== -1) {
									return;
								}
								if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
									e.preventDefault();
								}
							});
							
							$('#num1').on("keyup", function(e) {
								$('.length-error-text').remove();
								if ($(this).val() == "") {
									$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
																		"Please enter a number.</span>");
								}
								var givenText = $(this).val();
								
								if ($(this).val().length >= 7) {
									$(".introjs-nextbutton,.introjs-prevbutton").show();
								} else {
									$(".introjs-nextbutton,.introjs-prevbutton").hide();
								}
								
								if ($(this).val().length < 7) {
									$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
																			"Please limit the number length to 7 or more.</span>");
									$(".introjs-nextbutton,.introjs-prevbutton").hide();
								}
							});
						});
					});
					
				} else {
					$(".introjs-helperLayer").one("transitionend", function() {
						var text = "a = "+$("#givenNum1").text()+" b = "+$("#givenNum2").text()+" ";
						typing("#runEditor2", text, function() {
							setTimeout(function() {
								$(".introjs-nextbutton").click();
							},1000);
						});
					});
				}
			});
			break;
			
		case "scanf":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
				var text = "Here we are implementing the <span class='ct-code-b-yellow'>scanf()</span> function with " 
							+ " suppression character (<span class='ct-code-b-yellow'>*</span>).";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton,.introjs-prevbutton").show();
					
				});
			});
			break;
			
		case "restart":
			$(".introjs-nextbutton").hide();
			$('.introjs-tooltip').css('min-width', '125px');
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Click to restart." 
				typing(".introjs-tooltiptext", text, function() {
					$("#restart").removeClass("opacity00");
					$("#restart").click(function() {
						location.reload();
					});
				});
			});
			break;
		}
	});	
	
	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.start();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}

function fadeEffect(element, callBackFunction) {
	tl.to(element, 0.5, {opacity:1, onComplete: function() {
		$(element).removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function ignoreChar() {
	$(".user-btn").remove();
	$("#dBlink3").addClass("blinking-white");
	$("#dBlink3").addClass("zIndex");
	//$("#dBlink3").delay(1000).queue(function() {
	  setTimeout(function() {
		$("#dBlink3").removeClass("blinking-white");
		$("#dBlink3").removeClass("zIndex");
		$("#scanNum2").addClass("blinking-white");
		$("#scanNum2").addClass("zIndex");
		$("#givenNum2").addClass("zIndex");
	  }, 500);
		tl.to("#givenNum2", 1, {opacity: 1, delay: 1, top:0, left:0, onComplete: function() {
			$("#givenNum2").removeClass("opacity00");
			$("#scanNum2").removeClass("blinking-white");
			$("#scanNum2").removeClass("zIndex");
			$("#givenNum2").removeClass("zIndex");
				var text = "Now given values are stored in <span class='ct-code-b-yellow'>a</span> and " 
					+ " <span class='ct-code-b-yellow'>b</span>.";
				typing("#appendTxt", text, function() {
					$(".introjs-nextbutton,.introjs-prevbutton").show();
				});
		}});
	//});
}