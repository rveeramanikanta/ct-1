/**
 * 
 */


var initializationOfOneDimensionalArraysReady = function() {
	introGuide();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
}


function introGuide() {
	introjs = introJs();
	
	$("#restart").click(function() {
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
			element : '#exampleDiv1',
			intro : '',
			tooltipClass : 'hide',
			position : 'right',
		}, {
			element : '#exampleDiv2',
			intro : '',
			tooltipClass : 'hide',
			position : 'right',
		}, {
			element : '#exampleDiv3',
			intro : '',
			tooltipClass : 'hide',
			position : 'bottom',
		}, {
			element : '#exampleDiv4',
			intro : '',
			tooltipClass : 'hide',
			position : 'bottom',
		}, {
			element : '#exampleDiv5',
			intro : '',
			tooltipClass : 'hide',
			position : 'bottom',
		}, {
			element : '#preCode',
			intro : '',
			tooltipClass : 'hide',
			position : 'top',
		}, {
			element :"#restart",
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		
		switch (elementId) {
		case 'exampleDiv1':
			$("#exampleDiv1").addClass("opacity00");
			$("#firstExample").css("opacity", "0");
			$("#element1, #element2, #element3, #element4").css("opacity", "0");
			$("#smallBox1").addClass("visibility-hidden");
			$(".smallBox1").css("border-color", "white");
			$("#value1, #value2, #value3, #value4").addClass("opacity00");
			$("#address1").addClass("opacity00").removeClass("animated zoomIn");
			$("#exampleDiv2").addClass("opacity00");
			break;
		case 'exampleDiv2':
			$("#exampleDiv2").addClass("opacity00");
			$("#secondExample").css("opacity", "0");
			$("#element5, #element6, #element7, #element8, #element9").css("opacity", "0");
			$("#smallBox2").addClass("visibility-hidden");
			$(".smallBox2").css("border-color", "white");
			$("#valueId1, #valueId2, #valueId3, #valueId4, #valueId5").addClass("opacity00");
			$("#address2").addClass("opacity00").removeClass("animated zoomIn");
			$("#exampleDiv3").addClass("opacity00");
			break;
		case 'exampleDiv3':
			$("#exampleDiv3").addClass("opacity00");
			$("#thirdExample").css("opacity", "0");
			$("#element10, #element11").css("opacity", "0");
			$("#smallBox3").addClass("visibility-hidden");
			$(".smallBox3").css("border-color", "white");
			$("#valueIds1, #valueIds2").addClass("opacity00");
			$("#address3").addClass("opacity00").removeClass("animated zoomIn");
			$("#exampleDiv4").addClass("opacity00");
			break;
		case 'exampleDiv4':
			$("#exampleDiv4").addClass("opacity00");
			$("#fourthExample").css("opacity", "0");
			$("#element12, #element13, #element14").css("opacity", "0");
			$("#smallBox4").addClass("visibility-hidden");
			$(".smallBox4").css("border-color", "white");
			$("#valuesId1, #valuesId2, #valuesId3").addClass("opacity00");
			$("#address4").addClass("opacity00").removeClass("animated zoomIn");
			$("#exampleDiv5").addClass("opacity00");
			break;
		case 'exampleDiv5':
			$("#exampleDiv5").addClass("opacity00");
			$("#fifthExample").css("opacity", "0");
			for (var i = 0; i < 10; i++) {
				$("#elementVal" + i).css("opacity", "0");
			}
			$("#smallBox5").addClass("visibility-hidden");
			$(".smallBox5").css("border-color", "white");
			$(".lastValues").css("opacity", "0");
			$("#address5").addClass("opacity00").removeClass("animated zoomIn");
			$("#exampleDiv6").addClass("opacity00");
			$("#preCode, #preLineArrayCode").addClass("opacity00");
			$(" #preLine1, #preLine2, #preLine3").css("opacity", "0");
			break;
		case 'preCode':
				$("#preCode, #preLineArrayCode").addClass("opacity00");
				$("#exampleDiv6").addClass("opacity00");
				$(" #preLine1, #preLine2, #preLine3").css("opacity", "0");
				$("#elementSixth1, #elementSixth2, #elementSixth3").css("opacity", "0");
				$("#smallBox6").addClass("visibility-hidden");
				$(".smallBox6").css("border-color", "white");
				$("#valuesLineId1, #valuesLineId2, #valuesLineId3").addClass("opacity00");
				$("#address6").addClass("opacity00").removeClass("animated zoomIn");
			break;
		}
	})
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		
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
		case 'exampleDiv1':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#exampleDiv1").removeClass("opacity00");
				TweenMax.to($("#firstExample"), 1, {opacity: 1, onComplete:function() {
					$(".introjs-tooltip").removeClass('hide');
					var text = "<ul><li id='firstSpan'>Let us consider an example of an array declaration. <br>Here you will notice that an array "+
					"<span class='ct-code-b-yellow'>arr</span> of type <span class='ct-code-b-yellow'>int</span> with size "+
					"<span class='ct-code-b-yellow'>4</span> is declared.</li><li id='firstSpan1'>"+
					"The array <span class='ct-code-b-yellow'>arr</span> is initialized with the integer constants <span class='ct-code-b-yellow'>10"+
					"</span>, <span class='ct-code-b-yellow'>20</span>, <span class='ct-code-b-yellow'>30</span>, <span class='ct-code-b-yellow'>40"+
					"</span> enclosed with in braces.</li></ul>";
					typing('.introjs-tooltiptext', text, function() {
						nextButtonFucntion(function() {
							$("#smallBox1").removeClass("visibility-hidden");
							$("#arraySize1").effect( "highlight", {color:"dodgerblue"}, 500, function() {
								$(".smallBox1").addClass("animated-border").one('animationend', function() {
									$(".smallBox1").removeClass("animated-border").off();
									$(".smallBox1").css("border-color", "dodgerblue");
									$("#firstSpan1").after("<li id='firstSpan2'>Since an array always stores elements in a sequential manner "+
										"the memory location of the second element will be adjacent to the memory location of the first element.</li>");
									typing('#firstSpan2', $("#firstSpan2").html(), function() {
										nextButtonFucntion(function() {
											zooming("#address1", function() {
												$("#firstSpan2").after("<li id='firstSpan3'>Since we are declaring an array of type "+
												"<span class='ct-code-b-yellow'>int</span> "+
												"and <span class='ct-code-b-yellow'>int</span> occupies <span class='ct-color-lime'>2 bytes</span>"+
												" in memory you will notice that the memory addresses of all the elements very sequentially with "+
												"<span class='ct-code-b-yellow'>2</span> as the difference "+
												"starting with <span class='ct-code-b-yellow'>1023</span>.</li>");	
												typing('#firstSpan3', $("#firstSpan3").html(), function() {
													nextButtonFucntion(function() {
														firstExampleElementRecursion(1);
													});
												});
											});
										});
									});
								});
							});
						});
					});
				}}); 
			}); 
			break;
		case 'exampleDiv2':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#exampleDiv2").removeClass("opacity00");
				TweenMax.to($("#secondExample"), 1, {opacity: 1, onComplete:function() {
					$(".introjs-tooltip").removeClass('hide');
					typing('.introjs-tooltiptext', "<ul><li id='secondSpan1'>Now let us consider an example where we are declaring an array of a larger size but "+
							"initializing with fewer values.</li></ul>", function() {
						nextButtonFucntion(function() {
							$("#arraySize2").effect( "highlight", {color:"dodgerblue"}, 1000, function() {
								$("#smallBox2").removeClass("visibility-hidden");
								$(".smallBox2").addClass("animated-border").one('animationend', function() {
									$(".smallBox2").removeClass("animated-border").off();
									$(".smallBox2").css("border-color", "dodgerblue");
									zooming("#address2", function() {
										secondExampleElementRecursion(5);
									});
								});
							});
						});
					});
				}});
			});
			break;
		case 'exampleDiv3':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#exampleDiv3").removeClass("opacity00");
				$("#thirdExample").removeClass("opacity00");
				TweenMax.to($("#thirdExample"), 1, {opacity: 1, onComplete:function() {
					$(".introjs-tooltip").removeClass('hide');
					typing('.introjs-tooltiptext', "<ul><li id='thirdSpan1'>In this example you will notice we are declaring an array of size "+
							"2 and are attempting to initialize it with 5 elements.</li></ul>", function() {
						nextButtonFucntion(function() {
							$("#arraySize3").effect( "highlight", {color:"dodgerblue"}, 1000, function() {
								$("#smallBox3").removeClass("visibility-hidden");
								$(".smallBox3").addClass("animated-border").one('animationend', function() {
									$(".smallBox3").removeClass("animated-border").off();
									$(".smallBox3").css("border-color", "dodgerblue");
									zooming("#address3", function() {
										thirdExampleElementRecursion(10);
									});
								});
							});
						});
					});
				}});
			});
			break;
		case 'exampleDiv4':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#exampleDiv4").removeClass("opacity00");
				TweenMax.to($("#fourthExample"), 1, {opacity: 1, onComplete:function() {
					$(".introjs-tooltip").removeClass('hide');
					typing('.introjs-tooltiptext', "<ul><li id='fourthSpan1'>array can also be declared without specifying the size in the "+
							"declaration statement as shown above.</li></ul>", function() {
						nextButtonFucntion(function() {
							$("#fourthSpan1").after("<li id='fourthSpan2'>If the size of an array is not mentioned during initialization, "+
								"the compiler considers the number of"+
								" values assigned as the <span class='ct-code-b-yellow'>size of the array</span>.</li>");
							typing("#fourthSpan2", $("#fourthSpan2").html(), function() {
								nextButtonFucntion(function() {
									$("#inputCount").effect("highlight", {color:"#FF9900"}, 1000, function() {
										$("#arraySize4").effect("highlight", {color:"dodgerblue"}, 1000, function() {
											$("#smallBox4").removeClass("visibility-hidden");
											$(".smallBox4").addClass("animated-border").one('animationend', function() {
												$(".smallBox4").removeClass("animated-border").off();
												$(".smallBox4").css("border-color", "dodgerblue");
												zooming("#address4", function() {
													fourthExampleElementRecursion(12);
												});
											});
										});
									});
								});
							});
						});
					});
				}});
			});
			break;
		case 'exampleDiv5':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#exampleDiv5").removeClass("opacity00");
				TweenMax.to($("#fifthExample"), 1, {opacity: 1, onComplete:function() {
						$(".introjs-tooltip").removeClass('hide');
					typing('.introjs-tooltiptext', "Here you will notice we are declaring an array <span class='ct-code-b-yellow'>arr[10]</span> "+
							"without any elements be initialized. In such a situation all the slots are filled with "+
							"<span class='ct-code-b-yellow'>0's</span>.", function() {
						nextButtonFucntion(function() {
							$("#arraySize5").effect( "highlight", {color:"dodgerblue"}, 1000, function() {
								$("#smallBox5").removeClass("visibility-hidden");
								$(".smallBox5").addClass("animated-border").one('animationend', function() {
									$(".smallBox5").removeClass("animated-border").off();
									$(".smallBox5").css("border-color", "dodgerblue");
									zooming("#address5", function() {
										elementRecursion(0);
									});
								});
							});
						});
					});
				}});
			});
			break;
		case 'preCode':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#preLineArrayCode, #preCode").removeClass("opacity00");
				$(".introjs-tooltip").removeClass('hide');
				var text = "Here you will notice an example of array declaration without initialization. Where the arrays elements are assigned at "+
					"later stage."
				typing($(".introjs-tooltiptext"), text, function() {
					nextButtonFucntion(function() {
						$("#exampleDiv6").addClass("z-index9999999");
						$("#exampleDiv6").removeClass("opacity00");
						$("#preLineArrayCode").effect( "transfer", { to: $("#smallBox6"), className: "ui-effects-transfer" }, 1500 , function() {
							$("#smallBox6").removeClass("visibility-hidden");
							$(".smallBox6").addClass("animated-border").one('animationend', function() {
								$(".smallBox6").removeClass("animated-border").off();
								$(".smallBox6").css("border-color", "dodgerblue");
								zooming("#address6", function() {
									sixthExampleElementRecursion(1);
								});
							});
						});
					});
				});
			});
			break;
		case 'exampleDiv6':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStep':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#preLineArrayCode").addClass("z-index9999999");
					$("#exampleDiv6").removeClass("opacity00");
					$("#preLineArrayCode").effect( "transfer", { to: $("#smallBox6"), className: "ui-effects-transfer" }, 1500 , function() {
						$("#smallBox6").removeClass("visibility-hidden");
						$(".smallBox6").addClass("animated-border").one('animationend', function() {
							$(".smallBox6").removeClass("animated-border").off();
							$(".smallBox6").css("border-color", "dodgerblue");
							zooming("#address6", function() {
								sixthExampleElementRecursion(1);
							});
						});
					});
				});
				break;
			case 'secondStep':
				$('.introjs-helperLayer').one('transitionend', function() {
					valuesAnimationLaterDeclaration(1);
				});
				break;
			}
			break;
		case "restart":
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$("#exampleDiv6").removeClass("z-index9999999");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	introjs.start();
}

