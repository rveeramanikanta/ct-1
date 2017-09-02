var intro;
var typingInterval = 5; 
var selfReferentialStructure = function() {
	$(".line").hide();
	$(document).keydown(function(objEvent) {
	    if (objEvent.keyCode == 9) {  //tab pressed
	        objEvent.preventDefaulemptyt(); // stops its action
	    }
	});
	$("#restart").click(function(){
		location.reload(); 
	});
	intro = introJs();
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
			element : "#codeDiv1",
			intro : "",
			position:"right"
		},{
			element : "#intType",
			intro : "",
			position:"right"
		},{
			element : "#floatType",
			intro : "",
			position:"right"
		},{
			element : "#innerStruct",
			intro : "",
			position:"right"
		},{
			element : "#informationDiv",
			tooltipClass:"hide"
		},{
			element : "#codeDiv",
			intro : "",
			position:"right"
		},{
			element : "#structDeceleration",
			intro : "",
			position:"right"
		},{
			element : "#mainMethod",
			intro : "",
			position:"right"
		},{
			element : "#variables",
			intro : "",
			position:"right"
		},{
			element : "#s1variable",
			intro : "",
			position:"right"
		},{
			element : "#animationDiv",
			intro : "",
			position:"bottom",
			animateStep: "s1VariableAnimation"
		},{
			element : "#s2variable",
			intro : "",
			position:"right"
		},{
			element : "#animationDiv",
			intro : "",
			position:"bottom",
			animateStep : "s2VariableAnimation"
		},{
			element : "#s1Printf",
			intro : "",
			position:"right"
		},{
			element : "#outputDiv",
			animateStep: "s1EnterStmt",
			tooltipClass: "hide"
		},{
			element : "#s1Scanf",
			intro : "",
			position:"right"
		},{
			element : "#outputDiv",
			intro : "",
			animateStep: "s1ScanStmt",
			position:"bottom"
		},{
			element : "#data1",
			tooltipClass:"hide"
		},{
			element : "#s2Printf",
			intro : "",
			position:"right"
		},{
			element : "#outputDiv",
			animateStep: "s2EnterStmt",
			tooltipClass: "hide"
		},{
			element : "#s2Scanf",
			intro : "",
			position:"right"
		},{
			element : "#outputDiv",
			intro : "",
			animateStep: "s2ScanStmt",
			position:"bottom"
		},{
			element : "#data2",
			tooltipClass:"hide"
		},{
			element : "#stmt1",
			intro : "",
			position:"bottom"
		},{
			element : "#animationDiv",
			tooltipClass:"hide",
			animateStep: "stmt1VariableAnimation"
		},{
			element : "#stmt2",
			intro : "",
			position:"bottom"
		},{
			element : "#animationDiv",
			tooltipClass:"hide",
			animateStep: "stmt2VariableAnimation"
		},{
			element : "#printf",
			intro : "",
			position:"bottom"
		},{
			element : "#outputDiv",
			animateStep: "printStmt",
			tooltipClass:"hide"
		},{
			element : "#termination",
			intro : "",
			position:"bottom"
		},{
			element : "#informationDiv",
			tooltipClass:"hide"
		},{
			element : "#restart",
			intro : "",
			position:"right",
			tooltipClass: "introjs-tooltip-min-width-custom"
		}
		]});
	
		intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "codeDiv1":
				var text = "This is the declaration of a user defined datatype" 
					+ " <span class='ct-code-b-yellow'>student</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
		break;	
		case "intType":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "This is a member of struct <span class='ct-code-b-yellow'>student</span> "
						+ "of type <span class='ct-code-b-yellow'>int</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "floatType":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "This is a member of struct <span class='ct-code-b-yellow'>student</span> "
					+ "of type <span class='ct-code-b-yellow'>float</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "innerStruct":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "This statement gives a compile time <span class='ct-code-b-yellow'>error</span> as "
							+ " the declaration of struct <span class='ct-code-b-yellow'>student</span> is not complete yet.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'flips();'>Next &#8594;</a>");
				});
			});
		break;
		case "informationDiv":
			$('.introjs-nextbutton').hide();
			$("#animation1").remove();
			intro.refresh();
			$(".introjs-helperLayer").one('transitionend', function() {
				if (intro._currentStep == 30) {
					$("#lastPoint").removeClass("opacity00");
					var text = "The self referential structures are mainly used in linked list concept of data structures.";
					typing("#lastPoint", text, function() {
						setTimeout(function() {
							intro.nextStep();
						}, 1000);
					});
				} else {
					$("#informationDiv, #mainDiv").removeClass("visibility-hidden");
					$('.introjs-nextbutton').hide();
					$("#li1").fadeTo(1000, 1, function() {
						$("#li2").fadeTo(1000, 1, function() {
							$("#informationDiv").css({"z-index": "999999999"});
							$("#table").removeClass("opacity00");
							intro.nextStep();
						});
					});
				}
			});
			break;
		case "codeDiv" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				$("#codeDiv").removeClass("opacity00").hide().fadeIn(1500,function() {
					var text = "Let us consider an example.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			});
			break;
		case "mainMethod":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "<span class='ct-code-b-yellow'>main()</span> is the starting point of execution of a program."
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "structDeceleration":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "This is the declaration of new user defined datatype <span class='ct-code-b-yellow'>example</span>," 
					+ " which contains one <span class='ct-code-b-yellow'>integer</span> member and one " 
					+ "<span class='ct-code-b-yellow'>pointer</span> member.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "variables":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "We have defined two struct variables "
							+"<span class='ct-code-b-yellow'>s1</span> and "
							+"<span class='ct-code-b-yellow'>s2</span> of type example.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "s1variable":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "All the member variables of the struct example will"
							+" be allocated memory as per their individual datatype."
							+"<br/><br/>Two bytes of memory will be allocated to <span class='ct-code-b-yellow'>s1</span> i.e. the "
							+" self referential structure.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "s2variable":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "All the member variables of the struct example will"
					+" be allocated memory as per their individual datatype."
					+"<br/><br/>Two bytes of memory will be allocated to <span class='ct-code-b-yellow'>s2</span> "
					+" self referential structure.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "animationDiv":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case "s1VariableAnimation" :
						$("#s1memory, #s1").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$("#s1memory, #s1").removeClass("animated zoomIn");
							var text = "Memory allocation of <span class='ct-code-b-yellow'>s1</span>: <br/><br/>"
										+" Two bytes for int <span class='ct-code-b-yellow'>data</span>. <br/><br/>"
										+" Two bytes for pointer <span class='ct-code-b-yellow'>p</span>.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
						break;
						case "s2VariableAnimation" :
						$("#s2memory, #s2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$("#s2memory, #s2").removeClass("animated zoomIn");
							var text = "Memory allocation of <span class='ct-code-b-yellow'>s2</span>: <br/><br/>"
								+" Two bytes for int <span class='ct-code-b-yellow'>data</span>. <br/><br/>"
								+" Two bytes for pointer <span class='ct-code-b-yellow'>p</span>.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
						break;
						case "stmt1VariableAnimation" :
						$("#stmt1").addClass('z-index-class');
						$("#value1").effect( "highlight",{color: 'yellow'}, 1000, function() {	
								$("#address2").effect( "highlight",{color: 'yellow'}, 1000, function() {
								$("#stmt3").effect( "highlight",{color: 'yellow'}, 1000, function() {
									$("#innerspans1").effect( "highlight",{color: 'yellow'}, 1000, function() {
										$("#p").effect( "highlight",{color: 'yellow'}, 1000, function() {
											var l1 = $("#address2").offset()
											$("#p1").text($("#address2").text()).offset({
											  "top":l1.top,
											  "left":l1.left
											});
											TweenMax.to("#p1",1 ,{opacity:1, top :0, left : 0, onComplete:function(){
												$("#arrowMark1").show();
												TweenMax.to("#arrowMark1", 1, {attr:{x2: "54.8%", y2: "64%" }, onComplete:function() {
													$("#stmt1").removeClass('z-index-class');
													intro.nextStep();
												}});
											}});
										});	
									});
								});
							});
						});
						break;
						case "stmt2VariableAnimation" :
						$("#stmt2").addClass('z-index-class');
						$("#stmt4").effect( "highlight",{color: 'yellow'}, 1000, function() {
							$("#innerspans2").effect( "highlight",{color: 'yellow'}, 1000, function() {
								$("#secondp").effect( "highlight",{color: 'yellow'}, 1000, function() {
									$("#value2").effect( "highlight",{color: 'yellow'}, 1000, function() {	
										$("#p2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
											$("#p2").removeClass("animated zoomIn");
											$("#stmt2").removeClass('z-index-class');
											intro.nextStep();
										});
									});	
								});
							});
						});
						break;
				}
			});
			break;
		case "s1Printf":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "This statement is used to print the given string to console.";
				$("#output").append('<span id="enterData1"></span>'
						+ '<span class="padding3 containnumbers" contenteditable="true"'
						+ ' id="s1value" maxlength="3" spellcheck="false"></span><br>');
				numbers();
				typing(".introjs-tooltiptext", text, function() {stmt3
					$("#outputDiv").removeClass("opacity00").hide().fadeIn(1000,function() {
						$('.introjs-nextbutton').show();
					});
				});
			});
			break;
		case "outputDiv":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one('transitionend', function() {
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case "s1EnterStmt":
						var text = "Enter a value for s1 : ";
						typing("#enterData1", text, function() {
							setTimeout(function() {
								intro.nextStep();
							}, 1000);
						});
						break;
					case "s1ScanStmt":
						$("#s1value").effect( "highlight",{color: 'yellow'}, 1500);
						$("#s1value").focus();
						var text = "Please enter a value for s1.";
						typing(".introjs-tooltiptext", text);
						break;
					case "s2EnterStmt":
						var text = "Enter a value for s2 : ";
						typing("#enterData2", text, function() {
							setTimeout(function() {
								intro.nextStep();
							}, 1000);
						});
						break;
					case "s2ScanStmt" :
						$("#s2value").effect( "highlight",{color: 'yellow'}, 1500);
						$("#s2value").focus();
						var text = "Please enter a value for s2.";
						typing(".introjs-tooltiptext", text);
						break;
					case "printStmt" :
						var text = $("#data1").text() + " --> " + $("#data2").text();
						typing("#details", text, function() {
							$("#printdetails").effect( "highlight",{color: 'yellow'}, 1500);
							$("#printdetails").focus();
							var text = "enter a value for s2.";
							typing(".introjs-tooltiptext", text, function() {
								setTimeout(function() {
									intro.nextStep();
								}, 1000);
							});
						});
						break;
				} 
			});
			break;
		case "s1Scanf":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "This statement reads the value of <span class='ct-code-b-yellow'>s1</span> from standard input device(keyboard).";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "data1":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				$("#s1value").attr("contenteditable", false);
				$("#data1").addClass("opacity00");
				$("#data1").text($("#s1value").text());
				$("#data1").removeClass("opacity00").hide().fadeIn(1000,function() {
					intro.nextStep();
				});
			});
			break;
		case "s2Printf" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "This statement reads the value of <span class='ct-code-b-yellow'>s2</span> from standard input device(keyboard).";
				$("#output").append('<span id="enterData2"></span><span class="padding3 containnumbers" contenteditable="true" id="s2value" maxlength="3" spellcheck="false"></span><br>');
				numbers();
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "s2Scanf":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "This statement reads the value of <span class='ct-code-b-yellow'>s2</span> from standard input device(keyboard).";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "data2":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one('transitionend', function() {
				$("#s2value").attr("contenteditable", false);
				$("#data2").addClass("opacity00");
				$("#data2").text($("#s2value").text());
				$("#data2").removeClass("opacity00").hide().fadeIn(1000,function() {
					intro.nextStep();
				});
			});
			break;
		case "stmt1":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = "This statement will store <span class='ct-code-b-yellow'>address</span> of " 
							+ "<span class='ct-code-b-yellow'>s2</span> in pointer variable p of s1.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "stmt2":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
			var text = "This statement will store <span class='ct-code-b-yellow'>NUll</span> in pointer variable p" 
				+ " of s2 i.e, it does not link to the next structure variable.";
			typing(".introjs-tooltiptext", text, function() {
				$('.introjs-nextbutton').show();
			});
		});
		break;
		case "printf":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				$("#output").append('<span id="details"></span>');
				var text = "This statement will prints <span class='ct-code-b-yellow'>s1.data, s1.p->data</span> to the console.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "termination":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "This terminates the <span class='ct-code-b-yellow'>main()</span> method.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "restart":
			$('.introjs-nextbutton').hide();
			$('#informationDiv').css({"z-index": "0"});
			$(".introjs-helperLayer ").one('transitionend', function() {
				TweenMax.to("#restart", 1, {"opacity" : "1", onComplete:function() {
					var text = "Click to restart.";
					typing(".introjs-tooltiptext", text);
				}});
			});
		break;
		}
	});
	intro.start();
	$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton, .introjs-bullets').hide();
}

