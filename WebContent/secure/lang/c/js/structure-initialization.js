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
					element : "#heading",
					intro : "",
					position : "left",
				}, {
					element : "#firstPre",
					intro : "",
					position : "right",
					action : "firstSyntax",
					tooltipClass: 'hide',
				}, {
					element : "#structDeclaration",
					intro : "",
					position : "top",
					action : "firstSyntax",
				}, {
					element : "#structInitialization",
					intro : "",
					position : "right",
					action : "firstSyntax",
				}, {
					element : "#memoryArea",
					intro : "",
					position : "top",
					tooltipClass: 'hide',
					action : "firstSyntax",
				}, {
					element : "#printMethod",
					intro : "",
					tooltipClass: "hide",
					action : "firstSyntax",
				}, {
					element : "#outputDiv",
					intro : "",
					tooltipClass: "hide",
					position : "right",
					action : "firstSyntax",
				} ]
		});
	
	intro.onbeforechange(function(targetElement) {
		var ElementId = targetElement.id;
		var action = intro._introItems[intro._currentStep].action;
		switch (ElementId) {
		case "heading":
			$("#firstPre").addClass("opacity00");
			break;
		case "firstPre":
			$("#firstPre").addClass("opacity00");
			break;
		case "structInitialization":
			if (action == "firstSyntax") {
				$("#memoryArea").addClass("opacity00");
				$("#bLetter, #bPages, #bPrice").empty().removeAttr('style');
				$('.flash').removeClass('flash');
				$(".discard").removeClass("discard-red");
			}
			break;
		case "memoryArea":
			if (action == "firstSyntax") {
				$("#memoryArea").addClass("opacity00");
				$("#bLetter, #bPages, #bPrice").empty().removeAttr('style');
				$('.flash').removeClass('flash');
				$(".discard").removeClass("discard-red");
			}
			break;
			
		}
	});

	intro.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-skipbutton, .introjs-prevbutton').hide();
		
		// ********************** start ************back button logic
		
		if (intro._introItems[intro._currentStep]["tooltipClass"] == "hide") {
			intro._introItems[intro._currentStep]["animation"] = "repeat";
		}
		
		if (intro._introItems[intro._currentStep]["isCompleted"]) {
			if (intro._currentStep != 0) {
				$('.introjs-prevbutton').show();
			}
			$('.introjs-nextbutton').show();
			return;
		}
		
		if (intro._introItems[intro._currentStep]["animation"] != "repeat") {
			intro._introItems[intro._currentStep]["isCompleted"] = true;
		}
		
		// ********************** end ************back button logic
		
		var ElementId = targetElement.id;
		var action = intro._introItems[intro._currentStep].action;
		switch (ElementId) {
		case "firstPre":
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#firstPre").removeClass("opacity00");
				if (action == "firstSyntax") {
					$("#firstPre").addClass("zoomIn animated");
					setTimeout(function() {
						$("#firstPre").removeClass("zoomIn animated");
						$('.introjs-tooltip').removeClass('hide');
						var text = "Let us consider an example.";
						typing(".introjs-tooltiptext",text, function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					}, 950);
				} else if (action == "secondSyntax") {
					$('.introjs-tooltip').removeClass('hide');
					reAnimating();
					$("#arrVal").append("<span id='charVal'>115</span>, <span id='intVal'>1.25</span>"
							+ ", '<span id='floatVal'>a</span>'").addClass("display-none");
					var text = "Now let us initialize the values of <span class='ct-code-b-yellow'>Book</span>"
								+ " <span class='ct-code-b-yellow'>b</span> with different datatypes that have been declared."; 
					typing(".introjs-tooltiptext", text, function() {
						$("#arrVal").fadeIn("500");
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					})
				} else if (action == "thirdSyntax") {
					$('.introjs-tooltip').removeClass('hide');
					reAnimating();
					$("#arrVal").append("'<span id='charVal'>s</span>', <span id='intVal'>25</span>").addClass("display-none");
					var text = "Let us initialize the <span class='ct-code-b-yellow'>Book</span> with only two values."
					typing(".introjs-tooltiptext", text, function() {
						$("#arrVal").fadeIn("500");
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					})
				} else if (action == "fourthSyntax") {
					$('.introjs-tooltip').removeClass('hide');
					reAnimating();
					$("#arrVal").append("'<span id='charVal'>k</span>', <span id='intVal'>555</span>, <span id='floatVal'>14.45</span>,"
							+ " <span class='discard'>22</span>, <span class='discard'>'M'</span> ").addClass("display-none");
					var text = "Now, let us initialize <span class='ct-code-b-yellow'>Book</span> with more than 3 values";
					typing(".introjs-tooltiptext", text, function() {
						$("#arrVal").fadeIn("500");
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				}
			});
		break;
		
		case "structDeclaration":
			
			$(".introjs-helperLayer").one("transitionend", function() {
				if (action == "firstSyntax") {
					var text = "This is a <span class='ct-code-b-yellow'>structure</span> declaration for a user"
								+" defined datatype <span class='ct-code-b-yellow'>Book</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else if (action == "fourthSyntax") {
					var text = "In this <span class='ct-code-b-yellow'>structure</span> declaration we have declared only two members"
								+" for new user defined data type <span class='ct-code-b-yellow'>Book</span>";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				}
			});
			
		break;
		
		case "heading" :
				var text = "Let us learn the initialization of <span class='ct-code-b-yellow'>structure</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-prevbutton").hide();
					$(".introjs-nextbutton").show();
				});
			break;
		
		case "structInitialization":
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#structInitialization").removeClass("visibility-hidden");
				if (action == "firstSyntax") {
					var text = "This is a <span class='ct-code-b-yellow'>structure</span> definition which allocates"
								+" memory to the <span class='ct-code-b-yellow'>Book</span> <span class='ct-code-b-yellow'>b</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else if (action == "secondSyntax") {
					var text = "For example "
							+ " <ul><li><span class='ct-code-b-yellow'>letter</span> is declared as <span class='ct-code-b-yellow'>char</span>,"
							+ " but initialized now to an <span class='ct-code-b-yellow'>int</span> value.</li>"
							+ " <li><span class='ct-code-b-yellow'>pages</span> is declared as <span class='ct-code-b-yellow'>int</span>,"
							+ " but initialized now to a <span class='ct-code-b-yellow'>float</span> value.</li>"
							+ " <li><span class='ct-code-b-yellow'>price</span> is declared as <span class='ct-code-b-yellow'>float</span>,"
							+ " but initialized now to a <span class='ct-code-b-yellow'>char</span> value.</li></ul>"
							+ " Let us check the output when we print these values.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				}  else if (action == "thirdSyntax") {
					var text = "We are initializing the values for <span class='ct-code-b-yellow'>char</span> and <span class='ct-code-b-yellow'>int</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else if (action == "fourthSyntax") {
					var text ="We have initialized <span class='ct-code-b-yellow'>Book</span> with 5 values.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} 
			});
		break;	
		
		case "memoryArea":
			$(".introjs-nextbutton, .introjs-prevbutton").hide();//memoryArea
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#memoryArea").removeClass("opacity00");
				$('.table-border > span').addClass('display-none').removeAttr('style');
				if (action == "firstSyntax") {
					var text = "The members of the <span class='ct-code-b-yellow'>Book</span> <span class='ct-code-b-yellow'>b</span>"
								+ " can be accessed by using the dot(.)"
								+" operator i.e.,</br></br> <span class='ct-code-b-yellow'>b.letter</span>, <span class='ct-code-b-yellow'>b.pages</span>,"
								+" and <span class='ct-code-b-yellow'>b.price</span>.";
					if (intro._direction = "backward") {
						$("#outputDiv").addClass("opacity00");	
					}
					memoryArea(text);
				} else if (action == "secondSyntax") {
					$('.introjs-tooltip').removeClass('hide');
					var text = "<ul><li> <span class='ct-code-b-yellow'>115</span> is an <span class='ct-code-b-yellow'>integer</span>,"
								+" but is stored in a <span class='ct-code-b-yellow'>char</span>"
								+" variable <span class='ct-code-b-yellow'>letter</span>.<br> Here <span class='ct-code-b-yellow'>115</span> is"
								+" treated as an <span class='ct-code-b-yellow'>ASCII</span> value <span class='ct-code-b-yellow'>5</span>"
								+ " and is stored.</li><span id='first'></span></ul>";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").hide();
						
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
								var text = "<li><span class='ct-code-b-yellow'>1.25</span> is a <span class='ct-code-b-yellow'>float</span>,"
											+" but is stored in <span class='ct-code-b-yellow'>int</span>"
											+" variable <span class='ct-code-b-yellow'>pages</span>.<br> Here <span class='ct-code-b-yellow'>.25</span>"
											+" is truncated and only <span class='ct-code-b-yellow'>1</span> is stored."
											+"</li><span id='second'></span>";
								typing("#first", text, function() {
									$("#span2, #intVal").addClass("flash");
									$("#bPages").addClass("flash");
									setTimeout(function() {
										$("#bPages").fadeIn("slow", function() {
											var text = "<li><span class='ct-code-b-yellow'>'a'</span> is a <span class='ct-code-b-yellow'>"
														+"character</span> constant, that is stored in "
														+ " <span class='ct-code-b-yellow'>float</span> variable"
														+ " <span class='ct-code-b-yellow'>price</span>.<br>"
														+ " The <span class='ct-code-b-yellow'>ASCII</span> value for the character"
														+ " <span class='ct-code-b-yellow'>'a'</span> is <span class='ct-code-b-yellow'>97</span>"
														+ " and is stored as <span class='ct-code-b-yellow'>97.00</span>.</li>";
											typing("#second", text, function() {
												$("#span3, #floatVal").addClass("flash");
												$("#bPrice").addClass("flash");
												setTimeout(function() {
													$("#bPrice").fadeIn("slow", function() {
														$(".introjs-nextbutton, .introjs-prevbutton").show();
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
					$('.introjs-tooltip').removeClass('hide');
					var text = "When we try to access the float value <span class='ct-code-b-yellow'>b.price</span>,"
								+ " we get some <span class='ct-code-b-yellow'>garbage</span> value.";
					typing(".introjs-tooltiptext",text,function() {
						$(".introjs-nextbutton, .introjs-prevbutton").hide();
						$("#bLetter").text($("#charVal").text());
						$("#bPages").text($("#intVal").text());
						$("#bPrice").text("0.00");
						$("#bLetter").fadeIn("slow", function() {
							$("#bPages").fadeIn("slow", function() {
								$("#bPrice").fadeIn("slow", function() {
									$(".introjs-nextbutton, .introjs-prevbutton").show();
								});
							})
						})
					});
				} else if (action == "fourthSyntax") {
					var text = "Here,the first <span class='ct-code-b-yellow'>3</span> values will be assigned and rest of the values are discarded.";
					memoryArea(text);
				}
			});
		break;
		
		case "printMethod":
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.flash').removeClass('flash');
				if (intro._direction == "forward") {
					setTimeout(function() {
						console.log('printMethod');
						intro.nextStep();
					}, 400);
				} else {
					setTimeout(function() {
						$('#output').empty();
						intro.previousStep();
					}, 400);
				}
				
			})
		break;
			
		case "outputDiv":
			var arr1 = [];
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			$("#printMethod").addClass("zIndex");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#outputDiv").removeClass("opacity00");				
				if (action === "firstSyntax") {
					if (intro._direction == "backward") {
						arr1 = ['M',999,11.007];
						$('#charVal').text(arr1[0]);
						$('#intVal').text(arr1[1]);
						$('#floatVal').text(arr1[2]);
						$("#bLetter").text($("#charVal").text());
						$("#bPages").text($("#intVal").text());
						$("#bPrice").text($("#floatVal").text());
						$('.table-border > span').removeClass('display-none');
					}
					$('#output').empty();
							commonCode();
					outPutDiv(function() {
						$('.introjs-tooltip').removeClass("hide");
						var text = "Let us consider another example.";
						typing(".introjs-tooltiptext", text,function() {
							dynamicSteps("secondSyntax", false, true);
						})
					});
				} else if (action == "secondSyntax") {
					if (intro._direction == "backward") {
						$("#arrVal").empty().append("<span id='charVal'>115</span>, <span id='intVal'>1.25</span>"
								+ ", '<span id='floatVal'>a</span>'");
					}
					var charVal = String.fromCharCode($("#charVal").text());
					var intVal = Math.floor($("#intVal").text());
					var floatVal = ($("#floatVal").text().charCodeAt(0)).toFixed(2);
					$("#bLetter").text(charVal);
					$("#bPages").text(intVal);
					$("#bPrice").text(floatVal);
					$('.table-border > span').removeClass('display-none');
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
					if (intro._direction == "backward") {
						$("#arrVal").empty().append("'<span id='charVal'>s</span>', <span id='intVal'>25</span>");
						$("#bLetter").text('s');
						$("#bPages").text("25");
						$("#bPrice").text("0.00");
						$('.table-border > span').removeClass('display-none');
						
					}
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
					$('#output').empty();
							commonCode();
					outPutDiv(function() {
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
			$('.introjs-tooltip').css('min-width','150px');
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restart").removeClass("opacity00");
			});
		break;
		
		}
	});
	intro.start();
	
	$("#restart").click(function() {
		 location.reload();
	});
}

function commonCode() {
	$("#output").append("<span class='display-none'>" + $("#charVal").text() +"</span>"
			+"  <span class='display-none'>"+ parseInt($("#intVal").text()) +"</span> "
			+" <span class='display-none'>"+ $("#floatVal").text() +"</span>");
}
function memoryArea(text) {
	$('.introjs-tooltip').removeClass('hide');
	typing(".introjs-tooltiptext",text,function() {
		$(".introjs-nextbutton, .introjs-prevbutton").hide();
		$("#bLetter").text($("#charVal").text());
		$("#bPages").text($("#intVal").text());
		$("#bPrice").text($("#floatVal").text());
		$("#span1, #charVal, #bLetter").addClass("flash");
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
						$(".introjs-nextbutton, .introjs-prevbutton").show();
						$(".discard").addClass("discard-red");
					});
				},1400);
			});
			},1000);
		});
		},600);
	});
}