function preCodeLineAnimation(i) {
	TweenMax.to($("#preLine" + i), 0.5, {opacity: 1, onComplete: function() {
		$("#preLine" + i).effect( "highlight", {color:"dodgerblue"}, 500, function() {
			if (i < 3) {
				preCodeLineAnimation(++i);
			} else {
				var text = "These assignment statements individually assign the values in their respective indices.";
				typing($(".introjs-tooltiptext"), text, function() {
					nextButtonFucntion(function() {
						valuesAnimationLaterDeclaration(1);
					});
				});
			}
		});
	}});
}

function valuesAnimationLaterDeclaration(i) {
	var l3 = $("#lineValue" + i).offset();
	var l4 = $("#valuesLineId" + i).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left-l4.left;
	$("#lineValue" + i).addClass("css-circle").effect( "highlight", {color:"blue"}, 500, function() {
		$("#lineValue" + i).removeClass("css-circle");
		$("#valuesLineId" + i).removeClass("opacity00");
		TweenMax.from("#valuesLineId" + i, 0.7, {top: topLength, left: leftLength, onComplete: function() {
			if (i < 3) {
				valuesAnimationLaterDeclaration(++i);
			} else {
				$('.introjs-nextbutton, .introjs-prevbutton').show();
			}
		}});
	});
}

