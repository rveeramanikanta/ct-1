var introjs;
var typingSpeed = 1;
var tl;
var xResult;
var i = 1;
var iCount = 1;	
var sum;
var term;
var tanVal;

var sampleProgramOnFunctionsSinCosReady = function() {
	introGuide();
	tl = new TimelineLite();
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		keyboardNavigation: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		showBullets: false,
		steps : [ {
			element : "#heading",
			intro : "",
			position : "right",
			isCompleted : "false"
		}, {
			element : "#codeAnimation",
			intro : "",
			position : "right",
			isCompleted : "false"
		}, {
			element : "#funcDec1",
			intro : "",
			position : "right",
			isCompleted : "false"
		}, {
			element : "#funcDec2",
			intro : "",
			position : "right",
			isCompleted : "false"
		}, {
			element : "#mainFun",
			intro : "",
			position : "right",
			isCompleted : "false"
		}, {
			element : "#funcDef1",
			intro : "",
			position : "right",
			isCompleted : "false"
		}, {
			element : "#funcDef2",
			intro : "",
			position : "right",
			isCompleted : "false"
		}, {
			element : "#mainVar1",
			intro : "",
			position : "right",
			isCompleted : "false"
		}, {
			element : "#animationBox",
			intro : "",
			position : "left",
			tooltipClass : "hide"
		}, {
			element : "#mainVar2",
			intro : "",
			position : "right"
		}, {
			element : "#animationBox",
			intro : "",
			position : "left",
			tooltipClass: "hide"
		}, {
			element : "#mainPrintf1",
			intro : "",
			position : "right",
			tooltipClass : "hide"
		},{
			element : "#consoleId",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#nScanf",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#consoleId",
			intro : "",
			position : "left"
		}, {
			element : "#animationBox",
			intro : "",
			position : "left",
			tooltipClass : "hide"
		}, {
			element : "#mainPrintf2",
			intro : "",
			position : "right",
			tooltipClass : "hide"
		}, {
			element : "#consoleId",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#xScanf",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#consoleId",
			intro : "",
			position : "left"
		}, {
			element : "#animationBox",
			intro : "",
			position : "left",
			tooltipClass : "hide"
		}, {
			element : "#xInDeg",
			intro : "",
			position : "right"
		}, {
			element : "#mainPrintf3",
			intro : "",
			position : "right",
			tooltipClass : "hide"
		}, {
			element : "#sinCall",
			intro : "",
			position : "right"
		}, {
			element : "#sinFunc",
			intro : "",
			position : "right",
			tooltipClass : "hide"
		}, {
			element : "#animationBox",
			intro : "",
			position : "left",
			tooltipClass : "hide"
		}, {
			element : "#sinVar1",
			intro : "",
			position : "right"
		}, {
			element : "#animationBox",
			intro : "",
			position : "left",
			tooltipClass : "hide"
		}, {
			element : "#sinVar2",
			intro : "",
			position : "right"
		}, {
			element : "#animationBox",
			intro : "",
			position : "left",
			tooltipClass : "hide"
		}, {
			element : "#termDec1",
			intro : "",
			position : "right"
		}, {
			element : "#animationBox",
			intro : "",
			position : "left",
			tooltipClass : "hide"
		}, {
			element : "#forLoop1",
			intro : "",
			position : "right"
		}, {
			element : "#iDec1",
			intro : "",
			position : "right"
		}, {
			element : "#animationBox",
			intro : "",
			position : "left",
			tooltipClass : "hide"
		}, {
			element : "#restart",
			intro : "Click to restart.",
			tooltipClass : "introjs-tooltip-min-width",
			position : "right"
		} ]
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		introjs.refresh();
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "heading":
			if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
				var text = "Let us understand the working of <span class='ct-code-b-yellow'>functions</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			} else {
				$(".introjs-nextbutton").show();
			}
			break;
			
		case "codeAnimation":
			$("#codeAnimation").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var text = "Consider an example.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
			break;
			
		case "funcDec1":
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var text = "A function <span class='ct-code-b-yellow'>sine(int, float)</span> that takes"
						+ " two arguments of type <span class='ct-code-b-yellow'>int</span> and <span class='ct-code-b-yellow'>float</span> and return"
						+ " type <span class='ct-code-b-yellow'>float</span> is declared.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
			break;
			
		case "funcDec2":
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var text = "A function <span class='ct-code-b-yellow'>cosine(int, float)</span> that takes"
						+ " two arguments of type <span class='ct-code-b-yellow'>int</span> and <span class='ct-code-b-yellow'>float</span> and return"
						+ " type <span class='ct-code-b-yellow'>float</span> is declared.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
			break;
			
		case "mainFun":
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var text = "The <span class='ct-code-b-yellow'>main()</span> method, where in the calls to the two functions"
						+ " <span class='ct-code-b-yellow'>sine()</span> and <span class='ct-code-b-yellow'>cosine()</span> are made.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
			break;
			
		case "funcDef1":
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var text = "This is the function definition of <br><span class='ct-code-b-yellow'>sine(int n, float x)</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
			break;
			
		case "funcDef2":
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var text = "This is the function definition of <br><span class='ct-code-b-yellow'>cosine(int n, float x)</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
			break;
			
		case "mainVar1":
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var text = "A variable <span class='ct-code-b-yellow'>x</span> of type <span class='ct-code-b-yellow'>float</span> is declared.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
			break;
			
		case "mainVar2":
			$("#mainVar1").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "A variable <span class='ct-code-b-yellow'>n</span> of type <span class='ct-code-b-yellow'>int</span> is declared.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "mainPrintf1":
		case "mainPrintf2":
		case "mainPrintf3":
		case "mainPrintf4":
		case "mainPrintf5":
			$("#mainVar2, #localVar").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
				}, 500);
			});
			break;
			
		case "xScanf":
		case "nScanf":
			$(".introjs-helperLayer").one("transitionend", function() { 
				setTimeout(function() {
					introjs.nextStep();
				}, 500);
			});
			break;
			
		case "xInDeg":
			$(".introjs-helperLayer").one("transitionend", function() { 
				var text = "To convert x <span class='ct-code-b-yellow'>degrees to radians</span> we use the below formula. "
							+ " <ul> <li class='ct-code-b-yellow'> <span id='xDegRes'>x =</span> " 
							+ " <span id='degVal' class='position-css'> " 
							+ " (<span id='xFlip' class='position-css'>x</span> * 3.14) / 180</span>; </li> </ul>";
				typing(".introjs-tooltiptext", text, function() {
					var xValue = parseFloat($("#num2").val());
					xResult = (xValue * 3.14 / 180).toFixed(6);
					xResult = parseFloat(xResult);
					$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
					$(".introjs-duplicate-nextbutton").click(function() {
						$(".introjs-duplicate-nextbutton").remove();
						flipEffect("#xFlip", xValue, function() {
							flipEffect("#degVal", xResult, function() {
								$('#sinCall').addClass('sine');
								$(".introjs-nextbutton").show();
							});
						});
					});
				});
			});
			break;
			
		case "sinCall":
			$(".introjs-helperLayer").one("transitionend", function() { 
				if ($('#sinCall').hasClass('sine')) {
					$('#sinCall').removeClass('sine');	
					var text = "A call to the function <span class='ct-code-b-yellow'>sine(n, x)</span> is made by sending" 
						+ " <span class='ct-code-b-yellow'>n</span> and <span class='ct-code-b-yellow'>x</span> (actual arguments) as parameters."
						+ " <br><br>This <span class='ct-code-b-yellow'>n</span>"
						+ " and <span class='ct-code-b-yellow'>x</span> are called <span class='ct-code-b-yellow'>actual arguments</span>.";
				} else {
					var text = "The value returned by the function is printed on the console.";
					$('#cosCall').addClass('cosine');
				}
				
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "cosCall":
			$("#sineVal3").removeClass("sin-ival");
			$(".introjs-helperLayer").one("transitionend", function() { 
				if ($('#cosCall').hasClass('cosine')) {
					$('#cosCall').removeClass('cosine');
					var text = "A call to the function <span class='ct-code-b-yellow'>cosine(n, x)</span> is made by sending" 
						+ " <span class='ct-code-b-yellow'>n</span> and <span class='ct-code-b-yellow'>x</span> (actual arguments) as parameters."
						+ " <br>This <span class='ct-code-b-yellow'>n</span>"
						+ " and <span class='ct-code-b-yellow'>x</span> are called <span class='ct-code-b-yellow'>actual arguments</span>."; 
				} else {
					var text = "The value returned by the function is printed on the console.";
				}
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "tanCall":
			$("#cosVal3").removeClass("cos-ival");
			tanVal = parseFloat($("#sinReturn").text()) / parseFloat($("#cosReturn").text());
			tanVal = parseFloat(tanVal);
			$(".introjs-helperLayer").one("transitionend", function() { 
				var text = "The function calls to <span class='ct-code-b-yellow'>sine(n, x)</span> and"
							+ " <span class='ct-code-b-yellow'>cosine(n, x)</span> are made and the return values of"
							+ " these two functions are divided and the result is printed to the console."
							+ " <ul><li><span class='ct-code-b-yellow'>tan(n, x)</span> = "
							+ " <span id='liFlip' class='ct-code-b-yellow position-css'><span id='flipSinCall' class='position-css'>sine(n, x)</span>" 
							+ " / <span id='flipCosCall' class='position-css'>cosine(n, x)</span></span></li></ul>";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
					$(".introjs-duplicate-nextbutton").click(function() {
						$(".introjs-duplicate-nextbutton").remove();
						flipEffect("#flipSinCall", $("#sinReturn").text(), function() {
							flipEffect("#flipCosCall", $("#cosReturn").text(), function() {
								flipEffect("#liFlip", tanVal, function() {
									$(".introjs-nextbutton").show();
								});
							});
						});
					});
				});
			});
			break;
			
		case "sinFunc":
			$(".introjs-helperLayer").one("transitionend", function() { 
				$("#ntransfer1").effect( "transfer", { to: $("#sineFormArg1"), className: "ui-effects-transfer" }, 1000 , function() {
					$("#xtransfer1").effect( "transfer", { to: $("#sineFormArg2"), className: "ui-effects-transfer" }, 1000 , function() {
						$(".introjs-tooltip").removeClass("hide");
						var text = "The two integer arguments <span class='ct-code-b-yellow'>n</span> and <span class='ct-code-b-yellow'>x</span>"
							+ " are called <span class='ct-code-b-yellow'>formal arguments</span>.<br><br> The formal arguments" 
							+ " <span class='ct-code-b-yellow'>n</span> and <span class='ct-code-b-yellow'>x</span> will store the values"
							+ " of the actual arguments <span class='ct-code-b-yellow'>n</span> and <span class='ct-code-b-yellow'>x</span>.";
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-nextbutton").show();
						});
					});
				});
			});
			break;
			
		case "cosFunc":
			$(".introjs-helperLayer").one("transitionend", function() { 
				$("#ntransfer2").effect( "transfer", { to: $("#cosFormArg1"), className: "ui-effects-transfer" }, 1000 , function() {
					$("#xtransfer2").effect( "transfer", { to: $("#cosFormArg2"), className: "ui-effects-transfer" }, 1000 , function() {
						$(".introjs-tooltip").removeClass("hide");
						var text = "The two integer arguments <span class='ct-code-b-yellow'>n</span> and <span class='ct-code-b-yellow'>x</span>"
									+ " are called <span class='ct-code-b-yellow'>formal arguments</span>.<br><br> The formal arguments" 
									+ " <span class='ct-code-b-yellow'>n</span> and <span class='ct-code-b-yellow'>x</span> will store the"
									+ " values of the actual arguments <b>n</b> and <b>x</b>.";
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-nextbutton").show();
						});
					});
				});
			
			});
			break;
			
		case "sinVar1":
			$("#formalDec1").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "A variable <span class='ct-code-b-yellow'>i</span> of type <span class='ct-code-b-yellow'>int</span> is declared.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "cosVar1":
			$("#formalDec1").removeClass("blinking-white");
			$("#cosVar1").addClass("check");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "A variable <span class='ct-code-b-yellow'>i</span> of type <span class='ct-code-b-yellow'>int</span> is declared.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "sinVar2":
			$("#sinVar1").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Two variables <span class='ct-code-b-yellow'>sum</span> and <span class='ct-code-b-yellow'>term</span> of type"
						+ " <span class='ct-code-b-yellow'>float</span> are declared. <br><br><b>Note :</b> <span class='ct-code-b-yellow'>i</span>,"
						+ " <span class='ct-code-b-yellow'>sum</span> and <span class='ct-code-b-yellow'>term</span> are declared inside "
						+ "the function <span class='ct-code-b-yellow'>sine()</span> so these are " 
						+ " <span class='ct-code-b-yellow'>local</span> variables to <span class='ct-code-b-yellow'>sine()</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "cosVar2":
			$("#cosVar2").addClass("check");
			$("#cosVar1").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text =  "Two variables <span class='ct-code-b-yellow'>sum</span> and <span class='ct-code-b-yellow'>term</span> of type"
						+ " <span class='ct-code-b-yellow'>float</span> are declared. <br><br><b>Note : </b><span class='ct-code-b-yellow'>i</span>,"
						+ " <span class='ct-code-b-yellow'>sum</span> and <span class='ct-code-b-yellow'>term</span> are declared inside "
						+ "the function <span class='ct-code-b-yellow'>cosine()</span> so these are " 
						+ " <span class='ct-code-b-yellow'>local</span> variables to <span class='ct-code-b-yellow'>cosine()</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "termDec1":
			$("#sinVar2").removeClass("blinking-white");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The value of <span class='ct-code-b-yellow'>x</span> is assigned to <span class='ct-code-b-yellow'>term</span> " 
							+ "and <span class='ct-code-b-yellow'>sum</span>.";
				typing(".introjs-tooltiptext", text, function() {
					term = xResult;
					sum = xResult; 
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "termDec2":
			$("#cosVar2").removeClass("blinking-white");
			$("#termDec2").addClass("check");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The value of <span class='ct-code-b-yellow'>1</span> is assigned to <span class='ct-code-b-yellow'>term</span> " 
						+ "and <span class='ct-code-b-yellow'>sum</span>.";
				typing(".introjs-tooltiptext", text, function() {
					term = 1;
					sum = 1; 
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "forLoop" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				if(i == 1) {
					var text = "The for-loop calculates the <span class='ct-code-b-yellow'>sine</span> series value.";
				} else {
					var text = "The for-loop calculates the <span class='ct-code-b-yellow'>cosine</span> series value.";
				}
				
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "iDec" + i:
			if(i == 2) {
				$("#iDec2").addClass("check");
			}
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<span class='ct-code-b-yellow'>i</span> is initialized to <span class='ct-code-b-yellow'>1</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		
		case "forCond" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				if(iCount < parseInt($("#num1").val())) {
					if (iCount == 1) {
						var text1 = "begins";
					} else {
						var text1 = "continues";
					}
					var text = "The condition <span class='ct-code-b-yellow'>i < n</span>."
								+ " <br>i.e., <span class='ct-code-b-yellow'>" + iCount + " < " + $("#num1").val() + "</span> condition"
								+ " evaluates to <span class='ct-code-b-yellow'>true</span>, the loop " + text1 + ".";
				} else {
					var text = "The condition <span class='ct-code-b-yellow'>i < n</span>."
								+ " <br>i.e., <span class='ct-code-b-yellow'>" + iCount + " < " + $("#num1").val() + "</span> condition evaluates to "  
								+ " <span class='ct-code-b-yellow'>false</span> the loop ends.";
				}
				typing(".introjs-tooltiptext", text, function() {
					if(i == 1) {
						$("#mainPrintf3").addClass("print-output");
					} else if( i == 2 ) {
						$("#mainPrintf4").addClass("print-output");
					}
					$(".introjs-nextbutton").show();
				});
			});
			break;
		
		
		case "termInFor" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				if($("#cosVal4").hasClass("check")) {
					term = (((-term) * (xResult * xResult)) / ((2 * iCount) * ((2 * iCount)-1))).toFixed(6);
					var text = "The term is calculated using the formula below." 
								+ " <ul><li>term = <span id='flipTerm' class='ct-code-b-yellow position-css'>"
								+ "((-term) * (x * x )) / ((2 * i ) * ((2 * i) - 1))</span></li><ul>";
				} else {
					term = (((-term) * (xResult * xResult)) / ((2 * iCount) * ((2 * iCount)+1))).toFixed(6);
					var text = "The term is calculated using the formula below." 
								+ " <ul><li>term = <span id='flipTerm' class='ct-code-b-yellow position-css'>"
								+ " ((-term) * (x * x )) / ((2 * i ) * ((2 * i) + 1))</span></li><ul>";
				}
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
					$(".introjs-duplicate-nextbutton").click(function() {
						$(".introjs-duplicate-nextbutton").remove();
						flipEffect("#flipTerm", term, function() {
							$(".introjs-nextbutton").show();
						});
					});
				});
			});
			break;
		
		case "sumInFor" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				sum = (parseFloat(sum) + parseFloat(term)).toFixed(6);
				var text = "<span class='ct-code-b-yellow'>Add</span> sum and term then store it in sum. <br><br>sum = "
							+ " <span id='flipSum' class='ct-code-b-yellow position-css'> " 
							+ " sum + term</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
					$(".introjs-duplicate-nextbutton").click(function() {
						$(".introjs-duplicate-nextbutton").remove();
						flipEffect("#flipSum", sum, function() {
							$(".introjs-nextbutton").show();
						});
					});
				});
			});
			break;
			
		case "iInc" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				iCount++;
				var text = "Increment <span class='ct-code-b-yellow'>i</span> by <span class='ct-code-b-yellow'>1</span>. <br>"
							+ "i.e., <span class='ct-code-b-yellow'>i = " + iCount + "</span>";
				typing(".introjs-tooltiptext", text, function() {
					if(iCount < parseInt($("#num1").val())) {
						dynamicSteps();
					} else {
						if($("#cosVal4").hasClass("check")) {
							steps2();
						} else {
							steps();
						}
					}
					if ($("#sineVal3").hasClass("sin-ival")) {
						$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
						$(".introjs-duplicate-nextbutton").click(function() {
							$(".introjs-duplicate-nextbutton").remove();
							$("#sineVal3").addClass("blinking-white");
							flipEffect("#iSineVal", iCount, function() {
								$(".introjs-nextbutton").show();
								$("#sineVal3").removeClass("blinking-white");
							});
						});
					} else {
						$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
						$(".introjs-duplicate-nextbutton").click(function() {
							$(".introjs-duplicate-nextbutton").remove();
							$("#cosVal3").addClass("blinking-white");
							flipEffect("#iCosVal", iCount, function() {
								$(".introjs-nextbutton").show();
								$("#cosVal3").removeClass("blinking-white");
							});
						});
					}
				});
			});
			break;
			
		case "endFor" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
				}, 500);
			});
			break;
			
		case "returnVal" + i:
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The value of <span class='ct-code-b-yellow'>sum</span> is <span class='ct-code-b-yellow'>returned</span>" 
							+ "<br> i.e., sum = <span class='ct-code-b-yellow'>" + sum + "</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "animationBox":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#animationBox").removeClass("opacity00");
				if($("#mainVal1").hasClass("check")) {
					$("#mainVal1").removeClass("check");
					if(introjs._currentStep == 8) {
						tl.to("#boxHeading1, #mainBox", 1, {opacity: 1, onComplete: function() {
							$("#mainVar1").addClass("blinking-white");
							$("#boxHeading1").removeClass("opacity00");
						}});
						tl.to("#mainVal1", 1, {opacity: 1, onComplete: function() {
							$("#mainVal1").removeClass("opacity00");
							$("#mainVal2").addClass("check");
							$(".introjs-tooltip").removeClass("hide");
							var text = "The variable <span class='ct-code-b-yellow'>x</span> will be allocated <b class='ct-code-b-yellow'>4 bytes</b>"
										+" in memory.";
							typing(".introjs-tooltiptext", text, function() {
								$(".introjs-nextbutton").show();
							});
						}});
					} else if(introjs._currentStep == 15) {
						$("input").attr("disabled", true);
						$("#nMainVal").text($("#num1").val());
						var l1 = $("#dAddr").offset();
						$("#nMainVal").offset({"top": l1.top, "left": l1.left});
						$("#dScan").addClass("blinking-white");
						$("#dAddr").delay(1000).queue(function() {
							$("#dScan").removeClass("blinking-white");
							$("#nMainVal").removeClass("opacity00");
							$("#dAddr, #nMainVal").addClass("blinking-white");
							tl.to("#nMainVal", 1, {opacity: 1, top:0, left:0, onComplete: function() {
								$("#dAddr, #nMainVal").removeClass("blinking-white");
								$(".introjs-tooltip").removeClass("hide");
								var text = "The value <span class='ct-code-b-yellow'>" + $("#num1").val() + "</span> is stored in variable " 
											+ "<span class='ct-code-b-yellow'>n</span>.";
								typing(".introjs-tooltiptext", text, function() {
									$("#mainVal1").removeClass("check");
									$("#mainVal2").addClass("check");
									$(".introjs-nextbutton").show();
								});
							}});
						});
					}
					
				} else if($("#mainVal2").hasClass("check")) {
					if(introjs._currentStep == 10) {
						$("#mainVar2").addClass("blinking-white");
						tl.to("#mainVal2", 1, {opacity: 1, onComplete: function() {
							$("#mainVal2").removeClass("opacity00");
							$("#mainVal1").addClass("check");
							$(".introjs-tooltip").removeClass("hide");
							var text = "The variable <span class='ct-code-b-yellow'>n</span> will be allocated <span class='ct-code-b-yellow'>2 bytes</b>"
								+" in memory.";
							typing(".introjs-tooltiptext", text, function() {
								$(".introjs-nextbutton").show();
							});
						}});
					} else if(introjs._currentStep == 20) {
						$("input").attr("disabled", true);
						if($("#num2").val().includes(".")) {
							$("#num2").text($("#num2").val());
						} else {
							$("#num2").text($("#num2").val() + ".0");
						}
						$("#xMainVal").text($("#num2").val());
						var l2 = $("#fAddr").offset();
						$("#xMainVal").offset({"top": l2.top, "left": l2.left});
						$("#fScan").addClass("blinking-white");
						$("#fAddr").delay(1000).queue(function() {
							$("#fScan").removeClass("blinking-white");
							$("#xMainVal").removeClass("opacity00");
							$("#fAddr, #xMainVal").addClass("blinking-white");
							tl.to("#xMainVal", 1, {opacity: 1, top:0, left:0, onComplete: function() {
								$("#fAddr, #xMainVal").removeClass("blinking-white");
								$('.introjs-tooltip').removeClass("hide");
								var text = "The value <span class='ct-code-b-yellow'>" + $("#num2").val() + "</span> is stored in variable " 
											+ "<span class='ct-code-b-yellow'>x</span>.";
								typing(".introjs-tooltiptext", text, function() {
									$("#mainVal2").removeClass("check");
									$("#sineVal1").addClass("check");
									$(".introjs-nextbutton").show();
								});
							}});
						});
					}
					
				} else if($("#sineVal1").hasClass("check")) {
					if(introjs._currentStep == 25) {
						var l1 = $("#sineFormArg1").offset();
						var l2 = $("#sineFormArg2").offset();
						$("#nSineVal").offset({"top": l1.top, "left": l1.left});
						$("#xSineVal").offset({"top": l2.top, "left": l2.left});
						$("#nSineVal").text($("#num1").val());
						$("#xSineVal").text(xResult);
						tl.to("#boxHeading2, #sineBox", 1, {opacity: 1, onComplete: function() {
							$("#boxHeading2").removeClass("opacity00");
							$("#formalDec1").addClass("blinking-white");
						}});
						tl.to("#sineVal1", 1, {opacity: 1, onComplete: function() {
							$("#sineVal1").removeClass("opacity00");
						}});
						tl.to("#sineVal2", 1, {opacity: 1, onComplete: function() {
							$("#sineVal2").removeClass("opacity00");
							$("#formalDec1").removeClass("blinking-white");
							$("#nSineVal, #sineFormArg1").addClass("blinking-white");
							$("#nSineVal").removeClass("opacity00");
						}});
						tl.to("#nSineVal", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
							$("#nSineVal, #sineFormArg1").removeClass("blinking-white");
							$("#xSineVal, #sineFormArg2").addClass("blinking-white");
							$("#xSineVal").removeClass("opacity00");
						}});
						tl.to("#xSineVal", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
							$("#xSineVal, #sineFormArg2").removeClass("blinking-white");
							$(".introjs-tooltip").removeClass("hide");
							var text = "The variables (formal arguments) <span class='ct-code-b-yellow'>n</span> and "
										+ "<span class='ct-code-b-yellow'>x</span> are allocated memory of 2 bytes and 4 bytes at a different "
										+ "location.<br><br>When a call is made with <span class='ct-code-b-yellow'>n</span> and "
										+ "<span class='ct-code-b-yellow'>x</span> values to the function <span class='ct-code-b-yellow'>sine()"
										+ "</span>, <span class='ct-code-b-yellow'>x</span> is <span class='ct-code-b-yellow'>converted to radians"
										+ "</span> before the function call to <span class='ct-code-b-yellow'>sine()</span> is made.<br>"
										+ " <br>Now <span class='ct-code-b-yellow'>n = "+$("#num1").val()+" " 
										+ "</span> and <span class='ct-code-b-yellow'>x = "+$("#xSineVal").text()+" " 
										+ "</span>.";
							typing(".introjs-tooltiptext", text, function() {
								$("#sineVal1").removeClass("check");
								$("#sineVal3").addClass("check");
								$(".introjs-nextbutton").show();
							});
						}});
					}
				} else if($("#sineVal3").hasClass("check")) {
					if(introjs._currentStep == 27) {
						tl.to("#sineVal3", 1, {opacity: 1, onComplete: function() {
							$("#sinVar1").addClass("blinking-white");
							$("#sineVal3").removeClass("opacity00");
							$('.introjs-tooltip').removeClass("hide");
							var text = "The variable <span class='ct-code-b-yellow'>i</span> is allocated 2 bytes in memory.";
							typing(".introjs-tooltiptext", text, function() {
								$("#sineVal3").removeClass("check");
								$("#sineVal4").addClass("check");
								$(".introjs-nextbutton").show();
							});
						}});
					} else if(introjs._currentStep == 34) {
						$("#iSineVal").text(1);
						tl.to("#iSineVal", 1, {opacity: 1, onComplete: function() {
							$("#iSineVal").removeClass("opacity00");
							$('.introjs-tooltip').removeClass("hide");
							var text = "The value <span class='ct-code-b-yellow'>1</span> is stored in variable <span class='ct-code-b-yellow'>i" 
										+ "</span> of <span class='ct-code-b-yellow'>sine()</span> function.";
							typing(".introjs-tooltiptext", text, function() {
								if(iCount < parseInt($("#num1").val())) {
									dynamicSteps();
								} else {
									steps();
								}
								$("#sineVal3").removeClass("check");
								$("#sineVal4").addClass("check")
								$(".introjs-nextbutton").show();
							});
						}});
					}
				} else if($("#sineVal4").hasClass("check")) {
					if(introjs._currentStep == 29) {
						tl.to("#sineVal4", 1, {opacity: 1, onComplete: function() {
							$("#sinVar2").addClass("blinking-white");
							$("#sineVal4").removeClass("opacity00");
						}});
						tl.to("#sineVal5", 1, {opacity: 1, onComplete: function() {
							$("#sineVal5").removeClass("opacity00");
							$('.introjs-tooltip').removeClass("hide");
							var text = "The variables <span class='ct-code-b-yellow'>sum</span> and <span class='ct-code-b-yellow'>term</span>"
									+ " are allocated 4 bytes each in memory.";
							typing(".introjs-tooltiptext", text, function() {
								$(".introjs-nextbutton").show();
							});
						}});
					} else if(introjs._currentStep == 31) {
						$("#sumSineVal").text(xResult);
						$("#tSineVal").text(xResult);
						tl.to("#sumSineVal", 1, {opacity: 1, onComplete: function() {
							$("#sumSineVal").removeClass("opacity00");
						}});
						tl.to("#tSineVal", 1, {opacity: 1, onComplete: function() {
							$("#tSineVal").removeClass("opacity00");
							$('.introjs-tooltip').removeClass("hide");
							var text = "Now the value of <span class='ct-code-b-yellow'>x</span> is stored in"
										+ " <span class='ct-code-b-yellow'>sum</span> and <span class='ct-code-b-yellow'>term</span>.";
							typing(".introjs-tooltiptext", text, function() {
								$("#sineVal4").removeClass("check");
								$("#sineVal3").addClass("check");
								$(".introjs-nextbutton").show();
							});
						}});
					} else {
						$("#sumSineVal").addClass("blinking-orange");
						$("#tSineVal").addClass("blinking-orange");
						$('.introjs-tooltip').removeClass("hide");
						var text = "The values of <span class='ct-code-b-yellow'>sum</span> and " 
									+ " <span class='ct-code-b-yellow'>term</span> are updated."; 
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
							$(".introjs-duplicate-nextbutton").click(function() {
								$(".introjs-duplicate-nextbutton").remove();
								flipEffect("#sumSineVal", sum, function() {
									flipEffect("#tSineVal", term, function() {
										$("#sumSineVal, #tSineVal").removeClass("blinking-orange");
										$("#sineVal4").removeClass("check");
										$("#cosVal1").addClass("check")
										$(".introjs-nextbutton").show();
									});
								});
							});
						});
					}
				} else if($("#cosVal1").hasClass("check")) {
					i = 2;
					var l1 = $("#cosFormArg1").offset();
					var l2 = $("#cosFormArg2").offset();
					$("#nCosVal").offset({"top": l1.top, "left": l1.left});
					$("#xCosVal").offset({"top": l2.top, "left": l2.left});
					$("#nCosVal").text($("#num1").val());
					$("#xCosVal").text(xResult);
					tl.to("#boxHeading3, #cosBox", 1, {opacity: 1, onComplete: function() {
						$("#boxHeadin3").removeClass("opacity00");
						$("#formalDec2").addClass("blinking-white");
					}});
					tl.to("#cosVal1", 1, {opacity: 1, onComplete: function() {
						$("#cosVal1").removeClass("opacity00");
					}});
					tl.to("#cosVal2", 1, {opacity: 1, onComplete: function() {
						$("#cosVal2").removeClass("opacity00");
						$("#formalDec2").removeClass("blinking-white");
						$("#nCosVal, #cosFormArg1").addClass("blinking-white");
						$("#nCosVal").removeClass("opacity00");
					}});
					tl.to("#nCosVal", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
						$("#nCosVal, #cosFormArg1").removeClass("blinking-white");
						$("#xCosVal, #cosFormArg2").addClass("blinking-white");
						$("#xCosVal").removeClass("opacity00");
					}});
					tl.to("#xCosVal", 1, {opacity: 1, top: 0, left: 0, onComplete: function() {
						$("#xCosVal").removeClass("blinking-white");
						$("#cosFormArg2").removeClass("blinking-white");
						$('.introjs-tooltip').removeClass("hide");
						var text = "The variables (formal arguments) <span class='ct-code-b-yellow'>n</span> and"
									+ " <span class='ct-code-b-yellow'>x</span> are allocated memory of 2 bytes and 4 bytes"
									+ " at a different location.<br><br>When a call is made with <span class='ct-code-b-yellow'>n</span>"
									+ " and <span class='ct-code-b-yellow'>x</span> values to the function"
									+ " <span class='ct-code-b-yellow'>sine()</span>, <span class='ct-code-b-yellow'>x</span> is"
									+ " <span class='ct-code-b-yellow'>converted to radians</span> before the function call to"
									+ " <span class='ct-code-b-yellow'>cosine()</span> is"
									+ " made. <br> Now <span class='ct-code-b-yellow'>n = "+$("#num1").val()+" " 
									+ "</span> and <span class='ct-code-b-yellow'>x = "+$("#xSineVal").text()+" " 
									+ "</span>."; 
						typing(".introjs-tooltiptext", text, function() {
							$("#cosVal1").removeClass("check");
							$("#cosVal3").addClass("check");
							$(".introjs-nextbutton").show();
						});
					}});
				} else if($("#cosVal3").hasClass("check")) {
					if($("#cosVar1").hasClass("check")) {
						$("#cosVar1").removeClass("check")
						tl.to("#cosVal3", 1, {opacity: 1, onComplete: function() {
							$("#cosVar1").addClass("blinking-white");
							$("#cosVal3").removeClass("opacity00");
							$('.introjs-tooltip').removeClass("hide");
							var text = "The variable <span class='ct-code-b-yellow'>i</span> is allocated 2 bytes in memory.";
							typing(".introjs-tooltiptext", text, function() {
								$("#cosVal3").removeClass("check");
								$("#cosVal4").addClass("check");
								$(".introjs-nextbutton").show();
							});
						}});
					} else if($("#iDec2").hasClass("check")) {
						$("#iDec2").removeClass("check")
						$("#iCosVal").text(1);
						tl.to("#iCosVal", 1, {opacity: 1, onComplete: function() {
							$("#iCosVal").removeClass("opacity00");
							$('.introjs-tooltip').removeClass("hide");
							var text = "The value <span class='ct-code-b-yellow'>1</span> is stored in the variable"
										+ " <span class='ct-code-b-yellow'>i</span> of " 
										+ " <span class='ct-code-b-yellow'>cosine()</span> function.";
							typing(".introjs-tooltiptext", text, function() {
								$("#cosVal3").removeClass("check");
								$("#cosVal4").addClass("check");
								iCount = 1;
								if(iCount < parseInt($("#num1").val())) {
									dynamicSteps();
								} else {
									steps2();
								}
								$(".introjs-nextbutton").show();
							});
						}});
					}
				} else if($("#cosVal4").hasClass("check")) {
					if($("#cosVar2").hasClass("check")) {
						$("#cosVar2").removeClass("check");
						tl.to("#cosVal4", 1, {opacity: 1, onComplete: function() {
							$("#cosVar2").addClass("blinking-white");
							$("#cosVal4").removeClass("opacity00");
						}});
						tl.to("#cosVal5", 1, {opacity: 1, onComplete: function() {
							$("#cosVal5").removeClass("opacity00");
							$('.introjs-tooltip').removeClass("hide");
							var text = "The variables <span class='ct-code-b-yellow'>sum</span> and <span class='ct-code-b-yellow'>term</span>"
										+ " are allocated 4 bytes each in memory.";
							typing(".introjs-tooltiptext", text, function() {
								$(".introjs-nextbutton").show();
							});
						}});
					} else if($("#termDec2").hasClass("check")) {
						$("#termDec2").removeClass("check")
						$("#sumCosVal").text(1);
						$("#tCosVal").text(1);
						tl.to("#sumCosVal", 1, {opacity: 1, onComplete: function() {
							$("#sumCosVal").removeClass("opacity00");
						}});
						tl.to("#tCosVal", 1, {opacity: 1, onComplete: function() {
							$("#tCosVal").removeClass("opacity00");
							$('.introjs-tooltip').removeClass("hide");
							var text = "The value <span class='ct-code-b-yellow'>1</span> is stored in <span class='ct-code-b-yellow'>"
										+ "sum</span> and <span class='ct-code-b-yellow'>term</span>.";
							typing(".introjs-tooltiptext", text, function() {
								$("#cosVal4").removeClass("check");
								$("#cosVal3").addClass("check");
								$(".introjs-nextbutton").show();
							});
						}});
					} else {
						$("#sumCosVal, #tCosVal").addClass("blinking-orange");
						$('.introjs-tooltip').removeClass("hide");
						var text = "The values of <span class='ct-code-b-yellow'>sum</span> and " 
									+ " <span class='ct-code-b-yellow'>term</span> are updated.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
							$(".introjs-duplicate-nextbutton").click(function() {
								$(".introjs-duplicate-nextbutton").remove();
								flipEffect("#sumCosVal", sum, function() {
									flipEffect("#tCosVal", term, function() {
										$("#sumCosVal, #tCosVal").removeClass("blinking-orange");
										$("#cosVal4").removeClass("check");
										$("#cosVal1").addClass("check")
										$(".introjs-nextbutton").show();
									});
								});
							});
						});
					}
				} 
			});
			break;
			
		case "consoleId":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#consoleId").removeClass("opacity00");
				if(introjs._currentStep == 12) {
					var text = "Enter number of terms : <span id='scanfVal1'></span>";
					typing("#runEditor1", text, function() {
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					});
				} else if(introjs._currentStep == 14) {
					var text1 = "<input id='num1' maxlength='1' spellcheck='false', class=int-num span-box>"
					typing("#scanfVal1", text1, function() {
						var text2 = "Please enter an integer number."
						typing(".introjs-tooltiptext", text2, function() {
							$("#num1").effect("highlight", {color: 'yellow'}, 500).focus();
							$('.int-num').on("keydown", function(e) {
								$(".errMsg").remove();
								var max = $(this).attr("maxlength"); 
								if ($.inArray(e.keyCode, [46, 8, 9, 27, 35, 36, 37, 39]) !== -1) {
									return;
								}
								if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 51)) && ((e.keyCode < 96) || (e.keyCode > 99))) {
									e.preventDefault();
								}
								if ($(this).val().length > max) {
									$(".introjs-tooltiptext").append("<div class='errMsg'>Max Length 1 digit only</div>");
									e.preventDefault();
								}
							});
							
							$(".int-num").on("keyup", function(e) {
								$(".errMsg").remove();
								var max = $(this).attr("maxlength");
								if ($(this).val() == "") {
									$(".introjs-nextbutton").hide();
									$(".introjs-tooltiptext").append("<div class='errMsg'>Please enter a number between 1 and 3.</div>");
								} else {
									$(".introjs-nextbutton").show();
								}
								if ($(".int-num").val().length < 1) {
									$(".introjs-nextbutton").hide();
								}
							});
						});
					});
				} else if(introjs._currentStep == 17) {
					var text = "Enter number of degrees : <span id='scanfVal2'></span>";
					typing("#runEditor2", text, function() {
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					});
				} else if(introjs._currentStep == 19) {
					var text1 = "<input id='num2' maxlength='3' spellcheck='false' class='float-num span-box'>";
					typing("#scanfVal2", text1, function() {
						var text2 = "Please enter a float number."
						typing(".introjs-tooltiptext", text2, function() {
							$("#num2").effect("highlight", {color: 'yellow'}, 500).focus();
							$('.float-num').on("keydown", function(e) {
								$(".errMsg").remove();
								var max = $(this).attr("maxlength"); 
								
								if ($(this).val().length > max) {
									if (e.keyCode == 110 || e.keyCode == 190) {
										e.preventDefault();
									}
								}
								if ($.inArray(e.keyCode, [46, 8, 9, 27, 35, 36, 37, 39, 110, 190]) !== -1) {
									return;
								}
								if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
									e.preventDefault();
								}
								if ($(this).val().length > max) {
									$(".introjs-tooltiptext").append("<div class='errMsg'>Max Length 3 digits only</div>");
									e.preventDefault();
								}
							});
							
							$(".float-num").on("keyup", function(e) {
								$(".errMsg").remove();
								var max = $(this).attr("maxlength");
								
								if ($(this).val() == "") {
									$(".introjs-nextbutton").hide();
									$(".introjs-tooltiptext").append("<div class='errMsg'>Please enter a float number.</div>");
								} else {
									$(".introjs-nextbutton").show();
								}
								if ($(".float-num").val().length < 1) {
									$(".introjs-nextbutton").hide();
								}
								if (($("#num2").val().charAt(0) == ".") || ($("#num2").val().charAt($(".float-num").val().length-1) == ".")) {
									$(".introjs-nextbutton").hide();
									if (($("#num2").val().charAt(0) == ".")) {
										$(".introjs-tooltiptext").append("<div class='errMsg'>Enter number first</div>");
									} else {
										$(".introjs-tooltiptext").append("<div class='errMsg'>Number can't end with dot</div>");
									}
								}
							});
						});
					});
				} else if($("#mainPrintf3").hasClass("print-output")) {
					$("#mainPrintf3").removeClass("print-output");
					var text = "The sine value = <span id='sinReturn' style='color: lime; font-weight: bold;'>" + sum + "</span>";
					typing("#runEditor3", text, function() {
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					});
				} else if($("#mainPrintf4").hasClass("print-output")) {
					$("#mainPrintf4").removeClass("print-output");
					var text = "The cosine value = <span id='cosReturn' style='color: lime; font-weight: bold;'>" + sum + "</span>";
					typing("#runEditor4", text, function() {
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					});
				} else {
					var text = "The tan value = <span style='color: lime; font-weight: bold;'>" + tanVal + "</span>";
					typing("#runEditor5", text, function() {
						setTimeout(function() {
							introjs.nextStep();
						}, 1000);
					});
				}
			});
			break;
			
		case "restart":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restart").removeClass("opacity00");
				$("#restart").click(function() {
					location.reload();
				});
			});
			break;
		}
	});
	introjs.start();
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
			introjs._introItems[introjs._currentStep].tooltipClass = "";
			introjs._introItems[introjs._currentStep].isCompleted = "true";
		}
	});
}

