var asciiVal;
var binaryVal;
var typingInterval = 50;

var usageOfGetcharReady = function() {
	introGuide();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	$("#restart").click(function(){
		$("#inputChar, #inputChar2").val("");
		location.reload();
	});
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		tooltip : false,
		steps :[{
			element :"#infoDiv",
			intro : "",
			tooltipClass : 'hide',
		}, {
			element :"#preTableDiv",
			intro : "",
			position : 'right',
		}/* , {
			element :"#line2",
			intro : "",
			position : 'left',
		}, {
			element :"#line3",
			intro : "",
			position : 'right',
		} *//* , {
			element :"#animationBox",
			intro : "",
			position : 'right',
			animateStep : 'memoryZooming',
		} */, {
			element :"#line4",
			intro : "",
			position : 'right',
		}, {
			element :"#consoleId",
			intro : "",
			position : 'right',
			animateStep : 'checking',
		}, {
			element :"#consoleId",
			intro : "",
			position : 'right',
			animateStep : 'animation'
		}/* , {
			element :"#animationBox",
			intro : "",
			position : 'right',
			animateStep : 'animationPart',
		} */,{
			element : '#line5',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element :"#consoleId",
			intro : "",
			position : 'right',
			animateStep : 'printLine',
			tooltipClass : 'hide'
		}, {
			element : '#preTableDiv2',
			intro : '',
		}, {
			element : '#preline1',
			intro : '',
		}, {
			element :"#consoleId2",
			intro : "",
			position : 'bottom',
			animateStep : 'checking',
		}, {
			element : '#preline2',
			intro : '',
		}, {
			element :"#consoleId2",
			intro : "",
			position : 'bottom',
			animateStep : 'printPreline1',
			tooltipClass : 'hide'
		}, {
			element : '#preline3',
			intro : '',
		}, {
			element :"#consoleId2",
			intro : "",
			position : 'bottom',
			animateStep : 'printPreline2',
			tooltipClass : 'hide'
		}, {
			element :"#restart",
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton").hide();
		var elementId = targetElement.id;
		if (elementId == "line5") {
			$("#line5").addClass('z-index9999999');
		}
		switch (elementId) {
		case 'infoDiv':
/*** The general format is: variable=getchar ( ); ***/			
			$("#infoDiv").removeClass("opacity00");
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$("#list1").fadeTo(300, 1, function() {
				$("#list2").fadeTo(300, 1, function() {
					$("#list3").fadeTo(300, 1, function() {
						$("#list4").fadeTo(300, 1, function() {
						//	$("#infoDiv").addClass('z-index9999999');
							$('#nextButton').removeClass("opacity00");
							$('.user-btn').click(function() {
								$('.user-btn').remove();
									introjs.nextStep();
							});
						});
					});
				});
			});
			break;
		case 'preTableDiv':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#preTableDiv").removeClass("opacity00");
				typing('.introjs-tooltiptext', "Let us consider an example using <span class='ct-code-b-yellow'>getchar()</span> function.", function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'line2':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing('.introjs-tooltiptext', "To declare a variable which is of character type we use <span class='ct-code-b-yellow'>char</span> "+
						"datatype.<br><span class='ct-code-b-yellow'>char</span> datatype occupies <span class='ct-code-b-yellow'>one byte</span> (8-bits) in the memory.", function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'line3':
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing('.introjs-tooltiptext', "<span class='ct-code-b-yellow'>ch</span> is a character variable used to store " +
						"only one character at a time.", function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'line4':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "The <span class='ct-code-b-yellow'>ch</span> is initialized with the character that is return by the "+
					"<span class='ct-code-b-yellow'>getchar()</span> function.";
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'line5':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#line5").removeClass("opacity00");
				setTimeout(function () {
					introjs.nextStep();
				}, 500);
			});
			break;
		case 'consoleId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'checking':
				$("#inputChar").attr("disabled", false);
				$("#consoleId").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text ="The <span class='ct-code-b-yellow'>getchar()</span> tries to read an input from the console."+
					"<br><br> Please type a character now.";
					typing('.introjs-tooltiptext', text, function() {
						$("#inputChar").addClass("blinking");
						$("#inputChar").focus();
						checking("#inputChar");
					});
				});
				break;
			case 'animation':
				var givenInput = $("#inputChar").val();
				$("#inputChar").attr("disabled", "disabled");
				asciiVal = givenInput.charCodeAt(0);
				binaryVal = Number(asciiVal).toString(2);
				convertToBinary(asciiVal);
				
				$("#line5").focus();
				var text = '<ul><li>The given input character <span id="getvalue" class="ct-code-b-yellow">'+ ""
					+ $("#inputChar").val() + '</span> is read from the input stream and stored in the value '+
					'<span class="ct-code-b-yellow">ch</span>.</li><span id="lines"></span></ul>';
				typing('.introjs-tooltiptext', text, function() {
					$(".introjs-nextbutton").show();
				});
				break;
			case 'printLine':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#line5").effect( "transfer", { to: $("#printLineInConsole"), className: "ui-effects-transfer" }, 1500 , function() {
						$("#printLineInConsole").removeClass("opacity00");
						var text = $("#printLineInConsole").text() + $("#inputChar").val();
						typing("#printLineInConsole", text, function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 1000);
						});
					});
				});
				break;
			}
			break;
		case 'animationBox':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'memoryZooming':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#animationBox").removeClass("opacity00");
					var text = "The variable <span class='ct-code-b-yellow'>ch</span> " +
					"occupies <span class='ct-color-lime'>1 byte</span> in the memory with its address (i.e. location).<br>" +
					"Here, the address is <span class='ct-code-b-yellow'>2034</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#memoryBox").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
							$("#arrows").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
								$("#memoryBox, #arrows").removeClass("animated zoomIn");
								$("#bytes").removeClass("visibility-hidden", function() {
									$(".introjs-nextbutton").show();
								});
							});
						});
					});
				});
				break;
			case 'animationPart':
				$('.introjs-helperLayer').one('transitionend', function() {
					$(".panel-body").text($("#inputChar").val()).addClass("opacity00");
					var text = "Here :<br>" +
								"<ul><li><span class='ct-code-b-gold'><b>ch</b></span> is a character variable.</li>" + 
								"<li><span class='ct-code-b-gold'><b>" + $('#inputChar').val() + "</b></span> is a character " +
								"and stored in <span class='ct-code-b-yellow'>ch</span>.</li>" +
								"<li><span class='ct-code-b-gold'><b>2034</b></span> is the address of the " +
								"variable <span class='ct-code-b-yellow'>ch</span>.</li></ul>";
					$(".panel-body").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-nextbutton").show();
						});
					});
				});
				break;
			}
			break;
		case 'preTableDiv2':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "Let us consider one more example using <span class='ct-code-b-yellow'>getchar()</span>."
				typing(".introjs-tooltiptext", text, function() {
					TweenMax.to($("#preTableDiv2"), 1, {opacity: 1, onComplete: function() {
						$(".introjs-nextbutton").show();
					}});
				});
			});
			break;
		case 'preline1':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "In this particular statement you will notice the value return by <span class='ct-code-b-yellow'>getchar()</span> "+
				"is stored as an <span class='ct-code-b-yellow'>int</span>. Which means the character ASCII code will be stored in the "+
				"<span class='ct-code-b-yellow'>ascii_code</span> variable.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'preline2':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "This statement prints the <span class='ct-greenyellow-color'>ASCII</span> code using "+
					"<span class='ct-code-b-yellow'>%d</span> format."
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'preline3':
			$('.introjs-helperLayer').one("transitionend", function() {
				var text = "This statement prints the character represented by <span class='ct-greenyellow-color'>ASCII</span> code using "+
					"<span class='ct-code-b-yellow'>%c</span> format."
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'consoleId2':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'checking':
				$("#inputChar").attr("disabled", false);
				$("#consoleId2").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text ="Please provide a character.";
					typing('.introjs-tooltiptext', text, function() {
						$("#inputChar2").addClass("blinking");
						$("#inputChar2").focus();
						checking("#inputChar2");
					});
				});
				break;
			case 'printPreline1':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#preline2").effect( "transfer", { to: $("#printpreLine1"), className: "ui-effects-transfer" }, 1500 , function() {
						$("#printpreLine1").removeClass("opacity00");
						var givenInput = $("#inputChar2").val();
						asciiVal = givenInput.charCodeAt(0);
						var text = $("#printpreLine1").text() + asciiVal;
						typing("#printpreLine1", text, function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 1000);
						});
					});
				});
				break;
			case 'printPreline2':
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#preline3").effect( "transfer", { to: $("#printpreLine2"), className: "ui-effects-transfer" }, 1500 , function() {
						$("#printpreLine2").removeClass("opacity00");
						var text = $("#printpreLine2").text() + $("#inputChar2").val();
						typing("#printpreLine2", text, function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 1000);
						});
					});
				});
				break;
			}
			break;
		case "restart":
			$(".introjs-skipbutton, .introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-tooltipbuttons').addClass("hide");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	
	introjs.start();
}

	
function convertToBinary(asciiVal) {
//	console.log(asciiVal);
	binaryVal = Number(asciiVal).toString(2);
//	console.log("binaryVal = " + binaryVal);
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

function checking(selector) {
	$(selector).on("click keyup keydown", function(){
		if($(selector).val() == "") {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
		}
	});
}

function animation() {
	var l3 = $("#inputChar").offset();
	var l4 = $("#getvalue").offset();
	var topLen = l3.top - l4.top;
	var leftLen = l3.left - l4.left;
	$("#getvalue").removeClass("opacity00");
	TweenMax.from("#getvalue", 2, {top: topLen, left: leftLen, onComplete: function() {
		afterAnimation();
	}});
}

function afterAnimation() {
	var text = "<li>The <span class='ct-greenyellow-color'>ASCII</span> value of the given character " +
				"is <span class='ct-orange-color'><b>"+ asciiVal +"</b></span>.</li>" +
				"<li>Now the <span class='ct-greenyellow-color'>ASCII</span> value is converted into binary value i.e. " + 
					"<span class='ct-sgreen-color'><b>" + binaryVal + "</b></span>, and it is stored in the variable " +
					"<span class='ct-code-b-yellow'>ch</span>.</li>";
	typing('#lines', text, function() {
		$(".introjs-nextbutton").show();
	});
}