function firstExampleElementRecursion(i) {
	TweenMax.to($("#element" + i), 0.2, {opacity: 1, onComplete: function() {
		if (i < 4) {
			firstExampleElementRecursion(++i);
		} else {
			firstAnimation(1);
		}
	}});
}

function secondExampleElementRecursion(i) {
	TweenMax.to($("#element" + i), 0.2, {opacity: 1, onComplete: function() {
		if (i < 9) {
			secondExampleElementRecursion(++i);
		} else {
			secondAnimation(1);
		}
	}});
}

function thirdExampleElementRecursion(i) {
	TweenMax.to($("#element" + i), 0.2, {opacity: 1, onComplete: function() {
		if (i < 11) {
			thirdExampleElementRecursion(++i);
		} else {
			thirdAnimation(1);
		}
	}});
}

function fourthExampleElementRecursion(i) {
	TweenMax.to($("#element" + i), 0.2, {opacity: 1, onComplete: function() {
		if (i < 14) {
			fourthExampleElementRecursion(++i);
		} else {
			fourthAnimation(1);
		}
	}});
}

function sixthExampleElementRecursion(i) {
	TweenMax.to($("#elementSixth" + i), 0.2, {opacity: 1, onComplete: function() {
		if (i < 3) {
			sixthExampleElementRecursion(++i);
		} else {
			$("#preLineArrayCode").removeClass("z-index9999999");
			nextButtonFucntion(function() {
				preCodeLineAnimation(1);
			});
		}
	}});
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 0.1;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	})
}