function typing(typingId, typingContent,callBackFunction) {
	$('.nextButton').hide();
	$(typingId).typewriting( typingContent , {
		"typing_interval": typingInterval,
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		$(selector).html(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function flips() {
	$('.nextButton').hide();
	$("#sValue").effect("highlight",{color: 'blue'}, 800, function() {
		flipEffect("#sValue", "*s", function() {
			$("#sValue").effect("highlight",{color: 'blue'}, 800, function() {
				intro.refresh();
				var text = "Here, adding a <span class='ct-code-b-yellow'>*</span> to "
							+"<span class='ct-code-b-yellow'>s</span> which is a struct pointer variable "
							+" makes the statement valid and it allocates " 
							+ "<span class='ct-code-b-yellow'>2 bytes</span>"
							+ " of memory to share the <span class='ct-code-b-yellow'>address</span>" 
							+ " of struct <span class='ct-code-b-yellow'>student</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		});
	});
}

function numbers() {
	$("[contenteditable=true]").on("keydown keyup", function(e) {
		$(".ct-code-b-red").remove();
		var max = $(this).attr("maxlength");
		if (($(this).text().length) > max) {
			$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Please restrict the length of text to 4 characters.</div>");
			if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
				return true;
			} else {
				e.preventDefault();
			}
		}
		if ($("[contenteditable=true]").text().length == 0) {
			$('.introjs-nextbutton').hide();
		} else {
			$('.introjs-nextbutton').show();
		} 
		
		if (((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105))) {
			return true;
		} else {
			if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
				return true;
			}  else {
			e.preventDefault();
			}
		}
		
	});
}