var count = 1;

var structureIntializationReady = function() {
	intro =  introJs();
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
						element : ".ct-demo-heading",
						intro : "",
						position : "left",
					}, {
						element : "#firstPre",
						intro : "",
						position : "right",
						action : "firstSyntax"
					}, {
						element : "#structDeclaration",
						intro : "",
						position : "top",
						action : "firstSyntax"
					}, {
						element : "#structInitialization",
						intro : "",
						position : "right",
						action : "firstSyntax"
					}, {
						element : "#memoryArea",
						intro : "",
						position : "top",
						action : "firstSyntax"
					}, {
						element : "#printMethod",
						intro : "",
						tooltipClass: "hide",
						action : "firstSyntax"
					}, {
						element : "#outputDiv",
						intro : "",
						tooltipClass: "hide",
						position : "right",
						action : "firstSyntax"
					} ]
})

	intro.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-skipbutton, .introjs-prevbutton').hide();
		var ElementId = targetElement.id;
		var action = intro._introItems[intro._currentStep].action;
		switch (ElementId) {
		
		case "firstPre":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#firstPre").removeClass("opacity00");
				if (action == "firstSyntax") {
					$("#firstPre").addClass("zoomIn animated");
					setTimeout(function() {
						var text = "Let us consider an example."
						typing(".introjs-tooltiptext",text, function() {
							$("#firstPre").removeClass("zoomIn animated");
						})
					}, 950);
				} else if (action == "secondSyntax") {
					reAnimating();
					$("#arrVal").append("<span id='charVal'>115</span>, <span id='intVal'>1.25</span>"
							+ ", '<span id='floatVal'>a</span>'").addClass("display-none");
					var text = "Now let us initialize the values of <span class='ct-code-b-yellow'>book</span>"
								+ " <span class='ct-code-b-yellow'>b</span> with different datatypes than that have been declared."; 
					typing(".introjs-tooltiptext", text, function() {
						$("#arrVal").fadeIn("500");
					})
				} else if (action == "thirdSyntax") {
					reAnimating();
					$("#arrVal").append("'<span id='charVal'>s</span>', <span id='intVal'>25</span>").addClass("display-none");
					var text = "Let us initialize <span class='ct-code-b-yellow'>book</span> with only two values."
					typing(".introjs-tooltiptext", text, function() {
						$("#arrVal").fadeIn("500");
					})
				} else if (action == "fourthSyntax") {
					reAnimating();
					$("#arrVal").append("'<span id='charVal'>k</span>', <span id='intVal'>555</span>, <span id='floatVal'>14.45</span>,"
							+ " <span class='discard'>22</span>, <span class='discard'>'M'</span> ").addClass("display-none");
					var text = "Now, let us initialize <span class='ct-code-b-yellow'>book</span> with more than 3 values";
					typing(".introjs-tooltiptext", text, function() {
						$("#arrVal").fadeIn("500");
					})
				}
			});
		break;
		
		case "structDeclaration":
			$(".introjs-helperLayer").one("transitionend", function() {
				if (action == "firstSyntax") {
					var text = "This is a <span class='ct-code-b-yellow'>structure</span> declaration for a user"
								+" defined datatype <span class='ct-code-b-yellow'>book</span>.";
					typing(".introjs-tooltiptext",text)
				} else if (action == "fourthSyntax") {
					var text = "In this <span class='ct-code-b-yellow'>structure</span> declaration we have declared only two members"
								+" for new user defined data type <span class='ct-code-b-yellow'>book</span>";
					typing(".introjs-tooltiptext",text);
				}
			});
		break;
		
		case "structInitialization":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#structInitialization").removeClass("visibility-hidden");
				if (action == "firstSyntax") {
					var text = "This is a <span class='ct-code-b-yellow'>structure</span> definition which allocates"
								+" memory to the <span class='ct-code-b-yellow'>book</span> <span class='ct-code-b-yellow'>b</span>.";
					typing(".introjs-tooltiptext",text);
				} else if (action == "secondSyntax") {
					var text = "For example "
							+ " <ul><li><span class='ct-code-b-yellow'>letter</span> is declared as <span class='ct-code-b-yellow'>char</span>,"
							+ " but initialized now to <span class='ct-code-b-yellow'>int</span> value.</li>"
							+ " <li><span class='ct-code-b-yellow'>pages</span> is declared as <span class='ct-code-b-yellow'>int</span>,"
							+ " but initialized now to <span class='ct-code-b-yellow'>float</span> value.</li>"
							+ " <li><span class='ct-code-b-yellow'>price</span> is declared as <span class='ct-code-b-yellow'>float</span>,"
							+ " but initialized now to <span class='ct-code-b-yellow'>char</span> value.</li></ul>"
							+ " Let us check the output when we print these values.";
					typing(".introjs-tooltiptext",text);
				}  else if (action == "thirdSyntax") {
					var text = "We are initializing values for <span class='ct-code-b-yellow'>char</span> and <span class='ct-code-b-yellow'>int</span>.";
					typing(".introjs-tooltiptext",text);
				} else if (action == "fourthSyntax") {
					var text ="We have initialized <span class='ct-code-b-yellow'>book</span> with 5 values.";
					typing(".introjs-tooltiptext",text);
				} 
				
			});
		break;	
		
		case "memoryArea":
			$(".introjs-nextbutton").hide();//memoryArea
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#memoryArea").removeClass("opacity00");
				if (action == "firstSyntax"){
					var text = "The members of the <span class='ct-code-b-yellow'>book</span> <span class='ct-code-b-yellow'>b</span>"
								+ " can be accessed by using the dot(.)"
								+" operator i.e., <span class='ct-code-b-yellow'>b.letter</span>, <span class='ct-code-b-yellow'>b.pages</span>,"
								+" and <span class='ct-code-b-yellow'>b.price</span>.";
					memoryArea(text);
				} else if (action == "secondSyntax") {
					var text = "<ul><li>Here <span class='ct-code-b-yellow'>115</span> is an <span class='ct-code-b-yellow'>integer</span>"
								+" but that is stored in a <span class='ct-code-b-yellow'>char</span>"
								+" variable <span class='ct-code-b-yellow'>letter</span>. Here <span class='ct-code-b-yellow'>115</span> is"
								+" treated as <span class='ct-code-b-yellow'>ASCII</span> value <span class='ct-code-b-yellow'>5</span>"
								+ " and stored.</li><span id='first'></span></ul>";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").hide();
						
						var charVal = String.fromCharCode($("#charVal").text());
						var intVal = Math.floor($("#intVal").text());
						var floatVal = ($("#floatVal").text().charCodeAt(0)).toFixed(2);
						$("#bLetter").text(charVal);
						$("#bPages").text(intVal);
						$("#bPrice").text(floatVal);
						$("#span1, #charVal").addClass("flash");
						$("#bLetter").addClass("flash");
						setTimeout(function() {
							$("#bLetter").fadeIn("slow", function() {
								var text = "<li><span class='ct-code-b-yellow'>1.25</span> is a <span class='ct-code-b-yellow'>float</span>"
											+" but that is stored in <span class='ct-code-b-yellow'>int</span>"
											+" variable <span class='ct-code-b-yellow'>pages</span>. Here <span class='ct-code-b-yellow'>.25</span>"
											+" truncated and only <span class='ct-code-b-yellow'>1</span> is stored."
											+"</li><span id='second'></span>";
								typing("#first", text, function() {
									$(".introjs-nextbutton").hide();
									$("#span2, #intVal").addClass("flash");
									$("#bPages").addClass("flash");
									setTimeout(function() {
										$("#bPages").fadeIn("slow", function() {
											var text = "<li><span class='ct-code-b-yellow'>'a'</span> is a <span class='ct-code-b-yellow'>"
														+"character</span> constant, that is stored in "
														+ " <span class='ct-code-b-yellow'>float</span> variable"
														+ " <span class='ct-code-b-yellow'>price</span>."
														+ " The <span class='ct-code-b-yellow'>ASCII</span> value for the character"
														+ " <span class='ct-code-b-yellow'>'a'</span> is <span class='ct-code-b-yellow'>97</span>."
														+ " is stored.</li>";
											typing("#second", text, function() {
												$(".introjs-nextbutton").hide();
												$("#span3, #floatVal").addClass("flash");
												$("#bPrice").addClass("flash");
												setTimeout(function() {
													$("#bPrice").fadeIn("slow", function() {
														$(".introjs-nextbutton").show();
													});
												}, 1400);
											});
										});
									}, 600);
								});
							});
						}, 600);
					});
				} else if (action == "thirdSyntax") {
					var text = "When we try to access the float value <span class='ct-code-b-yellow'>b.price</span>"
								+ " we get some <span class='ct-code-b-yellow'>garbage</span> value.";
					typing(".introjs-tooltiptext",text,function() {
						$(".introjs-nextbutton").hide();
						$("#bLetter").text($("#charVal").text());
						$("#bPages").text($("#intVal").text());
						$("#bPrice").text("0.00");
						$("#bLetter").fadeIn("slow", function() {
							$("#bPages").fadeIn("slow", function() {
								$("#bPrice").fadeIn("slow", function() {
									$(".introjs-nextbutton").show();
								});
							})
						})
					});
				} else if (action == "fourthSyntax") {
					var text = "Here, first 3 values will be assigned and rest of the values are discarded.";
					memoryArea(text);
				}
			});
		break;
		
		case "printMethod":
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					$(".introjs-nextbutton").click();
				}, 400);
			})
		break;
			
		case "outputDiv":
			$(".introjs-nextbutton").hide();
			$("#printMethod").addClass("zIndex");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#outputDiv").removeClass("opacity00");				
				if (action === "firstSyntax") {
							commonCode();
					outPutDiv(function() {
						$('.introjs-tooltip').removeClass("hide");
						var text = "Let us consider another example.";
						typing(".introjs-tooltiptext", text,function() {
							dynamicSteps("secondSyntax", false, true);
							
						})
					});
				} else if (action == "secondSyntax") {
					var charVal = String.fromCharCode($("#charVal").text());
					var intVal = Math.floor($("#intVal").text());
					var floatVal = ($("#floatVal").text().charCodeAt(0)).toFixed(2);
					$("#output").append("<span class='display-none'>" + charVal +"</span>"
							+"  <span class='display-none'>"+ intVal +"</span> "
							+" <span class='display-none'>"+ floatVal +"</span>");
					outPutDiv(function() {
						$('.introjs-tooltip').removeClass("hide");
						var text = "Let us consider another example.";
						typing(".introjs-tooltiptext", text,function() {
							dynamicSteps("thirdSyntax", false, true);
						})
					});
				} else if (action == "thirdSyntax") {
					console.log(" in the third..")
					$("#output").append("<span class='display-none'>" + $("#charVal").text() +"</span>"
							+"  <span class='display-none'>"+ parseInt($("#intVal").text()) +"</span> "
							+" <span class='display-none'>"+ $("#bPrice").text() +"</span>");
					outPutDiv(function() {
						$('.introjs-tooltip').removeClass("hide");
						var text = "Let us consider another example.";
						typing(".introjs-tooltiptext", text, function() {
							dynamicSteps("fourthSyntax", false, true);
						});
					})
				} else if (action == "fourthSyntax") {
							commonCode();
					outPutDiv(function() {
					//$('.introjs-tooltip').removeClass("hide");
						var nextStep = {
								element : "#restart",
								intro : "Click to restart.",
								position : "right",
						}
						intro.insertOption(intro._currentStep + 1, nextStep);
						setTimeout(function() {
							intro.nextStep();
						}, 500);
					});
				}
			});
		break;
			
		case "restart":
			$('.intorjs-tooltip').css({'min-width': '110px'});
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restart").removeClass("opacity00");
			});
		break;
		
		}
	})
	intro.start();
	var text = "Here we are going to learn the initialization of <span class='ct-code-b-yellow'>structure</span>.";
	typing(".introjs-tooltiptext", text, function() {
		$(".introjs-nextbutton").show();
	})
	$("#restart").click(function() {
		 location.reload();
	})
}

