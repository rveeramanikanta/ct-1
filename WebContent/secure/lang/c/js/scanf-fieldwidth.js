var introjs;
var typingSpeed = 1;
var tl;
var arr;

var scanfFieldWidthReady = function() {
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
			tooltipClass: "hide"
		},{
			element : "#codeAnimation",
			intro : "",
			position : "right",
			tooltipClass:"hide"
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
			position : "right"
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
			$("#addressDiv").addClass("opacity00");
			$("#consoleId").removeAttr("style");
			break;
			
		case "printf":
			$("#consoleId").removeAttr("style").addClass("opacity00");
			$("#runEditor1").addClass("opacity00");
		
			break;
			
		case "finalPrintf":
			$("[data-toggle='popover']").popover("hide");
			break;
			
			
		case "consoleId":
				if (introjs._currentStep == 4) {
				
				} else if (introjs._currentStep == 6) {
					$("#givenNum1").text("");
					$("#givenNum2").text("");
					$("[data-toggle='popover']").popover("hide");
					
				} else {
					
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
					if (introjs._currentStep != 0) {
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
							
						});
					});
				});
			},100);
			
			break;
			
		case "codeAnimation":
			$(".introjs-nextbutton").hide();
			$("#codeAnimation").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
				var text = "In this program we will learn how <span class='ct-code-b-yellow'>scanf()</span> function behaves when " 
							+ " formatting characters are mixed with <span class='ct-code-b-yellow'>field width</span>."
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
			$("[data-toggle='popover']").popover("hide");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The <span class='ct-code-b-yellow'>printf()</span> statement will print the values stored in " 
							+ " <span class='ct-code-b-yellow'>a</span> and <span class='ct-code-b-yellow'>b</span> respectively.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton,.introjs-prevbutton").show();
				});
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
						$("#popoverContent1").text( ($("#num1").val().substring(0, $("#num1").val().indexOf(" "))).substring(0,2) );
						$('#num1').effect( "transfer", { to: $("#scanNum2"), className: "ui-effects-transfer" }, 1000, function() {
							$("#scanNum2").popover("show");
							
							$( "#num1" ).prop( "disabled", true );
							if(($("#num1").val().substring(0, $("#num1").val().indexOf(" "))).length > 2 ) {
								$("#givenNum1").text( ($("#num1").val().substring(0, $("#num1").val().indexOf(" "))).substring(0,2) );
								$("#givenNum2").text( ($("#num1").val().substring(0, $("#num1").val().indexOf(" "))).substring(2) );
							} else {
								$("#givenNum1").text(($("#num1").val().substring(0, $("#num1").val().indexOf(" "))));
							}
							
							if( ($("#num1").val().substring($("#num1").val().indexOf(" ") + 1)).length > 3 && ($("#num1").val().substring(0, $("#num1").val().indexOf(" "))).length <= 2) {
								$("#givenNum2").text(($("#num1").val().substring($("#num1").val().indexOf(" ") + 1)).substring(0,3));
							} else if( ($("#num1").val().substring($("#num1").val().indexOf(" ") + 1)).length <= 3 && ($("#num1").val().substring(0, $("#num1").val().indexOf(" "))).length <= 2) {
								$("#givenNum2").text( $("#num1").val().substring($("#num1").val().indexOf(" ") + 1) );
							}
							
							$("#popoverContent2").text( $("#givenNum2").text() );
							
							var l1 = $("#scanNum1").offset();
							var l2 = $("#scanNum2").offset();
							
							$("#givenNum1").offset({"top": l1.top, "left": l1.left});
							$("#givenNum2").offset({"top": l2.top, "left": l2.left});
							$("#dBlink1").addClass("blinking-white");
							$("#dBlink1").addClass("zIndex");
							
							//$("#scanNum1").delay(1000).queue(function() {
								$("#dBlink1").removeClass("blinking-white");
								$("#dBlink1").removeClass("zIndex");
								$("#scanNum1").addClass("blinking-white");
								$("#scanNum1").addClass("zIndex");
								$("#givenNum1").addClass("zIndex");
								
								tl.to("#givenNum1", 1, {opacity: 1, top:0, left:0, onComplete: function() {
									$("#givenNum1").removeClass("opacity00");
									$("#scanNum1").removeClass("blinking-white");
									$("#scanNum1").removeClass("zIndex");
									$("#givenNum1").removeClass("zIndex");
									
									if(($("#num1").val().substring(0, $("#num1").val().indexOf(" "))).length > 2) {
										var text1 = "<ul><li>Here <span class='ct-code-b-yellow'>field width</span> of the first input filed is <b>2 (%2d)</b>." +
										" so it will take only <span class='ct-code-b-yellow'>2</span> characters and that integer will be assigned to variable <span class='ct-code-b-yellow'>a</span>.</li> <li id='appendTxt1' class='opacity00'></li></ul>";
									} else if(($("#num1").val().substring(0, $("#num1").val().indexOf(" "))).length < 2) {
										var text1 = "<ul><li>Here <span class='ct-code-b-yellow'>field width</span> of the first input filed is <b>2 (%2d)</b>, " 
										+ " the input can be less than <span class='ct-code-b-yellow'>2</span> characters "
										+ " but <span class='ct-code-b-yellow'>not</span> greater than <span class='ct-code-b-yellow'>2</span> so <b>"+($("#num1").val().substring(0, $("#num1").val().indexOf(" ")))+"</b> " 
										+ " is assigned to <span class='ct-code-b-yellow'>a</span>.</li> <li id='appendTxt1' class='opacity00'></li></ul>";
									} else {
										var text1 = "<ul><li>The given input value asssigned to <span class='ct-code-b-yellow'>a</span>.</li>"+
										" <li id='appendTxt1' class='opacity00'></li></ul>";
									}
									$(".introjs-tooltip").removeClass("hide");
									typing(".introjs-tooltiptext", text1, function() {
										$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='ignoreVals()'>Next &#8594;</a>");
										//$(".introjs-prevbutton").show();
									});
								}});
							//});
						});
					});
				}
			});
			break;
			
		case "consoleId":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._currentStep == 4) {
							setTimeout(function() {
								if (introjs._direction=="forward") {
									tl.to("#consoleId", 1, {opacity: 1, onComplete: function() {
										$("#consoleId").removeClass("opacity00");
										$("#runEditor1").removeClass("opacity00");
										var text = "Enter two numbers: <span id='inputVal'></span>"
											
											typing("#runEditor1", text, function() {
												setTimeout(function() {
										introjs.nextStep()
												}, 500);
											});
									}});
								} else {
									introjs.previousStep()
								}
							}, 500);
					
				} else if (introjs._currentStep == 6) {
					$(".introjs-tooltip").removeClass("hide");
					var text = "<input id='num1' spellcheck='false' class='int-num'>";
					typing("#inputVal", text, function() {
						var text2 = "Enter two numbers. press <br><br>"
						 + " While you are trying to read numbers using  <span class='ct-code-b-yellow'>scanf()</span> "
						 + " you can seperate the numbers either by space or by hitting  enter between the numbers. <br><br> "
						 + " In this case please provide a  <span class='ct-code-b-yellow'>space</span> to sperate your numbers."
						typing(".introjs-tooltiptext", text2, function() {
							$("#num1").addClass("blinking-orange");
							$("#num1").focus();
							arr = [];
							$('#num1').on("keydown", function(e) {
								if (arr.length == 2) {
									if (e.keyCode == 32) {
										e.preventDefault();
									}
								}
								if ($.inArray(e.keyCode, [46, 8, 9, 27, 32, 35, 36, 37, 39]) !== -1) {
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
																		"Please enter 2 numbers and separate each with space.</span>");
								}
								var givenText = $(this).val();
								var splittedText = givenText.split(" ");
								arr = [];
								
								$.each(splittedText, function(idx, val) {
									if (val != '') {
										arr.push(val);
									}
								});
								
								if (arr.length < 2) {
									$(".introjs-nextbutton,.introjs-prevbutton").hide();
								} else if (arr.length == 2) {
									$(".introjs-nextbutton,.introjs-prevbutton").show();
								}
								
								$.each(arr, function(idx, val) {
									if (val.length > 5) {
										$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
																				"Please limit the number length to 5.</span>");
										$(".introjs-nextbutton").hide();
										
									}
								});
							});
						});
					});
					
				} else {
					$(".introjs-helperLayer").one("transitionend", function() {
						var text = "a = "+$("#givenNum1").text()+" b = "+$("#givenNum2").text()+"";
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
							+ "<span class='ct-code-b-yellow'>%d</span> with <span class='ct-code-b-yellow'>field width</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton,.introjs-prevbutton").show();
				});
			});
			break;
			
		case "restart":
			$(".introjs-nextbutton").hide();
			$('.introjs-tooltip').css({'min-width' : '125px'});
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Click to <span class='ct-code-b-yellow'>restart</span>." 
				typing(".introjs-tooltiptext", text, function() {
					$("#restart").removeClass("opacity00");
					$("#restart").click(function() {
						location.reload();
					})
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

function nextStep() {
	$(".user-btn").remove();
	introjs.nextStep();
}

function ignoreVals() {
	$(".user-btn").remove();
	$("#dBlink2").addClass("blinking-white");
	$("#dBlink2").addClass("zIndex");
	
	//$("#scanNum2").delay(1000).queue(function() {
		$("#dBlink2").removeClass("blinking-white");
		$("#dBlink2").removeClass("zIndex");
		$("#scanNum2").addClass("blinking-white");
		$("#scanNum2").addClass("zIndex");
		$("#givenNum2").addClass("zIndex");
		
		tl.to("#givenNum2", 1, {opacity: 1, top:0, left:0, onComplete: function() {
			$("#givenNum2").removeClass("opacity00");
			$("#scanNum2").removeClass("blinking-white");
			$("#scanNum2").removeClass("zIndex");
			$("#givenNum2").removeClass("zIndex");
			$("#appendTxt1").removeClass("opacity00")
			if(($("#num1").val().substring(0, $("#num1").val().indexOf(" "))).length > 2) {
				var text2 = "Here given first input field width is <b>"+ ($("#num1").val().substring(0, $("#num1").val().indexOf(" "))).length + "</b>, "+ 
				" so <b>"+ ($("#num1").val().substring(0, $("#num1").val().indexOf(" "))).substring(2) +"</b> is assigned to <span class='ct-code-b-yellow'>b</span> and the "+ 
				" remaining input characters are ignored.";
				
			} else if(($("#num1").val().substring($("#num1").val().indexOf(" ") + 1)).length > 3) {
				var text2 = "Here <span class='ct-code-b-yellow'>field width</span>. of the second input filed is "+
							" <b>3 (%3d)</b>. so it will assign only <span class='ct-code-b-yellow'>3</span> characters to <span class='ct-code-b-yellow'>b</span>.";
			} else if(($("#num1").val().substring($("#num1").val().indexOf(" ") + 1)).length < 3) {
				var text2 = "Here <span class='ct-code-b-yellow'>field width</span> of the second input filed is <b>3 (%3d)</b>," +
							" the input can be less than <span class='ct-code-b-yellow'>3</span> characters but " + 
							" <span class='ct-code-b-yellow'>not</span> greater than <b>3</b>. So <span class='ct-code-b-yellow'>"+($("#num1").val().substring($("#num1").val().indexOf(" ") + 1))+"</span> " + 
							" is assigned to <span class='ct-code-b-yellow'>b</span>.";
			} else {
				var text2 = "The given input value asssigned to <span class='ct-code-b-yellow'>b</span>.";
			}
			
			typing("#appendTxt1", text2, function() {
				$(".introjs-nextbutton, .introjs-prevbutton").show();
			});
		}});
	//});
}