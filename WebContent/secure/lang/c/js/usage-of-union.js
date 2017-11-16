var j = 1, typingInterval = 1;
var intro, temp, animation2Html;
var usageOfUnion = function() {
	$(".line").hide();
	$(".text-class").hide();
	$(document).keydown(function(objEvent) {	
	    if (objEvent.keyCode == 9) {  //tab pressed
	        objEvent.preventDefault(); // stops its action
	    }
	});
	$("#restart").click(function() {
		location.reload(); 
	});
		intro = introJs();
		intro.setOptions({
			showStepNumbers: false,
			exitOnOverlayClick: false,
			showBullets: false,
			exitOnEsc: false,
			keyboardNavigation: false,
			steps : [{
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
				tooltipClass:"hide",
				position:"right"
			},{
				element : "#codeDiv",
				intro : "",
				tooltipClass:"hide",
				position:"left"
			},{
				element : "#memoryallocation1",
				intro : "",
				tooltipClass:"hide",
				position:"right"
			},{
				element : "#informationDiv",
				tooltipClass:"hide"
			},{
				element : "#codeDiv1",
				intro : "",
				tooltipClass:"hide",
				position:"right"
			},{
				element : "#union",
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
				position:"right",
				tooltipClass:"hide"
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
				position:"right",
				tooltipClass:"hide"
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
				position:"right",
				tooltipClass:"hide"
			},{
				element : "#outputDiv",
				tooltipClass:"hide"
			},{
				element : "#restart",
				intro : "",
				tooltipClass: "introjs-tooltip-min-width-custom",
				position:"right"
			}
			]});
		intro.onbeforechange(function(targetElement) {
			var elementId = targetElement.id;
			switch (elementId) {
			case "codeDiv":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				if (intro._currentStep == 3) {
					$('#struct1, #struct2').text('struct').removeClass('ct-code-b-green');
					if (intro._direction == "backward") {
						$('#memoryallocation1').empty().append(temp);
					}
				} else {
					if (intro._direction == "backward") {
							$('.arrow-div').remove();
							$('[id*=byte]').addClass('opacity00');
					}
				}
			break;
			case "definition":
				$("#table1, #memoryallocation1").addClass("opacity00");
				break;
			case "memoryallocation1":
					if (intro._currentStep == 4) {
						$('#memoryallocation1').empty().append(temp);
						if (intro._direction == "backward") {
							$("#mainDiv").show();
							$("#informationDiv").addClass("visibility-hidden");
						}
					} else {
						$('#struct1, #struct2').text('struct').removeClass('ct-code-b-green');
						$("#table1, #memoryallocation1").addClass("opacity00");
					}
				break;
			case "variable":
				$("#e, #ememory").addClass("opacity00");
				break;
			case "animationDiv":
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
						case "animation1" :
							$("#e, #ememory").addClass("opacity00");
							break;
						case "animation2":
							$('#animationDiv').empty().append(animation2Html);
							$("#data5").text($("#res1").text());
							break;
						case "animation3" :
							$('#animationDiv').empty().append(animation2Html);
							$("#data6").text($("#res2").text());
							break;
						case "animation4":
							$('#animationDiv').empty().append(animation2Html);
							$("#data4").text($("#res3").text()).addClass('opacity00');
							break;
						}
					break;
			case "noValue":
			case "priceValue":
			case "sValue":
				$('#animationDiv').empty().append(animation2Html);
				break;
			}
		});	
		
		intro.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton, .introjs-bullets').hide();
		
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
		var elementId = targetElement.id;
		switch (elementId) {
		case "codeDiv":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			if (intro._currentStep == 3) {
				$(".introjs-helperLayer ").one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					var text = "<span class='ct-code-b-yellow'>Unions</span> are used to efficiently use memory." 
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'flipToUnion()'>Next &#8594;</a>");
					});
				});
			} else {
				intro._introItems[intro._currentStep]["isCompleted"] = false;
				var text = "This is the declaration of a user defined datatype" 
					+ " <span class='ct-code-b-yellow'>student</span>.";
				$('.introjs-tooltip').removeClass('hide');
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'arrows()'>Next &#8594;</a>");
				});
			}
		break;
		case "definition":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "We have define a structure variable <span class='ct-code-b-yellow'>st</span>"
							+" of datatype student.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "memoryallocation1":
			$("#four").removeClass('circle');
			$(".introjs-helperLayer ").one('transitionend', function() {
				if (intro._currentStep == 4) {
					$("#table1").effect("highlight",{color: 'yellow'}, 1500, function() {
						flipTable(function() {
							$('.introjs-tooltip').removeClass('hide');
							var text = "Here, <span class='ct-code-b-yellow'>4 bytes</span> of memory is allocated for"
										+" <span class='ct-code-b-yellow'>st</span>.";
							typing(".introjs-tooltiptext", text, function() {
								$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' " 
										+ "onclick ='showingMemoryOfb()'>Next &#8594;</a>");
							})
						});
					});
				} else {
					$("#memoryallocation1").removeClass("opacity00");
					$("#table1").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#table1").removeClass('animated zoomIn');
						$('.introjs-tooltip').removeClass('hide');
						temp = $('#memoryallocation1').html();
						var text = "In <span class='ct-code-b-yellow'>structures</span>, each member of the "
									+ " <span class='ct-code-b-yellow'>structure</span> can be accessed at any point of time, as memory "
									+ " is allocated to each and every member of the <span class='ct-code-b-yellow'>structure</span>.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				}
			});
			break;
		case "informationDiv":
			$("#mainDiv").hide();
			intro.refresh();
			$(".introjs-helperLayer ").one('transitionend', function() {
				if (intro._direction == "backward") {
					$("#codeDiv1, #outputDiv").addClass("opacity00");
					$("#mainDiv").show();
					intro.refresh();
					$('#li1, #li2, #li3, #informationDiv').removeAttr('style');
					$("#informationDiv").addClass("visibility-hidden");
					setTimeout(function() {
						intro.refresh();
						intro.previousStep();
					},400);
				} else {
					$("#informationDiv").removeClass("visibility-hidden");
					$('.introjs-nextbutton, .introjs-prevbutton').hide();
					$("#li1").fadeTo(1000, 1, function() {
						$("#informationDiv").css({"z-index": "999999999"});
						$("#table").removeClass("opacity00");
						$("#li2").fadeTo(1000, 1, function() {
							$("#li3").fadeTo(1000, 1, function() {
								intro.nextStep();
							});
						});
					});	
				}
			}); 
			break;
		case "codeDiv1":
			$(".introjs-helperLayer ").one('transitionend', function() {
				$("#codeDiv1").removeClass("opacity00").hide().fadeIn(1500, function() {
					$("#outputDiv").removeClass('opacity00');
					$('.introjs-tooltip').removeClass('hide');
					var text = "Let us consider an example.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			});
			break;
		case "union":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "A user defined datatype <span class='ct-code-b-yellow'>emp</span>"
							+" is declared with <span class='ct-code-b-yellow'>3</span> members."; 
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "variable":
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "Let us define a <span class='ct-code-b-yellow'>union</span> variable <span class='ct-code-b-yellow'>e</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "animationDiv":
			$(".introjs-helperLayer ").one('transitionend', function() {
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case "animation1" :
						$("#e, #ememory").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass('animated zoomIn');
							animation2Html = $('#animationDiv').html();
							var text = "Here, the <span class='ct-code-b-yellow'>union</span> member with <span class='ct-code-b-yellow'>largest datatype </span> is "
								+ " <span class='ct-code-b-yellow'>price</span>, of type <span class='ct-code-b-yellow'>"
								+ "float</span> which occupies <span class='ct-code-b-yellow'>4 bytes</span> in"
								+ " memory.<br><br>The <span class='ct-code-b-yellow'>union</span> variable "
								+ "<span class='ct-code-b-yellow'>e</span> has <span class='ct-code-b-yellow'>4 bytes"
								+ "</span> of memory allocated.";
							$(".introjs-tooltip").removeClass("hide");
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
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
										$("#data5").removeClass("animated zoomIn");
										var text = "Here, the int value <span class='ct-code-b-yellow'>99</span> will be stored" 
													+ " in  <span class='ct-code-b-yellow'>2 bytes</span> in memory.<br><br> Reading the variable"
													+ " <span class='ct-code-b-yellow'>e.no</span> returns the "
													+ " correct value <span class='ct-code-b-yellow'>99</span>.";
										$(".introjs-tooltip").removeClass("hide");
										typing(".introjs-tooltiptext", text, function() {
											$('.introjs-nextbutton, .introjs-prevbutton').show();
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
										var text = "Here, the <span class='ct-code-b-yellow'>float</span> value "
												+ "<span class='ct-code-b-yellow'>5.5</span> will be stored " 
												+ "in <span class='ct-code-b-yellow'>4 bytes</span> in memory. <br><br> Reading the variable " 
												+ " <span class='ct-code-b-yellow'>e.price</span> returns the correct value.<br/><br/>"
												+ " Reading the previously stored <span class='ct-code-b-yellow'>e.no</span> will"
												+ " return a corrupt value as the <span class='ct-code-b-yellow'>float</span> value"
												+ " has over written the <span class='ct-code-b-yellow'>int</span> value.";
										$(".introjs-tooltip").removeClass("hide");
										typing(".introjs-tooltiptext", text, function() {
											$("#data5").removeClass("animated zoomIn");
											$('.introjs-nextbutton, .introjs-prevbutton').show();
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
										var text = "Here, the <span class='ct-code-b-yellow'>char</span> value "
												+ "<span class='ct-code-b-yellow'>A</span> will be stored in " 
												+ "<span class='ct-code-b-yellow'>1 byte</span> in memory.<br><br> Reading the variable "
												+ " <span class='ct-code-b-yellow'>e.s</span> returns the correct value.<br/><br/>"
												+ " Reading the previously stored <span class='ct-code-b-yellow'>e.no or e.price</span>"
												+ " will return a corrupt value as the <span class='ct-code-b-yellow'>char</span>"
												+ " value has over written the <span class='ct-code-b-yellow'>float</span> value.";
										$(".introjs-tooltip").removeClass("hide");
										typing(".introjs-tooltiptext", text, function() {
											$("#data5").removeClass("animated zoomIn");
											$('.introjs-nextbutton, .introjs-prevbutton').show();
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
				if (intro._direction == "forward") {
					$("#output" + j).text($("#res" + j).text());
					$("#output" + j).removeClass('print-result');
					j++;
					setTimeout(function() {
						intro.nextStep();
					}, 1000);
				} else {
					j--;
					setTimeout(function() {
						intro.previousStep();
					}, 1000);
					
				}
				
			});
			break;
		case "printno":
			$(".introjs-helperLayer ").one('transitionend', function() {
				if (intro._direction == "forward") {
					setTimeout(function() {
						$("#output").append('<span><span id="output1"></span><br></span>');
						intro.nextStep();
					}, 500);
				} else {
					$('#output1').parent().remove();
					setTimeout(function() {
						intro.previousStep();
					}, 500);
				}
				
			});
			break;
		case "printPirce":
			$(".introjs-helperLayer ").one('transitionend', function() {
				if (intro._direction == "forward") {
					setTimeout(function() {
						$("#output").append('<span><span id="output2"></span><br></span>');
						intro.nextStep();
					}, 500);
				} else {
					$('#output2').parent().remove();
					setTimeout(function() {
						intro.previousStep();
					}, 500);
				}
				
			});
			break;
		case "prints":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one('transitionend', function() {
				setTimeout(function() {
					$("#output").append('<span id="output3"></span>');
					intro.nextStep();
				}, 500);
			});
			break;
		case "noValue":
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "Here, <span class='ct-code-b-yellow'>int</span> value <span class='ct-code-b-yellow'>99</span> is assigned"
						+" to the variable <span class='ct-code-b-yellow'>no</span> of <span class='ct-code-b-yellow'>e</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$("#data5").text($("#res1").text());
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "priceValue":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				$("#data6").addClass("opacity00");
				$("#data5").hide();
				$("#data3, #data4").show();
				var text = "Here, <span class='ct-code-b-yellow'>float</span> value <span class='ct-code-b-yellow'>5.5</span> is"
						+" assigned to a variable <span class='ct-code-b-yellow'>price</span> of <span class='ct-code-b-yellow'>e</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$("#data6").text($("#res2").text());
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "sValue":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				$("#data6").hide();
				$("#data1, #data2, #data3, #data4").show();
				var text = "Here, <span class='ct-code-b-yellow'>char</span> value <span class='ct-code-b-yellow'>A</span> is"
					+" assigned to a variable <span class='ct-code-b-yellow'>s</span> of <span class='ct-code-b-yellow'>e</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$("#data4").text($("#res3").text()).addClass('opacity00');
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case "restart":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
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
			intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
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
	var text = "A total of <span class='ct-code-b-yellow'>7 bytes</span> will be allocated to the variable of struct "
				+"student <span class='ct-code-b-yellow'>st</span>.";
	typing(".introjs-tooltiptext", text, function() {
		$("#arrow1").append("<span class='arrow-div'><span class='fa fa-long-arrow-left fa-2x arrow-gray-css arrow-left'></span></span>");
		$("#byte1").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			$(this).removeClass('animated zoomIn');
			$("#arrow2").append("<span class='arrow-div'><span class='fa fa-long-arrow-left fa-2x arrow-gray-css arrow-left'></span></span>");
			$("#byte2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
				$(this).removeClass('animated zoomIn');
				$("#arrow3").append("<span class='arrow-div'><span class='fa fa-long-arrow-left fa-2x arrow-gray-css arrow-left'></span></span>");
				$("#byte3").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
					$(this).removeClass('animated zoomIn');
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
				$('#struct1').addClass('ct-code-b-green');
			$("#struct2").effect("highlight",{color: 'yellow'}, 1500, function() {
				flipEffect("#struct2", "union", function() {
					$('#struct2').addClass('ct-code-b-green');
					var text = "The keyword <span class='ct-code-b-yellow'>union</span> is used for "
								+ "declaration and definition of a <span class='ct-code-b-yellow'>union</span> datatype.";
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
	/***************/
	var text = "In <span class='ct-code-b-yellow'>unions</span>, the memory allocated to the "
				+" <span class='ct-code-b-yellow'>union</span> will be equal to the memory needed by the largest datatype member.";
	typing(".introjs-tooltiptext", text, function() {
		$('.introjs-nextbutton, .introjs-prevbutton').show();
	});
}

function showingMemoryOfb() {
	$('.nextButton').remove();
	$("#tabletd1, #tabletd2, #tabletd3, #tabletd4").addClass('add-color');
	$("#tabletd1, #tabletd2, #tabletd3, #tabletd4").effect("highlight",{color: 'pink'}, 1500, function() {
		$("#btext").show(2000);
		$("#arrowMark1").show();
		TweenMax.to("#arrowMark1", 1, {attr:{x2: "23.9%", y2: "47%" }});
		$("#arrowMark2").show();
		TweenMax.to("#arrowMark2", 1, {attr:{x2: "91.9%", y2: "47%" }, onComplete:function() {
			var text = "Any member of the <span class='ct-code-b-yellow'>union</span> can be accessed "
						+ "using the <span class='ct-code-b-yellow'>dot(.)</span> operator.<br><br> "
						+ "For example, <span class='ct-code-b-yellow'>tot</span> in union can be accessed"
						+ " as <span class='ct-code-b-yellow'>st.no</span>.";
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
			var text = " The same memory can be split and used by the member <span class='ct-code-b-yellow'>tot</span> of the "
						+ " <span class='ct-code-b-yellow'>union</span>.<br><br> Here, <span class='ct-code-b-yellow'>tot</span> is of type " 
						+ "<span class='ct-code-b-yellow'>int</span> and it requires <span class='ct-code-b-yellow'>2 bytes</span> of memory." 
			typing(".introjs-tooltiptext", text, function() {
				$('.nextButton').remove();
				$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'showingMemoryOfc();'>Next &#8594;</a>");
			});
		}});
	});
}

function showingMemoryOfc() {
	$('.nextButton').remove();
	$('.introjs-nextbutton, .introjs-prevbutton').hide();
	$("#tabletd3, #tabletd4").removeClass('add-color');
	$("#tabletd4").addClass('add-color');
	$("#tabletd4").effect("highlight",{color: 'pink'}, 1500, function() {
		$("#ctext").show(2000);
		$("#arrowMark5").show();
		TweenMax.to("#arrowMark5", 1, {attr:{x2: "91.9%", y2: "65%" }});
		$("#arrowMark6").show();
		TweenMax.to("#arrowMark6", 1, {attr:{x2: "75.9%", y2: "65%" }, onComplete:function() {
			var text = " The same memory can be split and used by the member <span class='ct-code-b-yellow'>s</span> of the"
						+ " <span class='ct-code-b-yellow'>union</span>.<br><br> Here, <span class='ct-code-b-yellow'>s</span> is of type " 
						+ "<span class='ct-code-b-yellow'>char</span> and it requires <span class='ct-code-b-yellow'>1 byte</span> of memory.";
			typing(".introjs-tooltiptext", text, function() {
				$("#tabletd4").removeClass('add-color');
				$('.introjs-nextbutton, .introjs-prevbutton').show();
			});
		}});
	});
}