function commonCode() {
	$("#output").append("<span class='display-none'>" + $("#charVal").text() +"</span>"
			+"  <span class='display-none'>"+ parseInt($("#intVal").text()) +"</span> "
			+" <span class='display-none'>"+ $("#floatVal").text() +"</span>");
}
function memoryArea(text) {
	typing(".introjs-tooltiptext",text,function() {
		$(".introjs-nextbutton").hide();
		$("#bLetter").text($("#charVal").text());
		$("#bPages").text($("#intVal").text());
		$("#bPrice").text($("#floatVal").text());
		$("#span1, #charVal").addClass("flash");
		$("#bLetter").addClass("flash");
		setTimeout(function() {
		$("#bLetter").fadeIn("slow", function() {
			$("#span2, #intVal").addClass("flash");
			$("#bPages").addClass("flash");
			setTimeout(function() {
			$("#bPages").fadeIn("slow", function() {
				$("#span3, #floatVal").addClass("flash");
				$("#bPrice").addClass("flash");
				setTimeout(function() {
					$("#bPrice").fadeIn("slow", function() {
						$(".introjs-nextbutton").show();
						$(".discard").addClass("discard-red");
					});
				},1400);
			})
			},1000);
		})
		},600);
	});
}

function reAnimating() {
	$("#arrVal").empty();
	$("#bLetter, #bPages, #bPrice").text("");
	$(".flash").removeClass("flash");
	$("#bLetter, #bPages, #bPrice").removeAttr('style');
	$("#output").empty();
}

