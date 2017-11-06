var count = 1;
var i = 1;
var j = 1;
var intro;
var typingInterval = 5;
var usageOfUnion = function() {
	$(".line").hide();
	$(".text-class").hide();
	$(document).keydown(function(objEvent) {
	    if (objEvent.keyCode == 9) {  //tab pressed
	        objEvent.preventDefault(); // stops its action
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
				element : "#codeDiv",
				intro : "",
				position:"right"
			},{
				element : "#definition",
				intro : "",
				position:"right"
			},{
				element : "#memoryallocation1",
				intro : "",
				position:"right"
			},{
				element : "#codeDiv",
				intro : "",
				position:"left"
			},{
				element : "#memoryallocation1",
				intro : "",
				position:"right"
			},{
				element : "#informationDiv",
				tooltipClass:"hide"
			},{
				element : "#codeDiv1",
				intro : "",
				position:"right"
			},{
				element : "#union",
				intro : "",
				position:"right"
			},{
				element : "#mainMethod",
				intro : "",
				position:"right"
			},{
				element : "#variable",
				intro : "",
				position:"right"
			},{
				element : "#animationDiv",
				intro : "",
				position:"bottom",
				animateStep: "animation1",
				tooltipClass:"hide"
			},{
				element : "#noValue",
				intro : "",
				position:"right"
			},{
				element : "#animationDiv",
				intro : "",
				position:"bottom",
				animateStep: "animation2",
				tooltipClass:"hide"
			},{
				element : "#printno",
				intro : "",
				position:"right"
			},{
				element : "#outputDiv",
				tooltipClass:"hide"
			},{
				element : "#priceValue",
				intro : "",
				position:"right"
			},{
				element : "#animationDiv",
				intro : "",
				position:"bottom",
				animateStep: "animation3",
				tooltipClass:"hide"
			},{
				element : "#printPirce",
				intro : "",
				position:"right"
			},{
				element : "#outputDiv",
				tooltipClass:"hide"
			},{
				element : "#sValue",
				intro : "",
				position:"right"
			},{
				element : "#animationDiv",
				intro : "",
				position:"bottom",
				animateStep: "animation4",
				tooltipClass:"hide"
			},{
				element : "#prints",
				intro : "",
				position:"right"
			},{
				element : "#outputDiv",
				tooltipClass:"hide"
			},{
				element : "#termination",
				intro : "",
				position:"right"
			},{
				element : "#restart",
				intro : "",
				tooltipClass: "introjs-tooltip-min-width-custom",
				position:"right"
			}
			]});
		
			intro.onafterchange(function(targetElement) {
			var elementId = targetElement.id;
			switch (elementId) {
			case "codeDiv":
				$('.introjs-nextbutton').hide();
				$('.nextButton').hide();
				if (intro._currentStep == 3) {
					$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "<span class='ct-code-b-yellow'>unions</span> can be used to access " 
							+ "all the members from one memory slot i.e, we can save the memory.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'flipToUnion()'>Next &#8594;</a>");
					});
					});
				} else {
					var text = "Let us consider an example, <br> This is the declaration of new user defined" 
								+ " datatype <span class='ct-code-b-yellow'>student</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'arrows()'>Next &#8594;</a>");
					});
				}
			break;
			case "definition":
				$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This is the definition of the new structure variable st for the user defined datatype student.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "memoryallocation1":
				$('.nextButton').remove();
				$('.introjs-nextbutton').hide();
				$("#four").removeClass('circle');
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#memoryallocation1").removeClass("opacity00");
					if (intro._currentStep == 4) {
						$("#table1").effect("highlight",{color: 'yellow'}, 1500, function() {
							flipTable(function() {
								var text = "Here <span class='ct-code-b-yellow'>4 bytes</span> of memory is allocated for st.";
								typing(".introjs-tooltiptext", text, function() {
									$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' " 
											+ "onclick ='showingMemoryOfb()'>Next &#8594;</a>");
								})
							});
						});
					} else {
						$("#table1").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							var text = "In structure each member can be accessed at any time i.e, space is required for" 
										+ " each and every member of the structure anytime.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					}
				});
				break;
			case "informationDiv":
				$('.introjs-nextbutton').hide();
				$("#mainDiv").remove();
				intro.refresh();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#informationDiv, #mainDiv").removeClass("visibility-hidden");
					$('.introjs-nextbutton').hide();
					$("#li1").fadeTo(1000, 1, function() {
						$("#li2").fadeTo(1000, 1, function() {
							$("#informationDiv").css({"z-index": "999999999"});
							$("#table").removeClass("opacity00");
							intro.nextStep();
						});
					});
				}); 
				break;
			case "codeDiv1":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#codeDiv1").removeClass("opacity00").hide().fadeIn(1500, function() {
						$("#outputDiv").removeClass('opacity00');
						var text = "Let us consider an example code for <span class='ct-code-b-yellow'>unions</span>.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			case "union":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This is the declaration which describes that a new user defined datatype emp is created with 3 members."; 
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "mainMethod":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "main() is the operating system call which is the starting execution piont of a program.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "variable":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This is the definition of union variables and it allocates memory to e.";
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
						case "animation1" :
							$("#e, #ememory").removeClass("opacity00").addClass("animated zoomIn");
							var text = "In union only one member can be accessed at a time.";
							$(".introjs-tooltip").removeClass("hide");
							typing(".introjs-tooltiptext", text, function() {
								$("#e, #ememory").removeClass("animated zoomIn");
								$('.introjs-nextbutton').show();
							});
							break;
						case "animation2":
							$("#dotValue").removeClass("opacity00");
							$("#dotValue").effect("highlight",{color: 'yellow'}, 1500, function() {
								flipEffect("#dotValue", "e.no (2 bytes)", function() {
									$("#data3").effect("highlight",{color: 'yellow'}, 1500);
									$("#data4").effect("highlight",{color: 'yellow'}, 1500, function() {
										$("#data3, #data4").hide();
										$("#data5").removeClass('hide');
										$("#data5").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
											var text = "Here, only the integer value <span class='ct-code-b-yellow'>99</span> will be stored" 
														+ " in <span class='ct-code-b-yellow'>2 bytes</span>.Here," 
														+ " only <span class='ct-code-b-yellow'>e.no</span> value can be accessed.";
											$(".introjs-tooltip").removeClass("hide");
											typing(".introjs-tooltiptext", text, function() {
												$("#res" + i).removeClass('checking');
												$("#data5").removeClass("animated zoomIn");
												$('.introjs-nextbutton').show();
											});
										});
									});
								});
							});
							break;
						case "animation3" :
							$("#dotValue").removeClass("opacity00");
							$("#dotValue").effect("highlight",{color: 'yellow'}, 1500, function() {
								flipEffect("#dotValue", "e.price (4 bytes)", function() {
									$("#data1").effect("highlight",{color: 'yellow'}, 1500);
									$("#data2").effect("highlight",{color: 'yellow'}, 1500);
									$("#data3").effect("highlight",{color: 'yellow'}, 1500);
									$("#data4").effect("highlight",{color: 'yellow'}, 1500, function() {
										$("#data1, #data2, #data3, #data4").hide();
										$("#data6").removeClass('hide');
										$("#data6").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
											var text = "The float value <span class='ct-code-b-yellow'>5.5</span> will be stored " 
													+ "in <span class='ct-code-b-yellow'>4 bytes</span>.Here, only e.price value can be accessed.";
											$(".introjs-tooltip").removeClass("hide");
											typing(".introjs-tooltiptext", text, function() {
												$("#res" + i).removeClass('checking');
												$("#data5").removeClass("animated zoomIn");
												i++;
												$('.introjs-nextbutton').show();
											});
										});
									});
								});
							});
							break;
						case "animation4":
							$("#dotValue").removeClass("opacity00");
							$("#dotValue").effect("highlight",{color: 'yellow'}, 1500, function() {
								flipEffect("#dotValue", "e.s (1 bytes)", function() {
									$("#data4").effect("highlight",{color: 'yellow'}, 1500, function() {
										$("#data4").removeClass("opacity00");
										$("#data4").addClass("animated zoomIn").one("animationend", function() {
											var text = "char value will be stored in only " 
													+ "<span class='ct-code-b-yellow'>1 byte</span>.Here, only e.s value can be accessed.";
											$(".introjs-tooltip").removeClass("hide");
											typing(".introjs-tooltiptext", text, function() {
												$("#res" + i).removeClass('checking');
												$("#data5").removeClass("animated zoomIn");
												i++;
												$('.introjs-nextbutton').show();
											});
										});
									});
								});
							});
							break;
					}
				});
				break;
			case "outputDiv":
				$(".introjs-helperLayer ").one('transitionend', function() {
					console.log("sdmfgdf");
					if ($("#output" + j).hasClass('print-result')) {
						$("#output" + j).text($("#res" + j).text());
						$("#output" + j).removeClass('print-result');
						j++;
						setTimeout(function() {
							intro.nextStep();
						}, 1000);
					}
				});
				break;
			case "printno":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text="This statement will print the string in console.";
					typing(".introjs-tooltiptext", text, function() {
						$("#output").append('<span id="output1"></span><br>');
						$("#output1").addClass('print-result');
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "printPirce":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text="This statement will print the string in console.";
					typing(".introjs-tooltiptext", text, function() {
						$("#output").append('<span id="output2"></span><br>');
						$("#output2").addClass('print-result');
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "prints":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text="This statement will print the string in console.";
					typing(".introjs-tooltiptext", text, function() {
						$("#output").append('<span id="output3"></span>');
						$("#output3").addClass('print-result');
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "noValue":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "Here int value <span class='ct-code-b-yellow'>99</span> is assigned to a variable no of variable e.";
					typing(".introjs-tooltiptext", text, function() {
						$("#data5").text($("#res1").text());
						$("#res1").addClass('checking');
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "priceValue":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#data6").addClass("opacity00");
					$("#data5").hide();
					$("#data3, #data4").show();
					var text = "Here float <span class='ct-code-b-yellow'>5.5</span> is assigned to a variable price of variable e.";
					typing(".introjs-tooltiptext", text, function() {
						$("#data6").text($("#res2").text());
						$("#res2").addClass('checking');
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "sValue":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#data6").hide();
					$("#data1, #data2, #data3, #data4").show();
					var text = "Here char value <span class='ct-code-b-yellow'>A</span> is assigned to a variable no of variable e.";
					typing(".introjs-tooltiptext", text, function() {
						$("#data4").text($("#res3").text()).addClass('opacity00');
						$("#res3").addClass('checking');
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "termination":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This is the termination of main() method.";
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
						typing(".introjs-tooltiptext", text, function() {
							
						});
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

function flipTable(callBackFunction) {
	TweenMax.to($(".table1-css , .table2-css"), 0.5, {rotationX : -90, onComplete:function() {
		$(".table1-css").addClass('opacity00');
		$(".table2-css").removeClass('opacity00');
		TweenMax.to($(".table1-css , .table2-css"), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function arrows() {
	$('.nextButton').remove();
	var text = "Total of <span class='ct-code-b-yellow'>7 bytes</span> will be allocated to variable of struct student st.";
	typing(".introjs-tooltiptext", text, function() {
		$("#arrow1").append("<span class='arrow-div' id = 'arrowId" + count + "'>" +
				"<span class='fa fa-long-arrow-left fa-2x arrow-gray-css arrow-left' id='arrowLeft" 
				+ count + "'></span>" +
		"</span>");
		$("#byte1").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			$("#arrow2").append("<span class='arrow-div' id = 'arrowId" + count + "'>" +
					"<span class='fa fa-long-arrow-left fa-2x arrow-gray-css arrow-left' id='arrowLeft" 
					+ count + "'></span>" +
			"</span>");
			$("#byte2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
				$("#arrow3").append("<span class='arrow-div' id = 'arrowId" + count + "'>" +
						"<span class='fa fa-long-arrow-left fa-2x arrow-gray-css arrow-left' id='arrowLeft" + count + "'></span></span>");
				$("#byte3").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					$('.introjs-nextbutton').show();
				});
			});
		});
	});
}

function flipToUnion() {
	$('.nextButton').remove();
		$("#struct1").effect("highlight",{color: 'yellow'}, 1500, function() {
			flipEffect("#struct1", "union", function() {
			$("#struct2").effect("highlight",{color: 'yellow'}, 1500, function() {
				flipEffect("#struct2", "union", function() {
					var text = "In union we use the keyword <span class='ct-code-b-yellow'>union</span>" 
								+ " for declaration and definition purpose.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'circle();'>Next &#8594;</a>");
					});
				});
			});
		});
	});
}

function circle() {
	$('.nextButton').remove();
	$("#four").addClass('circle');
	var text = "In <span class='ct-code-b-yellow'>unions</span> the memory slot is created developing on the size of the highest" 
				+ " range datatype. So, here <span class='ct-code-b-yellow'>4 bytes</span> will be allocated for the union variable.";
	typing(".introjs-tooltiptext", text, function() {
		$('.introjs-nextbutton').show();
	});
}

function showingMemoryOfb() {
	$('.nextButton').remove();
	$('.introjs-nextbutton').hide();
	$("#tabletd1, #tabletd2, #tabletd3, #tabletd4").addClass('add-color');
	$("#tabletd1, #tabletd2, #tabletd3, #tabletd4").effect("highlight",{color: 'pink'}, 1500, function() {
		$("#btext").show(2000);
		$("#arrowMark1").show();
		TweenMax.to("#arrowMark1", 1, {attr:{x2: "23.9%", y2: "47%" }});
		$("#arrowMark2").show();
		TweenMax.to("#arrowMark2", 1, {attr:{x2: "91.9%", y2: "47%" }, onComplete:function() {
			var text = "We can access one of the member b in union as <span class='ct-code-b-yellow'>st.b</span>.";
			typing(".introjs-tooltiptext", text, function() {
				$('.nextButton').remove();
				$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'showingMemoryOfa();'>Next &#8594;</a>");
			});
		}});
	});
}

function showingMemoryOfa() {
	$('.nextButton').remove();
	$("#tabletd1, #tabletd2, #tabletd3, #tabletd4").removeClass('add-color');
	$("#tabletd3, #tabletd4").addClass('add-color');
	$("#tabletd3, #tabletd4").effect("highlight",{color: 'pink'}, 1500, function() {
		$("#atext").show(2000);
		$("#arrowMark3").show();
		TweenMax.to("#arrowMark3", 1, {attr:{x2: "91.9%", y2: "55%" }});
		$("#arrowMark4").show();
		TweenMax.to("#arrowMark4", 1, {attr:{x2: "58.9%", y2: "55%" }, onComplete:function() {
			var text = "The same memory can be split to use the member <span class='ct-code-b-yellow'>a</span>, here a is " 
						+ "int type and it requires only <span class='ct-code-b-yellow'>2 bytes</span><br>" 
						+ "When user accessing st.a,st.b and st.c are not available.";
			typing(".introjs-tooltiptext", text, function() {
				$('.nextButton').remove();
				$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'showingMemoryOfc();'>Next &#8594;</a>");
			});
		}});
	});
}

function showingMemoryOfc() {
	$('.nextButton').remove();
	$('.introjs-nextbutton').hide();
	$("#tabletd3, #tabletd4").removeClass('add-color');
	$("#tabletd4").addClass('add-color');
	$("#tabletd4").effect("highlight",{color: 'pink'}, 1500, function() {
		$("#ctext").show(2000);
		$("#arrowMark5").show();
		TweenMax.to("#arrowMark5", 1, {attr:{x2: "91.9%", y2: "65%" }});
		$("#arrowMark6").show();
		TweenMax.to("#arrowMark6", 1, {attr:{x2: "75.9%", y2: "65%" }, onComplete:function() {
			var text = "The same memory can be split to use the member <span class='ct-code-b-yellow'>c</span>," 
						+ " here a is char type and it requires only <span class='ct-code-b-yellow'>1 byte</span><br>" 
						+ "When user accessing st.c,st.b and st.a are not available.";
			typing(".introjs-tooltiptext", text, function() {
				$("#tabletd4").removeClass('add-color');
				$('.introjs-nextbutton').show();
			});
		}});
	});
}