function flipEffect(element, value, callBackFunction) {
	tl.to(element, 0.5, {opacity:1, rotationX: -90, onComplete: function() {
		$(element).text(value);
	}});
	tl.to(element, 0.5, {opacity:1, rotationX: 0, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function getStep(element, intro, tooltipClass, position) {
	var step = {}
	if (typeof element != 'undefined') {
		step['element'] = element;
	}
	if (typeof intro != 'undefined') {
		step['intro'] = intro;
	}
	if (typeof tooltipClass != 'undefined') {
		step['tooltipClass'] = tooltipClass;
	}
	if (typeof position != 'undefined') {
		step['position'] = position;
	}
	return step;
}

function nextStepRight(id, val) {
	var dynamicStep = getStep(id, "", "", "right");
	introjs.insertOption(introjs._currentStep + val, dynamicStep);
}

function nextStepLeft(val) {
	var dynamicStep = getStep("#animationBox", "", "hide", "left");
	introjs.insertOption(introjs._currentStep + val, dynamicStep);
}

function nextStepHide(id, val) {
	var dynamicStep = getStep(id, "", "hide", "");
	introjs.insertOption(introjs._currentStep + val, dynamicStep);
}

function dynamicSteps() {
	nextStepRight("#forCond" + i, 1);
	nextStepRight("#termInFor" + i, 2);
	nextStepRight("#sumInFor" + i, 3);
	nextStepRight("#iInc" + i, 4);
}

function steps() {
	nextStepRight("#forCond" + i, 1);
	nextStepHide("#endFor" + i, 2);
	nextStepLeft(3);
	nextStepRight("#returnVal" + i, 4);
	nextStepRight("#sinCall", 5);
	nextStepHide("#mainPrintf3", 6);
	nextStepHide("#consoleId", 7);
	nextStepHide("#mainPrintf4", 8);
	nextStepRight("#cosCall", 9);
	
	var dynamicStep = getStep("#cosFunc", "", "hide", "right");
	introjs.insertOption(introjs._currentStep + 10, dynamicStep);
	
	nextStepLeft(11);
	nextStepRight("#cosVar1", 12);
	nextStepLeft(13);
	nextStepRight("#cosVar2", 14);
	nextStepLeft(15);
	nextStepRight("#termDec2", 16);
	nextStepLeft(17);
	nextStepRight("#forLoop2", 18);
	nextStepRight("#iDec2", 19);
	nextStepLeft(20);
}

function steps2() {
	nextStepRight("#forCond" + i, 1);
	nextStepHide("#endFor" + i, 2);
	nextStepLeft(3);
	nextStepRight("#returnVal" + i, 4);
	nextStepRight("#cosCall", 5);
	nextStepHide("#mainPrintf4", 6);
	nextStepHide("#consoleId", 7);
	nextStepHide("#mainPrintf5", 8);
	nextStepRight("#tanCall", 9);
	nextStepHide("#mainPrintf5", 10);
	nextStepHide("#consoleId", 11);
}