function outPutDiv(callBackFunction) {
$(".char").addClass("flash");
$("#output span:eq(0)").fadeIn("slow", function() {
	$("#output span:eq(0)").addClass("flash");
	setTimeout(function() {
		$(".decimal").addClass("flash");
		$("#output span:eq(1)").fadeIn("slow", function() {
			$("#output span:eq(1)").addClass("flash");
			setTimeout(function() {
				$(".float").addClass("flash");
				$("#output span:eq(2)").fadeIn("slow", function() {
					$("#output span:eq(2)").addClass("flash");
					$("#printMethod").removeClass("zIndex");
					$(".introjs-nextbutton").show();
					if (typeof callBackFunction === "function") {
						callBackFunction();
					}
				})
			},400);
		})
	},200);
})
}

function dynamicSteps(action, isRequired, isMemory) {
	var step = 0;
	
		var nextStep = {
			element : "#firstPre",
			intro : "",
			position : "right",
			action : action
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
		
		if (isRequired) {
			var nextStep = {
				element : "#structDeclaration",
				intro : "",
				position : "top",
				action : action
			}
			intro.insertOption(intro._currentStep + ++step, nextStep);
		}
		
		var nextStep = {
			element : "#structInitialization",
			intro : "",
			position : "right",
			action : action
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
		
		if (isMemory) {
			var nextStep = {
				element : "#memoryArea",
				intro : "",
				position : "bottom",
				action : action
			}
			intro.insertOption(intro._currentStep + ++step, nextStep);
		}
		var nextStep = {
			element : "#printMethod",
			intro : "",
			position : "right",
			tooltipClass: "hide",
			action : action
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
		
		var nextStep = {
			element : "#outputDiv",
			intro : "",
			tooltipClass: "hide",
			position : "right",
			action : action
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
}


function typing(selector, text, callBackFunction) {
	var typingSpeed = 5;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").show();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	})
}
