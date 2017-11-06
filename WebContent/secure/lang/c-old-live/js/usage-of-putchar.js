var typingInterval = 10;
var inputVar;

var usageOfPutcharReady = function() {
	introGuide();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
}

function introGuide() {
	introjs = introJs();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	
	$("#restart").click(function() {
		$("#inputChar").val("");
		location.reload();
	});
	
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		tooltip : false,
		steps :[{
			element :'#infoDiv',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element :'#preTableDiv',
			intro : '',
			position : "right",
		}, {
			element :'#line3',
			intro : '',
			position : "right",
		}, {
			element :'#memoryBox',
			intro : '',
			position : "right",
			animateStep : 'firstStep'
		}, {
			element :'#consoleId',
			intro : '',
			position : "right",
			animateStep : 'firstStep'
		}, {
			element :'#memoryBox',
			intro : '',
			position : "right",
			tooltipClass : 'hide',
			animateStep : 'secondStep'
		}, {
			element :'#line4',
			intro : '',
			position : "right",
		}, {
			element :'#consoleId',
			intro : '',
			position : "right",
			animateStep : 'secondStep'
		}, {
			element :'#preDiv',
			intro : '',
			position : "right",
		}, {
			element :'#line5',
			intro : '',
			position : "right",
		}, {
			element :'#consoleId1',
			intro : '',
			position : "right",
			animateStep : 'firstStepInConsoleId1',
			/* tooltipClass: 'hide' */
		}, {
			element :'#line6',
			intro : '',
			position : "right",
		}, {
			element :'#consoleId1',
			intro : '',
			position : "right",
			animateStep : 'secondStepInConsoleId2'
		}, {
			element : '#finalText',
			intro : '',
			tooltipClass: 'hide'
				
		}, {
			element :"#restart",
			intro : "Click to restart.",
			position : 'right',
		}]
	});

	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch(elementId) {
		case 'infoDiv' :
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$("#list1").fadeTo(300, 1, function() {
				$("#list2").fadeTo(300, 1, function() {
					$("#list3").fadeTo(300, 1, function() {
						$("#list4").fadeTo(300, 1, function() {
							$("#list5").fadeTo(300, 1, function() {
								$('#nextButton').removeClass("opacity00");
								$('.user-btn').click(function() {
									$('.user-btn').remove();
										introjs.nextStep();
								});
							});
						});
					});
				});
			});
			break;
		case 'preTableDiv':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#preTableDiv").removeClass("opacity00", function() {
					typing('.introjs-tooltiptext', "Let us consider an example using <span class='ct-code-b-yellow'>putchar()</span> function.", function() {
						$(".introjs-nextbutton").show();
					});
				});
			});
			break;
		case 'memoryBox':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStep':
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "The variable <span class='ct-code-b-yellow'>ch</span> " +
					"occupies <span class='ct-color-lime'>1 byte</span> in the memory with its address (i.e. location).<br>" +
					"Here, the address is <span class='ct-code-b-yellow'>2034</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$("#memoryBox").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
							$(".introjs-nextbutton").show();
						});
					});
				});
				break;
			case 'secondStep':
				$("#inputChar").attr("disabled", "disabled");
				$('.introjs-helperLayer').one('transitionend', function() {
					$(".panel-body").text(inputVar).css({"padding": "8px", "color": "green", "font-weight": "bold"}).addClass("animated zoomIn").
					 one('animationend', function() {
						setTimeout(function () {
							introjs.nextStep();
						}, 500);
					}); 
				});
				break;
			}
			break;
		case 'line3':
			$("#memoryBox").css("border", "1px solid green");
			$("#memoryBox").css("border-radius", "8%");
			$('.introjs-helperLayer').one('transitionend', function() {
				var text = "This line retrives reads a character from the console and stores in character <span class='ct-code-b-yellow'>ch</span>.";
				var text = "<span class='ct-code-b-yellow'>getchar()</span> is library function which reads only " +
				"<span class='ct-code-b-yellow'>one</span> char at a time from keyboard.";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton").show();
				});
				
			});
			break;
			
		case 'line4':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "The <span class='ct-code-b-yellow'>putchar()</span> is used to write the value stored in the character "+
					"<span class='ct-code-b-yellow'>ch</span> to the standard output(console).";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'preDiv':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#consoleId").addClass("opacity00");
				$("#preDiv").removeClass("visibility-hidden", function() {
					typing('.introjs-tooltiptext', "Let us consider different examples using " +
							"<span class='ct-code-b-yellow'>putchar()</span> function.", function() {
						$(".introjs-nextbutton").show();
					});
				});
			});
			break;
		case 'line5':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#line5").removeClass("visibility-hidden", function() {
					var text = "This particular method called prints the character <span class='ct-code-b-yellow'>p</span> to the console."
					typing('.introjs-tooltiptext', text, function() {
						$(".introjs-nextbutton").show();
					});
				});
			});
			break;
		case 'line6':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#line6").removeClass("visibility-hidden", function() {
					var text = "In this <span class='ct-code-b-yellow'>putchar()</span> function since an integer value is provided instead "+
					"of a character constant , the integer value"+
					" is treated as <span class='ct-color-gold'>ASCII</span> code and its corresponding character is printed to the console.";
					typing('.introjs-tooltiptext', text, function() {
						$(".introjs-nextbutton").show();
					});
				});
			});
			break;
		case 'line7':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#line7").removeClass("visibility-hidden");
				typing('.introjs-tooltiptext', "If two characters placed in double quotes that will treated as a string but not a character." +
						" So this can be also gives an <span class='ct-color-red'>error</span>.", function() {
							$("#line7").css("color", "red");
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'line8':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#line8").removeClass("visibility-hidden");
				typing('.introjs-tooltiptext', "Any integer placed without quotes in <span class='ct-code-b-yellow'>putchar()</span> that will " +
						"be treated as <span class='ct-color-gold'>ASCII</span> value. " +
						"So the <span class='ct-code-b-yellow'>putchar()</span> converted the " +
						"<span class='ct-color-gold'>ASCII</span> value into it's own character.<br>" +
						"Here 56 is the <span class='ct-color-gold'>ASCII</span> value of 8.", function() {
					$(".introjs-nextbutton").show();
				});
			});
		case 'consoleId':
			$("#inputChar").attr("disabled", false);
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStep':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#consoleId").removeClass("opacity00");
					var text = "The <span class='ct-code-b-yellow'>getchar()</span> waits for the "+
					"user to type a character.<br><br> Please type a character now.";
					typing('.introjs-tooltiptext', text, function() {
						$("#inputChar").addClass("blinking");
						$("#inputChar").focus();
						checking();
					});
				});
				break;
			case 'secondStep':
				$("#inputChar").attr("disabled", "disabled");
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#typingChar").text(inputVar).addClass("opacity00");
					typing('.introjs-tooltiptext', "<span class='ct-code-b-yellow'>putchar()</span> displays the character on the console.", function() {
						$("#panelBody").effect("transfer", { to: $("#typingChar")}, 2000).addClass(".ui-effects-transfer", function() {
							$("#typingChar").removeClass("opacity00");
							$(".introjs-nextbutton").show();
						});
					})
				});
				break;
			}
			break;
		case 'consoleId1':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStepInConsoleId1':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#consoleId1").removeClass("opacity00");
					typing('.introjs-tooltiptext', "Constant value displayed on the console.", function() {
						$("#constantChar").text("p").addClass("opacity00");
						zoomingEffect($("#constantChar"), function(){
							$(".introjs-nextbutton").show();
						});
					});
				});
				break;
			case 'secondStepInConsoleId2':
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing('.introjs-tooltiptext', "The converted character displyed on console.", function() {
						$("#asciiChar").text("A");
						$(".introjs-nextbutton").show();
					});
				});
				break;
			}
			break;
		case 'finalText':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#finalText").removeClass("opacity00").addClass("z-index9999999");						
				setTimeout(function() {
					introjs.nextStep();
				}, 500);
			});
			break;
		case "restart":
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	introjs.start();
}
	
function typing(selector, text, callBackFunction) {
	var typingSpeed = 10;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	})
}

function checking() {
	$("#inputChar").on("click keyup keydown", function() {
		inputVar = $("#inputChar").val();
		if($("#inputChar").val() == "") {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
		}
	});
}

function zoomingEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(id).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}