function zooming(selector, callBackFunction) {
	$(selector).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(selector).off();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}	
	});
}

function firstAnimation(i) {
	var l3 = $("#input" + i).offset();
	var l4 = $("#value" + i).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left-l4.left;
	$("#input" + i).effect("highlight", {color:"#F08080"}, 600, function() {
		$("#value" + i).removeClass("opacity00");
		TweenMax.from("#value" + i, 0.5, {top: topLength, left: leftLength, onComplete: function() {
			if (i < $("#arraySize1").text()) {
				firstAnimation(++i);
			} else {
				$("#firstSpan3").after("<span  id='firstSpan4'><li>The values of an elements are scanned from left to right and are assigned to "+
				"<span class='ct-code-b-yellow'>arr[0]</span>, <span class='ct-code-b-yellow'>arr[1]</span>, "+
				"and so on.</li> <li>Please note that the array indexes starts with <span class='ct-code-b-yellow'>0</span> and ends the last index "+
				"value is <span class='ct-code-b-yellow'>arrays total length-1</span>.</li></span>");
				typing('#firstSpan4', $("#firstSpan4").html(), function() {
					$('.introjs-nextbutton').show();
				});
			}
		}});
	});
} 

function secondAnimation(i) {
	var l3 = $("#inputValue" + i).offset();
	var l4 = $("#valueId" + i).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left-l4.left;
	$("#inputValue" + i).effect("highlight", {color:"#F08080"}, 500, function() {
		$("#valueId" + i).removeClass("opacity00");
		TweenMax.from("#valueId" + i, 0.5, {top: topLength, left: leftLength, onComplete: function() {
			if (i < 3) {
				secondAnimation(++i);
			} else{
				$("#secondSpan1").after("<li id='secondSpan2'>Here you will notice that since only 3 values are provided even though array size is 5 only first three "+
				"slots are filled with the given three values and the remaining slots will be filled with <span class='ct-code-b-yellow'>0's</span>.</li>");
				typing('#secondSpan2', $("#secondSpan2").html(), function() {
					nextButtonFucntion(function() {
						$("#valueId4").removeClass("opacity00").effect("highlight", {color:"#00FF00"}, 500, function() {
							$("#valueId5").removeClass("opacity00").effect("highlight", {color:"#00FF00"}, 500, function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					});
				});
			}
		}});
	});
}

function thirdAnimation(i) {
	var l3 = $("#inValue" + i).offset();
	var l4 = $("#valueIds" + i).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left-l4.left;
	$("#inValue" + i).effect("highlight", {color:"#F08080"}, 500, function() {
		$("#valueIds" + i).removeClass("opacity00");
		TweenMax.from("#valueIds" + i, 0.5, {top: topLength, left: leftLength, onComplete: function() {
			if (i < 2) {
				thirdAnimation(++i);
			} else {
				$("#thirdSpan1").append("<li id='thirdSpan2'>Here you will notice that since the array size is only 2 and all the remaining "+
						"three elements will be discarded.</li>");
				typing('#thirdSpan2', $("#thirdSpan2").html(), function() {
					nextButtonFucntion(function() {
						$("#inValue3").effect( "highlight", {color:"red"}, 1000, function() {
							$("#inValue4").effect( "highlight", {color:"red"}, 1000, function() {
								$("#inValue5").effect( "highlight", {color:"red"}, 1000, function() {
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								});
							});
						});
					});
				});
			}
		}});
	});
}

function fourthAnimation(i) {
	var l3 = $("#inputVal" + i).offset();
	var l4 = $("#valuesId" + i).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left-l4.left;
	$("#inputVal" + i).effect("highlight", {color:"#F08080"}, 500, function() {
		$("#valuesId" + i).removeClass("opacity00");
		TweenMax.from("#valuesId" + i, 0.5, {top: topLength, left: leftLength, onComplete: function() {
			if (i < 3) {
				fourthAnimation(++i);
			} else {
				$('.introjs-nextbutton, .introjs-prevbutton').show();
			}
		}});
	});
}

function elementRecursion(i) {
	TweenMax.to($("#elementVal" + i), 0.2, {opacity: 1, onComplete: function() {
		if (i < 9) {
			elementRecursion(++i);
		} else {
			$(".lastValues").css("opacity", "1");
			TweenMax.staggerFrom(".lastValues", 1, {opacity:1, top:-95, onComplete: function() {
				$('.introjs-nextbutton, .introjs-prevbutton').show();
				$("#preCode").removeClass("opacity00");
			}});
		}
	}});
}

function nextButtonFucntion(callBackFunction) {
	$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
	$(".user-btn").click(function() {
		$(".user-btn").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}