function reAnimating() {
	$("#arrVal").empty();
	$(".flash").removeClass("flash");
	$("#bLetter, #bPages, #bPrice").removeAttr('style').empty();
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
					$(".introjs-nextbutton, .introjs-prevbutton").show();
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
	if (intro._introItems[intro._currentStep]["visited_flag"] == undefined) {
		intro._introItems[intro._currentStep]["visited_flag"] = true ;
		var step = 0;
		
		var nextStep = {
			element : "#firstPre",
			intro : "",
			position : "right",
			tooltipClass: 'hide',
			action : action,
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
		
		if (isRequired) {
			var nextStep = {
				element : "#structDeclaration",
				intro : "",
				position : "top",
				action : action,
			}
			intro.insertOption(intro._currentStep + ++step, nextStep);
		}
		
		var nextStep = {
			element : "#structInitialization",
			intro : "",
			position : "right",
			action : action,
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
		
		if (isMemory) {
			var nextStep = {
				element : "#memoryArea",
				intro : "",
				position : "bottom",
				tooltipClass: "hide",
				action : action,
			}
			intro.insertOption(intro._currentStep + ++step, nextStep);
		}
		var nextStep = {
			element : "#printMethod",
			intro : "",
			position : "right",
			tooltipClass: "hide",
			action : action,
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
		
		var nextStep = {
			element : "#outputDiv",
			intro : "",
			tooltipClass: "hide",
			position : "right",
			action : action,
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
	}
}


function typing(selector, text, callBackFunction) {
	var typingSpeed = 1;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}
	